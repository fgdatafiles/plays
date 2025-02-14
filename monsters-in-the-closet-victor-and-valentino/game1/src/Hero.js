(function() {

    var sprite;
    var currentAnim = 'start';
    var rideSound;
    var valentino={
        "framerate":24,
        "images":["img/valentino_anim.png"],
        "frames":[
            [1983, 0, 1, 1, 0, 0, 0],
            [453, 868, 149, 211, 0, -33, -117],
            [151, 868, 154, 221, 0, -29, -107],
            [1615, 610, 158, 232, 0, -26, -96],
            [638, 610, 161, 243, 0, -25, -86],
            [476, 610, 162, 251, 0, -25, -78],
            [0, 610, 162, 258, 0, -26, -72],
            [1632, 327, 162, 260, 0, -25, -70],
            [1469, 327, 163, 261, 0, -23, -69],
            [1305, 327, 164, 263, 0, -19, -67],
            [977, 327, 165, 264, 0, -15, -66],
            [646, 327, 166, 265, 0, -10, -65],
            [480, 327, 166, 266, 0, -7, -64],
            [313, 327, 167, 266, 0, -4, -64],
            [812, 327, 165, 265, 0, -3, -65],
            [1142, 327, 163, 264, 0, -5, -66],
            [318, 610, 158, 252, 0, -12, -77],
            [1311, 610, 155, 237, 0, -20, -91],
            [0, 868, 151, 222, 0, -29, -106],
            [305, 868, 148, 212, 0, -36, -116],
            [899, 868, 148, 210, 0, -35, -117],
            [602, 868, 149, 211, 0, -33, -117],
            [1466, 610, 149, 235, 0, -40, -93],
            [1794, 327, 150, 259, 0, -51, -69],
            [160, 327, 153, 282, 0, -62, -47],
            [1829, 0, 154, 301, 0, -74, -28],
            [1677, 0, 152, 316, 0, -80, -13],
            [1347, 0, 156, 319, 0, -77, -9],
            [1014, 0, 160, 322, 0, -73, -6],
            [678, 0, 163, 324, 0, -67, -4],
            [168, 0, 167, 326, 0, -59, -2],
            [0, 0, 168, 327, 0, -52, -1],
            [335, 0, 171, 326, 0, -43, -2],
            [506, 0, 172, 326, 0, -35, -2],
            [841, 0, 173, 324, 0, -26, -4],
            [1174, 0, 173, 321, 0, -18, -7],
            [1503, 0, 174, 318, 0, -10, -10],
            [799, 610, 174, 239, 0, -4, -14],
            [1138, 610, 173, 237, 0, 0, -18],
            [973, 610, 165, 237, 0, -4, -23],
            [0, 327, 160, 283, 0, -11, -46],
            [162, 610, 156, 252, 0, -20, -76],
            [1773, 610, 151, 225, 0, -29, -103],
            [751, 868, 148, 211, 0, -36, -117],
            [1196, 868, 148, 209, 0, -35, -118],
            [1047, 868, 149, 210, 0, -33, -117],
            [1344, 868, 181, 202, 0, -23, -129],
            [1525, 868, 238, 194, 0, -5, -144],
            [0, 1090, 267, 191, 0, -9, -149],
            [1763, 868, 273, 193, 0, -29, -150],
            [267, 1090, 261, 191, 0, -41, -152],
            [825, 1281, 263, 187, 0, -39, -156],
            [549, 1281, 276, 189, 0, -26, -154],
            [0, 1281, 277, 190, 0, -25, -153],
            [1336, 1090, 278, 190, 0, -24, -153],
            [528, 1090, 275, 190, 0, -27, -153],
            [1614, 1090, 274, 190, 0, -28, -153],
            [277, 1281, 272, 190, 0, -30, -153],
            [1065, 1090, 271, 190, 0, -31, -153],
            [803, 1090, 262, 190, 0, -40, -153]
        ],
        "animations":{
            "ride": {
                "frames": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20
                ],
                "speed": 1
            },
            "jump": {
                "frames": [
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "speed": 1
            },
            "fail": {
                "frames": [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                "speed": 1,
                "next":"failstop"
            },
            "failstop": {
                "frames": [68],
                "speed": 1,
                "next":"failstop"
            }
        }
    };
    var victor = {
        "framerate":24,
        "images":["img/victor_anim.png"],
        "frames":[
            [2021, 2, 0, 0, 0, 0, 0],
            [126, 491, 120, 183, 0, -32, -133],
            [1024, 491, 120, 181, 0, -32, -135],
            [1251, 678, 120, 178, 0, -32, -138],
            [2, 678, 120, 180, 0, -32, -141],
            [1892, 491, 120, 180, 0, -32, -141],
            [755, 678, 120, 179, 0, -32, -142],
            [1127, 678, 120, 178, 0, -32, -143],
            [1003, 678, 120, 178, 0, -32, -143],
            [879, 678, 120, 179, 0, -32, -142],
            [1375, 678, 120, 177, 0, -32, -139],
            [375, 299, 120, 186, 0, -32, -130],
            [499, 299, 120, 186, 0, -32, -130],
            [1119, 299, 120, 185, 0, -32, -131],
            [1630, 299, 120, 184, 0, -32, -132],
            [250, 491, 120, 183, 0, -32, -133],
            [900, 491, 120, 182, 0, -32, -134],
            [652, 491, 120, 182, 0, -32, -134],
            [776, 491, 120, 182, 0, -32, -134],
            [2, 491, 120, 183, 0, -32, -133],
            [1506, 299, 120, 184, 0, -32, -132],
            [871, 299, 120, 185, 0, -32, -131],
            [127, 299, 120, 186, 0, -32, -130],
            [631, 678, 120, 179, 0, -32, -142],
            [1396, 491, 120, 181, 0, -32, -140],
            [126, 678, 120, 179, 0, -32, -137],
            [1520, 491, 120, 180, 0, -32, -136],
            [507, 678, 120, 179, 0, -32, -137],
            [1148, 491, 120, 181, 0, -32, -140],
            [1768, 491, 120, 180, 0, -32, -141],
            [1644, 491, 120, 180, 0, -32, -141],
            [250, 678, 120, 179, 0, -32, -142],
            [1272, 491, 120, 181, 0, -32, -135],
            [1899, 299, 120, 183, 0, -32, -133],
            [747, 299, 120, 185, 0, -32, -131],
            [374, 491, 120, 182, 0, -32, -134],
            [995, 299, 120, 185, 0, -32, -131],
            [251, 299, 120, 186, 0, -32, -130],
            [1243, 299, 121, 184, 0, -28, -132],
            [1754, 299, 141, 184, 0, -2, -133],
            [1749, 2, 132, 217, 0, -5, -99],
            [1472, 2, 130, 242, 0, -9, -73],
            [1198, 2, 132, 254, 0, -7, -51],
            [786, 2, 129, 272, 0, -9, -33],
            [389, 2, 127, 285, 0, -11, -20],
            [2, 2, 122, 293, 0, -12, -12],
            [128, 2, 125, 291, 0, -11, -14],
            [257, 2, 128, 288, 0, -10, -17],
            [520, 2, 128, 284, 0, -12, -21],
            [652, 2, 130, 276, 0, -13, -29],
            [919, 2, 136, 267, 0, -11, -38],
            [1059, 2, 135, 254, 0, -16, -51],
            [1334, 2, 134, 244, 0, -20, -67],
            [1606, 2, 139, 227, 0, -22, -86],
            [1885, 2, 132, 207, 0, -32, -109],
            [1368, 299, 134, 184, 0, -32, -132],
            [1499, 678, 135, 177, 0, -32, -139],
            [374, 678, 129, 179, 0, -32, -137],
            [623, 299, 120, 186, 0, -32, -130],
            [2, 299, 121, 188, 0, -55, -133],
            [498, 491, 150, 182, 0, -50, -140],
            [1638, 678, 182, 172, 0, -42, -151],
            [1824, 678, 218, 160, 0, -30, -165],
            [1517, 862, 263, 145, 0, -9, -180],
            [590, 862, 276, 149, 0, -20, -176],
            [2, 862, 285, 150, 0, -35, -175],
            [291, 862, 295, 150, 0, -49, -175],
            [870, 862, 309, 148, 0, -59, -177],
            [1183, 862, 330, 147, 0, -62, -178]
        ],
        "animations":{
            "loop": {
                "frames": [23, 24, 25, 26, 27, 28, 4, 29, 30, 31],
                "speed": 1
            },
            "jump": {
                "frames": [
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    51,
                    52,
                    53,
                    54,
                    55,
                    56,
                    57
                ],
                "speed": 1
            },
            "fail": {
                "frames": [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
                "speed": 1,
                "next":"failstop"
            },
            "failstop": {
                "frames": [68],
                "speed": 1,
                "next":"failstop"
            },
            "start": {"frames": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "speed": 1},
            "back": {"frames": [32, 33, 34], "speed": 1},
            "ride": {
                "frames": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                "speed": 1
            }
        }
    };
    var noAnims;
    var t;
    function Hero(n) {
        this.Container_constructor();
        t = this;
        noAnims = detectIphone();
        this.obowiazujaceAniamcje;
        this.currentHero;
        this.victorAnims = {};
        this.victorAnims.startPos = ['back'];
        this.victorAnims.jumpPos = ['back'];
        this.victorAnims.loopPos = ['loop','back','ride'];
        this.victorAnims.ridePos = ['start','ride','ride','ride','start','ride','start','ride'];
        this.victorAnims.backPos = ['start','ride','jump','ride','ride','start','ride','start','ride'];
        this.valentinoAnims = {};

        this.valentinoAnims.ridePos = ['ride','ride','ride','ride','jump','ride'];
        this.valentinoAnims.jumpPos = ['ride','ride','ride','ride','jump','ride'];

        this.heroAnim;
        this.valentinoAnim;

        this.hz;
        this.setup(n);
    }
    var p = createjs.extend(Hero, createjs.Container);


    p.addToRide = function(){

        this.heroAnim.removeEventListener('animationend',this.onChangeAnim);
        this.heroAnim.addEventListener('animationend',this.onAnimEnded);

        t.heroAnim.gotoAndPlay('ride');
    };
    p.fail = function(){
        this.heroAnim.removeEventListener('animationend',this.onChangeAnim);
        this.heroAnim.addEventListener('animationend',this.onAnimFail);
        t.heroAnim.gotoAndPlay('fail');
        wylaczDzwiek();
    };

    p.onAnimFail = function(){
        t.heroAnim.stop();
    }
    p.stopSound=function(){
        setTimeout(wylaczDzwiek,1000)
    }
    function wylaczDzwiek(){
        if(rideSound)rideSound.stop();
    }
    p.onAnimEnded = function(){




        if(postac==2){

        }else{
            if(!noAnims)t.heroAnim.gotoAndStop('ride');
        }
    };
    p.setup = function(n) {

        this.hz =  new c.Bitmap(main.loadedData.getResult('victor_hz'));
        this.addChild(this.hz);
        this.hz.visible = false;
        if(n==1){




             if(noAnims){
                 var bmp = new c.Bitmap(main.loadedData.getResult('victor_hero'));
                 this.addChild(bmp);
             }else {

                 currentAnim = 'start';
                 sprite = new c.SpriteSheet(victor);
                 this.heroAnim = new c.Sprite(sprite, 'start');
                 this.heroAnim.addEventListener('animationend', this.onChangeAnim);
                 this.addChild(this.heroAnim);
                 this.heroAnim.regX = 48;
                 this.heroAnim.regY = 126;
                 this.obowiazujaceAniamcje = this.victorAnims;

             }

                 this.hz.y = 166-this.hz.image.height/2;
                 this.regX =68;
                 this.regY =166;




            if(globals.bSound){
                rideSound = c.Sound.play('victor_skate',{loop:-1})
            }

        }else{


            if(noAnims){

                var bmp = new c.Bitmap(main.loadedData.getResult('valentino_hero'));
                this.addChild(bmp);
            }else{
                currentAnim = 'ride';
                sprite  = new c.SpriteSheet(valentino);
                this.heroAnim = new c.Sprite(sprite,'ride');
                this.heroAnim.addEventListener('animationend',this.onChangeAnim);
                this.addChild(this.heroAnim);
                this.heroAnim.regX = 68;
                this.heroAnim.regY =126;
                this.obowiazujaceAniamcje = this.valentinoAnims;
            }

            this.hz.y = 166-this.hz.image.height/2;
            this.regX =68;
            this.regY =166;


            if(globals.bSound){
                rideSound = c.Sound.play('valentino_pogo',{loop:-1})
            }
        }


    } ;


    p.onChangeAnim = function(e){

        var gotoAnim=t.obowiazujaceAniamcje[currentAnim+'Pos'] ;

       currentAnim = gotoAnim[Math.floor(Math.random()*gotoAnim.length)];
        t.heroAnim.gotoAndPlay(currentAnim);



    };
    p.destroy = function(){

        if(rideSound)rideSound.stop()
        this.removeAllChildren();

    };

    window.Hero = createjs.promote(Hero, "Container");
}());