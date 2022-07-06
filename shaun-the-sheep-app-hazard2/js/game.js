/*/// <reference path="utils/maths.ts" />
/// <reference path="levelgen.ts" />

class CharacterContactListener extends b2Dynamics.b2ContactListener
{
        
    constructor()
    {
        super();
            
    }

    public BeginContact(contact: b2Contacts.b2Contact): void
    {
        super.BeginContact(contact);

        if (contact.IsTouching() == false) return;

        var bodyA: b2Dynamics.b2Body = contact.GetFixtureA().GetBody();
        var bodyB: b2Dynamics.b2Body = contact.GetFixtureB().GetBody();
        var otherSheep: b2Dynamics.b2Body = this.sheepVsCharacterCheck(bodyA, bodyB)
        if (otherSheep)
        {
           // TweenMax.delayedCall(1, Game.inst.mainCharacter.hitSheep, [otherSheep], Game.inst.mainCharacter, true);
          //  Game.inst.mainCharacter.hitSheep(otherSheep);
        }

    }

    sheepVsCharacterCheck(a:b2Dynamics.b2Body,b:b2Dynamics.b2Body):b2Dynamics.b2Body
    {
        if (a.GetUserData().isSheep && b.GetUserData().isShaun)
        {
            return a;
        }
        else if (b.GetUserData().isSheep && a.GetUserData().isShaun)
        {
            return b;
        }
        return null;
    }
}*/ 
var CjsPixiBridge = (function () {
    //displacementFilter: PIXI.DisplacementFilter
    function CjsPixiBridge() {
        this.pixiDustLoaded = false;
        this.lastPos = new PIXI.Point(0, 0);
        this.lastScale = new PIXI.Point(0, 0);
    }
    CjsPixiBridge.prototype.loadAssets = function () {
        if (Main.inst.useLowResGfx) {
            this.textureLoader = new PIXI.AssetLoader([
                "assets_lo_res/sheep.png",
                "assets_lo_res/sheep.json",
                "assets_lo_res/levelItems.png",
                "assets_lo_res/levelItems.json",
                "assets_lo_res/day_layers/bg.jpg",
                "assets_lo_res/day_layers/midground1.png",
                "assets_lo_res/day_layers/midground2.png",
                "assets_lo_res/day_layers/midground3.png",
                "assets_lo_res/dusk_layers/bg.jpg",
                "assets_lo_res/dusk_layers/midground1.png",
                "assets_lo_res/dusk_layers/midground2.png",
                "assets_lo_res/dusk_layers/midground3.png",
                "assets_lo_res/displacement_map.png"], false);
        }
        else {
            this.textureLoader = new PIXI.AssetLoader([
                "assets/sheep.png",
                "assets/sheep.json",
                "assets/levelItems.png",
                "assets/levelItems.json",
                "assets/day_layers/bg.jpg",
                "assets/day_layers/midground1.png",
                "assets/day_layers/midground2.png",
                "assets/day_layers/midground3.png",
                "assets/dusk_layers/bg.jpg",
                "assets/dusk_layers/midground1.png",
                "assets/dusk_layers/midground2.png",
                "assets/dusk_layers/midground3.png",
                "assets/displacement_map.png"], false);
        }
        //this.textureLoader.addEventListener("onLoaded", this.handleLoadedSpriteSheet.bind(this));
        this.textureLoader.onComplete = this.handleLoadedSpriteSheet.bind(this);
        this.textureLoader.load();
    };
    CjsPixiBridge.prototype.initStage = function () {
        this.pStage = new PIXI.Stage(0x0, true);
        this.pRenderer = PIXI.autoDetectRenderer(900, 600, null, true, true);
        // add the renderer view element to the DOM
        document.body.appendChild(this.pRenderer.view);
        requestAnimFrame(this.animate.bind(this));
        this.updatePosition();
        $('#content').append($(this.pRenderer.view));
        // displacementFilter = new PIXI.DisplacementFilter(PIXI.Texture.fromImage("displacement_map.png"));
    };
    CjsPixiBridge.prototype.updatePosition = function () {
        //  var m = $(Main.inst.stage.canvas).css('margin');
        var w = $(Main.inst.stage.canvas).width();
        var h = $(Main.inst.stage.canvas).height();
        var t = $(Main.inst.stage.canvas).position().top;
        var l = $(Main.inst.stage.canvas).position().left;
        if (this.pRenderer) {
            var l = $(Main.inst.stage.canvas).position().left;
            $(this.pRenderer.view).css({ "position": "absolute", "z-index": -1, "top": 0, "left": 0, "right": 0, "margin": "0 auto" });
            // this.pRenderer.view.offsetLeft = Main.inst.element.offsetLeft;
            //this.pRenderer.view.offsetTop = Main.inst.element.offsetTop;
            $(this.pRenderer.view).width(w);
            $(this.pRenderer.view).height(h);
        }
    };
    CjsPixiBridge.prototype.animate = function () {
        requestAnimFrame(this.animate.bind(this));
        // render the stage   
        if (Game && Game.inst && Game.inst.paused == false) {
            this.pRenderer.render(this.pStage);
        }
    };
    CjsPixiBridge.prototype.handleLoadedSpriteSheet = function () {
        this.pixiDustLoaded = true;
    };
    CjsPixiBridge.prototype.buildParallaxLayers = function (level) {
        var levelPos;
        if (level > 0 && level <= 4) {
            levelPos = "day";
        }
        else if (level > 4 && level <= 9) {
            levelPos = "dusk";
        }
        else if (level > 9) {
            levelPos = "barn";
        }
        levelPos = "day";
        if (!this.backGround) {
            this.backGround = new PIXI.DisplayObjectContainer();
        }
        var bgt1 = PIXI.Sprite.fromImage("assets/" + levelPos + "_layers/bg.jpg");
        var bgt2 = PIXI.Sprite.fromImage("assets/" + levelPos + "_layers/bg.jpg");
        if (Main.inst.useLowResGfx) {
            bgt1.scale.x = 2;
            bgt1.scale.y = 2;
            bgt2.scale.x = 2;
            bgt2.scale.y = 2;
        }
        bgt2.position.x = bgt1.width - 1;
        this.backGround.addChild(bgt1);
        this.backGround.addChild(bgt2);
        this.midGround = new PIXI.DisplayObjectContainer();
        var mgt1 = PIXI.Sprite.fromImage("assets/" + levelPos + "_layers/midground1.png");
        var mgt2 = PIXI.Sprite.fromImage("assets/" + levelPos + "_layers/midground2.png");
        if (Main.inst.useLowResGfx) {
            mgt1.scale.x = 2;
            mgt1.scale.y = 2;
            mgt2.scale.x = 2;
            mgt2.scale.y = 2;
        }
        mgt2.position.x = mgt1.width;
        // var mgt3 = PIXI.Sprite.fromImage("assets/" + levelPos +"_layers/midground3.png");
        // mgt3.position.x = mgt2.width + mgt2.position.x;
        mgt1.position.y = (1400 - 1200);
        mgt2.position.y = (1400 - 1200);
        this.midGround.addChild(mgt1);
        this.midGround.addChild(mgt2);
        // this.midGround.addChild(mgt3);
        this.pStage.addChildAt(this.backGround, 0);
        this.pStage.addChildAt(this.midGround, 1);
        this.orderLevels();
    };
    CjsPixiBridge.prototype.convertTextureName = function (name) {
        name = name.replace(/_space_/g, " ");
        name = name.replace(/_dot_/g, ".");
        name = name.replace(/_hyphen_/g, "-");
        return name;
    };
    CjsPixiBridge.prototype.updateLevel = function (createjsLevel) {
        if (this.lastPos.x == createjsLevel.x &&
            this.lastPos.y == createjsLevel.y) {
            return;
        }
        this.level.position.x = createjsLevel.x;
        this.level.position.y = createjsLevel.y;
        this.level.scale.x = createjsLevel.scaleX * CjsPixiBridge.cjs2PIXI;
        this.level.scale.y = createjsLevel.scaleY * CjsPixiBridge.cjs2PIXI;
        this.lastPos = this.level.position;
        this.lastScale = this.level.scale;
        if (this.levelBG) {
            this.levelBG.position = this.level.position;
            this.levelBG.scale = this.level.scale;
        }
        /* var scaledBounds: createjs.Rectangle = this.levelBounds.clone();
 scaledBounds.x *= createjsLevel.scaleX;
 scaledBounds.y *= createjsLevel.scaleY;
 scaledBounds.width *= createjsLevel.scaleX;
 scaledBounds.height *= createjsLevel.scaleY;*/
        //this.level.position.x - (stageWidth / this.level.scale.x)
        //this.level.position.y - stageWidth / this.level.scale.y
        var percentageX = (Game.inst.vcam.x - this.levelBounds.x - ((Game.inst.vcam.scaleX * stageWidth) / 2)) / (this.levelBounds.width - ((Game.inst.vcam.scaleX * stageWidth)));
        var percentageY = (Game.inst.vcam.y - this.levelBounds.y - ((Game.inst.vcam.scaleY * stageHeight) / 2)) / (this.levelBounds.height - ((Game.inst.vcam.scaleY * stageHeight)));
        var bgBounds = new createjs.Rectangle(0, 0, (this.levelBounds.width - (Game.inst.vcam.scaleX * stageWidth)) * 0.6, (this.levelBounds.height - (Game.inst.vcam.scaleY * stageHeight)) * 0.6);
        var mgBounds = new createjs.Rectangle(0, 0, (this.levelBounds.width - (Game.inst.vcam.scaleX * stageWidth)) * 0.8, (this.levelBounds.height - (Game.inst.vcam.scaleY * stageHeight)) * 0.8);
        var bgMinScale = ((1050) / (bgBounds.width)); //* CjsPixiBridge.cjs2PIXI;
        var mgMinScale = ((2100) / (mgBounds.width)); //* CjsPixiBridge.cjs2PIXI;
        var scalebg = this.getParallaxZoom();
        var scalemg = this.getParallaxZoom();
        this.backGround.scale.x = scalebg;
        this.backGround.scale.y = scalebg;
        this.midGround.scale.x = scalemg;
        this.midGround.scale.y = scalemg;
        this.backGround.position.x = percentageX * (0 - ((this.backGround.scale.x * bgBounds.width)));
        this.backGround.position.y = percentageY * (0 - ((this.backGround.scale.y * bgBounds.height)));
        this.midGround.position.x = percentageX * (0 - ((this.midGround.scale.x * mgBounds.width)));
        this.midGround.position.y = percentageY * (0 - ((this.midGround.scale.y * mgBounds.height)));
    };
    CjsPixiBridge.prototype.getParallaxZoom = function (offset) {
        if (offset === void 0) { offset = 1; }
        var minScale = stageWidth / 1050;
        var maxScale = 1;
        var range = maxScale - minScale;
        var gameMaxScale = 1 / Game.inst.pinchZoom.minZoom;
        var gameMinScale = 1 / Game.inst.pinchZoom.maxZoom;
        var gameRange = gameMaxScale - gameMinScale;
        var pointInRange = ((Game.inst.levels.scaleX * offset) - gameMinScale) / gameRange;
        return minScale + (pointInRange * range);
    };
    CjsPixiBridge.prototype.dispose = function () {
        if (this.level) {
            while (this.level.children.length) {
                this.level.removeChild(this.level.children[this.level.children.length - 1]);
            }
            if (this.level.parent) {
                this.level.parent.removeChild(this.level);
            }
        }
        if (this.levelBG) {
            while (this.levelBG.children.length) {
                this.levelBG.removeChild(this.levelBG.children[this.levelBG.children.length - 1]);
            }
            if (this.levelBG.parent) {
                this.levelBG.parent.removeChild(this.levelBG);
            }
        }
        this.levelBG = null;
        this.level = null;
        if (this.midGround && this.pStage) {
            this.pStage.removeChild(this.midGround);
            this.midGround = null;
        }
        if (this.backGround && this.pStage) {
            this.pStage.removeChild(this.backGround);
            this.backGround = null;
        }
        while (this.pStage.children.length) {
            this.pStage.removeChild(this.pStage.children[this.pStage.children.length - 1]);
        }
    };
    CjsPixiBridge.prototype.parseLevel = function (levelClip, levelNumber) {
        var w = levelClip.parent["sizeRef"].scaleX * 100;
        var h = levelClip.parent["sizeRef"].scaleY * 100;
        var x = levelClip.parent["sizeRef"].x;
        var y = levelClip.parent["sizeRef"].y;
        var nh;
        var nw;
        var match = "w";
        if ((w / h) < (stageWidth / stageHeight)) {
            match = "h";
        }
        if (match == "h") {
            nh = h;
            nw = h * (stageWidth / stageHeight);
        }
        if (match == "w") {
            nh = w * (stageHeight / stageWidth);
            nw = w;
        }
        this.levelBounds = new createjs.Rectangle(x - nw / 2, y - nh / 2, nw, nh);
        this.buildParallaxLayers(levelNumber);
        this.level = new PIXI.DisplayObjectContainer();
        this.pStage.addChild(this.level);
        var numChildren = levelClip.getNumChildren();
        for (var i = 0; i < numChildren; i++) {
            var f = levelClip.getChildAt(i);
            var j;
            if (f instanceof createjs.Container) {
                j = f;
                if (j["isMovingItem"]) {
                    var pixiContainer = new PIXI.DisplayObjectContainer();
                    this.setPos(pixiContainer, j, true);
                    this.level.addChild(pixiContainer);
                    for (var k = 0; k < j.getNumChildren(); k++) {
                        if (j.getChildAt(k) instanceof createjs.Container) {
                            this.buildClip(j.getChildAt(k).getChildAt(1), pixiContainer);
                        }
                    }
                    Game.inst.movingItems.registerPixiItem(pixiContainer, j.name);
                }
                else {
                    var ch = j.getChildAt(1);
                    this.buildClip(ch, this.level);
                }
            }
        }
        levelClip.removeAllChildren();
        this.orderLevels();
    };
    CjsPixiBridge.prototype.parseLevelBG = function (levelClip, levelNumber) {
        this.levelBG = new PIXI.DisplayObjectContainer();
        this.pStage.addChild(this.levelBG);
        var numChildren = levelClip.getNumChildren();
        for (var i = 0; i < numChildren; i++) {
            var f = levelClip.getChildAt(i);
            var j;
            if (f instanceof createjs.Container) {
                j = f;
                var ch = j.getChildAt(1);
                this.buildClip(ch, this.levelBG);
            }
        }
        levelClip.removeAllChildren();
        this.orderLevels();
    };
    CjsPixiBridge.prototype.orderLevels = function () {
        if (this.backGround)
            this.pStage.addChild(this.backGround);
        if (this.midGround)
            this.pStage.addChild(this.midGround);
        if (this.levelBG)
            this.pStage.addChild(this.levelBG);
        if (this.level)
            this.pStage.addChild(this.level);
    };
    CjsPixiBridge.prototype.buildClip = function (clip, holderClip) {
        if (clip) {
            var genClip = clip.parent;
            var nName = this.convertTextureName(clip.name);
            if (genClip.name && genClip.name != "isDisp") {
                var newClip = PIXI.Sprite.fromFrame(nName);
                this.setPos(newClip, genClip);
                holderClip.addChild(newClip);
            }
        }
    };
    CjsPixiBridge.prototype.setPos = function (targ, ref, ignoreLoRes) {
        if (ignoreLoRes === void 0) { ignoreLoRes = false; }
        targ.pivot.x = (ref.regX);
        targ.pivot.y = (ref.regY);
        targ.position.x = ref.x; //- (ref.regX * ref.scaleX);
        targ.position.y = ref.y; //- (ref.regY * ref.scaleY);
        targ.scale.x = ref.scaleX;
        targ.scale.y = ref.scaleY;
        if (Main.inst.useLowResGfx && !ignoreLoRes) {
            targ.scale.x *= 2;
            targ.scale.y *= 2;
            targ.pivot.x /= 2;
            targ.pivot.y /= 2;
        }
        targ.alpha = ref.alpha;
        targ.rotation = Maths.degToRad(ref.rotation);
    };
    CjsPixiBridge.cjs2PIXI = 0.4;
    return CjsPixiBridge;
})();
var B2dBodySprite = (function () {
    function B2dBodySprite(body, sprite) {
        this.body = body;
        this.sprite = sprite;
        this.sprite["controller"] = this;
    }
    B2dBodySprite.prototype.update = function () {
    };
    B2dBodySprite.prototype.dispose = function (removeFromWold) {
        if (removeFromWold === void 0) { removeFromWold = true; }
        if (removeFromWold) {
            if (this.body) {
                this.body.SetUserData(null);
                if (this.body.GetWorld())
                    this.body.GetWorld().DestroyBody(this.body);
            }
            if (this.sprite) {
                this.sprite["body"] = null;
                this.sprite["controller"] = null;
                if (this.sprite.parent)
                    this.sprite.parent.removeChild(this.sprite);
            }
        }
        this.body = null;
        this.sprite = null;
    };
    return B2dBodySprite;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="levelItems/b2dBodySprite.ts" />
var EOL = (function (_super) {
    __extends(EOL, _super);
    function EOL(body, sprite) {
        _super.call(this, body, sprite);
        this.spriteHit = false;
        this.sprite.visible = false;
    }
    EOL.prototype.update = function () {
        var cl = this.body.GetContactList();
        while (cl) {
            if (cl.other == Game.inst.mainCharacter.body && cl.contact.IsTouching()) {
                if (this.spriteHit == false) {
                    this.spriteHit = true;
                    Game.inst.state = GameStates.CANT_JUMP;
                    TweenMax.delayedCall(1.2, Game.inst.levelComplete, null, Game.inst, false);
                }
            }
            cl = cl.next;
        }
    };
    return EOL;
})(B2dBodySprite);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        this.currentLevelNumber = 1;
        this.pixelsPerMeter = 42;
        this.gridSize = 25; //gridsize in px#
        this.followShaun = true;
        this.paused = false;
        if (!Game.inst)
            Game.inst = this;
        Main.inst.pixiBridge.initStage();
    }
    Game.prototype.px2m = function (px) {
        return px / this.pixelsPerMeter;
    };
    Game.prototype.m2px = function (m) {
        return m * this.pixelsPerMeter;
    };
    Game.prototype.usingExternalFonts = function () {
        return window.location.hash == "#ar";
    };
    Game.prototype.start = function (level, fromRestart) {
        if (fromRestart === void 0) { fromRestart = false; }
        console.log("start");
        if (fromRestart) {
            _gaq.push(["_trackEvent", "gameEvent", "level " + level.toString(), " started"]);
        }
        else {
            _gaq.push(["_trackEvent", "gameEvent", "level " + level.toString(), " retried"]);
        }
        Main.inst.stage.addChildAt(this, 0);
        if (this.levels)
            this.levelChangeDispose();
        this.currentLevelData = levelData[level];
        this.usedSheep = { levelName: "", builders: 0, stoppers: 0, switchers: 0, targetTime: 0 };
        this.currentLevelNumber = level;
        //manager
        this.sheepManager = new SheepManager();
        this.movingItems = new MovingLevelItemsManager();
        this.otherUpdateables = new UpdatebaleItemsManager();
        this.collectables = new CollectablesManager();
        if (lib[this.currentLevelData.levelName]) {
            this.levels = new lib[this.currentLevelData.levelName];
        }
        else {
            this.levels = new lib2[this.currentLevelData.levelName];
        }
        // this.levels.gotoAndStop("level" + level);
        this.levels.visible = false;
        this.addChild(this.levels);
        this.addNames(this.levels);
        this.pixiLevel = new PIXI.DisplayObjectContainer();
        this.hud = new HUD();
        this.hud.init();
        TweenMax.delayedCall(2, this.continueLevelSetup, null, this, true);
    };
    Game.prototype.continueLevelSetup = function () {
        console.log("continueLevelSetup");
        this.world = LevelGen.createLevelPhysics(this.levels, this.currentLevelNumber, debugDraw);
        this.vcam = new JS_vCam();
        this.levels.addChild(this.vcam);
        this.levels["sizeRef"].alpha = 0;
        this.vcam.init();
        this.vcam.scaleX = 2;
        this.vcam.scaleY = 2;
        this.vcam.x = this.mainCharacter.sprite.x;
        this.vcam.y = this.mainCharacter.sprite.y;
        this.targCamPos = new createjs.Point();
        this.targCamScale = new createjs.Point();
        this.targCamPos.x = this.vcam.x;
        this.targCamPos.y = this.vcam.y;
        this.targCamScale.x = this.vcam.scaleX;
        this.targCamScale.y = this.vcam.scaleY;
        this.pinchZoom = new PinchCameraControl();
        this.pinchZoom.setupPinchZoom(Main.inst.stage, this.startZoom, this.updateCamSize, this.startDrag, this.updateCamPosition, this);
        this.targCamScale = null;
        this.targCamPos = null;
        this.followShaun = true;
        this.updateCamera(true);
        //Game.inst.updateCamSizeAbs()
        Game.inst.updateCamPositionAbs(this.targCamPos);
        Game.inst.updateCamSizeAbs((1 / Game.inst.vcam.scaleX) * 1.5);
        //   TweenMax.delayedCall(1, this.updateCamera, [true], this, true);
        this.collectables.showHideStartAtStartOfLevel();
        this.state = GameStates.RUNNING;
        this.pinchZoom.isMoving = false;
        this.pinchZoom.isZooming = false;
        this.levels.visible = false;
        this.levelTimer = 0;
        SoundManager.inst.playMusic(SoundManager.inst.level_start_music, false);
        if (this.currentLevelNumber <= 10) {
            SoundManager.inst.playAtmos(SoundManager.inst.farm_day_atmos);
        }
        else if (this.currentLevelNumber <= 15) {
            SoundManager.inst.playAtmos(SoundManager.inst.farm_night_atmos);
        }
        else if (this.currentLevelNumber <= 20) {
            SoundManager.inst.playAtmos(SoundManager.inst.barn_interior_atmos);
        }
        this.state = GameStates.RUNNING;
    };
    Game.prototype.addNames = function (container) {
        for (var childName in container) {
            if (container.getChildIndex(container[childName]) >= 0) {
                if (container[childName] instanceof createjs.DisplayObject) {
                    container[childName].name = childName;
                    if (container[childName] instanceof createjs.Container) {
                        if (container[childName]) {
                            this.addNames(container[childName]);
                        }
                    }
                }
            }
        }
    };
    Game.prototype.startZoom = function (p1, p2) {
        this.followShaun = false;
        if (this.vcam) {
            this.vcamStartZoom = this.vcam.scaleX;
        }
        else {
            TweenMax.delayedCall(1, this.startZoom, [p1, p2], this, true);
        }
    };
    Game.prototype.startDrag = function () {
        this.followShaun = false;
        this.vcamStartDragPos = new createjs.Point(this.vcam.x, this.vcam.y);
    };
    Game.prototype.checkCamDrag = function (pos) {
        pos = this.levels.localToGlobal(pos.x, pos.y);
        if (pos.x > stageWidth - 100) {
            this.targCamPos.x += 8;
        }
        if (pos.x < 100) {
            this.targCamPos.x -= 8;
        }
        if (pos.y > stageHeight - 100) {
            this.targCamPos.y += 8;
        }
        if (pos.y < 100) {
            this.targCamPos.y -= 8;
        }
    };
    Game.prototype.updateCamSize = function (scale) {
        this.targCamScale.x = (1 / scale) * this.vcamStartZoom;
        this.targCamScale.y = (1 / scale) * this.vcamStartZoom;
        if (this.targCamScale.x > 1 / this.pinchZoom.minZoom) {
            this.targCamScale.x = 1 / this.pinchZoom.minZoom;
        }
        if (this.targCamScale.x < 1 / this.pinchZoom.maxZoom) {
            this.targCamScale.x = 1 / this.pinchZoom.maxZoom;
        }
        this.targCamScale.y = this.targCamScale.x;
    };
    Game.prototype.updateCamPosition = function (movement) {
        this.targCamPos.x = this.vcamStartDragPos.x - movement.x * this.vcam.scaleX;
        this.targCamPos.y = this.vcamStartDragPos.y - movement.y * this.vcam.scaleY;
    };
    Game.prototype.updateCamPositionAbs = function (position) {
        this.targCamPos.x = position.x;
        this.targCamPos.y = position.y;
    };
    Game.prototype.updateCamSizeAbs = function (scale) {
        this.targCamScale.x = (1 / scale);
        this.targCamScale.y = (1 / scale);
        if (this.targCamScale.x > 1 / this.pinchZoom.minZoom) {
            this.targCamScale.x = 1 / this.pinchZoom.minZoom;
        }
        if (this.targCamScale.x < 1 / this.pinchZoom.maxZoom) {
            this.targCamScale.x = 1 / this.pinchZoom.maxZoom;
        }
        /* if (this.targCamScale.x > 1 / this.pinchZoom.levelMinZoom)
         {
             this.targCamScale.x = 1 / this.pinchZoom.levelMinZoom;
         }*/
        this.targCamScale.y = this.targCamScale.x;
    };
    Game.prototype.updateCamera = function (immediately) {
        if (immediately === void 0) { immediately = false; }
        if (this.followShaun) {
            if (!this.targCamPos)
                this.targCamPos = new createjs.Point(this.vcam.x, this.vcam.y);
            if (!this.targCamScale)
                this.targCamScale = new createjs.Point(this.vcam.scaleX, this.vcam.scaleY);
            var gPos = this.mainCharacter.sprite.localToGlobal(0, 0);
            if (gPos.x > stageWidth * (9 / 10)) {
                this.targCamPos.x += 3;
            }
            if (gPos.x < stageWidth * (1 / 10)) {
                this.targCamPos.x -= 3;
            }
            if (gPos.y > stageHeight * (9 / 10)) {
                this.targCamPos.y += 3;
            }
            if (gPos.y < stageHeight * (1 / 10)) {
                this.targCamPos.y -= 3;
            }
        }
        var vcamWidth = this.targCamScale.x * stageWidth;
        var vcamHeight = this.targCamScale.y * stageHeight;
        var leftBound = this.levels["sizeRef"].x - ((this.levels["sizeRef"].scaleX * 100) / 2);
        var rightBound = this.levels["sizeRef"].x + ((this.levels["sizeRef"].scaleX * 100) / 2);
        var topBound = this.levels["sizeRef"].y - ((this.levels["sizeRef"].scaleY * 100) / 2);
        var botBound = this.levels["sizeRef"].y + ((this.levels["sizeRef"].scaleY * 100) / 2);
        var tempScale = this.targCamScale.x;
        if (vcamWidth > rightBound - leftBound) {
            tempScale = ((rightBound - leftBound) / stageWidth);
            vcamWidth = tempScale * stageWidth;
            vcamHeight = tempScale * stageHeight;
        }
        if (vcamHeight > botBound - topBound) {
            tempScale = ((botBound - topBound) / stageHeight);
            vcamWidth = tempScale * stageWidth;
            vcamHeight = tempScale * stageHeight;
        }
        this.targCamScale.y = this.targCamScale.x = tempScale;
        var mult = 0.2;
        if (immediately) {
            mult = 1;
        }
        this.vcam.scaleX += (this.targCamScale.x - this.vcam.scaleX) * mult;
        this.vcam.scaleY += (this.targCamScale.y - this.vcam.scaleY) * mult;
        if ((this.targCamPos.x - (vcamWidth / 2)) < leftBound) {
            this.targCamPos.x = leftBound + (vcamWidth / 2);
        }
        if ((this.targCamPos.x + (vcamWidth / 2)) > rightBound) {
            this.targCamPos.x = rightBound - (vcamWidth / 2);
        }
        if ((this.targCamPos.y - (vcamHeight / 2)) < topBound) {
            this.targCamPos.y = topBound + (vcamHeight / 2);
        }
        if ((this.targCamPos.y + (vcamHeight / 2)) > botBound) {
            this.targCamPos.y = botBound - (vcamHeight / 2);
        }
        this.vcam.x += (this.targCamPos.x - this.vcam.x) * mult;
        this.vcam.y += (this.targCamPos.y - this.vcam.y) * mult;
        this.vcam.camControl();
        if (Main.inst.pixiBridge.level) {
            Main.inst.pixiBridge.updateLevel(this.levels);
        }
    };
    Game.prototype.paint = function () {
        for (var j = 0; j < this.levels.getNumChildren(); j++) {
            var c = this.levels.getChildAt(j);
            var body = c["body"];
            if (body) {
                var bodyPos = body.GetPosition().Copy();
                c.x = this.m2px(bodyPos.x);
                c.y = this.m2px(bodyPos.y);
                var angle = body.GetAngle();
                c.rotation = Maths.radToDeg(angle);
            }
        }
    };
    Game.prototype.gotoLevelCompleteScreen = function () {
        _gaq.push(["_trackEvent", "gameEvent", "level " + this.currentLevelNumber.toString(), "completed"]);
        TweenMax.killDelayedCallsTo(this.gotoLevelCompleteScreen);
        ScreenManager.inst.showScreen(ScreenManager.inst.levelComplete);
        SoundManager.inst.playMusic(SoundManager.inst.level_complete_music, false);
    };
    Game.prototype.gotoLevelFailedScreen = function () {
        _gaq.push(["_trackEvent", "gameEvent", "level " + this.currentLevelNumber.toString(), "failed"]);
        ScreenManager.inst.showOverlay(ScreenManager.inst.levelFailScreen);
        SoundManager.inst.playMusic(SoundManager.inst.level_fail_music, false);
    };
    Game.prototype.levelComplete = function () {
        SoundManager.inst.stopAtmos();
        var score = ((this.currentLevelData.targetTime * 3) - this.levelTimer) * (this.collectables.stars + 1);
        if (score < 0) {
            score = 0;
        }
        score += 100 * this.currentLevelNumber;
        //if (score < 100 * this.currentLevelNumber) score =  100 * this.currentLevelNumber;
        this.currentLevelScore = {
            level: Game.inst.currentLevelNumber,
            timeTaken: this.levelTimer,
            sheepUsed: 0,
            totalScore: score,
            starsCollected: this.collectables.stars
        };
        Main.inst.savedData.saveLevelScore(this.currentLevelScore);
        this.state = GameStates.GAME_ENDING;
        TweenMax.delayedCall(1, this.gotoLevelCompleteScreen, null, this);
    };
    Game.prototype.levelFailed = function () {
        if (this.state != GameStates.GAME_ENDING) {
            createjs.Sound.play(SoundManager.inst.shaun_eh_1);
            createjs.Sound.play(SoundManager.inst.pondsplash4);
            this.state = GameStates.GAME_ENDING;
            TweenMax.delayedCall(0.2, this.gotoLevelFailedScreen, null, this);
        }
    };
    //anything that needs a pre step should run in here
    Game.prototype.gamePreStep = function () {
        if (this.state == GameStates.RUNNING) {
            this.sheepManager.preStep();
            this.movingItems.preStep();
            this.otherUpdateables.preStep();
            this.mainCharacter.preStep();
        }
    };
    //main game logic tick
    Game.prototype.gameStep = function () {
        if (this.state == GameStates.RUNNING) {
            this.sheepManager.update();
            this.movingItems.update();
            this.otherUpdateables.update();
            this.mainCharacter.update();
        }
    };
    //controlls pre step, step, world updates camera and paint
    Game.prototype.update = function () {
        if (this.paused == false) {
            if (this.state != GameStates.GAME_ENDING) {
                this.levelTimer++;
                if (this.pinchZoom && this.pinchZoom.isMoving == false && this.pinchZoom.isZooming == false) {
                    this.gamePreStep();
                    this.gameStep();
                    this.world.Step(1 / 40, 1, 1);
                    this.world.ClearForces();
                    // this.world.DrawDebugData();
                    this.paint();
                    if (Keys.isDown(Keys.W) && Main.inst.cheats) {
                        this.levelComplete();
                    }
                }
                else {
                    // this.levels.cache(0, 0, this.levels.getBounds().width, this.levels.getBounds().height)
                    // this.isCached = true;
                    // }
                    if (this.mainCharacter) {
                        this.mainCharacter.pauseAnimation();
                    }
                }
                if (this.state == GameStates.RUNNING) {
                    this.hud.update();
                    this.updateCamera();
                }
            }
        }
    };
    Game.prototype.levelChangeDispose = function () {
        this.state = GameStates.RESETTING;
        if (this.sheepManager)
            this.sheepManager.removeAllSheep();
        this.sheepManager = null;
        this.getStage().removeAllEventListeners();
        if (this.pinchZoom) {
            this.pinchZoom.dispose();
            this.pinchZoom = null;
        }
        if (this.hud) {
            this.hud.dispose();
            this.hud = null;
        }
        if (this.vcam) {
            this.vcam = null;
        }
        this.mainCharacter.dispose();
        if (this.movingItems) {
            this.movingItems.dispose();
        }
        this.movingItems = null;
        for (var j = 0; j < this.levels.getNumChildren(); j++) {
            var c = this.levels.getChildAt(j);
            var body = c["body"];
            if (body) {
                body.SetUserData(null);
                this.world.DestroyBody(body);
                c["body"] = null;
                c["controller"] = null;
            }
        }
        Main.inst.pixiBridge.dispose();
        this.world = null;
        this.levels.removeAllChildren();
        this.removeAllChildren();
    };
    Game.prototype.fullDispose = function () {
        this.levelChangeDispose();
        this.state = GameStates.GAME_ENDING;
    };
    return Game;
})(createjs.Container);
var GameStates;
(function (GameStates) {
    GameStates[GameStates["GAME_ENDING"] = 0] = "GAME_ENDING";
    GameStates[GameStates["CANT_JUMP"] = 1] = "CANT_JUMP";
    GameStates[GameStates["RUNNING"] = 2] = "RUNNING";
    GameStates[GameStates["RESETTING"] = 3] = "RESETTING";
})(GameStates || (GameStates = {}));
var HUD = (function () {
    function HUD() {
        this.doubleClickTest = false;
        this.buttonsEnabled = false;
    }
    HUD.prototype.init = function () {
        this.buttonsEnabled = false;
        this.sprite = new uiLib.HUD;
        Game.inst.addChild(this.sprite);
        this.sprite.alpha = 0;
        TweenMax.to(this.sprite, 1, { alpha: 1, onComplete: this.enableButtons, onCompleteScope: this });
        //Main.inst.stage.on("stagemouseup", this.checkRemoveSheep, this, false);
        this.sprite.sheepbtn.on("mousedown", this.hangerClick, this, false);
        // this.sprite.switcherbtn.on("mousedown", this.switcherClick, this, false);
        //this.sprite.stopbtn.on("mousedown", this.blockerClick, this, false);
        // this.sprite.farmerbtn.on("mousedown", this.farmerClick, this, false);
        this.sprite.pauseBtn.on("mousedown", this.togglePause, this, false);
        this.sprite.resetBtn_mc.on("mousedown", this.resetGame, this, false);
        this.sprite.muteBtn.on("mousedown", this.toggleMute, this, false);
        // this.sprite.nxtLvl.on("mousedown", this.nextLevel, this, false);
        //this.sprite.prvLvl.on("mousedown", this.prevLevel, this, false);
        this.sprite.sheepbtn["tf"] = FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.sprite.sheepbtn.noLeft, 100, 45, 30, "center");
        this.sprite.sheepbtn["tf"].x -= 7;
        // this.sprite.switcherbtn["tf"] = FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.sprite.switcherbtn.noLeft, 80, 45, 30, "center");
        // this.sprite.stopbtn["tf"] = FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.sprite.stopbtn.noLeft, 80, 45, 30, "center");
        Game.inst.sheepManager.updateVals();
        this.updateMuteButtonState();
    };
    HUD.prototype.dispose = function () {
        console.log("dispose me");
        this.sprite.sheepbtn.removeAllEventListeners("mousedown");
        this.sprite.pauseBtn.removeAllEventListeners("mousedown");
        this.sprite.resetBtn_mc.removeAllEventListeners("mousedown");
        this.sprite.muteBtn.removeAllEventListeners("mousedown");
        if (Game.inst) {
            Game.inst.removeChild(this.sprite);
        }
        this.sprite = null;
    };
    HUD.prototype.enableButtons = function () {
        this.buttonsEnabled = true;
    };
    HUD.prototype.toggleMute = function () {
        if (this.buttonsEnabled) {
            if (SoundManager.inst.muted) {
                SoundManager.inst.muted = false;
            }
            else {
                SoundManager.inst.muted = true;
            }
            this.updateMuteButtonState();
        }
    };
    HUD.prototype.resetGame = function (e) {
        if (this.buttonsEnabled) {
            e.stopPropagation();
            TweenMax.delayedCall(2, Game.inst.start, [Game.inst.currentLevelNumber, true], Game.inst, true);
            this.buttonsEnabled = false;
        }
    };
    HUD.prototype.updateMuteButtonState = function () {
        if (SoundManager.inst.muted) {
            this.sprite.muteBtn.gotoAndStop(1);
        }
        else {
            this.sprite.muteBtn.gotoAndStop(0);
        }
    };
    HUD.prototype.togglePause = function () {
        if (this.buttonsEnabled) {
            ScreenManager.inst.showOverlay(ScreenManager.inst.pauseScreen);
        }
    };
    HUD.prototype.update = function () {
        var s = Game.inst.mainCharacter;
        var gPos = Game.inst.levels.localToGlobal(Game.inst.m2px(s.body.GetPosition().x), Game.inst.m2px(s.body.GetPosition().y));
        var showArrow = false;
        var centerPoint = new createjs.Point(stageWidth / 2, stageHeight / 2);
        if (gPos.x > stageWidth || gPos.x < 0 || gPos.y > stageHeight || gPos.y < 0) {
            showArrow = true;
        }
        if (showArrow) {
            this.sprite.arrow.rotation = Maths.radToDeg(Math.atan2(gPos.y - centerPoint.y, gPos.x - centerPoint.x));
            var intersect;
            var top = intersect = Maths.lineIntersectLine(centerPoint, gPos, new createjs.Point(0, 0), new createjs.Point(stageWidth, 0), true);
            if (!intersect)
                var bottom = intersect = Maths.lineIntersectLine(centerPoint, gPos, new createjs.Point(0, stageHeight), new createjs.Point(stageWidth, stageHeight), true);
            if (!intersect)
                var left = intersect = Maths.lineIntersectLine(centerPoint, gPos, new createjs.Point(0, 0), new createjs.Point(0, stageHeight), true);
            if (!intersect)
                var right = intersect = Maths.lineIntersectLine(centerPoint, gPos, new createjs.Point(stageWidth, 0), new createjs.Point(stageWidth, stageHeight), true);
            if (intersect) {
                this.sprite.arrow.x = intersect.x;
                this.sprite.arrow.y = intersect.y;
            }
            this.sprite.arrow.visible = true;
        }
        else {
            this.sprite.arrow.visible = false;
        }
        this.sprite.star1.gotoAndStop(0);
        this.sprite.star2.gotoAndStop(0);
        this.sprite.star3.gotoAndStop(0);
        var i = 1;
        while (i <= Game.inst.collectables.stars) {
            this.sprite["star" + i].gotoAndStop(1);
            i++;
        }
    };
    HUD.prototype.updateValues = function () {
        // this.updateSheepButton(this.sprite.switcherbtn, (Game.inst.currentLevelData.switchers - Game.inst.usedSheep.switchers));
        this.updateSheepButton(this.sprite.sheepbtn, (Game.inst.currentLevelData.builders - Game.inst.usedSheep.builders), Game.inst.currentLevelData.builders);
        // this.updateSheepButton(this.sprite.stopbtn, (Game.inst.currentLevelData.stoppers - Game.inst.usedSheep.stoppers));
        this.sprite.levelNum.visible = false;
    };
    HUD.prototype.updateSheepButton = function (btn, val, outOf) {
        btn["tf"].setText(val.toString() + "/" + outOf);
        if (val == 0) {
            btn.alpha = 0.5;
        }
        else {
            btn.alpha = 1;
        }
    };
    HUD.prototype.nextLevel = function (evt) {
        Game.inst.currentLevelNumber++;
        Game.inst.start(Game.inst.currentLevelNumber);
        // this.sprite.levelNum.text = Game.inst.currentLevelNumber.toString();
    };
    HUD.prototype.prevLevel = function (evt) {
        Game.inst.currentLevelNumber--;
        Game.inst.start(Game.inst.currentLevelNumber);
        //  this.sprite.levelNum.text = Game.inst.currentLevelNumber.toString();
    };
    HUD.prototype.removeAll = function (evt) {
        Game.inst.sheepManager.removeAllSheep();
    };
    HUD.prototype.blockerClick = function (evt) {
        if (this.doubleClickTest) {
            Game.inst.sheepManager.removeAllSheep(SheepTypes.BLOCKER);
        }
        else {
            Game.inst.sheepManager.addSheepFromClick(SheepTypes.BLOCKER);
            this.doubleClickTest = true;
            TweenMax.delayedCall(0.4, this.endDoubleClickTest, null, this);
        }
    };
    HUD.prototype.hangerClick = function (evt) {
        if (this.buttonsEnabled) {
            if (this.doubleClickTest) {
                Game.inst.sheepManager.removeAllSheep(SheepTypes.HANGER);
            }
            else {
                Game.inst.sheepManager.addSheepFromClick(SheepTypes.HANGER);
                this.doubleClickTest = true;
                TweenMax.delayedCall(0.4, this.endDoubleClickTest, null, this);
            }
        }
    };
    HUD.prototype.switcherClick = function (evt) {
        if (this.doubleClickTest) {
            Game.inst.sheepManager.removeAllSheep(SheepTypes.SWITCHER);
        }
        else {
            Game.inst.sheepManager.addSheepFromClick(SheepTypes.SWITCHER);
            this.doubleClickTest = true;
            TweenMax.delayedCall(0.4, this.endDoubleClickTest, null, this);
        }
    };
    HUD.prototype.farmerClick = function (evt) {
        Game.inst.followShaun = true;
    };
    HUD.prototype.endDoubleClickTest = function () {
        this.doubleClickTest = false;
    };
    return HUD;
})();
var Maths = (function () {
    function Maths() {
    }
    Maths.roundToNearest = function (num, nearest) {
        return Math.round(num / nearest) * nearest;
    };
    Maths.getPercentage = function (minimumValue, maximumValue, what) {
        return (((what - minimumValue) / (maximumValue - minimumValue)) * 100);
    };
    // Picks a random number between min and max
    Maths.randomNum = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Maths.roundTo2Dec = function (num) {
        return Math.round(num * 100) / 100;
    };
    // Picks a random integer between min and max
    Maths.randomInt = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    // Picks a random element from the given array
    Maths.pickRandom = function (arr) {
        return arr[Maths.randomInt(0, arr.length - 1)];
    };
    // Picks a random boolean value
    Maths.randomBool = function () {
        return (Math.random() > 0.5) ? true : false;
    };
    // Returns 1 or -1 at random
    Maths.randomSign = function () {
        return (Math.random() > 0.5) ? 1 : -1;
    };
    // Returns a random element from the array
    Maths.randomElement = function (a) {
        return a[Maths.randomInt(0, a.length - 1)];
    };
    // Returns -1, 0 or 1 depending on the sign of the input
    Maths.sign = function (val, ifZero) {
        if (ifZero === void 0) { ifZero = 0; }
        if (val < 0)
            return -1;
        if (val > 0)
            return 1;
        return ifZero;
    };
    // Finds the length of a given vector
    Maths.vectorLength = function (dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    };
    // Find the distance between two points
    Maths.distance = function (x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Maths.vectorLength(dx, dy);
    };
    // Find the square of the length of a vector
    // Useful for distance comparasons - cheaper than doing the square-root
    Maths.vectorLengthSquared = function (dx, dy) {
        return dx * dx + dy * dy;
    };
    // Find the square of the distance between points
    // Useful for distance comparasons - cheaper than doing the square-root
    Maths.distanceSquared = function (x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Maths.vectorLengthSquared(dx, dy);
    };
    // Find the angle between two vectors
    Maths.angleBetween = function (x1, y1, x2, y2) {
        var topLine = (x1 * x2) + (y1 * y2);
        var bottomLine = Maths.vectorLength(x1, y1) * Maths.vectorLength(x2, y2);
        if (bottomLine == 0)
            return 0;
        var operand = topLine / bottomLine;
        if (operand > 1)
            operand = 1;
        if (operand < -1)
            operand = -1;
        return Math.acos(operand);
    };
    // Finds the dot product value of two vectors
    Maths.dotProduct = function (ax, ay, bx, by) {
        return ax * bx + ay * by;
    };
    // Finds a unit length vector, right-hand-normal to the given vector
    Maths.unitNormal = function (x, y) {
        var nx = -y;
        var ny = x;
        var len = Maths.vectorLength(nx, ny);
        nx /= len;
        ny /= len;
        return new createjs.Point(nx, ny);
    };
    // Returns the scalar projection of vector 1 onto vector 2
    Maths.scalarProjection = function (x1, y1, x2, y2) {
        return Maths.dotProduct(x1, y1, x2, y2) / Maths.vectorLength(x2, y2);
    };
    // Returns the projection of vector 1 onto vector 2
    Maths.vectorProjection = function (x1, y1, x2, y2) {
        var dot = Maths.dotProduct(x1, y1, x2, y2);
        var len = Maths.vectorLength(x2, y2);
        if (!len)
            return new createjs.Point(0, 0);
        var px = dot * x2 / (len * len);
        var py = dot * y2 / (len * len);
        return new createjs.Point(px, py);
    };
    // Returns distance of point C from line A-B
    // Returns negative for left-of-line, positive for right-of-line
    Maths.distanceFromLine = function (ax, ay, bx, by, cx, cy) {
        var A = cx - ax;
        var B = cy - ay;
        var C = bx - ax;
        var D = by - ay;
        return (A * D - C * B) / Math.sqrt(C * C + D * D);
    };
    // Neatly format a number
    Maths.formatNum = function (num, leadingDigits, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = -1; }
        var isNegative = num < 0 ? true : false;
        num = Math.abs(num);
        var result = "" + Math.floor(num);
        while (result.length < leadingDigits)
            result = "0" + result;
        if (decimalDigits >= 0) {
            var frac = '' + num;
            var pos = frac.indexOf('.');
            if (pos == -1)
                pos = frac.length - 1;
            frac = frac.substr(pos + 1, decimalDigits);
            while (frac.length < decimalDigits)
                frac += '0';
            result += '.' + frac;
        }
        if (isNegative)
            result = '-' + result;
        return result;
    };
    // Format a number as a hex string
    Maths.formatHex = function (number, minimumLength, showHexDenotation) {
        if (minimumLength === void 0) { minimumLength = 1; }
        if (showHexDenotation === void 0) { showHexDenotation = true; }
        // The string that will be output at the end of the function. 
        var string = number.toString(16).toUpperCase();
        // While the minimumLength argument is higher than the length of the string, add a leading zero. 
        while (minimumLength > string.length) {
            string = "0" + string;
        }
        // Return the result with a "0x" in front of the result. 
        if (showHexDenotation)
            string = "0x" + string;
        return string;
    };
    Maths.degToRad = function (degs) {
        return degs * 0.017453292519943295;
    };
    Maths.radToDeg = function (rads) {
        return rads * 57.29577951308232;
    };
    Maths.getShortRotationRad = function (start, end) {
        var cap = Math.PI * 2;
        var dif = (end - start) % cap;
        if (dif != dif % (cap / 2)) {
            dif = (dif < 0) ? dif + cap : dif - cap;
        }
        return start + dif;
    };
    Maths.getShortRotationDeg = function (start, end) {
        var cap = 360;
        var dif = (end - start) % cap;
        if (dif != dif % (cap / 2)) {
            dif = (dif < 0) ? dif + cap : dif - cap;
        }
        return start + dif;
    };
    Maths.isPointInRect = function (point, rect) {
        var left = rect.x;
        var right = rect.x + rect.width;
        var top = rect.y;
        var bottom = rect.y + rect.height;
        if (point.x > left && point.x < right && point.y > top && point.y < bottom) {
            return true;
        }
        false;
    };
    Maths.lineIntersectLine = function (A, B, E, F, as_seg) {
        if (as_seg === void 0) { as_seg = true; }
        var ip;
        var a1;
        var a2;
        var b1;
        var b2;
        var c1;
        var c2;
        a1 = B.y - A.y;
        b1 = A.x - B.x;
        c1 = B.x * A.y - A.x * B.y;
        a2 = F.y - E.y;
        b2 = E.x - F.x;
        c2 = F.x * E.y - E.x * F.y;
        var denom = a1 * b2 - a2 * b1;
        if (denom == 0) {
            return null;
        }
        ip = new createjs.Point();
        ip.x = (b1 * c2 - b2 * c1) / denom;
        ip.y = (a2 * c1 - a1 * c2) / denom;
        //---------------------------------------------------
        //Do checks to see if intersection to endpoints
        //distance is longer than actual Segments.
        //Return null if it is with any.
        //---------------------------------------------------
        if (as_seg) {
            if (Math.pow(ip.x - B.x, 2) + Math.pow(ip.y - B.y, 2) > Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)) {
                return null;
            }
            if (Math.pow(ip.x - A.x, 2) + Math.pow(ip.y - A.y, 2) > Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)) {
                return null;
            }
            if (Math.pow(ip.x - F.x, 2) + Math.pow(ip.y - F.y, 2) > Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2)) {
                return null;
            }
            if (Math.pow(ip.x - E.x, 2) + Math.pow(ip.y - E.y, 2) > Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2)) {
                return null;
            }
        }
        return ip;
    };
    Maths.pointToB2vect2 = function (p) {
        return new b2Math.b2Vec2(p.x, p.y);
    };
    Maths.b2vect2ToPoint = function (p) {
        return new createjs.Point(p.x, p.y);
    };
    return Maths;
})();
/// <reference path="utils/maths.ts" />
var b2Common = Box2D.Common;
var b2Math = Box2D.Common.Math;
var b2Collision = Box2D.Collision;
var b2Shapes = Box2D.Collision.Shapes;
var b2Dynamics = Box2D.Dynamics;
var b2Contacts = Box2D.Dynamics.Contacts;
var b2Controllers = Box2D.Dynamics.Controllers;
var b2Joints = Box2D.Dynamics.Joints;
var LevelGen = (function () {
    function LevelGen() {
    }
    LevelGen.px2m = function (px) {
        return Game.inst.px2m(px);
    };
    LevelGen.m2px = function (m) {
        return Game.inst.m2px(m);
    };
    // Create physics simulation from level
    // Returns reference to the new world
    LevelGen.createLevelPhysics = function (clip, levelID, defaultPaint) {
        console.log("createLevelPhysics");
        var shapeDefs;
        var world;
        var body;
        var bodyDef;
        var fixture;
        var fd;
        var shape;
        var level = clip; //.level;
        var jointDef2;
        var joint2;
        var jointDef3;
        var joint3;
        // Define gravity and create the world
        //var gravity:b2Vec2 = new b2Vec2(0, 9.81);
        var gravity = new b2Math.b2Vec2(0, 9.81);
        world = new b2Dynamics.b2World(gravity, true);
        // Set up default physics paint
        if (defaultPaint) {
            var debugDraw = new b2Dynamics.b2DebugDraw();
            //            debugDraw.SetSprite((<HTMLCanvasElement>document.getElementById('debugdraw')).getContext("2d"));
            debugDraw.SetDrawScale(this.m2px(1));
            debugDraw.SetAlpha(0.75);
            debugDraw.SetFillAlpha(0.5);
            debugDraw.SetLineThickness(1);
            debugDraw.SetFlags(0);
            //debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_aabbBit);
            // debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_centerOfMassBit);
            debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_controllerBit);
            debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_jointBit);
            debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_pairBit);
            debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.e_shapeBit);
            //debugDraw.AppendFlags(b2Dynamics.b2DebugDraw.);
            world.SetDebugDraw(debugDraw);
        }
        var toRemove = [];
        // Look through the world for objects to create
        var children = level.children.concat();
        for (var j = 0; j < children.length; j++) {
            var dispObj = children[j];
            if (!(dispObj instanceof createjs.Container)) {
                dispObj;
                continue;
            }
            var item = dispObj;
            // Static walls
            if (item["isWall"] || item["isFloor"] || item["isWallSlippery"] || item["isSkyHook"]) {
                this.makeAWall(item, world);
            }
            if (item["isMovingPlatform"]) {
                Game.inst.movingItems.buildMovingPlatform(this.makeDynamicSquareBody(item, world), item, true);
            }
            if (item["isSwitch"]) {
                var newSheepDisp = new lib.sheepSwitcherBlock();
                newSheepDisp.scaleX = 0.25;
                newSheepDisp.scaleY = 0.25;
                var nPos = new createjs.Point(item.x, item.y);
                Game.inst.levels.addChild(newSheepDisp);
                newSheepDisp.x = item.x;
                newSheepDisp.y = item.y;
                var newSheep = LevelGen.makeSheepItem(newSheepDisp, world);
                new MovingItemSwitch(this.makeSensor(item, world), item);
            }
            if (item["isShaun"]) {
                this.makeShaun(item, world);
            }
            if (item["isSheep"]) {
                this.makeSheepItem(item, world);
            }
            if (item["isComplexShape"]) {
                this.makeComplexShape(item, world);
            }
            if (item["isWaterWheel"]) {
                Game.inst.movingItems.buildWaterwheel(this.makeComplexShape(item, world), item);
            }
            if (item["isExit"]) {
                Game.inst.otherUpdateables.registerItem(new EOL(this.makeSensor(item, world), item));
            }
            if (item["isDeath"]) {
                Game.inst.otherUpdateables.registerItem(new DeadZone(this.makeSensor(item, world), item));
            }
            if (item["isStar"]) {
                Game.inst.collectables.registerItem(new Star(this.makeSensor(item, world), item));
            }
            if (dispObj["isDisp"]) {
                Main.inst.pixiBridge.parseLevel(item, levelID);
            }
            if (dispObj["isDispBG"]) {
                Main.inst.pixiBridge.parseLevelBG(item, levelID);
            }
        }
        for (var j = 0; j < level.getNumChildren(); j++) {
            if (level.getChildAt(j).visible == false) {
                level.removeChildAt(j);
                j--;
            }
        }
        return world;
    };
    LevelGen.destroyLevelPhysics = function (level) {
        if (!level)
            return;
        for (var j = 0; j < level.getNumChildren(); j++) {
            var dispObj = level.getChildAt(j);
            if (!(dispObj instanceof createjs.MovieClip))
                continue;
            var item = dispObj;
            if (item["body"]) {
                item["body"].SetUserData(null);
                if (item["body"].GetWorld()) {
                    item["body"].GetWorld().DestroyBody(item["body"]);
                }
                item["body"] = null;
            }
        }
    };
    LevelGen.makeSensor = function (mc, world) {
        var item = mc;
        var body;
        var bodyDef;
        var fixture;
        var fd;
        var shape;
        var fixDef;
        bodyDef = new b2Dynamics.b2BodyDef();
        bodyDef.position.Set(this.px2m(item.x), this.px2m(item.y));
        bodyDef.userData = item;
        bodyDef.type = b2Dynamics.b2Body.b2_staticBody;
        body = world.CreateBody(bodyDef);
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(this.px2m(100 * item.scaleX) / 2, this.px2m(100 * item.scaleY) / 2, new b2Math.b2Vec2(0, 0), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.categoryBits = LevelGen.allBits;
        fd.filter.maskBits = (LevelGen.allBits);
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        fixture = body.CreateFixture(fd);
        body.SetAngle(Maths.degToRad(item.rotation));
        item["staticBody"] = body;
        //item.fixture = fixture;
        return body;
    };
    LevelGen.makeAWall = function (mc, world) {
        var item = mc;
        var body;
        var bodyDef;
        var fixture;
        var fd;
        var shape;
        var fixDef;
        bodyDef = new b2Dynamics.b2BodyDef();
        bodyDef.position.Set(this.px2m(item.x), this.px2m(item.y));
        bodyDef.userData = item;
        bodyDef.type = b2Dynamics.b2Body.b2_staticBody;
        body = world.CreateBody(bodyDef);
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(this.px2m(100 * item.scaleX) / 2, this.px2m(100 * item.scaleY) / 2, new b2Math.b2Vec2(0, 0), Maths.degToRad(item.rotation));
        fd = new b2Dynamics.b2FixtureDef();
        fd.density = 0.7;
        fd.restitution = 0.1;
        fd.friction = 0.6;
        fd.shape = shape;
        if (item["isWallSlippery"]) {
            fd.filter.categoryBits = this.slipperyWallBits;
        }
        else if (item["isSkyHook"]) {
            fd.filter.categoryBits = this.skyHookBits;
        }
        else {
            fd.filter.categoryBits = this.allBits;
        }
        fixture = body.CreateFixture(fd);
        item["staticBody"] = body;
        //item.fixture = fixture;
        if (!editorMode) {
            //  item.parent.removeChild(item)
            item.visible = false;
        }
        return body;
    };
    LevelGen.makeDynamicSquareBody = function (mc, world, centerOverride) {
        if (centerOverride === void 0) { centerOverride = null; }
        var item = mc;
        // item.gotoAndStop(1)
        var body;
        var bodyDef;
        var fixture;
        var shape;
        var fixDef;
        bodyDef = new b2Dynamics.b2BodyDef();
        bodyDef.type = b2Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.Set(this.px2m(item.x), this.px2m(item.y));
        bodyDef.userData = item;
        bodyDef.linearDamping = 0.1;
        bodyDef.angularDamping = 0.1;
        bodyDef.fixedRotation = true;
        bodyDef.allowSleep = false;
        bodyDef.bullet = true;
        body = world.CreateBody(bodyDef);
        fixDef = new b2Dynamics.b2FixtureDef();
        fixDef.restitution = 0;
        fixDef.density = 1;
        fixDef.friction = 1;
        //fixDef.filter.maskBits = 0x0001;
        if (centerOverride == null)
            centerOverride = new b2Math.b2Vec2(0, 0);
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(this.px2m(100 * item.scaleX) / 2, this.px2m(100 * item.scaleY) / 2, centerOverride, 0);
        body.SetAngle(Maths.degToRad(item.rotation));
        fixDef.shape = shape;
        fixture = body.CreateFixture(fixDef);
        item["body"] = body;
        /* var pixiItem: PIXI.Graphics = new PIXI.Graphics();
         pixiItem.drawRect(0, 0, 100 * item.scaleX, 100 * item.scaleY);
         pixiItem.position.x = item.x;
         pixiItem.position.y = item.y;
         pixiItem.rotation = item.rotation;
         pixiItem.pivot.x = 100 * item.scaleX / 2;
         pixiItem.pivot.x = 100 * item.scaleY / 2;
 
         pixiItem.*/
        return body;
    };
    LevelGen.makeShaun = function (mc, world) {
        // var body = LevelGen.makeDynamicSquareBody(mc, world);
        var item = mc;
        // item.gotoAndStop(1)
        var body;
        var bodyDef;
        var fixture;
        var shape;
        var circshape;
        var fixDef;
        var fd;
        bodyDef = new b2Dynamics.b2BodyDef();
        bodyDef.type = b2Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.Set(this.px2m(item.x), this.px2m(item.y));
        bodyDef.userData = item;
        bodyDef.linearDamping = 1;
        bodyDef.angularDamping = 0.1;
        bodyDef.fixedRotation = true;
        bodyDef.allowSleep = false;
        bodyDef.bullet = true;
        body = world.CreateBody(bodyDef);
        fixDef = new b2Dynamics.b2FixtureDef();
        fixDef.restitution = 0.5;
        fixDef.density = 1.5;
        fixDef.friction = 0.1;
        fixDef.filter.categoryBits = this.shaunBits;
        fixDef.filter.maskBits = (LevelGen.allBits & ~LevelGen.skyHookBits);
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(this.px2m(100 * item.scaleX) / 3, this.px2m(100 * item.scaleY) / 3, new b2Math.b2Vec2(0, -this.px2m(100 * item.scaleY) / 6), 0);
        fixDef.shape = shape;
        fixture = body.CreateFixture(fixDef);
        fixDef = new b2Dynamics.b2FixtureDef();
        fixDef.restitution = 0.1;
        fixDef.density = 0.7;
        fixDef.friction = 0.1;
        fixDef.filter.categoryBits = this.shaunBits;
        fixDef.filter.maskBits = (LevelGen.allBits & ~LevelGen.skyHookBits);
        circshape = new b2Shapes.b2CircleShape(this.px2m(100 * item.scaleX) / 1.8);
        circshape.SetLocalPosition(new b2Math.b2Vec2(0, (this.px2m(100 * item.scaleY) / 2) - (this.px2m(100 * item.scaleX) / 2)));
        fixDef.shape = circshape;
        fixture = body.CreateFixture(fixDef);
        /*fd = new b2Dynamics.b2FixtureDef();
       // fd.filter.maskBits = MagicContactFilter.PLAYER;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var footFixture: b2Dynamics.b2Fixture = body.CreateFixture(fd);*/
        //left
        var leftSensor = mc["leftSensor"];
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(Game.inst.px2m(100 * leftSensor.scaleX * item.scaleX) / 2, Game.inst.px2m(100 * leftSensor.scaleY * item.scaleY) / 2, new b2Math.b2Vec2(Game.inst.px2m(leftSensor.x * item.scaleX), Game.inst.px2m(leftSensor.y * item.scaleY)), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.categoryBits = this.shaunBits;
        fd.filter.maskBits = this.allBits & ~this.skyHookBits;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var leftFixture = body.CreateFixture(fd);
        //right
        var rightSensor = mc["rightSensor"];
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(Game.inst.px2m(100 * rightSensor.scaleX * item.scaleX) / 2, Game.inst.px2m(100 * rightSensor.scaleY * item.scaleY) / 2, new b2Math.b2Vec2(Game.inst.px2m(rightSensor.x * item.scaleX), Game.inst.px2m(rightSensor.y * item.scaleY)), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.maskBits = this.allBits & ~this.skyHookBits;
        fd.filter.categoryBits = this.shaunBits;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var rightFixture = body.CreateFixture(fd);
        //top left
        var topSensor = mc["topSensor"];
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(Game.inst.px2m(100 * topSensor.scaleX * item.scaleX) / 4, Game.inst.px2m(100 * topSensor.scaleY * item.scaleY) / 2, new b2Math.b2Vec2(Game.inst.px2m(topSensor.x * item.scaleX) - (Game.inst.px2m(100 * topSensor.scaleX * item.scaleX) / 4), Game.inst.px2m(topSensor.y * item.scaleY)), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.maskBits = this.allBits & ~this.skyHookBits;
        fd.filter.categoryBits = this.shaunBits;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var topFixtureLeft = body.CreateFixture(fd);
        //top right
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(Game.inst.px2m(100 * topSensor.scaleX * item.scaleX) / 4, Game.inst.px2m(100 * topSensor.scaleY * item.scaleY) / 2, new b2Math.b2Vec2(Game.inst.px2m(topSensor.x * item.scaleX) + (Game.inst.px2m(100 * topSensor.scaleX * item.scaleX) / 4), Game.inst.px2m(topSensor.y * item.scaleY)), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.maskBits = this.allBits & ~this.skyHookBits;
        fd.filter.categoryBits = this.shaunBits;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var topFixtureRight = body.CreateFixture(fd);
        //foot
        var footSensor = mc["footSensor"];
        shape = new b2Shapes.b2PolygonShape();
        shape.SetAsOrientedBox(Game.inst.px2m(100 * footSensor.scaleX * item.scaleX) / 2, Game.inst.px2m(100 * footSensor.scaleY * item.scaleY) / 2, new b2Math.b2Vec2(Game.inst.px2m(footSensor.x * item.scaleX), Game.inst.px2m(footSensor.y * item.scaleY)), 0);
        fd = new b2Dynamics.b2FixtureDef();
        fd.filter.maskBits = this.allBits & ~this.skyHookBits;
        fd.filter.categoryBits = this.shaunBits;
        fd.density = 0;
        fd.restitution = 0;
        fd.friction = 0;
        fd.shape = shape;
        fd.isSensor = true;
        var footFixture = body.CreateFixture(fd);
        body.SetAngle(Maths.degToRad(item.rotation));
        item["body"] = body;
        console.log("making main char");
        Game.inst.mainCharacter = new MainCharacter(body, mc, leftFixture, rightFixture, topFixtureLeft, topFixtureRight, footFixture);
        return body;
    };
    LevelGen.makeSheepItem = function (mc, world) {
        var body;
        var type;
        if (mc["isStopper"]) {
            type = SheepTypes.BLOCKER;
            body = LevelGen.makeDynamicSquareBody(mc, world, b2Math.b2Vec2.Make(0, -this.px2m(Game.inst.gridSize / 2)));
        }
        if (mc["isSwitcher"]) {
            type = SheepTypes.SWITCHER;
            body = LevelGen.makeDynamicSquareBody(mc, world);
        }
        if (mc["isHanger"]) {
            type = SheepTypes.HANGER;
            body = LevelGen.makeDynamicSquareBody(mc, world);
        }
        var fd = body.GetFixtureList().GetFilterData().Copy();
        fd.maskBits = this.allBits & ~this.slipperyWallBits;
        fd.categoryBits = this.sheepBits;
        if (mc["isSwitcher"]) {
            fd = body.GetFixtureList().GetFilterData().Copy();
            fd.maskBits = this.allBits & ~this.slipperyWallBits & ~this.shaunBits & ~this.sheepBits;
            fd.categoryBits = this.sheepBits & ~this.shaunBits;
        }
        body.GetFixtureList().SetFilterData(fd);
        return Game.inst.sheepManager.addLevelSheep(body, mc, type);
    };
    LevelGen.makeComplexShape = function (mc, world) {
        var item = mc;
        // item.gotoAndStop(1)
        var body;
        var bodyDef;
        var fixture;
        var shape;
        var fixDef;
        var jointDef;
        var joint;
        bodyDef = new b2Dynamics.b2BodyDef();
        bodyDef.type = b2Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.Set(this.px2m(item.x), this.px2m(item.y));
        bodyDef.userData = item;
        bodyDef.linearDamping = 0.1;
        bodyDef.angularDamping = 0.1;
        bodyDef.fixedRotation = false;
        bodyDef.allowSleep = false;
        bodyDef.bullet = true;
        body = world.CreateBody(bodyDef);
        for (var i = 0; i < item.getNumChildren(); i++) {
            var fixRef = item.getChildAt(i);
            if (fixRef["isFixture"]) {
                fixDef = new b2Dynamics.b2FixtureDef();
                fixDef.restitution = 0;
                fixDef.density = 1;
                fixDef.friction = 1;
                fixDef.filter.maskBits = this.allBits;
                fixDef.filter.categoryBits = this.wallBits;
                shape = new b2Shapes.b2PolygonShape();
                //createjs.st
                var width = this.px2m(100 * fixRef.scaleX * item.scaleX) / 2;
                var height = this.px2m(100 * fixRef.scaleY * item.scaleY) / 2;
                var xpos = this.px2m(fixRef.x * item.scaleX);
                var ypos = this.px2m(fixRef.y * item.scaleY);
                shape.SetAsOrientedBox(width, height, b2Math.b2Vec2.Make(xpos, ypos), Maths.degToRad(fixRef.rotation));
                fixDef.shape = shape;
                fixture = body.CreateFixture(fixDef);
            }
            if (fixRef.name == "isPin") {
                jointDef = new b2Dynamics.Joints.b2RevoluteJointDef();
                jointDef.bodyA = body;
                jointDef.bodyB = world.GetGroundBody();
                jointDef.localAnchorA = b2Math.b2Vec2.Make(this.px2m(fixRef.x * item.scaleX), this.px2m(fixRef.y * item.scaleY));
                jointDef.localAnchorB = b2Math.b2Vec2.Make(this.px2m(item.x), this.px2m(item.y));
                joint = world.CreateJoint(jointDef);
            }
        }
        body.SetAngle(Maths.degToRad(item.rotation));
        Game.inst.movingItems.registerItem(new MovingLevelItem(body, mc));
        item["body"] = body;
        item["joint"] = joint;
        return body;
    };
    LevelGen.allBits = 0xffff;
    LevelGen.sheepBits = 0x0002;
    LevelGen.wallBits = 0x0003;
    LevelGen.slipperyWallBits = 0x0001;
    LevelGen.skyHookBits = 0x0010;
    LevelGen.shaunBits = 0x0004;
    return LevelGen;
})();
/**
 * ...
 * @author Tom Milner
 */
var ScreenManager = (function (_super) {
    __extends(ScreenManager, _super);
    function ScreenManager() {
        _super.call(this);
        this.startScreen = new StartScreen();
        this.gameScreen = new GameScreen();
        this.levelSelect = new LevelSelect();
        this.levelComplete = new LevelWinScreen();
        this.gameComplete = new GameWinScreen();
        this.instructionsScreen = new HowToPlayOverlay();
        this.pauseScreen = new PauseMenuOverlay();
        this.levelFailScreen = new LevelFailOverlay();
        this.pagesHUD = new uiLib.pageGui();
        this.startScreen.pageID = "start screen";
        this.gameScreen.pageID = "game screen";
        this.levelSelect.pageID = "level select";
        this.levelComplete.pageID = "level complete screen";
        this.gameComplete.pageID = "game complete";
        this.instructionsScreen.overlayID = "instructions overlay";
        this.pauseScreen.overlayID = "pause overlay";
        this.levelFailScreen.overlayID = "level failed overlay";
        if (ScreenManager.inst == null) {
            ScreenManager.inst = this;
            this.guiLayer = new createjs.Container();
            this.guiLayer.addChild(this.pagesHUD);
            this.pagesHUD.muteBtn.on("mousedown", this.toggleMute, this, false);
            this.pagesHUD.homeBtn.on("mousedown", this.gotoHome, this, false);
            this.updateMuteButtonState();
        }
    }
    ScreenManager.prototype.showScreen = function (screen) {
        if (screen == this.gameScreen) {
            this.pagesHUD.visible = false;
        }
        else {
            this.pagesHUD.visible = true;
            if (SoundManager.inst) {
                SoundManager.inst.stopAtmos();
            }
        }
        if (screen == this.startScreen) {
            this.pagesHUD.homeBtn.visible = false;
        }
        else {
            this.pagesHUD.homeBtn.visible = true;
        }
        _gaq.push(["_trackEvent", "screenEvent", "pageOpened", screen.pageID]);
        this.hideOverlay();
        if (this.currentScreen) {
            this.currentScreen.hide(this.removeScreenFromDisplayList, this);
            this.nextSecreen = screen;
        }
        else {
            this.currentScreen = screen;
            this.addChild(this.currentScreen);
            this.addChild(this.guiLayer);
            this.addChild(this.blackout);
            this.currentScreen.show();
        }
        this.updateMuteButtonState();
    };
    ScreenManager.prototype.removeScreenFromDisplayList = function (screen) {
        this.removeChild(screen);
        this.prevScreen = this.currentScreen;
        this.currentScreen = this.nextSecreen;
        this.addChild(this.currentScreen);
        this.addChild(this.guiLayer);
        this.addChild(this.blackout);
        this.currentScreen.show();
        this.nextSecreen = null;
    };
    ScreenManager.prototype.showOverlay = function (overlay) {
        this.currentScreen.mouseEnabled = false;
        this.currentScreen.mouseChildren = false;
        if (this.currentOverlay) {
            return;
        }
        _gaq.push(["_trackEvent", "screenEvent", "overlayOpened", overlay.overlayID]);
        this.currentOverlay = overlay;
        this.showVignette();
        this.currentOverlay.show();
        this.addChild(this.currentOverlay);
    };
    ScreenManager.prototype.hideOverlay = function () {
        if (this.currentOverlay) {
            this.hideVignette();
            this.currentOverlay.hide(this.removeOverlay, this);
        }
    };
    ScreenManager.prototype.removeOverlay = function () {
        this.removeChild(this.currentOverlay);
        this.currentOverlay = null;
        this.currentScreen.mouseEnabled = true;
        this.currentScreen.mouseChildren = true;
    };
    ScreenManager.prototype.showVignette = function () {
        if (!this.vignette) {
            this.vignette = new uiLib.blackout();
        }
        this.vignette.alpha = 0;
        this.addChild(this.vignette);
        TweenMax.to(this.vignette, 1, { alpha: 0.5 });
    };
    ScreenManager.prototype.hideVignette = function () {
        TweenMax.to(this.vignette, 1, { alpha: 0, onComplete: this.removeVignette, onCompleteScope: this });
    };
    ScreenManager.prototype.removeVignette = function () {
        this.removeChild(this.vignette);
    };
    ScreenManager.prototype.showBlackout = function () {
        if (!this.blackout) {
            this.blackout = new uiLib.blackout();
        }
        this.addChild(this.blackout);
        this.blackout.alpha = 0;
        TweenMax.to(this.blackout, 0.5, { alpha: 1 });
    };
    ScreenManager.prototype.hideBlackout = function () {
        if (!this.blackout)
            return;
        TweenMax.to(this.blackout, 0.5, { alpha: 0, onComplete: this.removeBlackout, onCompleteScope: this });
    };
    ScreenManager.prototype.removeBlackout = function () {
        this.removeChild(this.blackout);
    };
    /*getCurrentScreenOrLevelForIStats ():String {

        if(this.currentScreen == this.onePlayerScreen){
            return "singlePlayerGame_level_"+SinglePlayerGame.inst.currentLevel.toString();
        } else if(this.currentScreen == this.twoPlayerScreen){
            return "twoPlayerGame";
        } else if(this.currentScreen == this.startScreen){
            return "startScreen";
        } else if(this.currentScreen == this.winScreen){
            return "winScreen";
        } else if(this.currentScreen == this.loseScreen){
            return "loseScreen";
        } else if(this.currentScreen == this.winGame){
            return "winGame";
        } else if(this.currentScreen == this.levelSelect){
            return "levelSelect";
        } else if(this.currentScreen == this.leaderboard){
            return "leaderboard";
        } else if(this.currentScreen == this.storyScreen){
            return "storyScreen";
        }
        return "";
    }*/
    ScreenManager.prototype.toggleMute = function () {
        if (SoundManager.inst.muted) {
            SoundManager.inst.muted = false;
        }
        else {
            SoundManager.inst.muted = true;
        }
        this.updateMuteButtonState();
    };
    ScreenManager.prototype.updateMuteButtonState = function () {
        if (SoundManager.inst.muted) {
            this.pagesHUD.muteBtn.gotoAndStop(1);
        }
        else {
            this.pagesHUD.muteBtn.gotoAndStop(0);
        }
    };
    ScreenManager.prototype.gotoHome = function () {
        this.showScreen(this.startScreen);
    };
    return ScreenManager;
})(createjs.Container);
/// <reference path="../../defs/jquery.d.ts" />
/// <reference path="../../defs/jstorage.d.ts" />
var SavedData = (function () {
    function SavedData() {
        this._allUnlocked = false;
        this.savedDataName = "levelData4";
    }
    SavedData.prototype.parseSavedData = function () {
        // finish all of this
        var jsonString = $.jStorage.get(this.savedDataName);
        if (jsonString) {
            var dataArray = JSON.parse(jsonString);
            this.levelData = dataArray;
        }
        else {
            this.levelData = [];
        }
    };
    SavedData.prototype.saveLevelScore = function (scoreObj) {
        //finish all of this
        if (!this.levelData[scoreObj.level]) {
            this.levelData[scoreObj.level] = scoreObj;
        }
        else {
            if (scoreObj.totalScore > this.levelData[scoreObj.level].totalScore) {
                this.levelData[scoreObj.level] = scoreObj;
            }
        }
        this.saveDataToLocal();
        //this.collectableData[level][id] = (<ICollectable>{ id: id, level: level });
    };
    Object.defineProperty(SavedData.prototype, "totalScore", {
        get: function () {
            var toReturn = 0;
            for (var i = 1; i <= 20; i++) {
                if (this.levelData[i]) {
                    toReturn += this.levelData[i].totalScore;
                }
            }
            return toReturn;
        },
        enumerable: true,
        configurable: true
    });
    SavedData.prototype.unlockAll = function () {
        this._allUnlocked = true;
    };
    SavedData.prototype.isUnlocked = function (level) {
        if (this._allUnlocked)
            return true;
        if (level == 1) {
            return true;
        }
        if (this.levelData[level] && !isNaN(this.levelData[level].totalScore) && this.levelData[level].totalScore > 0) {
            return true;
        }
        if (this.levelData[level - 1] && !isNaN(this.levelData[level - 1].totalScore) && this.levelData[level - 1].totalScore > 0) {
            return true;
        }
        return false;
    };
    SavedData.prototype.saveDataToLocal = function () {
        $.jStorage.set(this.savedDataName, JSON.stringify(this.levelData));
    };
    return SavedData;
})();
/// <reference path="screens/screenmanager.ts" />
/// <reference path="data/saveddata.ts" />
/// <reference path="../defs/box2dweb.d.ts" />
/// <reference path="../defs/createjs.d.ts" />
/// <reference path="../defs/easeljs.d.ts" />
/// <reference path="../js/flash_lib.d.ts" />
/// <reference path="../js/flash_lib2.d.ts" />
/// <reference path="../defs/ga.d.ts" />
/// <reference path="../defs/greensock.d.ts" />
/// <reference path="../defs/jquery.d.ts" />
/// <reference path="../defs/jstorage.d.ts" />
/// <reference path="../defs/pixi.d.ts" />
/// <reference path="../defs/preloader_lib.d.ts" />
/// <reference path="../defs/preloadjs.d.ts" />
/// <reference path="../defs/soundjs.d.ts" />
/// <reference path="../defs/sounds.d.ts" />
/// <reference path="../defs/tweenjs.d.ts" />
/// <reference path="../defs/ui_lib.d.ts" />
/// <reference path="../defs/webgl.d.ts" />
var stageWidth = 900;
var stageHeight = 600;
var images;
var json;
var img;
var debugDraw = false;
var xmlObjects = [];
var Main = (function () {
    function Main(element, useLowRes) {
        this.baseUrl = "";
        this.drawStage = 1;
        this.cheats = false;
        this.isPreloading = true;
        this.useLowResGfx = true;
        if (!window["desktop"])
            window["desktop"] = false;
        this.useLowResGfx = useLowRes;
        if (!Main.inst) {
            Main.inst = this;
        }
        this.element = element;
        this.startEasel();
        this.savedData = new SavedData();
        this.savedData.parseSavedData();
        this.preloadPreload();
    }
    Main.prototype.doCheck = function () {
        if (document["webkitHidden"] !== undefined) {
            this._hiddenVar = 'webkitvisibilitychange';
        }
        else if (document["mozHidden"] !== undefined) {
            this._hiddenVar = 'mozvisibilitychange';
        }
        else if (document.msHidden !== undefined) {
            this._hiddenVar = 'msvisibilitychange';
        }
        else if (document.hidden !== undefined) {
            this._hiddenVar = 'visibilitychange';
        }
        else {
            this._hiddenVar = null;
        }
        //  Does browser support it? If not (like in IE9 or old Android) we need to fall back to blur/focus
        if (this._hiddenVar) {
            document.addEventListener(this._hiddenVar, this._onChange, false);
        }
        else {
            window.onblur = this.windowBlurred;
            window.onfocus = this.windowFocused;
        }
    };
    Main.prototype._onChange = function (e) {
        if (document.hidden) {
            Main.inst.windowBlurred();
        }
        else {
            Main.inst.windowFocused();
        }
    };
    Main.prototype.windowBlurred = function () {
        Main.inst.beforeBlurredState = {};
        Main.inst.beforeBlurredState.muted = SoundManager.inst.muted;
        console.log(Main.inst.beforeBlurredState.muted);
        SoundManager.inst.muted = true;
    };
    Main.prototype.windowFocused = function () {
        if (Main.inst.beforeBlurredState) {
            SoundManager.inst.muted = Main.inst.beforeBlurredState.muted;
            console.log(Main.inst.beforeBlurredState.muted);
        }
    };
    Main.prototype.startEasel = function () {
        Main.inst.stage = new createjs.Stage(Main.inst.element);
        //Main.inst.stage.w
        createjs.Touch.enable(Main.inst.stage, false, false);
        Main.inst.element.onselectstart = function () { return false; };
        Main.inst.element.style["MozUserSelect"] = "none";
        Main.inst.element.style["KhtmlUserSelect"] = "none";
        Main.inst.element["unselectable"] = "on";
        //createj.
        //TweenMax.ticker.
        TweenMax.ticker.fps(40);
        TweenMax.ticker.addEventListener("tick", Main.inst.update);
        // var leftOffset:number = (window.innerWidth / 2)
        Btn.initClass(Main.inst.stage);
        Keys.init(Main.inst.stage);
        window.onresize = Main.inst.setHeight.bind(Main.inst);
        Main.inst.setHeight();
    };
    Main.prototype.preloadPreload = function () {
        images = images || {};
        json = json || {};
        var loader = new createjs.LoadQueue(false);
        loader.loadFile("http://www.shaunthesheep.com/is-mobile", true);
        loader.loadManifest(preload_lib.properties.manifest, false);
        loader.addEventListener("fileload", Main.inst.handleFileLoad);
        loader.addEventListener("error", Main.inst.errorLoad);
        loader.addEventListener("complete", Main.inst.displayPreloader);
        loader.load();
    };
    Main.prototype.handleFileLoad = function (evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
            return;
        }
        if (evt.item.type == "xml") {
            xmlObjects[evt.item.id] = evt.result;
            return;
        }
        console.log("type :-", evt.item.type);
        if (evt.item.type == "text") {
            desktop = !JSON.parse(evt.result).mobile;
            console.log("desktop:-", desktop);
            Main.inst.setHeight();
            return;
        }
    };
    Main.prototype.errorLoad = function (e) {
        console.log("canny find", e);
    };
    Main.prototype.displayPreloader = function () {
        Main.inst.isPreloading = true;
        Main.inst.preloader = new preload_lib.loader();
        Main.inst.stage.addChild(Main.inst.preloader);
        Main.inst.fullLoadStart();
    };
    Main.prototype.fullLoadStart = function () {
        this.isPreloading = true;
        this.pixiBridge = new CjsPixiBridge();
        this.pixiBridge.loadAssets();
        this.mainLoader = new createjs.LoadQueue(false);
        this.mainLoader.loadManifest(lib.properties.manifest, false);
        this.mainLoader.loadManifest(lib2.properties.manifest, false);
        this.mainLoader.loadManifest(uiLib.properties.manifest, false);
        this.mainLoader.loadFile("fontmaps/oklahoma_deputy.xml");
        this.mainLoader.loadFile("fontmaps/oklahoma_deputy.png");
        this.mainLoader.loadFile("fontmaps/boudoir.xml");
        this.mainLoader.loadFile("fontmaps/boudoir.png");
        this.mainLoader.setMaxConnections(6);
        this.mainLoader.installPlugin(createjs.Sound);
        this.mainLoader.addEventListener("fileload", Main.inst.handleFileLoad);
        this.mainLoader.addEventListener("complete", Main.inst.handleComplete);
        this.mainLoader.addEventListener("error", Main.inst.errorLoad);
        new SoundManager();
        SoundManager.inst.loadSounds();
        this.mainLoader.load();
    };
    Main.prototype.handleComplete = function () {
        if (Main.inst.pixiBridge.pixiDustLoaded == false) {
            TweenMax.delayedCall(1, Main.inst.handleComplete, null, Main.inst, true);
            return;
        }
        Main.inst.turnYourDevice = new uiLib.turndevicescreen();
        Main.inst.isPreloading = false;
        new SocialLinks();
        new FontManager();
        FontManager.inst.init();
        Main.inst.stage.removeChild(Main.inst.preloader);
        Main.inst.stage.addChild(new ScreenManager());
        ScreenManager.inst.showScreen(ScreenManager.inst.startScreen);
        Main.inst.checkOrientation();
        ///Game.inst.start(startLevel);
    };
    Main.prototype.update = function () {
        if (Main.inst.drawStage == 3 || Main.inst.isPreloading || (ScreenManager.inst && ((ScreenManager.inst.currentScreen != ScreenManager.inst.gameScreen) || (ScreenManager.inst.currentScreen == ScreenManager.inst.gameScreen && Game.inst.paused == true)))) {
            Main.inst.stage.update();
            Main.inst.drawStage = 0;
        }
        else {
            Main.inst.drawStage++;
        }
        if (Main.inst.isPreloading && Main.inst.preloader) {
            Main.inst.preloader.loader.loader_bar.scaleX = Main.inst.mainLoader.progress;
        }
        if (Keys.isDownThisFrame(Keys.U) && Main.inst.cheats) {
            Main.inst.savedData.unlockAll();
            if (ScreenManager.inst.currentScreen == ScreenManager.inst.levelSelect) {
                ScreenManager.inst.levelSelect.reload();
            }
        }
        if (Game.inst) {
            Game.inst.update();
        }
        Keys.clearFramePressedReleased();
    };
    Main.prototype.setHeight = function (e) {
        if (e === void 0) { e = null; }
        /*  TweenMax.delayedCall(1, function ()
          {*/
        var gameRatio = stageWidth / stageHeight;
        if (!desktop) {
            $("html, body").css({
                'background': '#000'
            });
        }
        else {
            $("body").css({
                'overflow': 'hidden'
            });
        }
        // var clientHeight = $(Main.inst.element).parent().height();
        //var clientWidth = $(Main.inst.element).parent().width();
        var clientWidth = window.innerWidth;
        var clientHeight = window.innerHeight;
        var clientRatio = (clientWidth / clientHeight);
        if (clientRatio > gameRatio) {
            //div.style.height = clientHeight.toString() + "px"
            //div.style.width = (clientHeight * ratio).toString() + "px";
            $(Main.inst.element).css({
                'top': '0px',
                'display': 'block',
                'width': (clientHeight * gameRatio).toString() + 'px',
                'height': clientHeight.toString() + 'px'
            });
        }
        else {
            $(Main.inst.element).css({
                'display': 'block',
                'width': (clientWidth).toString() + 'px',
                'height': (clientWidth / gameRatio).toString() + 'px'
            });
        }
        Main.inst.checkOrientation();
        // if (Main.inst.pixiBridge) Main.inst.pixiBridge.updatePosition();
        //  },
        /*    null, window, true);*/
        if (Main.inst.pixiBridge) {
            TweenMax.delayedCall(2, function () {
                Main.inst.pixiBridge.updatePosition();
            }, null, window, true);
        }
    };
    Main.prototype.checkOrientation = function () {
        if (desktop)
            return;
        var w = window.innerWidth;
        var h = window.innerHeight;
        var orientation = "portrait";
        if (w > h)
            orientation = "landscape";
        if (orientation == "portrait") {
            if (this.turnYourDevice) {
                Main.inst.stage.addChild(this.turnYourDevice);
            }
            if (Game.inst) {
                Game.inst.paused = true;
            }
        }
        else {
            if (Game.inst) {
                Game.inst.paused = false;
            }
            if (this.turnYourDevice && this.turnYourDevice.parent != null) {
                Main.inst.stage.removeChild(this.turnYourDevice);
            }
        }
    };
    return Main;
})();
function isCompatible() {
    var nua = navigator.userAgent;
    var is_iphone = (nua.indexOf("iPhone OS") > -1);
    var is_iphone5Orbetter = false;
    var is_android_chrome = false;
    var is_ie11 = false;
    var is_chrome = false;
    var is_ff = false;
    var device_pixelRatio = window.devicePixelRatio;
    if (is_iphone) {
        if (screen.width * window.devicePixelRatio >= 1136 || screen.height * window.devicePixelRatio >= 1136) {
            is_iphone5Orbetter = true;
        }
    }
    else {
        is_android_chrome = ((nua.indexOf('Mozilla') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && nua.indexOf('Chrome') > -1);
    }
    if (nua.indexOf("MSIE 9") > -1) {
        return -1;
    }
    if (nua.indexOf("MSIE 10") > -1) {
        return 0;
    }
    if ((nua.indexOf("GT-P51") > -1 || nua.indexOf("GT-P31") > -1) && (nua.indexOf("Chrome/") > -1)) {
        return 0;
    }
    if (nua.indexOf("Trident") > -1) {
        is_ie11 = true;
    }
    if (nua.indexOf("Firefox") > -1) {
        is_ff = true;
    }
    if (nua.indexOf("Chrome/") > -1) {
        is_chrome = true;
    }
    if (nua.indexOf("Macintosh; Intel Mac OS X ") > -1 && nua.indexOf("Safari/") > -1) {
        return 1;
    }
    if (nua.indexOf("iPad") > -1 && nua.indexOf("Safari/") > -1) {
        if (screen.width >= 2048 || screen.height >= 2048 || device_pixelRatio >= 2) {
            return 0;
        }
        else {
            return 0;
        }
    }
    if (is_iphone5Orbetter)
        return 0;
    if (is_android_chrome)
        return 1;
    if (is_ie11)
        return 1;
    if (is_chrome)
        return 1;
    if (is_ff)
        return 1;
    return -1;
    //Mozilla / 5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit / 533.17.9(KHTML, like Gecko) Version / 5.0.2 Mobile / 8C148 Safari / 6533.18.5
}
window.onload = function () {
    var ic = isCompatible();
    ic = 1;
    if (ic > -1) {
        $('#content').append('<canvas id="sheepAnimationCanvas" width="' + stageWidth + '" height="' + stageHeight + '" style="margin: 0 auto;"></canvas>');
        if (debugDraw) {
            $('#content').append('<canvas id="debugdraw" width="' + stageWidth + '" height="' + stageHeight + '" style="margin: 0 auto;"></canvas>');
        }
        var el = document.getElementById('sheepAnimationCanvas');
        new Main(el, ic == 1);
    }
    else {
        $('#content').append('<img src="images/incompatible-screen.jpg">');
    }
};
var MainCharacter = (function (_super) {
    __extends(MainCharacter, _super);
    function MainCharacter(body, sprite, leftSensor, rightSensor, topSensorLeft, topSensorRight, footSensor) {
        _super.call(this, body, sprite);
        this.currentWalkDir = 1;
        this.walkPower = 20;
        this.jumpDirImpulse = -50;
        this.jumpPower = 180;
        this.maxSpeed = 1;
        this.pixiScale = 0.822;
        this.clickJump = false;
        this.canChangeDir = true;
        this.canPlayFootStep = true;
        this.leftSensor = leftSensor;
        this.rightSensor = rightSensor;
        this.topSensorL = topSensorLeft;
        this.topSensorR = topSensorRight;
        this.footSensor = footSensor;
        this.canJump = true;
        this.canChangeDir = true;
        this.buildPixiMovieClips();
        this.sprite.alpha = 0.01; // = false;
        this.sprite.on("mousedown", this.doJump, this, false);
    }
    MainCharacter.prototype.pauseAnimation = function () {
        this.canAnimate = false;
        if (this.pixiDisplayWalkSprite)
            this.pixiDisplayWalkSprite.stop();
        if (this.pixiDisplayJumpSprite)
            this.pixiDisplayJumpSprite.stop();
        if (this.pixiDisplayExitSprite)
            this.pixiDisplayExitSprite.stop();
    };
    MainCharacter.prototype.buildPixiMovieClips = function () {
        var prefix = "shaunWalk_";
        var walkTextures = [];
        var i = 1;
        while (i <= 8) {
            var texture = PIXI.Texture.fromFrame(prefix + i.toString() + ".png");
            walkTextures.push(texture);
            i++;
        }
        var jumpTextures = [];
        i = 1;
        prefix = "shaunJump_";
        while (i <= 2) {
            var texture = PIXI.Texture.fromFrame(prefix + i.toString() + ".png");
            jumpTextures.push(texture);
            // jumpTextures.push(texture);
            i++;
        }
        var exitTextures = [];
        i = 1;
        prefix = "shaunExit_";
        while (i <= 3) {
            var texture = PIXI.Texture.fromFrame(prefix + i.toString() + ".png");
            exitTextures.push(texture);
            i++;
        }
        i = 1;
        while (i <= 3) {
            var texture = PIXI.Texture.fromFrame(prefix + "3.png");
            exitTextures.push(texture);
            i++;
        }
        i--;
        while (i > 0) {
            var texture = PIXI.Texture.fromFrame(prefix + i.toString() + ".png");
            exitTextures.push(texture);
            i--;
        }
        exitTextures.push(PIXI.Texture.fromFrame("shaunWalk_1.png"));
        this.pixiDisplayWalkSprite = new PIXI.MovieClip(walkTextures);
        this.pixiDisplayJumpSprite = new PIXI.MovieClip(jumpTextures);
        this.pixiDisplayExitSprite = new PIXI.MovieClip(exitTextures);
        this.pixiDisplayWalkSprite.animationSpeed = 0.11;
        this.pixiDisplayJumpSprite.animationSpeed = 0.11;
        this.pixiDisplayExitSprite.animationSpeed = 0.11;
        this.pixiDisplayWalkSprite.pivot.x = 125;
        this.pixiDisplayWalkSprite.pivot.y = 125;
        this.pixiDisplayJumpSprite.pivot.x = 125;
        this.pixiDisplayJumpSprite.pivot.y = 125;
        this.pixiDisplayExitSprite.pivot.x = 125;
        this.pixiDisplayExitSprite.pivot.y = 125;
        this.pixiDisplayHolder = new PIXI.DisplayObjectContainer();
        this.pixiDisplayHolder.pivot.x = 0;
        this.pixiDisplayHolder.pivot.y = -10;
        this.pixiDisplayHolder.addChild(this.pixiDisplayWalkSprite);
        this.pixiDisplayHolder.addChild(this.pixiDisplayJumpSprite);
        this.pixiDisplayHolder.addChild(this.pixiDisplayExitSprite);
        this.addPixiSpritesToLevel();
        this.updateAnimation("walk");
    };
    MainCharacter.prototype.addPixiSpritesToLevel = function () {
        if (Main.inst.pixiBridge.level && this.pixiDisplayHolder) {
            Main.inst.pixiBridge.level.addChildAt(this.pixiDisplayHolder, 0);
        }
        else {
            TweenMax.delayedCall(1, this.addPixiSpritesToLevel, null, this, true);
        }
    };
    MainCharacter.prototype.updateAnimation = function (state) {
        this.pixiDisplayExitSprite.stop();
        this.pixiDisplayWalkSprite.stop();
        this.pixiDisplayJumpSprite.stop();
        this.pixiDisplayExitSprite.visible = false;
        this.pixiDisplayWalkSprite.visible = false;
        this.pixiDisplayJumpSprite.visible = false;
        if (state == "walk") {
            this.pixiDisplayWalkSprite.play();
            this.pixiDisplayWalkSprite.visible = true;
        }
        if (state == "jump") {
            this.pixiDisplayJumpSprite.play();
            this.pixiDisplayJumpSprite.visible = true;
            TweenMax.delayedCall(4, this.updateAnimation, ["walk"], this, true);
        }
        if (state == "exit") {
            this.pixiDisplayExitSprite.play();
            this.pixiDisplayExitSprite.visible = true;
            this.pixiDisplayExitSprite.loop = false;
        }
    };
    MainCharacter.prototype.doJump = function (e) {
        this.clickJump = true;
        // this.jump(this.currentWalkDir,true);
    };
    MainCharacter.prototype.preStep = function () {
        this.groundSpeed = new b2Math.b2Vec2(0, 0);
    };
    MainCharacter.prototype.update = function () {
        if (this.canAnimate == false) {
            this.canAnimate = true;
            this.updateAnimation("walk");
        }
        var leftTouching = false;
        var rightTouching = false;
        var topTouchingLeft = false;
        var topTouchingRight = false;
        var footTouching = false;
        var isTouching;
        var cl = this.body.GetContactList();
        if (cl != null) {
            while (cl) {
                if (cl.contact.IsTouching() == false) {
                    cl = cl.next;
                    continue;
                }
                isTouching = true;
                if (cl.contact.GetFixtureA() == this.topSensorL || cl.contact.GetFixtureB() == this.topSensorL) {
                    if (this.shouldTurnCheck(cl)) {
                        topTouchingLeft = true;
                    }
                }
                if (cl.contact.GetFixtureA() == this.topSensorR || cl.contact.GetFixtureB() == this.topSensorR) {
                    if (this.shouldTurnCheck(cl)) {
                        topTouchingRight = true;
                    }
                }
                if (cl.contact.GetFixtureA() == this.leftSensor || cl.contact.GetFixtureB() == this.leftSensor) {
                    if (this.shouldJumpCheck(cl)) {
                        leftTouching = true;
                    }
                }
                if (cl.contact.GetFixtureA() == this.rightSensor || cl.contact.GetFixtureB() == this.rightSensor) {
                    if (this.shouldJumpCheck(cl)) {
                        rightTouching = true;
                    }
                }
                if (cl.contact.GetFixtureA() == this.footSensor || cl.contact.GetFixtureB() == this.footSensor) {
                    var ud = cl.other.GetUserData();
                    if (ud && ud["controller"] instanceof Sheep && ud["controller"].type == SheepTypes.HANGER) {
                        ud["controller"].shaunStoodOnMe();
                    }
                    footTouching = true;
                }
                cl = cl.next;
            }
            if (this.clickJump && topTouchingLeft == false && topTouchingRight == false && footTouching) {
                this.jump(this.currentWalkDir, true);
                this.clickJump = false;
            }
            else if (topTouchingRight == false && topTouchingLeft == false && rightTouching && leftTouching && footTouching) {
                this.jump(this.currentWalkDir);
            }
            else if (topTouchingRight == false && rightTouching && footTouching) {
                this.jump(1);
            }
            else if (topTouchingLeft == false && leftTouching && footTouching) {
                this.jump(-1);
            }
            else if (topTouchingRight && rightTouching && this.currentWalkDir == 1) {
                this.currentWalkDir = -1;
            }
            else if (topTouchingLeft && leftTouching && this.currentWalkDir == -1) {
                this.currentWalkDir = 1;
            }
            // for an annoying bug
            if (isTouching && topTouchingLeft == false && topTouchingRight == false && ((leftTouching == true && this.currentWalkDir == -1) || (rightTouching == true && this.currentWalkDir == 1)) && footTouching == false) {
                if (this.body.GetLinearVelocity().y <= 0.001) {
                    this.jump(this.currentWalkDir);
                }
            }
        }
        if (this.jumpTarget) {
            var jt = this.jumpTarget.Copy();
            jt.Subtract(this.body.GetPosition());
            jt.Multiply(20);
            this.body.ApplyForce(jt, this.body.GetPosition());
        }
        if (Game.inst.state == GameStates.RUNNING) {
            if ((this.body.GetLinearVelocity().x * this.body.GetLinearVelocity().x) < this.groundSpeed.LengthSquared() + (this.maxSpeed * this.maxSpeed)) {
                if (this.canJump) {
                    this.body.ApplyForce(b2Math.b2Vec2.Make((this.currentWalkDir) * this.walkPower, 0), this.body.GetPosition().Copy());
                }
            }
        }
        else if (Game.inst.state == GameStates.CANT_JUMP) {
            if (this.pixiDisplayExitSprite.visible == false) {
                this.updateAnimation("exit");
            }
        }
        this.updateDisplaySprite(footTouching);
    };
    MainCharacter.prototype.updateDisplaySprite = function (footTouching) {
        this.pixiDisplayHolder.position.x = this.sprite.x / CjsPixiBridge.cjs2PIXI;
        this.pixiDisplayHolder.position.y = this.sprite.y / CjsPixiBridge.cjs2PIXI;
        if (this.pixiDisplayHolder.scale.x != this.currentWalkDir * this.pixiScale) {
            if (this.canChangeDir) {
                TweenMax.delayedCall(0.5, this.allowDirectionChange, null, this);
                this.pixiDisplayHolder.scale.x = this.currentWalkDir * this.pixiScale;
                this.canChangeDir = false;
            }
        }
        else {
            this.canChangeDir = true;
        }
        this.pixiDisplayHolder.scale.y = this.pixiScale;
        if (this.pixiDisplayWalkSprite.visible == true) {
            var animFrame = Math.round(this.pixiDisplayWalkSprite.currentFrame) % 8;
            if (this.canPlayFootStep && this.canAnimate && (animFrame == 1 || animFrame == 5)) {
                this.canPlayFootStep = false;
                TweenMax.delayedCall(0.2, this.allowPlayFootstep, null, this, false);
                var p = this.sprite.localToGlobal(0, 0);
                var pan = p.x / stageWidth;
                pan -= 0.5;
                pan *= 2;
                if (footTouching) {
                    var step = createjs.Sound.play(Maths.randomElement([SoundManager.inst.thud1, SoundManager.inst.thud2, SoundManager.inst.thud3, SoundManager.inst.thud4]), createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 0.5, pan);
                    step.setPan(pan);
                }
            }
        }
    };
    MainCharacter.prototype.allowPlayFootstep = function () {
        this.canPlayFootStep = true;
    };
    MainCharacter.prototype.allowDirectionChange = function () {
        TweenMax.killDelayedCallsTo(this.allowDirectionChange);
        this.canChangeDir = true;
    };
    MainCharacter.prototype.shouldTurnCheck = function (cl) {
        if (Game.inst.state != GameStates.RUNNING)
            return false;
        if (!cl)
            return true;
        var other = cl.other;
        if (other.GetFixtureList().IsSensor())
            return false;
        var ud = other.GetUserData();
        if (ud) {
            if (ud.isStopper) {
                ud["controller"].doBah();
            }
            if (ud.isWaterWheel || ud.isStar || ud.isSwitch || ud.isComplexShape) {
                return false;
            }
        }
        return true;
    };
    MainCharacter.prototype.shouldJumpCheck = function (cl) {
        if (Game.inst.state != GameStates.RUNNING)
            return false;
        if (!cl)
            return true;
        var other = cl.other;
        if (other.GetFixtureList().IsSensor())
            return false;
        var ud = other.GetUserData();
        if (ud) {
            if (ud.isStar || ud.isSwitch || ud.isComplexShape || (ud.isSheep && ud.isSwitcher)) {
                return false;
            }
        }
        return true;
    };
    MainCharacter.prototype.jump = function (dir, mini) {
        if (mini === void 0) { mini = false; }
        if (dir == this.currentWalkDir && this.canJump == true && Game.inst.state == GameStates.RUNNING) {
            //var bPos: b2Math.b2Vec2 = this.body.GetPosition().Copy();
            //bPos.y -= Game.inst.px2m(100);
            // this.body.SetPosition(bPos.Copy());
            var jumpVect = b2Math.b2Vec2.Make(-this.currentWalkDir, -this.jumpPower);
            if (mini) {
                jumpVect = b2Math.b2Vec2.Make(this.currentWalkDir * this.jumpDirImpulse, -this.jumpPower * 1);
            }
            var bPos = this.body.GetPosition().Copy();
            TweenMax.delayedCall(10, this.attractToTarget, [this.currentWalkDir, this.body.GetPosition().Copy()], this, true);
            this.body.ApplyForce(jumpVect, bPos);
            // TweenMax.delayedCall(1, this.applyJumpForce, null, this, true);
            this.jumpTarget = null;
            TweenMax.delayedCall(30, this.allowJumpAgain, null, this, true);
            this.canJump = false;
            this.updateAnimation("jump");
            var step = createjs.Sound.play(SoundManager.inst.jump_up_footstep);
        }
    };
    MainCharacter.prototype.attractToTarget = function (dir, initialPos) {
        var newVect = initialPos.Copy();
        newVect.x += (Game.inst.px2m(25) * dir);
        newVect.y += Game.inst.px2m(-25);
        this.jumpTarget = newVect;
        TweenMax.delayedCall(30, this.killJumpTarget, null, this, true);
        // this.body.ApplyForce(, this.body.GetPosition());;
    };
    MainCharacter.prototype.killJumpTarget = function () {
        this.jumpTarget = null;
    };
    MainCharacter.prototype.applyJumpForce = function () {
        var jumpVect = b2Math.b2Vec2.Make(this.currentWalkDir * this.jumpDirImpulse, -this.jumpPower);
        var bPos = this.body.GetPosition().Copy();
        this.body.ApplyForce(jumpVect, bPos);
    };
    MainCharacter.prototype.allowJumpAgain = function () {
        TweenMax.killDelayedCallsTo(this.allowJumpAgain);
        this.canJump = true;
    };
    MainCharacter.prototype.hitSheep = function (sheepBody) {
        /* var bodyPos: b2Math.b2Vec2 = this.body.GetPosition().Copy();
         var sheepPos: b2Math.b2Vec2 = sheepBody.GetPosition().Copy();
         var sheepBounds: number = Game.inst.px2m(sheepBody.GetUserData().scaleY * 51);
         var myBounds: number = Game.inst.px2m(this.sprite.scaleY * 50);
         bodyPos.y = sheepPos.y - (sheepBounds + myBounds);
         this.body.SetPosition(bodyPos);*/
    };
    MainCharacter.prototype.dispose = function () {
        this.removeFromParent(this.pixiDisplayWalkSprite);
        this.removeFromParent(this.pixiDisplayJumpSprite);
        this.removeFromParent(this.pixiDisplayExitSprite);
        this.removeFromParent(this.pixiDisplayHolder);
        this.pixiDisplayWalkSprite = null;
        this.pixiDisplayJumpSprite = null;
        this.pixiDisplayExitSprite = null;
        this.pixiDisplayHolder = null;
        this.leftSensor = null;
        this.rightSensor = null;
        this.topSensorL = null;
        this.topSensorR = null;
        this.footSensor = null;
        this.groundSpeed = null;
        _super.prototype.dispose.call(this, true);
    };
    MainCharacter.prototype.removeFromParent = function (clip) {
        if (clip && clip.parent) {
            clip.parent.removeChild(clip);
        }
    };
    return MainCharacter;
})(B2dBodySprite);
var PinchCameraControl = (function () {
    function PinchCameraControl() {
        //Main.inst.stage.canvas.onmousewheel = this.mouseWheelZoom.bind(this);
        //window.DOMMouseScroll = this.mouseWheelZoom.bind(this);
        this.secondaryTouchID = -2;
        this.primaryTouchID = -1;
        this.maxZoom = 4;
        this.minZoom = 0.5;
        this.updateMove = false;
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
        if (Main.inst.stage.canvas.attachEvent)
            Main.inst.stage.canvas.attachEvent("on" + mousewheelevt, this.mouseWheelZoom.bind(this));
        else if (Main.inst.stage.canvas.addEventListener)
            Main.inst.stage.canvas.addEventListener(mousewheelevt, this.mouseWheelZoom.bind(this), false);
    }
    PinchCameraControl.prototype.setupPinchZoom = function (stage, startScale, updateScaleFunction, startDrag, updatePositionFunction, updateScope) {
        this.startScale = startScale;
        this.startDrag = startDrag;
        this.updateScaleFunction = updateScaleFunction;
        this.updatePositionFunction = updatePositionFunction;
        this.updateScope = updateScope;
        this.stageRef = stage;
        this.stageRef.on("stagemousedown", this.touchStart, this, false);
        this.stageRef.on("stagemousemove", this.touchMove, this, false);
        this.stageRef.on("stagemouseup", this.touchEnd, this, false);
        // this.stageRef.addEventListener("stagemousedown",this.touchStart,
        var w = Game.inst.levels["sizeRef"].scaleX * 100;
        var h = Game.inst.levels["sizeRef"].scaleY * 100;
        var x = Game.inst.levels["sizeRef"].x;
        var y = Game.inst.levels["sizeRef"].y;
        this.levelBounds = new createjs.Rectangle(x - (w / 2), y - (h / 2), w, h);
        this.levelMinZoom = this.levelBounds.width / stageWidth;
        if (this.levelMinZoom < this.levelBounds.height / stageHeight) {
            this.levelMinZoom = this.levelBounds.height / stageHeight;
        }
        var nPos = Game.inst.levels.globalToLocal(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
        nPos.x = (nPos.x + Game.inst.vcam.x) / 2;
        nPos.y = (nPos.y + Game.inst.vcam.y) / 2;
        Game.inst.updateCamPositionAbs(nPos);
        TweenMax.delayedCall(1, Game.inst.updateCamSizeAbs, [0.6], Game.inst, true);
        TweenMax.delayedCall(2, Game.inst.updateCamSizeAbs, [0.5], Game.inst, true);
        Game.inst.updateCamSizeAbs((1 / Game.inst.vcam.scaleX) * 0.5);
    };
    PinchCameraControl.prototype.dispose = function () {
        this.stageRef.removeEventListener("stagemousedown", this.touchStart);
        this.stageRef.removeEventListener("stagemousemove", this.touchMove);
        this.stageRef.removeEventListener("stagemouseup", this.touchEnd);
        this.stageRef = null;
        this.updateScaleFunction = null;
        this.updatePositionFunction = null;
        this.updateScope = null;
    };
    PinchCameraControl.prototype.mouseWheelZoom = function (e) {
        e.preventDefault();
        var evt = window.event || e; //equalize event object
        var delta = evt["detail"] ? evt["detail"] * (-120) : evt["wheelDelta"]; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        if (!this.pos1Start && !this.pos2Start) {
            this.pos1Start = new createjs.Point(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
            this.pos2Start = new createjs.Point(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
            this.startScale.call(Game.inst, this.pos1Start, this.pos2Start);
        }
        var nPos = Game.inst.levels.globalToLocal(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
        nPos.x = (nPos.x + Game.inst.vcam.x) / 2;
        nPos.y = (nPos.y + Game.inst.vcam.y) / 2;
        if (delta > 0) {
            Game.inst.updateCamPositionAbs(nPos);
            Game.inst.updateCamSizeAbs((1 / Game.inst.vcam.scaleX) * 1.5);
        }
        if (delta < 0) {
            Game.inst.updateCamPositionAbs(nPos);
            Game.inst.updateCamSizeAbs((1 / Game.inst.vcam.scaleX) * 0.5);
        }
    };
    PinchCameraControl.prototype.doubleClick = function (evt) {
        /* if (Game.inst.targCamScale.x == (1 / this.maxZoom))
         {
             Game.inst.updateCamSizeAbs((this.minZoom ));
             Game.inst.updateCamPositionAbs(Game.inst.levels.globalToLocal(this.stageRef.mouseX, this.stageRef.mouseY));
 
         }
         else
         {
             Game.inst.updateCamSizeAbs(this.maxZoom);
             Game.inst.updateCamPositionAbs(Game.inst.levels.globalToLocal(this.stageRef.mouseX, this.stageRef.mouseY));
         }
 
         if (document.selection && document.selection.empty)
         {
             document.selection.empty();
         }
         else if (window.getSelection)
         {
             var sel = window.getSelection();
             sel.removeAllRanges();
         }*/
    };
    PinchCameraControl.prototype.touchStart = function (evt) {
        if (Game.inst.sheepManager.distCheck(evt.stageX, evt.stageY)) {
            console.log("touchStart, got a sheep");
            return;
        }
        this.updateMove = true;
        //console.log("touchStart" + evt.id);
        if (evt.primary) {
            this.primaryTouchID = evt.pointerID;
            this.pos1Start = new createjs.Point(evt.stageX, evt.stageY);
            this.startDrag.call(this.updateScope, this.pos1Start);
        }
        if (evt.primary == false && this.secondaryTouchID == -2) {
            this.secondaryTouchID = evt.pointerID;
            this.pos2Start = new createjs.Point(evt.stageX, evt.stageY);
            this.p1Local = Game.inst.levels.globalToLocal(this.pos1Start.x, this.pos1Start.y);
            this.p2Local = Game.inst.levels.globalToLocal(this.pos2Start.x, this.pos2Start.y);
            this.startScale.call(this.updateScope, this.pos1Start, this.pos2Start);
            this.centrePos = Game.inst.levels.globalToLocal(stageWidth / 2, stageHeight / 2);
        }
    };
    PinchCameraControl.prototype.touchMove = function (evt) {
        if (this.updateMove) {
            if (evt.pointerID == this.primaryTouchID) {
                this.pos1 = new createjs.Point(evt.stageX, evt.stageY);
                if (!this.pos2 && Game.inst.sheepManager.currentlyEditingSheep == null && Game.inst.sheepManager.currentSwitchActive == null && this.pos1Start) {
                    this.isMoving = true;
                    this.updatePositionFunction.call(this.updateScope, new createjs.Point(this.pos1.x - this.pos1Start.x, this.pos1.y - this.pos1Start.y));
                }
            }
            if (evt.pointerID == this.secondaryTouchID) {
                this.pos2 = new createjs.Point(evt.stageX, evt.stageY);
            }
            if (this.pos1 && this.pos2 && this.pos1Start && this.pos2Start) {
                this.isZooming = true;
                var dist = Maths.distance(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
                var startDist = Maths.distance(this.pos1Start.x, this.pos1Start.y, this.pos2Start.x, this.pos2Start.y);
                var scale = dist / startDist;
                var initialPos = new createjs.Point(((this.p1Local.x + this.p2Local.x) / 2), ((this.p1Local.y + this.p2Local.y) / 2));
                var distVect = this.centrePos.clone();
                distVect.x += (initialPos.x - this.centrePos.x) * scale / 5;
                distVect.y += (initialPos.y - this.centrePos.y) * scale / 5;
                this.updateScaleFunction.call(this.updateScope, scale);
                Game.inst.updateCamPositionAbs(distVect);
            }
        }
    };
    PinchCameraControl.prototype.stopListenForDoubleTap = function () {
        this.listenForDoubleTap = false;
    };
    PinchCameraControl.prototype.touchEnd = function (evt) {
        //console.log("touchEnd" + evt.pointerID);
        if (evt.primary) {
            if (Game.inst.sheepManager.currentlyEditingSheep) {
                Game.inst.sheepManager.currentlyEditingSheep.mouseUp();
            }
            if (Game.inst.sheepManager.currentSwitchActive) {
                Game.inst.sheepManager.currentSwitchActive.mouseUp();
            }
            this.pos1Start = null;
            this.pos1 = null;
            this.isMoving = false;
            this.isZooming = false;
            this.updateMove = false;
        }
        if (evt.pointerID == this.secondaryTouchID) {
            this.isZooming = false;
            this.secondaryTouchID = -2;
            this.pos2Start = null;
            this.pos2 = null;
        }
    };
    return PinchCameraControl;
})();
var SocialLinks = (function () {
    function SocialLinks() {
        this.gameLink = "";
        this.gameString = "";
        if (!SocialLinks.inst) {
            this.gameString = strings.share.str;
            this.gameLink = strings.share.url;
            SocialLinks.inst = this;
        }
    }
    SocialLinks.prototype.shareViaTwitter = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "twitter", "from " + data]);
        window.open("https://twitter.com/home?status=" + this.gameString + " " + this.gameLink);
    };
    SocialLinks.prototype.shareViaFacebook = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "facebook", "from " + data]);
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + this.gameLink + "");
    };
    SocialLinks.prototype.shareViaGooglePlus = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "googlePlus", "from " + data]);
        window.open("https://plus.google.com/share?url=" + this.gameLink + "");
    };
    SocialLinks.prototype.shareViaTumblr = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "tumblr", "from " + data]);
        window.open("http://www.tumblr.com/share/link?url=" + encodeURI(this.gameLink) + "&description=" + encodeURI(this.gameString));
    };
    SocialLinks.prototype.shareViaPinterest = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "pinterest", "from " + data]);
        window.open("http://www.pinterest.com/pin/create/button/?url=" + this.gameLink + "&media=" + document.URL + "images/shaunahh.png" + "&description=" + this.gameString);
    };
    SocialLinks.prototype.gotoSTS = function (e, data) {
        if (e === void 0) { e = null; }
        if (data === void 0) { data = null; }
        _gaq.push(["_trackEvent", "socialShare", "sts", "from " + data]);
        //var strings = strings || {};
        console.log(strings.levelComplete.URL);
        window.open(strings.levelComplete.URL);
    };
    return SocialLinks;
})();
var DeadZone = (function (_super) {
    __extends(DeadZone, _super);
    function DeadZone(body, sprite) {
        _super.call(this, body, sprite);
        if (!editorMode) {
            sprite.visible = false;
        }
        // sprite.visible = false;
    }
    DeadZone.prototype.update = function () {
        var cl = this.body.GetContactList();
        while (cl) {
            if (cl.other == Game.inst.mainCharacter.body && cl.contact.IsTouching()) {
                Game.inst.levelFailed();
            }
            cl = cl.next;
        }
    };
    return DeadZone;
})(B2dBodySprite);
var MovingItemSwitch = (function (_super) {
    __extends(MovingItemSwitch, _super);
    function MovingItemSwitch(body, sprite) {
        _super.call(this, body, sprite);
        this.sprite["controller"] = this;
    }
    MovingItemSwitch.prototype.update = function () {
        this.myMoveableItem.isOn = false;
        var cl = this.body.GetContactList();
        while (cl) {
            if (cl.other.GetUserData().isSwitcher && cl.other.GetUserData()["controller"].state != SheepStates.EDIT) {
                if (cl.other.GetUserData()["controller"].isActive == true) {
                    this.myMoveableItem.isOn = true;
                }
            }
            cl = cl.next;
        }
    };
    return MovingItemSwitch;
})(B2dBodySprite);
var MovingLevelItem = (function (_super) {
    __extends(MovingLevelItem, _super);
    function MovingLevelItem(body, sprite) {
        _super.call(this, body, sprite);
    }
    MovingLevelItem.prototype.update = function () {
        if (!this.mySwitch) {
            if (this.sprite.parent[this.sprite.name + "_switch"]) {
                this.mySwitch = this.sprite.parent[this.sprite.name + "_switch"]["controller"];
                this.mySwitch.myMoveableItem = this;
            }
        }
        if (this.isOn) {
            if (!this.movingItemSound) {
                this.movingItemSound = createjs.Sound.play(SoundManager.inst.motor, null, 0, 0, -1, 0.8);
            }
        }
        else {
            if (this.movingItemSound) {
                this.movingItemSound.stop();
                this.movingItemSound = null;
            }
        }
        if (this.myPIXISprite) {
            if (editorMode == false) {
                this.sprite.visible = false;
            }
            var bodyPos = this.body.GetPosition();
            var bodyAngle = this.body.GetAngle();
            this.myPIXISprite.position.x = Game.inst.m2px(bodyPos.x) / CjsPixiBridge.cjs2PIXI;
            this.myPIXISprite.position.y = Game.inst.m2px(bodyPos.y) / CjsPixiBridge.cjs2PIXI;
            this.myPIXISprite.rotation = bodyAngle;
        }
    };
    MovingLevelItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.movingItemSound) {
            this.movingItemSound.stop();
            this.movingItemSound = null;
        }
    };
    return MovingLevelItem;
})(B2dBodySprite);
var MovingPlatform = (function (_super) {
    __extends(MovingPlatform, _super);
    function MovingPlatform(body, sprite) {
        _super.call(this, body, sprite);
        this.speed = 2;
        this.currentDirection = 0;
        body.SetType(b2Dynamics.b2Body.b2_kinematicBody);
        body.GetFixtureList().SetFriction(1);
        this.referenceClip = this.sprite.parent[this.sprite.name + "_ref"];
        this.angleOfTravel = Maths.degToRad(this.referenceClip.rotation);
        this.distanceOfTravel = 100 * this.referenceClip.scaleX;
        this.sprite.x = this.referenceClip.x + ((this.distanceOfTravel / 2) * Math.cos(this.angleOfTravel));
        this.sprite.y = this.referenceClip.y + ((this.distanceOfTravel / 2) * Math.sin(this.angleOfTravel));
        this.endPos = b2Math.b2Vec2.Make(Game.inst.px2m(this.sprite.x), Game.inst.px2m(this.sprite.y));
        this.sprite.x = this.referenceClip.x - ((this.distanceOfTravel / 2) * Math.cos(this.angleOfTravel));
        this.sprite.y = this.referenceClip.y - ((this.distanceOfTravel / 2) * Math.sin(this.angleOfTravel));
        this.startPos = b2Math.b2Vec2.Make(Game.inst.px2m(this.sprite.x), Game.inst.px2m(this.sprite.y));
        var normal = Maths.unitNormal(this.startPos.x - this.endPos.x, this.startPos.y - this.endPos.y);
        var bodyPos = this.body.GetPosition().Copy();
        var bodyNorm = bodyPos.Copy();
        bodyNorm.Add(Maths.pointToB2vect2(normal));
        this.isOn = true;
        var intersect = Maths.lineIntersectLine(Maths.b2vect2ToPoint(this.startPos), Maths.b2vect2ToPoint(this.endPos), Maths.b2vect2ToPoint(bodyPos), Maths.b2vect2ToPoint(bodyNorm), false);
        this.body.SetPosition(Maths.pointToB2vect2(intersect));
        this.referenceClip.visible = false;
        this.changeDirection();
    }
    MovingPlatform.prototype.changeDirection = function () {
        if (this.currentDirection == 1) {
            this.currentDirection = -1;
        }
        else {
            this.currentDirection = 1;
        }
        this.velocityVector = b2Math.b2Vec2.Make(Math.cos(this.angleOfTravel) * this.speed * this.currentDirection, Math.sin(this.angleOfTravel) * this.speed * this.currentDirection);
        this.body.SetLinearVelocity(this.velocityVector);
    };
    MovingPlatform.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.mySwitch) {
            this.mySwitch.update();
        }
        if (this.isOn) {
            this.body.SetLinearVelocity(this.velocityVector);
        }
        else {
            this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
        }
        if (this.currentDirection == 1) {
            if (b2Math.b2Math.DistanceSquared(this.body.GetPosition(), this.endPos) < Game.inst.px2m(this.speed / 40)) {
                this.body.SetPosition(this.endPos.Copy());
                this.changeDirection();
            }
        }
        else if (this.currentDirection == -1) {
            if (b2Math.b2Math.DistanceSquared(this.body.GetPosition(), this.startPos) < Game.inst.px2m(this.speed / 40)) {
                this.body.SetPosition(this.startPos.Copy());
                this.changeDirection();
            }
        }
        /* var cl:b2Dynamics.Contacts.b2ContactEdge =  this.body.GetContactList()
         while (cl)
         {
             if (cl.contact.GetFixtureA() == Game.inst.mainCharacter.footSensor || cl.contact.GetFixtureB() == Game.inst.mainCharacter.footSensor)
             {
                 Game.inst.mainCharacter.groundSpeed = this.body.GetLinearVelocity().Copy();
             }
             cl = cl.next;
         }*/
    };
    return MovingPlatform;
})(MovingLevelItem);
var MovingWaterWheel = (function (_super) {
    __extends(MovingWaterWheel, _super);
    function MovingWaterWheel(body, sprite) {
        _super.call(this, body, sprite);
        this.speed = -1;
        this.joint = sprite["joint"];
        this.joint.SetMotorSpeed(this.speed);
        this.joint.SetMaxMotorTorque(100);
        this.joint.EnableMotor(true);
    }
    MovingWaterWheel.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.mySwitch)
            this.mySwitch.update();
        if (this.isOn) {
            this.joint.EnableMotor(true);
        }
        else {
            this.joint.EnableMotor(false);
        }
    };
    return MovingWaterWheel;
})(MovingLevelItem);
var Star = (function (_super) {
    __extends(Star, _super);
    function Star(body, sprite) {
        _super.call(this, body, sprite);
        this.id = parseInt(this.sprite.name.substr(1, 1));
        this.level = Game.inst.currentLevelNumber;
    }
    Star.prototype.update = function () {
        if (!this.pixiSprite) {
            this.pixiSprite = PIXI.Sprite.fromFrame("star.png");
            this.pixiSprite.position.x = (this.sprite.x - 12.5) * (1 / CjsPixiBridge.cjs2PIXI);
            this.pixiSprite.position.y = (this.sprite.y - 12.5) * (1 / CjsPixiBridge.cjs2PIXI);
            //Main.inst.pixiBridge.setPos(this.pixiSprite, this.sprite)
            Main.inst.pixiBridge.level.addChild(this.pixiSprite);
            this.sprite.visible = false;
        }
        var cl = this.body.GetContactList();
        while (cl) {
            if (cl.other == Game.inst.mainCharacter.body && cl.contact.IsTouching()) {
                Game.inst.collectables.starCollected(this);
            }
            cl = cl.next;
        }
    };
    Star.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.pixiSprite) {
            if (this.pixiSprite.parent) {
                this.pixiSprite.parent.removeChild(this.pixiSprite);
            }
        }
    };
    return Star;
})(B2dBodySprite);
var CollectablesManager = (function () {
    function CollectablesManager() {
        this.allItems = [];
        this._stars = 0;
    }
    Object.defineProperty(CollectablesManager.prototype, "stars", {
        get: function () {
            if (this._stars > 3) {
                this._stars = 3;
            }
            return this._stars;
        },
        set: function (value) {
            this._stars = value;
        },
        enumerable: true,
        configurable: true
    });
    CollectablesManager.prototype.registerItem = function (item) {
        Game.inst.otherUpdateables.registerItem(item);
        this.allItems.push(item);
    };
    CollectablesManager.prototype.starCollected = function (star) {
        if (this.stars < 3) {
            this.stars++;
        }
        if (this.stars > 3)
            console.log("YOU CANT DO THAT");
        _gaq.push(["_trackEvent", "gameEvent", "Star " + this.stars + " in level " + Game.inst.currentLevelNumber]);
        Game.inst.otherUpdateables.removeItem(star);
        createjs.Sound.play(SoundManager.inst.ding5);
    };
    CollectablesManager.prototype.showHideStartAtStartOfLevel = function () {
        this.stars = 0;
        /*  for (var i: number = 0; i < this.allItems.length; i++)
          {
              var star:Star = this.allItems[i];
              for (var j: number = 0; j < collected.length;j++)
              {
                  if (collected[j])
                  {
                      if (collected[j].id == star.id)
                      {
                          Game.inst.otherUpdateables.removeItem(star);
                      }
                  }
              }
          }*/
    };
    CollectablesManager.prototype.preStep = function () {
    };
    return CollectablesManager;
})();
var MovingLevelItemsManager = (function () {
    function MovingLevelItemsManager() {
        this.allItems = [];
        this.pixiItems = [];
    }
    MovingLevelItemsManager.prototype.registerItem = function (item) {
        if (this.pixiItems) {
            for (var i = 0; i < this.pixiItems.length; i++) {
                if (this.pixiItems[i][1] == item.sprite.name) {
                    item.myPIXISprite = this.pixiItems[i][0];
                    this.pixiItems.splice(i, 1);
                    break;
                }
            }
        }
        this.allItems.push(item);
    };
    MovingLevelItemsManager.prototype.removeItem = function (item) {
        if (item) {
            for (var i = 0; i < this.allItems.length; i++) {
                if (this.allItems[i] == item) {
                    this.allItems.splice(i, 1);
                    item.dispose();
                    return;
                }
            }
        }
    };
    MovingLevelItemsManager.prototype.update = function () {
        for (var i = 0; i < this.allItems.length; i++) {
            this.allItems[i].update();
        }
    };
    MovingLevelItemsManager.prototype.preStep = function () {
    };
    //factory
    MovingLevelItemsManager.prototype.buildMovingPlatform = function (body, sprite, autoRegister) {
        if (autoRegister === void 0) { autoRegister = true; }
        var platform = new MovingPlatform(body, sprite);
        if (autoRegister) {
            this.registerItem(platform);
        }
        return platform;
    };
    MovingLevelItemsManager.prototype.buildWaterwheel = function (body, sprite, autoRegister) {
        if (autoRegister === void 0) { autoRegister = true; }
        var ww = new MovingWaterWheel(body, sprite);
        if (autoRegister) {
            this.registerItem(ww);
        }
        return ww;
    };
    MovingLevelItemsManager.prototype.registerPixiItem = function (pixiItem, name) {
        for (var i = 0; i < this.allItems.length; i++) {
            if (this.allItems[i].sprite.name == name) {
                this.allItems[i].myPIXISprite = pixiItem;
                return;
            }
        }
        if (!this.pixiItems)
            this.pixiItems = [];
        this.pixiItems.push([pixiItem, name]);
    };
    MovingLevelItemsManager.prototype.dispose = function () {
        for (var i = 0; i < this.allItems.length; i++) {
            if (this.allItems[i]) {
                this.allItems[i].dispose();
            }
        }
        this.allItems = [];
    };
    return MovingLevelItemsManager;
})();
var SheepManager = (function () {
    function SheepManager() {
        this.mouseVelocity = new b2Math.b2Vec2(0, 0);
        this.allSheep = [];
    }
    SheepManager.prototype.addSheepFromClick = function (sheepType) {
        var newSheepDisp;
        if (sheepType == SheepTypes.BLOCKER) {
            if (Game.inst.currentLevelData.stoppers - Game.inst.usedSheep.stoppers > 0)
                newSheepDisp = new lib.sheepStopperBlock();
        }
        else if (sheepType == SheepTypes.SWITCHER) {
            if (Game.inst.currentLevelData.switchers - Game.inst.usedSheep.switchers > 0)
                newSheepDisp = new lib.sheepSwitcherBlock();
        }
        else if (sheepType == SheepTypes.HANGER) {
            if (Game.inst.currentLevelData.builders - Game.inst.usedSheep.builders > 0)
                newSheepDisp = new lib.sheepGroundBlock();
        }
        if (!newSheepDisp)
            return;
        if (sheepType == SheepTypes.HANGER || sheepType == SheepTypes.SWITCHER) {
            newSheepDisp.scaleX = 0.25;
            newSheepDisp.scaleY = 0.25;
        }
        else if (sheepType == SheepTypes.BLOCKER) {
            newSheepDisp.scaleX = 0.25;
            newSheepDisp.scaleY = 0.5;
        }
        var nPos = Game.inst.levels.globalToLocal(Main.inst.stage.mouseX, Main.inst.stage.mouseY - 20);
        Game.inst.levels.addChild(newSheepDisp);
        newSheepDisp.x = nPos.x;
        newSheepDisp.y = nPos.y;
        var newSheep = LevelGen.makeSheepItem(newSheepDisp, Game.inst.world);
        newSheep.mouseDown();
        //   Main.inst.stage.on("pressup", newSheep.mouseUp, newSheep, true, null, true);
        // this.startSheepEdit(newSheep);
        this.updateVals();
    };
    SheepManager.prototype.distCheck = function (globalX, globalY) {
        var closestSheep;
        var closestSheepDist = 100000000000000;
        for (var i = 0; i < this.allSheep.length; i++) {
            var s = this.allSheep[i];
            var gPos = Game.inst.levels.localToGlobal(Game.inst.m2px(s.body.GetPosition().x), Game.inst.m2px(s.body.GetPosition().y));
            var distSq = Maths.distanceSquared(gPos.x, gPos.y, globalX, globalY);
            if (!closestSheep || distSq < closestSheepDist) {
                closestSheep = s;
                closestSheepDist = distSq;
            }
        }
        if (closestSheepDist < (60 * 60) * Game.inst.levels.scaleX) {
            closestSheep.mouseDown();
            return true;
        }
        return false;
    };
    SheepManager.prototype.updateVals = function () {
        var numBuilders = 0;
        var numSwitchers = 0;
        var numBlockers = 0;
        for (var i = 0; i < this.allSheep.length; i++) {
            var type = this.allSheep[i].type;
            if (type == SheepTypes.BLOCKER) {
                numBlockers++;
            }
            if (type == SheepTypes.HANGER) {
                numBuilders++;
            }
            if (type == SheepTypes.SWITCHER) {
                numSwitchers++;
            }
        }
        Game.inst.usedSheep.builders = numBuilders;
        Game.inst.usedSheep.stoppers = numBlockers;
        Game.inst.usedSheep.switchers = numSwitchers;
        Game.inst.hud.updateValues();
    };
    SheepManager.prototype.addLevelSheep = function (body, sprite, type) {
        var sheep = new Sheep(body, sprite, type);
        sprite["controller"] = sheep;
        this.allSheep.push(sheep);
        this.updateVals();
        return sheep;
    };
    SheepManager.prototype.disposeSheep = function (sheep) {
        if (sheep) {
            for (var i = 0; i < this.allSheep.length; i++) {
                if (this.allSheep[i] == sheep) {
                    this.allSheep.splice(i, 1);
                    sheep.dispose();
                    break;
                }
            }
            this.updateVals();
        }
    };
    SheepManager.prototype.removeAllSheep = function (type) {
        if (type === void 0) { type = null; }
        if (type == null) {
            for (var i = 0; i < this.allSheep.length; i++) {
                this.allSheep[i].dispose();
            }
            this.allSheep = [];
        }
        else {
            var nSheep = [];
            for (var i = 0; i < this.allSheep.length; i++) {
                if (this.allSheep[i].type == type) {
                    this.allSheep[i].dispose();
                }
                else {
                    nSheep.push(this.allSheep[i]);
                }
            }
            this.allSheep = nSheep.concat();
            createjs.Sound.play(SoundManager.inst.retrieve);
        }
        this.updateVals();
    };
    SheepManager.prototype.preStep = function () {
    };
    SheepManager.prototype.update = function () {
        for (var i = 0; i < this.allSheep.length; i++) {
            this.allSheep[i].update();
        }
        if (this.currentlyEditingSheep && this.currentlyEditingSheep.state == SheepStates.EDIT) {
            if (this.prevMousePos) {
                var tVel = new b2Math.b2Vec2(Main.inst.stage.mouseX - this.prevMousePos.x, Main.inst.stage.mouseY - this.prevMousePos.y);
                tVel.Multiply(1 / Game.inst.pixelsPerMeter); //get in to meters per frame
                tVel.Multiply(40); //meters per second;
                if (tVel.LengthSquared() > (10 * 10)) {
                    tVel.Normalize();
                    tVel.Multiply(10);
                }
                this.mouseVelocity = tVel;
            }
        }
        this.prevMousePos = new b2Math.b2Vec2(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
    };
    SheepManager.prototype.startSheepEdit = function (sheep) {
        this.stopSheepEdit();
        this.currentlyEditingSheep = sheep;
        this.currentlyEditingSheep.edit();
        Main.inst.stage.on("mouseup", this.editFinish, this, true);
    };
    SheepManager.prototype.stopSheepEdit = function () {
        for (var i = 0; i < this.allSheep.length; i++) {
            this.allSheep[i].stopEdit();
        }
        if (this.currentlyEditingSheep) {
            // this.currentlyEditingSheep.body.SetLinearVelocity(this.mouseVelocity);
            var mv = this.mouseVelocity.Copy();
            mv.Multiply(this.currentlyEditingSheep.body.GetMass());
            this.currentlyEditingSheep.body.SetBullet(true);
            this.currentlyEditingSheep.body.ApplyImpulse(mv, b2Math.b2Vec2.Make(0, 0));
        }
        this.currentlyEditingSheep = null;
    };
    SheepManager.prototype.editFinish = function (evt) {
        this.stopSheepEdit();
    };
    return SheepManager;
})();
var SoundManager = (function () {
    function SoundManager() {
        this._muted = false;
        this.soundsInitialized = false;
        this.title_music = "title_music";
        this.barn_interior_atmos = "barn_interior_atmos";
        this.bubble_pop_05 = "bubble_pop_05";
        this.click = "click";
        this.ding5 = "ding5";
        this.farm_day_atmos = "farm_day_atmos";
        this.farm_night_atmos = "farm_night_atmos";
        this.jump_up_footstep = "jump_up_footstep";
        this.land_from_jump = "land_from_jump";
        this.level_complete_music = "level_complete_music";
        this.level_fail_music = "level_fail_music";
        this.level_start_music = "level_start_music";
        this.level_win = "level_win";
        this.mechanic2 = "mechanic2";
        this.mechanic_deactivate = "mechanic_deactivate";
        this.motor = "motor";
        this.pondsplash4 = "pondsplash4";
        this.retrieve = "retrieve";
        this.shaun_eh_1 = "shaun_eh_1";
        this.sheep_baa1 = "sheep_baa1";
        this.sheep_baa2 = "sheep_baa2";
        this.sheep_baa3 = "sheep_baa3";
        this.sheep_baa4 = "sheep_baa4";
        this.sheep_baa5 = "sheep_baa5";
        this.sheep_baa6 = "sheep_baa6";
        this.sheep_baa7 = "sheep_baa7";
        this.sheep_baa8 = "sheep_baa8";
        this.thud1 = "thud1";
        this.thud2 = "thud2";
        this.thud3 = "thud3";
        this.thud4 = "thud4";
        this.soundIDs = [{ id: this.title_music, vol: 1 },
            { id: this.barn_interior_atmos, vol: 1 },
            { id: this.bubble_pop_05, vol: 1 },
            { id: this.click, vol: 1 },
            { id: this.ding5, vol: 1 },
            { id: this.farm_day_atmos, vol: 1 },
            { id: this.farm_night_atmos, vol: 1 },
            { id: this.jump_up_footstep, vol: 1 },
            { id: this.land_from_jump, vol: 1 },
            { id: this.level_complete_music, vol: 1 },
            { id: this.level_fail_music, vol: 1 },
            { id: this.level_start_music, vol: 1 },
            { id: this.level_win, vol: 1 },
            { id: this.mechanic2, vol: 1 },
            { id: this.mechanic_deactivate, vol: 1 },
            { id: this.motor, vol: 1 },
            { id: this.pondsplash4, vol: 1 },
            { id: this.retrieve, vol: 1 },
            { id: this.shaun_eh_1, vol: 1 },
            { id: this.sheep_baa1, vol: 1 },
            { id: this.sheep_baa2, vol: 1 },
            { id: this.sheep_baa3, vol: 1 },
            { id: this.sheep_baa4, vol: 1 },
            { id: this.sheep_baa5, vol: 1 },
            { id: this.sheep_baa6, vol: 1 },
            { id: this.sheep_baa7, vol: 1 },
            { id: this.sheep_baa8, vol: 1 },
            { id: this.thud1, vol: 1 },
            { id: this.thud2, vol: 1 },
            { id: this.thud3, vol: 1 },
            { id: this.thud4, vol: 1 }];
        if (!SoundManager.inst) {
            SoundManager.inst = this;
            // createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin, createjs.HTMLAudioPlugin]);
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3", "ogg"];
            console.log(createjs.Sound.getCapabilities());
            createjs.Sound.addEventListener("fileload", this.loadHandler.bind(this));
            createjs.Sound.addEventListener("error", createjs.proxy(this.errorHandler, this));
        }
    }
    Object.defineProperty(SoundManager.prototype, "muted", {
        get: function () {
            return this._muted;
        },
        set: function (val) {
            createjs.Sound.setMute(val);
            this._muted = val;
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.prototype.loadSounds = function () {
        for (var i = 0; i < this.soundIDs.length; i++) {
            var id = this.soundIDs[i].id;
            Main.inst.mainLoader.loadFile(Main.inst.baseUrl + "audio/" + id + ".mp3");
            console.log(Main.inst.baseUrl + "audio/" + id + ".mp3");
        }
    };
    SoundManager.prototype.initializeSounds = function () {
        if (this.soundsInitialized == false) {
            for (var i = 0; i < this.soundIDs.length; i++) {
                var id = this.soundIDs[i].id;
                createjs.Sound.registerSound(Main.inst.baseUrl + "audio/" + id + ".mp3", id);
            }
            this.soundsInitialized = true;
        }
        TweenMax.delayedCall(40, this.playMusic, [this.title_music, true], this, true);
        ///this.playMusic(this.level_start_music);
    };
    SoundManager.prototype.errorHandler = function (event) {
        //console.log("broke" + event);
    };
    SoundManager.prototype.loadHandler = function (event) {
        // var instance = createjs.Sound.play("sound");  // play using id.  Could also use full source path or event.src.
        //instance.volume = 0.5;
    };
    SoundManager.prototype.playMusic = function (audio, loop) {
        if (this.currentMusic)
            this.currentMusic.stop();
        //   this.currentMusic = createjs.Sound.play(audio);
        if (loop) {
            this.currentMusic = createjs.Sound.play(audio, null, 0, 0, -1, 1);
        }
        else {
            this.currentMusic = createjs.Sound.play(audio, null, 0, 0, 0, 1);
        }
        console.log(this.currentMusic);
    };
    SoundManager.prototype.playAtmos = function (audio, loop) {
        if (loop === void 0) { loop = true; }
        if (this.currentAtmos)
            this.currentAtmos.stop();
        if (loop) {
            this.currentAtmos = createjs.Sound.play(audio, null, 0, 0, -1, 1);
        }
        else {
            this.currentAtmos = createjs.Sound.play(audio, null, 0, 0, 0, 1);
        }
    };
    SoundManager.prototype.stopAtmos = function () {
        if (this.currentAtmos)
            this.currentAtmos.stop();
        this.currentAtmos = null;
    };
    return SoundManager;
})();
var UpdatebaleItemsManager = (function () {
    function UpdatebaleItemsManager() {
        this.allItems = [];
    }
    UpdatebaleItemsManager.prototype.registerItem = function (item) {
        this.allItems.push(item);
    };
    UpdatebaleItemsManager.prototype.removeItem = function (item) {
        if (item) {
            for (var i = 0; i < this.allItems.length; i++) {
                if (this.allItems[i] == item) {
                    this.allItems.splice(i, 1);
                    item.dispose();
                    return;
                }
            }
        }
    };
    UpdatebaleItemsManager.prototype.update = function () {
        for (var i = 0; i < this.allItems.length; i++) {
            this.allItems[i].update();
        }
    };
    UpdatebaleItemsManager.prototype.preStep = function () {
    };
    return UpdatebaleItemsManager;
})();
var PlatformDetect = (function () {
    function PlatformDetect() {
    }
    return PlatformDetect;
})();
/**
 * ...
 * @author Tom Milner
 */
var ScreenBase = (function (_super) {
    __extends(ScreenBase, _super);
    function ScreenBase() {
        _super.call(this);
    }
    /* INTERFACE com.aardman.cc4g.natGrid.screens.IScreen */
    ScreenBase.prototype.show = function () {
        ScreenManager.inst.hideBlackout();
        this.addChild(this.display);
    };
    ScreenBase.prototype.hide = function (callback, scope) {
        ScreenManager.inst.showBlackout();
        TweenMax.delayedCall(1, this.hideMe, [callback, scope], this);
    };
    ScreenBase.prototype.reload = function () {
        this.hideMe(null, null);
        this.show();
    };
    ScreenBase.prototype.hideMe = function (callback, scope) {
        if (this.display && this.display.parent) {
            this.removeChild(this.display);
        }
        if (callback) {
            callback.apply(scope, [this]);
        }
    };
    return ScreenBase;
})(createjs.Container);
/// <reference path="screenbase.ts" />
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        _super.call(this);
    }
    GameScreen.prototype.show = function () {
        this.display = Game.inst;
        _super.prototype.show.call(this);
        if (!Game.inst) {
            new Game();
        }
        Game.inst.start(this.level);
    };
    GameScreen.prototype.hide = function (callback, scope) {
        _super.prototype.hide.call(this, callback, scope);
        Game.inst.fullDispose();
    };
    return GameScreen;
})(ScreenBase);
/// <reference path="ScreenBase.ts" />
var GameWinScreen = (function (_super) {
    __extends(GameWinScreen, _super);
    function GameWinScreen() {
        _super.call(this);
    }
    GameWinScreen.prototype.show = function () {
        this.display = new uiLib.WinGameGFX();
        _super.prototype.show.call(this);
        this.initButtons();
        var starsCollected = 0;
        for (var i = 1; i <= 20; i++) {
            if (Main.inst.savedData.levelData[i]) {
                starsCollected += Main.inst.savedData.levelData[i].starsCollected;
                console.log("levelData " + i + " " + Main.inst.savedData.levelData[i].starsCollected);
            }
        }
        _gaq.push(["gameEvent", "All levels completed"]);
        if (window.location.hash == "#ar") {
        }
        else {
            var titleSz = 65;
            var titleY = 0;
            if (window.location.hash == "#es") {
                titleSz = 40;
                titleY = 10;
            }
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.wellDoneTitle, 900, 72, titleSz, "center", titleY).setText(copy.gameComplete.title);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.scoreText, 172, 59, 40, "left").setText(copy.gameComplete.scoreText);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.nextBtn.continueText, 380, 37, 40, "right").setText(copy.gameComplete.playAgain);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.shaunUrl, 380, 37, 40, "center").setText(copy.levelComplete.URL);
        }
        FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.display.scoreVal, 225, 96, 70, "right").setText(Main.inst.savedData.totalScore.toString());
        FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.display.starsCount, 225, 96, 70, "center").setText(starsCollected + "/60");
    };
    GameWinScreen.prototype.initButtons = function () {
        Btn.initClip(this.display.nextBtn, this, this.restart, null, true, false);
        Btn.initClip(this.display.shaunUrl, SocialLinks.inst, SocialLinks.inst.gotoSTS, this.pageID);
        Btn.initClip(this.display.socialBtns.facebookBtn, SocialLinks.inst, SocialLinks.inst.shareViaFacebook, this.pageID);
        Btn.initClip(this.display.socialBtns.twitterBtn, SocialLinks.inst, SocialLinks.inst.shareViaTwitter, this.pageID);
        Btn.initClip(this.display.socialBtns.googlePlusBtn, SocialLinks.inst, SocialLinks.inst.shareViaGooglePlus, this.pageID);
        Btn.initClip(this.display.socialBtns.pinterestBtn, SocialLinks.inst, SocialLinks.inst.shareViaPinterest, this.pageID);
    };
    GameWinScreen.prototype.restart = function (e) {
        ScreenManager.inst.showScreen(ScreenManager.inst.startScreen);
    };
    GameWinScreen.prototype.wipeButtons = function () {
        try {
            Btn.wipe(this.display.nextBtn);
        }
        catch (e) {
        }
    };
    GameWinScreen.prototype.hideMe = function (callback, scope) {
        this.wipeButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    GameWinScreen.member = ScreenBase.member;
    return GameWinScreen;
})(ScreenBase);
/// <reference path="ScreenBase.ts" />
var LevelSelect = (function (_super) {
    __extends(LevelSelect, _super);
    function LevelSelect() {
        _super.call(this);
    }
    LevelSelect.prototype.show = function () {
        this.display = new uiLib.LevelSelectGFX();
        _super.prototype.show.call(this);
        TweenMax.delayedCall(2, this.initButtons, [], this, true);
        // Btn.initClip((<uiLib.le>this.display).startBtn, this, this.gotoLevelSelect, null, true);
    };
    LevelSelect.prototype.initButtons = function () {
        var typedDisplay = this.display;
        var starsCollected = 0;
        for (var i = 1; i <= 20; i++) {
            if (Main.inst.savedData.levelData[i]) {
                starsCollected += Main.inst.savedData.levelData[i].starsCollected;
                console.log(Main.inst.savedData.levelData[i].starsCollected);
            }
        }
        var tf = FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, typedDisplay.stars, 132, 47, 35, "right");
        tf.setText(starsCollected + "/60");
        if (true) {
            Btn.initClip(this.display.debugGameEnd, this, this.debugGotoGameEndFunction, {}, true, true);
        }
        else {
            this.display.debugGameEnd.visible = false;
        }
        var i = 1;
        while (i <= 20) {
            if (Main.inst.savedData.isUnlocked(i)) {
                typedDisplay.allLevels_mc["l" + i].gotoAndStop(0);
                Btn.initClip(typedDisplay.allLevels_mc["l" + i], this, this.goToLevel, { levelNo: i }, true, false);
                var tf = FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, typedDisplay.allLevels_mc["l" + i].levelNumber, 100, 100, 75, "center");
                tf.setText(i.toString());
                typedDisplay.allLevels_mc["l" + i].star1.gotoAndStop(0);
                typedDisplay.allLevels_mc["l" + i].star2.gotoAndStop(0);
                typedDisplay.allLevels_mc["l" + i].star3.gotoAndStop(0);
                if (Main.inst.savedData.levelData[i]) {
                    if (Main.inst.savedData.levelData[i].starsCollected >= 1)
                        typedDisplay.allLevels_mc["l" + i].star1.gotoAndStop(1);
                    if (Main.inst.savedData.levelData[i].starsCollected >= 2)
                        typedDisplay.allLevels_mc["l" + i].star2.gotoAndStop(1);
                    if (Main.inst.savedData.levelData[i].starsCollected == 3)
                        typedDisplay.allLevels_mc["l" + i].star3.gotoAndStop(1);
                }
                var frm = i % 5;
                if (i % 2) {
                    frm = 4 - frm;
                }
                typedDisplay.allLevels_mc["l" + i].bg.gotoAndStop(frm);
            }
            else {
                typedDisplay.allLevels_mc["l" + i].gotoAndStop(1);
                var frm = i % 5;
                if (i % 2) {
                    frm = 4 - frm;
                }
                typedDisplay.allLevels_mc["l" + i].lockedBG.gotoAndStop(frm);
            }
            i++;
        }
        Btn.initClip(typedDisplay.allLevels_mc.next, this, this.switchPage, 2, false, false, true);
        Btn.initClip(typedDisplay.allLevels_mc.prev, this, this.switchPage, 1, false, false, true);
        var tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, typedDisplay.levelSelect, 900, 100, 63, "center");
        tf.setText(copy.levelSelect.title);
        tf.y -= 20;
    };
    LevelSelect.prototype.debugGotoGameEndFunction = function () {
        console.log('skip to end');
        ScreenManager.inst.showScreen(ScreenManager.inst.gameComplete);
    };
    LevelSelect.prototype.switchPage = function (e, page) {
        var pos = [0, -stageWidth];
        TweenMax.to(this.display.allLevels_mc, 0.5, { x: pos[page - 1] });
    };
    LevelSelect.prototype.goToLevel = function (e, data) {
        ScreenManager.inst.gameScreen.level = data.levelNo;
        ScreenManager.inst.showScreen(ScreenManager.inst.gameScreen);
        if (data.levelNo == 1) {
            TweenMax.delayedCall(1.2, ScreenManager.inst.showOverlay, [ScreenManager.inst.instructionsScreen], ScreenManager.inst);
        }
    };
    LevelSelect.prototype.wipeButtons = function () {
        try {
            Btn.wipe(this.display.startBtn);
        }
        catch (e) {
        }
    };
    LevelSelect.prototype.hideMe = function (callback, scope) {
        this.wipeButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    return LevelSelect;
})(ScreenBase);
/// <reference path="ScreenBase.ts" />
var LevelWinScreen = (function (_super) {
    __extends(LevelWinScreen, _super);
    function LevelWinScreen() {
        _super.call(this);
    }
    LevelWinScreen.prototype.show = function () {
        this.display = new uiLib.WinLevelGFX();
        _super.prototype.show.call(this);
        this.initButtons();
        if (Game.inst.usingExternalFonts()) {
        }
        else {
            var buttonTextYOverride = 0;
            var buttonTextSz = 40;
            if (window.location.hash == "#es") {
                buttonTextYOverride = 10;
                buttonTextSz = 25;
            }
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.wellDoneTitle, 900, 72, 65, "center").setText(copy.levelComplete.title);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.scoreText, 172, 59, 40, "left").setText(copy.levelComplete.scoreText);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.levelsBtn.levelsText, 225, 37, buttonTextSz, "right", buttonTextYOverride).setText(copy.levelComplete.levelsBtn);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.retryBtn.tryAgain, 285, 37, buttonTextSz, "right", buttonTextYOverride).setText(copy.levelComplete.tryAgainBtn);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.nextBtn.continueText, 380, 37, buttonTextSz, "right", buttonTextYOverride).setText(copy.levelComplete.continueBtn);
            FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.shaunUrl, 380, 37, 40, "center").setText(copy.levelComplete.URL);
        }
        FontManager.inst.makeTextField(FontManager.inst.oklahoma_id, this.display.scoreVal, 225, 96, 70, "left").setText(Game.inst.currentLevelScore.totalScore.toString());
        var stars = Game.inst.currentLevelScore.starsCollected;
        var i = 1;
        while (i <= stars) {
            this.display["star" + i].gotoAndStop(1);
            i++;
        }
    };
    LevelWinScreen.prototype.initButtons = function () {
        Btn.initClip(this.display.levelsBtn, this, this.gotoLevelSelect, null, true, false);
        Btn.initClip(this.display.retryBtn, this, this.replayLevel, null, true, false);
        Btn.initClip(this.display.nextBtn, this, this.nextLevel, null, true, false);
        Btn.initClip(this.display.shaunUrl, SocialLinks.inst, SocialLinks.inst.gotoSTS, this.pageID);
        Btn.initClip(this.display.socialBtns.facebookBtn, SocialLinks.inst, SocialLinks.inst.shareViaFacebook, this.pageID);
        Btn.initClip(this.display.socialBtns.twitterBtn, SocialLinks.inst, SocialLinks.inst.shareViaTwitter, this.pageID);
        Btn.initClip(this.display.socialBtns.googlePlusBtn, SocialLinks.inst, SocialLinks.inst.shareViaGooglePlus, this.pageID);
        Btn.initClip(this.display.socialBtns.pinterestBtn, SocialLinks.inst, SocialLinks.inst.shareViaPinterest, this.pageID);
    };
    LevelWinScreen.prototype.gotoLevelSelect = function (e) {
        ScreenManager.inst.showScreen(ScreenManager.inst.levelSelect);
    };
    LevelWinScreen.prototype.replayLevel = function (e) {
        ScreenManager.inst.showScreen(ScreenManager.inst.gameScreen);
    };
    LevelWinScreen.prototype.nextLevel = function (e) {
        if (Game.inst.currentLevelNumber == 20) {
            ScreenManager.inst.showScreen(ScreenManager.inst.gameComplete);
        }
        else {
            ScreenManager.inst.gameScreen.level = Game.inst.currentLevelNumber + 1;
            ScreenManager.inst.showScreen(ScreenManager.inst.gameScreen);
        }
    };
    LevelWinScreen.prototype.wipeButtons = function () {
        try {
            Btn.wipe(this.display.levelsBtn);
            Btn.wipe(this.display.retryBtn);
            Btn.wipe(this.display.nextBtn);
        }
        catch (e) {
        }
    };
    LevelWinScreen.prototype.hideMe = function (callback, scope) {
        this.wipeButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    LevelWinScreen.member = ScreenBase.member;
    return LevelWinScreen;
})(ScreenBase);
/**
 * ...
 * @author Tom Milner
 */
var OverlayBase = (function (_super) {
    __extends(OverlayBase, _super);
    function OverlayBase() {
        _super.call(this);
    }
    OverlayBase.prototype.show = function () {
        ScreenManager.inst.showVignette();
        this.addChild(this.display);
        ScreenManager.inst.currentScreen.mouseChildren = false;
        //  Main.inst.gui.mouseChildren = false;
        // TweenMax.to(this.display, 0, { tint: 0x000000, immediateRender: true });
        // TweenMax.to(this.display, 1, { tint: null });
        //ScreenManager.inst.stage.stageFocusRect = false;
        //ScreenManager.inst.stage.focus = display;
        //ScreenManager.inst.stage.stageFocusRect = true;
    };
    OverlayBase.prototype.hide = function (callback, scope) {
        ScreenManager.inst.hideVignette();
        TweenMax.to(this.display, 0.1, { onComplete: this.hideMe, onCompleteParams: [callback, scope], onCompleteScope: this });
    };
    OverlayBase.prototype.hideMe = function (callback, scope) {
        ScreenManager.inst.currentScreen.mouseChildren = true;
        // Main.inst.gui.mouseChildren = true;
        if (this.display.parent) {
            this.removeChild(this.display);
        }
        callback.apply(scope, [this]);
    };
    return OverlayBase;
})(createjs.Container);
/// <reference path="OverlayBase.ts" />
var HowToPlayOverlay = (function (_super) {
    __extends(HowToPlayOverlay, _super);
    function HowToPlayOverlay() {
        _super.call(this);
    }
    HowToPlayOverlay.prototype.show = function () {
        TweenMax.pauseAll();
        this.display = new uiLib.IntructionsGFX();
        _super.prototype.show.call(this);
        Game.inst.paused = true;
        this.initBtns();
    };
    HowToPlayOverlay.prototype.initBtns = function () {
        Btn.initClip(this.display.continueBtn, this, this.hideThis);
        if (Game.inst.usingExternalFonts()) {
            //	LocalisedFontManager.AddLocalisedText(0, 0, "hello world", (<uiLib.IntructionsGFX>this.display).ins1.build, 234, 48, 40, "center");
            this.display.ins1.build.text.font = "50px 'Arial'";
            this.display.ins1.build.y -= 16;
            this.display.ins2.stopTxt.text.font = "50px 'Arial'";
            this.display.ins2.stopTxt.y -= 16;
            this.display.ins3.useTxt.text.font = "50px 'Arial'";
            this.display.ins3.useTxt.y -= 16;
            this.display.continueBtn.continueText.text.font = "50px 'Arial'";
            this.display.continueBtn.continueText.y = -42;
        }
        else {
            var tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.continueBtn.continueText, 380, 37, 35, "right");
            tf.setText(copy.instructions.continueBtn);
            tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.ins1.build, 234, 48, 40, "center");
            tf.setText(copy.instructions.build);
            tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.ins2.stopTxt, 234, 48, 40, "center");
            tf.setText(copy.instructions.stop);
            tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.ins3.useTxt, 234, 48, 40, "center");
            tf.setText(copy.instructions.use);
        }
    };
    HowToPlayOverlay.prototype.hideThis = function (e) {
        TweenMax.resumeAll();
        this.wipeAllButtons();
        ScreenManager.inst.hideOverlay();
        // super.hideMe(callback, scope);
    };
    HowToPlayOverlay.prototype.wipeAllButtons = function () {
    };
    HowToPlayOverlay.prototype.hideMe = function (callback, scope) {
        Game.inst.paused = false;
        this.wipeAllButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    return HowToPlayOverlay;
})(OverlayBase);
/// <reference path="OverlayBase.ts" />
var LevelFailOverlay = (function (_super) {
    __extends(LevelFailOverlay, _super);
    function LevelFailOverlay() {
        _super.call(this);
    }
    LevelFailOverlay.prototype.show = function () {
        TweenMax.pauseAll();
        this.display = new uiLib.LevelFailGFX();
        _super.prototype.show.call(this);
        if (Game.inst.usingExternalFonts()) {
        }
        else {
            var title = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.anim.tryText, 327, 72, 65, "center");
            title.setText(copy.fail.tryAgain);
        }
        Game.inst.paused = true;
        TweenMax.delayedCall(75, this.hideThis, null, this, true);
    };
    LevelFailOverlay.prototype.hideThis = function (e) {
        if (e === void 0) { e = null; }
        TweenMax.resumeAll();
        this.wipeAllButtons();
        ScreenManager.inst.hideOverlay();
        Game.inst.start(Game.inst.currentLevelNumber);
    };
    LevelFailOverlay.prototype.wipeAllButtons = function () {
    };
    LevelFailOverlay.prototype.hideMe = function (callback, scope) {
        Game.inst.paused = false;
        this.wipeAllButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    return LevelFailOverlay;
})(OverlayBase);
/// <reference path="OverlayBase.ts" />
var PauseMenuOverlay = (function (_super) {
    __extends(PauseMenuOverlay, _super);
    function PauseMenuOverlay() {
        _super.call(this);
    }
    PauseMenuOverlay.prototype.show = function () {
        TweenMax.pauseAll();
        this.display = new uiLib.PauseMenuGFX();
        _super.prototype.show.call(this);
        Game.inst.paused = true;
        this.initBtns();
    };
    PauseMenuOverlay.prototype.initBtns = function () {
        Btn.initClip(this.display.continueBtn, this, this.hideThis);
        Btn.initClip(this.display.restartBtn, this, this.restartLevel);
        Btn.initClip(this.display.helpBtn, this, this.showHelp);
        Btn.initClip(this.display.quitBtn, this, this.quitGame);
        if (Game.inst.usingExternalFonts()) {
            this.display.pausedScreenTitle.text.font = "50px 'Arial'";
            //(<uiLib.PauseMenuGFX>this.display).pausedScreenTitle.y -= 2;
            this.display.continueBtn.continueText.text.font = "45px 'Arial'";
            this.display.continueBtn.continueText.y -= 12;
            this.display.restartBtn.restartText.text.font = "45px 'Arial'";
            this.display.restartBtn.restartText.y -= 12;
            this.display.helpBtn.helpText.text.font = "45px 'Arial'";
            this.display.helpBtn.helpText.y -= 12;
            this.display.quitBtn.quitText.text.font = "45px 'Arial'";
            this.display.quitBtn.quitText.y -= 12;
        }
        else {
            var title = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.pausedScreenTitle, 900, 100, 65, "center");
            title.setText(copy.pauseScreen.title);
            var cf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.continueBtn.continueText, 380, 37, 35, "right");
            var rf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.restartBtn.restartText, 377, 37, 35, "right");
            var hf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.helpBtn.helpText, 377, 37, 35, "right");
            var qf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id, this.display.quitBtn.quitText, 311, 37, 35, "right");
            cf.setText(copy.pauseScreen.continueBtn);
            rf.setText(copy.pauseScreen.restartBtn);
            hf.setText(copy.pauseScreen.helpBtn);
            qf.setText(copy.pauseScreen.quitBtn);
        }
    };
    PauseMenuOverlay.prototype.hideThis = function (e) {
        if (e === void 0) { e = null; }
        TweenMax.resumeAll();
        this.wipeAllButtons();
        ScreenManager.inst.hideOverlay();
        // super.hideMe(callback, scope);
    };
    PauseMenuOverlay.prototype.wipeAllButtons = function () {
        Btn.wipe(this.display.continueBtn);
        Btn.wipe(this.display.restartBtn);
        Btn.wipe(this.display.helpBtn);
        Btn.wipe(this.display.quitBtn);
    };
    PauseMenuOverlay.prototype.restartLevel = function (e) {
        ScreenManager.inst.showScreen(ScreenManager.inst.gameScreen);
    };
    PauseMenuOverlay.prototype.showHelp = function (e) {
        this.hideThis();
        TweenMax.delayedCall(0.15, ScreenManager.inst.showOverlay, [ScreenManager.inst.instructionsScreen], ScreenManager.inst, false);
        // ScreenManager.inst.showOverlay(ScreenManager.inst.instructionsScreen);
    };
    PauseMenuOverlay.prototype.quitGame = function (e) {
        ScreenManager.inst.showScreen(ScreenManager.inst.startScreen);
    };
    PauseMenuOverlay.prototype.hideMe = function (callback, scope) {
        Game.inst.paused = false;
        this.wipeAllButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    return PauseMenuOverlay;
})(OverlayBase);
/// <reference path="ScreenBase.ts" />
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen() {
        _super.call(this);
    }
    StartScreen.prototype.show = function () {
        this.display = new uiLib.StartScreenGFX();
        /* var tf = FontManager.inst.makeTextField(FontManager.inst.boudoir_id,(<uiLib.StartScreenGFX>this.display).stsTitle, 900, 400, 75, "center");
         tf.x = 0
         tf.setText("Shaun the Sheep's APP HAZARD");*/
        _super.prototype.show.call(this);
        if (this.display.startBtn.getBounds() == null) {
            this.display.startBtn.setBounds(-217 / 2, -217 / 2, 217, 217);
        }
        Btn.initClip(this.display.startBtn, this, this.gotoLevelSelect, null, true, true);
        Btn.initClip(this.display.socialBtns.facebookBtn, SocialLinks.inst, SocialLinks.inst.shareViaFacebook, "start screen");
        Btn.initClip(this.display.socialBtns.twitterBtn, SocialLinks.inst, SocialLinks.inst.shareViaTwitter, "start screen");
        Btn.initClip(this.display.socialBtns.googlePlusBtn, SocialLinks.inst, SocialLinks.inst.shareViaGooglePlus, "start screen");
        Btn.initClip(this.display.socialBtns.pinterestBtn, SocialLinks.inst, SocialLinks.inst.shareViaPinterest, "start screen");
        Btn.initClip(this.display.siteLink, SocialLinks.inst, SocialLinks.inst.gotoSTS, "start screen");
    };
    StartScreen.prototype.gotoLevelSelect = function (e) {
        SoundManager.inst.initializeSounds();
        ScreenManager.inst.showScreen(ScreenManager.inst.levelSelect);
    };
    StartScreen.prototype.wipeButtons = function () {
        try {
            Btn.wipe(this.display.startBtn);
        }
        catch (e) {
        }
    };
    StartScreen.prototype.hideMe = function (callback, scope) {
        this.wipeButtons();
        _super.prototype.hideMe.call(this, callback, scope);
        this.display = null;
    };
    StartScreen.member = ScreenBase.member;
    return StartScreen;
})(ScreenBase);
var Sheep = (function (_super) {
    __extends(Sheep, _super);
    function Sheep(body, sprite, type) {
        if (type === void 0) { type = SheepTypes.HANGER; }
        _super.call(this, body, sprite);
        this.listenForDoubleTap = false;
        this.pixiScale = 0.96;
        this.beingStoodOn = false;
        this.isInPlace = false;
        this.bottomTouchingGround = false;
        /* sprite.on("mousedown", this.mouseDown, this, false);
         sprite.on("pressup", this.mouseUp, this, false);*/
        this.type = type;
        this.body.SetLinearDamping(1);
        this.connectionSlots = [];
        this.hidePointers();
        this.checkSnap();
        this.boundMouseDown = this.mouseDown.bind(this);
        this.boundMouseUp = this.mouseUp.bind(this);
        this.buildPixiSprites();
        this.pixiSprite.interactive = true;
        this.pixiSprite.buttonMode = true;
        // this.sprite.alpha = 0.01;
        this.sprite.visible = false;
        if (this.type == SheepTypes.SWITCHER) {
            this.sprite.scaleY *= 2;
            this.sprite.regY += 25;
        }
        this.sprite.scaleX = this.sprite.scaleY *= 1.2;
    }
    Sheep.prototype.buildPixiSprites = function () {
        this.cantPlaceSprite = PIXI.Sprite.fromFrame("cantPlaceSheep");
        this.cantPlaceSprite.scale.x = 0.73;
        this.cantPlaceSprite.scale.y = 0.73;
        if (Main.inst.useLowResGfx) {
            this.cantPlaceSprite.scale.x *= 2;
            this.cantPlaceSprite.scale.y *= 2;
        }
        this.cantPlaceSprite.visible = false;
        var frames;
        var prefix;
        var waitObj = [];
        if (this.type == SheepTypes.HANGER) {
            prefix = "blockIdle_";
            frames = 3;
            this.isActive = true;
        }
        if (this.type == SheepTypes.BLOCKER) {
            prefix = "stopperIdle_";
            frames = 8;
            waitObj.push({ atFrame: 5, waitFor: Maths.randomInt(30, 50) });
            waitObj.push({ atFrame: 1, waitFor: Maths.randomInt(15, 22) });
            this.isActive = true;
        }
        if (this.type == SheepTypes.SWITCHER) {
            prefix = "mechanicIdle_";
            frames = 4;
            this.isActive = false;
        }
        var sheepTextures = [];
        var i = 1;
        while (i <= frames) {
            var texture = PIXI.Texture.fromFrame(prefix + i.toString() + ".png");
            sheepTextures.push(texture);
            for (var j = 0; j < waitObj.length; j++) {
                var wait = waitObj[j];
                if (wait.atFrame == i) {
                    var k = 0;
                    while (k < wait.waitFor) {
                        sheepTextures.push(texture);
                        k++;
                    }
                }
            }
            i++;
        }
        this.pixiSprite = new PIXI.MovieClip(sheepTextures);
        this.pixiSprite.gotoAndStop(0);
        this.pixiSprite.pivot.x = (this.type != SheepTypes.HANGER) ? 100 : 60;
        this.pixiSprite.pivot.y = (this.type != SheepTypes.HANGER) ? 200 : 67;
        this.pixiSprite.scale.x = (this.type == SheepTypes.HANGER) ? this.pixiScale : this.pixiScale * 1.2;
        this.pixiSprite.scale.y = (this.type == SheepTypes.HANGER) ? this.pixiScale : this.pixiScale * 1.2;
        this.pixiSprite.animationSpeed = 0.3;
        this.pixiSprite.addChild(this.cantPlaceSprite);
        this.addPixiSpritesToLevel();
    };
    Sheep.prototype.addPixiSpritesToLevel = function () {
        if (Main.inst.pixiBridge.level) {
            Main.inst.pixiBridge.level.addChild(this.pixiSprite);
            this.updateDisplaySprite(true);
        }
        else {
            TweenMax.delayedCall(1, this.addPixiSpritesToLevel, null, this, true);
        }
    };
    Sheep.prototype.getBodyAtPoint = function (targetVec) {
        this.bodiesUnderPoint = [];
        Game.inst.world.QueryPoint(this.GetBodyCallback.bind(this), targetVec);
        return this.bodiesUnderPoint;
    };
    Sheep.prototype.GetBodyCallback = function (fixture) {
        var shape = fixture.GetShape();
        var b = fixture.GetBody();
        if (this.body != b) {
            this.bodiesUnderPoint.push(b);
        }
        return true;
    };
    Sheep.prototype.shaunStoodOnMe = function () {
        if (this.state != SheepStates.FLOOR)
            return;
        if (this.beingStoodOn == false) {
            this.doBah();
        }
        this.beingStoodOn = true;
        TweenMax.delayedCall(1, this.checkStoodOn, null, this);
    };
    Sheep.prototype.checkStoodOn = function () {
        var cl = this.body.GetContactList();
        var shaunTouching = false;
        while (cl && cl.contact) {
            if (cl.contact.IsTouching() && cl.other == Game.inst.mainCharacter.body && (cl.contact.GetFixtureA() == Game.inst.mainCharacter.footSensor || cl.contact.GetFixtureB() == Game.inst.mainCharacter.footSensor)) {
                shaunTouching = true;
                break;
            }
            cl = cl.next;
        }
        if (shaunTouching == false) {
            this.beingStoodOn = false;
        }
        else {
            TweenMax.delayedCall(1, this.checkStoodOn, null, this, true);
        }
    };
    Sheep.prototype.update = function (forceEdit) {
        if (forceEdit === void 0) { forceEdit = false; }
        if (this.state == SheepStates.ABOUT_TO_EDIT) {
            if (this.type == SheepTypes.SWITCHER)
                return;
            this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
            var stagePos = new createjs.Point(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
            if (Maths.distanceSquared(stagePos.x, stagePos.y, this.aboutToEditMouseStart.x, this.aboutToEditMouseStart.y) > Game.inst.gridSize || forceEdit) {
                if (this.state != SheepStates.EDIT) {
                    this.destroyAllJoints();
                    this.connectionSlots = [];
                    this.hidePointers();
                    this.state = SheepStates.EDIT;
                    this.body.SetType(b2Dynamics.b2Body.b2_dynamicBody);
                    this.body.GetFixtureList().SetSensor(true);
                }
            }
        }
        if (this.state == SheepStates.EDIT) {
            if (this.type == SheepTypes.SWITCHER) {
                this.isValidPosition = true;
                this.checkSnap();
                this.showPointers();
                this.updateDisplaySprite();
                return;
            }
            this.isInPlace = false;
            var jl = this.body.GetJointList();
            if (jl) {
                this.destroyAllJoints();
            }
            if (Main.inst.pixiBridge.level.getChildAt(Main.inst.pixiBridge.level.children.length - 1) != this.pixiSprite) {
                Main.inst.pixiBridge.level.addChild(this.pixiSprite);
            }
            this.isActive = false;
            this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
            var mousePos;
            if (createjs.Touch.isSupported()) {
                mousePos = Game.inst.levels.globalToLocal(Main.inst.stage.mouseX, Main.inst.stage.mouseY - ((Game.inst.gridSize) + (Game.inst.gridSize * ((2) / Game.inst.levels.scaleX))));
            }
            else {
                mousePos = Game.inst.levels.globalToLocal(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
            }
            var mouseVec2 = b2Math.b2Vec2.Make(Game.inst.px2m(mousePos.x), Game.inst.px2m(mousePos.y));
            var mouseToBodyVec2 = mouseVec2.Copy();
            mouseToBodyVec2.Subtract(this.body.GetPosition());
            var mouseTooFar = (mouseToBodyVec2.LengthSquared() > Game.inst.px2m(10));
            if (mouseTooFar)
                this.lastSnappedPos = null;
            this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
            this.body.SetPosition(mouseVec2.Copy());
            var cl = this.body.GetContactList();
            var setPos = false;
            this.isValidPosition = true;
            while (cl && cl.contact && mouseTooFar == false) {
                var anchors = this.getAnchors(cl.other);
                var slot = this.getSlot(anchors[0].x, anchors[0].y);
                if (cl.other.GetUserData().isSheep && cl.other.GetUserData()["controller"].type == SheepTypes.HANGER) {
                    var otheSheepClass = cl.other.GetUserData()["controller"];
                    var oppositeSlot = this.oppositeSlot(slot);
                    var otherSheepSlot = otheSheepClass.connectionSlots[oppositeSlot];
                    if (otherSheepSlot == null && !isNaN(slot) && !isNaN(oppositeSlot)) {
                        var otherPos = cl.other.GetPosition().Copy();
                        var offset = otherPos;
                        offset.x += anchors[1].x * 2;
                        offset.y += anchors[1].y * 2;
                        this.isValidPosition = true;
                        setPos = true;
                        var bods = this.getBodyAtPoint(offset);
                        while (bods.length > 0) {
                            var bap = bods.pop();
                            if (bap && (bap.GetUserData().isWall || bap.GetUserData().isFloor || bap.GetUserData().isSheep || bap.GetUserData().isShaun)) {
                                this.isValidPosition = false;
                                setPos = false;
                            }
                        }
                    }
                    else {
                        this.isValidPosition = false;
                    }
                    if (this.isValidPosition) {
                        this.body.SetPosition(offset);
                        setPos = true;
                    }
                }
                else if (cl.other.GetUserData().isFloor) {
                    var bodyPos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
                    var spritePos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
                    var spriteVec2 = b2Math.b2Vec2.Make(Game.inst.px2m(spritePos.x), Game.inst.px2m(spritePos.y));
                    this.isValidPosition = true;
                    setPos = false;
                    var bods = this.getBodyAtPoint(spriteVec2);
                    while (bods.length > 0) {
                        var bap = bods.pop();
                        if (bap && (bap.GetUserData().isWall || bap.GetUserData().isFloor || bap.GetUserData().isSheep || bap.GetUserData().isShaun)) {
                            this.isValidPosition = false;
                        }
                    }
                    if (this.isValidPosition) {
                        this.body.SetPosition(spriteVec2);
                        setPos = true;
                        if (this.state == SheepStates.EDIT) {
                            this.lastSnappedPos = spritePos;
                        }
                    }
                    else {
                        if (this.state == SheepStates.EDIT) {
                            this.lastSnappedPos = null;
                        }
                        break;
                    }
                }
                else if (cl.other.GetUserData().isSkyHook && cl.contact.IsTouching()) {
                    this.isValidPosition = true;
                    this.body.SetPosition(cl.other.GetPosition().Copy());
                    setPos = true;
                }
                else if (cl.other.GetUserData().isDeath && cl.contact.IsTouching()) {
                    this.isValidPosition = false;
                    break;
                }
                cl = cl.next;
            }
            if (this.isValidPosTest() == false) {
                this.isValidPosition = false;
            }
            if (this.cantPlaceSprite) {
                if (this.isValidPosition) {
                    this.cantPlaceSprite.visible = false;
                }
                else {
                    if (this.type == SheepTypes.BLOCKER) {
                        this.cantPlaceSprite.position.x = 60;
                        this.cantPlaceSprite.position.y = 100;
                    }
                    if (this.type == SheepTypes.SWITCHER) {
                        this.cantPlaceSprite.position.x = 60;
                        this.cantPlaceSprite.position.y = 100;
                    }
                    this.cantPlaceSprite.visible = true;
                }
            }
            if (setPos == false && this.isValidPosition) {
                this.body.SetPosition(mouseVec2);
                Game.inst.checkCamDrag(mousePos);
            }
        }
        else {
            // if (this.type == SheepTypes.SWITCHER) return;
            this.isValidPosition = true;
            var bodyPos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
            var spritePos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
            var spriteVec2 = b2Math.b2Vec2.Make(Game.inst.px2m(spritePos.x), Game.inst.px2m(spritePos.y));
            this.isValidPosition = true;
            setPos = false;
            var bods = this.getBodyAtPoint(spriteVec2);
            while (bods.length > 0) {
                var bap = bods.pop();
                if (bap && (bap.GetUserData().isWall || bap.GetUserData().isFloor || bap.GetUserData().isSheep || bap.GetUserData().isShaun)) {
                    this.isValidPosition = false;
                    this.lastSnappedPos = null;
                }
            }
            if (this.isValidPosition) {
                this.checkSnap();
            }
            this.showPointers();
            var cl = this.body.GetContactList();
            while (cl && cl.contact) {
                if (cl.other.GetUserData().isDeath && cl.contact.IsTouching() && this.state == SheepStates.FLOOR) {
                    Game.inst.sheepManager.disposeSheep(this);
                    break;
                }
                cl = cl.next;
            }
        }
        this.updateDisplaySprite();
    };
    Sheep.prototype.isValidPosTest = function () {
        var spritePos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
        var spriteVec2 = b2Math.b2Vec2.Make(Game.inst.px2m(spritePos.x), Game.inst.px2m(spritePos.y));
        var toReturn = true;
        var bods = this.getBodyAtPoint(spriteVec2);
        while (bods.length > 0) {
            var bap = bods.pop();
            if (bap && (bap.GetUserData().isWall || bap.GetUserData().isFloor || bap.GetUserData().isSheep || bap.GetUserData().isShaun)) {
                toReturn = false;
            }
        }
        return toReturn;
    };
    Sheep.prototype.updateDisplaySprite = function (immediate) {
        if (immediate === void 0) { immediate = false; }
        var multiplyer = (immediate) ? 1 : 0.3;
        if (this.pixiSprite) {
            this.pixiSprite.position.x += ((this.sprite.x / CjsPixiBridge.cjs2PIXI) - this.pixiSprite.position.x) * multiplyer;
            this.pixiSprite.position.y += ((this.sprite.y / CjsPixiBridge.cjs2PIXI) - this.pixiSprite.position.y) * multiplyer;
            if (this.state == SheepStates.FLOOR) {
                if (this.pixiSprite.playing == false) {
                    this.pixiSprite.play();
                }
                if (this.type == SheepTypes.SWITCHER) {
                    this.pixiSprite.animationSpeed = 0.01;
                    if (this.isActive == true && this.state == SheepStates.FLOOR) {
                        if (this.pixiSprite.currentFrame > 3 || this.pixiSprite.currentFrame < 2) {
                            this.pixiSprite.gotoAndPlay(2);
                            if (this.mechanicSoundPlaying == null) {
                                this.mechanicSoundPlaying = createjs.Sound.play(SoundManager.inst.mechanic2, createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 1, 0);
                            }
                        }
                    }
                    else {
                        if (this.mechanicSoundPlaying) {
                            this.mechanicSoundPlaying.stop();
                            this.mechanicSoundPlaying = null;
                        }
                        if (this.pixiSprite.currentFrame > 1) {
                            this.pixiSprite.gotoAndPlay(0);
                        }
                    }
                }
                if (this.type == SheepTypes.HANGER) {
                    this.pixiSprite.animationSpeed = 0.01;
                    if (this.beingStoodOn == false) {
                        if (this.pixiSprite.currentFrame > 1) {
                            this.pixiSprite.gotoAndPlay(0);
                        }
                    }
                    else {
                        this.pixiSprite.gotoAndStop(2);
                    }
                }
            }
            else if (this.state == SheepStates.EDIT) {
                if (this.pixiSprite.playing == true) {
                    this.pixiSprite.gotoAndStop(0);
                }
                if (this.mechanicSoundPlaying) {
                    this.mechanicSoundPlaying.stop();
                    this.mechanicSoundPlaying = null;
                    createjs.Sound.play(SoundManager.inst.mechanic_deactivate);
                }
            }
        }
    };
    Sheep.prototype.doBah = function () {
        if (!this.bahNoise || this.bahNoise.playState != createjs.Sound.PLAY_SUCCEEDED) {
            this.bahNoise = createjs.Sound.play(Maths.randomElement([SoundManager.inst.sheep_baa1, SoundManager.inst.sheep_baa2, SoundManager.inst.sheep_baa3, SoundManager.inst.sheep_baa4, SoundManager.inst.sheep_baa5, SoundManager.inst.sheep_baa6, SoundManager.inst.sheep_baa7, SoundManager.inst.sheep_baa8]));
            this.bahNoise.addEventListener("complete", this.baahComplete.bind(this));
        }
    };
    Sheep.prototype.baahComplete = function (evt) {
        evt.remove();
        this.bahNoise = null;
    };
    Sheep.prototype.mouseUp = function (evt) {
        if (evt === void 0) { evt = null; }
        if (this.type == SheepTypes.SWITCHER) {
            this.isActive = false;
            this.state = SheepStates.FLOOR;
            Game.inst.sheepManager.currentSwitchActive = null;
            return;
        }
        Game.inst.sheepManager.stopSheepEdit();
    };
    Sheep.prototype.mouseDown = function (evt) {
        if (evt === void 0) { evt = null; }
        if (this.type == SheepTypes.SWITCHER) {
            this.isActive = true;
            this.state = SheepStates.FLOOR;
            Game.inst.sheepManager.currentSwitchActive = this;
            return;
        }
        if (this.listenForDoubleTap) {
            this.doubleClick(evt);
        }
        else {
            this.listenForDoubleTap = true;
            TweenMax.delayedCall(0.5, this.stopListenForDoubleTap, null, this);
            Game.inst.sheepManager.startSheepEdit(this);
        }
    };
    Sheep.prototype.doubleClick = function (evt) {
        Game.inst.sheepManager.disposeSheep(this);
    };
    Sheep.prototype.stopListenForDoubleTap = function () {
        this.listenForDoubleTap = false;
    };
    Sheep.prototype.edit = function () {
        if (this.state != SheepStates.ABOUT_TO_EDIT) {
            this.lastGameState = this.state;
            this.state = SheepStates.ABOUT_TO_EDIT;
            this.aboutToEditMouseStart = new createjs.Point(Main.inst.stage.mouseX, Main.inst.stage.mouseY);
        }
    };
    Sheep.prototype.destroyAllJoints = function () {
        var je = this.body.GetJointList();
        while (je) {
            var oj = je;
            oj.other.GetUserData()["controller"].removeSheepSlot(this);
            this.removeSheepSlot(oj.other.GetUserData()["controller"]);
            Game.inst.world.DestroyJoint(oj.joint);
            je = je.next;
        }
    };
    Sheep.prototype.stopEdit = function () {
        if (this.type == SheepTypes.SWITCHER) {
            this.isActive = false;
            return;
        }
        if (this.state == SheepStates.EDIT || this.state == SheepStates.ABOUT_TO_EDIT) {
            if (this.isValidPosition == false) {
                Game.inst.sheepManager.disposeSheep(this);
            }
            else {
                this.state = SheepStates.FLOOR;
                // this.body.SetType(b2Dynamics.b2Body.b2_dynamicBody);
                this.body.GetFixtureList().SetSensor(false);
                this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
            }
        }
    };
    Sheep.prototype.makeKinematic = function () {
        TweenMax.killDelayedCallsTo(this.makeKinematic);
        this.body.SetType(b2Dynamics.b2Body.b2_kinematicBody);
        this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
    };
    Sheep.prototype.checkSnap = function () {
        if (this.state == SheepStates.EDIT) {
            console.log("Edit");
            this.isInPlace = false;
            return;
        }
        // TweenMax.killDelayedCallsTo(this.checkSnap);
        var cl = this.body.GetContactList();
        this.touchingGround = false;
        var skyHook;
        var touchingList = [];
        while (cl) {
            if (cl.contact.IsTouching() == false && this.lastSnappedPos == null) {
                cl = cl.next;
                continue;
            }
            if (cl.other.GetUserData().isFloor || this.lastSnappedPos) {
                this.touchingGround = true;
            }
            else if (cl.other.GetUserData().isSkyHook) {
                this.touchingGround = true;
                skyHook = cl.other;
            }
            if (cl.other.GetUserData().isHanger) {
                var doAdd = true;
                var je = this.body.GetJointList();
                while (je) {
                    if (je.other == cl.other) {
                        doAdd = false;
                    }
                    je = je.next;
                }
                if (doAdd) {
                    touchingList.push(cl.other);
                }
            }
            cl = cl.next;
        }
        if (this.touchingGround || touchingList.length > 0) {
            var bodyPos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
            var spritePos = new createjs.Point(Maths.roundToNearest(this.sprite.x, Game.inst.gridSize), Maths.roundToNearest(this.sprite.y, Game.inst.gridSize));
            var spriteVec2 = b2Math.b2Vec2.Make(Game.inst.px2m(spritePos.x), Game.inst.px2m(spritePos.y));
            if (skyHook) {
                spriteVec2 = skyHook.GetPosition().Copy();
            }
            var jointDef;
            if (this.touchingGround) {
                if (this.type != SheepTypes.SWITCHER) {
                    var spriteBottom = b2Math.b2Vec2.Make(Game.inst.px2m(spritePos.x), Game.inst.px2m(spritePos.y - Game.inst.gridSize));
                    var allBodiesUnderSheep = this.getBodyAtPoint(spriteBottom);
                    if (allBodiesUnderSheep.length != 0) {
                        this.body.SetType(b2Dynamics.b2Body.b2_kinematicBody);
                    }
                }
                if (this.isInPlace == false) {
                    createjs.Sound.play(SoundManager.inst.bubble_pop_05);
                    this.isInPlace = true;
                }
                this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
                this.body.SetPosition(spriteVec2.Copy());
                Main.inst.pixiBridge.level.addChild(this.pixiSprite);
            }
            if (this.type == SheepTypes.HANGER) {
                while (touchingList.length > 0) {
                    var otherSheepItem = touchingList.shift();
                    if (otherSheepItem.GetUserData()["controller"].state == SheepStates.EDIT || otherSheepItem.GetUserData()["controller"].state == SheepStates.ABOUT_TO_EDIT) {
                        continue;
                    }
                    //touchingList = [];
                    var anchors = this.getAnchors(otherSheepItem);
                    var xAnchor1 = anchors[0].x;
                    var yAnchor1 = anchors[0].y;
                    var xAnchor2 = anchors[1].x;
                    var yAnchor2 = anchors[1].y;
                    if (this.type == SheepTypes.HANGER) {
                        this.body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
                        var slot = this.getSlot(xAnchor1, yAnchor1);
                        var opp = this.oppositeSlot(slot);
                        var newJointSlot;
                        if (this.connectionSlots[slot] || otherSheepItem.GetUserData()["controller"].connectionSlots[opp]) {
                            if (this.connectionSlots[slot]) {
                                this.connectionSlots[slot].body.SetPosition(this.body.GetWorldPoint(b2Math.b2Vec2.Make(xAnchor1 * 2, yAnchor1 * 2)));
                                this.connectionSlots[slot].body.SetLinearVelocity(b2Math.b2Vec2.Make(0, 0));
                            }
                            continue;
                        }
                        this.connectionSlots[slot] = otherSheepItem.GetUserData()["controller"];
                        otherSheepItem.GetUserData()["controller"].connectionSlots[opp] = this;
                        jointDef = new b2Joints.b2DistanceJointDef();
                        jointDef.bodyA = this.body;
                        jointDef.bodyB = otherSheepItem;
                        jointDef.frequencyHz = 127;
                        jointDef.dampingRatio = 100;
                        jointDef.localAnchorA = b2Math.b2Vec2.Make(xAnchor1, yAnchor1);
                        jointDef.localAnchorB = b2Math.b2Vec2.Make(xAnchor2, yAnchor2);
                        jointDef.length = 0;
                        jointDef.collideConnected = true;
                        Game.inst.world.CreateJoint(jointDef);
                        createjs.Sound.play(SoundManager.inst.bubble_pop_05);
                        Main.inst.pixiBridge.level.addChild(this.pixiSprite);
                    }
                }
            }
        }
    };
    Sheep.prototype.getAnchors = function (otherSheepItem) {
        var dir = otherSheepItem.GetPosition().Copy();
        dir.Subtract(this.body.GetPosition().Copy());
        var xAnchor1;
        var yAnchor1;
        var xAnchor2;
        var yAnchor2;
        var gs = Game.inst.gridSize / 2;
        var xAnchor1 = gs;
        var yAnchor1 = gs;
        var xAnchor2 = -gs;
        var yAnchor2 = -gs;
        if (Game.inst.m2px(dir.x) >= gs) {
            xAnchor1 = Game.inst.px2m(gs);
            xAnchor2 = Game.inst.px2m(-gs);
        }
        else if (Game.inst.m2px(dir.x) < gs && Game.inst.m2px(dir.x) > -gs) {
            xAnchor1 = 0;
            xAnchor2 = 0;
        }
        else if (Game.inst.m2px(dir.x) <= -gs) {
            xAnchor1 = Game.inst.px2m(-gs);
            xAnchor2 = Game.inst.px2m(gs);
        }
        if (Game.inst.m2px(dir.y) >= gs) {
            yAnchor1 = Game.inst.px2m(gs);
            yAnchor2 = Game.inst.px2m(-gs);
        }
        else if (Game.inst.m2px(dir.y) < gs && Game.inst.m2px(dir.y) > -gs) {
            yAnchor1 = 0;
            yAnchor2 = 0;
        }
        else if (Game.inst.m2px(dir.y) <= -gs) {
            yAnchor1 = Game.inst.px2m(-gs);
            yAnchor2 = Game.inst.px2m(gs);
        }
        return [new b2Math.b2Vec2(xAnchor1, yAnchor1), new b2Math.b2Vec2(xAnchor2, yAnchor2)];
    };
    Sheep.prototype.hidePointers = function () {
        if (this.type == SheepTypes.HANGER) {
            var tB = this.sprite;
            tB.t.visible = false;
            tB.tl.visible = false;
            tB.tr.visible = false;
            tB.l.visible = false;
            tB.r.visible = false;
            tB.b.visible = false;
            tB.bl.visible = false;
            tB.br.visible = false;
        }
    };
    Sheep.prototype.showPointers = function () {
        this.hidePointers();
        var tB = this.sprite;
        for (var j = 0; j < this.connectionSlots.length; j++) {
            if (this.connectionSlots[j]) {
                this.sprite[SheepSlots[j].toLowerCase()].visible = true;
            }
        }
        this.updateExtends();
    };
    Sheep.prototype.updateExtends = function () {
        if (this.type == SheepTypes.HANGER) {
            var tB = this.sprite;
        }
    };
    Sheep.prototype.getSlot = function (xAnchor1, yAnchor1) {
        var slot;
        if (xAnchor1 == 0 && yAnchor1 < 0) {
            slot = SheepSlots.T;
        }
        if (xAnchor1 < 0 && yAnchor1 < 0) {
            slot = SheepSlots.TL;
        }
        if (xAnchor1 > 0 && yAnchor1 < 0) {
            slot = SheepSlots.TR;
        }
        if (xAnchor1 < 0 && yAnchor1 == 0) {
            slot = SheepSlots.L;
        }
        if (xAnchor1 > 0 && yAnchor1 == 0) {
            slot = SheepSlots.R;
        }
        if (xAnchor1 == 0 && yAnchor1 > 0) {
            slot = SheepSlots.B;
        }
        if (xAnchor1 < 0 && yAnchor1 > 0) {
            slot = SheepSlots.BL;
        }
        if (xAnchor1 > 0 && yAnchor1 > 0) {
            slot = SheepSlots.BR;
        }
        return slot;
    };
    Sheep.prototype.oppositeSlot = function (slot) {
        return (slot + 4) % 8;
    };
    Sheep.prototype.removeSheepSlot = function (sheep) {
        for (var j = 0; j < this.connectionSlots.length; j++) {
            if (this.connectionSlots[j] == sheep) {
                this.connectionSlots[j] = null;
            }
        }
    };
    /*hasAnySlots():Array<Sheep>
    {
        var toReturn: Array<Sheep> = null;
        for (var j: number = 0; j < this.connectionSlots.length; j++)
        {
            if (this.connectionSlots[j] != null)
            {
                if (!toReturn) toReturn = [];
                toReturn.push(this.ctoReturnonnectionSlots[j])
           }
        }

        return toReturn;

    }*/
    Sheep.prototype.dispose = function () {
        this.destroyAllJoints();
        if (this.body) {
            this.body.SetUserData(null);
            if (this.body.GetWorld())
                this.body.GetWorld().DestroyBody(this.body);
        }
        if (this.sprite) {
            this.sprite["body"] = null;
            this.sprite["controller"] = null;
            if (this.sprite.parent)
                this.sprite.parent.removeChild(this.sprite);
        }
        if (this.mechanicSoundPlaying) {
            this.mechanicSoundPlaying.stop();
            this.mechanicSoundPlaying = null;
        }
        if (this.pixiSprite) {
            if (this.pixiSprite.parent)
                this.pixiSprite.parent.removeChild(this.pixiSprite);
            this.pixiSprite = null;
        }
        this.myJoint = null;
    };
    return Sheep;
})(B2dBodySprite);
var SheepStates;
(function (SheepStates) {
    SheepStates[SheepStates["EDIT"] = 0] = "EDIT";
    SheepStates[SheepStates["FLOOR"] = 1] = "FLOOR";
    SheepStates[SheepStates["ABOUT_TO_EDIT"] = 2] = "ABOUT_TO_EDIT";
})(SheepStates || (SheepStates = {}));
var SheepTypes;
(function (SheepTypes) {
    SheepTypes[SheepTypes["HANGER"] = 0] = "HANGER";
    SheepTypes[SheepTypes["BLOCKER"] = 1] = "BLOCKER";
    SheepTypes[SheepTypes["SWITCHER"] = 2] = "SWITCHER";
})(SheepTypes || (SheepTypes = {}));
var SheepSlots;
(function (SheepSlots) {
    SheepSlots[SheepSlots["TL"] = 0] = "TL";
    SheepSlots[SheepSlots["T"] = 1] = "T";
    SheepSlots[SheepSlots["TR"] = 2] = "TR";
    SheepSlots[SheepSlots["R"] = 3] = "R";
    SheepSlots[SheepSlots["BR"] = 4] = "BR";
    SheepSlots[SheepSlots["B"] = 5] = "B";
    SheepSlots[SheepSlots["BL"] = 6] = "BL";
    SheepSlots[SheepSlots["L"] = 7] = "L";
})(SheepSlots || (SheepSlots = {}));
var ExtendNames;
(function (ExtendNames) {
    ExtendNames[ExtendNames["topLeft"] = 0] = "topLeft";
    ExtendNames[ExtendNames["top"] = 1] = "top";
    ExtendNames[ExtendNames["topRight"] = 2] = "topRight";
    ExtendNames[ExtendNames["right"] = 3] = "right";
    ExtendNames[ExtendNames["bottomRight"] = 4] = "bottomRight";
    ExtendNames[ExtendNames["bottom"] = 5] = "bottom";
    ExtendNames[ExtendNames["bottomLeft"] = 6] = "bottomLeft";
    ExtendNames[ExtendNames["left"] = 7] = "left";
})(ExtendNames || (ExtendNames = {}));
var Btn = (function () {
    function Btn() {
    }
    // Call this first to set up class
    Btn.initClass = function (stageReference) {
        this.buttonRefs = {};
        this.disabledGroups = [];
        this.stageRef = stageReference;
        this.allBtns = [];
        /*  if (createjs.Touch.isSupported())
          {
          
          }
          else
          {
              (<HTMLCanvasElement>this.stageRef.canvas).addEventListener("mousedown", this.doMouseDownTest.bind(this));
          }
          //this.stageRef.addEventListener("stagemousedown", this.doMouseDownTest.bind(this));
          if (createjs.Touch.isSupported() != true)
          {
           
          }*/
        createjs.Touch.isSupported();
        this.stageRef.canvas.addEventListener("touchstart", this.doMouseDownTest.bind(this));
        this.stageRef.canvas.addEventListener("mousedown", this.doMouseDownTest.bind(this));
        this.stageRef.addEventListener("stagemousemove", this.rollOverTest.bind(this));
    };
    // Prepare a button or clip in a self-cleaning-up way
    // Can we use inline functions with this? Do they get garbage collected?
    Btn.init = function (button, scope, onRelease) {
        if (onRelease === void 0) { onRelease = null; }
        this.initClip(button, scope, onRelease);
        //if (button is SimpleButton) initBtn(SimpleButton(button), onRelease, onRollOver, onRollOut, ignoreDefaults, priority);
    };
    Btn.doMouseDownTest = function (e) {
        if ((e.timeStamp - this.lastClickTime) < 100)
            return;
        this.lastClickTime = e.timeStamp;
        //if (e.nativeEvent.type == "touchstart")
        for (var i = 0; i < this.allBtns.length; i++) {
            var btObj = this.allBtns[i];
            var myStage = btObj.button.getStage();
            if (btObj.enabled == true && myStage && this.mouseEnabled(btObj.button) && btObj.button.visible && btObj.button.parent && btObj.button.visible == true) {
                if (this.doHitTest(btObj)) {
                    this.doClick(btObj, e);
                    break;
                }
            }
        }
    };
    Btn.mouseEnabled = function (clip) {
        var p = clip.parent;
        while (p != null) {
            if (p.mouseChildren == false) {
                return false;
            }
            p = p.parent;
        }
        return true;
    };
    Btn.rollOverTest = function (e) {
        /* if (createjs.Touch.isSupported() != true)
         {*/
        for (var i = 0; i < this.allBtns.length; i++) {
            var btObj = this.allBtns[i];
            var myStage = btObj.button.getStage();
            if (btObj && btObj.enabled == true && myStage && this.mouseEnabled(btObj.button) && btObj.button.visible && btObj.button.parent && btObj.button.visible == true) {
                if (btObj.defaultRollOver) {
                    if (this.doHitTest(btObj)) {
                        if (btObj != this.rolledOver) {
                            TweenMax.killTweensOf(btObj.button);
                            if (this.rolledOver != null) {
                                TweenMax.to(this.rolledOver.button, 0.2, { scaleX: 1, scaleY: 1 });
                            }
                            document.body.style.cursor = "pointer";
                            TweenMax.to(btObj.button, 0.8, { scaleX: 1.2, scaleY: 1.2, ease: Elastic.easeOut });
                            this.rolledOver = btObj;
                        }
                    }
                    else {
                        if (this.rolledOver == btObj) {
                            TweenMax.killTweensOf(btObj.button);
                            document.body.style.cursor = "default";
                            TweenMax.to(btObj.button, 0.2, { scaleX: 1, scaleY: 1 });
                            this.rolledOver = null;
                        }
                    }
                }
            }
        }
        //   }
    };
    Btn.doHitTest = function (btObj) {
        // btObj.button.boi(null);
        var boundsRect = btObj.button.getTransformedBounds();
        if (boundsRect == null || btObj.button.parent == null) {
            return false;
        }
        var tl = btObj.button.parent.localToGlobal(boundsRect.x, boundsRect.y);
        var bl = btObj.button.parent.localToGlobal(boundsRect.x + boundsRect.width, boundsRect.y + boundsRect.height);
        var wh = new createjs.Point(bl.x - tl.x, bl.y - tl.y);
        var transformedBoundsRect = new createjs.Rectangle(tl.x, tl.y, wh.x, wh.y);
        var mX = Main.inst.stage.mouseX;
        var mY = Main.inst.stage.mouseY;
        if (mX > transformedBoundsRect.x &&
            mX < transformedBoundsRect.width + transformedBoundsRect.x &&
            mY > transformedBoundsRect.y &&
            mY < transformedBoundsRect.y + transformedBoundsRect.height) {
            return true;
        }
        return false;
    };
    Btn.doClick = function (btnObj, ne) {
        var e = new createjs.MouseEvent(ne.type, ne.bubbles, ne.cancelable, Main.inst.stage.mouseX, Main.inst.stage.mouseY, ne, 0, true, Main.inst.stage.mouseX, Main.inst.stage.mouseY);
        e.currentTarget = btnObj.button;
        if (btnObj.defaultSound)
            createjs.Sound.play(SoundManager.inst.click);
        if (btnObj.data) {
            btnObj.onRelease.call(btnObj.scope, e, btnObj.data);
        }
        else {
            btnObj.onRelease.call(btnObj.scope, e);
        }
        TweenMax.killTweensOf(e.currentTarget);
        TweenMax.to(e.currentTarget, 0.1, { scaleX: 1, scaleY: 1 });
        if (btnObj.doOnce) {
            Btn.wipe(btnObj.button);
        }
    };
    // Prepare a movieclip to be a button in a self-cleaning-up way
    Btn.initClip = function (button, scope, onRelease, data, doOnce, defaultRollOver, defaultSound) {
        if (onRelease === void 0) { onRelease = null; }
        if (data === void 0) { data = null; }
        if (doOnce === void 0) { doOnce = false; }
        if (defaultRollOver === void 0) { defaultRollOver = true; }
        if (defaultSound === void 0) { defaultSound = true; }
        if (this.buttonRefs)
            this.buttonRefs[button.name] = 1;
        for (var i = 0; i < this.allBtns.length; i++) {
            if (this.allBtns[i].button == button) {
                this.allBtns.splice(i, 1);
                break;
            }
        }
        this.allBtns.push(new BtnClass(button, scope, onRelease, data, doOnce, defaultRollOver, defaultSound));
        /*this.allBtns.sort(function (a: BtnClass, b: BtnClass): number
        {if(a.button,parent) }*/
    };
    // Wipe a button or clip clean of given handlers
    Btn.wipe = function (button) {
        for (var i = 0; i < this.allBtns.length; i++) {
            if (this.allBtns[i].button == button) {
                var removed = this.allBtns.splice(i, 1);
                for (var j; j < this.allBtns.length; j++) {
                    removed[j].dispose();
                }
                break;
            }
        }
    };
    // Call this before showing a dialogue box, and it'll disable
    // all existing buttons, tabindicies etc. These get pushed onto
    // a simple stack that can be re-enabled with enableButtons() later.
    // You can nest these calls for multiple dialogue boxes.
    //
    // You can optionally pass an array of buttons that should be ignored.
    Btn.disableButtons = function (array) {
        for (var i = 0; i < array.length; i++) {
            Btn.disableButton(array[i]);
        }
    };
    Btn.disableButton = function (item) {
        for (var i = 0; i < this.allBtns.length; i++) {
            if (this.allBtns[i].button == item) {
                this.allBtns[i].enabled = false;
                break;
            }
        }
        //item.mouseChildren = false;
    };
    Btn.enableButtons = function (array) {
        for (var i = 0; i < array.length; i++) {
            Btn.enableButton(array[i]);
        }
    };
    Btn.enableButton = function (item) {
        for (var i = 0; i < this.allBtns.length; i++) {
            if (this.allBtns[i].button == item) {
                this.allBtns[i].enabled = true;
                break;
            }
        }
    };
    Btn.lastClickTime = 0;
    // Default actions for button rollover/rollout
    // Define these before creating buttons and they'll all get these
    // actions by default. Override by setting manually, or by setting
    // ignoreDefaults flag when creating your buttons.
    //
    // DefaultClick is added in addition to whatever onRelease is specified
    //
    Btn.defaultRollOver = null;
    Btn.defaultRollOut = null;
    Btn.defaultInit = null;
    Btn.defaultClick = null;
    return Btn;
})();
var BtnClass = (function () {
    function BtnClass(button, scope, onRelease, data, doOnce, defaultRollOver, defaultSound) {
        if (onRelease === void 0) { onRelease = null; }
        if (data === void 0) { data = null; }
        if (doOnce === void 0) { doOnce = false; }
        if (defaultRollOver === void 0) { defaultRollOver = true; }
        if (defaultSound === void 0) { defaultSound = true; }
        this.enabled = true;
        this.button = button;
        this.scope = scope;
        this.onRelease = onRelease;
        this.data = data;
        this.doOnce = doOnce;
        this.defaultRollOver = defaultRollOver;
        this.defaultSound = defaultSound;
        this.enabled = true;
    }
    BtnClass.prototype.dispose = function () {
        this.button = null;
        this.scope = null;
        this.onRelease = null;
        this.data = null;
        this.doOnce = null;
        this.defaultRollOver = null;
        this.defaultSound = null;
    };
    return BtnClass;
})();
var FontManager = (function () {
    function FontManager() {
        this.oklahoma_id = "oklahoma_deputy";
        this.boudoir_id = "boudoir";
        if (!FontManager.inst) {
            FontManager.inst = this;
        }
    }
    FontManager.prototype.init = function () {
        this.oklahoma = new BitmapFont(images['fontmaps/oklahoma_deputy.png'], xmlObjects['fontmaps/oklahoma_deputy.xml'], 75);
        this.boudoir = new BitmapFont(images['fontmaps/boudoir.png'], xmlObjects['fontmaps/boudoir.xml'], 63);
        BitmapTextField.registerBitmapFont(this.oklahoma, this.oklahoma_id);
        BitmapTextField.registerBitmapFont(this.boudoir, this.boudoir_id);
    };
    FontManager.prototype.makeTextField = function (font, holder, width, height, fontSize, align, yOverride) {
        if (width === void 0) { width = 150; }
        if (height === void 0) { height = 40; }
        if (fontSize === void 0) { fontSize = 75; }
        if (align === void 0) { align = "center"; }
        if (yOverride === void 0) { yOverride = 0; }
        if (holder.getNumChildren() != 0) {
            holder.removeAllChildren();
        }
        var bf = new BitmapTextField(width, height, "0", font, fontSize, 0, 0, align, "top", true);
        bf.x = 0;
        bf.y = yOverride;
        bf.setText("");
        holder.addChild(bf);
        return bf;
    };
    return FontManager;
})();
var LocalisedFontManager = (function () {
    function LocalisedFontManager() {
    }
    LocalisedFontManager.AddLocalisedText = function (x, y, str, container, w, h, fntsz, align) {
        //y += 2;
        //return game.add.text(x,y,str);
        w = w || 234;
        h = h || 48;
        fntsz = fntsz || 42;
        align = align || "center";
        var id = "string" + this.LocalisedTextID;
        this.LocalisedTextID++;
        var rtl = Game.inst.usingExternalFonts();
        ; // window.location.hash == "#ar"; //false;//localisedStringsConfig['LANGUAGE_RIGHTTOLEFT_IN_CSS']['value'] == "true";
        var o = {};
        o.id = id;
        o.bitmapText = FontManager.inst.makeTextField(// IBitmapTextField
        FontManager.inst.boudoir_id, container, w, // w
        h, // h
        fntsz, // font size
        align // align
        );
        o.bitmapText.setText(str);
        o.bitmapText.update = function () {
            //o.bitmapText.updateTransform();
            //    o.updateTransform();
        };
        o.bitmapText.setText = function (s) {
            BitmapTextField.prototype.setText.call(this, s);
            o.setText(s);
        };
        o.bitmapText.setStyle = function (s) {
            BitmapTextField.prototype.setStyle.call(this, s);
            o.setStyle(s);
        };
        o.bitmapText.updateTransform = function () {
            BitmapTextField.prototype.updateTransform.call(this);
            o.updateTransform();
        };
        o.bitmapText.destroy = function () {
            BitmapTextField.prototype.destroy.call(this);
            $('#' + o.id).remove();
            for (var i = 0; i < this.LocalisedTexts.length; i++) {
                if (this.LocalisedTexts[i].id == o.id) {
                    this.LocalisedTexts.splice(i, 1);
                    break;
                }
            }
            console.log('destroy');
        };
        o.bitmapText.alpha = 0.00;
        o.alpha = 1.0;
        o.transitionAlphaModifier = 1.0;
        o.csstext = true;
        o.p = $("<div id='" + id + "' class='localisedString' onclick=\"return false;\">" + str + "</div>").appendTo("#canvasOverlay");
        o.text = str;
        o.p.attr('defaultcolor', "#ffffff");
        //o.width = 0;
        //o.height = 0;
        o.anchor = {
            x: 0,
            y: 0,
            setTo: function (x, y) {
                o.anchor.x = x;
                o.anchor.y = y;
            }
        };
        o.setText = function (s) {
            //o.e.innerHTML = s;
            o.text = s;
            o.updateTransform();
        };
        o.setStyle = function (st) {
            console.error('style');
            console.error(st);
            if (typeof st.fill != 'undefined') {
                o.p.attr('defaultcolor', st.fill);
            }
            if (typeof st['align'] != 'undefined') {
                $('#' + this.id).css('text-align', st['align']);
            }
            if (typeof st.font != 'undefined') {
                $('#' + this.id).css('font', st.font);
            }
            if (typeof st.wordWrap != 'undefined' && st.wordWrap == true && typeof st.wordWrapWidth != 'undefined') {
                $('#' + this.id).css('width', st.wordWrapWidth);
            }
            if (typeof st.lineSpacing != 'undefined') {
                $('#' + this.id).css('line-height', st.lineSpacing);
            }
            if (typeof st['max-height'] != 'undefined') {
                $('#' + this.id).css('max-height', st['max-height']);
                $('#' + this.id).css('overflow-x', 'visible');
                $('#' + this.id).css('overflow-y', 'hidden');
            }
            //$('#blah').css('display', 'inline-block');
            //this.width = parseInt($('#blah').width);
            this.width = $('#' + this.id)[0].clientWidth;
            this.height = $('#' + this.id)[0].clientHeight;
            if (o.bitmapText.inputEnabled) {
                $('#' + this.id).addClass('inputEnabled');
            }
            else {
                $('#' + this.id).css('cursor', "default");
            }
        };
        o.setStageReference = function (s) {
            console.error("added to parent");
            //this.parent.addChild(o.bitmapText);
            o.bitmapText.updateTransform();
            o.updateTransform();
        };
        o.update = function () {
            console.log("localisedString update");
        };
        o.removeStageReference = function (s) {
        };
        o.preUpdate = function () { };
        o.postUpdate = function () { };
        o.updateTransform = function () {
            var canvas = $('canvas');
            // position canvasOverlay the same as canvas.
            $('#canvasOverlay').css("position", "absolute");
            $('#canvasOverlay').css("width", canvas.css("width"));
            $('#canvasOverlay').css("height", canvas.css("height"));
            $('#canvasOverlay').css("margin-left", canvas.css("margin-left"));
            $('#canvasOverlay').css("margin-right", canvas.css("margin-right"));
            $('#canvasOverlay').css("overflow", "hidden");
            var scaleX = 1.0; // / Main.inst.scale.scaleFactor.x;
            scaleX = parseInt(canvas.css("width")) / stageWidth; //750.0;
            var scaleY = 1.0; // / Main.inst.scale.scaleFactor.y;
            scaleY = parseInt(canvas.css("height")) / stageHeight; //500.0;
            var thisX = o.bitmapText.x; //worldPosition.x;
            thisX *= scaleX;
            thisX -= o.bitmapText.regX; //(o.bitmapText.anchor.x * o.bitmapText.width);
            var thisY = o.bitmapText.y; //worldPosition.y;
            thisY *= scaleY;
            thisY -= o.bitmapText.regY; //(o.bitmapText.anchor.y * o.bitmapText.height);
            //console.log('sx: ' + scaleX);
            //console.log('dpr: ' + window.devicePixelRatio);
            //console.log( parseInt(canvas.css("margin-top")) );
            //console.log( o.bitmapText.worldPosition.y );
            //console.log(window.devicePixelRatio);
            //thisX *= window.devicePixelRatio;
            //thisY *= window.devicePixelRatio;
            //console.log("X: " + thisX);
            //console.log("Y: " + thisY);
            //if (o.bitmapText.parent != null) {
            //    thisX += o.bitmapText.parent.x;
            //    thisY += o.bitmapText.parent.y;
            //}
            //console.log("X2: " + thisX);
            //console.log("Y2: " + thisY);
            o.p.html(o.text);
            o.p.css("position", "absolute");
            o.p.css("left", thisX);
            o.p.css("top", thisY);
            o.p.css("transform-origin", (o.bitmapText.regX) + "px " + (o.bitmapText.regY) + "px");
            var colorString = o.p.attr('defaultcolor');
            var red = ((parseInt(colorString.substr(1, 2), 16) / 255.0) * ((o.bitmapText.tint >> 16 & 0xff)));
            var green = ((parseInt(colorString.substr(3, 2), 16) / 255.0) * ((o.bitmapText.tint >> 8 & 0xff)));
            var blue = ((parseInt(colorString.substr(5, 2), 16) / 255.0) * ((o.bitmapText.tint & 0xff)));
            var rgbaColor = "rgb(" + red + "," + green + "," + blue + ")";
            o.p.css('color', rgbaColor);
            var display = (o.bitmapText.visible) ? "block" : "none";
            if (o.bitmapText.parent != null && !o.bitmapText.parent.visible) {
                display = "none";
            }
            o.p.css("display", display);
            o.p.css("opacity", 1.0); //BasicGame.Transitions.getOverlayStringsAlpha(o));
            var localScaleX = o.bitmapText.scaleX; //worldScale.x;
            var localScaleY = o.bitmapText.scaleY; //worldScale.y;
            //if (game.device.desktop) {
            localScaleX *= parseInt(canvas.css("width")) / stageWidth;
            localScaleY *= parseInt(canvas.css("height")) / stageHeight;
            //} else {
            //localScaleX = 1.0;
            //localScaleY = 1.0;
            //localScaleX = scaleX;
            //localScaleY = scaleY;
            //}
            var sc = "scale(" + localScaleX + "," + localScaleY + ")";
            //sc = "";
            o.p.css("-ms-transform", sc); /* IE 9 */
            o.p.css("-webkit-transform", sc); /* Safari */
            o.p.css("transform", sc);
            if (rtl) {
                o.p.attr("dir", "rtl");
            }
            if (typeof o.onmouseup == 'function') {
            }
            //if (o.fullscreen) {
            //    $('#canvasOverlay').css("z-index", 2147483647);
            //    o.p.css("z-index", 2147483647);
            //}
        };
        o._renderWebGL = function () { };
        o._renderCanvas = function () { };
        o.updateTransform();
        this.LocalisedTexts.push(o);
        return o.bitmapText;
    };
    LocalisedFontManager.LocalisedTextID = 0;
    LocalisedFontManager.LocalisedTexts = [];
    return LocalisedFontManager;
})();
;
var JS_vCam = (function (_super) {
    __extends(JS_vCam, _super);
    function JS_vCam() {
        _super.call(this);
        this.sprite = new lib.vCam;
        this.addChild(this.sprite);
    }
    JS_vCam.prototype.init = function (e) {
        if (e === void 0) { e = null; }
        this.visible = false;
        // oldScaleMode = this.getStage();
        //stage.scaleMode = "exactFit";
        this.sW = stageWidth;
        this.sH = stageHeight;
        var bounds_obj = this.getBounds();
        this.camW = stageWidth;
        this.camH = stageHeight;
        this.rp = new createjs.Point(this.x, this.y);
        this.camControl();
        //stage.addChild(bmp);
    };
    JS_vCam.prototype.camControl = function () {
        var event = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            event[_i - 0] = arguments[_i];
        }
        if (this.getStage() == null)
            return;
        this.rp.x = this.x;
        this.rp.y = this.y;
        var h = this.camH * this.scaleY;
        var w = this.camW * this.scaleX;
        var _scaleY = this.sH / h;
        var _scaleX = this.sW / w;
        this.x2 = w / 2 * _scaleX;
        this.y2 = h / 2 * _scaleY;
        this.scaleX2 = _scaleX;
        this.scaleY2 = _scaleY;
        //this.rotation2 = - this.rotation;
    };
    Object.defineProperty(JS_vCam.prototype, "x2", {
        get: function () {
            var lp = this.parent.localToGlobal(this.rp.x, this.rp.y);
            var p = this.parent.parent.globalToLocal(lp.x, lp.y);
            return p.x;
        },
        set: function (value) {
            var lp = this.parent.localToGlobal(this.rp.x, this.rp.y);
            var p = this.parent.parent.globalToLocal(lp.x, lp.y);
            this.parent.x += value - p.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JS_vCam.prototype, "y2", {
        get: function () {
            var lp = this.parent.localToGlobal(this.rp.x, this.rp.y);
            var p = this.parent.parent.globalToLocal(lp.x, lp.y);
            return p.y;
        },
        set: function (value) {
            var lp = this.parent.localToGlobal(this.rp.x, this.rp.y);
            var p = this.parent.parent.globalToLocal(lp.x, lp.y);
            this.parent.y += value - p.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JS_vCam.prototype, "scaleX2", {
        get: function () {
            return this.parent.scaleX;
        },
        set: function (value) {
            this.setProperty2("scaleX", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JS_vCam.prototype, "scaleY2", {
        get: function () {
            return this.parent.scaleY;
        },
        set: function (value) {
            this.setProperty2("scaleY", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JS_vCam.prototype, "rotation2", {
        get: function () {
            return this.parent.rotation;
        },
        set: function (value) {
            this.setProperty2("rotation", value);
        },
        enumerable: true,
        configurable: true
    });
    JS_vCam.prototype.setProperty2 = function (prop, n) {
        var la = this.parent.localToGlobal(this.rp.x, this.rp.y);
        var a = this.parent.parent.globalToLocal(la.x, la.y);
        this.parent[prop] = n;
        var lb = this.parent.localToGlobal(this.rp.x, this.rp.y);
        var b = this.parent.parent.globalToLocal(lb.x, lb.y);
        this.parent.x -= b.x - a.x;
        this.parent.y -= b.y - a.y;
    };
    JS_vCam.prototype.reset = function (e) {
        this.parent.scaleX = 1;
        this.parent.scaleY = 1;
        this.parent.x = 0;
        this.parent.y = 0;
        this.parent.rotation = 0;
        this.parent.visible = true;
    };
    return JS_vCam;
})(createjs.Container);
/* Keys control

Tracks key usage and approximates AS2's Key.isDown() functionality

*/
var Keys = (function () {
    function Keys() {
    }
    // Must call this to set up the class
    Keys.init = function (stageSprite) {
        // Don't    double-initialise
        if (this.initSprite)
            return;
        document.onkeydown = Keys.onKeyDown;
        document.onkeyup = Keys.onKeyUp;
        //            document.onfocusout = Keys.resetCodes;
        // Events. High priority so they occur first
        //stageSprite.getStage().addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown, false, int.MAX_VALUE);
        //stageSprite.stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp, false, int.MAX_VALUE - 1);
        //stageSprite.stage.addEventListener(Event.DEACTIVATE, onUnfocus);
        //stageSprite.stage.addEventListener(Event.ACTIVATE, onFocus);
        // Main.inst.stage.addEventListener("update", Keys.clearFramePressedReleased);
        this.initSprite = stageSprite;
        this.resetCodes();
    };
    Keys.clearFramePressedReleased = function (e) {
        if (e === void 0) { e = null; }
        var j;
        if (Keys.clearFlagPressed) {
            for (j = 0; j < 256; j++) {
                Keys.keycodesJustPressed[j] = false;
            }
            Keys.clearFlagPressed = false;
        }
        if (Keys.clearFlagReleased) {
            for (j = 0; j < 256; j++) {
                Keys.keycodesJustReleased[j] = false;
            }
            Keys.clearFlagReleased = false;
        }
    };
    // Reset all key tracking codes
    Keys.resetCodes = function () {
        this.keycodes = new Array(256);
        for (var j = 0; j < 256; j++)
            Keys.keycodes[j] = false;
    };
    // True if the specified key is down. False otherwise
    Keys.isDownThisFrame = function (key) { return Keys.keycodesJustPressed[key]; };
    Keys.isUpThisFrame = function (key) { return Keys.keycodesJustReleased[key]; };
    Keys.isDown = function (key) { return Keys.keycodes[key]; };
    // Record key press/release
    Keys.onKeyDown = function (event) {
        if (Keys.keycodes[event.keyCode] == false) {
            Keys.keycodesJustPressed[event.keyCode] = true;
            Keys.clearFlagPressed = true;
        }
        // console.log(event.keyCode);
        Keys.keycodes[event.keyCode] = true;
    };
    Keys.onKeyUp = function (event) {
        Keys.keycodes[event.keyCode] = false;
        Keys.keycodesJustReleased[event.keyCode] = true;
        Keys.clearFlagReleased = true;
    };
    Keys.keycodes = new Array(256);
    Keys.keycodesJustPressed = new Array(256);
    Keys.keycodesJustReleased = new Array(256);
    Keys.keyDownUsed = new Object();
    // When focus is lost, reset so we don't get stuck keys
    //static private function onFocus(event: Event): void { };
    // Cursor keys
    Keys.UP = 38;
    Keys.DOWN = 40;
    Keys.LEFT = 37;
    Keys.RIGHT = 39;
    // Modifiers
    Keys.ALTERNATE = 18;
    Keys.COMMAND = 15;
    Keys.CONTROL = 17;
    Keys.CAPS_LOCK = 20;
    Keys.INSERT = 45;
    Keys.SHIFT = 16;
    // Regular ke
    Keys.SPACE = 32;
    Keys.ENTER = 13;
    Keys.ESCAPE = 27;
    Keys.PAGE_UP = 33;
    Keys.PAGE_DOWN = 34;
    // Misc keys
    Keys.BACKSPACE = 8;
    Keys.DELETE = 46;
    Keys.HOME = 36;
    Keys.END = 35;
    Keys.SLASH = 191;
    Keys.BACKSLASH = 220;
    Keys.COMMA = 188;
    Keys.PERIOD = 190;
    Keys.MINUS = 189;
    Keys.EQUAL = 187;
    Keys.QUOTE = 222;
    Keys.BACKQUOTE = 192;
    Keys.LEFTBRACKET = 219;
    Keys.RIGHTBRACKET = 221;
    Keys.SEMICOLON = 186;
    Keys.TAB = 9;
    // Letter key
    Keys.A = 65;
    Keys.B = 66;
    Keys.C = 67;
    Keys.D = 68;
    Keys.E = 69;
    Keys.F = 70;
    Keys.G = 71;
    Keys.H = 72;
    Keys.I = 73;
    Keys.J = 74;
    Keys.K = 75;
    Keys.L = 76;
    Keys.M = 77;
    Keys.N = 78;
    Keys.O = 79;
    Keys.P = 80;
    Keys.Q = 81;
    Keys.R = 82;
    Keys.S = 83;
    Keys.T = 84;
    Keys.U = 85;
    Keys.V = 86;
    Keys.W = 87;
    Keys.X = 88;
    Keys.Y = 89;
    Keys.Z = 90;
    // Function k
    Keys.F1 = 112;
    Keys.F2 = 113;
    Keys.F3 = 114;
    Keys.F4 = 115;
    Keys.F5 = 116;
    Keys.F6 = 117;
    Keys.F7 = 118;
    Keys.F8 = 119;
    Keys.F9 = 120;
    Keys.F10 = 121;
    Keys.F11 = 122;
    Keys.F12 = 123;
    Keys.F13 = 124;
    Keys.F14 = 125;
    Keys.F15 = 126;
    // Numpad
    Keys.NUMBER_0 = 48;
    Keys.NUMBER_1 = 49;
    Keys.NUMBER_2 = 50;
    Keys.NUMBER_3 = 51;
    Keys.NUMBER_4 = 52;
    Keys.NUMBER_5 = 53;
    Keys.NUMBER_6 = 54;
    Keys.NUMBER_7 = 55;
    Keys.NUMBER_8 = 56;
    Keys.NUMBER_9 = 57;
    Keys.NUMPAD = 21;
    Keys.NUMPAD_0 = 96;
    Keys.NUMPAD_1 = 97;
    Keys.NUMPAD_2 = 98;
    Keys.NUMPAD_3 = 99;
    Keys.NUMPAD_4 = 100;
    Keys.NUMPAD_5 = 101;
    Keys.NUMPAD_6 = 102;
    Keys.NUMPAD_7 = 103;
    Keys.NUMPAD_8 = 104;
    Keys.NUMPAD_9 = 105;
    Keys.NUMPAD_ADD = 107;
    Keys.NUMPAD_DECIMAL = 110;
    Keys.NUMPAD_DIVIDE = 111;
    Keys.NUMPAD_ENTER = 108;
    Keys.NUMPAD_MULTIPLY = 106;
    Keys.NUMPAD_SUBTRACT = 109;
    // Reliable?
    Keys.WINDOWS_KEY_LEFT = 91;
    Keys.WINDOWS_KEY_RIGHT = 92;
    Keys.WINDOWS_RIGHT_CLICK = 93;
    Keys.WINDOWS_VOLUME_DOWN = 174;
    Keys.WINDOWS_VOLUME_UP = 175;
    Keys.WINDOWS_VOLUME_MUTE = 173;
    Keys.WINDOWS_PLAY_PAUSE = 179;
    Keys.WINDOWS_BACK = 166;
    Keys.WINDOWS_FORWARD = 167;
    Keys.NUM_LOCK = 144;
    Keys.SCROLL_LOCK = 145;
    Keys.PAUSE_BREAK = 19;
    return Keys;
})();
