
(function(){
    'use strict';
    var t;
    function FrameBtt(_bgd,_bgdOver,colorOver,data,_target)
    {
        this.Container_constructor();
        t=this;
        this.initialize(_bgd,_bgdOver,colorOver,data,_target);
    };
    var frameBtt = c.extend(FrameBtt, c.Container);
    frameBtt.initialize=function(_bgd,_bgdOver,colorOver,data,_target)
    {



        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new c.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new c.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.stateClicked = false;
        this.colorOver= typeof colorOver !== 'undefined' ? colorOver : '#fff';
        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

        this.cursor='pointer';

        if(data){

            console.log('DARAAAA')
            this.font= typeof data.font !== 'undefined' ? data.font : 'bold 17px EurostileLTPro-Bold-Oblique';
            this.txt = new c.Text(data.text, data.font,'#fff');
            this.txt.textBaseline = "middle";
            this.txt.textAlign='center';
            this.txt.color='#fff';
            this.txt.x = this.bgd.image.width/2+data.x;
            this.txt.y = 71/2;//this.bgd.image.height/2+data.y;



            if(this.txt.font!=undefined){
                var l = this.txt.font;

                l =l.substr(0,l.indexOf('px'));

                this.txt.lineWidth = this.bgd.image.width;

                this.txt.y+= data.y;
                this.txt.x+= data.x;
                //this.txt.y =data.y//+this.bgd.image.height/2;//-(l/2);
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
           e.currentTarget.txt.color = '#fff';
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

    }



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

         c.EventDispatcher.initialize(FrameBtt.prototype);
         if(e.target.clicktarget)
         {
             e.target.dispatchEvent({param: e.target.clicktarget, type:'changePage',bubbles:true,cancelable:true});
         }
         else
         {
             //e.target.parent.dispatchEvent({type:'customclick'});
         }
     }
    window.FrameBtt = c.promote(FrameBtt, "Container");
}());
