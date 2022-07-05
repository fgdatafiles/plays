window.onload = startGame;
var stageWidth;
var stageHeight;
var currentNavigator;

currentNavigator = 'desktop';
stageWidth = 850;
stageHeight = 1280;

var secretKey = "tetrisNilee";

var game = new Phaser.Game(stageWidth, stageHeight, Phaser.CANVAS, '');
var cache = new Phaser.Cache(game);
var customFontStyle1 = 'Source';
var customFontStyle2 = 'Exo';
var isSoundOn = true;
var score = 0;
var gamePaused = false;
var levelsUnlocked = 1;
var gameOverFlag = false;
var gameBeingPlayed = false;
var scorePerRow = 100;
var coinsPerRow = 5;
var scoreNum;
var initCoins = 20;
var prevScore;
var coins = initCoins;
var numCoins;

var introSound;
var buttonSound;
var magicSound;	

var shuffleCoins = 20;
var resizeCoins = 30;
var bombCoins = 40;

var RIGHT=0;
var LEFT=1;
var firstRunLandscape;

var gameOverTweenBlack;
var gameOverBoard;
var gameOverTxt;
var distanceCoverTxt;
var finalscoreTxt;
var curleveltxt;
var youCompletedTxt
var replayBtn;
var nextLevelBtn;
var numCoinsTxtt;
var submitBtn;
var finalScore;


var levelButtonsArray = [];
var levelTextArray = [];
var currentLevel;

var timerEvents;
var leftKey;
var rightKey;
var upKey;
var downKey;
var touchX;
var touchY;
var touchId;
var levelGoals;

var curPieceImgArray = new Array();
var currentBoardImgArray = new Array();

var ROWS = 20;
var COLS = 10;
var SIZE = 64;
var curPiece;
var gameData;
var prevTime;
var curTime;
var lineSpan;
var curLines;

function isStock() {
    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && matches[1] < 537;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleIncorrect(){
     	if(!game.device.desktop){
     		document.getElementById("turn").style.display="block";
     	}
	}
	

function handleCorrect() {
	if (!game.device.desktop) {
		if (firstRunLandscape) {
			gameRatio = window.innerWidth / window.innerHeight;
			game.width = Math.ceil(768 * gameRatio);
			game.height = 1024;
			game.renderer.resize(game.width, game.height);
			game.state.start("preloader");
		}
		document.getElementById("turn").style.display = "none";
	}
}

function copyData(p)
{
	
	var xpos = p.gridx;
	var ypos  = p.gridy;
	var pstate = p.curState;

	for (var r = 0, len = p.states[pstate].length; r < len; r++) 
	{
		for (var c = 0, len2 = p.states[pstate][r].length; c < len2; c++) 
		{
			if (p.states[pstate][r][c] == 1 && ypos >= 0) 
			{
				gameData[ypos][xpos] = (p.color + 1);
			}

			xpos += 1;
		}

		xpos = p.gridx;
		ypos += 1;
	}
	
	checkLines();

	if(p.gridy < 0)
	{
		gameOverFlag = true;
		gameBeingPlayed = false;
		
		levelLostFunc();
		
		game.time.events.remove(timerEvents);
		game.time.events.remove(timerEvents2);
		timerEvents = undefined;
		timerEvents2 = undefined;
	}
}


function checkLines()
{
	var lineFound = false;
	var fullRow = true;
	var r = ROWS - 1;
	var c = COLS - 1;
	
	while(r>=0)
	{
		while(c>=0)
		{
			if(gameData[r][c]==0)
			{
				fullRow = false;
				c = -1;
			}
			c--; 	
		}	
		
		if(fullRow == true)
		{
			zeroRow(r);
			r++;
			lineFound = true;
			curLines++;
			
			score += scorePerRow;
			coins += coinsPerRow;
			scoreNum.setText(score);
		}
		
		fullRow = true;
		c = COLS - 1;
		r--;
	}
	
	localStorage['coins'] = CryptoJS.AES.encrypt(coins+"", secretKey);
	
	numCoins.setText(coins);
	
	
	curLevelGoals = levelData[currentLevel]['lines'] - curLines;
	
	if(curLevelGoals<0)
		curLevelGoals = 0;
		
	levelGoals.setText(curLevelGoals+" lines");
	
	
	if(curLevelGoals<=0)
	{
		gameOverFlag = true;
		gameBeingPlayed = false;
		
		game.time.events.remove(timerEvents);
		game.time.events.remove(timerEvents2);
		timerEvents = undefined;
		timerEvents2 = undefined;
		
		if(levelsUnlocked>currentLevel+1)
		{
			
		}
		else
		{
			levelsUnlocked = currentLevel+1;
			localStorage['levelsUnlocked'] = CryptoJS.AES.encrypt(levelsUnlocked+"", secretKey);	
		}
		
		levelCompleteFunc();
	}
}

function zeroRow(row)
{
	magicSound.play();
	
	var r = row;
	var c = 0;
	
	while(r>=0)
	{
		while(c<COLS)
		{
			if(r>0)
				gameData[r][c] = gameData[r-1][c];
			else
				gameData[r][c] = 0;
				
			c++;
		}
		
		c = 0;
		r--;
	}
}


function checkMove(xpos,ypos,newState)
{
	var result = true;
	var newx = xpos;
	var newy = ypos;
	
	for(var r=0, len = curPiece.states[newState].length;r<len;r++)
	{
		for(var c=0, len2 = curPiece.states[newState][r].length;c<len2;c++)
		{
			//INVALID MOVE
			if(newx < 0 || newx >= COLS)
			{
				result = false;
				c = len2;
				r = len;	
			}
			
			if(gameData[newy] != undefined && gameData[newy][newx] !=0 
			  && curPiece.states[newState][r] != undefined && curPiece.states[newState][r][c] !=0)
			{
				result = false;
				c = len2;
				r = len;		
			}
			
			newx += 1;
		}
		
		newx = xpos;
		newy += 1;
		
		if(newy > ROWS)
		{
			r = len;
			result = false;
		}
	}
	
	return result;
}


function getInput(e)
{
	if(!e) { var e = window.event; }
	
	if(gameOverFlag == false)
	{
		switch(e.keyCode)
		{
			case 37:
			{
				if( checkMove(curPiece.gridx - 1, curPiece.gridy, curPiece.curState) )
					curPiece.gridx--;
			}
			break;
			
			case 39:
			{
				if( checkMove(curPiece.gridx + 1, curPiece.gridy, curPiece.curState) )
					curPiece.gridx++;
			}
			break;
			
			case 38:
			{
				var newState = curPiece.curState - 1;
				if(newState < 0)
					newState = curPiece.states.length - 1;
					
				if( checkMove(curPiece.gridx, curPiece.gridy, newState) )
					curPiece.curState = newState;
			}
			break;
			
			case 40:
			{
				if( checkMove(curPiece.gridx, curPiece.gridy + 1, curPiece.curState) )
					curPiece.gridy++;
			}
			break;
		}
	}
}


function levelLostFunc(){
	
	gameOverTweenBlack = this.game.add.graphics(0,0);
    gameOverTweenBlack.beginFill("#000000");
    gameOverTweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
	gameOverTweenBlack.alpha = 0.7;
	game.world.bringToTop(gameOverTweenBlack);		
	
	gameOverBoard = game.add.sprite(125,-400,'gameOverBoard')
	game.add.tween(this.gameOverBoard).to({y:230},600,Phaser.Easing.Back.Out).start();
	
	gameOverTxt = game.add.text(270, -370, "Game Over");
	gameOverTxt.fill = "white";
	gameOverTxt.font = customFontStyle2;
	gameOverTxt.fontSize = 50; 
	game.add.tween(gameOverTxt).to({y:300},600,Phaser.Easing.Back.Out).start();
	
	finalScore = score;
	
	finalscoreTxt = game.add.text(240, -320, "Your Score: "+score);
	finalscoreTxt.fill = "white";
	finalscoreTxt.font = customFontStyle2;
	finalscoreTxt.fontSize = 45; 
	game.add.tween(finalscoreTxt).to({y:450},600,Phaser.Easing.Back.Out).start();
	
	numCoinsTxtt = game.add.text(300, -320, "Coins: "+coins);
	numCoinsTxtt.fill = "white";
	numCoinsTxtt.font = customFontStyle2;
	numCoinsTxtt.fontSize = 45; 
	game.add.tween(numCoinsTxtt).to({y:530},600,Phaser.Easing.Back.Out).start();
	
	score = 0;
	
	replayBtn = game.add.button(100, 800, 'replayImg', replayGame, this);
	
	submitBtn = game.add.button(450, 800, 'submitImg', submitUserScore, this);
}


function levelCompleteFunc(){
			
	gameOverTweenBlack = this.game.add.graphics(0,0);
    gameOverTweenBlack.beginFill("#000000");
    gameOverTweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
	gameOverTweenBlack.alpha = 0.7;
	game.world.bringToTop(gameOverTweenBlack);
    		
	gameOverBoard = game.add.sprite(125,-400,'gameOverBoard')
	game.add.tween(this.gameOverBoard).to({y:230},600,Phaser.Easing.Back.Out).start();
	
	gameOverTxt = game.add.text(285, -370, "Well Done!");
	gameOverTxt.fill = "white";
	gameOverTxt.font = customFontStyle2;
	gameOverTxt.fontSize = 50; 
	game.add.tween(gameOverTxt).to({y:300},600,Phaser.Easing.Back.Out).start();
	
	youCompletedTxt = game.add.text(250, -370, "You completed");
	youCompletedTxt.fill = "white";
	youCompletedTxt.font = customFontStyle2;
	youCompletedTxt.fontSize = 50; 
	game.add.tween(youCompletedTxt).to({y:360},600,Phaser.Easing.Back.Out).start();
	
	curleveltxt = game.add.text(300, -370, "Level :"+currentLevel);
	curleveltxt.fill = "white";
	curleveltxt.font = customFontStyle2;
	curleveltxt.fontSize = 50; 
	game.add.tween(curleveltxt).to({y:450},600,Phaser.Easing.Back.Out).start();
	
	 
	finalscoreTxt = game.add.text(240, -320, "Your Score: "+score);
	finalscoreTxt.fill = "white";
	finalscoreTxt.font = customFontStyle2;
	finalscoreTxt.fontSize = 45; 
	game.add.tween(finalscoreTxt).to({y:550},600,Phaser.Easing.Back.Out).start();
	
	numCoinsTxtt = game.add.text(300, -320, "Coins: "+coins);
	numCoinsTxtt.fill = "white";
	numCoinsTxtt.font = customFontStyle2;
	numCoinsTxtt.fontSize = 45; 
	game.add.tween(numCoinsTxtt).to({y:630},600,Phaser.Easing.Back.Out).start();
	
	
	replayBtn = game.add.button(115, 800, 'replayImg', replayGame, this);
	
	if(currentLevel+1 <= numLevels)
	{
		nextLevelBtn = game.add.button(440, 780, 'nextLevelImg', goToNextLevel, this);
		nextLevelBtn.scale.x = 1;
		nextLevelBtn.scale.y = 1.3;
	}
	
	if(currentLevel==30)
	{
		submitBtn = game.add.button(440, 800, 'submitImg', submitUserScore, this);	
	}
}


function replayGame()
{
	gameOverFlag = false;
	gameBeingPlayed = false;
	
	// var tweenBlack = this.game.add.graphics(0,0);
    // tweenBlack.beginFill("#000000");
    // tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    // tweenBlack.alpha = 0;
// 
	// var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
	// stateTween.start();
	// stateTween.onComplete.add(function(){
	 	// game.state.start("inGame");
	// }, this);
	
	//FOR API
	updatePlayAgain();
}

function goToNextLevel()
{
	
	localStorage['score'] = CryptoJS.AES.encrypt(score+"", secretKey);
	
	currentLevel += 1;
	
	gameOverFlag = false;
	gameBeingPlayed = false;
	
	var tweenBlack = this.game.add.graphics(0,0);
    tweenBlack.beginFill("#000000");
    tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    tweenBlack.alpha = 0;

	var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
	stateTween.start();
	stateTween.onComplete.add(function(){
	 	game.state.start("inGame");
	}, this);
}

function submitUserScore()
{
	console.log(finalScore);
	var submit_score=finalScore;
	submit_on_game_click(submit_score);
}

var ua = navigator.userAgent.toLowerCase();
var isSharpMiniStock = ((/SHL24/i).test(ua)) && isStock();
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock();
var isFujitsu = ((/F-01F/i).test(ua)) && isStock();
var isSharp = ((/SH-01F/i).test(ua)) && isStock();




function startGame() {
	
	var stockAndroid = window.navigator && window.navigator.userAgent.indexOf('534.30') > 0 && window.navigator.userAgent.toLowerCase().match(/android/);
	
	if(stockAndroid){
	}
	
	/*GAME SCENE*/
	var gameScene = {
		
		preload:function(){
			
			localStorage['score'] = CryptoJS.AES.encrypt(score+"", secretKey);
			
			finalScore = 0;
			gameBeingPlayed = true;
			gameOverFlag = false;
			prevTime = 0;
			curTime = 0;
			prevScore = score;
			if(currentLevel==1)
				score = 0;
			curLines = 0;
			timerEvents = undefined;
			timerEvents2 = undefined;
			
		},
		
		create:function(){
			
			leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    		upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    		downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    		
    		
			this.gameBg = this.game.add.sprite(0, 0, 'gameBgImg');
			this.gameBg.scale.x = stageWidth/this.gameBg.width;
			this.gameBg.scale.y = stageHeight/this.gameBg.height;
			
			this.gameGridImg = this.game.add.sprite(0, 0, 'gameGridImg');
			this.gameGridImg.scale.x = 2;
			this.gameGridImg.scale.y = 2;
			
			document.onkeydown = getInput;
			
			this.initGame();
			
			
			document.body.addEventListener('touchstart', function(e) {

				touchX = e.touches[0].pageX;
				touchY = e.touches[0].pageY;
				touchId = e.touches[0].identifier;

			});

			document.body.addEventListener('touchmove', function(e) {

				var difY = e.touches[0].pageY - touchY;

				if (difY > 60) {
					if (checkMove(curPiece.gridx, curPiece.gridy + 1, curPiece.curState))
						curPiece.gridy++;
				}

			});

			document.body.addEventListener('touchend', function(e) {
				var touchEndX;
				var touchEndY;

				var touch = e.changedTouches.item(0);

				try {
					touchEndX = touch.pageX;
					touchEndY = touch.pageY;
				} catch(err) {
					alert(err);
					return;
				}

				var difX = Math.abs(touchEndX - touchX);
				var difY = Math.abs(touchEndY - touchY);

				if (difX < 10 && difY < 10) {
					var newState = curPiece.curState - 1;
					if (newState < 0)
						newState = curPiece.states.length - 1;

					if (checkMove(curPiece.gridx, curPiece.gridy, newState))
						curPiece.curState = newState;
				} else if (difX > difY) {
					if (touchEndX < touchX) {
						if (checkMove(curPiece.gridx - 1, curPiece.gridy, curPiece.curState))
							curPiece.gridx--;
					} else {
						if (checkMove(curPiece.gridx + 1, curPiece.gridy, curPiece.curState))
							curPiece.gridx++;
					}
				}

			}); 

			
			
		},
		
		initGame:function(){
			var r,c;
			
			if(gameData == undefined)
			{
				gameData = new Array();
				for(r=0;r<ROWS;r++)
				{
					gameData[r] = new Array();
					for(c=0;c<COLS;c++)
					{
						gameData[r].push(0);
					}
					
				}
			}
			else
			{
				for(r=0;r<ROWS;r++)
				{
					for(c=0;c<COLS;c++)
					{
						gameData[r][c] = 0;
					}
					
				}	
			}
			
			
			this.scoreBg = game.add.sprite(650,25,'gameplayTextBg');
			
			this.scoreTxt = game.add.text(675,30,"Score");
			this.scoreTxt.fill = "white";
			this.scoreTxt.font = customFontStyle2;
			this.scoreTxt.fontSize = 47;
			
			scoreNum = game.add.text(675,100,score+"");
			scoreNum.fill = "white";
			scoreNum.font = customFontStyle2;
			scoreNum.fontSize = 50;
			
			this.levelGoalBg = game.add.sprite(650,195,'gameplayTextBg');
			
			this.levelGoalTxt = game.add.text(685,200,"Goal");
			this.levelGoalTxt.fill = "white";
			this.levelGoalTxt.font = customFontStyle2;
			this.levelGoalTxt.fontSize = 47;
			
			levelGoals = game.add.text(675,270,levelData[currentLevel]['lines']+" lines");
			levelGoals.fill = "white";
			levelGoals.font = customFontStyle2;
			levelGoals.fontSize = 40;
			
			this.coinsBg = game.add.sprite(650,365,'gameplayTextBg');
			
			this.coinsTxt = game.add.text(675,370,"Coins");
			this.coinsTxt.fill = "white";
			this.coinsTxt.font = customFontStyle2;
			this.coinsTxt.fontSize = 47;
			
			numCoins = game.add.text(695,430,coins+"");
			numCoins.fill = "white";
			numCoins.font = customFontStyle2;
			numCoins.fontSize = 50;
			
			coinsImg = game.add.sprite(700,495,'coinImg');
			coinsImg.scale.x = 0.7;
			coinsImg.scale.y = 0.7;
			
			this.powerBg = game.add.sprite(650,630,'gameplayPowerTextBg');
			
			this.powerTxt = game.add.text(655,640,"Power Ups");
			this.powerTxt.fill = "white";
			this.powerTxt.font = customFontStyle2;
			this.powerTxt.fontSize = 35;
			
			changePieceBtn = game.add.button(650,715,'shuffleBtnImg', this.changePiece, this);
			changePieceBtn.scale.x = 0.9;
			changePieceBtn.scale.y = 0.9;
			
			shuffleCoinsTxt = game.add.text(780,720,shuffleCoins);
			shuffleCoinsTxt.fill = "white";
			shuffleCoinsTxt.font = customFontStyle2;
			shuffleCoinsTxt.fontSize = 30;
			
			coinsImg1 = game.add.sprite(770,765,'coinImg');
			coinsImg1.scale.x = 0.6;
			coinsImg1.scale.y = 0.6;
			
			resizeBtn = game.add.button(650,890,'resizeBtnImg', this.resizePiece, this);
			resizeBtn.scale.x = 0.85;
			resizeBtn.scale.y = 0.85;
			
			resizeCoinsTxt = game.add.text(780,895,resizeCoins);
			resizeCoinsTxt.fill = "white";
			resizeCoinsTxt.font = customFontStyle2;
			resizeCoinsTxt.fontSize = 30;
			
			coinsImg2 = game.add.sprite(770,935,'coinImg');
			coinsImg2.scale.x = 0.6;
			coinsImg2.scale.y = 0.6;
			
			bombBtn = game.add.button(650,1065,'bombBtnImg', this.explodeBomb, this);
			bombBtn.scale.x = 0.85;
			bombBtn.scale.y = 0.85
			
			bombCoinsTxt = game.add.text(780,1070,bombCoins);
			bombCoinsTxt.fill = "white";
			bombCoinsTxt.font = customFontStyle2;
			bombCoinsTxt.fontSize = 30;
			
			coinsImg3 = game.add.sprite(770,1105,'coinImg');
			coinsImg3.scale.x = 0.6;
			coinsImg3.scale.y = 0.6;
			
			curPiece = getRandomPiece();
			
			if(timerEvents==undefined)
				timerEvents = game.time.events.loop(levelData[currentLevel]['speed'], this.updateGame, this);
			
			if(timerEvents2==undefined)
				timerEvents2 = game.time.events.loop(50, this.updatePiece, this);
			  
		},
		
		
		toggleSound:function(){
			if(currentNavigator=='desktop'){
                
    			if(isSoundOn==true){
    				this.muteBtn.frame = 0;
    				game.sound.mute = true;
    				isSoundOn = false;
    			}else if(isSoundOn==false){
    				this.muteBtn.frame = 1;
    				game.sound.mute = false;
    				isSoundOn = true;
    			}
    		}
    			
			var fake = this.game.add.sprite(0, 0, '');
		},
		
		render:function(){
			
		},
			
		updateGame:function(){
			
			if(gameOverFlag == false){
				
				//Update Game Piece
				if( checkMove(curPiece.gridx, curPiece.gridy + 1, curPiece.curState) )
				{
					curPiece.gridy += 1;	
				}
				else
				{
					copyData(curPiece);
					curPiece = getRandomPiece();
				}
				
				
				this.drawBoard();
				
			}
			
				
		},
		
		
		updatePiece:function()
		{
			if(gameOverFlag == false)
			{
				this.drawPiece();
			}
		},
		
		drawBoard:function(){
			
			
			for(i=0;i<currentBoardImgArray.length;i++)
			{
				currentBoardImgArray[i].destroy();				
			}
			
			currentBoardImgArray = [];
			
			for(r=0;r<ROWS;r++)
			{
				for(c=0;c<COLS;c++)
				{
					if(gameData[r][c]!=0)
					{
						currentBoardImgArray.push(this.game.add.sprite((c*SIZE), r*SIZE, 'blocks'));
						currentBoardImgArray[currentBoardImgArray.length-1].frame = gameData[r][c] - 1;
					}
				}
			}	
			
		},
		
		changePiece:function()
		{
			if(gameOverFlag == false)
			{
				if(coins>=shuffleCoins)
				{
					coins -= shuffleCoins;
					localStorage['coins'] = CryptoJS.AES.encrypt(coins+"", secretKey);
					numCoins.setText(coins);
					
					curPiece = getRandomPiece();
					this.drawPiece();
				}
			}
		},
		
		
		resizePiece:function()
		{
			if(gameOverFlag == false)
			{
				if(coins>=resizeCoins)
				{
					coins -= resizeCoins;
					localStorage['coins'] = CryptoJS.AES.encrypt(coins+"", secretKey);
					numCoins.setText(coins);
					
					tempColor = curPiece.color;
					tempX = curPiece.gridx;
					tempY = curPiece.gridy;
					
					curPiece = new singlePiece();
					curPiece.color = tempColor;
					curPiece.gridx = tempX; 
					curPiece.gridy = tempY;
					
					this.drawPiece();
				}
			}
		},
		
		explodeBomb:function()
		{
			if(gameOverFlag == false)
			{
				if(coins>=bombCoins)
				{
					//console.log(gameData);
					
					coins -= bombCoins;
					localStorage['coins'] = CryptoJS.AES.encrypt(coins+"", secretKey);
					numCoins.setText(coins);
					
					numExplosions = 10;
					
					piecePositions = [];
					
					for(r=0;r<ROWS;r++)
					{
						for(c=0;c<COLS;c++)
						{
							if(gameData[r][c]!=0)
							{
								tmpObj = {};
								tmpObj['x'] = r;
								tmpObj['y'] = c;
								piecePositions.push(tmpObj);
							}
						}
					}
					
					//console.log(piecePositions);
					
					for(i=0;i<numExplosions;i++)
					{
						var item = piecePositions[i];
						if(item!=undefined){
							gameData[item['x']][item['y']] = 0;
						}
					}
				}	
			}
		},
		
		drawPiece:function()
		{
			var drawX = curPiece.gridx;
			var drawY = curPiece.gridy;
			var pstate = curPiece.curState;
			
			for(i=0;i<curPieceImgArray.length;i++)
			{
				curPieceImgArray[i].destroy();				
			}
			
			curPieceImgArray = [];
			
			for(var r=0,len=curPiece.states[pstate].length;r<len;r++)
			{
					for(var c=0,len2=curPiece.states[pstate][r].length;c<len2;c++)
					{
						if(curPiece.states[pstate][r][c] == 1 && drawY >=0)
						{
							curPieceImgArray.push(this.game.add.sprite((drawX*SIZE),drawY*SIZE,'blocks'));
							curPieceImgArray[curPieceImgArray.length-1].frame = curPiece.color;	
						}	
						
						drawX += 1;
					}
					
					drawX = curPiece.gridx;
					drawY += 1;
			}
		},
		
		update:function()
		{
			if(gameOverTweenBlack!=undefined)
				game.world.bringToTop(gameOverTweenBlack);	
			
			if(gameOverBoard!=undefined)
				game.world.bringToTop(gameOverBoard);
			
			if(gameOverTxt!=undefined)
				game.world.bringToTop(gameOverTxt);
			
			if(youCompletedTxt!=undefined)
				game.world.bringToTop(youCompletedTxt);
				
			if(distanceCoverTxt!=undefined)
				game.world.bringToTop(distanceCoverTxt);
				
			if(finalscoreTxt!=undefined)
				game.world.bringToTop(finalscoreTxt);
			
			if(curleveltxt!=undefined)
				game.world.bringToTop(curleveltxt);
			
			if(replayBtn!=undefined)
				game.world.bringToTop(replayBtn);
				
			if(nextLevelBtn!=undefined)
				game.world.bringToTop(nextLevelBtn);
				
			if(submitBtn!=undefined)
				game.world.bringToTop(submitBtn);
				
			if(numCoinsTxtt!=undefined)
				game.world.bringToTop(numCoinsTxtt);
				
				
			if(!introSound.isPlaying){
                introSound.stop();
                introSound.play();
            }
		}
	}
	

	/*LEVELS SCENE*/
	var levelsScene = {
		
		preload:function(){
			
			for(i=0;i<levelButtonsArray.length;i++)
			{
				levelButtonsArray[i].destroy();
			}
			
			levelButtonsArray = [];
			
			
			for(i=0;i<levelTextArray.length;i++)
			{
				levelTextArray[i].destroy();
			}
			
			levelTextArray = [];
		},
		
		
		create:function(){
			this.preloadBackground = this.game.add.sprite(0,0,'levelsBg');
			this.preloadBackground.scale.x = stageWidth/this.preloadBackground.width;
			this.preloadBackground.scale.y = stageHeight/this.preloadBackground.height;
			
			this.menuBtn = game.add.button(90, 1300, 'menuBtn', this.goToMenu, this);
			this.menuBtn.onDownSound = buttonSound;
			game.add.tween(this.menuBtn).to({y:1150},400,Phaser.Easing.Back.Out).start();
			
			this.nextLevelBtn = game.add.button(425, 1300, 'nextLevelImg', this.startLastLevel, this);
			this.nextLevelBtn.onDownSound = buttonSound;
			game.add.tween(this.nextLevelBtn).to({y:1150},400,Phaser.Easing.Back.Out).start();
			
			this.loadLevelButtons();
		},
		
		
		startLastLevel:function()
		{
			currentLevel = levelsUnlocked;
			var tweenBlack = this.game.add.graphics(0,0);
	    	tweenBlack.beginFill("#000000");
	    	tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
	    	tweenBlack.alpha = 0;
	
			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
			stateTween.onComplete.add(function(){
				game.state.start("inGame");
			}, this);
		},
		
		goToMenu:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("preloader");
		    }, this);
		},
		
		loadLevelButtons:function(){
			
			for(i=0;i<numLevels;i++){
				
				levelButtonsArray.push(game.add.button(80+((i%numLevelRows)*150),1500+((Math.floor(i/numLevelRows))*105),'levelsBtn', this.startLevel, this));
				levelButtonsArray[i].scale.x = 0.47;
				levelButtonsArray[i].scale.y = 0.47;
				levelButtonsArray[i].name = i+1;
				levelButtonsArray[i].onDownSound = buttonSound;
				
				game.add.tween(levelButtonsArray[i]).to({y:275+((Math.floor(i/numLevelRows))*150)},400,Phaser.Easing.Back.Out).delay(i*50).start();
				
				if((i+1)>parseInt(levelsUnlocked))
				{
					levelButtonsArray[i].alpha = 0.5;
				}
				
				if(i<9)
					levelTextArray.push(game.add.text(110+((i%numLevelRows)*150),1500+((Math.floor(i/numLevelRows))*105), i+1));
				else
					levelTextArray.push(game.add.text(100+((i%numLevelRows)*150),1500+((Math.floor(i/numLevelRows))*105), i+1));
				levelTextArray[i].fill = "white";
				levelTextArray[i].font = customFontStyle2;
				levelTextArray[i].fontSize = 45; 
				
				game.add.tween(levelTextArray[i]).to({y:300+((Math.floor(i/numLevelRows))*150)},400,Phaser.Easing.Back.Out).delay(i*50).start();
					
			}
			
		},
		
		startLevel:function(evt){
			
			if(evt.name<=parseInt(levelsUnlocked))
			{
				
				if(evt.name==1)
				{
					score = 0;
					localStorage['score'] = CryptoJS.AES.encrypt("0", secretKey);
				}
				else if(evt.name<levelsUnlocked)
				{
					score = 0;
					localStorage['score'] = CryptoJS.AES.encrypt("0", secretKey);
				}
				
				currentLevel = evt.name;
				var tweenBlack = this.game.add.graphics(0,0);
	    		tweenBlack.beginFill("#000000");
	    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
	    		tweenBlack.alpha = 0;
	
				var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
				stateTween.start();
			    stateTween.onComplete.add(function(){
			    	game.state.start("inGame");
			    }, this);
		    }
		    
		},
		
		update:function(){
			if(!introSound.isPlaying){
		        introSound.stop();
		        introSound.play();
		    }
		},
	}
	
	/* STORY MODE*/
	var showStory = {
		
		preload:function(){
			
		},
		
		
		create:function(){
				
			this.storyBg = this.game.add.sprite(0,0,'storyImg');
		    this.storyBg.scale.x = stageWidth/this.storyBg.width;
			this.storyBg.scale.y = stageHeight/this.storyBg.height;
		    
		    this.menuBtn = game.add.button(-200, 880, 'menuBtn', this.goToMenu, this);
			this.menuBtn.onDownSound = buttonSound;
				
			game.add.tween(this.menuBtn).to({x:75,y:870},400,Phaser.Easing.Back.Out).start();
			
			
			this.nextBtn = game.add.button(860, 880, 'nextBtn', this.goToHelp, this);
			this.nextBtn.onDownSound = buttonSound;
				
			game.add.tween(this.nextBtn).to({x:440,y:870},400,Phaser.Easing.Back.Out).start();
													  
		},
		
		transitionToHowToPlay:function(){
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(this.showHowToPlay, this);
		},
		
		
		goToMenu:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("preloader");
		    }, this);
		},
		
		goToHelp:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("help");
		    }, this);
		},
		
		update:function(){
			if(!introSound.isPlaying){
		        introSound.stop();
		        introSound.play();
		    }
		},
		
	}
	
	
	
	/* HELP MODE*/
	var showTutorial = {
		
		preload:function(){
			
		},
		
		
		create:function(){
				
			this.helpBg = this.game.add.sprite(0,0,'howtoplayImg');
		    this.helpBg.scale.x = stageWidth/this.helpBg.width;
			this.helpBg.scale.y = stageHeight/this.helpBg.height;
		    
		    this.menuBtn = game.add.button(-200, 880, 'menuBtn', this.goToMenu, this);
			this.menuBtn.onDownSound = buttonSound;
				
			game.add.tween(this.menuBtn).to({x:75,y:870},400,Phaser.Easing.Back.Out).start();
			
			
			this.nextBtn = game.add.button(860, 880, 'nextBtn', this.goToLevels, this);
			this.nextBtn.onDownSound = buttonSound;
				
			game.add.tween(this.nextBtn).to({x:440,y:870},400,Phaser.Easing.Back.Out).start();
													  
		},
		
		transitionToHowToPlay:function(){
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(this.showHowToPlay, this);
		},
		
		
		goToMenu:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("preloader");
		    }, this);
		},
		
		goToLevels:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("levels");
		    }, this);
		},
		
		update:function(){
			if(!introSound.isPlaying){
		        introSound.stop();
		        introSound.play();
		    }
		},
		
	}

	
	/*PRELOAD ASSETS AND LOAD MAIN MENU*/
	var preloader = {
		
		preloadBar : Phaser.Sprite,
		
		preload : function() {
			
			if(isSharpMiniStock){
            	game.sound.mute = true;
            }
            if(isXperiaAStock){
            	game.sound.mute = true;
            }
            if(isFujitsu){
            	game.sound.mute = true;
            }
            if(isSharp){
            	game.sound.mute = true;
            }
            if(stockAndroid){
            	game.sound.mute = true;
            }
            

            //this.game.physics.p2.gravity.y = 100;
    
			this.preloadBackground = this.game.add.sprite(0,0,'loadingBgImg');
			this.preloadBackground.scale.x = stageWidth/this.preloadBackground.width;
			this.preloadBackground.scale.y = stageHeight/this.preloadBackground.height;
			
			if(currentNavigator=='desktop'){
				
				this.preloadBg = this.game.add.sprite(170,1150,'preloadBg');
				this.preloadBg.scale.x = 1.18;
				this.preloadBg.scale.y = 1.55;
				
				this.preloadBar = this.game.add.sprite(180,1160,'preloadBar');	
			}
			
        	game.load.setPreloadSprite(this.preloadBar, 0);
        	
        	
        	if(localStorage['levelsUnlocked']!=undefined)
        	{                                            
				var decryptLevelsUnlocked = CryptoJS.AES.decrypt(localStorage['levelsUnlocked'], secretKey);
				levelsUnlocked = parseInt(decryptLevelsUnlocked.toString(CryptoJS.enc.Utf8));
					
				if(isNaN(levelsUnlocked)){
					levelsUnlocked = 1;
					localStorage['levelsUnlocked'] = CryptoJS.AES.encrypt("1", secretKey);
				}                      
			}
			
			
			if(localStorage['score']!=undefined)
        	{                                            
				var decryptScore = CryptoJS.AES.decrypt(localStorage['score'], secretKey);
				score = parseInt(decryptScore.toString(CryptoJS.enc.Utf8));
					
				if(isNaN(score)){
					score = 1;
					localStorage['score'] = CryptoJS.AES.encrypt("0", secretKey);
				}                      
			}
			
			if(localStorage['coins']!=undefined)
			{
				var decryptCoins = CryptoJS.AES.decrypt(localStorage['coins'], secretKey);
				coins = parseInt(decryptCoins.toString(CryptoJS.enc.Utf8));
					
				if(isNaN(coins)){
					coins = initCoins;
					localStorage['coins'] = CryptoJS.AES.encrypt(initCoins+"", secretKey);
				}
				
				if(coins==0){
					coins = initCoins;
					localStorage['coins'] = CryptoJS.AES.encrypt(initCoins+"", secretKey);
				}
			}
        	
        	//STORY MODE
        	game.load.image('storyImg','assets/story/'+currentNavigator+'/story.jpg');
        	game.load.image('howtoplayImg','assets/story/'+currentNavigator+'/howtoplay.jpg');
        	game.load.image('menuBtn','assets/story/'+currentNavigator+'/menu_btn.png');
        	game.load.image('nextBtn','assets/story/'+currentNavigator+'/next_btn.png');
        	
        	//IN GAME
        	game.load.image('gameBgImg','assets/ingame/'+currentNavigator+'/gameBgImg.png');
        	game.load.image('gameGridImg','assets/ingame/'+currentNavigator+'/gameGrid.png');
        	this.load.spritesheet('blocks','assets/ingame/'+currentNavigator+'/blocks.png',64,64,8);
        	
        	
        	game.load.image('rockImg','assets/ingame/'+currentNavigator+'/rock.png');
        	game.load.image('coinImg','assets/ingame/'+currentNavigator+'/coins.png');
        	game.load.image('enemyImg','assets/ingame/'+currentNavigator+'/enemy.png');
        	game.load.image('scoreBoardImg','assets/ingame/'+currentNavigator+'/scoreboard.png');
        	game.load.image('starImg','assets/ingame/'+currentNavigator+'/star.png');
        	game.load.image('gameOverBoard','assets/ingame/'+currentNavigator+'/gameOverBoard.png');
        	
        	game.load.image('replayImg','assets/ingame/'+currentNavigator+'/replay.png');
        	game.load.image('submitImg','assets/ingame/'+currentNavigator+'/submit.png');
        	game.load.image('nextLevelImg','assets/ingame/'+currentNavigator+'/next_level.png');
        	game.load.image('shuffleBtnImg','assets/ingame/'+currentNavigator+'/shuffle_btn.png');
        	game.load.image('resizeBtnImg','assets/ingame/'+currentNavigator+'/resize_btn.png');
        	game.load.image('bombBtnImg','assets/ingame/'+currentNavigator+'/bomb_btn.png');
        	game.load.image('gameplayPowerTextBg','assets/ingame/'+currentNavigator+'/gameplay_powerup_text_bg.png');
        	game.load.image('gameplayTextBg','assets/ingame/'+currentNavigator+'/gameplay_text_bg.png');
        	
        	this.load.spritesheet('playerCar','assets/ingame/'+currentNavigator+'/riverkayak.png',201,351,4);
        	this.load.spritesheet('bheemImg','assets/ingame/'+currentNavigator+'/bheem.png',150,150,3);
        	this.load.spritesheet('livesImg','assets/ingame/'+currentNavigator+'/lives.png',199,65,4);
        	this.load.spritesheet('starsGameImg','assets/ingame/'+currentNavigator+'/stars.png',80,65,2);
        	
        	//TITLE SCREEN
        	game.load.image('playBtn','assets/title/'+currentNavigator+'/play_btn.png');
        	this.load.spritesheet('muteBtn','assets/title/'+currentNavigator+'/mute_unmute.png',67,68,2);
        	
        	
        	//TITLE SCREEN
        	game.load.image('levelsBtn','assets/levels/'+currentNavigator+'/level_btn.png');
        	game.load.image('levelsBg','assets/levels/'+currentNavigator+'/level_bg.jpg');
        	
        	//SOUNDS
        	game.load.audio('intro',['sounds/bgmusic.mp3']);
			game.load.audio('button',['sounds/button.mp3','sounds/button.ogg']);
			game.load.audio('magic',['sounds/magic.mp3','sounds/magic.ogg']);
			
			
			if(localStorage['topScore']!=undefined)
				topScore = localStorage['topScore']; 
        	
			var fake = this.game.add.sprite(0, 0, '');
		},
		
		create : function() {
		    
		    if(introSound==undefined)
		    {
				introSound = this.game.add.audio('intro', 0.4, false);
				buttonSound = this.game.add.audio('button', 0.2, false);
				magicSound = this.game.add.audio('magic', 1, false);
				
				
				// introSound = this.game.add.audio('intro', 0, false);
				// buttonSound = this.game.add.audio('button', 0, false);
				// magicSound = this.game.add.audio('magic', 0, false);
			}
	        
			var fake = this.game.add.sprite(0, 0, '');
			this.loadStartBtn();
			
		},
		
		loadStartBtn:function(){
			this.preloadBar.destroy();
			this.preloadBg.destroy();
			
			if(currentNavigator=='desktop'){
				this.startMenuButton = game.add.button(60, 1300, 'startMenuBtn', this.startGamePlay, this);
				this.startMenuButton.onDownSound = buttonSound;
				this.startMenuButton.scale.x = 1;
				this.startMenuButton.scale.y = 1;
				game.add.tween(this.startMenuButton).to({y:1130},400,Phaser.Easing.Back.Out).start();
				
				this.storyBtn = game.add.button(320, 1300, 'storyBtn', this.goToStoryState, this);
				this.storyBtn.onDownSound = buttonSound;
				this.storyBtn.scale.x = 1;
				this.storyBtn.scale.y = 1;
				game.add.tween(this.storyBtn).to({y:1130},400,Phaser.Easing.Back.Out).delay(300).start();
				
				this.helpBtn = game.add.button(580, 1300, 'helpBtn', this.goToHelp, this);
				this.helpBtn.onDownSound = buttonSound;
				this.helpBtn.scale.x = 1;
				this.helpBtn.scale.y = 1;
				game.add.tween(this.helpBtn).to({y:1130},400,Phaser.Easing.Back.Out).delay(600).start();
													
				this.muteBtn = game.add.button(730, 20, 'muteBtn', this.toggleSound, this);
				this.muteBtn.scale.x = 1.5;
				this.muteBtn.scale.y = 1.5;
            	if(isSoundOn==true)
            		this.muteBtn.frame = 1;
            	else
            		this.muteBtn.frame = 0;													
	       }
		},
		
		
		toggleSound:function(){
			if(currentNavigator=='desktop'){
                
    			if(isSoundOn==true){
    				this.muteBtn.frame = 0;
    				game.sound.mute = true;
    				isSoundOn = false;
    			}else if(isSoundOn==false){
    				this.muteBtn.frame = 1;
    				game.sound.mute = false;
    				isSoundOn = true;
    			}
    		}
    			
			var fake = this.game.add.sprite(0, 0, '');
		},
		
		startGamePlay:function(){
			
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("levels");
		    }, this);
			
			var fake = this.game.add.sprite(0, 0, '');
		},
		
		
		goToHelp:function()
		{
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("help");
		    }, this);
		},
		
		goToStoryState:function(){
			
			var tweenBlack = this.game.add.graphics(0,0);
    		tweenBlack.beginFill("#000000");
    		tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
    		tweenBlack.alpha = 0;

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},200,Phaser.Easing.Linear.None);
			stateTween.start();
		    stateTween.onComplete.add(function(){
		    	game.state.start("story");
		    }, this);
			
			var fake = this.game.add.sprite(0, 0, '');
		},
		
		update:function(){
			if(!introSound.isPlaying){
		        introSound.stop();
		        introSound.play();
		    }
		},
		
		shutdown:function(){
		}
	}

	/*BOOTING GAME*/
	var bootstate = {
		preload : function() {
	
			game.load.image('loadingBgImg','assets/title/'+currentNavigator+'/title_bg.jpg');
			game.load.image('preloadBg', 'assets/loader/'+currentNavigator+'/line.png');
			game.load.image('preloadBar', 'assets/loader/'+currentNavigator+'/lineFill.png');
			game.load.image('startMenuBtn', 'assets/loader/'+currentNavigator+'/startMenu.png');
			game.load.image('storyBtn', 'assets/loader/'+currentNavigator+'/story_btn.png');
			game.load.image('helpBtn', 'assets/loader/'+currentNavigator+'/help_btn.png');
			
			var fake = this.game.add.sprite(0, 0, '');
		},
		create : function() {
		    
		    firstRunLandscape = game.scale.isGameLandscape;
		    
			this.game.stage.disableVisibilityChange = false;
        
			this.game.stage.backgroundColor = '#000000';

			
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.setShowAll();
			game.scale.forceOrientation(false, true);
			game.scale.enterIncorrectOrientation.add(handleIncorrect);
            game.scale.leaveIncorrectOrientation.add(handleCorrect);

			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
			
			this.game.scale.refresh();
			
			var tweenBlack = this.game.add.graphics(0,0);
            tweenBlack.beginFill("#000000");
            tweenBlack.drawRect(0, 0, stageWidth+1, stageHeight);
            tweenBlack.alpha = 1;

            this.game.state.start('preloader');
            
            var fake = this.game.add.sprite(0, 0, '');
            
            
		},
	}
	
	game.state.add("boot", bootstate);
	game.state.add("preloader", preloader);
	game.state.add("story", showStory);
	game.state.add("help", showTutorial);
	game.state.add("inGame", gameScene);
	game.state.add("levels", levelsScene);
	game.state.start("boot");
}