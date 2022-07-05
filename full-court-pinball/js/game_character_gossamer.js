
//----------------------------------------------
// Gossamer
//---------------------------------------------
Game.prototype.doStartGossamer = function(trigger)
{
	var user_data = trigger.getUserData();
	GAME.GOSSAMER.doStart(user_data.group);
}




	

var GameGossamer = function(){

	var me = this;
	var captured_ball = null; 
	var update_wait;
	var character;
	var target;
	var trigger_group;

	var start_x, min_x, max_x, dir, speed;
	var update_mover;

	var is_alive = true;
	this.doDestroy = function(){
		is_alive = false;
		update_wait.forget = true;
	}


	this.doInit = function(){

		update_wait = {};

		//3d items
		character = GAME.table.getObjectByName("popup_gossamer");
		character.position.y = -16;

		target = oTABLE.items.gossamer_target;
		target.setUserData({rb:target, hit_callback:me.doHit});

		start_x = target.getPosition().x;
		min_x = start_x - (50 * P2M);
		max_x = start_x + (50 * P2M);
		dir = 1;
		speed = 1.5;

	}

	this.doStart = function(group){
		trace("GOSSAMER.doStart() " + group);

		trigger_group = group;

		TweenLite.to(character.position, .25, {y: 0});
		PHYSICS.queue.push({me:target, action:GAME.doActivateBody});

		update_mover = {};
		update_mover.doUpdate = function(){

			target.setLinearVelocity(Vec2(speed * dir, 0));
			
			var target_pos = target.getPosition();
			character.position.x = target_pos.x * M2P
			character.position.z = target_pos.y * M2P;
			if(dir > 0 && target_pos.x > max_x){
				dir = -1;
			}else if(dir < 0 && target_pos.x < min_x){
				dir = 1;
			}
		}
		GAME.actives.push(update_mover);
}



	this.doHit = function(contact, ball, other){
		trace("GOSSAMER.doHit()");

		PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});
		TweenLite.to(character.position, .25, {y: -16});
		__snds.playSound('snd_gossamer_hit');

		update_mover.forget = true;

		var pnts = 500;
		var p = other.getPosition();
		GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));

		me.doReset();

	}



	this.doReset = function(){
		trace("GOSSAMER.doReset()");
		GAME.doResetTriggerGroup(trigger_group);
	}

	

	me.doInit();

}
