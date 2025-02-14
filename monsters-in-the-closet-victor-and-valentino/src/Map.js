
(function() {
    'use strict';
    var t;
    var worldsName=['','monte macabre','underworld'];
    var talismansName = ['shield','blue skull','gold coin','thumbs up','monster','cauldron','bird','green power','purple skull','bronze coin'];
    var introAnim=['',[{x:336,y:440,src:'monte_intro_1'},{x:1103,y:419,src:'monte_intro_2'},{x:405,y:456,src:'monte_intro_3'},{x:927,y:449,src:'monte_intro_4'}],
        [{x:320,y:437,src:'under_intro_1'},{x:1149,y:381,src:'under_intro_2'},{x:405,y:456,src:'under_intro_3'},{x:927,y:449,src:'under_intro_4'}]];
    var monte_bgd,under_bgd, talismanAppla, quizAppla,talismans,  black, overlay, switchBtt,skip_btt,intro_container,intro_p1,intro_p2
    var map_logo;
    var quiz_points_container;
    var foot_prints_container;
    var games_points_container;
    var skipTimeout;

    var talismansPositions=[
        {x:367,y:254},{x:488,y:566},{x:490,y:361},{x:541,y:166},{x:548,y:0},{x:588,y:243},{x:699,y:339},{x:815,y:471},
    {x:829,y:238},{x:853,y:335},{x:941,y:313},{x:961,y:471},{x:1048,y:174},{x:1117,y:549},{x:1141,y:336},
        {x:1201,y:120},{x:1215,y:187},{x:1216,y:599},{x:1220,y:503},{x:1248,y:236}];
    var game_positions=[{x:657,y:388},{x:428,y:186},{x:722,y:225},{x:1107,y:279},{x:844,y:122}];
    var fp_positions=[{x:330,y:255},{x:511,y:184},{x:794,y:279},{x:806,y:145}];
    var quiz_positions= [{x:482,y:500},{x:671,y:197},{x:1025,y:379},{x:1294,y:322},{x:1066,y:203}];
    function Map() {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Map, c.Container);
    p.initialize = function () {
        
        createCookie('skip_intro',1,255);
        readCookie('victor_and_valentino_skip_intro');
        shuffle(talismansPositions);
        monte_bgd = new c.Bitmap(main.loadedData.getResult('map_monte'));
        t.addChildAt(monte_bgd,0);
        under_bgd = new c.Bitmap(main.loadedData.getResult('map_underworld'));
        t.addChildAt(under_bgd,0);
        overlay = new c.Container();
        if(actual_world==2){
            showUnder();
        }else{
            showMonte();

        }

        addLogo();
        addTalismans();
        addIntro();
        t.addChild(overlay);
            console.log(skip_map_intro+'skip map intro');
        if(skip_map_intro==1){
            onSkipIntro();
        }
    };


    function addIntro() {

        skip_btt = new  FrameBtt(main.loadedData.getResult('skip_intro_btt_off'),main.loadedData.getResult('skip_intro_btt_on'),'#ff2b46', strings.pages.global.skip_button);
        overlay.addChild(skip_btt);
        skip_btt.x = 750;
        skip_btt.y = 516;
        skip_btt.addEventListener('click',onSkipIntro);
        showIntro();
    }
    
    function onSkipIntro() {
        if(skipTimeout)skipTimeout.clear()
        skip_map_intro =1;
        createCookie('skip_map_intro',skip_map_intro,255);
        overlay.removeChild(skip_btt);
        overlay.removeChild(black);
        overlay.removeChild(intro_container);



        addSwitchButton();
        showFP();
        showGames();
        showQuizes();

    }


    function showGames(){
        games_points_container = new c.Container();
        t.addChild(games_points_container);

        if(game_active==1){
            addStartHereButton();
        }
        var gi;
        for(var i=0;i<5;i++){
            var zz = i;
            var img;
            if(game_active<=zz){
                img = 'game_off';
                gi = new c.Bitmap(main.loadedData.getResult(img));
                gi.mouseEnabled=false;
            }else{
                img =  'game_active';
                gi = new c.Bitmap(main.loadedData.getResult(img+parseInt(i+1)));
                gi.addEventListener('mouseover',onGamePointOver);
                gi.addEventListener('mouseout',onGamePointOut);
                gi.addEventListener('click',onShowGame);
            }
            gi.regX = gi.image.width/2;
            gi.regY = gi.image.height/2;
            gi.x = game_positions[i].x+gi.image.width/2;
            gi.y = game_positions[i].y+gi.image.height/2;
            games_points_container.addChild(gi);
            gi.scaleX = gi.scaleY =1;
            gi.name = 'g'+i;
            gi.cursor='pointer';

        }

    }


    function addStartHereButton(){
       var startHereButton =  new  FrameBtt(main.loadedData.getResult('start_here_button'),main.loadedData.getResult('start_here_button_on'),'#ff2b46',strings.pages.global.start_button);
        startHereButton.y = 500;
        startHereButton.x = 659;
        t.addChild(startHereButton);
        startHereButton.addEventListener('click',startGame1)
    }

    function startGame1(){
        game_active = 2;
        createCookie('game_active',2,255);
        window.location.href='game1/index.html?pageName='+pageName+'&cid='+cid;
    }
    function showFP(){

        foot_prints_container = new c.Container();
        t.addChild(foot_prints_container);

        var fp;
        for(var i=0;i<4;i++){

            fp = new c.Bitmap(main.loadedData.getResult('foot_prints'+i));
            fp.x = fp_positions[i].x;
            fp.y = fp_positions[i].y;
            foot_prints_container.addChild(fp);
            fp.name = 'fp'+i;

            fp.alpha = 0;
            var opacity;
            var zz = i+1;
            if(game_active<=zz){

                opacity=.1;
            }else{
                opacity =1;

            }

            TweenLite.to(fp,1,{alpha:opacity})
        }
    }
    function showQuizes(){

        quiz_points_container = new c.Container();
        t.addChild(quiz_points_container);
        var qp;
        for(var i=0;i<5;i++){

            var zz = i+1;

            qp = new c.Bitmap(main.loadedData.getResult('quiz_point'));
            qp.x = quiz_positions[i].x;
            qp.y = quiz_positions[i].y;
            qp.regX = qp.regY = qp.image.width/2;
            qp.scaleX = qp.scaleY=0.8;
            quiz_points_container.addChild(qp);
            qp.name = 'qp'+i;
            qp.cursor='pointer';
            qp.addEventListener('mouseover',onQuizPointOver);
            qp.addEventListener('mouseout',onQuizPointOut);
            qp.addEventListener('click',onShowQuiz);
            qp.visible = false;
        }

        updateQuizStates();

    }

    function updateQuizStates(){


        switch (game_active)
        {
            case "2":
                quiz_points_container.getChildByName('qp'+0).visible = true;
                break;
            case "3":
                quiz_points_container.getChildByName('qp'+0).visible = true;
                quiz_points_container.getChildByName('qp'+1).visible = true;
                break;

            case "4":
                quiz_points_container.getChildByName('qp'+0).visible = true;
                quiz_points_container.getChildByName('qp'+1).visible = true;
                quiz_points_container.getChildByName('qp'+2).visible = true;

                break;

            case "5":
                quiz_points_container.getChildByName('qp'+0).visible = true;
                quiz_points_container.getChildByName('qp'+1).visible = true;
                quiz_points_container.getChildByName('qp'+2).visible = true;
                quiz_points_container.getChildByName('qp'+3).visible = true;
                quiz_points_container.getChildByName('qp'+4).visible = true;
                break;

        }
    }
    function showMonte(){
        playSounds('monte'+Math.ceil(Math.random()*7))

        TweenLite.to(monte_bgd,3,{alpha:1});
        TweenLite.to(under_bgd,3,{alpha:0});
        map_logo = new c.Bitmap(main.loadedData.getResult('map_logo_monte'));
        overlay.addChild(map_logo);
        map_logo.x = 556;
        map_logo.y = -300;
        TweenLite.to(map_logo,1,{delay:.5,y:0});
        actual_world=1;
        createCookie('actual_world',actual_world,255);
		

        turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game map",
                "gamemapselected": "1",
                "minigametitle":'victor and valentino',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestones": 'nvs',
                "gamemap": 'monte macabre',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });
    }

    function showUnder(){
        playSounds('monster'+Math.ceil(Math.random()*9))

        TweenLite.to(monte_bgd,3,{alpha:0});
        TweenLite.to(under_bgd,3,{alpha:1});
        map_logo = new c.Bitmap(main.loadedData.getResult('map_logo_under'));
        overlay.addChild(map_logo);
        map_logo.x = 556;
        map_logo.y = -300;
        TweenLite.to(map_logo,1,{delay:.5,y:0});
        actual_world=2;
        createCookie('actual_world',actual_world,255);
		
		 turner_metadata.trackAction.push({
            "type": "game", 
             "data": {
                 "pageName": params.pageName,
                 "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                 "interaction": "game map",
                 "gamemapselected": "1",
                 "minigametitle":'victor and valentino',
                 "gametitle": "victor and valentino",
                 "englishname": "victor and valentino",
                 "gamecategory": "arcade",
                 "brand": 'cartoon network',
                 "gamelevel": 'nvs',
                 "gamemilestones": 'nvs',
                 "gamemap": 'underworld',
                 "gamecharacter": 'nvs',
                 "gameitem": 'nvs'
             }
        });
    }


    function showIntro(){
        addBlack();
        var color= '#fff';
        if (actual_world==1)color = '#4a2a1f';
        if(intro_container){intro_container.removeAllChildren();}
            intro_container = new c.Container();
            var intro_item;

        intro_p1 = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][0].src));
        intro_p1.x = introAnim[actual_world][0].x;
        intro_p1.y = introAnim[actual_world][0].y;

        intro_container.addChild(intro_p1);
        intro_p2 = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][1].src));
        intro_p2.x = introAnim[actual_world][1].x;
        intro_p2.y = introAnim[actual_world][1].y;
        intro_container.addChild(intro_p2);


        TweenLite.from(intro_p1,1,{alpha:0,delay:1});
        TweenLite.from(intro_p2,1,{alpha:0,delay:2});


        var dymek1 = new c.Container();
        dymek1.x= introAnim[actual_world][2].x;
        dymek1.y= introAnim[actual_world][2].y;

        var bmp = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][2].src));
        intro_container.addChild(dymek1);
        dymek1.addChild(bmp);

        var tt1 = new c.Text(strings.pages.global.intro_t1.text, strings.pages.global.intro_t1.font, color);
        tt1.lineWidth = 160;
        tt1.x  =65+160/2+strings.pages.global.intro_t1.x;
        tt1.textAlign = 'center';
        tt1.y = 119/2 - tt1.getMeasuredHeight()/2+strings.pages.global.intro_t1.y;
        dymek1.addChild(tt1);




        var dymek2 = new c.Container();
        dymek2.x= introAnim[actual_world][3].x;
        dymek2.y= introAnim[actual_world][3].y;

         bmp = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][3].src));
        intro_container.addChild(dymek2);
        dymek2.addChild(bmp);

        var tt2 = new c.Text(strings.pages.global.intro_t2.text, strings.pages.global.intro_t2.font, color);
        tt2.lineWidth = 160;
        tt2.x  =26+160/2+strings.pages.global.intro_t2.x;
        tt2.textAlign = 'center';
        tt2.y = 119/2 - tt1.getMeasuredHeight()/2+strings.pages.global.intro_t2.y;
        dymek2.addChild(tt2);




        var dymek3 = new c.Container();
        dymek3.x= introAnim[actual_world][2].x;
        dymek3.y= introAnim[actual_world][2].y;

         bmp = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][2].src));
        intro_container.addChild(dymek3);
        dymek3.addChild(bmp);

        var tt3 = new c.Text(strings.pages.global.intro_t3.text, strings.pages.global.intro_t3.font, color);
        tt3.lineWidth = 160;
        tt3.x  =65+160/2+strings.pages.global.intro_t2.x;
        tt3.textAlign = 'center';
        tt3.y = 119/2 - tt3.getMeasuredHeight()/2+strings.pages.global.intro_t3.y;
        dymek3.addChild(tt3);
        overlay.addChild(intro_container);


        var dymek4 = new c.Container();
        dymek4.x= introAnim[actual_world][3].x;
        dymek4.y= introAnim[actual_world][3].y;

        bmp = new c.Bitmap(main.loadedData.getResult(introAnim[actual_world][3].src));
        intro_container.addChild(dymek4);
        dymek4.addChild(bmp);

        var tt2 = new c.Text(strings.pages.global.intro_t4.text, strings.pages.global.intro_t4.font, color);
        tt2.lineWidth = 160;
        tt2.x  =26+160/2+strings.pages.global.intro_t4.x;
        tt2.textAlign = 'center';
        tt2.y = 119/2 - tt1.getMeasuredHeight()/2+strings.pages.global.intro_t4.y;
        dymek4.addChild(tt2);



        dymek1.alpha = dymek2.alpha = dymek3.alpha= dymek4.alpha =0;

        TweenLite.to(dymek1,1,{delay:3,alpha:1});
        TweenLite.to(dymek2,1,{delay:5,alpha:1});
        TweenLite.to(dymek1,1,{delay:9,alpha:0});
        TweenLite.to(dymek3,1,{delay:11,alpha:1});
        TweenLite.to(dymek2,1,{delay:12,alpha:0});
        TweenLite.to(dymek4,1,{delay:14,alpha:1});

        skipTimeout = new Set_Timeout(onSkipIntro,20000);

    }



    function addSwitchButton(){
        var img1;
        var img2;

        if(actual_world==1){
              img1 = 'switch_btt_monte';
        }else{
            img1 ='switch_btt_under';

        }
        if(switchBtt){
            overlay.removeChild(switchBtt);
            switchBtt=null;
        }
        switchBtt =  new  FrameBtt(main.loadedData.getResult(img1),main.loadedData.getResult(img1+'_on'));
        overlay.addChild(switchBtt);
        switchBtt.x = 1072;
        switchBtt.cursor='pointer';
        switchBtt.addEventListener('click',onSwitchWorlds);
        switchBtt.y = -300;
        TweenLite.to(switchBtt,1,{y:0});



    }


    function onSwitchWorlds(){
        if(overlay.contains(switchBtt))TweenLite.to(switchBtt,1,{y:-300,onComplete:addSwitchButton});
        if(overlay.contains(map_logo))TweenLite.to(map_logo,1,{delay:.1,y:-300});


        if(actual_world==1){
            actual_world=2;
            showUnder();
        }else{
            showMonte();
            actual_world=1;
        }
    }

    function wymienBgd(){


    }
    function addLogo(){
        var intro_logo_game=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo_game.regX = intro_logo_game.image.width/2;
        intro_logo_game.regY = intro_logo_game.image.height/2;
        intro_logo_game.x = 382+intro_logo_game.regX;
        intro_logo_game.y = 18+intro_logo_game.regY;
        intro_logo_game.mouseEnabled=false;
        overlay.addChild(intro_logo_game);
        TweenLite.from(intro_logo_game,1,{scale:0,ease:Bounce.easeOut});


    }
    function addTalismans(){


        talismans = new Talismans();
        t.addChild(talismans);
        talismans.x = 579;
        talismans.y = 551;


        for (var i=0;i<(game_active*2);i++){


            if(parseInt(aTalismans[i])==0){

                var tali_item = new c.Bitmap(main.loadedData.getResult('talisman'+i));
                tali_item.x =talismansPositions[i].x;
                tali_item.y = talismansPositions[i].y;
                if(talismansPositions[i].mask){

                    var maska = new c.Shape();
                   maska.graphics.f("#FF0000").s().p(talismansPositions[i].mask);
                    maska.setTransform(talismansPositions[i].mx,talismansPositions[i].my);
                    //maska.visible = false;
                    maska.alpha=0;
                    maska.name = 'm'+i;
                    maska.addEventListener('click',onFindTalisman);
                    t.addChild(maska);
                    tali_item.mask = maska;
                }
                t.addChild(tali_item);
                tali_item.name='t'+i;
                tali_item.scaleX = tali_item.scaleY  = 0.26;
                tali_item.addEventListener('click',onFindTalisman);

            }


        }
    }


    function onFindTalisman(e){

        var sel = parseInt(e.currentTarget.name.substr(1));

        t.removeChild(e.currentTarget);
        aTalismans[sel] = 1;
        sTalismans = aTalismans.toString();
        talismans.zapal(sel)
        createCookie('sTalismans',sTalismans,255);
        checkNumberofTalismans();




        black=new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        t.addChild(black)
        black.addEventListener('click',onA)
        TweenLite.to(black,1,{alpha:0.6});

        talismanAppla = new TalismansAppla(e.currentTarget.name.substr(1));
        t.addChild(talismanAppla);
        talismanAppla.x = 597+224;
        talismanAppla.y = 92+224;
        talismanAppla.regX = talismanAppla.regY = 224;
        talismanAppla.addEventListener('close_appla',onCloseTalismansAppla)


        console.log(talismansName[sel]+ 'WARNING TALISMAN NAME');

        turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game item",
                "gameitemunlocked": "1",
                "minigametitle":'nvs',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestones": 'nvs',
                "gamemap": worldsName[actual_world],
                "gamecharacter": 'nvs',
                "gameitems": talismansName[sel]
            }
        });


    }


    function checkNumberofTalismans(){
        nTalismans=0;
        for(var i=0;i<10;i++){
            nTalismans +=parseInt(aTalismans[i]);
        }
        return nTalismans;
    }
    function onA(){

    }

    function onCloseTalismansAppla(){

        t.removeChild(black);
        t.removeChild(talismanAppla);
        talismanAppla = null;
            //nTalismans = 10;

        if(nTalismans == 10){
            t.addChild(black);
            black.addEventListener('click',onA);
            TweenLite.to(black,1,{alpha:0.6});

            talismanAppla = new TalismansCompleteAppla();
            t.addChild(talismanAppla);
            talismanAppla.x = 597+224;
            talismanAppla.y = 92+224;
            talismanAppla.regX = talismanAppla.regY = 224;
            talismanAppla.addEventListener('close_appla',onCloseTalismansCompleteAppla)
        };

    }



    function onCloseTalismansCompleteAppla(){
        talismans.changeButton();
        t.removeChild(black);
        t.removeChild(talismanAppla);
        talismanAppla = null;
    }

    function addBlack(){
        if(overlay.contains(black)){
            overlay.removeChild(black)
        }
        black=new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        overlay.addChildAt(black,0);
        TweenLite.to(black,1,{alpha:0.6});

        black.addEventListener('click',onA)
    }

    function onGamePointOver(e){
        TweenLite.to(e.currentTarget,.5,{scale:.85,ease:Bounce.easeOut});
    }
    function onGamePointOut(e){
        TweenLite.to(e.currentTarget,.5,{scale:1,ease:Strong.easeOut});
    }

    function onQuizPointOver(e){
        TweenLite.to(e.currentTarget,.5,{scale:0.7,ease:Bounce.easeOut});
    }
    function onQuizPointOut(e){
        TweenLite.to(e.currentTarget,.5,{scale:1,ease:Strong.easeOut});
    }

    function onShowGame(e){

        var temp =parseInt(parseInt(e.currentTarget.name.substr(1))+2);

        if(game_active<temp){
            game_active = temp;
        }
        createCookie('game_active',Math.min(game_active,5),255);
        window.location.href='game'+parseInt(parseInt(e.currentTarget.name.substr(1))+1)+'/index.html?pageName='+pageName+'&cid='+cid;

    }
    function onShowQuiz(e){

        var sel = parseInt(e.currentTarget.name.substr(2));
        
        black=new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        t.addChild(black)
        black.addEventListener('click',onA)
        TweenLite.to(black,1,{alpha:0.6});

        quizAppla = new QuizAppla(sel);
        t.addChild(quizAppla);
        quizAppla.x = 412+416;
        quizAppla.y = 12+287;
        quizAppla.regX =  416;
        quizAppla.regY = 287;
        quizAppla.addEventListener('close_appla',onCloseQuizAppla)
        turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game milestone",
                "minigamestart": "1",
                "minigametitle":'victor and valentino',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestones": 'nvs',
                "gamemap": worldsName[actual_world],
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });

    }
    function onCloseQuizAppla() {

        t.removeChild(black);
        t.removeChild(quizAppla);
        quizAppla = null;
    }

    window.Map = c.promote(Map, "Container");

}());
