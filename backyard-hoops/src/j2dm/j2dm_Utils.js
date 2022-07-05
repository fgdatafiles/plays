
//----------------------------------------------------------
//----------------------------------------------------------
//------------  S C A L E   F U N C T I O N S  -------------
//----------------------------------------------------------
//----------------------------------------------------------

//---------------
//---- TEXTS ----
//---------------

function J2DM_AutoScaleText(textSprite, scaleFactor){
    var scaleParent = textSprite.parent.scale.x;
    if(scaleFactor!=null){
        scaleParent = scaleFactor;
    }

    if(textSprite.style.wordWrap!=null && textSprite.style.wordWrap == true){
        textSprite.style.wordWrapWidth *= scaleParent;
    }

    textSprite.scale.setTo(1/scaleParent);
    textSprite.fontSize *= scaleParent;
    
    if(textSprite.style.strokeThickness!=null)
    {
        textSprite.style.strokeThickness *= scaleParent;
    }
}

function J2DM_ApplyTextsScale(mc) {
    var scaleFactor = mc.scale.x;
    var len = mc.children.length;
    for (var i = 0; i < len; i++) { 
        if(mc.children[i] instanceof Phaser.Text){
            J2DM_AutoScaleText(mc.children[i]);
        }        
    }

    if(mc.customGroup!=null){
        var len = mc.customGroup.children.length;
        for (var i = 0; i < len; i++) { 
            var textSprite = mc.customGroup.children[i];
            if(textSprite instanceof Phaser.Text){
                J2DM_AutoScaleText(textSprite, scaleFactor);
            }        
        }
    }
}

//----------------
//---- RANGES ----
//----------------
function J2DM_GetPercentageFromRange(min, max, current){
    var percentage = (current-min) / (max-min);
    if(percentage<0){
        percentage = 0;
    }
    if(percentage>1){
        percentage=1;
    }
    return percentage;
}

function J2DM_GetPercentageFrom2Ranges(parameters, current){
    var perc = J2DM_GetPercentageFromRange(parameters.min, parameters.max, current);

    return (parameters.minResult + perc * (parameters.maxResult - parameters.minResult) );
}

//---------------
//---- SCALE ----
//---------------
function J2DM_ScaleFixx(sprite, width) {
    var ratio = width / sprite.width;
    sprite.width = sprite.width * ratio;
    sprite.height = sprite.height * ratio;
}

function J2DM_ScaleFixy(sprite, height) {
    var ratio = height / sprite.height;
    sprite.width = sprite.width * ratio;
    sprite.height = sprite.height * ratio;
}

//------------
//---- BG ----
//------------
function J2DM_AdjustFixBackground(bg) {
    if(bg.width < game.width){
        J2DM_ScaleFixx(bg, game.width);
    }
    if(bg.height < game.height){
        J2DM_ScaleFixy(bg, game.height);
    }
}

function J2DM_AddInputText(parameters, multiplier) {
    var posx = 0;
    var posy = 0;

    if(parameters.posx!=null){
        posx = parameters.posx;
    }
    if(parameters.posy!=null){
        posy = parameters.posy;
    }

    var textObject = game.add.inputField(game.width * posx, game.height * posy, parameters.style);
    
    if(parameters.fixx!=null){
        textObject.x = parameters.fixx;
        if(multiplier!=null)
        {
            textObject.x*=multiplier.factor;
        }
    }

    if(multiplier!=null)
    {
        textObject.fontSize*=multiplier.factor;
    }

    if(parameters.fixy!=null){
        textObject.y = parameters.fixy;
        if(multiplier!=null)
        {
            textObject.y*=multiplier.factor;
        }
    }

    if(parameters.childs!=null){
        var group = game.add.group();
        textObject.addChild(group);
        textObject.customGroup = group;
        J2DM_AddMovieClip(parameters, group);
    }

    J2DM_ApplySize(textObject, parameters);
    J2DM_ApplyResponsive(textObject, parameters);

    return textObject;
}

//----------------------------------------------------------
//----------------------------------------------------------
//---------------------  T E X T   -------------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_AddText(parameters, multiplier) {
    var posx = 0;
    var posy = 0;

    if(parameters.posx!=null){
        posx = parameters.posx;
    }
    if(parameters.posy!=null){
        posy = parameters.posy;
    }

    var textObject = game.add.text(game.width * posx, game.height * posy, parameters.text, parameters.style);

    if(parameters.anchorx != null && parameters.anchory != null){
        textObject.anchor.setTo(parameters.anchorx, parameters.anchory);
    }else{
        textObject.anchor.setTo(0.5);
    }

    if(parameters.uppercase!=null){
        textObject.text = parameters.text.toUpperCase();
    }

    if(parameters.stroke!=null){
        textObject.stroke = parameters.stroke;
    }
    
    if(parameters.lowercase!=null){
        textObject.text = parameters.text.toLowerCase();
    }

    if(parameters.fixx!=null){
        textObject.x = parameters.fixx;
        if(multiplier!=null)
        {
            textObject.x*=multiplier.factor;
        }
    }

    if(multiplier!=null)
    {
        textObject.fontSize*=multiplier.factor;
    }

    if(parameters.fixy!=null){
        textObject.y = parameters.fixy;
        if(multiplier!=null)
        {
            textObject.y*=multiplier.factor;
        }
    }

    if(parameters.childs!=null){
        var group = game.add.group();
        textObject.addChild(group);
        textObject.customGroup = group;
        J2DM_AddMovieClip(parameters, group);
    }

    J2DM_ApplySize(textObject, parameters);
    J2DM_ApplyResponsive(textObject, parameters);

    return textObject;
}

//----------------------------------------------------------
//----------------------------------------------------------
//--------------------  S P R I T E  -----------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_AddSprite(parameters) {
    J2DM_ControlAspectVariables(parameters);
    
    var posx = 0;
    var posy = 0;
    if(parameters.posx!=null){
        posx = parameters.posx;
    }
    if(parameters.posy!=null){
        posy = parameters.posy;
    }

    var spriteObject = game.add.sprite(game.width * posx, game.height * posy, parameters.nameAsset);

    if(parameters.anchorx != null && parameters.anchory != null){
        spriteObject.anchor.setTo(parameters.anchorx, parameters.anchory);
    }else{
        spriteObject.anchor.setTo(0.5);
    }

    if(parameters.fixx!=null){
        spriteObject.x = parameters.fixx;
    }

    if(parameters.fixy!=null){
        spriteObject.y = parameters.fixy;
    }

    if(parameters.tint!=null){
        spriteObject.tint = '0x' + parameters.tint;
    }

    if(parameters.childs!=null){
        var group = game.add.group();
        spriteObject.addChild(group);
        spriteObject.customGroup = group;
        J2DM_AddMovieClip(parameters, group);
    }

    var alpha=1;
    if(parameters.alpha!=null){
        alpha = parameters.alpha;
    }
    spriteObject.alpha = alpha;

    J2DM_ApplySize(spriteObject, parameters);
    J2DM_ApplyResponsive(spriteObject, parameters);

    return spriteObject;
}

//----------------------------------------------------------
//----------------------------------------------------------
//------------------  M O V I E C L I P  -------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_CreateMovieClip(parameters) {
    var mc = game.add.group();

    J2DM_ControlAspectVariables(parameters);

    if(parameters.fixx!=null){
        mc.x = parameters.fixx;
    }

    if(parameters.fixy!=null){
        mc.y = parameters.fixy;
    }

    if(parameters.posx!=null){
        mc.x = game.width * parameters.posx;
    }

    if(parameters.posy!=null){
        mc.y = game.height * parameters.posy;
    }

    J2DM_CalculateMultiplier(parameters);
    J2DM_AddMovieClip(parameters, mc, parameters.multiplier);
    J2DM_ApplySize(mc, parameters);
    if(parameters.autoScaleText != null && parameters.autoScaleText == true){
        J2DM_ApplyTextsScale(mc);
    }
    J2DM_ApplyResponsive(mc, parameters);
    return mc;
}

function J2DM_AddMovieClip(parameters, mc, multiplier) {
    if(parameters.childs!=null){
        for (prop in parameters.childs) {
            //console.log(prop,(parameters.childs[prop]));

            var asset = parameters.childs[prop];
            var enable = true;
            if(asset.enable!=null){
                enable = asset.enable;
            }
            if(enable){
                switch(asset.type){
                    case 'graphics':
                        var graphicAsset = J2DM_AddGraphics(asset, multiplier);
                        mc.add(graphicAsset);
                        mc[prop] = graphicAsset;
                        break;
                    case 'image':
                        var imageAsset = J2DM_AddSprite(asset);
                        mc.add(imageAsset);
                        mc[prop] = imageAsset;
                        break;
                    case 'text':
                        var textAsset = J2DM_AddText(asset, multiplier);
                        mc.add(textAsset);
                        mc[prop] = textAsset;
                        break;
                    case 'input':
                        var textAsset = J2DM_AddInputText(asset, multiplier);
                        mc.add(textAsset);
                        mc[prop] = textAsset;
                        break;
                }    
            }
        }
    }
}

//----------------------------------------------------------
//----------------------------------------------------------
//------------------  G R A P H I C S  ---------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_AddGraphics(parameters, multiplier) {
    var graphicsObject = game.add.graphics(0, 0);
    if(parameters.lineStyle!=null){
        var lineStyle = parameters.lineStyle;
        graphicsObject.lineStyle(lineStyle.stroke, lineStyle.color, lineStyle.alpha);
    }
    var alpha=1;
    if(parameters.alpha!=null){
        alpha = parameters.alpha;
    }
    switch(parameters.shape){
        case 'roundedRect':
            graphicsObject.beginFill('0x' + parameters.color, alpha);
            var roundedRect = parameters.roundedRect;
            var xx = roundedRect.x;
            var yy = roundedRect.y;
            var widthRect = roundedRect.width;
            var heightRect = roundedRect.height;
            var rounded = roundedRect.rounded;

            if(multiplier!=null)
            {
                xx *= multiplier.factor;
                yy *= multiplier.factor;
                widthRect *= multiplier.factor;
                heightRect *= multiplier.factor;
                rounded *= multiplier.factor;
            }
            graphicsObject.drawRoundedRect(xx, yy, widthRect, heightRect, rounded);
            graphicsObject.endFill();
            break;
        case 'rect':
            graphicsObject.beginFill('0x' + parameters.color, alpha);
            var rect = parameters.rect;
            var xx = rect.x;
            var yy = rect.y;
            var widthRect = rect.width;
            var heightRect = rect.height;

            if(multiplier!=null)
            {
                xx *= multiplier.factor;
                yy *= multiplier.factor;
                widthRect *= multiplier.factor;
                heightRect *= multiplier.factor;
            }
            graphicsObject.drawRect(xx, yy, widthRect, heightRect);
            graphicsObject.endFill();

            break;
        case 'circle':
            graphicsObject.beginFill('0x' + parameters.color, alpha);
            var circle = parameters.circle;
            var xx = circle.x;
            var yy = circle.y;
            var radius = circle.radius;

            if(multiplier!=null)
            {
                xx *= multiplier.factor;
                yy *= multiplier.factor;
                radius *= multiplier.factor;
            }
            graphicsObject.drawCircle(xx, yy, radius);
            graphicsObject.endFill();
            break;
        case 'shape':
            var points = parameters.points;
            graphicsObject.beginFill('0x' + parameters.color, alpha);
            graphicsObject.moveTo(points[0].x, points[0].y);
            for(var i=1; i<points.length; i++){
                var xPoint = points[i].x;
                var yPoint = points[i].y;
                if(multiplier!=null)
                {
                    xPoint *= multiplier.factor;
                    yPoint *= multiplier.factor;
                }
                graphicsObject.lineTo(xPoint, yPoint);
            }
            graphicsObject.endFill();
            break;
    }

    if(parameters.fixx!=null){
        graphicsObject.x = parameters.fixx;
    }

    if(parameters.fixy!=null){
        graphicsObject.y = parameters.fixy;
    }

    if(parameters.posx!=null){
        graphicsObject.x = game.width * parameters.posx;
    }

    if(parameters.posy!=null){
        graphicsObject.y = game.height * parameters.posy;
    }

    if(parameters.sizex!=null){
        J2DM_ScaleFixx(graphicsObject, game.width * parameters.sizex);
    }

    if(parameters.sizey!=null){
        J2DM_ScaleFixy(graphicsObject, game.height * parameters.sizey);
    }

    if(parameters.fixWidth!=null){
        graphicsObject.width = parameters.fixWidth;
    }

    if(parameters.fixHeight!=null){
        graphicsObject.height = parameters.fixHeight;
    }

    if(parameters.childs!=null){
        var group = game.add.group();
        graphicsObject.addChild(group);
        graphicsObject.customGroup = group;
        J2DM_AddMovieClip(parameters, group);
    }

    J2DM_ApplyResponsive(graphicsObject, parameters);

    return graphicsObject;
}

//----------------------------------------------------------
//----------------------------------------------------------
//--------------------  B U T T O N  -----------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_AddButton(parameters, callback, context, b1, b2, b3, b4) {
    
    J2DM_ControlAspectVariables(parameters);
    
    var posx = 0;
    var posy = 0;
    if(parameters.posx!=null){
        posx = parameters.posx;
    }
    if(parameters.posy!=null){
        posy = parameters.posy;
    }

    var buttonObject = game.add.button(game.width * posx, game.height * posy, parameters.nameAsset, callback, context, b1, b2, b3, b4);

    buttonObject.parameters = parameters;

    if(parameters.anchorx != null && parameters.anchory != null){
        buttonObject.anchor.setTo(parameters.anchorx, parameters.anchory);
    }else{
        buttonObject.anchor.setTo(0.5);
    }

    if(parameters.sizex!=null){
        J2DM_ScaleFixx(buttonObject, game.width * parameters.sizex);
    }

    if(parameters.sizey!=null){
        J2DM_ScaleFixy(buttonObject, game.height * parameters.sizey);
    }

    if(parameters.fixx!=null){
        buttonObject.x = parameters.fixx;
    }

    if(parameters.fixy!=null){
        buttonObject.y = parameters.fixy;
    }

    if(parameters.fixWidth!=null){
        buttonObject.width = parameters.fixWidth;
    }

    if(parameters.fixHeight!=null){
        buttonObject.height = parameters.fixHeight;
    }

    if(parameters.sizex_landscape!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
        J2DM_ScaleFixx(buttonObject, game.width * parameters.sizex_landscape);
    }

    if(parameters.sizey_landscape!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
        J2DM_ScaleFixy(buttonObject, game.height * parameters.sizey_landscape);
    }

    if(parameters.sizex_portrait!=null && configGame.getAspect() == ASPECT_PORTRAIT){
        J2DM_ScaleFixx(buttonObject, game.width * parameters.sizex_portrait);
    }

    if(parameters.sizey_portrait!=null && configGame.getAspect() == ASPECT_PORTRAIT){
        J2DM_ScaleFixy(buttonObject, game.height * parameters.sizey_portrait);
    }

    if(parameters.childs!=null){
        var group = game.add.group();
        buttonObject.addChild(group);
        buttonObject.customGroup = group;
        J2DM_AddMovieClip(parameters, group);
    }

    if(parameters.autoScaleText != null && parameters.autoScaleText == true){
        J2DM_ApplyTextsScale(buttonObject);
    }

    buttonObject.onInputOver.add(function(sprite, pointer){
        if(!sprite.inputEnabled){
            return;
        }
        var textObj = null;
        var color = null;
        if(buttonObject.customGroup!=null && buttonObject.customGroup.txt_buttonText){
            textObj = buttonObject.customGroup.txt_buttonText;
            color = buttonObject.parameters.childs.txt_buttonText.fillOver;
        }
        if(textObj!=null && color !=null){
            textObj.fill = '#' + color;
        }
    }, this);
    buttonObject.onInputOut.add(function(sprite, pointer){
        if(!sprite.inputEnabled){
            return;
        }
        var textObj = null;
        var color = null;

        if(buttonObject.customGroup!=null && buttonObject.customGroup.txt_buttonText){
            textObj = buttonObject.customGroup.txt_buttonText;
            color = buttonObject.parameters.childs.txt_buttonText.style.fill;
        }
        if(textObj!=null && color !=null){
            textObj.fill = color;
        }
    }, this);

    buttonObject.onInputDown.add(function(sprite, pointer){
        if(!sprite.inputEnabled){
            return;
        }
        var textObj = null;
        var color = null;
        if(buttonObject.customGroup!=null && buttonObject.customGroup.txt_buttonText){
            textObj = buttonObject.customGroup.txt_buttonText;
            color = buttonObject.parameters.childs.txt_buttonText.fillOver;
        }
        if(textObj!=null && color !=null){
            textObj.fill = '#' + color;
        }
    }, this);

    buttonObject.onInputUp.add(function(sprite, pointer){
        if(!sprite.inputEnabled){
            return;
        }
        var textObj = null;
        var color = null;

        if(buttonObject.customGroup!=null && buttonObject.customGroup.txt_buttonText){
            textObj = buttonObject.customGroup.txt_buttonText;
            color = buttonObject.parameters.childs.txt_buttonText.style.fill;
        }
        if(textObj!=null && color !=null){
            textObj.fill = color;
        }
    }, this);
    J2DM_ApplyResponsive(buttonObject, parameters);
    return buttonObject;
}

//----------------------------------------------------------
//----------------------------------------------------------
//-----------------  M U L T I P L I E R  ------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_CalculateMultiplier(parameters) {
    var multiplier = parameters.multiplier;

    if(multiplier!=null){
        if(multiplier.sizex_landscape!=null && multiplier.sizexFactor!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
            var finalWidth = game.width * multiplier.sizex_landscape;
            multiplier.factor = finalWidth/multiplier.sizexFactor;
        }

        if(multiplier.sizey_landscape!=null && multiplier.sizeyFactor!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
            var finalHeight = game.height * multiplier.sizey_landscape;
            multiplier.factor = finalHeight/multiplier.sizeyFactor;
        }

        if(multiplier.sizex_portrait!=null && multiplier.sizexFactor!=null && configGame.getAspect() == ASPECT_PORTRAIT){
            var finalWidth = game.width * multiplier.sizex_portrait;
            multiplier.factor = finalWidth/multiplier.sizexFactor;
        }

        if(multiplier.sizey_portrait!=null && multiplier.sizeyFactor!=null && configGame.getAspect() == ASPECT_PORTRAIT){
            var finalHeight = game.height * multiplier.sizey_portrait;
            multiplier.factor = finalHeight/multiplier.sizeyFactor;
        }

        if(multiplier.sizex!=null && multiplier.sizexFactor!=null ){
            var finalWidth = game.width * multiplier.sizex;
            multiplier.factor = finalWidth/multiplier.sizexFactor;
        }

        if(multiplier.sizey!=null && multiplier.sizeyFactor!=null){
            var finalHeight = game.height * multiplier.sizey;
            multiplier.factor = finalHeight/multiplier.sizeyFactor;
        }
    }
}


function J2DM_ControlAspectVariables(parameters){
    //Auto change concatenated props
    //Ex prop: 'multiplier.sizex_portrait', in aspectVariables
    if(parameters ==null){
        return;
    }
    if(parameters.aspectVariables==null){
        return;
    }
    if(configGame.getAspect()==ASPECT_LANDSCAPE && parameters.aspectVariables.landscape!=null){
        var amountCases = parameters.aspectVariables.landscape.length;
        for(var i=0; i<amountCases; i++){
            var currentCase = parameters.aspectVariables.landscape[i];
            var result = J2DM_GetPercentageFrom2Ranges(currentCase, ratioAspect); 
            eval('parameters.' + currentCase.prop + '= result');
        }
    }
    if(configGame.getAspect()==ASPECT_PORTRAIT && parameters.aspectVariables.portrait!=null){
        var amountCases = parameters.aspectVariables.portrait.length;
        for(var i=0; i<amountCases; i++){
            var currentCase = parameters.aspectVariables.portrait[i];
            var result = J2DM_GetPercentageFrom2Ranges(currentCase, ratioAspect); 
            eval('parameters.' + currentCase.prop + '= result');
        }
    }
}

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------  S I Z E  -------------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_ApplySize(mc, parameters) {
    if(parameters.free_sizex!=null){
        mc.width = game.width * parameters.free_sizex;
    }

    if(parameters.free_sizey!=null){
        mc.height = game.height * parameters.free_sizey;
    }

    if(parameters.sizex_landscape!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
        J2DM_ScaleFixx(mc, game.width * parameters.sizex_landscape);
    }

    if(parameters.sizey_landscape!=null && configGame.getAspect() == ASPECT_LANDSCAPE){
        J2DM_ScaleFixy(mc, game.height * parameters.sizey_landscape);
    }

    if(parameters.sizex_portrait!=null && configGame.getAspect() == ASPECT_PORTRAIT){
        J2DM_ScaleFixx(mc, game.width * parameters.sizex_portrait);
    }

    if(parameters.sizey_portrait!=null && configGame.getAspect() == ASPECT_PORTRAIT){
        J2DM_ScaleFixy(mc, game.height * parameters.sizey_portrait);
    }

    if(parameters.sizex!=null){
        J2DM_ScaleFixx(mc, game.width * parameters.sizex);
    }

    if(parameters.sizey!=null){
        J2DM_ScaleFixy(mc, game.height * parameters.sizey);
    }

    if(parameters.fixWidth!=null){
        mc.width = parameters.fixWidth;
    }

    if(parameters.fixHeight!=null){
        mc.height = parameters.fixHeight;
    }
}

//----------------------------------------------------------
//----------------------------------------------------------
//----------------  R E S P O N S I V E  -------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_ApplyResponsive(mc, parameters) {
    if(parameters!=null && parameters.responsive!=null){
        var res = parameters.responsive;

        if(res.padLeft!=null){
            var actualX = mc.left;
            var minX = res.padLeft * game.width;
            if( actualX < minX){
                var newWidth = mc.width - (minX-actualX) / res.anchorx;
                J2DM_ScaleFixx(mc, newWidth);
            }
        }
        if(res.padLeftPixels!=null){
            var actualX = mc.left;
            var minX = res.padLeftPixels;
            if( actualX < minX){
                var newWidth = mc.width - (minX-actualX) / res.anchorx;
                J2DM_ScaleFixx(mc, newWidth);
            }
        }
        if(res.padRight!=null){
            var actualX = mc.right;
            var maxX = game.width - res.padRight * game.width;
            if( actualX > maxX){
                var newWidth = mc.width - (actualX-maxX) / (1-res.anchorx);
                J2DM_ScaleFixx(mc, newWidth);
            }
        }
        if(res.padRightPixels!=null){
            var actualX = mc.right;
            var maxX = game.width - res.padRightPixels;
            if( actualX > maxX){
                var newWidth = mc.width - (actualX-maxX) / (1-res.anchorx);
                J2DM_ScaleFixx(mc, newWidth);
            }
        }
        if(res.padTop!=null){
            var actualY = mc.top;
            var minY = res.padTop * game.height;
            if( actualY < minY){
                var newHeight = mc.height - (minY-actualY) / res.anchory;
                J2DM_ScaleFixy(mc, newHeight);
            }
        }
        if(res.padTopPixels!=null){
            var actualY = mc.top;
            var minY = res.padTopPixels;
            if( actualY < minY){
                var newHeight = mc.height - (minY-actualY) / res.anchory;
                J2DM_ScaleFixy(mc, newHeight);
            }
        }
        if(res.padBottom!=null){
            var actualY = mc.bottom;
            var maxY = game.height - res.padBottom * game.height;
            if( actualY > maxY){
                var newHeight = mc.height - (actualY-maxY) / (1-res.anchory);
                J2DM_ScaleFixy(mc, newHeight);
            }
        }
        if(res.padBottomPixels!=null){
            var actualY = mc.bottom;
            var maxY = game.height - res.padBottomPixels;
            if( actualY > maxY){
                var newHeight = mc.height - (actualY-maxY) / (1-res.anchory);
                J2DM_ScaleFixy(mc, newHeight);
            }
        }
    }
}

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------  F A D E  -------------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_FadeIn(sprite, time) {
    sprite.alpha = 0;
    sprite.tweenFadeIn = game.add.tween(sprite);
    sprite.tweenFadeIn.to( { alpha: [1,1,1,1] }, time, Phaser.Easing.Default );
    sprite.tweenFadeIn.onComplete.add( function(){

    }, this);
    sprite.tweenFadeIn.start();
}

function J2DM_FadeOut(sprite, time) {
    sprite.alpha = 1;
    sprite.tweenFadeOut = game.add.tween(sprite);
    sprite.tweenFadeOut.to( { alpha: [0,0,0,0] }, time, Phaser.Easing.Default );
    sprite.tweenFadeOut.onComplete.add( function(){

    }, this);
    sprite.tweenFadeOut.start();
}

J2DM_EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity 
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity 
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity 
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity 
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t },
    // elastic bounce effect at the beginning
    easeInElastic: function (t) { if(t==1) return t; return (.04 - .04 / t) * Math.sin(15 * t) + 1 },
    // elastic bounce effect at the end
    easeOutElastic: function (t) { if(t==1) return t; return .04 * t / (--t) * Math.sin(25 * t) },
    // elastic bounce effect at the beginning and end
    easeInOutElastic: function (t) { if(t==1) return t; return (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1 }
}

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------  T I M E  -------------------------
//----------------------------------------------------------
//----------------------------------------------------------

function J2DM_TimerGetMinutesSecondsFormat(totalSeconds, addZero) {
    var seconds = J2DM_TimerGetSecondsFormat(totalSeconds, addZero);
    var minutes = J2DM_TimerGetMinutesFormat(totalSeconds, addZero);
    var totalTime = minutes + ':' + seconds;   
    return totalTime;
}

function J2DM_TimerGetSecondsFormat(totalSeconds, addZero) {
    var onlySeconds = totalSeconds % 60;
    if(onlySeconds<10 && addZero){
        return '0' + onlySeconds;
    }else{
        return onlySeconds;
    }
}

function J2DM_TimerGetMinutesFormat(totalSeconds, addZero) {
    var onlyMinutes = Math.floor(totalSeconds/60);
    if(onlyMinutes<10 && addZero){
        return '0' + onlyMinutes;
    }else{
        return onlyMinutes;
    }
}