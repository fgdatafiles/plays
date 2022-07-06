
(function()
{
    'use strict';
    var t;
    var orgtime =1;
    var timeout;
    var slow=false;
    var Items2=function(Class)
    {
        this.initialize(Class);
    };




    Items2.prototype.toCheck;

    var items2=Items2.prototype=new createjs.Container();

    items2.Container_initialize=items2.initialize;
    items2.time = 1;
    items2.initialize=function(Class)
    {
        this.Container_initialize();
        t= this;

        for(var i = 0;i<6;i++){

            setTimeout(createParticle,Math.random()*2000,Class)
            //createParticle(Class);
        }
        

    };
    
    function createParticle(Class){
        var item = new Class();
        t.addChild(item);
    }
    function checkMe(e) {

    }
    items2.update=function(){


        this.toCheck=[];
        var l = t.getNumChildren() ;
        for(var i = 0; i < l; i++) {
            var sw = t.getChildAt(i);

            if (sw.beReady) {

                sw.img_container.y += (sw.nY * items2.time);


                if (sw.img_container.y > 404 - sw.img.image.height && sw.img_container.y < 426) {
                    this.toCheck.push(sw.img);
                } else if (sw.img_container.y > 520) {
                    sw.reset();
                }
            }

        }

    };
    items2.changeSpeed = function(){


    };


    window.Items2=Items2;
}());
