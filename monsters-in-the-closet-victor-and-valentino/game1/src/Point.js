

(function() {

    function Point(src) {
        this.Container_constructor();

        this.src = src;
        this.interval;
        this.hz;
        this.setup();
    }
    var p = createjs.extend(Point, createjs.Container);


    p.setup = function() {
        
        var bmp =  new c.Bitmap(main.loadedData.getResult('points_icon'));

        this.addChild(bmp);
        this.regX = bmp.image.width/2;
        this.regY = bmp.image.height/2;
        
        this.hz = bmp;


    } ;

    p.disable = function(){

        console.log(this);
        this.removeChild(this.hz);


    };

    
    p.destroy = function(){


        this.removeAllChildren();

    }

    window.Point = createjs.promote(Point, "Container");
}());