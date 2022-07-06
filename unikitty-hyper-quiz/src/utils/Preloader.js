
(function(){

    'use strict';
    var t;
    var maska,dym1,dym2,dym3,dym4,dym5,dym6;
    var bgd,bgd1,bgd2,bar,progress_bar,pre_container;
    var tt;
    var counter=1;
    var nX;
    var nY;
    function Preloader(_manifest) {
        this.Container_constructor();
        this.manifest = _manifest;
        this.init();
    }
    var preloader = c.extend(Preloader,c.Container);
    preloader.init = function(){

        t = this;
        t.children=null;
        t.children=[];


        if (!c.Sound.initializeDefaultPlugins()) {return;}
        bgd1=new c.Bitmap('img/pre/p3.png');
        bgd1.x = 343;
        bgd1.y = 264;
        t.addChild(bgd1);

        bgd=new c.Bitmap('img/pre/p2.png');
        bgd.x = 4;
        bgd.y = 264;;
        t.addChild(bgd);

        var maska=new c.Shape(new c.Graphics().beginFill('#fff').drawRect(0,0,339,46))
        maska.x = 343;
        maska.y = 264;;

        bgd.mask=maska;
        bgd2=new c.Bitmap('img/pre/p1.png');
        bgd2.x = 343;
        bgd2.y = 264;;
        t.addChild(bgd2);
        t.addChild(maska);
        maska.visible=false;



        startLoading()

    };

    function startLoading() {

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);
        t.queue.loadManifest(t.manifest,true);

    }




    function onProgress(e)
    {
        bgd.x = 4+(340*e.loaded)
    }
    function onComplete(e)
    {
        //bgd.visible= bgd2.visible=bgd1.visible=false;

        setTimeout(disp,10);
    }
    function disp(){
       //
        clear();

    }

   
    function clear()
    {
        t.dispatchEvent('completed');
        clearInterval(tt);
        while(t.numChildren)
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            t.removeChildAt(0);
        }
        if(t.parent)
        {
        t.parent.removeChild(t);
        }
    }
    window.Preloader = c.promote(Preloader, "Container");
}());