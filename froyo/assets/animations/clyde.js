(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"clyde_atlas_", frames: [[1472,0,385,232],[1042,0,428,212],[1743,395,85,85],[1042,408,217,61],[1042,529,158,55],[1042,471,178,56],[1856,302,80,164],[1635,234,114,151],[1859,148,114,152],[1859,0,138,146],[1261,408,73,164],[1751,234,103,159],[1635,387,106,151],[1339,234,294,181],[1042,214,295,192],[0,0,1040,903]]}
];


// symbols:



(lib.Bitmap26 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CloudArm1 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CloudArm2 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CloudArm3 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand1 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand2 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand3 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand4 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand5 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand6 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CloudHand7 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CloudHatL = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CloudHOHat = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CloudHOMouth11 = function() {
	this.initialize(ss["clyde_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CloudHat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CloudHOHat();
	this.instance.parent = this;
	this.instance.setTransform(-156,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-250,295,192);


(lib.CloudHands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CloudHand4();
	this.instance.parent = this;
	this.instance.setTransform(-122.05,-78);

	this.instance_1 = new lib.CloudHand3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100.05,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-86,138,154);


(lib.CloudBodyHO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-198,-391);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-184,-384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CloudHOMouth11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-506,-710);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-506,-710,1040,903);


(lib.CloudArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CloudArm1();
	this.instance.parent = this;
	this.instance.setTransform(19,-44.5,1,1,0,0,180);

	this.instance_1 = new lib.CloudArm3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,-15.95,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-44.5,217,84.6);


(lib.Cloudlette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap31();
	this.instance.parent = this;
	this.instance.setTransform(-42,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-43,85,85);


(lib.ClydeLipsync = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth
	this.instance = new lib.CloudBodyHO("single",2);
	this.instance.parent = this;
	this.instance.setTransform(-14.05,258.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:1},0).wait(6).to({startPosition:0},0).wait(12).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(7).to({startPosition:0},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520,-451.7,1040,903);


(lib.ClydeGameplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hand_R
	this.instance = new lib.CloudHands("single",0);
	this.instance.parent = this;
	this.instance.setTransform(397.75,-241.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:31.396,skewY:211.396,x:393.75,y:-134.05},13,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).wait(1).to({regX:-53,regY:-9,skewX:30.6263,skewY:210.6263,x:443.85,y:-118.2},0).wait(1).to({skewX:28.6892,skewY:208.6892,x:444.35,y:-128.5},0).wait(1).to({skewX:25.3738,skewY:205.3738,x:445.05,y:-146.2},0).wait(1).to({skewX:20.5487,skewY:200.5487,x:445.75,y:-172},0).wait(1).to({regX:0,regY:0,skewX:14.3503,skewY:194.3503,x:392.45,y:-209.7,startPosition:1},0).wait(1).to({regX:-53,regY:-9,skewX:6.8063,skewY:186.8063,x:445.45,y:-245.85},0).wait(1).to({skewX:-0.5353,skewY:179.4647,x:444.1,y:-285.3},0).wait(1).to({skewX:-6.786,skewY:173.214,x:442.3,y:-318.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:-11.5533,skewY:168.4467,x:440.4,y:-344.15},0).wait(1).to({skewX:-14.8401,skewY:165.1599,x:439,y:-361.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-16.8194,skewY:163.1806,x:438,y:-372.1},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:-17.6964,skewY:162.3036,x:389.85,y:-352.1},0).wait(23).to({startPosition:1},0).wait(1).to({regX:-53,regY:-9,scaleX:0.9999,scaleY:0.9999,skewX:-17.3157,skewY:162.6843,x:437.85,y:-373.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-16.307,skewY:163.693,x:438.7,y:-366.8},0).wait(1).to({skewX:-14.5494,skewY:165.4506,x:440.25,y:-354.3},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-12.0342,skewY:167.9658,x:392.4,y:-316.8,startPosition:0},0).wait(1).to({regX:-53,regY:-9,scaleX:1,scaleY:1,skewX:-8.8063,skewY:171.1937,x:444.7,y:-313.3},0).wait(1).to({skewX:-5.6798,skewY:174.3202,x:446.95,y:-290.9},0).wait(1).to({skewX:-3.1697,skewY:176.8303,x:448.65,y:-272.9},0).wait(1).to({skewX:-1.4386,skewY:178.5614,x:449.75,y:-260.45},0).wait(1).to({skewX:-0.4235,skewY:179.5765,x:450.4,y:-253.15},0).wait(1).to({regX:0,regY:0,skewX:0,skewY:180,x:397.75,y:-241.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-53,regY:-9,skewX:8.0472,skewY:188.0472,x:452.65,y:-234.65},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:28.8072,skewY:208.8072,x:402,y:-212.3},0).wait(1).to({regX:-53,regY:-9,skewX:14.6886,skewY:194.6886,x:455.1,y:-223.75},0).wait(1).to({regX:-0.1,regY:-0.4,scaleX:0.9999,scaleY:0.9999,skewX:-5.7691,skewY:174.2309,x:401.25,y:-252.3},0).wait(1).to({regX:-53,regY:-9,skewX:7.8756,skewY:187.8756,x:457.45,y:-252.8},0).wait(1).to({regX:-0.2,regY:-0.4,skewX:22.3116,skewY:202.3116,x:406.65,y:-250.75},0).wait(1).to({regX:-53,regY:-9,skewX:1.2948,skewY:181.2948,x:456.65,y:-286.65},0).wait(1).to({regX:-0.2,regY:-0.5,skewX:-15.0122,skewY:164.9878,x:401.35,y:-301.35},0).wait(1).to({regX:-53,regY:-9,scaleX:1,scaleY:1,skewX:-6.1149,skewY:173.8851,x:456.9,y:-306.75},0).wait(1).to({skewX:-0.827,skewY:179.173,x:460.3,y:-296.75},0).wait(1).to({regX:0,regY:0,skewX:1.4497,skewY:181.4497,x:408.75,y:-285.2},0).to({skewX:-1.5022,skewY:178.4978,x:386.5,y:-228.15},25,cjs.Ease.quadInOut).to({skewX:0,skewY:180,x:397.75,y:-241.3},21,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,skewX:59.9032,skewY:239.9032,x:382.2,y:-219.3},18,cjs.Ease.quadInOut).to({regY:-0.3,skewX:31.4746,skewY:211.4746,x:400.45,y:-136.2},28,cjs.Ease.quadInOut).to({regX:0,regY:0,skewX:0,skewY:180,x:397.75,y:-241.3},29,cjs.Ease.quadInOut).wait(1).to({skewX:10.4396,skewY:190.4396,x:395.5,y:-229.9,startPosition:1},0).to({skewX:0,skewY:180,x:227.45,y:-43.75},7,cjs.Ease.quadInOut).wait(1));

	// Arm_R
	this.instance_1 = new lib.CloudArm("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(215.2,-210.65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,skewX:17.647,skewY:197.647,x:210.75,y:-160.25},13,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({regY:0,skewX:-15.4836,skewY:164.5164,x:222.1,y:-273.85},12,cjs.Ease.quadInOut).wait(23).to({skewX:-15.4836},0).to({regX:0,skewX:0,skewY:180,x:215.2,y:-210.65},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({regX:-89.5,regY:-2.2,skewX:2.8816,skewY:182.8816,x:305.15,y:-209.5},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:10.3154,skewY:190.3154,x:216.95,y:-214.9},0).wait(1).to({regX:-89.5,regY:-2.2,skewX:6.5471,skewY:186.5471,x:306.6,y:-210.9},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:1.0868,skewY:181.0868,x:218.5,y:-225},0).wait(1).to({regX:-89.5,regY:-2.2,skewX:3.6917,skewY:183.6917,x:309.55,y:-228.95},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:6.4477,skewY:186.4477,x:221.95,y:-240.7},0).wait(1).to({regX:-89.5,regY:-2.2,skewX:-0.5556,skewY:179.4444,x:312.1,y:-249.9},0).wait(1).to({regX:-0.2,regY:-0.2,skewX:-5.9894,skewY:174.0106,x:223.4,y:-251.8},0).wait(1).to({regX:-89.5,regY:-2.2,skewX:-1.9687,skewY:178.0313,x:313.65,y:-260.85},0).wait(1).to({skewX:0.4209,skewY:180.4209,x:314.5,y:-259.5},0).wait(1).to({regX:0,regY:0,skewX:1.4497,skewY:181.4497,x:225.45,y:-259.25},0).to({regX:-0.1,skewX:-1.5022,skewY:178.4978,x:204.9,y:-192.8},25,cjs.Ease.quadInOut).to({regX:0,skewX:0,skewY:180,x:215.2,y:-210.65},21,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({skewX:30.6897,skewY:210.6897,x:209.5,y:-286.05},18,cjs.Ease.quadInOut).to({skewX:16.9888,skewY:196.9888,x:216.7,y:-160},28,cjs.Ease.quadInOut).to({skewX:0,skewY:180,x:215.2,y:-210.65},29,cjs.Ease.quadInOut).wait(1).to({scaleX:1.4337,rotation:180,skewY:0,x:220.4,startPosition:1},0).to({scaleX:1,rotation:253.7414,x:215.15},7,cjs.Ease.quadInOut).wait(1));

	// Hand_L
	this.instance_2 = new lib.CloudHands("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-402.45,-241.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.9999,scaleY:0.9999,rotation:-24.5079,x:-410.8,y:-166.6},13,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({rotation:-60.8503,x:-369.4,y:-130.6},12,cjs.Ease.quadInOut).wait(23).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:-402.45,y:-241.3},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({regX:-53,regY:-9,rotation:-5.8775,x:-456.35,y:-239.4},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-21.0403,x:-403.7,y:-222.05},0).wait(1).to({regX:-53,regY:-9,rotation:-9.0964,x:-454.6,y:-239.75},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:8.2101,x:-397,y:-264.45},0).wait(1).to({regX:-53,regY:-9,rotation:-6.9384,x:-451.6,y:-260.45},0).wait(1).to({regX:-0.2,regY:-0.4,rotation:-22.9653,x:-399.2,y:-251.45},0).wait(1).to({regX:-53,regY:-9,rotation:-3.6338,x:-445.6,y:-293.25},0).wait(1).to({regX:-0.4,regY:-0.5,rotation:11.3655,x:-387.15,y:-316.4},0).wait(1).to({regX:-53,regY:-9,scaleX:1,scaleY:1,rotation:6.0062,x:-440.7,y:-324.5},0).wait(1).to({rotation:2.821,x:-442.7,y:-318.15},0).wait(1).to({regX:0,regY:0,rotation:1.4497,x:-391.1,y:-305.5},0).to({rotation:-1.5022,x:-413.25,y:-207.25},25,cjs.Ease.quadInOut).to({rotation:0,x:-402.45,y:-241.3},21,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:-37.462,x:-405.65,y:-263.6},18,cjs.Ease.quadInOut).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-15.9682,x:-399.55,y:-143.2},28,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-402.45,y:-241.3},29,cjs.Ease.quadInOut).wait(1).to({x:-404.7,y:-218.55,startPosition:1},0).to({rotation:-23.2273,x:85.9,y:-59.55},7,cjs.Ease.quadInOut).wait(1));

	// Arm_L
	this.instance_3 = new lib.CloudArm("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-219.9,-210.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-0.1,rotation:-15.3029,x:-226.7,y:-185.3},13,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({regX:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-43.2037,x:-215.4,y:-233.1},12,cjs.Ease.quadInOut).wait(23).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-219.9,y:-210.65},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(1).to({regX:-89.5,regY:-2.2,rotation:-2.0537,x:-309.1,y:-210.85},0).wait(1).to({regX:0,regY:0,rotation:-7.3519,x:-218.65,y:-215},0).wait(1).to({regX:-89.5,regY:-2.2,rotation:-3.4839,x:-307.05,y:-216.65},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:2.1207,x:-216.05,y:-227.15},0).wait(1).to({regX:-89.5,regY:-2.2,rotation:-2.8622,x:-304.55,y:-234.4},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-8.1341,x:-214.25,y:-246.8},0).wait(1).to({regX:-89.5,regY:-2.2,scaleX:1,scaleY:1,rotation:0.6566,x:-301.5,y:-258.55},0).wait(1).to({regX:-0.3,regY:-0.2,rotation:7.4772,x:-210.7,y:-262.25},0).wait(1).to({regX:-89.5,regY:-2.2,rotation:4.2195,x:-298.85,y:-275.1},0).wait(1).to({rotation:2.2833,x:-298.7,y:-274.65},0).wait(1).to({regX:0,regY:0,rotation:1.4497,x:-209.45,y:-270.25},0).to({rotation:-1.5022,x:-230,y:-181.4},25,cjs.Ease.quadInOut).to({rotation:0,x:-219.9,y:-210.65},21,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:-20.761,x:-224.05,y:-299.55},18,cjs.Ease.quadInOut).to({rotation:-9.0144,x:-214.35,y:-141.45},28,cjs.Ease.quadInOut).to({rotation:0,x:-219.9,y:-210.65},29,cjs.Ease.quadInOut).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.2663,skewX:-167.3887,skewY:12.6119,x:-186.7,y:-193.7},0).wait(1).to({regX:-89.5,regY:-2.2,scaleX:1.1647,scaleY:0.9999,skewX:-169.2889,skewY:10.7117,x:-287.7,y:-211.45},0).wait(1).to({regX:0,regY:0,scaleX:0.8691,scaleY:1,skewX:-174.8187,skewY:5.1817,x:-179.5,y:-195.45},0).to({regX:0.1,regY:0.1,scaleX:0.5667,scaleY:0.9999,skewX:-194.0091,skewY:-14.0093,x:-177.25,y:-203.05},1).to({regX:0.2,regY:0.3,scaleX:0.5184,scaleY:0.9998,skewX:-296.9627,skewY:-116.9633,x:-178.8,y:-205.2},1).wait(1).to({regX:-89.5,regY:-2.2,scaleX:0.9368,scaleY:0.9999,skewX:-310.6305,skewY:-130.6306,x:-126.65,y:-136.7},0).wait(1).to({scaleX:1.177,skewX:-318.4761,skewY:-138.476,x:-105.15,y:-127.1},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.2663,skewX:-321.3904,skewY:-141.3902,x:-186.8,y:-193.85},0).wait(1));

	// Hat
	this.instance_4 = new lib.CloudHat("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.6,-564.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.1875,x:15.8,y:-527.55},13,cjs.Ease.quadInOut).wait(17).to({startPosition:0},0).to({rotation:-5.253,x:-22.95,y:-608.35},12,cjs.Ease.quadInOut).wait(23).to({startPosition:0},0).to({rotation:0,x:1.6,y:-564.6},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:1.4497,x:20.9,y:-618.55},11,cjs.Ease.quadInOut).to({rotation:-1.5022,x:-17.95,y:-541.1},25,cjs.Ease.quadInOut).to({rotation:0,x:1.6,y:-564.6},21,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:1.9763,x:10.3,y:-646},18,cjs.Ease.quadInOut).to({rotation:-2.5109,x:-10.1,y:-503.75},28,cjs.Ease.quadInOut).to({rotation:0,x:1.6,y:-564.6},29,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:0},7,cjs.Ease.quadInOut).wait(1));

	// LIPSYNC
	this.instance_5 = new lib.ClydeLipsync("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.55,-261.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:3.1875,x:10.9,y:-223.85,startPosition:13},13,cjs.Ease.quadInOut).wait(17).to({startPosition:30},0).to({rotation:-5.253,x:16.8,y:-307.25,startPosition:42},12,cjs.Ease.quadInOut).wait(23).to({startPosition:65},0).to({rotation:0,x:13.55,y:-261.1,startPosition:75},10,cjs.Ease.quadInOut).wait(1).to({startPosition:76},0).to({rotation:1.4497,x:25.2,y:-314.8,startPosition:87},11,cjs.Ease.quadInOut).to({rotation:-1.5022,x:2,y:-237.95,startPosition:112},25,cjs.Ease.quadInOut).to({rotation:0,x:13.55,y:-261.1,startPosition:133},21,cjs.Ease.quadInOut).wait(1).to({startPosition:134},0).to({rotation:1.9763,x:11.8,y:-342.25,startPosition:152},18,cjs.Ease.quadInOut).to({rotation:-2.5109,x:15.2,y:-201,startPosition:180},28,cjs.Ease.quadInOut).to({rotation:0,x:13.55,y:-261.1,startPosition:209},29,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({startPosition:7},7,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554.2,-901.2,1130.1,1173.8000000000002);


(lib.BlurCloudlette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Cloudlette("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.75,0.3,4.7684,4.2226,0,0,0,10.3,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.6,-335.1,670.9000000000001,670.9000000000001);


(lib.ClydeGameplaySFX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.BlurCloudlette("synched",61);
	this.instance.parent = this;
	this.instance.setTransform(309.45,-99.25,1,1,-142.6758,0,0,16.1,16);

	this.instance_1 = new lib.BlurCloudlette("synched",10);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-278.45,-199.15,0.9999,0.9999,0,-157.1043,22.8957);

	this.instance_2 = new lib.BlurCloudlette("synched",10);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-206.4,-324,0.9999,0.9999,157.1043);

	this.instance_3 = new lib.BlurCloudlette("synched",22);
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.05,-39.25,1,1,-142.6758,0,0,16.1,16);

	this.instance_4 = new lib.BlurCloudlette("synched",36);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14.8,-522.05,1,1,107.5695,0,0,16.1,16);

	this.instance_5 = new lib.BlurCloudlette("synched",31);
	this.instance_5.parent = this;
	this.instance_5.setTransform(259.8,-239.9,0.9999,0.9999,157.1043);

	this.instance_6 = new lib.BlurCloudlette("synched",6);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-231.1,-60.8,1,1,107.5695,0,0,16.1,16);

	this.instance_7 = new lib.BlurCloudlette("synched",9);
	this.instance_7.parent = this;
	this.instance_7.setTransform(230.9,-26.3,0.9999,0.9999,-22.8957);

	this.instance_8 = new lib.BlurCloudlette("synched",87);
	this.instance_8.parent = this;
	this.instance_8.setTransform(137.15,-410.5,0.9999,0.9999,0,22.8957,-157.1043);

	this.instance_9 = new lib.BlurCloudlette("synched",39);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-103.8,-512.45,1,1,-142.6758,0,0,16.1,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605.9,-859.8,1247.5,1173.1999999999998);


// stage content:
(lib.clyde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"clyde-1":0,"clyde-2":76,"clyde-3":134,scoop:210});

	// timeline functions:
	this.frame_75 = function() {
		this.dispatchEvent('complete');
		this.stop();
	}
	this.frame_133 = function() {
		this.dispatchEvent('complete');
		this.stop();
	}
	this.frame_209 = function() {
		this.dispatchEvent('complete');
		this.stop();
	}
	this.frame_217 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(58).call(this.frame_133).wait(76).call(this.frame_209).wait(8).call(this.frame_217).wait(1));

	// Clyde
	this.instance = new lib.ClydeGameplay("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(413.65,630.9,0.7,0.7,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(218));

	// SFX
	this.sfx = new lib.ClydeGameplaySFX();
	this.sfx.name = "sfx";
	this.sfx.parent = this;
	this.sfx.setTransform(413.65,624.1,0.7,0.7,0,0,0,0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.sfx).wait(218));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(426.9,422.5,395.80000000000007,417.1);
// library properties:
lib.properties = {
	id: '01AC12AD33104BC19934825114599C69',
	width: 850,
	height: 845,
	fps: 24,
	color: "#0033CC",
	opacity: 1.00,
	manifest: [
		{src:"images/clyde_atlas_.png", id:"clyde_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['01AC12AD33104BC19934825114599C69'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;