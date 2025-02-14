ig.module('plugins.box2d-debug').requires('plugins.box2d').defines(function()
{Box2DDebug=ig.Class.extend({alpha:0.5,thickness:1,init:function(world)
{this.world=world;this.canvas=ig.system.canvas;this.drawer=new Box2D.Dynamics.b2DebugDraw();this.drawer.SetSprite(this);this.drawer.SetDrawScale(1/ig.system.scale);this.drawer.SetFillAlpha(this.alpha);this.drawer.SetLineThickness(this.thickness);this.drawer.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit|Box2D.Dynamics.b2DebugDraw.e_jointBit);this.world.SetDebugDraw(this.drawer);},draw:function()
{ig.system.context.save();ig.system.context.translate(-ig.game.screen.x*ig.system.scale,-ig.game.screen.y*ig.system.scale);this.world.DrawDebugData();ig.system.context.restore();},clearRect:function(){},beginPath:function()
{ig.system.context.lineWidth=this.strokeWidth;ig.system.context.fillStyle='rgba(120, 120, 120, '+this.alpha+')';ig.system.context.strokeStyle='rgba(190, 190, 190, '+(this.alpha+this.alpha)+')';ig.system.context.beginPath();},arc:function(x,y,radius,startAngle,endAngle,counterClockwise)
{ig.system.context.arc(x*Box2D.SCALE,y*Box2D.SCALE,radius*Box2D.SCALE,startAngle,endAngle,counterClockwise)},closePath:function()
{ig.system.context.closePath()},fill:function()
{ig.system.context.fillStyle='rgba(120, 120, 120, '+this.alpha+')';ig.system.context.fill();},stroke:function()
{ig.system.context.stroke()},moveTo:function(x,y)
{ig.system.context.moveTo(x*Box2D.SCALE,y*Box2D.SCALE)},lineTo:function(x,y)
{ig.system.context.lineTo(x*Box2D.SCALE,y*Box2D.SCALE);ig.system.context.stroke();}})})