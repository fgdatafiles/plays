var Asteroids = function(){
    this.mType = getRandom(1, 4);
    this.mAsteroidspeed = getRandom(12, 16);
    var asteroidStr;
    var randomPosY = getRandom(100, 400);
    if(this.mType == 1){
        asteroidStr = 'asteroid_1';
    } else if(this.mType == 2){
        asteroidStr = 'asteroid_2';
    } else if(this.mType == 3){
        asteroidStr = 'asteroid_3';
    }else if(this.mType == 4){
        asteroidStr = 'asteroid_4';
    }
    var pTex = PIXI.Texture.fromFrame(asteroidStr);
    this.mAsteroids = new PIXI.Sprite(pTex);
    this.mAsteroids.position.x = 800;
    this.mAsteroids.anchor.set(0.5);
    this.mAsteroids.position.y = randomPosY;

};

function updateAsteroids(){
    this.mAsteroids.position.x -= this.mAsteroidspeed;
    if(this.mType == 2){
        this.mAsteroids.rotation += 0.01;
    }else if(this.mType == 3){
        this.mAsteroids.rotation -= 0.01;
    }else if(this.mType == 1){
        this.mAsteroids.rotation -= 0.01;
    }else if(this.mType == 4){
        this.mAsteroids.rotation -= 0.01;
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


