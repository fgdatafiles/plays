ig.module('game.entities.menu.font').requires('cm.entity').defines(function()
{entMenuFont=ig.Entity.extend({offset:{x:0.5,y:0.5},font:null,text:'',align:ig.Font.ALIGN.CENTER,mask:null,init:function(x,y,settings)
{this.parent(x,y,settings);this.startPos={x:this.pos.x,y:this.pos.y};this.font=new ig.TextureAtlasFont(ig.game.getTextureAtlas('font_sprites'),'font_'+this.name+'.png',this.name=='black_18'?['bold']:[]);},update:function()
{this.parent();if(ig.global.GamePinball&&ig.game instanceof GamePinball)
{this.pos.x=this.startPos.x;this.pos.y=this.startPos.y+ig.game.screen.y;}},draw:function()
{if(this.mask!=null)
{var ctx=ig.system.context;ctx.save();ctx.rect(0,0,this.mask,500);ctx.clip();}
if(this.name=='orange_48')
{var rw=ig.system.realWidth;var ctx=ig.system.context;ctx.save();ctx.rotate((-90).toRad());ctx.translate(-rw+this.pos.x,this.pos.y);this.font.draw(this.text,rw,0,this.align,true);ctx.restore();}
else
this.font.draw(this.text,this.pos.x,this.pos.y,this.align);if(this.mask!=null)
ctx.restore();}})})