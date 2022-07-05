
var KeyInputs=function()
{
    var Left_texture=PIXI.Texture.fromFrame('Left');
    var Up_texture=PIXI.Texture.fromFrame('Up');
    var Right_texture=PIXI.Texture.fromFrame('Right');
    var Down_texture=PIXI.Texture.fromFrame('Down');
    var Bomb_texture=PIXI.Texture.fromFrame('Bomb');
    var Ladoo_texture=PIXI.Texture.fromFrame('Ladoo');
    var RandomGeneratedKeys = getRandom(1,10);
    this.KeyValue;
    this.isPressed=false;
    this.isCorrect=false;
    this.isWrong=false;
    this.keyMovementSpeed=2;
    this.isCollided = false;
    var ReturnSprite;
    switch (RandomGeneratedKeys)
    {
        case 1:
            ReturnSprite=Left_texture;
            this.KeyValue=1;
            break;
        case 2:
            ReturnSprite=Up_texture;
            this.KeyValue=2;
            break;
        case 3:
            ReturnSprite=Right_texture;
            this.KeyValue=3;
            break;
        case 4:
            ReturnSprite=Down_texture;
            this.KeyValue=4;
            break;
        case 5:
            ReturnSprite=Left_texture;
            this.KeyValue=1;
            break;
        case 6:
            ReturnSprite=Up_texture;
            this.KeyValue=2;
            break;
        case 7:
            ReturnSprite=Right_texture;
            this.KeyValue=3;
            break;
        case 8:

            ReturnSprite=Down_texture;
            this.KeyValue=4;
            break;
        case 9:
            ReturnSprite=Bomb_texture;
            this.KeyValue=5;
            break;
        case 10:
            ReturnSprite=Ladoo_texture;
            this.KeyValue=6;
            break;
    }

    var pTex = ReturnSprite;
    this.keyElement = new PIXI.Sprite(pTex);
    this.keyElement.position.x = -50;
    this.keyElement.position.y = 50;
    this.keyElement.scale.set(0.7);

};
function KeyUpdate()
{
    this.keyElement.position.x += this.keyMovementSpeed;
    if(this.isPressed)
    {
        //this.BombMeter+=10;
    }
    if(this.isCorrect)
    {
        this.keyElement.tint=0x00FF00;
    }
    else if(this.isWrong)
        this.keyElement.tint=0xFF0000;


}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

