function CGame(oData, iWorld, iStage){
    var _bTouchActive;
    var _bStartGame;
    var _bSeekMode;
    var _bAlternateTremble;
    var _bTremble;
    
    var _aVirus;
    var _aVirusPreviousPos;    
    
    var _iCurLevel = 0;
    var _iVirusType = 0;
    var _iStage = 0;
    var _iIdSpawnInterval;
    var _iIdSpawnTimeout;
    var _iLives;
    var _iScore;
    var _iCurQuote;
    var _iMonsterKilled;
    var _iAnimatedElementsShown;
    var _iCurTrembleIndex = 0;
    var _iIdTrembleInterval;

    var _oInterface;
    var _oEndPanel = null;
    var _oParent;
    var _oController;
   
    var _oHero;
    var _oBorder;
    var _oBoss;
    var _oVirusContainer;
    var _oAnimation;
    var _oScoreAnim;
    var _oAnimScoreContainer;
    
    
    this._init = function(iWorldLevel, iStageLevel){
		WIN_QUOTE = {};
        _bTouchActive=false;
        _bStartGame=false;
        _bAlternateTremble = false;
        
        _iCurQuote = 0;
        _iMonsterKilled = 0;
        _iScore=0;
        _iLives = HERO_LIFE;
        _iAnimatedElementsShown = 0;        
        
        _iVirusType = iWorldLevel;
        _iStage = iStageLevel;
        _iCurLevel = _iVirusType*STAGE_PER_WORLD +_iStage;
        
		for(var i = 0; i < 4; i++)
		{
			if (_iVirusType === 3)
			{
				WIN_QUOTE[i] = oData.win_quote[i] + (_iStage * 2.5)
			}
			else{	
				WIN_QUOTE[i] = oData.win_quote[i] + (_iStage * 5)
			}
		}
		
        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(oBg); //Draws on canvas

        _oInterface = new CInterface(iWorldLevel);        
    
        new CVirusSettings();
        
        var oFrame = createBitmap(s_oSpriteLibrary.getSprite('frame_cover'));
        oFrame.x = 0;
        oFrame.y = 242;
        s_oStage.addChild(oFrame);
        
        _oBorder = new CBorder(iWorldLevel);
    
        _oVirusContainer = new createjs.Container();
        s_oStage.addChild(_oVirusContainer);

        _oAnimScoreContainer = new createjs.Container();
        s_oStage.addChild(_oAnimScoreContainer);

        _oScoreAnim = new CScoreAnim(_oAnimScoreContainer, _oInterface.getNumScorePos());

        _oHero = new CHero(CANVAS_WIDTH/2 + BORDER_WIDTH/2, CANVAS_HEIGHT/2 - BORDER_HEIGHT/2 + BORDER_HEIGHT_OFFSET + BORDER_HEIGHT);

        _oController = new CController(_oHero, _oBorder);

        _oAnimation = new CAnimation(_oVirusContainer);

        setVolume("soundtrack", 1);

        
        if(_iCurLevel === 0){
            new CHelpPanel();            
        } else {
            this._setLevel();
        }
        
        $(s_oMain).trigger("start_level",_iCurLevel);
        
    };
   
    
    this._setLevel = function(){
        
        _aVirusPreviousPos = new Array();
        
        var iSpeed = VIRUS_SPEED[_iCurLevel];        
        
        _aVirus = new Array();
        _aVirus[0] = new CVirus(CANVAS_WIDTH/2,_oBorder.getBorderRect().y + _oBorder.getBorderRect().height/2, _iVirusType, BOSS_MOVEMENT[_iVirusType], iSpeed, _oVirusContainer);     
        _oBoss = _aVirus[0];
        _bSeekMode = true;
        _oBoss.enableSeekMode();
        
        _oAnimation.playLevelInfo(_iVirusType+1, _iStage+1);
        _oAnimation.playStartScene(_oBoss, _iVirusType);
        
        _iIdSpawnTimeout = setTimeout(function(){
            _oParent._spawnVirus();
            _oParent._setSpawnInterval();
            _oParent._setSeekMode();
        }, SPAWN_START_TIME);
        
    };  
    
    this._setSpawnInterval = function(){
        _iIdSpawnInterval = setInterval(function(){
            _oParent._spawnVirus();
            _oParent._setSeekMode();
        }, SPAWN_TIMER);
    };
    
    this.getBorderRect = function(){
        return _oBorder.getBorderRect();
    };
    
    this.getHeroPos = function(){
        return{x: _oHero.getPos().x, y: _oHero.getPos().y};
    };
    
    this.callTremble = function(){
        if(!_bTremble){
            _bTremble = true;
            _iIdTrembleInterval = setInterval(function(){_oParent.tremble();},10);
        }         
    };
    
    this.tremble = function(){
        _bAlternateTremble = !_bAlternateTremble;
        var _iStrenght = 2;
        
        if(_bAlternateTremble){
            var iSignX = Math.random();
            var iNumberX = _iStrenght;
            var iDirX;
            if(iSignX < 0.5){
                iDirX = - iNumberX;             
            } else {
                iDirX = iNumberX;
            }
            var iSignY = Math.random();
            var iNumberY = _iStrenght;
           
            var iDirY;
            if(iSignY < 0.5){
                iDirY = - iNumberY;             
            } else {
                iDirY = iNumberY;
            }
            
            s_oStage.x += iDirX;
            s_oStage.y += iDirY;

        } else {
            s_oStage.x = 0;
            s_oStage.y = 0;
        }
        
        
        _iCurTrembleIndex++;
        if(_iCurTrembleIndex === 50){
            _iCurTrembleIndex = 0;
            _bTremble = false;
            clearInterval(_iIdTrembleInterval);      
        }
    };

    this.nextLevel = function(){
        
        
        _iStage++;
        if(_iStage>2){
            _iStage = 0;
            _iVirusType++;
            if(_iVirusType === 4){
                new CCongratulationPanel();
                return;
            }
        } 
        
        this.unload();
        this._init(_iVirusType, _iStage);
    };
        
    this.restartGame = function () {        
        $(s_oMain).trigger("restart_level", _iCurLevel);
        
        this.unload();
        this._init(_iVirusType, _iStage);
    };        
    
    this.unload = function(){
        _bStartGame = false;
        
        _oInterface.unload();
        if(_oEndPanel !== null){
            _oEndPanel.unload();
        }
        
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();  
    };
 
    this.onExit = function(){
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_level",_iCurLevel);
        $(s_oMain).trigger("end_session");
        this.unload();
        s_oMain.gotoMenu();
    };
    
    this._onExitHelp = function () {
         this._setLevel();         
    };
    
    this.gameOver = function(){  
        $(s_oMain).trigger("end_level",_iCurLevel);
        _oEndPanel = CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));
        _oEndPanel.show(_iScore);
    };
    
    this.loseLife = function(){
        _iLives--;
        s_oInterface.refreshLife(_iLives);
        this.checkLoseGame();
    };
    
    this.checkLoseGame = function(){
        if(_iLives === 0){
            _bStartGame = false;
            this.gameOver();
        }
    };
    
    this.checkWinGame = function(){
        _iAnimatedElementsShown--;

        if( _iAnimatedElementsShown === 0 && !_bStartGame){
            $(s_oMain).trigger("show_interlevel_ad");
            new CNextLevelPanel(_iVirusType, _iStage, _iScore);
        };
    };
    
    this.checkClosedElements = function(iClosedQuote, iWeaveLength){
        this.checkMonsterToKill();

        this._calculateWeaveScore(iClosedQuote, iWeaveLength);

        if(iClosedQuote >= WIN_QUOTE[_iVirusType]){
            $(s_oMain).trigger("end_level",_iCurLevel);
            
            setVolume("soundtrack", 0);
            
            playSound("boss_dead",1,false);
            s_oGame.stopGame();
            
            clearInterval(_iIdSpawnInterval);    
            clearInterval(_iIdSpawnTimeout); 
            
            _oBoss.gotoDeadAnim();
            _iAnimatedElementsShown++;
            _oAnimation.playEndScene(_oBoss.getSprite(), _iVirusType+4);
            
            for(var i=1; i<_aVirus.length; i++){
                _aVirus[i].dead();
            }     
        }
    };
    
    this._calculateWeaveScore = function(iClosedQuote, iWeaveLength){
        
        var iPartialAreaClosed = iClosedQuote - _iCurQuote;
        _iCurQuote = iClosedQuote;
        
        var iClosedAreaPoints = Math.round(iPartialAreaClosed * 10);
        
        //MULTIPLIER IS NORMALIZED WITH HERO SPEED
        var iMultiplier = iWeaveLength*HERO_SPEED[SELECTED_SPEED]/100;
        
        var iWeaveScore = Math.round(iClosedAreaPoints*iMultiplier);
        if(iWeaveScore === 0){
            return;
        }
        _iAnimatedElementsShown++;
        _oScoreAnim.play(iWeaveScore, _oHero.getPos());

    };
    
    this.refreshScore = function(iValue){        
        _iScore += iValue;
        
        _oInterface.refreshScore(_iScore); 
    };
    
    this._setSeekMode = function(){
        if(_bSeekMode){                
            _oBoss.disableSeekMode();
        } else {
            _oBoss.enableSeekMode();
        }
        _bSeekMode = !_bSeekMode;
    };
    
    this._spawnVirus = function(){

        if(_aVirus.length -1 === MAX_NUM_VIRUS_MINIONS[_iCurLevel]){
            return;
        }
        
        _oBoss.callTremble();

        var iMinionMovement;
        if(_iStage === 2){
            iMinionMovement = BOSS_MOVEMENT[_iVirusType];
        } else {
            iMinionMovement = MOVEMENT_LINEAR;
        }

        for(var i=_aVirus.length-1; i<MAX_NUM_VIRUS_MINIONS[_iCurLevel]; i++){
            _aVirus.push(new CVirus(_oBoss.getPos().x,_oBoss.getPos().y, _iVirusType + 4, iMinionMovement, VIRUS_SPEED[_iCurLevel]/2, _oVirusContainer));
        }
        
    };
    
    this.checkBossToKill = function(oBorderMask){
        if(oBorderMask.hitTest(_oBoss.getPos().x, _oBoss.getPos().y)){
            return true;
        } else {            
            return false;
        }
    };

    this.checkMonsterToKill = function(){
        var bKilled = false;
        for(var i=1; i<_aVirus.length; i++){
            if(!_oBorder.hitMask(_aVirus[i].getPos().x, _aVirus[i].getPos().y) && !_aVirus[i].isDying()){
                bKilled = true; 
                _aVirus[i].dead();
                _iMonsterKilled++;
                _iAnimatedElementsShown++;
                _oScoreAnim.play(MINION_SCORE, _aVirus[i].getPos());
            }
        } 
        
        if(bKilled){
            if(Math.random()<0.5){
                playSound("virus_dead_0",1,false);
            }else {
                playSound("virus_dead_1",1,false);
            }
        }
        
        
    };
    
    this._savePreviousPos = function(iIndex){
        _aVirusPreviousPos[iIndex] = _aVirus[iIndex].getPos();
    };
    
    this._clearVirus = function(){
        //IF VIRUS IS DEAD REMOVE FROM ARRAY;
        for(var i=_aVirus.length-1; i>=0; i--){
            if(_aVirus[i].isDead()){
                _aVirus[i].unload();
                _aVirus.splice(i,1);
            }
        }
    };
    
    this._checkCollision = function(){
        
        for(var i=0; i<_aVirus.length; i++){
            //ITERATE ON EACH VIRUS
            
            var aWeave = _oHero.getWeavePoint();
            for(var j=0; j<aWeave.length; j++){
                if(_aVirus[i].checkCollision(aWeave[j].x, aWeave[j].y)){
                    _oHero.dead();
                    this.callTremble();
                    this.loseLife();
                    break
                }    
            }

            var aBorderPoints = _oBorder.getBorderPoints();
            for(var j=0; j<aBorderPoints.length; j++){
                if(_aVirus[i].checkCollision(aBorderPoints[j].x, aBorderPoints[j].y)){                     
                    _aVirus[i].setPos(_aVirusPreviousPos[i].x, _aVirusPreviousPos[i].y);
                    _aVirus[i].changeDirection(_oBorder.getPlaneDirection(j));                    
                    break
                }
            }
        }
    };
    
    this._setPermittedSpeed = function(iValue){
        var iSpeed = iValue -1;
        if(iSpeed > 2){
            iSpeed = 2
        } else {
            iSpeed = Math.floor(iSpeed);
        }
        
        return iSpeed;
    };
    
    this.startGame = function(){
        _bStartGame = true;
    };
    
    this.stopGame = function(){
        _bStartGame = false;
    };
    
    this.update = function(){        
        if(_bStartGame){
            this._clearVirus();

            for(var i=0; i<_aVirus.length; i++){
                this._savePreviousPos(i);
                _aVirus[i].update();
            }

            this._checkCollision();

            if(!_oHero.isDead()){
                _oController.update();
            }
        }        
    };

    s_oGame=this;
    
    SELECTED_SPEED = this._setPermittedSpeed(oData.hero_speed);
    HERO_LIFE = oData.hero_starting_life;
    WIN_QUOTE = oData.win_quote;
    VIRUS_SPEED = oData.virus_speed;
    MAX_NUM_VIRUS_MINIONS = oData.max_num_minions_spawn;
    MINION_SCORE = oData.minion_killed_score;
    
    SCORE_FIRST_STAR = oData.score_star_earned[0];
    SCORE_SECOND_STAR = oData.score_star_earned[1];
    SCORE_THIRD_STAR = oData.score_star_earned[2];
    
    _oParent=this;
    this._init(iWorld, iStage);
}

var s_oGame;
