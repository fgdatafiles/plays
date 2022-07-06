
(function()
{
    'use strict';
    var t;
    var timer;
    var bag;
    var sweets,logo_game1;
    var animGirl1,animValentino,animVictor,animBabcia,animKid,animGirl2;
    var dataGirl2={
        "framerate":24,
        "images":["img/girl2.png"],
        "frames":[
            [681, 0, 85, 155, 0, -20, -24],
            [341, 0, 85, 156, 0, -20, -24],
            [258, 0, 83, 156, 0, -21, -24],
            [766, 0, 83, 155, 0, -20, -25],
            [849, 0, 82, 155, 0, -20, -25],
            [1340, 0, 82, 154, 0, -19, -26],
            [1094, 0, 81, 154, 0, -19, -26],
            [1175, 0, 81, 154, 0, -18, -26],
            [1823, 0, 81, 153, 0, -18, -27],
            [1503, 0, 80, 153, 0, -18, -27],
            [1422, 0, 81, 153, 0, -18, -27],
            [1743, 0, 80, 153, 0, -19, -27],
            [1904, 0, 79, 153, 0, -21, -27],
            [1583, 0, 80, 153, 0, -22, -27],
            [1663, 0, 80, 153, 0, -22, -27],
            [1013, 0, 81, 154, 0, -23, -26],
            [931, 0, 82, 154, 0, -23, -26],
            [1256, 0, 84, 154, 0, -22, -26],
            [426, 0, 85, 155, 0, -22, -25],
            [511, 0, 85, 155, 0, -22, -25],
            [596, 0, 85, 155, 0, -22, -25],
            [172, 0, 86, 156, 0, -22, -24],
            [86, 0, 86, 156, 0, -21, -24],
            [0, 0, 86, 156, 0, -20, -24]
        ],
        "animations":{}
    };
    var dataKid={
        "framerate":24,
        "images":["img/kid.png"],
        "frames":[
            [977, 0, 67, 174, 0, -36, -24],
            [1758, 0, 67, 174, 0, -36, -24],
            [1692, 0, 66, 174, 0, -36, -24],
            [1628, 0, 64, 174, 0, -37, -24],
            [1564, 0, 64, 174, 0, -36, -24],
            [1499, 0, 65, 174, 0, -34, -24],
            [1435, 0, 64, 174, 0, -33, -24],
            [1371, 0, 64, 174, 0, -32, -24],
            [1825, 0, 64, 174, 0, -31, -24],
            [784, 0, 64, 175, 0, -29, -23],
            [848, 0, 65, 175, 0, -28, -23],
            [719, 0, 65, 175, 0, -27, -23],
            [654, 0, 65, 176, 0, -26, -22],
            [589, 0, 65, 176, 0, -26, -22],
            [328, 0, 65, 176, 0, -26, -22],
            [523, 0, 66, 176, 0, -25, -22],
            [0, 0, 66, 177, 0, -25, -21],
            [66, 0, 66, 177, 0, -25, -21],
            [263, 0, 65, 177, 0, -26, -21],
            [198, 0, 65, 177, 0, -27, -21],
            [132, 0, 66, 177, 0, -27, -21],
            [458, 0, 65, 176, 0, -29, -22],
            [393, 0, 65, 176, 0, -31, -22],
            [913, 0, 64, 175, 0, -33, -23],
            [1176, 0, 64, 174, 0, -35, -24],
            [1240, 0, 65, 174, 0, -36, -24],
            [1044, 0, 65, 174, 0, -37, -24],
            [1305, 0, 66, 174, 0, -37, -24],
            [1109, 0, 67, 174, 0, -36, -24]
        ],
        "animations":{}
    };
    var dataBabcia ={
        "framerate":24,
        "images":["img/babcia.png"],
        "frames":[
            [1279, 0, 143, 175, 0, -43, -93],
            [570, 175, 143, 175, 0, -43, -93],
            [427, 175, 143, 175, 0, -43, -93],
            [284, 175, 143, 175, 0, -43, -93],
            [142, 175, 142, 175, 0, -43, -93],
            [0, 175, 142, 175, 0, -43, -93],
            [1845, 0, 142, 175, 0, -43, -93],
            [1704, 0, 141, 175, 0, -43, -93],
            [1563, 0, 141, 175, 0, -43, -93],
            [1422, 0, 141, 175, 0, -43, -93],
            [713, 175, 141, 175, 0, -43, -93],
            [1138, 0, 141, 175, 0, -43, -93],
            [997, 0, 141, 175, 0, -43, -93],
            [856, 0, 141, 175, 0, -43, -93],
            [714, 0, 142, 175, 0, -43, -93],
            [572, 0, 142, 175, 0, -43, -93],
            [429, 0, 143, 175, 0, -43, -93],
            [286, 0, 143, 175, 0, -43, -93],
            [143, 0, 143, 175, 0, -43, -93],
            [0, 0, 143, 175, 0, -43, -93]
        ],
        "animations":{}
    };
    var dataGirl1={
        "framerate":24,
        "images":["img/piniata_girl1.png"],
        "frames":[
            [525, 210, 83, 203, 0, -18, -18],
            [1940, 2, 83, 204, 0, -18, -17],
            [1853, 2, 83, 204, 0, -18, -17],
            [263, 210, 83, 204, 0, -18, -17],
            [176, 210, 83, 204, 0, -19, -17],
            [89, 210, 83, 204, 0, -19, -17],
            [2, 210, 83, 204, 0, -20, -17],
            [1315, 2, 83, 204, 0, -20, -17],
            [350, 210, 85, 204, 0, -19, -17],
            [1764, 2, 85, 204, 0, -19, -17],
            [1673, 2, 87, 204, 0, -18, -17],
            [1583, 2, 86, 204, 0, -19, -17],
            [1493, 2, 86, 204, 0, -19, -17],
            [1402, 2, 87, 204, 0, -19, -17],
            [1225, 2, 86, 204, 0, -20, -17],
            [2, 2, 86, 204, 0, -20, -17],
            [1136, 2, 85, 204, 0, -21, -17],
            [1049, 2, 83, 204, 0, -22, -17],
            [962, 2, 83, 204, 0, -22, -17],
            [875, 2, 83, 204, 0, -21, -17],
            [788, 2, 83, 204, 0, -21, -17],
            [701, 2, 83, 204, 0, -21, -17],
            [614, 2, 83, 204, 0, -20, -17],
            [527, 2, 83, 204, 0, -20, -17],
            [440, 2, 83, 204, 0, -19, -17],
            [353, 2, 83, 204, 0, -19, -17],
            [266, 2, 83, 204, 0, -18, -17],
            [179, 2, 83, 204, 0, -18, -17],
            [92, 2, 83, 204, 0, -18, -17],
            [439, 210, 82, 203, 0, -18, -18]
        ],
        "animations":{}
    };
    var dataVictor={
        "framerate":24,
        "images":["img/piniata_victor.png"],
        "frames":[
            [1536, 0, 118, 253, 0, -84, -55],
            [843, 254, 118, 253, 0, -84, -55],
            [0, 0, 118, 254, 0, -84, -54],
            [590, 0, 118, 254, 0, -85, -54],
            [827, 0, 118, 254, 0, -85, -54],
            [945, 0, 119, 254, 0, -85, -54],
            [1064, 0, 118, 254, 0, -86, -54],
            [1182, 0, 118, 254, 0, -87, -54],
            [1300, 0, 118, 254, 0, -87, -54],
            [1895, 0, 119, 253, 0, -87, -55],
            [1775, 0, 120, 253, 0, -87, -55],
            [602, 254, 120, 253, 0, -87, -55],
            [481, 254, 121, 253, 0, -87, -55],
            [961, 254, 121, 253, 0, -87, -55],
            [722, 254, 121, 253, 0, -87, -55],
            [1654, 0, 121, 253, 0, -87, -55],
            [0, 254, 121, 253, 0, -87, -55],
            [121, 254, 121, 253, 0, -87, -55],
            [242, 254, 120, 253, 0, -87, -55],
            [708, 0, 119, 254, 0, -87, -54],
            [362, 254, 119, 253, 0, -87, -55],
            [471, 0, 119, 254, 0, -86, -54],
            [353, 0, 118, 254, 0, -86, -54],
            [235, 0, 118, 254, 0, -85, -54],
            [118, 0, 117, 254, 0, -85, -54],
            [1418, 0, 118, 253, 0, -84, -55]
        ],
        "animations":{}
    };
    var dataValentino={
        "framerate":24,
        "images":["img/piniata_valentino.png"],
        "frames":[
            [1092, 918, 220, 299, 0, -40, -41],
            [1105, 309, 220, 300, 0, -40, -40],
            [1547, 309, 220, 300, 0, -40, -40],
            [668, 614, 220, 300, 0, -40, -40],
            [222, 614, 219, 300, 0, -40, -40],
            [445, 614, 219, 300, 0, -40, -40],
            [1110, 614, 218, 300, 0, -40, -40],
            [1773, 2, 217, 301, 0, -40, -39],
            [1330, 2, 216, 301, 0, -40, -39],
            [2, 614, 216, 300, 0, -40, -40],
            [1771, 309, 215, 300, 0, -40, -40],
            [1329, 309, 214, 300, 0, -40, -40],
            [892, 614, 214, 300, 0, -40, -40],
            [226, 918, 213, 299, 0, -40, -41],
            [443, 918, 213, 299, 0, -40, -41],
            [1332, 614, 212, 299, 0, -40, -41],
            [876, 918, 212, 299, 0, -40, -41],
            [1532, 918, 212, 298, 0, -40, -42],
            [1316, 918, 212, 298, 0, -40, -42],
            [660, 918, 212, 299, 0, -40, -41],
            [1548, 614, 212, 299, 0, -40, -41],
            [1764, 614, 213, 299, 0, -40, -41],
            [663, 309, 214, 300, 0, -40, -40],
            [2, 309, 214, 301, 0, -40, -39],
            [220, 309, 215, 301, 0, -40, -39],
            [667, 2, 216, 302, 0, -40, -38],
            [887, 2, 216, 302, 0, -40, -38],
            [224, 2, 217, 303, 0, -40, -37],
            [2, 2, 218, 303, 0, -40, -37],
            [445, 2, 218, 303, 0, -40, -37],
            [1107, 2, 219, 302, 0, -40, -38],
            [1550, 2, 219, 301, 0, -40, -39],
            [439, 309, 220, 300, 0, -40, -40],
            [881, 309, 220, 300, 0, -40, -40],
            [2, 918, 220, 299, 0, -40, -41]
        ],
        "animations":{}
    };
    function Game2()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var game2 = c.extend(Game2, c.Container);

    game2.initialize=function()
    {
        t= this;
		        backBtt.visible = true;
        nActualLevel=2;
        var  bmp = new  c.Bitmap(main.loadedData.getResult('game1_bgd'));
        t.addChild(bmp);

        var intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.scaleX = intro_logo.scaleY = 0.84;
        intro_logo.x = 402;
        intro_logo.y = 11;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});
        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game3'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.52;
        logo_game1.x = 1034;
        logo_game1.y = -57;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});


        var spriteSheetGirl2 = new createjs.SpriteSheet(dataGirl2);
        animGirl2 = new c.Sprite(spriteSheetGirl2);
        animGirl2.play();
        animGirl2.x = 320;
        animGirl2.y = 150;

        t.addChild(animGirl2);

        var spriteSheetKid = new createjs.SpriteSheet(dataKid);
        animKid = new c.Sprite(spriteSheetKid);
        animKid.play();
        animKid.x = 968;
        animKid.y = 350;

        t.addChild(animKid);


        var spriteSheetBabcia = new createjs.SpriteSheet(dataBabcia);
        animBabcia = new c.Sprite(spriteSheetBabcia);
        animBabcia.play();
        animBabcia.x = 501;
        animBabcia.y = 311;

        t.addChild(animBabcia);

        var spriteSheetGirl = new createjs.SpriteSheet(dataGirl1);
        animGirl1 = new c.Sprite(spriteSheetGirl);
        animGirl1.play();
        animGirl1.x = 1086;
        animGirl1.y = 353;
        //  anim.x =-43;
        // anim.y= -49;
        t.addChild(animGirl1);

        var spriteSheetVictor = new createjs.SpriteSheet(dataVictor);
        animVictor = new c.Sprite(spriteSheetVictor);
        animVictor.play();
        animVictor.x = 1190;
        animVictor.y = 353;

        t.addChild(animVictor);


        var spriteSheetValentino = new createjs.SpriteSheet(dataValentino);
        animValentino = new c.Sprite(spriteSheetValentino);
        animValentino.play();
        animValentino.x = 325;
        animValentino.y = 318;

        t.addChild(animValentino);

        t.addChild(animValentino);
        timer = new Timer2();
        timer.x = 614;
        timer.y = 15;


        t.addChild(timer);

        timer.addEventListener('game_over',sciemnij);
        bag = new Bag();
        sweets = new Sweets();
        this.addChild(sweets);
        this.addChild(bag);
	//	stage.cursor='none';
        t.addEventListener('tick', sweets.update2);
        odliczanie();




	turner_metadata.trackAction.push({
       "type": "game", 
        "data": {
            "pageName": params.pageName,
            "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
            "interaction": "game milestone",
            "minigamestart": "1",
            "gamemilestones": "1",
            "minigametitle":'smash the pinata',
            "gametitle": "victor and valentino",
            "englishname": "victor and valentino",
            "gamecategory": "arcade",
            "brand": 'cartoon network',
            "gamelevel": 'nvs',
            "gamemilestonename": 'smash the pinata',
            "gamemap": 'nvs',
            "gamecharacter": 'nvs',
            "gameitem": 'nvs'
        }
        });

		 turner_metadata.trackAction.push({
            "type": "game", 
             "data": {
                 "pageName": params.pageName,
                 "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                 "interaction": "game level",
                 "gamelevelstart": "1",
                 "minigametitle":'smash the pinata',
                 "gametitle": "victor and valentino",
                 "englishname": "victor and valentino",
                 "gamecategory": "arcade",
                 "brand": 'cartoon network',
                 "gamelevel": '2',
                 "gamemilestonename": 'nvs',
                 "gamemap": 'nvs',
                 "gamecharacter": 'nvs',
                 "gameitem": 'nvs'
             }
        });

    };
    function odliczanie(){
        var trzy = new createjs.Bitmap(main.loadedData.getResult('3'));
        t.addChild(trzy);
        trzy.regX = trzy.image.width/2;
        trzy.regY = trzy.image.height/2;
        trzy.x = main.nWidth/2;
        trzy.y = main.nHeight/2;

        var dwa = new createjs.Bitmap(main.loadedData.getResult('2'));
        t.addChild(dwa);
        dwa.regX = dwa.image.width/2;
        dwa.regY = dwa.image.height/2;
        dwa.x = main.nWidth/2;
        dwa.y = main.nHeight/2;

        var jeden = new createjs.Bitmap(main.loadedData.getResult('1'));
        t.addChild(jeden);
        jeden.regX = jeden.image.width/2;
        jeden.regY = jeden.image.height/2;
        jeden.x = main.nWidth/2;
        jeden.y = main.nHeight/2;

        TweenLite.from(trzy,0.5,{scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(dwa,0.5,{delay:1,scaleX:0,scaleY:0,overwrite:true});
        TweenLite.from(jeden,0.5,{delay:2,scaleX:0,scaleY:0,overwrite:true});

        setTimeout(function(){TweenLite.to(trzy,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},500);
        setTimeout(function(){TweenLite.to(dwa,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},1500);
        setTimeout(function(){TweenLite.to(jeden,1,{ scaleX:2,scaleY:2,alpha:0,overwrite:true});},2500);
        setTimeout(startGame,3500);

    }
    function startGame(){
        backBtt.visible= false;
        timer.start();
        t.removeEventListener('tick', sweets.update2);
        t.addEventListener('tick', t.update);
    }
    game2.update = function(e){
        
        bag.update();

        sweets.update();

        sweets.toCheck.forEach(function(entry) {
            if(ndgmr.checkRectCollision(bag.img,entry)){
                bag.addPoint();
                entry.parent.reset();
            }
        });

    };

    game2.destroyAndReset = function(s){

        if(!s){
            actualClassLevel = Game2;
        }else{
            actualClassLevel = s;
        }

        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };
    game2.pauseGame = function(){
        timer.pause();
        t.removeEventListener('tick', t.update);
    };
    game2.unpauseGame = function(){
        timer.unpause();
        t.addEventListener('tick', t.update);
    };



    function sciemnij(){
        level2Points = bag.counter*100;
        bag.gameOver();
        var sh = new createjs.Shape();
        sh.graphics.beginFill('#000000').drawRect(0, 0, 1640, 680);
        sh.alpha = 0;
        t.addChild(sh);
        t.removeEventListener('tick', t.update);
        TweenLite.to(sh,1,{alpha:0.5,onComplete:onGameOver});
    }
    function onGameOver(e) {
        stage.cursor='pointer';
        t.dispatchEvent({param: GameOver, type: 'changePage', bubbles: true, cancelable: true});
    }
    window.Game2 = c.promote(Game2, "Container");

}());
