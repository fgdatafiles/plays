
//----------------------------------------------
// Lola
//---------------------------------------------

var GameCoyote = function(){

	var me = this;
	var character, hole;
	var targets = [];
	var blockers = [];
	var slots = [];

	var target_id = 0;
	var move_timeout;
	var move_delay = 5;

	var captured_ball = null; 

	var current_target, current_blocker, current_slot;
	var update_wait;
	var target_random;

	var is_busy = false;


	var is_alive = true;
	
	this.doDestroy = function(){
		clearTimeout(move_timeout);
		is_alive = false;
		update_wait.forget = true;
	}


	this.doInit = function(){
		//3d items
		update_wait = {};
		character = GAME.table.getObjectByName("popup_coyote");

		hole = GAME.table.getObjectByName("coyote_hole");
		slots = [GAME.table.getObjectByName("coyote_slot_1"), GAME.table.getObjectByName("coyote_slot_2"), GAME.table.getObjectByName("coyote_slot_3"), GAME.table.getObjectByName("coyote_slot_4"), GAME.table.getObjectByName("coyote_slot_5")];

		//holes - physics
		targets = [oTABLE.items.coyote_trap_1, oTABLE.items.coyote_trap_2, oTABLE.items.coyote_trap_3, oTABLE.items.coyote_trap_4, oTABLE.items.coyote_trap_5];
		for(var i=0; i<targets.length;i++){	
			var target = targets[i];
			target.setUserData({enter_callback:me.doHitHole});
		}

		target_random = [0,0,1,1,2,3,3,4,4];

		//blockers - physics
		blockers = [oTABLE.items.coyote_1, oTABLE.items.coyote_2, oTABLE.items.coyote_3, oTABLE.items.coyote_4, oTABLE.items.coyote_5];
		for(var i=0; i<blockers.length;i++){	
			var blocker = blockers[i];
			blocker.setUserData({hit_callback:me.doHitBlocker});
		}

		//hide all
		character.visible = false;
		hole.visible = false;
		is_busy = false;

		move_timeout = setTimeout(me.doShow, 1000);
	}



	this.doHitBlocker = function(contact, ball, other){

		if(!is_alive){return;}

		clearTimeout(move_timeout);

		//pulse
		var obj_scale = character.scale.x;
		TweenLite.killTweensOf(character.scale);
		character.scale.set(1.1,1.1,1.1);
		TweenLite.to(character.scale, .4, {x: 1, y:1, z:1});
		
		var manifold = contact.getWorldManifold();
		var normal = manifold.normal;
		normal.mul(2);
		ball.applyLinearImpulse(normal, other.getPosition());

		if(!is_busy){
			me.doMove();
		}
	}




	this.doHitHole = function(contact, ball, other){

		if(!is_alive){return;}

		clearTimeout(move_timeout);
		is_busy = true;

		//deactive ball and hole
		PHYSICS.queue.push({me:ball, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

		//capture ball and attach to hole
		captured_ball = ball;
		var user_data = captured_ball.getUserData();
		var ball_model = user_data.object;
		ball_model.manual_pos = true;

		//animate out
		TweenLite.killTweensOf(character.position);
		TweenLite.killTweensOf(hole.position);
		TweenLite.killTweensOf(hole.scale);
		TweenLite.killTweensOf(ball_model.position);

		//move ball to center
		TweenLite.to(ball_model.position, 0.25, {x:current_target.getPosition().x * M2P, z:current_target.getPosition().y * M2P});
		
		//drop it
		TweenLite.to(ball_model.position, 0.25, {y: -2, delay: 0.25, onComplete: me.doMove});

		__snds.playSound("snd_coyote_drop");	
	}



	this.doMove = function(){

		if(!is_alive){return;}


		clearTimeout(move_timeout);
		is_busy = true;

		//deactivate current
		PHYSICS.queue.push({me:current_target, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:current_blocker, action:GAME.doDeactivateBody});

		//animate out
		TweenLite.killTweensOf(character.position);
		TweenLite.killTweensOf(hole.scale);

		TweenLite.to(character.position, .25, {y: current_slot.position.y - 7});
		TweenLite.to(hole.scale, .25, {x:0, z:0});

		setTimeout(me.doShow, 250);

	}

	this.doShow = function(){

		if(!is_alive){return;}

		clearTimeout(move_timeout);

		//find new target id
		var new_target_id = target_id;
		while(new_target_id == target_id){
			new_target_id = target_random[__utils.getRandomInt(0, target_random.length-1)];
		}


		target_id = new_target_id;
		current_blocker = blockers[target_id];
		current_slot = slots[target_id];
		current_target = targets[target_id];

		var target_pos = current_target.getPosition();

		//kill all tweens
		TweenLite.killTweensOf(character.position);
		TweenLite.killTweensOf(hole.position);
		TweenLite.killTweensOf(hole.scale);

		//animate in
		TweenLite.set(character.position, {x: current_slot.position.x, y: current_slot.position.y - 7, z: current_slot.position.z});
		TweenLite.to(character.position, .25, {y: current_slot.position.y});

		TweenLite.set(hole.position, {x: target_pos.x * M2P, y: 0.05, z: target_pos.y * M2P});
		TweenLite.set(hole.scale, {x:0, z:0});
		TweenLite.to(hole.scale, .25, {x:1, z:1, onComplete: me.doShowFinished});

		hole.visible=true;
		character.visible=true;

	}


	this.doShowFinished = function(){

		if(!is_alive){return;}

		if(captured_ball){
			var user_data = captured_ball.getUserData();
			var ball_model = user_data.object;
			TweenLite.set(ball_model.position, {x:current_target.getPosition().x * M2P, y:-2.0, z:current_target.getPosition().y * M2P});
			TweenLite.to(ball_model.position, 0.25, {y:ball_model.radius, onComplete:me.doReleaseBall});
		
		}else{
			//activate
			PHYSICS.queue.push({me:current_blocker, action:GAME.doActivateBody});
			PHYSICS.queue.push({me:current_target, action:GAME.doActivateBody});
			move_timeout = setTimeout(me.doMove, move_delay * 1000);
		}


	}

	this.doReleaseBall =  function(){

		if(!is_alive){return;}


		clearTimeout(move_timeout);
		is_busy = false;

		var user_data = captured_ball.getUserData();
		var ball_model = user_data.object;
		ball_model.manual_pos = false;
		ball_model.visible=true;

		captured_ball.setPosition(current_target.getPosition());
		captured_ball.setLinearVelocity(new Vec2(0,0));

		PHYSICS.queue.push({me:current_blocker, action:GAME.doActivateBody});
		PHYSICS.queue.push({me:captured_ball, action:GAME.doActivateBody});
		captured_ball = null;

		__snds.playSound("snd_coyote_release");	

		//wait for reset
		update_wait = {};
		update_wait.doUpdate = function(){
			for(var i=0; i < oGAME.balls.length; i++){
				var ball_pos = oGAME.balls[i].rb.getPosition();
				var dist = Vec2.distance(ball_pos, current_target.getPosition());
				if(dist < 1){return;}
			}
			this.forget = true;
			me.doMove();
		}
		GAME.actives.push(update_wait);

	}



	me.doInit();

}
