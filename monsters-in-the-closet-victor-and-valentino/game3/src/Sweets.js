
(function()
{
    'use strict';
    var t;

    function Sweets()
    {
        this.Container_constructor();
        t= this;
        this.initialize();
    };
    Sweets.prototype.toCheck;
    var sweets = c.extend(Sweets, c.Container);
    sweets.initialize=function()
    {

        for(var i = 0;i<15;i++){
            createParticle();
        }
        

    };
    function createParticle(){
        var sweet = new Sweet();
        t.addChild(sweet);
    }
    function checkMe(e){
        console.log(e.target);
    }
    sweets.update2 = function() {
        var l = t.children.length;
        for (var i = 0; i < l; i++) {
            var sw = t.getChildAt(i);
            sw.y += sw.nY;
            if (sw.y > 550 && sw.y < 700) {
            } else if (sw.y > 700) {
                sw.reset();
            }
        }
    };
    sweets.update=function(){
        this.toCheck=[];
        var l = t.children.length ;

        for(var i = 0; i < l; i++) {
            var sw = t.getChildAt(i);
            sw.y+=sw.nY;
            if(sw.y>550&&sw.y<700){
                this.toCheck.push(sw.img);
            }else if(sw.y>700){
                sw.reset();
            }
        }

    };

    sweets.gameOver=function(){

    };
    window.Sweets = c.promote(Sweets, "Container");
}());
