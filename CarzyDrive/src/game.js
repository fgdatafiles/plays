window.onload = startGame;
var stageWidth;
var stageHeight;
var currentNavigator;

currentNavigator = 'desktop';
stageWidth = 768;
stageHeight = 1024;

var game = new Phaser.Game(stageWidth, stageHeight, Phaser.CANVAS, '');
var cache = new Phaser.Cache(game);
var customFontStyle1 = 'Source';
var customFontStyle2 = 'Exo';
var isSoundOn = true;
var score = 0;
var starsCollected = 0;
var distance = 0;
var gamePaused = false;
var gameOverFlag = false;
var playerCar;
var enemyCar;
var totalLives = 3;
var livesRemaining = totalLives - 1; 
var totalStarsOnScreen = 2;
var enemyX;
var enemyVelocity;
var livesImg;
var enemyGenerated = false;
var starsCollectedTxt;
var star1;
var star1X;
var lostLifeTxt;
var star1Velocity;
var star1Generated = false;
var RIGHT=0;
var LEFT=1;
var finalScore = 0;
var firstRunLandscape;

var rockCollideFlag = false;

var star2;
var star2X;
var star2Velocity;
var star2Generated = false;

var leftKey;
var rightKey;

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
	
	function handleCorrect(){
		if(!game.device.desktop){
			if(firstRunLandscape){
				gameRatio = window.innerWidth/window.innerHeight;		
				game.width = Math.ceil(768*gameRatio);
				game.height = 1024;
				game.renderer.resize(game.width,game.height);
				game.state.start("preloader");		
			}
			document.getElementById("turn").style.display="none";
		}
	}

var ua = navigator.userAgent.toLowerCase();
var isSharpMiniStock = ((/SHL24/i).test(ua)) && isStock();
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock();
var isFujitsu = ((/F-01F/i).test(ua)) && isStock();
var isSharp = ((/SH-01F/i).test(ua)) && isStock();


function releaseCollideFlag(){
	rockCollideFlag = false;
}

function gameOverFunc(){
			
	gameOverBoard = game.add.sprite(75,-400,'gameOverBoard')
	game.add.tween(this.gameOverBoard).to({y:230},600,Phaser.Easing.Back.Out).start();
	
	gameOverTxt = game.add.text(220, -370, "Game Over");
	gameOverTxt.fill = "white";
	gameOverTxt.font = customFontStyle2;
	gameOverTxt.fontSize = 50; 
	game.add.tween(gameOverTxt).to({y:300},600,Phaser.Easing.Back.Out).start();
	
	
	distanceCoverTxt = game.add.text(170, -320, "Distance: "+distance+"m");
	distanceCoverTxt.fill = "white";
	distanceCoverTxt.font = customFontStyle2;
	distanceCoverTxt.fontSize = 45; 
	game.add.tween(distanceCoverTxt).to({y:400},600,Phaser.Easing.Back.Out).start();
	
	
	finalScore = parseInt((distance*2.7));
	 
	finalscoreTxt = game.add.text(170, -320, "Score: "+finalScore);
	finalscoreTxt.fill = "white";
	finalscoreTxt.font = customFontStyle2;
	finalscoreTxt.fontSize = 45; 
	game.add.tween(finalscoreTxt).to({y:500},600,Phaser.Easing.Back.Out).start();
	
	
	replayBtn = game.add.button(75, 800, 'replayImg', replayGame, this);
	
	//submitBtn = game.add.button(400, 800, 'submitImg', submitUserScore, this);
}


function submitUserScore(){
		var submit_score=finalScore;
		submit_on_game_click(submit_score);
}

function replayGame(){
	
	gameOverFlag = false;

   updatePlayAgain();

}

function spawnEnemy(){
	if(enemyGenerated == false){
				
				enemyGenerated = true;
				enemyX = getRandomInt(50,500);
				enemyVelocity = 19;
				
				enemyCar = game.add.sprite(enemyX,-400,'enemyImg');
				game.physics.arcade.enableBody(enemyCar, false);
		    	enemyCar.body.setSize(100,200,50,55);
			}
}

function spawnStars1(){
	if(star1Generated == false){
		
		star1Generated = true;
		star1X = getRandomInt(100,enemyX-50);
		star1Velocity = getRandomInt(7,20);
				
		star1 = game.add.sprite(star1X,-400,'starsGameImg');
		game.physics.arcade.enableBody(star1, false);
		star1.body.setSize(30,40,20,25);
		
	}
}

function spawnStars2(){
	if(star2Generated == false){
		
		star2Generated = true;
		star2X = getRandomInt(enemyX+50,550);
		star2Velocity = getRandomInt(7,20);
				
		star2 = game.add.sprite(star2X,-400,'starsGameImg');
		game.physics.arcade.enableBody(star2, false);
		star2.body.setSize(30,40,20,25);
		
	}
}

function startGame() {
	
	var stockAndroid = window.navigator && window.navigator.userAgent.indexOf('534.30') > 0 && window.navigator.userAgent.toLowerCase().match(/android/);
	
	if(stockAndroid){
	}
	
	var introSound;
	var buttonSound;
	var magicSound;	
	
	/*GAME SCENE*/
	var gameScene = {
		
		preload:function(){
			
			gameOverFlag = false;
			
			score = 0;
			starsCollected = 0;
			distance = 0;
			playerCar = undefined;
			enemyCar = undefined;
			livesRemaining = totalLives - 1;
			enemyGenerated = false;
			finalScore = 0;
			
			star1 = undefined;
			star1Generated = false
			
			star2 = undefined;
			star2Generated = false
			
		},
		
		create:function(){
			
			game.physics.startSystem(Phaser.Physics.Arcade);
			
			this.gameBg = this.game.add.sprite(0, 0, 'gameBgImg');
			this.gameBg.scale.x = stageWidth/this.gameBg.width;
			this.gameBg.scale.y = stageHeight/this.gameBg.height;
			
			this.rockImg = game.add.tileSprite(5, 0, 41, 1024, 'rockImg');
			game.physics.arcade.enableBody(this.rockImg, false);
			
			this.rock2Img = game.add.tileSprite(715, 0, 41, 1024, 'rockImg');
			game.physics.arcade.enableBody(this.rock2Img, false);
		    
		    playerCar = game.add.sprite(300,550,'playerCar');
		    playerCar.frame = 0;
		    
		    game.physics.arcade.enableBody(playerCar, false);
		    playerCar.body.setSize(100,200,60,63);
		    
		    
		    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    		
    		this.bheemImg = game.add.sprite(40, 80, 'bheemImg');
    		
    		this.scoreBoardImg = game.add.sprite(0,10, 'scoreBoardImg');
    		
    		this.starImg = game.add.sprite(20,15,'starImg');
    		this.starImg.scale.x = 0.8;
    		this.starImg.scale.y = 0.8;
    		
    		starsCollectedTxt = game.add.text(75, 25, "x"+parseInt(starsCollected));
		    starsCollectedTxt.fill = "black";
		    starsCollectedTxt.font = customFontStyle1;
		    starsCollectedTxt.fontSize = 40;
		    
		    this.distanceTxt = game.add.text(200, 27, "Score: "+distance+"m");
		    this.distanceTxt.fill = "black";
		    this.distanceTxt.font = customFontStyle1;
		    this.distanceTxt.fontSize = 35;
		    
		    livesImg = game.add.sprite(500,17,'livesImg');
		    livesImg.scale.x = 0.7;
		    livesImg.scale.y = 0.7;
		    livesImg.frame = livesRemaining + 1;
		    
		    this.muteBtn = game.add.button(680, 15, 'muteBtn', this.toggleSound, this);
		    this.muteBtn.scale.x = 0.8;
		    this.muteBtn.scale.y = 0.8;
		    
            if(isSoundOn==true)
            	this.muteBtn.frame = 1;
            else
            	this.muteBtn.frame = 0;
        
        	
        	setTimeout(spawnEnemy, 2000);
        	
        	setTimeout(spawnStars1, 2000);
        	
        	setTimeout(spawnStars2, 2000);
        	    
			var fake = this.game.add.sprite(0, 0, '');
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
			// game.debug.body(playerCar);
// 			
			// if(enemyCar!=undefined)	
				// game.debug.body(enemyCar);
// 				
			// if(star1!=undefined)	
				// game.debug.body(star1);
// 				
			// if(star2!=undefined)	
				// game.debug.body(star2);
// 			
			// if(this.rockImg!=undefined)	
				// game.debug.body(this.rockImg);
// 				
			// if(this.rock2Img!=undefined)	
				// game.debug.body(this.rock2Img);
		},
		
		collided:function(){
			
			if(livesRemaining>0){
				livesRemaining -= 1;
				livesImg.frame = livesRemaining + 1;
				
				enemyCar.destroy();
				enemyCar == undefined;
				enemyGenerated = false;
							
				//timeInterval = getRandomInt(400,1000)
				spawnEnemy();
				
				lostLifeTxt = game.add.text(300, playerCar.y, "Life lost");
				lostLifeTxt.fill = "red";
				lostLifeTxt.font = customFontStyle2;
				lostLifeTxt.fontSize = 50; 
				game.add.tween(lostLifeTxt).to({y:-100},600,Phaser.Easing.Linear.None).start();
			}
			else{
				
				enemyCar.destroy();
				enemyCar == undefined;
				enemyGenerated = false;
				
				gameOverFlag = true;
				playerCar.frame = 3;
				livesImg.frame = 0;
				
				gameOverFunc();
			}
		},
		
		collideRock:function(){
			
			if(rockCollideFlag == false){
				
				rockCollideFlag = true;
				
				if(livesRemaining>0){
					livesRemaining -= 1;
					livesImg.frame = livesRemaining + 1;
								
					lostLifeTxt = game.add.text(300, playerCar.y, "Life lost");
					lostLifeTxt.fill = "red";
					lostLifeTxt.font = customFontStyle2;
					lostLifeTxt.fontSize = 50; 
					game.add.tween(lostLifeTxt).to({y:-100},600,Phaser.Easing.Linear.None).start();
					//timeInterval = getRandomInt(400,1000)
				}
				else{
					
					gameOverFlag = true;
					playerCar.frame = 3;
					livesImg.frame = 0;
					
					gameOverFunc();
				}
				
				setTimeout(releaseCollideFlag, 1500);
			}
		},
		
		collideStar1:function(){
			
			starsCollected += 1;
			
			starsCollectedTxt.setText("x"+parseInt(starsCollected));
			
			star1.destroy();
			star1 == undefined;
			star1Generated = false;
							
			timeInterval = getRandomInt(400,1000)
			setTimeout(spawnStars1, timeInterval);
			
		},
		
		collideStar2:function(){
			
			starsCollected += 1;
			
			starsCollectedTxt.setText("x"+parseInt(starsCollected));
			
			star2.destroy();
			star2 == undefined;
			star2Generated = false;
							
			timeInterval = getRandomInt(400,1000)
			setTimeout(spawnStars2, timeInterval);
			
		},
		
		update:function(){
			
			if(gameOverFlag==false){
				
				if(enemyGenerated==true){
					
					if(enemyCar!=undefined){
						if(enemyCar.y<1000){
						enemyCar.y += enemyVelocity;
						}else{
							enemyCar.destroy();
							enemyCar == undefined;
							enemyGenerated = false;
							
							timeInterval = getRandomInt(400,1000);
							spawnEnemy();
						}
					}
					
				}
				
				if(star1Generated==true){
					if(star1!=undefined){
						if(star1.y<1000){
							star1.y += star1Velocity;
						}else{
							star1.destroy();
							star1 == undefined;
							star1Generated = false;
							
							timeInterval = getRandomInt(400,1000)
							setTimeout(spawnStars1, timeInterval);
						}
					}
				}
				
				if(star2Generated==true){
					if(star2!=undefined){
						if(star2.y<1000){
							star2.y += star2Velocity;
						}else{
							star2.destroy();
							star2 == undefined;
							star2Generated = false;
							
							timeInterval = getRandomInt(400,1000)
							setTimeout(spawnStars2, timeInterval);
						}
					}
				}
				
				
				if(enemyCar!=undefined){
					this.game.physics.arcade.overlap(playerCar,enemyCar,this.collided);
				}
				
				if(star1!=undefined){
					this.game.physics.arcade.overlap(playerCar,star1,this.collideStar1);
				}
				
				if(star2!=undefined){
					this.game.physics.arcade.overlap(playerCar,star2,this.collideStar2);
				}
				
				if(this.rockImg!=undefined){
					this.game.physics.arcade.overlap(playerCar,this.rockImg,this.collideRock);
				}
				
				if(this.rock2Img!=undefined){
					this.game.physics.arcade.overlap(playerCar,this.rock2Img,this.collideRock);
				}
				
				distance += 1.1;
				distance = Math.round( distance * 10 ) / 10;
				
				this.distanceTxt.setText("Score: "+distance+"m");
				
				this.rockImg.tilePosition.y += 17;
			
				this.rock2Img.tilePosition.y += 17;
				
				
				//Keyboard
				if (leftKey.isDown){
					if(playerCar.x>-50){
		        		playerCar.x -= 7;
		        	}
		        	this.bheemImg.frame = 1;
			    }
			    else if (rightKey.isDown){
			    	if(playerCar.x<600){
			        	playerCar.x += 7;
			        }
			        this.bheemImg.frame = 2;
			    }
			    else{
			    	this.bheemImg.frame = 0;
			    }
			    
			    if (isMobile.apple.ipod || isMobile.apple.tablet || isMobile.apple.phone || isMobile.apple.device || 
	isMobile.android.phone || isMobile.android.tablet || isMobile.android.device ||
	isMobile.any || isMobile.phone || isMobile.tablet ||
	isMobile.seven_inch) {
				    //TOuch
				    if (game.input.pointer1.isDown){          
				    	
				    	if (Math.floor(game.input.x/(game.width/2)) === RIGHT) {      
					    	if(playerCar.x>-50){
			        			playerCar.x -= 7;
				        	}
				        	this.bheemImg.frame = 1;      
				    	}    
				    	if (Math.floor(game.input.x/(game.width/2)) === LEFT) {      
				    		//  Move to the right      
				    		if(playerCar.x<600){
					        	playerCar.x += 7;
					        }
					        this.bheemImg.frame = 2;   
				    	}    
				    }
				    else{      
				    	//  Stand still  
				    	this.bheemImg.frame = 0;
				    }
			    }
			    
			    
			    game.world.bringToTop(this.scoreBoardImg);
			    game.world.bringToTop(this.starImg);
			    game.world.bringToTop(starsCollectedTxt);
			    game.world.bringToTop(this.distanceTxt);
			    game.world.bringToTop(livesImg);
			    game.world.bringToTop(this.muteBtn);
			    game.world.bringToTop(this.bheemImg);
			    
			    
			}
			
			if(!introSound.isPlaying){
                introSound.stop();
                introSound.play();
            }
		}
	}
	


	/* STORY MODE*/
	var showStory = {
		
		preload:function(){
			
		},
		
		
		create:function(){
				
			this.storyBg = this.game.add.sprite(0,0,'storyImg');
		    this.storyBg.scale.x = stageWidth/this.storyBg.width;
			this.storyBg.scale.y = stageHeight/this.storyBg.height;
		    
		    this.showTutorialBtn = game.add.button(230, 880, 'startMenuBtn', this.transitionToHowToPlay, this);
			this.showTutorialBtn.onDownSound = buttonSound;
				
			game.add.tween(this.showTutorialBtn.scale).to({x:1.1,y:1.1},600,Phaser.Easing.Linear.None)
														  .to({x:1,y:1},600,Phaser.Easing.Linear.None).loop().start();
				
			game.add.tween(this.showTutorialBtn).to({x:220,y:870},600,Phaser.Easing.Linear.None)
													.to({x:230,y:880},600,Phaser.Easing.Linear.None).loop().start();
													  
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
		
		showHowToPlay:function(){
			
			this.storyBg.destroy();
			this.showTutorialBtn.destroy();
			
			this.howToPlayBg = this.game.add.sprite(0,0,'howtoplayImg');
		    this.howToPlayBg.scale.x = stageWidth/this.howToPlayBg.width;
			this.howToPlayBg.scale.y = stageHeight/this.howToPlayBg.height;
		    
		    this.playBtn = game.add.button(230, 880, 'startMenuBtn', this.loadGame, this);
			this.playBtn.onDownSound = buttonSound;
				
			game.add.tween(this.playBtn.scale).to({x:1.1,y:1.1},600,Phaser.Easing.Linear.None)
														  .to({x:1,y:1},600,Phaser.Easing.Linear.None).loop().start();
				
			game.add.tween(this.playBtn).to({x:220,y:870},600,Phaser.Easing.Linear.None)
													.to({x:230,y:880},600,Phaser.Easing.Linear.None).loop().start();
		},
		
		
		loadGame:function(){
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
				
				this.preloadBg = this.game.add.sprite(150,660,'preloadBg');
				this.preloadBg.scale.x = 1.18;
				this.preloadBg.scale.y = 1.55;
				
				this.preloadBar = this.game.add.sprite(160,670,'preloadBar');	
			}
			
        	game.load.setPreloadSprite(this.preloadBar, 0);
        	
        	
        	//STORY MODE
        	game.load.image('storyImg','assets/story/'+currentNavigator+'/story.jpg');
        	game.load.image('howtoplayImg','assets/story/'+currentNavigator+'/howtoplay.jpg');
        	
        	//IN GAME
        	
        	game.load.image('gameBgImg','assets/ingame/'+currentNavigator+'/gameBgImg.png');
        	game.load.image('rockImg','assets/ingame/'+currentNavigator+'/rock.png');
        	game.load.image('enemyImg','assets/ingame/'+currentNavigator+'/enemy.png');
        	game.load.image('scoreBoardImg','assets/ingame/'+currentNavigator+'/scoreboard.png');
        	game.load.image('starImg','assets/ingame/'+currentNavigator+'/star.png');
        	game.load.image('gameOverBoard','assets/ingame/'+currentNavigator+'/gameOverBoard.png');
        	
        	game.load.image('replayImg','assets/ingame/'+currentNavigator+'/replay.png');
        	//game.load.image('submitImg','assets/ingame/'+currentNavigator+'/submit.png');
        	
        	this.load.spritesheet('playerCar','assets/ingame/'+currentNavigator+'/riverkayak.png',201,351,4);
        	this.load.spritesheet('bheemImg','assets/ingame/'+currentNavigator+'/bheem.png',150,150,3);
        	this.load.spritesheet('livesImg','assets/ingame/'+currentNavigator+'/lives.png',199,65,4);
        	this.load.spritesheet('starsGameImg','assets/ingame/'+currentNavigator+'/stars.png',80,65,2);
        	
        	//TITLE SCREEN
        	game.load.image('playBtn','assets/title/'+currentNavigator+'/play_btn.png');
        	this.load.spritesheet('muteBtn','assets/title/'+currentNavigator+'/mute_unmute.png',67,68,2);
        	
        	//SOUNDS
        	game.load.audio('intro',['sounds/bgmusic.mp3']);
			game.load.audio('button',['sounds/button.mp3','sounds/button.ogg']);
			game.load.audio('magic',['sounds/magic.mp3','sounds/magic.ogg']);
			
			
			if(localStorage['topScore']!=undefined)
				topScore = localStorage['topScore']; 
        	
			var fake = this.game.add.sprite(0, 0, '');
		},
		create : function() {
		    
			introSound = this.game.add.audio('intro', 0.4, false);
			buttonSound = this.game.add.audio('button', 0.2, false);
			magicSound = this.game.add.audio('magic', 1, false);
			
			introSound.play();
	        
			var fake = this.game.add.sprite(0, 0, '');
			this.loadStartBtn();
			
		},
		
		loadStartBtn:function(){
			this.preloadBar.destroy();
			this.preloadBg.destroy();
			
			if(currentNavigator=='desktop'){
				this.startMenuButton = game.add.button(230, 880, 'startMenuBtn', this.startGamePlay, this);
				this.startMenuButton.onDownSound = buttonSound;
				
				game.add.tween(this.startMenuButton.scale).to({x:1.1,y:1.1},600,Phaser.Easing.Linear.None)
														  .to({x:1,y:1},600,Phaser.Easing.Linear.None).loop().start();
				
				game.add.tween(this.startMenuButton).to({x:220,y:870},600,Phaser.Easing.Linear.None)
													.to({x:230,y:880},600,Phaser.Easing.Linear.None).loop().start();
													
													
				this.muteBtn = game.add.button(650, 30, 'muteBtn', this.toggleSound, this);
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

			var stateTween = game.add.tween(tweenBlack).to({alpha:1},300,Phaser.Easing.Linear.None);
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
	game.state.add("inGame", gameScene);
	game.state.start("boot");
}