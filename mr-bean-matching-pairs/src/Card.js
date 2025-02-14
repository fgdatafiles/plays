
(function()
{
    'use strict';
    var t,blank;
    var thisScale =1;
    var Card=function(z)
    {

        t = this;
        this.number;

        this.initialize(z);
    };
    var p=Card.prototype=new c.Container();
    Card.prototype.bmp;

    p.Container_initialize = p.initialize;
    p.initialize=function(z) {
        this.Container_initialize();

        this.cursor='pointer';
        this.number = z;
        this.blank = new c.Bitmap(main.loadedData.getResult('blank'+cardprefix));
        t.addChild(this.blank);
        console.log(this.number);
        this.bmp = new c.Bitmap(main.loadedData.getResult('b'+this.number+cardprefix));
        this.addChild(this.bmp);
        this.bmp.scaleX = 0;
        this.addEventListener('click',onClick);

        this.bmp.regX = this.blank.regX = this.bmp.image.width/2;
        this.bmp.x = this.blank.x = this.bmp.image.width/2;




            if(main.nCurrentLevel==0){
                thisScale =1;
            }
            else if(main.nCurrentLevel==1){
                thisScale = 1;
            }else if(main.nCurrentLevel==2) {
                thisScale = 0.86;
            } else if(main.nCurrentLevel==3){
                    thisScale = 0.86;
                }



        this.bmp.scaleY=this.blank.scaleX=this.blank.scaleY=thisScale;

        console.log()
    };

    function onClick(e){

        if(globals.bSound){
            c.Sound.play('reveal');
        }
        TweenLite.to(e.currentTarget.blank,.3,{scaleX:0,ease:Strong.easeOut});
        TweenLite.to(e.currentTarget.bmp,.3,{scaleX:thisScale,ease:Strong.easeOut});
        e.currentTarget.mouseEnabled = false;
        e.currentTarget.dispatchEvent({numer:e.currentTarget.number,type:'odw',bubbles:true,cancelable:true});
        //e.currentTarget.bmp.alpha=  1;
    }
    p.blokuj = function(){
       
        this.mouseEnabled = false;
        this.cursor = 'default';
    };
    p.revert = function(){
        TweenLite.to(this.blank,.3,{scaleX:thisScale,ease:Strong.easeIn});
        TweenLite.to(this.bmp,.3,{scaleX:0,ease:Strong.easeIn});
        this.mouseEnabled = true;
    };


    window.Card=Card;

}());
