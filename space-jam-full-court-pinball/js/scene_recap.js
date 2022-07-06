

var RecapScreen = function(o){

	trace("RecapScreen()");
	o = o || {};


	var me = this;

	var social_buttons = [];

	if(oCONFIG.share_facebook){
		social_buttons.push("facebook");
	}
	if(oCONFIG.share_twitter){
		social_buttons.push("twitter");
	}
	if(oCONFIG.share_instagram){
		social_buttons.push("instagram");
	}
	if(oCONFIG.share_download){
		social_buttons.push("download");
	}

	var canvas = SCREENS.my_canvas;
	canvas.style.display = "block";
	var name_input = document.getElementById("name_input");

	var stage = SCREENS.stage;
	stage.removeAllChildren();
	
	if(!platform.isMobile){
		stage.enableMouseOver(20);
	}

	var frame_updater;
	var frame = stage.addChild(new lib.scene_recap);

	//start music
	doPlayMusic("end_music");


	//hdr
	__utils.doText(frame.txt_hdr, oLANG.recap_hdr, {verticalAlign: "top"});

	//score
	var temp_obj = JSON.parse(JSON.stringify(oLANG.recap_score));
	temp_obj.value =  __utils.doSubText(temp_obj.value, "~amt~", GAME.score);
	__utils.doText(frame.txt_score, temp_obj);


	//play again
	var b_play = frame.b_play;
	b_play.helper = new __utils.ButtonHelper(stage, b_play, "norm", "over");
	__utils.doText(b_play.txt, oLANG.recap_replay, {verticalAlign: "middle"});
	b_play.addEventListener("click", function(e){
		__snds.playSound("btn_press", "interface");
		SCENE.doDestroy();
		GAME.doNewGame();	
	});



	//--------------------------------------
	// sharing
	//-------------------------------------

	var processing_timeout = 0;


	var doShowProcessing = function(){
		clearTimeout(processing_timeout);
		frame.txt_processing.visible=true;
	}



	var b_share = frame.b_share;
	b_share.helper = new __utils.ButtonHelper(stage, b_share, "norm", "over");
	__utils.doText(b_share.txt, oLANG.recap_share, {verticalAlign: "middle"});
	b_share.addEventListener("click", function(e){

		if(!e.target.helper.enabled){return;}

		e.target.helper.enabled = false;
		e.target.alpha = 0;

		//processing_timeout = setTimeout(doShowProcessing, 500);

		frame.txt_processing.visible=true;
		stage.update();

		__snds.playSound("btn_press", "interface");

		SHARE = new Shareable();
		SHARE.doSaveImage(null,  function(image_file){

			trace("image_file = " + image_file);

			clearTimeout(processing_timeout);
			frame.txt_processing.visible=false;
			
			if(image_file == "failed"){
				sharing_image = null;
				//e.target.helper.enabled = true;
				//e.target.alpha = 1.0;

				e.target.visible = false;
				for(var i=0; i<social_buttons.length; i++){
					if(social_buttons[i] != "facebook" && social_buttons[i] != "twitter"){
						var button = frame["b_" + social_buttons[i]];
						button.visible=true;
					}
				}
				me.doCenterButtons();
			


			}else{
				sharing_image = image_file;
				e.target.visible = false;
				for(var i=0; i<social_buttons.length; i++){
					var button = frame["b_" + social_buttons[i]];
					button.visible=true;
				}
				me.doCenterButtons();
			}
			stage.needUpdate = true;
		});
	});



	__utils.doText(frame.txt_processing, oLANG.recap_processing);
	frame.txt_processing.visible=false;

	//social buttons
	for(var i=0; i<social_buttons.length; i++){
		var button = frame["b_" + social_buttons[i]];
		button.which = social_buttons[i];
		button.helper = new __utils.ButtonHelper(stage, button, "norm", "over");
		button.addEventListener("click", function(e){
			if(!e.target.helper.enabled){return;}
			__snds.playSound("btn_press", "interface");
			var which = e.currentTarget.which;
			SHARE.doShareImage(which, sharing_image);
		});
	}


	this.doCenterButtons = function(){
		
		var buttons = [];
		for(var i=0; i<social_buttons.length; i++){
			var button = frame["b_" + social_buttons[i]];
			if(button.visible){
				buttons.push(button);
			}
		}

		var spaces = buttons.length - 1;
		var space = 108;
		var half_space = 108 * spaces
		var myx = oSTAGE.game_size.center_x - ((spaces * 108) * 0.5);
		for(var i=0; i<buttons.length; i++){
			var button = buttons[i];
			button.x = myx;
			myx += space;	
			
		}
	}

	doClosePage = function(){
		try{
			printable_popup.close();
		}catch(e){};
	}


	this.doResetSharing = function(){
		frame.b_share.visible=true;
		SHARE = null;
		for(var i=0; i<social_buttons.length; i++){
			var button = frame["b_" + social_buttons[i]];
			button.helper.enabled = true;
			button.visible=false;
		}
		sharing_image = null;
		stage.update();
	}

	me.doResetSharing();



	var all_social_buttons = ["facebook", "instagram", "twitter", "download"];
	for(var i=0; i<all_social_buttons.length; i++){
		var button = frame["b_" + all_social_buttons[i]];
		button.visible=false;
	}

	if(social_buttons.length==0){
			frame.b_share.visible=false;

	}

	stage.update();


	
	//---------------------------
	// resize update
	//---------------------------


	var canvas_game = document.getElementById("canvas_game");

	frame.my_scale = null;
	this.doResizeUpdate = function(){

		var top = 140;
		var bottom = 290;
		var space = oSTAGE.game_height - top - bottom;

		var bottom_margin = 30;
		var myy = oSTAGE.game_bottom - bottom_margin;

		//background
		var background_bounds = frame.background.getBounds();
		frame.background.x = (oSTAGE.game_size.center_x) | 0;
		frame.background.y = (oSTAGE.game_size.center_y) | 0;
		var background_scale = Math.max(oSTAGE.game_width / background_bounds.width, oSTAGE.game_height / background_bounds.height);
		frame.background.scaleX = frame.background.scaleY = background_scale ;

		frame.logo.y = oSTAGE.game_size.top + 10;


		frame.TitleMessaging.x = (oSTAGE.game_size.center_x) | 0;
		frame.TitleMessaging.y = (oSTAGE.game_size.bottom - 4) | 0;

		myy = (oSTAGE.game_size.bottom - 220) | 0;

		frame.b_play.x = (oSTAGE.game_size.center_x) | 0;

		frame.b_share.x = (oSTAGE.game_size.center_x) | 0;
		frame.txt_processing.x = (oSTAGE.game_size.center_x) | 0;

		//sharing
		frame.b_share.y = myy;
		frame.b_facebook.y = myy;
		frame.b_twitter.y = myy;
		frame.b_instagram.y = myy;
		frame.b_download.y = myy;
		frame.txt_processing.y = myy-37;
		myy -= 85;

		//frame.b_watch.y = myy;
		//myy -= 105;

		frame.b_play.y = myy;
		myy -= 120;

		frame.txt_score.y = myy;
		frame.txt_hdr.y = frame.txt_score.y - frame.txt_score.getMeasuredHeight() - 10;

		//foreground
		frame.RecapForeground.scaleX = frame.RecapForeground.scaleY = background_scale;
		frame.RecapForeground.x = (oSTAGE.game_size.center_x) | 0;
		frame.RecapForeground.y = frame.txt_hdr.y - 50;

		frame.RecapJerry.x = oSTAGE.game_size.center_x | 0;
		frame.RecapJerry.y = (oSTAGE.game_size.top + 140) + ((frame.RecapForeground.y - (oSTAGE.game_size.top + 120)) * 0.5);


		if(frame.my_scale != oSTAGE.scale){
			__utils.doCache(frame.TitleMessaging, oSTAGE.cache_scale * 2);
			__utils.doCache(frame.RecapJerry, oSTAGE.cache_scale * 2);
			__utils.doCache(frame.logo, oSTAGE.cache_scale * 2);
		}

		frame.x = oSTAGE.game_width_margins;
		frame.y = oSTAGE.game_height_margins;
		frame.my_scale = oSTAGE.scale;
		
		stage.needUpdate = true;

	}


	this.doReveal = function(){

		//delay += 700;

		stage.needUpdate = true;


		var delay = 0;

		//bottom bar
		frame.background.myy = frame.background.y;
		frame.background.y -= 100;
		createjs.Tween.get(frame.background).wait(delay).to({y: frame.background.myy}, 1000, createjs.Ease.cubicOut);
		stage.activeTweens.push(frame.background);
		
		frame.RecapForeground.myy = frame.RecapForeground.y;
		frame.RecapForeground.y += 100;
		createjs.Tween.get(frame.RecapForeground).wait(delay).to({y: frame.RecapForeground.myy}, 1000, createjs.Ease.cubicOut);
		stage.activeTweens.push(frame.RecapForeground);

		frame.RecapJerry.visible = false;
		frame.RecapJerry.myx = frame.RecapJerry.x;
		frame.RecapJerry.x += 400;
		createjs.Tween.get(frame.RecapJerry).wait(delay).set({visible:true}).to({x: frame.RecapJerry.myx}, 1000, createjs.Ease.backOut);
		stage.activeTweens.push(frame.RecapJerry);

		
		delay+=500;
		frame.txt_hdr.visible = false;
		frame.txt_hdr.myy = frame.txt_hdr.y;
		frame.txt_hdr.y += 150;
		createjs.Tween.get(frame.txt_hdr).wait(delay).set({visible:true}).to({y: frame.txt_hdr.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.txt_hdr);

		delay+=200;
		frame.txt_score.visible = false;
		frame.txt_score.myy = frame.txt_score.y;
		frame.txt_score.y += 150;
		createjs.Tween.get(frame.txt_score).wait(delay).set({visible:true}).to({y: frame.txt_score.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.txt_score);

		delay+=200;
		frame.b_play.visible = false;
		frame.b_play.myy = frame.b_play.y;
		frame.b_play.y += 150;
		createjs.Tween.get(frame.b_play).wait(delay).set({visible:true}).to({y: frame.b_play.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.b_play);

		if(social_buttons.length>0){
			delay+=200;
			frame.b_share.visible = false;
			frame.b_share.myy = frame.b_share.y;
			frame.b_share.y += 150;
			createjs.Tween.get(frame.b_share).wait(delay).set({visible:true}).to({y: frame.b_share.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
			stage.activeTweens.push(frame.b_share);
		}



}
	
	//---------------------------
	// destroy
	//---------------------------

	this.doDestroy = function(){
		stage.removeAllChildren();
		stage.enableMouseOver(0);
		resize_updater.forget = true;
	}

	SCREENS.my_canvas.style.display = "block";
	SCREENS.my_canvas.style.opacity = "";

	//register the resizer
	var resize_updater = {doResizeUpdate : me.doResizeUpdate};
	update_queue.push(resize_updater);

	me.doResizeUpdate();
	RESIZER.w = 0;
	me.doReveal();
	stage.needUpdate = true;

	SCREENS.doShow();


	


}