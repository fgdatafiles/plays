//--------------------------------------------------------------------------------------------------------------------------------------------------------

var gg = gg || {};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.screen = {
	width:1366,
	height:768,
	center:{
		x:683,
		y:384
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.anchor = {
	topLeft:cc.p(0, gg.screen.height),
	top:cc.p(gg.screen.center.x, gg.screen.height),
	topRight:cc.p(gg.screen.width, gg.screen.height),
	left:cc.p(0, gg.screen.center.y),
	center:cc.p(gg.screen.center.x, gg.screen.center.y),
	right:cc.p(gg.screen.width, gg.screen.center.y),
	botLeft:cc.p(0, 0),
	bot:cc.p(gg.screen.center.x, 0),
	botRight:cc.p(gg.screen.width, 0)
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.highScore = "cn_cl_lizardHunt_highscore";

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.gameplay = {
	level:null,
	stage:null,
	spawnCounts:null,
	spawnCountIndex:null,
	goal:null,
	totalCounter:null,
	maxSpawn:3,
	maxGoal:45,
	day:{
		full:60,
		nearEnd:45,
		half:30
	},
	tint:{
		day:cc.color(255, 255, 255),
		night:cc.color(88, 88, 128)
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.character = {
	dialog:{
		start:[
			"clarence start",
			"sumo start",
			"jeff start"
		],
		collect:[
			"clarence collect",
			"sumo collect",
			"jeff collect"
		],
		warning:[
			"clarence warning",
			"sumo warning",
			"jeff warning"
		]
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.lizard = {
	type:{
		holezard:0,
		groundzard:1,
		wallzard:2
	},
	state:{
		showing:0,
		scanning:1,
		hiding:2
	}
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.puff = {
	pool:[]
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.cn_rank = {
    none:0,
    poor:1,
    ok:2,
    good:3,
    great:4,
    outstanding:5
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.onMobile = false;

//--------------------------------------------------------------------------------------------------------------------------------------------------------