

(function() {

    function BonusItem(src) {
        this.Container_constructor();

        this.src = src;
        this.interval;
        this.hz;
        this.setup();
    }
    var p = createjs.extend(BonusItem, createjs.Container);


    p.setup = function() {
        var num = Math.ceil(Math.random()*2);


        var  bmp = new c.Bitmap(main.loadedData.getResult('b'+num));
        this.name='b'+num;
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

    window.BonusItem = createjs.promote(BonusItem, "Container");
}());