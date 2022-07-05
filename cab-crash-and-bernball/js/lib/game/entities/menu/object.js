ig.module('game.entities.menu.object').requires('cm.entity').defines(function()
{entMenuObject=ig.Entity.extend({offset:{x:0.5,y:0.5},init:function(x,y,settings)
{this.parent(x,y,settings);var ta=ig.game.getTextureAtlas('menu_sprites');if(this.name=='choose_a_room')
{this.addTextureAtlasAnim(ta,'idle',1,['choose_a_room.png'],true,true);this.size.x=477,this.size.y=100;}
else if(this.name=='good_job')
{this.addTextureAtlasAnim(ta,'idle',1,['good_job.png'],true,true);this.size.x=329,this.size.y=109;}
else if(this.name=='x')
{this.addTextureAtlasAnim(ta,'idle',1,['x.png'],true,true);this.size.x=17,this.size.y=16;}
else if(this.name=='x_button'||this.name=='c_button')
{this.addTextureAtlasAnim(ta,'idle',0.8,this.name.indexOf('x_')>-1?['x_white.png','x_purple.png']:['c_purple.png','c_white.png'],false,true);this.size.x=48,this.size.y=41;}
else if(this.name=='right_arrow_button'||this.name=='left_arrow_button')
{this.addTextureAtlasAnim(ta,'idle',0.8,this.name.indexOf('right_')>-1?['right_arrow_purple.png','right_arrow_white.png']:['left_arrow_white.png','left_arrow_purple.png'],false,true);this.size.x=48,this.size.y=41;}
else if(this.name=='ball_score')
{this.addTextureAtlasAnim(ta,'idle',1,['crash.png'],true,true);this.size.x=60,this.size.y=72;}
else if(this.name=='crash_stand')
{this.addTextureAtlasAnim(ta,'idle',1,['crash-stand.png'],true,true);this.size.x=270,this.size.y=302;}}})})