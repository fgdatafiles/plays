
(function()
{
    'use strict';
    var t,arrows,icon,closeBtt,helpBtt,helpAppla,bgd
    function TalismansCompleteAppla(n)
    {
        this.Container_constructor();
        t = this;
        this.initialize(n);
    };
    var tali_appla = c.extend(TalismansCompleteAppla, c.Container);


    tali_appla.initialize=function(n) {

        console.log('talizma numer: '+n);
        this.Container_initialize();
        playSounds('level_complete');
        bgd =  new c.Bitmap(main.loadedData.getResult('congratulation_appla'));
        t.addChild(bgd);

        closeBtt = new  FrameBtt(main.loadedData.getResult('close_talisman_big_btt_off'),main.loadedData.getResult('close_talisman_big_btt_on'));
        closeBtt.x = 333;
        this.addChild(closeBtt);
        closeBtt.addEventListener('click',onCloseAppla);

       var txt = new c.Text(strings.pages.global.congratulations.text, strings.pages.global.congratulations.font, '#fff');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width+strings.pages.global.talisman_founded.x;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =126+strings.pages.global.congratulations.y;

         txt = new c.Text(strings.pages.global.congratulations_description.text, strings.pages.global.congratulations_description.font, '#080929');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width+strings.pages.global.congratulations_description.x;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =260+strings.pages.global.congratulations_description.y;
        this.scaleX = this.scaleY = 0;
        TweenLite.to(this,1,{scale:1});


        var downloadBtt =  new  FrameBtt(main.loadedData.getResult('button_download_off'),main.loadedData.getResult('button_download_on'),'#ff2b46',strings.pages.global.download_reward_button);
        downloadBtt.y = 333;
        downloadBtt.x = 104;
        t.addChild(downloadBtt);
        downloadBtt.addEventListener('click',downloadReward)
    };

    function downloadReward(){


        turner_metadata.trackAction.push({
            "type": "game",
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gif download",
                "downloads": "1",
                "imagename": "reward.gif",
                "gametitle": "victor and valentino",
                "minigametitle":'victor and valentino',
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',
                "gamelevel": 'nvs',
                "gamemilestonename": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
        });
        window.open('reward.gif', '_blank');
    }
    function onCloseAppla(){

        t.dispatchEvent('close_appla');
    }

    window.TalismansCompleteAppla = c.promote(TalismansCompleteAppla, "Container");


}());
