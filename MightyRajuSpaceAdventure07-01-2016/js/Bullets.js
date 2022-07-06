var Bullets = function(){
    this.mBulletspeed = 25;
    this.mBulletSpr = new PIXI.Sprite(PIXI.Texture.fromFrame('bullet_1'));
    this.mBulletSpr.visible = false;
    this.mBulletSpr.x = 100;
};

function updateBullet(){
    if(this.mBulletSpr.visible == false){
        return;
    }
    this.mBulletSpr.position.x += this.mBulletspeed;
    if((this.mBulletSpr.position.x + this.mBulletSpr.width)  > 640){
        resetBullets.call(this);
    }
}
function resetBullets(){
    this.mBulletSpr.position.x = 100;
    this.mBulletSpr.visible = false;
}
