
(function(){
    'use strict';
    var t;

    var Player=function()
    {
        this.initialize();
    };
    var player=Player.prototype=new createjs.Container();
    player.Container_initialize=player.initialize;
    player.initialize=function()
    {



        this.Container_initialize();



        var data={
            "framerate":24,
            "images":["img/steve_anim.png"],
            "frames":[
                [988, 0, 73, 101, 0, -18, -46],
                [769, 0, 73, 101, 0, -18, -46],
                [696, 0, 73, 101, 0, -18, -46],
                [1357, 0, 73, 100, 0, -18, -47],
                [1430, 0, 73, 100, 0, -18, -47],
                [1798, 0, 74, 99, 0, -17, -48],
                [1872, 0, 74, 99, 0, -17, -48],
                [1946, 0, 74, 99, 0, -17, -48],
                [0, 137, 74, 99, 0, -17, -48],
                [74, 137, 73, 99, 0, -18, -48],
                [1209, 0, 73, 100, 0, -18, -47],
                [1136, 0, 73, 100, 0, -18, -47],
                [915, 0, 73, 101, 0, -18, -46],
                [842, 0, 73, 101, 0, -18, -46],
                [1503, 0, 73, 100, 0, -18, -47],
                [1725, 0, 73, 99, 0, -18, -49],
                [973, 137, 77, 94, 0, -17, -53],
                [745, 137, 78, 94, 0, -17, -55],
                [823, 137, 73, 94, 0, -17, -54],
                [226, 137, 70, 98, 0, -17, -50],
                [552, 0, 71, 102, 0, -17, -47],
                [1576, 0, 72, 100, 0, -16, -47],
                [599, 137, 71, 96, 0, -16, -50],
                [670, 137, 75, 95, 0, -16, -54],
                [1207, 137, 78, 92, 0, -17, -56],
                [1050, 137, 79, 93, 0, -17, -55],
                [296, 137, 74, 98, 0, -18, -51],
                [623, 0, 73, 101, 0, -18, -47],
                [1282, 0, 75, 100, 0, -17, -46],
                [1648, 0, 77, 99, 0, -17, -47],
                [445, 137, 77, 97, 0, -19, -49],
                [522, 137, 77, 96, 0, -18, -50],
                [370, 137, 75, 97, 0, -18, -49],
                [477, 0, 75, 105, 0, -16, -41],
                [402, 0, 75, 112, 0, -14, -31],
                [246, 0, 82, 120, 0, -7, -17],
                [0, 0, 90, 137, 0, 0, -2],
                [167, 0, 79, 127, 0, -11, -5],
                [90, 0, 77, 129, 0, -14, -10],
                [328, 0, 74, 115, 0, -18, -24],
                [147, 137, 79, 98, 0, -13, -46],
                [1129, 137, 78, 92, 0, -14, -53],
                [896, 137, 77, 94, 0, -15, -49],
                [1061, 0, 75, 100, 0, -17, -46]
            ],
            "animations":{
                "idle": {
                    "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    "speed": 1,
                    "next": "idle"
                },
                "walk": {
                    "frames": [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                    "speed": 1,
                    "next": "walk"
                },
                "jump": {
                    "frames": [
                        //28,
                        //29,
                        //30,
                        //31,
                        //32,
                        //33,
                        34,
                        35


                        //39,
                        //40,
                        //41,
                        //42,
                       // 43
                    ],
                    "speed": 1,
                    "next": "fly"


                },
                "fly":{
                    "frames":[36],
                    "speed":1

                },
                "falling":{
                    "frames":[37,38],
                    "speed":1,
                    "next": "fall"

                },
                "fall":{
                    "frames":[39],
                    "speed":1


                }
            }
        };
        var spriteSheet = new createjs.SpriteSheet(data);


        this.player = new createjs.Sprite(spriteSheet,'idle');
        this.player.regX = 50;
        this.isWalking =false;
        this.isJumping =false;
        this.addChild(this.player);
        this.hz = new c.Bitmap(main.loadedData.getResult('hz'))
        this.hz.x = -50;
        this.hz.y = 100;
        this.hz.visible=false;
        this.addChild(this.hz);
    };
    player.playAnim = function(s,scale){

        if(this.player.currentAnimation!=s){
            this.player.gotoAndPlay(s);

        }
        if(scale)this.scaleX =scale;
    }
    player.revert=function(scale){
        this.scaleX =scale;
    }
    window.Player=Player;
}());
