
//----------------------------------------------
// Bugs
//---------------------------------------------

var GameBugs = function(){

	var me = this;
	var captured_ball = null; 
	var update_wait;
	var target, spawnpoint, hole, character;

	var blocker_1, blocker_2;
	var update_mover;
	var start_x, min_x, max_x, dir, speed;

	var is_alive = true;
	this.doDestroy = function(){
		is_alive = false;
		update_mover.forget = true;
	}


	this.doInit = function(){
		
		update_mover = {};
		//3d items
		character = GAME.table.getObjectByName("popup_bugs1");
		hole = GAME.table.getObjectByName("bugs_transporter");

		//holes - physics
		target = oTABLE.items.bugs_transporter;
		target.setUserData({rb:target, enter_callback:me.doHit});


		blocker_1 = oTABLE.items.bugs_1;
		blocker_1.setUserData({id: 1, hit_callback:me.doHitBlocker});

		blocker_2 = oTABLE.items.bugs_2;
		blocker_2.setUserData({id: 2, hit_callback:me.doHitBlocker});

		var offset = blocker_1.getPosition().x - blocker_2.getPosition().x;

		var target_pos_1 = blocker_1.getPosition();
		var target_pos_2 = blocker_2.getPosition();
		var target_x =  (target_pos_1.x + target_pos_2.x) * 0.5;
		var target_y =  (target_pos_1.y + target_pos_2.y) * 0.5;


		start_x = target_x;
		min_x = start_x - (35 * P2M);
		max_x = start_x + (100 * P2M);
		dir = 1;
		speed = 2;

		update_mover = {};
		update_mover.doUpdate = me.doMove;
		GAME.actives.push(update_mover);



	}


	this.doMove = function(){

			blocker_1.setLinearVelocity(Vec2(speed * dir, 0));
			blocker_2.setLinearVelocity(Vec2(speed * dir, 0));
			
			var target_pos_1 = blocker_1.getPosition();
			var target_pos_2 = blocker_2.getPosition();
			var target_x =  (target_pos_1.x + target_pos_2.x) * 0.5;
			var target_y =  (target_pos_1.y + target_pos_2.y) * 0.5;

			character.position.x = target_x * M2P
			character.position.z = target_y * M2P;
			
			if(dir > 0 && target_x > max_x){
				dir = 0;
				setTimeout(function(){
					dir = -1;
				}, 500);
			}else if(dir < 0 && target_x < min_x){
				dir = 0;
				setTimeout(function(){
					dir = 1;
				}, 500);
			}
	}

	


	this.doHitBlocker  = function(contact, ball, other){
		var user_data = other.getUserData();
		
		if(user_data.id == 1 ){
			ball.setLinearVelocity(Vec2(15, 0));
		}else if(user_data.id == 2 ){
			ball.setLinearVelocity(Vec2(-15, 0));
		}
	}


	this.doHit = function(contact, ball, other){
		trace("BUGS.doHit()");

		if(captured_ball){return;}

		//deactive ball and hole
		PHYSICS.queue.push({me:ball, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

		GAME.GRANNY.doReset();

		//capture ball and attach to hole
		captured_ball = ball;
		var user_data = captured_ball.getUserData();
		var ball_model = user_data.object;
		ball_model.manual_pos = true;

		//animate out
		TweenLite.killTweensOf(ball_model.position);

		//move ball to center
		TweenLite.to(ball_model.position, 0.25, {x:target.getPosition().x * M2P, z:target.getPosition().y * M2P});
		TweenLite.to(ball_model.position, 0.25, {y: -2, delay: 0.25, onComplete: me.doReleaseBall});

		__snds.playSound("snd_bugs_transport");	
		
	}

	this.doReleaseBall =  function(){
		var user_data = captured_ball.getUserData();
		var ball_model = user_data.object;
		ball_model.manual_pos = false;

		captured_ball.setPosition(pl.Vec2(oGAME.ball_spawn_pos.x, oGAME.ball_spawn_pos.y - 4));
		captured_ball.setLinearVelocity(new Vec2(0,-40));
		PHYSICS.queue.push({me:captured_ball, action:GAME.doActivateBody});
		__snds.playSound('pinball_launch');
		captured_ball = null;
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});

	}

	

	me.doInit();

}
