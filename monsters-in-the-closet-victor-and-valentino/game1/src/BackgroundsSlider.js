
(function()
{
    'use strict';
    var t;
    var matrix1,matrix2,matrix3,matrix4,shape1,shape2,shape3;
    function BackgroundsSlider(obj1,obj2,obj3)
    {
        this.Container_constructor();

        t = this;
        this.initialize(obj1,obj2,obj3);

    };
    var p = c.extend(BackgroundsSlider, c.Container);
    p.initialize=function(obj1,obj2,obj3) {

        
        matrix1 = new c.Matrix2D();
        matrix2 = new c.Matrix2D();
        matrix3 = new c.Matrix2D();

         shape1 = new c.Shape();
        shape1.graphics.beginBitmapFill(main.loadedData.getResult(obj1.bgd_id), "repeat", matrix1).drawRect(obj1.x,obj1.y,obj1.width,obj1.height);
        t.addChild(shape1);
        shape1.y = 91;
        shape1.y = obj1.offsetY;
         shape2 = new c.Shape();
        shape2.graphics.beginBitmapFill(main.loadedData.getResult(obj2.bgd_id), "repeat", matrix2).drawRect(obj2.x,obj2.y,obj2.width,obj2.height);
        t.addChild(shape2);
        shape2.y = obj2.offsetY;

         shape3 = new c.Shape();
        shape3.graphics.beginBitmapFill(main.loadedData.getResult(obj3.bgd_id), "repeat", matrix3).drawRect(obj3.x,obj3.y,obj3.width,obj3.height);
        t.addChild(shape3);
        shape3.y = 332;
        shape3.y = obj3.offsetY;

     //   setInterval(p.update,20)
    };


    p.destroy=function(){

        t.removeAllChildren();
    }
    p.update = function(){
        
        matrix1.translate(-activeConfig.speed1,0);
        matrix2.translate(-activeConfig.speed2,0);
        matrix3.translate(-activeConfig.speed3,0);


    }
    function przesun(){


    };

    window.BackgroundsSlider = createjs.promote(BackgroundsSlider, "Container");
}());
