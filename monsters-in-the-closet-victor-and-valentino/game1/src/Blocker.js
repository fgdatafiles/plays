

(function() {

    function Blocker(src) {
        this.Container_constructor();

        this.src = src;
        this.interval;
        this.hz;
        this.setup();
    }
    var p = createjs.extend(Blocker, createjs.Container);


    p.setup = function() {


        var bmp = new c.Bitmap(main.loadedData.getResult(activeConfig.prefix+'o'+this.src));

        this.addChild(bmp);
        this.regX = bmp.image.width/2;
        this.regY = bmp.image.height;
        
        this.hz = new c.Bitmap('img/'+activeConfig.prefix+'hz'+this.src+'.png');
        this.hz.x = eval('objectsHitZoneLeve'+activeConfig.prefix)[this.src].x;
        this.hz.y = eval('objectsHitZoneLeve'+activeConfig.prefix)[this.src].y;
        this.hz.visible = false;
        this.addChild(this.hz);

    } ;

    p.disable = function(){

        
        this.removeChild(this.hz);

        this.timeout = setTimeout(enable,1000,this);
    }

    function enable (item){

        item.addChild(item.hz);
    }
    p.destroy = function(){

        clearTimeout(this.interval)
        this.removeAllChildren();

    }

    window.Blocker = createjs.promote(Blocker, "Container");
}());