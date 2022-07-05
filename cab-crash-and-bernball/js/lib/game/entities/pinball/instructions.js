ig.module('game.entities.pinball.instructions').requires('cm.entity').defines(function()
{entPinballInstructions=ig.Entity.extend({bgImg:new ig.Image('media/images/scenes/pinball/bg-instructions.png'),draw:function()
{var ctx=ig.system.context,x=ig.game.tableOffset.x-(this.bgImg.width*0.5)-35,y=ig.game.tableOffset.y-(this.bgImg.height*0.5)+225;ctx.save();if(ig.game.instructions.text.indexOf('Drag plunger')>-1)
{ctx.beginPath();ctx.rect(x,y,this.bgImg.width,120);ctx.clip();}
ctx.drawImage(this.bgImg.data,x,y,this.bgImg.width,this.bgImg.height);ctx.restore();}})})