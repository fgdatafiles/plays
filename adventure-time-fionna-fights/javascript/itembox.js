function itembox(prnt) {
	PIXI.Container.call( this );
	this.init(prnt);
}

itembox.prototype = new foxmovieclip();


itembox.prototype.init = function(prnt) {
	this.prnt = prnt;
	this.xx = 0;
	this.id = 0;
	this.itempaid = 0;
	this.itemcost = 0;
	this.jska = 0;
	this.jdx = 0;
	this.jdv = 0;
	this.jdvstep = 0;
	
	this.a = new PIXI.Container();
	this.a.y = -35*scG;
	this.addChild(this.a);
	
	this.a.b2 = addObj("shopbox2",0,0,0.5*scG)
	this.a.addChild(this.a.b2);
	this.a.b1 = addObj("shopbox",0,0,0.5*scG)
	this.a.addChild(this.a.b1);
	this.a.cost = addText("0", 20*scG, "#D95E00");
	this.a.cost.y = 27*scG;
	this.a.addChild(this.a.cost);
	var _y = 66.8*scG;
	this.a.bead1 = addObj("bead", -21*scG, _y);
	this.a.addChild(this.a.bead1);
	this.a.bead2 = addObj("bead", 1*scG, _y);
	this.a.addChild(this.a.bead2);
	this.a.bead3 = addObj("bead", 23*scG, _y);
	this.a.addChild(this.a.bead3);
	
	var tfNama = addText("", 28*scG, "#CC0000");
	tfNama.x = 0;
	tfNama.y = 50*scG;
	this.addChild(tfNama);
	this.nama = tfNama;
	var tfDescription = addText("", 18*scG, "#000000");
	tfDescription.x = 0;
	tfDescription.y = 86*scG;
	this.addChild(tfDescription);
	this.description = tfDescription;
	
	arClips.push(this);
}

itembox.prototype.added = function() {
	if (this.itempaid > 0) {
		this.a.b2.visible = false;
		if (this.itempaid == 1) {
			this.a.bead2.visible = this.a.bead3.visible = false;
		} else if (this.itempaid == 2) {
			this.a.bead3.visible = false;
		}
	} else {
		this.a.b1.visible = this.a.bead1.visible = this.a.bead2.visible = this.a.bead3.visible = false;
	}
	if (this.itemcost == 99999999) {
		this.a.cost.setText("MAX");
	} else {
		this.a.cost.setText(this.itemcost);
	}
	var pic1;
	if (g.finn && g.itemcategory == 3 && this.id == 3) {
		pic1 = addObj(this.itemtype + "b", 0, -10*scG, 0.5*scG);
	} else {
		pic1 = addObj(this.itemtype, 0, -10*scG, 0.5*scG);
	}
	this.a.addChild(pic1);
	if (g.itemcategory == 1) {
		// rotate swords
		pic1.rotation = fox.rad(-45);
	}
	this.nama.setText(getText(this.itemname));
	this.description.setText(getText("desc_"+this.itemname));
	this.scale.x = this.scale.y = 0.7;
	// jiggle vars
	this.jska = 1;
	this.jdx = 0;
	this.jdv = 0.9;
	this.jdvstep = 0.6;
}

// loop
itembox.prototype.loop = function() {
	if (Math.abs(g.itemcenter - (this.prnt.x + this.x)) < 0.5 * g.itemspacing) {
		// selected
		if (g.selecteditem != this.id) {
			this.alpha = 1;
			this.nama.visible = this.description.visible = true;
			g.selecteditem = this.id;
			g.selecteditemcost = this.itemcost;
			this.a.scale.x = this.a.scale.y = 1.6;
			this.scale.x = this.scale.y = 1;
		}
		if (this.itemcost == 99999999) {
			g.canbuy = 9;
		} else {
			g.canbuy = (this.itemcost > g.totalgem) ? 0 : 1;
		}
		// jiggle
		this.jdx = this.jdx * this.jdvstep + (this.jska - this.a.scale.x) * this.jdv;
		this.a.scale.x = Math.max(0.1, this.a.scale.x + this.jdx);
		this.a.scale.y = this.a.scale.x;
	} else {
		// not selected
		this.scale.x = this.scale.y = 0.7;
		this.a.scale.y = this.a.scale.x = 1;
		this.alpha = 0.4;
		this.nama.visible = this.description.visible = false;
		if (g.selecteditem == this.id) {
			g.selecteditem = -1;
		}
	}
}
