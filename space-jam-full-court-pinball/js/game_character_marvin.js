
//----------------------------------------------
// marvin
//---------------------------------------------

var GameMarvin = function(){

	var me = this;
	var spawner, target;
	var character, pos_1, pos_2, fx;
	var duration = 10;

	var reset_timeout;
	var zone_x, zone_y;

	var update_fx, update_wait;


	var is_alive = true;
	this.doDestroy = function(){
		clearTimeout(reset_timeout);
		update_wait.forget = true;
		is_alive = false;
	}



	this.doInit = function(){

		//3d items
		character = GAME.table.getObjectByName("popup_marvin");
		pos_1 = GAME.table.getObjectByName("track_marvin_1");
		pos_2 = GAME.table.getObjectByName("track_marvin_2");
		fx = GAME.table.getObjectByName("fx_marvin");

		fx.material.blending = 2;
		fx.material.side = THREE.DoubleSide;
		fx.material.opacity = 0;

	update_wait = {};
		//target
		target = oTABLE.items.marvin_target;
		target.setUserData({is_active:true, rb:target, hit_callback:me.doHit});

		//spawner - inactive
		spawner = oTABLE.items.marvin_spawner;
		spawner.setUserData({is_active:true, rb:spawner, enter_callback:me.doMultiply});
		PHYSICS.queue.push({me:spawner, action:GAME.doDeactivateBody});

		//reset zones
		zone_y = target.getPosition().y + 1;
		zone_x = target.getPosition().x + 1;
	}


	this.doHit = function(contact, ball, other){
		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:spawner, action:GAME.doActivateBody});
		PHYSICS.queue.push({action:me.doMoveAnimateOpen});
		__snds.playSound('snd_marvin_unlock');

		
	}


	this.doMoveAnimateOpen = function()
	{
		__snds.playSound("pinball_target");
		TweenLite.to(character.position, .25, {y: pos_1.position.y - 5});
		TweenLite.set(character.position, {x: pos_2.position.x, y: pos_2.position.y - 5, z: pos_2.position.z, delay: 0.25});
		//TweenLite.set(character.rotation, {y: pos_2.rotation.y, delay: 0.25});
		TweenLite.to(character.position, .5, {y: pos_2.position.y, delay: 0.25, ease:Elastic.easeOut});
		setTimeout(me.doStartMarvinFX, 500);
		reset_timeout = setTimeout(me.doReset, duration * 1000);
	}


	this.doStartMarvinFX = function(me)
	{
		trace("doStartMarvinFX()");
		fx.material.opacity = 1.0;

		update_fx = {};
		update_fx.doUpdate = function(){
			fx.material.map.offset.y += 0.05;
		}
		GAME.actives.push(update_fx);

	}

	this.doMultiply = function(contact, ball, other){

		trace("MARVIN.doMultiply()");

		//deactivate spawner
		PHYSICS.queue.push({me:spawner, action:GAME.doDeactivateBody});

		//destroy current ball
		ball.setLinearVelocity(new Vec2(0,0));

		PHYSICS.queue.push({action:me.doCreateNewBalls});
	}


	this.doCreateNewBalls = function(){

		__snds.playSound('snd_marvin_multiply');

		var delay = 200;
		for(var i=0; i<2; i++){
			setTimeout(me.doSpawnNewBall, delay);
			delay += 200;
		}
	}

	this.doSpawnNewBall = function(){

		var newball = GAME.doMakeBall(spawner.getPosition());
		newball.applyLinearImpulse(pl.Vec2(0 , -10), pl.Vec2(0 , 0));

		clearTimeout(reset_timeout);
		reset_timeout = setTimeout(me.doWaitForReset, 1000);

	}


	this.doWaitForReset = function(){

		update_wait = {};
		update_wait.doUpdate = function(){
			for(var i=0; i < oGAME.balls.length; i++){
				var ball_pos = oGAME.balls[i].rb.getPosition();
				if(ball_pos.y < zone_y && ball_pos.x < zone_x){
					return;
				}
			}
			this.forget = true;
			me.doReset();
		}
		GAME.actives.push(update_wait);
	}



	this.doReset = function(){

		TweenLite.to(fx.material, .25, {opacity: 0, onComplete : function(){update_fx.forget = true;}});

		TweenLite.to(character.position, .25, {y: pos_2.position.y - 5});
		TweenLite.set(character.position, {x: pos_1.position.x, y: pos_1.position.y - 5, z: pos_1.position.z, delay: 0.25});
		TweenLite.set(character.rotation, {y: pos_1.rotation.y, delay: 0.25});
		TweenLite.to(character.position, .5, {y: pos_1.position.y, delay: 0.25, ease:Elastic.easeOut});

		PHYSICS.queue.push({me:spawner, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});
	}


	me.doInit();

}
