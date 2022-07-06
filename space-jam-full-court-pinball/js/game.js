var delta, frame_delta;

//---------------------------
// PINBALL
//---------------------------

var oGAME;
var oTABLE;
var PHYSICS;
var TRAP;

var pl = planck, Vec2 = pl.Vec2;

var m_world;
var ball;
var P2M = (1/30) * (1/ 0.984);  //flash pixels to physics space
var M2P = 3;
var MODEL2PHYSICS = (1 / M2P);

var physics_queue;
var multiply_pending;
var mc_hud;
var last_multiply;
var has_multiply;
var skillshot_timeout;
var countdown_timeout;
var alert_timeout, msgs_timeout;

var last_tilt;
var tilt_down;
var tilt_timeout;
var has_tiltlock;
var mc_alert, mc_msg;

var last_hud_mouse_x = 0;
var last_hud_mouse_y = 0;
var mc_msg;




var Game = function(){

	var me = this;
	__game = this;

	var resize_updater, frame_updater;
	me.score = 0;
	me.balls_remaining = oCONFIG.balls;
	me.is_started = false;
	me.is_finished = false;

	me.balls_in_launch_zone = 0;

	me.mallet_hits = 0;

	me.physics_floor = null;

	me.double_point_bonus = false;

	me.physics_speed = 1.0;

	me.snack_pickups = [false,false,false];

	me.animation_frame = 0;
	me.actives = [];
	physics_queue = [];
	last_multiply = 0;
	last_tilt = 0;
	multiply_pending = false;
	has_multiply = false;
	has_tiltlock = false;
	tilt_down =false;

	//pinball stuff
	oGAME = new Object();
	oGAME.balls = [];
	oGAME.launching = false;
	oGAME.is_orientationchange = false;
	oGAME.active_balls = 0;
	oGAME.tube_count = 0;
	oGAME.is_landscape = oSTAGE.is_landscape;
	oGAME.shake_adj = 0;

	oGAME.tilts_remaining = 3;
	

	oTABLE = new Object();
	oTABLE.actives = [];
	oTABLE.lights = [];
	oTABLE.magnets = [];
	oTABLE.skillshots = [];
	oTABLE.magnet;
	oTABLE.trigger_groups = {};
	oTABLE.bonus_groups = {};
	oTABLE.items = {};
	oTABLE.helpers = {};



	//==================================================================
	//==================================================================
	// init
	//==================================================================
	//==================================================================


	//canvas
	var canvas = document.getElementById("canvas_game");
	canvas.renderer = canvas.renderer || new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	canvas.renderer.shadowMap.enabled = false;
	canvas.renderer.shadowMap.autoUpdate = false;
	canvas.renderer.autoClear = true;
	
	//resize
	this.doResizeUpdate = function(){
		me.camera.aspect = oSTAGE.wrapper_width / oSTAGE.wrapper_height;
		me.camera.updateProjectionMatrix();

		me.renderer.setSize(oSTAGE.wrapper_width, oSTAGE.wrapper_height);
		me.renderer.setPixelRatio(__utils.getPixelRatio());

		var wrapper_ratio = (oSTAGE.wrapper_width / oSTAGE.wrapper_height);
		var renderer_size = new THREE.Vector2();
		me.renderer.getSize(renderer_size);

		var renderer_ratio = renderer_size.width / renderer_size.height;

		//calculate for hud coordinate system
 		var vFOV = me.camera.fov * Math.PI / 180;        // convert vertical fov to radians
		var visible_height = 2 * Math.tan( vFOV / 2 ) * 1; // visible height
		var visible_width = visible_height * renderer_ratio;
		var width_pixel_ratio = visible_width / renderer_size.width;
		var height_pixel_ratio = visible_height / renderer_size.height;

		GUI.doResize();


		var fov = 2 * Math.atan( Math.max(me.focus_height, ( me.focus_width / renderer_ratio )) / ( 2 * me.cam_dist ) ) * ( 180 / Math.PI ); // in degrees
		me.camera.fov = fov;
		me.camera.updateProjectionMatrix();



		if(me.is_paused){
			me.renderer.render(me.scene, GAME.camera);
		}

	}


	//----------------------------
	// game events
	//---------------------------
	

	this.doNewGame = function(){
		trace("doNewGame()");

		me.is_playing = false;
		me.is_finished = false;

		TRAP = {captured_ball:null, can_trap:true, grace:0};

		PHYSICS = {};
		PHYSICS.queue = [];
		PHYSICS.items = [];

		//oCONFIG.physics_debug = false;
		if(oCONFIG.physics_debug){
			 //setup debug draw

			 var physivs_canvas = document.getElementById("physics_debug");
			 if(physivs_canvas){
					physivs_canvas.parentNode.removeChild(physivs_canvas);
			 }

			 planck.testbed(function(testbed) {
			     PHYSICS.world = pl.World(Vec2(0, 15));
		      		return PHYSICS.world;
			    });

			test_canvas = document.body.firstChild;
			if(test_canvas){
				test_canvas.id = "physics_debug";
				test_canvas.className = "physics_debug";
				test_canvas.style.backgroundColor = "rgba(0,0,0,0.8)";

			}


		}else{
			PHYSICS.world = pl.World(Vec2(0, 15));
		}


		PHYSICS.world.on('begin-contact', me.BeginContact);
		PHYSICS.world.on('end-contact', me.EndContact);
		PHYSICS.world.on('pre-solve', me.PreSolve);
		PHYSICS.world.on('post-solve', me.PostSolve);

		m_world = PHYSICS.world;
		physics_queue = PHYSICS.queue;


	GAME.score = 0;
	GAME.balls_remaining = oCONFIG.balls;

	me.is_started = false;
	me.is_finished = false;

	//launcher stuff
	me.balls_in_launch_zone = 0;
	me.launcher_active = false;
	me.launcher_speed = 0;
	me.last_launcher_y = 0;
	me.double_point_bonus = false;

	me.animation_frame = 0;
	me.actives = [];
	physics_queue = [];
	last_multiply = 0;
	last_tilt = 0;
	multiply_pending = false;
	has_multiply = false;
	has_tiltlock = false;
	tilt_down =false;


	//pinball stuff
	oGAME = new Object();
	oGAME.balls = [];
	oGAME.launching = false;
	oGAME.is_orientationchange = false;
	oGAME.active_balls = 0;
	oGAME.tube_count = 0;
	oGAME.is_landscape = oSTAGE.is_landscape;
	oGAME.shake_adj = 0;
	oGAME.tilts_remaining = 3;

	oTABLE = new Object();
	oTABLE.actives = [];
	oTABLE.lights = [];
	oTABLE.magnets = [];
	oTABLE.traps = [];
	oTABLE.skillshots = [];
	oTABLE.magnet;
	oTABLE.trigger_groups = {};
	oTABLE.bonus_groups = {};
	oTABLE.items = {};
	oTABLE.helpers = {};

		me.doNewLevel();	
	}

	this.doNewLevel = function(){
		me.is_started = false;
		me.is_finished = false;
		me.actives = [];
		me.doInitLevel();
	}

	this.doInit3d = function(){

		trace("doInit3d()");

		oASSETS.UnlitItemsMaterial = new THREE.MeshBasicMaterial({map: oASSETS.unlit_items, fog:false, side: THREE.FrontSide });
		oASSETS.LitItemsMaterial = new THREE.MeshBasicMaterial({map: oASSETS.lit_items, fog:false, side: THREE.FrontSide });

		//table
		var table = oASSETS.TableNode.clone();
		GAME.table = table;
		me.scene.add(table);
		table.scale.set(1,1,1);
		table.position.set(0, 0, 0);

		//logo
		var MovieLogoPlane = GAME.table.getObjectByName("MovieLogoPlane");
		MovieLogoPlane.material.map.wrapS = THREE.ClampToEdgeWrapping;
		MovieLogoPlane.material.map.wrapT = THREE.ClampToEdgeWrapping;
		MovieLogoPlane.material.map.anisotropy = GAME.renderer.capabilities.getMaxAnisotropy();
		MovieLogoPlane.material  = new THREE.MeshBasicMaterial({map: MovieLogoPlane.material.map, fog:false, side: THREE.FrontSide, transparent:true }); 


		GAME.Launcher = GAME.table.getObjectByName("accelerator_launch");

		var cloneTexture = GAME.Launcher.material.map.clone();
		cloneTexture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({map:cloneTexture });
		GAME.Launcher.material = material;

		GAME.Launcher.is_on = false;
		GAME.Launcher.doUpdate = function(){
			if(this.is_on){
				this.material.map.offset.y += 0.05;
			}
		}
		GAME.actives.push(GAME.Launcher);


		GAME.BasketExplode = GAME.table.getObjectByName("explode");
		GAME.BasketExplode.scale.set(1,1,1);
		GAME.BasketExplode.visible=false;
		var basket_pos = GAME.table.getObjectByName("basket_pos").position;
		GAME.BasketExplode.position.set(basket_pos.x, basket_pos.y, basket_pos.z);
		GAME.BasketExplode.material.transparent = true;
		GAME.BasketExplode.material.blending = THREE.AdditiveBlending;
		
		GAME.BasketExplode.doExplode = function(){
			var go = GAME.BasketExplode;
			go.visible=true;
			TweenLite.killTweensOf(go.scale);
			TweenLite.killTweensOf(go.material);
			TweenLite.set(go.scale, {x:0.2, y:0.2, z:0.2});
			TweenLite.set(go.material, {opacity: 1.0});
			TweenLite.to(go.scale, .75, {x:1.4, y:1.4, z:1.4, ease:Elastic.easeOut});
			TweenLite.to(go.material, .25, {opacity: 0.0, delay: 0.5, onComplete:go.doHide});
		}

		GAME.BasketExplode.doHide = function(){
			GAME.BasketExplode.visible=false;
		}



		/*
		//launcher arrow
		GAME.LauncherArrow = oASSETS.arrow.clone();
		GAME.LauncherArrow.scale.set(1,1,1);
		GAME.LauncherArrow.position.set(44,1,80);
		GAME.LauncherArrow.rotateX(__utils.radFromDeg(-40));
		table.add(GAME.LauncherArrow);
		GAME.LauncherArrow.doUpdate = function(){
			if(this.visible){
				this.rotateY(.1);
			}
		}
		GAME.actives.push(GAME.LauncherArrow);

		*/
		


	}



	this.doInitLevel = function(){
		trace("doInitLevel()");

		__snds.stopSound("music");
		music_playing = null;

		window.focus();
		me.is_playing = false;
		me.actives = [];

		//init 3d
		me.renderer = canvas.renderer;
		me.scene = new THREE.Scene();
		me.camera = new THREE.PerspectiveCamera(50, oSTAGE.screen_width / oSTAGE.screen_height, 0.1, 300);
		me.scene.add(me.camera);

		me.scene.background = oASSETS.GeneralBackground;
		me.doInit3d();

		//create physics table
		for(var i=0; i < oCONFIG.table.length; i++){

			var table_obj = oCONFIG.table[i];
			var table_layer = table_obj.layer;
			me.doGenerateTable(table_obj);

		}

		GAME.table.getObjectByName("physics_floor_2").visible=false;
		GAME.table.getObjectByName("physics_floor_4").visible=false;
		GAME.table.getObjectByName("physics_floor_8").visible=false;

		//init special characters
		me.MARVIN = new GameMarvin();
		me.TAZ = new GameTaz();
		me.LOLA = new GameLola();
		me.COYOTE =  new GameCoyote();
		me.BUGS =  new GameBugs();
		me.GOSSAMER = new GameGossamer();
		me.GRANNY = new GameGranny();
		me.DAFFY = new GameDaffy();
		me.TWEETY = new GameTweety();
		me.FOGHORN = new GameFoghorn();
		me.SAM = new GameSam();
		me.SPEEDY = new GameSpeedy();

		//texture quality
		character = GAME.table.getObjectByName("popup_coyote");
		character.material.map.anisotropy = GAME.renderer.capabilities.getMaxAnisotropy();
		oASSETS.LitItemsMaterial.map.anisotropy = GAME.renderer.capabilities.getMaxAnisotropy();
		oASSETS.UnlitItemsMaterial.map.anisotropy = GAME.renderer.capabilities.getMaxAnisotropy();

		//gui
		GUI = new GameGUI();
		GUI.doUpdateScore();
		GUI.doUpdateBalls();

		me.cam_target = new THREE.Vector3(23, 0, 48);
		me.cam_pos = new THREE.Vector3().copy(me.cam_target).add(new THREE.Vector3(0, 1, 1.15));

		GAME.camera.position.set(me.cam_pos.x, me.cam_pos.y, me.cam_pos.z);
		GAME.camera.lookAt (me.cam_target.x, me.cam_target.y, me.cam_target.z);
		GAME.camera.translateZ( 160 );


		me.cam_dist = GAME.camera.position.distanceTo(me.cam_target);
		me.focus_width = 52;
		me.focus_height = 80;

		
		//register resize updater
		me.doResizeUpdate();
		resize_updater = {doResizeUpdate : me.doResizeUpdate};
		update_queue.push(resize_updater);

		//registerframe updater
		frame_updater = {doUpdate : me.doFrameUpdate};
		actives.push(frame_updater);

		//render & reveal
		me.renderer.render(me.scene, me.camera);

		canvas.style.display = "block";

		me.doResizeUpdate();

		setTimeout(me.doGo, 1000);

	}



	this.doGo = function(){
		trace("doGo()");

		document.getElementById("canvas_screens").style.cursor = "";


		doPlayMusic("music_game_loop");

		CONTROLS.doShowPause();

		me.is_started = true;
		me.is_playing = true;
		me.is_finished = false;

		__input.click_pending = false;
		__input.release_pending = false;

		clock.start();
		frame_delta = 0;

		GAME.doNewBall();
		GUI.doFadeIn();
	}




	this.doQuit = function(){
		trace("doQuit()");

		__snds.stopSound("music");
		music_playing = null;

		me.doDestroy();

		me.is_playing = false;
		me.is_paused = false;
		me.is_finished = false;

		canvas.style.display = "none";
		createjs.Ticker.paused = false;
		CONTROLS.doHidePause();
		SCENE = new TitleScreen();
	}


	this.doGotoRecap = function(){
		trace("doGotoRecap()");

		__snds.stopSound("music");
		music_playing = null;

	    oUSER.best_score = Math.max(oUSER.best_score, me.score);
	    __localsaver.doSaveData("user", oUSER);
		
		me.doDestroy();

 if(oCONFIG.debug_quickstart){
		//quick play
		setTimeout(GAME.doNewGame, 2000);
	}else{

		SCENE = new RecapScreen({});
	}
	}


	this.doPause = function(){

		trace("doPause()");
		if(!me.is_playing){return;}
		if(!me.is_paused){
			me.is_paused = true;
			OVERLAY = new PauseMenu("canvas_overlay");

			//TweenLite.pauseAll(true, true, true); 
		}
	}


	this.doResume = function(){

		trace("doResume()");
		me.is_paused = false;
		resume_grace = 10;
		document.getElementById("canvas_screens").style.cursor = "";
		
		window.focus();
	}



	this.doWin = function(){
		trace("doWin()");

		__snds.playSound("end_music", "music");
		
		me.is_playing = false;
		me.is_paused = false;
		me.is_finished = true;
		me.has_won = true;
		
		CONTROLS.doHidePause();

	    GUI.doFadeOut();
		setTimeout(me.doGotoRecap, 1250);
		

	}

	this.doGameOver = function(){
		trace("doGameOver()");
		
		__snds.stopSound("music");
		music_playing = null;

		me.is_playing = false;
		me.is_paused = false;
		me.is_finished = false;

		CONTROLS.doHidePause();

	    GUI.doFadeOut();
		setTimeout(me.doGotoRecap, 1250);
	}


	this.doDestroy = function(){
		trace("--> doDestroy()");

		canvas.style.display = "none";

		me.forget = true;
		me.actives = [];
	    resize_updater.forget = true;
	    frame_updater.forget = true;
	    clock.stop();



	    me.MARVIN.doDestroy();
		me.TAZ.doDestroy();
		me.LOLA.doDestroy();
		me.COYOTE.doDestroy();
		me.BUGS.doDestroy();
		me.GOSSAMER.doDestroy();
		me.GRANNY.doDestroy();
		me.DAFFY.doDestroy();
		me.TWEETY.doDestroy();
		me.FOGHORN.doDestroy();;
		me.SAM.doDestroy();
		me.SPEEDY.doDestroy();



	    //destroy physics
	    me.doDestroyPhysicsWorld();

		//clear scene
		if(me.scene){
			while(me.scene.children.length > 0){ 
	    		me.scene.remove(me.scene.children[0]); 
			}
		}
		me.scene = null;

	}


	this.doHide = function(){
		canvas.style.display = "none";
	}























	
	//==================================================================
	//==================================================================
	// frame loop
	//==================================================================
	//==================================================================

	var br_mouse = new THREE.Vector2();
	var bl_mouse = new THREE.Vector2();
	var left_is_over = false;
	var right_is_over = false;
	var launcher_is_over = false;
	var using_pointer = false;

	var launcher_down = false;
	var launcher_dragging = false;
	var launcher_down_pending = false;
	var launcher_release_pending = false;


	var dist = 0;



	this.doFrameUpdate = function(){

		frame_delta = clock.getDelta();
		var adj_scale = 1;


		var left_over = false;
		var left_down = false;
		var left_clicked = false;

		var right_over = false;
		var right_down = false;
		var right_clicked = false;

		var launcher_over = false;
		var launcher_down = false;
		var launcher_clicked = false;

		if(!me.is_paused){

			me.animation_frame++;

			if(!oCONFIG.physics_debug){
				PHYSICS.world.step(frame_delta * me.physics_speed, 3, 3);
				PHYSICS.world.clearForces();
			}
			for(var i=0; i<PHYSICS.queue.length; i++){
				var queue = PHYSICS.queue[i];
				if(queue.me){
					queue.action(queue.me);
				}else{
					queue.action();
				}
				
			}
			PHYSICS.queue = [];

			var highest_y = 0;
			var balls = 0;


			//check for touch controls
			if(!platform.isTouchDevice || __input.mouse_is_down){

				var touches;
				if(platform.isTouchDevice){
					touches = __input.doGetTouches();
				}else{
					touches = [{
			            id: 0,
						mouse_is_down: __input.mouse_is_down,
			            click_pending: __input.click_pending,
			           	my_x: __input.mouse_x,
						my_y: __input.mouse_y,
			           	speed_x: __input.speed_x,
						speed_y: __input.speed_y
			        }];
				}


				for(var i=0; i<touches.length; i++){
					var touch = touches[i];

					var target_size = oSTAGE.game_width * 0.5;

					//left
					bl_mouse.x = (touch.my_x) * (adj_scale);
					bl_mouse.y = (oSTAGE.game_height - touch.my_y) * (adj_scale);
					if(bl_mouse.x < target_size && bl_mouse.y < target_size ){
						left_over = true;
						left_down = touch.mouse_is_down;
						left_clicked = touch.click_pending;
					}

					//right
					br_mouse.x = (oSTAGE.game_width - touch.my_x) * (adj_scale);
					br_mouse.y = (oSTAGE.game_height - touch.my_y) * (adj_scale);
					if(br_mouse.x < target_size && br_mouse.y < target_size ){
						right_over = true;
						right_down = touch.mouse_is_down;
						right_clicked = touch.click_pending;
					}


					//launcher
					br_mouse.x = (oSTAGE.game_width - touch.my_x) * (adj_scale);
					br_mouse.y = (oSTAGE.game_height - touch.my_y) * (adj_scale);
					if(br_mouse.x < target_size && br_mouse.y > target_size ){
						launcher_over = true;
						launcher_down = touch.mouse_is_down;
						launcher_clicked = touch.click_pending;
					}


					if(GAME.balls_in_launch_zone > 0){
						if(touch.mouse_is_down){
							if(!GAME.launcher_active){
								GAME.launcher_active = true;
								GAME.last_launcher_y = touch.my_y;
							}
							GAME.launcher_speed = (touch.my_y - GAME.last_launcher_y) * 0.5;
							GAME.last_launcher_y = touch.my_y;
						}else{
							GAME.launcher_active = false;
						}
					}else{
						GAME.launcher_active = false;
					}
				}

			touch.click_pending = false;

			//flippers
			if(__input.left || (platform.isTouchDevice && left_over && left_down)){
				__input.want_left = true;
			}else{
				__input.want_left = false;
			}

			if(__input.right || (platform.isTouchDevice && right_over && right_down)){
				__input.want_right = true;
			}else{
				__input.want_right = false;
			}

			//launcher (pc)
			if(__input.dn){
				__input.want_key_launcher = true;
			}else{
				__input.want_key_launcher = false;
			}

			




		}else{
			__input.want_left = false;
			__input.want_right = false;
			__input.want_key_launcher = false;
			__input.want_touch_launcher = false;
			GAME.launcher_active = false;

		}

			
			if(GAME.sparks_active > 0){
				GAME.sparks_frame++;
				if(GAME.sparks_frame > 1){
					GAME.sparks_frame=0;
					GAME.sparks_material.map.offset.x += (1/6);
					if(GAME.sparks_material.map.offset.x >= 1){
						GAME.sparks_material.map.offset.x = 0;
					}
				}
				
			}


			//update game actives
			for(var i=me.actives.length-1; i>=0; i--){
				if(me.actives[i]){
					me.actives[i].doUpdate(me.actives[i]);
					

		   			if(me.actives[i].need_destroy){
						if(me.actives[i].rb){
							PHYSICS.world.destroyBody(me.actives[i].rb);
						}
						
						GAME.scene.remove(me.actives[i]);
		      			me.actives.splice(i,1);
						continue;
					}
					if(me.actives[i].forget){
		      			me.actives.splice(i,1);
		   			}


				}else{
					me.actives.splice(i,1);
				}
			}

		
			me.renderer.render(me.scene, me.camera);
		}

	}


}





