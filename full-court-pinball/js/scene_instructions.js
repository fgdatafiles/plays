var instructions_overlay

var InstructionsScreen = function(resume_game){

	var me = this;

	oUSER.seen_help = true;
	seen_help = true;
    __localsaver.doSaveData("user", oUSER);

    var instructions_list = [];
	var instructions_id = 0;
	var instructions_image;
	var shown_prev = false;

	if(platform.isTouchDevice){
		instructions_list = instructions_mobile;
	}else{
		instructions_list = instructions_desktop;
	}

	var canvas = SCREENS.my_canvas;
	canvas.style.display = "block";
	var stage = SCREENS.stage;
	stage.removeAllChildren();
	if(!platform.isMobile){
		stage.enableMouseOver(20);
	}

	var frame_updater;
	var frame = stage.addChild(new lib.scene_instructions);

	//previous
	frame.b_prev_image.helper = new __utils.ButtonHelper(stage, frame.b_prev_image, "norm", "over");
	frame.b_prev_image.addEventListener("click", function(e){
		__snds.playSound("btn_press", "interface");
		instructions_id--;
		if(instructions_id < 0){
			instructions_id = instructions_list.length-1;
		}
		me.doShowInstruction();
	});
	frame.b_prev_image.visible = false;

	//next
	frame.b_next_image.helper = new __utils.ButtonHelper(stage, frame.b_next_image, "norm", "over");
	frame.b_next_image.addEventListener("click", function(e){
		__snds.playSound("btn_press", "interface");
		instructions_id++;
		if(instructions_id>=instructions_list.length){
			instructions_id = 0;
		}
		me.doShowInstruction();
	});

	//play button
	var b_play = frame.b_play;
	b_play.helper = new __utils.ButtonHelper(stage, b_play, "norm", "over");



if(resume_game){

	CONTROLS.doHidePause();
	__utils.doText(b_play.txt, oLANG.instructions_resume);
	b_play.addEventListener("click", function(e){
		div_instructions.style.display = "none";
		__snds.playSound("btn_press", "interface");
		SCENE.doDestroy();


		__snds.unforceMute();
		me.doDestroy();

		CONTROLS.doShowPause();
		GAME.doResume();

	});

}else{

	__utils.doText(b_play.txt, oLANG.instructions_play);
	b_play.addEventListener("click", function(e){
		div_instructions.style.display = "none";
		__snds.playSound("btn_press", "interface");

		SCENE.doDestroy();
		__snds.stopSound("music");
		music_playing = null;
		GAME.level = 1;
		GAME.score = 0;
		doFinishLoading(function(){
			//SCENE = new RecapScreen({});
			GAME.doNewGame();
		});
	});

}

	


	var div_instructions =  document.getElementById("div_instructions");
	__utils.doDestroyAllChildren(div_instructions);

	var instructions_image = div_instructions.appendChild(document.createElement("div"));
	instructions_image.className = "instructions_image";

	var instructions_dots = div_instructions.appendChild(document.createElement("div"));
	instructions_dots.className = "instructions_dots";


	var instructions_txt = div_instructions.appendChild(document.createElement("div"));
	instructions_txt.className = "instructions_txt";
	var style = window.getComputedStyle(instructions_txt, null).getPropertyValue('font-size');
	instructions_txt.original_fontsize = parseFloat(style); 


	var instructions_table = instructions_txt.appendChild(document.createElement("div"));
	instructions_table.className = "instructions_table";
	var instructions_cell = instructions_table.appendChild(document.createElement("div"));
	instructions_cell.className = "instructions_cell";

	instructions_txt.cell = instructions_cell;



	//container with all texts for measuring
	var txt_measure = div_instructions.appendChild(document.createElement("div"));
	txt_measure.className = "instructions_txt_measure";
	for(i=0; i<instructions_list.length; i++){
		var txt = txt_measure.appendChild(document.createElement("div"));
		txt.className = "instructions_txt";
		__utils.doHTMLText(txt, oLANG[instructions_list[i].msg]);
	}


	var img = new Image();
	img.onload = function () {
	   if(platform.isMobile){
	   		instructions_image.style.backgroundSize = "contain";
	   		instructions_image.style.backgroundPosition = "center bottom";
			instructions_image.style.backgroundImage = "url('" + instructions_list[instructions_id].img + "')";
		}else{
	   		instructions_image.style.backgroundSize = "contain";
	   		instructions_image.style.backgroundPosition = "center bottom";
			instructions_image.style.backgroundImage = "url('" + instructions_list[instructions_id].img + "')";
		}
	}

	var dots = [];
	for(var i=0; i<instructions_list.length; i++){
		var dot = instructions_dots.appendChild(document.createElement("div"));
		dot.className = "instructions_dot";
		dots.push(dot);
	}


	this.doShowInstruction = function(){

		instructions_image.style.display = "block";
		instructions_image.style.backgroundSize = (32 * oSTAGE.scale) + "px " + (32 * oSTAGE.scale) + "px";
	   	instructions_image.style.backgroundPosition = "center";
    	instructions_image.style.backgroundImage = "url('media/images/spinner.gif')";

		img.src = instructions_list[instructions_id].img;

		__utils.doHTMLText(instructions_txt.cell, "");
		__utils.doHTMLText(instructions_txt.cell, oLANG[instructions_list[instructions_id].msg]);

		instructions_txt.style.display = 'none';
		instructions_txt.style.display = 'block';

		//buttons
		if(instructions_id == 0){
			frame.b_prev_image.visible=false;
			frame.b_next_image.visible=true;
		}else if(instructions_id == instructions_list.length-1){
			frame.b_prev_image.visible=true;
			frame.b_next_image.visible=false;
		}else{
			frame.b_prev_image.visible=true;
			frame.b_next_image.visible=true;
		}

		for(var i=0; i<dots.length; i++){
			var dot = dots[i];
			if(i==instructions_id){
				dot.style.backgroundColor = "white";
			}else{
				dot.style.backgroundColor = "transparent";
			}

		}

		me.doResizeUpdate();
	}



	//---------------------------
	// resize update
	//---------------------------

	frame.my_scale = null;


	this.doResizeUpdate = function(){

		
		frame.x = oSTAGE.game_width_margins;
		frame.y = oSTAGE.game_height_margins;
		frame.my_scale = oSTAGE.scale;
		stage.needUpdate = true;

		var background_bounds = frame.background.getBounds();
		frame.background.x = (oSTAGE.game_size.center_x) | 0;
		frame.background.y = (oSTAGE.game_size.center_y) | 0;
		frame.background.scaleX = frame.background.scaleY =  Math.max(oSTAGE.game_width / background_bounds.width, oSTAGE.game_height / background_bounds.height);


		frame.TitleMessaging.x = (oSTAGE.game_size.center_x) | 0;
		frame.TitleMessaging.y = (oSTAGE.game_size.bottom) | 0;

		frame.b_play.x = oSTAGE.game_size.center_x | 0;
		frame.b_play.y = (frame.TitleMessaging.y - 210) | 0;

	
		frame.b_prev_image.x = oSTAGE.game_left + 10;
		frame.b_next_image.x = oSTAGE.game_right - 10;
		frame.logo.y = oSTAGE.game_size.top + 10;


		var space_width = oSTAGE.game_width - 200;
		var top_buffer = 140;
		var bottom_buffer = (oSTAGE.game_bottom - frame.b_play.y) + 100;
		var space_height = Math.min(860, (oSTAGE.game_height - top_buffer - bottom_buffer));

		//container
		div_instructions.style.width = (space_width) + "px";
		div_instructions.style.height = (space_height) + "px";
		div_instructions.style.top = (top_buffer* oSTAGE.scale) + "px";
		div_instructions.style.left = ((oSTAGE.wrapper_width - space_width) * 0.5) + "px";
		div_instructions.style.transform = "scale(" + oSTAGE.scale + ")";

		var instructions_center = oSTAGE.game_size.top + top_buffer + (space_height * 0.5);

		frame.b_prev_image.y = frame.b_next_image.y = instructions_center;

		//measure text
		var max_height = 0;
		for(var i=0; i<txt_measure.children.length; i++){
			max_height = Math.max(max_height, txt_measure.children[i].clientHeight);
		}
		instructions_txt.style.height = (max_height) + "px";

		var image_space_width = space_width;
		var image_space_height = space_height - max_height - 20;
		var image_space_ratio = image_space_width/image_space_height;

		var image_height, image_width;
		var image_ratio = 320 / 512;
		if(image_ratio >= image_space_ratio){
			image_width = image_space_width;
			image_height = image_width * (1/image_ratio);
		}else{
			image_height = image_space_height;
			image_width = image_height * image_ratio;
		}

		instructions_image.style.width = image_width + "px";
		instructions_image.style.height = (image_height-25) + "px";
		instructions_image.style.top = ((image_space_height - image_height) * 0.5) + "px";
		instructions_image.style.left = ((image_space_width - image_width) * 0.5) + "px";

		instructions_dots.style.top = ((image_space_height - image_height) * 0.5) + (image_height-25) + "px";

	}

	//---------------------------
	// show
	//---------------------------

	this.doReveal = function(){
		div_instructions.style.display = "block";
		//frame.b_play.visible = false;

		var delay =  250;

		frame.b_play.visible = false;
		frame.b_play.myy = frame.b_play.y;
		frame.b_play.y += 150;
		createjs.Tween.get(frame.b_play).wait(delay).set({visible:true}).to({y: frame.b_play.myy}, 1000, createjs.Ease.getElasticOut(1, .8));
		stage.activeTweens.push(frame.b_play);


		stage.needUpdate = true;

		instructions_id = 0;
		
		me.doShowInstruction();
	}

	//---------------------------
	// destroy
	//---------------------------


	this.doDestroy = function(){
		stage.removeAllChildren();
		stage.enableMouseOver(0);
		resize_updater.forget = true;
	}


	//register the resizer
	var resize_updater = {doResizeUpdate : me.doResizeUpdate};
	update_queue.push(resize_updater);

	me.doResizeUpdate();
	me.doReveal();

	stage.needUpdate = true;

	SCREENS.doShow();


}