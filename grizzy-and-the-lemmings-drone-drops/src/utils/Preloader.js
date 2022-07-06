
(function(){

    'use strict';
    var t;
    var progressBar;
    var icon;

    var Preloader=function(_manifest){

        this.manifest=_manifest;
        this.initialize();


    };
    var p = Preloader.prototype = new createjs.Container();
    p.Container_initialize=p.initialize;
    p.initialize=function()
    {
        this.Container_initialize();
        t=this;
        t.children=null;
        t.children=[];


        if (!createjs.Sound.initializeDefaultPlugins()) {return;}

        var sounds = [

            {id:'applause', src:'sounds/orkiestra.mp3'},
            {id:'end', src:'sounds/end_music.mp3'},
            {id:'s1', src:'sounds/click.mp3'},
            {id:'s2', src:'sounds/good.mp3'},
            {id:'s3', src:'sounds/hit2.mp3'},
            {id:'s4', src:'sounds/wybuch_skrzynki.mp3'}

          

        ];

        createjs.Sound.alternateExtensions = ['ogg'];
        createjs.Sound.registerSounds(sounds);

        t.queue=new createjs.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        
        t.queue.loadManifest(this.manifest,true);




    };
    function startLoading() {


    }

   
    function onProgress(e)
    {
     //   progressBar.scaleX= e.loaded;

    }
    function onComplete(e)
    {
        
        t.dispatchEvent('completed');
        clear();

    }

   
    function clear()
    {
        while(t.getNumChildren())
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
    window.Preloader = Preloader;
}());