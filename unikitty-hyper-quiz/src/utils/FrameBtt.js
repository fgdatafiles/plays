
(function(){
    'use strict';
    var t;
    var FrameBtt=function(_bgd,_bgdOver,data,_clicksound)
    {

        this.initialize(_bgd,_bgdOver,data,_clicksound);
    };
    var frameBtt=FrameBtt.prototype=new c.Container();
    frameBtt.Container_initialize=frameBtt.initialize;
    frameBtt.initialize=function(_bgd,_bgdOver,data,_clicksound)
    {

        this.Container_initialize();
        t=this;

        this.clicksound ='click';
        console.log(_clicksound);
        if(_clicksound){
            this.clicksound = _clicksound;
        }
        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new c.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new c.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.stateClicked = false;

        if(data) {

            this.font = data.font;
            this.txt = new c.Text(data.text, data.font, '#ffffff');
            this.txt.textBaseline = 'alphabetic';
            this.txt.textAlign = 'center';


            this.txt.x = this.bgd.image.width / 2  + data.x;

                var l = this.txt.font;
                l =l.substr(0,l.indexOf('px'));
                this.txt.lineWidth = this.bgd.image.width;
                //this.txt.lineHeight = l;
                this.txt.y =getoffset(data.font)+this.bgd.image.height/2-l/2-(l/8);

            //= +getoffset(data.font)+data.y-this.txt.getMeasuredHeight()/2;
           }





        this.addChild(this.txt);

        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

     //   this.cache(0,0,this.bgd.image.width,this.bgd.image.height);

    };
     function over(e)
     {
         console.log(e.currentTarget.clicksound);
         playSounds(e.currentTarget.clicksound);
         TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});

         e.currentTarget.cursor = 'pointer';
     }

    function out(e)
    {
        TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:0,ease: Sine.easeOut});
    }
    function click(e)
     {


       //  playSounds('yeah2');
         //e.currentTarget.removeEventListener('click', click);

         if(e.currentTarget.stateClicked){
             TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});
             e.currentTarget.removeEventListener('mouseover',over);
             e.currentTarget.removeEventListener('mouseout', out);
             e.currentTarget.mouseEnabled= false;
         }

         c.EventDispatcher.initialize(FrameBtt.prototype);

     }
    window.FrameBtt=FrameBtt;
}());
