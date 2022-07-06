
//----------------------------------------------
// Daffy
//---------------------------------------------

var GameDaffy = function(){

	var me = this;
	var target_1, target_2;
	var character, slot_1, slot_2, shoot_1, shoot_2, daffy_basket, daffy_dunk;

	var boost_speed = 30;
	var move_timeout;
	var move_delay = 5;
	var position_index = 0;
	var next_pos, current_pos, current_slot; 
	var captured_ball = null;
	var is_basket = false;

	var is_busy = false;

	var is_alive = true;
	
	this.doDestroy = function(){
		clearTimeout(move_timeout);
		is_alive = false;
	}


	this.doInit = function(){

		//3d items
		character = GAME.table.getObjectByName("popup_daffy");
		slot_1 = GAME.table.getObjectByName("track_daffy_1");
		slot_2 = GAME.table.getObjectByName("track_daffy_2");
		slots = [slot_1,slot_2];
		
		//targets
		target_1 = oTABLE.items.daffy_1;
		target_1.setUserData({has_daffy:false, enter_callback:me.doEnterDaffy, exit_callback:me.doExitDaffy});
		
		target_2 = oTABLE.items.daffy_2;
		target_2.setUserData({has_daffy:false, enter_callback:me.doEnterDaffy, exit_callback:me.doExitDaffy});

		targets = [target_1, target_2];

		//shoot triggers
		shoot_1 = oTABLE.items.daffy_1_shoot;
		shoot_1.setUserData({enter_callback:me.doShoot});
		
		shoot_2 = oTABLE.items.daffy_2_shoot;
		shoot_2.setUserData({enter_callback:me.doShoot});


		//basket sensor
		daffy_dunk = oTABLE.items.daffy_dunk;
		daffy_dunk.setUserData({enter_callback:me.doDunk});



		position_index = 0;
		current_slot = slot_1;
		current_target = target_1;
		is_basket = false;
		captured_ball = null;
		is_busy = false;

		move_timeout = setTimeout(me.doMove, move_delay * 1000);

	}


	this.doMove = function(){

		if(!is_alive){return;}

		//move to next position
		position_index++;
		if(position_index >= targets.length){
			position_index = 0;
		}

		//dissable daffy on both targets
		var user_data_1 = target_1.getUserData();
		user_data_1.has_daffy = false;
		target_1.setUserData(user_data_1);

		var user_data_2 = target_2.getUserData();
		user_data_2.has_daffy = false;
		target_2.setUserData(user_data_2);

		//hide daffy
		TweenLite.to(character.position, .25, {y: current_slot.position.y - 5, onComplete: me.doShow});
	}


	this.doShow = function(){

		if(!is_alive){return;}

		current_slot = slots[position_index];
		current_target = targets[position_index];

		var user_data = current_target.getUserData();
		user_data.has_daffy = true;
		current_target.setUserData(user_data);

		//show daffy
		TweenLite.set(character.position, {x: current_slot.position.x, y: current_slot.position.y - 5, z: current_slot.position.z});
		TweenLite.set(character.rotation, {y: current_slot.rotation.y});
		TweenLite.to(character.position, .5, {y: current_slot.position.y, ease:Elastic.easeOut});

		move_timeout = setTimeout(me.doMove, move_delay * 1000);
	}







	this.doEnterDaffy = function(contact, ball, other){
		other.update_touching = {};
		other.update_touching.forget = false;
		other.update_touching.ball = ball;
		other.update_touching.contact = contact;
		other.update_touching.other = other;
		other.update_touching.door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
		other.update_touching.doUpdate = function(){
			var ball_velocity = this.ball.getLinearVelocity();
			var ball_vector = new THREE.Vector2(ball_velocity.x, ball_velocity.y).normalize();
			var dot_product = this.door_vector.dot(ball_vector);
			if(dot_product < 0 ){
				me.doHitDaffy(this.ball, this.other);
				this.forget = true;
			}
		}
		GAME.actives.push(other.update_touching);

	}

	this.doExitDaffy = function(contact, ball, other){
		if(other.update_touching){
			other.update_touching.forget = true;
		}
	}




	this.doHitDaffy = function(ball, other){

		trace("");
		trace("DAFFY.doHit()");

		if(!is_alive){return;}


		//switch to layer 4
		GAME.doSwitchLevel(ball, 4);

		var user_data = other.getUserData();

		if(!captured_ball && user_data.has_daffy){
			trace("--> SHOWTIME!!!!");
			is_basket = true;
			is_busy = true;
			clearTimeout(move_timeout);
			var door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
			ball.setLinearVelocity(door_vector.multiplyScalar(-30));
		}
	}





	this.doShoot = function(contact, ball, other){

		if(!is_alive){return;}

		trace("DAFFY.doShoot()");

		var user_data = other.getUserData();
		var ball_userdata = ball.getUserData();

		if(is_basket){
			me.doBasket(ball);
		}else{
			var door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
			ball.setLinearVelocity(door_vector.multiplyScalar(-30));
		}

	}




	this.doBasket = function(ball){

		trace("DAFFY.doBasket()");

		__snds.playSound("snd_daffy_shoot");

		PHYSICS.queue.push({me:ball, action:GAME.doDeactivateBody});

		//capture ball
		captured_ball = ball;
		var ball_userdata = ball.getUserData();
		var ball_model = ball_userdata.object;
		ball_model.manual_pos = true;

		//find landing position
		var land_y = 0;

		var floor = GAME.table.getObjectByName("physics_floor_2");
		var basket_pos = GAME.table.getObjectByName("basket_pos");
		
		ball_model.raycaster.set(basket_pos.position, ball_model.down);
		var intersects = [];
		floor.raycast(ball_model.raycaster, intersects);
		if(intersects.length > 0){
			var hit = intersects[0];
			land_y = Math.max(0, hit.point.y) + ball_model.radius; 
		}

		//animate BALL model
		TweenLite.killTweensOf(ball_model.position);
		TweenLite.to(ball_model.position, 0.5, {x:basket_pos.position.x, y:basket_pos.position.y + 5, z:basket_pos.position.z, ease:Power1.easeOut, onComplete: function(){
			setTimeout(GAME.BasketExplode.doExplode, 250);
			__snds.playSound("snd_makebasket");
		}});
		TweenLite.to(ball_model.position, 0.5, {y:land_y, delay:0.66, ease:Bounce.easeOut, onComplete: me.doRequestRelease});



	}

	this.doRequestRelease =  function(){

		GAME.doSwitchLevel(captured_ball, 2);
		PHYSICS.queue.push({me:captured_ball, action:me.doReleaseBall});
	}

	this.doReleaseBall = function(ball){

		trace("DAFFY.doReleaseBall()");

		var ball_userdata = ball.getUserData();
		var ball_model = ball_userdata.object;
		ball_model.manual_pos = false;

		var basket_pos = GAME.table.getObjectByName("basket_pos");
		ball.setPosition(new Vec2(basket_pos.position.x * MODEL2PHYSICS, basket_pos.position.z * MODEL2PHYSICS));
		ball.setLinearVelocity(new Vec2(10,0));
		PHYSICS.queue.push({me:captured_ball, action:GAME.doActivateBody});

		var pnts = 5000;
		var p = ball.getPosition();
		GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));

		is_basket = false;
		is_busy = false;
		captured_ball = null;
		me.doMove();

	}




	me.doInit();

}
