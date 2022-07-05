function movingbg() {
	PIXI.Container.call( this );
	this.init();
}

movingbg.prototype = new foxmovieclip();


movingbg.prototype.init = function() {
	this.bgarray = [];
	this.no = this.las = 0;
	
	this.a = new PIXI.Container()
	this.addChild(this.a);
}

movingbg.prototype.movebg = function(pic, xs) {
	// move along with m.x
	this.a.x -= xs;
	// space that must be filled
	var xx = -this.a.x + g.screenwid;
	// add right
	while (xx > this.las) {
		var name = pic[this.no];
		var it = addObj(pic[this.no], this.las, 0, 0.5*scG);
		this.a.addChild(it);
		this.bgarray.push(it);
		if(name == "bgcolor1a" || name == "bgcolor1b"){
			it.setReg0();
		} else if(name == "clouds1"){
			it.x += 301*scG;
			it.y += -134*scG;
		} else if(name == "clouds2"){
			it.x += 299*scG;
			it.y += -74*scG;
		} else if(name == "mountain1"){
			it.x += 279*scG;
			it.y += -72*scG;
		} else if(name == "mountain2"){
			it.x += 282*scG;
			it.y += -40*scG;
		}
		this.las += it.width - 1*scG;
		this.no++;
		if (this.no >= pic.length)
			this.no = 0;
	}
	// remove out of screen bg pic
	if (this.bgarray[0].x + this.bgarray[0].width < -this.a.x - 50*scG) {
		this.a.removeChild(this.bgarray[0]);
		this.bgarray.shift();
	}
}
