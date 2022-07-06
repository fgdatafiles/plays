
(function(){
    'use strict';
    var t;
    function FrameBtt(_bgd,_bgdOver,colorOver,data,_target,colorOff)
    {
        this.Container_constructor();
        t=this;
        this.initialize(_bgd,_bgdOver,colorOver,data,_target,colorOff);
    };
    var frameBtt = createjs.extend(FrameBtt, createjs.Container);
    frameBtt.initialize=function(_bgd,_bgdOver,colorOver,data,_target,colorOff)
    {



        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new createjs.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new createjs.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.stateClicked = false;
        this.colorOver= typeof colorOver !== 'undefined' ? colorOver : '#ffed00';
        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

        this.cursor='pointer';
        this.colorOff= typeof colorOff !== 'undefined' ? colorOff : '#fdeb5e';
        if(data){
            this.font= typeof data.font !== 'undefined' ? data.font : 'bold 17px EurostileLTPro-Bold-Oblique';
            this.txt = new createjs.Text(data.text, data.font,this.colorOff);
            this.txt.textBaseline = "alphabetic";
            this.txt.textAlign='center';


            this.txt.x = this.bgd.image.width/2+data.x;

            if(this.txt.font!=undefined){
                var l = this.txt.font;

                l =l.substr(0,l.indexOf('px'));

                this.txt.lineWidth = this.bgd.image.width;

                this.txt.y+= data.y;
                this.txt.x+= data.x;
                this.txt.y =this.bgd.image.height/2+data.y;
                }
            this.addChild(this.txt);
        }
        
        if(_target) {t.clicktarget=_target ;}
        else {t.clicktarget=null;}

    };
     function over(e)
     {

        playSounds('click'+Math.ceil(Math.random()*3));

         
        if(e.currentTarget.colorOver&&e.currentTarget.txt){
            e.currentTarget.txt.color = e.currentTarget.colorOver;
        }
         TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});
         TweenLite.to(e.currentTarget.bgd,0.3,{alpha:0,ease: Sine.easeIn});
         e.currentTarget.cursor = 'pointer';
     }

    function out(e)
    {

        if(e.currentTarget.txt){
           e.currentTarget.txt.color = e.currentTarget.colorOff;
        }
        TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:0,ease: Sine.easeIn});
        TweenLite.to(e.currentTarget.bgd,0.3,{alpha:1,ease: Sine.easeOut});
    }
    frameBtt.resetClick= function(){

        TweenLite.to(this.bgdOver,0.3,{alpha:0,ease: Sine.easeIn});
        TweenLite.to(this.bgd,0.3,{alpha:1,ease: Sine.easeOut});
        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

    };

    frameBtt.selectWrong = function(){
        this.removeEventListener('click', click);

        this.removeEventListener('mouseover',over);
        this.removeEventListener('mouseout', out);

        this.removeChild(this.bgd);
        this.removeChild(this.bgdOver);
        this.bgd=new createjs.Bitmap(main.loadedData.getResult('quiz_btt_wrong'));
        this.addChildAt(this.bgd,0);
    };
    frameBtt.selectCorrect = function(){
        this.removeChild(this.bgd);
        this.removeChild(this.bgdOver);
        this.removeEventListener('click', click);

        this.removeEventListener('mouseover',over);
        this.removeEventListener('mouseout', out);

        this.bgd=new createjs.Bitmap(main.loadedData.getResult('quiz_btt_correct'));
        this.addChildAt(this.bgd,0);
    };
    function click(e)
     {

         e.currentTarget.removeEventListener('click', click);


         if(e.currentTarget.stateClicked){
             TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});

             e.currentTarget.removeEventListener('mouseover',over);
             e.currentTarget.removeEventListener('mouseout', out);
         }
         if(globals.bSound){
             c.Sound.play('click');
         }

         createjs.EventDispatcher.initialize(FrameBtt.prototype);
         if(e.target.clicktarget)
         {
             e.target.dispatchEvent({param: e.target.clicktarget, type:'changePage',bubbles:true,cancelable:true});
         }
         else
         {
             //e.target.parent.dispatchEvent({type:'customclick'});
         }
     }
    window.FrameBtt = createjs.promote(FrameBtt, "Container");
}());
