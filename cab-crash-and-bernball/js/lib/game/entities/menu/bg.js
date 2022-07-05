ig.module('game.entities.menu.bg').requires('cm.entity').defines(function()
{entMenuBg=ig.Entity.extend({offset:{x:0.5,y:0.5},boardAnimSheet:new ig.AnimationSheet('media/images/scenes/menu/bg-board.png',1224,500),junkAnimSheet:new ig.AnimationSheet('media/images/scenes/menu/bg-junk.png',900,500),junk2AnimSheet:new ig.AnimationSheet('media/images/scenes/menu/bg-junk2.png',749,500),scoreboxAnimSheet:new ig.AnimationSheet('media/images/scenes/menu/scorebox.png',630,316),init:function(x,y,settings)
{this.parent(x,y,settings);if(this.name=='board')
{this.size.x=1227,this.size.y=500;this.animSheet=this.boardAnimSheet;}
else if(this.name=='junk')
{this.size.x=900,this.size.y=500;this.animSheet=this.junkAnimSheet;}
else if(this.name=='junk2')
{this.size.x=749,this.size.y=500;this.animSheet=this.junk2AnimSheet;}
else if(this.name=='scorebox')
{this.size.x=630,this.size.y=316;this.animSheet=this.scoreboxAnimSheet;}
this.addAnim('idle',1,[0],true);}})})