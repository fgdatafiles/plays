
(function()
{
    'use strict';
    var t;
    var orgtime =1;
    var timeout;
    var slow=false;
    var Items=function(Class)
    {
        this.initialize(Class);
    };




    Items.prototype.toCheck;

    var items=Items.prototype=new createjs.Container();

    items.Container_initialize=items.initialize;
    items.time = 1;
    items.initialize=function(Class)
    {
        this.Container_initialize();
        t= this;

        for(var i = 0;i<6;i++){

            //setTimeout(createParticle,Math.random()*2000,Class)
            createParticle(Class);
        }
        

    };
    
    function createParticle(Class){
        var item = new Class();
        t.addChild(item);
    }
    function checkMe(e) {

    }
    items.update=function(){


        this.toCheck=[];
        var l = t.getNumChildren() ;
        for(var i = 0; i < l; i++) {
            var sw = t.getChildAt(i);

            if (sw.beReady) {

                sw.y += (sw.nY * items.time);
                if (sw.y > 404 - sw.img.image.height && sw.y < 426) {
                    this.toCheck.push(sw.img);
                } else if (sw.y > 520) {
                    sw.reset();
                }
            }
        }
    };
    items.changeSpeed = function(){


    };


    window.Items=Items;
}());
