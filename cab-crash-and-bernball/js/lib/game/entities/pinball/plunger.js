ig.module('game.entities.pinball.plunger').requires('cm.entity').defines(function()
{entPinballPlunger=ig.Entity.extend({name:'plunger',pos:{x:710,y:347},size:{x:48,y:208},offset:{x:0.5,y:0.5},soundPull:new ig.Sound('media/audio/sfx2/plungerPull.*'),soundRelease:new ig.Sound('media/audio/sfx2/whack.*'),canShoot:true,ball:null,tween:null,b2Body:null,power:null,lastSoundCall:0,init:function()
{this.parent();this.startPos={x:this.pos.x,y:this.pos.y};this.addTextureAtlasAnim(ig.game.getTextureAtlas('pinball_sprites'),'idle',1,['plunger.png'],true,true);this.b2Body=ig.game._b2CreateBox(this.pos.x-ig.game.tableOffset.x,this.pos.y-ig.game.tableOffset.y,48,200);this.b2Body.SetUserData(this);ig.input.on('mousedown',this.onShootStart.bind(this));ig.input.on('mousemove',this.onShootMove.bind(this));ig.input.on('mouseup',this.onShootEnd.bind(this));},update:function()
{if(!this.ball)
this.ball=ig.game.getEntityByName('ball');if(this.b2Body)
{if(!ig.game.controlBall&&!ig.gameTank.data.instructions)
{if(ig.input.state('keyDown')&&this.canShoot&&!this.pullingBack)
this.pullingBack=true;else if(ig.input.released('keyDown')&&this.pullingBack)
{this.pullingBack=false;var v2=this.b2Body.GetPosition();this.power=(this.startPos.y-(v2.y*Box2D.SCALE)).limit(-90,0);this.startDragY=true;ig.input.mouse.x=9999;this.onShootEnd();}
if(this.pullingBack)
{if(this.tween)
this.tween.kill();if(Date.now()>this.lastSoundCall+1000)
{this.lastSoundCall=Date.now();this.soundPull.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','plungerPull');}
var v=this.b2Body.GetPosition();if(v.y<14.4)
v.y+=2*ig.system.tick;this.b2Body.SetPosition(v);this.ball.b2Body.SetType(0);var v2=this.ball.b2Body.GetPosition();v2.y=v.y-4.05;this.ball.b2Body.SetPosition(v2);}}
var p=this.b2Body.GetPosition();this.pos.x=(p.x*Box2D.SCALE)-ig.game.shakePos.x;this.pos.y=(p.y*Box2D.SCALE)-ig.game.shakePos.y;}},draw:function()
{var ctx=ig.system.context;ctx.save();var y=-ig.game.screen.y+this.startPos.y+20+-ig.game.shakePos.y;ctx.beginPath();ctx.moveTo(this.startPos.x-21-ig.game.shakePos.x,y-140);ctx.lineTo(this.startPos.x+30-ig.game.shakePos.x,y-140);ctx.lineTo(this.startPos.x+30-ig.game.shakePos.x,y);ctx.lineTo(this.startPos.x-21-ig.game.shakePos.x,y);ctx.clip();this.parent();ctx.restore();},beginContact:function(){this.canShoot=true},endContact:function(){this.canShoot=false},onShootStart:function()
{if(this.canShoot&&ig.input.mouse.x>150&&!ig.game.controlBall&&!ig.gameTank.data.instructions)
this.startDragY=ig.input.mouse.y},onShootMove:function()
{if(this.startDragY&&ig.input.mouse.x>150)
{var distY=(this.startDragY-ig.input.mouse.y).limit(-Infinity,0),x=this.startPos.x,y=this.startPos.y-ig.game.tableOffset.y;this.power=(distY*0.5).limit(-90,0);y=y-this.power;if(this.power<-10&&Date.now()>this.lastSoundCall+1000)
{this.lastSoundCall=Date.now();this.soundPull.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','plungerPull');}
var v2=this.b2Body.GetPosition();v2.y=y/Box2D.SCALE;this.b2Body.SetPosition(v2);if(this.ball)
{this.ball.b2Body.SetType(0);v2=this.ball.b2Body.GetPosition();v2.y=(y-120)/Box2D.SCALE;this.ball.b2Body.SetPosition(v2);}
if(this.tween)
this.tween.kill();}},onShootEnd:function()
{this.ball.b2Body.SetType(2);if(this.startDragY&&ig.input.mouse.x>150&&this.power!=null)
{if(this.power<-20)
{this.soundPull.stop();this.soundRelease.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','whack');}
this.ball.b2Body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(0,-this.power));this.startDragY=null;this.power=null;var pos=this.b2Body.GetPosition();this.tween=TweenMax.to(pos,1.2,{y:(this.startPos.y-ig.game.tableOffset.y)/Box2D.SCALE,ease:Elastic.easeOut,onUpdate:function()
{this.b2Body.SetPosition(pos)}.bind(this)})}}})})