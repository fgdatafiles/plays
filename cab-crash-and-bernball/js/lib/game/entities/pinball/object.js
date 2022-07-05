ig.module('game.entities.pinball.object').requires('cm.entity').defines(function()
{entPinballObject=ig.Entity.extend({selected:false,editable:false,b2Body:null,isBroken:false,onFloor:false,newBody:null,debrisCount:0,timer:null,onTimer:null,retractTime:0.25,bumpForce:16,angle:0,tween:null,points:0,destruction:false,comboGroup:false,sounds:[],soundTVZap:new ig.Sound('media/audio/sfx2/electrocute.*'),soundDoorOpen:new ig.Sound('media/audio/sfx2/doorOpen.*'),soundChair:new ig.Sound('media/audio/sfx2/woodwhack.*'),soundBounce:new ig.Sound('media/audio/sfx2/bounce.*'),soundSplash:new ig.Sound('media/audio/sfx2/splash.*'),soundCrash1:new ig.Sound('media/audio/sfx2/crash1.*'),soundCrash2:new ig.Sound('media/audio/sfx2/crash2.*'),soundCrash3:new ig.Sound('media/audio/sfx2/crash3.*'),soundCrash4:new ig.Sound('media/audio/sfx2/crash4.*'),soundCrash5:new ig.Sound('media/audio/sfx2/crash5.*'),soundGlass:new ig.Sound('media/audio/sfx2/GlassBreak.*'),init:function(x,y,settings)
{var to=ig.game.tableOffset;this.parent(to.x+x,to.y+y,settings);var ta=ig.game.getTextureAtlas('pinball_sprites');if(this.name=='beanbag')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['beanbag.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['beanbag_broken.png'],true,true);if(ig.gameTank.data.room=='living_room')
{this.offset.x=0.6,this.offset.y=0.4;this.size.x=59,this.size.y=60;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,22);}
else
{var top=new Box2D.Collision.Shapes.b2CircleShape;top.SetRadius(0.9);top.SetLocalPosition(new Box2D.Common.Math.b2Vec2(-42/Box2D.SCALE,-26/Box2D.SCALE));this.offset.x=0.65,this.offset.y=0.4;this.size.x=123,this.size.y=127;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,40);this.b2Body.CreateFixture2(top);}}
else if(this.name.indexOf('slippery_floor')>-1)
{this.addTextureAtlasAnim(ta,'idle',1,['slippery_floor.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['slippery_floor_broken.png'],true,true);this.offset.x=0.7,this.offset.y=0.3;this.size.x=77,this.size.y=63;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,50,40,this.angle);}
else if(this.name=='red_frame_1'||this.name=='red_frame_2'||this.name=='yellow_frame_1'||this.name=='yellow_frame_2')
{if(this.name=='red_frame_1'||this.name=='red_frame_2')
{this.addTextureAtlasAnim(ta,'idle',1,['red_picture_frame.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,[this.name=='red_frame_2'?'red_picture_frame_broken_1.png':'red_picture_frame_broken_1.png'],true,true);}
else
{this.addTextureAtlasAnim(ta,'idle',1,['yellow_picture_frame.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,[this.name=='yellow_frame_2'?'yellow_picture_frame_broken_1.png':'yellow_picture_frame_broken_1.png'],true,true);}
this.offset.x=0.6,this.offset.y=0.3;this.size.x=43,this.size.y=24;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='desk_1'||this.name=='desk_2')
{this.sounds.push(ig.ua.android?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,[this.name=='desk_1'?'desk_1.png':'desk_2.png'],true,true);if(this.name=='desk_1')
{this.addTextureAtlasAnim(ta,'broken',1,['desk_1_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=76,this.size.y=55;}
else
{this.addTextureAtlasAnim(ta,'broken',0.1,['desk_2_broken_light.png','desk_2_broken.png','desk_2_broken_light.png','desk_2_broken.png','desk_2_broken_light.png','desk_2_broken.png','desk_2_broken_light.png','desk_2_broken.png'],true,true);this.offset.x=0.4,this.offset.y=0.4;this.size.x=109,this.size.y=100;}
this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,this.name=='desk_2'?70:60,this.name=='desk_2'?55:45,this.angle);}
else if(this.name=='trash_bin')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['trash_bin.png'],true,true);if(ig.gameTank.data.room=='living_room')
{this.offset.x=0.5,this.offset.y=0.5;;this.size.x=36,this.size.y=51;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,35,50,this.angle);}
else
{this.offset.x=0.6,this.offset.y=0.4;this.size.x=51,this.size.y=50;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);}}
else if(this.name=='plant_1'||this.name=='plant_2')
{this.addTextureAtlasAnim(ta,'idle',1,['plant_1.png'],true,true);this.currentAnim.flip.x=this.name=='plant_2';this.offset.x=this.name=='plant_1'?0.4:0.6,this.offset.y=0.5;this.size.x=91,this.size.y=75;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,25);}
else if(this.name=='plant_3')
{this.addTextureAtlasAnim(ta,'idle',1,['plant_2.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=58,this.size.y=62;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);}
else if(this.name=='speaker_1'||this.name=='speaker_2')
{this.addTextureAtlasAnim(ta,'idle',0.4,['speaker_on.png','speaker_off.png'],false,true);this.addTextureAtlasAnim(ta,'broken',1,['speaker_broken.png'],true,true);this.currentAnim.flip.x=this.name=='speaker_2';this.offset.x=0.5,this.offset.y=0.5;this.size.x=44,this.size.y=51;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,80,25,this.angle);}
else if(this.name=='round_table_chair')
{this.sounds.push(ig.ua.android?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,['round_table_chair.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=39,this.size.y=35;this.b2Body=ig.game._b2CreateCircle(0,0,15);}
else if(this.name=='round_table')
{this.sounds.push(ig.ua.android?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,['round_table.png'],true,true);this.offset.x=0.55,this.offset.y=0.45;this.size.x=134,this.size.y=135;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,60);for(var i=0;i<6;i++)
{ig.game.spawnEntity(entPinballObject,0,0,{name:'round_table_chair',radius:55,cx:this.pos.x,cy:this.pos.y,chairIndex:i,points:ig.Config.points.base,canCombo:true});}}
else if(this.name=='counter_island_fruit')
{this.addTextureAtlasAnim(ta,'idle',1,['counter_island_fruit.png'],true,true);this.offset.x=0.55,this.offset.y=0.45;this.size.x=222,this.size.y=101;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,200,90);}
else if(this.name=='counter_edge')
{this.addTextureAtlasAnim(ta,'idle',1,['counter_edge.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=62,this.size.y=58;}
else if(this.name=='fruit_bowl')
{this.addTextureAtlasAnim(ta,'idle',1,['fruit_bowl.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['fruit_bowl_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=59,this.size.y=58;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);}
else if(this.name=='bar_stool')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['bar_stool.png'],true,true);this.addTextureAtlasAnim(ta,'broken',this.retractTime,['bar_stool_hit.png','bar_stool.png'],true,true);this.offset.x=0.6,this.offset.y=0.38;this.size.x=72,this.size.y=71;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,22);}
else if(this.name=='fridge')
{this.addTextureAtlasAnim(ta,'idle',1,['fridge.png'],true,true);this.offset.x=0.65,this.offset.y=0.35;this.size.x=106,this.size.y=150;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,100,50,26);}
else if(this.name=='trash_can')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['trash_can.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['trash_can_broken.png'],true,true);this.offset.x=0.7,this.offset.y=0.3;this.size.x=67,this.size.y=66;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);}
else if(this.name=='recycle_bin')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['recycle_bin.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['recycle_bin_broken.png'],true,true);this.offset.x=0.75,this.offset.y=0.9;this.size.x=67,this.size.y=66;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,25,100,this.angle);}
else if(this.name=='tv_table')
{this.addTextureAtlasAnim(ta,'idle',1,['tv_table.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['tv_table_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.45;this.size.x=59,this.size.y=115;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,30,95,this.angle);}
else if(this.name=='tv')
{this.sounds.push(ig.ua.android?'electrocute':this.soundTVZap);this.addTextureAtlasAnim(ta,'idle',1,['tv.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['tv_broken.png'],true,true);this.offset.x=0.3,this.offset.y=0.5;this.size.x=114,this.size.y=95;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,20,70,this.angle);}
else if(this.name=='door_1')
{this.sounds.push(ig.ua.android?'doorOpen':this.soundDoorOpen);this.addTextureAtlasAnim(ta,'idle',1,['door_1.png'],true,true);if(ig.gameTank.data.room=='living_room')
{this.offset.x=0.4,this.offset.y=0.5;this.size.x=14,this.size.y=69;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,50,10);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetDensity(1);var local=this.b2Body.GetWorldCenter();local.Add(new Box2D.Common.Math.b2Vec2(-25/Box2D.SCALE,0));var circBodyDef=new Box2D.Dynamics.b2BodyDef;circBodyDef.position.Set(local.x,local.y);var fixture=new Box2D.Dynamics.b2FixtureDef;fixture.shape=new Box2D.Collision.Shapes.b2CircleShape(1/Box2D.SCALE);var circBody=ig.game.b2World.CreateBody(circBodyDef);circBody.CreateFixture(fixture);var revJointDef=new Box2D.Dynamics.Joints.b2RevoluteJointDef;revJointDef.Initialize(this.b2Body,circBody,local);revJointDef.upperAngle=0;revJointDef.lowerAngle=(-55).toRad();revJointDef.enableLimit=true;revJointDef.enableMotor=true;revJointDef.maxMotorTorque=100;revJointDef.motorSpeed=4;ig.game.b2World.CreateJoint(revJointDef);}
else
{this.addTextureAtlasAnim(ta,'broken',1,['door_1_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=17,this.size.y=132;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,10,130,this.angle);this.b2Body.GetFixtureList().SetSensor(true);}}
else if(this.name=='door_2')
{this.sounds.push(ig.ua.android?'doorOpen':this.soundDoorOpen);if(ig.gameTank.data.room=='living_room')
{this.addTextureAtlasAnim(ta,'idle',1,['door_2_closed.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['door_2_open.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=23,this.size.y=67;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);this.b2Body.SetAngle((-40).toRad());}
else
{this.addTextureAtlasAnim(ta,'idle',1,['door_2.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['door_2_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=64,this.size.y=53;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);}
this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='door_3')
{this.sounds.push(ig.ua.android?'doorOpen':this.soundDoorOpen);if(ig.gameTank.data.room=='living_room')
{this.addTextureAtlasAnim(ta,'idle',1,['door_3.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=11,this.size.y=51;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,12,55,-90);this.b2Body.GetFixtureList().SetSensor(true);}
else
{this.addTextureAtlasAnim(ta,'idle',1,['door_3.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['door_3_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=16,this.size.y=124;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,15,120);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetAngle(this.angle.toRad());}}
else if(this.name=='fridge_door')
{this.addTextureAtlasAnim(ta,'idle',1,['fridge_door.png'],true,true);this.offset.x=0.2,this.offset.y=2;this.size.x=67,this.size.y=18;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,10,64,30);}
else if(this.name=='kitchen_sink')
{this.sounds.push(ig.ua.android?'crash3':this.soundCrash3);this.sounds.push(ig.ua.android?'crash4':this.soundCrash4);this.sounds.push(ig.ua.android?'crash5':this.soundCrash5);this.addTextureAtlasAnim(ta,'idle',1,['kitchen_sink_0.png'],true,true);this.addTextureAtlasAnim(ta,'broken',0.3,['kitchen_sink_1.png','kitchen_sink_2.png','kitchen_sink_3.png','kitchen_sink_4.png','kitchen_sink_5.png','kitchen_sink_6.png','kitchen_sink_7.png'],true,true);this.offset.x=0.45,this.offset.y=0.13;this.size.x=343,this.size.y=239;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,100,90);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='crayon_drawer')
{this.sounds.push(ig.ua.anddroid?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,['crayon_drawer.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['crayon_drawer_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=56,this.size.y=7;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,55,15);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='dishwasher')
{this.addTextureAtlasAnim(ta,'idle',1,['dishwasher.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['dishwasher_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=76,this.size.y=8;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,75,15);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name.indexOf('cabinet_')>-1)
{this.sounds.push(ig.ua.android?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,['crayon_drawer.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=56,this.size.y=7;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,55,10,this.angle);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='debris')
{this.zIndex=(ig.game.getEntityByName('red_frame_1')||ig.game.getEntityByName('paint_green')).zIndex;this.addTextureAtlasAnim(ta,'idle',1,['debris_'+Math.rand(1,ig.gameTank.data.room=='living_room'?6:4)+'.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=20,this.size.y=20;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='books')
{this.addTextureAtlasAnim(ta,'idle',1,['books.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=24,this.size.y=134;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,40,130,this.angle);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='bookshelf')
{var top=new Box2D.Collision.Shapes.b2CircleShape;top.SetRadius(0.8);top.SetLocalPosition(new Box2D.Common.Math.b2Vec2(0,-70/Box2D.SCALE));var bot=new Box2D.Collision.Shapes.b2CircleShape;bot.SetRadius(0.8);bot.SetLocalPosition(new Box2D.Common.Math.b2Vec2(0,70/Box2D.SCALE));this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['bookshelf.png'],true,true);this.offset.x=0.6,this.offset.y=0.45;this.size.x=69,this.size.y=202;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,50,140,this.angle);this.b2Body.CreateFixture2(top);this.b2Body.CreateFixture2(bot);}
else if(this.name=='paint_green'||this.name=='paint_yellow'||this.name=='paint_orange')
{this.sounds.push(ig.ua.android?'splash':this.soundSplash);this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,[this.name+'_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=46,this.size.y=43;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='book_1'||this.name=='book_2')
{this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=59,this.size.y=43;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,60,45,this.angle);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetLinearDamping(6);this.isBroken=true;this.onFloor=true;}
else if(this.name.indexOf('crayon_')>-1)
{this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=5,this.size.y=23;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetAngle(Math.rand(0,360).toRad());this.b2Body.SetLinearDamping(6);this.isBroken=true;this.onFloor=true;}
else if(this.name=='table_chair')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['table_chair.png'],true,true);this.offset.x=0.5,this.offset.y=0.45;this.size.x=40,this.size.y=84;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,40,74,this.angle);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='table')
{this.addTextureAtlasAnim(ta,'idle',1,['table.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['table_broken.png'],true,true);this.offset.x=0.65,this.offset.y=0.57;this.size.x=118,this.size.y=171;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,80,120,this.angle);}
else if(this.name.indexOf('table_end')>-1)
{this.addTextureAtlasAnim(ta,'idle',1,['coffee.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['coffee_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.9;this.size.x=75,this.size.y=39;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,37);if(this.name=='table_end_bottom')
this.scale.y=-1;}
else if(this.name=='hand_mirror')
{this.zIndex=ig.game.getEntityByName('paint_green').zIndex;this.addTextureAtlasAnim(ta,'idle',1,['hand_mirror.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=24,this.size.y=47;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,15);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetLinearDamping(6);this.isBroken=true;this.onFloor=true;}
else if(this.name=='ottoman')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['ottoman.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['ottoman_broken.png'],true,true);this.offset.x=0.6,this.offset.y=0.45;this.size.x=71,this.size.y=71;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,30);}
else if(this.name=='couch_1'||this.name=='couch_2')
{this.sounds.push(ig.ua.bounce?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,[this.name+'_broken.png'],true,true);if(this.name=='couch_1')
{this.offset.x=0.45,this.offset.y=0.6;this.size.x=106,this.size.y=90;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,40);this.b2Body.SetAngle(this.angle.toRad());}
else
{this.offset.x=0.55,this.offset.y=0.5;this.size.x=99,this.size.y=98;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,40);this.b2Body.SetAngle(this.angle.toRad());}}
else if(this.name=='couch')
{this.addTextureAtlasAnim(ta,'idle',1,['couch.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['couch_broken.png'],true,true);this.offset.x=0.55,this.offset.y=0.5;this.size.x=93,this.size.y=171;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,60,155,this.angle);}
else if(this.name=='couch_pillow')
{this.zIndex=ig.game.getEntityByName('red_frame_1').zIndex;this.addTextureAtlasAnim(ta,'idle',1,['couch_pillow.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=37,this.size.y=39;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,15);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetLinearDamping(6);this.isBroken=true;this.onFloor=true;}
else if(this.name=='couch_footstool')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['empty.png'],true,true);this.addTextureAtlasAnim(ta,'broken',this.retractTime,['couch_footstool.png','empty.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,10,ig.gameTank.data.room=='living_room'?35:60);this.b2Body.SetAngle(this.angle.toRad());if(ig.gameTank.data.room=='living_room')
this.size.x=39,this.size.y=38;else
this.size.x=39,this.size.y=65;}
else if(this.name=='radio')
{this.addTextureAtlasAnim(ta,'idle',0.4,['radio_on.png','radio_off.png'],false,true);this.addTextureAtlasAnim(ta,'broken',1,['radio_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.4;this.size.x=104,this.size.y=41;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,95,55);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='speaker')
{this.addTextureAtlasAnim(ta,'idle',0.4,['speaker.png','speaker_on.png'],false,true);this.addTextureAtlasAnim(ta,'broken',1,['speaker_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=34,this.size.y=19;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='shoe_shelf')
{this.addTextureAtlasAnim(ta,'idle',1,['shoe_shelf.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['shoe_shelf_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=197,this.size.y=47;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,180,40);}
else if(this.name=='shoe_1'||this.name=='shoe_2')
{this.zIndex=ig.game.getEntityByName('paint_green').zIndex;this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=12,this.size.y=28;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,10);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetLinearDamping(6);this.isBroken=true;this.onFloor=true;}
else if(this.name=='lamp')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['lamp.png'],true,true);this.addTextureAtlasAnim(ta,'broken',0.1,['lamp_broken_on.png','lamp_broken.png','lamp_broken_on.png','lamp_broken.png','lamp_broken_on.png','lamp_broken.png','lamp_broken_on.png','lamp_broken.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=101,this.size.y=101;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);}
else if(this.name=='drawer')
{this.sounds.push(ig.ua.android?'woodWhack':this.soundChair);this.addTextureAtlasAnim(ta,'idle',1,['drawer.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['drawer_broken.png'],true,true);this.offset.x=0.8,this.offset.y=0.5;this.size.x=63,this.size.y=93;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,40,70);this.b2Body.GetFixtureList().SetSensor(2);}
else if(this.name=='bed')
{this.addTextureAtlasAnim(ta,'idle',1,['bed.png'],true,true);this.offset.x=0.65,this.offset.y=0.5;this.size.x=167,this.size.y=195;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,110,170,this.angle);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='bed_leg')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,8);}
else if(this.name=='trap_door_1')
{this.addTextureAtlasAnim(ta,'idle',1,['trap_door_1.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['trap_door_1_broken.png'],true,true);this.offset.x=0.22,this.offset.y=0.38;this.size.x=108,this.size.y=90;this.timer=new ig.Timer(Math.rand(3,6));this.onTimer=function()
{if(this.currentAnim==this.anims.idle)
{this.timer.reset();this.currentAnim=this.anims.broken;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,10,65,0)}
else
{this.timer.reset();this.currentAnim=this.anims.idle;ig.game.b2World.DestroyBody(this.b2Body);}}.bind(this)}
else if(this.name=='trap_door_2')
{this.addTextureAtlasAnim(ta,'idle',1,['trap_door_2.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['trap_door_2_broken.png'],true,true);this.currentAnim.angle=(-45).toRad();this.offset.x=0.4,this.offset.y=0.9;this.size.x=121,this.size.y=68;this.timer=new ig.Timer(Math.rand(3,6));this.onTimer=function()
{if(this.currentAnim==this.anims.idle)
{this.timer.reset();this.offset.x=0.4,this.offset.y=0.6;this.currentAnim=this.anims.broken;this.currentAnim.angle=(-45).toRad();this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,10,65,-45)}
else
{this.timer.reset();this.offset.x=0.4,this.offset.y=0.9;this.currentAnim=this.anims.idle;ig.game.b2World.DestroyBody(this.b2Body);}}.bind(this)}
else if(this.name=='glass')
{[this.soundCrash1,this.soundGlass].random().play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects',['crash2','glassBreak'].random());this.zIndex=ig.game.getEntityByName(ig.gameTank.data.room=='living_room'?'red_frame_1':'paint_green').zIndex;this.addTextureAtlasAnim(ta,'idle',1,['glass_'+Math.rand(1,3)+'.png'],true,true);this.currentAnim.angle=this.angle.toRad();this.offset.x=0.5,this.offset.y=0.5;this.size.x=48,this.size.y=137;}
else if(this.name=='heart')
{this.addTextureAtlasAnim(ta,'idle',1,['heart.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=33,this.size.y=25;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,30);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='clothes')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['clothes.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['clothes_broken.png'],true,true);this.offset.x=0.6,this.offset.y=0.5;this.size.x=30,this.size.y=178;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,20,175);this.b2Body.GetFixtureList().SetSensor(true);}
else if(this.name=='roomba')
{this.sounds.push(ig.ua.android?'bounce':this.soundBounce);this.addTextureAtlasAnim(ta,'idle',1,['roomba.png'],true,true);this.addTextureAtlasAnim(ta,'broken',0.2,['roomba_broken.png','roomba.png','roomba_broken.png','roomba.png','roomba_broken.png','roomba.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;this.size.x=41,this.size.y=41;this.b2Body=ig.game._b2CreateCircle(this.pos.x-to.x,this.pos.y-to.y,20);this.bumpForce*=1.2;if(!ig.gameTank.data.instructions)
{this.b2Body.SetType(2);this.timer=new ig.Timer(0.1);this.onTimer=this.switchDir.bind(this);}}
else if(this.name=='car')
{this.addTextureAtlasAnim(ta,'idle',1,['car.png'],true,true);this.offset.x=0.5,this.offset.y=0.5;if(ig.gameTank.data.room=='living_room')
{this.size.x=44,this.size.y=23;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,44,22,0);}
else
{this.size.x=56,this.size.y=33;this.b2Body=ig.game._b2CreateBox(this.pos.x-to.x,this.pos.y-to.y,56,32,0);}
this.b2Body.SetType(2);this.b2Body.SetLinearDamping(6);this.b2Body.SetAngularDamping(6);this.b2Body.GetFixtureList().SetDensity(100);}
if(this.destruction)
ig.game.destructionTotal++;if(this.comboGroup)
ig.game.addComboGroup(this);if(this.b2Body)
this.b2Body.SetUserData(this);if(ig.Debug)
ig.input.on('mousedown',function(){this.selected=ig.game.controlBall&&this.inFocus()}.bind(this))},update:function()
{this.parent();if(this.newBody!=null)
this.newBody();if(this.timer&&this.timer.delta()>0)
this.onTimer();if(this.b2Body)
{if(this.b2Body.GetType()==2)
{if(!this.gravity)
this.gravity=new Box2D.Common.Math.b2Vec2(0,-ig.game.b2World.GetGravity().y*this.b2Body.GetMass());this.b2Body.SetBullet(true);this.b2Body.ApplyForce(this.gravity,this.b2Body.GetWorldCenter());}
if(this.currentAnim)
{if(this.name=='round_table_chair')
{var p=this.b2Body.GetPosition(),r=(this.chairIndex*60).toRad();p.x=this.cx+this.radius*Math.cos(r),p.y=this.cy+this.radius*Math.sin(r);this.currentAnim.angle=Math.atan2(this.cy-p.y,this.cx-p.x)-(90).toRad();p.x/=Box2D.SCALE;p.y/=Box2D.SCALE;this.b2Body.SetPosition(p);}
else if(this.name=='door_1'&&ig.gameTank.data.room=='living_room')
this.currentAnim.angle=this.b2Body.GetAngle()+(-90).toRad();else
this.currentAnim.angle=this.b2Body.GetAngle();}
var p=this.b2Body.GetPosition();this.pos.x=(p.x*Box2D.SCALE)-ig.game.shakePos.x;this.pos.y=(p.y*Box2D.SCALE)-ig.game.shakePos.y;if(this.name=='roomba')
{if(this.pos.x>630)
{this.pos.x--;p.x-=1/Box2D.SCALE;this.b2Body.SetPosition(p);this.switchDir();}
else if(this.pos.y>300)
{this.pos.y--;p.y-=1/Box2D.SCALE;this.b2Body.SetPosition(p);this.switchDir();}}
else if(this.name=='car')
{if(this.pos.x>630)
{this.pos.x--;p.x-=1/Box2D.SCALE;this.b2Body.SetPosition(p);}}
if(ig.Debug)
{if(this.selected)
{if(ig.input.state('keyLeft'))
p.x-=1/Box2D.SCALE;if(ig.input.state('keyRight'))
p.x+=1/Box2D.SCALE;if(ig.input.state('keyUp'))
p.y-=1/Box2D.SCALE;if(ig.input.state('keyDown'))
p.y+=1/Box2D.SCALE;if(ig.input.state('keyG'))
this.offset.x-=1*ig.system.tick;if(ig.input.state('keyH'))
this.offset.x+=1*ig.system.tick;if(ig.input.state('keyT'))
this.offset.y-=1*ig.system.tick;if(ig.input.state('keyY'))
this.offset.y+=1*ig.system.tick;var a=this.b2Body.GetAngle();if(ig.input.state('keyQ'))
a-=(1).toRad();if(ig.input.state('keyE'))
a+=(1).toRad();var x=((p.x*Box2D.SCALE)-ig.game.tableOffset.x).toFixed(1);var y=((p.y*Box2D.SCALE)-ig.game.tableOffset.y).toFixed(1);ig.$('#selectedInfo').innerHTML='<strong>Selected</strong>: '+this.name+' (x:'+x+', y:'+y+', a:'+a.toDeg().toFixed(1)+')';this.b2Body.SetPosition(p);this.b2Body.SetAngle(a);ig.show('ox',this.offset.x.toFixed(2));ig.show('oy',this.offset.y.toFixed(2));ig.show('a',Math.round(a.toDeg()));if(ig.input.released('keyDelete'))
this.kill();}}}},erase:function()
{this.parent();if(this.b2Body)
ig.game.b2World.DestroyBody(this.b2Body);},playSound:function()
{if(this.sounds.length>0)
{if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects',this.sounds.random());else
this.sounds.random().play();}},beginContact:function(obj,objData)
{if(objData.name!='ball'&&objData.name!='roomba')
return;if(objData.name=='roomba'&&this.b2Body&&this.b2Body.GetType()<2)
objData.switchDir();else if(objData.name=='ball')
{objData.scream();if(this.isBroken&&this.onFloor)
this.hitByBall(obj);}
if(this.name.indexOf('slippery_floor')>-1&&!objData.usedTeleport)
return;if(objData.name=='roomba')
{if((this.name.indexOf('door_')>-1||this.name=='red_frame_1'||this.name=='red_frame_2'||this.name=='yellow_frame_1'||this.name=='yellow_frame_2'||this.name.indexOf('paint_')>-1)&&this.anims.broken)
{this.currentAnim=this.anims.broken;this.playSound();}
if(this.isBroken&&this.onFloor)
this.hitByBall(obj);}
else if(objData.name=='ball')
{this.playSound();if(this.anims.broken)
this.currentAnim=this.anims.broken;}
if(objData.name=='ball')
{if((this.name=='kitchen_sink'&&!this.isBroken)||this.name=='lamp'||this.name=='desk_2'||this.name=='bar_stool'||this.name=='couch_footstool'||this.name=='roomba')
this.currentAnim.rewind();if(this.name=='tv'||this.name=='kitchen_sink'||this.name=='speaker')
{if(!this.timer)
this.timer=new ig.Timer();this.timer.set(30);this.onTimer=function()
{this.currentAnim=this.anims.idle;this.isBroken=false;this.onFloor=false;if(this.anims.broken)
this.anims.broken.rewind();this.timer=null;this.onTimer=null}.bind(this)}
if(this.points)
ig.game.addPoints(this.points);this.isBroken=true;if(this.destruction)
ig.game.destructionCheck(this);if(this.comboGroup)
ig.game.checkComboGroup(this);}
if(this.onFloor)
return;if(this.name=='door_1')
{this.onFloor=true;if(ig.gameTank.data.room=='jasmines_room')
{setTimeout(function()
{this.onFloor=false;this.isBroken=false;this.currentAnim=this.anims.idle;}.bind(this),this.retractTime*1000);}}
else if(this.name=='door_2')
{this.onFloor=true;if(ig.gameTank.data.room=='living_room')
{this.newBody=function()
{this.offset.x=2.2,this.offset.y=0.45;this.b2Body.SetAngle((45).toRad());this.newBody=null}.bind(this)
setTimeout(function()
{this.onFloor=false;this.isBroken=false;this.currentAnim=this.anims.idle;this.offset.x=0.5,this.offset.y=0.5;this.b2Body.SetAngle((-40).toRad());}.bind(this),this.retractTime*1000);}
else
{this.offset.y=-0.3;setTimeout(function()
{this.onFloor=false;this.isBroken=false;this.currentAnim=this.anims.idle;this.offset.y=0.5;}.bind(this),this.retractTime*1000);}}
else if(this.name=='door_3')
{this.onFloor=true;if(ig.gameTank.data.room=='living_room')
{this.newBody=function()
{var pos=this.b2Body.GetWorldCenter();pos.x-=24/Box2D.SCALE;pos.y+=22/Box2D.SCALE;this.b2Body.SetPosition(pos);this.b2Body.SetAngle(0);this.newBody=null}.bind(this)}
else
{setTimeout(function()
{this.onFloor=false;this.isBroken=false;this.currentAnim=this.anims.idle;}.bind(this),this.retractTime*1000);}}
if(this.name=='couch'&&objData.name=='ball')
{this.onFloor=true;this.newBody=function()
{ig.game.spawnEntity(entPinballObject,100,182,{name:'couch_pillow',points:ig.Config.points.base});this.newBody=null}.bind(this)}
else if(this.name.indexOf('slippery_floor')>-1&&objData.name=='ball')
{this.onFloor=true;this.size.x=54,this.size.y=60;this.offset.x=0.5,this.offset.y=0.5;this.newBody=function()
{ig.game.b2World.DestroyBody(this.b2Body);this.b2Body=ig.game._b2CreateBox(this.pos.x-ig.game.tableOffset.x,this.pos.y-ig.game.tableOffset.y,50,60,0);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetUserData(this);this.hitByBall(obj);this.newBody=null}.bind(this);}
else if(this.name=='red_frame_1'||this.name=='red_frame_2'||this.name=='yellow_frame_1'||this.name=='yellow_frame_2')
{this.onFloor=true;this.size.x=30,this.size.y=33;this.offset.x=0.5,this.offset.y=0.5;this.newBody=function()
{ig.game.b2World.DestroyBody(this.b2Body);this.b2Body=ig.game._b2CreateCircle(this.pos.x-ig.game.tableOffset.x,this.pos.y-ig.game.tableOffset.y,15);this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetSensor(true);this.b2Body.SetUserData(this);this.hitByBall(obj);this.newBody=null}.bind(this);}
else if(this.name=='fridge_door'&&objData.name=='ball')
{}
else if((this.name=='crayon_drawer'||this.name=='dishwasher')&&objData.name=='ball')
{this.onFloor=true;obj.GetLinearVelocity().Add(new Box2D.Common.Math.b2Vec2(0,this.bumpForce));setTimeout(function()
{this.onFloor=false;this.currentAnim=this.anims.idle;}.bind(this),this.retractTime*1000);}
else if(this.name=='books'&&objData.name=='ball')
{this.onFloor=true;this.offset.x=0.9;obj.GetLinearVelocity().Add(new Box2D.Common.Math.b2Vec2(-this.bumpForce,0));setTimeout(function()
{this.onFloor=false
this.offset.x=0.5;}.bind(this),this.retractTime*1000);}
else if(this.name=='table_chair'&&objData.name=='ball')
{this.onFloor=true;this.offset.x=0.1;obj.GetLinearVelocity().Add(new Box2D.Common.Math.b2Vec2(this.bumpForce,0));setTimeout(function()
{this.onFloor=false;this.offset.x=0.5;}.bind(this),this.retractTime*1000);}
else if(this.name=='trash_bin'||this.name=='recycle_bin'||this.name=='trash_can')
{if(this.debrisCount<5)
{this.debrisCount++;this.onFloor=true;this.newBody=function()
{var debris=ig.game.spawnEntity(entPinballObject,this.pos.x-ig.game.tableOffset.x,this.pos.y-ig.game.tableOffset.y,{name:'debris',points:ig.Config.points.base}),ballVel=obj.GetLinearVelocity(),diff=ballVel.Length()<8?8-ballVel.Length():1;debris.b2Body.SetAngularVelocity(obj.GetAngularVelocity())
debris.b2Body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(ballVel.x*diff,ballVel.y*diff));debris.b2Body.SetAngularDamping(6);debris.b2Body.SetLinearDamping(6);debris.onFloor=true;this.newBody=null}
setTimeout(function(){this.onFloor=false}.bind(this),1000);}}
else if(this.name=='tv'&&objData.name=='ball')
{this.onFloor=true;objData.scream('electric');}
else if(this.name=='table'&&objData.name=='ball')
{this.onFloor=true;this.newBody=function()
{ig.game.spawnEntity(entPinballObject,-120,167,{name:'hand_mirror',points:ig.Config.points.base});this.newBody=null}.bind(this)}
else if(this.name=='shoe_shelf'&&objData.name=='ball')
{this.onFloor=true;this.newBody=function()
{ig.game.spawnEntity(entPinballObject,122,-425,{name:'shoe_1',points:ig.Config.points.base});ig.game.spawnEntity(entPinballObject,173,-420,{name:'shoe_2',points:ig.Config.points.base});this.newBody=null}.bind(this)}
else if((this.name=='drawer'||this.name=='clothes')&&objData.name=='ball')
{this.onFloor=true;obj.GetLinearVelocity().Add(new Box2D.Common.Math.b2Vec2(-this.bumpForce,0));setTimeout(function()
{this.onFloor=false;this.currentAnim=this.anims.idle}.bind(this),this.retractTime*1000);}
else if(this.name=='heart'&&objData.name=='ball')
{this.onFloor=true;this.newBody=function()
{var circ=new Box2D.Collision.Shapes.b2CircleShape;circ.SetRadius(0.6);this.b2Body.GetFixtureList().GetShape().Set(circ);var pos=this.b2Body.GetPosition();pos.x+=5/Box2D.SCALE;pos.y+=60/Box2D.SCALE;this.b2Body.SetPosition(pos);this.b2Body.SetType(2);this.points=ig.Config.points.base;this.newBody=null}.bind(this)}
else if(this.name.indexOf('cabinet_')>-1&&objData.name=='ball')
{this.onFloor=true;var a=this.bounceAngle.toRad();var v2=new Box2D.Common.Math.b2Vec2(Math.cos(a),Math.sin(a));v2.Multiply(this.bumpForce);obj.SetLinearVelocity(v2);this.newBody=function()
{this.soundChair.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','woodWhack');if(this.name=='cabinet_1')
this.offset.y=-1.35,this.b2Body.SetAngle((30).toRad());else if(this.name=='cabinet_2')
this.offset.y=-1.35,this.b2Body.SetAngle((-30).toRad());else if(this.name=='cabinet_6'||this.name=='cabinet_7')
this.offset.x=0.25,this.b2Body.SetAngle((60).toRad());else if(this.name=='cabinet_4'||this.name=='cabinet_5')
this.offset.y=2.15,this.b2Body.SetAngle((-30).toRad());else if(this.name=='cabinet_3')
this.offset.y=2.15,this.b2Body.SetAngle((30).toRad());this.newBody=null}.bind(this)
setTimeout(function()
{this.onFloor=false;this.isBroken=false;this.offset.x=0.5,this.offset.y=0.5;this.b2Body.SetAngle(this.angle.toRad());}.bind(this),this.retractTime*1000);}
else if(this.name=='couch_footstool'&&objData.name=='ball')
{var a=(ig.gameTank.data.room=='living_room'?-165:-135).toRad();var v2=new Box2D.Common.Math.b2Vec2(Math.cos(a),Math.sin(a));v2.Multiply(this.bumpForce);obj.SetLinearVelocity(v2);}
else if(this.name=='roomba'&&objData.name=='ball')
{this.onFloor=true;this.b2Body.SetType(0);this.timer.pause();setTimeout(function()
{this.onFloor=false;this.b2Body.SetType(2);this.timer.unpause();}.bind(this),this.retractTime*1000);}
if(this.name=='round_table_chair'&&objData.name=='ball')
{if(this.tween)
this.tween.kill();this.tween=TweenMax.fromTo(this,1,{radius:70,ease:Elastic.easeOut},{radius:55,ease:Elastic.easeOut});}
if(this.name=='lamp'||this.name.indexOf('trash_')>-1||this.name=='ottoman')
{if(this.tween)
this.tween.kill();this.tween=TweenMax.fromTo(this.scale,1.5,{x:1.6,y:1.6,ease:Elastic.easeOut},{x:1,y:1,ease:Elastic.easeOut})}},endContact:function(obj,objData)
{if(objData.name!='ball')
return;if(this.name=='ottoman'||this.name=='lamp'||this.name=='bed_leg'||this.name.indexOf('trash_')>-1||this.name=='bar_stool'||this.name=='round_table'||this.name=='round_table_chair'||this.name=='roomba')
{var v=obj.GetLinearVelocity();v.Multiply(this.bumpForce*0.2);if(v.Length()>30)
v.Multiply(30/v.Length());}},hitByBall:function(obj)
{this.b2Body.SetAngularVelocity(obj.GetAngularVelocity());this.b2Body.SetLinearVelocity(obj.GetLinearVelocity());this.b2Body.GetLinearVelocity().Multiply(0.25);this.b2Body.SetAngularDamping(6);this.b2Body.SetLinearDamping(6);},switchDir:function(reverse)
{this.newBody=function()
{var a=Math.rand(0,360).toRad();var v=new Box2D.Common.Math.b2Vec2(Math.cos(a),Math.sin(a));while(v.Length()<1)
v.Multiply(1.1);this.b2Body.SetLinearVelocity(v);this.b2Body.SetAngle(Math.acos(v.x/v.LengthSquared())+(90).toRad());this.newBody=null};this.timer.set(Math.rand(1,4));}})})