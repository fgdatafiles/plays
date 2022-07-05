var Collectibles = function(speed){
    this.mType = getRandom(1, 3);
    this.mCollectibleSpeed = speed;
    var sprStr;
    var randomPosY;
    if(this.mType == 1){
        sprStr = 'redGems';
        randomPosY = getRandom(100, 150);
    } else if(this.mType == 2){
        sprStr = 'blueGems';
        randomPosY = getRandom(100, 150);
    } else if(this.mType == 3){
        sprStr = 'coin';
        randomPosY = getRandom(150, 200);
    }
    var pTex = PIXI.Texture.fromFrame(sprStr);
    this.mCollectible = new PIXI.Sprite(pTex);
    this.mCollectible.position.x = 800;
    this.mCollectible.position.y = randomPosY;

};

function updateCollectible(){
    this.mCollectible.position.x -= this.mCollectibleSpeed;
    if(this.mType == 1 || this.mType == 3){
        if(this.mCollectible.width <= 1) {
            this.scaleDown = false;
        } else if(this.mCollectible.width >= 45) {
            this.scaleDown = true;
        }
        if(this.scaleDown){
            this.mCollectible.width -= 0.7;
        } else {
            this.mCollectible.width += 0.7;
        }
    }
}

Collectibles.prototype.getCollectibleScore = function () {
    switch (this.mType){
        case 1:return 200;
        case 2:return 100;
        case 3:return 500;
    }
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


