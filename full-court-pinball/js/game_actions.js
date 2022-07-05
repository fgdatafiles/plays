


Game.prototype.doNewBall = function(){

		var need_new_ball = true;
		
		if(GAME.ball_in_trap && oGAME.active_balls > 1){need_new_ball = false;}
		if(!GAME.ball_in_trap && oGAME.active_balls > 0){need_new_ball = false;}
			
		if(need_new_ball){
			if(GAME.balls_remaining > 0){
				GAME.balls_remaining--;
				GUI.doUpdateBalls();
				oGAME.launching = true;
				GAME.doResetPickups();
				GAME.doMakeBall(oGAME.ball_spawn_pos);
			}else{
				GAME.doGameOver();
				
			}
		}
	}

		

	Game.prototype.doMakeBall = function(pos)
	{
		
		trace("doMakeBall()");

		//ball
		var bodyDef = {type:"dynamic"};
		var fixtureDef = {density:1.0, friction:0, restitution:0.05};
		fixtureDef.shape = pl.Circle(10 * P2M);
		fixtureDef.filterMaskBits = 1;

		var body = PHYSICS.world.createDynamicBody(bodyDef);
		body.setPosition(pl.Vec2(pos.x, pos.y));
		body.setBullet(true);

		var rb = body.createFixture(fixtureDef);
		
		var ball = new THREE.Group();

		var ball_normal = oASSETS.ball.clone();
		ball_normal.scale.set(1,1,1);
		ball_normal.position.set(0,0,0);
		ball.add(ball_normal);

		var ball_granny = oASSETS.ball_granny.clone();
		ball_granny.scale.set(1.1,1.1,1.1);
		ball_granny.position.set(0,0,0);
		ball_granny.visible=false;
		ball_normal.add(ball_granny);

		var ball_lola = oASSETS.ball_lola.clone();
		ball_lola.scale.set(1.3,1.3,1.3);
		ball_lola.position.set(0,0,0);
		ball_lola.visible = GAME.LOLA.has_multiplier;
		ball_normal.add(ball_lola);
		ball_lola.material = new THREE.MeshBasicMaterial({
			color: new THREE.Color( 0xff3300 ),
			transparent: false,
			opacity: 1.0,
			blending: THREE.AdditiveBlending
		});

		GAME.scene.add(ball);

		ball.ball_normal = ball_normal;
		ball.ball_granny = ball_granny;
		ball.ball_lola = ball_lola;

		__snds.playSound('pinball_newball');

		var box = new THREE.Box3().setFromObject( ball );
		var ball_box = new THREE.Vector3();
		box.getSize(ball_box);

		ball.pulse = new __utils.NewPulse(20, {seed:Math.random() * 90});
		ball.is_shaking = false;
		ball.pulse_shake_factor = 0;
		ball.pulse_scale_factor = 0;

		//trail
		ball.slash = new THREE.Mesh();
		
		
		ball.slash_material_normal = new MeshLineMaterial( {
			resolution: new THREE.Vector2(oSTAGE.wrapper_width, oSTAGE.wrapper_height),
			lineWidth: 2,
			color: new THREE.Color( 0xffffff ),
			transparent: true,
			opacity: 0.5,
			blending: THREE.AdditiveBlending
		});

		ball.slash_material_bonus = new MeshLineMaterial( {
			resolution: new THREE.Vector2(oSTAGE.wrapper_width, oSTAGE.wrapper_height),
			lineWidth: 2,
			color: new THREE.Color( 0xff3300 ),
			transparent: true,
			opacity: 1.0,
			blending: THREE.AdditiveBlending
		});

		ball.slash_material = ball.slash_material_normal;


		ball.slash_positions = [];
		GAME.scene.add(ball.slash);


		ball.doUpdate = GAME.doUpdateBall;
		ball.myfloor = null;
		ball.down = new THREE.Vector3(0,-1,0);
		ball.raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 30);
		ball.rb = body;
		ball.radius = ball_box.y * 0.5;
		ball.pos_y = 0.0;
		ball.speed_y = 0.0;
		ball.is_ball = true;
		ball.is_trapped = false;
		ball.tube = null;
        ball.need_destroy = false;
        ball.manual_pos = false;
        ball.glue_overlaps = 0;
		ball.last_trail = {x:0,y:0};
		ball.in_launch_zone = false;
		ball.world_pos = new THREE.Vector3();
		GAME.actives.push(ball);

		//set userdata
		var user_data = new Object();
		user_data.is_ball = true;
		user_data.object = ball;
		body.setUserData(user_data);
		
		oGAME.active_balls++;
		oGAME.balls.push(ball);
		
		return body;
		
	}






	
	Game.prototype.doUpdateBall = function(me)
	{

		if(me.need_destroy){return;}
		if(!me.manual_pos){

			//ball position
			var pos = me.rb.getPosition();
			me.position.set(pos.x * M2P, me.radius, pos.y * M2P);

			//pulse
			me.pulse_shake_factor = (me.is_shaking) ? 1 : Math.max(0, me.pulse_shake_factor - 0.25);
			me.ball_normal.position.x = (me.pulse.value * me.pulse_shake_factor * 0.15);



			me.pulse_scale_factor = (GAME.LOLA.has_multiplier) ? 1 : Math.max(0, me.pulse_scale_factor - 0.25);
			var pulse_scale = 1.3 + (me.pulse.value * me.pulse_scale_factor * 0.2);
			me.ball_lola.scale.set(pulse_scale, pulse_scale, pulse_scale);
			

			me.pulse.update();


			if(me.myfloor){
				me.raycaster.set(me.position.clone().add(new THREE.Vector3(0,20,0)), me.down);
				var intersects = [];
				me.myfloor.raycast(me.raycaster, intersects);
				var offset = 0;
				if(intersects.length > 0){
					var hit = intersects[0];
					me.position.y = Math.max(0, hit.point.y) + me.radius; 
				}
			}

			if(pos.x >= (415 * P2M) && pos.y >= (720 * P2M)){
				if(!me.in_launch_zone){
					me.in_launch_zone = true;
					GAME.doEnterLaunchZone(me);
				}
			}else{
				if(me.in_launch_zone){
					me.in_launch_zone = false;
					GAME.doExitLaunchZone(me);
				}
			}

			//magnets
			for(var i=0; i < oTABLE.magnets.length; i++){
				var magnet = oTABLE.magnets[i];
				var dist = Math.sqrt((magnet.pos.x-pos.x)*(magnet.pos.x-pos.x)+(magnet.pos.y-pos.y)*(magnet.pos.y-pos.y));
				if(dist <= magnet.radius){
					var p = magnet.pos.Copy();
					p.Subtract(pos);
					p.Normalize();
					p.Multiply(magnet.power);
					me.rb.applyLinearForce(p, pos);
				}
			}
		}


		
		//slash
		GAME.scene.remove(me.slash);
		me.slash.geometry.dispose();

		me.getWorldPosition( me.world_pos );

		me.slash_positions.unshift(new THREE.Vector3(me.world_pos.x, me.world_pos.y, me.world_pos.z));
		if(me.slash_positions.length > 30){
			me.slash_positions.pop();
		}

		//draw the trail
		if(me.slash_positions.length > 1){
			var line = new MeshLine();
			line.setPoints(me.slash_positions , function(p) {return 1 - p; });
			var mat = (GAME.LOLA.has_multiplier) ? me.slash_material_bonus : me.slash_material_normal;
		    me.slash = new THREE.Mesh(line, mat);
			GAME.scene.add(me.slash);
		}


		

	}




//==================================================================
//==================================================================
// OBJECTS
//==================================================================
//==================================================================
Game.prototype.doGamePoints = function(pnts, pos)
{
	GAME.score += pnts;
	new PointObject(pos, pnts);
	GUI.doUpdateScore();

	if(GAME.LOLA.has_multiplier){
		setTimeout(function(){
			GAME.score += pnts;
			new PointObject(pos, pnts);
			GUI.doUpdateScore();
			__snds.playSound("snd_lola_bonuspnts");
		},250);
	}

}



Game.prototype.doHitBumper = function(contact, ball, other)
{

	var user_data = other.getUserData();
	var game_object = user_data.object;

	//pulse
	if(game_object){
		var obj_scale = game_object.scale.x;
		TweenLite.killTweensOf(game_object.scale);
		game_object.scale.set(1.1,1.1,1.1);
		TweenLite.to(game_object.scale, .4, {x: 1, y:1, z:1});
	}

	if(user_data.snd){
		__snds.playSound(user_data.snd);	
	}

	if(user_data.bounce){
		var manifold = contact.getWorldManifold();
		var normal = manifold.normal;
		normal.mul(user_data.bounce);
		ball.applyLinearImpulse(normal,  other.getPosition()); 
	}

	if(user_data.pnts){
		GAME.doGamePoints(user_data.pnts, new THREE.Vector3(ball.getPosition().x * M2P, 3, ball.getPosition().y * M2P));
	}

	other.setUserData(user_data);
	
}



//------------------------
// bonus
//-----------------------

Game.prototype.doShowBonus = function(group, target)
{


	trace("doShowBonus() " + group + "," + target);

	var body = oTABLE.items["bonus_" + group + "_" + target];
	var user_data = body.getUserData();

	//activate
	PHYSICS.queue.push({me:body, action:GAME.doActivateBody});

	//light
	GAME.doSetLitState(user_data.object, true);
	
}

Game.prototype.doBonus = function(contact, ball, other)
{
	var user_data = other.getUserData();
	if(user_data.is_complete){return;}
	user_data.is_complete = true;
	other.setUserData(user_data);

	//give points
	GAME.doGamePoints(user_data.pnts, new THREE.Vector3(ball.getPosition().x * M2P, 3, ball.getPosition().y * M2P));

	//snd
	__snds.playSound('snd_progress');

	//deactivate
	PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});

	//dim object
	GAME.doSetLitState(user_data.object, false);

	//check for completion
	var group_array = oTABLE.bonus_groups['group_' + user_data.group];

	var all_completed = true;
	for(var i = 0; i < group_array.length; i++){
		var o = group_array[i].getUserData();
		if(!o.is_complete){
			all_completed = false;
			break;
		}
	}
	
	//complete
	if(all_completed){
		if(user_data.complete_callback){
			user_data.complete_callback();
		}
	}

		//complete
	if(all_completed){
		GAME.doResetTriggerGroup(user_data.group);
	}
	
}


//------------------------
// triggers
//-----------------------

Game.prototype.doHitTrigger = function(contact, ball, other)
{



	var user_data = other.getUserData();
	if(user_data.is_complete){return;}
	user_data.is_complete = true;
	other.setUserData(user_data);

	//apply bounce
	if(!user_data.is_virtual){
		var manifold = contact.getWorldManifold();
		var normal = manifold.normal;
		normal.mul(2);
		ball.applyLinearImpulse(normal, other.getPosition());
	}

	//request knock down
	PHYSICS.queue.push({me:other, action:GAME.doDeactivateBody});
	PHYSICS.queue.push({me:other, action:GAME.doKnockDownTrigger});
		
}


Game.prototype.doKnockDownTrigger = function(trigger)
{

	//deactivate the body
	var user_data = trigger.getUserData();
	var fixture = trigger.getFixtureList();


	//check for cooresponding bonus object
	var bonus = oTABLE.items["bonus_" + user_data.group + "_" + user_data.target];
	if(bonus){
		GAME.doShowBonus(user_data.group, user_data.target);
	}
	
	//hide 3d object
	if(user_data.object){
		user_data.object.visible = false;
	}

	//show light
	var light = user_data.light;
	if(light){
		GAME.doSetLitState(light, true);
	}

	//play sound
	if(user_data.snd){
		__snds.playSound(user_data.snd);	
	}
	
	//award points
	if(user_data.pnts){
		GAME.doGamePoints(user_data.pnts, new THREE.Vector3(trigger.getPosition().x * M2P, 3, trigger.getPosition().y * M2P));
	}

	//check for completion if no bonus associated
	var group_array = oTABLE.trigger_groups['group_' + user_data.group];
	var all_completed = true;
	for(var i = 0; i < group_array.length; i++){
		if(!group_array[i].m_userData.is_complete){
			all_completed = false;
			break;
		}
	}

	//complete
	if(all_completed){
		if(user_data.complete_callback){
			user_data.complete_callback(trigger);
		}
	}

}

Game.prototype.doCompleteBonuses = function(){

	trace("doCompleteBonuses()");
	
	__snds.playSound("snd_free_ball");

	GAME.balls_remaining++;
	GUI.doUpdateBalls();

	var p3D = new THREE.Vector3(23, 5, 50);
	new PointObject(p3D, "freeball", 2);

	GAME.doResetTriggerGroup(1);
}



Game.prototype.doResetTriggerGroup = function(group){

	trace("doResetTriggerGroup() " + group);

	var group_array;

	//reset triggers in group
	group_array = oTABLE.trigger_groups['group_' + group];

	if(group_array){

		for(var i = 0; i < group_array.length; i++){

			PHYSICS.queue.push({me:group_array[i], action:GAME.doActivateBody});
			
			var user_data = group_array[i].getUserData();

			if(user_data.object){
				user_data.object.visible = true;
			}

			//dim light
			var light = user_data.light;
			if(light){
				GAME.doSetLitState(light, false);
			}

			var light_en = user_data.light_en;
			if(light_en){
				GAME.doSetLitState(light_en, false);
			}

			user_data.is_complete = false;
			group_array[i].setUserData(user_data);

		}
	}

	//reset bonuses in this group
	group_array = oTABLE.bonus_groups['group_' + group];
	if(group_array){
		for(var i = 0; i < group_array.length; i++){
			PHYSICS.queue.push({me:group_array[i], action:GAME.doDeactivateBody});
			var user_data = group_array[i].getUserData();
			user_data.is_complete = false;
			group_array[i].setUserData(user_data);
		}
	}
}



//------------------------
// hole
//-----------------------

Game.prototype.doHitHole = function(contact, ball, other)
{

	trace("doHitHole()");

	var user_data = ball.getUserData();

	//**destroy visible ball
	user_data.object.need_destroy = true;

	for(var i=oGAME.balls.length-1; i>=0; i--){
		if(oGAME.balls[i] == ball){
			oGAME.balls.splice(i, 1);
		}
	}
	

	//kill slash
	GAME.scene.remove(user_data.object.slash);
	user_data.object.slash.geometry.dispose();

	oGAME.active_balls--;

	__snds.playSound('pinball_hole');

	PHYSICS.queue.push({me:ball, action:GAME.doDestroyBody});

	GAME.SAM.doShow();
	GAME.FOGHORN.doShow();


	var need_new_ball = (oGAME.active_balls == 0);
		
	if(need_new_ball){
		if(GAME.balls_remaining > 0){
			setTimeout(GAME.doNewBall, 1000);
		}else{
			CONTROLS.doHidePause();
			setTimeout(GAME.doGameOver, 1000);
			
		}
	}


}




Game.prototype.doOneWayDoor = function(contact, ball, other)
{

	var door_angle = other.getAngle();
	var door_vector = new THREE.Vector2(Math.cos(door_angle), Math.sin(door_angle)).normalize();
	var ball_velocity = ball.getLinearVelocity();
	var ball_vector = new THREE.Vector2(ball_velocity.x, ball_velocity.y).normalize();
	var dot_product = door_vector.dot(ball_vector);

	if(dot_product < 0 ){
		contact.setEnabled(false);
	}

}


Game.prototype.doCompleteMiddle = function(contact, ball, other)
{
	GAME.TWEETY.doActivate();
}

Game.prototype.doCompleteTop = function(contact, ball, other)
{
	GAME.SPEEDY.doActivate();
}




//---------------------------
// level switching
//---------------------------

Game.prototype.doLevelSwitcherEnter = function(contact, ball, other)
{
	var user_data = other.getUserData();

	other.update_touching = {};
	other.update_touching.forget = false;
	other.update_touching.ball = ball;
	other.update_touching.switchTo = user_data.switchTo;
	other.update_touching.door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
	other.update_touching.doUpdate = function(){
		var ball_velocity = this.ball.getLinearVelocity();
		var ball_vector = new THREE.Vector2(ball_velocity.x, ball_velocity.y).normalize();
		var dot_product = this.door_vector.dot(ball_vector);
		if(dot_product < 0 ){
			GAME.doSwitchLevel(this.ball, this.switchTo);
			this.forget = true;
		}
	}
	GAME.actives.push(other.update_touching);
}

Game.prototype.doLevelSwitcherExit = function(contact, ball, other)
{
	if(other.update_touching){
		other.update_touching.forget = true;
	}
}

Game.prototype.doSwitchLevel = function(ball, new_level)
{

	trace("doSwitchLevel() TO: " + new_level);

	var fixture = ball.getFixtureList();
	var filter = {};
	filter.categoryBits = fixture.getFilterCategoryBits();
	filter.maskBits = new_level;
	filter.groupIndex = fixture.getFilterGroupIndex();
	ball.getFixtureList().setFilterData(filter);

	var ball_userdata = ball.getUserData();
	ball_userdata.object.myfloor = GAME.table.getObjectByName("physics_floor_" + new_level) || null;

	if(new_level == 1 || new_level == 2){
		if(ball.linearDampingSave){
			ball.setLinearDamping(ball.linearDampingSave);
			ball.linearDampingSave = null;
		}
	}
}





Game.prototype.doLevelSwitcher = function(contact, ball, other)
{

	var user_data = other.getUserData();
	var door_angle = other.getAngle();
	var door_vector = new THREE.Vector2(Math.cos(door_angle), Math.sin(door_angle)).normalize();
	var ball_velocity = ball.getLinearVelocity();
	var ball_vector = new THREE.Vector2(ball_velocity.x, ball_velocity.y).normalize();
	var dot_product = door_vector.dot(ball_vector);
	
	if(dot_product < 0 ){

		var fixture = ball.getFixtureList();
		var filter = {};
		filter.categoryBits = fixture.getFilterCategoryBits();
		filter.maskBits = user_data.switchTo;
		filter.groupIndex = fixture.getFilterGroupIndex();
		ball.getFixtureList().setFilterData(filter);

		var ball_userdata = ball.getUserData();
		ball_userdata.object.myfloor = GAME.table.getObjectByName("physics_floor_" + user_data.switchTo) || null;

		if(user_data.switchTo == 1 || user_data.switchTo == 2){
			if(ball.linearDampingSave){
				ball.setLinearDamping(ball.linearDampingSave);
				ball.linearDampingSave = null;
			}
		}

	}
}










Game.prototype.doBooster = function(contact, ball, other)
{
	trace("doBooster()");

	var user_data = other.getUserData();

	var door_vector = new THREE.Vector2(Math.cos(other.getAngle()), Math.sin(other.getAngle())).normalize();
	ball.setLinearVelocity(door_vector.multiplyScalar(user_data.speed));
	try{
		if(user_data.snd != ""){
			__snds.playSound(user_data.snd);	
		}
	}catch(e){}

	try{
		user_data.action();
	}catch(e){}
}




//------------------------
// snack pickups
//-----------------------



Game.prototype.doPickup1 = function(contact, ball, other){
	
	var item = GAME.snack_pickups[0];
	if(!item.has){
		item.has = true;
		GAME.doSetLitState(item, true);
		TweenLite.to(item.scale, .5, {x: 1.2, y:1.2, z:1.2, ease:Elastic.easeOut});



		var pnts = 500;
	var p = ball.getPosition();
	GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));

	
		//snd
		__snds.playSound('snd_pickup_1');

	}
}

Game.prototype.doPickup2 = function(contact, ball, other){
	var item = GAME.snack_pickups[1];
	if(!item.has){
		item.has = true;
		GAME.doSetLitState(item, true);
		TweenLite.to(item.scale, .5, {x: 1.2, y:1.2, z:1.2, ease:Elastic.easeOut});

		//score
	var pnts = 500;
	var p = ball.getPosition();
	GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));


		//snd
		__snds.playSound('snd_pickup_2');
	}
}

Game.prototype.doPickup3 = function(contact, ball, other){
	var item = GAME.snack_pickups[2];
	if(!item.has){
		item.has = true;
		GAME.doSetLitState(item, true);
		TweenLite.to(item.scale, .5, {x: 1.2, y:1.2, z:1.2, ease:Elastic.easeOut});

		//score
	var pnts = 500;
	var p = ball.getPosition();
	GAME.doGamePoints(pnts, new THREE.Vector3(p.x * M2P, 3,p.y * M2P));


		//snd
		__snds.playSound('snd_pickup_3');

		GAME.doCompletePickups();
	}
}

Game.prototype.doPickups = function(me){
	if(me.has){
		me.rotateY(.08);
	}
}



Game.prototype.doCompletePickups = function(){
	
	trace("doCompletePickups()");

}


Game.prototype.doResetPickups = function(){

		trace("doResetPickups()");

		//GAME.doResetMultiplier();

}


//------------------------
// tools
//-----------------------

Game.prototype.doSetModelVisibilityByName = function(name, visibility){
	var model = GAME.table.getObjectByName(name);
	if(model){
		model.visible = visibility;
	}
}

Game.prototype.doSetLitState = function(model, is_lit){
	if(model){
		if(is_lit){
			model.material = oASSETS.LitItemsMaterial;
		}else{
			model.material = oASSETS.UnlitItemsMaterial;
		}
	}
}





Game.prototype.doEnterLaunchZone = function(ball)
{
	GAME.balls_in_launch_zone++;
	GAME.Launcher.is_on = true;
}

Game.prototype.doExitLaunchZone = function(ball)
{
	GAME.balls_in_launch_zone--;
	if(GAME.balls_in_launch_zone<1){
		GAME.Launcher.is_on = false;
	}
}

