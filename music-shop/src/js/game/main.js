cm = {};
(function() {
  var gameConfig = {
    forceLandscape: false,
    targetWidth: 960,  //960x500
    targetHeight: 500,
    initialManifest: [
      {id: 'loadTrolly', src: 'src/media/images/ui/load-trolley.json', type: createjs.AbstractLoader.SPRITESHEET}
    ],
    mainManifest: [
      //Images
      {id: 'title', src: 'src/media/images/title.jpg'},
      {id: 'titleAudio', src: 'src/media/audio/title-audio.ogg'},
      {id: 'musicShopBackground', src: 'src/media/images/music-shop/music-shop-background.jpg'},
      {id: 'musicShopSpriteSheet', src: 'src/media/images/music-shop-spritesheet.json', type: createjs.AbstractLoader.SPRITESHEET},
      {id: 'musicPageTurn', src: 'src/media/images/music-page-turn.json', type: createjs.AbstractLoader.SPRITESHEET},
      {id: 'mobileSpriteSheet', src: 'src/media/images/musicnotemobile.json', type: createjs.AbstractLoader.SPRITESHEET},
      {id: 'activityBackground', src: 'src/media/images/activity-background.jpg'},
      {id: 'activitySpriteSheet', src: 'src/media/images/activity-spritesheet.json', type: createjs.AbstractLoader.SPRITESHEET},
      //Sounds
      {id: 'playButtonSound', src: 'src/media/audio/sfx/ui/play-button.ogg'},
      {id: 'activityButtonSound', src: 'src/media/audio/sfx/ui/activity-button.ogg'},
      {id: 'activityButtonSound2', src: 'src/media/audio/sfx/ui/activity-button-2.ogg'},
      {id: 'acoustic-guitar', src: 'src/media/audio/sfx/instruments/acoustic-guitar.ogg'},
      {id: 'doorbell1', src: 'src/media/audio/sfx/instruments/doorbell1.ogg'},
      {id: 'doorbell2', src: 'src/media/audio/sfx/instruments/doorbell2.ogg'},
      {id: 'doorbell3', src: 'src/media/audio/sfx/instruments/doorbell3.ogg'},
      {id: 'doorbell4', src: 'src/media/audio/sfx/instruments/doorbell4.ogg'},
      {id: 'bongos', src: 'src/media/audio/sfx/instruments/bongos.ogg'},
      {id: 'bugle', src: 'src/media/audio/sfx/instruments/bugle.ogg'},
      {id: 'cash-register', src: 'src/media/audio/sfx/instruments/cash-register.ogg'},
      {id: 'guitar', src: 'src/media/audio/sfx/instruments/guitar.ogg'},
      {id: 'mandolin', src: 'src/media/audio/sfx/instruments/mandolin.ogg'},
      {id: 'maracas', src: 'src/media/audio/sfx/instruments/maracas.ogg'},
      {id: 'piano1', src: 'src/media/audio/sfx/instruments/piano1.ogg'},
      {id: 'piano2', src: 'src/media/audio/sfx/instruments/piano2.ogg'},
      {id: 'piano3', src: 'src/media/audio/sfx/instruments/piano3.ogg'},
      {id: 'purple-horn', src: 'src/media/audio/sfx/instruments/purple-horn.ogg'},
      {id: 'sax', src: 'src/media/audio/sfx/instruments/sax.ogg'},
      {id: 'snare', src: 'src/media/audio/sfx/instruments/snare.ogg'},
      {id: 'speaker1', src: 'src/media/audio/sfx/instruments/speaker1.ogg'},
      {id: 'speaker2', src: 'src/media/audio/sfx/instruments/speaker2.ogg'},
      {id: 'speaker3', src: 'src/media/audio/sfx/instruments/speaker3.ogg'},
      {id: 'tambourine', src: 'src/media/audio/sfx/instruments/tambourine.ogg'},
      {id: 'triangle', src: 'src/media/audio/sfx/instruments/triangle.ogg'},
      {id: 'trombone', src: 'src/media/audio/sfx/instruments/trombone.ogg'},
      {id: 'trumpet', src: 'src/media/audio/sfx/instruments/trumpet.ogg'},
      {id: 'violin', src: 'src/media/audio/sfx/instruments/violin.ogg'},
      {id: 'xylophone', src: 'src/media/audio/sfx/instruments/xylophone.ogg'},
      {id: 'xylophone1', src: 'src/media/audio/sfx/instruments/xylophone1.ogg'},
      {id: 'xylophone2', src: 'src/media/audio/sfx/instruments/xylophone2.ogg'},
      {id: 'xylophone3', src: 'src/media/audio/sfx/instruments/xylophone3.ogg'},
      {id: 'xylophone4', src: 'src/media/audio/sfx/instruments/xylophone4.ogg'},
      {id: 'xylophone5', src: 'src/media/audio/sfx/instruments/xylophone5.ogg'},
      {id: 'xylophone6', src: 'src/media/audio/sfx/instruments/xylophone6.ogg'},
      {id: 'drum-right-cymbol', src: 'src/media/audio/sfx/instruments/drum-right-cymbol.ogg'},
      {id: 'drum-left-cymbol', src: 'src/media/audio/sfx/instruments/drum-left-cymbol.ogg'},
      {id: 'drum-kick', src: 'src/media/audio/sfx/instruments/drum-kick.ogg'},
      {id: 'drum-snare', src: 'src/media/audio/sfx/instruments/drum-snare.ogg'},
      {id: 'drum-tom', src: 'src/media/audio/sfx/instruments/drum-tom.ogg'},
      {id: 'guitar1', src: 'src/media/audio/sfx/instruments/guitar1.ogg'},
      {id: 'guitar2', src: 'src/media/audio/sfx/instruments/guitar2.ogg'},
      {id: 'guitar3', src: 'src/media/audio/sfx/instruments/guitar3.ogg'},
      {id: 'guitar4', src: 'src/media/audio/sfx/instruments/guitar4.ogg'},
      {id: 'mobileSound', src: 'src/media/audio/sfx/instruments/mobile.ogg'},
      {id: 'clockSound', src: 'src/media/audio/sfx/instruments/clock.ogg'}
    ]
  };

  cm.game = new CuriousJS.Game(gameConfig);
  if(cm.game.finishedInit) {
    load = new CuriousJS.LoadScene({name: 'load'});
    cm.game.addScene(load);
    cm.game.loadScene('load');
  } else {
    cm.game.on('finishedInit', function() {
      load = new CuriousJS.LoadScene({name: 'load'});
      cm.game.addScene(load);
      cm.game.loadScene('load');
    });
  }
}());