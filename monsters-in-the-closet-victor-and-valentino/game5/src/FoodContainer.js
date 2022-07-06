
'use strict';
(function(){
    var t;
    var items=[1,2,3,4,5,6,7,0];
    var n;
    var slots=[
        [{x:135,y:96}],
        [{x:90,y:64},{x:180,y:128}],
        [{x:90,y:64},{x:180,y:64},{x:135,y:128}],
        [{x:90,y:64},{x:180,y:64},{x:90,y:128},{x:180,y:128}]
        
    ];
    function FoodContainer(n)
    {
        items =[1,2,3,4,5,6,7,0];
        this.Container_constructor();
        t = this;
        this.hz;
        this.reference;
        this.animFd;
        this.animCust;
        this.slot = [];
        this.initialize(n);
    };
    var foodC = c.extend(FoodContainer, c.Container);

    foodC.initialize=function(n) {
        shuffle(items);
         this.hz= new c.Bitmap(main.loadedData.getResult('dymek0'));
        this.addChild(t.hz);

        var mini;

        n = Math.floor(Math.random()*4);

        for (var i=0;i<=n;i++){
            var numb =items.pop();
            this.slot.push(numb);
            mini = new c.Bitmap(main.loadedData.getResult('icon'+numb));
            mini.regX = mini.image.width/2;
            mini.regY = mini.image.height/2;
            mini.x = slots[n][i].x;
            mini.y = slots[n][i].y;
            mini.alpha = 0.4;
            mini.scaleX  = mini.scaleY = .65;
            mini.name = 'i'+numb;
           this .addChild(mini);
        }




     };

    foodC.changeState=function(n){

        this.removeChild(this.hz);
        this.hz= new c.Bitmap(main.loadedData.getResult('dymek'+n));
        this.addChildAt(this.hz,0);

        console.log('zmieniam state FC')
    }
    foodC.destroy = function(){

        console.log('destroy'+this.name);
        this.removeAllChildren();



    };
    window.FoodContainer = c.promote(FoodContainer, "Container");
}());
