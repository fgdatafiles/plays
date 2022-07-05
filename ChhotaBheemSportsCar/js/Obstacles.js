var Obstacles = function(){
    this.mObstacleSpeed = 6;
    this.isCrashed = false;
    this.mObstacle = new PIXI.Sprite(PIXI.Texture.fromFrame('obstacles_1'));
    this.mObstacle.position.x = 700;
    this.mObstacle.position.y = 287;
};

function updateObstacle(){
    this.mObstacle.position.x -= this.mObstacleSpeed;
    if((this.mObstacle.position.x + this.mObstacle.width)  <= 0){
        resetObstacle.call(this);
    }
}
function resetObstacle(){
    var pos = getRandom(400, 600);
    this.mObstacle.position.x = scenesManager.width + pos;
    this.isCrashed = false;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}