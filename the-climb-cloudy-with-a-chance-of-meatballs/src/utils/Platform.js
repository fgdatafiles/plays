
(function(){
    'use strict';
    var t;
    var pos = ['',[-6,-3],[-3,-2]]
    var Platform=function(s)
    {

        this.initialize(s);

    };
    var platform=Platform.prototype=new createjs.Container();
    platform.Container_initialize=platform.initialize;
    platform.initialize=function(s)
    {

        this.Container_initialize();
        t=this;
        this.p = +Math.ceil(Math.random()*2);
        this.bgd=new c.Bitmap(main.loadedData.getResult('p'+this.p));
        t.addChild(this.bgd);
        this.hz = new c.Bitmap(main.loadedData.getResult('p'+this.p+'_hz'));
        this.hz.name='hz';
        this.hz.visible=false;
        this.addChild(this.hz);
        
        if(s){

            this.bonus = new c.Bitmap(main.loadedData.getResult(s));
            this.bonus.regX = this.bonus.image.width/2;
            this.bonus.x = this.bgd.image.width/2;
            this.bonus.regY = this.bonus.image.height;
            this.bonus.name = s;
            this.addChild(this.bonus);

            if(s.substr(5)=='8'){

                this.bonus.scaleY = .3;
            }

        }

    };
    platform.bonusHit = function(){

        switch(this.bonus.name){
            case 'bonus1':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus1');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;


            case 'bonus2':
                playSounds('sGood1');

                this.removeChild(this.bonus);
                this.addPoints('bonus2');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});

                break;
            case 'bonus3':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus3');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;

            case 'bonus4':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus4');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;

            case 'bonus5':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus5');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;

            case 'bonus6':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus6');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;
            case 'bonus7':
                playSounds('sGood1');
                this.removeChild(this.bonus);
                this.addPoints('bonus7');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                break;

            case 'bonus8':
                game.player.velY= -game.player.trampolineSpeed;
                playSounds('sGood4');
                TweenLite.to(this.bonus,.5,{scaleY:1,ease:Bounce.easeOut,onComplete:this.removeMe,onCompleteScope:this});
                break;

            case 'bonus9':
                game.pointsMulti=2;
                clearTimeout(game.isExtraPointsTime);
                game.isExtraPointsTimeout = setTimeout(this.parent.parent.resetPointsMulti,game.isExtraPointsTime);
                this.changeIcon('multi_bonus');
                this.parent.parent.addMultiIcon();
                TweenLite.to(this.bonus,.5,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteParams:[this.bonus],onCompleteScope:this});
                playSounds('sGood1');
                break;
            case 'bonus10':
                createjs.Ticker.framerate=20;
                clearTimeout(game.isTimeSlowTimeout);
                this.changeIcon('time_bonus');
                game.isTimeSlowTimeout =setTimeout(this.parent.parent.resetTime,game.isTimeSlowTime);
                this.parent.parent.addTimeIcon();
                playSounds('sGood1');
                TweenLite.to(this.bonus,1,{scaleY:2,scaleX:2,alpha:0,ease:Strong.easeOut,onComplete:this.removeMe,onCompleteScope:this});
                break;

        }

    }

    platform.changeIcon = function(s){
        this.removeChild(this.bonus);
        this.bonus = new c.Bitmap(main.loadedData.getResult(s));
        this.bonus.regX = this.bonus.image.width/2;
        this.bonus.x = this.bgd.image.width/2;
        this.addChild(this.bonus);
        this.bonus.regY = this.bonus.image.height;

    }

    platform.addPoints = function(s){
        s=parseInt(s.substr(5));

        if(s<6){
            s=1
        }else if(s==6){
            s=2;
        }else(s=3)

        var zz= 'points'+s;

        if(game.pointsMulti>1)zz=zz+'_2';
        console.log(zz+ "ZZ");
        this.bonus = new c.Bitmap(main.loadedData.getResult(zz));
        this.bonus.regX = this.bonus.image.width/2;
        this.bonus.x = this.bgd.image.width/2;
        this.addChild(this.bonus);
        this.bonus.regY = this.bonus.image.height;

    }
    platform.removeMe = function(){
        
        this.removeChild(this.bonus);
        this.bonus= null;
    }
    platform.hit = function(){

            this.removeChild(this.bgd);
            this.bgd=new c.Bitmap(main.loadedData.getResult('p'+this.p+'_hit'));
            this.addChild(this.bgd);
            this.bgd.x=pos[this.p][0];
            this.bgd.y=pos[this.p][1];

    }
    window.Platform=Platform;
}());
