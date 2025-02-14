
(function()
{
    'use strict';
    var t,tl,btt1,htp,mgla,htp_appla,header,left,right,next;
    var bgd;
    var logo
    var Step1=function()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = c.extend(Step1, c.Container);
    p.initialize=function() {

        if(music)music.stop();
        pauseBtt.visible = false;
        bgd=new c.Bitmap(main.loadedData.getResult('bgd_intro'));
        t.addChild(bgd);
        mgla=new c.Bitmap(main.loadedData.getResult('mgla'));
        t.addChild(mgla);
        mgla.x = -428;
        mgla.y = 447;
        gsap.to(mgla,20,{x:0,repeat:-1,yoyo:true})



        console.log(strings.game_title);
        btt1 = new  FrameBtt(main.loadedData.getResult('startbtt'),main.loadedData.getResult('startbtt_on'),'#74489D',strings.game_title);
        btt1.x = 518;
        btt1.y = 800;

        htp = new  FrameBtt(main.loadedData.getResult('helpBtt'),main.loadedData.getResult('helpBtt_on'),'#74489D');
        htp.x = 1174;
        htp.y = 820;

        t.addChild(btt1,htp)

        logo = new c.Bitmap(main.loadedData.getResult('intro_logo'));
        t.addChild(logo);
        logo.x = 337;
        logo.y =0;
        logo.alpha=0;
        t.mouseEnabled=false;

        tl = gsap.timeline();
        tl.to(btt1,.5,{alpha:1,y:569,onComplete:wlacz,onReverseComplete:wlaczHTP});
        tl.to(htp,.7,{alpha:1,y:594},'<40%');
        tl.to(logo,3,{alpha:1,y:0},'<40%');

        btt1.addEventListener('click',onGame);
        htp.addEventListener('click',onHTP);

    };


    const onGame =()=>{
        t.mouseEnabled = false;
        wlaczGre();
        music=  c.Sound.play('music',{loop:-1});

    }

    const onHTP =()=>{
        music=  c.Sound.play('music',{loop:-1});
        t.mouseEnabled = false;
        tl.reverse();
    }
    const wlacz=()=>{
        console.log('wlaczam t');

        t.mouseEnabled = true;
    }

    function wlaczHTP(){

        gsap.globalTimeline.pause();
        gsap.globalTimeline.clear();
        gsap.globalTimeline.resume();
        t.removeChild(mgla);

        console.log('wlaczam HTP')
        bgd=new c.Bitmap(main.loadedData.getResult('bgd_game'));
        t.addChild(bgd);



        htp_appla = new c.Bitmap(main.loadedData.getResult('htp_appla'));
        t.addChild(htp_appla);
        htp_appla.x  = 485;
        htp_appla.y  =-720;
        header = new c.Container();
        header.x = 500;
        header.y = -720;
        let b =new c.Bitmap(main.loadedData.getResult('header'));
        header.addChild(b)
        t.addChild(header);

        let t1 = new c.Text(strings.htp.text, strings.htp.font, '#009CDE');
        header.addChild(t1);
        t1.y = 60+strings.htp.y;
        t1.x = 680/2+strings.htp.x;
        t1.lineWidth = 680;
        t1.textAlign='center';
        t1.textBaseline = "alphabetic";


        t.addChild(header);

        left = new c.Container();
        b =   new c.Bitmap(main.loadedData.getResult('htp1'));
        left.x = -300;
        left.y = 187;
        left.addChild(b)

         t1 = new c.Text(strings.spot.text, strings.spot.font, '#40BC7D');
        left.addChild(t1);
        t1.y = 156;
        t1.x = 337/2;
        t1.lineWidth = 337;
        t1.textAlign='center';
        t1.textBaseline = "alphabetic";
        right = new c.Container();
        b =  new c.Bitmap(main.loadedData.getResult('htp2'));
        right.x = 1680+strings.spot.x;
        right.y = 187+strings.spot.y;
        right.addChild(b);

        t1 = new c.Text(strings.avoid.text, strings.avoid.font, '#D91C5C');
        right.addChild(t1);
        t1.y = 156+strings.avoid.y;
        t1.x = 337/2+strings.avoid.x;
        t1.lineWidth = 337;
        t1.textAlign='center';
        t1.textBaseline = "alphabetic";
        t.addChild(left,right)
        t.mouseEnabled = true;


        next = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play'),'#74489D');
        next.x = 776;
        next.y = 800;
        next.addEventListener('click',wlaczGre);
        t.addChild(next)

        tl.clear();
        tl.to(htp_appla,{y:15,ease:Power1.easeOut})
        tl.to(header,{y:96,ease:Power1.easeOut},'<55%')
        tl.to(left,{x:501,ease:Power1.easeOut},'<55%')
        tl.to(right,{x:842,ease:Power1.easeOut},'<55%')
        tl.to(next,{y:577,ease:Power1.easeOut},'<55%')

        tl.play();
    }




    function wlaczGre(){
        console.log('wlaczam Gre')
        gsap.globalTimeline.pause();
        gsap.globalTimeline.clear();
        gsap.globalTimeline.resume();
        t.dispatchEvent({param: Game, type:'changePage',bubbles:true,cancelable:true});
    }
    p.pauseGame = function(){



    };

    p.resumeGame = function(){


    }

    p.dispatchStep1 = function(){

        gsap.globalTimeline.pause();
        gsap.globalTimeline.clear();
        gsap.globalTimeline.resume();

        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    };


    window.Step1 = c.promote(Step1, "Container");

}());
