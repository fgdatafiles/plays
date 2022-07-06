function CVirus(iX, iY, iType, iMovementType, iSpeed, oParentContainer){
    
    var _bInvert;
    var _bDead;
    var _bDeadAnim;
    var _bAlternateTremble;
    var _bTremble;
    var _bSeekMode;
    var _bCircularOnX;
    
    var _iSpeed;
    var _iColliderRadius;
    var _iSquareColliderRadius;
    var _iCntFrames;
    var _iMaxFrames;
    var _iCurMovementMode;
    var _iIdInterval;
    var _iCurTrembleIndex;
    
    var _oVirus;
    var _oParent;
    
    var _vDirection;
    var _vCollisionPlaneNormal;
    
    var _pPreventLoopPosition;
    var _pDiscreteStartPoint;
    var _pDiscreteFinalPoint;
    var _pTrembleStartPoint;
    
    
    this ._init = function(iX, iY, iType, iMovementType, iSpeed, oParentContainer){
        _bInvert = false;
        _bDead = false;
        _bDeadAnim = false;
        _bSeekMode = false;
        _bCircularOnX = false;
        
        _iCntFrames = 0;
        _iMaxFrames;
        _iCurTrembleIndex = 0;
        
        _iSpeed = iSpeed;
        _iCurMovementMode = iMovementType;
        
        
        _oVirus = createSprite(s_aVirusSpriteSheet[iType], "idle",0,0,0,0);
        _oVirus.x = iX;
        _oVirus.y = iY;
        _oVirus.addEventListener("animationend", this._onCompleteDead);
        oParentContainer.addChildAt(_oVirus,0);
        
        _iColliderRadius = s_aColliderRadius[iType];

        _iSquareColliderRadius = Math.pow(_iColliderRadius,2);       
        
        
        _vDirection = new CVector2(-1 + 2*Math.random(),-1 + 2*Math.random());
        _vDirection.normalize();
        _vDirection.scalarProduct(_iSpeed);
        
        _vCollisionPlaneNormal = new CVector2(0,0);
        
        _pPreventLoopPosition = {x:_oVirus.x, y: _oVirus.y};
        _pDiscreteStartPoint = {x:_oVirus.x, y: _oVirus.y};
        _pDiscreteFinalPoint = {x:_oVirus.x, y: _oVirus.y};
        
        this._setDirection();
        
    };
    
    this.unload = function(){
        oParentContainer.removeChild(_oVirus);
    };

    this.checkCollision = function(iX, iY){
        var iXDiff = iX - _oVirus.x;
        var iYDiff = iY - _oVirus.y;
        
        return (iXDiff*iXDiff + iYDiff*iYDiff < _iSquareColliderRadius);
    };
    
    this.getSprite = function(){
        return _oVirus;
    };
    
    this.getPos = function(){
        return {x:_oVirus.x, y: _oVirus.y};
    };
    
    this.callTremble = function(){
        _iCurMovementMode = MOVEMENT_STOP;
        _pTrembleStartPoint = {x: _oVirus.x, y: _oVirus.y};
        if(!_bTremble){
            _bTremble = true;
            _iIdInterval = setInterval(function(){_oParent.tremble();},10);
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
            
            _oVirus.x += iDirX;
            _oVirus.y += iDirY;

        } else {
            _oVirus.x = _pTrembleStartPoint.x;
            _oVirus.y = _pTrembleStartPoint.y;
        }
        
        
        _iCurTrembleIndex++;
        if(_iCurTrembleIndex === 100){
            _iCurTrembleIndex = 0;
            _bTremble = false;
            clearInterval(_iIdInterval);      
            _iCurMovementMode = iMovementType;

        }
    };
    
    this.enableSeekMode = function(){
        _bSeekMode = true;
    };
    
    this.disableSeekMode = function(){
        _bSeekMode = false;
    };
    
    this.setPos = function(iX, iY){
        _oVirus.x = iX;
        _oVirus.y = iY;
    };
    
    this.isDead = function(){
        return _bDead;
    };
    
    this.isDying = function(){
        return _bDeadAnim;
    }
    
    this.gotoDeadAnim = function(){
        _oVirus.gotoAndStop("dead");
    };
    
    this.dead = function(){
        if(!_bDeadAnim){
            _oVirus.gotoAndPlay("dead");
            _bDeadAnim = true;
        } 
    };
    
    this._onCompleteDead = function(){
        if(_oVirus.currentAnimation === "dissolve"){
            _bDead = true;
            _oVirus.gotoAndStop("stop");
        }
    };
    
    this._setDirection = function(){
        
        if(_bSeekMode && iMovementType !== MOVEMENT_LINEAR){            
            this._setHeroDirection();
        }else {
            switch(iMovementType){
                case MOVEMENT_RANDOM:{
                        this._setRandomDirection();
                        break;
                }
                case MOVEMENT_LINEAR:{
                        this._setReflectDirection();
                        break;
                }
                case MOVEMENT_DISCRETE:{
                        this._setDiscreteDirection();
                        break;
                }
                case MOVEMENT_CIRCULAR:{
                        this._setDiscreteDirection();
                        break;
                }   
                default:{
                        this._setReflectDirection();
                        break;
                }
            }
        }
    };
    
    this._setRandomDirection = function(){
        _iCurMovementMode = MOVEMENT_RANDOM;
        
        var iX = -1 + 2*Math.random();
        var iY = -1 + 2*Math.random();
        
        _vDirection = new CVector2(iX,iY);
        
        _vDirection.normalize();
        _vDirection.scalarProduct(_iSpeed);
    };
    
    this._setReflectDirection = function(){        
        _vDirection = reflectVectorV2(_vDirection, _vCollisionPlaneNormal);        
    };
    
   
    this._setDiscreteDirection = function(){
        if(iMovementType === MOVEMENT_DISCRETE){
            _iCurMovementMode = MOVEMENT_DISCRETE;
        } else if(iMovementType === MOVEMENT_CIRCULAR) {
            if(Math.random() < 0.5){
                _bCircularOnX = true;
            }else {
                _bCircularOnX = false;
            }
            _iCurMovementMode = MOVEMENT_CIRCULAR;
        }
        
        _iCntFrames = 0;
        
        _pDiscreteStartPoint = {x: _oVirus.x, y: _oVirus.y};
        
             
        var iSquareDistance;        
        do{
            _pDiscreteFinalPoint = {x: s_oGame.getBorderRect().x +Math.random()*s_oGame.getBorderRect().width, y: s_oGame.getBorderRect().y +Math.random()*s_oGame.getBorderRect().height};
            iSquareDistance = Math.pow(_pDiscreteFinalPoint.x - _pDiscreteStartPoint.x, 2) + Math.pow(_pDiscreteFinalPoint.y - _pDiscreteStartPoint.y, 2);
        }while(iSquareDistance < 10000)
        
        var iDistance = Math.sqrt(iSquareDistance);
        
        _iMaxFrames = iDistance / _iSpeed;        
        
    };
    
    this._setStopDirection = function(){
        setTimeout(function(){
            _oParent._setDirection();           
        }, 10);
    };
    
    this._setHeroDirection = function(){
        
        _iCntFrames = 0;
        
        _pDiscreteStartPoint = {x: _oVirus.x, y: _oVirus.y};
        _pDiscreteFinalPoint = {x: s_oGame.getHeroPos().x, y: s_oGame.getHeroPos().y};
        
        var iDistance = Math.sqrt(Math.pow(_pDiscreteFinalPoint.x - _pDiscreteStartPoint.x, 2) + Math.pow(_pDiscreteFinalPoint.y - _pDiscreteStartPoint.y, 2));
        _iMaxFrames = iDistance / _iSpeed;
        
        
        _vDirection = new CVector2(_pDiscreteFinalPoint.x,_pDiscreteFinalPoint.y);       
        var vSub = new CVector2(_pDiscreteStartPoint.x,_pDiscreteStartPoint.y);       
        
        _vDirection.subV(vSub);
        
        _vDirection.normalize();
        _vDirection.scalarProduct(_iSpeed);
        
        _iCurMovementMode = iMovementType;
    };
   
    this._frictionMovement = function(){
        _iCntFrames++;
        
        if ( _iCntFrames > _iMaxFrames ){
            _iCntFrames = 0;
            _iCurMovementMode = MOVEMENT_STOP;
            this._setStopDirection();

        } else {
            var fLerpY = s_oTweenController.easeInOutCubic( _iCntFrames, 0 ,1, _iMaxFrames);
            var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.y, _pDiscreteFinalPoint.y, fLerpY);

            _oVirus.y = iValue;	

            var fLerpX = s_oTweenController.easeInOutCubic( _iCntFrames, 0 ,1, _iMaxFrames);
            var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.x, _pDiscreteFinalPoint.x, fLerpX);

            _oVirus.x = iValue;
        }
    };

    this._circularMovement = function(){
        _iCntFrames++;
        
        if ( _iCntFrames > _iMaxFrames ){
            _iCntFrames = 0;
            _iCurMovementMode = MOVEMENT_STOP;
            this._setStopDirection();

        } else {
            if(!_bCircularOnX){
                var fLerpY = s_oTweenController.easeInOutCubic( _iCntFrames, 0 ,1, _iMaxFrames);
                var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.y, _pDiscreteFinalPoint.y, fLerpY);

                _oVirus.y = iValue;	

                var fLerpX = s_oTweenController.easeOutBack( _iCntFrames, 0 ,1, _iMaxFrames);
                var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.x, _pDiscreteFinalPoint.x, fLerpX);

                _oVirus.x = iValue;
            } else {
                var fLerpY = s_oTweenController.easeOutBack( _iCntFrames, 0 ,1, _iMaxFrames);
                var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.y, _pDiscreteFinalPoint.y, fLerpY);

                _oVirus.y = iValue;	

                var fLerpX = s_oTweenController.easeInOutCubic( _iCntFrames, 0 ,1, _iMaxFrames);
                var iValue = s_oTweenController.tweenValue( _pDiscreteStartPoint.x, _pDiscreteFinalPoint.x, fLerpX);

                _oVirus.x = iValue;
            }
            
        }
    };

    this.changeDirection = function(vPlaneNormal){

        new createjs.Tween.removeTweens(_oVirus);
        
        _vCollisionPlaneNormal = new CVector2(vPlaneNormal.getX(), vPlaneNormal.getY());
        
        if(_pPreventLoopPosition.x === _oVirus.x && _pPreventLoopPosition.y === _oVirus.y){   
            ///PREVENT VIRUS STUCK
            switch(iMovementType){
                
                case MOVEMENT_DISCRETE:{
                        this._setDiscreteDirection();
                        break;
                }
                case MOVEMENT_CIRCULAR:{
                        this._setDiscreteDirection();
                        break;
                }
                default: {
                    this._setRandomDirection();
                    break;
                }
                
            }            
        } else {
            this._setDirection();
        }
        
        _pPreventLoopPosition = {x:_oVirus.x, y: _oVirus.y};

    };

    this.update = function(){
        if(_bDeadAnim){
            return;
        }
        switch(_iCurMovementMode){
            case MOVEMENT_DISCRETE:{

                    this._frictionMovement();
                    
                    break;
            }
            case MOVEMENT_CIRCULAR:{

                    this._circularMovement();
                    
                    break;
            }
            case MOVEMENT_STOP:{
                    
                    break;
            }
            default:{
                    _oVirus.x += _vDirection.getX();
                    _oVirus.y += _vDirection.getY();
                    break;
            }
        }
        
    };

    _oParent = this;
    this._init(iX, iY, iType, iMovementType, iSpeed, oParentContainer);
}

