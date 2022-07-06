
(function()
{
    'use strict';
    var t;

    var bam;
     var centerx,centery, x0,xp,y0,yp;
     var timer;
    var anim;
    var frames=['zero','jeden','dwa','trzy','cztery','piec','szesc','siedem','osiem','dziewiec','dziesiec','jedenascie','dwanascie','trzynascie','czternascie'];

    function Ball()
    {

        this.Container_constructor();
        t= this;
        this.initialize();
    };
    var ball = c.extend(Ball, c.Container);
    Ball.prototype.bMouse = false;
    Ball.prototype.img;
    Ball.prototype.gameOver = function(){
        anim.gotoAndStop('czternascie');
        this.hit = this.clear;
    };
    Ball.prototype.hit = function(n){


    };
    Ball.prototype.hit1 = function(n){
        
        
        playSounds('hit'+Math.ceil(Math.random()*5))
        if(!this.bMouse){
            main.energy -=n;

            var ee = Math.min(14,14-(Math.floor(main.energy/1000))*14);

            anim.gotoAndStop(frames[ee]);


            var o = this.globalToLocal(stage.mouseX,stage.mouseY);
            addBam(o);
            var nX1 = o.x;
            var nY1 = o.y;
            var toX = Math.max(this.x - (nX1 * n)/100,0);

            var toY =Math.max(0,(this.y- (nY1 * n)/100));

            this.bMouse = true;

            TweenLite.to(this, 0.1, {x:toX,y:toY,onComplete:wlacz } );
        }
    };
    Ball.prototype.clear = function(){

    };
    function addBam(oo) {

        var o = t.globalToLocal(stage.mouseX,stage.mouseY);


        if (!bam){
            
            bam = new c.Bitmap(main.loadedData.getResult('bam'));
            bam.regX = bam.image.width/2;
            bam.regY = bam.image.height/2;
        }
        t.addChild(bam);

        bam.x  = Math.min(Math.max((o.x),-200),200);
        bam.y  = Math.min(Math.max(o.y,-100),100);
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
    
    ball.initialize=function()
    {
        t= this;
        this.img = new createjs.Bitmap(main.loadedData.getResult('hz'));
        this.addChild(this.img);
        this.img.x = -100;
        this.img.y = -70;
        this.img.visible = false;
        this.x = centerx =ow/2// 609  +292/2;
        this.y = centery= oh/2// 214+289/2;

        x0 =this.x;
        y0 = this.y;
        xp = this.x-x0;
        yp = this.y-y0;

        
        var img = main.loadedData.getResult('all');

var data={
    "framerate":24,
    "images":["img/all.png"],
    "frames":[
        [594, 2, 292, 289, 0, -2, -2],
        [2, 2, 292, 289, 0, -2, -2],
        [298, 2, 292, 289, 0, -2, -2],
        [1162, 2, 292, 289, 0, -2, -2],
        [890, 2, 268, 289, 0, -26, -2],
        [1730, 2, 268, 279, 0, -26, -12],
        [2, 295, 268, 279, 0, -26, -12],
        [1458, 2, 268, 279, 0, -26, -12],
        [274, 295, 268, 249, 0, -26, -42],
        [808, 295, 268, 249, 0, -26, -42],
        [546, 295, 258, 249, 0, -26, -42],
        [1080, 295, 258, 249, 0, -26, -42],
        [1721, 295, 197, 235, 0, -87, -56],
        [1342, 295, 197, 235, 0, -87, -56],
        [1543, 295, 174, 235, 0, -94, -56]
    ],
    "animations": {zero:[0], jeden:[1],dwa:[2],trzy:[3],cztery:[4],piec:[5],szesc:[6],siedem:[7],osiem:[8],dziewiec:[9],dziesiec:[10],jedenascie:[11],dwanascie:[12],trzynascie:[13],czternascie:[14]}
};
/*
        var data = {
            images: [img],
            frames: [[0, 0, 512, 512, 0, 0, 0], [512, 0, 512, 512, 0, 0, 0], [1024, 0, 512, 512, 0, 0, 0], [1536, 0, 512, 512, 0, 0, 0], [0, 512, 512, 512, 0, 0, 0], [512, 512, 512, 512, 0, 0, 0], [1024, 512, 512, 512, 0, 0, 0], [1536, 512, 512, 512, 0, 0, 0], [0, 1024, 512, 512, 0, 0, 0], [512, 1024, 512, 512, 0, 0, 0]],

            animations: {zero:[0], jeden:[0],dwa:[1],trzy:[2],cztery:[3],piec:[4],szesc:[5],siedem:[6],osiem:[7],dziewiec:[8],dziesiec:[9]}
        };*/
        var spriteSheet = new createjs.SpriteSheet(data);
        anim = new createjs.Sprite(spriteSheet,'zero');
      //  anim.x =-43;
       // anim.y= -49;
        t.addChild(anim);
        anim.regX = 292/2;
        anim.regY = 289/2;
        /*

        anim =new c.Bitmap(main.loadedData.getResult('piniata_game1'));
        t.addChild(anim);
        anim.regX = 292/2;
        anim.regY = 289/2;
        */
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

    window.Ball = c.promote(Ball, "Container");
}());
