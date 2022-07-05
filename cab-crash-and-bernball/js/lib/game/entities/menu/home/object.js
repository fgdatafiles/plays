ig.module('game.entities.menu.home.object').requires('cm.entity').defines(function()
{entMenuHomeObject=ig.Entity.extend({offset:{x:0.5,y:0.5},init:function(x,y,settings)
{this.parent(x,y,settings);var ta=ig.game.getTextureAtlas('home_sprites');if(this.name=='disney_logo')
{this.addTextureAtlasAnim(ta,'idle',1,['disney_logo.png'],true,true);this.size.x=196,this.size.y=113;}
else if(this.name=='stream')
{this.addTextureAtlasAnim(ta,'idle',1,['stream.png'],true,true);this.offset.y=0;this.size.x=447,this.size.y=319;}
else if(this.name=='lamp')
{this.addTextureAtlasAnim(ta,'idle',1,['lamp.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['lamp_broken.png'],true,true);this.size.x=199,this.size.y=279;}
else if(this.name=='ball_home')
{this.addTextureAtlasAnim(ta,'idle',1,['crash_ball.png'],true,true);this.size.x=149,this.size.y=179;}
else if(this.name=='bern')
{this.addTextureAtlasAnim(ta,'idle',1,['bern.png'],true,true);this.size.x=178,this.size.y=201;}
else if(this.name=='ball')
{this.addTextureAtlasAnim(ta,'idle',1,['ball.png'],true,true);this.size.x=253,this.size.y=206;}
else if(this.name=='amp')
{this.addTextureAtlasAnim(ta,'idle',1,['amp.png'],true,true);this.addTextureAtlasAnim(ta,'broken',1,['amp_hit.png'],true,true);this.size.x=83,this.size.y=103;}
else if(this.name=='crash')
{this.addTextureAtlasAnim(ta,'idle',1,['crash.png'],true,true);this.size.x=472,this.size.y=201;}},draw:function()
{if(this.name=='stream'&&ig.game.streams!=null)
{var ctx=ig.system.context;ctx.save();ctx.beginPath();if(ig.game.streams[0]>0)
ctx.rect(0,0,400,ig.game.streams[0]);if(ig.game.streams[1]>0)
ctx.rect(0,0,ig.game.streams[1],130);if(ig.game.streams[2]>0)
ctx.rect(0,0,750,ig.game.streams[2]);ctx.clip();this.parent();ctx.restore();}
else
this.parent();}})})