
//----------------------------------------------
// Speedy
//---------------------------------------------

var GameSpeedy = function(){

	var me = this;

	var target;
	var character, accelerator;
	var update_fx;

	var pos_up,pos_dn;
	var boost_speed = 30;

	var is_alive = true;
	
	this.doDestroy = function(){
		is_alive = false;
	}

	this.doInit = function(){

		trace("TWEETY.doInit()");

		//3d items
		character = GAME.table.getObjectByName("popup_speedy");
		accelerator = GAME.table.getObjectByName("accelerator_speedy");

		//target
		target = oTABLE.items.speedy_booster;
		target.setUserData({enter_callback:me.doHit});
		PHYSICS.queue.push({me:target, action:GAME.doDeactivateBody});

		//init accelerator texture
		var cloneTexture = accelerator.material.map.clone();
		cloneTexture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({map:cloneTexture});
		accelerator.material = material;
		accelerator.visible=false;

		//init character
		pos_up = character.position.y;
		pos_dn = pos_up-3;
		character.position.y = pos_dn;

	}


	this.doActivate = function(){

		trace("SPEEDY.doActivate()");

		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});
		accelerator.visible=true;
		TweenLite.to(character.position, 0.5, {y: pos_up, ease:Elastic.easeOut});

		update_fx = {};
		update_fx.doUpdate = function(){
			accelerator.material.map.offset.y += 0.05;
		}
		GAME.actives.push(update_fx);

	}

	this.doHit = function(contact, ball, other){
		
		trace("SPEEDY.doHit()");

		GAME.GRANNY.doReset();

		var user_data = other.getUserData();
		var door_angle = other.getAngle();
		var door_vector = new THREE.Vector2(Math.cos(door_angle), Math.sin(door_angle)).normalize();
		ball.setLinearVelocity(door_vector.multiplyScalar(boost_speed));
		
		__snds.playSound("snd_speedy_boost");

		me.doReset();
	}


	this.doReset = function(){
		accelerator.visible=false;
		update_fx.forget = true;
		PHYSICS.queue.push({me:target, action:GAME.doDeactivateBody});
		GAME.doResetTriggerGroup(3);
		TweenLite.to(character.position, 0.5, {y: pos_dn, ease:Elastic.easeOut});

	}

	me.doInit();

}
