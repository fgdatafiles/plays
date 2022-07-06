
//----------------------------------------------
// Lola
//---------------------------------------------

var GameLola = function(){

	var me = this;
	var character;
	var targets = [];
	var target_id = 0;
	var move_timeout;
	var move_delay = 1;
	var current_target;

	var captured_ball;

	var bonus_timeout;
	var bonus_multiplier = 1;
	var bonus_seconds = 5;

	me.has_multiplier = false;

		var is_alive = true;
	this.doDestroy = function(){
		clearTimeout(move_timeout);
		is_alive = false;
	}

	this.doInit = function(){

		trace("LOLA.doInit()");

		//3d items
		character = GAME.table.getObjectByName("popup_lola");

		//targets
		targets = [oTABLE.items.lola_1, oTABLE.items.lola_2, oTABLE.items.lola_3, oTABLE.items.lola_4];
		for(var i=0; i<targets.length;i++){	
			target = targets[i];
			target.setUserData({rb:target, hit_callback:me.doHit});
		}

		current_target = targets[target_id];
		var pos = current_target.getPosition();
		TweenLite.set(character.position, {x: pos.x * M2P, y: 0, z: pos.y * M2P});
		PHYSICS.queue.push({me:current_target, action:GAME.doActivateBody});

		move_timeout = setTimeout(me.doMove, move_delay * 1000);
	}


	this.doHit = function(contact, ball, other){
		trace("LOLA.doHit()");
		clearTimeout(move_timeout);

		

		__snds.playSound("snd_lola");

		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

		TweenLite.set(character.scale, {x:1.2, y:1.2, z:1.2});
		TweenLite.to(character.scale, 0.5, {x:1, y:1, z:1, ease:Power1.easeIn});

		me.doStartBonus(ball);
		me.doMove();
	
	}

	this.doStartBonus = function(ball){
		clearTimeout(bonus_timeout);


		var ball_user_data = ball.getUserData();
		var ball_model = ball_user_data.object;

		bonus_multiplier = 2;
		me.has_multiplier = true;


		for(var i=0; i<oGAME.balls.length; i++){
			var ball_model = oGAME.balls[i];
			ball_model.ball_lola.visible=true;
		}

		bonus_timeout = setTimeout(me.doStopBonus, bonus_seconds * 1000);


	}

	this.doStopBonus = function(){
		clearTimeout(bonus_timeout);
		bonus_multiplier = 1;
		me.has_multiplier = false;

		for(var i=0; i<oGAME.balls.length; i++){
			var ball_model = oGAME.balls[i];
			ball_model.ball_lola.visible=false;
		}
	}


	this.doMove = function(){

		clearTimeout(move_timeout);

		//find new target
		PHYSICS.queue.push({me:current_target, action:GAME.doDeactivateBody});

		var new_target = current_target;
		while(new_target == current_target){
			new_target = targets[__utils.getRandomInt(0, targets.length-1)];
		}
		current_target = new_target;

		var pos = current_target.getPosition();
		TweenLite.to(character.position, .33, {x: pos.x * M2P, y: 0, z: pos.y * M2P, ease:Power1.easeInOut, onComplete:function(){
			PHYSICS.queue.push({me:current_target, action:GAME.doActivateBody});
		}
		});

		move_timeout = setTimeout(me.doMove, move_delay * 1000);

	}



	me.doInit();

}
