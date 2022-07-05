//--------------------------------------------------------------------------------------------------------------------------------------------------------

var ResultsLayer = cc.Layer.extend({
	ctor:function () {
		this._super();

		var background = new cc.Sprite("res/bg_transition.png");
		background.setPosition(gg.anchor.center);
		this.addChild(background);

		var jarsA = new cc.Sprite("#jarsA_1.png");
		jarsA.setPosition(270, 170);
		this.addChild(jarsA);

		var jarsB = new cc.Sprite("#jarsB_1.png");
		jarsB.setPosition(1060, 210);
		this.addChild(jarsB);

		var character1 = new cc.Sprite("#cut_character0_0.png");
		character1.setPosition(696, 204);
		this.addChild(character1);

		var character2 = new cc.Sprite("#cut_character1_0.png");
		character2.setPosition(480, 202);
		this.addChild(character2);

		var character3 = new cc.Sprite("#cut_character2_0.png");
		character3.setPosition(896, 216);
		this.addChild(character3);

		var panel = new cc.Sprite("#panel_results.png");
		panel.setPosition(683, 560);
		this.addChild(panel);

		var daysPlayedLabel = new cc.LabelBMFont("" + gg.gameplay.level, "res/fnt_comiquita.fnt");
		daysPlayedLabel.setPosition(834, 715);
		this.addChild(daysPlayedLabel);

		var lizardsCaughtLabel = new cc.LabelBMFont("" + gg.gameplay.totalCounter, "res/fnt_comiquita.fnt");
		lizardsCaughtLabel.setPosition(834, 644);
		this.addChild(lizardsCaughtLabel);

		var totalScore = gg.gameplay.totalCounter * (gg.gameplay.level);
		var totalScoreLabel = new cc.LabelBMFont("" + totalScore, "res/fnt_comiquita.fnt");
		totalScoreLabel.setPosition(834, 536);
		totalScoreLabel.setColor(cc.color(255, 200, 0));
		this.addChild(totalScoreLabel);
		
		var newHighScore = false;
        var highScore = cc.sys.localStorage.getItem(gg.highScore);
        if (highScore === null || totalScore > highScore) {
            highScore = totalScore;

            if (totalScore > 0) {
            	newHighScore = true;
            	cc.sys.localStorage.setItem(gg.highScore, totalScore);
            }
        }

		var highScoreLabel = new cc.LabelBMFont("" + highScore, "res/fnt_comiquita.fnt");
		highScoreLabel.setPosition(834, 464);
		this.addChild(highScoreLabel);

		if (newHighScore) {
			highScoreLabel.setColor(cc.color(255, 200, 0));

			var newIcon = new cc.Sprite("#new.png");
			newIcon.setPosition(430, 460);
			this.addChild(newIcon);
    }

    var replayButton = new cc.MenuItemImage(
      "#btn_play_u.png",
      "#btn_play_d.png",
      this.replayGame,
    this);
        
    var replayMenu = new cc.Menu(replayButton);
    replayMenu.x = gg.screen.width * 0.85;
    replayMenu.y = gg.screen.height * 0.08;
    this.addChild(replayMenu, 1);
	},

	replayGame: function(){
		cc.director.runScene(new IntroScene());
	}

});

//--------------------------------------------------------------------------------------------------------------------------------------------------------

var ResultsScene = cc.Scene.extend({
	onEnter:function () {
		this._super();

		if (gg.onMobile) {
            window.location = 'cnwap://showad';
       	} else if (typeof showAd === 'function') {
       		showAd();
       	}
       	
		this.addChild(new ResultsLayer());
	}
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------