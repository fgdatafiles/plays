var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utils;
(function (Utils) {
    var AssetLoader = /** @class */ (function () {
        //
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            var _this = this;
            if (_showBar === void 0) { _showBar = true; }
            this.oAssetData = {};
            this.assetsLoaded = 0;
            this.textData = {};
            this.scale = 1;
            this.aPreloaderBar = new Array();
            this.totalAssets = _aFileData.length;
            this.loaderSequence = 0;
            for (var i = 0; i < _aFileData.length; i++) {
                if (_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                }
                else {
                    this.loadImage(_aFileData[i]);
                }
            }
            this.showBar = _showBar;
            if (this.showBar) {
                this.oLoaderAssetsImgData = preAssetLib.getData("loaderAssets");
                this.oLoaderBgImgData = preAssetLib.getData("loaderBg");
                this.bouncerY = -200;
                this.logoY = 0;
                TweenLite.to(this, 1, {
                    bouncerY: canvas.height - 270 - this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].height, ease: "Cubic.easeIn",
                    onComplete: function () {
                        TweenLite.to(_this, .2, {
                            logoY: 25, ease: "Circ.easeOut",
                            onComplete: function () {
                                TweenLite.to(_this, .3, { logoY: 0, ease: "Back.easeOut" });
                            }
                        });
                        TweenLite.to(_this, 1, {
                            bouncerY: -200, ease: "Cubic.easeOut",
                            onComplete: function () {
                                _this.addSequence();
                            }
                        });
                    }
                });
            }
        }
        //
        AssetLoader.prototype.addSequence = function () {
            if (++this.loaderSequence >= 2) {
                this.loadedCallback();
            }
        };
        //
        AssetLoader.prototype.render = function () {
            ctx.fillStyle = "#FFEA00";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (canvas.width > canvas.height) {
                ctx.fillStyle = "#FFD101";
                ctx.fillRect(canvas.width / 2, 0, canvas.width / 2, canvas.height);
            }
            // loader bg
            ctx.drawImage(this.oLoaderBgImgData.img, 0, 0, this.oLoaderBgImgData.img.width, this.oLoaderBgImgData.img.height, canvas.width / 2 - (this.oLoaderBgImgData.img.width / 2), canvas.height - (this.oLoaderBgImgData.img.height), this.oLoaderBgImgData.img.width, this.oLoaderBgImgData.img.height);
            // boomerang logo
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 313 + this.logoY, bWidth, bHeight);
            // bouncer
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, this.bouncerY, bWidth, bHeight);
            // loader top
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - bHeight, bWidth, bHeight);
            // loader bar bottom
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 170, bWidth, bHeight);
            // loader bar progress
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth * Math.max(this.assetsLoaded / this.totalAssets, .01), bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 157, bWidth * Math.max(this.assetsLoaded / this.totalAssets, .01), bHeight);
        };
        AssetLoader.prototype.displayNumbers = function () {
            ctx.textAlign = "left";
            ctx.font = "bold 40px arial";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(Math.round((this.assetsLoaded / this.totalAssets) * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 + 51);
        };
        //
        AssetLoader.prototype.loadExtraAssets = function (_callback, _aFileData) {
            this.showBar = false;
            this.totalAssets = _aFileData.length;
            this.assetsLoaded = 0;
            this.loadedCallback = _callback;
            for (var i = 0; i < _aFileData.length; i++) {
                if (_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                }
                else {
                    this.loadImage(_aFileData[i]);
                }
            }
        };
        //
        AssetLoader.prototype.loadJSON = function (_oData) {
            var _this = this;
            var xobj = new XMLHttpRequest();
            xobj.open('GET', _oData.file, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == 200) {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    _this.textData[_oData.id] = JSON.parse(xobj.responseText);
                    ++_this.assetsLoaded;
                    _this.checkLoadComplete();
                }
            };
            xobj.send(null);
        };
        //
        AssetLoader.prototype.loadImage = function (_oData) {
            var _this = this;
            var img = new Image();
            img.onload = function () {
                _this.oAssetData[_oData.id] = {};
                _this.oAssetData[_oData.id].img = img;
                _this.oAssetData[_oData.id].oData = {};
                var aSpriteSize = _this.getSpriteSize(_oData.file);
                if (aSpriteSize[0] != 0) {
                    _this.oAssetData[_oData.id].oData.spriteWidth = aSpriteSize[0];
                    _this.oAssetData[_oData.id].oData.spriteHeight = aSpriteSize[1];
                }
                else {
                    _this.oAssetData[_oData.id].oData.spriteWidth = _this.oAssetData[_oData.id].img.width;
                    _this.oAssetData[_oData.id].oData.spriteHeight = _this.oAssetData[_oData.id].img.height;
                }
                if (_oData.oAnims) {
                    _this.oAssetData[_oData.id].oData.oAnims = _oData.oAnims;
                }
                if (_oData.oAtlasData) {
                    _this.oAssetData[_oData.id].oData.oAtlasData = _oData.oAtlasData;
                }
                else { // setting a default altas data for this if being used as a button
                    _this.oAssetData[_oData.id].oData.oAtlasData = { none: { x: 0, y: 0, width: _this.oAssetData[_oData.id].oData.spriteWidth, height: _this.oAssetData[_oData.id].oData.spriteHeight } };
                }
                ++_this.assetsLoaded;
                //TESTING      
                /*  if (this.showBar) {
                      this.assetsLoaded = Math.min(this.assetsLoaded, this.totalAssets * .5)
                   
                  }*/
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        //
        AssetLoader.prototype.getSpriteSize = function (_file) {
            var aNew = new Array();
            var sizeY = "";
            var sizeX = "";
            var stage = 0;
            var inc = _file.lastIndexOf(".");
            var canCont = true;
            while (canCont) { // if can continue
                inc--; // move backwards one character
                if (stage == 0 && this.isNumber(_file.charAt(inc))) { // if at stage 0 and a number then add to sizeY string backwards
                    sizeY = _file.charAt(inc) + sizeY;
                }
                else if (stage == 0 && sizeY.length > 0 && _file.charAt(inc) == "x") { // if at stage 0, sizeY string exists and char is an x
                    inc--; // move backwards to skip x
                    stage = 1;
                    sizeX = _file.charAt(inc) + sizeX;
                }
                else if (stage == 1 && this.isNumber(_file.charAt(inc))) { // if at stage 1 and a number then add to sizeX string backwards
                    sizeX = _file.charAt(inc) + sizeX;
                }
                else if (stage == 1 && sizeX.length > 0 && _file.charAt(inc) == "_") { // if at stage 1, stageX strng exists and car is an _
                    canCont = false;
                    aNew = [parseInt(sizeX), parseInt(sizeY)];
                }
                else {
                    canCont = false;
                    aNew = [0, 0];
                }
            }
            return aNew;
        };
        AssetLoader.prototype.isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        //
        AssetLoader.prototype.checkLoadComplete = function () {
            if (this.assetsLoaded == this.totalAssets) {
                if (this.showBar) {
                    this.addSequence();
                }
                else {
                    this.loadedCallback();
                }
            }
        };
        //
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        //
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        //
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    }());
    Utils.AssetLoader = AssetLoader;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = /** @class */ (function () {
        //
        function AnimSprite(_oImgData, _fps, _radius, _animId) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.frameInc = 0;
            this.animType = "loop";
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.alpha = 1;
            this.oImgData = _oImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.fps = _fps;
            this.radius = _radius;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
        }
        //
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        //
        AnimSprite.prototype.changeImgData = function (_newImgData, _animId) {
            this.oImgData = _newImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
            this.resetAnim();
        };
        //
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        //
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
        //
        AnimSprite.prototype.setAnimType = function (_type, _animId, _reset) {
            if (_reset === void 0) { _reset = true; }
            this.animId = _animId;
            this.animType = _type;
            if (_reset) {
                this.resetAnim();
            }
            switch (_type) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1;
                    break;
            }
        };
        //
        AnimSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            _ctx.globalAlpha = this.alpha;
            if (this.animId != null) { // is animating
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if (this.animType == "once") {
                    if (idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if (this.animEndedFunc != null) {
                            this.animEndedFunc();
                            //_ctx.restore();
                            //return // to stop frame flicker if changing offset after 'once' anim
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            }
            else { // is not animating
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        // no rotation or alpha
        AnimSprite.prototype.renderSimple = function (_ctx) {
            if (this.animId != null) { // is animating
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if (this.animType == "once") {
                    if (idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if (this.animEndedFunc != null) {
                            this.animEndedFunc();
                            //return // to stop frame flicker if changing offset after 'once' anim
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            }
            else { // is not animating
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
        };
        return AnimSprite;
    }());
    Utils.AnimSprite = AnimSprite;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = /** @class */ (function () {
        //
        function BasicSprite(_oImgData, _radius, _frame) {
            if (_frame === void 0) { _frame = 0; }
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.oImgData = _oImgData;
            this.radius = _radius;
            this.setFrame(_frame);
        }
        BasicSprite.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        //
        BasicSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        return BasicSprite;
    }());
    Utils.BasicSprite = BasicSprite;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var UserInput = /** @class */ (function () {
        //
        function UserInput(_canvas, _isBugBrowser) {
            var _this = this;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isDown = false;
            this.isBugBrowser = _isBugBrowser;
            this.keyDownEvtFunc = function (e) {
                _this.keyDown(e);
            };
            this.keyUpEvtFunc = function (e) {
                _this.keyUp(e);
            };
            _canvas.addEventListener('contextmenu', function (event) { return event.preventDefault(); });
            _canvas.addEventListener("touchstart", function (e) {
                for (var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitDown(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                for (var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitUp(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchcancel", function (e) {
                for (var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitCancel(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchmove", function (e) {
                for (var i = 0; i < e.changedTouches.length; i++) {
                    _this.move(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier, true);
                }
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                _this.isDown = true;
                _this.hitDown(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                _this.isDown = false;
                _this.hitUp(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mousemove", function (e) {
                _this.move(e, e.pageX, e.pageY, 1, _this.isDown);
            }, false);
            _canvas.addEventListener("mouseout", function (e) {
                if (e.button == 2) { // disable right click
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                //this.hitUp(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
                _this.hitCancel(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        //
        UserInput.prototype.hitDown = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            if (!hasFocus) {
                visibleResume();
            }
            if (this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for (var i = 0; i < this.aHitAreas.length; i++) {
                if (this.aHitAreas[i].rect) { // hit area is a rectangle
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                        this.aHitAreas[i].oData.hasLeft = false;
                        if (!this.aHitAreas[i].oData.isDown) {
                            this.aHitAreas[i].oData.isDown = true;
                            this.aHitAreas[i].oData.x = _posX;
                            this.aHitAreas[i].oData.y = _posY;
                            // horrific hack fix to stop android stock browser double tap bug
                            if ((curHitTime - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[i].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        }
                        break;
                    }
                }
                else { // hit area is a circle
                }
            }
            this.prevHitTime = curHitTime;
        };
        //
        UserInput.prototype.hitUp = function (e, _posX, _posY, _identifer) {
            if (!ios9FirstTouch) {
                playSound("silence");
                ios9FirstTouch = true;
            }
            if (this.pauseIsOn) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for (var i = 0; i < this.aHitAreas.length; i++) {
                if (this.aHitAreas[i].rect) { // hit area is a rectangle
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        // remove this changedTouch identifier from this hitArea
                        for (var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                            if (this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                j -= 1;
                            }
                        }
                        // if no more identifiers for this hitArea then trigger no touch event 
                        if (this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[i].oData.isDown = false;
                            // only trigger callback if a multitouch hitarea
                            if (this.aHitAreas[i].oData.multiTouch) {
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                            }
                        }
                        break;
                    }
                }
                else { // hit area is a circle
                }
            }
        };
        //
        UserInput.prototype.hitCancel = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for (var i = 0; i < this.aHitAreas.length; i++) {
                if (this.aHitAreas[i].oData.isDown) {
                    this.aHitAreas[i].oData.isDown = false;
                    this.aHitAreas[i].aTouchIdentifiers = new Array();
                    if (this.aHitAreas[i].oData.multiTouch) {
                        this.aHitAreas[i].oData.x = _posX;
                        this.aHitAreas[i].oData.y = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                    }
                }
            }
        };
        //
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            if (this.pauseIsOn) {
                return;
            }
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if (_isDown) {
                for (var i = 0; i < this.aHitAreas.length; i++) {
                    if (this.aHitAreas[i].rect) { // hit area is a rectangle
                        var aX = canvas.width * this.aHitAreas[i].align[0];
                        var aY = canvas.height * this.aHitAreas[i].align[1];
                        if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if (this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.isBeingDragged = true; // ADDED BECAUSE FIRST CLICK IS NOT REGISTERING DRAG WHEN MOVING
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                // only trigger callback if a multitouch hitarea
                                if (this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            // if drag event added to area then callback
                            if (this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                if (this.aHitAreas[i]) {
                                    this.aHitAreas[i].oData.isBeingDragged = false;
                                }
                            }
                        }
                        else if (this.aHitAreas[i].oData.isDown && !this.aHitAreas[i].oData.hasLeft) { // drag out of a hit area
                            // remove this changedTouch identifier from this hitArea
                            for (var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                                if (this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                    this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                    j -= 1;
                                }
                            }
                            // if no more identifiers for this hitArea then trigger no touch event 
                            if (this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[i].oData.hasLeft = true;
                                if (!this.aHitAreas[i].oData.isBeingDragged) {
                                    this.aHitAreas[i].oData.isDown = false;
                                }
                                // only trigger callback if a multitouch hitarea
                                if (this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        //
        UserInput.prototype.keyDown = function (e) {
            for (var i = 0; i < this.aKeys.length; i++) {
                if (e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        //
        UserInput.prototype.keyUp = function (e) {
            for (var i = 0; i < this.aKeys.length; i++) {
                if (e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = false;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        //
        UserInput.prototype.checkKeyFocus = function () {
            window.focus();
            if (this.aKeys.length > 0) {
                window.removeEventListener('keydown', this.keyDownEvtFunc, false);
                window.removeEventListener('keyup', this.keyUpEvtFunc, false);
                window.addEventListener('keydown', this.keyDownEvtFunc, false);
                window.addEventListener('keyup', this.keyUpEvtFunc, false);
            }
        };
        //
        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {
            // create an object for data if not being passed 
            if (_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            this.aKeys.push({ id: _id, callback: _callback, oData: _oCallbackData, keyCode: _keyCode });
            this.checkKeyFocus();
            /*
            32: Space
            37: Left key
            38: Up key
            39: Right key
            40: Down key
            */
        };
        //
        UserInput.prototype.removeKey = function (_id) {
            for (var i = 0; i < this.aKeys.length; i++) {
                if (this.aKeys[i].id == _id) {
                    this.aKeys.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _type, _oAreaData, _isUnique) {
            if (_isUnique === void 0) { _isUnique = false; }
            // create an object for data if not being passed 
            if (_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            // remove previous hit areas with this id if unique
            if (_isUnique) {
                this.removeHitArea(_id);
            }
            if (!_oAreaData.scale) {
                _oAreaData.scale = 1;
            }
            if (!_oAreaData.align) {
                _oAreaData.align = [0, 0];
            }
            var aTouchIdentifiers = new Array();
            switch (_type) {
                case "image":
                    var aRect;
                    aRect = new Array(_oAreaData.aPos[0] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale, _oAreaData.aPos[0] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale);
                    this.aHitAreas.push({ id: _id, aTouchIdentifiers: aTouchIdentifiers, callback: _callback, oData: _oCallbackData, rect: true, area: aRect, align: _oAreaData.align });
                    break;
                case "rect":
                    this.aHitAreas.push({ id: _id, aTouchIdentifiers: aTouchIdentifiers, callback: _callback, oData: _oCallbackData, rect: true, area: _oAreaData.aRect, align: _oAreaData.align });
                    break;
            }
        };
        //
        UserInput.prototype.removeHitArea = function (_id) {
            for (var i = 0; i < this.aHitAreas.length; i++) {
                if (this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        //
        UserInput.prototype.resetAll = function () {
            for (var i = 0; i < this.aHitAreas.length; i++) {
                this.aHitAreas[i].oData.isDown = false;
                this.aHitAreas[i].oData.isBeingDragged = false;
                this.aHitAreas[i].aTouchIdentifiers = new Array();
            }
            this.isDown = false;
        };
        return UserInput;
    }());
    Utils.UserInput = UserInput;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var FpsMeter = /** @class */ (function () {
        //
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            //
            this.render = function (_ctx) {
                this.frameAverage += this.delta / this.updateFreq;
                if (++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                _ctx.textAlign = "left";
                ctx.font = "10px Helvetica";
                _ctx.fillStyle = "#333333";
                _ctx.beginPath();
                _ctx.rect(0, this.canvasHeight - 15, 40, 15);
                _ctx.closePath();
                _ctx.fill();
                _ctx.fillStyle = "#ffffff";
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = _canvasHeight;
        }
        //
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    }());
    Utils.FpsMeter = FpsMeter;
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = /** @class */ (function () {
        //
        function Background() {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            this.renderState = null;
            if (gameState == "start") {
                this.oImgData = assetLib.getData("menuBg");
            }
            else if (gameState == "endGame") {
                this.oImgData = assetLib.getData("endBg");
            }
        }
        //
        Background.prototype.render = function () {
            if (gameState == "start") {
                if (canvas.width > canvas.height) { // landscape
                    ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
                }
                else { // portrait
                    ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
                }
            }
            else if (gameState == "endGame") {
                if (canvas.width > canvas.height) { // landscape
                    ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width)) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
                }
                else { // portrait
                    ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
                }
            }
        };
        return Background;
    }());
    Elements.Background = Background;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = /** @class */ (function () {
        //
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.incY = 0;
            this.posX = 0;
            this.flareRot = 0;
            this.numberSpace = 78;
            this.scoreY = 0;
            this.tutY = 500;
            this.oSplashLogoImgData = assetLib.getData("splashLogo");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.oTopFlareImgData = assetLib.getData("flare");
            this.oScoreNumbersImgData = assetLib.getData("numbers");
        }
        //
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        //
        Panel.prototype.tweenOutTut = function () {
            TweenLite.to(this, .3, { delay: this.tutShowTime, tutY: 500, ease: "Cubic.easeIn" });
        };
        //
        Panel.prototype.addScore = function () {
            totalScore++;
            if (this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreY = -30;
            this.scoreTween = TweenLite.to(this, 1, { scoreY: 0, ease: "Elastic.easeOut" });
        };
        //
        Panel.prototype.startTween1 = function () {
            this.posY = 500;
            TweenLite.to(this, .75, { posY: 0, ease: "Cubic.easeOut" });
            // buttons
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Cubic.easeOut" });
            // slow assets
            this.posX = 500;
            TweenLite.to(this, 1.5, { posX: 0, ease: "Cubic.easeOut" });
        };
        Panel.prototype.switchBut = function (_id0, _id1, _id1Over, _aNewAPos, _aNewAlign) {
            if (_aNewAPos === void 0) { _aNewAPos = null; }
            if (_aNewAlign === void 0) { _aNewAlign = null; }
            var oButData = null;
            for (var i = 0; i < this.aButs.length; i++) {
                if (this.aButs[i].id == _id0) {
                    this.aButs[i].id = _id1;
                    this.aButs[i].idOver = _id1Over;
                    oButData = this.aButs[i];
                    if (_aNewAPos) {
                        this.aButs[i].aPos = _aNewAPos;
                    }
                    if (_aNewAlign) {
                        this.aButs[i].align = _aNewAlign;
                    }
                    // break
                }
            }
            return oButData;
        };
        //
        Panel.prototype.render = function (_butsOnTop) {
            if (_butsOnTop === void 0) { _butsOnTop = true; }
            if (!_butsOnTop) {
                this.addButs(ctx);
            }
            switch (this.panelType) {
                case "splash":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // credits logo
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "start":
                    /*this.flareRot += delta / 3

                    var heightPerc:number = .5

                    ctx.save();
                    ctx.translate(canvas.width / 2 + this.posY, canvas.height * heightPerc);
                    ctx.rotate(this.flareRot);
                    ctx.scale(1, 1)

                    ctx.drawImage(this.oTopFlareImgData.img,
                                   -this.oTopFlareImgData.img.width / 2,
                                   -this.oTopFlareImgData.img.height / 2);

                    ctx.translate(-(canvas.width / 2 + this.posY), -(canvas.height * heightPerc));
                    ctx.translate(canvas.width / 2 + this.posY, canvas.height * heightPerc);
                    ctx.rotate(-this.flareRot * 2);

                    ctx.drawImage(this.oTopFlareImgData.img,
                                   -this.oTopFlareImgData.img.width / 2,
                                   -this.oTopFlareImgData.img.height / 2);

                    ctx.restore();*/
                    // car
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["titleCar"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["titleCar"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["titleCar"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["titleCar"]].height;
                    var tempScale = 1;
                    // shrink if title logo starts to interfere with moley
                    if (canvas.width * .6 < canvas.height) {
                        tempScale = .75;
                    }
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posX, canvas.height - bHeight * tempScale + (Math.sin(this.incY * 2) + 1) * 2, bWidth * tempScale, bHeight * tempScale);
                    // logo
                    var tempImgData = assetLib.getData("brandLogo");
                    var tempScale = 1; //Math.min(canvas.width / (tempImgData.img.width - 70), 1)
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - (tempImgData.img.width / 2) * tempScale + this.posY, canvas.height * .23 - tempImgData.img.height * tempScale + Math.sin(this.incY * .4) * 10, tempImgData.img.width * tempScale, tempImgData.img.height * tempScale);
                    // title
                    var tempImgData = assetLib.getData("titleLogo");
                    var tempScale = 1; //Math.min(canvas.width / (tempImgData.img.width - 70), 1)
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - (tempImgData.img.width / 2) * tempScale + this.posY, canvas.height * .23 + Math.sin(this.incY * .4) * 10, tempImgData.img.width * tempScale, tempImgData.img.height * tempScale);
                    // boomer logo
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["boomLogo"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["boomLogo"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["boomLogo"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["boomLogo"]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 15 - this.posY, canvas.height - 100, bWidth, bHeight);
                    // highscore
                    var tempScore = saveDataHandler.getData().toString();
                    while (tempScore.length < 3) {
                        tempScore = "0" + tempScore;
                    }
                    tempScale = .6;
                    for (var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width + i * (this.numberSpace * tempScale) - tempScore.length * (this.numberSpace * tempScale) + this.posY - 15, canvas.height - 70, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    // mini cup
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - tempScore.length * (this.numberSpace * tempScale) - 82 + this.posY, canvas.height - 68, bWidth, bHeight);
                    if (promoMessage && curLang == "en") {
                        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
                        ctx.fillRect(canvas.width / 2 - canvas.width * .75 * .5, canvas.height * .85 - 35 + this.posY, canvas.width * .75, 50);
                        addText(0, 35, canvas.width * .75, "center", canvas.width / 2, canvas.height * .85 + this.posY, "promo", "#FFFFFF");
                    }
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // credits logo
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "endGame":
                    this.flareRot += delta / 3;
                    var heightPerc = .42;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - this.posY, canvas.height * heightPerc);
                    ctx.rotate(this.flareRot);
                    ctx.scale(1.3, 1.3);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    /* ctx.translate(-(canvas.width / 2 - this.posY), -(canvas.height * heightPerc));
                     ctx.translate(canvas.width / 2 - this.posY, canvas.height * heightPerc);
                     ctx.rotate(-this.flareRot * 2);
 
                     ctx.drawImage(this.oTopFlareImgData.img,
                                 -this.oTopFlareImgData.img.width / 2,
                                 -this.oTopFlareImgData.img.height / 2);*/
                    ctx.restore();
                    // end chars left
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsLeft"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsLeft"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsLeft"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsLeft"]].height;
                    var tempScale = 1;
                    if (canvas.width < canvas.height) {
                        tempScale = .6;
                    }
                    else if (canvas.width * .7 < canvas.height) {
                        tempScale = .75;
                    }
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - bHeight * tempScale, bWidth * tempScale, bHeight * tempScale);
                    // end chars right
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsRight"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsRight"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsRight"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["endCharsRight"]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth * tempScale, canvas.height - bHeight * tempScale, bWidth * tempScale, bHeight * tempScale);
                    // highscore
                    var tempScore = saveDataHandler.getData().toString();
                    while (tempScore.length < 3) {
                        tempScore = "0" + tempScore;
                    }
                    tempScale = .6;
                    for (var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width + i * (this.numberSpace * tempScale) - tempScore.length * (this.numberSpace * tempScale) + this.posY - 15, canvas.height - 70, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    // mini cup
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["cupIcon"]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - tempScore.length * (this.numberSpace * tempScale) - 82 + this.posY, canvas.height - 68, bWidth, bHeight);
                    // game score
                    var tempScore = totalScore.toString();
                    while (tempScore.length < 3) {
                        tempScore = "0" + tempScore;
                    }
                    tempScale = 1.2;
                    for (var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + i * (this.numberSpace * tempScale) - this.posY - (tempScore.length / 2) * (this.numberSpace * tempScale) - 5, canvas.height * .4 - this.oScoreNumbersImgData.oData.spriteHeight / 2 + Math.sin(this.incY * .4) * 10, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    // grub icon
                    /* var bX: number = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].x
                     var bY: number = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].y
                     var bWidth: number = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].width
                     var bHeight: number = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].height
 
                     var tempScale: number = 1
 
                     ctx.drawImage(
                         this.oGameElementsImgData.img,
                         bX,
                         bY,
                         bWidth,
                         bHeight,
                         canvas.width / 2 - (tempScore.length / 2) * (this.numberSpace * 1.2) - 60 - this.posY,
                         canvas.height * .4 - bHeight / 2 + Math.sin(this.incY * .4) * 10,
                         bWidth * tempScale,
                         bHeight * tempScale);*/
                    // score
                    addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY + 5, canvas.height * .35 - 45 + 5 + Math.sin(this.incY * .4) * 10, "score", "#1E0A13");
                    //addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY - 2, canvas.height * .35 - 30 - 2, "score", "#FFFFFF")
                    addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY, canvas.height * .35 - 45 + Math.sin(this.incY * .4) * 10, "score", "#FFFFFF");
                    // promo
                    if (promoMessage && curLang == "en") {
                        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
                        ctx.fillRect(canvas.width / 2 - canvas.width * .75 * .5, canvas.height * .85 - 35 + this.posY, canvas.width * .75, 50);
                        addText(0, 35, canvas.width * .75, "center", canvas.width / 2, canvas.height * .85 + this.posY, "promo", "#FFFFFF");
                    }
                    break;
                case "game":
                    // grub icon
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].height;
                    var tempScale = 1;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 136 - this.posY, 12 + this.scoreY, bWidth * tempScale, bHeight * tempScale);
                    // game score
                    var tempScore = totalScore.toString();
                    while (tempScore.length < 3) {
                        tempScore = "0" + tempScore;
                    }
                    tempScale = .6;
                    for (var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 - 70 + i * (this.numberSpace * tempScale) - this.posY, 10 + this.scoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                    }
                    // show tutorial
                    if ((firstRun && platform.x < -500) || this.tutY < 500) {
                        if (!tutorialOn && firstRun) {
                            tutorialOn = true;
                            this.tutY = 500;
                            TweenLite.to(this, .3, { tutY: 0, ease: "Cubic.easeOut" });
                            this.tutShowTime = 2;
                        }
                        tutorialTimer += delta * 2;
                        this.tutShowTime -= delta;
                        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                        ctx.fillRect(canvas.width - 250 + this.tutY, 0, 250, canvas.height);
                        addText(0, 35, 180, "center", canvas.width - 125 + this.tutY, canvas.height * .5 + 100, "tut0", "#FFFFFF");
                        this.tutTimer = 2;
                        if (Math.floor(tutorialTimer % this.tutTimer) == 0) {
                            // tut 0
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut0].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut0].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut0].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut0].height;
                            ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 220 + this.tutY, canvas.height * .5 - 30 - 150, bWidth, bHeight);
                        }
                        else {
                            // tut 1
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut1].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut1].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut1].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tut1].height;
                            ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 220 + this.tutY, canvas.height * .5 - 150, bWidth, bHeight);
                        }
                    }
                    break;
                case "pause":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    break;
            }
            if (_butsOnTop) {
                this.addButs(ctx);
            }
        };
        //
        Panel.prototype.addButs = function (ctx) {
            // for making other flashing lights flash less brightly when one is rolled over
            var aButOver = false;
            for (var i = 0; i < this.aButs.length; i++) {
                // dimming already selected char but
                /* if (gameState == "charSelect" && curChar != 99 && (oImageIds["charBut" + curChar] == this.aButs[i].id || oImageIds["charBut" + opChar] == this.aButs[i].id)) {
                     continue
                 }*/
                if (this.aButs[i].isOver) {
                    aButOver = true;
                    break;
                }
            }
            for (var i = 0; i < this.aButs.length; i++) {
                // dimming already selected char but
                /* if (gameState == "charSelect" && curChar != 99 && (oImageIds["charBut" + curChar] == this.aButs[i].id || oImageIds["charBut" + opChar] == this.aButs[i].id)) {
 
 
                     var aX: number = (canvas.width * this.aButs[i].align[0])
                     var aY: number = (canvas.height * this.aButs[i].align[1])
 
                     // setting tween in pos (above or below)
                     if (aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                         offsetPosY = this.butsY
                     }
                     else {
                         offsetPosY = -this.butsY
                     }
 
                     bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x
                     bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y
                     bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width
                     bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height
 
                     this.aButs[i].aOverData = new Array(
                         aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale),
                         aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY,
                         aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale),
                         aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY
                         )
 
 
                     ctx.save()
 
                     ctx.globalAlpha = .25
 
 
 
 
 
                     // render correct image
                     ctx.drawImage(this.aButs[i].oImgData.img,
                                     bX,
                                     bY,
                                     bWidth,
                                     bHeight,
                                     this.aButs[i].aOverData[0],
                                     this.aButs[i].aOverData[1],
                                     bWidth * (this.aButs[i].scale),
                                     bHeight * (this.aButs[i].scale));
                     ctx.restore()
 
 
                     continue
                 }*/
                var offsetPosY;
                var floatY = 0;
                // only float buttons if incY is being incremented by an update
                if (this.incY != 0 && this.aButs[i].flash) {
                    if (this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i * 2.5) * 2) * 3;
                    }
                    else {
                        floatY = Math.sin(this.incY + i * 2.5) * 3;
                    }
                }
                if (i % 2 == 0) {
                    //offsetPosY = -this.posY
                }
                if (!this.aButs[i].scale) {
                    this.aButs[i].scale = 1;
                }
                var bX;
                var bY;
                var bWidth;
                var bHeight;
                bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;
                bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;
                bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;
                bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;
                // align pos based on changing canvas size
                // var aX: number = getSafeWidth(canvas.width * this.aButs[i].align[0])
                // var aY: number = getSafeHeight(canvas.height * this.aButs[i].align[1])
                var aX = (canvas.width * this.aButs[i].align[0]);
                var aY = (canvas.height * this.aButs[i].align[1]);
                // setting tween in pos (above or below)
                if (aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                }
                else {
                    offsetPosY = -this.butsY;
                }
                this.aButs[i].aOverData = new Array(aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2, aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2);
                // flare behind rolled over but
                if (this.aButs[i].isOver && this.aButs[i].flash) {
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.scale(1 + floatY / 30, 1 + floatY / 30);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 7);
                    /*   var bX: number = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].x
                     var bY: number = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].y
                     var bWidth: number = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].width
                     var bHeight: number = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].height
 
                     ctx.drawImage(
                        this.oUiElementsImgData.img,
                        bX,
                        bY,
                        bWidth,
                        bHeight,
                        -bWidth / 2,
                        -bHeight / 2,
                        bWidth,
                        bHeight);*/
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                }
                // render correct image
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if (this.aButs[i].isOver || this.aButs[i].flash) { // rollover state
                    ctx.save();
                    if (this.aButs[i].isOver) {
                        ctx.globalAlpha = 1;
                    }
                    else {
                        if (aButOver) {
                            ctx.globalAlpha = Math.max(Math.sin(this.incY / 2), 0) / 2;
                        }
                        else {
                            ctx.globalAlpha = Math.max(Math.sin(this.incY / 2), 0);
                        }
                    }
                    bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].x;
                    bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].y;
                    bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].width;
                    bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].idOver].height;
                    // render correct image
                    ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                    ctx.restore();
                }
            }
        };
        return Panel;
    }());
    Elements.Panel = Panel;
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var TextDisplay = /** @class */ (function () {
        function TextDisplay() {
            this.oTextData = {};
            this.inc = 0;
            this.createTextObjects();
        }
        //
        TextDisplay.prototype.createTextObjects = function () {
            var cnt = 0;
            for (var i in assetLib.textData.langText.text[curLang]) {
                this.oTextData[i] = {};
                this.oTextData[i].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][i]["@text"], assetLib.textData.langText.text[curLang][i]["@fontId"]); // array of char data for each line
                this.oTextData[i].aLineWidths = this.getLineWidths(this.oTextData[i].aLineData); // width of each line of text
                this.oTextData[i].blockWidth = this.getBlockWidth(this.oTextData[i].aLineData); // height of entire block of text
                this.oTextData[i].blockHeight = this.getBlockHeight(this.oTextData[i].aLineData, assetLib.textData.langText.text[curLang][i]["@fontId"]); // height of entire block of text
                this.oTextData[i].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][i]["@fontId"]].text.common["@lineHeight"]); // individual line height
                this.oTextData[i].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][i]["@fontId"]); // font image asset for this text
            }
        };
        //
        TextDisplay.prototype.getLineWidths = function (_aCharData) {
            var lineLength;
            var aLineWidths = new Array();
            // find width of longest line in text
            for (var i = 0; i < _aCharData.length; i++) { // run through all lines
                lineLength = 0;
                for (var j = 0; j < _aCharData[i].length; j++) { // all text in a line
                    // add space between letters
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if (j == 0) { // first letter offset half
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                    else if (j == _aCharData[i].length - 1) { // last letter offset half
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                aLineWidths.push(lineLength);
            }
            return aLineWidths;
        };
        //
        TextDisplay.prototype.getBlockWidth = function (_aCharData) {
            var lineLength;
            var longestLineLength = 0;
            // find width of longest line in text
            for (var i = 0; i < _aCharData.length; i++) { // run through all lines
                lineLength = 0;
                for (var j = 0; j < _aCharData[i].length; j++) { // all text in a line
                    // add space between letters
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if (j == 0) { // first letter offset half
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                    else if (j == _aCharData[i].length - 1) { // last letter offset half
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                if (lineLength > longestLineLength) {
                    longestLineLength = lineLength;
                }
            }
            return longestLineLength;
        };
        //
        TextDisplay.prototype.getBlockHeight = function (_aCharData, _fontId) {
            /*var topMost: number
            var bottomMost: number

            var allLinesHeight:number = 0

            // find highest and lowest points of all chars in text
            for (var i: number = 0; i < _aCharData.length; i++) { // lines

                topMost = 9999
                bottomMost = -9999

                for (var j: number = 0; j < _aCharData[i].length; j++) { // text in line

                    if (_aCharData[i][j]["@id"] != "32") { // ignore spaces
                        if (parseInt(_aCharData[i][j]["@height"]) + parseInt(_aCharData[i][j]["@yoffset"]) > bottomMost) {
                            bottomMost = parseInt(_aCharData[i][j]["@height"]) + parseInt(_aCharData[i][j]["@yoffset"])
                        }

                        if (parseInt(_aCharData[i][j]["@yoffset"]) < topMost) {
                            topMost = parseInt(_aCharData[i][j]["@yoffset"])
                        }
                    }

                }

                allLinesHeight += bottomMost - topMost
            }*/
            return _aCharData.length * parseInt(assetLib.textData["fontData" + _fontId].text.common["@lineHeight"]);
        };
        //
        TextDisplay.prototype.getCharData = function (_aLines, _fontId) {
            var aCharData = new Array();
            for (var k = 0; k < _aLines.length; k++) { // run through lines
                aCharData[k] = new Array();
                for (var i = 0; i < _aLines[k].length; i++) { // run through all chars in string
                    for (var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) { // run through entire array of all possible chars in loading font data char array
                        // does char code match?
                        if (_aLines[k][i].charCodeAt(0) == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
                            aCharData[k].push(assetLib.textData["fontData" + _fontId].text.chars.char[j]); // add to array
                        }
                    }
                }
            }
            return aCharData;
        };
        TextDisplay.prototype.renderText = function (_oTextDisplayData) {
            var aLinesToRender = this.oTextData[_oTextDisplayData.text].aLineData;
            var oFontImgData = this.oTextData[_oTextDisplayData.text].oFontImgData;
            var shiftX;
            var offsetX = 0;
            var offsetY = 0;
            var lineOffsetY = 0;
            var manualScale = 1;
            var animY = 0;
            // line height position offset if set
            if (_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            // manual scale if parameter exists
            if (_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            // scale down entire text block if too small to fit in max width
            if (_oTextDisplayData.maxWidth && this.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if (_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for (var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if (_oTextDisplayData.alignX == "centre") { // all lines align centre X
                    offsetX = this.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                if (_oTextDisplayData.alignY == "centre") { // align entire block in centre Y
                    offsetY = this.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2; // adjusts for lineOffsetY
                }
                for (var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if (_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    // render correct image
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        return TextDisplay;
    }());
    Utils.TextDisplay = TextDisplay;
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Platform = /** @class */ (function () {
        //
        function Platform() {
            this.x = 0;
            this.y = 0;
            this.platformWidth = 200;
            this.platformHeight = 100;
            this.speed = 0;
            this.countY = 0;
            this.countTotY = 5;
            this.startSpeed = 2.3;
            this.tunnelPerc = .6;
            this.testInc = 0;
            this.aStartPlatforms = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -1);
            this.aGapPlatform = new Array(0, 0, 3, -4, 0);
            this.gapInc = -1;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oBgImgData = assetLib.getData("bg");
            this.oTownBgImgData = assetLib.getData("townBg");
            this.aPlatforms = new Array();
            this.y = canvas.height * this.tunnelPerc;
            var temp = {
                x: 0,
                y: 0,
                nextY: 0,
                assetId: 10,
                id: 0,
                dress: { type: "none", inFront: false },
                grub: { exists: false, mc: null }
            };
            this.aPlatforms.push(temp);
            while (this.aPlatforms.length * this.platformWidth < canvas.width + this.platformWidth * 4) {
                this.addPlatform();
            }
            if (this.speedTween) {
                this.speedTween.kill();
            }
            this.speed = 0;
            this.speedTween = TweenLite.to(this, 1, {
                speed: this.startSpeed, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
        }
        //
        Platform.prototype.addPlatform = function () {
            var tempY = 0;
            var tempHeight = Math.random() * 100 + 50;
            var tempId = Math.floor(Math.random() * 6) + 10; // straight piece, no curved edges
            var tempDressType = "none";
            var tempDressInFront = false;
            if (this.aPlatforms[this.aPlatforms.length - 1].id >= this.aStartPlatforms.length && this.gapInc == -1) { // add platforms for general gameplay
                if (++this.countY >= this.countTotY) {
                    var tempBreak = 0;
                    tempY = Math.floor(Math.random() * 3) - 1;
                    while (tempBreak < 10 && tempY == this.aPlatforms[this.aPlatforms.length - 1].nextY) {
                        tempY = Math.floor(Math.random() * 3) - 1;
                        tempBreak++;
                    }
                    this.countY = 0;
                    this.countTotY = Math.random() * 4 + 2;
                }
            }
            else if (this.gapInc >= 0) {
                tempHeight = 50;
                tempY = this.aGapPlatform[this.gapInc];
                if (++this.gapInc >= this.aGapPlatform.length) {
                    this.gapInc = -1;
                    this.countY = 3;
                }
            }
            else { // add platform for start
                tempY = this.aStartPlatforms[this.aPlatforms[this.aPlatforms.length - 1].id];
            }
            if (tempY > 0) { // right edge
                tempId = 2;
            }
            else if (this.aPlatforms[this.aPlatforms.length - 1].y > this.aPlatforms[this.aPlatforms.length - 1].y + this.aPlatforms[this.aPlatforms.length - 1].nextY) { // left edge
                tempId = 0;
            }
            // dressing
            if (tempY == -4) { // spiky rocks in gap
                tempDressType = "rock" + Math.floor(Math.random() * 2);
                tempDressInFront = false;
            }
            else if (Math.random() > .8) {
                tempDressType = "mush" + Math.floor(Math.random() * 4);
                tempDressInFront = true;
            }
            // occasional big drop or gap when a long line of straight platforms
            if (this.countTotY > 5 && this.countY == 2 && this.gapInc == -1) {
                if (Math.random() > .5) { // big drop
                    tempY = 2;
                    tempId = 2;
                }
                else { // start gap array
                    this.gapInc = 0;
                }
            }
            var temp = {
                x: this.aPlatforms[this.aPlatforms.length - 1].x + 1,
                y: this.aPlatforms[this.aPlatforms.length - 1].y + this.aPlatforms[this.aPlatforms.length - 1].nextY * tempHeight,
                nextY: tempY,
                assetId: tempId,
                id: this.aPlatforms[this.aPlatforms.length - 1].id + 1,
                dress: { type: tempDressType, inFront: tempDressInFront },
                grub: { exists: false, mc: null }
            };
            // add grub to this platform
            if (Math.random() < .2 && temp.id > 5 && this.gapInc == -1 && this.aPlatforms[this.aPlatforms.length - 1].assetId != 2) { // .2
                var tempGroundHeight;
                if (temp.assetId == 1 && temp.y + temp.nextY * tempHeight < temp.y) {
                    tempGroundHeight = 2;
                }
                else if (temp.assetId == 1 && this.aPlatforms[this.aPlatforms.length - 1].y < temp.y) {
                    tempGroundHeight = 1;
                }
                else {
                    tempGroundHeight = Math.floor(Math.random() * 3);
                }
                var tempGrub = new Elements.Grub(0, tempGroundHeight);
                temp.grub.mc = tempGrub;
                temp.grub.exists = true;
            }
            this.aPlatforms.push(temp);
        };
        //
        Platform.prototype.hitWall = function () {
            if (this.speedTween) {
                this.speedTween.kill();
            }
            this.speed = -2;
            this.speedTween = TweenLite.to(this, 2, {
                speed: 0, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
        };
        //
        Platform.prototype.getGroundY = function () {
            var tempGroundY = null;
            this.groundY = null;
            for (var i = 0; i < this.aPlatforms.length; i++) {
                // detecting ground y of platform currently below car
                if (car.x + car.bWidth / 2 > (this.x + this.aPlatforms[i].x * this.platformWidth) && car.x - car.bWidth / 2 < (this.x + this.aPlatforms[i].x * this.platformWidth + this.platformWidth)) {
                    tempGroundY = canvas.height * this.tunnelPerc - this.aPlatforms[i].y;
                    if (this.groundY == null || tempGroundY > this.groundY) {
                        this.groundY = tempGroundY;
                    }
                }
            }
        };
        //
        Platform.prototype.update = function () {
            if (!tutorialOn) {
                this.x -= 300 * this.speed * delta;
                if (car.jumpState != 3) {
                    this.speed += delta * .015;
                }
            }
            if (this.x + this.aPlatforms[0].x * this.platformWidth < -this.platformWidth * 3) {
                this.aPlatforms.shift();
                while (this.aPlatforms.length * this.platformWidth < canvas.width + this.platformWidth * 4) {
                    this.addPlatform();
                }
            }
            this.getGroundY();
            this.trackOffsetY = platform.groundY - platform.y;
        };
        //
        Platform.prototype.render = function () {
            // town bg
            var bgY = (this.y * .5) % canvas.height;
            if (bgY > 0) {
                bgY -= canvas.height * Math.ceil(bgY / canvas.height);
            }
            ctx.drawImage(this.oTownBgImgData.img, 0, 0, this.oTownBgImgData.img.width, this.oTownBgImgData.img.height, (this.x * .5) % canvas.width, bgY, canvas.width * 2, canvas.height * 2);
            // main bg
            bgY = (this.y * .75) % canvas.height;
            if (bgY > 0) {
                bgY -= canvas.height * Math.ceil(bgY / canvas.height);
            }
            ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, (this.x * .75) % canvas.width, bgY, canvas.width * 2, canvas.height * 2);
            // lamps
            for (var i = 0; i < 4; i++) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lamp"]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lamp"]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lamp"]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["lamp"]].height;
                // main bg
                bgY = (this.y * .75 - canvas.height * .22 + (i % 2) * canvas.height - bHeight / 2) % canvas.height;
                if (bgY < 0) {
                    bgY += canvas.height * Math.ceil(bgY / canvas.height);
                }
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, (this.x * .75 - canvas.width * .83) % canvas.width + i * canvas.width - bWidth / 2, bgY, bWidth, bHeight);
            }
            // platforms
            for (var i = 0; i < this.aPlatforms.length; i++) {
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.fillRect(this.x + this.aPlatforms[i].x * this.platformWidth, this.y + this.aPlatforms[i].y + 50, this.platformWidth, canvas.height);
                // dress behind
                if (this.aPlatforms[i].dress.type != "none" && !this.aPlatforms[i].dress.inFront) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x + this.aPlatforms[i].x * this.platformWidth, this.y + this.aPlatforms[i].y - bHeight, bWidth, bHeight);
                }
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + this.aPlatforms[i].assetId]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + this.aPlatforms[i].assetId]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + this.aPlatforms[i].assetId]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + this.aPlatforms[i].assetId]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x + this.aPlatforms[i].x * this.platformWidth, this.y + this.aPlatforms[i].y - 10, bWidth, bHeight);
                // display grub if on this platform
                if (this.aPlatforms[i].grub.exists) {
                    this.aPlatforms[i].grub.mc.targX = this.x + this.aPlatforms[i].x * this.platformWidth + this.platformWidth / 2;
                    this.aPlatforms[i].grub.mc.targY = this.y + this.aPlatforms[i].y;
                    this.aPlatforms[i].grub.mc.update();
                    this.aPlatforms[i].grub.mc.render();
                    // remove if colelcted and moved off screeen
                    if (this.aPlatforms[i].grub.mc.grubState == 2) {
                        this.aPlatforms[i].grub.exists = false;
                    }
                }
            }
        };
        // render infront
        Platform.prototype.renderInFront = function () {
            // platforms
            for (var i = 0; i < this.aPlatforms.length; i++) {
                // dress in front
                if (this.aPlatforms[i].dress.type != "none" && this.aPlatforms[i].dress.inFront) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x + this.aPlatforms[i].x * this.platformWidth, this.y + this.aPlatforms[i].y - bHeight + 5, bWidth, bHeight);
                }
            }
        };
        return Platform;
    }());
    Elements.Platform = Platform;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        //
        function Car() {
            var _this = _super.call(this, assetLib.getData("car"), 20, 60, "drive") || this;
            _this.bWidth = 160;
            _this.jumpState = 0;
            _this.fallInc = 0;
            _this.rotation = 0;
            _this.dustInc = 0;
            _this.offsetY = -53;
            return _this;
        }
        //
        Car.prototype.jump = function () {
            var _this = this;
            if (this.jumpState == 0) {
                if (this.jumpTween) {
                    this.jumpTween.kill();
                }
                if (this.rotateTween) {
                    this.rotateTween.kill();
                }
                this.jumpState = 1;
                playSound("jump" + Math.floor(Math.random() * 3));
                this.jumpTween = TweenLite.to(platform, .8 / Math.max(platform.speed, platform.startSpeed), {
                    y: platform.y + 200, ease: "Quad.easeOut",
                    onComplete: function () {
                        _this.fallInc = 0;
                        _this.jumpState = 2;
                    }
                });
                this.rotation = -5 * radian;
                this.rotateTween = TweenLite.to(this, .8 / platform.speed, {
                    rotation: -20 * radian, ease: "Quad.easeOut",
                    onComplete: function () {
                        _this.rotateTween = TweenLite.to(_this, 1 / platform.speed, {
                            rotation: 20 * radian, ease: "Quad.easeInOut",
                            onComplete: function () {
                            }
                        });
                    }
                });
            }
        };
        //
        Car.prototype.bounce = function () {
            if (this.rotateTween) {
                this.rotateTween.kill();
            }
            this.rotateTween = TweenLite.to(this, 1 / platform.speed, {
                rotation: 0 * radian, ease: "Elastic.easeOut",
                onComplete: function () {
                }
            });
        };
        //
        Car.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width * .16;
            // hit wall as current platform is above car and not mid jump
            if ((this.jumpState == 0 || this.jumpState == 2) && platform.y < platform.groundY) {
                platform.hitWall();
                this.jumpState = 3;
                this.fallInc = -800;
                this.fps = 30;
                this.setAnimType("loop", "crash");
                music.volume(0);
                playSound("crash");
                addEffect(1, this.x + 50, this.y);
                if (this.rotateTween) {
                    this.rotateTween.kill();
                }
                this.rotateTween = TweenLite.to(this, 1, {
                    rotation: -150 * radian, ease: "Quad.easeOut",
                    onComplete: function () {
                    }
                });
            }
            if (this.jumpState == 2) { // falling from top of jump arc
                this.fallInc += 1000 * platform.speed * delta;
                platform.y -= this.fallInc * delta;
                // hit ground
                if (platform.y <= platform.groundY) {
                    platform.y = platform.groundY;
                    this.jumpState = 0;
                    this.bounce();
                    addEffect(2, this.x + 40, this.y);
                    playSound("land" + Math.floor(Math.random() * 3));
                }
            }
            else if (this.jumpState == 0 && platform.y > platform.groundY) { // falling off edge of platform
                this.fallInc = 0;
                this.jumpState = 2;
                playSound("edgeFall");
                if (this.rotateTween) {
                    this.rotateTween.kill();
                }
                this.rotateTween = TweenLite.to(this, 1 / platform.speed, {
                    rotation: 20 * radian, ease: "Quad.easeInOut",
                    onComplete: function () {
                    }
                });
            }
            // has hit wall so drop off screen
            if (this.jumpState == 3) {
                this.fallInc += 2000 * delta;
                this.y += this.fallInc * delta;
                if (this.y > canvas.height + 200) {
                    initEndGame();
                }
            }
            else { // other wise keep user car on fixed plane
                this.y = canvas.height * platform.tunnelPerc;
            }
            if (this.jumpState != 3 && !tutorialOn) {
                // add dust trail
                this.dustInc += delta;
                if (this.dustInc > .04) {
                    this.dustInc = 0;
                    addEffect(3, this.x + Math.random() * 20 - 10 - 70, this.y + Math.random() * 20 - 10 - 20 - this.rotation * 100);
                }
            }
        };
        //
        Car.prototype.render = function () {
            _super.prototype.render.call(this, ctx);
            /*ctx.save()

            ctx.translate(this.x, this.y)
            ctx.rotate(this.rotation * radian)

            ctx.drawImage(
                this.oGameElementsImgData.img,
                this.bX,
                this.bY,
                this.bWidth,
                this.bHeight,
                -this.bWidth / 2,
                -this.bHeight,
                this.bWidth,
                this.bHeight);

            ctx.restore()*/
        };
        return Car;
    }(Utils.AnimSprite));
    Elements.Car = Car;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Grub = /** @class */ (function (_super) {
        __extends(Grub, _super);
        //
        function Grub(_type, _groundHeight) {
            var _this = _super.call(this, assetLib.getData("grub"), 20, 60, "spin" + Math.floor(Math.random() * 3)) || this;
            _this.aGroundHeights = new Array(70, 140, 210);
            _this.inc = 0;
            _this.grubState = 0;
            _this.grubType = _type;
            // small grub
            if (_this.grubType == 0) {
                _this.scaleX = _this.scaleY = 1;
            }
            _this.inc = Math.random() * 4;
            _this.groundHeight = _this.aGroundHeights[_groundHeight];
            return _this;
        }
        //
        Grub.prototype.update = function () {
            var _this = this;
            _super.prototype.updateAnimation.call(this, delta);
            // on ground
            if (this.grubState == 0) {
                this.inc += delta;
                this.x = this.targX + Math.sin(this.inc * 8) * 6;
                this.y = this.targY - this.groundHeight + Math.sin(this.inc * 10) * 6;
                // car collect grub
                if (this.x > car.x - 90
                    && this.x < car.x + 90
                    && this.y > car.y - 110
                    && this.y < car.y) {
                    this.grubState = 1;
                    addEffect(0, this.x, this.y);
                    playSound("grub" + Math.floor(Math.random() * 4));
                    TweenLite.to(this, .3, {
                        x: canvas.width / 2, y: 30, ease: "Cubic.easeInOut",
                        onComplete: function () {
                            _this.grubState = 2;
                            panel.addScore();
                            addEffect(1, _this.x, _this.y, false);
                        }
                    });
                }
            }
        };
        //
        Grub.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Grub;
    }(Utils.AnimSprite));
    Elements.Grub = Grub;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Effect = /** @class */ (function (_super) {
        __extends(Effect, _super);
        //
        function Effect(_id, _oImgData, _animId, _flowWithGame, _x, _y, _frameRate) {
            if (_frameRate === void 0) { _frameRate = 25; }
            var _this = _super.call(this, _oImgData, _frameRate, 45, _animId) || this;
            _this.driftRate = 300;
            _this.setAnimType("once", _animId);
            _this.id = _id;
            _this.x = _x;
            _this.y = _this.startY = _y;
            _this.flowWithGame = _flowWithGame;
            _this.startPlatformY = platform.y;
            _this.animEndedFunc = function () { this.removeMe = true; };
            // move spray slower when scrolling
            if (_this.id == 2) {
                _this.driftRate = 200;
            }
            return _this;
        }
        //
        Effect.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.flowWithGame) {
                this.x -= this.driftRate * platform.speed * delta;
                this.y = this.startY + platform.y - this.startPlatformY;
            }
        };
        //
        Effect.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Effect;
    }(Utils.AnimSprite));
    Elements.Effect = Effect;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Dust = /** @class */ (function () {
        //
        function Dust(_x, _y) {
            var _this = this;
            this.removeMe = false;
            this.addY = 0;
            this.driftRate = Math.random() * 150 + 150;
            this.x = _x;
            this.y = this.startY = _y;
            this.startPlatformY = platform.y;
            this.radius = Math.random() * 10 + 5;
            this.alpha = Math.random() * .75;
            TweenLite.to(this, 1, {
                radius: 50, alpha: 0, addY: Math.random() * -100, ease: "Quad.easeOut",
                onComplete: function () {
                    _this.removeMe = true;
                }
            });
        }
        //
        Dust.prototype.update = function () {
            this.x -= this.driftRate * platform.speed * delta;
            this.y = this.startY + platform.y - this.startPlatformY;
        };
        //
        Dust.prototype.render = function () {
            ctx.fillStyle = "rgba(226, 145, 93," + this.alpha + ")"; // "rgba(245, 233, 208," + this.alpha + ")";
            ctx.beginPath();
            ctx.arc(this.x, this.y + this.addY, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        };
        return Dust;
    }());
    Elements.Dust = Dust;
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = /** @class */ (function () {
        //
        function SaveDataHandler(_saveDataId) {
            this.saveDataId = _saveDataId;
            var testKey = 'test';
            var storage;
            var lc = false;
            try {
                storage = window.localStorage;
                lc = true;
            }
            catch (e) {
                console.log("local storage denied");
                lc = false;
                this.canStore = false;
            }
            if (lc) {
                try {
                    storage.setItem(testKey, '1');
                    storage.removeItem(testKey);
                    this.canStore = true;
                }
                catch (error) {
                    this.canStore = false;
                }
            }
            this.clearData();
            //this.saveData()
            this.setInitialData();
        }
        //
        SaveDataHandler.prototype.clearData = function () {
            // create inital level store data for selecting levels
            this.aLevelStore = new Array();
            this.aLevelStore.push(0); // hig score
        };
        // 
        SaveDataHandler.prototype.resetData = function () {
            this.clearData();
            this.saveData();
        };
        //
        SaveDataHandler.prototype.setInitialData = function () {
            // retrieve/set stored data for career level
            if (this.canStore && typeof (Storage) !== "undefined") { // storage is possible
                if (localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") { // there is previously saved data
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(","); // convert saved string to array
                    for (var a in this.aLevelStore) {
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]); // convert array of strings to integers
                    }
                }
                else { // there is no previously saved data
                    this.saveData();
                }
            }
        };
        //
        SaveDataHandler.prototype.setData = function (_score) {
            this.aLevelStore[0] = _score;
        };
        //
        SaveDataHandler.prototype.getData = function () {
            return this.aLevelStore[0];
        };
        //
        SaveDataHandler.prototype.saveData = function () {
            if (this.canStore && typeof (Storage) !== "undefined") { // storage is possible
                var str = "";
                // create comma delimited string from array
                for (var i = 0; i < this.aLevelStore.length; i++) {
                    str += this.aLevelStore[i];
                    if (i < this.aLevelStore.length - 1) {
                        str += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, str); // save data
            }
        };
        return SaveDataHandler;
    }());
    Utils.SaveDataHandler = SaveDataHandler;
})(Utils || (Utils = {}));
/// <reference path="AssetLoader.ts" />
/// <reference path="AnimSprite.ts" />
/// <reference path="BasicSprite.ts" />
/// <reference path="UserInput.ts" />
/// <reference path="FpsMeter.ts" />
/// <reference path="Background.ts" />
/// <reference path="Panel.ts" />
/// <reference path="TextDisplay.ts" />
/// <reference path="Platform.ts" />
/// <reference path="Car.ts" />
/// <reference path="Grub.ts" />
/// <reference path="Effect.ts" />
/// <reference path="Dust.ts" />
/// <reference path="saveDataHandler.ts" />
/// <reference path="../defs/customDefs.d.ts" />
/// <reference path="../defs/index.d.ts" />
/// <reference path="tsLibs/references.ts" />
/*---------------------------------------------------
 
mighty moley tunnel dash

---------------------------------------------------*/
//---------------------------------------------------
// GENERAL VARS
//---------------------------------------------------
// create game loop function
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60, new Date().getTime());
        };
})();
var previousTime; // prev time for delta
var canvas = document.getElementById('canvas'); // get reference to the canvas
var ctx = canvas.getContext("2d");
//var minSquareSize = 500
//var maxSquareSize = 700 // 900
var maxWidth = 680;
var minWidth = 680;
var maxHeight = 680; // 850
var minHeight = 680;
var canvasX;
var canvasY;
var canvasScale;
var isRotated = false;
var div = document.getElementById('canvas-wrapper'); // get reference to the container div
var sound;
var music;
var audioType = 0;
var muted = false;
var splashTimer = 0;
var assetLib;
var preAssetLib;
var isMobile = false;
var gameState = "loading";
var aLangs = new Array("EN"); // ,"ES", "FR");
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
//var textDisplay: Utils.TextDisplay
var hasFocus = true;
var saveDataHandler = new Utils.SaveDataHandler("mmtdv1");
if (navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
//var fpsMeter: Utils.FpsMeter = new Utils.FpsMeter(canvas.height)
//---------------------------------------------------
// SET UP
//---------------------------------------------------
// determine whether a mobile device
var deviceAgent = navigator.userAgent.toLowerCase();
if (deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/) ||
    deviceAgent.match(/(iemobile)/) ||
    deviceAgent.match(/iphone/i) ||
    deviceAgent.match(/ipad/i) ||
    deviceAgent.match(/ipod/i) ||
    deviceAgent.match(/blackberry/i) ||
    deviceAgent.match(/bada/i)) {
    isMobile = true;
    // horrific hack for detecting problematic android stock browser
    if (deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();
window.onresize = function () {
    setTimeout(function () {
        resizeCanvas();
        //viewporter.refresh()
    }, 1);
};
function visibleResume() {
    if (!hasFocus) {
        if (userInput) {
            userInput.checkKeyFocus();
        }
        if (!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
}
function visiblePause() {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
}
window.onpageshow = function () {
    if (!hasFocus) {
        if (userInput) {
            userInput.checkKeyFocus();
        }
        if (!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
};
window.onpagehide = function () {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
};
// check any music is play
function playMusic() {
    if (!music.playing()) {
        music.play();
    }
}
window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    // resize canvas when browser is resized (or orientation change)
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        // secondary delayed resize for slow devices
        setTimeout(function () {
            resizeCanvas();
        }, 2000);
    }, false);
});
//---------------------------------------------------
// AUDIO
//---------------------------------------------------
function isStock() {
    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && parseFloat(matches[1]) < 537;
}
var ua = navigator.userAgent; // Returns a string which tells you what device you're using
var isSharpStock = ((/SHL24|SH-01F/i).test(ua)) && isStock(); // Checks if device is, Sharp(SH-01F) or Sharp Mini
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock(); // Checks if device is, Xperia A(SO-04E)
var isFujitsuStock = ((/F-01F/i).test(ua)) && isStock(); // Checks if device is, Fujitsu(F-01F)
// create howl to load audio assets if device has web audio or is not android
if (!isIE10 && !isSharpStock && !isXperiaAStock && !isFujitsuStock && (typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    //TEMP TO MUTE ALL SOUNDS WHILE TESTING UNTIL READY TO ADD SFX
    audioType = 1; // 1
    sound = new Howl({
        src: [
            'audio/sound.mp3'
        ],
        sprite: {
            silence: [
                0,
                502.87981859410434
            ],
            click: [
                1500,
                556.5532879818593
            ],
            grub3: [
                3000,
                793.673469387755
            ],
            grub2: [
                4500,
                865.6009070294788
            ],
            grub1: [
                6000,
                805.9637188208617
            ],
            grub0: [
                7500,
                915.30612244898
            ],
            crash: [
                9000,
                1792.131519274376
            ],
            endScreen: [
                11500,
                1227.6417233560082
            ],
            edgeFall: [
                14000,
                755.0793650793644
            ],
            land2: [
                15500,
                1988.4580498866208
            ],
            jump0: [
                18000,
                1010.2494331065764
            ],
            jump2: [
                20500,
                790.748299319727
            ],
            jump1: [
                22000,
                947.9591836734685
            ],
            land0: [
                23500,
                2606.0770975056685
            ],
            land1: [
                27000,
                2711.541950113379
            ],
            gameStart: [
                30500,
                4534.285714285716
            ]
        }
    });
    music = new Howl({
        src: ['audio/music.mp3'],
        volume: 0,
        loop: true
    });
}
else {
    audioType = 0; // 2 only use for kindle
    /*music = new Audio('audio/music.ogg');
    music.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    music.play();*/
}
//---------------------------------------------------
// GAME SPECIFIC VARS
//---------------------------------------------------
var panel;
var background;
var totalScore = 0;
var levelScore = 0;
var levelNum = 0;
var aTutorials = new Array(); // { levelNum: 0, shown: false, panelType: "tutorial0" }, { levelNum: 1, shown: false, panelType: "tutorial1" }, { levelNum: 2, shown: false, panelType: "tutorial2" }, { levelNum: 3, shown: false, panelType: "tutorial3" }, { levelNum: 4, shown: false, panelType: "tutorial4" })
var panelFrame;
var oLogoData = {};
var oLogoBut;
var musicTween;
var promoMessage = false;
var oImageIds = {};
var platform;
var car;
var aEffects;
var firstRun = true;
var tutorialOn = false;
var tutorialTimer = 0;
var canJump = true;
var resetDelay;
//---------------------------------------------------
// GAME SPECIFIC METHODS 
//---------------------------------------------------
//loadLang()
function loadLang(_lang) {
    // UNCOMMENT ALL BELOW FOR LIVE
    /* var xobj = new XMLHttpRequest();
     xobj.open('GET', "json/lang.json", true);
 
     xobj.onreadystatechange = () => {
 
         if (xobj.readyState == 4 && xobj.status == 200) {
             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
             curLang = JSON.parse(xobj.responseText).lang
 
             loadPreAssets()
         }
     }
 
     xobj.send(null);*/
    if (_lang === void 0) { _lang = "en"; }
    // TESTING
    /*var urlParams = new (<any>window).URLSearchParams(window.location.search);
    curLang = urlParams.get('lang')

    if (!curLang || curLang == null || curLang == undefined) {
        curLang = "en"
    }



   loadPreAssets()*/
    // for live
    curLang = _lang;
    loadPreAssets();
}
//
function initSplash() {
    gameState = "splash";
    /* if (!textDisplay) {
         textDisplay = new Utils.TextDisplay();
     }*/
    resizeCanvas();
    // TESTING
    if (audioType == 1 && !muted) {
        playMusic();
        if (!hasFocus) {
            music.pause();
        }
    }
    // testing
    //initEndGame()
    initStartScreen();
    /* userInput.addHitArea("moreGames", butEventHandler, null, "rect", {aRect: [0, 0, canvas.width, canvas.height] }, true)
 
 
     background = new Elements.Background();
     panel = new Elements.Panel(gameState, new Array())
 
     panel.startTween1()
 
     previousTime = new Date().getTime();
     updateSplashScreenEvent();*/
}
//
function initStartScreen() {
    gameState = "start";
    /* if (!textDisplay) {
         textDisplay = new Utils.TextDisplay();
     }*/
    userInput.removeHitArea("moreGames");
    if (audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    background = new Elements.Background();
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 0], align: [.5, .65], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("startGame", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oPlayBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
//
function addMuteBut(_aButs) {
    if (audioType == 1) {
        // which mute button to display
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if (muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = { oImgData: assetLib.getData("uiButs"), aPos: [45, 45], align: [0, 0], id: mb, idOver: mbOver };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        for (var i = 0; i < _aButs.length; i++) {
            if (_aButs[i].id == oImageIds.muteBut0 || _aButs[i].id == oImageIds.muteBut1) {
                return;
            }
        }
        _aButs.push(oMuteBut);
    }
}
//
function initCreditsScreen() {
    gameState = "credits";
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [40, -40], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver };
    var oResetBut = { oImgData: assetLib.getData("uiButs"), aPos: [-40, -40], align: [1, 1], id: oImageIds.resetBut, idOver: oImageIds.resetButOver };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
//
function initGame() {
    gameState = "game";
    if (audioType == 1) {
        music.fade(music.volume(), .5, 1000);
    }
    totalScore = 0;
    //background = new Elements.Background(); // set background first so tutorial can use it
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [130, 45], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    userInput.addHitArea("jump", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 60, canvas.width, canvas.height] }, true);
    userInput.addKey("jump", butEventHandler, null, 32);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    aEffects = new Array();
    platform = new Elements.Platform();
    car = new Elements.Car();
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGameEvent();
}
//
function initPause() {
    gameState = "pause";
    /*  var oBackBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [30, 30], align: [0, 0], id: oImageIds.backBut, noMove: true }
      var oQuitBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [0, 40], align: [.5, .5], id: oImageIds.genSmallBut, noMove: true, text: "quit" }
  
  
      userInput.addHitArea("resumeGameFromPause", butEventHandler, null, "image", oBackBut)
      userInput.addHitArea("quitGameFromPause", butEventHandler, null, "image", oQuitBut)
  
      var aButs: any[] = new Array(oBackBut, oQuitBut)*/
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -90], align: [.5, .5], id: oImageIds.playBut, idOver: oImageIds.playButOver };
    var oQuitBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 90], align: [.5, .5], id: oImageIds.quitBut, idOver: oImageIds.quitButOver };
    userInput.addHitArea("playFromPause", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);
    var aButs = new Array(oPlayBut, oQuitBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updatePauseEvent();
}
//
function initEndGame() {
    gameState = "endGame";
    if (audioType == 1) {
        music.fade(music.volume(), .25, 1000);
    }
    playSound("endScreen");
    // saving score if beat highscore
    if (saveDataHandler.getData() < totalScore) {
        saveDataHandler.setData(totalScore);
        saveDataHandler.saveData();
    }
    userInput.removeHitArea("pause");
    userInput.removeHitArea("jump");
    userInput.removeKey("jump");
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [75, -50], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver };
    var oReplayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 0], align: [.5, .65], id: oImageIds.replayBut, idOver: oImageIds.replayButOver, flash: true };
    userInput.addHitArea("replayFromEnd", butEventHandler, null, "image", oReplayBut);
    userInput.addHitArea("backFromEnd", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oReplayBut, oBackBut);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    background = new Elements.Background();
    previousTime = new Date().getTime();
    updateEndGameEvent();
}
//
function resumeGame() {
    gameState = "game";
    background = new Elements.Background(); // set background first so tutorial can use it
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [130, 45], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    userInput.addHitArea("jump", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 60, canvas.width, canvas.height] }, true);
    userInput.addKey("jump", butEventHandler, null, 32);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    if (firstRun) {
        panel.tutY = 0;
    }
    previousTime = new Date().getTime();
    updateGameEvent();
}
//
function butEventHandler(_id, _oData) {
    //console.log(_id)
    switch (_id) {
        case "langSelect":
            //console.log(_oData.lang)
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            preAssetLib = new Utils.AssetLoader(curLang, [{
                    id: "preloadImage",
                    file: "images/preloadImage.jpg"
                }], ctx, canvas.width, canvas.height, false);
            // callback init when all assets loaded
            preAssetLib.onReady(initLoadAssets);
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("moreGames");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("mute");
            initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");
            var url = "http://www.happylander.com";
            var open = window.open(url);
            if (open == null || typeof (open) == 'undefined') {
                location.href = url;
            }
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            //saveDataHandler.resetData()
            initStartScreen();
            break;
        case "startGame":
            playSound("gameStart");
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("moreGames");
            userInput.removeHitArea("credits");
            initGame();
            break;
        case "replayFromEnd":
            playSound("gameStart");
            userInput.removeHitArea("replayFromEnd");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("backFromEnd");
            initGame();
            break;
        case "backFromEnd":
            playSound("click");
            userInput.removeHitArea("replayFromEnd");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("backFromEnd");
            initStartScreen();
            break;
        case "mute":
            playSound("click");
            toggleMute();
            if (muted) {
                panel.switchBut(oImageIds.muteBut0, oImageIds.muteBut1, oImageIds.muteBut1Over);
            }
            else {
                panel.switchBut(oImageIds.muteBut1, oImageIds.muteBut0, oImageIds.muteBut0Over);
            }
            break;
        case "jump":
            if (_oData.isDown) {
                if (canJump) {
                    if (tutorialOn) {
                        tutorialOn = false;
                        firstRun = false;
                        panel.tweenOutTut();
                    }
                    car.jump();
                    canJump = false;
                }
            }
            else {
                canJump = true;
            }
            break;
        case "pause":
            playSound("click");
            if (audioType == 1) { // web audio
                Howler.mute(true);
                music.pause();
            }
            else if (audioType == 2) {
                music.pause();
            }
            userInput.removeHitArea("pause");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("jump");
            userInput.removeKey("jump");
            initPause();
            break;
        case "playFromPause":
            playSound("click");
            if (audioType == 1) { // web audio
                if (!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            }
            else if (audioType == 2) { // HTML5 audio
                if (!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            resumeGame();
            break;
        case "quitFromPause":
            playSound("click");
            if (audioType == 1) { // web audio
                if (!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            }
            else if (audioType == 2) { // HTML5 audio
                if (!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            totalScore = 0;
            initStartScreen();
            break;
        case "restartFromPause":
            // add restart code
            /* playSound("click")
 
             if (audioType == 1) { // web audio
                 if (!muted) {
                     Howler.mute(false)
                     playMusic()
                 }
             }
             else if (audioType == 2) { // HTML5 audio
                 if (!muted) {
                     playMusic()
                 }
             }
 
 
             userInput.removeHitArea("playFromPause")
             userInput.removeHitArea("restartFromPause")
             userInput.removeHitArea("quitFromPause")
             userInput.removeHitArea("mute")*/
            break;
    }
}
//
function addEffect(_id, _x, _y, _flowWithGame) {
    if (_flowWithGame === void 0) { _flowWithGame = true; }
    if (_id == 0) { // explosion
        var animId = "explode";
        var effect = new Elements.Effect(_id, assetLib.getData("explosion0"), animId, _flowWithGame, _x, _y);
        effect.scaleX = effect.scaleY = 1;
        aEffects.push(effect);
    }
    else if (_id == 1) { // firework
        var animId = "explode";
        var effect = new Elements.Effect(_id, assetLib.getData("firework0"), animId, _flowWithGame, _x, _y);
        effect.scaleX = effect.scaleY = 2;
        aEffects.push(effect);
    }
    else if (_id == 2) { // spray
        var effect = new Elements.Effect(_id, assetLib.getData("spray"), "explode", _flowWithGame, _x, _y);
        effect.scaleX = effect.scaleY = 1;
        effect.offsetY = -22;
        aEffects.push(effect);
    }
    else if (_id == 3) { // dust
        var dust = new Elements.Dust(_x, _y);
        aEffects.push(dust);
    }
}
//
function updateScore(_inc) {
    levelScore += _inc;
}
//---------------------------------------------------
// UPDATE LOOPS
//---------------------------------------------------
//
function updateGameEvent() {
    // stop  loop if paused
    if (gameState != "game") {
        return;
    }
    delta = getDelta();
    // update and render
    // bg
    //background.render();
    car.update();
    platform.update();
    platform.render();
    // render mushrooms first if car is falling after hitting wall
    if (car.jumpState == 3) {
        platform.renderInFront();
    }
    car.render();
    // render mushromoms after car when driving
    if (car.jumpState != 3) {
        platform.renderInFront();
    }
    panel.update();
    panel.render();
    // effects
    for (var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if (aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    requestAnimFrame(updateGameEvent);
}
//
function updateCreditsScreenEvent() {
    // stop  loop if paused
    if (gameState != "credits") {
        return;
    }
    delta = getDelta();
    // bg
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateCreditsScreenEvent);
}
//
function updateEndGameEvent() {
    // stop  loop if paused
    if (gameState != "endGame") {
        return;
    }
    delta = getDelta();
    // bg
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateEndGameEvent);
}
//
function updateSplashScreenEvent() {
    // stop  loop if paused
    if (gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
    // hold on splash for 2.5 secs
    if (splashTimer > 2.5) {
        if (audioType == 1 && !muted) {
            playMusic();
            if (!hasFocus) {
                music.pause();
            }
        }
        initStartScreen();
        return;
    }
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateSplashScreenEvent);
}
//
function updateStartScreenEvent() {
    // stop  loop if paused
    if (gameState != "start") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = "15px Helvetica";
    ctx.fillText("v1.0.8", canvas.width / 2, canvas.height - 10);
    checkButtonsOver();
    requestAnimFrame(updateStartScreenEvent);
}
// 
function updateLoaderEvent() {
    // stop  loop if paused
    if (gameState != "load") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
//
function updatePauseEvent() {
    // stop  loop if paused
    if (gameState != "pause") {
        return;
    }
    delta = getDelta();
    // bg
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updatePauseEvent);
}
//---------------------------------------------------
// GENERAL METHODS
//---------------------------------------------------
//
function addDirectText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (_col === void 0) { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(_str, _x, _y);
}
//
function addText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (_col === void 0) { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    // reduce "Fred Fredburger Cyrillic" font on slide in bars
    /*  if (assetLib.textData.langText.font[curLang] == "Fred Fredburger Cyrillic" && _size == 30) {
          _size = 25
      }*/
    if (_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while (_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if (breakCount > 100) { // safety break out of loop
                break;
            }
        }
    }
    // raise ar text up a bit
    if (curLang == "ar") {
        _y -= _size / 15;
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(getText(_str), _x, _y);
}
//
function getText(_str) {
    var tempText = assetLib.textData.langText[_str][curLang];
    if (curLang == "de") { // convert german to uppercase to deal with ss replacement eszt
        //  tempText = tempText.toUpperCase()
    }
    return tempText;
}
//
function getTextWidth(_font, _size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
//
function getCorrectedTextWidth(_font, _size, _width, _str) {
    if (_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while (_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if (breakCount > 100) { // safety break out of loop
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
//
function checkButtonsOver() {
    if (isMobile) {
        return;
    }
    for (var i = 0; i < panel.aButs.length; i++) {
        panel.aButs[i].isOver = false;
        if (userInput.mouseX > panel.aButs[i].aOverData[0] && userInput.mouseX < panel.aButs[i].aOverData[2] && userInput.mouseY > panel.aButs[i].aOverData[1] && userInput.mouseY < panel.aButs[i].aOverData[3]) {
            panel.aButs[i].isOver = true;
        }
    }
}
//
function clearButtonOvers() {
    userInput.mouseX = -100;
    userInput.mouseY = -100;
}
//
function getDelta() {
    var currentTime = new Date().getTime();
    var deltaTemp = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    //resetting delta if screen paused for longer than .5 second for changing tabs (firefox throttle issue)
    if (deltaTemp > .5) {
        deltaTemp = 0;
    }
    return deltaTemp;
}
//
function checkSpriteCollision(_s1, _s2) {
    var s1XOffset = _s1.x; //+ _s1.offsetX
    var s1YOffset = _s1.y; //+ _s1.offsetY
    var s2XOffset = _s2.x; //+ _s2.offsetX
    var s2YOffset = _s2.y; //+ _s2.offsetY
    var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
    var radii_squared = (_s1.radius) * (_s2.radius);
    if (distance_squared < radii_squared) {
        return true;
    }
    else {
        return false;
    }
}
//
function getScaleImageToMax(_oImgData, _aLimit) {
    var newScale;
    if (_oImgData.isSpriteSheet) {
        if (_aLimit[0] / _oImgData.oData.spriteWidth < _aLimit[1] / _oImgData.oData.spriteHeight) {
            newScale = Math.min(_aLimit[0] / _oImgData.oData.spriteWidth, 1);
        }
        else {
            newScale = Math.min(_aLimit[1] / _oImgData.oData.spriteHeight, 1);
        }
    }
    else {
        if (_aLimit[0] / _oImgData.img.width < _aLimit[1] / _oImgData.img.height) {
            newScale = Math.min(_aLimit[0] / _oImgData.img.width, 1);
        }
        else {
            newScale = Math.min(_aLimit[1] / _oImgData.img.height, 1);
        }
    }
    return newScale;
}
//
function getCentreFromTopLeft(_aTopLeft, _oImgData, _imgScale) {
    var aCentre = new Array();
    aCentre.push(_aTopLeft[0] + (_oImgData.oData.spriteWidth / 2) * _imgScale);
    aCentre.push(_aTopLeft[1] + (_oImgData.oData.spriteHeight / 2) * _imgScale);
    return aCentre;
}
function loadPreAssets() {
    preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "loaderAssets",
            file: "images/loaderAssets.png",
            oAtlasData: {
                id0: { x: 166, y: 359, width: 142, height: 108 },
                id1: { x: 0, y: 0, width: 600, height: 246 },
                id2: { x: 0, y: 248, width: 352, height: 67 },
                id3: { x: 0, y: 317, width: 326, height: 40 },
                id4: { x: 0, y: 359, width: 164, height: 168 }
            }
        }, {
            id: "loaderBg",
            file: "images/loaderBg.jpg"
        }], ctx, canvas.width, canvas.height, false);
    // 
    oImageIds.logo = "id0";
    oImageIds.bgTop = "id1";
    oImageIds.loaderBar0 = "id2";
    oImageIds.loaderBar1 = "id3";
    oImageIds.bouncer = "id4";
    // callback init when all assets loaded
    preAssetLib.onReady(initLoadAssets); //
}
// 
function initLangSelect() {
    //ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    var oImgData;
    var j;
    var k;
    var gap = 10;
    var tileWidthNum = 0;
    var tileHeightNum = 0;
    var butScale = 1;
    // determining tile width num
    for (var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        if ((i + 1) * (oImgData.img.width * butScale) + (i + 2) * gap < canvas.width) {
            tileWidthNum++;
        }
        else {
            break;
        }
    }
    // determining tile height num
    tileHeightNum = Math.ceil(aLangs.length / tileWidthNum);
    // position buttons
    for (var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        j = canvas.width / 2 - (tileWidthNum / 2) * (oImgData.img.width * butScale) - ((tileWidthNum - 1) / 2) * gap;
        j += (i % tileWidthNum) * ((oImgData.img.width * butScale) + gap);
        k = canvas.height / 2 - (tileHeightNum / 2) * (oImgData.img.height * butScale) - ((tileHeightNum - 1) / 2) * gap;
        k += (Math.floor(i / tileWidthNum) % tileHeightNum) * ((oImgData.img.height * butScale) + gap);
        ctx.drawImage(oImgData.img, 0, 0, oImgData.img.width, oImgData.img.height, j, k, (oImgData.img.width * butScale), (oImgData.img.height * butScale));
        var oBut = { oImgData: oImgData, aPos: [j + (oImgData.img.width * butScale) / 2, k + (oImgData.img.height * butScale) / 2], scale: butScale, id: "none", noMove: true };
        userInput.addHitArea("langSelect", butEventHandler, { lang: aLangs[i] }, "image", oBut);
    }
}
//
function initLoadAssets() {
    // preload image above loader and lang specific 'loading...' text
    //var oImgData: any = preAssetLib.getData("preloadImage")
    // ctx.drawImage(oImgData.img, 0, 0)
    loadAssets();
}
// load assets
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
            id: "bg",
            file: "images/bg.png"
        }, {
            id: "menuBg",
            file: "images/menuBg.jpg"
        }, {
            id: "townBg",
            file: "images/townBg.jpg"
        }, {
            id: "splashLogo",
            file: "images/splashLogo.png"
        }, {
            id: "endBg",
            file: "images/endBg.jpg"
        }, {
            id: "splashLogo",
            file: "images/splashLogo.png"
        }, {
            id: "flare",
            file: "images/flare.png"
        }, {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: { x: 0, y: 306, width: 226, height: 151 },
                id1: { x: 228, y: 0, width: 226, height: 151 },
                id10: { x: 124, y: 459, width: 122, height: 77 },
                id11: { x: 0, y: 459, width: 122, height: 77 },
                id12: { x: 455, y: 232, width: 76, height: 77 },
                id13: { x: 455, y: 311, width: 76, height: 77 },
                id2: { x: 455, y: 153, width: 76, height: 77 },
                id3: { x: 404, y: 457, width: 76, height: 77 },
                id4: { x: 326, y: 457, width: 76, height: 77 },
                id5: { x: 248, y: 457, width: 76, height: 77 },
                id6: { x: 0, y: 153, width: 226, height: 151 },
                id7: { x: 0, y: 0, width: 226, height: 151 },
                id8: { x: 228, y: 305, width: 225, height: 150 },
                id9: { x: 228, y: 153, width: 225, height: 150 }
            }
        }, {
            id: "grub",
            file: "images/grub_88x87.png",
            oAnims: {
                spin0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                spin1: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                spin2: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32]
            }
        }, {
            id: "car",
            file: "images/car_190x124.png",
            oAnims: {
                drive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                crash: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
            }
        }, {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: { x: 825, y: 152, width: 200, height: 149 },
                id1: { x: 202, y: 1141, width: 200, height: 149 },
                id10: { x: 1020, y: 303, width: 174, height: 215 },
                id11: { x: 825, y: 387, width: 174, height: 184 },
                id12: { x: 606, y: 1228, width: 192, height: 52 },
                id13: { x: 1027, y: 0, width: 119, height: 44 },
                id14: { x: 972, y: 1228, width: 140, height: 47 },
                id15: { x: 1001, y: 520, width: 124, height: 45 },
                id16: { x: 800, y: 1228, width: 170, height: 40 },
                id17: { x: 202, y: 990, width: 200, height: 149 },
                id18: { x: 404, y: 1141, width: 200, height: 149 },
                id19: { x: 404, y: 990, width: 200, height: 149 },
                id2: { x: 825, y: 0, width: 200, height: 150 },
                id20: { x: 0, y: 1141, width: 200, height: 149 },
                id21: { x: 0, y: 990, width: 200, height: 149 },
                id22: { x: 1027, y: 46, width: 116, height: 88 },
                id3: { x: 825, y: 303, width: 193, height: 82 },
                id4: { x: 0, y: 0, width: 823, height: 593 },
                id5: { x: 606, y: 1114, width: 33, height: 65 },
                id6: { x: 606, y: 1054, width: 59, height: 58 },
                id7: { x: 714, y: 595, width: 412, height: 631 },
                id8: { x: 0, y: 595, width: 712, height: 393 },
                id9: { x: 606, y: 990, width: 62, height: 62 }
            }
        }, {
            id: "langText",
            file: "json/text.json"
        }, {
            id: "numbers",
            file: "images/numbers_87x102.png"
        }, {
            id: "titleLogo",
            file: "images/title/" + curLang + ".png"
        }, {
            id: "brandLogo",
            file: "images/title/logo.png"
        }, {
            id: "firework0",
            file: "images/firework0_150x150.png",
            oAnims: {
                explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                flash: [5, 4, 3, 2, 1, 0]
            }
        }, {
            id: "explosion0",
            file: "images/explosion0_214x199.png",
            oAnims: {
                explode: [4, 5, 6, 7, 8, 9, 10, 11]
            }
        }, {
            id: "spray",
            file: "images/spray_158x47.png",
            oAnims: {
                explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            }
        }], ctx, canvas.width, canvas.height);
    // game elements
    oImageIds.platform0 = "id0";
    oImageIds.platform10 = "id1";
    oImageIds.platform2 = "id2";
    oImageIds.rock0 = "id3";
    oImageIds.titleCar = "id4";
    oImageIds.lamp = "id5";
    oImageIds.cupIcon = "id6";
    oImageIds.endCharsLeft = "id7";
    oImageIds.endCharsRight = "id8";
    oImageIds.grubIcon = "id9";
    oImageIds.tut0 = "id10";
    oImageIds.tut1 = "id11";
    oImageIds.rock1 = "id12";
    oImageIds.mush0 = "id13";
    oImageIds.mush1 = "id14";
    oImageIds.mush2 = "id15";
    oImageIds.mush3 = "id16";
    oImageIds.platform11 = "id17";
    oImageIds.platform12 = "id18";
    oImageIds.platform13 = "id19";
    oImageIds.platform14 = "id20";
    oImageIds.platform15 = "id21";
    oImageIds.boomLogo = "id22";
    // UI buts
    oImageIds.playBut = "id0";
    oImageIds.playButOver = "id1";
    oImageIds.muteBut0 = "id2";
    oImageIds.muteBut0Over = "id3";
    oImageIds.muteBut1 = "id4";
    oImageIds.muteBut1Over = "id5";
    oImageIds.quitBut = "id6";
    oImageIds.quitButOver = "id7";
    oImageIds.replayBut = "id8";
    oImageIds.replayButOver = "id9";
    oImageIds.backBut = "id10";
    oImageIds.backButOver = "id11";
    oImageIds.pauseBut = "id12";
    oImageIds.pauseButOver = "id13";
    /* EXAMPLE SPRITE SHEET DATA
    {
            id: "bubble",
            file: "images/bubble_77x128.png",
            oAnims: {
                normal: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                caught: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
                holding: [33],
                ice: [34],
                fire: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
                jellyfish: [47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]

            }
      }
    */
    // callback init when all assets loaded
    assetLib.onReady(initSplash); // )
    gameState = "load";
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
//
function resizeCanvas() {
    var tempInnerWidth = window.innerWidth;
    var tempInnerHeight = window.innerHeight;
    canvas.height = tempInnerHeight;
    canvas.width = tempInnerWidth;
    canvas.style.width = tempInnerWidth + "px";
    canvas.style.height = tempInnerHeight + "px";
    var maxW;
    var maxH;
    var minW;
    var minH;
    canvasScale = 1;
    if (tempInnerWidth < tempInnerHeight) { // portrait
        /*  if (isRotated) {
              if (gameState != "loading") {
                  initBackFromRotate()
              }
  
          }*/
        maxW = maxWidth;
        maxH = maxHeight;
        minW = minWidth;
        minH = minHeight;
    }
    else { // landscape
        /*  if (!isRotated) {
  
              if (gameState != "loading") {
                  initRotateWarning()
              }
  
          }*/
        maxW = maxHeight;
        maxH = maxWidth;
        minW = minHeight;
        minH = minWidth;
    }
    if (canvas.width / canvas.height < minW / minH) {
        canvas.width = maxW;
        canvas.height = maxW * (tempInnerHeight / tempInnerWidth);
        canvasScale = maxW / tempInnerWidth;
    }
    else {
        canvas.height = minH;
        canvas.width = minH * (tempInnerWidth / tempInnerHeight);
        canvasScale = minH / tempInnerHeight;
    }
    // UPDATE RECT HIT AREAS HERE!
    switch (gameState) {
        case "game":
            gameState = "delay";
            clearTimeout(resetDelay);
            resetDelay = setTimeout(function () {
                platform.getGroundY();
                platform.y = (platform.groundY - platform.trackOffsetY);
                gameState = "game";
                previousTime = new Date().getTime();
                updateGameEvent();
            }, 500);
            userInput.removeHitArea("jump");
            userInput.addHitArea("jump", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 60, canvas.width, canvas.height] }, true);
            break;
        case "start":
        case "credits":
        case "gameComplete":
            break;
    }
    this.prevCanvasWidth = tempInnerWidth;
    this.prevCanvasHeight = tempInnerHeight;
    // fix for shitty iphones landscape mode
    window.scrollTo(0, 0);
}
//
function playSound(_id) {
    if (audioType == 1) {
        sound.play(_id);
    }
}
//
function toggleMute() {
    muted = !muted;
    if (audioType == 1) { // web audio
        if (muted) {
            Howler.mute(true);
            music.pause();
        }
        else {
            Howler.mute(false);
            playMusic();
            if (gameState == "game") {
                music.volume(.5);
            }
            else {
                music.volume(.25);
            }
        }
    }
    else if (audioType == 2) { // HTML5 audio
        if (muted) {
            music.pause();
        }
        else {
            playMusic();
        }
    }
}
