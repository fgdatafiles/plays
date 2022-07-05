// select game levels screen
function SelectGameLevelsScreen()
{
    this.rootObject = undefined;
    this.objContainer = undefined;
    this.mouseOver = {"prev":undefined, "cur":undefined}; // prev- previous value of mouse over, cur - current
    this.bg = undefined;
    this.index = undefined; // page index to switch on it
    this.isCurrent= undefined; // is active or not

    this.SetPosition = function(x, y)
    {
        this.objContainer.position.x = x;
        this.objContainer.position.y = y;
    }

    // rootObject - scene object to store info into it
    // index - id of select levels screen to switch to it
    // isCurrent - true if current screen is active, false otherwice
    this.Init = function(rootObject, index, isCurrent)
    {
        this.index = index;
        this.isCurrent = isCurrent;
        this.mouseOver.prev = false;
        this.mouseOver.cur = false;
        this.rootObject = rootObject;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootObject.addChild(this.objContainer);

        // backgroud
        var filename = (this.isCurrent === true ? "game_levels_screen_selected.png": "game_levels_screen_notselected.png");
        console.log("furre:"+filename);
        this.bg = new PIXI.Sprite(PIXI.Texture.fromImage(filename));
        this.bg.anchor.x = 0.5;
        this.bg.anchor.y = 0.5;
        this.bg.position.x = this.bg.width/2;
        this.bg.position.y = this.bg.height/2;
        this.bg.interactive = true;
        this.bg.buttonMode = true;

        if(this.isCurrent !== true)
        {
            var hack = this; // FIXME: hack to  use this is callback, i promice to read javacript language spec. to fix this
            this.bg.mouseover = function()
            {
                hack.mouseOver.prev = hack.mouseOver.cur;
                hack.mouseOver.cur = true;
            }
            this.bg.mouseout = function()
            {
                hack.mouseOver.prev = hack.mouseOver.cur;
                hack.mouseOver.cur = false;
            }
            DEVICE.ClickOrTap(this.bg, function(data){
                    //SoundManager.Play("onlevelstart");
                    GAME.currentStage.Fadeout();
                    GAME.currentStage = GAME.stages.levels;
                    GAME.currentStage.Fadein(hack.index);
                });
        }

        this.objContainer.addChild(this.bg);

    }

    this.Free = function()
    {
        this.mouseOver.prev = undefined;
        this.mouseOver.cur = undefined;

        this.objContainer.removeChild(this.bg);
        this.bg = undefined;

        removeAllChild(this.objContainer); // clear other objects

        this.rootObject.removeChild(this.objContainer);
        this.objContainer = undefined;
    }

    this.Update = function()
    {
        var scalex = 1;
        var scaley = 1;

        if(this.mouseOver.cur === true)
        {
            scalex += 0.1;
            scaley += 0.1;
        }

        // mouse first time over button
        if( this.mouseOver.prev !== this.mouseOver.cur &&
            this.mouseOver.cur === true)
        {
            this.mouseOver.prev = this.mouseOver.cur;
            // cursor on mouse
            //SoundManager.Play("onbutton");
        }

        this.bg.scale.x = scalex;
        this.bg.scale.y = scaley;

    }
}



// current level icon
function IconCurrentPlay()
{
    this.rootObject = undefined;
    this.objContainer = undefined;
    this.playBtnEffect = undefined; // play button shiver effect
    this.mouseOver = {"prev":undefined, "cur":undefined}; // prev- previous value of mouse over, cur - current
    this.bg = undefined;
    this.index = undefined;

    this.SetPosition = function(x, y)
    {
        this.objContainer.position.x = x;
        this.objContainer.position.y = y;
    }

    this.Init = function(rootObject, index)
    {
        this.index = index;
        this.mouseOver.prev = false;
        this.mouseOver.cur = false;
        this.rootObject = rootObject;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootObject.addChild(this.objContainer);

        // backgroud
        this.bg = new PIXI.Sprite(PIXI.Texture.fromImage("current_bg.png"));
        this.bg.anchor.x = 0.5;
        this.bg.anchor.y = 0.5;
        this.bg.position.x = this.bg.width/2;
        this.bg.position.y = this.bg.height/2;
        this.bg.interactive = true;
        this.bg.buttonMode = true;
        var hack = this; // FIXME: hack to  use this is callback
        this.bg.mouseover = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = true;
        }
        this.bg.mouseout = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = false;
        }
        DEVICE.ClickOrTap(this.bg, function(data){
                SoundManager.Play("onlevelstart");
                GAME.currenLevelId = hack.index - 1; // numeration from 1
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.game;
                GAME.currentStage.Fadein();
            });
        this.objContainer.addChild(this.bg);

        this.playBtnEffect =  new ShiverEffect();
        this.playBtnEffect.Init(0.05, 0.0, 0.3);

    }

    this.Free = function()
    {
        this.mouseOver.prev = undefined;
        this.mouseOver.cur = undefined;

        this.objContainer.removeChild(this.bg);
        this.bg = undefined;

        removeAllChild(this.objContainer); // clear other objects

        this.rootObject.removeChild(this.objContainer);
        this.objContainer = undefined;
    }

    this.Update = function()
    {
        this.playBtnEffect.Update();
        var scalex = 1 + this.playBtnEffect.GetValue();
        var scaley = 1 - this.playBtnEffect.GetValue();
        if(this.mouseOver.cur === true)
        {
            scalex += 0.1;
            scaley += 0.1;
        }

        // mouse first time over button
        if( this.mouseOver.prev !== this.mouseOver.cur &&
            this.mouseOver.cur === true)
        {
            this.mouseOver.prev = this.mouseOver.cur;
            // cursor on mouse
            SoundManager.Play("onbutton");
        }

        this.bg.scale.x = scalex;
        this.bg.scale.y = scaley;

    }
}

// locked icon 
function IconLocked()
{
    this.rootObject = undefined;
    this.objContainer = undefined;
    this.mouseOver = {"prev":undefined, "cur":undefined}; // prev- previous value of mouse over, cur - current
    this.effect = undefined;
    this.bg = undefined;

    this.SetPosition = function(x, y)
    {
        this.objContainer.position.x = x;
        this.objContainer.position.y = y;
    }

    this.Init = function(rootObject)
    {
        this.mouseOver.cur = false;
        this.mouseOver.prev = false;
        this.rootObject = rootObject;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootObject.addChild(this.objContainer);

        // backgroud
        this.bg = new PIXI.Sprite(PIXI.Texture.fromImage("unactive_bg.png"));
        this.bg.anchor.x = 0.5;
        this.bg.anchor.y = 0.5;
        this.bg.position.x = this.bg.width/2;
        this.bg.position.y = this.bg.height/2;
        this.bg.interactive = true;
        var hack = this; // FIXME: hack to  use this is callback
        this.bg.mouseover = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = true;
        }
        this.bg.mouseout = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = false;
        }
        this.objContainer.addChild(this.bg);	

    }

    this.Free = function()
    {
        this.mouseOver.cur = undefined;
        this.mouseOver.prev = undefined;

        this.objContainer.removeChild(this.bg);
        this.bg = undefined;

        removeAllChild(this.objContainer); // clear other objects

        this.rootObject.removeChild(this.objContainer);
        this.objContainer = undefined;
    }

    this.Update = function()
    {
        if(this.effect === undefined && this.mouseOver.cur === true)
        {
            this.effect =  new ShiverEffect();
            this.effect.Init(0.05, 0.002, 0.8);
        }
    
        // mouse firt time over button
        if( this.mouseOver.prev !== this.mouseOver.cur &&
            this.mouseOver.cur === true)
        {
            this.mouseOver.prev = this.mouseOver.cur;
            // cursor on mouse
            SoundManager.Play("onlockedbutton");
        }
        var scalex = 1;
        var scaley = 1;
        if(this.effect !== undefined )
        {
            this.effect.Update();
            scalex += this.effect.GetValue();
            scaley -= this.effect.GetValue();
            if(this.effect.isComplete() && this.mouseOver.cur === false)
                this.effect = undefined;
        }
        
        this.bg.scale.x = scalex;
        this.bg.scale.y = scaley;
    }
}


// already completed level
function IconCompleted()
{
    this.rootObject = undefined;
    this.objContainer = undefined;
    this.font = undefined;
    this.index = undefined;
    this.mouseOver = {"prev":undefined, "cur":undefined}; // prev- previous value of mouse over, cur - current
    this.bg = undefined;
    this.stars = {"full":undefined, "empty":undefined, "mask":undefined};

    this.SetPosition = function(x, y)
    {
        this.objContainer.position.x = x;
        this.objContainer.position.y = y;
    }

    this.Init = function(rootObject, ind)
    {
        if(0 > ind || ind > 99)
        {
            console.log("Error: index "+ind+" out of bonds");
            return;
        }

        this.mouseOver.cur = false;
        this.mouseOver.prev = false;
        this.index = ind;
        this.rootObject = rootObject;
        this.objContainer = new PIXI.DisplayObjectContainer();
        this.rootObject.addChild(this.objContainer);

        // backgroud
        this.bg = new PIXI.Sprite(PIXI.Texture.fromImage("completed_bg.png"));
        this.bg.anchor.x = 0.5;
        this.bg.anchor.y = 0.5;
        this.bg.position.x = this.bg.width/2;
        this.bg.position.y = this.bg.height/2;
        this.bg.interactive = true;
        this.bg.buttonMode = true;
        var hack = this; // FIXME: hack to  use this is callback
        this.bg.mouseover = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = true;
        }
        this.bg.mouseout = function()
        {
            hack.mouseOver.prev = hack.mouseOver.cur;
            hack.mouseOver.cur = false;
        }
        DEVICE.ClickOrTap(this.bg, function(data){
                SoundManager.Play("onlevelstart");
                GAME.currenLevelId = hack.index-1; // index from 1
                GAME.currentStage.Fadeout();
                GAME.currentStage = GAME.stages.game;
                GAME.currentStage.Fadein();
            });
        this.objContainer.addChild(this.bg);	

        // label of element
        var label = this.index.toString();
        this.font = new PIXI.BitmapText("", {font: GlobalScale(70)+"px select_level"});

        this.font.setText(label);
        this.objContainer.addChild(this.font);
        // senter label, becouse there is not anchor.x and anchor.y for font
        if(label == "1") // number 1
        {
            this.font.position.x = GlobalScale(45);
            this.font.position.y = GlobalScale(12);
        }
        else if(label == "20") // number 20
        {
            this.font.position.x = GlobalScale(5);
            this.font.position.y = GlobalScale(12);
        }
        else if(label.length == 1) // digits from 2..9
        {
            this.font.position.x = GlobalScale(30);
            this.font.position.y = GlobalScale(12);
        }
        else // digits from 10..20
        {
            this.font.position.x = GlobalScale(20);
            this.font.position.y = GlobalScale(12);
        }

        // empty star
        this.stars.empty = new PIXI.Sprite(PIXI.Texture.fromImage("stars_empty.png"));
        this.stars.empty.anchor.x = 0.5;
        this.stars.empty.anchor.y = 0.5;
        this.stars.empty.position.x = GlobalScale(6) + this.stars.empty.width/2;
        this.stars.empty.position.y = GlobalScale(74)+ this.stars.empty.height/2;;
        this.objContainer.addChild(this.stars.empty);

        // full star
        //FIXME: REMOVE THIS CODE TO SEPARATE PROGRESS BAR CLASS
        this.stars.full = new PIXI.Sprite(PIXI.Texture.fromImage("stars_full.png"));
        this.stars.full.position.x = GlobalScale(6) // + this.stars.full.width/2;
        this.stars.full.position.y = GlobalScale(74) //+ this.stars.full.height/2;;
        this.objContainer.addChild(this.stars.full);
	
        // lets create moving shape
	this.stars.mask = new PIXI.Graphics();
	this.stars.mask.position.x = this.stars.full.position.x;
	this.stars.mask.position.y = this.stars.full.position.y;
        this.objContainer.addChild(this.stars.mask);

        this.stars.full.mask = this.stars.mask;

        // caclulate texture height depending on collected energy
        var currentEnergyScore = GAMEINFO.getInfo(ind - 1).score;
        var maxEnergy = GAME_LEVELS[ind-1].stars.length * 1000;// 1000 is not magic number, is max energy per star, see level_object_star.js
        var val = Math.round(GlobalScale(105) * currentEnergyScore/maxEnergy);  // 92 is not magic number is stars_full.png width 
        if(val == 0) {val = 1;}

        // fill clipping mask
	this.stars.mask.lineStyle(0);
        this.stars.mask.clear();
        this.stars.mask.beginFill(0x8bc5ff, 0.4);
           this.stars.mask.drawRect(0,  0, val, GlobalScale(52)); // 35 is not magic numer is  stars_full.png width
        this.stars.mask.endFill();
        
        //FIXME: end ------REMOVE THIS CODE TO SEPARATE PROGRESS BAR CLASS
    }

    this.Free = function()
    {
        this.objContainer.removeChild(this.stars.mask);
        this.stars.mask= undefined;
        
        this.objContainer.removeChild(this.stars.empty);
        this.stars.empty= undefined;

        this.objContainer.removeChild(this.stars.full);
        this.stars.full = undefined;

        this.objContainer.removeChild(this.font);
        this.font = undefined;

        this.objContainer.removeChild(this.bg);
        this.bg = undefined;

        this.rootObject.removeChild(this.objContainer);
        this.objContainer = undefined;

        this.mouseOver.cur = undefined;
        this.mouseOver.prev = undefined;
    }

    this.Update = function()
    {
        var scale = 0.1;
        if(this.mouseOver.cur === true)
        {
            this.bg.scale.x = 1+scale;
            this.bg.scale.y = 1+scale;

            this.font.scale.x = 1+scale;
            this.font.scale.y = 1+scale;

            //this.stars.full.scale.x = 1+scale;
            //this.stars.full.scale.y = 1+scale;

            //this.stars.empty.scale.x = 1+scale;
            //this.stars.empty.scale.y = 1+scale;
        }
        else if(this.mouseOver.cur === false)
        {
            this.bg.scale.x = 1;
            this.bg.scale.y = 1;

            this.font.scale.x = 1;
            this.font.scale.y = 1;

            //this.stars.full.scale.x = 1;
            //this.stars.full.scale.y = 1;

            //this.stars.empty.scale.x = 1;
            //this.stars.empty.scale.y = 1;
        }

        // mouse first time over button
        if( this.mouseOver.prev !== this.mouseOver.cur &&
            this.mouseOver.cur === true)
        {
            this.mouseOver.prev = this.mouseOver.cur;
            // cursor on mouse
            SoundManager.Play("onbutton");
        }
    }

}
