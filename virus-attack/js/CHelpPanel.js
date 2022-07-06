function CHelpPanel(){

   var _aVirus;

    var _oImage1;
    var _oImage2;
    var _oFade;
    var _oPanelContainer;
    var _oParent;
    var _oListener;
	var _oPlayButton;
    var _pStartPanelPos;

    this._init = function(){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0.7;
        //_oListener = _oFade.on("mousedown", this._onExitHelp);
        s_oStage.addChild(_oFade);
        
        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);
        
	
		
        var oSprite = s_oSpriteLibrary.getSprite('intro_level_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;      
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn).call(function(){

        });
		
		
		//var oSprite = s_oSpriteLibrary.getSprite('but_play');
        //_oPlayButton = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT + oSprite.height,oSprite, s_oStage);
        //_oPlayButton.addEventListener(ON_MOUSE_UP, this._onExitHelp, this);
        ////_oPlayButton.pulseAnimation();
		// new createjs.Tween.get(_oPlayButton).to({y:CANVAS_HEIGHT/2 - 240},500, createjs.Ease.quartIn).call(function(){
		//	_oPlayButton.pulseAnimation();
        //});
		_oPanelContainer.addChild(_oPlayButton);
		var oPlaySprite = s_oSpriteLibrary.getSprite('but_play');
		var oPlayButton = createBitmap(oPlaySprite);
		oPlayButton.regX = oPlaySprite.width/2;
		oPlayButton.regY = oPlaySprite.height/2;
		oPlayButton.x = 0;
		oPlayButton.y = 300;
		_oListener = oPlayButton.on("mousedown", this._onExitHelp);
		_oPanelContainer.addChild(oPlayButton);
        
        if(s_bMobile){
            
            var pTextPos = {x:40, y:-170};      

            var oSprite = s_oSpriteLibrary.getSprite('swift_hand');
            _oImage1 = createBitmap(oSprite);
            _oImage1.regY = oSprite.height/2;
            _oImage1.x = pTextPos.x;
            _oImage1.y = pTextPos.y;
            _oImage1.image = oSprite;
            createjs.Tween.get(_oImage1, {loop:true}).to({x:_oImage1.x+100}, 1000, createjs.Ease.cubicOut).to({x:pTextPos.x}, 1000, createjs.Ease.cubicOut);            
            _oPanelContainer.addChild(_oImage1);

            var oText1Back = new createjs.Text(TEXT_HELP1_MOB,"20px "+PRIMARY_FONT, "#000000");
            oText1Back.x = -80;
            oText1Back.y = pTextPos.y - 12;
            oText1Back.textAlign = "center";
            oText1Back.textBaseline = "middle";
            oText1Back.lineWidth = 250;
            oText1Back.outline = 4;
            _oPanelContainer.addChild(oText1Back);

            var oText1 = new createjs.Text(TEXT_HELP1_MOB,"20px "+PRIMARY_FONT, "#c1e401");
            oText1.x = oText1Back.x;
            oText1.y = oText1Back.y;
            oText1.textAlign = "center";
            oText1.textBaseline = "middle";
            oText1.lineWidth = 250;
            _oPanelContainer.addChild(oText1);
            
            
            var pTextPos = {x:-130, y:-70};      

            var oSprite = s_oSpriteLibrary.getSprite('touch_hand');
            _oImage2 = createBitmap(oSprite);
            _oImage2.regY = oSprite.height/2;
            _oImage2.x = pTextPos.x;
            _oImage2.y = pTextPos.y;
            _oImage2.image = oSprite;
            createjs.Tween.get(_oImage2, {loop:true}).to({scaleX:0.9, scaleY:0.9}, 500, createjs.Ease.cubicOut).to({scaleX:1, scaleY:1}, 500, createjs.Ease.cubicOut);
            _oPanelContainer.addChild(_oImage2);

            var oText2Back = new createjs.Text(TEXT_HELP2_MOB,"20px "+PRIMARY_FONT, "#000000");
            oText2Back.x = 80;
            oText2Back.y = pTextPos.y - 12;
            oText2Back.textAlign = "center";
            oText2Back.textBaseline = "middle";
            oText2Back.lineWidth = 250;
            oText2Back.outline = 4;
            _oPanelContainer.addChild(oText2Back);

            var oText2 = new createjs.Text(TEXT_HELP2_MOB,"20px "+PRIMARY_FONT, "#c1e401");
            oText2.x = oText2Back.x;
            oText2.y = oText2Back.y;
            oText2.textAlign = "center";
            oText2.textBaseline = "middle";
            oText2.lineWidth = 250;
            _oPanelContainer.addChild(oText2);
            
            
        }else {
            var pTextPos = {x:130, y:-170};      
        
            var oSprite = s_oSpriteLibrary.getSprite('keys');
            _oImage1 = createBitmap(oSprite);
            _oImage1.regX = oSprite.width/2;
            _oImage1.regY = oSprite.height/2;
            _oImage1.x = pTextPos.x;
            _oImage1.y = pTextPos.y;
            _oPanelContainer.addChild(_oImage1);

            var oText1Back = new createjs.Text(TEXT_HELP1,"20px "+PRIMARY_FONT, "#000000");
            oText1Back.x = -80;
            oText1Back.y = pTextPos.y - 12;
            oText1Back.textAlign = "center";
            oText1Back.textBaseline = "middle";
            oText1Back.lineWidth = 250;
            oText1Back.outline = 4;
            _oPanelContainer.addChild(oText1Back);

            var oText1 = new createjs.Text(TEXT_HELP1,"20px "+PRIMARY_FONT, "#c1e401");
            oText1.x = oText1Back.x;
            oText1.y = oText1Back.y;
            oText1.textAlign = "center";
            oText1.textBaseline = "middle";
            oText1.lineWidth = 250;
            _oPanelContainer.addChild(oText1);


            var oSprite = s_oSpriteLibrary.getSprite('space_bar')
            _oImage2 = createBitmap(oSprite);
            _oImage2.regX = oSprite.width/2;
            _oImage2.regY = oSprite.height/2;
            _oImage2.x = -95;
            _oImage2.y = pTextPos.y + 100;
            _oPanelContainer.addChild(_oImage2);

            var oText2Back = new createjs.Text(TEXT_HELP2,"21px "+PRIMARY_FONT, "#000000");
            oText2Back.x = 100;
            oText2Back.y = _oImage2.y - 12;
            oText2Back.textAlign = "center";
            oText2Back.textBaseline = "middle";
            oText2Back.lineWidth = 200;
            oText2Back.outline = 4;
            _oPanelContainer.addChild(oText2Back);

            var oText2 = new createjs.Text(TEXT_HELP2,"20px "+PRIMARY_FONT, "#c1e401");
            oText2.x = oText2Back.x;
            oText2.y = oText2Back.y;
            oText2.textAlign = "center";
            oText2.textBaseline = "middle";
            oText2.lineWidth = 200;
            _oPanelContainer.addChild(oText2);
        }
        
        
        var pText3Pos  = {x:100, y:30};      
        this._setPercentageBox(pText3Pos.x, pText3Pos.y);
        
        var oText3Back = new createjs.Text(TEXT_HELP3,"20px "+PRIMARY_FONT, "#000000");
        oText3Back.x = -100;
        oText3Back.y = pText3Pos.y - 30;
        oText3Back.textAlign = "center";
        oText3Back.textBaseline = "middle";
        oText3Back.lineWidth = 180;
        oText3Back.outline = 4;
        _oPanelContainer.addChild(oText3Back);

        var oText3 = new createjs.Text(TEXT_HELP3,"20px "+PRIMARY_FONT, "#c1e401");
        oText3.x = oText3Back.x;
        oText3.y = oText3Back.y;
        oText3.textAlign = "center";
        oText3.textBaseline = "middle";
        oText3.lineWidth = 180;
        _oPanelContainer.addChild(oText3);
        
        var pText4Pos = {x:-150, y:130};      
        
        _aVirus = new Array();
        for(var i=0; i<3; i++){
            _aVirus[i] = createSprite(s_aVirusSpriteSheet[6], "idle",0,0,0,0);
            _aVirus[i].x = pText4Pos.x +i*40;
            _aVirus[i].y = pText4Pos.y;
            _oPanelContainer.addChild(_aVirus[i]);
            new createjs.Tween.get(_aVirus[i], {loop: true}).wait(Math.random()*100).to({y:pText4Pos.y + 40},500, createjs.Ease.cubicIn).to({y:pText4Pos.y},500, createjs.Ease.cubicOut);
        }        

        var oText4Back = new createjs.Text(TEXT_HELP4,"20px "+PRIMARY_FONT, "#000000");
        oText4Back.x = 80;
        oText4Back.y = pText4Pos.y + 10;
        oText4Back.textAlign = "center";
        oText4Back.textBaseline = "middle";
        oText4Back.lineWidth = 250;
        oText4Back.outline = 4;
        _oPanelContainer.addChild(oText4Back);

        var oText4 = new createjs.Text(TEXT_HELP4,"20px "+PRIMARY_FONT, "#c1e401");
        oText4.x = oText4Back.x;
        oText4.y = oText4Back.y;
        oText4.textAlign = "center";
        oText4.textBaseline = "middle";
        oText4.lineWidth = 250;
        _oPanelContainer.addChild(oText4);
        
    };

    this.unload = function(){
        s_oStage.removeChild(_oPanelContainer);
        s_oStage.removeChild(_oFade);

        for(var i=0; i<3; i++){
            createjs.Tween.removeTweens(_aVirus[i]);
        }

        _oFade.off("mousedown", _oListener);
    };

    this._setPercentageBox = function(iX, iY){
        var oPercentageContainer = new createjs.Container();
        oPercentageContainer.x = iX;
        oPercentageContainer.y = iY; 
        _oPanelContainer.addChild(oPercentageContainer);

        var oSprite = s_oSpriteLibrary.getSprite('percentage_fill_'+0);
        var oPercentageFill = createBitmap(oSprite);
        oPercentageFill.regX = oSprite.width/2;
        oPercentageFill.regY = oSprite.height/2;       
        oPercentageContainer.addChild(oPercentageFill);

        var oSprite = s_oSpriteLibrary.getSprite('percentage_box');
        var iBoxWidth = oSprite.width;
        var iBoxHeight = oSprite.height;        
        var oPercentageBox = createBitmap(oSprite);
        oPercentageBox.regX = oSprite.width/2;
        oPercentageBox.regY = oSprite.height/2;        
        
        
        var oSprite = s_oSpriteLibrary.getSprite('percentage_fill_'+0);
        var oMask = new createjs.Shape();
        oMask.x = oPercentageFill.x -oSprite.width/2;
        oMask.y = oPercentageFill.y -oSprite.height/2;
        oMask.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, oSprite.width,oSprite.height);
        oPercentageContainer.addChild(oMask);
        //oPercentageContainer.compositeOperation = "source-in";
        oPercentageFill.mask = oMask;        
        oMask.scaleX = 0.79;
        
        var oCurPercentageTextStroke = new createjs.Text("79%","24px "+PRIMARY_FONT, "#000000");
        oCurPercentageTextStroke.textAlign = "center";
        oCurPercentageTextStroke.textBaseline = "middle";
        oCurPercentageTextStroke.lineWidth = 200;
        oCurPercentageTextStroke.outline = 5;
        oPercentageContainer.addChild(oCurPercentageTextStroke);
        
        var oCurPercentageText = new createjs.Text("79%","24px "+PRIMARY_FONT, "#c1e401");
        oCurPercentageText.textAlign = "center";
        oCurPercentageText.textBaseline = "middle";
        oCurPercentageText.lineWidth = 200;
        oPercentageContainer.addChild(oCurPercentageText);
             
        var oSprite = s_oSpriteLibrary.getSprite('indicator');     
        var oIndicator = createBitmap(oSprite);
        oIndicator.regX = oSprite.width/2;
        oIndicator.regY = oSprite.height;
        oIndicator.x = WIN_QUOTE[0]*iBoxWidth/100 - iBoxWidth/2;
        oIndicator.y = iBoxHeight/2;
        oPercentageContainer.addChild(oIndicator); //Draws on canvas     
             
        oPercentageContainer.addChild(oPercentageBox);
       
        var oTargetPercentageTextStroke = new createjs.Text(75+"%","16px "+PRIMARY_FONT, "#000000");
        oTargetPercentageTextStroke.x = oIndicator.x;
        oTargetPercentageTextStroke.y = oIndicator.y +10;
        oTargetPercentageTextStroke.textAlign = "center";
        oTargetPercentageTextStroke.textBaseline = "middle";
        oTargetPercentageTextStroke.lineWidth = 200;
        oTargetPercentageTextStroke.outline = 3;
        oPercentageContainer.addChild(oTargetPercentageTextStroke);
        
        var oTargetPercentageText = new createjs.Text(75+"%","16px "+PRIMARY_FONT, "#ffd000");
        oTargetPercentageText.x = oIndicator.x;
        oTargetPercentageText.y = oIndicator.y+10;
        oTargetPercentageText.textAlign = "center";
        oTargetPercentageText.textBaseline = "middle";
        oTargetPercentageText.lineWidth = 200;
        oPercentageContainer.addChild(oTargetPercentageText);
    };

    this._onExitHelp = function(){
        playSound("click",1,false);
        
        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            _oParent.unload();
            s_oGame._onExitHelp();
        }); 
		//new createjs.Tween.get(_oPlayButton).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
		//	_oPlayButton.unload();
        //}); 
		
        
    };

    _oParent=this;
    this._init();

}
