function CHero(iX, iY) {
    
    
    var _bWeaving;
    var _bReverse;
    var _bDead;

    var _iWeaveDim;

    var _aLinePoints;
    
    var _oParent;
    var _oHero;    
    var _oLine;
    
    var _pSpawnPoint;
    var _pHeroDim;
    
    this._init = function(iX, iY){
        
        _bWeaving = false;
        _bReverse = false;
        _bDead = false;
        
        _iWeaveDim = BORDER_LINE_DIM;
        
        _oLine = new createjs.Shape();
        _oLine.graphics.setStrokeStyle(_iWeaveDim, "round", "round");        
        _oLine.graphics.beginStroke("#ffffff"); 
        _oLine.cache(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        s_oStage.addChild(_oLine);
        
        _aLinePoints = new Array();

        var oSprite = s_oSpriteLibrary.getSprite('pill');
        var iWidth = oSprite.width/11;
        var iHeight = oSprite.height/5;
        _pHeroDim = {width: iWidth, height: iHeight};
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: 30, regY: 52}, 
                        animations: {idle:[0,19], move:[20,40], dead:[41,54]}
                   };
                   
         var oSpriteSheet = new createjs.SpriteSheet(oData);
	_oHero = createSprite(oSpriteSheet, "idle",0,0,0,0);
        _oHero.x = iX;
        _oHero.y = iY;

        s_oStage.addChild(_oHero);    
        
        _oHero.addEventListener("animationend", this._onCompleteDead);
        _pSpawnPoint = {x:iX, y: iY};
        
        playSound("weaving",1,true);
        stopSound("weaving");
    };
    
    this.move = function(iX, iY) {
        if(_bDead){
            return;
        }
        
        if(_aLinePoints.length > 1 && iX === _aLinePoints[_aLinePoints.length-2].x && iY === _aLinePoints[_aLinePoints.length-2].y){
            this._eatWeave(iX, iY);
            return;
        } else if(this.weaveCollision(iX, iY)){
            return;
        }

        _oHero.x = iX;
        _oHero.y = iY;

        if(_bWeaving){
           _oLine.graphics.lineTo(_oHero.x,_oHero.y);
           _oLine.updateCache();
           _aLinePoints.push({x:_oHero.x, y:_oHero.y});
        }
         
    };
    
    this.weaveCollision = function(iX, iY){
        for(var i=0; i<_aLinePoints.length; i++){
            if(_aLinePoints[i].x === iX && _aLinePoints[i].y === iY){
                return true;
            }
        }        
        return false;
    };
    
    this.closingSquare = function(iX, iY){
        if(_aLinePoints.length > 2 && _aLinePoints[0].x === iX && _aLinePoints[0].y === iY){
            return true;
        }
    };
    
    this.removeAllWeave = function(){
        _aLinePoints = new Array( );
        _oLine.graphics.clear();
        _oLine.updateCache();
    
    };
    
    this._eatWeave = function(iX, iY){
        _aLinePoints.splice(_aLinePoints.length-1,1);
        _oParent._drawLineFromMultiplePoint();
        _oHero.x = iX;
        _oHero.y = iY;
    };
    
    this._drawLineFromMultiplePoint = function(){
        _oLine.graphics.clear();
        _oLine.graphics.setStrokeStyle(_iWeaveDim, "square", "square");        
        _oLine.graphics.beginStroke("#ffffff");  
        _oLine.graphics.moveTo(_aLinePoints[0].x, _aLinePoints[0].y);
        for(var i=1; i<_aLinePoints.length; i++){
            _oLine.graphics.lineTo(_aLinePoints[i].x, _aLinePoints[i].y);
        } 
        _oLine.updateCache();
    };
    
    this.getPos = function(){
        return {x:_oHero.x, y:_oHero.y};
    };
    
    this.getDim = function(){
        return _pHeroDim;
    };
    
    this.getWeavePoint = function(){
        return _aLinePoints;
    };
    
    this.isDead = function(){
        return _bDead;
    };
    
    this.isWeaving = function(){
        return _bWeaving;
    };
    
    this.isReversing = function(){
        return _bReverse;
    };
    
    this.startWeave = function(){
        if(_bWeaving || _bDead){
            //AVOID MULTIPLE CALL OF THIS METHOD
            return;
        }
        _bWeaving = true;
        _bReverse = false;
        
        _oHero.gotoAndPlay("move");
        playSound("weaving",1,false);
        
        _aLinePoints.push({x:_oHero.x, y:_oHero.y});

        this._drawLineFromMultiplePoint();

        _oLine.alpha = 1;
        new createjs.Tween.get(_oLine, {loop:true, override:true}).to({alpha:0.5}, 200).to({alpha:1}, 400);         
    };
    
   
    this.stopWeave = function(){        
        _bWeaving = false;
    };
    
    this.reverseWeave = function(){
        if(_bDead){
            return;
        }

        if(_aLinePoints.length > 0 && !_bWeaving){
            _bReverse = true;

            _oHero.x = _aLinePoints[_aLinePoints.length-1].x;
            _oHero.y = _aLinePoints[_aLinePoints.length-1].y;
            _oParent._drawLineFromMultiplePoint();
            _aLinePoints.splice(_aLinePoints.length-1,1);
           
            setTimeout(function(){
                _oParent.reverseWeave();
            }, 30);
            
           
           
        }else {
            //END OF REVERSE
            _bReverse = false;
            if(_aLinePoints.length === 0){
                _oHero.gotoAndPlay("idle");
                stopSound("weaving");
            }

        }           
    };
    
    this.startIdle = function(){
        _oHero.gotoAndPlay("idle");
        stopSound("weaving");
    };
    
    this.dead = function(){
        if(_bDead){
            return;
        }
        playSound("hero_dead",1,false);
        _bDead = true;
        _pSpawnPoint = _aLinePoints[0];
        if(s_bMobile){
            s_oController.stopAllDirection();
        }
        this.removeAllWeave();
        _oHero.gotoAndPlay("dead");
    };
    
    this._onCompleteDead = function(){
        if(_oHero.currentAnimation === "dead"){
            _oHero.x = _pSpawnPoint.x;
            _oHero.y = _pSpawnPoint.y;
            _oHero.gotoAndPlay("idle");
            stopSound("weaving");
            _oParent.stopWeave();
            _oParent.reverseWeave();
            _bDead = false;
        }
    };
    
    _oParent = this;
    this._init(iX, iY);
}

