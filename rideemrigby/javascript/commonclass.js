var commonclass = function() {
   
};

// make guardian
commonclass.prototype.makeguardian = function(){
	var g = fox.globalvar
	var it = new guardian()
	it.x = g.xmin
	it.y = -140
	g.m3.addChild(it)
};

// make unicorns
commonclass.prototype.makeunicorns = function(){
	var g = fox.globalvar
	var it = new unicorns()
	it.x = g.xmin - 200
	it.y = g.yland + 100
	g.m3.addChild(it)
}

// make muscle woman
commonclass.prototype.makemusclewoman = function(){
	var g = fox.globalvar
	var it = new musclewoman()
	it.x = g.xmin - 60
	it.y = g.yland + 50
	g.m3.addChild(it)
}

// make ducks
commonclass.prototype.makeducks = function(){
	var duckposx = [23, 14, -10, -12]
	var duckposy = [-28, -24, -34, -23]
	var g = fox.globalvar
	for (var i = 0; i < duckposx.length; i++){
		var it = new duck()
		it.x = g.xmin - fox.random(20)
		it.y = g.p.y - 20 + fox.random(40)
		it.ax = duckposx[i]
		it.ay = duckposy[i]
		g.m3.addChild(it)
	}
}

// pop bonus name
commonclass.prototype.popbonusnm = function(xx, yy, st){
	var g = fox.globalvar
	var it = new popbonusname(xx, yy, st)
	g.stat.addChild(it)
}

// pop score
commonclass.prototype.popskor = function(xx, yy, sk){
	var g = fox.globalvar
	var it = new popscore(xx, yy, sk)
	it.added();
	g.m4.addChild(it)
}

// tunnel hit
commonclass.prototype.tunnelhit = function(){
	var g = fox.globalvar
	g.hit = new Object()
	g.hit.damage = g.energyless
	!g.fall ? (soundPlay("zhit1")) : (undefined)
}

// make bonus
commonclass.prototype.makebonus = function(id, xx, yy){
	var g = fox.globalvar
	var it = new bonus(id)
	it.x = xx,
	it.y = yy,
	it.id = id 
	it.added(); 
	g.m2.addChild(it)
	// for special character bonus such as unicorns & musclewoman, stop making tunnels for a while
	if (id == 6 || id == 7 || id == 8){
		g.notunnel = 9
	}
}

// make keyboard
commonclass.prototype.makekeyboard = function(){
	var g = fox.globalvar
	var it = new keyboard()
	it.x = g.hscreenwid
	it.y = 90
	g.stat.addChild(it)
}