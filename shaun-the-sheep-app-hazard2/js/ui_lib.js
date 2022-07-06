(function (lib, img, cjs, ss, strings) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/bottomgradient.png", id:"bottomgradient"},
		{src:"images/guibrick.png", id:"guibrick"},
		{src:"images/guihelp.png", id:"guihelp"},
		{src:"images/guihome.png", id:"guihome"},
		{src:"images/guilevels.png", id:"guilevels"},
		{src:"images/guinext.png", id:"guinext"},
		{src:"images/guipause.png", id:"guipause"},
		{src:"images/guiquit.png", id:"guiquit"},
		{src:"images/guirefresh.png", id:"guirefresh"},
		{src:"images/guirestart.png", id:"guirestart"},
		{src:"images/guisoundoff.png", id:"guisoundoff"},
		{src:"images/guisoundon.png", id:"guisoundon"},
		{src:"images/instructbuild.png", id:"instructbuild"},
		{src:"images/instructstop.png", id:"instructstop"},
		{src:"images/instructuse.png", id:"instructuse"},
		{src:"images/levelselectbtn1.png", id:"levelselectbtn1"},
		{src:"images/levelselectbtn2.png", id:"levelselectbtn2"},
		{src:"images/levelselectbtn3.png", id:"levelselectbtn3"},
		{src:"images/levelselectbtn4.png", id:"levelselectbtn4"},
		{src:"images/levelselectbtn5.png", id:"levelselectbtn5"},
		{src:"images/levelselectlock1.png", id:"levelselectlock1"},
		{src:"images/levelselectlock2.png", id:"levelselectlock2"},
		{src:"images/levelselectlock3.png", id:"levelselectlock3"},
		{src:"images/levelselectlock4.png", id:"levelselectlock4"},
		{src:"images/levelselectlock5.png", id:"levelselectlock5"},
		{src:"images/orangebg.jpg", id:"orangebg"},
		{src:"images/pinkbg.jpg", id:"pinkbg"},
		{src:"images/shaunahh.png", id:"shaunahh"},
		{src:"images/shaunhappy.png", id:"shaunhappy"},
		{src:"images/shaunsad.png", id:"shaunsad"},
		{src:"images/shaunturn.png", id:"shaunturn"},
		{src:"images/socialfb.png", id:"socialfb"},
		{src:"images/socialgoogle.png", id:"socialgoogle"},
		{src:"images/socialpin.png", id:"socialpin"},
		{src:"images/socialtwit.png", id:"socialtwit"},
		{src:"images/staroff.png", id:"staroff"},
		{src:"images/staron.png", id:"staron"},
		{src:"images/startbgfarm.jpg", id:"startbgfarm"},
		{src:"images/startchainbox.png", id:"startchainbox"},
		{src:"images/startshaun.png", id:"startshaun"},
		{src:"images/startvignette.png", id:"startvignette"},
		{src:"images/turnYourDeviceText.png", id:"turnYourDeviceText"}
	]
};

console.log(window.location.hash);
if (window.location.hash == "#es") { // spanish
	lib.properties.manifest.push( {src:"images/apphazardlogo_es.png", id:"apphazardlogo"} );
	lib.properties.manifest.push( {src:"images/startplay_es.png", id:"startplay"} );
	lib.properties.manifest.push( {src:"images/site_link_es.png", id:"site_link"} );
	lib.properties.manifest.push( {src:"images/stslogo_es.png",   id:"stslogo"} );
}
else if (window.location.hash == "#ar") {
	lib.properties.manifest.push( {src:"images/apphazardlogo_ar.png", id:"apphazardlogo"} );
	lib.properties.manifest.push( {src:"images/startplay_ar.png", id:"startplay"} );
	lib.properties.manifest.push( {src:"images/site_link_en.png", id:"site_link"} );
	lib.properties.manifest.push( {src:"images/stslogo_en.png",   id:"stslogo"} );
}
else { // english
	lib.properties.manifest.push( {src:"images/apphazardlogo_en.png", id:"apphazardlogo"} );
	lib.properties.manifest.push( {src:"images/startplay_en.png", id:"startplay"} );
	lib.properties.manifest.push( {src:"images/site_link_en.png", id:"site_link"} );
	lib.properties.manifest.push( {src:"images/stslogo_en.png",   id:"stslogo"} );
}


// symbols:



(lib.apphazardlogo = function() {
	this.initialize(img.apphazardlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,221);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,37);


(lib.bottomgradient = function() {
	this.initialize(img.bottomgradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,326);


(lib.guibrick = function() {
	this.initialize(img.guibrick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,108);


(lib.guihelp = function() {
	this.initialize(img.guihelp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,83);


(lib.guihome = function() {
	this.initialize(img.guihome);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,49);


(lib.guilevels = function() {
	this.initialize(img.guilevels);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,92);


(lib.guinext = function() {
	this.initialize(img.guinext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,90);


(lib.guipause = function() {
	this.initialize(img.guipause);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,49);


(lib.guiquit = function() {
	this.initialize(img.guiquit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,67);


(lib.guirefresh = function() {
	this.initialize(img.guirefresh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,49);


(lib.guirestart = function() {
	this.initialize(img.guirestart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,82);


(lib.guisoundoff = function() {
	this.initialize(img.guisoundoff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,49);


(lib.guisoundon = function() {
	this.initialize(img.guisoundon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,49);


(lib.instructbuild = function() {
	this.initialize(img.instructbuild);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,351);


(lib.instructstop = function() {
	this.initialize(img.instructstop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,351);


(lib.instructuse = function() {
	this.initialize(img.instructuse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,351);


(lib.levelselectbtn1 = function() {
	this.initialize(img.levelselectbtn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.levelselectbtn2 = function() {
	this.initialize(img.levelselectbtn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,131);


(lib.levelselectbtn3 = function() {
	this.initialize(img.levelselectbtn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,130);


(lib.levelselectbtn4 = function() {
	this.initialize(img.levelselectbtn4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,132);


(lib.levelselectbtn5 = function() {
	this.initialize(img.levelselectbtn5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,132);


(lib.levelselectlock1 = function() {
	this.initialize(img.levelselectlock1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.levelselectlock2 = function() {
	this.initialize(img.levelselectlock2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,142);


(lib.levelselectlock3 = function() {
	this.initialize(img.levelselectlock3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,130);


(lib.levelselectlock4 = function() {
	this.initialize(img.levelselectlock4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,132);


(lib.levelselectlock5 = function() {
	this.initialize(img.levelselectlock5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,132);


(lib.orangebg = function() {
	this.initialize(img.orangebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.pinkbg = function() {
	this.initialize(img.pinkbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.shaunahh = function() {
	this.initialize(img.shaunahh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,937,970);


(lib.shaunhappy = function() {
	this.initialize(img.shaunhappy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,938);


(lib.shaunsad = function() {
	this.initialize(img.shaunsad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,715,1052);


(lib.shaunturn = function() {
	this.initialize(img.shaunturn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,383);


(lib.site_link = function() {
	this.initialize(img.site_link);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,37);


(lib.socialfb = function() {
	this.initialize(img.socialfb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.socialgoogle = function() {
	this.initialize(img.socialgoogle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.socialpin = function() {
	this.initialize(img.socialpin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,64);


(lib.socialtwit = function() {
	this.initialize(img.socialtwit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,71);


(lib.staroff = function() {
	this.initialize(img.staroff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,119);


(lib.staron = function() {
	this.initialize(img.staron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,125);


(lib.startbgfarm = function() {
	this.initialize(img.startbgfarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.startchainbox = function() {
	this.initialize(img.startchainbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,559);


(lib.startplay = function() {
	this.initialize(img.startplay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,56);


(lib.startshaun = function() {
	this.initialize(img.startshaun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,861,546);


(lib.startvignette = function() {
	this.initialize(img.startvignette);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.stslogo = function() {
	this.initialize(img.stslogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,89);


(lib.turnYourDeviceText = function() {
	this.initialize(img.turnYourDeviceText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,249);


(lib.WinLevelTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.levelComplete.title, "35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 452;
	this.text.setTransform(445.6,12,1.971,1.971);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,12,899,83.8);
p.frameBounds = [rect];


(lib.winLevelScoreWord = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.levelComplete.scoreText, "38px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 40;
	this.text.lineWidth = (window.location.hash == "#ar")?355:155;
	this.text.setTransform(5,10,0.869,1.083);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
if (window.location.hash == "#ar") {
	p.nominalBounds = rect = new cjs.Rectangle(5,10,238.1,49.6);
	p.frameBounds = [rect];
} else {
	p.nominalBounds = rect = new cjs.Rectangle(5,10,138.1,49.6);
	p.frameBounds = [rect];
}


(lib.winLevelScoreVal = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("10000", "69px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 71;
	this.text.lineWidth = 204;
	this.text.setTransform(260.9,0,1.286,1.083);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1,0,267.2,96.2);
p.frameBounds = [rect];


(lib.useText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.instructions.use, "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 212;
	this.text.setTransform(106,15.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,15.2,216,48);
p.frameBounds = [rect];


(lib.twitterBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.socialtwit();
	this.instance.setTransform(-27.5,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-29,69,71);
p.frameBounds = [rect];


(lib.turndevicescreen = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.turnYourDeviceText();
	this.instance.setTransform(250.2,29);

	this.instance_1 = new lib.shaunturn();
	this.instance_1.setTransform(272,216.9);

	// Layer 1
	this.instance_2 = new lib.startvignette();

	this.instance_3 = new lib.orangebg();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.tryAgainText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.fail.tryAgain, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 162;
	this.text.setTransform(159.6,15,1.971,1.971);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,15,327.1,130.1);
p.frameBounds = [rect];


(lib.tryAgainBtnText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.fail.tryAgain, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 281;
	this.text.setTransform(281.2,16.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,16.1,285.2,37);
p.frameBounds = [rect];


(lib.totalStars = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("24/60", "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 135;
	this.text.setTransform(100.2,0,1.48,1.48);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,206.4,84.2);
p.frameBounds = [rect];


(lib.stopText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.instructions.stop, "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 219;
	this.text.setTransform(109.5,15.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,15.2,223,48);
p.frameBounds = [rect];


(lib.starsCollected = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("24/60", "35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 37;
	this.text.lineWidth = 128;
	this.text.setTransform(128,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,132,47);
p.frameBounds = [rect];


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.staroff();
	this.instance.setTransform(-5.8,-21.6);

	this.instance_1 = new lib.staron();
	this.instance_1.setTransform(-5.5,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.8,-21.6,124,119);
p.frameBounds = [rect, new cjs.Rectangle(-5.5,-23,129,125)];


(lib.siteLink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.site_link();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,345,37);
p.frameBounds = [rect];


(lib.shaunUrl = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,10,355,37);
p.frameBounds = [rect];


(lib.shaunsad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shaunsad();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,715,1052);
p.frameBounds = [rect];


(lib.shaunahh_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shaunahh();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,937,970);
p.frameBounds = [rect];


(lib.shaunhappy_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.restartLevelText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.pauseScreen.restartBtn, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 375;
	this.text.setTransform(375,15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,15,379,37);
p.frameBounds = [rect];


(lib.resetBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guirefresh();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,49);
p.frameBounds = [rect];


(lib.quitButtinText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.pauseScreen.quitBtn, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 308;
	this.text.setTransform(307.7,12);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,12,311.7,37.9);
p.frameBounds = [rect];


(lib.playBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startplay();
	this.instance.setTransform(-70.5,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-27.5,191,56);
p.frameBounds = [rect];


(lib.playAgain = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.gameComplete.playAgain, "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 42;
	this.text.lineWidth = 363;
	this.text.setTransform(363.3,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,367.3,48);
p.frameBounds = [rect];


(lib.pinterestBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.socialpin();
	this.instance.setTransform(-27.5,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-29,69,64);
p.frameBounds = [rect];


(lib.pinkbg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pinkbg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.pausedTitle = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.pauseScreen.title, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 453;
	this.text.setTransform(446.2,0,1.971,1.971);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900.2,84.1);
p.frameBounds = [rect];


(lib.pauseBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guipause();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,49);
p.frameBounds = [rect];


(lib.muteBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.guisoundon();

	this.instance_1 = new lib.guisoundoff();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,49);
p.frameBounds = [rect, rect];


(lib.debug_gotoWinGameScreenBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guipause();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,49);
p.frameBounds = [rect];



(lib.lumLeftText = function() {
	this.initialize();

	// Layer 1
	this.numLeft = new cjs.Text("4", "30px 'Arial'", "#FFFFFF");
	this.numLeft.name = "numLeft";
	this.numLeft.textAlign = "center";
	this.numLeft.lineHeight = 32;
	this.numLeft.lineWidth = 76;
	this.numLeft.setTransform(38,0);

	this.addChild(this.numLeft);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80,44.5);
p.frameBounds = [rect];


(lib.levelSelectText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "75px 'Arial'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 100;
	this.text.setTransform(50,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,104,96.2);
p.frameBounds = [rect];


(lib.levelnodebackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.levelselectbtn1();

	this.instance_1 = new lib.levelselectbtn2();
	this.instance_1.setTransform(-0.6,-2.7);

	this.instance_2 = new lib.levelselectbtn3();
	this.instance_2.setTransform(-7.8,0.6);

	this.instance_3 = new lib.levelselectbtn4();
	this.instance_3.setTransform(-9.2,-7.1);

	this.instance_4 = new lib.levelselectbtn5();
	this.instance_4.setTransform(-10.5,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,138,126);
p.frameBounds = [rect, new cjs.Rectangle(-0.6,-2.7,128,131), new cjs.Rectangle(-7.8,0.6,137,130), new cjs.Rectangle(-9.2,-7.1,135,132), new cjs.Rectangle(-10.5,-5.8,140,132)];


(lib.levellocked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.levelselectlock1();

	this.instance_1 = new lib.levelselectlock2();
	this.instance_1.setTransform(9,-8.9);

	this.instance_2 = new lib.levelselectlock3();
	this.instance_2.setTransform(1.4,-1.6);

	this.instance_3 = new lib.levelselectlock4();
	this.instance_3.setTransform(3.7,-2.5);

	this.instance_4 = new lib.levelselectlock5();
	this.instance_4.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,138,126);
p.frameBounds = [rect, new cjs.Rectangle(9,-8.9,127,142), new cjs.Rectangle(1.4,-1.6,137,130), new cjs.Rectangle(3.7,-2.5,135,132), new cjs.Rectangle(1.2,0,140,132)];


(lib.level_select_title = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.levelSelect.title, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 453;
	this.text.setTransform(446.6,-1,1.971,1.971);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-1,901,73);
p.frameBounds = [rect];


(lib.helpButtonText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.pauseScreen.helpBtn, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 373;
	this.text.setTransform(372.6,13);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,13,376.6,37.9);
p.frameBounds = [rect];


(lib.guisound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.guisoundon();

	this.instance_1 = new lib.guisoundoff();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,49);
p.frameBounds = [rect, rect];


(lib.guirestart_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guirestart();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,82);
p.frameBounds = [rect];


(lib.guiquit_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guiquit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,65,67);
p.frameBounds = [rect];


(lib.guinext_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guinext();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,90);
p.frameBounds = [rect];


(lib.guilevels_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guilevels();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,91,92);
p.frameBounds = [rect];


(lib.guihome_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guihome();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,53,49);
p.frameBounds = [rect];


(lib.guihelp_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guihelp();
	this.instance.setTransform(-2.1,-4.5,1.08,1.08);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-2.1,-4.5,57.2,89.6);
p.frameBounds = [rect];


(lib.googlePlusBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.socialgoogle();
	this.instance.setTransform(-27.5,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-29,66,60);
p.frameBounds = [rect];


(lib.facebookBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.socialfb();
	this.instance.setTransform(-27.5,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-29,75,75);
p.frameBounds = [rect];


(lib.continueText = function() {
	this.initialize();

	// Layer 1
	console.log(strings.instructions.continueBtn);
	this.text = new cjs.Text(strings.instructions.continueBtn, "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 376;
	this.text.setTransform(377,14);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1,14,380,37);
p.frameBounds = [rect];

(lib.continueTextSmaller = function() {
	this.initialize();

	var continueTextSz = 30;
	if (window.location.hash == "#es") {
		continueTextSz = 20;
	}

	// Layer 1
	console.log(strings.instructions.continueBtn);
	this.text = new cjs.Text(strings.instructions.continueBtn, continueTextSz+"px 'Arial'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 376;
	this.text.setTransform(377,14);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1,14,380,37);
p.frameBounds = [rect];



(lib.chainbox = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startchainbox();
	this.instance.setTransform(487,-12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(487,-12,520,559);
p.frameBounds = [rect];


(lib.buildText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(strings.instructions.build, "40px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 231;
	this.text.setTransform(115.5,14.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,14.1,235,48);
p.frameBounds = [rect];


(lib.blackout = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTAu4MAAAhdvMCMnAAAMAAABdvg");
	this.shape.setTransform(450,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.bgorange = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.orangebg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.backToLevelsText = function() {
	this.initialize();

	// Layer 1
	this.levelsText = new cjs.Text(strings.levelComplete.levelsBtn, "30px 'Arial'", "#FFFFFF");
	this.levelsText.name = "levelsText";
	this.levelsText.textAlign = "right";
	this.levelsText.lineHeight = 32;
	this.levelsText.lineWidth = 221;
	this.levelsText.setTransform(222.3,16.1);

	this.addChild(this.levelsText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(1.2,16.1,225.2,37);
p.frameBounds = [rect];


(lib.tryAgainButton = function() {
	this.initialize();

	// Layer 1
	this.tryAgain = new lib.tryAgainBtnText();
	this.tryAgain.setTransform(-236.6,-17.6,1,1,0,0,0,92.5,18.5);

	this.instance = new lib.guirestart_1();
	this.instance.setTransform(2.3,-0.1,0.859,0.859,0,0,0,42.5,41);

	this.addChild(this.instance,this.tryAgain);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-329.1,-35.3,368,70.4);
p.frameBounds = [rect];


(lib.socialbtns = function() {
	this.initialize();

	// Layer 1
	this.pinterestBtn = new lib.pinterestBtn();
	this.pinterestBtn.setTransform(270.5,30);

	this.googlePlusBtn = new lib.googlePlusBtn();
	this.googlePlusBtn.setTransform(191,29);

	this.twitterBtn = new lib.twitterBtn();
	this.twitterBtn.setTransform(102.5,18);

	this.facebookBtn = new lib.facebookBtn();
	this.facebookBtn.setTransform(32.5,18);

	this.addChild(this.facebookBtn,this.twitterBtn,this.googlePlusBtn,this.pinterestBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(5,-11,307,76);
p.frameBounds = [rect];


(lib.shaunFailAnimation = function() {
	this.initialize();

	// Layer 1
	this.tryText = new lib.tryAgainText();
	this.tryText.setTransform(-119,-314.1);

	this.instance = new lib.shaunsad_1();
	this.instance.setTransform(55,-20.5,0.398,0.398,0,0,0,357.5,526);

	this.addChild(this.instance,this.tryText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-119,-299.1,327.1,488.2);
p.frameBounds = [rect];


(lib.restartButton = function() {
	this.initialize();

	// Layer 1
	this.restartText = new lib.restartLevelText();
	this.restartText.setTransform(-421.9,-31.6);

	this.instance = new lib.guirestart_1();
	this.instance.setTransform(6,-1.5,0.929,0.929,0,0,0,42.5,41);

	this.addChild(this.instance,this.restartText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-421.9,-39.6,467.5,76.2);
p.frameBounds = [rect];


(lib.quitButton = function() {
	this.initialize();

	// Layer 1
	this.quitText = new lib.quitButtinText();
	this.quitText.setTransform(-353,-28.6);

	this.instance = new lib.guiquit_1();
	this.instance.setTransform(1,0.5,1,1,0,0,0,32.5,33.5);

	this.addChild(this.instance,this.quitText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-353,-33,386.5,67);
p.frameBounds = [rect];


(lib.playAgainButton = function() {
	this.initialize();

	// Layer 1
	this.continueText = new lib.playAgain();
	this.continueText.setTransform(-252.5,-8,1,1,0,0,0,183.6,24);

	this.instance = new lib.guinext_1();
	this.instance.setTransform(0.5,0.2,1,1,0,0,0,50,45);

	this.addChild(this.instance,this.continueText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-436.1,-44.8,486.7,90);
p.frameBounds = [rect];


(lib.pausedBG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startvignette();

	this.instance_1 = new lib.bgorange();
	this.instance_1.setTransform(450,300,1,1,0,0,0,450,300);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.pageGui = function() {
	this.initialize();

	// Layer 1
	this.muteBtn = new lib.guisound();
	this.muteBtn.setTransform(856,41.5,1,1,0,0,0,26.5,24.5);

	this.homeBtn = new lib.guihome_1();
	this.homeBtn.setTransform(47,40.5,1,1,0,0,0,26.5,24.5);

	this.addChild(this.homeBtn,this.muteBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(20.5,16,862,50);
p.frameBounds = [rect];


(lib.levelSelectButton = function() {
	this.initialize();

	// Layer 1
	this.levelsText = new lib.backToLevelsText();
	this.levelsText.setTransform(-271.3,-33.3);

	this.instance = new lib.guilevels_1();
	this.instance.setTransform(-0.8,-0.7,0.804,0.804,0,0,0,45.5,46);

	this.addChild(this.instance,this.levelsText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-270.2,-37.7,306,74);
p.frameBounds = [rect];


(lib.levelNode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.levelNumber = new lib.levelSelectText();
	this.levelNumber.setTransform(-40.9,-61);

	this.bg = new lib.levelnodebackground();
	this.bg.setTransform(14.5,-6.7,1.232,1.232,0,0,0,69,63);

	this.star3 = new lib.star();
	this.star3.setTransform(43.2,89.6,0.403,0.403);

	this.star2 = new lib.star();
	this.star2.setTransform(-9.1,90.2,0.403,0.403);

	this.star1 = new lib.star();
	this.star1.setTransform(-63,90,0.403,0.403,0,0,0,0,-0.1);

	this.text = new cjs.Text("1", "55px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 98;
	this.text.setTransform(1.2,-32.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlplxILbAAIAALjIrjAAIAArO");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AlwFxIAArNIAHgUILaAAIAALhg");

	this.lockedBG = new lib.levellocked();
	this.lockedBG.setTransform(11.1,-5.6,1.232,1.232,0,0,0,69,63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AAAAAIAAAB");
	this.shape_2.setTransform(37,-36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AltAAIABAAILaAAIAAAAg");
	this.shape_3.setTransform(0.3,-36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.star1},{t:this.star2},{t:this.star3},{t:this.bg},{t:this.levelNumber}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.lockedBG},{t:this.star1},{t:this.star2},{t:this.star3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-84.3,170,213.8);
p.frameBounds = [rect, new cjs.Rectangle(-73.9,-83.2,170,212.7)];


(lib.LevelFailGFX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.anim = new lib.shaunFailAnimation();
	this.anim.setTransform(1072.2,409.1);

	this.timeline.addTween(cjs.Tween.get(this.anim).to({x:642.7},7,cjs.Ease.get(1)).to({x:412},15,cjs.Ease.get(1)).wait(30).to({x:135.2},17).to({x:-227.7},5,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance = new lib.blackout();
	this.instance.setTransform(450,300,1,1,0,0,0,450,300);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.59},4).wait(67).to({alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1280.3,600);
p.frameBounds = [rect, new cjs.Rectangle(0,0,1166.3,600), new cjs.Rectangle(0,0,1069.9,600), new cjs.Rectangle(0,0,991,600), new cjs.Rectangle(0,0,929.6,600), rect=new cjs.Rectangle(0,0,900,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-41.9,0,941.9,600), new cjs.Rectangle(-114.5,0,1014.5,600), new cjs.Rectangle(-216.1,0,1116.2,600), new cjs.Rectangle(-346.8,0,1246.8,600)];


(lib.instruct3 = function() {
	this.initialize();

	// Layer 1
	this.useTxt = new lib.useText();
	this.useTxt.setTransform(251,-87.1,1,1,0,0,0,108,39.5);

	this.instance = new lib.instructuse();
	this.instance.setTransform(98.5,-66);

	this.addChild(this.instance,this.useTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(98.5,-111.4,289,396.4);
p.frameBounds = [rect];


(lib.instruct2 = function() {
	this.initialize();

	// Layer 1
	this.stopTxt = new lib.stopText();
	this.stopTxt.setTransform(174.5,-84.7,1,1,0,0,0,111.5,41.5);

	this.instance = new lib.instructstop();
	this.instance.setTransform(24.5,-67);

	this.addChild(this.instance,this.stopTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(24.5,-111,289,395);
p.frameBounds = [rect];


(lib.instruct1 = function() {
	this.initialize();

	// Layer 1
	this.build = new lib.buildText();
	this.build.setTransform(156.5,-65.8,1,1,0,0,0,117.5,38.8);

	this.instance = new lib.instructbuild();
	this.instance.setTransform(11.5,-47);

	this.addChild(this.instance,this.build);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-90.5,289,394.5);
p.frameBounds = [rect];


(lib.helpButton = function() {
	this.initialize();

	// Layer 1
	this.helpText = new lib.helpButtonText();
	this.helpText.setTransform(-414.9,-31.6);

	this.instance = new lib.guihelp_1();
	this.instance.setTransform(5,-0.5,0.909,0.909,0,0,0,28,44);

	this.addChild(this.instance,this.helpText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-414.9,-44.6,444.6,81.4);
p.frameBounds = [rect];


(lib.continueButton = function() {
	this.initialize();

	// Layer 1
	this.continueText = new lib.continueText();
	this.continueText.setTransform(-425.5,-32.6);

	this.instance = new lib.guinext_1();
	this.instance.setTransform(4.1,0.9,0.84,0.84,0,0,0,50,45);

	this.addChild(this.instance,this.continueText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-424.5,-36.9,470.7,75.6);
p.frameBounds = [rect];

(lib.continueButtonSmaller = function() {
	this.initialize();

	// Layer 1
	this.continueText = new lib.continueTextSmaller();
	this.continueText.setTransform(-425.5,-32.6);

	this.instance = new lib.guinext_1();
	this.instance.setTransform(4.1,0.9,0.84,0.84,0,0,0,50,45);

	this.addChild(this.instance,this.continueText);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-424.5,-36.9,470.7,75.6);
p.frameBounds = [rect];


(lib.arrow = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.guinext_1();
	this.instance.setTransform(-48.7,0.2,1,1,0,0,0,50,45);
	this.instance.alpha = 0.359;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-98.7,-44.8,100,90);
p.frameBounds = [rect];


(lib.allLevels = function() {
	this.initialize();

	// Layer 1
	this.l20 = new lib.levelNode();
	this.l20.setTransform(1676.2,400.3,0.773,0.773);

	this.l19 = new lib.levelNode();
	this.l19.setTransform(1505.8,400.3,0.773,0.773);

	this.l18 = new lib.levelNode();
	this.l18.setTransform(1335.4,400.3,0.773,0.773);

	this.l17 = new lib.levelNode();
	this.l17.setTransform(1165,400.3,0.773,0.773);

	this.l16 = new lib.levelNode();
	this.l16.setTransform(1004.6,400.3,0.773,0.773);

	this.l15 = new lib.levelNode();
	this.l15.setTransform(1676.2,220.5,0.773,0.773);

	this.l14 = new lib.levelNode();
	this.l14.setTransform(1507.7,220.5,0.773,0.773);

	this.l13 = new lib.levelNode();
	this.l13.setTransform(1339.2,220.5,0.773,0.773);

	this.l12 = new lib.levelNode();
	this.l12.setTransform(1170.7,220.5,0.773,0.773);

	this.l11 = new lib.levelNode();
	this.l11.setTransform(1004.6,220.5,0.773,0.773);

	this.l10 = new lib.levelNode();
	this.l10.setTransform(776.2,400.3,0.773,0.773);

	this.l9 = new lib.levelNode();
	this.l9.setTransform(605.8,400.3,0.773,0.773);

	this.l8 = new lib.levelNode();
	this.l8.setTransform(435.4,400.3,0.773,0.773);

	this.l7 = new lib.levelNode();
	this.l7.setTransform(265,400.3,0.773,0.773);

	this.l6 = new lib.levelNode();
	this.l6.setTransform(104.6,400.3,0.773,0.773);

	this.l5 = new lib.levelNode();
	this.l5.setTransform(776.2,220.5,0.773,0.773);

	this.l4 = new lib.levelNode();
	this.l4.setTransform(607.7,220.5,0.773,0.773);

	this.l3 = new lib.levelNode();
	this.l3.setTransform(439.2,220.5,0.773,0.773);

	this.l2 = new lib.levelNode();
	this.l2.setTransform(270.7,220.5,0.773,0.773);

	this.l1 = new lib.levelNode();
	this.l1.setTransform(104.6,220.5,0.773,0.773);

	// Layer 2
	this.prev = new lib.guinext_1();
	this.prev.setTransform(971.2,551.5,0.84,0.84,0,0,180,50,44.9);

	this.next = new lib.guinext_1();
	this.next.setTransform(837.2,551.6,0.84,0.84,0,0,0,50,45);

	this.addChild(this.next,this.prev,this.l1,this.l2,this.l3,this.l4,this.l5,this.l6,this.l7,this.l8,this.l9,this.l10,this.l11,this.l12,this.l13,this.l14,this.l15,this.l16,this.l17,this.l18,this.l19,this.l20);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(50.1,155.3,1703,434.1);
p.frameBounds = [rect];


(lib.addSheepButton = function() {
	this.initialize();

	// Layer 2
	this.noLeft = new lib.lumLeftText();
	this.noLeft.setTransform(61,86.8,1,1,0,0,0,40,22.2);

	// Layer 1
	this.instance = new lib.guibrick();
	this.instance.setTransform(7,0);

	this.addChild(this.instance,this.noLeft);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(7,0,118,109);
p.frameBounds = [rect];


(lib.WinLevelGFX = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shaunhappy_1();
	this.instance.setTransform(210,355.5,0.53,0.53,0,0,0,404.5,469);

	this.levelsBtn = new lib.levelSelectButton();
	this.levelsBtn.setTransform(371.7,559.1,0.863,0.863);
	if (window.location.hash == "#es") {
		this.levelsBtn.setTransform(356.7,559.1,0.863,0.863);
	}

	this.shaunUrl = new lib.shaunUrl();
	this.shaunUrl.setTransform(645,429,1,1,0,0,0,162,18.5);

	this.scoreVal = new lib.winLevelScoreVal();
	this.scoreVal.setTransform(721.2,173.9,1,1,0,0,0,112.5,48.1);

	this.scoreText = new lib.winLevelScoreWord();
	this.scoreText.setTransform(529,176.8,1,1,0,0,0,86,36.4);
	if (window.location.hash == "#ar") {
		this.scoreText.setTransform(469,176.8,1,1,0,0,0,86,36.4);
	} else if (window.location.hash == "#es") {
		this.scoreText.setTransform(509,176.8,1,1,0,0,0,86,36.4);
	}

	this.wellDoneTitle = new lib.WinLevelTitle();
	this.wellDoneTitle.setTransform(429.7,55.8,1,1,0,0,0,429.6,41.9);

	this.socialBtns = new lib.socialbtns();
	this.socialBtns.setTransform(656,392.4,0.862,0.862,0,0,0,147.5,29);

	this.instance_1 = new lib.staron();
	this.instance_1.setTransform(285.5,138.7,0.296,0.296,-21.2);

	this.instance_2 = new lib.staron();
	this.instance_2.setTransform(16,177.1,0.296,0.296,11.5);

	this.star3 = new lib.star();
	this.star3.setTransform(786.1,278.1,0.869,0.869,0,0,0,56.1,37.9);

	this.star2 = new lib.star();
	this.star2.setTransform(668,278.1,0.869,0.869,0,0,0,56.1,37.9);

	this.star1 = new lib.star();
	this.star1.setTransform(548,278.1,0.869,0.869,0,0,0,56.1,37.9);

	this.instance_3 = new lib.guisound();
	this.instance_3.setTransform(856,41.5,1,1,0,0,0,26.5,24.5);

	this.retryBtn = new lib.tryAgainButton();
	this.retryBtn.setTransform(611.8,561.4,0.863,0.863);
	if (window.location.hash == "#es") {
		this.retryBtn.setTransform(651.8,561.4,0.863,0.863);
	}

	this.instance_4 = new lib.shaunhappy();
	this.instance_4.setTransform(2.8,87.9,0.549,0.549);

	this.nextBtn = new lib.continueButtonSmaller();
	this.nextBtn.setTransform(851.5,560.5,0.863,0.863);

	// Layer 1
	this.instance_5 = new lib.startvignette();

	this.instance_6 = new lib.bgorange();
	this.instance_6.setTransform(450,300,1,1,0,0,0,450,300);

	this.addChild(this.instance_6,this.instance_5,this.nextBtn,this.instance_4,this.retryBtn,this.instance_3,this.star1,this.star2,this.star3,this.instance_2,this.instance_1,this.socialBtns,this.wellDoneTitle,this.scoreText,this.scoreVal,this.shaunUrl,this.levelsBtn,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,603.3);
p.frameBounds = [rect];


(lib.WinGameGFX = function() {
	this.initialize();

	// Layer 3
	this.starsCount = new lib.totalStars();
	this.starsCount.setTransform(733.1,291.3,1,1,0,0,0,103.2,42.1);

	this.shaunUrl = new lib.shaunUrl();
	this.shaunUrl.setTransform(645,416,1,1,0,0,0,162,18.5);

	this.scoreVal = new lib.winLevelScoreVal();
	this.scoreVal.setTransform(684.2,195.9,1,1,0,0,0,112.5,48.1);

	this.scoreText = new lib.winLevelScoreWord();
	this.scoreText.setTransform(490,207.8,1,1,0,0,0,66,36.4);
	if (window.location.hash == "#ar") {
		this.scoreText.setTransform(484,192.8,1,1,0,0,0,86,36.4);
	}// else if (window.location.hash == "#es") {
		//this.scoreText.setTransform(509,176.8,1,1,0,0,0,86,36.4);
	//}

	this.wellDoneTitle = new lib.WinLevelTitle();
	this.wellDoneTitle.setTransform(429.7,55.8,1,1,0,0,0,429.6,41.9);

	this.instance = new lib.staron();
	this.instance.setTransform(465.2,286.6,0.214,0.214,-9.7);

	this.instance_1 = new lib.staron();
	this.instance_1.setTransform(466.7,345.6,0.157,0.157,-15);

	this.instance_2 = new lib.staron();
	this.instance_2.setTransform(417.2,334.6,0.157,0.157,21.5);

	this.instance_3 = new lib.staron();
	this.instance_3.setTransform(388,398.4,0.214,0.214,7.3);

	this.instance_4 = new lib.staron();
	this.instance_4.setTransform(832.7,27.5,0.157,0.157,-15);

	this.instance_5 = new lib.staron();
	this.instance_5.setTransform(807.2,94.6,0.157,0.157,21.5);

	this.instance_6 = new lib.staron();
	this.instance_6.setTransform(452.2,123.6,0.157,0.157,21.5);

	this.instance_7 = new lib.staron();
	this.instance_7.setTransform(124.6,21.8,0.157,0.157,-15.7);

	this.instance_8 = new lib.staron();
	this.instance_8.setTransform(369,127.5,0.214,0.214,7.3);

	this.instance_9 = new lib.staron();
	this.instance_9.setTransform(295.2,162.7,0.312,0.312,14);

	this.instance_10 = new lib.staron();
	this.instance_10.setTransform(223,74.5,0.214,0.214,7.3);

	this.instance_11 = new lib.staron();
	this.instance_11.setTransform(162.9,13.2,0.428,0.428,-14);

	this.instance_12 = new lib.staron();
	this.instance_12.setTransform(695.1,27.4,0.214,0.214,7.3);

	this.instance_13 = new lib.staron();
	this.instance_13.setTransform(753.7,30.7,0.428,0.428,-14);

	this.instance_14 = new lib.staron();
	this.instance_14.setTransform(706.2,79.2,0.312,0.312,14);

	this.instance_15 = new lib.star();
	this.instance_15.setTransform(596.6,283.5,0.616,0.616,0,0,0,56.1,37.9);

	this.socialBtns = new lib.socialbtns();
	this.socialBtns.setTransform(682,377.4,0.862,0.862,0,0,0,147.5,29);

	this.instance_16 = new lib.shaunahh_1();
	this.instance_16.setTransform(191.1,354.6,0.505,0.505,0,0,0,468.4,485);

	this.nextBtn = new lib.playAgainButton();
	this.nextBtn.setTransform(779.3,515.5,1.185,1.185);

	// Layer 1
	this.instance_17 = new lib.startvignette();

	this.instance_18 = new lib.pinkbg_1();
	this.instance_18.setTransform(450,300,1,1,0,0,0,450,300);

	this.addChild(this.instance_18,this.instance_17,this.nextBtn,this.instance_16,this.socialBtns,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.wellDoneTitle,this.scoreText,this.scoreVal,this.shaunUrl,this.starsCount);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-45.3,-0.1,945.4,600.1);
p.frameBounds = [rect];


(lib.PauseMenuGFX = function() {
	this.initialize();

	// Layer 3
	this.pausedScreenTitle = new lib.pausedTitle();
	this.pausedScreenTitle.setTransform(449.1,81.1,1,1,0,0,0,450.1,42.1);

	this.quitBtn = new lib.quitButton();
	this.quitBtn.setTransform(509.6,489.6);

	this.helpBtn = new lib.helpButton();
	this.helpBtn.setTransform(508.4,402.4);

	this.restartBtn = new lib.restartButton();
	this.restartBtn.setTransform(512.5,303.9);

	this.continueBtn = new lib.continueButton();
	this.continueBtn.setTransform(513.4,208.3);

	// Layer 1
	this.instance = new lib.pausedBG();
	this.instance.setTransform(450,300,1,1,0,0,0,450,300);
	this.instance.alpha = 0.68;

	this.addChild(this.instance,this.continueBtn,this.restartBtn,this.helpBtn,this.quitBtn,this.pausedScreenTitle);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1,0,901,600);
p.frameBounds = [rect];


(lib.LevelSelectGFX = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.staron();
	this.instance.setTransform(186.5,14.5,0.349,0.349);

	this.allLevels_mc = new lib.allLevels();

	this.debugGameEnd = new lib.debug_gotoWinGameScreenBtn();
	this.debugGameEnd.setTransform(726,13.9);


	// Layer 3
	this.stars = new lib.starsCollected();
	this.stars.setTransform(116,35,1,1,0,0,0,66,23.5);

	this.levelSelect = new lib.level_select_title();
	this.levelSelect.setTransform(-3,66);

	// Layer 1
	this.instance_1 = new lib.bgorange();
	this.instance_1.setTransform(450,300,1,1,0,0,0,450,300);

	this.addChild(this.instance_1,this.levelSelect,this.stars,
		//this.debugGameEnd,
		this.allLevels_mc,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3,0,1756.1,600);
p.frameBounds = [rect];


(lib.IntructionsGFX = function() {
	this.initialize();

	// Layer 3
	this.ins3 = new lib.instruct3();
	this.ins3.setTransform(692.2,315.3,0.974,0.974,0,0,0,213.5,171.5);

	this.ins2 = new lib.instruct2();
	this.ins2.setTransform(424.3,313.3,0.974,0.974,0,0,0,150.5,171.5);

	this.ins1 = new lib.instruct1();
	this.ins1.setTransform(162.7,301.9,0.974,0.974,0,0,0,142,179.2);

	this.continueBtn = new lib.continueButton();
	this.continueBtn.setTransform(814.5,543.5);

	// Layer 1
	this.instance = new lib.startvignette();

	this.instance_1 = new lib.orangebg();

	this.addChild(this.instance_1,this.instance,this.continueBtn,this.ins1,this.ins2,this.ins3);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
p.frameBounds = [rect];


(lib.HUD = function() {
	this.initialize();

	// Layer 1
	this.star3 = new lib.star();
	this.star3.setTransform(120.1,35.5,0.299,0.299,0,0,0,55.9,37.8);

	this.star2 = new lib.star();
	this.star2.setTransform(79.5,35.5,0.299,0.299,0,0,0,56.2,37.8);

	this.star1 = new lib.star();
	this.star1.setTransform(38.3,35.5,0.299,0.299,0,0,0,56.1,37.8);

	this.arrow = new lib.arrow();
	this.arrow.setTransform(1271,308.2);

	this.resetBtn_mc = new lib.resetBtn();
	this.resetBtn_mc.setTransform(723,38.4,1,1,0,0,0,27,24.5);

	this.muteBtn = new lib.muteBtn();
	this.muteBtn.setTransform(762,13.9);

	this.levelNum = new cjs.Text("12", "30px 'Arial'", "#FFFFFF");
	this.levelNum.name = "levelNum";
	this.levelNum.lineHeight = 32;
	this.levelNum.lineWidth = 100;
	this.levelNum.setTransform(2.9,-1.4,0.828,0.828);

	this.pauseBtn = new lib.pauseBtn();
	this.pauseBtn.setTransform(826,13.9);

	this.sheepbtn = new lib.addSheepButton();
	this.sheepbtn.setTransform(762.8,486);

	this.addChild(this.sheepbtn,this.pauseBtn,this.levelNum,this.muteBtn,this.resetBtn_mc,this.arrow,this.star1,this.star2,this.star3);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(3,-1.3,1269.3,596.4);
p.frameBounds = [rect];


(lib.StartScreenGFX = function() {
	this.initialize();

	// assets
	this.instance = new lib.stslogo();
	this.instance.setTransform(478.5,11.5);

	this.instance_1 = new lib.apphazardlogo();
	this.instance_1.setTransform(468,152.5);
	if (window.location.hash == "#ar") {
		this.instance_1.setTransform(408,182.5);
	}

	this.startBtn = new lib.playBtn();
	this.startBtn.setTransform(623,404);
	if (window.location.hash == "#ar") {
		this.startBtn.setTransform(650,407);
	}

	this.instance_2 = new lib.HUD();
	this.instance_2.setTransform(1463.7,424.6,1,1,0,0,0,440.9,296.8);

	this.socialBtns = new lib.socialbtns();
	this.socialBtns.setTransform(726,516,1,1,0,0,0,153.5,29);

	this.siteLink = new lib.siteLink();
	this.siteLink.setTransform(727.5,568.5,1,1,0,0,0,172.5,18.5);

	this.instance_3 = new lib.bottomgradient();
	this.instance_3.setTransform(0,514.5,1,0.264);

	this.instance_4 = new lib.chainbox();
	this.instance_4.setTransform(156,222.4,1,1,0,0,0,260,279.5);

	this.instance_5 = new lib.startshaun();
	this.instance_5.setTransform(0,53);

	this.instance_6 = new lib.guisound();
	this.instance_6.setTransform(856,41.5,1,1,0,0,0,26.5,24.5);

	// vignette
	this.instance_7 = new lib.startvignette();

	// bg
	this.instance_8 = new lib.startbgfarm();

	// pink
	this.instance_9 = new lib.pinkbg_1();
	this.instance_9.setTransform(450,300,1,1,0,0,0,450,300);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.siteLink,this.socialBtns,this.instance_2,this.startBtn,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,-69.1,2295.1,791.9);
p.frameBounds = [rect];


// stage content:
(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.pageGui();
	this.instance.setTransform(440.9,32.7,1,1,0,0,0,440.9,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Layer 1
	this.instance_1 = new lib.StartScreenGFX();

	this.instance_2 = new lib.LevelSelectGFX();
	this.instance_2.setTransform(1,0);

	this.instance_3 = new lib.IntructionsGFX();
	this.instance_3.setTransform(0,0.5);

	this.instance_4 = new lib.IntructionsGFX();

	this.instance_5 = new lib.PauseMenuGFX();

	this.instance_6 = new lib.LevelFailGFX();

	this.instance_7 = new lib.WinLevelGFX();

	this.instance_8 = new lib.WinLevelGFX();

	this.instance_9 = new lib.HUD();
	this.instance_9.setTransform(987.9,176.5,1,1,0,0,0,6.5,5.5);

	this.instance_10 = new lib.WinGameGFX();

	this.instance_11 = new lib.turndevicescreen();
	this.instance_11.setTransform(450,300,1,1,0,0,0,450,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Layer 2
	this.instance_12 = new lib.blackout();
	this.instance_12.setTransform(-14.1,687.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(435.9,230.9,2309.2,1356.4);
p.frameBounds = [rect, new cjs.Rectangle(435.9,300,1768.2,1287.2), rect=new cjs.Rectangle(435.9,300,914.1,1287.2), rect, new cjs.Rectangle(435.9,300,1294.4,1287.2), new cjs.Rectangle(445.5,300,904.6,603.3), new cjs.Rectangle(404.7,299.9,2299,766.1), new cjs.Rectangle(450,300,900,600)];

})(uiLib = uiLib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, strings = strings||{});
var uiLib, images, createjs, ss, strings;
