function CVirusSettings(){
    /////////////////////////////BOSS///////////////////////////////////
    var oSprite = s_oSpriteLibrary.getSprite('boss0');
    var iWidth = oSprite.width/7;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-6, regY: iHeight/2-8},
                    animations: {idle:[0,19], dead:[22,22], scared:[23,27, "scared"]}  ///3
               };
    s_aVirusSpriteSheet[0] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[0] = 28;
    
    var oSprite = s_oSpriteLibrary.getSprite('boss1');
    var iWidth = oSprite.width/7;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-5, regY: iHeight/2-5}, 
                    animations: {idle:[0,19], dead:[24,24], scared:[24,27, "scared"]}
               };
    s_aVirusSpriteSheet[1] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[1] = 26;
    
    var oSprite = s_oSpriteLibrary.getSprite('boss2');
    var iWidth = oSprite.width/7;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-6, regY: iHeight/2-8}, 
                    animations: {idle:[0,19], dead:[22,22], scared:[24,27, "scared"]}
               };
    s_aVirusSpriteSheet[2] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[2] = 26;
    
    var oSprite = s_oSpriteLibrary.getSprite('boss3');
    var iWidth = oSprite.width/7;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-2, regY: iHeight/2-2},
                    animations: {idle:[0,19], dead:[20,20], scared:[21,27, "scared"]}
               };
    s_aVirusSpriteSheet[3] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[3] = 25;
    
    //////////////////////////////MINIONS////////////////////////////////
    var oSprite = s_oSpriteLibrary.getSprite('virus0');
    var iWidth = oSprite.width/9;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-2, regY: iHeight/2-2}, 
                    animations: {idle:[0,19], dead:[22,22,"dissolve",1/30], dissolve:[21,35, "stop", 1/2], stop:[36]}
               };
    s_aVirusSpriteSheet[4] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[4] = 15;
    
    var oSprite = s_oSpriteLibrary.getSprite('virus1');
    var iWidth = oSprite.width/9;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-3, regY: iHeight/2-4}, 
                    animations: {idle:[0,19], dead:[20,20,"dissolve",1/30], dissolve:[21,35, "stop", 1/2], stop:[36]}
               };
    s_aVirusSpriteSheet[5] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[5] = 13;
    
    var oSprite = s_oSpriteLibrary.getSprite('virus2');
    var iWidth = oSprite.width/9;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-2, regY: iHeight/2-2}, 
                    animations: {idle:[0,19], dead:[20,20,"dissolve",1/30], dissolve:[21,35, "stop", 1/2], stop:[36]}
               };
    s_aVirusSpriteSheet[6] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[6] = 13;
  
    var oSprite = s_oSpriteLibrary.getSprite('virus3');
    var iWidth = oSprite.width/9;
    var iHeight = oSprite.height/4;
    var oData = {   
                    images: [oSprite], 
                    // width, height & registration point of each sprite
                    frames: {width: iWidth, height: iHeight, regX: iWidth/2-3, regY: iHeight/2-2}, 
                    animations: {idle:[0,19], dead:[20,20,"dissolve",1/30], dissolve:[21,35, "stop", 1/2], stop:[36]}
               };
    s_aVirusSpriteSheet[7] = new createjs.SpriteSheet(oData);
    s_aColliderRadius[7] = 13;
};

var s_aVirusSpriteSheet = new Array();
var s_aColliderRadius = new Array();
