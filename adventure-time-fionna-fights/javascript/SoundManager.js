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
	if(this.currentMusic != value){
		if (this.allMusics[this.currentMusic]){
			this.allMusics[this.currentMusic].stop();
		}
		this.currentMusic = value;
		if (this.allMusics[value]){
			this.allMusics[value].play();
		}
	}
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
	
    this.allSounds.zattack1 = new Howl({
        urls: ['sounds/zattack1.ogg', 'sounds/zattack1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zattack4 = new Howl({
        urls: ['sounds/zattack4.ogg', 'sounds/zattack4.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbonus = new Howl({
        urls: ['sounds/zbonus.ogg', 'sounds/zbonus.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbump = new Howl({
        urls: ['sounds/zbump.ogg', 'sounds/zbump.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zbuy = new Howl({
        urls: ['sounds/zbuy.ogg', 'sounds/zbuy.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zcount = new Howl({
        urls: ['sounds/zcount.ogg', 'sounds/zcount.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zdemon = new Howl({
        urls: ['sounds/zdemon.ogg', 'sounds/zdemon.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zexplosion1 = new Howl({
        urls: ['sounds/zexplosion1.ogg', 'sounds/zexplosion1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zexplosion2 = new Howl({
        urls: ['sounds/zexplosion2.ogg', 'sounds/zexplosion2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zexplosion3 = new Howl({
        urls: ['sounds/zexplosion3.ogg', 'sounds/zexplosion3.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zfireball = new Howl({
        urls: ['sounds/zfireball.ogg', 'sounds/zfireball.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zhit1 = new Howl({
        urls: ['sounds/zhit1.ogg', 'sounds/zhit1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zhit2 = new Howl({
        urls: ['sounds/zhit2.ogg', 'sounds/zhit2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zmiss = new Howl({
        urls: ['sounds/zmiss.ogg', 'sounds/zmiss.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zmissile = new Howl({
        urls: ['sounds/zmissile.ogg', 'sounds/zmissile.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zmissile = new Howl({
        urls: ['sounds/zmissile.ogg', 'sounds/zmissile.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zroot = new Howl({
        urls: ['sounds/zroot.ogg', 'sounds/zroot.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zswoosh = new Howl({
        urls: ['sounds/zswoosh.ogg', 'sounds/zswoosh.m4a'],
        onload:itemLoaded
    });
    this.allSounds.ztink = new Howl({
        urls: ['sounds/ztink.ogg', 'sounds/ztink.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvampire = new Howl({
        urls: ['sounds/zvampire.ogg', 'sounds/zvampire.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1fall = new Howl({
        urls: ['sounds/zvo1fall.ogg', 'sounds/zvo1fall.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1miss = new Howl({
        urls: ['sounds/zvo1miss.ogg', 'sounds/zvo1miss.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1weapon1 = new Howl({
        urls: ['sounds/zvo1weapon1.ogg', 'sounds/zvo1weapon1.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1weapon2 = new Howl({
        urls: ['sounds/zvo1weapon2.ogg', 'sounds/zvo1weapon2.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1weapon3 = new Howl({
        urls: ['sounds/zvo1weapon3.ogg', 'sounds/zvo1weapon3.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1weapon4 = new Howl({
        urls: ['sounds/zvo1weapon4.ogg', 'sounds/zvo1weapon4.m4a'],
        onload:itemLoaded
    });
    this.allSounds.zvo1weapon5 = new Howl({
        urls: ['sounds/zvo1weapon5.ogg', 'sounds/zvo1weapon5.m4a'],
        onload:itemLoaded
    });
    
    
    
    this.totalAudioFiles  = Object.keys(this.allSounds).length + Object.keys(this.allMusics).length;
    // console.log("totalAudioFiles="+this.totalAudioFiles);

    this.loadedAudioFiles = 0;
};
