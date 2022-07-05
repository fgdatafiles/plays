ig.module('game.entities.pinball.flipper').requires('cm.entity').defines(function()
{entPinballFlipper=ig.Entity.extend({name:'flipper',size:{x:98,y:43},offset:{x:0.5,y:0.5},touchId:0,b2Body:null,joint:null,side:'',soundLeft:new ig.Sound('media/audio/sfx2/Paddle1.*'),soundRight:new ig.Sound('media/audio/sfx2/Paddle2.*'),init:function(x,y,settings)
{this.parent(x,y,settings);if(this.side=='left')
{this.addTextureAtlasAnim(ig.game.getTextureAtlas('pinball_sprites'),'idle',1,['flipper_left.png'],true,true);this.b2Body=ig.game._b2CreateCustom(this.pos.x-ig.game.tableOffset.x,this.pos.y,[-26.5,-21,34.5,-13,47.5,-4,34.5,9,-20.5,17,-47.5,3,-44.5,-14]);}
else
{this.addTextureAtlasAnim(ig.game.getTextureAtlas('pinball_sprites'),'idle',1,['flipper_right.png'],true,true);this.b2Body=ig.game._b2CreateCustom(this.pos.x-ig.game.tableOffset.x,this.pos.y,[-43.5,-6,2.5,-18,35.5,-19,45.5,-3,42.5,12,20.5,19,-45.5,9]);}
this.b2Body.SetType(2);this.b2Body.GetFixtureList().SetDensity(10);var local=this.b2Body.GetWorldCenter();local.Add(new Box2D.Common.Math.b2Vec2((this.side=='left'?-20:20)/Box2D.SCALE,8/Box2D.SCALE));var circBodyDef=new Box2D.Dynamics.b2BodyDef;circBodyDef.position.Set(local.x,local.y);var fixture=new Box2D.Dynamics.b2FixtureDef;fixture.shape=new Box2D.Collision.Shapes.b2CircleShape(1/Box2D.SCALE);var circBody=ig.game.b2World.CreateBody(circBodyDef);circBody.CreateFixture(fixture);var revJointDef=new Box2D.Dynamics.Joints.b2RevoluteJointDef;revJointDef.Initialize(this.b2Body,circBody,local);revJointDef.upperAngle=this.upperAngle;revJointDef.lowerAngle=this.lowerAngle;revJointDef.enableLimit=true;revJointDef.enableMotor=true;revJointDef.maxMotorTorque=999999;this.joint=ig.game.b2World.CreateJoint(revJointDef);this.joint.SetMotorSpeed(this.side=='left'?-10:10);if(ig.ua.touchDevice)
{ig.input.on('mousedown',this.onMouseEvent.bind(this));ig.input.on('mouseup',this.onMouseEvent.bind(this));}},update:function()
{this.parent();if(ig.game.controlBall||ig.gameTank.data.instructions)
this.joint.SetMotorSpeed(this.side=='left'?-10:10);else
{if(this.side=='left')
{if(ig.input.pressed('keyLeft'))
{this.soundLeft.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','paddle1');this.joint.SetMotorSpeed(20);}
if(ig.input.released('keyLeft'))
this.joint.SetMotorSpeed(-10);}
else if(this.side=='right')
{if(ig.input.pressed('keyRight'))
{this.soundRight.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','paddle2');this.joint.SetMotorSpeed(-20);}
if(ig.input.released('keyRight'))
this.joint.SetMotorSpeed(10);}}
this.currentAnim.angle=this.b2Body.GetAngle();var p=this.b2Body.GetPosition();this.pos.x=(p.x*Box2D.SCALE)-ig.game.shakePos.x;this.pos.y=(p.y*Box2D.SCALE)-ig.game.shakePos.y;},onMouseEvent:function(e)
{if(ig.gameTank.data.instructions)
return;var x=e.changedTouches[0].pageX;var w=window.innerWidth*0.5;if(x<w&&this.side=='left')
this.joint.SetMotorSpeed(e.type=='touchstart'?20:-10);else if(x>w&&this.side=='right')
this.joint.SetMotorSpeed(e.type=='touchstart'?-20:10);if(e.type=='touchstart')
{if(this.side=='left')
{this.soundLeft.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','paddle1');}
else if(this.side=='right')
{this.soundRight.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','paddle2');}}}})})