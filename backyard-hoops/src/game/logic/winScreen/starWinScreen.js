StarWinScreen = function(parent, x, y){
    this.parentClass = parent;
    this.initialx = x;
    this.initialy = y;
    
    Phaser.Sprite.call(this, game, x, y, 'winScreenStar');
    this.anchor.setTo(0.5);
    J2DM_ApplySize(this, config.spr_winScreenStar);
    this.counter = game.rnd.between(0, 150);;
    this.deltaDistx = this.width * (Math.random() * 0.8 + 0.2);
    this.deltaDisty = this.width * (Math.random() * 0.8 + 0.2);
    this.velRotation = Math.random()*0.5 + 0.2;
    this.velCounter = Math.random()*0.4 + 0.1;
}

StarWinScreen.prototype = Object.create(Phaser.Sprite.prototype);
StarWinScreen.prototype.constructor = StarWinScreen;

StarWinScreen.prototype.update = function(){
    this.angle += this.velRotation;
    this.counter += this.velCounter;
    if(this.counter>160){
        this.counter = 0;
    }
    //this.x = this.initialx + Math.sin(this.counter) * this.deltaDistx;
    //this.y = this.initialy + Math.tan(Math.sin(this.counter)) * this.deltaDistx;
    
    var t = 2.25 * this.counter * Math.PI/180;
    this.x = this.initialx + this.deltaDistx * Math.sin(3*t);
    this.y = this.initialy - this.deltaDisty * Math.cos(t);
}