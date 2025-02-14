
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,btt1,arrow;
    function Selection()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = createjs.extend(Selection, createjs.Container);
    p.initialize=function() {

        bmp = new  c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        playSounds('selection');
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;


        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});


        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 432+btt1.regY;
        btt1.alpha=0.5;
        btt1.mouseEnabled=false;
        btt1.addEventListener('click',onDispatch);

        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});

        arrow=new c.Bitmap(main.loadedData.getResult('arrow'));
        arrow.x = 778;
        arrow.y = 242;
        t.addChild(arrow);


        bmp = new  c.Bitmap(main.loadedData.getResult('select_title_bgd'));
        t.addChild(bmp);
        bmp.x = 387;
        bmp.y = 106;
        var t1 =   new c.Text(strings.pages.select_level.title.text, strings.pages.select_level.title.font, '#EC1F27');
        t1.textAlign = 'center';
        t1.x = 1640/2;
        t1.lineWidth=1640;
        t1.y = 144;

        t.addChild(t1);

        t.addChild(intro_logo);


        p1 = new FrameBtt(main.loadedData.getResult('victor_select1'),main.loadedData.getResult('victor_select2'));
        t.addChild(p1);
        p1.x = 484;
        p1.y = 309;

        p2 = new FrameBtt(main.loadedData.getResult('valentino_select1'),main.loadedData.getResult('valentino_select2'));
        t.addChild(p2);
        p2.x = 939;
        p2.y = 287;
    p1.stateClicked = p2.stateClicked = true;

        p1.addEventListener('mouseover',onP1);
        p1.addEventListener('click',onSelectP1);
        p2.addEventListener('click',onSelectP2);
        p1.addEventListener('mouseout',onOutP1);
        p2.addEventListener('mouseover',onP2);
        p2.addEventListener('mouseout',onOutP2);


        TweenLite.from(p1,2,{y:800,ease:Bounce.easeOut,delay:.5});
        TweenLite.from(p2,2,{y:800,ease:Bounce.easeOut,delay:.6});

        t.addChild(btt1);
    };



    function onSelectP1(){
        p2.resetClick();
        p1.removeEventListener('mouseout',onOutP1);
        btt1.alpha=1;
        btt1.mouseEnabled = true;
        postac = 1;
        playSounds('victor_yeah');
        TweenLite.to(arrow,1,{x:535,ease:Power4.easeOut});
		
		
		
		  turner_metadata.trackAction.push({
             "type": "game", 
              "data": {
                  "pageName": params.pageName,
                  "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                  "interaction": "character selection",
                  "gamecharacterselected": "1",
                  "minigametitle":'escape the underworld',
                  "gametitle": "victor and valentino",
                  "englishname": "victor and valentino",
                  "gamecategory": "arcade",
                  "brand": 'cartoon network',
                  "gamelevel": 'nvs',
                  "gamemilestonename": 'nvs',
                  "gamemap": 'underworld',
                  "gamecharacter": 'victor',
                  "gameitem": 'nvs'
              }
        });
	
    }

    function onSelectP2(){
        postac = 2;
        playSounds('valentino_haha');
        p1.resetClick();
        p2.removeEventListener('mouseout',onOutP2);
        btt1.mouseEnabled = true;
        btt1.alpha=1;
        TweenLite.to(arrow,1,{x:1085,ease:Power4.easeOut});
		
		
				  turner_metadata.trackAction.push({
                     "type": "game", 
                      "data": {
                          "pageName": params.pageName,
                          "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                          "interaction": "character selection",
                          "gamecharacterselected": "1",
                          "minigametitle":'escape the underworld',
                          "gametitle": "victor and valentino",
                          "englishname": "victor and valentino",
                          "gamecategory": "arcade",
                          "brand": 'cartoon network',
                          "gamelevel": 'nvs',
                          "gamemilestonename": 'nvs',
                          "gamemap": 'underworld',
                          "gamecharacter": 'valentino',
                          "gameitem": 'nvs'
                      }
        });
    }
    function onP1(){
        TweenLite.to(arrow,1,{x:535,ease:Power4.easeOut});
    }
    function onP2(){
        TweenLite.to(arrow,1,{x:1085,ease:Power4.easeOut});
    }

    function onOutP1(){
        TweenLite.to(arrow,1,{x:778,ease:Power4.easeOut});
    }
    function onOutP2(){
        TweenLite.to(arrow,1,{x:778,ease:Power4.easeOut});
    }
    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }



    function onDispatch(){
        t.mouseEnabled = false;
        t.dispatchEvent({param: Level1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Selection = createjs.promote(Selection, "Container");



}());
