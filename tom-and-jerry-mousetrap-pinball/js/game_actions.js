Game.prototype.doNewBall=function(){var need_new_ball=true;if(GAME.ball_in_trap&&oGAME.active_balls>1){need_new_ball=false;}
if(!GAME.ball_in_trap&&oGAME.active_balls>0){need_new_ball=false;}
if(need_new_ball){if(GAME.balls_remaining>0){GAME.balls_remaining--;GUI.doUpdateBalls();oGAME.launching=true;GAME.doOpenAlleys();GAME.doResetPickups();GAME.doMakeBall(oGAME.ball_spawn_pos);}else{GAME.doGameOver();}}}
Game.prototype.doMakeBall=function(pos)
{trace("doMakeBall()");var bodyDef={type:"dynamic"};var fixtureDef={density:1.0,friction:0,restitution:0.05};fixtureDef.shape=pl.Circle(10*P2M);var body=PHYSICS.world.createDynamicBody(bodyDef);body.setPosition(pl.Vec2(pos.x,pos.y));body.setBullet(true);var rb=body.createFixture(fixtureDef);var ball=oASSETS.ball.clone();ball.scale.set(1,1,1);GAME.scene.add(ball);__snds.playSound('pinball_newball');ball.slash=new THREE.Mesh();ball.slash_material=new MeshLineMaterial({resolution:new THREE.Vector2(oSTAGE.wrapper_width,oSTAGE.wrapper_height),lineWidth:2,color:new THREE.Color(0xffffff),transparent:true,opacity:0.6,blending:THREE.AdditiveBlending});ball.slash_positions=[];GAME.scene.add(ball.slash);ball.doUpdate=GAME.doUpdateBall;ball.rb=body;ball.is_ball=true;ball.is_trapped=false;ball.tube=null;ball.need_destroy=false;ball.glue_overlaps=0;ball.last_trail={x:0,y:0};ball.in_launch_zone=false;GAME.actives.push(ball);var user_data=new Object();user_data.is_ball=true;user_data.object=ball;body.setUserData(user_data);oGAME.active_balls++;oGAME.balls.push(ball);return body;}
Game.prototype.doUpdateBall=function(me)
{if(me.need_destroy){return;}
var pos=me.rb.getPosition();me.position.set(pos.x*M2P,1.1,pos.y*M2P);var ball_pos=new THREE.Vector2(pos.x,pos.y);if(pos.x>=(415*P2M)&&pos.y>=(720*P2M)){if(!me.in_launch_zone){me.in_launch_zone=true;GAME.doEnterLaunchZone(me);}}else{if(me.in_launch_zone){me.in_launch_zone=false;GAME.doExitLaunchZone(me);}}
var trap=oTABLE.traps[0];var trap_pos=new THREE.Vector2(trap.pos.x,trap.pos.y);GAME.scene.remove(me.slash);me.slash.geometry.dispose();me.slash_positions.unshift(new THREE.Vector3(me.position.x,me.position.y,me.position.z));if(me.slash_positions.length>30){me.slash_positions.pop();}
if(me.slash_positions.length>1){var geometry=new THREE.Geometry();for(var i=0;i<me.slash_positions.length;i++){geometry.vertices.push(me.slash_positions[i]);}
var line=new MeshLine();line.setPoints(me.slash_positions,function(p){return 1-p;});me.slash=new THREE.Mesh(line,me.slash_material);GAME.scene.add(me.slash);}
if(trap.captured_ball==me){var force=new THREE.Vector2();force=trap_pos.sub(ball_pos);me.rb.applyLinearImpulse(force,pos);}
if(!trap.captured_ball){if(trap.grace_period<=0){var dist=Math.sqrt((trap.pos.x-pos.x)*(trap.pos.x-pos.x)+(trap.pos.y-pos.y)*(trap.pos.y-pos.y));if(dist<=trap.radius){var ball_pos=new THREE.Vector2(pos.x,pos.y);var trap_pos=new THREE.Vector2(trap.pos.x,trap.pos.y);var force=new THREE.Vector2();force=trap_pos.sub(ball_pos);me.rb.setLinearVelocity(pl.Vec2(0,0));me.rb.applyLinearImpulse(force,pos);trap.captured_ball=me;GAME.doActivateTrap(trap);}}else{trap.grace_period=Math.max(0,trap.grace_period-1);}}
for(var i=0;i<oTABLE.magnets.length;i++){var magnet=oTABLE.magnets[i];var dist=Math.sqrt((magnet.pos.x-pos.x)*(magnet.pos.x-pos.x)+(magnet.pos.y-pos.y)*(magnet.pos.y-pos.y));if(dist<=magnet.radius){var p=magnet.pos.Copy();p.Subtract(pos);p.Normalize();p.Multiply(magnet.power);me.rb.applyLinearForce(p,pos);}}}
Game.prototype.doHitBumper=function(contact,ball,other)
{var user_data=other.getUserData();var game_object=user_data.object;if(game_object){var obj_scale=game_object.scale.x;TweenLite.killTweensOf(game_object.scale);game_object.scale.set(1.1,1.1,1.1);TweenLite.to(game_object.scale,.4,{x:1,y:1,z:1});}
if(user_data.snd){__snds.playSound(user_data.snd);}
if(user_data.bounce){var manifold=contact.getWorldManifold();var normal=manifold.normal;normal.mul(user_data.bounce);ball.applyLinearImpulse(normal,other.getPosition());}
if(user_data.pnts){GAME.score+=user_data.pnts;var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,user_data.pnts);GUI.doUpdateScore();}
if(game_object){if(game_object.doStartSparks){game_object.doStartSparks(game_object);}}
other.setUserData(user_data);}
Game.prototype.doStartSparks=function()
{var game_object=this;if(game_object.is_exploding){return;}
GAME.doSetLitState(game_object,true);clearTimeout(game_object.sparks_timeout);game_object.sparks_on=true;game_object.sparks.visible=true;game_object.sparks.scale.set(1,1,1);TweenLite.to(game_object.sparks.scale,.25,{x:2,y:2,z:2});GAME.sparks_active++;__snds.playSound('snd_sparks');game_object.sparks_timeout=setTimeout(game_object.doEndSparks.bind(game_object),oCONFIG.sparks_duration*1000);var all_on=true;for(var i=0;i<GAME.spark_bumpers.length;i++){var bumper=GAME.spark_bumpers[i];if(!bumper.sparks_on){all_on=false;break;}}
if(all_on){GAME.doExplodeSparks();}}
Game.prototype.doEndSparks=function(){var game_object=this;clearTimeout(game_object.sparks_timeout);GAME.doSetLitState(game_object,false);game_object.sparks_on=false;game_object.sparks.visible=false;GAME.sparks_active++;}
Game.prototype.doExplodeSparks=function(){__snds.playSound('snd_explode');GAME.score+=1000;var p3D=new THREE.Vector3(23,3,-50);new PointObject(p3D,1000);GUI.doUpdateScore();for(var i=0;i<GAME.spark_bumpers.length;i++){var bumper=GAME.spark_bumpers[i];clearTimeout(bumper.sparks_timeout);GAME.doSetLitState(bumper,false);bumper.sparks.visible=false;bumper.sparks_on=false;bumper.is_exploding=true;bumper.explode.visible=true;bumper.explode.material.opacity=1.0;bumper.explode.scale.set(.1,.1,.1);TweenLite.to(bumper.explode.scale,1,{x:1,y:1,z:1,ease:Elastic.easeOut});TweenLite.to(bumper.explode.material,1,{opacity:0,ease:Power1.easeOut});}
setTimeout(function(){GAME.sparks_active=0;for(var i=0;i<GAME.spark_bumpers.length;i++){var bumper=GAME.spark_bumpers[i];bumper.is_exploding=false;}},1000);}
Game.prototype.doShowBonus=function(group,target)
{var body=oTABLE.items["bonus_"+group+"_"+target];var user_data=body.getUserData();PHYSICS.queue.push({me:body,action:GAME.doActivateBody});GAME.doSetLitState(user_data.object,true);}
Game.prototype.doBonus=function(contact,ball,other)
{var user_data=other.getUserData();if(user_data.is_complete){return;}
GAME.score+=user_data.pnts;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,user_data.pnts);__snds.playSound('snd_progress');PHYSICS.queue.push({me:other,action:GAME.doDeactivateBody});GAME.doSetLitState(user_data.object,false);var group_array=oTABLE.bonus_groups['group_'+user_data.group];var all_completed=true;for(var i=0;i<group_array.length;i++){var o=group_array[i].getUserData();if(!o.is_complete){all_completed=false;break;}}
if(all_completed&&user_data.complete_callback){GAME.doResetTriggerGroup(user_data.group);}}
Game.prototype.doHitTrigger=function(contact,ball,other)
{var user_data=other.getUserData();if(user_data.is_complete){return;}
user_data.is_complete=true;other.setUserData(user_data);if(!user_data.is_virtual){var manifold=contact.getWorldManifold();var normal=manifold.normal;normal.mul(2);ball.applyLinearImpulse(normal,other.getPosition());}
PHYSICS.queue.push({me:other,action:GAME.doDeactivateBody});PHYSICS.queue.push({me:other,action:GAME.doKnockDownTrigger});}
Game.prototype.doKnockDownTrigger=function(me)
{var user_data=me.getUserData();var fixture=me.getFixtureList();var bonus=oTABLE.items["bonus_"+user_data.group+"_"+user_data.target];if(bonus){GAME.doShowBonus(user_data.group,user_data.target);}
if(user_data.object){user_data.object.visible=false;}
var light=user_data.light;if(light){GAME.doSetLitState(light,true);}
var light_en=user_data.light_en;if(light_en){GAME.doSetLitState(light_en,true);}
if(user_data.snd){__snds.playSound(user_data.snd);}
if(user_data.pnts){GAME.score+=user_data.pnts;var p=me.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,user_data.pnts);GUI.doUpdateScore();}
var group_array=oTABLE.trigger_groups['group_'+user_data.group];var all_completed=true;for(var i=0;i<group_array.length;i++){if(!group_array[i].m_userData.is_complete){all_completed=false;break;}}
if(all_completed){if(user_data.complete_callback){user_data.complete_callback(me);}}}
Game.prototype.doResetTriggerGroup=function(group){var group_array;group_array=oTABLE.trigger_groups['group_'+group];for(var i=0;i<group_array.length;i++){PHYSICS.queue.push({me:group_array[i],action:GAME.doActivateBody});var user_data=group_array[i].getUserData();if(user_data.object){user_data.object.visible=true;}
var light=user_data.light;if(light){GAME.doSetLitState(light,false);}
var light_en=user_data.light_en;if(light_en){GAME.doSetLitState(light_en,false);}
user_data.is_complete=false;group_array[i].setUserData(user_data);}
group_array=oTABLE.bonus_groups['group_'+group];if(group_array){for(var i=0;i<group_array.length;i++){PHYSICS.queue.push({me:group_array[i],action:GAME.doDeactivateBody});var user_data=group_array[i].getUserData();user_data.is_complete=false;group_array[i].setUserData(user_data);}}}
Game.prototype.doKickUpRight=function(contact,ball,other)
{setTimeout(function(){GAME.doKickUpRight2(ball);},1000);}
Game.prototype.doKickUpRight2=function(ball)
{__snds.playSound('snd_kickup');var gravity=PHYSICS.world.getGravity();ball.applyLinearImpulse(pl.Vec2(0,-gravity.y*1),ball.getPosition(),true);setTimeout(function(){GAME.doCloseKickUpRight();},1000);var kicker=GAME.table.getObjectByName("plunger_02");kicker.myz=kicker.position.z;TweenLite.to(kicker.position,0.5,{z:kicker.myz-2,ease:Elastic.easeOut});TweenLite.to(kicker.position,.25,{z:kicker.myz,delay:0.5});}
Game.prototype.doCloseKickUpRight=function(ball)
{PHYSICS.queue.push({me:oTABLE.items['gate_kick_right'],action:GAME.doActivateBody});PHYSICS.queue.push({me:oTABLE.items['gate_kick_right_2'],action:GAME.doDeactivateBody});GAME.doSetModelVisibilityByName("gate_kick_right",true);GAME.doSetModelVisibilityByName("gate_kick_right_2",false);}
Game.prototype.doResetKick_right=function(me)
{PHYSICS.queue.push({me:oTABLE.items['gate_kick_right'],action:GAME.doDeactivateBody});PHYSICS.queue.push({me:oTABLE.items['gate_kick_right_2'],action:GAME.doActivateBody});GAME.doSetModelVisibilityByName("gate_kick_right",false);GAME.doSetModelVisibilityByName("gate_kick_right_2",true);}
Game.prototype.doKickUpLeft=function(contact,ball,other)
{setTimeout(function(){GAME.doKickUpLeft2(ball);},1000);}
Game.prototype.doKickUpLeft2=function(ball)
{__snds.playSound('snd_kickup');var gravity=PHYSICS.world.getGravity();ball.applyLinearImpulse(pl.Vec2(0,-gravity.y*1),ball.getPosition(),true);setTimeout(function(){GAME.doCloseKickUpLeft();},300);var kicker=GAME.table.getObjectByName("plunger_03");kicker.myz=kicker.position.z;TweenLite.to(kicker.position,0.5,{z:kicker.myz-2,ease:Elastic.easeOut});TweenLite.to(kicker.position,.25,{z:kicker.myz,delay:0.5});}
Game.prototype.doCloseKickUpLeft=function(ball)
{PHYSICS.queue.push({me:oTABLE.items['gate_kick_left'],action:GAME.doActivateBody});PHYSICS.queue.push({me:oTABLE.items['gate_kick_left_2'],action:GAME.doDeactivateBody});GAME.doSetModelVisibilityByName("gate_kick_left",true);GAME.doSetModelVisibilityByName("gate_kick_left_2",false);}
Game.prototype.doResetKick_left=function(me)
{PHYSICS.queue.push({me:oTABLE.items['gate_kick_left'],action:GAME.doDeactivateBody});PHYSICS.queue.push({me:oTABLE.items['gate_kick_left_2'],action:GAME.doActivateBody});GAME.doSetModelVisibilityByName("gate_kick_left",false);GAME.doSetModelVisibilityByName("gate_kick_left_2",true);}
Game.prototype.doSpecial=function(contact,ball,other)
{var velocity=ball.getLinearVelocity();var sp=velocity.Length();velocity.Normalize();velocity.Multiply(Math.max(30,sp));ball.setLinearVelocity(velocity);switch(oGAME.table){case 1:case 2:case 5:setTimeout(GAME.doSpecialEnd,800);break;case 3:case 4:case 6:break;}}
Game.prototype.doSpecialEnd=function()
{}
Game.prototype.doCloseAlley1=function(me)
{var body=oTABLE.items["gate_1"];var user_data=body.getUserData();if(user_data.object){user_data.object.visible=true;}
PHYSICS.queue.push({me:body,action:GAME.doActivateBody});GAME.score+=250;GUI.doUpdateScore();var p=body.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,250);__snds.playSound('snd_progress');}
Game.prototype.doCloseAlley2=function(me)
{var body=oTABLE.items["gate_2"];var user_data=body.getUserData();if(user_data.object){user_data.object.visible=true;}
PHYSICS.queue.push({me:body,action:GAME.doActivateBody});GAME.score+=250;GUI.doUpdateScore();var p=body.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,250);__snds.playSound('snd_progress');}
Game.prototype.doOpenAlleys=function()
{var body;var user_data;var group_array;body=oTABLE.items["gate_1"];user_data=body.getUserData();if(user_data.object){user_data.object.visible=false;}
PHYSICS.queue.push({me:body,action:GAME.doDeactivateBody});body=oTABLE.items["gate_2"];user_data=body.getUserData();if(user_data.object){user_data.object.visible=false;}
PHYSICS.queue.push({me:body,action:GAME.doDeactivateBody});}
Game.prototype.doCompleteTop=function(me)
{var user_data=me.getUserData();var group_array=oTABLE.trigger_groups['group_'+user_data.group];var top_light=GAME.table.getObjectByName("top_complete");GAME.doSetLitState(top_light,true);GAME.score+=1000;GUI.doUpdateScore();var p=top_light.position;var p3D=new THREE.Vector3(p.x,3,p.z);new PointObject(p3D,1000);__snds.playSound('snd_progress');setTimeout(function(){GAME.doResetTriggerGroup(user_data.group);GAME.doSetLitState(top_light,false);},1000);}
Game.prototype.doUnlockMultiplier=function(me)
{trace("doUnlockMultiplier()");PHYSICS.queue.push({me:oTABLE.multiplier,action:GAME.doActivateBody});GAME.cake.is_active=true;__snds.playSound('unlock_multiplier');}
Game.prototype.doRequestMultiply=function(contact,ball,other){trace("doRequestMultiply()");if(has_multiply){return;}
__snds.playSound('snd_multiply');GAME.score+=1000;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,1000);PHYSICS.queue.push({me:oTABLE.multiplier,action:GAME.doDeactivateBody});ball.setLinearVelocity(pl.Vec2(0,0));ball.applyLinearImpulse(pl.Vec2(-8,0),pl.Vec2(0,0));setTimeout(PHYSICS.queue.push({me:other,action:GAME.doMultiply}),100);setTimeout(PHYSICS.queue.push({me:other,action:GAME.doMultiply}),200);GAME.cake.has=true;GAME.doSetLitState(GAME.cake,true);GAME.cake.scale.set(0.9,0.9,0.9);TweenLite.to(GAME.cake.scale,1,{x:1.2,y:1.2,z:1.2,ease:Elastic.easeOut});last_multiply=new Date().getTime();has_multiply=true;}
Game.prototype.doMultiply=function(me){var newball=GAME.doMakeBall(me.getPosition());newball.applyLinearImpulse(pl.Vec2(-10,0),pl.Vec2(0,0));}
Game.prototype.doResetMultiplier=function(){trace("doResetMultiplier()");has_multiply=false;GAME.cake.is_active=false;TweenLite.to(GAME.cake.scale,.25,{x:1,y:1,z:1});GAME.doSetLitState(GAME.cake,false);setTimeout(function(){GAME.doResetTriggerGroup(6);},2000);}
Game.prototype.doHitHole=function(contact,ball,other)
{trace("doHitHole()");var user_data=ball.getUserData();user_data.object.need_destroy=true;GAME.scene.remove(user_data.object.slash);user_data.object.slash.geometry.dispose();oGAME.active_balls--;__snds.playSound('pinball_hole');PHYSICS.queue.push({me:ball,action:GAME.doDestroyBody});var need_new_ball=true;if(GAME.ball_in_trap&&oGAME.active_balls>1){need_new_ball=false;}
if(!GAME.ball_in_trap&&oGAME.active_balls>0){need_new_ball=false;}
if(need_new_ball){if(GAME.balls_remaining>0){setTimeout(GAME.doNewBall,1000);}else{CONTROLS.doHidePause();setTimeout(GAME.doGameOver,1000);}}}
Game.prototype.doShowSkillshot=function(group,target)
{trace("doShowSkillshot() "+group+", "+target);var body=oTABLE.items["bonus_"+group+"_"+target];var user_data=body.getUserData();PHYSICS.queue.push({me:body,action:GAME.doActivateBody});GAME.doSetLitState(user_data.object,true);}
Game.prototype.doSkillShot=function(contact,ball,other)
{trace("doSkillShot()");var user_data=other.getUserData();GAME.score+=user_data.pnts;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,user_data.pnts);__snds.playSound('snd_progress');PHYSICS.queue.push({me:other,action:GAME.doDeactivateBody});GAME.doSetLitState(user_data.object,false);}
Game.prototype.doEnterGlue=function(contact,ball,other)
{var user_data=ball.getUserData();if(user_data.object.glue_overlaps==0){__snds.playSound('glue');}
user_data.object.glue_overlaps++;if(user_data.object.glue_overlaps>0){ball.setLinearDamping(3.5);}}
Game.prototype.doExitGlue=function(contact,ball,other)
{var user_data=ball.getUserData();user_data.object.glue_overlaps--;if(user_data.object.glue_overlaps<=0){ball.setLinearDamping(0.0);}}
Game.prototype.doStartTube=function(contact,old_ball,other)
{trace("doStartTube()");}
Game.prototype.doStartTube2=function(contact,old_ball,other)
{trace("doStartTube2()");}
Game.prototype.doTransport=function(contact,ball,other)
{trace("doTransport()");}
Game.prototype.doOneWayDoor=function(contact,ball,other)
{var door_angle=other.getAngle();var door_vector=new THREE.Vector2(Math.cos(door_angle),Math.sin(door_angle)).normalize();var ball_velocity=ball.getLinearVelocity();var ball_vector=new THREE.Vector2(ball_velocity.x,ball_velocity.y).normalize();var dot_product=door_vector.dot(ball_vector);if(dot_product<0){contact.setEnabled(false);}}
Game.prototype.doPickup1=function(contact,ball,other){var item=GAME.snack_pickups[0];if(!item.has){item.has=true;GAME.doSetLitState(item,true);TweenLite.to(item.scale,.5,{x:1.2,y:1.2,z:1.2,ease:Elastic.easeOut});GAME.score+=500;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,500);__snds.playSound('snd_pickup_1');}}
Game.prototype.doPickup2=function(contact,ball,other){var item=GAME.snack_pickups[1];if(!item.has){item.has=true;GAME.doSetLitState(item,true);TweenLite.to(item.scale,.5,{x:1.2,y:1.2,z:1.2,ease:Elastic.easeOut});GAME.score+=500;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,500);__snds.playSound('snd_pickup_2');}}
Game.prototype.doPickup3=function(contact,ball,other){var item=GAME.snack_pickups[2];if(!item.has){item.has=true;GAME.doSetLitState(item,true);TweenLite.to(item.scale,.5,{x:1.2,y:1.2,z:1.2,ease:Elastic.easeOut});GAME.score+=500;GUI.doUpdateScore();var p=ball.getPosition();var p3D=new THREE.Vector3(p.x*M2P,3,p.y*M2P);new PointObject(p3D,500);__snds.playSound('snd_pickup_3');GAME.doCompletePickups();}}
Game.prototype.doPickups=function(me){if(me.has){me.rotateY(.08);}}
Game.prototype.doCompletePickups=function(){trace("doCompletePickups()");PHYSICS.queue.push({me:oTABLE.items['gate_3'],action:GAME.doDeactivateBody});GAME.doSetModelVisibilityByName("gate_3",false);}
Game.prototype.doResetPickups=function(){trace("doResetPickups()");PHYSICS.queue.push({me:oTABLE.items['gate_3'],action:GAME.doActivateBody});GAME.doSetModelVisibilityByName("gate_3",true);GAME.snack_pickups[0].has=false;GAME.snack_pickups[1].has=false;GAME.snack_pickups[2].has=false;GAME.doSetLitState(GAME.snack_pickups[0],false);GAME.doSetLitState(GAME.snack_pickups[1],false);GAME.doSetLitState(GAME.snack_pickups[2],false);TweenLite.to(GAME.snack_pickups[0].scale,.5,{x:1,y:1,z:1});TweenLite.to(GAME.snack_pickups[1].scale,.5,{x:1,y:1,z:1});TweenLite.to(GAME.snack_pickups[2].scale,.5,{x:1,y:1,z:1});GAME.doResetMultiplier();}
Game.prototype.doSetModelVisibilityByName=function(name,visibility){var model=GAME.table.getObjectByName(name);if(model){model.visible=visibility;}}
Game.prototype.doSetLitState=function(model,is_lit){if(model){if(is_lit){model.material=oASSETS.LitItemsMaterial;}else{model.material=oASSETS.UnlitItemsMaterial;}}}
Game.prototype.doEnterLaunchZone=function(ball)
{GAME.balls_in_launch_zone++;GAME.LauncherArrow.visible=true;}
Game.prototype.doExitLaunchZone=function(ball)
{GAME.balls_in_launch_zone--;if(GAME.balls_in_launch_zone<1){GAME.LauncherArrow.visible=false;}}