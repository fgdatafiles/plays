function CController(oHero, oBorder){
    
    var _bFirePress;
    var _bLeft;
    var _bUp;
    var _bRight;
    var _bDown;
    
    var _aDirection;
    
    var _oHero;
    var _oBorder;
    var _oParent;
    var _oHammer;
    
    var _pPredictedPos;
    var _pTruePosition;
  
    this._init = function(oHero, oBorder){      
        
        _oHero = oHero;
        _oBorder = oBorder;
        
        _aDirection = new Array();
        
        if(!s_bMobile){
            document.onkeydown   = onKeyDown; 
            document.onkeyup   = onKeyUp; 
        }else {
            
            this._initHammer();
            
        }

        
    };
    
    this.unload = function(){
        if(s_bMobile){
            _oHammer.off("swipeleft",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveLeft();});
            _oHammer.off("swiperight",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveRight();});
            _oHammer.off("swipeup",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveUp();});
            _oHammer.off("swipedown",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveDown();});
            
            _oHammer.off("tap", function(){_oParent.stopAllDirection(); _oParent.fireUp();});
        }  

        s_oController = null;
    };
    
    this._initHammer = function(){
       _oHammer = new Hammer(s_oCanvas);
       _oHammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
       _oHammer.get('swipe').set({ velocity: 0.01});
       _oHammer.get('swipe').set({ threshold: 1});

       _oHammer.on("swipeleft",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveLeft();});
       _oHammer.on("swiperight",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveRight();});
       _oHammer.on("swipeup",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveUp();});
       _oHammer.on("swipedown",function(){_oParent.stopAllDirection(); _oParent.fireDown(); _oParent.moveDown();});
       
       _oHammer.get('tap').set({ enable: true });
       _oHammer.on("tap", function(){_oParent.stopAllDirection(); _oParent.fireUp();});
       
    };
    
    function onKeyUp(evt) {

        evt.preventDefault();
        
        //_oHero.stopMoving();
        switch(evt.keyCode) {
            // space
            case 32: {
                   _oParent.fireUp();
                   break; 
               }
           // left  
           case 37: {
                   _oParent.stopLeft();
                   break; 
               }               
           case 38: {
                   _oParent.stopUp();
                   break; 
               }                         
           // right  
           case 39: {
                   _oParent.stopRight();
                   break; 
               }
           case 40: {
                   _oParent.stopDown();
                   break; 
               }     
        }
    };
    
    function onKeyDown(evt) { 
        if(!evt){ 
            evt = window.event; 
        }  

        

        switch(evt.keyCode) { 
            // space
           case 32: {
                   
                   _oParent.fireDown();
                   break; 
               }   
           // left  
           case 37: {
                   _oParent.moveLeft();
                   break; 
               }               
           case 38: {
                   _oParent.moveUp();
                   break; 
               }                         
           // right  
           case 39: {
                   _oParent.moveRight();
                   break; 
               }
           case 40: {
                   _oParent.moveDown();
                   break; 
               }     
        }
		
		evt.preventDefault();
		
		return false;
		
    };
    
    this._detectDirection = function() {
  
        switch(_aDirection[_aDirection.length-1]) {  
            // left  
            case LEFT_DIRECTION: { 
                    _pPredictedPos = {x:_oHero.getPos().x - HERO_SPEED[SELECTED_SPEED]/2, y:_oHero.getPos().y};
                    _pTruePosition = {x:_oHero.getPos().x - HERO_SPEED[SELECTED_SPEED], y:_oHero.getPos().y};
                    break; 
                }               
            case UP_DIRECTION: {
                    _pPredictedPos = {x:_oHero.getPos().x, y:_oHero.getPos().y - HERO_SPEED[SELECTED_SPEED]/2};
                    _pTruePosition = {x:_oHero.getPos().x, y:_oHero.getPos().y - HERO_SPEED[SELECTED_SPEED]};
                    break; 
                }                         
            // right  
            case RIGHT_DIRECTION: {
                    _pPredictedPos = {x:_oHero.getPos().x + HERO_SPEED[SELECTED_SPEED]/2, y:_oHero.getPos().y};
                    _pTruePosition = {x:_oHero.getPos().x + HERO_SPEED[SELECTED_SPEED], y:_oHero.getPos().y};
                    break; 
                }
            case DOWN_DIRECTION: {
                    _pPredictedPos = {x:_oHero.getPos().x, y:_oHero.getPos().y + HERO_SPEED[SELECTED_SPEED]/2};
                    _pTruePosition = {x:_oHero.getPos().x, y:_oHero.getPos().y + HERO_SPEED[SELECTED_SPEED]};
                    break; 
                }     
        }     

        if(_bFirePress){
            
            if(_oBorder.hitBorder(_pTruePosition.x, _pTruePosition.y)){

                if(_oHero.closingSquare(_pTruePosition.x, _pTruePosition.y)){
                    //AVOID SQUARE WEAVE CLOSING (START = FINAL) 
                    return;
                }else if(_oHero.isWeaving()){                    
                    _oHero.move(_pTruePosition.x, _pTruePosition.y);

                    _oBorder.rebuild(_oHero.getWeavePoint());
                    
                    _oHero.stopWeave();
                    _oHero.removeAllWeave();
                    _oHero.startIdle();
                    
                } else{

                    
                    if(_oBorder.checkNearPoints(_oHero.getPos().x, _oHero.getPos().y, _pTruePosition.x, _pTruePosition.y)){
                        _oHero.move(_pTruePosition.x, _pTruePosition.y);
                    } else if(_oBorder.hitMask(_pPredictedPos.x, _pPredictedPos.y)){                        
                        _oHero.startWeave(); 
                        _oHero.move(_pTruePosition.x, _pTruePosition.y);
                        _oBorder.rebuild(_oHero.getWeavePoint());                    
                        _oHero.stopWeave();
                        _oHero.removeAllWeave();
                        _oHero.startIdle();
                    }
                    
                }
            
                
            } else if(_oBorder.hitMask(_pTruePosition.x, _pTruePosition.y)) {
                if(s_bMobile){
                    if( !_oBorder.hitBorder(_oHero.getPos().x, _oHero.getPos().y)){
                        _oHero.startWeave();
                        _oHero.move(_pTruePosition.x, _pTruePosition.y);
                    }
                } else {
                    _oHero.startWeave();
                    _oHero.move(_pTruePosition.x, _pTruePosition.y);
                }
            }
        } else {
            if(_oBorder.hitBorder(_pPredictedPos.x, _pPredictedPos.y)){             
                _oHero.move(_pTruePosition.x, _pTruePosition.y);
            }
        }
         
    };
    
    this._removeDirection = function(iDirection){
        for(var i=0; i<_aDirection.length; i++){
            if(_aDirection[i] === iDirection){
                _aDirection.splice(i,1);
            }
        }
    };

    this.stopAllDirection = function(){
        this.stopLeft();
        this.stopUp();
        this.stopRight();
        this.stopDown(); 
    };
    
    this.stopLeft = function(){
        _bLeft = false;
        this._removeDirection(LEFT_DIRECTION);
    };
    
    this.stopUp = function(){
        _bUp = false;
        this._removeDirection(UP_DIRECTION);
    };
    
    this.stopRight = function(){
        _bRight = false;
        this._removeDirection(RIGHT_DIRECTION);
    };
    
    this.stopDown = function(){
        _bDown = false;
        this._removeDirection(DOWN_DIRECTION);
    };
    
    this.moveLeft = function(){
        if(!_bLeft){
            _bLeft = true;
            _aDirection.push(LEFT_DIRECTION);
            if(s_bMobile){
                if( _oBorder.hitMask(_oHero.getPos().x - HERO_SPEED[SELECTED_SPEED], _oHero.getPos().y)){
                    _oHero.startWeave();
                    _oHero.move(_oHero.getPos().x - HERO_SPEED[SELECTED_SPEED], _oHero.getPos().y);
                }                
            }
        }
    };
    
    this.moveUp = function(){
        if(!_bUp){
            _bUp = true;
            _aDirection.push(UP_DIRECTION);
            if(s_bMobile){
                if( _oBorder.hitMask(_oHero.getPos().x, _oHero.getPos().y - HERO_SPEED[SELECTED_SPEED])){
                    _oHero.startWeave();
                    _oHero.move(_oHero.getPos().x, _oHero.getPos().y - HERO_SPEED[SELECTED_SPEED]);
                }                
            }
        }
    };
    
    this.moveRight = function(){
        if(!_bRight){
            _bRight = true;
            _aDirection.push(RIGHT_DIRECTION);
            if(s_bMobile){
                if( _oBorder.hitMask(_oHero.getPos().x + HERO_SPEED[SELECTED_SPEED], _oHero.getPos().y)){
                    _oHero.startWeave();
                    _oHero.move(_oHero.getPos().x + HERO_SPEED[SELECTED_SPEED], _oHero.getPos().y);
                }                
            }
        }
    };
    
    this.moveDown = function(){
        if(!_bDown){
            _bDown = true;
            _aDirection.push(DOWN_DIRECTION);
            if(s_bMobile){
                if( _oBorder.hitMask(_oHero.getPos().x, _oHero.getPos().y + HERO_SPEED[SELECTED_SPEED])){
                    _oHero.startWeave();
                    _oHero.move(_oHero.getPos().x, _oHero.getPos().y + HERO_SPEED[SELECTED_SPEED]);
                }                
            }
        }
    };
    
    this.fireDown = function(){
        if(_oHero.isReversing()){
            _oHero.startWeave();
        }
        _bFirePress = true;
    };
    
    this.fireUp = function(){
        _oHero.stopWeave();
        _oHero.reverseWeave();
        _bFirePress = false;
    };
    
    this.update = function(){
        if(_aDirection.length > 0){
            this._detectDirection();
        }
    };

    _oParent = this;
    s_oController = this;
    this._init(oHero, oBorder);
     
};

var s_oController = null;
