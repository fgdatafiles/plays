// return true if run under iphone/ipad/android

DEVICE={
    /*  
        ==================================================================
        If device is mobile use tap metods instead click
        ================================================================== 
     */
    "ClickOrTap":
        function(obj, func)
        {
            if(DEVICE.isMobile())
                obj.tap = func;
            else
                obj.click = func;
        },

    /*  
        ==================================================================
        return true if device is mobile(ipad/iphone/android) 
        ================================================================== 
     */
    "isMobile": 
        function()
        {
            if(navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/iPad/i) 
                    || navigator.userAgent.match(/iPhone/i))
            {
                return true;
            }

            return false;
        }   
};

UTILS = {
    /*  
        ==================================================================
        return random value between fromMin, toMax
        ================================================================== 
     */
    "randomBetween":
        function(fromMin, toMax)
        {
            return Math.random() * (toMax - fromMin) + fromMin;
        },

    /*  
        ==================================================================
        return int random value between min, max
        ================================================================== 
     */
    "intRandomBetween":
        function(min, max) 
        {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
};

// extend Object to add clone function
// taken from here http://my.opera.com/GreyWyvern/blog/show.dml/1725165
Object.prototype.clone = function() 
{
    var newObj = (this instanceof Array) ? [] : {};
    var i;
    for (i in this){
        if (i == 'clone') continue;
        if (this[i] && typeof this[i] == "object")
        {
            newObj[i] = this[i].clone();
        } 
        else 
            newObj[i] = this[i]
    } 

    return newObj;
};

// Helpfull set of functions to work with virtual/device screen
function Screen() //FIXME: move Screen to DEVICE
{
    // Virtual(game) screen
    this.VirtualScrW = GlobalScale(640);		// width of virtual(game) window
    this.VirtualScrH = GlobalScale(960);		// heigth of virtual(game) window
    this.VirtualScrIsPortrait = true;  // if true portrait orienvation will used, false - landspace
    this.VirtualScrAspectRatio = this.VirtualScrW / this.VirtualScrH;

    // Real(device) screen
    this.DeviceScrW = window.innerWidth;	// width of device window
    this.DeviceScrH = window.innerHeight;	// height of device window
    this.DeviceScrAspectRatio = this.DeviceScrW / this.DeviceScrH;

    // Maximum optional width and height of window
    this.MaxOptionalScrW = 2 * this.VirtualScrW;
    this.MaxOptionalScrH = 2 * this.VirtualScrH;

    // Calculated screen width and height for current device
    this.OptionalScrW = null;
    this.OptionalScrH = null;
    this.VirtualToOptionalScaleW = null;	// ratio to get optional screen width by it Virtual coords 
    this.VirtualToOptionalScaleH = null;	// ratio to get optional screen height by it Virtual coords 
    // Calculate scren OptionalScrW/OptionalScrH by given Virtual and Device
    this.Init = function()
    {	
        this.DeviceScrAspectRatio = this.DeviceScrW / this.DeviceScrH;

        var ow1 = this.DeviceScrW > this.MaxOptionalScrW ? this.MaxOptionalScrW : this.DeviceScrW;
        var oh1 = parseInt(ow1/this.VirtualScrAspectRatio);

        var oh2 = this.DeviceScrH > this.MaxOptionalScrH ? this.MaxOptionalScrH : this.DeviceScrH;
        var ow2 = parseInt(oh2 * this.VirtualScrAspectRatio);

        if(oh1 <= this.DeviceScrH)
        {
            this.OptionalScrW = ow1;
            this.OptionalScrH = oh1;
        }
        else
        {
            this.OptionalScrW = ow2;
            this.OptionalScrH = oh2;
        }

        this.VirtualToOptionalScaleW = this.OptionalScrW / this.VirtualScrW;
        this.VirtualToOptionalScaleH = this.OptionalScrH / this.VirtualScrH;	
    }

    this.DebugPrint = function()
    {
        // print usefull data
        console.log("=========================== Screen.DebugPrint ========================== ");
        console.log("VirtualScr:"+this.VirtualScrW+" X "+this.VirtualScrH);
        console.log("DeviceScr:"+this.DeviceScrW+" X "+this.DeviceScrH);
        console.log("OptionalScr:"+this.OptionalScrW+" X "+this.OptionalScrH);
        console.log("VirtualToOptionalScale: "+this.VirtualToOptionalScaleW+" X "+this.VirtualToOptionalScaleH);
    }

    this.Init();
}
Screen = new Screen(); // global var
//Screen.DebugPrint();



// remove all children from scene object. Be carefull with complex objects, does not remove in deep(recursive)
function removeAllChild(obj)
{
    for(var c = 0; c < obj.children.length; c++)
    {
        obj.removeChild(obj.children[c]);
    }
}

// ==================================== Bezier Spline Implmementation
// http://en.wikipedia.org/wiki/B%C3%A9zier_curve
// Implementation of Cubic Bezier spline
function BezierKubic()
{
    this.controlPoints = undefined;	// array of control points
    this.t = 0.0;
    this.dt = 0.001;	// step 
    this.currentPos = {"x":undefined, "y":undefined};
    this.onComplete = undefined;	// callback function, called when complete 

    // Init spline
    // T1..T4 - pair of [x,y]
    // speed - update speed [0..1]
    // oncomplete - callback function, called when movement complete
    this.Init = function(T1, T2, T3, T4, speed, onComplete)
    {
        this.controlPoints = [T1, T2, T3, T4];
        this.t = 0.0;
        this.dt = (speed === undefined) ? 0.001 : speed;
        //console.log(this.dt)

        this.onComplete = onComplete;

        this.Update();
    }

    this.Reset = function()
    {
        this.Init(this.controlPoints[0], this.controlPoints[1], this.controlPoints[2], this.controlPoints[3], this.dt, this.onComplete);
    }

    // return true if movement complete
    this.isComplete = function()
    {
        return this.t == 1.0;
    }

    // get current positon on spline
    this.getCurrentPosition = function()
    {
        return this.currentPos;
    }

    // Update spline
    this.Update = function()
    {
        this.t += this.dt;
        // movement complete
        if(this.t > 1.0)
        {
            this.t = 1.0;
            this.currentPos.x = this.controlPoints[3].x;
            this.currentPos.y = this.controlPoints[3].y;

            if(this.onComplete !== undefined)
                this.onComplete(this);	// call it and pass itself as param
            return;
        }

        var c1 = Math.pow((1 - this.t), 3);
        var c2 = 3 * this.t * Math.pow((1 - this.t), 2);
        var c3 = 3 * Math.pow(this.t, 2) * (1 - this.t);
        var c4 = Math.pow(this.t, 3);

        this.currentPos.x = this.controlPoints[0].x * c1 + this.controlPoints[1].x * c2 + this.controlPoints[2].x * c3 + this.controlPoints[3].x * c4;
        this.currentPos.y = this.controlPoints[0].y * c1 + this.controlPoints[1].y * c2 + this.controlPoints[2].y * c3 + this.controlPoints[3].y * c4;
    }
}

// linear interpolator
//function LinearInterpolator
//{
    //this.from = {x:undefined, y:undefined};
    //this.to = {x:undefined, y:undefined};
    //this.current = {x:undefined, y:undefined};
    //this.speed = undefined;

    //this.Init = function(from, to, speed)
    //{
        //this.from = from;
        //this.to = to;
        //this.speed = speed;
        //this.current = this.from;
    //}

    //this.Update = function()
    //{
        //if(this.current.x > this.to.x)
            //this.current.x -= this.speed;
    //}
    
    //this.GetCurrent = function()
    //{
        //return this.current;
    //}

//}

// convert from pixels to pysics units, 100px = 1metter
function PixelsToUnits(posInPixels)
{
    return posInPixels/100;
}

// convert from physics units to pixels (100px = 1metter)
function UnitsToPixels(posInUnits)
{
    return Math.round(posInUnits * 100);
}

// convert time (as milliseconds) to value like hh:mm::ss
// val - time in millisecond
// separator - default ":"
// leadingZero if true add leading zero: 9:5:4 -> 09:05:04
function TimeToString(val, separator, leadingZero)
{
    // default value for leading zero 
    if(separator === undefined) separator = ":";
    if(leadingZero === undefined)  leadingZero = true;

    var timePassed = Math.round(val /1000);
    var h = parseInt( timePassed / 3600 ) % 24;
    var m = parseInt( timePassed / 60 ) % 60;
    var s = timePassed % 60;

    // convert to string with leading zero
    if(leadingZero == true)
    {
        var hToStr = (h < 10 ? "0": "")+h.toString();		
        var mToStr = (m < 10 ? "0": "")+m.toString();	
        var sToStr = (s < 10 ? "0": "")+s.toString();
    }

    return /*hToStr+separator+*/mToStr+separator+sToStr; //FIXME: hours removed in this game
}

function pauseGame() {
    // Insert here the logic to pause your game
    console.log('The advertisement is about to show, you should pause your game');
}

function resumeGame() {
    // Insert here the logic to resume your game
    console.log('The advertisment is shown and your game can now be resumed');
}
