//------------------------
// plunger
//-----------------------

var launcher_timeout;

Game.prototype.doUpdatePlunger = function(o)
	{
		
		var me = o.me;
		var travel = 80;
		var myPower = 10;
						
		o.object.position.z = (me.getPosition().y * M2P) - 1.0;

		switch(o.state){


			case 0: // plunger is up
				if(__input.want_key_launcher && GAME.balls_in_launch_zone > 0){
					me.setType("dynamic");
					o.state=1;
					launcher_timeout = setTimeout(function(){
						o.state=5;
					},1000);

				}else if(GAME.launcher_active && platform.isTouchDevice){
					me.setType("dynamic");
					o.state=2;
					launcher_timeout = setTimeout(function(){
						o.state=5;
					},1000);
				}
				break;

			//------------------------
			// keyboard launcher
			//------------------------
			
			case 1: // pulling down

				if(__input.want_key_launcher){
					me.setLinearVelocity(pl.Vec2(0,3));
				}else{
					me.setType("dynamic");
					myPower = (me.getPosition().y - o.base_y); 
					o.state=3;
				}
				break;

			//------------------------
			// touch launcher
			//------------------------

			case 2: // pulling down 

				if(GAME.launcher_active){
					var dist_to_bottom = o.base_y - me.getPosition().y;
					me.setLinearVelocity(pl.Vec2(0, GAME.launcher_speed));
				}else{
					myPower = (me.getPosition().y - o.base_y); 
					o.state=3;
				}
				break;

			//------------------------
			// release
			//------------------------

			
			case 3: //release

				clearTimeout(launcher_timeout);

				myPower = (me.getPosition().y - o.base_y);
				me.applyLinearImpulse(pl.Vec2(0, myPower * -40), pl.Vec2(0,0));

				if(GAME.balls_in_launch_zone > 0){
					if(myPower > 0.25){
						__snds.playSound('pinball_launch');
					}
				}	


				//apply velocity to
				if(GAME.balls_in_launch_zone > 1){
					trace("forced launcher");
					for(i=0; i<oGAME.balls.length; i++){
						var ball = oGAME.balls[i];
						if(ball.in_launch_zone){
							ball.setLinearVelocity(new Vec2(0,-40));
						}
					}
				}
				o.state=4;
				break;

			case 5: //release due to timeout

				clearTimeout(launcher_timeout);
						__snds.playSound('pinball_launch');

				myPower = (me.getPosition().y - o.base_y);
				me.applyLinearImpulse(pl.Vec2(0, myPower * -40), pl.Vec2(0,0));

				//apply velocity to all balls
				if(GAME.balls_in_launch_zone > 1){
					for(i=0; i<oGAME.balls.length; i++){
						var ball = oGAME.balls[i];
						if(ball.in_launch_zone){
							ball.setLinearVelocity(new Vec2(0,-40));
						}
					}
				}
				o.state=4;
				break;



			case 4: //release

				//reset when ball passes
				if(Math.abs(me.getPosition().y - o.base_y) < 0.5){
					me.setPosition(pl.Vec2(o.base_x, o.base_y));
					me.setLinearVelocity(pl.Vec2(0,0));
					me.setType("static");
					o.state=0;
				}
			
				break;
			
			
		}

	}


	//------------------------
// flippers
//-----------------------

Game.prototype.doUpdateFlipper = function(o)
{

	//listen for flipper input
	if(o.key == 1 && __input.want_left){
		if(o.state==0){
			__snds.playSound('flip_up');	
		}
		o.state = 1;
		o.joint.setMotorSpeed(o.force);

	}else if(o.key == 2 && __input.want_right){
		if(o.state==0){
			__snds.playSound('flip_up');	
		}
		o.state = 1;
		o.joint.setMotorSpeed(o.force);


	}else{
		o.state = 0;
		o.joint.setMotorSpeed(-o.force* 0.5);
	}

	//update
	if(o.object){
		o.object.rotation.y = -o.flipper.getAngle() + __utils.radFromDeg(90);
	}
	

}


Game.prototype.doUpdateKnife = function(o)
{

	//listen for flipper input
	if(__input.want_right){
		if(!o.is_down){
			//hit
			__snds.playSound('knife_down');
			TweenLite.to(o.object.rotation, .05, {x:  o.rot_dn});
			PHYSICS.queue.push({me:o.rb, action:GAME.doActivateBody});
			o.is_down = true;
		}
	}else{
		if(o.is_down){
			//hit
			__snds.playSound('knife_up');
			PHYSICS.queue.push({me:o.rb, action:GAME.doDeactivateBody});
			TweenLite.to(o.object.rotation, .5, {x: o.rot_up, ease:Elastic.easeOut});
			o.is_down = false;
		}
	}
	

}



Game.prototype.doUpdateMallet = function(o)
{


	if(__input.want_left){
		if(!o.is_down){
			//hit
			TweenLite.to(o.object.rotation, .05, {x:  o.rot_dn});
			o.is_down = true;

			//hit ball
			setTimeout(function(){
				if(!o.is_down){return};
				var p = o.rb.getPosition();
	      		var target_pos = new THREE.Vector2(p.x, p.y);
				var hit_ball = GAME.doFindClosestBallWithinRange(target_pos, 30 * P2M);
				if(hit_ball){
					PHYSICS.queue.push({me:hit_ball, action:GAME.doMalletHit});
					__snds.playSound('mallet_down');

				}
				//activate the hammer
				PHYSICS.queue.push({me:o.rb, action:GAME.doActivateBody});

			}, 50);
		}
	}else{
		if(o.is_down){
			__snds.playSound('mallet_up');
			PHYSICS.queue.push({me:o.rb, action:GAME.doDeactivateBody});
			TweenLite.to(o.object.rotation, .5, {x: o.rot_up, ease:Elastic.easeOut});
			o.is_down = false;
		}
	}
}

Game.prototype.doMalletHit = function(ball)
{
	__snds.playSound('mallet_hit');
	GAME.mallet_hits++;

	var pnts = Math.min(3000, (GAME.mallet_hits * 1000));
	
	GAME.score += pnts;
	GUI.doUpdateScore();


	var p = ball.rb.getPosition();
	var p3D = new THREE.Vector3(p.x * M2P, 3, p.y * M2P);
	new PointObject(p3D, pnts);


	//transfer ball to launcher
	GAME.doDeactivateBody(ball.rb);
	ball.rb.setPosition(pl.Vec2(oGAME.ball_spawn_pos.x, oGAME.ball_spawn_pos.y));
	ball.rb.setLinearVelocity(pl.Vec2(0,0));
	PHYSICS.queue.push({me:ball.rb, action:GAME.doActivateBody});
}




Game.prototype.doFindClosestBallWithinRange = function(pos, range)
{
	var closest_ball = null;
	var closest_dist = Infinity;

	for(var i=GAME.actives.length-1; i>=0; i--){
		if(GAME.actives[i]){
			if(GAME.actives[i].is_ball){
	      		var p = GAME.actives[i].rb.getPosition();
	      		var ball_pos = new THREE.Vector2(p.x, p.y);
	      		var dist = ball_pos.distanceTo(pos);
	      		if(dist <= range && dist < closest_dist){
	      			closest_ball = GAME.actives[i];
	      			closest_dist = dist;
	      		}
	   		}	
		}
	}
	return closest_ball;
}