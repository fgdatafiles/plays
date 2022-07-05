ig.module('game.entities.menu.btn').requires('cm.button').defines(function()
{entMenuBtn=ig.Button.extend({offset:{x:0.5,y:0.5},soundClick:new ig.Sound('media/audio/sfx2/click.*'),soundRollover:new ig.Sound('media/audio/sfx2/rollover.*'),init:function(x,y,settings)
{this.parent(x,y,settings);var ta=ig.game.getTextureAtlas('menu_sprites');if(this.name=='play')
{this.addTextureAtlasAnim(ta,'idle',1,['btn_play.png'],true,true);this.addTextureAtlasAnim(ta,'over',1,['btn_play_over.png'],true,true);this.size.x=126,this.size.y=79;}
else if(this.name=='home'||this.name=='home2')
{this.addTextureAtlasAnim(ta,'idle',1,['btn_'+this.name+'.png'],true,true);this.addTextureAtlasAnim(ta,'over',1,['btn_'+this.name+'_over.png'],true,true);this.size.x=69,this.size.y=66;}
else if(this.name=='sound')
{this.addTextureAtlasAnim(ta,'sound_on',1,['btn_sound_on.png'],true,true);this.addTextureAtlasAnim(ta,'sound_on_over',1,['btn_sound_on_over.png'],true,true);this.addTextureAtlasAnim(ta,'sound_off',1,['btn_sound_off.png'],true,true);this.addTextureAtlasAnim(ta,'sound_off_over',1,['btn_sound_off_over.png'],true,true);this.size.x=68,this.size.y=66;if(ig.gameTank.data.sound==0)
this.currentAnim=this.anims.sound_off;}
else if(this.name=='living_room_cupboard'||this.name=='jasmines_room_cupboard')
{this.addTextureAtlasAnim(ta,'idle',1,[this.name+'.png'],true,true);this.addTextureAtlasAnim(ta,'over',1,[this.name+'_over.png'],true,true);if(this.name=='living_room_cupboard')
this.size.x=289,this.size.y=363;else
this.size.x=291,this.size.y=366;}
else if(this.name=='replay')
{this.addTextureAtlasAnim(ta,'idle',1,['btn_replay.png'],true,true);this.addTextureAtlasAnim(ta,'over',1,['btn_replay_over.png'],true,true);this.size.x=68,this.size.y=66;}
else if(this.name=='next')
{this.addTextureAtlasAnim(ta,'idle',1,['btn_next.png'],true,true);this.addTextureAtlasAnim(ta,'over',1,['btn_next_over.png'],true,true);this.size.x=68,this.size.y=66;}
else if(this.name=='x')
{this.addTextureAtlasAnim(ta,'idle',1,['x.png'],true,true);this.size.x=34,this.size.y=32;}
this.startPos={x:this.pos.x,y:this.pos.y};},update:function()
{this.parent();if(ig.global.GamePinball&&ig.game instanceof GamePinball)
{this.pos.x=this.startPos.x;this.pos.y=this.startPos.y+ig.game.screen.y;}},onReleased:function()
{if(this.name=='play')
{ig.game.gotoPanel('select');}
else if(this.name=='home')
{ig.game.gotoPanel('home');}
else if(this.name=='home2')
{ig.gameTank.data.menu='home';ig.gameTank.sceneManager.show('menu');}
else if(this.name=='living_room_cupboard'||this.name=='jasmines_room_cupboard')
{ig.gameTank.data.room=this.name=='living_room_cupboard'?'living_room':'jasmines_room';ig.gameTank.data.instructions=true;ig.gameTank.sceneManager.show('pinball');}
else if(this.name=='replay')
{ig.gameTank.sceneManager.show('pinball');}
else if(this.name=='next')
{ig.game.gotoPanel('select');}
else if(this.name=='x')
{}
else if(this.name=='sound')
{ig.soundManager.volume=ig.soundManager.volume>0?0:1;ig.gameTank.data.sound=ig.soundManager.volume;ig.music.volume=ig.soundManager.volume==1?0.2:0;if(ig.ua.android)
{if(ig.soundManager.volume==1)
ig.gameTank.soundJockey.resumeVO();else
ig.gameTank.soundJockey.pauseVO();}
this.currentAnim=this.anims[ig.soundManager.volume>0?'sound_on_over':'sound_off_over'];}
this.soundClick.play();if(ig.ua.android)
ig.gameTank.soundJockey.playSound('soundeffects','click');},onMouseOver:function()
{if(this.name!='sound')
{if(this.anims.over)
this.currentAnim=this.anims.over;}
else
{if(ig.gameTank.data.sound>0)
this.currentAnim=this.anims.sound_on_over;else
this.currentAnim=this.anims.sound_off_over;}
this.soundRollover.play();},onMouseOut:function()
{if(this.name!='sound')
this.currentAnim=this.anims.idle
else
{if(ig.gameTank.data.sound>0)
this.currentAnim=this.anims.sound_on;else
this.currentAnim=this.anims.sound_off;}}})})