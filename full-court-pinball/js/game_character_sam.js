
//----------------------------------------------
// Sam
//---------------------------------------------

var GameSam = function(){

	var me = this;

	var character;
	var target, switch_show, switch_hide;

	var reset_delay;

	var is_alive = true;
	this.doDestroy = function(){
		is_alive = false;
	}

	this.doInit = function(){

		trace("SAM.doInit()");

		//3d items
		character = GAME.table.getObjectByName("popup_sam");

		//targets
		target = oTABLE.items.sam;
		target.setUserData({rb:target, hit_callback:me.doHit});
		
		switch_show = oTABLE.items.sam_show;
		switch_show.setUserData({enter_callback : me.doShow});
		
		switch_hide = oTABLE.items.sam_hide;
		switch_hide.setUserData({enter_callback : me.doHide});

		PHYSICS.queue.push({me:switch_show, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:switch_hide, action:GAME.doActivateBody});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});

	}

	this.doHit = function(contact, ball, other){
		trace("SAM.doHit()");
	}

	this.doShow = function(contact, ball, other){

		PHYSICS.queue.push({me:switch_show, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:switch_hide, action:GAME.doActivateBody});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});

		TweenLite.to(character.position, 0.75, {y: 0, ease:Elastic.easeOut});

		__snds.playSound("snd_blocker_switch");
		
	}

	this.doHide = function(contact, ball, other){
		
		var door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
		var ball_velocity = ball.getLinearVelocity();
		var ball_vector = new THREE.Vector2(ball_velocity.x, ball_velocity.y).normalize();
		var dot_product = door_vector.dot(ball_vector);
		if(dot_product > 0 ){return;}

		PHYSICS.queue.push({me:switch_hide, action:GAME.doDeactivateBody});
		PHYSICS.queue.push({me:switch_show, action:GAME.doActivateBody});
		PHYSICS.queue.push({me:target, action:GAME.doDeactivateBody});

		TweenLite.to(character.position, 0.25, {y: -12, ease:Power1.easeIn});

		__snds.playSound("snd_blocker_switch");
	}



	me.doInit();

}
