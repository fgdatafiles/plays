
(function()
{
    'use strict';
    var t;
    var bmp,krata,lewe,prawe;
    function GrandmaHouse()
    {
        this.Container_constructor();

        t = this;
        this.initialize();

    };
    var p = createjs.extend(GrandmaHouse, createjs.Container);
    p.initialize=function() {
        bmp = new  c.Bitmap(main.loadedData.getResult('grandmaHouse'));
        t.addChild(bmp);
    };

    p.wlaczAnimacje = function(){

        onDispatch();
    };


    function onDispatch(){
        t.mouseEnabled = false;
        t.removeAllChildren();
        t.dispatchEvent({type:'endAnim',bubbles:false,cancelable:true});
    }




    window.GrandmaHouse = createjs.promote(GrandmaHouse, "Container");
}());
