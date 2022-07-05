//<strip> drop emotion from lo res game mode
// boxType- one of "sphere", "triangle", "box", "block"
// color - one of "red", 'green", "blue", "yellow"
/*
function DEFAULT_FACE (boxtype, color) 
{
    // display object container for all face objects 
    this.container = undefined;
    
    this.type = undefined; // type one of "f1", "f2", "f3"
    this.boxType = boxtype;
    this.color = color;

    this.Eye = {"Orbit": undefined, "Iris": undefined, "Closed": undefined };
    this.Hair = undefined;
    this.Tooth = undefined;
    this.Mustache = undefined;
    this.Eyebrow = undefined;
	
    // position of all elements from center
    this.eyePos = {"x": GlobalScale(0), "y":GlobalScale(-14)}; // position of Eye_closed, iris, orbit
    this.eyebrowPos = {"x":GlobalScale(0), "y":GlobalScale(-30)};
	
    // timer for animation effects(in game tics)
    this.timerDefault = {"current": 0, "end": 300, "step": 1}; // time between effects
    this.timer = this.timerDefault.clone(); 
    this.maxTimeForEffect = this.timerDefault.end/2;	// max time(in ticks) for effect: blink, iris moving ...

    // whole function for position and rotation
    this.SetPositionAndRotation = function(x, y, rot)
    {
	// eye orbit
	if(this.container === undefined)
	    return;

	this.container.position.x = x;
	this.container.position.y = y;
	this.container.rotation = rot;

    }

    // Update fuction for object
    this.Update = function()
    {
	this.timer.current += this.timer.step;
	if(this.timer.current > this.timer.end)
	{
	    this.effectId = UTILS.intRandomBetween(0, this.effectsList.length - 1);
	    this.effectData = undefined;
	    // determine effecttype
	    this.timer = this.timerDefault.clone();
	}

	//this.LongBlink();
	//this.ShortDoubleBlink();
	if(this.effectId !== undefined)
	{
	    this.effectsList[this.effectId](this);
	}
    }

    // Move mustache
    // th - this object
    this.MustacheMove = function(th)
    {
	if(th.Mustache === undefined)
	    return;

	var effectMaxTime = th.maxTimeForEffect / 2;
	if(th.timer.current > effectMaxTime)
	{
	    // effect complete
	    th.Mustache.rotation = 0; 
	    th.effectData = undefined;
	    return;
	}

	if(th.effectData === undefined)
	{
	    // init effect
	    th.effectData = {"amplitude": 0.1, "phase": 0.13}; 
	}

	var effectData= th.effectData;
	var value = effectData.amplitude * Math.sin(th.timer.current * effectData.phase); 
	th.Mustache.rotation = value;
    }

    // Move eyebrow
    // th - this object
    this.EyebrowMove = function(th)
    {

	if(th.Eyebrow === undefined)
	    return;

	var effectMaxTime = th.maxTimeForEffect / 2;
	if(th.timer.current > effectMaxTime)
	{
	    // effect complete
	    th.Eyebrow.position.y = th.eyebrowPos.y
	    th.effectData = undefined;
	    return;
	}

	if(th.effectData === undefined)
	{
	    // init effect
	    th.effectData = {"amplitude": 3, "phase": 2 * 0.08}; 
	}

	var effectData= th.effectData;
	th.Eyebrow.position.y = th.eyebrowPos.y + effectData.amplitude * Math.sin(th.timer.current * effectData.phase); 
    }

    // move iris
    this.IrisMove = function(th)
    {
	var effectMaxTime = th.maxTimeForEffect / 4;
	if(th.timer.current > effectMaxTime)
	{
	    // effect complete
	    th.effectData= undefined;
	    return;
	}

	if(th.effectData === undefined)
	{
	    // effect run first time
	    var moveIrisXRange = [GlobalScale(-3), GlobalScale(3), GlobalScale(0)];
	    var moveIrisYRange = [GlobalScale(-3), GlobalScale(3), GlobalScale(0)]; 

	    var x = moveIrisXRange[UTILS.intRandomBetween(0, moveIrisXRange.length - 1)];
	    var y = moveIrisXRange[UTILS.intRandomBetween(0, moveIrisYRange.length - 1)];
	    var ud = {"toX":x, "toY":y, "curX":GlobalScale(0), "curY": GlobalScale(0)};
	    th.effectData = ud; // store info in userdata
	}

	var effectData= th.effectData;
	effectData.curX = Math.round(effectData.toX * th.timer.current/effectMaxTime);
	effectData.curY = Math.round(effectData.toY * th.timer.current/effectMaxTime);
	
	//console.log("userDatax: " + effectData.curX);
	 
	th.Eye.Iris.position.x = th.eyePos.x + effectData.curX;
	th.Eye.Iris.position.y = th.eyePos.y + effectData.curY;

    }

    // blink twice
    // th - this object
    this.ShortDoubleBlink = function(th)
    {
	if(th.Eye.Closed === undefined)
	    return;

	var effectMaxTime = th.maxTimeForEffect / 4;
	if(th.timer.current > effectMaxTime)
	{
	    th.Eye.Closed.visible = false;
	    return;
	}

	var periodLen = (Math.round(effectMaxTime / 4));
	var intPeriod = Math.round(th.timer.current / periodLen);
	if(intPeriod == 0 || intPeriod == 2)
	    th.Eye.Closed.visible = true;
	else
	    th.Eye.Closed.visible = false;

    }

    // long blink 
    // th - this object 
    this.LongBlink = function(th)
    {
	if(th.Eye.Closed === undefined)
	    return;
	
	if(th.timer.current > th.maxTimeForEffect/4)
	    th.Eye.Closed.visible = false;
	else
	    th.Eye.Closed.visible = true;
	    		
    }

    // Animation effcts
    this.effectsList = [this.ShortDoubleBlink, this.LongBlink, this.IrisMove];
    this.effectId= 0;
    this.effectData = undefined;	// some effect defined data 
}
*/

/*
function EmotionGenerator () 
{
    // emotion elements
    this.elements = 
	["F1_All_Eyebrow_1",
	"F1_All_Eyebrow_2",
	"F1_All_Eye_Iris",
	"F1_All_Mustache",
	"F1_Blue_Eye_Closed",
	"F1_Blue_Eye_Orbit",
	"F1_Green_Eye_Closed",
	"F1_Green_Eye_Orbit",
	"F1_Red_Eye_Closed",
	"F1_Red_Eye_Orbit",
	"F1_Yellow_Eye_Closed",
	"F1_Yellow_Eye_Orbit",

	"F2_All_Eye_Closed",
	"F2_All_Mustache",
	"F2_All_Eye_Orbit",
	"F2_Yellow_Eye_Iris",
	"F2_Blue_Eye_Iris",
	"F2_Red_Eye_Iris",
	"F2_Green_Eye_Iris",
		
	"F3_All_Mustache",
	"F3_Blue_Eye_Closed",
	"F3_Blue_Eye_Iris",
	"F3_Blue_Eye_Orbit",
	"F3_Green_Eye_Closed",
	"F3_Green_Eye_Iris",
	"F3_Green_Eye_Orbit",
	"F3_Red_Eye_Closed",
	"F3_Red_Eye_Iris",
	"F3_Red_Eye_Orbit",
	"F3_Yellow_Eye_Closed",
	"F3_Yellow_Eye_Iris",
	"F3_Yellow_Eye_Orbit",
	
	"Hair_Box_1",
	"Hair_Box_2",
	"Hair_Sphere_1",
	"Hair_Sphere_2",

	"Touth_1",
	"Touth_2",
	"Touth_3"];

    // face types
    this.facetype=["F1", "F2", "F3"];
    
    // generate random face
    this.GenerateFace = function(boxType, color, rootContainer)
    {
	var r = new DEFAULT_FACE(boxType, color);
	r.container = new PIXI.DisplayObjectContainer();
	rootContainer.addChild(r.container);

        //Select type F1, F2, F3...
	r.type = this.facetype[UTILS.intRandomBetween(0, this.facetype.length -1)]; 

        // generate other elements
	r = this.generateHair(r);
	r = this.generateEye(r);
	r = this.generateTooth(r);
	r = this.generateEyebrow(r);
	r = this.generateMustache(r);
	return r;
    }

    // Free resources allocated by object
    this.Free = function(face, rootContainer)
    {
        // delete all objects from container
        removeAllChild(face.container);
        rootContainer.removeChild(face.container); 
        face.container = undefined;

        // undefine 
        face.Eye = {"Orbit": undefined, "Iris": undefined, "Closed": undefined };
        face.Hair = undefined;
        face.Tooth = undefined;
        face.Mustache = undefined;
        face.Eyebrow = undefined;

        face = undefined;
    }

    //generate eyebrow 
    this.generateEyebrow = function(r)
    {
	// do not generate eyebrow for block and triangle
	if(r.boxType == "Block" || r.boxType == "Triangle") 
	    return r;

	var color = "(All|" + r.color + ")"; 
	var strExpr = r.type + "_" + color + "_Eyebrow"; 

	var c = this.selectCandidates(strExpr);
	if(c.length != 0)
	{
	    var randId = UTILS.intRandomBetween(0, c.length);
	    if(randId == c.length)	// without eyebrow 
		return r;

	    var eyebrow = c[randId];
	    eyebrow = this.toImagePath(eyebrow);
	    r.Eyebrow = PIXI.Sprite.fromImage(eyebrow);
	    r.Eyebrow.anchor.x = 0.5;
	    r.Eyebrow.anchor.y = 0.5;
	    r.Eyebrow.position.x = r.eyebrowPos.x;
	    r.Eyebrow.position.y = r.eyebrowPos.y; 
	    r.container.addChild(r.Eyebrow);
	}	
	
	r.effectsList.push(r.EyebrowMove);
	return r;
    }

    // generate mutache
    this.generateMustache = function(r)
    {
	var color = "(All|" + r.color + ")"; 
	var strExpr = r.type + "_" + color + "_Mustache"; 

	var c = this.selectCandidates(strExpr);
	if(c.length != 0)
	{
	    var randId = UTILS.intRandomBetween(0, c.length);
	    if(randId == c.length)	// without mustache
		return r;

	    var mustache = c[randId];
	    mustache = this.toImagePath(mustache);
	    r.Mustache = PIXI.Sprite.fromImage(mustache);
	    r.Mustache.anchor.x = 0.5;
	    r.Mustache.anchor.y = 0.5;
	    r.Mustache.position.x = 0;
	    r.Mustache.position.y = 3; 
	    r.container.addChild(r.Mustache);
	}	
	r.effectsList.push(r.MustacheMove);
	return r;
    }

    // generate hair 
    this.generateHair = function(r)
    {
	var strExpr = "Hair_"+r.boxType;
	var c = this.selectCandidates(strExpr);
	//console.log("hair candidates: " +c);
	if(c.length != 0)
	{
	    var id = UTILS.intRandomBetween(0, c.length);
	    if(id == c.length)
		return r; 	// without hair

	    var hair = c[id];
	    hair = this.toImagePath(hair);
	    r.Hair = PIXI.Sprite.fromImage(hair);
	    r.Hair.anchor.x = 0.5;
	    r.Hair.anchor.y = 0;
	    r.Hair.position.x = GlobalScale(0);
	    r.Hair.position.y = GlobalScale(-58);
	    r.container.addChild(r.Hair);
	}	
	return r;
    }

    // Generate touth
    this.generateTooth = function(r)
    {
	var strExpr = "Touth_";
	var c = this.selectCandidates(strExpr);
	console.log("tooth candidates" + c);
	if(c.length != 0)
	{
	    var tooth = c[UTILS.intRandomBetween(0, c.length-1)];
	    tooth = this.toImagePath(tooth);
	    r.Tooth = PIXI.Sprite.fromImage(tooth);
	    r.Tooth.anchor.x = 0.5;
	    r.Tooth.anchor.y = 0.5;
	    r.Tooth.position.x = GlobalScale(0);
	    r.Tooth.position.y = GlobalScale(20); 
	    r.container.addChild(r.Tooth);
	}	
	return r;
    }
    
    
    // Generate touth
    this.generateTooth = function(r)
    {
	var strExpr = "Touth_";
	var c = this.selectCandidates(strExpr);
	//console.log("tooth candidates" + c);
	if(c.length != 0)
	{
	    var tooth = c[UTILS.intRandomBetween(0, c.length-1)];
	    tooth = this.toImagePath(tooth);
	    r.Tooth = PIXI.Sprite.fromImage(tooth);
	    r.Tooth.anchor.x = 0.5;
	    r.Tooth.anchor.y = 0.5;
	    r.Tooth.position.x = 0;//r.toothPos.x;
	    r.Tooth.position.y = 20; //r.toothPos.y;
	    r.container.addChild(r.Tooth);
	}	
	return r;
    }
    
    
    // generate Closed/iris/orbit
    this.generateEye = function(r) 
    {
	var color = "(All|" + r.color + ")"; 
	
	
	// Eye orbit
	var strExpr = r.type + "_" + color + "_Eye_Orbit"; 
	var c = this.selectCandidates(strExpr);
	if(c.length != 0)
	{
	    var orbit = c[UTILS.intRandomBetween(0, c.length-1)];
	    orbit = this.toImagePath(orbit);
	    //console.log("orbit " +orbit);
	    r.Eye.Orbit = PIXI.Sprite.fromImage(orbit);
	    r.Eye.Orbit.anchor.x = 0.5;
	    r.Eye.Orbit.anchor.y = 0.5;
	    r.Eye.Orbit.position.x = r.eyePos.x;
	    r.Eye.Orbit.position.y = r.eyePos.y;
	    r.container.addChild(r.Eye.Orbit);
	}	

	// eye iris
	strExpr = r.type + "_" + color + "_Eye_Iris"; 
	c = this.selectCandidates(strExpr);
	if(c.length != 0)
	{
	    var iris = c[UTILS.intRandomBetween(0, c.length-1)];
	    iris = this.toImagePath(iris);
	    //console.log("Iris" + iris);
	    r.Eye.Iris = PIXI.Sprite.fromImage(iris);
	    r.Eye.Iris.anchor.x = 0.5;
	    r.Eye.Iris.anchor.y = 0.5;
	    r.Eye.Iris.position.x = r.eyePos.x;
	    r.Eye.Iris.position.y = r.eyePos.y;
	    r.container.addChild(r.Eye.Iris);
	}	
	
	// eye closed
	strExpr = r.type + "_" + color + "_Eye_Closed"; 
	c = this.selectCandidates(strExpr);
	if(c.length != 0)
	{
	    var closed = c[UTILS.intRandomBetween(0, c.length-1)];
	    closed = this.toImagePath(closed);
	    //console.log("eye closed" + closed);
	    r.Eye.Closed = PIXI.Sprite.fromImage(closed);
	    r.Eye.Closed.anchor.x = 0.5;
	    r.Eye.Closed.anchor.y = 0.5;
	    r.Eye.Closed.position.x = r.eyePos.x;
	    r.Eye.Closed.position.y = r.eyePos.y;
	    r.Eye.Closed.visible = false;
	    r.container.addChild(r.Eye.Closed);
	}	
	return r;
    }

    // select all that matched regular expression from this.elements
    // expr - regular expression as string
    this.selectCandidates = function(expr)
    {
	var candidates = []; 
	for(var i = 0; i < this.elements.length; i++)
	{
	    var cur = this.elements[i];
	    var e = new RegExp(expr, "gi");
	    if(e.test(cur))
		candidates.push(cur);
	}

	return candidates;
    }

    this.toImagePath = function(name)
    {
        //var root = "./img/objects/emotions/";
        var root = "";

	var ret = root + name+".png";
	return ret;
    }
}
*/
// dynamic object emotion 
// objType - object type, t-triangle, s- sphere ... see level_list to more details
function LEVEL_Object_Emotion(objType)
{
    this.rootContainer = undefined;
    this.objContainer = undefined;
    this.objectType = objType; 
    
    this.eyesTextureList = ["eye2.png", "eye3.png", "eye4.png"];
    this.closedEyeTextureName = "eye1.png";
    this.eyesList = undefined;
    this.closedEye = undefined;

    this.currentTick = 0; // 
    this.currentIndex = undefined;
    this.isEyeClosed = false;

    // Init object emotion
    // rootContainer - container for object parts 
    this.Init = function(rootContainer)
    {   
        this.rootContainer = rootContainer;
	this.objContainer = new PIXI.DisplayObjectContainer();
	this.rootContainer.addChild(this.objContainer);
        // set position of container

        this.eyesList = Array(this.eyesTextureList.length);
        for(i = 0; i < this.eyesTextureList.length; ++i)
        {
	    this.eyesList[i] = PIXI.Sprite.fromImage(this.eyesTextureList[i]);
            this.eyesList[i].visible = false;
            this.eyesList[i].anchor.x = 0.5;
            this.eyesList[i].anchor.y = 0.5;
            this.eyesList[i].position.x = 0;
            this.eyesList[i].position.y = 0;
            
            this.objContainer.addChild(this.eyesList[i]);
        }

        // for closed eye
        this.closedEye = PIXI.Sprite.fromImage(this.closedEyeTextureName);
        this.closedEye.visible = this.isEyeClosed;
        this.closedEye.anchor.x = 0.5;
        this.closedEye.anchor.y = 0.5;
        this.closedEye.position.x = 0;
        this.closedEye.position.y = 0;
        this.objContainer.addChild(this.closedEye);

        // init index
        this.currentIndex = UTILS.intRandomBetween(0, this.eyesList.length - 1); 
        this.eyesList[this.currentIndex].visible = true;

    }

    // free object emotion
    this.Free = function()
    {
        // delete object from container
    }

    this.Update = function(x,y, rot)
    {
        this.currentTick ++;
        if(this.isEyeClosed === false)
        {
            if(this.currentTick > 200)
            {
                this.isEyeClosed = true;
                this.closedEye.visible = this.isEyeClosed;
                this.currentTick = 0;
                this.eyesList[this.currentIndex].visible = false;
            }
        }
        else
        {
            if(this.currentTick > 10)
            {
                this.isEyeClosed = false;
                this.closedEye.visible = this.isEyeClosed;
                // init id
                this.currentTick = 0;
                this.currentIndex = UTILS.intRandomBetween(0, this.eyesList.length - 1); 
                this.eyesList[this.currentIndex].visible = true;
            }
        }

        // update position 
        for(i = 0; i < this.eyesList.length; ++i)
        {
            this.eyesList[i].position.x = x;
            this.eyesList[i].position.y = y;
            this.eyesList[i].rotation = rot;
        }
        // update position of closed eyes
        this.closedEye.position.x = x;
        this.closedEye.position.y = y;
        this.closedEye.rotation = rot;
    }


}
//</strip>
