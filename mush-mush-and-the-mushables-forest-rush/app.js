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
            this.loaderOffsetY = 50;
            this.aPreloaderBar = new Array();
            this.jsonData = new Utils.JSONData();
            this.totalAssets = _aFileData.length;
            this.loaderSequence = 0;
            this.textData.langText = this.jsonData.textData;
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
                this.bouncerY = -230;
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
            // TESTING
            if (++this.loaderSequence >= 2) { // if (++this.loaderSequence == 1) { //
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
            ctx.drawImage(this.oLoaderBgImgData.img, 0, 0, this.oLoaderBgImgData.img.width, this.oLoaderBgImgData.img.height, canvas.width / 2 - (this.oLoaderBgImgData.img.width / 2), canvas.height - (this.oLoaderBgImgData.img.height) + this.loaderOffsetY, this.oLoaderBgImgData.img.width, this.oLoaderBgImgData.img.height);
            // boomerang logo
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.logo].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 313 + this.logoY + this.loaderOffsetY, bWidth, bHeight);
            // bouncer
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bouncer].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, this.bouncerY + this.loaderOffsetY, bWidth, bHeight);
            // loader top
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.bgTop].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - bHeight + this.loaderOffsetY, bWidth, bHeight);
            // loader bar bottom
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar0].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 170 + this.loaderOffsetY, bWidth, bHeight);
            // loader bar progress
            var bX = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].x;
            var bY = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].y;
            var bWidth = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].width;
            var bHeight = this.oLoaderAssetsImgData.oData.oAtlasData[oImageIds.loaderBar1].height;
            ctx.drawImage(this.oLoaderAssetsImgData.img, bX, bY, bWidth * Math.max(this.assetsLoaded / this.totalAssets, .01), bHeight, canvas.width / 2 - bWidth / 2, canvas.height - 157 + this.loaderOffsetY, bWidth * Math.max(this.assetsLoaded / this.totalAssets, .01), bHeight);
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
        AnimSprite.prototype.updateAnimation = function () {
            this.frameInc += this.fps * delta;
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
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
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
            // _posX *= canvasScale
            // _posY *= canvasScale
            _posX = (_posX - canvasX) * canvasScaleX;
            _posY = (_posY - canvasY) * canvasScaleY;
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
            //_posX *= canvasScale
            //_posY *= canvasScale
            _posX = (_posX - canvasX) * canvasScaleX;
            _posY = (_posY - canvasY) * canvasScaleY;
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
            //_posX *= canvasScale
            //_posY *= canvasScale
            _posX = (_posX - canvasX) * canvasScaleX;
            _posY = (_posY - canvasY) * canvasScaleY;
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
            //_posX *= canvasScale
            //_posY *= canvasScale
            _posX = (_posX - canvasX) * canvasScaleX;
            _posY = (_posY - canvasY) * canvasScaleY;
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
        function Background(_oImgData, _canvasWidth, _canvasHeight) {
            this.offsetX = 0;
            this.offsetY = 0;
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            this.aScrollPos = new Array({ offsetX: 0, offsetY: 0 }, { offsetX: 1, offsetY: 0 }, { offsetX: 1, offsetY: 1 }, { offsetX: 0, offsetY: 1 });
            this.oImgData = _oImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        //
        Background.prototype.updateMove = function (_speedX, _speedY) {
            //this.x -= (_speedX / 1.5) * _delta
            //this.y += (_speedY / 1.5) * _delta
            this.offsetX += (_speedX / 2) * delta;
            this.offsetY -= (_speedY / 2) * delta;
            //console.log(this.offsetX, this.offsetY) // offsetX range for -1000 and + 2000 (1569, 1406, -288, 1630, -350, -456, 1377)
        };
        //
        Background.prototype.updateScroll = function () {
            this.incY += 5 * delta;
            this.offsetX -= (Math.sin(this.incY / 10) * 50) * delta;
            this.offsetY += 50 * delta;
            /*this.incY += 5 * _delta

            this.x = (this.x - (Math.sin(this.incY / 10) * 50) * _delta)
            this.y = (this.y + 50 * _delta)*/
        };
        //
        Background.prototype.render = function () {
            /* var px: number = this.offsetX % this.canvasWidth
             var py: number = this.offsetY % this.canvasHeight
 
             if (px < 0) {
                 px += this.canvasWidth
             }
 
             if (py < 0) {
                 py += this.canvasHeight
             }*/
            // ensuring x scroll of bg does not go out of bounds and coveres range of offsetX = -1000 to 2000
            var temp = (this.oImgData.img.width - canvas.width) / 3000;
            var tempX = Math.min(Math.max((this.offsetX + 1000) * temp, 0), this.oImgData.img.width - canvas.width);
            // same with y scroll covering for 10x levels of 250px height from 500 to -2500
            temp = (this.oImgData.img.height - canvas.height) / 3000;
            var tempY = Math.min(Math.max((this.offsetY + 2500) * temp, 0), this.oImgData.img.height - canvas.height);
            //console.log(tempY)
            ctx.drawImage(this.oImgData.img, tempX, tempY, this.canvasWidth, //this.canvasWidth / 2,
            this.canvasHeight, //this.canvasHeight / 2,
            0, 0, this.canvasWidth, this.canvasHeight);
            /* this.x = this.x % this.canvasWidth
            this.y = this.y % this.canvasHeight




            var flipX: number = 1
            var flipY: number = 1

            if (this.x > 0) {
                flipX = -1
            }


            if (this.y > 0) {
                flipY = -1
            }


            for (var i: number = 0; i < 2; i++) {

                _ctx.drawImage(this.oImgData.img,
                        0,
                        0,
                        this.oImgData.img.width,
                        this.oImgData.img.height,
                        this.x + this.aScrollPos[i].offsetX * this.canvasWidth * flipX,
                        this.y + this.aScrollPos[i].offsetY * this.canvasHeight * flipY,
                        this.canvasWidth,
                        this.canvasHeight)

            }*/
        };
        return Background;
    }());
    Elements.Background = Background;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Screens = /** @class */ (function () {
        //
        function Screens(_oScreens, _oButs, _oTitle1ImgData, _oTitle2ImgData, _canvasWidth, _canvasHeight) {
            this.incY = 0;
            this.score = 0;
            this.highestScore = 0;
            this.posY = 0;
            this.bgX = 0;
            this.bgY = 0;
            this.oScreens = _oScreens;
            this.oButs = _oButs;
            this.oTitle1ImgData = _oTitle1ImgData;
            this.oTitle2ImgData = _oTitle2ImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = -this.canvasHeight;
            this.posX = 100;
        }
        //
        Screens.prototype.setRenderFunc = function (_type) {
            this.posY = -this.canvasHeight;
            switch (_type) {
                case "start":
                    this.renderFunc = this.renderStartScreen;
                    TweenLite.to(this, 1, { posX: 0, ease: "Back.easeOut" });
                    TweenLite.to(this, .5, { posY: 0 });
                    break;
                case "help":
                    break;
                case "end":
                    break;
            }
        };
        //
        Screens.prototype.render = function (_ctx, _delta) {
            this.renderFunc(_ctx, _delta);
        };
        //
        Screens.prototype.renderStartScreen = function (_ctx, _delta) {
            // for sin bounce
            this.incY += 5 * _delta;
            this.bgX += 50 * _delta;
            this.bgY -= (Math.sin(this.incY / 5) * 50) * _delta;
            // bg
            var px = this.bgX % this.canvasWidth;
            var py = this.bgY % this.canvasHeight;
            if (px < 0) {
                px += this.canvasWidth;
            }
            if (py < 0) {
                py += this.canvasHeight;
            }
            _ctx.drawImage(this.oScreens.startImageData.img, px, py, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight);
            // title
            _ctx.drawImage(this.oTitle2ImgData.img, this.canvasWidth / 2 - this.oTitle2ImgData.img.width / 2 - this.posX, 50);
            _ctx.drawImage(this.oTitle1ImgData.img, this.canvasWidth / 2 - this.oTitle2ImgData.img.width / 2 + this.posX, 50);
            // play but
            _ctx.drawImage(this.oButs.play.imageData.img, this.oButs.play.pos[0] - this.oButs.play.imageData.img.width / 2, this.oButs.play.pos[1] - this.oButs.play.imageData.img.height / 2 - Math.sin(this.incY) * 5 - this.posY);
        };
        return Screens;
    }());
    Elements.Screens = Screens;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Splash = /** @class */ (function () {
        //
        function Splash(_oSplashScreenImgData, _canvasWidth, _canvasHeight) {
            this.inc = 0;
            this.oSplashScreenImgData = _oSplashScreenImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = -this.canvasHeight;
            TweenLite.to(this, .5, { posY: 0 });
        }
        //
        Splash.prototype.render = function () {
            this.inc += 5 * delta;
            ctx.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY);
        };
        return Splash;
    }());
    Elements.Splash = Splash;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = /** @class */ (function () {
        //
        function Panel(_panelType, _aButs, _canvasWidth, _canvasHeight) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.posY0 = 0;
            this.posY1 = 0;
            this.letterSpace = 25;
            this.incY = 0;
            this.perc = 0;
            this.failState = 0;
            this.tutY = 500;
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oTopFlareImgData = assetLib.getData("flare");
            this.oNumbersImgData = assetLib.getData("numbers");
            this.oTitleBgImgData = assetLib.getData("titleBg");
            this.oFailBgImgData = assetLib.getData("failBg");
            this.oWinBgImgData = assetLib.getData("winBg");
            this.oTitleLogoImgData = assetLib.getData("titleLogo");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        //
        Panel.prototype.update = function () {
            this.incY += 5 * delta;
        };
        //
        Panel.prototype.tweenOutTut = function () {
            TweenLite.to(this, .3, { delay: this.tutShowTime, tutY: 500, ease: "Cubic.easeIn" });
        };
        //
        Panel.prototype.startTween1 = function () {
            this.posY = 300;
            TweenLite.to(this, .5, { posY: 0, ease: "Cubic.easeOut" });
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Quint.easeOut" });
        };
        //
        Panel.prototype.startTween2 = function () {
            this.posY = 800;
            TweenLite.to(this, .5, { posY: 0, ease: "Quad.easeOut" });
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Quint.easeOut" });
        };
        // start screen
        Panel.prototype.startTween3 = function () {
            this.posY = 500;
            TweenLite.to(this, 1, { posY: 0, ease: "Cubic.easeOut" });
            this.perc = 0;
            TweenLite.to(this, 1, { perc: 1, ease: "Cubic.easeOut" });
            this.butsY = 500;
            TweenLite.to(this, 1, { butsY: 0, ease: "Quint.easeOut" });
        };
        // level fail screen
        Panel.prototype.startTween4 = function () {
            var _this = this;
            this.failState = 0;
            this.posY = 500;
            this.posY0 = 500;
            this.posY1 = 150;
            // leaves array to fly about when land
            this.aLeaves = new Array();
            for (var i = 0; i < 10; i++) {
                var oTemp = {
                    incX: Math.random() * 1 - .5,
                    incY: Math.random() * .5 + .5,
                    x: canvas.width / 2 + Math.random() * 100 - 50,
                    y: canvas.height + 100,
                    rot: Math.random() * 360
                };
                this.aLeaves.push(oTemp);
            }
            this.perc = 0;
            TweenLite.to(this, 1, {
                perc: 1, ease: "Linear.easeNone",
                onComplete: function () {
                    _this.failState = 1;
                    // jiggle ground
                    _this.perc = .96;
                    TweenLite.to(_this, .5, { perc: 1, ease: "Bounce.easeOut" });
                    playSound("fallLand");
                    // border
                    TweenLite.to(_this, .5, { posY1: 0, ease: "Cubic.easeOut" });
                    // bring in mush and friends
                    TweenLite.to(_this, 1, { delay: 1, posY: 0, ease: "Cubic.easeOut" }); // friends
                    TweenLite.to(_this, .75, {
                        delay: 1.5, posY0: 0, ease: "Back.easeOut",
                        onComplete: function () {
                            // add retry but
                            var oRetryBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -110], align: [.5, 1], id: oImageIds.retryBut, idOver: oImageIds.retryButOver, flash: true };
                            playSound("voiceFailAppear" + Math.floor(Math.random() * 3));
                            userInput.addHitArea("retry", butEventHandler, null, "image", oRetryBut);
                            _this.aButs.push(oRetryBut);
                            addMuteBut(_this.aButs);
                            TweenLite.to(_this, 1, { butsY: 0, ease: "Quint.easeOut" });
                        }
                    });
                }
            });
            this.butsY = 500;
        };
        //
        Panel.prototype.render = function (_butsOnTop) {
            if (_butsOnTop === void 0) { _butsOnTop = true; }
            if (!_butsOnTop) {
                this.addButs();
            }
            switch (this.panelType) {
                case "start":
                    // bg
                    ctx.drawImage(this.oTitleBgImgData.img, 0, 0, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height, -this.perc * (this.oTitleBgImgData.img.width - canvas.width), 0, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height);
                    // mush
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMush].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMush].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMush].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMush].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 250 + this.posY * 1.2, canvas.height * .2, bWidth, bHeight);
                    // top right flare
                    ctx.save();
                    ctx.translate(canvas.width, 0);
                    ctx.scale(3, 3);
                    ctx.globalAlpha = .3;
                    ctx.rotate(this.incY / 20);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    // boom logo
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBoomerang].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBoomerang].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBoomerang].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBoomerang].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth - 20 + this.posY, canvas.height - bHeight - 15, bWidth, bHeight);
                    // show logo
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY * .8, 15, bWidth, bHeight);
                    // popcorn flare
                    ctx.save();
                    ctx.translate(60 - this.posY * .8, canvas.height - 90);
                    ctx.scale(.5, .35);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 20);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    ctx.save();
                    ctx.translate(60 - this.posY * .8, canvas.height - 90);
                    ctx.scale(.5, .35);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / -20);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    // popcorn
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titlePopcorn].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titlePopcorn].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titlePopcorn].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titlePopcorn].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 5 - this.posY * .8, canvas.height - 120, bWidth, bHeight);
                    // title
                    ctx.save();
                    ctx.translate(canvas.width / 2 + this.posY, 210);
                    ctx.drawImage(this.oTitleLogoImgData.img, 0, 0, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height, -this.oTitleLogoImgData.img.width / 2 + Math.sin(this.incY / 1.5) * 10, -this.oTitleLogoImgData.img.height / 2, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height);
                    ctx.restore();
                    break;
                case "credits":
                    var id = 3;
                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;
                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    // render correct panel
                    ctx.drawImage(this.oPanelsImgData.img, imgX, imgY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    break;
                case "game":
                    // show tutorial if on  end of first branch
                    if ((firstRunState == level && level < 3 && branchNearby.frameNum == 4) || this.tutY < 500) {
                        if (!tutorialOn && (firstRunState == level && level < 3 && branchNearby.frameNum == 4)) {
                            //userInput.addHitArea("jumpTouch", butEventHandler, { multiTouch: true }, "rect", { aRect: [0, 57, canvas.width, canvas.height] }, true)
                            tutorialStore[0] = speedX;
                            tutorialStore[1] = trackY;
                            tutorialStore[2] = trackX;
                            speedX = trackY = trackX = 0;
                            tutorialOn = true;
                            this.tutY = 500;
                            TweenLite.to(this, .3, { tutY: 0, ease: "Cubic.easeOut" });
                            this.tutShowTime = 2;
                        }
                        tutorialTimer += delta * 2;
                        this.tutShowTime -= delta;
                        // tut bg
                        var bX = panel.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].x;
                        var bY = panel.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].y;
                        var bWidth = panel.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].width;
                        var bHeight = panel.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].height;
                        ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 385 + 85, 150 + 160 + this.tutY, bWidth, bHeight);
                        if (level < 2) { // tuts 0 and 1
                            if (level == 0) { // tut 0
                                this.tutTimer = 2;
                                // tut 0
                                addText(0, 25, 220, "center", canvas.width - 240 + 85, canvas.height - 95 + 75 + this.tutY, "tut0", "#FFFFFF");
                            }
                            else if (level == 1) { // tut 1
                                this.tutTimer = 4;
                                // tut 1
                                addText(0, 25, 220, "center", canvas.width - 240 + 85, canvas.height - 95 + 75 + this.tutY, "tut1", "#FFFFFF");
                            }
                            if (Math.floor(tutorialTimer % this.tutTimer) == 0) {
                                // tut 0
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].height;
                                ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 350 + 105, canvas.height - 150 - bHeight + 90 + this.tutY, bWidth, bHeight);
                            }
                            else {
                                // tut 1
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].height;
                                ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 350 + 105, canvas.height - 150 - bHeight + 90 + this.tutY, bWidth, bHeight);
                            }
                        }
                        else {
                            // tut 2
                            addText(0, 25, 220, "center", canvas.width - 240 + 85, canvas.height - 95 + 75 + this.tutY, "tut2", "#FFFFFF");
                            // spiky
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutSpiky].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutSpiky].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutSpiky].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutSpiky].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 240 - bWidth / 2 + 100, canvas.height - 270 + 110 + this.tutY, bWidth, bHeight);
                        }
                    }
                    break;
                case "levelComplete":
                    // bg
                    ctx.drawImage(this.oWinBgImgData.img, 0, 0, this.oWinBgImgData.img.width, this.oWinBgImgData.img.height, 0, 0, this.oWinBgImgData.img.width, this.oWinBgImgData.img.height);
                    // mush  
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushWin].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushWin].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushWin].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushWin].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height - bHeight - 20, bWidth, bHeight);
                    // mush friends 
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendWin].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendWin].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendWin].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendWin].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -this.posY, canvas.height - bHeight - 20, bWidth, bHeight);
                    // popcorn icon
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 85, 165 - this.posY * .6, bWidth, bHeight);
                    // top right flare
                    ctx.save();
                    ctx.translate(canvas.width, 0);
                    ctx.scale(3, 3);
                    ctx.globalAlpha = .3;
                    ctx.rotate(this.incY / 20);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
                    ctx.restore();
                    // score
                    var temp = (acornScore * 10).toString();
                    if (temp.length < 2) {
                        temp = "0" + temp;
                    }
                    addDirectText(0, 70, "left", canvas.width / 2 - 40, 220 - this.posY * .6, temp, "#FFFFFF");
                    // level complete text
                    addText(0, 90, 500, "center", canvas.width / 2, 90 - this.posY + Math.sin(this.incY * .75) * 5, "levelComplete", "#FFFFFF");
                    // score text
                    addText(0, 30, 200, "center", canvas.width / 2, 155 - this.posY * .8, "score", "#FFFFFF");
                    break;
                case "gameEndFail":
                    // bg
                    ctx.drawImage(this.oFailBgImgData.img, 0, 0, this.oFailBgImgData.img.width, this.oFailBgImgData.img.height, 0, -this.perc * (this.oFailBgImgData.img.height - canvas.height), this.oFailBgImgData.img.width, this.oFailBgImgData.img.height);
                    if (this.failState == 0) {
                        // falling mush
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, (canvas.height * 2) * this.perc - canvas.height / 2 - bHeight / 2, bWidth, bHeight);
                    }
                    else {
                        // leaves
                        for (var i = 0; i < this.aLeaves.length; i++) {
                            if (this.aLeaves[i].y < canvas.height + 200) { // only update if on screen
                                this.aLeaves[i].incY -= (1.2 * delta);
                                this.aLeaves[i].y -= (this.aLeaves[i].incY * 1600) * delta;
                                this.aLeaves[i].x -= (this.aLeaves[i].incX * 500) * delta;
                                this.aLeaves[i].rot -= (this.aLeaves[i].incX * 500) * delta;
                                ctx.save();
                                ctx.translate(this.aLeaves[i].x, this.aLeaves[i].y);
                                ctx.rotate(this.aLeaves[i].rot * radian);
                                // leaf
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["leaf" + (i % 5)]].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["leaf" + (i % 5)]].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["leaf" + (i % 5)]].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["leaf" + (i % 5)]].height;
                                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                                ctx.restore();
                            }
                        }
                        // get up mush
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.mushFall1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -100, 150 + this.posY0, bWidth, bHeight);
                        // mush friend 0 
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY, canvas.height - bHeight, bWidth, bHeight);
                        // mush friend 1 
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.friendFall1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth + this.posY / 2, canvas.height - bHeight, bWidth, bHeight);
                        // popcorn icon
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].height;
                        ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 85, 165 - this.posY * .6, bWidth, bHeight);
                        // score
                        var temp = (acornScore * 10).toString();
                        if (temp.length < 2) {
                            temp = "0" + temp;
                        }
                        addDirectText(0, 70, "left", canvas.width / 2 - 40, 220 - this.posY * .6, temp, "#FFFFFF");
                        // you fell off text
                        addText(0, 90, 500, "center", canvas.width / 2, 90 - this.posY + Math.sin(this.incY * .75) * 5, "youFellOff", "#FFFFFF");
                        // total score text
                        addText(0, 30, 200, "center", canvas.width / 2, 155 - this.posY * .8, "totalScore", "#FFFFFF");
                        // try again text
                        addText(0, 30, 200, "center", canvas.width / 2, canvas.height - 195 + this.butsY, "tryAgain", "#FFFFFF");
                    }
                    // borders
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, this.posY1, this.canvasHeight);
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(canvas.width - this.posY1, 0, this.posY1, this.canvasHeight);
                    break;
                case "pause":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                    break;
            }
            if (_butsOnTop) {
                this.addButs();
            }
        };
        Panel.prototype.removeBut = function (_id) {
            for (var i = 0; i < this.aButs.length; i++) {
                if (this.aButs[i].id == _id) {
                    this.aButs.splice(i, 1);
                    i -= 1;
                }
            }
        };
        //
        Panel.prototype.addButs = function () {
            // for making other flashing lights flash less brightly when one is rolled over
            var aButOver = false;
            for (var i = 0; i < this.aButs.length; i++) {
                if (this.aButs[i].isOver) {
                    aButOver = true;
                    break;
                }
            }
            for (var i = 0; i < this.aButs.length; i++) {
                var offsetPosY;
                var floatY = 0;
                // only float buttons if incY is being incremented by an update
                if (this.incY != 0 && this.aButs[i].flash) {
                    if (this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i * 2.5) * 3) * 3;
                    }
                    else {
                        floatY = Math.sin((this.incY + i * 2.5) * 2) * 3;
                    }
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
                    var tempFlareScale = .75;
                    if (this.aButs[i].flareScale) {
                        tempFlareScale = this.aButs[i].flareScale;
                    }
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.scale((1 + floatY / 30) * tempFlareScale * .8, (1 + floatY / 30) * tempFlareScale * .8);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 5);
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
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0) / 2;
                        }
                        else {
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0);
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
var Elements;
(function (Elements) {
    var Hud = /** @class */ (function () {
        //
        function Hud(_level, _canvasWidth, _canvasHeight, _score) {
            this.score = 0;
            this.letterSpace = 25;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.level = _level;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.score = _score;
        }
        //
        Hud.prototype.render = function () {
            // home icon
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeIcon].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeIcon].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeIcon].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeIcon].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 140, 5, bWidth, bHeight);
            // popcorn icon
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.popcornIcon].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 20, 5, bWidth, bHeight);
            var temp = this.level.toString();
            if (temp.length < 2) {
                temp = "0" + temp;
            }
            addDirectText(0, 40, "left", canvas.width / 2 - 50, 48, temp, "#FFFFFF");
            temp = (acornScore * 10).toString();
            if (temp.length < 2) {
                temp = "0" + temp;
            }
            addDirectText(0, 40, "left", canvas.width / 2 + 70, 48, temp, "#FFFFFF");
            /*ctx.drawImage(this.oHudImgData.img, 0, 0);

            // score
            for (var i: number = 0; i < this.score.toString().length; i++) {


                var id: number = parseFloat(this.score.toString().charAt(i))

                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight


                ctx.drawImage(this.oNumbersImgData.img,
                              imgX,
                              imgY,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight,
                              270 + i * this.letterSpace - (this.letterSpace * this.score.toString().length) / 2,
                              12,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight);

            }

            // acorn score
            for (var i: number = 0; i < this.acornScore.toString().length; i++) {


                var id: number = parseFloat(this.acornScore.toString().charAt(i))

                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight


                ctx.drawImage(this.oNumbersImgData.img,
                              imgX,
                              imgY,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight,
                              57 + i * this.letterSpace,
                              12,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight);

            }

            // level count
            for (var i: number = 0; i < this.level.toString().length; i++) {


                var id: number = parseFloat(this.level.toString().charAt(i))

                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight


                ctx.drawImage(this.oNumbersImgData.img,
                              imgX,
                              imgY,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight,
                              492 + i * this.letterSpace,
                              12,
                              this.oNumbersImgData.oData.spriteWidth,
                              this.oNumbersImgData.oData.spriteHeight);

            }
            */
        };
        //
        Hud.prototype.updateScore = function (_score) {
            this.score = _score;
        };
        return Hud;
    }());
    Elements.Hud = Hud;
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var BgElement = /** @class */ (function () {
        //
        function BgElement(_oImgData) {
            this.x = 0;
            this.y = 0;
            this.removeMe = false;
            this.oImgData = _oImgData;
        }
        BgElement.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        //
        BgElement.prototype.render = function (_ctx) {
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x, this.y, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return BgElement;
    }());
    Utils.BgElement = BgElement;
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Branch = /** @class */ (function () {
        //
        function Branch(_oImgData, _id, _frame, _type, _isRight, _canvasWidth, _canvasHeight) {
            this.x = 0;
            this.y = 0;
            this.removeMe = false;
            this.bounceY = 0;
            this.largeBranchOffsetX = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oImgData = _oImgData;
            this.id = _id;
            this.isRight = _isRight;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.type = _type;
            this.spriteWidth = 162;
            this.frameNum = _frame;
            this.shroomId = Math.floor(Math.random() * 20 - 15);
        }
        //
        Branch.prototype.hitBounceBranch = function () {
            var _this = this;
            this.bounceY = 0;
            TweenLite.to(this, .1, {
                bounceY: 50, ease: "Cubic.easeOut",
                onComplete: function () {
                    TweenLite.to(_this, 1, { bounceY: 0, ease: "Elastic.easeOut" });
                }
            });
        };
        //
        Branch.prototype.update = function (_speedX, _speedY) {
            this.x -= _speedX * delta;
            this.y += _speedY * delta;
            // check bounds
            if ((this.y > this.canvasHeight * 1.5) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        //
        Branch.prototype.render = function () {
            if (this.frameNum >= 0) {
                var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - 5 - this.oImgData.oData.spriteWidth / 2, this.y + 40, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            }
            else if (this.frameNum == -1) { // bouncer
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bounceBranch].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bounceBranch].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bounceBranch].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.bounceBranch].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2 + this.largeBranchOffsetX, this.y + 100 - bHeight / 2 + this.bounceY, bWidth, bHeight);
            }
            else if (this.frameNum == -2) { // home
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeBranch].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeBranch].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeBranch].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.homeBranch].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2 + this.largeBranchOffsetX, this.y + 40 - bHeight / 2, bWidth, bHeight);
            }
        };
        //
        Branch.prototype.renderShroom = function () {
            if (this.shroomId >= 0 && this.frameNum >= 0) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["branchShroom" + this.shroomId]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["branchShroom" + this.shroomId]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["branchShroom" + this.shroomId]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["branchShroom" + this.shroomId]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, this.y - bHeight + 100, bWidth, bHeight);
            }
        };
        return Branch;
    }());
    Elements.Branch = Branch;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Squirrel = /** @class */ (function (_super) {
        __extends(Squirrel, _super);
        //
        function Squirrel(_oImg1Data, _canvasWidth, _canvasHeight, _callback) {
            var _this = _super.call(this, _oImg1Data, 23, 50, "falling") || this;
            _this.fallInc = 0;
            _this.oBranchData = new Object();
            _this.jumpOn = false;
            _this.crouchKeyDown = false;
            _this.crouchState = 0;
            _this.isRight = true;
            _this.alpha = 1;
            _this.alphaInc = 0;
            _this.pickUpState = "none";
            _this.hasFlipped = false;
            _this.oImg1Data = _oImg1Data;
            _this.canvasWidth = _canvasWidth;
            _this.canvasHeight = _canvasHeight;
            _this.callback = _callback;
            _this.state = "falling";
            _this.y = -50;
            _this.setOffset(1);
            _this.updateFunc = _this.falling;
            return _this;
        }
        Squirrel.prototype.setOffset = function (_id) {
            this.offsetY = 20; //45 // 50
            this.offsetX = 0; //-55
        };
        //
        Squirrel.prototype.setNearestBranch = function (_id, _type, _y) {
            if (_y > this.y) {
                this.oBranchData.lastNearestUnderId = _id;
            }
            this.oBranchData.curNearestId = _id;
            this.oBranchData.curNearestY = _y;
            this.oBranchData.curNearestType = _type;
        };
        //
        Squirrel.prototype.changeState = function (_state) {
            var _this = this;
            this.state = _state;
            //console.log(_state)
            switch (this.state) {
                case "running":
                    this.setAnimType("loop", this.state);
                    playSound("land" + Math.floor(Math.random() * 3));
                    if (this.hasFlipped) {
                        playSound("voiceRunning" + Math.floor(Math.random() * 2));
                        this.hasFlipped = false;
                    }
                    if (this.jumpOn) { // go straight to jump if landed and still holding down jump
                        this.fallRate = 550; // 450
                        this.changeState("jumping");
                        playSound("voiceJump" + Math.floor(Math.random() * 9));
                        this.jumpOn = false;
                    }
                    break;
                case "falling":
                    if (this.animId == "running") {
                        this.setAnimType("once", "running", false);
                    }
                    this.animEndedFunc = function () {
                        playSound("voiceOffBranch" + Math.floor(Math.random() * 3));
                        _this.setAnimType("loop", "falling");
                    };
                    this.fallInc = 150; // 100
                    break;
                case "hitting":
                    this.setAnimType("once", this.state);
                    this.animEndedFunc = function () { this.setAnimType("loop", "hitHold"); };
                    this.fallInc = 150; // 100
                    this.hitTween = TweenLite.to(this, .6, { offsetX: -200, offsetY: -150, ease: "Quad.easeOut" });
                    break;
                case "jumping":
                    // jump if running
                    if (this.animId == "running") {
                        this.animEndedFunc = function () { this.setAnimType("loop", "falling"); };
                        this.setAnimType("once", this.state);
                        this.fallInc = -350; // -300
                        this.crouchState = 0;
                    }
                    break;
                case "flipping":
                    // flip over
                    if (this.isRight) { // flip to left
                        this.isRight = false;
                        this.scaleX = -1;
                    }
                    else { // flip to right
                        this.isRight = true;
                        this.scaleX = 1;
                    }
                    this.fallInc = -900; // -875// -725 // jump high
                    this.animEndedFunc = function () { this.setAnimType("loop", "falling"); }; // default to falling anim after jump
                    this.setAnimType("once", "jumping");
                    this.hasFlipped = true;
                    // let app know we have flipped
                    this.callback("flip", { isRight: this.isRight });
                    break;
                case "home":
                    this.callback("home");
                    this.setAnimType("loop", "hide");
                    break;
            }
            this.updateFunc = this[this.state];
        };
        //
        Squirrel.prototype.jump = function () {
            if (this.state == "running") {
                this.fallRate = 500; // 500
                this.changeState("jumping");
                playSound("voiceJump" + Math.floor(Math.random() * 9));
            }
            this.jumpOn = true;
        };
        //
        Squirrel.prototype.jumpReleased = function () {
            if (this.state == "jumping") {
                this.fallRate = 1000; // 1000
            }
            this.jumpOn = false;
        };
        //
        Squirrel.prototype.update = function (_trackX, _trackY) {
            _super.prototype.updateAnimation.call(this);
            this.x += _trackX * delta;
            this.y += _trackY * delta;
            if (this.pickUpState == "invincible") {
                this.alphaInc += delta;
                this.alpha = Math.abs(Math.sin(this.alphaInc * 15));
            }
            else {
                this.alpha = 1;
            }
            this.updateFunc();
        };
        //
        Squirrel.prototype.render = function () {
            _super.prototype.render.call(this, ctx);
            // testing
            /* ctx.beginPath();
             ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
             ctx.fillStyle = "blue";
             ctx.fill();
             ctx.stroke();*/
        };
        //
        Squirrel.prototype.running = function (delta) {
            // if there is no branch underneath or cur nearest branch is not underfoot then fall
            if (this.oBranchData.curNearestId == null || this.oBranchData.curNearestY != this.y) {
                this.changeState("falling");
            }
        };
        //
        Squirrel.prototype.falling = function () {
            this.fallInc += 800 * delta;
            this.y += this.fallInc * delta;
            // if has passed through a branch that was once below then land on it
            //if (this.oBranchData.lastNearestUnderId == this.oBranchData.curNearestId && this.oBranchData.curNearestY < this.y) {
            if (this.oBranchData.curNearestY < this.y && this.y - this.oBranchData.curNearestY < 45) {
                this.y = this.oBranchData.curNearestY;
                this.changeState("running");
                //playSound("land")
            }
            // fall off bottom of screen
            if (this.y > this.canvasHeight * 1.3) {
                this.callback("endGame");
            }
        };
        //
        Squirrel.prototype.hitting = function () {
            this.fallInc += 800 * delta;
            this.y += this.fallInc * delta;
            // fall off bottom of screen
            if (this.y > this.canvasHeight * 1.3) {
                this.callback("endGame");
            }
            // keep mush drifitng off in direction of scroll when hit and fall
            if (this.offsetX != 0) {
                if (isRight) {
                    this.x -= 150 * delta;
                }
                else {
                    this.x += 150 * delta;
                }
            }
        };
        //
        Squirrel.prototype.home = function () {
        };
        //
        Squirrel.prototype.jumping = function () {
            if (this.fallInc > 0) {
                this.fallRate = 800;
            }
            this.fallInc += this.fallRate * delta;
            this.y += this.fallInc * delta;
            // landing on a  branch
            //if (this.oBranchData.lastNearestUnderId == this.oBranchData.curNearestId && this.oBranchData.curNearestY < this.y) {
            if (this.oBranchData.curNearestY < this.y && this.y - this.oBranchData.curNearestY < 45) {
                if (this.oBranchData.curNearestType == "stump") { // flip
                    this.y = this.oBranchData.curNearestY;
                    this.changeState("flipping");
                    playSound("voiceBigJump" + Math.floor(Math.random() * 5));
                    playSound("bounce");
                }
                else if (this.oBranchData.curNearestType == "home") { // end game good
                    this.y = this.oBranchData.curNearestY;
                    this.changeState("home");
                }
                else { // carry on running
                    this.y = this.oBranchData.curNearestY;
                    this.changeState("running");
                    //playSound("land")
                }
            }
            if (this.y > this.canvasHeight * 1.5) {
                this.callback("endGame");
            }
        };
        //
        Squirrel.prototype.flipping = function () {
            this.fallInc += 800 * delta;
            this.y += this.fallInc * delta;
            // if has passed through a branch that was once below then land on it
            //if (this.oBranchData.lastNearestUnderId == this.oBranchData.curNearestId && this.oBranchData.curNearestY < this.y) {
            if (this.oBranchData.curNearestY < this.y && this.y - this.oBranchData.curNearestY < 45) {
                this.y = this.oBranchData.curNearestY;
                this.changeState("running");
            }
        };
        return Squirrel;
    }(Utils.AnimSprite));
    Elements.Squirrel = Squirrel;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Acorn = /** @class */ (function (_super) {
        __extends(Acorn, _super);
        //
        function Acorn(_oImgData, _isRight, _canvasWidth, _canvasHeight) {
            var _this = _super.call(this, _oImgData, 15, 35, "spinning") || this;
            _this.typeId = 4;
            _this.canHit = true;
            _this.isRight = _isRight;
            _this.canvasWidth = _canvasWidth;
            _this.canvasHeight = _canvasHeight;
            _this.offsetX = -20;
            _this.offsetY = 45;
            _this.spriteWidth = 150;
            _this.animEndedFunc = _this.burst;
            return _this;
        }
        //
        Acorn.prototype.update = function (_trackX, _trackY) {
            _super.prototype.updateAnimation.call(this);
            this.x -= _trackX * delta;
            this.y += _trackY * delta;
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        //
        Acorn.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        //
        Acorn.prototype.magnetTo = function (_posX, _posY) {
            this.y -= (this.y - _posY) / 5;
            this.x -= (this.x - _posX) / 60;
        };
        //
        Acorn.prototype.hit = function () {
            this.canHit = false;
            this.setAnimType("once", "bursting");
            playSound("eat" + Math.floor(Math.random() * 4));
        };
        //
        Acorn.prototype.burst = function () {
            this.removeMe = true;
        };
        return Acorn;
    }(Utils.AnimSprite));
    Elements.Acorn = Acorn;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Leaf = /** @class */ (function (_super) {
        __extends(Leaf, _super);
        //
        function Leaf(_oImgData, _isRight, _canvasWidth, _canvasHeight) {
            var _this = _super.call(this, _oImgData, 20, 0, "falling") || this;
            _this.oImgData = _oImgData;
            _this.isRight = _isRight;
            _this.canvasWidth = _canvasWidth;
            _this.canvasHeight = _canvasHeight;
            _this.spriteWidth = 100;
            _this.frameInc = Math.floor(Math.random() * 38);
            return _this;
        }
        //
        Leaf.prototype.update = function (_speedX, _speedY) {
            _super.prototype.updateAnimation.call(this);
            this.x -= (_speedX * 2) * delta;
            this.y += (_speedY * 2 + 100) * delta;
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        return Leaf;
    }(Utils.AnimSprite));
    Elements.Leaf = Leaf;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Hedgehog = /** @class */ (function () {
        //
        function Hedgehog(_isRight, _canvasWidth, _canvasHeight) {
            this.canHit = true;
            this.incX = Math.random() * 500;
            this.removeMe = false;
            this.rotation = 0;
            this.offsetY = -20;
            this.radius = 50;
            this.hitY = 0;
            this.oImgData = assetLib.getData("gameElements");
            this.isRight = _isRight;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            //this.offsetX = -20
            //this.offsetY = 35
            this.spriteWidth = 100;
            //this.animEndedFunc = null
        }
        //
        Hedgehog.prototype.update = function (_trackX, _trackY) {
            this.incX += 15 * delta;
            var roll = (Math.sin(this.incX / 10) * 40) * delta;
            if (this.hitY == 0) { // only roll if not being hit
                this.x -= _trackX * delta + roll;
                this.y += _trackY * delta;
                this.rotation -= roll / 30;
            }
            else {
                this.rotation = this.incX;
            }
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                if (this.hitTween) {
                    this.hitTween.kill();
                }
                this.removeMe = true;
            }
        };
        //
        Hedgehog.prototype.render = function () {
            ctx.save();
            ctx.translate(this.x, this.y + this.offsetY + this.hitY);
            ctx.rotate(this.rotation);
            var bX = this.oImgData.oData.oAtlasData[oImageIds.spiky].x;
            var bY = this.oImgData.oData.oAtlasData[oImageIds.spiky].y;
            var bWidth = this.oImgData.oData.oAtlasData[oImageIds.spiky].width;
            var bHeight = this.oImgData.oData.oAtlasData[oImageIds.spiky].height;
            ctx.drawImage(this.oImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
            // testing
            /*ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();*/
        };
        //
        Hedgehog.prototype.hit = function () {
            var _this = this;
            this.hitTween = TweenLite.to(this, .3, {
                hitY: -100, ease: "Quad.easeOut",
                onComplete: function () {
                    _this.hitTween = TweenLite.to(_this, 1, { hitY: 600, ease: "Quad.easeIn" });
                }
            });
            this.canHit = false;
        };
        return Hedgehog;
    }());
    Elements.Hedgehog = Hedgehog;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Ledge = /** @class */ (function () {
        //
        function Ledge(_oImgData, _isRight, _canvasWidth, _canvasHeight) {
            this.canHit = true;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.radius = 15;
            this.oImgData = _oImgData;
            this.isRight = _isRight;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            //this.offsetX = -20
            //this.offsetY = 35
            this.spriteWidth = 100;
        }
        //
        Ledge.prototype.update = function (_trackX, _trackY) {
            this.x -= _trackX * delta;
            this.y += _trackY * delta;
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        //
        Ledge.prototype.render = function (y) {
            ctx.drawImage(this.oImgData.img, this.x - this.oImgData.oData.spriteWidth / 2, this.y - this.oImgData.oData.spriteHeight / 2);
        };
        //
        Ledge.prototype.hit = function () {
            this.canHit = false;
        };
        return Ledge;
    }());
    Elements.Ledge = Ledge;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Snowman = /** @class */ (function () {
        //
        function Snowman(_oImgData, _isRight, _canvasWidth, _canvasHeight) {
            this.canHit = true;
            this.removeMe = false;
            this.offsetX = 0;
            this.offsetY = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.radius = 15;
            this.oImgData = _oImgData;
            this.isRight = _isRight;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.spriteWidth = 100;
        }
        //
        Snowman.prototype.update = function (_delta, _trackX, _trackY) {
            this.x -= _trackX * _delta;
            this.y += _trackY * _delta;
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        //
        Snowman.prototype.render = function (_ctx) {
            _ctx.drawImage(this.oImgData.img, this.x - this.oImgData.oData.spriteWidth / 2, this.y - this.oImgData.oData.spriteHeight / 2);
        };
        //
        Snowman.prototype.hit = function () {
            this.canHit = false;
        };
        return Snowman;
    }());
    Elements.Snowman = Snowman;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var PickUp = /** @class */ (function (_super) {
        __extends(PickUp, _super);
        //
        function PickUp(_oImgData, _isRight, _typeId, _canvasWidth, _canvasHeight) {
            var _this = _super.call(this, _oImgData, 15, 35, "type" + _typeId) || this;
            _this.alpha = 1;
            _this.canHit = true;
            _this.typeId = _typeId;
            _this.isRight = _isRight;
            _this.canvasWidth = _canvasWidth;
            _this.canvasHeight = _canvasHeight;
            //this.offsetX = -20
            //this.offsetY = 45
            _this.spriteWidth = 150;
            _this.animEndedFunc = _this.burst;
            return _this;
        }
        //
        PickUp.prototype.update = function (_trackX, _trackY) {
            _super.prototype.updateAnimation.call(this);
            this.x -= _trackX * delta;
            this.y += _trackY * delta;
            var sinScale = Math.abs(Math.sin(this.x / 70)) / 10;
            if (this.canHit) {
                this.scaleX = .9 + sinScale;
                this.scaleY = 1 - sinScale;
            }
            // check bounds
            if ((this.y > this.canvasHeight * 2) || (this.x < 0 - this.spriteWidth && this.isRight) || (this.x > this.canvasWidth + this.spriteWidth && !this.isRight)) {
                this.removeMe = true;
            }
        };
        //
        PickUp.prototype.magnetTo = function (_posY) {
        };
        //
        PickUp.prototype.hit = function () {
            TweenLite.to(this, .5, { scaleX: 2, scaleY: 2, ease: "Quad.easeOut" });
            this.canHit = false;
            this.setAnimType("once", "bursting");
        };
        //
        PickUp.prototype.burst = function () {
            this.removeMe = true;
        };
        return PickUp;
    }(Utils.AnimSprite));
    Elements.PickUp = PickUp;
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var JSONData = /** @class */ (function () {
        //
        function JSONData() {
            this.textData = {
                "font0": {
                    "en": "Mindset",
                    "fr": "Mindset",
                    "it": "Mindset",
                    "es": "Mindset",
                    "de": "Mindset",
                    "pt": "Mindset",
                    "hu": "Mindset",
                    "ro": "Mindset",
                    "pl": "Mindset",
                    "ru": "Russo One",
                    "nl": "Mindset",
                    "no": "Mindset",
                    "da": "Mindset",
                    "ar": "Mada",
                    "tr": "Mindset",
                    "bg": "Russo One",
                    "cs": "Mindset",
                    "sv": "Mindset",
                    "es-419": "Mindset",
                    "pt-br": "Mindset"
                },
                "forestRush": {
                    "en": "FOREST RUSH!",
                    "es": "",
                    "de": "FOREST RUSH!",
                    "pt": "CORRIDA NA FLORESTA",
                    "hu": "ERDEI KALAND!",
                    "ro": "FOREST RUSH!",
                    "pl": "LEŚNY POŚCIG!",
                    "bg": "",
                    "ru": "ЛЕСНОЙ ЗАБЕГ",
                    "nl": "BOSLOOP!",
                    "no": "FOREST RUSH!",
                    "da": "FOREST RUSH!",
                    "ar": "FOREST RUSH!",
                    "tr": "ORMAN KOŞUSU!",
                    "fr": "FORÊT EN FOLIE !",
                    "it": "Corsa nella foresta",
                    "cs": "",
                    "sv": "FOREST RUSH!",
                    "es-419": "¡CARRERA EN EL BOSQUE!",
                    "pt-br": "CORRIDA NA FLORESTA!"
                },
                "tut0": {
                    "en": "Tap to jump",
                    "es": "",
                    "de": "Tippen zum Springen",
                    "pt": "Toca para saltar",
                    "hu": "Kopp az ugráshoz",
                    "ro": "Apasă pentru a sări",
                    "pl": "Stuknij, aby skoczyć",
                    "bg": "",
                    "ru": "Нажми, чтобы прыгнуть",
                    "nl": "Tik om te springen",
                    "no": "Trykk for å hoppe",
                    "da": "Tryk for at hoppe",
                    "ar": "انقر للقفز",
                    "tr": "ZIPLAMAK İÇİN DOKUN.",
                    "fr": "Touche pour sauter",
                    "it": "Tocca per saltare",
                    "cs": "",
                    "sv": "Tryck för att hoppa",
                    "es-419": "Toca para saltar",
                    "pt-br": "Toque para saltar"
                },
                "tut1": {
                    "en": "Hold down to jump further",
                    "es": "",
                    "de": "Gedrückt halten, um weiter zu springen",
                    "pt": "Mantém premido para saltares mais longe",
                    "hu": "Ha lenyomva tartod, messzebbre ugrasz",
                    "ro": "Ține apăsat pentru a sări mai departe",
                    "pl": "Przytrzymaj niżej, aby skoczyć dalej",
                    "bg": "",
                    "ru": "Удерживай нажатие, чтобы прыгнуть дальше",
                    "nl": "Houd ingedrukt om verder te springen",
                    "no": "Hold nede for å hoppe lenger",
                    "da": "Hold den nede for at hoppe længere",
                    "ar": "واصل الضغط لقفزة أقوى وأعلى",
                    "tr": "DAHA İLERİ ZIPLAMAK İÇİN BASILI TUT.",
                    "fr": "Touche plus longtemps pour sauter plus loin",
                    "it": "Tieni premuto per salti più lunghi",
                    "cs": "",
                    "sv": "Håll nere för att hoppa längre",
                    "es-419": "Mantén presionado para saltar más lejos",
                    "pt-br": "Mantenha pressionado para saltar mais longe"
                },
                "tut2": {
                    "en": "Avoid the chestnuts!",
                    "es": "",
                    "de": "Weiche den Kastanien aus!",
                    "pt": "Evita as castanhas!",
                    "hu": "Kerüld ki a gesztenyéket!",
                    "ro": "Evită castanele!",
                    "pl": "Unikaj kasztanów!",
                    "bg": "",
                    "ru": "Избегай каштанов!",
                    "nl": "Vermijd de kastanjes!",
                    "no": "Unngå kastanjene!",
                    "da": "Undgå kastanjerne!",
                    "ar": "تجنب أشواك الكستناء!",
                    "tr": "DİKENLİ KESTANELERE DEĞME!",
                    "fr": "Évite les châtaignes !",
                    "it": "Evita le castagne!",
                    "cs": "",
                    "sv": "Undvik kastanjerna!",
                    "es-419": "¡Esquiva las castañas!",
                    "pt-br": "Cuidado com as castanhas!"
                },
                "youFellOff": {
                    "en": "YOU FELL OFF!",
                    "es": "",
                    "de": "RUNTERGEFALLEN!",
                    "pt": "CAÍSTE!",
                    "hu": "LEPOTTYANTÁL!",
                    "ro": "AI CĂZUT!",
                    "pl": "SPADŁEŚ!",
                    "bg": "",
                    "ru": "ПАДЕНИЕ!",
                    "nl": "JE BENT GEVALLEN!",
                    "no": "DU FALT NED!",
                    "da": "DU FALDT NED!",
                    "ar": "لقد وقعت!",
                    "tr": "DÜŞTÜN!",
                    "fr": "TU ES TOMBÉ !",
                    "it": "SEI CADUTO!",
                    "cs": "",
                    "sv": "DU FÖLL AV!",
                    "es-419": "¡TE CAÍSTE!",
                    "pt-br": "VOCÊ CAIU!"
                },
                "totalScore": {
                    "en": "TOTAL SCORE",
                    "es": "",
                    "de": "GESAMTE PUNKTE",
                    "pt": "PONTUAÇÃO TOTAL",
                    "hu": "ÖSSZPONTSZÁM",
                    "ro": "SCOR TOTAL",
                    "pl": "ŁĄCZNY WYNIK",
                    "bg": "",
                    "ru": "ОБЩИЙ СЧЕТ",
                    "nl": "TOTALE SCORE",
                    "no": "TOTAL POENGSUM",
                    "da": "POINT I ALT",
                    "ar": "النتيجة الكاملة",
                    "tr": "TOPLAM PUAN",
                    "fr": "SCORE TOTAL",
                    "it": "PUNTEGGIO TOTALE",
                    "cs": "",
                    "sv": "TOTALPOÄNG",
                    "es-419": "PUNTAJE TOTAL",
                    "pt-br": "PONTUAÇÃO TOTAL"
                },
                "tryAgain": {
                    "en": "TRY AGAIN",
                    "es": "",
                    "de": "NOCH EINMAL",
                    "pt": "TENTA NOVAMENTE",
                    "hu": "PRÓBÁLD ÚJRA",
                    "ro": "ÎNCEARCĂ DIN NOU",
                    "pl": "SPRÓBUJ PONOWNIE",
                    "bg": "",
                    "ru": "ПОПРОБУЙ ЕЩЕ РАЗ",
                    "nl": "OPNIEUW PROBEREN",
                    "no": "PRØV IGJEN",
                    "da": "PRØV IGEN",
                    "ar": "حاول مجددًا",
                    "tr": "TEKRAR DENE",
                    "fr": "RÉESSAYER",
                    "it": "RIPROVA",
                    "cs": "",
                    "sv": "FÖRSÖK IGEN",
                    "es-419": "VUELVE A INTENTARLO",
                    "pt-br": "TENTE NOVAMENTE"
                },
                "levelComplete": {
                    "en": "LEVEL COMPLETE!",
                    "es": "",
                    "de": "LEVEL GESCHAFFT!",
                    "pt": "NÍVEL CONCLUÍDO!",
                    "hu": "PÁLYA TELJESÍTVE",
                    "ro": "NIVEL TERMINAT!",
                    "pl": "POZIOM UKOŃCZONY!",
                    "bg": "",
                    "ru": "УРОВЕНЬ ПРОЙДЕН!",
                    "nl": "LEVEL VOLTOOID!",
                    "no": "NIVÅ FULLFØRT!",
                    "da": "DU GENNEMFØRTE BANEN!",
                    "ar": "اكتمل المستوى!",
                    "tr": "BÖLÜM TAMAMLANDI!",
                    "fr": "NIVEAU TERMINÉ !",
                    "it": "LIVELLO COMPLETATO",
                    "cs": "",
                    "sv": "NIVÅ AVKLARAD!",
                    "es-419": "¡TERMINASTE EL NIVEL!",
                    "pt-br": "NÍVEL COMPLETO!"
                },
                "score": {
                    "en": "SCORE",
                    "es": "",
                    "de": "PUNKTE",
                    "pt": "PONTUAÇÃO",
                    "hu": "PONT",
                    "ro": "SCOR",
                    "pl": "WYNIK",
                    "bg": "",
                    "ru": "СЧЕТ",
                    "nl": "SCORE",
                    "no": "POENG",
                    "da": "POINT",
                    "ar": "النتيجة",
                    "tr": "PUAN",
                    "fr": "SCORE",
                    "it": "PUNTEGGIO",
                    "cs": "",
                    "sv": "POÄNG",
                    "es-419": "PUNTAJE",
                    "pt-br": "PONTUAÇÃO"
                }
            };
        }
        return JSONData;
    }());
    Utils.JSONData = JSONData;
})(Utils || (Utils = {}));
/// <reference path="AssetLoader.ts" />
/// <reference path="AnimSprite.ts" />
/// <reference path="BasicSprite.ts" />
/// <reference path="UserInput.ts" />
/// <reference path="FpsMeter.ts" />
/// <reference path="Background.ts" />
/// <reference path="Screens.ts" />
/// <reference path="Splash.ts" />
/// <reference path="Panel.ts" />
/// <reference path="Hud.ts" />
/// <reference path="BgElement.ts" />
/// <reference path="Branch.ts" />
/// <reference path="Squirrel.ts" />
/// <reference path="Acorn.ts" />
/// <reference path="Leaf.ts" />
/// <reference path="Hedgehog.ts" />
/// <reference path="Ledge.ts" />
/// <reference path="Snowman.ts" />
/// <reference path="PickUp.ts" />
/// <reference path="JSONData.ts" />
/// <reference path="../defs/howler.js.d.ts" />
/// <reference path="../defs/index.d.ts" />
/// <reference path="../defs/seedrandom.js.d.ts" />
/// <reference path="tsLibs/references.ts" />
/*---------------------------------------------------


mush mush runner

 
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
canvas.width = 720;
canvas.height = 480;
var canvasX;
var canvasY;
var canvasScaleX;
var canvasScaleY;
var div = document.getElementById('canvas-wrapper'); // get reference to the container div
var sound;
var music;
var ios9FirstTouch = false;
var audioType = 0;
var muted = false;
var oImageIds = {};
var splash;
var splashTimer = 0;
var screens;
var assetLib;
var preAssetLib;
var rotatePause = false;
var manualPause = false;
var isMobile = false;
var gameState = "loading";
var aLangs = new Array("EN"); // ,"DE","TR")//, "ES","FR");
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var hasFocus = true;
var radian = Math.PI / 180;
if (navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
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
    // secondary delayed resize for slow devices
    setTimeout(function () {
        resizeCanvas();
    }, 2000);
    // resize canvas when browser is resized (or orientation change)
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        // secondary delayed resize for slow devices
        setTimeout(function () {
            resizeCanvas();
        }, 200);
    }, false);
});
//---------------------------------------------------
// AUDIO
//---------------------------------------------------
// create howl to load audio assets if device has web audio or is not android
if (!isIE10 && (typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    //TEMP TO MUTE ALL SOUNDS WHILE TESTING UNTIL READY TO ADD SFX
    audioType = 1; // 1
    sound = new Howl({
        src: ['audio/sound.mp3'],
        sprite: {
            silence: [
                0,
                502.87981859410434
            ],
            bounce: [
                1500,
                839.9999999999999
            ],
            eat0: [
                3000,
                346.37188208616766
            ],
            eat1: [
                4500,
                401.5873015873019
            ],
            eat2: [
                6000,
                416.66666666666697
            ],
            eat3: [
                7500,
                491.9274376417233
            ],
            fallLand: [
                9000,
                1397.709750566893
            ],
            hitSpike: [
                11500,
                679.9999999999998
            ],
            levelComplete: [
                13000,
                3679.9999999999995
            ],
            voiceBigJump0: [
                17500,
                1597.3015873015868
            ],
            voiceBigJump1: [
                20000,
                1654.716553287983
            ],
            voiceBigJump2: [
                22500,
                1019.4104308390024
            ],
            voiceBigJump3: [
                25000,
                1129.7959183673463
            ],
            voiceBigJump4: [
                27500,
                805.1473922902481
            ],
            voiceFailAppear0: [
                29000,
                1610.2947845804997
            ],
            voiceFailAppear1: [
                31500,
                702.0181405895727
            ],
            voiceFailAppear2: [
                33000,
                898.8888888888908
            ],
            voiceFalling: [
                34500,
                5677.278911564627
            ],
            voiceHitSpike0: [
                41000,
                404.6031746031744
            ],
            voiceHitSpike1: [
                42500,
                1119.7505668934227
            ],
            voiceHitSpike2: [
                45000,
                519.6825396825418
            ],
            voiceJump0: [
                46500,
                505.6235827664395
            ],
            voiceJump1: [
                48000,
                421.3605442176842
            ],
            voiceJump2: [
                49500,
                928.5260770975085
            ],
            voiceJump3: [
                51000,
                449.45578231292416
            ],
            voiceJump4: [
                52500,
                379.2290249433137
            ],
            voiceJump5: [
                54000,
                545.4195011337858
            ],
            voiceJump6: [
                55500,
                318.14058956916114
            ],
            voiceJump7: [
                57000,
                337.6417233560076
            ],
            voiceJump8: [
                58500,
                561.8140589569193
            ],
            voiceRunning0: [
                60000,
                1280.0000000000011
            ],
            voiceRunning1: [
                62500,
                4121.768707482999
            ],
            voiceWin0: [
                68000,
                1782.7437641723377
            ],
            voiceWin1: [
                70500,
                1349.3877551020432
            ],
            voiceWin2: [
                73000,
                944.8526077097483
            ],
            voiceWin3: [
                74500,
                2127.4149659863897
            ],
            voiceWin4: [
                78000,
                2307.097505668935
            ],
            voiceOffBranch0: [
                81500,
                383.5374149659856
            ],
            voiceOffBranch1: [
                83000,
                301.2698412698427
            ],
            voiceOffBranch2: [
                84500,
                287.8911564625781
            ],
            land0: [
                86000,
                158.63945578230698
            ],
            land1: [
                87500,
                259.43310657596896
            ],
            land2: [
                89000,
                197.61904761904248
            ]
        }
    });
    music = new Howl({
        src: ['audio/music.mp3'],
        volume: 0,
        loop: true
    });
}
//---------------------------------------------------
// GAME SPECIFIC VARS
//---------------------------------------------------
var panel;
var hud;
var background;
var totalScore = 0;
var levelScore = 0;
var acornScore = 0;
var prevAcornScore = 0;
var aBranches;
var aAcorns;
var aHedgehogs;
var aLedges;
var aSnowmen;
var aLeaves;
var targSpeedX;
var speedX = 0;
var speedY = 0;
var aBranchWidthGaps = new Array(150, 225, 300, 375);
var aBranchHeightGaps = new Array(0, 75, -75);
var aAcornHeights = new Array(0, -55, -110);
var nextBranchWidthGap = aBranchWidthGaps[0];
var squirrel;
var branchId;
var stumpDist;
var flipPosX;
var isRight = true;
var lastBranchY;
var trackX;
var trackY;
var level;
var branchFloors;
var leafDropInc;
var pickUpTimer;
var pickUpTimerIsOn;
var hasPickUp;
var startSeed = Math.round(Math.random() * 10000);
var firstRunState = 0;
var tutorialTimer = 0;
var tutorialOn = false;
var tutorialStore = new Array(0, 0, 0);
var branchType;
var aBranchTypes = new Array([[5, 16],
    [1, 2, 3, 6, 7, 17, 18, 19],
    [4, 20]], // any connecting back end
[[8],
    [9, 10, 12, 13, 14],
    [11, 15]] // moss back end
);
var branchNearby;
var mushScreenOffset = 250;
var totalLevelBranches;
//var fpsMeter: Utils.FpsMeter = new Utils.FpsMeter(320)
//---------------------------------------------------
// GAME SPECIFIC METHODS 
//---------------------------------------------------
// let's party
//loadLang()
function loadLang(_lang) {
    curLang = _lang;
    loadPreAssets();
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
    // TESTING
    /*var urlParams = new (<any>window).URLSearchParams(window.location.search);
    curLang = urlParams.get('lang')

    if (!curLang || curLang == null || curLang == undefined) {
        curLang = "en"
    }

    loadPreAssets()*/
    /*curLang = _curLang

    if (!curLang || curLang == null || curLang == undefined) {
        curLang = "en"
    }

    loadPreAssets()*/
}
//
function initSplash() {
    gameState = "splash";
    resizeCanvas();
    /*splash = new Elements.Splash(assetLib.getData("splash"), canvas.width, canvas.height)

    previousTime = new Date().getTime();
    updateSplashScreenEvent();*/
    if (audioType == 1 && !muted) {
        playMusic();
        if (!hasFocus) {
            music.pause();
        }
    }
    // testing
    //initLevelComplete()
    initStartScreen();
}
//
function initStartScreen() {
    gameState = "start";
    firstRunState = 0;
    level = 0; //0
    acornScore = 0;
    prevAcornScore = 0;
    if (audioType == 1) {
        music.fade(music.volume(), .45, 100);
    }
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -110], align: [.5, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("startGame", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oPlayBut);
    addMuteBut(aButs);
    // panel
    panel = new Elements.Panel(gameState, aButs, canvas.width, canvas.height);
    panel.startTween3();
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
        var oMuteBut = { oImgData: assetLib.getData("uiButs"), aPos: [44, 40], align: [0, 0], id: mb, idOver: mbOver };
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
function initPreGame() {
    gameState = "tutorial";
    if (level > 2) {
        initGame();
        return;
    }
    background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height); // set background first so tutorial can use it
    var oContinueBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -150], align: [.5, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("continue", butEventHandler, null, "image", oContinueBut);
    var aButs = new Array(oContinueBut);
    addMuteBut(aButs);
    // bg
    background.render();
    // panel
    panel = new Elements.Panel(gameState + level, aButs, canvas.width, canvas.height);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateTutorialScreenEvent();
}
//
/*function initCreditsScreen(): void {
    gameState = "credits"

    var oBackBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [100, 430], scale: 1, frame: 4 }

    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut)

    var aButs: any[] = new Array(oBackBut)

    addMuteBut(aButs)

    // panel
    panel = new Elements.Panel(
    assetLib.getData("panels"),

    assetLib.getData("numbers"),
    gameState,
    aButs,
    canvas.width,
    canvas.height)

    panel.startTween2()

    previousTime = new Date().getTime();
    updateCreditsScreenEvent();

}*/
//
function initGame() {
    gameState = "game";
    if (audioType == 1) {
        music.fade(music.volume(), .7, 100);
    }
    levelScore = 0;
    pickUpTimer = 0;
    pickUpTimerIsOn = false;
    hasPickUp = false;
    acornScore = prevAcornScore;
    totalLevelBranches = 0;
    Math.seedrandom(level + startSeed);
    squirrel = new Elements.Squirrel(assetLib.getData("squirrel1"), canvas.width, canvas.height, squirrelCallback);
    background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height); // set background first so tutorial can use it
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [125, 40], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    //userInput.addHitArea("jumpTouch", butEventHandler, { multiTouch: true }, "rect", { aRect: [0, 57, canvas.width, canvas.height] }, true)
    userInput.addHitArea("jumpTouch", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 50, canvas.width, canvas.height] }, true);
    hud = new Elements.Hud(level + 1, canvas.width, canvas.height, levelScore);
    // panel
    panel = new Elements.Panel(gameState, aButs, canvas.width, canvas.height);
    panel.startTween1();
    targSpeedX = 275 * Math.min((1 + level / 18), 1.7);
    speedX = 0;
    speedY = 0;
    flipPosX = mushScreenOffset;
    isRight = true;
    nextBranchWidthGap = aBranchWidthGaps[0];
    branchId = 0;
    aBranches = new Array();
    aAcorns = new Array();
    aLeaves = new Array();
    aLedges = new Array();
    aSnowmen = new Array();
    aHedgehogs = new Array();
    addStartBranch();
    stumpDist = 5;
    branchFloors = 0;
    leafDropInc = 0;
    previousTime = new Date().getTime();
    updateGameEvent();
}
//
function butEventHandler(_id, _oData) {
    //console.log(_id)
    // userInput.logAllHitAreas()
    switch (_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            initLoadAssets();
            break;
        case "startGame":
            playSound("voiceBigJump" + (Math.floor(Math.random() * 4) + 1));
            userInput.removeHitArea("startGame");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("moreGames");
            initGame();
            break;
            /* case "credits":
                 playSound("click")
                 userInput.removeHitArea("startGame")
                 userInput.removeHitArea("credits")
                 userInput.removeHitArea("moreGames")
     
                 initCreditsScreen()*/
            break;
        case "backFromCredits":
            userInput.removeHitArea("backFromCredits");
            initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            break;
        case "continue": // from tutorial
            userInput.removeHitArea("continue");
            initGame();
            break;
        case "upKeyEvent":
        case "jumpTouch":
            if (_oData.isDown) {
                if (tutorialOn) {
                    speedX = tutorialStore[0];
                    trackY = tutorialStore[1];
                    trackX = tutorialStore[2];
                    tutorialOn = false;
                    firstRunState = level + 1;
                    panel.tweenOutTut();
                }
                squirrel.jump();
            }
            else {
                squirrel.jumpReleased();
            }
            break;
        case "mute":
            toggleMute();
            // remove mute button from panel array
            panel.aButs.pop();
            addMuteBut(panel.aButs);
            break;
        case "pause":
        case "resumeFromPause":
            toggleManualPause();
            break;
        case "nextFromLevelComplete":
            playSound("voiceBigJump" + (Math.floor(Math.random() * 4) + 1));
            userInput.removeHitArea("nextFromLevelComplete");
            userInput.removeHitArea("quitFromLevelComplete");
            level++;
            initGame();
            break;
        /*  case "facebookLink":
              console.log("I reached level " + (level + 1) + " in Nut Rush 'Summer Sprint' and scored " + (levelScore + totalScore) + " points!")
              break*/
        case "quitFromLevelComplete":
            userInput.removeHitArea("nextFromLevelComplete");
            userInput.removeHitArea("quitFromLevelComplete");
            totalScore = 0;
            level = 0;
            initStartScreen();
            break;
        case "retry":
            playSound("voiceBigJump" + (Math.floor(Math.random() * 4) + 1));
            userInput.removeHitArea("retry");
            userInput.removeHitArea("quitFromLevelFail");
            userInput.removeHitArea("facebookLink");
            initGame();
            break;
        case "quitFromLevelFail":
            userInput.removeHitArea("retry");
            userInput.removeHitArea("quitFromLevelFail");
            userInput.removeHitArea("facebookLink");
            totalScore = 0;
            level = 0;
            initStartScreen();
            break;
        case "quitFromPause":
            playSound("voiceOffBranch" + Math.floor(Math.random() * 2));
            toggleManualPause();
            userInput.removeHitArea("pause");
            // ADD REMOVES to stop user from being able to interact with game that toggle pause has added inputs again
            userInput.removeHitArea("jumpTouch");
            userInput.removeKey("upKeyEvent");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("resumeFromPause");
            userInput.removeHitArea("moreGames");
            levelScore = 0;
            totalScore = 0;
            initStartScreen();
            break;
    }
}
//
function addStartBranch() {
    var branchLength = 6;
    var frame;
    var yPos = canvas.height / 2;
    for (var i = 0; i < branchLength; i++) {
        if (branchLength == 1) { // only one section
            frame = 0;
        }
        else if (i == 0) { // first section
            frame = 5;
        }
        else if (i == branchLength - 1) { // last section
            frame = 4;
        }
        else { // mid section
            frame = aBranchTypes[0][1][Math.floor(Math.random() * aBranchTypes[0][1].length)];
        }
        var branch = new Elements.Branch(assetLib.getData("branch"), branchId++, frame, "branch", isRight, canvas.width, canvas.height);
        branch.x = i * branch.spriteWidth;
        branch.y = yPos;
        aBranches.push(branch);
    }
}
//
function addHome() {
    var branch;
    if (isRight) { // scrolling right
        branch = new Elements.Branch(assetLib.getData("branch"), branchId++, -2, "home", !isRight, canvas.width, canvas.height);
        branch.y = aBranches[aBranches.length - 1].y - 75;
        branch.largeBranchOffsetX = 30;
        aBranches.push(branch);
        branch.x = canvas.width + 75;
    }
    else { // scrolling right
        var branch = new Elements.Branch(assetLib.getData("branch"), branchId++, -2, "home", !isRight, canvas.width, canvas.height);
        branch.y = aBranches[aBranches.length - 1].y - 75;
        branch.largeBranchOffsetX = -30;
        aBranches.push(branch);
        branch.x = -75;
    }
}
//
function addStump() {
    var frame;
    var branchLength = 4;
    var branch;
    stumpDist = 5;
    hasPickUp = false;
    // ready to add home?
    if (++branchFloors > level) {
        addHome();
        return;
    }
    if (isRight) { // scrolling right
        branch = new Elements.Branch(assetLib.getData("branch"), branchId++, -1, "stump", !isRight, canvas.width, canvas.height);
        branch.y = aBranches[aBranches.length - 1].y - 75;
        branch.largeBranchOffsetX = 40;
        aBranches.push(branch);
        branch.x = canvas.width + 75;
        for (var i = 0; i < branchLength; i++) {
            if (branchLength == 1) { // only one section
                frame = 0;
            }
            else if (i == 0) { // first section
                frame = getBranchType(2, true);
            }
            else if (i == branchLength - 1) { // last section
                frame = getBranchType(0, false);
            }
            else { // mid section
                frame = getBranchType(1, false);
            }
            var branch2 = new Elements.Branch(assetLib.getData("branch"), branchId++, frame, "branch", !isRight, canvas.width, canvas.height);
            branch2.x = branch.x - branch2.spriteWidth - i * branch2.spriteWidth;
            branch2.y = branch.y - 450;
            aBranches.push(branch2);
            //console.log(squirrel.pickUpState, frame)
            if (squirrel.pickUpState == "multiple" && frame != 5) {
                addAcorn(branch2.x, branch2.y, false, true);
            }
        }
    }
    else { // scrolling left
        branch = new Elements.Branch(assetLib.getData("branch"), branchId++, -1, "stump", !isRight, canvas.width, canvas.height);
        branch.y = aBranches[aBranches.length - 1].y - 75;
        branch.largeBranchOffsetX = -40;
        aBranches.push(branch);
        branch.x = -75;
        for (var i = 0; i < branchLength; i++) {
            if (branchLength == 1) { // only one section
                frame = 0;
            }
            else if (i == 0) { // first section
                frame = getBranchType(0, true);
            }
            else if (i == branchLength - 1) { // last section
                frame = getBranchType(2, false);
            }
            else { // mid section
                frame = getBranchType(1, false);
            }
            var branch2 = new Elements.Branch(assetLib.getData("branch"), branchId++, frame, "branch", !isRight, canvas.width, canvas.height);
            branch2.x = branch.x + branch2.spriteWidth + i * branch2.spriteWidth;
            branch2.y = branch.y - 450;
            aBranches.push(branch2);
            if (squirrel.pickUpState == "multiple" && frame != 0) {
                addAcorn(branch2.x, branch2.y, false, true);
            }
        }
    }
}
//
function getBranchType(_side, _isStart) {
    var tempFrame;
    if (_isStart) {
        // set branch type
        branchType = Math.floor(Math.random() * 1.6); // 0 = normal, 1 = moss
    }
    if (_side == 0) { // left side
        tempFrame = aBranchTypes[branchType][0][Math.floor(Math.random() * aBranchTypes[branchType][0].length)];
    }
    else if (_side == 1) { // mid
        tempFrame = aBranchTypes[branchType][1][Math.floor(Math.random() * aBranchTypes[branchType][1].length)];
    }
    else { // right side
        tempFrame = aBranchTypes[branchType][2][Math.floor(Math.random() * aBranchTypes[branchType][2].length)];
    }
    return tempFrame;
}
//
function addBranch() {
    updateScore(100);
    if (level > 2) {
        var branchLength = Math.ceil(Math.random() * 4);
    }
    else { // make sure first level has branches longer than 1 so tutorial jump doesn't leap you off accidently
        var branchLength = Math.ceil(Math.random() * 2) + 2;
    }
    totalLevelBranches += branchLength;
    var frame;
    var yPos;
    var branchType = "branch";
    var yPos = aBranches[aBranches.length - 1].y + aBranchHeightGaps[Math.floor(Math.random() * aBranchHeightGaps.length)];
    while (yPos == aBranches[aBranches.length - 1].y) {
        yPos = aBranches[aBranches.length - 1].y + aBranchHeightGaps[Math.floor(Math.random() * aBranchHeightGaps.length)];
    }
    var xPos = aBranches[aBranches.length - 1].x;
    var hasHazard = false;
    for (var i = 0; i < branchLength; i++) {
        var isNotEdge = false;
        if (isRight) { // scrolling right
            if (branchLength == 1) { // only one section
                frame = 0;
            }
            else if (i == 0) { // first section
                frame = getBranchType(0, true);
            }
            else if (i == branchLength - 1) { // last section
                frame = getBranchType(2, false);
            }
            else { // mid section
                frame = getBranchType(1, false);
                isNotEdge = true;
            }
            var branch = new Elements.Branch(assetLib.getData("branch"), branchId++, frame, branchType, isRight, canvas.width, canvas.height);
            branch.x = xPos + nextBranchWidthGap + i * branch.spriteWidth;
        }
        else { // scrolling left
            if (branchLength == 1) { // only one section
                frame = 0;
            }
            else if (i == 0) { // first section
                frame = getBranchType(2, false);
            }
            else if (i == branchLength - 1) { // last section
                frame = getBranchType(0, true);
            }
            else { // mid section
                frame = getBranchType(1, false);
                isNotEdge = true;
            }
            var branch = new Elements.Branch(assetLib.getData("branch"), branchId++, frame, branchType, isRight, canvas.width, canvas.height);
            branch.x = xPos - nextBranchWidthGap - i * branch.spriteWidth;
        }
        branch.y = lastBranchY = yPos;
        aBranches.push(branch);
        if (squirrel.pickUpState == "multiple") {
            addAcorn(branch.x, branch.y, isNotEdge, false);
            continue;
        }
        if (isNotEdge && !hasHazard) {
            var num = Math.random();
            //
            if (num < .25 + Math.min(level / 20, .4) && level > 1 && (level > 2 || totalLevelBranches > 4)) { // .25 if using below as a well
                addHedgehog(branch.x, branch.y);
                hasHazard = true;
                continue;
            }
            /*  else if (num < .5 + Math.min(level / 25, .25) && level > 0) {
                  addHedgehog(branch.x, branch.y)
                  hasHazard = true
                  continue
     
              }*/
        }
        if (Math.random() > .5) {
            /* if (Math.random() < .3 && squirrel.pickUpState == "none" && !hasPickUp) {
                 addPickUp(branch.x, branch.y)
                 hasPickUp = true
          
             }
             else if (!hasHazard) {*/
            addAcorn(branch.x, branch.y, isNotEdge, false);
            // }
        }
        //console.log(branch.id +" "+branch.y +" "+branch.x)
    }
}
//
function addHedgehog(_branchX, _branchY) {
    var hedgehog = new Elements.Hedgehog(isRight, canvas.width, canvas.height);
    hedgehog.x = _branchX;
    hedgehog.y = _branchY + 65;
    aHedgehogs.push(hedgehog);
}
//
function addSnowman(_branchX, _branchY) {
    var snowman = new Elements.Snowman(assetLib.getData("snowman"), isRight, canvas.width, canvas.height);
    snowman.x = _branchX;
    snowman.y = _branchY + 65;
    aSnowmen.push(snowman);
}
//
function addLedge(_branchX, _branchY) {
    var ledge = new Elements.Ledge(assetLib.getData("ledge"), isRight, canvas.width, canvas.height);
    ledge.x = _branchX;
    ledge.y = _branchY + 4;
    aLedges.push(ledge);
}
//
function addAcorn(_branchX, _branchY, _isNotEdge, _flipDir) {
    var tempIsRight = isRight;
    if (_flipDir) {
        tempIsRight = !tempIsRight;
    }
    var acorn = new Elements.Acorn(assetLib.getData("acorn"), tempIsRight, canvas.width, canvas.height);
    acorn.x = _branchX;
    if (_isNotEdge) {
        acorn.y = _branchY + aAcornHeights[Math.floor(Math.random() * aAcornHeights.length)];
    }
    else {
        acorn.y = _branchY + aAcornHeights[Math.floor(Math.random() * 2)];
    }
    aAcorns.push(acorn);
}
//
function addPickUp(_branchX, _branchY) {
    var pickUp = new Elements.PickUp(assetLib.getData("pickUps"), isRight, Math.floor(Math.random() * 4), canvas.width, canvas.height); //
    pickUp.x = _branchX;
    pickUp.y = _branchY - 45;
    aAcorns.push(pickUp);
}
//
function hitPickUp(_typeId) {
    switch (_typeId) {
        case 0: // gold acorn
            updateAcornScore(10);
            playSound("gold");
            break;
        case 1: // invincible
            pickUpTimerIsOn = true;
            squirrel.pickUpState = "invincible";
            if (isRight) {
                targSpeedX = 250 * Math.min((1 + (level + 2) / 18), 2);
            }
            else {
                targSpeedX = 250 * -Math.min((1 + (level + 2) / 18), 2);
            }
            playSound("pickUp");
            break;
        case 2: // magnet     
            pickUpTimerIsOn = true;
            squirrel.pickUpState = "magnet";
            playSound("pickUp");
            break;
        case 3: // multiple nuts
            pickUpTimerIsOn = true;
            squirrel.pickUpState = "multiple";
            updateAcornScore(3);
            playSound("pickUp");
            break;
        case 4: // normal acorn
            updateAcornScore(1);
            playSound("nut");
            break;
    }
}
//
/*function addLeaf(): void {

    var leaf: Elements.Leaf = new Elements.Leaf(assetLib.getData("leaf"), isRight, canvas.width, canvas.height)

    if (isRight) {
        leaf.x = canvas.width + 50 + Math.random() * 200

    }
    else {
        leaf.x = -50 - Math.random() * 200

        
    }

    leaf.y = Math.random() * 500 - 200

    aLeaves.push(leaf)

}*/
//
function updateScore(_inc) {
    levelScore += _inc;
    hud.updateScore(totalScore + levelScore);
}
//
function updateAcornScore(_inc) {
    acornScore += _inc;
}
//
function squirrelCallback(_state, _oData) {
    switch (_state) {
        case "flip":
            isRight = _oData.isRight;
            if (isRight) {
                if (squirrel.pickUpState == "invincible") {
                    targSpeedX = 250 * Math.min((1 + (level + 2) / 18), 2);
                }
                else {
                    targSpeedX = 250 * Math.min((1 + level / 18), 2);
                }
                flipPosX = mushScreenOffset;
            }
            else {
                if (squirrel.pickUpState == "invincible") {
                    targSpeedX = -250 * Math.min((1 + (level + 2) / 18), 2);
                }
                else {
                    targSpeedX = -250 * Math.min((1 + level / 18), 2);
                }
                flipPosX = canvas.width - mushScreenOffset;
            }
            nextBranchWidthGap = aBranchWidthGaps[Math.floor(Math.random() * Math.min(level, aBranchWidthGaps.length))];
            // make stump branch bounce y
            for (var i = 0; i < aBranches.length; i++) {
                if (aBranches[i].frameNum == -1) {
                    aBranches[i].hitBounceBranch();
                }
            }
            break;
        case "endGame":
            initGameEndFail();
            break;
        case "home":
            initLevelComplete();
            break;
    }
}
//
function isWideForBranch() {
    if (isRight) {
        if (aBranches[aBranches.length - 1].x < canvas.width - nextBranchWidthGap + 75) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (aBranches[aBranches.length - 1].x > nextBranchWidthGap - 75) {
            return true;
        }
        else {
            return false;
        }
    }
}
//
function initLevelComplete() {
    gameState = "levelComplete";
    if (audioType == 1) {
        music.fade(music.volume(), .45, 100);
    }
    playSound("voiceWin" + Math.floor(Math.random() * 5));
    playSound("levelComplete");
    // stop user
    userInput.removeHitArea("jumpTouch");
    userInput.removeKey("upKeyEvent");
    userInput.removeHitArea("pause");
    // var oQuitBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [-108, -82], align: [1, 1], id: oImageIds.quitBut, idOver: oImageIds.quitButOver }
    var oNextBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -110], align: [.5, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("nextFromLevelComplete", butEventHandler, null, "image", oNextBut);
    //userInput.addHitArea("quitFromLevelComplete", butEventHandler, null, "image", oQuitBut)
    var aButs = new Array(oNextBut);
    addMuteBut(aButs);
    prevAcornScore = acornScore;
    panel = new Elements.Panel(gameState, aButs, canvas.width, canvas.height);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateLevelComplete();
}
//
function initGameEndFail() {
    gameState = "gameEndFail";
    if (audioType == 1) {
        music.fade(music.volume(), .45, 100);
    }
    playSound("voiceFalling");
    // stop user
    userInput.removeHitArea("jumpTouch");
    userInput.removeKey("upKeyEvent");
    userInput.removeHitArea("pause");
    var aButs = new Array();
    panel = new Elements.Panel(gameState, aButs, canvas.width, canvas.height);
    panel.startTween4();
    previousTime = new Date().getTime();
    updateGameEndFail();
}
//---------------------------------------------------
// UPDATE LOOPS
//---------------------------------------------------
//
function updateGameEvent() {
    // stop  loop if paused
    if (manualPause || rotatePause || gameState != "game") {
        return;
    }
    delta = getDelta();
    if (pickUpTimerIsOn) {
        pickUpTimer += delta;
        if (pickUpTimer >= 10) {
            pickUpTimer = 0;
            pickUpTimerIsOn = false;
            squirrel.pickUpState = "none";
            if (isRight) {
                targSpeedX = 250 * Math.min((1 + level / 18), 2);
                flipPosX = mushScreenOffset;
            }
            else {
                targSpeedX = -250 * Math.min((1 + level / 18), 2);
            }
        }
    }
    if (!tutorialOn) {
        speedX += ((targSpeedX - speedX) * 5) * delta;
        // y tracking to keep squirrel in centre of screen
        trackY = ((canvas.height / 2 - squirrel.y - 38) * 3);
        // x tracking to keep squirrel at either end of screen depending on flip
        trackX = ((flipPosX - squirrel.x) * 1);
    }
    // bg
    background.updateMove(speedX - trackX, speedY + trackY);
    background.render();
    /*if ((leafDropInc += delta) > .7) {
        addLeaf()
        leafDropInc = 0
        }*/
    // leaves
    /*for (var i: number = 0; i < aLeaves.length; i++) {

        aLeaves[i].update(delta, speedX - trackX, speedY + trackY);
        renderSprite(aLeaves[i])

        if (aLeaves[i].removeMe) {

            aLeaves.splice(i, 1);

            i -= 1

        }
    }*/
    var isNoBranches = true;
    branchNearby = null;
    // branches
    for (var i = 0; i < aBranches.length; i++) {
        aBranches[i].update(speedX - trackX, speedY + trackY);
        aBranches[i].render(ctx);
        if (aBranches[i].x > squirrel.x - 90 && aBranches[i].x < squirrel.x + 90) { // is this branch in immediate x space
            if (branchNearby == null) { // if no branch defined then use this one to begin with
                branchNearby = aBranches[i];
            }
            if (branchNearby.y > squirrel.y && aBranches[i].y > squirrel.y) { // are both branches below squirrel
                if (aBranches[i].y - squirrel.y < branchNearby.y - squirrel.y) { // is this branch closer
                    branchNearby = aBranches[i];
                }
            }
            isNoBranches = false;
        }
        if (aBranches[i].removeMe) {
            aBranches.splice(i, 1);
            i -= 1;
        }
    }
    if (isNoBranches) { // no branches in squirrel immediate x space
        squirrel.setNearestBranch(null, null, null);
    }
    else { // branch in immediate x space and is closest below
        squirrel.setNearestBranch(branchNearby.id, branchNearby.type, branchNearby.y);
    }
    // acorns
    for (var i = 0; i < aAcorns.length; i++) {
        aAcorns[i].update(speedX - trackX, speedY + trackY);
        aAcorns[i].render();
        // check collision
        if (aAcorns[i].canHit && checkSpriteCollision(squirrel, aAcorns[i])) {
            aAcorns[i].hit();
            hitPickUp(aAcorns[i].typeId);
        }
        if (aAcorns[i].removeMe) {
            aAcorns.splice(i, 1);
            i -= 1;
        }
    }
    // snowmen
    for (var i = 0; i < aSnowmen.length; i++) {
        aSnowmen[i].update(speedX - trackX, speedY + trackY);
        aSnowmen[i].render(ctx);
        // check collision
        if (aSnowmen[i].canHit && checkSpriteCollisionX(squirrel, aSnowmen[i]) && squirrel.state != "jumping" && squirrel.pickUpState != "invincible") {
            squirrel.changeState("hitting");
            aSnowmen[i].hit();
        }
        if (aSnowmen[i].removeMe) {
            aSnowmen.splice(i, 1);
            i -= 1;
        }
    }
    // hedgehogs
    for (var i = 0; i < aHedgehogs.length; i++) {
        aHedgehogs[i].update(speedX - trackX, speedY + trackY);
        aHedgehogs[i].render();
        // check collision
        if (aHedgehogs[i].canHit && checkSpriteCollision(squirrel, aHedgehogs[i])) {
            squirrel.changeState("hitting");
            aHedgehogs[i].hit();
            playSound("voiceHitSpike" + Math.floor(Math.random() * 3));
            playSound("hitSpike");
        }
        if (aHedgehogs[i].removeMe) {
            aHedgehogs.splice(i, 1);
            i -= 1;
        }
    }
    // hud
    hud.render();
    // squirrel
    if (!tutorialOn) {
        squirrel.update(trackX, trackY);
    }
    squirrel.render();
    // branch shroom
    for (var i = 0; i < aBranches.length; i++) {
        aBranches[i].renderShroom();
    }
    // add new branch in none exist or
    if (aBranches.length < 1 || isWideForBranch()) {
        stumpDist--;
        if (stumpDist > 0) { // add branch
            addBranch();
            nextBranchWidthGap = aBranchWidthGaps[Math.floor(Math.random() * Math.min(level, aBranchWidthGaps.length))];
        }
        else if (stumpDist == 0) { // set up for stump
            nextBranchWidthGap = aBranchWidthGaps[2];
        }
        else {
            // add stump
            addStump();
            nextBranchWidthGap = 10000; // set large gap so no branchs are added in wrong direction
        }
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateGameEvent);
}
//
function updateSplashScreenEvent() {
    // stop  loop if paused
    if (rotatePause || gameState != "splash") {
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
    splash.render();
    // fpsMeter.update(delta);
    //fpsMeter.render(ctx);
    requestAnimFrame(updateSplashScreenEvent);
}
//
function updateStartScreenEvent() {
    // stop  loop if paused
    if (rotatePause || gameState != "start") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "right";
    ctx.font = "12px Helvetica";
    ctx.fillText("v1.0.9", canvas.width - 10, canvas.height - 10);
    requestAnimFrame(updateStartScreenEvent);
}
//
function updateTutorialScreenEvent() {
    // stop  loop if paused
    if (rotatePause || gameState != "tutorial") {
        return;
    }
    delta = getDelta();
    // bg
    background.updateScroll();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateTutorialScreenEvent);
}
//
function updateCreditsScreenEvent() {
    // stop  loop if paused
    if (rotatePause || gameState != "credits") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateCreditsScreenEvent);
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
function updateLevelComplete() {
    // stop  loop if paused
    if (rotatePause || gameState != "levelComplete") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateLevelComplete);
}
//
function updateGameEndFail() {
    // stop  loop if paused
    if (rotatePause || gameState != "gameEndFail") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateGameEndFail);
}
//---------------------------------------------------
// GENERAL METHODS
//---------------------------------------------------
//
function addDirectText(_font, _size, _align, _x, _y, _str, _col) {
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
    delta = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    //resetting delta if screen paused for longer than .5 second for changing tabs (firefox throttle issue)
    if (delta > .5) {
        delta = 0;
    }
    return delta;
}
//
function checkSpriteCollision(_s1, _s2) {
    var distance_squared = (((_s1.x - _s2.x) * (_s1.x - _s2.x)) + ((_s1.y - _s2.y) * (_s1.y - _s2.y)));
    var radii_squared = (_s1.radius + _s2.radius) * (_s1.radius + _s2.radius);
    if (distance_squared < radii_squared) {
        return true;
    }
    else {
        return false;
    }
}
//
function checkSpriteCollisionX(_s1, _s2) {
    var distance = Math.abs(_s1.x - _s2.x);
    var radii = Math.abs(_s1.radius + _s2.radius);
    if (distance < radii && Math.abs(_s1.y - _s2.y) < 150) {
        return true;
    }
    else {
        return false;
    }
}
//
/*function renderSprite(_element): void {
    ctx.save();

    ctx.translate(_element.x, _element.y);
    ctx.rotate(_element.rotation);
    ctx.globalAlpha = _element.alpha
    ctx.scale(_element.scaleX, _element.scaleY);
    _element.render(ctx);

    ctx.restore();

}*/
//
function loadPreAssets() {
    preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "loaderAssets",
            file: "images/loaderAssets.png",
            oAtlasData: {
                id0: { x: 0, y: 359, width: 142, height: 108 },
                id1: { x: 0, y: 0, width: 600, height: 246 },
                id2: { x: 0, y: 248, width: 352, height: 67 },
                id3: { x: 0, y: 317, width: 326, height: 40 },
                id4: { x: 144, y: 359, width: 121, height: 151 }
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
    var oImgData = preAssetLib.getData("langSelect");
    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height / 2);
    var butSize = 140;
    for (var i = 0; i < aLangs.length; i++) {
        var px = canvas.width / 2 - (butSize * aLangs.length) / 2 + i * butSize;
        var py = canvas.height / 2 - butSize / 2;
        userInput.addHitArea("langSelect", butEventHandler, { lang: aLangs[i] }, "rect", { aRect: [px, py, px + butSize, py + 140] });
    }
}
//
function initLoadAssets() {
    // preload image above loader and lang specific 'loading...' text
    // var oImgData: any = preAssetLib.getData("preloadImage")
    //ctx.drawImage(oImgData.img, 0, 0)
    loadAssets();
}
// load assets
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
            id: "background",
            file: "images/background.jpg"
        }, {
            id: "titleBg",
            file: "images/titleBg.jpg"
        }, {
            id: "failBg",
            file: "images/failBg.jpg"
        }, {
            id: "winBg",
            file: "images/winBg.jpg"
        }, {
            id: "rotateDeviceMessage",
            file: "images/rotateDeviceMessage.jpg"
        }, {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: { x: 0, y: 0, width: 140, height: 134 },
                id1: { x: 0, y: 136, width: 140, height: 134 },
                id10: { x: 284, y: 72, width: 75, height: 70 },
                id11: { x: 284, y: 216, width: 75, height: 70 },
                id12: { x: 284, y: 288, width: 75, height: 70 },
                id13: { x: 284, y: 360, width: 75, height: 70 },
                id2: { x: 0, y: 272, width: 140, height: 134 },
                id3: { x: 142, y: 0, width: 140, height: 134 },
                id4: { x: 142, y: 136, width: 140, height: 134 },
                id5: { x: 142, y: 272, width: 140, height: 134 },
                id6: { x: 361, y: 0, width: 75, height: 70 },
                id7: { x: 361, y: 72, width: 75, height: 70 },
                id8: { x: 284, y: 144, width: 75, height: 70 },
                id9: { x: 284, y: 0, width: 75, height: 70 }
            }
        }, {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: { x: 643, y: 308, width: 284, height: 366 },
                id1: { x: 316, y: 761, width: 286, height: 112 },
                id10: { x: 344, y: 429, width: 297, height: 330 },
                id11: { x: 0, y: 429, width: 342, height: 302 },
                id12: { x: 492, y: 875, width: 82, height: 67 },
                id13: { x: 573, y: 308, width: 51, height: 92 },
                id14: { x: 492, y: 944, width: 81, height: 109 },
                id15: { x: 377, y: 308, width: 100, height: 114 },
                id16: { x: 479, y: 380, width: 85, height: 47 },
                id17: { x: 377, y: 0, width: 294, height: 306 },
                id18: { x: 831, y: 676, width: 168, height: 125 },
                id2: { x: 831, y: 803, width: 116, height: 168 },
                id3: { x: 479, y: 308, width: 92, height: 70 },
                id4: { x: 673, y: 0, width: 174, height: 215 },
                id5: { x: 316, y: 875, width: 174, height: 184 },
                id6: { x: 604, y: 761, width: 225, height: 275 },
                id7: { x: 0, y: 0, width: 375, height: 427 },
                id8: { x: 0, y: 733, width: 314, height: 309 },
                id9: { x: 929, y: 0, width: 132, height: 374 }
            }
        }, {
            id: "squirrel1",
            file: "images/mush_mush_170x165.png",
            oAnims: {
                running: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                jumping: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
                falling: [34],
                hide: [34],
                hitting: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
                hitHold: [47]
            }
        }, {
            id: "acorn",
            file: "images/popcorn_144x145.png",
            oAnims: {
                spinning: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                bursting: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            }
        }, {
            id: "pickUps",
            file: "images/pickUps_159x160.png",
            oAnims: {
                type0: [0],
                type1: [1],
                type2: [2],
                type3: [3],
                bursting: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            }
        }, {
            id: "branch",
            file: "images/branches_166x121.png"
        }, {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: { x: 0, y: 0, width: 230, height: 190 },
                id1: { x: 0, y: 192, width: 217, height: 216 },
                id2: { x: 219, y: 192, width: 125, height: 104 },
                id3: { x: 219, y: 298, width: 85, height: 65 },
                id4: { x: 232, y: 53, width: 42, height: 60 },
                id5: { x: 232, y: 115, width: 40, height: 44 },
                id6: { x: 232, y: 0, width: 49, height: 51 },
                id7: { x: 306, y: 298, width: 27, height: 56 },
                id8: { x: 276, y: 53, width: 34, height: 50 },
                id9: { x: 274, y: 115, width: 35, height: 44 }
            }
        }, {
            id: "flare",
            file: "images/flare.png"
        }, {
            id: "titleLogo",
            file: "images/title/" + curLang + ".png"
        }], ctx, canvas.width, canvas.height, true);
    // game elements
    oImageIds.bounceBranch = "id0";
    oImageIds.homeBranch = "id1";
    oImageIds.spiky = "id2";
    oImageIds.homeIcon = "id3";
    oImageIds.popcornIcon = "id4";
    oImageIds.branchShroom0 = "id5";
    oImageIds.branchShroom1 = "id6";
    oImageIds.branchShroom2 = "id7";
    oImageIds.branchShroom3 = "id8";
    oImageIds.branchShroom4 = "id9";
    // ui elements
    oImageIds.titleMush = "id0";
    oImageIds.titleLogo = "id1";
    oImageIds.titlePopcorn = "id2";
    oImageIds.titleBoomerang = "id3";
    oImageIds.tut0 = "id4";
    oImageIds.tut1 = "id5";
    oImageIds.mushFall0 = "id6";
    oImageIds.mushFall1 = "id7";
    oImageIds.friendFall0 = "id8";
    oImageIds.friendFall1 = "id9";
    oImageIds.friendWin = "id10";
    oImageIds.mushWin = "id11";
    oImageIds.leaf0 = "id12";
    oImageIds.leaf1 = "id13";
    oImageIds.leaf2 = "id14";
    oImageIds.leaf3 = "id15";
    oImageIds.leaf4 = "id16";
    oImageIds.tutBg = "id17";
    oImageIds.tutSpiky = "id18";
    // UI buts
    oImageIds.playBut = "id0";
    oImageIds.playButOver = "id1";
    oImageIds.quitBut = "id2";
    oImageIds.quitButOver = "id3";
    oImageIds.retryBut = "id4";
    oImageIds.retryButOver = "id5";
    oImageIds.backBut = "id6";
    oImageIds.backButOver = "id7";
    oImageIds.muteBut1 = "id8";
    oImageIds.muteBut1Over = "id9";
    oImageIds.muteBut0 = "id10";
    oImageIds.muteBut0Over = "id11";
    oImageIds.pauseBut = "id12";
    oImageIds.pauseButOver = "id13";
    // callback init when all assets loaded
    assetLib.onReady(initSplash);
    gameState = "load";
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
/*function resizeCanvas() {
    var a = window.innerWidth, b = window.innerHeight;
    var w = canvas.width, h = canvas.height;

    // reduce sizes by 1, don't know why :)
    if (a > 480)
        (a -= 1, b -= 1);

    if (b > a && isMobile && ("loading" != gameState)) {
        rotatePauseOn();
    } else if (rotatePause && isMobile) {
        rotatePauseOff();
    }

    if (a / b < canvas.width / canvas.height) {
        // fit horizontal, center vertical
        canvas.style.width = a + "px";
        canvas.style.height = (a * h / w) + "px";
        canvasX = 0;
        canvasY = (b - a * h / w) / 2;
        canvasScale = canvasScaleY = w / a;
    } else {
        // fit vertical, center horizontal
        canvas.style.width = b / h * w + "px";
        canvas.style.height = b + "px";
        canvasX = (a - b / h * w) / 2;
        canvasY = 0;
        canvasScale = canvasScaleY = h / b;
    }

    console.log(canvasScale)

    // apply offset
    canvas.style.marginTop = canvasY + "px";
    canvas.style.marginLeft = canvasX + "px"




    // update input mapping
    //userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}*/
//
/*function resizeCanvas(): void {

    var tempInnerWidth: number = window.innerWidth
    var tempInnerHeight: number = window.innerHeight

    // window.innerWidth - 1 fix for retina screen size performance bug
    if (tempInnerWidth > 480) {
        tempInnerWidth -= 1
        tempInnerHeight -= 1
    }


    if (window.innerWidth < window.innerHeight && isMobile) { // assume device is portrait and on mobile
        if (gameState != "loading") { // show device rotate message if not user paused or already showing message or game is loading
            rotatePauseOn();
        }

        canvas.style.width = tempInnerWidth + "px"
        canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px"

        canvasX = 0
        canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2)
        canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth

        div.style.marginTop = canvasY + "px"
        div.style.marginLeft = canvasX + "px"


    }
    else if (!isMobile) { // assume device is on desktop
        if (rotatePause) { // hide device rotate message if currently displayed
            rotatePauseOff();
        }


        if (tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) // conform to width (gaps top and bottom)
        {
            canvas.style.width = tempInnerWidth + "px"
            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px"

            canvasX = 0
            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2)
            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth

            div.style.marginTop = canvasY + "px"
            div.style.marginLeft = canvasX + "px"


        }
        else { // conform to height (gaps left and right)
            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";
            canvas.style.height = tempInnerHeight + "px";

            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;

            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    }
    else { //  assume is landscape and on mobile
        if (rotatePause) { // hide device rotate message if currently displayed
            rotatePauseOff();
        }

        canvasX = canvasY = 0
        canvasScaleX = canvas.width / tempInnerWidth
        canvasScaleY = canvas.height / tempInnerHeight

        canvas.style.width = tempInnerWidth + "px"
        canvas.style.height = tempInnerHeight + "px"

        div.style.marginTop = 0 + "px"
        div.style.marginLeft = 0 + "px"
    }

}*/
function resizeCanvas() {
    var a = window.innerWidth, b = window.innerHeight;
    var w = canvas.width, h = canvas.height;
    if (b > a && isMobile && ("loading" != gameState)) { // switch to b < a for landscape games
        rotatePauseOn();
    }
    else if (rotatePause && isMobile) {
        rotatePauseOff();
    }
    if (a / b < canvas.width / canvas.height) {
        // fit horizontal, center vertical
        canvas.style.width = a + "px";
        canvas.style.height = (a * h / w) + "px";
        canvasX = 0;
        canvasY = (b - a * h / w) / 2;
        canvasScaleX = canvasScaleY = w / a;
    }
    else {
        // fit vertical, center horizontal
        canvas.style.width = b / h * w + "px";
        canvas.style.height = b + "px";
        canvasX = (a - b / h * w) / 2;
        canvasY = 0;
        canvasScaleX = canvasScaleY = h / b;
    }
    // apply offset
    canvas.style.marginTop = canvasY + "px";
    canvas.style.marginLeft = canvasX + "px";
    // update input mapping
    //userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}
//
function playSound(_id) {
    //console.log(_id)
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
                music.volume(.7);
            }
            else {
                music.volume(.45);
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
//
function toggleManualPause() {
    if (!manualPause) { // if not currently paused then pause it
        manualPause = true;
        panel.removeBut(oImageIds.pauseBut);
        panel.removeBut(oImageIds.muteBut);
        userInput.removeHitArea("pause");
        userInput.removeHitArea("mute");
        userInput.removeHitArea("jumpTouch");
        userInput.removeKey("upKeyEvent");
        pauseCoreOn();
        // manual pause can only happen in game so show pause panel
        //var oQuitBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [canvas.width / 2 - 225, 410], scale: 1, frame: 1 }
        //var oResumeBut: any = { oImgData: assetLib.getData("uiButs"), aPos: [canvas.width / 2 + 225, 410], scale: 1, frame: 0 }
        var oQuitBut = { oImgData: assetLib.getData("uiButs"), aPos: [-75, 0], align: [.5, .5], id: oImageIds.quitBut, idOver: oImageIds.quitButOver };
        var oResumeBut = { oImgData: assetLib.getData("uiButs"), aPos: [75, 0], align: [.5, .5], id: oImageIds.playBut, idOver: oImageIds.playButOver };
        var aButs = new Array(oQuitBut, oResumeBut);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);
        userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", oResumeBut);
        // render correct panel
        // panel
        panel = new Elements.Panel("pause", aButs, canvas.width, canvas.height);
        panel.butsY = 0;
        panel.render();
    }
    else {
        manualPause = false;
        userInput.removeHitArea("quitFromPause");
        userInput.removeHitArea("resumeFromPause");
        panel.removeBut(oImageIds.quitBut);
        panel.removeBut(oImageIds.playBut);
        pauseCoreOff();
    }
}
//
function rotatePauseOn() {
    userInput.pauseIsOn = true;
    rotatePause = true;
    ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0);
    pauseCoreOn();
}
//
function rotatePauseOff() {
    userInput.pauseIsOn = false;
    rotatePause = false;
    pauseCoreOff();
}
//
function pauseCoreOn() {
    if (audioType == 1) { // web audio
        Howler.mute(true);
    }
    switch (gameState) {
        case "game":
            userInput.removeHitArea("jumpTouch");
            userInput.removeKey("upKeyEvent");
            break;
    }
}
//
function pauseCoreOff() {
    if (audioType == 1) { // web audio
        if (!muted) {
            Howler.mute(false);
        }
    }
    previousTime = new Date().getTime();
    switch (gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        /* case "credits":
             initCreditsScreen();
             break*/
        case "tutorial":
            initPreGame();
            break;
        case "game":
            //switch off manual pause so rotating back will play game
            manualPause = false;
            panel.panelType = gameState;
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("resumeFromPause");
            var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, 40], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
            userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
            panel.aButs = new Array(oPauseBut);
            addMuteBut(panel.aButs);
            userInput.addHitArea("jumpTouch", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 50, canvas.width, canvas.height] }, true);
            userInput.addKey("upKeyEvent", butEventHandler, null, 38);
            updateGameEvent();
            break;
        case "levelComplete":
            initLevelComplete();
            break;
        case "gameEndFail":
            initGameEndFail();
            break;
    }
}
