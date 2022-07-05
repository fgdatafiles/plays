
//----------------------------------------------
// Granny
//---------------------------------------------

var GameGranny = function(){

	var me = this;
	var captured_ball = null; 
	var update_fx;

	var target, booster;
	var popup_granny, popup_roadrunner, speed_zone;

	var granny_bounce = 5;
	var granny_points = 500;
	var boost_speed = 40;

	var reset_timeout;
	var duration = 10;

	var is_alive = true;
	this.doDestroy = function(){
		clearTimeout(reset_timeout);
		is_alive = false;
	}

	this.doInit = function(){

		//3d items
		popup_granny = GAME.table.getObjectByName("popup_granny");
		popup_roadrunner = GAME.table.getObjectByName("popup_roadrunner");
		
		speed_zone = GAME.table.getObjectByName("accelerator_rr");
		var cloneTexture = speed_zone.material.map.clone();
		cloneTexture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({map:cloneTexture });


		speed_zone.material = material;
		speed_zone.visible=false;

		//granny
		target = oTABLE.items.granny;
		target.setUserData({rb:target, hit_callback:me.doHitGranny});

		//booster
		booster = oTABLE.items.roadrunner_booster;
		booster.setUserData({rb:target, enter_callback:me.doHitBoost});

		speed_zone.material.opacity = 0;
	}



	this.doHitGranny = function(contact, ball, other){
		trace("GRANNY.doHitGranny()");

		clearTimeout(reset_timeout);

		captured_ball = ball;
		var ball_user_data = ball.getUserData();
		var ball_model = ball_user_data.object;

		ball_model.ball_granny.visible=true;
		ball.linearDampingSave = null;
		ball.setLinearDamping(1.5);
		ball_model.is_shaking = true;

		var manifold = contact.getWorldManifold();
		var normal = manifold.normal;
		normal.mul(granny_bounce);
		ball.applyLinearImpulse(normal,  other.getPosition()); 

		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

		TweenLite.to(popup_granny.position, 0.25, {y: -12});

		__snds.playSound("snd_granny_hit");	
		speed_zone.visible=true;
		update_fx = {};
		update_fx.doUpdate = function(){
			speed_zone.material.map.offset.y += 0.05;
		}
		GAME.actives.push(update_fx);

		reset_timeout = setTimeout(me.doReset, duration*1000);
		
	}


	this.doHitBoost = function(contact, ball, other){
		trace("GRANNY.doHitBoost()");

		var user_data = other.getUserData();
		var door_angle = other.getAngle();
		var door_vector = new THREE.Vector2(Math.cos(door_angle), Math.sin(door_angle)).normalize();
		ball.setLinearVelocity(door_vector.multiplyScalar(boost_speed));
		__snds.playSound("snd_roadrunner_boost");

		me.doReset();	
	}


	this.doReset = function(){
		
		clearTimeout(reset_timeout);
		if(!captured_ball){return;}

		var ball = captured_ball;
		var ball_user_data = ball.getUserData();
		var ball_model = ball_user_data.object;

		ball_model.ball_granny.visible = false;
		ball_model.is_shaking = false;

		ball.linearDampingSave = null;
		ball.setLinearDamping(0.0);

		captured_ball = null;
		speed_zone.visible=false;
		update_fx.forget = true;
		TweenLite.to(popup_granny.position, 0.5, {y: 0, ease:Elastic.easeOut});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});
	}

	me.doInit();

}
