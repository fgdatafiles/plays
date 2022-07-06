function CBorder(iWorld){
    
    var _szColor;
    
    var _iDimStroke;
    var _iFullArea;
    var _iMaskArea;
    var _iQuote;
    
    var _aBorderLine;
    
    var _pStartPoint;
    var _pEndPoint;
    
    
    var _oBorder;
    var _oMask;
    var _oImage;
    var _oCover;
    
    this._init = function(iWorld){
        _szColor = "#c1e401";
        
        _iDimStroke = BORDER_LINE_DIM;
        
        _pStartPoint = {x: CANVAS_WIDTH/2 - BORDER_WIDTH/2, y: CANVAS_HEIGHT/2 - BORDER_HEIGHT/2 + BORDER_HEIGHT_OFFSET};
        _pEndPoint = {x:_pStartPoint.x + BORDER_WIDTH, y:_pStartPoint.y + BORDER_HEIGHT};

        
        _oImage = createBitmap(s_oSpriteLibrary.getSprite('image_'+iWorld));
        _oImage.x = _pStartPoint.x;
        _oImage.y = _pStartPoint.y;
        s_oStage.addChild(_oImage);
        
        _oCover = createBitmap(s_oSpriteLibrary.getSprite('cover_'+iWorld));
        _oCover.x = _pStartPoint.x;
        _oCover.y = _pStartPoint.y;     
        _oCover.compositeOperation = "source-in";
        _oCover.mask = _oMask;
        s_oStage.addChild(_oCover);
        
        
        this._buildStarterBoard();        
        

        _oMask = new createjs.Shape();
        _oMask = this._drawMask(_aBorderLine);
        this._setMaskOnBorder(_oMask);
        s_oStage.addChild(_oMask);
        
        
        _iFullArea = BORDER_WIDTH*BORDER_HEIGHT;

    };
    
    this._calculateArea = function(aPoints){
        //AREA FORMULA (x1y2-x2y1)+(x2y3-x3y2)+...+( (xn-1)(yn)-(xn)(yn-1) )+(xny1-x1yn)
        var iArea = 0;
        for(var i=0; i<aPoints.length-1; i++){
            iArea += (aPoints[i].x*aPoints[i+1].y - aPoints[i+1].x*aPoints[i].y);
        }
        iArea += (aPoints[aPoints.length-1].x*aPoints[0].y - aPoints[0].x*aPoints[aPoints.length-1].y);
        
        iArea /= 2;
        
        return iArea;
    };
    
    this.calculateQuote = function(){
        _iQuote = 100 - 100*_iMaskArea/_iFullArea;
        
        s_oInterface.refreshPercentage(_iQuote);
    };
    
    this._drawBorder = function(){
        _oBorder.graphics.clear();
        _oBorder.graphics.setStrokeStyle(_iDimStroke, "round", "round");        
        _oBorder.graphics.beginStroke(_szColor); 
        _oBorder.graphics.moveTo(_aBorderLine[0].x, _aBorderLine[0].y);
        for(var i=1; i<_aBorderLine.length; i++){
            _oBorder.graphics.lineTo(_aBorderLine[i].x, _aBorderLine[i].y);
        } 
        _oBorder.graphics.lineTo(_aBorderLine[0].x, _aBorderLine[0].y);
    };
    
    this._drawMask = function(aPoints) {
        var oMask = new createjs.Shape();
        oMask.alpha = 0.01;
        oMask.graphics.setStrokeStyle(_iDimStroke, "round", "round");        
        oMask.graphics.beginFill("#FFFFFF"); 
        oMask.graphics.moveTo(aPoints[0].x, aPoints[0].y);
        for(var i=1; i<aPoints.length; i++){
            oMask.graphics.lineTo(aPoints[i].x, aPoints[i].y);
        } 
        oMask.graphics.lineTo(aPoints[0].x, aPoints[0].y);
        
        return oMask;
    };
    
    this._setMaskOnBorder = function(oMask){        
        _oMask = oMask;
        _oCover.compositeOperation = "source-in";
        _oCover.mask = _oMask;
    };
    
    
    this._buildStarterBoard = function(){
        _aBorderLine = new Array();
    
        
    
        for(var i=_pStartPoint.x; i<_pEndPoint.x; i+=HERO_SPEED[SELECTED_SPEED]){
            _aBorderLine.push({x:i, y:_pStartPoint.y});
        }
        
        for(var i=_pStartPoint.y; i<_pEndPoint.y; i+=HERO_SPEED[SELECTED_SPEED]){
            _aBorderLine.push({x:_pEndPoint.x, y:i});
        }
        
        for(var i=_pEndPoint.x; i>_pStartPoint.x; i-=HERO_SPEED[SELECTED_SPEED]){
            _aBorderLine.push({x:i, y:_pEndPoint.y});
        }
        
        for(var i=_pEndPoint.y; i>_pStartPoint.y; i-=HERO_SPEED[SELECTED_SPEED]){
            _aBorderLine.push({x:_pStartPoint.x, y:i});
        }
        
        _oBorder = new createjs.Shape();
        this._drawBorder();

        s_oStage.addChild(_oBorder);
        
    };
    
    this.checkNearPoints = function(iCenterX, iCenterY, iNearX, iNearY){
        
        var iCenterIndex;
        for(var i=0; i<_aBorderLine.length; i++){
            if(_aBorderLine[i].x === iCenterX && _aBorderLine[i].y === iCenterY){
                iCenterIndex = i;
                break;
            }
        }
        
        if(iCenterIndex===0){
            if( (_aBorderLine[_aBorderLine.length-1].x === iNearX && _aBorderLine[_aBorderLine.length-1].y === iNearY) || (_aBorderLine[iCenterIndex+1].x === iNearX && _aBorderLine[iCenterIndex+1].y === iNearY)){
                return true;
            }else{
                return false;
            }
            
        } else if(iCenterIndex===_aBorderLine.length-1){
            if( (_aBorderLine[iCenterIndex-1].x === iNearX && _aBorderLine[iCenterIndex-1].y === iNearY) || (_aBorderLine[0].x === iNearX && _aBorderLine[0].y === iNearY)){                
                return true;
            }else{                
                return false;
            }
        }
        

        if( (_aBorderLine[iCenterIndex-1].x === iNearX && _aBorderLine[iCenterIndex-1].y === iNearY) || (_aBorderLine[iCenterIndex+1].x === iNearX && _aBorderLine[iCenterIndex+1].y === iNearY)){
            return true;
        } else {
            return false;
        }

        
    };
    
    
    this.rebuild = function(aLinePoints){

        if(aLinePoints.length<=1){
            return;
        }

        var oStartPoint = {index: -1, x: 0, y:0};
        var oFinishPoint = {index: -1, x: 0, y:0};
        
        //Seek insert points
        for(var i=0; i<_aBorderLine.length; i++){
            if( (_aBorderLine[i].x === aLinePoints[0].x && _aBorderLine[i].y === aLinePoints[0].y) || (_aBorderLine[i].x === aLinePoints[aLinePoints.length-1].x && _aBorderLine[i].y === aLinePoints[aLinePoints.length-1].y)){
                if(oStartPoint.index < 0){
                    oStartPoint.index = i;
                    oStartPoint.x = _aBorderLine[i].x;
                    oStartPoint.y = _aBorderLine[i].y;
                } else {
                    oFinishPoint.index = i;
                    oFinishPoint.x = _aBorderLine[i].x;
                    oFinishPoint.y = _aBorderLine[i].y;
                }                
            }
        }
        
        //Build Region1 (Start from oStartPoint)
        var iAreaAlpha = 0;
        var _aRegionAlpha = new Array;
        for(var i=oStartPoint.index; i<=oFinishPoint.index; i++){
            _aRegionAlpha.push(_aBorderLine[i]);
        }
        if(aLinePoints[0].x === oStartPoint.x && aLinePoints[0].y === oStartPoint.y){
            for(var i=0; i<aLinePoints.length-2; i++){
                _aRegionAlpha.push(aLinePoints[aLinePoints.length -i -2]);  
            } 
        } else {
            for(var i=1; i<aLinePoints.length-1; i++){
                _aRegionAlpha.push(aLinePoints[i]);
            } 
        }
        
        //Build Region2 (Start from Border[0])
        var _aRegionBeta = new Array;
        for(var i=0; i<=oStartPoint.index; i++){
            _aRegionBeta.push(_aBorderLine[i]);
        }
        if(aLinePoints[0].x === oStartPoint.x && aLinePoints[0].y === oStartPoint.y){
            for(var i=1; i<aLinePoints.length-1; i++){
                _aRegionBeta.push(aLinePoints[i]);
            } 
        } else {
            for(var i=0; i<aLinePoints.length-2; i++){
                _aRegionBeta.push(aLinePoints[aLinePoints.length -i -2]);  
            }
        }
        for(var i=oFinishPoint.index; i<_aBorderLine.length; i++){
            _aRegionBeta.push(_aBorderLine[i]);
        }
        
        //DETECT BOSS INCLUSION AREA
        var oAlphaMask = this._drawMask(_aRegionAlpha);
        _aBorderLine = new Array();
        if(s_oGame.checkBossToKill(oAlphaMask)){
            for(var i=0; i<_aRegionAlpha.length; i++){
                _aBorderLine.push(_aRegionAlpha[i]);
            }
            this._setMaskOnBorder(oAlphaMask);
        } else {
            for(var i=0; i<_aRegionBeta.length; i++){
                _aBorderLine.push(_aRegionBeta[i]);
            }
            
            var oBetaMask = this._drawMask(_aRegionBeta);
            this._setMaskOnBorder(oBetaMask);
        }

        

        this._drawBorder();
        
        _iMaskArea = this._calculateArea(_aBorderLine);
        this.calculateQuote();
        
        s_oGame.checkClosedElements(_iQuote, aLinePoints.length);
        
        playSound("close_mask",1,false);
        
    };  
    
    this._debugCheckSamePoints = function(){
        for(var i=0; i<_aBorderLine.length-1; i++){
            var oValue = _aBorderLine[i];
            for(var j=i+1; j<_aBorderLine.length; j++){
                if(oValue.x === _aBorderLine[j].x && oValue.y === _aBorderLine[j].y){
                    trace(_aBorderLine[j]);
                    trace(_aBorderLine[i]);
                }
            }
        }
    };
    
    this.hitBorder = function(iX, iY){
        return _oBorder.hitTest(iX,iY);
    };
    
    this.hitMask = function(iX, iY){
        return _oMask.hitTest(iX,iY);
    };
   
    this.getBorderShape = function(){
        return _oBorder;
    };
    
    this.getBorderPoints = function(){
        return _aBorderLine;
    };
    
    this.getBorderRect = function(){
        return {x:_pStartPoint.x, y:_pStartPoint.y, width:BORDER_WIDTH, height:BORDER_HEIGHT};
    };
    
    this.getStartPoint = function(){
        return _pStartPoint;
    };
    
    this.getPlaneDirection = function(iIndex){

        var iX = _aBorderLine[iIndex].x;
        var iY = _aBorderLine[iIndex].y;
        var vPlaneDirection;
        var iMidPoint;
       
        if(iIndex === 0){
             if(_aBorderLine[_aBorderLine.length-1].x === iX){
                 iMidPoint = (_aBorderLine[_aBorderLine.length-1].y + iY)/2;
                 if(_oMask.hitTest(iX + 1,iMidPoint)){
                     vPlaneDirection = new CVector2(1,0);
                 } else {
                     vPlaneDirection = new CVector2(-1,0);
                 };
             } else {
                 iMidPoint = (_aBorderLine[_aBorderLine.length-1].x + iX)/2;
                 if(_oMask.hitTest(iMidPoint,iY + 1)){
                     vPlaneDirection = new CVector2(0,1);
                 } else {
                     vPlaneDirection = new CVector2(0,-1);
                 };
             }
         } else {
             if(_aBorderLine[iIndex-1].x === iX){
                 iMidPoint = (_aBorderLine[_aBorderLine.length-1].y + iY)/2;
                 if(_oMask.hitTest(iX + 1,iMidPoint)){
                     vPlaneDirection = new CVector2(1,0);
                 } else {
                     vPlaneDirection = new CVector2(-1,0);
                 };
             } else {
                 iMidPoint = (_aBorderLine[_aBorderLine.length-1].x + iX)/2;
                 if(_oMask.hitTest(iMidPoint,iY + 1)){
                     vPlaneDirection = new CVector2(0,1);
                 } else {
                     vPlaneDirection = new CVector2(0,-1);
                 };
             }
         }
       
       return vPlaneDirection;
         
    };
    
    this._init(iWorld);
}
