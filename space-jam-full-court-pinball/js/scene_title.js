
var TitleScreen = function(){

	trace("TitleScreen()");

	var me = this;

	var stage = SCREENS.stage;
	stage.removeAllChildren();

	var frame = stage.addChild(new lib.scene_title);

	doPlayMusic("music_title_loop");



	//---------------------------
	// init
	//---------------------------

	if(!platform.isMobile){
		stage.enableMouseOver(20);
	}

	//play button
	var b_play = frame.b_play;
	b_play.helper = new __utils.ButtonHelper(stage, b_play, "norm", "over");
	__utils.doText(b_play.txt, oLANG.title_play, {verticalAlign: "middle"});

	b_play.addEventListener("click", function(e){

		__snds.playSound("btn_press", "interface");
		
		if(!oCONFIG.debug_quickstart && !seen_help ){
			SCENE.doDestroy();
			SCENE = new InstructionsScreen();
		
		}else{
			SCENE.doDestroy();

			__snds.stopSound("music");
			music_playing = null;
			GAME.level = 1;
			doFinishLoading(function(){
				GAME.doNewGame();
			});
		}

	});


	//title
	__utils.doText(frame.GameTitle.txt, oLANG.title_game_name, {verticalAlign: "middle"});

	//---------------------------
	// resize update
	//---------------------------

	frame.my_scale = null;
	this.doResizeUpdate = function(){

		var background_bounds = frame.background.getBounds();
		frame.background.x = (oSTAGE.game_size.center_x) | 0;
		frame.background.y = (oSTAGE.game_size.center_y) | 0;

		var background_scale = Math.max(oSTAGE.game_width / background_bounds.width, oSTAGE.game_height / background_bounds.height);
		frame.background.scaleX = frame.background.scaleY = background_scale ;
		
		frame.TitleForeground.scaleX = frame.TitleForeground.scaleY = background_scale;
		frame.TitleForeground.x = (oSTAGE.game_size.center_x) | 0;
		frame.TitleForeground.y = (oSTAGE.game_size.center_y - 60) | 0;

		frame.TitleMessaging.x = (oSTAGE.game_size.center_x) | 0;
		frame.TitleMessaging.y = (oSTAGE.game_size.bottom) | 0;

		frame.b_play.x = oSTAGE.game_size.center_x | 0;
		frame.b_play.y = (frame.TitleMessaging.y - 210) | 0;

		frame.TitleJerry.x = oSTAGE.game_size.center_x | 0;
		frame.TitleJerry.y = (oSTAGE.game_size.center_y - 100) | 0;

		frame.GameTitle.x = oSTAGE.game_size.center_x | 0;
		frame.GameTitle.y = frame.TitleJerry.y + ((frame.b_play.y - (frame.TitleJerry.y + 20)) * 0.5);


		if(frame.my_scale != oSTAGE.scale){
			__utils.doCache(frame.TitleMessaging, oSTAGE.cache_scale * 2);

			
			__utils.doCache(frame.TitleJerry, oSTAGE.cache_scale * 2);
			__utils.doCache(frame.TitleForeground, oSTAGE.cache_scale * 2);
			//__utils.doCache(frame.GameTitle, oSTAGE.cache_scale * 2);
		}

		frame.x = oSTAGE.game_width_margins;
		frame.y = oSTAGE.game_height_margins;
		frame.my_scale = oSTAGE.scale;
		
		stage.needUpdate = true;

	}
	

	//---------------------------
	// show
	//---------------------------

	this.doReveal = function(){

		//delay += 700;
		stage.needUpdate = true;


		var delay = 0;

		//bottom bar
		frame.background.myy = frame.background.y;
		frame.background.y -= 100;
		createjs.Tween.get(frame.background).wait(delay).to({y: frame.background.myy}, 1000, createjs.Ease.cubicOut);
		stage.activeTweens.push(frame.background);
		
		frame.TitleForeground.myy = frame.TitleForeground.y;
		frame.TitleForeground.y += 100;
		createjs.Tween.get(frame.TitleForeground).wait(delay).to({y: frame.TitleForeground.myy}, 1000, createjs.Ease.cubicOut);
		stage.activeTweens.push(frame.TitleForeground);

		frame.TitleJerry.visible = false;
		frame.TitleJerry.myx = frame.TitleJerry.x;
		frame.TitleJerry.x -= 400;
		createjs.Tween.get(frame.TitleJerry).wait(delay).set({visible:true}).to({x: frame.TitleJerry.myx}, 500, createjs.Ease.cubicOut);
		stage.activeTweens.push(frame.TitleJerry);


		frame.TitleTom.myy = frame.TitleTom.y;
		frame.TitleTom.y += 400;
		createjs.Tween.get(frame.TitleTom).wait(delay).to({y: frame.TitleTom.myy}, 1000, createjs.Ease.backOut);
		stage.activeTweens.push(frame.TitleTom);

		delay+=500;

		frame.GameTitle.visible = false;
		frame.GameTitle.myx = frame.GameTitle.x;
		frame.GameTitle.x += 320;
		frame.GameTitle.skewX = 50;
		createjs.Tween.get(frame.GameTitle).wait(delay).set({visible:true}).to({x: frame.GameTitle.myx, skewX:0}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.GameTitle);
		
		delay+=500;
		frame.b_play.visible = false;
		frame.b_play.myy = frame.b_play.y;
		frame.b_play.y += 150;
		createjs.Tween.get(frame.b_play).wait(delay).set({visible:true}).to({y: frame.b_play.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.b_play);


		setTimeout(function(){
			if(first_load){
				first_load = false;
				doContinueLoadingAssest();
			}
		},2000);

		wrapper = document.getElementById("wrapper");
		wrapper.style.visibility = "visible";

	}
	//---------------------------
	// destroy
	//---------------------------

	this.doDestroy = function(){
		stage.removeAllChildren();
		stage.enableMouseOver(0);
		resize_updater.forget = true;
	}

	wrapper = document.getElementById("wrapper");
		wrapper.style.visibility = "hidden";

	//SCREENS.my_canvas.style.display = "none";
	//SCREENS.my_canvas.style.opacity = "";

	//register the resizer
	var resize_updater = {doResizeUpdate : me.doResizeUpdate};
	update_queue.push(resize_updater);

	me.doResizeUpdate();
	RESIZER.w = 0;

	setTimeout(me.doReveal, 100);

	stage.needUpdate = true;

	SCREENS.doShow();

}


