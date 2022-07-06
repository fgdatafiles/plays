function CAnimation(oVirusContainer){
  
    var _bBossGrow;
  
    var _iDistance;
    var _iVirusType;
    var _iMinionType;
    var _iNumMinion;
    var _iFinalSceneCounter;
  
    var _aScene;
    var _aMinion;
    var _aMinionPos;
  
    var _oBoss;
    var _oVirusContainer;
    var _oParent;
    
  
    this._init = function(oVirusContainer){
        
        _bBossGrow = false;

        _iDistance = 100;
        _iNumMinion = 8;
        _iFinalSceneCounter = 0;
        
        _oVirusContainer = oVirusContainer;
    };
    
    this.playLevelInfo = function(iVirusType, iStage){
        
        var iStartDelay = 0;
        var szColor;
        switch(iVirusType){
            case 1:{
                    szColor = STAGE_ANIM_COLOR[0];
                    break;
            }
            case 2:{
                    szColor = STAGE_ANIM_COLOR[1];
                    break;
            }
            case 3:{
                    iStartDelay = 1000;
                    szColor = STAGE_ANIM_COLOR[2];
                    break;
            }
            case 4:{
                    szColor = STAGE_ANIM_COLOR[3];
                    break;
            }
        }
        
        var oVirusStroke = new createjs.Text(TEXT_VIRUS_TYPE + ": "+iVirusType,"34px "+PRIMARY_FONT, "#000000");
        oVirusStroke.x = CANVAS_WIDTH/2;
        oVirusStroke.y = 300;
        oVirusStroke.alpha = 0;
        oVirusStroke.textAlign = "center";
        oVirusStroke.textBaseline = "middle";
        oVirusStroke.lineWidth = 500;
        oVirusStroke.outline = 5;
        s_oStage.addChild(oVirusStroke);

        var oVirus = new createjs.Text(TEXT_VIRUS_TYPE + ": "+iVirusType,"34px "+PRIMARY_FONT, szColor);
        oVirus.x = oVirusStroke.x;
        oVirus.y = oVirusStroke.y;
        oVirus.alpha = 0;
        oVirus.textAlign = "center";
        oVirus.textBaseline = "middle";
        oVirus.lineWidth = 500;
        s_oStage.addChild(oVirus);
        
        var oStageStroke = new createjs.Text(TEXT_STAGE + ": "+iStage,"34px "+PRIMARY_FONT, "#000000");
        oStageStroke.x = oVirusStroke.x;
        oStageStroke.y = oVirusStroke.y +50;
        oStageStroke.alpha = 0;
        oStageStroke.textAlign = "center";
        oStageStroke.textBaseline = "middle";
        oStageStroke.lineWidth = 500;
        oStageStroke.outline = 5;
        s_oStage.addChild(oStageStroke);

        var oStage = new createjs.Text(TEXT_STAGE + ": "+iStage,"34px "+PRIMARY_FONT, szColor);
        oStage.x = oVirusStroke.x;
        oStage.y = oStageStroke.y;
        oStage.alpha = 0;
        oStage.textAlign = "center";
        oStage.textBaseline = "middle";
        oStage.lineWidth = 500;
        s_oStage.addChild(oStage);

        new createjs.Tween.get(oVirusStroke).wait(iStartDelay).to({alpha:1},1000).wait(1000).to({alpha:0},1000);
        new createjs.Tween.get(oVirus).wait(iStartDelay).to({alpha:1},1000).wait(1000).to({alpha:0},1000);
        new createjs.Tween.get(oStageStroke).wait(iStartDelay).to({alpha:1},1000).wait(1000).to({alpha:0},1000);
        new createjs.Tween.get(oStage).wait(iStartDelay).to({alpha:1},1000).wait(1000).to({alpha:0},1000).call(function(){
            s_oStage.removeChild(oVirusStroke);
            s_oStage.removeChild(oVirus);
            s_oStage.removeChild(oStageStroke);
            s_oStage.removeChild(oStage);
        });

    };
    
    this.playStartScene = function(oBoss, iVirusType){
        
        _iVirusType = iVirusType;
        _iMinionType = _iVirusType +4;
        
        _oBoss = oBoss.getSprite();
        _oBoss.scaleX = _oBoss.scaleY = 0;
        
        var vDistance = new CVector2(0,-1);
        
        vDistance.scalarProduct(_iDistance);
        
        _aMinionPos = new Array();
        _aMinion = new Array();
        for(var i=0; i<_iNumMinion; i++){
            _aMinion[i] = createSprite(s_aVirusSpriteSheet[_iMinionType], "idle",0,0,0,0);            
            _aMinion[i].x = _oBoss.x + vDistance.getX();
            _aMinion[i].y = _oBoss.y + vDistance.getY();
            _oVirusContainer.addChildAt(_aMinion[i],0);

            var iAngle = degreesToRadians(360/_iNumMinion);
            rotateVector2D(iAngle, vDistance);
            
            _aMinionPos[i] = new CVector2(vDistance.getX(), vDistance.getY());
        }
        
        _aScene = new Array();
        _aScene = [this._startScene0, this._startScene2, this._startScene3, this._startScene1];
        
        _aScene[_iVirusType]();

    };
    
    this.unload = function(){
        for(var i=0; i<_aMinion.length; i++){
            _oVirusContainer.removeChild(_aMinion[i]);
        }
    };
    
    this._startScene0 = function(){
        var aShuffleIndex = new Array();        
        for(var j=0; j<_aMinion.length; j++){
            aShuffleIndex[j] = j;
        };
        shuffle(aShuffleIndex);
        
        for(var i=0; i<_aMinion.length; i++){
            _aMinionPos[i].normalize();
            _aMinionPos[i].scalarProduct(200);
            
            _aMinion[i].x = _oBoss.x + _aMinionPos[i].getX();
            _aMinion[i].y = _oBoss.y + _aMinionPos[i].getY();
            
            _aMinion[i].alpha = 0;
        }        
        
        for(var i=0; i<_aMinion.length; i++){
            
            new createjs.Tween.get(_aMinion[aShuffleIndex[i]]).wait(i*100).to({alpha:1},500).to({alpha:0.2},500);
            new createjs.Tween.get(_aMinion[aShuffleIndex[i]]).wait(i*100).to({x:_oBoss.x ,y:_oBoss.y},1000).call(function(){
                playSound("minion_anim",1,false);
            });   
        }
        
        
        setTimeout(function(){            
            _oParent._growBoss();            
        }, 1000);
    };
    
    this._startScene1 = function(){        
        for(var i=0; i<_aMinion.length; i++){
            _aMinion[i].scaleX = _aMinion[i].scaleY = 0;
            new createjs.Tween.get(_aMinion[i]).wait(i*300).to({scaleX:1, scaleY:1},700, createjs.Ease.quartIn);
        }
        
        _oParent._circularAnim();
    };
    
    this._startScene2 = function(){
        var iWidth = 500;
        for(var i=0; i<_aMinion.length; i++){
            _aMinion[i].x = _oBoss.x -iWidth/2 +i*iWidth/(_aMinion.length-1);
            _aMinion[i].y = 400 - Math.random()*100;  
            _aMinion[i].alpha = 0;
            
            new createjs.Tween.get(_aMinion[i]).to({alpha:_oBoss.alpha},300);
            new createjs.Tween.get(_aMinion[i]).to({y:_oBoss.y},1500, createjs.Ease.bounceOut);
            
            new createjs.Tween.get(_aMinion[i]).wait(1500).to({x:_oBoss.x},1500, createjs.Ease.cubicIn);
            
            var iRotation;
            if(i<_aMinion.length/2){
                iRotation = 360 -i*25;
            } else {
                iRotation = - ((360-_aMinion.length/2) +i*20);
            }

            new createjs.Tween.get(_aMinion[i]).wait(1500).to({rotation:iRotation},1500, createjs.Ease.cubicIn);
        }
 
        setTimeout(function(){            
            _oParent._growBoss();            
        }, 2500);
 
    };
    
    this._startScene3 = function(){
        for(var i=0; i<_aMinion.length; i++){
            _aMinion[i].x = _oBoss.x -100;
            _aMinion[i].y = _oBoss.y - (_aMinion.length-1)*30 + i*30;  
            _aMinion[i].alpha = 0;
            
            new createjs.Tween.get(_aMinion[i]).to({alpha:_oBoss.alpha},300);
            
            new createjs.Tween.get(_aMinion[i]).wait(i*300).to({x:_oBoss.x},1500- i*40);
            new createjs.Tween.get(_aMinion[i]).wait(i*300).to({y:_aMinion[i].y - 50},750, createjs.Ease.cubicOut).to({y:_oBoss.y},750 - i*40, createjs.Ease.cubicIn).call(function(){
                _oParent._inflateBoss();
                playSound("minion_anim",1,false);
            });
            
        }    
            
    };
    
    this._circularAnim = function(){
        
        for(var i=0; i<_aMinion.length; i++){
            _iDistance -= 0.1;
            _aMinion[i].alpha = _iDistance/100 + 0.5;
            
            if (_iDistance < 0){ 
                return;
                
            } else if(_iDistance < 10){
                _oParent._growBoss(); 
            }
            
            rotateVector2D(degreesToRadians(2), _aMinionPos[i]);

            _aMinion[i].x = _oBoss.x + _aMinionPos[i].getX();
            _aMinion[i].y = _oBoss.y + _aMinionPos[i].getY();
            
            _aMinionPos[i].normalize();
            _aMinionPos[i].scalarProduct(_iDistance);
        }
        
        setTimeout(function(){
            _oParent._circularAnim();            
        }, FPS_TIME);        
    };
    
    this._endStartScene = function(){
        s_oGame.startGame();
        this.unload();
    };
    
    this._endFinalScene = function(){
        _iFinalSceneCounter++;
        if(_iFinalSceneCounter === _aMinion.length){
            this.unload();
            s_oGame.checkWinGame();
        };
    };
    
    this.playEndScene = function(oBoss, iVirusType){
        
        _iVirusType = iVirusType;
        
        _oBoss = oBoss;
        
        _aMinionPos = new Array();
        _aMinion = new Array();
        for(var i=0; i<_iNumMinion; i++){
            _aMinion[i] = createSprite(s_aVirusSpriteSheet[_iMinionType], "idle",0,0,0,0);            
            _aMinion[i].x = _oBoss.x;
            _aMinion[i].y = _oBoss.y;
            _aMinion[i].gotoAndStop("dead");
            _aMinion[i].alpha = 0;
            _oVirusContainer.addChildAt(_aMinion[i],0);
        }
        
        setTimeout(function(){
            _oParent._endScene0();            
        }, 1000);

    };
    
    this._endScene0 = function(){
        var iXPos;
        var iDelay;
            
        for(var i=0; i<_aMinion.length; i++){
            iXPos = -100 + Math.random()*200;
            iDelay = i*200;
            _aMinion[i].alpha = 1;
            createjs.Tween.get(_aMinion[i]).wait(iDelay).to({x: _aMinion[i].x+ iXPos}, 1000);
            createjs.Tween.get(_aMinion[i]).wait(iDelay).to({y: CANVAS_HEIGHT+50}, 1000, createjs.Ease.backIn).call(function(){
                _oParent._endFinalScene();
            });
        }   
        
        this._shrinkBoss();
        
    };
    
    this._growBoss = function(){
        if(!_bBossGrow){
            
            playSound("boss_idle",1,false);
            
            _bBossGrow = true;
            new createjs.Tween.get(_oBoss).to({scaleX:1, scaleY:1},700, createjs.Ease.bounceIn).wait(500).call(function(){
                _oParent._endStartScene();
            });
        }
    };
    
    this._shrinkBoss = function(){
        new createjs.Tween.get(_oBoss).to({scaleX:0, scaleY:0},1500, createjs.Ease.cubicIn);
        new createjs.Tween.get(_oBoss).to({alpha:0},1500, createjs.Ease.cubicIn);
        
        _oBoss.gotoAndPlay("scared");
        
    };
    
    this._inflateBoss = function(){
        _oBoss.scaleX = 1;
        new createjs.Tween.get(_oBoss).to({scaleY:_oBoss.scaleY + 1/(_aMinion.length)},300).call(function(){
            _oParent._endInflate();
        });
    };
    
    this._endInflate = function(){
        _iNumMinion--;
        if(_iNumMinion === 0){
            playSound("boss_idle",1,false);
            _oBoss.scaleY = 1;
            _oParent._endStartScene();
            _iNumMinion = 8;
        }
    };
    
    _oParent = this;
    this._init(oVirusContainer);
};

