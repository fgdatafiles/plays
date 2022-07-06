
//----------------------------------------------
// Taz
//---------------------------------------------

var GameTaz = function(){

	var me = this;
	var target;
	var character, base;
	var duration = 10;
	var reset_timeout;
	var captured_ball = null;
	var rot_speed = 0;
	var launch_speed = 20;
	var base_rot = 0;
	var ready_for_reset = true;
	var radius;
	var launch_directions = [];


var is_alive = true;
	
	this.doDestroy = function(){
		clearTimeout(reset_timeout);
		is_alive = false;
	}


	this.doInit = function(){

		//3d items
		character = GAME.table.getObjectByName("popup_taz");
		base = GAME.table.getObjectByName("track_taz");
		base.attach(character);
		base_rot = base.rotation.y;

		target = oTABLE.items.taz;
		var user_data = target.getUserData();
		radius = user_data.radius;
		target.setUserData({rb:target, enter_callback:me.doHit});

		//direction helpers
		launch_directions = [];
		for(var s in oTABLE.helpers){
			if(s.indexOf("taz_dir_") != -1){
				var helper = oTABLE.helpers[s];
				launch_directions.push(new THREE.Vector2(Math.cos(__utils.radFromDeg(helper.rotation)), Math.sin(__utils.radFromDeg(helper.rotation))));
			}
		}
	}


	this.doHit = function(contact, ball, other){
		trace("TAZ.doHit()");

		captured_ball = ball;
		ready_for_reset = false;

		PHYSICS.queue.push({me:ball, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({action:me.doStartSpin});


	}


	this.doStartSpin = function(){

		__snds.playSound("snd_taz_spin");

		//attach ball to spinner
		var user_data = captured_ball.getUserData();
		var ball = user_data.object;
		ball.manual_pos = true;
		base.attach(ball);

		//move to center
		TweenLite.to(ball.position, 1.5, {x:2, z:2});
		TweenLite.to(character.scale, .25, {x:1.5,y:1.5,z:1.5});

		//spin updater
		rot_speed = 0.75;
		me.forget = false;
		me.doUpdate = me.doSpin;
		GAME.actives.push(me);
		
		//release after delay
		setTimeout(me.doLaunchBall, 1500);
	}


	this.doLaunchBall = function(){
		var user_data = captured_ball.getUserData();
		var ball = user_data.object;
		GAME.scene.attach(ball);
		ball.manual_pos = false;

		var dir = launch_directions[__utils.getRandomInt(0, launch_directions.length-1)].normalize();
		var vel = dir.multiplyScalar(launch_speed)

		captured_ball.setLinearVelocity(new Vec2(vel.x, vel.y));
		PHYSICS.queue.push({me:captured_ball, action:GAME.doActivateBody});
		ready_for_reset = true;

		__snds.playSound("snd_taz_release");

	}


	this.doSpin = function(){
		base.rotation.y += rot_speed;
		if(base.rotation.y >=360){
			base.rotation.y-=360;
		}
		if(ready_for_reset){
			var dist = Vec2.distance(captured_ball.getPosition(), target.getPosition());
			if(dist > radius + 2){
				me.doReset();
			}
		}
	}

	this.doReset = function(){
		trace("TAZ.doReset()");

		me.forget = true;
		has_launched = false;
		base.rotation.y = base_rot;
		TweenLite.to(character.scale, .25, {x:1,y:1,z:1});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});
	}

	me.doInit();

}
