
//----------------------------------------------
// Tweety
//---------------------------------------------

var GameTweety = function(){

	var me = this;

	var target;
	var character, dunk_pad, basket_pos;

	var captured_ball = null;
	var pos_up, pos_dn;
	var update_fx;


	var is_alive = true;
	
	this.doDestroy = function(){
		is_alive = false;
	}



	this.doInit = function(){

		trace("TWEETY.doInit()");

		//3d items
		character = GAME.table.getObjectByName("popup_tweety");
		dunk_pad = GAME.table.getObjectByName("accelerator_tweety");
		basket_pos = GAME.table.getObjectByName("basket_pos");

		//target
		target = oTABLE.items.tweety_dunk;
		target.setUserData({enter_callback:me.doHit});
		PHYSICS.queue.push({me:target, action:GAME.doDeactivateBody});

		//init dunk pad
		var cloneTexture = dunk_pad.material.map.clone();
		cloneTexture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({map:cloneTexture });
		dunk_pad.material = material;
		dunk_pad.visible=false;

		//init character
		pos_up = character.position.y;
		pos_dn = pos_up - 0;
		character.position.y = pos_dn;

	}


	this.doActivate = function(){

		trace("TWEETY.doActivate()");

		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});
		dunk_pad.visible=true;
		TweenLite.to(character.position, 0.5, {y: pos_up, ease:Elastic.easeOut});

		update_fx = {};
		update_fx.doUpdate = function(){
			dunk_pad.material.map.offset.y += 0.05;
		}
		GAME.actives.push(update_fx);

	}

	this.doHit = function(contact, ball, other){
		
		trace("TWEETY.doHit()");

		dunk_pad.visible=false;
		TweenLite.to(character.position, 0.5, {y: pos_dn});
		update_fx.forget = true;
		PHYSICS.queue.push({me:ball, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

		var user_data = other.getUserData();

		//capture ball
		captured_ball = ball;
		var ball_userdata = ball.getUserData();
		var ball_model = ball_userdata.object;
		ball_model.manual_pos = true;


		__snds.playSound("snd_tweety");


		//find floor pos
		var land_y = 0;
		var floor = GAME.table.getObjectByName("physics_floor_" + 2);
		ball_model.raycaster.set(ball_model.position, ball_model.down);
		var intersects = [];
		floor.raycast(ball_model.raycaster, intersects);
		if(intersects.length > 0){
			var hit = intersects[0];
			land_y = Math.max(0, hit.point.y) + ball_model.radius; 
		}

		//animate BALL model
		TweenLite.killTweensOf(ball_model.position);
		TweenLite.to(ball_model.position, 0.25, {x:basket_pos.position.x, y:basket_pos.position.y + 5, z:basket_pos.position.z, ease:Power1.easeOut, onComplete: function(){
			setTimeout(GAME.BasketExplode.doExplode, 500);
			__snds.playSound("snd_makebasket");
		}});
		TweenLite.to(ball_model.position, 0.5, {y:land_y, delay:0.25, ease:Bounce.easeOut, onComplete: me.doRequestRelease});



	}


	this.doRequestRelease =  function(){
		PHYSICS.queue.push({me:captured_ball, action:me.doReleaseBall});
	}

	this.doReleaseBall = function(ball){

		trace("TWEETY.doReleaseBall()");

		var ball_userdata = ball.getUserData();
		var ball_model = ball_userdata.object;
		ball_model.manual_pos = false;

		

		ball.setPosition(new Vec2(basket_pos.position.x * MODEL2PHYSICS, basket_pos.position.z * MODEL2PHYSICS));
		ball.setLinearVelocity(new Vec2(10,0));
		PHYSICS.queue.push({me:captured_ball, action:GAME.doActivateBody});

		var pnts = 5000;
		var p = ball.getPosition();
		GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));

		captured_ball = null;

		GAME.doResetTriggerGroup(4);
		dunk_pad.visible=false;
		TweenLite.to(character.position, 0.5, {y: pos_dn});


	}


	



	me.doInit();

}
