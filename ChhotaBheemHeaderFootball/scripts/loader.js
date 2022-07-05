(function (exports){
    var imgPath = 'Assets/Images/';
    exports.imageList = [
        'bits.png',
        'buttons.png',
        'flags.png',
		'help.jpg',
        'game_background.png',
        'lineFill.png',
        'title.png',
        'story.jpg',
		'main_screen.jpg',
        'player_argentina.png',
		'leaderbord.png',
        'player_brazil.png',
        'player_denmark.png',
        'player_england.png',
        'player_france.png',
        'player_germany.png',
        'player_greece.png',
        'player_ireland.png',
        'player_italy.png',
        'player_netherlands.png',
        'player_portugal.png',
        'player_russia.png',
        'player_spain.png',
        'player_sweden.png',
        'player_uruguay.png',
        'player_usa.png',
        'line.png',
		'rotation_logo_portrait.png',
        'translation_screen.png'
    ];
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    var imagesLoaded = 0;
    var bgLoaded = false;
    var loader;
    var loaderBg;
    var updateLoad = function (){
        imagesLoaded++;
        if(exports.screen === ''){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if(bgLoaded === true){
            //ctx.drawImage(exports.resources['loading_screen.png'], 0, 0);
        }
		 if('main_screen.jpg' in exports.resources)
        {
            ctx.drawImage(exports.resources['main_screen.jpg'],0, 0);
        }
        if(loaderBg)
        {
            ctx.drawImage(loaderBg, (canvas.width - loaderBg.width) / 2, 402);
        }
        else if('line.png' in exports.resources)
        {
            loaderBg = exports.resources['line.png'];
        }
        if(loader){
            ctx.drawImage(loader, (canvas.width - loader.width) / 2, 405, imagesLoaded / exports.imageList.length * loader.width, loader.height);
        }
        else if('lineFill.png' in exports.resources)
        {
            loader = exports.resources['lineFill.png'];
			 
        }
       

        if(imagesLoaded === exports.imageList.length)
        {
            exports.addButton('Start', 'center', 500,
                function ()
                {
                    return exports.screen === 'translation';
                },
                function ()
                {
                    startGame();
                },
                true
            );
            exports.drawButtons();
        }
    };

    function startGame(e)
    {
        exports.logic();
        exports.loaded = true;
        if(exports.screen === 'translation')
        {
            exports.screen = 'splash';
            exports.addAllButtons();
            //exports.addAllSignals();
            exports.draw();
        }
    }

    exports.resources = {};
    exports.initPreloader = function ()
    {
        exports.imageList.forEach(function (imgName){
            var img = new Image();
            img.src = imgPath + imgName;
            exports.resources[imgName] = img;
            
			
            if(imgName === 'loading_bg.png'){
                img.addEventListener('load', function (){
                    bgLoaded = true;
                    exports.drawImage(imgName, 0, 0);
                }, false);
          }
           else if(imgName === 'translation_screen.png')
            {
                img.addEventListener('load', function ()
                {
                    exports.screen = 'translation';
                }, false);
            }
            
            img.addEventListener('load', updateLoad, false);
        });
    };
})(window.head);