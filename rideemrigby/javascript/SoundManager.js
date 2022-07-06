var SoundManager = function() {
    this.allSounds = {};
    this.allMusics = {};
    this.channels  = {};

    this.currentMusic = "none";
};

SoundManager.prototype.playSound = function(value){
	if (this.allSounds[value]){
		this.allSounds[value].play();
	}
};

SoundManager.prototype.playMusic = function(value){
	// if(this.currentMusic != value){
		if (this.allMusics[this.currentMusic]){
			this.allMusics[this.currentMusic].stop();
		}
		this.currentMusic = value;
		if (this.allMusics[value]){
			this.allMusics[value].play();
		}
	// }
};

SoundManager.prototype.stopMusic = function(){
	if (this.allMusics[this.currentMusic]){
		this.allMusics[this.currentMusic].stop();
	}
};

SoundManager.prototype.initSoundModule = function() {

    var _self = this;
    function itemLoaded(){
        _self.loadedAudioFiles++;
        // console.log("this.loadedAudioFiles="+_self.loadedAudioFiles);
    };

    this.allMusics.zloop = new Howl({
        urls: ['sounds/zloop.ogg', 'sounds/zloop.m4a'],
        loop:true,
        volume:1,
        onload:itemLoaded
    });
    this.allMusics.zloop2 = new Howl({
        urls: ['sounds/zloop2.ogg', 'sounds/zloop2.m4a'],
        loop:true,
        volume:1,
        onload:itemLoaded
    });
	
    this.allSounds.zac = new Howl({
        urls: ['sounds/zac.ogg', 'sounds/zac.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zarcade = new Howl({
        urls: ['sounds/zarcade.ogg', 'sounds/zarcade.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbegin1 = new Howl({
        urls: ['sounds/zbegin1.ogg', 'sounds/zbegin1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbegin2 = new Howl({
        urls: ['sounds/zbegin2.ogg', 'sounds/zbegin2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbillboard = new Howl({
        urls: ['sounds/zbillboard.ogg', 'sounds/zbillboard.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zblast = new Howl({
        urls: ['sounds/zblast.ogg', 'sounds/zblast.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zboing = new Howl({
        urls: ['sounds/zboing.ogg', 'sounds/zboing.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbonus = new Howl({
        urls: ['sounds/zbonus.ogg', 'sounds/zbonus.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbonus2 = new Howl({
        urls: ['sounds/zbonus2.ogg', 'sounds/zbonus2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zcrates = new Howl({
        urls: ['sounds/zcrates.ogg', 'sounds/zcrates.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zexplosion = new Howl({
        urls: ['sounds/zexplosion.ogg', 'sounds/zexplosion.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zfall = new Howl({
        urls: ['sounds/zfall.ogg', 'sounds/zfall.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zfridge = new Howl({
        urls: ['sounds/zfridge.ogg', 'sounds/zfridge.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zhit1 = new Howl({
        urls: ['sounds/zhit1.ogg', 'sounds/zhit1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zjump = new Howl({
        urls: ['sounds/zjump.ogg', 'sounds/zjump.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zland = new Howl({
        urls: ['sounds/zland.ogg', 'sounds/zland.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zpaintcans = new Howl({
        urls: ['sounds/zpaintcans.ogg', 'sounds/zpaintcans.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zpop = new Howl({
        urls: ['sounds/zpop.ogg', 'sounds/zpop.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zrock = new Howl({
        urls: ['sounds/zrock.ogg', 'sounds/zrock.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zslam = new Howl({
        urls: ['sounds/zslam.ogg', 'sounds/zslam.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zsofa = new Howl({
        urls: ['sounds/zsofa.ogg', 'sounds/zsofa.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zsplat = new Howl({
        urls: ['sounds/zsplat.ogg', 'sounds/zsplat.m4a'],
        onload:itemLoaded
    });
    this.allSounds.ztrashcans = new Howl({
        urls: ['sounds/ztrashcans.ogg', 'sounds/ztrashcans.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zunicorns = new Howl({
        urls: ['sounds/zunicorns.ogg', 'sounds/zunicorns.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvending = new Howl({
        urls: ['sounds/zvending.ogg', 'sounds/zvending.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvowin1 = new Howl({
        urls: ['sounds/zvowin1.ogg', 'sounds/zvowin1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvowin2 = new Howl({
        urls: ['sounds/zvowin2.ogg', 'sounds/zvowin2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvowin3 = new Howl({
        urls: ['sounds/zvowin3.ogg', 'sounds/zvowin3.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvowin4 = new Howl({
        urls: ['sounds/zvowin4.ogg', 'sounds/zvowin4.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell1 = new Howl({
        urls: ['sounds/zyell1.ogg', 'sounds/zyell1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell2 = new Howl({
        urls: ['sounds/zyell2.ogg', 'sounds/zyell2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell3 = new Howl({
        urls: ['sounds/zyell3.ogg', 'sounds/zyell3.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell4 = new Howl({
        urls: ['sounds/zyell4.ogg', 'sounds/zyell4.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell5 = new Howl({
        urls: ['sounds/zyell5.ogg', 'sounds/zyell5.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zyell6 = new Howl({
        urls: ['sounds/zyell6.ogg', 'sounds/zyell6.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zzap = new Howl({
        urls: ['sounds/zzap.ogg', 'sounds/zzap.m4a'],
        onload:itemLoaded
    });
    
    this.totalAudioFiles  = Object.keys(this.allSounds).length + Object.keys(this.allMusics).length;
    // console.log("totalAudioFiles="+this.totalAudioFiles);

    this.loadedAudioFiles = 0;
};
