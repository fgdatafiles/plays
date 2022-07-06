
(function()
{
    'use strict';
    var t;

    var bam;
     var centerx,centery, x0,xp,y0,yp;
     var timer;
    var anim;
    var frames=['zero','jeden','dwa','trzy','cztery','piec','szesc','siedem','osiem','dziewiec','dziesiec'];

    var Ball=function()
    {
        this.initialize();
    };
    var ball=Ball.prototype=new createjs.Container();
    Ball.prototype.bMouse = false;
    Ball.prototype.img;
    Ball.prototype.gameOver = function(){
      
        anim.gotoAndStop('dziesiec');
        this.hit = this.clear;
    };
    Ball.prototype.hit = function(n){


    };
    Ball.prototype.hit1 = function(n){

        if(!this.bMouse){
            main.energy -=n;

            var ee = Math.min(9,9-Math.floor(main.energy/1000));

            anim.gotoAndStop(frames[ee]);


            var o = this.globalToLocal(stage.mouseX-this.img.image.width/2,stage.mouseY-this.img.image.height/2);
            addBam(o);
            var nX1 = o.x;
            var nY1 = o.y;
            var toX = Math.min(Math.max(this.x - (nX1 * n)/100,0),main.nWidth-this.img.image.width);

            var toY =Math.min((Math.max(0,(this.y- (nY1 * n)/100))),main.nHeight-this.img.image.width);
            this.bMouse = true;

            TweenLite.to(this, 0.1, {x:toX,y:toY,onComplete:wlacz } );
        }
    };
    Ball.prototype.clear = function(){

    };
    function addBam(oo) {
        if(main.sound){
            createjs.Sound.play('s3');
        }
        var o = t.globalToLocal(stage.mouseX,stage.mouseY);
        if (!bam){
            bam = new createjs.Bitmap(main.loadedData.getResult('bam'));
            bam.regX = bam.image.width/2;
            bam.regY = bam.image.height/2;
        }
        t.addChild(bam);

        bam.x  = Math.min(Math.max(oo.x,0)+bam.image.width, t.img.image.width);
        bam.y  = Math.min(Math.max(oo.y,0), t.img.image.height);
        setTimeout(removeBam,1000);
    }
    function removeBam(){
        t.removeChild(bam);
    }
    Ball.prototype.update=function(){
        if(!this.bMouse){
            move(centerx, centery, 0.9, 0.1);
        }
    };

    function wlacz() {
        t.bMouse = false;
    }

    ball.Container_initialize=ball.initialize;
    ball.initialize=function()
    {
        t= this;
        this.img = new createjs.Bitmap(main.loadedData.getResult('piniata'));
        this.addChild(this.img);
        this.img.visible = false;
        this.x = centerx = 306;
        this.y = centery=  108;

        x0 =this.x;
        y0 = this.y;
        xp = this.x-x0;
        yp = this.y-y0;
        var img = main.loadedData.getResult('all');

        var data = {
            images: [img],
            frames:[
                [0, 0, 256, 512, 0, -34, -18],
                [256, 0, 256, 512, 0, -34, -18],
                [512, 0, 256, 512, 0, -34, -18],
                [768, 0, 256, 512, 0, -34, -18],
                [1024, 0, 256, 512, 0, -34, -18],
                [1280, 0, 256, 512, 0, -34, -18],
                [1536, 0, 256, 512, 0, -34, -18],
                [0, 512, 256, 512, 0, -34, -18],
                [256, 512, 256, 512, 0, -34, -18],
                [512, 512, 256, 512, 0, -34, -18]
            ],
            animations: {zero:[0], jeden:[0],dwa:[1],trzy:[2],cztery:[3],piec:[4],szesc:[5],siedem:[6],osiem:[7],dziewiec:[8],dziesiec:[9]}
        };
        var spriteSheet = new createjs.SpriteSheet(data);
        anim = new createjs.Sprite(spriteSheet,'zero');
        //anim.x =-43;
        //anim.y= -49;
        t.addChild(anim);
        this.hit = this.hit1;





    };
    function move(centerx, centery, inertia, k)
    {
    var nX =  -  t.x + centerx;
    var nY =  -t.y + centery;
    xp = xp * inertia + nX * k;
    yp = yp * inertia + nY * k;
    t.x +=  xp;
    t.y +=  yp;
}

    window.Ball=Ball;
}());
