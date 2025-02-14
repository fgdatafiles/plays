
(function()
{
    'use strict';
    var t,arrows,hellpBtt,closeBtt,helpBtt,helpAppla,bgd,downloadBtt;
    function Talismans(z)
    {
        this.Container_constructor();
        t = this;
        this.initialize(z);
    };
    var talismans = c.extend(Talismans, c.Container);
    talismans.state = 'opened';

    talismans.initialize=function(z) {
        this.Container_initialize();

        bgd =  new c.Bitmap(main.loadedData.getResult('talismans_bgd'));
        t.addChild(bgd);
        bgd.addEventListener('click',onOpenClose);
        bgd.cursor='pointer';
        helpAppla =  new c.Container();
        helpAppla.mouseEnabled = false;
        helpAppla.mouseChildren = false;

        bgd=new c.Bitmap(main.loadedData.getResult('talisman_help_appla'));
        helpAppla.x = 2;
        helpAppla.y = 24;
        var txt = new c.Text(strings.pages.global.talisman_help.text, strings.pages.global.talisman_help.font, '#4a2a1f');

        txt.lineWidth = bgd.image.width;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2+strings.pages.global.talisman_help.x;
        txt.y =15+strings.pages.global.talisman_help.y;
        txt.mouseEnabled = false;
        helpAppla.addChild(bgd);
        helpAppla.addChild(txt);






        txt = new c.Text(strings.pages.global.talisman_title.text, strings.pages.global.talisman_title.font, '#fdeb5e');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =7;

       arrows =  new c.Bitmap(main.loadedData.getResult('talisman_arrows'));
        t.addChild(arrows);
        arrows.regY = arrows.image.height/2;
        arrows.regX = arrows.image.width/2;
        arrows.x = 124+arrows.image.width/2;
        arrows.y = 10+arrows.image.height/2;




        if(checkT() ==10){
            downloadBtt = new  FrameBtt(main.loadedData.getResult('help_talisman_download_btt_off'),main.loadedData.getResult('help_talisman_download_btt_on'));
            t.addChild(downloadBtt);
            downloadBtt.addEventListener('click',onDownload);
            downloadBtt.x = 484;
            downloadBtt.y = 36;
        }else{


        closeBtt = new  FrameBtt(main.loadedData.getResult('close_talisman_btt_off'),main.loadedData.getResult('close_talisman_btt_on'));
        helpBtt = new  FrameBtt(main.loadedData.getResult('help_talisman_btt_off'),main.loadedData.getResult('help_talisman_btt_on'));
        t.addChild(helpBtt);
        helpBtt.addEventListener('click',onHelp);
        closeBtt.addEventListener('click',onClose);
        helpBtt.x = closeBtt.x = 484;
        helpBtt.y = closeBtt.y = 36;

        }
        var tali_item;
        for(var i=0;i<10;i++){
            tali_item = new c.Bitmap(main.loadedData.getResult('talisman'+i));
            tali_item.scaleX = 0.26;
            tali_item.scaleY = 0.26;
            tali_item.x = (i*46)+16;
            tali_item.y = 35;
            tali_item.name = 't'+i;
            t.addChild(tali_item);
            if(aTalismans[i]==0)tali_item.alpha = 0.3

        }




    };


    function checkT(){
        var nTalismans=0;
        for(var i=0;i<10;i++){
            nTalismans +=parseInt(aTalismans[i]);
        }
        return nTalismans;
    }
    talismans.changeButton = function(){
        helpBtt.removeEventListener('click',onHelp);
        closeBtt.removeEventListener('click',onClose);
        this.removeChild(helpBtt);
        this.removeChild(closeBtt);



        downloadBtt = new  FrameBtt(main.loadedData.getResult('help_talisman_download_btt_off'),main.loadedData.getResult('help_talisman_download_btt_on'));
        t.addChild(downloadBtt);
        downloadBtt.addEventListener('click',onDownload);
        downloadBtt.x = 484;
        downloadBtt.y = 36;
    }

    function onDownload(){

        turner_metadata.trackAction.push({
            "type": "game",
            "data": {
                "pageName": params.pageName,
                "cid": params.cid,
                "gamersid" : "turnerintgamevictorvalentino",
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
    talismans.zapal = function(n){

        var tali = this.getChildByName('t'+n)
        TweenLite.to(tali,1,{alpha:1});
    }
    function onOpenClose(){

        if(talismans.state=='opened'){
            arrows.rotation=180;
            talismans.state='closed';
            TweenLite.to(t,.5,{y:611});
        }else{
            arrows.rotation=0;
            talismans.state='opened';
            TweenLite.to(t,.5,{y:551});
        }

    }
    function onClose(){
        t.removeChild(closeBtt);
        t.addChild(helpBtt);
        t.removeChild(helpAppla);
    }

    function onHelp(){
        t.removeChild(helpBtt);
        t.addChild(closeBtt);
        t.addChild(helpAppla);

    }
    window.Talismans = c.promote(Talismans, "Container");


}());
