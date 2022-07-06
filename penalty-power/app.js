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
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (_showBar === void 0) { _showBar = true; }
            this.oAssetData = {};
            this.assetsLoaded = 0;
            this.textData = {};
            this.spinnerRot = 0;
            this.totalAssets = _aFileData.length;
            this.showBar = _showBar;
            for (var i = 0; i < _aFileData.length; i++) {
                if (_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                }
                else {
                    this.loadImage(_aFileData[i]);
                }
            }
            if (_showBar) {
                this.oLoaderImgData = preAssetLib.getData("loader");
            }
        }
        AssetLoader.prototype.render = function () {
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var tempScale = Math.min(Math.min(canvas.width / 900, 1), canvas.height / 800);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.preloaderLogo].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 - 70 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.underBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1), bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, Math.max((bWidth / this.totalAssets) * this.assetsLoaded, 1) * tempScale, bHeight * tempScale);
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.overBar].height;
            ctx.drawImage(this.oLoaderImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 + 110 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
        };
        AssetLoader.prototype.displayNumbers = function () {
            ctx.textAlign = "left";
            ctx.font = "bold 40px arial";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(Math.round((this.assetsLoaded / this.totalAssets) * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 + 51 + 50);
        };
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
        AssetLoader.prototype.loadJSON = function (_oData) {
            var _this = this;
            var xobj = new XMLHttpRequest();
            xobj.open('GET', _oData.file, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == 200) {
                    _this.textData[_oData.id] = JSON.parse(xobj.responseText);
                    ++_this.assetsLoaded;
                    _this.checkLoadComplete();
                }
            };
            xobj.send(null);
        };
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
                else {
                    _this.oAssetData[_oData.id].oData.oAtlasData = { none: { x: 0, y: 0, width: _this.oAssetData[_oData.id].oData.spriteWidth, height: _this.oAssetData[_oData.id].oData.spriteHeight } };
                }
                ++_this.assetsLoaded;
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        AssetLoader.prototype.getSpriteSize = function (_file) {
            var aNew = new Array();
            var sizeY = "";
            var sizeX = "";
            var stage = 0;
            var inc = _file.lastIndexOf(".");
            var canCont = true;
            while (canCont) {
                inc--;
                if (stage == 0 && this.isNumber(_file.charAt(inc))) {
                    sizeY = _file.charAt(inc) + sizeY;
                }
                else if (stage == 0 && sizeY.length > 0 && _file.charAt(inc) == "x") {
                    inc--;
                    stage = 1;
                    sizeX = _file.charAt(inc) + sizeX;
                }
                else if (stage == 1 && this.isNumber(_file.charAt(inc))) {
                    sizeX = _file.charAt(inc) + sizeX;
                }
                else if (stage == 1 && sizeX.length > 0 && _file.charAt(inc) == "_") {
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
        AssetLoader.prototype.checkLoadComplete = function () {
            if (this.assetsLoaded == this.totalAssets) {
                this.loadedCallback();
            }
        };
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    }());
    Utils.AssetLoader = AssetLoader;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = (function () {
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
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        AnimSprite.prototype.changeImgData = function (_newImgData, _animId) {
            this.oImgData = _newImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.animId = _animId;
            this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2);
            this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2);
            this.resetAnim();
        };
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
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
        AnimSprite.prototype.render = function (_ctx) {
            _ctx.save();
            _ctx.translate(this.x, this.y);
            _ctx.rotate(this.rotation);
            _ctx.scale(this.scaleX, this.scaleY);
            _ctx.globalAlpha = this.alpha;
            if (this.animId != null) {
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
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            }
            else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        AnimSprite.prototype.renderSimple = function (_ctx) {
            if (this.animId != null) {
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
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            }
            else {
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
    var BasicSprite = (function () {
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
    var UserInput = (function () {
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
                if (e.button == 2) {
                    return;
                }
                _this.isDown = true;
                _this.hitDown(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                if (e.button == 2) {
                    return;
                }
                _this.isDown = false;
                _this.hitUp(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mousemove", function (e) {
                if (e.button == 2) {
                    return;
                }
                _this.move(e, e.pageX, e.pageY, 1, _this.isDown);
            }, false);
            _canvas.addEventListener("mouseout", function (e) {
                if (e.button == 2) {
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                _this.hitUp(e, userInput.mouseX / canvasScale, userInput.mouseY / canvasScale, 1);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
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
                if (this.aHitAreas[i].rect) {
                    var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                    var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                    if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                        this.aHitAreas[i].oData.hasLeft = false;
                        if (!this.aHitAreas[i].oData.isDown) {
                            this.aHitAreas[i].oData.isDown = true;
                            this.aHitAreas[i].oData.x = _posX;
                            this.aHitAreas[i].oData.y = _posY;
                            if ((curHitTime - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[i].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        }
                        break;
                    }
                }
                else {
                }
            }
            this.prevHitTime = curHitTime;
        };
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
                if (this.aHitAreas[i].rect) {
                    var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                    var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                    if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        for (var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                            if (this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                j -= 1;
                            }
                        }
                        if (this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[i].oData.isDown = false;
                            if (this.aHitAreas[i].oData.multiTouch) {
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                            }
                        }
                        break;
                    }
                }
                else {
                }
            }
        };
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
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if (this.pauseIsOn) {
                return;
            }
            if (_isDown) {
                for (var i = 0; i < this.aHitAreas.length; i++) {
                    if (this.aHitAreas[i].rect) {
                        var aX = getSafeWidth(canvas.width * this.aHitAreas[i].align[0]);
                        var aY = getSafeHeight(canvas.height * this.aHitAreas[i].align[1]);
                        if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if (this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if (this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            if (this.aHitAreas[i] && this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                if (this.aHitAreas[i]) {
                                    this.aHitAreas[i].oData.isBeingDragged = false;
                                }
                            }
                        }
                        else if (this.aHitAreas[i].oData.isDown && !this.aHitAreas[i].oData.hasLeft) {
                            for (var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                                if (this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                    this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                    j -= 1;
                                }
                            }
                            if (this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[i].oData.hasLeft = true;
                                if (!this.aHitAreas[i].oData.isBeingDragged) {
                                    this.aHitAreas[i].oData.isDown = false;
                                }
                                if (this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        UserInput.prototype.keyDown = function (e) {
            for (var i = 0; i < this.aKeys.length; i++) {
                if (e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for (var i = 0; i < this.aKeys.length; i++) {
                if (e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = false;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.checkKeyFocus = function () {
            window.focus();
            if (this.aKeys.length > 0) {
                window.removeEventListener('keydown', this.keyDownEvtFunc, false);
                window.removeEventListener('keyup', this.keyUpEvtFunc, false);
                window.addEventListener('keydown', this.keyDownEvtFunc, false);
                window.addEventListener('keyup', this.keyUpEvtFunc, false);
            }
        };
        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {
            if (_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            this.aKeys.push({ id: _id, callback: _callback, oData: _oCallbackData, keyCode: _keyCode });
            this.checkKeyFocus();
        };
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
            if (_oCallbackData == null) {
                _oCallbackData = new Object();
            }
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
        UserInput.prototype.removeHitArea = function (_id) {
            for (var i = 0; i < this.aHitAreas.length; i++) {
                if (this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
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
    var FpsMeter = (function () {
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
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
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    }());
    Utils.FpsMeter = FpsMeter;
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background() {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.incY = 0;
            this.renderState = null;
            if (gameState == "start") {
                this.oImgData = assetLib.getData("titleBg");
            }
        }
        Background.prototype.render = function () {
            if (canvas.width > canvas.height) {
                ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
            }
            else {
                ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
            }
        };
        return Background;
    }());
    Elements.Background = Background;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.posX = 0;
            this.numberSpace = 17;
            this.incY = 0;
            this.flareRot = 0;
            this.scrollX = 0;
            this.posBounceX = 0;
            this.aHeroCharPos = new Array({ x: -30, y: 50 }, { x: -30, y: 50 }, { x: -20, y: 100 }, { x: -20, y: 70 }, { x: 0, y: 50 });
            this.aEnemyCharPos = new Array({ x: 50, y: 50 }, { x: 40, y: 20 }, { x: 0, y: 70 }, { x: 40, y: 50 }, { x: 30, y: 80 });
            this.scoreNumberSpace = 48;
            this.loserX = 0;
            this.evolved = false;
            this.evolveTimer = 0;
            this.evolveAlpha = 0;
            this.evolveEffectScale = 0;
            this.aFlashes = new Array();
            this.jiggleY0 = 0;
            this.jiggleY1 = 0;
            this.congratsState = 0;
            this.ballInfoId = 0;
            if (gameState == "goalkeepingComplete" && curProgress == 5 && oGameData.heroScore > oGameData.enemyScore) {
                this.oBgImgData = assetLib.getData("tournWinBg");
            }
            else {
                this.oBgImgData = assetLib.getData("titleBg");
            }
            this.oTitleLogoImgData = assetLib.getData("titleLogo");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.aButs = _aButs;
            this.oIntroElementsImgData = assetLib.getData("introElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.aConfetti = new Array();
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].height;
            this.aConfetti.push({ x: .2, y: -bHeight, rot: Math.random() * 2 - 1 });
            this.aConfetti.push({ x: .5, y: -bHeight, rot: Math.random() * 2 - 1 });
            this.aConfetti.push({ x: .8, y: -bHeight, rot: Math.random() * 2 - 1 });
            this.aConfetti.push({ x: .2, y: bHeight * .3, rot: Math.random() * 2 - 1 });
            this.aConfetti.push({ x: .5, y: bHeight * .3, rot: Math.random() * 2 - 1 });
            this.aConfetti.push({ x: .8, y: bHeight * .3, rot: Math.random() * 2 - 1 });
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.startTween1 = function () {
            this.congratsState = 0;
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Cubic.easeOut" });
            this.posX = 100;
            TweenLite.to(this, .5, { posX: 0, ease: "Cubic.easeOut" });
            this.posBounceX = 50;
            TweenLite.to(this, 1, { posBounceX: 0, ease: "Bounce.easeOut" });
        };
        Panel.prototype.showBallInfo = function (_id) {
            this.ballInfoId = _id;
        };
        Panel.prototype.triggerCongrats = function () {
            this.congratsState = 1;
        };
        Panel.prototype.triggerStriker = function () {
            if (this.strikerTween) {
                this.strikerTween.kill();
            }
            this.strikerX = 500;
            this.strikerTween = TweenLite.to(this, .5, { strikerX: 0, ease: "Cubic.easeOut" });
        };
        Panel.prototype.triggerGoalie = function () {
            if (this.goalieTween) {
                this.goalieTween.kill();
            }
            this.goalieX = 500;
            this.goalieTween = TweenLite.to(this, .5, { goalieX: 0, ease: "Cubic.easeOut" });
        };
        Panel.prototype.startEvolveTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Cubic.easeOut" });
            this.posX = 50;
            TweenLite.to(this, 1, { posX: 0, ease: "Cubic.easeOut" });
            this.posBounceX = 50;
            TweenLite.to(this, 1, { delay: 2, posBounceX: 0, ease: "Bounce.easeOut" });
        };
        Panel.prototype.shootingCompleteTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Cubic.easeOut" });
            this.posX = 50;
            TweenLite.to(this, 1, { posX: 0, ease: "Quad.easeOut" });
            this.posBounceX = 50;
            TweenLite.to(this, 1, { posBounceX: 0, ease: "Bounce.easeOut" });
            setTimeout(function () {
                wipe.trigger(initGoalkeeping);
            }, 1500);
        };
        Panel.prototype.startScreenTween = function () {
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, delay: .5, ease: "Cubic.easeOut" });
            this.oStartPosData = {
                craigX: 500,
                darwinX: -1000,
                wonderWomanX: -1000,
                maoMaoX: -1000,
                appleX: -1000,
                ravenX: -1000,
                rainbowScale: 0,
                titleX: -1000,
                ballX: -1000,
                robinX: -1000,
                starfireX: -1000,
                logoX: -1000
            };
            TweenLite.to(this.oStartPosData, .5, { craigX: 0, delay: 0, ease: "Cubic.easeOut" });
            TweenLite.to(this.oStartPosData, 1, { ravenX: 0, delay: .1, ease: "Quad.easeOut" });
            TweenLite.to(this.oStartPosData, 1, { ballX: 0, delay: .1, ease: "Quad.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { darwinX: 0, delay: .4, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { wonderWomanX: 0, delay: .6, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { maoMaoX: 0, delay: .2, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { appleX: 0, delay: .3, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { robinX: 0, delay: .5, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { starfireX: 0, delay: .1, ease: "Back.easeOut" });
            TweenLite.to(this.oStartPosData, .5, { titleX: 0, logoX: 0, rainbowScale: 1, delay: .6, ease: "Quad.easeOut" });
        };
        Panel.prototype.updateConfetti = function () {
            if (Math.random() < .1) {
                addFlash(0, Math.random() * canvas.width, canvas.height / 2 - (Math.random() * 144 + 42), Math.random() * .2 + .2, this.aFlashes);
            }
            for (var i = 0; i < this.aFlashes.length; i++) {
                this.aFlashes[i].update();
                this.aFlashes[i].render(ctx);
                if (this.aFlashes[i].removeMe) {
                    this.aFlashes.splice(i, 1);
                    i -= 1;
                }
            }
            for (var i = 0; i < this.aConfetti.length; i++) {
                ctx.save();
                ctx.translate(this.aConfetti[i].x * canvas.width, this.aConfetti[i].y);
                ctx.rotate((this.incY * .03) * this.aConfetti[i].rot);
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.confetti].height;
                this.aConfetti[i].y += delta * 100;
                if (this.aConfetti[i].y > canvas.height + bHeight / 2) {
                    this.aConfetti[i].y = -bHeight / 2;
                    this.aConfetti[i].rot = Math.random() * 2 - 1;
                }
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                ctx.restore();
            }
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
                }
            }
            return oButData;
        };
        Panel.prototype.introTween = function () {
            this.oIntro = { inc0: 1, inc1: -300, inc2: 1, inc3: -200, inc4: -300, inc5: 1, inc6: 0, inc7: 0, inc8: 400 };
            TweenLite.to(this.oIntro, 2, { delay: .5, inc0: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, .5, { delay: .5, inc1: 0, ease: "Quint.easeOut" });
            TweenLite.to(this.oIntro, 2, { delay: 1, inc2: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 1.5, inc3: 0, ease: "Back.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 2.4, inc4: 0, ease: "Elastic.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 3, inc5: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 4, inc6: 1, ease: "Bounce.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 5, inc7: 1, ease: "Elastic.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: 5.4, inc8: 0, ease: "Back.easeOut" });
        };
        Panel.prototype.outroTween = function () {
            this.oIntro = { inc0: 1, inc1: 0, inc2: 1, inc3: -300, inc4: 1, inc5: 0 };
            TweenLite.to(this.oIntro, 1, { delay: .5, inc0: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, 1, { delay: .8, inc1: 1, ease: "Elastic.easeIn" });
            TweenLite.to(this.oIntro, 2, { delay: 2.2, inc2: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, .5, { delay: 2.4, inc3: 0, ease: "Back.easeOut" });
            TweenLite.to(this.oIntro, 2, { delay: 3.45, inc4: 0, ease: "Quad.easeOut" });
            TweenLite.to(this.oIntro, 2, { delay: 4.45, inc5: 1, ease: "Quad.easeOut" });
        };
        Panel.prototype.render = function (_butsOnTop) {
            if (_butsOnTop === void 0) { _butsOnTop = true; }
            if (!_butsOnTop) {
                this.addButs(ctx);
            }
            switch (gameState) {
                case "start":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, Math.max(150, canvas.height * .33) + 25 - (bHeight / 2) * this.oStartPosData.rainbowScale, canvas.width, bHeight * this.oStartPosData.rainbowScale);
                    var tempHoverX = Math.sin(this.incY / 6) * 3;
                    var tempHoverY = Math.cos(this.incY / 6) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 150 + this.oStartPosData.ravenX + tempHoverX, Math.max(150, canvas.height * .33) - 95 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRaven].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 1) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 1) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 300 + this.oStartPosData.wonderWomanX + tempHoverX, getSafeHeight(canvas.height) - 80 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleWonderWoman].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    ctx.drawImage(this.oTitleLogoImgData.img, 0, 0, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height, canvas.width / 2 - this.oTitleLogoImgData.img.width / 2 + this.oStartPosData.titleX - 50, Math.max(140, canvas.height * .33) - this.oTitleLogoImgData.img.height / 2, this.oTitleLogoImgData.img.width, this.oTitleLogoImgData.img.height);
                    var tempHoverX = Math.sin(this.incY / 5) * 3;
                    var tempHoverY = Math.cos(this.incY / 5) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 300 + tempHoverX, getSafeHeight(canvas.height) + 70 + tempHoverY + this.oStartPosData.craigX);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleCraig].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleCraig].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleCraig].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleCraig].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 4) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 4) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 320 + this.oStartPosData.robinX + tempHoverX, getSafeHeight(canvas.height) - 10 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRobin].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRobin].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRobin].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleRobin].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 4) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 4) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 90 + this.oStartPosData.maoMaoX + tempHoverX, getSafeHeight(canvas.height) + 45 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleMaoMao].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 3) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 3) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 170 + this.oStartPosData.appleX + tempHoverX, getSafeHeight(canvas.height) + 20 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleApple].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 2) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 2) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - 290 + this.oStartPosData.darwinX + tempHoverX, getSafeHeight(canvas.height) + 40 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleDarwin].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleDarwin].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleDarwin].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleDarwin].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 4) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 4) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 60 + this.oStartPosData.starfireX + tempHoverX, getSafeHeight(canvas.height) + 70 + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleStarfire].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleStarfire].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleStarfire].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleStarfire].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    tempHoverX = Math.sin(this.incY / 5 + 5) * 3;
                    tempHoverY = Math.cos(this.incY / 5 + 5) * 3;
                    ctx.save();
                    ctx.translate(canvas.width / 2 + 240 + tempHoverX, getSafeHeight(canvas.height) - 280 + this.oStartPosData.ballX + tempHoverY);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBall].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    if (hasEndGameLink) {
                        ctx.fillStyle = "rgba(0, 0, 85, .5)";
                        ctx.fillRect(getSafeWidth(0) + 10, getSafeHeight(canvas.height) - 50 + this.butsY, 200, 40);
                        addText(0, 25, 190, "center", getSafeWidth(0) + 110, getSafeHeight(canvas.height) - 22 + this.butsY, "extBut", "#FFFFFF");
                    }
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var tempImgData = assetLib.getData("info");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - tempImgData.img.width / 2 - this.posY, canvas.height / 2 - tempImgData.img.height / 2, tempImgData.img.width, tempImgData.img.height);
                    addText(0, 20, 1000, "center", canvas.width / 2 - this.posY, canvas.height / 2 - 170, "producedFor", "#FFFFFF");
                    addText(0, 20, 1000, "center", canvas.width / 2 - this.posY, canvas.height / 2 + 83, "createdBy", "#FFFFFF");
                    break;
                case "charSelect":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .6 - bHeight / 2 + this.posX, canvas.width, bHeight);
                    if (userStrikerId != null && userGoalieId != null) {
                        this.flareRot += delta;
                        ctx.save();
                        ctx.translate(canvas.width / 2, canvas.height - 70);
                        ctx.scale(Math.min(this.flareRot * 10, 2.5), Math.min(this.flareRot * 10, 2.5));
                        ctx.rotate(this.flareRot);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                        ctx.restore();
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "selectTeam", "#000055");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth - 10 - this.posX, canvas.height * .13, bWidth, bHeight);
                    addText(1, 30, 320, "center", canvas.width / 2 - 185, canvas.height * .13 + 30, "strikers", "#FFD40D");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.charSelectBg1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 10 + this.posX, canvas.height * .13, bWidth, bHeight);
                    addText(1, 30, 320, "center", canvas.width / 2 + 185, canvas.height * .13 + 30, "goalkeepers", "#FFD40D");
                    if (this.strikerX < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        var tempY = Math.max(canvas.height - bHeight, canvas.height * .13 + 240 + aStrikerData[userStrikerId].offsetY);
                        if (canvas.height - (canvas.height * .14 + 230) > bHeight) {
                            tempY = Math.max(tempY - ((canvas.height - (canvas.height * .14 + 230)) - bHeight), canvas.height - this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height - 2 - bHeight);
                        }
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, canvas.height - tempY - 10, canvas.width / 2 - bWidth / 2 + aStrikerData[userStrikerId].offsetX - this.strikerX + Math.sin(this.incY * .5) * 5, tempY + this.strikerX, bWidth, canvas.height - tempY - 10);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 155 - this.strikerX * 2, canvas.height - bHeight - 5, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width / 2 - bWidth / 2 - 20 - this.strikerX * 2, canvas.height - bHeight + 25, "striker" + userStrikerId, "#FFFFFF");
                    }
                    if (this.goalieX < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        var tempY = Math.max(canvas.height - bHeight, canvas.height * .13 + 240 + aGoalieData[userGoalieId].offsetY);
                        if (canvas.height - (canvas.height * .14 + 230) > bHeight) {
                            tempY = Math.max(tempY - ((canvas.height - (canvas.height * .14 + 230)) - bHeight), canvas.height - this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height - 2 - bHeight);
                        }
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, canvas.height - tempY - 10, canvas.width / 2 - bWidth / 2 + aGoalieData[userGoalieId].offsetX + this.goalieX - Math.sin(this.incY * .5) * 5, tempY + this.goalieX, bWidth, canvas.height - tempY - 10);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + 155 + this.goalieX * 2, canvas.height - bHeight - 5, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width / 2 - bWidth / 2 + 300 + this.goalieX * 2, canvas.height - bHeight + 25, "goalie" + userGoalieId, "#FFFFFF");
                    }
                    break;
                case "progress":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.progressMap].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.progressMap].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.progressMap].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.progressMap].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(canvas.width) - bWidth + this.posX, 0, bWidth, bHeight);
                    var tempScale = .7;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 190 - bWidth / 2, canvas.height - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 330 - bWidth / 2, canvas.height - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "tournamentProgress", "#000055");
                    break;
                case "ball":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .5 - bHeight / 2 + this.posX, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "ballScreenTitle", "#000055");
                    var tempScale = .8;
                    var tempOffset = 150;
                    for (var i = 0; i < 6; i++) {
                        if (i == ballId) {
                            this.flareRot += delta;
                            ctx.save();
                            ctx.translate(canvas.width / 2 + (i % 3) * tempOffset - tempOffset - this.posX, canvas.height / 2 + Math.floor(i / 3) * tempOffset - tempOffset / 2);
                            ctx.scale(1, 1);
                            ctx.rotate(this.flareRot);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                            ctx.restore();
                        }
                        var oBallImgData = assetLib.getData("ball" + i);
                        var imgX = (0 * oBallImgData.oData.spriteWidth) % oBallImgData.img.width;
                        var imgY = Math.floor(0 / (oBallImgData.img.width / oBallImgData.oData.spriteWidth)) * oBallImgData.oData.spriteHeight;
                        ctx.drawImage(oBallImgData.img, imgX, imgY, oBallImgData.oData.spriteWidth, oBallImgData.oData.spriteHeight, canvas.width / 2 + (i % 3) * tempOffset - tempOffset - (oBallImgData.oData.spriteWidth / 2) * tempScale - this.posX, canvas.height / 2 + Math.floor(i / 3) * tempOffset - tempOffset / 2 - (oBallImgData.oData.spriteHeight / 2) * tempScale, oBallImgData.oData.spriteWidth * tempScale, oBallImgData.oData.spriteHeight * tempScale);
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
                        ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + (i % 3) * tempOffset - tempOffset - (bWidth / 2) * tempScale - this.posX, canvas.height / 2 + Math.floor(i / 3) * tempOffset - tempOffset / 2 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
                    }
                    if (this.ballInfoId > 0) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.ballInfoPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.ballInfoPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.ballInfoPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.ballInfoPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + 30, canvas.height - 75, bWidth, bHeight);
                        var oBallImgData = assetLib.getData("ball" + this.ballInfoId);
                        tempScale = .27;
                        var imgX = (0 * oBallImgData.oData.spriteWidth) % oBallImgData.img.width;
                        var imgY = Math.floor(0 / (oBallImgData.img.width / oBallImgData.oData.spriteWidth)) * oBallImgData.oData.spriteHeight;
                        ctx.drawImage(oBallImgData.img, imgX, imgY, oBallImgData.oData.spriteWidth, oBallImgData.oData.spriteHeight, canvas.width / 2 - 289, canvas.height - 67, oBallImgData.oData.spriteWidth * tempScale, oBallImgData.oData.spriteHeight * tempScale);
                        addText(0, 30, 550, "center", canvas.width / 2 + 50, canvas.height - 36, "ballLock" + this.ballInfoId, "#E65D6A");
                    }
                    break;
                case "ballUnlocked":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.rainbow].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .5 - bHeight / 2 + this.posX, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "ballUnlock", "#000055");
                    this.flareRot += delta;
                    ctx.save();
                    ctx.translate(canvas.width / 2 - this.posX, canvas.height / 2);
                    ctx.scale(2, 2);
                    ctx.rotate(this.flareRot);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                    var tempScale = 1;
                    var oBallImgData = assetLib.getData("ball" + (saveDataHandler.getMatchesCompleted() / 3));
                    var imgX = (0 * oBallImgData.oData.spriteWidth) % oBallImgData.img.width;
                    var imgY = Math.floor(0 / (oBallImgData.img.width / oBallImgData.oData.spriteWidth)) * oBallImgData.oData.spriteHeight;
                    ctx.drawImage(oBallImgData.img, imgX, imgY, oBallImgData.oData.spriteWidth, oBallImgData.oData.spriteHeight, canvas.width / 2 - (oBallImgData.oData.spriteWidth / 2) * tempScale - this.posX, canvas.height / 2 - (oBallImgData.oData.spriteHeight / 2) * tempScale + Math.sin(this.incY) * 10, oBallImgData.oData.spriteWidth * tempScale, oBallImgData.oData.spriteHeight * tempScale);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - this.posX, canvas.height / 2 - (bHeight / 2) * tempScale + Math.sin(this.incY) * 10, bWidth * tempScale, bHeight * tempScale);
                    break;
                case "shootingIntro":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "shootingIntro" + curProgress, "#000055");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + 2 - bHeight + this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 30 + this.posX, "striker" + userStrikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 + this.posX - bWidth / 2, canvas.height * .77 + 2 + this.posX - bHeight, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 - bWidth / 2 + this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 30 + this.posX, "goalie" + aEnemyData[curProgress].goalieId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .77 - 110 - bHeight / 2 - this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "strikerChat" + userStrikerId + "_" + aEnemyData[curProgress].goalieId, "#E65D6A");
                    break;
                case "goalkeepingIntro":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "goalkeepingIntro", "#000055");
                    ctx.save();
                    ctx.translate(canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 2 + this.posX);
                    ctx.scale(-1, 1);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 180 - bWidth / 2 - this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 180 - this.posX, canvas.height * .77 + 30 + this.posX, "goalie" + userGoalieId, "#FFFFFF");
                    ctx.save();
                    ctx.translate(canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 2 + this.posX);
                    ctx.scale(-1, 1);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight, bWidth, bHeight);
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 180 - bWidth / 2 + this.posX, canvas.height * .77 + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 + 180 + this.posX, canvas.height * .77 + 30 + this.posX, "striker" + aEnemyData[curProgress].strikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vsPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .77 - 110 - bHeight / 2 - this.posX, bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "goalieChat" + userGoalieId + "_" + aEnemyData[curProgress].strikerId, "#E65D6A");
                    break;
                case "goalkeepingComplete":
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    this.updateConfetti();
                    if (oGameData.heroScore > oGameData.enemyScore && curProgress == 5) {
                        var tempX = canvas.width / 2;
                        var tempY = canvas.height / 2 - 10;
                        var tempScale = .6;
                        if (this.congratsState == 1) {
                            tempX = canvas.width / 2 + 100;
                            tempY = canvas.height / 2 + 50;
                            tempScale = 1;
                        }
                        ctx.save();
                        ctx.translate(tempX, tempY);
                        ctx.rotate(Math.sin(this.incY * .2) * .2);
                        ctx.scale(tempScale, tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winCup].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                        ctx.restore();
                    }
                    if (this.congratsState == 0) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    }
                    else {
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2 - 1, canvas.height * .2 - 1, "congrats", "#71BCFF");
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2 + 2, canvas.height * .2 + 2, "congrats", "#000055");
                        addText(1, 80, canvas.width - 200, "center", canvas.width / 2, canvas.height * .2, "congrats", "#ffffff");
                    }
                    var tempScale = .8;
                    var tempY = .72;
                    this.jiggleY0 = 0;
                    this.jiggleY1 = 0;
                    if (oGameData.heroScore > oGameData.enemyScore) {
                        this.jiggleY0 = 10 - Math.abs(Math.sin(this.incY * .5) * 10);
                        this.jiggleY1 = 10 - Math.abs((Math.sin(this.incY * .5 + 1)) * 10);
                    }
                    if (userStrikerId != 5) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, canvas.width * .5 - 220 - Math.min(bWidth * tempScale, 280 / 2) - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY0) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY0) * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, canvas.width * .5 - 220 + Math.min(bWidth * tempScale, 280 / 2) - (bWidth) * tempScale - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY1) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY1) * tempScale);
                    }
                    else {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, canvas.width * .5 - 220 + Math.min(bWidth * tempScale, 280 / 2) - (bWidth) * tempScale - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY1) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY1) * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + userGoalieId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, canvas.width * .5 - 220 - Math.min(bWidth * tempScale, 280 / 2) - this.posX, canvas.height * tempY + 2 - (bHeight - this.jiggleY0) * tempScale + this.posX, bWidth * tempScale, (bHeight - this.jiggleY0) * tempScale);
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 220 - bWidth / 2 - this.posX, canvas.height * tempY + this.posX, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 220 - this.posX, canvas.height * tempY + 30 + this.posX, "striker" + userStrikerId, "#FFFFFF");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - 220 - bWidth / 2 - this.posX, canvas.height * tempY + this.posX + 50, bWidth, bHeight);
                    addText(1, 30, 200, "center", canvas.width * .5 - 220 - this.posX, canvas.height * tempY + 30 + this.posX + 50, "goalie" + userGoalieId, "#FFFFFF");
                    if (this.congratsState == 0) {
                        this.jiggleY0 = 0;
                        this.jiggleY1 = 0;
                        if (oGameData.heroScore < oGameData.enemyScore) {
                            this.jiggleY0 = 10 - Math.abs(Math.sin(this.incY * .5) * 10);
                            this.jiggleY1 = 10 - Math.abs((Math.sin(this.incY * .5 + 1)) * 10);
                        }
                        if (aEnemyData[curProgress].strikerId != 5) {
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX + Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY0);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, 0, -bHeight, bWidth, bHeight - this.jiggleY0);
                            ctx.restore();
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX - Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY1);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, -bWidth, -bHeight, bWidth, bHeight - this.jiggleY1);
                            ctx.restore();
                        }
                        else {
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + aEnemyData[curProgress].strikerId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX - Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY1);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY1, -bWidth, -bHeight, bWidth, bHeight - this.jiggleY1);
                            ctx.restore();
                            ctx.save();
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["goalieChar" + aEnemyData[curProgress].goalieId]].height;
                            ctx.translate(canvas.width * .5 + 220 + this.posX + Math.min(bWidth * tempScale, 280 / 2), canvas.height * tempY + 2 + this.posX + this.jiggleY0);
                            ctx.scale(-1 * tempScale, 1 * tempScale);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight - this.jiggleY0, 0, -bHeight, bWidth, bHeight - this.jiggleY0);
                            ctx.restore();
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 220 - bWidth / 2 + this.posX, canvas.height * tempY + this.posX, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width * .5 + 220 + this.posX, canvas.height * tempY + 30 + this.posX, "striker" + aEnemyData[curProgress].strikerId, "#FFFFFF");
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.namePanel1].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 + 220 - bWidth / 2 + this.posX, canvas.height * tempY + this.posX + 50, bWidth, bHeight);
                        addText(1, 30, 200, "center", canvas.width * .5 + 220 + this.posX, canvas.height * tempY + 30 + this.posX + 50, "goalie" + aEnemyData[curProgress].goalieId, "#FFFFFF");
                        tempScale = .8 + this.posBounceX / 40;
                        tempY = canvas.height * .72 - 100;
                        var tempScore = oGameData.heroScore.toString();
                        for (var i = 0; i < tempScore.length; i++) {
                            var id = parseFloat(tempScore.charAt(i));
                            var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                            var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + i * (this.scoreNumberSpace * tempScale) - 30 * tempScale - tempScore.length * (this.scoreNumberSpace * tempScale), tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        }
                        var id = 10;
                        var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                        var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 - 30 * tempScale, tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        var tempScore = oGameData.enemyScore.toString();
                        for (var i = 0; i < tempScore.length; i++) {
                            var id = parseFloat(tempScore.charAt(i));
                            var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                            var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, canvas.width / 2 + i * (this.scoreNumberSpace * tempScale) + 15 * tempScale, tempY - (this.oScoreNumbersImgData.oData.spriteHeight / 2) * tempScale, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel0].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .5 - bWidth / 2, canvas.height * .5 - 117 - bHeight / 2 - this.posX, bWidth, bHeight);
                        if (oGameData.heroScore > oGameData.enemyScore) {
                            var tempText = "matchWon";
                            var tempText2 = "youWon0";
                            if (curProgress == 4) {
                                tempText = "tournamentWon";
                                tempText2 = "youWon1";
                            }
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, tempText2, "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, tempText + aEnemyData[curProgress].strikerId, "#E65D6A");
                        }
                        else if (oGameData.heroScore < oGameData.enemyScore) {
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "youLost", "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "matchLost" + aEnemyData[curProgress].strikerId, "#E65D6A");
                        }
                        else {
                            addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "draw", "#000055");
                            addText(0, 30, 625, "center", canvas.width * .5, canvas.height * .5 - 125 - this.posX, "matchDraw" + aEnemyData[curProgress].strikerId, "#E65D6A");
                        }
                    }
                    break;
                case "shootingComplete":
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    this.scrollX += delta * 2000;
                    var oWipeImgData = assetLib.getData("wipe0");
                    var cropWidth = oWipeImgData.img.width;
                    ctx.drawImage(oWipeImgData.img, 0, 0, Math.min(Math.max(canvas.width / 2, canvas.width / 2 + this.scrollX % cropWidth), oWipeImgData.img.width), oWipeImgData.img.height, -this.scrollX % cropWidth, 0, Math.min(Math.max(canvas.width / 2, canvas.width / 2 + this.scrollX % cropWidth), oWipeImgData.img.width), canvas.height);
                    ctx.drawImage(oWipeImgData.img, 0, 0, Math.max(this.scrollX % cropWidth - (cropWidth - canvas.width / 2), .1), oWipeImgData.img.height, cropWidth - this.scrollX % cropWidth, 0, Math.max(this.scrollX % cropWidth - (cropWidth - canvas.width / 2), .1), canvas.height);
                    var oWipeImgData = assetLib.getData("wipe1");
                    ctx.drawImage(oWipeImgData.img, Math.max((cropWidth - canvas.width / 2) - this.scrollX % cropWidth, 0), 0, cropWidth, oWipeImgData.img.height, canvas.width / 2 + Math.max((this.scrollX % cropWidth) - (cropWidth - canvas.width / 2), 0), 0, cropWidth, canvas.height);
                    ctx.drawImage(oWipeImgData.img, Math.min(cropWidth + (cropWidth - canvas.width / 2) - this.scrollX % cropWidth, cropWidth - .1), 0, cropWidth, oWipeImgData.img.height, canvas.width / 2, 0, cropWidth, canvas.height);
                    var oCharImgData = assetLib.getData("char0" + heroId);
                    ctx.drawImage(oCharImgData.img, 0, 0, oCharImgData.img.width, oCharImgData.img.height, canvas.width / 2 - oCharImgData.img.width + this.aHeroCharPos[heroId].x, canvas.height / 2 - oCharImgData.img.height / 2 + Math.sin(this.incY / 2) * 5 + this.aHeroCharPos[heroId].y, oCharImgData.img.width, oCharImgData.img.height);
                    var oCharImgData = assetLib.getData("char1" + enemyStrikerId);
                    ctx.drawImage(oCharImgData.img, 0, 0, oCharImgData.img.width, oCharImgData.img.height, canvas.width / 2 + this.aEnemyCharPos[enemyStrikerId].x, canvas.height / 2 - oCharImgData.img.height / 2 - Math.sin(this.incY / 2) * 5 + this.aEnemyCharPos[enemyStrikerId].y, oCharImgData.img.width, oCharImgData.img.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth * .5, (this.scrollX / 4) % canvas.height, bWidth, canvas.height * 2);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.versusMidEffect].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth * .5, (this.scrollX / 4) % canvas.height - canvas.height, bWidth, canvas.height * 2);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameTop].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 0 - this.posX, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.blackFrameBottom].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - bHeight + this.posX, canvas.width, bHeight);
                    var temp = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["textPanel" + temp]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 10 + this.posBounceX * 3, bWidth, bHeight);
                    addText(0, 40, 330, "center", canvas.width / 2, 61 + this.posBounceX * 3, "goalkeepingTime");
                    break;
                case "shooting":
                    if (showingTut) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                        addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "howToShoot", "#000055");
                    }
                    break;
                case "goalkeeping":
                    if (showingTut) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                        addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "howToSave", "#000055");
                    }
                    break;
                case "pause":
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0), -this.posX, bWidth, bHeight);
                    addText(0, 30, 530, "left", getSafeWidth(0) + 43, 36 - this.posX, "paused", "#000055");
                    addText(0, 25, 160, "center", canvas.width / 2 - 85, canvas.height / 2 + 90 - this.butsY, "continue", "#FFFFFF");
                    addText(0, 25, 160, "center", canvas.width / 2 + 85, canvas.height / 2 + 90 - this.butsY, "quitGame", "#FFFFFF");
                    if (hasEndGameLink) {
                        addText(0, 25, 190, "center", 110, canvas.height - 22 + this.butsY, "extBut", "#FFFFFF");
                    }
                    break;
                case "quitConfirm":
                    ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2, this.oBgImgData.img.width, this.oBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 85, .75)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var tempScale = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["strikerChar" + userStrikerId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(canvas.width * .15 - bWidth / 2), getSafeHeight(canvas.height) - bHeight * tempScale + this.posX, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.speechPanel1].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(canvas.width * .15 + 250 - bWidth / 2), getSafeHeight(canvas.height) - 275 - bHeight / 2 - this.posX, bWidth, bHeight);
                    addText(0, 30, 625, "center", getSafeWidth(canvas.width * .15 + 250 - bWidth / 2) + bWidth / 2, getSafeHeight(canvas.height) - 275 - 8 - this.posX, "quitGameQuestion", "#E65D6A");
                    addText(0, 25, 160, "center", canvas.width / 2 - 85, getSafeHeight(canvas.height) - 150 + 90 + this.butsY, "quit", "#FFFFFF");
                    addText(0, 25, 160, "center", canvas.width / 2 + 85, getSafeHeight(canvas.height) - 150 + 90 + this.butsY, "cancel", "#FFFFFF");
                    break;
                case "rotated":
                    var oRotateIconImgData = assetLib.getData("rotateIcon");
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(oRotateIconImgData.img, canvas.width / 2 - oRotateIconImgData.img.width / 2, canvas.height / 2 - oRotateIconImgData.img.height / 2);
                    break;
            }
            if (_butsOnTop) {
                this.addButs(ctx);
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
        Panel.prototype.addButs = function (ctx) {
            var aButOver = false;
            for (var i = 0; i < this.aButs.length; i++) {
                if (this.aButs[i].isOver) {
                    aButOver = true;
                }
            }
            for (var i = 0; i < this.aButs.length; i++) {
                var offsetPosY;
                var floatY = 0;
                if (this.incY != 0 && this.aButs[i].flash) {
                    if (this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i) * 2) * 3;
                    }
                    else {
                        floatY = Math.sin(this.incY + i) * 3;
                    }
                }
                if (i % 2 == 0) {
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
                var aX;
                var aY;
                if (this.aButs[i].freeFloat) {
                    aX = canvas.width * this.aButs[i].align[0];
                    aY = canvas.height * this.aButs[i].align[1];
                }
                else {
                    aX = getSafeWidth(canvas.width * this.aButs[i].align[0]);
                    aY = getSafeHeight(canvas.height * this.aButs[i].align[1]);
                }
                if (aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                }
                else {
                    offsetPosY = -this.butsY;
                }
                this.aButs[i].aOverData = new Array(aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2, aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2);
                if (this.aButs[i].isOver && this.aButs[i].flash) {
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.rotate(this.incY / 30);
                    ctx.scale(1 + Math.sin(this.incY) / 10, 1 + Math.sin(this.incY + 1) / 10);
                    ctx.globalAlpha = 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.flare0].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                }
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if (this.aButs[i].isOver || this.aButs[i].flash) {
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
    var TextDisplay = (function () {
        function TextDisplay() {
            this.oTextData = {};
            this.inc = 0;
            this.createTextObjects();
        }
        TextDisplay.prototype.createTextObjects = function () {
            var cnt = 0;
            for (var i in assetLib.textData.langText.text[curLang]) {
                this.oTextData[i] = {};
                this.oTextData[i].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][i]["@text"], assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].aLineWidths = this.getLineWidths(this.oTextData[i].aLineData);
                this.oTextData[i].blockWidth = this.getBlockWidth(this.oTextData[i].aLineData);
                this.oTextData[i].blockHeight = this.getBlockHeight(this.oTextData[i].aLineData, assetLib.textData.langText.text[curLang][i]["@fontId"]);
                this.oTextData[i].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][i]["@fontId"]].text.common["@lineHeight"]);
                this.oTextData[i].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][i]["@fontId"]);
            }
        };
        TextDisplay.prototype.getLineWidths = function (_aCharData) {
            var lineLength;
            var aLineWidths = new Array();
            for (var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for (var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if (j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                    else if (j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                aLineWidths.push(lineLength);
            }
            return aLineWidths;
        };
        TextDisplay.prototype.getBlockWidth = function (_aCharData) {
            var lineLength;
            var longestLineLength = 0;
            for (var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for (var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if (j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                    else if (j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                if (lineLength > longestLineLength) {
                    longestLineLength = lineLength;
                }
            }
            return longestLineLength;
        };
        TextDisplay.prototype.getBlockHeight = function (_aCharData, _fontId) {
            return _aCharData.length * parseInt(assetLib.textData["fontData" + _fontId].text.common["@lineHeight"]);
        };
        TextDisplay.prototype.getCharData = function (_aLines, _fontId) {
            var aCharData = new Array();
            for (var k = 0; k < _aLines.length; k++) {
                aCharData[k] = new Array();
                for (var i = 0; i < _aLines[k].length; i++) {
                    for (var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) {
                        if (_aLines[k][i].charCodeAt(0) == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
                            aCharData[k].push(assetLib.textData["fontData" + _fontId].text.chars.char[j]);
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
            if (_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if (_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if (_oTextDisplayData.maxWidth && this.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if (_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for (var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if (_oTextDisplayData.alignX == "centre") {
                    offsetX = this.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                if (_oTextDisplayData.alignY == "centre") {
                    offsetY = this.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
                }
                for (var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if (_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
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
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework(_oImgData, _animId, _shouldFall, _frameRate) {
            if (_frameRate === void 0) { _frameRate = 25; }
            var _this = _super.call(this, _oImgData, _frameRate, 45, _animId) || this;
            _this.setAnimType("once", _animId);
            _this.shouldFall = _shouldFall;
            _this.animEndedFunc = function () { this.removeMe = true; };
            return _this;
        }
        Firework.prototype.moveSideways = function (_dir) {
            if (_dir == "left") {
                TweenLite.to(this, (1 / this.fps) * this.oAnims[this.animId].length, { x: this.x + 70 * this.scaleX, ease: "Quad.easeOut" });
            }
            else if (_dir == "right") {
                TweenLite.to(this, (1 / this.fps) * this.oAnims[this.animId].length, { x: this.x - 70 * this.scaleX, ease: "Quad.easeOut" });
            }
        };
        Firework.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.shouldFall) {
                this.y += 100 * delta;
            }
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Firework;
    }(Utils.AnimSprite));
    Elements.Firework = Firework;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Ball = (function () {
        function Ball() {
            this.rot = 0;
            this.height = 0;
            this.scale = 1;
            this.power = 0;
            this.maxSwipeLength = 30;
            this.shootState = 0;
            this.maxStartY = 560;
            this.minStartY = 360;
            this.leftPostX = -248;
            this.rightPostX = 248;
            this.crossBarY = -155;
            this.crossBarHeight = 191;
            this.bannerHeight = 41;
            this.fixedBallRadius = 80;
            this.ballScale = 1;
            this.powerAreaFrame = 0;
            this.powerAreaFrameInc = 0;
            this.powerRadius = 40;
            this.isGoldBall = false;
            this.showPowerArea = false;
            this.isSaved = false;
            this.hideMe = false;
            this.shownMissFar = false;
            this.shownSaved = false;
            this.curlXTarg = 0;
            this.windPower = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oPowerAreaImgData = assetLib.getData("powerArea");
            this.oBallImgData = assetLib.getData("ball" + ballId);
            this.oGoldBallImgData = assetLib.getData("goldBall");
            if (isMobile) {
                this.platformMultiplier = 1.0;
            }
            else {
                this.platformMultiplier = 1.0;
            }
            this.reset();
            this.setPowerArea();
        }
        Ball.prototype.killTweens = function () {
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if (this.curlTween) {
                this.curlTween.kill();
            }
            if (this.windTween) {
                this.windTween.kill();
            }
            if (this.ricochetTween) {
                this.ricochetTween.kill();
            }
            if (this.rollTween) {
                this.rollTween.kill();
            }
        };
        Ball.prototype.pause = function (_isOn) {
            if (_isOn) {
                if (this.jiggleTween && this.jiggleTween.isActive()) {
                    this.jiggleTween.pause();
                }
                if (this.curlTween && this.curlTween.isActive()) {
                    this.curlTween.pause();
                }
                if (this.windTween && this.windTween.isActive()) {
                    this.windTween.pause();
                }
                if (this.ricochetTween && this.ricochetTween.isActive()) {
                    this.ricochetTween.pause();
                }
                if (this.rollTween && this.rollTween.isActive()) {
                    this.rollTween.pause();
                }
            }
            else {
                if (this.jiggleTween && this.jiggleTween.paused()) {
                    this.jiggleTween.resume();
                }
                if (this.curlTween && this.curlTween.paused()) {
                    this.curlTween.resume();
                }
                if (this.windTween && this.windTween.paused()) {
                    this.windTween.resume();
                }
                if (this.ricochetTween && this.ricochetTween.paused()) {
                    this.ricochetTween.resume();
                }
                if (this.rollTween && this.rollTween.paused()) {
                    this.rollTween.resume();
                }
            }
        };
        Ball.prototype.reset = function () {
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if (this.curlTween) {
                this.curlTween.kill();
            }
            if (this.windTween) {
                this.windTween.kill();
            }
            if (this.ricochetTween) {
                this.ricochetTween.kill();
            }
            if (this.rollTween) {
                this.rollTween.kill();
            }
            this.hideMe = false;
            this.shootState = 0;
            this.power = 0;
            this.scale = 1;
            this.shadowAlpha = 0;
            this.height = 0;
            this.aTouchData = new Array();
            this.hitLeftPost = false;
            this.hitRightPost = false;
            this.hitCrossBar = false;
            this.inGoal = false;
            wipe.inGoal = false;
            this.hitBackOfNet = false;
            this.hitSideOfNet = false;
            this.trailInc = 0;
            this.aTrail = new Array();
            this.ballFrame = 0;
            this.rot = 0;
            this.initialRot = 0;
            this.incX = 0;
            this.incY = 0;
            this.ballScale = 1;
            this.ballFrameTarg = 0;
            this.powerAreaFrame = 0;
            this.powerAreaFrameInc = 0;
            this.isSaved = false;
            this.hasHitPowerArea = false;
            oGameData.ballInPlay = false;
            if (Math.random() > .75) {
                this.showPowerArea = true;
                this.setPowerArea();
            }
            else {
                if (this.showPowerArea) {
                    this.hidePowerArea();
                }
            }
            if (hud.powerMaxxed) {
                this.isGoldBall = true;
                hud.powerMaxxed = false;
            }
            else {
                this.isGoldBall = false;
            }
            this.ballRollX = -500;
            this.rollTween = TweenLite.to(this, .7, { ballRollX: 0, ease: "Cubic.easeOut" });
        };
        Ball.prototype.setPowerArea = function () {
            this.powerAreaScale = 0;
            TweenLite.to(this, 2, { powerAreaScale: 1, ease: "Elastic.easeOut" });
            var temp = Math.random() * 3;
            if (temp > 2) {
                this.powerAreaX = -203;
                this.powerAreaY = Math.random() * 105 + 10;
            }
            else if (temp > 1) {
                this.powerAreaX = 203;
                this.powerAreaY = Math.random() * 105 + 10;
            }
            else {
                this.powerAreaX = Math.random() * 406 - 203;
                this.powerAreaY = 115;
            }
            this.hasHitPowerArea = false;
        };
        Ball.prototype.hidePowerArea = function () {
            var _this = this;
            TweenLite.to(this, .5, { powerAreaScale: 0, ease: "Back.easeIn", onComplete: function () { _this.showPowerArea = false; } });
        };
        Ball.prototype.ballJiggle = function (_inc) {
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.initialRot = 0;
            this.ballScale = _inc;
            this.jiggleTween = TweenLite.to(this, 1, { ballScale: 1, ease: "Elastic.easeOut" });
        };
        Ball.prototype.ballKickStretch = function () {
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.ballScale = .5;
            this.jiggleTween = TweenLite.to(this, .3, { ballScale: 1, ease: "Quad.easeOut" });
        };
        Ball.prototype.isForwardKick = function () {
            var b = 0;
            for (var i = 0; i < this.aTouchData.length - 1; i++) {
                b += this.aTouchData[i + 1].y - this.aTouchData[i].y;
            }
            if (b < 0) {
                return true;
            }
            else {
                return false;
            }
        };
        Ball.prototype.shootPrep = function () {
            var a;
            var b;
            for (var i = 0; i < this.aTouchData.length - 1; i++) {
                a = this.aTouchData[i + 1].x - this.aTouchData[i].x;
                b = this.aTouchData[i + 1].y - this.aTouchData[i].y;
                this.power += Math.sqrt(a * a + b * b);
            }
            this.power = this.power / ((oGameData.swipeTime / this.aTouchData.length) * 100) * 1.4;
            a = this.aTouchData[0].x - this.aTouchData[Math.min(Math.round(this.maxSwipeLength / 2), this.aTouchData.length - 1)].x;
            b = this.aTouchData[0].y - this.aTouchData[Math.min(Math.round(this.maxSwipeLength / 2), this.aTouchData.length - 1)].y;
            this.shootAngle = Math.atan2(b, a);
            this.power *= (this.maxSwipeLength / this.aTouchData.length);
            this.power = Math.min(this.power + 1200, 4000) * this.platformMultiplier;
            if (this.isGoldBall) {
                this.power = 4000;
                playSound("powerKick");
            }
            else {
                playSound("kick" + Math.floor(Math.random() * 3));
            }
            this.incX = Math.cos(this.shootAngle) * -this.power;
            this.incY = (Math.sin(this.shootAngle) * -this.power) * Math.min(((this.startY - canvas.height / 2) / (this.maxStartY - canvas.height / 2)), 1);
            oGameData.ballInPlay = true;
            hud.heroKick.takeShot(Math.cos(this.shootAngle), this.incY);
        };
        Ball.prototype.shoot = function () {
            if (this.rollTween) {
                this.rollTween.kill();
                this.ballRollX = 0;
                this.x = canvas.width / 2 + this.ballRollX;
            }
            this.initialRot = (this.shootAngle - (90 * radian)) / 2;
            this.ballKickStretch();
            this.incHeight = Math.max((this.power - 500) * 1.2, Math.random() * 200 + 800) * (.5 + ((90 - (Math.abs((this.shootAngle / radian) - 90))) / 90) / 2);
            if (this.isGoldBall) {
                this.incHeight = 2000;
            }
            if (this.incHeight > 2100) {
            }
            var a = this.aTouchData[Math.min(Math.round(this.aTouchData.length / 2), this.aTouchData.length - 1)].x - this.aTouchData[this.aTouchData.length - 1].x;
            var b = this.aTouchData[Math.min(Math.round(this.aTouchData.length / 2), this.aTouchData.length - 1)].y - this.aTouchData[this.aTouchData.length - 1].y;
            var tempCurl = Math.atan2(b, a) - this.shootAngle;
            if (tempCurl > 180 * radian) {
                tempCurl -= 360 * radian;
            }
            else if (tempCurl < -180 * radian) {
                tempCurl += 360 * radian;
            }
            tempCurl *= (Math.max(this.incHeight - 700, 0));
            if (this.curlTween) {
                this.curlTween.kill();
            }
            this.curlX = 0;
            this.curlXTarg = Math.max(Math.min(tempCurl, 1200), -1200);
            this.curlTween = TweenLite.to(this, .3, { delay: .1, curlX: this.curlXTarg, ease: "Quad.easeIn" });
            if (this.windTween) {
                this.windTween.kill();
            }
            this.windPower = 0;
            if (hud.windDir == 0) {
                this.windTween = TweenLite.to(this, .3, { delay: .1, windPower: hud.windPower, ease: "Quad.easeIn" });
            }
            else {
                this.windTween = TweenLite.to(this, .5, { windPower: -hud.windPower, ease: "Quad.easeIn" });
            }
            this.shootState = 1;
            this.aTrail.push({ x: this.x, y: this.y, scale: this.scale });
            screenShake(10);
            addExplosion(0, this.x, this.y - this.height * this.scale, 3);
            if (this.isGoldBall) {
                addSpray("left", canvas.width / 2 + 160, canvas.height - 46, 2);
                addSpray("right", canvas.width / 2 - 160, canvas.height - 46, 2);
            }
        };
        Ball.prototype.update = function () {
            var _this = this;
            if (this.shootState == 0) {
                this.x = canvas.width / 2 + this.ballRollX;
                this.y = this.startY = getSafeHeight(canvas.height) - 50;
                this.ballRadius = this.fixedBallRadius * this.scale;
                this.ballScale = 1;
            }
            else if (this.shootState == 1) {
                this.x += (this.incX * this.scale * this.scale) * delta;
                this.y += (this.incY * this.scale * this.scale) * delta;
                this.x += (this.curlX * this.scale) * delta;
                this.x += (this.windPower * 150 * this.scale) * delta;
                if (!this.isGoldBall || (this.isGoldBall && this.y < canvas.height / 2 + 35)) {
                    this.incHeight -= 4000 * delta;
                }
                this.height += this.incHeight * delta;
                if (this.height <= 0) {
                    this.height = 0;
                    this.incHeight *= -.6;
                    var temp = 1 - this.incHeight / 7000;
                    if (this.incHeight > 200) {
                        playSound("bounce" + Math.floor(Math.random() * 5));
                    }
                    if (temp < .95) {
                        this.ballJiggle(temp);
                    }
                }
                this.scale = (this.y - (canvas.height / 2 + 25)) / (this.startY - (canvas.height / 2 + 25)) * .75 + .25;
                this.trailInc += delta;
                if (this.trailInc > .05) {
                    if (this.aTrail.length > 10) {
                        this.aTrail.shift();
                    }
                    this.aTrail.push({ x: this.x, y: this.y - this.height * this.scale, scale: this.scale });
                    this.trailInc = 0;
                }
                this.shadowAlpha = Math.floor(Math.min((this.height) / 500, .9) * 10);
                this.ballRadius = this.fixedBallRadius * this.scale;
                if (!this.hitLeftPost && !this.isSaved && !wipe.canDisplay
                    && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius
                    && this.height * this.scale + this.ballRadius < this.crossBarHeight
                    && this.x > canvas.width / 2 + this.leftPostX - (this.ballRadius + 5) && this.x < canvas.width / 2 + this.leftPostX + (this.ballRadius + 5)) {
                    playSound("hitBar");
                    var reboundAngle = (((canvas.width / 2 + this.leftPostX) - this.x) / (this.ballRadius + 5) + .5) * 180 - (90 - this.shootAngle / radian) / 10;
                    addFirework(0, canvas.width / 2 + this.leftPostX - (((canvas.width / 2 + this.leftPostX) - this.x) / (this.ballRadius + 5)) * 10, this.y - this.height * this.scale + this.ballRadius, .3, false);
                    this.incX = (this.power * Math.cos(reboundAngle * radian)) * 4;
                    this.incY = (this.power * Math.sin(reboundAngle * radian));
                    if (this.incY > 0) {
                        this.incY *= .1;
                    }
                    else {
                        this.incY *= .6;
                    }
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    this.hitLeftPost = true;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incX: this.incX * .25, incY: this.incY * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (!this.hitRightPost && !this.isSaved && !wipe.canDisplay
                    && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius
                    && this.height * this.scale + this.ballRadius < this.crossBarHeight
                    && this.x > canvas.width / 2 + this.rightPostX - (this.ballRadius + 5) && this.x < canvas.width / 2 + this.rightPostX + (this.ballRadius + 5)) {
                    playSound("hitBar");
                    var reboundAngle = (((canvas.width / 2 + this.rightPostX) - this.x) / (this.ballRadius + 5) + .5) * 180 - (90 - this.shootAngle / radian) / 10;
                    addFirework(0, canvas.width / 2 + this.rightPostX - (((canvas.width / 2 + this.rightPostX) - this.x) / (this.ballRadius + 5)) * 10, this.y - this.height * this.scale + this.ballRadius, .3, false);
                    this.incX = (this.power * Math.cos(reboundAngle * radian)) * 4;
                    this.incY = (this.power * Math.sin(reboundAngle * radian));
                    if (this.incY > 0) {
                        this.incY *= .1;
                    }
                    else {
                        this.incY *= .6;
                    }
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    this.hitRightPost = true;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incX: this.incX * .25, incY: this.incY * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (!this.isSaved && !this.inGoal && !wipe.canDisplay
                    && this.y < canvas.height / 2 + 32 - this.ballRadius && this.y > canvas.height / 2 + 26 - this.ballRadius
                    && this.height * this.scale + this.ballRadius < this.crossBarHeight - this.ballRadius
                    && this.x > canvas.width / 2 + this.leftPostX + (this.ballRadius) && this.x < canvas.width / 2 + this.rightPostX - (this.ballRadius)) {
                    addGoalMarker(0, this.x, this.y - this.height * this.scale, this.scale);
                    this.inGoal = true;
                    wipe.inGoal = true;
                    playSound("heroScore");
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    if (this.x > (canvas.width / 2 + this.powerAreaX) - 38 && this.x < (canvas.width / 2 + this.powerAreaX) + 38 && (this.y - this.height * this.scale) > (canvas.height / 2 - this.powerAreaY) - 38 && (this.y - this.height * this.scale) < (canvas.height / 2 - this.powerAreaY) + 38 && this.showPowerArea) {
                        this.hasHitPowerArea = true;
                        TweenLite.to(this, .5, {
                            powerAreaX: -canvas.width / 2 + 50, powerAreaY: canvas.height / 2 - 30, powerAreaScale: .5, ease: "Back.easeIn",
                            onComplete: function () {
                                _this.powerAreaScale = 0;
                                oGameData.curTime += 500;
                                addFirework(0, 50, 30, 1);
                                hud.jiggleTimer();
                            }
                        });
                    }
                    userScored();
                    this.isGoldBall = false;
                }
                if (!this.hitLeftPost && !this.hitRightPost && !this.isSaved && !this.inGoal && !wipe.canDisplay
                    && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius
                    && this.height * this.scale + this.ballRadius < this.crossBarHeight - this.ballRadius
                    && this.x > canvas.width / 2 + this.leftPostX + (this.ballRadius) && this.x < canvas.width / 2 + this.rightPostX - (this.ballRadius)
                    && enemySave.checkBallHit(this.x, this.y - this.height * this.scale)) {
                    playSound("enemySave");
                    playSound("crowdBad" + Math.floor(Math.random() * 2));
                    this.isSaved = true;
                    addExplosion(0, this.x, this.y - this.height * this.scale + this.ballRadius, 1);
                    this.incY = -this.incY / 5;
                    this.incX *= 5;
                    this.isGoldBall = false;
                    if (this.x > (canvas.width / 2 + this.powerAreaX) - 38 && this.x < (canvas.width / 2 + this.powerAreaX) + 38 && (this.y - this.height * this.scale) > (canvas.height / 2 - this.powerAreaY) - 38 && (this.y - this.height * this.scale) < (canvas.height / 2 - this.powerAreaY) + 38 && this.showPowerArea) {
                        this.hasHitPowerArea = true;
                        TweenLite.to(this, .5, {
                            powerAreaX: -canvas.width / 2 + 50, powerAreaY: canvas.height / 2 - 30, powerAreaScale: .5, ease: "Back.easeIn",
                            onComplete: function () {
                                _this.powerAreaScale = 0;
                                oGameData.curTime += 500;
                                addFirework(0, 50, 30, 1);
                                hud.jiggleTimer();
                            }
                        });
                    }
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    if (this.hasHitPowerArea) {
                        hud.showTextEvent("bonusTime");
                    }
                    else if (!this.shownSaved) {
                        hud.showTextEvent("shotSaved");
                        this.shownSaved = true;
                    }
                    if (!this.hideMe) {
                        this.ricochetTween = TweenLite.to(this, 1.5, {
                            incY: this.incY * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                            onComplete: function () {
                                wipe.trigger(resetShooting);
                                return;
                            }
                        });
                    }
                    else {
                        this.ricochetTween = TweenLite.to(this, 1, {
                            incY: this.incY * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                            onComplete: function () {
                                if (!_this.shownSaved) {
                                    hud.showTextEvent("shotSaved");
                                    _this.shownSaved = true;
                                }
                                wipe.trigger(resetShooting);
                                return;
                            }
                        });
                    }
                }
                if (!this.hitBackOfNet && !wipe.canDisplay && this.inGoal && this.y < (canvas.height / 2 + 18) - this.ballRadius) {
                    this.hitBackOfNet = true;
                    this.incY = 0;
                    this.incHeight = 0;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    if (this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    if (this.windTween) {
                        this.windTween.kill();
                    }
                    this.windPower = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (!this.hitSideOfNet && !wipe.canDisplay && this.inGoal && this.x < canvas.width / 2 + this.leftPostX + 36) {
                    this.hitSideOfNet = true;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.incX = Math.abs(this.incX);
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    if (this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    if (this.windTween) {
                        this.windTween.kill();
                    }
                    this.windPower = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (!this.hitSideOfNet && !wipe.canDisplay && this.inGoal && this.x > canvas.width / 2 + this.rightPostX - 36) {
                    this.hitSideOfNet = true;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.incX = Math.abs(this.incX) * -1;
                    this.x += (this.incX * this.scale * this.scale) * delta;
                    if (this.curlTween) {
                        this.curlTween.kill();
                    }
                    this.curlX = 0;
                    if (this.windTween) {
                        this.windTween.kill();
                    }
                    this.windPower = 0;
                    this.isGoldBall = false;
                    this.ricochetTween = TweenLite.to(this, 1, {
                        incX: this.incX * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (!this.hitCrossBar && !this.isSaved && !wipe.canDisplay
                    && this.y < canvas.height / 2 + 35 - this.ballRadius && this.y > canvas.height / 2 + 30 - this.ballRadius
                    && this.height * this.scale + this.ballRadius > this.crossBarHeight - (this.ballRadius + 5) && this.height * this.scale + this.ballRadius < this.crossBarHeight + (this.ballRadius + 5)
                    && this.x > canvas.width / 2 + this.leftPostX && this.x < canvas.width / 2 + this.rightPostX) {
                    this.hitCrossBar = true;
                    playSound("hitBar");
                    var reboundAngle = ((this.crossBarHeight) - (this.height * this.scale + this.ballRadius)) / (this.ballRadius + 5);
                    addFirework(0, this.x, canvas.height / 2 + this.crossBarY + reboundAngle * 10, .3, false);
                    this.isGoldBall = false;
                    if (Math.abs(reboundAngle) > .5) {
                        this.incY *= ((Math.abs(reboundAngle) - .5) / .5) * .6 + .1;
                        if (reboundAngle > 0) {
                            this.incHeight += ((.5 - reboundAngle) + .5 + .1) * -8000;
                        }
                        else {
                            this.incHeight += (.5 + (reboundAngle + .5) + .1) * 5000;
                        }
                    }
                    else {
                        this.incY *= -(1 - (Math.abs(reboundAngle)) / .5) * .1 - .1;
                        if (reboundAngle > 0) {
                            this.incHeight += ((reboundAngle) - .1) * -8000;
                        }
                        else {
                            this.incHeight += (reboundAngle - .1) * 5000;
                        }
                    }
                    this.y += (this.incY * this.scale * this.scale) * delta;
                    if (this.ricochetTween) {
                        this.ricochetTween.kill();
                    }
                    this.ricochetTween = TweenLite.to(this, 2, {
                        incY: this.incY * .25, curlX: 0, windPower: 0, ease: "Quad.easeIn",
                        onComplete: function () {
                            wipe.trigger(resetShooting);
                            return;
                        }
                    });
                }
                if (this.inGoal && this.height * this.scale + this.ballRadius > this.crossBarHeight - this.ballRadius) {
                    this.incHeight *= -1;
                }
                if (!this.inGoal && !this.isSaved && !wipe.canDisplay && ((this.y < canvas.height / 2 - this.ballRadius + 10 && this.height * this.scale < this.bannerHeight) || this.x > canvas.width + 100 || this.x < -100)) {
                    playSound("missShotWipe");
                    wipe.trigger(resetShooting);
                    return;
                }
            }
        };
        Ball.prototype.render = function () {
            if (!this.inGoal && this.y < canvas.height / 2 + 30 - this.ballRadius) {
                this.renderBall();
                this.renderGoal();
                enemySave.render();
                this.renderPowerArea();
            }
            else {
                if (this.y < canvas.height / 2 + 30 - this.ballRadius) {
                    this.renderGoal();
                    this.renderBall();
                    enemySave.render();
                    this.renderPowerArea();
                }
                else {
                    this.renderGoal();
                    enemySave.render();
                    this.renderPowerArea();
                    this.renderBall();
                }
            }
            var tempRot0;
            var tempRot1;
            var temp90 = 90 * radian;
            var hyp0;
            var hyp1;
            var a;
            var b;
            if (this.aTouchData.length > 1) {
                for (var i = 0; i < this.aTouchData.length - 1; i++) {
                    if (this.aTouchData[i].alpha > 0) {
                        a = this.aTouchData[i + 1].x - this.aTouchData[i].x;
                        b = this.aTouchData[i + 1].y - this.aTouchData[i].y;
                        tempRot0 = Math.atan2(b, a);
                        hyp0 = Math.sin(((i / this.aTouchData.length) * 180) * radian) * (80 * this.aTouchData[i].alpha);
                        if (i < this.aTouchData.length - 2) {
                            a = this.aTouchData[i + 2].x - this.aTouchData[i + 1].x;
                            b = this.aTouchData[i + 2].y - this.aTouchData[i + 1].y;
                            tempRot1 = Math.atan2(b, a);
                            hyp1 = Math.sin((((i + 1) / this.aTouchData.length) * 180) * radian) * (80 * this.aTouchData[i + 1].alpha);
                        }
                        else {
                            tempRot1 = tempRot0;
                            hyp1 = 0;
                        }
                        ctx.fillStyle = "rgba(0, 0, 0, " + this.aTouchData[i].alpha + ")";
                        ctx.beginPath();
                        hyp1 = hyp0 = 20;
                        ctx.moveTo(this.aTouchData[i].x - hyp0, this.aTouchData[i].y + shakeY);
                        ctx.lineTo(this.aTouchData[i + 1].x - hyp1, this.aTouchData[i + 1].y + shakeY);
                        ctx.lineTo(this.aTouchData[i + 1].x + hyp1, this.aTouchData[i + 1].y + shakeY);
                        ctx.lineTo(this.aTouchData[i].x + hyp0, this.aTouchData[i].y + shakeY);
                        ctx.lineTo(this.aTouchData[i].x - hyp0, this.aTouchData[i].y + shakeY);
                        ctx.closePath();
                        ctx.fill();
                        this.aTouchData[i].alpha -= delta * .5;
                    }
                }
            }
        };
        Ball.prototype.renderBall = function () {
            if (!this.hideMe) {
                if (this.aTrail.length > 1) {
                    var tempRot0;
                    var tempRot1;
                    var temp90 = 90 * radian;
                    var hyp0;
                    var hyp1;
                    var a;
                    var b;
                    for (var i = 0; i < this.aTrail.length - 1; i++) {
                        a = this.aTrail[i + 1].x - this.aTrail[i].x;
                        b = this.aTrail[i + 1].y - this.aTrail[i].y;
                        tempRot0 = Math.atan2(b, a);
                        hyp0 = this.aTrail[i].scale * 80;
                        if (i < this.aTrail.length - 2) {
                            a = this.aTrail[i + 2].x - this.aTrail[i + 1].x;
                            b = this.aTrail[i + 2].y - this.aTrail[i + 1].y;
                            tempRot1 = Math.atan2(b, a);
                        }
                        else {
                            tempRot1 = tempRot0;
                        }
                        hyp1 = this.aTrail[i + 1].scale * 80;
                        if (!this.isGoldBall) {
                            ctx.fillStyle = "rgba(255, 255, 255, " + i / this.aTrail.length + ")";
                        }
                        else {
                            var tempAlpha = 1;
                            if (i < this.aTrail.length / 2) {
                                tempAlpha = (i / this.aTrail.length) * 2;
                            }
                            ctx.fillStyle = "rgba(255, 238, 0, " + tempAlpha + ")";
                        }
                        ctx.beginPath();
                        ctx.moveTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i + 1].x - hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y - hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i + 1].x + hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y + hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i].x + hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y + hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.lineTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                if (this.y > canvas.height / 2) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2) * this.scale + this.ballRadius + shakeY, bWidth * this.scale, bHeight * this.scale);
                }
                this.ballFrameTarg = this.ballFrameTarg - Math.max(Math.min((this.incY / 1000), 1), -1);
                this.ballFrame = Math.round(this.ballFrameTarg);
                if (this.ballFrame > 7) {
                    this.ballFrame -= 8;
                    this.ballFrameTarg -= 8;
                }
                else if (this.ballFrame < 0) {
                    this.ballFrame += 8;
                    this.ballFrameTarg += 8;
                }
                this.rot = (this.x - canvas.width / 2) / (10 + this.scale * 100);
                var curBallType = this.oBallImgData;
                if (this.isGoldBall) {
                    curBallType = this.oGoldBallImgData;
                }
                ctx.save();
                ctx.translate(this.x, this.y - this.height * this.scale);
                ctx.rotate(this.initialRot);
                ctx.scale(this.ballScale, (1 + (1 - this.ballScale)));
                ctx.rotate(this.rot);
                var imgX = (this.ballFrame * curBallType.oData.spriteWidth) % curBallType.img.width;
                var imgY = Math.floor(this.ballFrame / (curBallType.img.width / curBallType.oData.spriteWidth)) * curBallType.oData.spriteHeight;
                ctx.drawImage(curBallType.img, imgX, imgY, curBallType.oData.spriteWidth, curBallType.oData.spriteHeight, -(curBallType.oData.spriteWidth / 2) * this.scale, -(curBallType.oData.spriteHeight / 2) * this.scale + shakeY, curBallType.oData.spriteWidth * this.scale, curBallType.oData.spriteHeight * this.scale);
                ctx.restore();
                if (!this.isGoldBall) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2 - 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
                }
                else {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goldBallUnderShadow].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
                }
            }
        };
        Ball.prototype.renderPowerArea = function () {
            if (this.showPowerArea) {
                this.powerAreaFrameInc += delta * 15;
                var tempScale = Math.sin(this.powerAreaFrameInc) / 20 + 1;
                this.powerAreaFrame = Math.floor(this.powerAreaFrameInc) % 9;
                var imgX = (this.powerAreaFrame * this.oPowerAreaImgData.oData.spriteWidth) % this.oPowerAreaImgData.img.width;
                var imgY = Math.floor(this.powerAreaFrame / (this.oPowerAreaImgData.img.width / this.oPowerAreaImgData.oData.spriteWidth)) * this.oPowerAreaImgData.oData.spriteHeight;
                ctx.drawImage(this.oPowerAreaImgData.img, imgX, imgY, this.oPowerAreaImgData.oData.spriteWidth, this.oPowerAreaImgData.oData.spriteHeight, canvas.width / 2 + this.powerAreaX - (this.oPowerAreaImgData.oData.spriteWidth / 2) * tempScale * this.powerAreaScale, canvas.height / 2 - this.powerAreaY - (this.oPowerAreaImgData.oData.spriteHeight / 2) * (1 + (1 - tempScale)) * this.powerAreaScale + shakeY, this.oPowerAreaImgData.oData.spriteWidth * tempScale * this.powerAreaScale, this.oPowerAreaImgData.oData.spriteHeight * (1 + (1 - tempScale)) * this.powerAreaScale);
            }
        };
        Ball.prototype.renderGoal = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.shootingGoal].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight + 46 + shakeY, bWidth, bHeight);
        };
        return Ball;
    }());
    Elements.Ball = Ball;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Hud = (function () {
        function Hud() {
            this.scoreNumberSpace = 48;
            this.userScoreY = 0;
            this.enemyScoreY = 0;
            this.prevSecs = 0;
            this.timerNumberSpace = 38;
            this.beepTimeTarg = 600;
            this.powerBarY = 0;
            this.timerY = 0;
            this.powerMaxxed = false;
            this.textResultX = -1000;
            this.hasWind = false;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.oTimeNumbersImgData = assetLib.getData("timeNumbers");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.heroKick = new Elements.HeroKick(assetLib.getData("heroKick" + userStrikerId));
            if (firstRun) {
                this.tutorial = new Elements.Tutorial(assetLib.getData("tut0"), 0);
            }
            if (levelNum == 0) {
                this.powerInc = .25;
            }
            else if (levelNum == 1) {
                this.powerInc = .20;
            }
            else {
                this.powerInc = .15;
            }
            this.resetWind();
        }
        Hud.prototype.resetWind = function () {
            var _this = this;
            if (curProgress > 0) {
                this.hasWind = true;
                var temp = 0;
                if (Math.random() > .5) {
                    temp = 1;
                }
                this.windDir = temp;
                this.windPower = Math.random() * (curProgress + 1) + 1;
                console.log(curProgress, this.windPower);
                this.windX = getSafeWidth(120);
                this.windY = -20;
                this.windScale = 1;
                TweenLite.to(this, 1, {
                    windScale: .75, ease: "Bounce.easeOut",
                    onComplete: function () {
                        TweenLite.to(_this, .5, {
                            delay: 0, windX: getSafeWidth(58), windY: -30, windScale: .6, ease: "Quad.easeOut",
                            onComplete: function () {
                            }
                        });
                    }
                });
            }
            else {
                this.windDir = 0;
                this.windPower = 0;
            }
        };
        Hud.prototype.update = function () {
        };
        Hud.prototype.jiggleUserScore = function () {
            var _this = this;
            if (this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreTween = TweenLite.to(this, .1, {
                userScoreY: -50, ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        userScoreY: 0, ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.showTextEvent = function (_eventText) {
            var _this = this;
            if (this.textResultTween) {
                this.textResultTween.kill();
            }
            this.eventText = _eventText;
            this.textResultX = -300;
            this.textResultTween = TweenLite.to(this, .3, {
                delay: .5, textResultX: 0, ease: "Back.easeOut",
                onComplete: function () {
                    _this.textResultTween = TweenLite.to(_this, .3, {
                        delay: 1.5, textResultX: -300, ease: "Back.easeIn",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.jiggleTimer = function () {
            var _this = this;
            if (this.scoreTween) {
                this.scoreTween.kill();
            }
            playSound("bonusTime");
            this.scoreTween = TweenLite.to(this, .1, {
                timerY: -50, ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        timerY: 0, ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Hud.prototype.increasePowerBar = function () {
            var _this = this;
            this.powerBarY = -10;
            TweenLite.to(this, .5, { powerBarY: 0, ease: "Elastic.easeOut" });
            if (oGameData.power >= 1 - this.powerInc) {
                this.powerMaxxed = true;
                playSound("powerBarFull");
            }
            else {
                playSound("powerBarUp");
            }
            TweenLite.to(oGameData, .5, {
                power: Math.min(oGameData.power + this.powerInc, 1), ease: "Bounce.easeOut",
                onComplete: function () {
                    if (oGameData.power >= 1) {
                        _this.powerBarY = -100;
                        for (var i = 0; i < 5; i++) {
                            addFirework(0, canvas.width / 2 - 100 + i * (200 / 4), Math.random() * 100 - 30, Math.random() * .5 + 1);
                        }
                        oGameData.power = 0;
                        TweenLite.to(_this, 1, { delay: .5, powerBarY: 0, ease: "Back.easeOut" });
                    }
                }
            });
        };
        Hud.prototype.render = function () {
            if (oGameData.curTime > 500 || Math.round(oGameData.curTime / 25) % 2 == 0) {
                if (oGameData.curTime <= this.beepTimeTarg) {
                    playSound("beep");
                    this.beepTimeTarg -= 100;
                }
                var id;
                var mins = Math.floor(oGameData.curTime / 6000).toString();
                var tempX = getSafeWidth(0) + 6;
                var tempY = getSafeHeight(0) + 6 + this.timerY;
                var secs = Math.floor((oGameData.curTime - Math.floor(oGameData.curTime / 6000) * 6000) / 100).toString();
                if (secs.length < 2) {
                    secs = "0" + secs;
                }
                var tenths = oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 2) + oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 1);
                if (tenths.length < 2) {
                    tenths = "0" + tenths;
                }
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(mins.charAt(i));
                    if (mins.length < 2) {
                        if (i == 0) {
                            continue;
                        }
                        else {
                            id = parseFloat(mins.charAt(0));
                        }
                    }
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                id = 10;
                var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 30, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(secs.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 59 + i * this.timerNumberSpace, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(tenths.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 140 + i * this.timerNumberSpace * .6, tempY, this.oTimeNumbersImgData.oData.spriteWidth * .6, this.oTimeNumbersImgData.oData.spriteHeight * .6);
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + userStrikerId]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 50 - bWidth / 2 - this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].x, getSafeHeight(canvas.height) - 75 - bHeight / 2 + this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].y, bWidth, bHeight);
            var tempScore = oGameData.heroScore.toString();
            var tempScale = 1;
            for (var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(0) + 120 + i * (this.scoreNumberSpace * tempScale) - this.userScoreY + aStrikerHeadIconOffsets[userStrikerId].x, getSafeHeight(canvas.height) - 100 + this.userScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + enemyGoalieId]].height;
            ctx.save();
            ctx.translate(getSafeWidth(canvas.width) - 50 + this.enemyScoreY + aGoalieHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 75 + this.enemyScoreY + aGoalieHeadIconOffsets[enemyGoalieId].y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
            tempScore = oGameData.enemyScore.toString();
            tempScale = 1;
            for (var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(canvas.width) - 120 + i * (this.scoreNumberSpace * tempScale) - ((tempScore.length + .5) * this.scoreNumberSpace) + aGoalieHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 100 + this.enemyScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarBg].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, getSafeHeight(0) + 32 - bHeight / 2 + this.powerBarY, bWidth, bHeight);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth * oGameData.power + 1, bHeight, canvas.width / 2 - 125, getSafeHeight(0) + 29 - bHeight / 2 + 1 + this.powerBarY, bWidth * oGameData.power, bHeight);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBarTip].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 125 + this.oGameElementsImgData.oData.oAtlasData[oImageIds.powerBar].width * oGameData.power + 1 - bWidth / 2, getSafeHeight(0) + 30 - bHeight / 2 + this.powerBarY, bWidth, bHeight);
            if (this.textResultX > -300) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -350 + this.textResultX, 60, bWidth, bHeight);
                addText(0, 30, 380, "left", 20 + this.textResultX, 97, this.eventText, "#000055");
            }
            if (this.hasWind) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.windPanel].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.windX - (bWidth / 2) * this.windScale, canvas.height * .5 + this.windY - (bHeight / 2) * this.windScale, bWidth * this.windScale, bHeight * this.windScale);
                ctx.save();
                ctx.translate(this.windX - 4, canvas.height * .5 + this.windY + 15);
                ctx.rotate((this.windDir * 180) * radian + Math.sin((panel.incY * .5) * this.windPower) * .1);
                ctx.scale(this.windScale, this.windScale);
                var tempId = 0;
                if (this.windDir == 1) {
                    tempId = 1;
                }
                var windArrowCol = Math.floor(this.windPower - 1);
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + tempId + windArrowCol]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + tempId + windArrowCol]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + tempId + windArrowCol]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["windArrow" + tempId + windArrowCol]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                ctx.restore();
            }
            if (this.heroKick.showKick) {
                this.heroKick.update();
                this.heroKick.render();
            }
            if (showingTut) {
                this.tutorial.update();
                this.tutorial.render();
            }
        };
        return Hud;
    }());
    Elements.Hud = Hud;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var GoalMarker = (function (_super) {
        __extends(GoalMarker, _super);
        function GoalMarker(_oImgData, _animId) {
            var _this = _super.call(this, _oImgData, 25, 45, _animId) || this;
            _this.setAnimType("loop", _animId);
            if (gameState == "shooting") {
                TweenLite.to(_this, .5, {
                    scaleX: 2, scaleY: 2, ease: "Elastic.easeOut",
                    onComplete: function () {
                        TweenLite.to(_this, .5, {
                            x: canvas.width / 2 + 85, y: 30, scaleX: .2, scaleY: .2, ease: "Back.easeIn",
                            onComplete: function () {
                                _this.removeMe = true;
                                addFirework(0, canvas.width / 2 + 85, 30, 1);
                                hud.increasePowerBar();
                            }
                        });
                    }
                });
            }
            else {
                TweenLite.to(_this, .5, {
                    scaleX: 2, scaleY: 2, ease: "Elastic.easeOut",
                    onComplete: function () {
                        TweenLite.to(_this, .5, {
                            scaleX: .2, scaleY: .2, ease: "Back.easeIn",
                            onComplete: function () {
                                _this.removeMe = true;
                                addFirework(0, _this.x, _this.y, 1);
                            }
                        });
                    }
                });
            }
            return _this;
        }
        GoalMarker.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        GoalMarker.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return GoalMarker;
    }(Utils.AnimSprite));
    Elements.GoalMarker = GoalMarker;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Crowd = (function () {
        function Crowd() {
            this.segs = 8;
            this.inc = 0;
            this.wildFactor = 3;
            this.oBgImgData = assetLib.getData("shootingBg");
        }
        Crowd.prototype.update = function () {
            this.inc += (3 + this.wildFactor / 3) * delta;
        };
        Crowd.prototype.goWild = function () {
            var _this = this;
            if (this.wildTween) {
                this.wildTween.kill();
            }
            this.wildTween = TweenLite.to(this, .1, {
                wildFactor: 10, ease: "Quad.easeIn",
                onComplete: function () {
                    _this.wildTween = TweenLite.to(_this, 1, {
                        delay: 3, wildFactor: 3, ease: "Cubic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        Crowd.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height);
            for (var i = 0; i < this.segs; i++) {
                var temp = -Math.abs(Math.sin(this.inc + i / 8) * this.wildFactor);
                ctx.drawImage(this.oBgImgData.img, 0, i * (317 / this.segs), this.oBgImgData.img.width, 317 / this.segs, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + i * (317 / this.segs) + temp + this.wildFactor + shakeY, this.oBgImgData.img.width, 317 / this.segs);
            }
            ctx.drawImage(this.oBgImgData.img, 0, 317, this.oBgImgData.img.width, this.oBgImgData.img.height - 317, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + 317 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height - 317);
        };
        return Crowd;
    }());
    Elements.Crowd = Crowd;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyBall = (function () {
        function EnemyBall() {
            this.rot = 0;
            this.height = 0;
            this.scale = 1;
            this.maxSwipeLength = 30;
            this.ballScale = 1;
            this.fixedBallRadius = 80;
            this.incXMultiplier = 0;
            this.incNetMultiplier = 0;
            this.goalSegs = 15;
            this.goalJiggleInc = 0;
            this.saveCount = 0;
            this.powerLevel = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oBallImgData = assetLib.getData("ball" + ballId);
            this.reset();
        }
        EnemyBall.prototype.reset = function () {
            if (this.kickTween) {
                this.kickTween.kill();
            }
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if (this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if (this.shootTweenY) {
                this.shootTweenY.kill();
            }
            if (this.ricochetTween) {
                this.ricochetTween.kill();
            }
            this.isSaved = false;
            this.shootState = 0;
            this.shadowAlpha = 0;
            this.height = 200;
            this.trailInc = 0;
            this.aTrail = new Array();
            this.ballFrame = 0;
            this.rot = 0;
            this.initialRot = 0;
            this.incX = 0;
            this.incY = 0;
            this.ballScale = 1;
            this.ballFrameTarg = 0;
            this.shootTweenComplete = false;
            this.rotInc = 0;
            this.spinInc = 0;
            this.x = 115;
            this.y = 15;
            this.prevX = this.x;
            this.prevY = this.y;
            this.inGoal = false;
            this.aTouchData = new Array();
            this.incXMultiplier = 1;
            oGameData.ballInPlay = false;
            enemyKick.reset();
            if (!showingTut) {
                this.startKickTween();
            }
        };
        EnemyBall.prototype.startKickTween = function () {
            this.kickTween = TweenLite.to(this, .5, {
                height: 0, ease: "Bounce.easeOut",
                onComplete: function () {
                    oGameData.ballInPlay = true;
                    enemyKick.takeShot();
                }
            });
        };
        EnemyBall.prototype.ballJiggle = function (_inc) {
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            this.initialRot = 0;
            this.ballScale = _inc;
            this.jiggleTween = TweenLite.to(this, 1, { ballScale: 1, ease: "Elastic.easeOut" });
        };
        EnemyBall.prototype.killTweens = function () {
            if (this.kickTween) {
                this.kickTween.kill();
            }
            if (this.jiggleTween) {
                this.jiggleTween.kill();
            }
            if (this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if (this.shootTweenY) {
                this.shootTweenY.kill();
            }
            if (this.ricochetTween) {
                this.ricochetTween.kill();
            }
        };
        EnemyBall.prototype.pause = function (_isOn) {
            if (_isOn) {
                if (this.kickTween && this.kickTween.isActive()) {
                    this.kickTween.pause();
                }
                if (this.shootTweenX && this.shootTweenX.isActive()) {
                    this.shootTweenX.pause();
                }
                if (this.shootTweenY && this.shootTweenY.isActive()) {
                    this.shootTweenY.pause();
                }
                if (this.ricochetTween && this.ricochetTween.isActive()) {
                    this.ricochetTween.pause();
                }
                if (this.jiggleTween && this.jiggleTween.isActive()) {
                    this.jiggleTween.pause();
                }
            }
            else {
                if (this.kickTween && this.kickTween.paused()) {
                    this.kickTween.resume();
                }
                if (this.shootTweenX && this.shootTweenX.paused()) {
                    this.shootTweenX.resume();
                }
                if (this.shootTweenY && this.shootTweenY.paused()) {
                    this.shootTweenY.resume();
                }
                if (this.ricochetTween && this.ricochetTween.paused()) {
                    this.ricochetTween.resume();
                }
                if (this.jiggleTween && this.jiggleTween.paused()) {
                    this.jiggleTween.resume();
                }
            }
        };
        EnemyBall.prototype.shoot = function () {
            var _this = this;
            this.shootState = 1;
            playSound("kick" + Math.floor(Math.random() * 3));
            if (heroGoal.saveState == 2) {
                heroGoal.makeSave();
            }
            if (this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if (this.shootTweenY) {
                this.shootTweenY.kill();
            }
            this.spinInc = -.5;
            var tempTime = 1.1 - Math.random() * (curProgress / 10);
            if (firstFail) {
                tempTime += .1;
            }
            var tempRan = Math.random();
            var tempEase = "Sine.easeIn";
            if (tempRan > .8) {
                tempEase = "Linear.easeNone";
            }
            else if (tempRan > .6) {
                tempEase = "Cubic.easeIn";
            }
            else if (tempRan > .4 && levelNum > 1) {
                tempEase = "Back.easeIn";
            }
            var ranX = Math.random() * 150 + 208;
            if (Math.random() > .5) {
                ranX = -(Math.random() * 150 + 208);
            }
            this.shootTweenX = TweenLite.to(this, tempTime, { x: ranX, ease: tempEase });
            this.shootTweenY = TweenLite.to(this, tempTime, {
                y: 158, ease: "Sine.easeIn",
                onComplete: function () {
                    _this.shootTweenComplete = true;
                    _this.incXMultiplier = 1;
                    _this.incNetMultiplier = 1;
                    screenShake(10);
                    _this.shootTweenY = TweenLite.to(_this, 2, {
                        incNetMultiplier: 0, incXMultiplier: 0, y: _this.y - 10, ease: "Quad.easeOut",
                        onComplete: function () {
                            wipe.inGoal = false;
                            wipe.trigger(resetGoalkeeping);
                        }
                    });
                }
            });
            this.incHeight = (Math.random() * 1100 + 1200) * (.7 + tempTime * .3);
            this.aTrail.push({ x: canvas.width / 2 + this.x, y: canvas.height / 2 + this.y, scale: this.scale });
            addExplosion(0, canvas.width / 2 + this.x, canvas.height / 2 + this.y, .4);
        };
        EnemyBall.prototype.saveBall = function () {
            if (this.shootTweenX) {
                this.shootTweenX.kill();
            }
            if (this.shootTweenY) {
                this.shootTweenY.kill();
            }
            this.incHeight += Math.random() * 2000 + 1000;
            this.incXMultiplier = 1;
            this.shootTweenY = TweenLite.to(this, 2, {
                incXMultiplier: 0, ease: "Quad.easeOut",
                onComplete: function () {
                    wipe.inGoal = true;
                    wipe.trigger(resetGoalkeeping);
                }
            });
            this.spinInc = .5;
            addExplosion(0, canvas.width / 2 + this.x, canvas.height / 2 + this.y - (this.height + this.incHeight * delta) * this.scale, 2);
            userSaved();
            this.saveCount++;
        };
        EnemyBall.prototype.update = function () {
            if (this.shootState == 0) {
                this.x = 115;
                this.y = 15;
                this.ballRadius = this.fixedBallRadius * this.scale;
                this.ballScale = 1;
            }
            else if (this.shootState == 1) {
                this.incHeight -= (5000 * (this.scale + .5)) * delta;
                this.height += this.incHeight * delta;
                if (this.height <= 0) {
                    this.height = 0;
                    this.incHeight *= -.6;
                    if (this.incHeight > 200) {
                        playSound("bounce" + Math.floor(Math.random() * 5));
                    }
                    var temp = 1 - this.incHeight / 7000;
                    if (!this.isSaved) {
                        this.spinInc *= .5;
                    }
                    if (temp < .95) {
                        this.ballJiggle(temp);
                    }
                }
                if (!this.isSaved) {
                    if (!this.shootTweenComplete) {
                        this.incX = this.x - this.prevX;
                        this.prevX = this.x;
                        this.incY = this.y - this.prevY;
                        this.prevY = this.y;
                        this.rot += this.incX * delta / 2;
                    }
                    else {
                        this.x += (this.incX * delta * 50) * this.incXMultiplier;
                        this.rot += this.incX * (delta / 1) * this.incXMultiplier;
                        if (this.x < -400) {
                            this.x = -400;
                            this.incX *= -.2;
                        }
                        else if (this.x > 355) {
                            this.x = 355;
                            this.incX *= -.2;
                        }
                    }
                }
                else {
                    this.x += (this.incX * delta * 10) * this.incXMultiplier;
                    this.y -= (this.incY * delta * 20) * this.incXMultiplier;
                    this.rot += this.incX * (delta / 1) * this.incXMultiplier;
                }
                if (!this.isSaved
                    && canvas.height / 2 + this.y + this.ballRadius > canvas.height / 2 + 127
                    && canvas.height / 2 + this.y + this.ballRadius < canvas.height / 2 + 144
                    && heroGoal.checkSave(canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale)) {
                    this.isSaved = true;
                    this.saveBall();
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    playSound("heroSave");
                    playSound("kick" + Math.floor(Math.random() * 3));
                }
                if (!this.inGoal && canvas.height / 2 + this.y + this.ballRadius > canvas.height / 2 + 144) {
                    this.inGoal = true;
                    addGoalMarker(1, canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale, .5);
                    enemyScored();
                    playSound("crowdBad" + Math.floor(Math.random() * 2));
                    playSound("enemyScore");
                }
                this.trailInc += delta;
                if (this.trailInc > .05) {
                    if (this.aTrail.length > 10) {
                        this.aTrail.shift();
                    }
                    this.aTrail.push({ x: canvas.width / 2 + this.x, y: canvas.height / 2 + this.y - this.height * this.scale, scale: this.scale });
                    this.trailInc = 0;
                }
                this.shadowAlpha = Math.floor(Math.min((this.height) / 500, .9) * 10);
                this.ballRadius = this.fixedBallRadius * this.scale;
            }
            this.scale = (this.y - 15) / 143 * .25 + .1;
        };
        EnemyBall.prototype.render = function () {
            if (!this.inGoal) {
                this.renderBall();
                heroGoal.render();
                this.renderGoalFront();
            }
            else {
                heroGoal.render();
                this.renderGoalFront();
                this.renderBall();
            }
            this.goalJiggleInc += delta * 5;
            var tempY;
            for (var i = 0; i < this.goalSegs; i++) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalBack].height;
                tempY = ((Math.sin(this.goalJiggleInc + i / 2) * 10) * (this.goalSegs / 2 - Math.abs(i - this.goalSegs / 2)) / 5) * this.incNetMultiplier;
                ctx.drawImage(this.oGameElementsImgData.img, bX + i * (bWidth / this.goalSegs), bY, (bWidth / this.goalSegs), bHeight, canvas.width / 2 - bWidth / 2 - 46 + i * (bWidth / this.goalSegs) + tempY, canvas.height / 2 - bHeight + 186 + shakeY, (bWidth / this.goalSegs), bHeight);
            }
        };
        EnemyBall.prototype.renderGoalFront = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeepingGoalFront].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 39, canvas.height / 2 - bHeight + 182 + shakeY, bWidth, bHeight);
        };
        EnemyBall.prototype.renderBall = function () {
            if (this.aTrail.length > 1) {
                var tempRot0;
                var tempRot1;
                var temp90 = 90 * radian;
                var hyp0;
                var hyp1;
                var a;
                var b;
                for (var i = 0; i < this.aTrail.length - 1; i++) {
                    a = this.aTrail[i + 1].x - this.aTrail[i].x;
                    b = this.aTrail[i + 1].y - this.aTrail[i].y;
                    tempRot0 = Math.atan2(b, a);
                    hyp0 = this.aTrail[i].scale * 80;
                    if (i < this.aTrail.length - 2) {
                        a = this.aTrail[i + 2].x - this.aTrail[i + 1].x;
                        b = this.aTrail[i + 2].y - this.aTrail[i + 1].y;
                        tempRot1 = Math.atan2(b, a);
                    }
                    else {
                        tempRot1 = tempRot0;
                    }
                    hyp1 = this.aTrail[i + 1].scale * 80;
                    ctx.fillStyle = "rgba(255, 255, 255, " + i / this.aTrail.length + ")";
                    ctx.beginPath();
                    ctx.moveTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i + 1].x - hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y - hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i + 1].x + hyp1 * Math.cos(tempRot1 + temp90), this.aTrail[i + 1].y + hyp1 * Math.sin(tempRot1 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i].x + hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y + hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.lineTo(this.aTrail[i].x - hyp0 * Math.cos(tempRot0 + temp90), this.aTrail[i].y - hyp0 * Math.sin(tempRot0 + temp90) + shakeY);
                    ctx.closePath();
                    ctx.fill();
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ballShadow" + this.shadowAlpha]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this.x - (bWidth / 2) * this.scale, canvas.height / 2 + this.y - (bHeight / 2) * this.scale + this.ballRadius + shakeY, bWidth * this.scale, bHeight * this.scale);
            this.ballFrameTarg += this.spinInc * this.incXMultiplier;
            this.ballFrame = Math.round(this.ballFrameTarg);
            if (this.ballFrame > 7) {
                this.ballFrame -= 8;
                this.ballFrameTarg -= 8;
            }
            else if (this.ballFrame < 0) {
                this.ballFrame += 8;
                this.ballFrameTarg += 8;
            }
            var curBallType = this.oBallImgData;
            ctx.save();
            ctx.translate(canvas.width / 2 + this.x, canvas.height / 2 + this.y - this.height * this.scale);
            ctx.rotate(this.initialRot);
            ctx.scale(this.ballScale, (1 + (1 - this.ballScale)));
            ctx.rotate(this.rot);
            var imgX = (this.ballFrame * curBallType.oData.spriteWidth) % curBallType.img.width;
            var imgY = Math.floor(this.ballFrame / (curBallType.img.width / curBallType.oData.spriteWidth)) * curBallType.oData.spriteHeight;
            ctx.drawImage(curBallType.img, imgX, imgY, curBallType.oData.spriteWidth, curBallType.oData.spriteHeight, -(curBallType.oData.spriteWidth / 2) * this.scale, -(curBallType.oData.spriteHeight / 2) * this.scale + shakeY, curBallType.oData.spriteWidth * this.scale, curBallType.oData.spriteHeight * this.scale);
            ctx.restore();
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballUnderShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this.x - (bWidth / 2) * this.scale, canvas.height / 2 + this.y - (bHeight / 2 - 2) * this.scale - this.height * this.scale + shakeY, bWidth * this.scale, bHeight * this.scale);
        };
        return EnemyBall;
    }());
    Elements.EnemyBall = EnemyBall;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyCrowd = (function () {
        function EnemyCrowd() {
            this.inc = 0;
            this.wildFactor = 0;
            this.oBgImgData = assetLib.getData("goalkeepingBg");
            this.oGameElementsImgData = assetLib.getData("gameElements");
        }
        EnemyCrowd.prototype.update = function () {
            this.inc += (0 + this.wildFactor) * delta;
        };
        EnemyCrowd.prototype.goWild = function () {
            var _this = this;
            if (this.wildTween) {
                this.wildTween.kill();
            }
            this.wildTween = TweenLite.to(this, .1, {
                wildFactor: 7, ease: "Quad.easeIn",
                onComplete: function () {
                    _this.wildTween = TweenLite.to(_this, 1, {
                        delay: 3, wildFactor: 0, ease: "Cubic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyCrowd.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.oBgImgData.img, 0, 0, this.oBgImgData.img.width, this.oBgImgData.img.height, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - this.oBgImgData.img.height / 2 + shakeY, this.oBgImgData.img.width, this.oBgImgData.img.height);
            var temp = -Math.abs(Math.sin(this.inc) * 2);
            ctx.drawImage(this.oBgImgData.img, 0, 155, this.oBgImgData.img.width, 156, canvas.width / 2 - this.oBgImgData.img.width / 2, canvas.height / 2 - 195 + shakeY, this.oBgImgData.img.width, 156 + temp);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tinyGoal].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 105, canvas.height / 2 - 75 + shakeY, bWidth, bHeight);
        };
        return EnemyCrowd;
    }());
    Elements.EnemyCrowd = EnemyCrowd;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyHud = (function () {
        function EnemyHud() {
            this.scoreNumberSpace = 48;
            this.userScoreY = 0;
            this.enemyScoreY = 0;
            this.prevSecs = 0;
            this.timerNumberSpace = 38;
            this.beepTimeTarg = 600;
            this.powerBarY = 0;
            this.timerY = 0;
            this.powerMaxxed = false;
            this.textResultX = -1000;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oScoreNumbersImgData = assetLib.getData("scoreNumbers");
            this.oTimeNumbersImgData = assetLib.getData("timeNumbers");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            if (firstRun) {
                this.tutorial = new Elements.Tutorial(assetLib.getData("tut1"), 1);
            }
        }
        EnemyHud.prototype.showTextEvent = function (_eventText) {
            var _this = this;
            if (this.textResultTween) {
                this.textResultTween.kill();
            }
            this.eventText = _eventText;
            this.textResultX = -300;
            this.textResultTween = TweenLite.to(this, .3, {
                delay: .5, textResultX: 0, ease: "Back.easeOut",
                onComplete: function () {
                    _this.textResultTween = TweenLite.to(_this, .3, {
                        delay: 1.5, textResultX: -300, ease: "Back.easeIn",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyHud.prototype.update = function () {
        };
        EnemyHud.prototype.jiggleEnemyScore = function () {
            var _this = this;
            if (this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreTween = TweenLite.to(this, .1, {
                enemyScoreY: -50, ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.scoreTween = TweenLite.to(_this, 1, {
                        enemyScoreY: 0, ease: "Elastic.easeOut",
                        onComplete: function () {
                        }
                    });
                }
            });
        };
        EnemyHud.prototype.render = function () {
            if (oGameData.curTime > 500 || Math.round(oGameData.curTime / 25) % 2 == 0) {
                if (oGameData.curTime <= this.beepTimeTarg) {
                    playSound("beep");
                    this.beepTimeTarg -= 100;
                }
                var id;
                var mins = Math.floor(oGameData.curTime / 6000).toString();
                var tempX = getSafeWidth(0) + 6;
                var tempY = getSafeHeight(0) + 6 + this.timerY;
                var secs = Math.floor((oGameData.curTime - Math.floor(oGameData.curTime / 6000) * 6000) / 100).toString();
                if (secs.length < 2) {
                    secs = "0" + secs;
                }
                var tenths = oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 2) + oGameData.curTime.toString().charAt(oGameData.curTime.toString().length - 1);
                if (tenths.length < 2) {
                    tenths = "0" + tenths;
                }
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(mins.charAt(i));
                    if (mins.length < 2) {
                        if (i == 0) {
                            continue;
                        }
                        else {
                            id = parseFloat(mins.charAt(0));
                        }
                    }
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                id = 10;
                var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 30, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(secs.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 59 + i * this.timerNumberSpace, tempY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight);
                }
                for (var i = 0; i < 2; i++) {
                    id = parseFloat(tenths.charAt(i));
                    var imgX = (id * this.oTimeNumbersImgData.oData.spriteWidth) % this.oTimeNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oTimeNumbersImgData.img.width / this.oTimeNumbersImgData.oData.spriteWidth)) * this.oTimeNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oTimeNumbersImgData.img, imgX, imgY, this.oTimeNumbersImgData.oData.spriteWidth, this.oTimeNumbersImgData.oData.spriteHeight, tempX + 140 + i * this.timerNumberSpace * .6, tempY, this.oTimeNumbersImgData.oData.spriteWidth * .6, this.oTimeNumbersImgData.oData.spriteHeight * .6);
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["goalieHead" + userGoalieId]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, getSafeWidth(0) + 50 - bWidth / 2 - this.userScoreY - aGoalieHeadIconOffsets[userGoalieId].x, getSafeHeight(canvas.height) - 75 - bHeight / 2 + this.userScoreY + aGoalieHeadIconOffsets[userGoalieId].y, bWidth, bHeight);
            var tempScore = oGameData.heroScore.toString();
            var tempScale = 1;
            for (var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(0) + 120 + i * (this.scoreNumberSpace * tempScale) - this.userScoreY - aGoalieHeadIconOffsets[userGoalieId].x, getSafeHeight(canvas.height) - 100 + this.userScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["strikerHead" + enemyStrikerId]].height;
            ctx.save();
            ctx.translate(getSafeWidth(canvas.width) - 50 + this.enemyScoreY - aStrikerHeadIconOffsets[enemyStrikerId].x, getSafeHeight(canvas.height) - 75 + this.enemyScoreY + aStrikerHeadIconOffsets[enemyStrikerId].y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
            tempScore = oGameData.enemyScore.toString();
            tempScale = 1;
            for (var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oScoreNumbersImgData.oData.spriteWidth) % this.oScoreNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oScoreNumbersImgData.img.width / this.oScoreNumbersImgData.oData.spriteWidth)) * this.oScoreNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oScoreNumbersImgData.img, imgX, imgY, this.oScoreNumbersImgData.oData.spriteWidth, this.oScoreNumbersImgData.oData.spriteHeight, getSafeWidth(canvas.width) - 120 + i * (this.scoreNumberSpace * tempScale) - ((tempScore.length + .5) * this.scoreNumberSpace) + this.enemyScoreY - aStrikerHeadIconOffsets[enemyGoalieId].x, getSafeHeight(canvas.height) - 100 + this.enemyScoreY, this.oScoreNumbersImgData.oData.spriteWidth * tempScale, this.oScoreNumbersImgData.oData.spriteHeight * tempScale);
            }
            if (this.textResultX > -300) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -350 + this.textResultX, 60, bWidth, bHeight);
                addText(0, 30, 380, "left", 20 + this.textResultX, 97, this.eventText, "#000055");
            }
            if (showingTut) {
                this.tutorial.update();
                this.tutorial.render();
            }
        };
        return EnemyHud;
    }());
    Elements.EnemyHud = EnemyHud;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal0 = (function (_super) {
        __extends(HeroGoal0, _super);
        function HeroGoal0(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal0.prototype.reset = function () {
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal0.prototype.checkSave = function (_x, _y) {
            if (_x > this.x - 120 + this.hitOffsetX
                && _x < this.x + 120 + this.hitOffsetX
                && _y > this.y - 40
                && _y < this.y + 110) {
                return true;
            }
            else {
                return false;
            }
        };
        HeroGoal0.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .4, {
                moveX: Math.cos(tempAngle) * -tempPower, moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0, ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if (a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            }
            else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 50;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = -50;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal0.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 48 + this.moveY;
            if (this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal0.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal0;
    }(Utils.AnimSprite));
    Elements.HeroGoal0 = HeroGoal0;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal1 = (function (_super) {
        __extends(HeroGoal1, _super);
        function HeroGoal1(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hoverInc = 0;
            _this.saveSide = "left";
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal1.prototype.reset = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal1.prototype.checkSave = function (_x, _y) {
            for (var i = 0; i < this.aPosCapture.length; i++) {
                if (_x > this.aPosCapture[i].x - 100 + this.hitOffsetX
                    && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX
                    && _y > this.aPosCapture[i].y - 80
                    && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal1.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            for (var i = 0; i < 5; i++) {
                setTimeout(function () {
                    addFirework(0, _this.x + Math.random() * 20 - 10, _this.y - 25 + Math.random() * 20 - 10, 1.3, false);
                }, i * 50);
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .3, {
                targX: Math.cos(tempAngle) * -tempPower, targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 50), -120), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = _this.smallAmbientAnim;
                }
            });
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal1.prototype.tweenToBallPos = function () {
            var _this = this;
            if (this.animId == "ambient") {
                return;
            }
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .4, {
                targX: enemyBall.x, targY: enemyBall.y - enemyBall.height * enemyBall.scale - 45, ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.saveState = 3;
                    if (_this.animId != "smallAmbient") {
                        _this.setAnimType("once", _this.saveSide + "Stop");
                        _this.animEndedFunc = _this.smallAmbientAnim;
                    }
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal1.prototype.tweenToRanPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: this.targX + Math.random() * 80 - 40, targY: Math.min(this.targY + Math.random() * 80 - 40, 75), ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal1.prototype.smallAmbientAnim = function () {
            this.setAnimType("loop", "smallAmbient");
        };
        HeroGoal1.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal1.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.animId == "ambient") {
                this.hoverInc = 0;
            }
            else {
                this.hoverInc += delta;
            }
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + 45 + Math.sin(this.hoverInc * 10) * 5;
            this.aPosCapture.push({ x: this.x, y: this.y });
            if (this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal1.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal1;
    }(Utils.AnimSprite));
    Elements.HeroGoal1 = HeroGoal1;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal2 = (function (_super) {
        __extends(HeroGoal2, _super);
        function HeroGoal2(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal2.prototype.reset = function () {
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal2.prototype.checkSave = function (_x, _y) {
            if (_x > this.x - 100 + this.hitOffsetX
                && _x < this.x + 100 + this.hitOffsetX
                && _y > this.y - 40
                && _y < this.y + 110) {
                return true;
            }
            else {
                return false;
            }
        };
        HeroGoal2.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .4, {
                moveX: Math.cos(tempAngle) * -tempPower, moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0, ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if (a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            }
            else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal2.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 37 + this.moveY;
            if (this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal2.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal2;
    }(Utils.AnimSprite));
    Elements.HeroGoal2 = HeroGoal2;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal3 = (function (_super) {
        __extends(HeroGoal3, _super);
        function HeroGoal3(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hoverInc = 0;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal3.prototype.reset = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal3.prototype.checkSave = function (_x, _y) {
            for (var i = 0; i < this.aPosCapture.length; i++) {
                if (_x > this.aPosCapture[i].x - 100 + this.hitOffsetX
                    && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX
                    && _y > this.aPosCapture[i].y - 80
                    && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal3.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: Math.cos(tempAngle) * -tempPower, targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 90), -120), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = _this.ambientAnim;
                }
            });
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal3.prototype.tweenToBallPos = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveState = 3;
            if (!this.saveSide || this.saveSide == undefined) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.ambientAnim;
            this.tweenToRanPos();
        };
        HeroGoal3.prototype.tweenToRanPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, 2, {
                targX: Math.random() * 200 - 100, targY: Math.random() * 150 - 75, ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal3.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal3.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 5;
            this.aPosCapture.push({ x: this.x, y: this.y });
            if (this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal3.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal3;
    }(Utils.AnimSprite));
    Elements.HeroGoal3 = HeroGoal3;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal4 = (function (_super) {
        __extends(HeroGoal4, _super);
        function HeroGoal4(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal4.prototype.reset = function () {
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal4.prototype.checkSave = function (_x, _y) {
            if (_x > this.x - 110 + this.hitOffsetX
                && _x < this.x + 110 + this.hitOffsetX
                && _y > this.y - 25
                && _y < this.y + 125) {
                return true;
            }
            else {
                return false;
            }
        };
        HeroGoal4.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .5, {
                moveX: Math.cos(tempAngle) * -tempPower, moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0, ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if (a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            }
            else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal4.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 25 + this.moveY;
            if (this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal4.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal4;
    }(Utils.AnimSprite));
    Elements.HeroGoal4 = HeroGoal4;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal5 = (function (_super) {
        __extends(HeroGoal5, _super);
        function HeroGoal5(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hoverInc = 0;
            _this.saveSide = "left";
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal5.prototype.reset = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal5.prototype.checkSave = function (_x, _y) {
            for (var i = 0; i < this.aPosCapture.length; i++) {
                if (_x > this.aPosCapture[i].x - 100 + this.hitOffsetX
                    && _x < this.aPosCapture[i].x + 100 + this.hitOffsetX
                    && _y > this.aPosCapture[i].y - 80
                    && _y < this.aPosCapture[i].y + 110) {
                    return true;
                }
            }
            return false;
        };
        HeroGoal5.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveFly" + Math.floor(Math.random() * 2));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 300);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, .5, {
                targX: Math.cos(tempAngle) * -tempPower, targY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 80), -120), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.setAnimType("once", _this.saveSide + "Stop");
                    _this.animEndedFunc = null;
                }
            });
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 0;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = 0;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal5.prototype.tweenToBallPos = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveState = 3;
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = null;
            this.tweenToRanPos();
        };
        HeroGoal5.prototype.tweenToRanPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.saveTween = TweenLite.to(this, 2, {
                targX: Math.random() * 200 - 100, targY: Math.random() * 150 - 75, ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenToRanPos();
                }
            });
        };
        HeroGoal5.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
        };
        HeroGoal5.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 3) * 5;
            this.aPosCapture.push({ x: this.x, y: this.y });
            if (this.aPosCapture.length > 10) {
                this.aPosCapture.shift();
            }
        };
        HeroGoal5.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal5;
    }(Utils.AnimSprite));
    Elements.HeroGoal5 = HeroGoal5;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal6 = (function (_super) {
        __extends(HeroGoal6, _super);
        function HeroGoal6(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal6.prototype.reset = function () {
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal6.prototype.checkSave = function (_x, _y) {
            if (_x > this.x - 110 + this.hitOffsetX
                && _x < this.x + 110 + this.hitOffsetX
                && _y > this.y - 25
                && _y < this.y + 125) {
                return true;
            }
            else {
                return false;
            }
        };
        HeroGoal6.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .4, {
                moveX: Math.cos(tempAngle) * -tempPower, moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0, ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if (a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            }
            else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal6.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 50 + this.moveY;
            if (this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal6.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal6;
    }(Utils.AnimSprite));
    Elements.HeroGoal6 = HeroGoal6;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroGoal7 = (function (_super) {
        __extends(HeroGoal7, _super);
        function HeroGoal7(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.hitRadius = 110;
            _this.hitOffsetX = 0;
            _this.setAnimType("loop", "ambient");
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.scaleX = _this.scaleY = 1;
            _this.reset();
            return _this;
        }
        HeroGoal7.prototype.reset = function () {
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.moveX = 0;
            this.moveY = 0;
            this.driftX = 0;
            this.incX = 0;
            this.prevX = 0;
            this.trailInc = 0;
            this.aPosCapture = new Array();
            this.saveState = 0;
            this.hitOffsetX = 0;
            this.hasSprayed = false;
            this.setAnimType("loop", "ambient");
        };
        HeroGoal7.prototype.checkSave = function (_x, _y) {
            if (_x > this.x - 110 + this.hitOffsetX
                && _x < this.x + 110 + this.hitOffsetX
                && _y > this.y - 25
                && _y < this.y + 125) {
                return true;
            }
            else {
                return false;
            }
        };
        HeroGoal7.prototype.makeSave = function () {
            var _this = this;
            if (enemyBall.shootState == 0) {
                this.saveState = 2;
                return;
            }
            playSound("saveJump" + Math.floor(Math.random() * 3));
            userInput.removeHitArea("goalkeepingGameTouch");
            this.saveState = 1;
            var a;
            var b;
            var tempPower = 0;
            for (var i = 0; i < enemyBall.aTouchData.length - 1; i++) {
                a = enemyBall.aTouchData[i + 1].x - enemyBall.aTouchData[i].x;
                b = enemyBall.aTouchData[i + 1].y - enemyBall.aTouchData[i].y;
                tempPower += Math.sqrt(a * a + b * b);
            }
            a = enemyBall.aTouchData[0].x - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].x;
            b = enemyBall.aTouchData[0].y - enemyBall.aTouchData[enemyBall.aTouchData.length - 1].y;
            var tempAngle = Math.atan2(b, a);
            tempPower *= (enemyBall.maxSwipeLength / enemyBall.aTouchData.length);
            tempPower = Math.min(tempPower * .4, 275);
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.saveTweenX = TweenLite.to(this, 1.5, {
                driftX: (Math.cos(tempAngle) * -tempPower) / 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.saveTweenY = TweenLite.to(this, .5, {
                moveX: Math.cos(tempAngle) * -tempPower, moveY: Math.max(Math.min(Math.sin(tempAngle) * -tempPower, 0), -150), ease: "Cubic.easeOut",
                onComplete: function () {
                    _this.saveState = 3;
                    _this.saveTweenY = TweenLite.to(_this, .4, {
                        moveY: 0, ease: "Cubic.easeIn",
                        onComplete: function () {
                            playSound("saveLand");
                            _this.setAnimType("once", _this.saveSide + "Land");
                        }
                    });
                }
            });
            if (a > 0) {
                addSpray("left", this.x + 50, canvas.height / 2 + 120, 1);
            }
            else {
                addSpray("right", this.x - 50, canvas.height / 2 + 120, 1);
            }
            var tempRad = tempAngle / radian;
            if (tempRad < -90 || tempRad >= 90) {
                this.saveSide = "right";
                this.hitOffsetX = 15;
            }
            else {
                this.saveSide = "left";
                this.hitOffsetX = -15;
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        HeroGoal7.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.moveX + this.driftX;
            this.y = canvas.height / 2 + 40 + this.moveY;
            if (this.moveY > -5 && this.saveState == 3 && !this.hasSprayed) {
                addSpray("left", this.x + 120, canvas.height / 2 + 120, 1);
                addSpray("right", this.x - 120, canvas.height / 2 + 120, 1);
                this.hasSprayed = true;
            }
            this.incX = this.x - this.prevX;
            this.prevX = this.x;
        };
        HeroGoal7.prototype.render = function () {
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalkeeperShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2), canvas.height / 2 + 135 + shakeY, bWidth, bHeight);
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroGoal7;
    }(Utils.AnimSprite));
    Elements.HeroGoal7 = HeroGoal7;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemyKick = (function (_super) {
        __extends(EnemyKick, _super);
        function EnemyKick(_oImgData) {
            var _this = _super.call(this, _oImgData, 20, 45, "ambient") || this;
            _this.aOffsets = new Array({ x: 150, y: -23 }, { x: 175, y: -27 }, { x: 177, y: -37 }, { x: 176, y: -28 }, { x: 180, y: -26 }, { x: 180, y: -30 }, { x: 176, y: -28 }, { x: 180, y: -26 });
            if (enemyStrikerId == 3) {
                _this.fps = 15;
            }
            _this.reset();
            return _this;
        }
        EnemyKick.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            allowUserSaveSwipe = false;
        };
        EnemyKick.prototype.takeShot = function () {
            allowUserSaveSwipe = true;
            this.setAnimType("once", "kick0");
            this.animEndedFunc = this.endKick;
        };
        EnemyKick.prototype.celebrate = function () {
            if (enemyStrikerId == 3) {
                this.setAnimType("loop", "celebrate");
            }
            else {
                this.setAnimType("once", "celebrate");
            }
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.sad = function () {
            if (enemyStrikerId == 3) {
                this.setAnimType("loop", "sad");
            }
            else {
                this.setAnimType("once", "sad");
            }
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.endKick = function () {
            this.setAnimType("once", "kick1");
            enemyBall.shoot();
            this.animEndedFunc = null;
        };
        EnemyKick.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.aOffsets[enemyStrikerId].x;
            this.y = canvas.height / 2 + this.aOffsets[enemyStrikerId].y;
        };
        EnemyKick.prototype.render = function () {
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemyKick;
    }(Utils.AnimSprite));
    Elements.EnemyKick = EnemyKick;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HeroKick = (function (_super) {
        __extends(HeroKick, _super);
        function HeroKick(_oImgData) {
            var _this = _super.call(this, _oImgData, 20, 45, "ambient") || this;
            _this.aOffsets = new Array({ x: 0, y: 217 / 2 - 1, scale: 1.3 }, { x: 0, y: 222 / 2 - 1, scale: 1.3 }, { x: 0, y: 217 / 2 - 1, scale: 1.3 }, { x: 0, y: 220 / 2 - 1, scale: 1.3 }, { x: 0, y: 213 / 2 - 1, scale: 1.3 }, { x: 0, y: 232 / 2 - 1, scale: 1.3 }, { x: 0, y: 220 / 2 - 1, scale: 1.3 }, { x: 0, y: 213 / 2 - 1, scale: 1.3 });
            _this.showKick = false;
            _this.slideX = 0;
            _this.scaleX = _this.scaleY = _this.aOffsets[userStrikerId].scale;
            return _this;
        }
        HeroKick.prototype.takeShot = function (_ballXInc, _ballYInc) {
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.showKick = true;
            this.setAnimType("once", "kick0");
            this.slideX = 0;
            TweenLite.to(this, .5, { slideX: this.ballXInc / 8, ease: "Quad.easeOut" });
            this.animEndedFunc = this.midKick;
        };
        HeroKick.prototype.midKick = function () {
            this.setAnimType("once", "kick1");
            ball.shoot();
            enemySave.makeSave(this.ballXInc - ball.curlXTarg / 2000, this.ballYInc);
            this.animEndedFunc = this.endKick;
        };
        HeroKick.prototype.endKick = function () {
            this.showKick = false;
        };
        HeroKick.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.aOffsets[userStrikerId].x + this.slideX;
            this.y = canvas.height - this.aOffsets[userStrikerId].y * this.aOffsets[userStrikerId].scale;
        };
        HeroKick.prototype.render = function () {
            this.y = this.y + shakeY;
            _super.prototype.renderSimple.call(this, ctx);
        };
        return HeroKick;
    }(Utils.AnimSprite));
    Elements.HeroKick = HeroKick;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave0 = (function (_super) {
        __extends(EnemySave0, _super);
        function EnemySave0(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hitOffsetX = 0;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 40;
            _this.reset();
            return _this;
        }
        EnemySave0.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave0.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 70 + this.hitOffsetX
                && _bx < this.x + 70 + this.hitOffsetX
                && _by > this.y - 50
                && _by < this.y + 50) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave0.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if (ball.isGoldBall) {
                if (this.ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            }
            else if (!this.trueSave) {
                if (Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            else {
                if (this.ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave0.prototype.endJump = function () {
            if (!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if (this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            else {
                var tempWind;
                if (hud.windDir == 0) {
                    tempWind = hud.windPower * 12;
                }
                else {
                    tempWind = -hud.windPower * 12;
                }
                var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave0.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if (this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            }
            else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave0.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if (this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if (!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave0.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave0;
    }(Utils.AnimSprite));
    Elements.EnemySave0 = EnemySave0;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave2 = (function (_super) {
        __extends(EnemySave2, _super);
        function EnemySave2(_oImgData) {
            var _this = _super.call(this, _oImgData, 20, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hitOffsetX = 0;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 40;
            _this.reset();
            return _this;
        }
        EnemySave2.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave2.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 80 + this.hitOffsetX
                && _bx < this.x + 80 + this.hitOffsetX
                && _by > this.y - 60
                && _by < this.y + 50) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave2.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if (ball.isGoldBall) {
                if (_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            }
            else if (!this.trueSave) {
                if (Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            else {
                if (_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave2.prototype.endJump = function () {
            if (!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if (this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            else {
                var tempWind;
                if (hud.windDir == 0) {
                    tempWind = hud.windPower * 12;
                }
                else {
                    tempWind = -hud.windPower * 12;
                }
                var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave2.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if (this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            }
            else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave2.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if (this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if (!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave2.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave2;
    }(Utils.AnimSprite));
    Elements.EnemySave2 = EnemySave2;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave3 = (function (_super) {
        __extends(EnemySave3, _super);
        function EnemySave3(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hoverInc = 0;
            _this.isMovingRandomly = false;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 20;
            _this.targX = 0;
            _this.targY = 0;
            _this.reset();
            return _this;
        }
        EnemySave3.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
            if (!this.isMovingRandomly) {
                this.tweenRandomPos();
            }
        };
        EnemySave3.prototype.tweenRandomPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 3, {
                targX: Math.random() * 400 - 200, targY: Math.random() * 60 - 50, ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave3.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 55
                && _bx < this.x + 55
                && _by > this.y - 85
                && _by < this.y + 25) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave3.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveFly" + Math.floor(Math.random() * 2));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if (ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if (this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempWind;
            if (hud.windDir == 0) {
                tempWind = hud.windPower * 12;
            }
            else {
                tempWind = -hud.windPower * 12;
            }
            var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1200) / 15, -90), 15);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX, targY: tempY, ease: "Cubic.easeInOut",
                onComplete: function () {
                }
            });
        };
        EnemySave3.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.ambientAnim;
        };
        EnemySave3.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave3.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 7;
        };
        EnemySave3.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave3;
    }(Utils.AnimSprite));
    Elements.EnemySave3 = EnemySave3;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave1 = (function (_super) {
        __extends(EnemySave1, _super);
        function EnemySave1(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hoverInc = 0;
            _this.isMovingRandomly = false;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 35;
            _this.reset();
            return _this;
        }
        EnemySave1.prototype.reset = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.targX = 0;
            this.targY = 0;
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave1.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 40
                && _bx < this.x + 40
                && _by > this.y - 80
                && _by < this.y) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave1.prototype.makeSave = function (_ballXInc, _ballYInc) {
            var _this = this;
            playSound("saveFly" + Math.floor(Math.random() * 2));
            for (var i = 0; i < 5; i++) {
                setTimeout(function () {
                    addFirework(0, _this.x + Math.random() * 20 - 10, _this.y - 25 + Math.random() * 20 - 10, 1, false);
                }, i * 50);
            }
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if (ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if (this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempWind;
            if (hud.windDir == 0) {
                tempWind = hud.windPower * 12;
            }
            else {
                tempWind = -hud.windPower * 12;
            }
            var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1200) / 1, -90), 20);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX, targY: tempY, ease: "Cubic.easeInOut",
                onComplete: function () {
                }
            });
        };
        EnemySave1.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = this.smallAmbientAnim;
        };
        EnemySave1.prototype.smallAmbientAnim = function () {
            this.setAnimType("loop", "smallAmbient");
            this.tweenRandomPos();
        };
        EnemySave1.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave1.prototype.tweenRandomPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 1, {
                targX: Math.random() * 400 - 200, targY: Math.random() * 60 - 50, ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave1.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.animId == "ambient") {
                this.hoverInc = 0;
            }
            else {
                this.hoverInc += delta;
            }
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 10) * 5;
        };
        EnemySave1.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave1;
    }(Utils.AnimSprite));
    Elements.EnemySave1 = EnemySave1;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave4 = (function (_super) {
        __extends(EnemySave4, _super);
        function EnemySave4(_oImgData) {
            var _this = _super.call(this, _oImgData, 22, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hitOffsetX = 0;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 40;
            _this.reset();
            return _this;
        }
        EnemySave4.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave4.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 85 + this.hitOffsetX
                && _bx < this.x + 85 + this.hitOffsetX
                && _by > this.y - 60
                && _by < this.y + 60) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave4.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if (ball.isGoldBall) {
                if (_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            }
            else if (!this.trueSave) {
                if (Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            else {
                if (_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave4.prototype.endJump = function () {
            if (!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if (this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            else {
                var tempWind;
                if (hud.windDir == 0) {
                    tempWind = hud.windPower * 12;
                }
                else {
                    tempWind = -hud.windPower * 12;
                }
                var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave4.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if (this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            }
            else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave4.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if (this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if (!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave4.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave4;
    }(Utils.AnimSprite));
    Elements.EnemySave4 = EnemySave4;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave5 = (function (_super) {
        __extends(EnemySave5, _super);
        function EnemySave5(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hoverInc = 0;
            _this.isMovingRandomly = false;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 0;
            _this.reset();
            return _this;
        }
        EnemySave5.prototype.reset = function () {
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.targX = 0;
            this.targY = 0;
            this.setAnimType("loop", "ambient");
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave5.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 40
                && _bx < this.x + 40
                && _by > this.y - 120
                && _by < this.y - 10) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave5.prototype.makeSave = function (_ballXInc, _ballYInc) {
            var _this = this;
            playSound("saveFly" + Math.floor(Math.random() * 2));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            if (ball.isGoldBall) {
                this.accuracyScale = .2;
            }
            this.saveSide = "right";
            if (this.ballXInc * 300 > canvas.width / 2 - this.x) {
                this.saveSide = "left";
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = this.stopAnim;
            var tempWind;
            if (hud.windDir == 0) {
                tempWind = hud.windPower * 12;
            }
            else {
                tempWind = -hud.windPower * 12;
            }
            var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275);
            var tempY = Math.min(Math.max((this.ballYInc + 1500) / 15, -90), 50);
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = false;
            this.saveTween = TweenLite.to(this, .5 + (1 - (this.accuracyScale * 1)), {
                targX: tempX, targY: tempY, ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.animEndedFunc = _this.tweenRandomPos();
                }
            });
        };
        EnemySave5.prototype.stopAnim = function () {
            this.setAnimType("once", this.saveSide + "Stop");
            this.animEndedFunc = null;
        };
        EnemySave5.prototype.ambientAnim = function () {
            this.setAnimType("loop", "ambient");
            this.tweenRandomPos();
        };
        EnemySave5.prototype.tweenRandomPos = function () {
            var _this = this;
            if (this.saveTween) {
                this.saveTween.kill();
            }
            this.isMovingRandomly = true;
            this.saveTween = TweenLite.to(this, 2, {
                targX: 0, targY: 0, ease: "Cubic.easeInOut",
                onComplete: function () {
                    _this.tweenRandomPos();
                }
            });
        };
        EnemySave5.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.hoverInc += delta;
            this.x = canvas.width / 2 + this.targX;
            this.y = canvas.height / 2 + this.targY + Math.sin(this.hoverInc * 5) * 5;
        };
        EnemySave5.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave5;
    }(Utils.AnimSprite));
    Elements.EnemySave5 = EnemySave5;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave6 = (function (_super) {
        __extends(EnemySave6, _super);
        function EnemySave6(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hitOffsetX = 0;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 40;
            _this.reset();
            return _this;
        }
        EnemySave6.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave6.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 90 + this.hitOffsetX
                && _bx < this.x + 90 + this.hitOffsetX
                && _by > this.y - 65
                && _by < this.y + 65) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave6.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if (ball.isGoldBall) {
                if (_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            }
            else if (!this.trueSave) {
                if (Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            else {
                if (_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave6.prototype.endJump = function () {
            if (!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if (this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            else {
                var tempWind;
                if (hud.windDir == 0) {
                    tempWind = hud.windPower * 12;
                }
                else {
                    tempWind = -hud.windPower * 12;
                }
                var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave6.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if (this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            }
            else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave6.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if (this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if (!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave6.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave6;
    }(Utils.AnimSprite));
    Elements.EnemySave6 = EnemySave6;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var EnemySave7 = (function (_super) {
        __extends(EnemySave7, _super);
        function EnemySave7(_oImgData) {
            var _this = _super.call(this, _oImgData, 18, 45, "ambient") || this;
            _this.targX = 0;
            _this.targY = 0;
            _this.hitOffsetX = 0;
            _this.oGameElementsImgData = assetLib.getData("gameElements");
            _this.offsetY = -_this.oImgData.oData.spriteHeight / 2 + 45;
            _this.reset();
            return _this;
        }
        EnemySave7.prototype.reset = function () {
            this.setAnimType("loop", "ambient");
            if (this.saveTweenX) {
                this.saveTweenX.kill();
            }
            if (this.saveTweenY) {
                this.saveTweenY.kill();
            }
            this.targX = 0;
            this.targY = 0;
            this.jumpHeight = 0;
            this.hasLanded = false;
            this.hitOffsetX = 0;
            this.trueSave = true;
            this.accuracyScale = getAccuracyScale();
        };
        EnemySave7.prototype.checkBallHit = function (_bx, _by) {
            if (_bx > this.x - 90 + this.hitOffsetX
                && _bx < this.x + 90 + this.hitOffsetX
                && _by > this.y - 65
                && _by < this.y + 65) {
                return true;
            }
            else {
                return false;
            }
        };
        EnemySave7.prototype.makeSave = function (_ballXInc, _ballYInc) {
            playSound("saveJump" + Math.floor(Math.random() * 3));
            this.ballXInc = _ballXInc;
            this.ballYInc = _ballYInc;
            this.saveSide = "right";
            this.hitOffsetX = 25;
            if (ball.isGoldBall) {
                if (_ballXInc < 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
                this.trueSave = false;
            }
            else if (!this.trueSave) {
                if (Math.random() > .5) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            else {
                if (_ballXInc > 0) {
                    this.saveSide = "left";
                    this.hitOffsetX = -25;
                }
            }
            this.setAnimType("once", this.saveSide + "Jump");
            this.animEndedFunc = this.endJump;
        };
        EnemySave7.prototype.endJump = function () {
            if (!this.trueSave) {
                var tempX = Math.random() * 210 + 40;
                if (this.saveSide == "left") {
                    tempX *= -1;
                }
                this.targY = -(Math.random() * 600 + 100);
                this.saveTweenX = TweenLite.to(this, 1, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            else {
                var tempWind;
                if (hud.windDir == 0) {
                    tempWind = hud.windPower * 12;
                }
                else {
                    tempWind = -hud.windPower * 12;
                }
                var tempX = Math.min(Math.max(-this.ballXInc * 300 + tempWind, -275), 275) * this.accuracyScale;
                this.targY = Math.max((this.ballYInc + 500) / 1.5, -850) * this.accuracyScale;
                this.saveTweenX = TweenLite.to(this, .4, { targX: tempX, ease: "Cubic.easeOut" });
                this.saveTweenY = TweenLite.to(this, .5, { targY: 500, ease: "Linear.easeNone" });
            }
            this.setAnimType("once", this.saveSide + "Fly");
            this.animEndedFunc = null;
        };
        EnemySave7.prototype.land = function () {
            this.hasLanded = true;
            this.setAnimType("once", this.saveSide + "Land");
            this.animEndedFunc = null;
            playSound("saveLand");
            if (this.saveSide == "left") {
                addSpray("left", this.x + 50, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 140, canvas.height / 2 + 21, .6);
            }
            else {
                addSpray("left", this.x + 140, canvas.height / 2 + 21, .6);
                addSpray("right", this.x - 50, canvas.height / 2 + 21, .6);
            }
        };
        EnemySave7.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width / 2 + this.targX;
            this.jumpHeight += this.targY * delta;
            this.y = canvas.height / 2 + this.jumpHeight;
            if (this.y > canvas.height / 2) {
                this.y = canvas.height / 2;
                if (!this.hasLanded) {
                    this.land();
                }
            }
        };
        EnemySave7.prototype.render = function () {
            this.y = this.y + shakeY;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.enemySaveShadow].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, canvas.height / 2 + 25, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return EnemySave7;
    }(Utils.AnimSprite));
    Elements.EnemySave7 = EnemySave7;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Wipe = (function () {
        function Wipe() {
            this.canDisplay = false;
            this.inGoal = false;
            this.stackedFunc = null;
            this.ballOverride = false;
        }
        Wipe.prototype.trigger = function (_func, _midFunc) {
            var _this = this;
            if (_midFunc === void 0) { _midFunc = null; }
            if (this.wipeTween && this.wipeTween.isActive()) {
                this.stackedFunc = _func;
                return;
            }
            this.ballOverride = false;
            if (oGameData.curTime <= 0 && !oGameData.timesUp) {
                oGameData.timesUp = true;
                if (gameState == "shooting") {
                    _func = initGoalkeepingIntro;
                    playSound("endWhistle");
                }
                else {
                    this.ballOverride = true;
                    _func = initGoalkeepingComplete;
                    playSound("endWhistle");
                }
            }
            this.oWipeImgData = assetLib.getData("wipe0");
            this.x = -canvas.width * 2;
            this.canDisplay = true;
            if (this.wipeTween) {
                this.wipeTween.kill();
            }
            this.wipeTween = TweenLite.to(this, .2, {
                x: -canvas.width / 2, ease: "Linear.easeNone",
                onComplete: function () {
                    if (_midFunc) {
                        _midFunc();
                    }
                    if (!_this.ballOverride) {
                        _func();
                    }
                    else {
                        if (oGameData.heroScore > oGameData.enemyScore) {
                            saveDataHandler.matchWon();
                            saveDataHandler.saveData();
                            var temp = saveDataHandler.getMatchesCompleted();
                            if (temp % 3 == 0 && temp < 16) {
                                initBallUnlocked();
                            }
                            else {
                                initGoalkeepingComplete();
                            }
                        }
                        else {
                            initGoalkeepingComplete();
                        }
                    }
                    _this.wipeTween = TweenLite.to(_this, .2, {
                        x: canvas.width, ease: "Linear.easeNone",
                        onComplete: function () {
                            _this.canDisplay = false;
                            resizeCanvas();
                            if (_this.stackedFunc != null) {
                                _this.trigger(_this.stackedFunc);
                                _this.stackedFunc = null;
                            }
                        }
                    });
                }
            });
        };
        Wipe.prototype.render = function () {
            if (this.canDisplay) {
                ctx.drawImage(this.oWipeImgData.img, 0, 0, this.oWipeImgData.img.width, this.oWipeImgData.img.height, this.x, 0, canvas.width * 2, canvas.height);
            }
        };
        return Wipe;
    }());
    Elements.Wipe = Wipe;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Drifter = (function () {
        function Drifter() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.scale = Math.random() * 2 + 2;
        }
        Drifter.prototype.update = function () {
            if (hud.windDir == 0) {
                this.driftX = hud.windPower;
            }
            else {
                this.driftX = -hud.windPower;
            }
            this.x += this.driftX * delta * this.scale * 10;
            if (this.x > canvas.width + 50) {
                this.x = -50;
                this.y = Math.random() * canvas.height;
                this.scale = Math.random() * 2 + 2;
            }
            else if (this.x < -50) {
                this.x = canvas.width + 50;
                this.scale = Math.random() * 2 + 2;
            }
        };
        Drifter.prototype.render = function () {
            ctx.fillStyle = 'rgba(255, 255, 255, .3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.scale, 0, 2 * Math.PI);
            ctx.fill();
        };
        return Drifter;
    }());
    Elements.Drifter = Drifter;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial(_oImgData, _tutBg) {
            var _this = _super.call(this, _oImgData, 16, 45, "anim") || this;
            _this.tutBg = 0;
            _this.oUiElementsImgData = assetLib.getData("uiElements");
            _this.tutBg = _tutBg;
            _this.setAnimType("loop", "anim");
            return _this;
        }
        Tutorial.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.tutBg == 0) {
                this.x = canvas.width / 2 + 100;
                this.y = canvas.height / 2 + 37;
            }
            else {
                this.x = canvas.width / 2 - 25;
                this.y = canvas.height / 2 + 45;
            }
        };
        Tutorial.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 85, 0.75)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].x;
            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].y;
            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].width;
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["tutBg" + this.tutBg]].height;
            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2, bWidth, bHeight);
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Tutorial;
    }(Utils.AnimSprite));
    Elements.Tutorial = Tutorial;
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = (function () {
        function SaveDataHandler(_saveDataId) {
            this.dataGroupNum = 2;
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
            this.setInitialData();
        }
        SaveDataHandler.prototype.clearData = function () {
            this.aLevelStore = new Array();
            this.aLevelStore.push(0);
        };
        SaveDataHandler.prototype.resetData = function () {
            this.clearData();
            this.saveData();
        };
        SaveDataHandler.prototype.setInitialData = function () {
            if (this.canStore && typeof (Storage) !== "undefined") {
                if (localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for (var a in this.aLevelStore) {
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);
                    }
                }
                else {
                    this.saveData();
                }
            }
        };
        SaveDataHandler.prototype.matchWon = function () {
            this.aLevelStore[0]++;
        };
        SaveDataHandler.prototype.getMatchesCompleted = function () {
            return this.aLevelStore[0];
        };
        SaveDataHandler.prototype.saveData = function () {
            if (this.canStore && typeof (Storage) !== "undefined") {
                var str = "";
                for (var i = 0; i < this.aLevelStore.length; i++) {
                    str += this.aLevelStore[i];
                    if (i < this.aLevelStore.length - 1) {
                        str += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, str);
            }
        };
        return SaveDataHandler;
    }());
    Utils.SaveDataHandler = SaveDataHandler;
})(Utils || (Utils = {}));
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
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var minWidth = 750;
var minHeight = 450;
var maxWidth = 850;
var maxHeight = 550;
var maxSafeWidth = 1050;
var maxSafeHeight = 660;
var canvasX;
var canvasY;
var canvasScale;
var div = document.getElementById('canvas-wrapper');
var sound;
var music;
var audioType = 0;
var muted = false;
var splashTimer = 0;
var assetLib;
var preAssetLib;
var isMobile = false;
var gameState = "loading";
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
var hasFocus = true;
var saveDataHandler = new Utils.SaveDataHandler("penaltypowerv31");
var isRotated = false;
if (navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
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
function playMusic() {
    if (!music.playing()) {
        music.play();
    }
}
window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        setTimeout(function () {
            resizeCanvas();
        }, 2000);
    }, false);
});
function isStock() {
    var matches = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return matches && parseFloat(matches[1]) < 537;
}
var ua = navigator.userAgent;
var isSharpStock = ((/SHL24|SH-01F/i).test(ua)) && isStock();
var isXperiaAStock = ((/SO-04E/i).test(ua)) && isStock();
var isFujitsuStock = ((/F-01F/i).test(ua)) && isStock();
if (!isIE10 && !isSharpStock && !isXperiaAStock && !isFujitsuStock && (typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    audioType = 1;
    sound = new Howl({
        src: ['audio/sound.mp3'],
        sprite: {
            locked: [0, 1000],
            powerBarUp: [4000, 1200],
            click: [5500, 600],
            powerBarFull: [6500, 1700],
            bonusTime: [8500, 1600],
            matchWin: [10500, 2500],
            matchLose: [15000, 2000],
            chooseChar: [18000, 600],
            progress: [20000, 1000],
            nextMatch: [18000, 3000],
            startWhistle: [21500, 600],
            endWhistle: [22500, 2000],
            kick0: [24500, 1000],
            kick1: [26000, 1000],
            kick2: [27500, 1000],
            bounce0: [29000, 300],
            bounce1: [29500, 300],
            bounce2: [30000, 300],
            bounce3: [30500, 300],
            bounce4: [31000, 300],
            missShotWipe: [31500, 800],
            hitBar: [32500, 800],
            powerKick: [33500, 2000],
            crowdBad0: [36000, 3200],
            crowdGood0: [39500, 4600],
            crowdBad1: [44500, 1950],
            crowdGood1: [46500, 5500],
            crowdGood2: [52500, 5500],
            saveLand: [58500, 800],
            saveFly0: [59500, 1000],
            saveFly1: [61000, 1500],
            saveJump0: [63000, 400],
            saveJump1: [63500, 400],
            saveJump2: [64000, 400],
            changeEnds: [64500, 2200],
            heroScore: [67000, 1500],
            enemyScore: [69000, 1500],
            heroSave: [71000, 1500],
            enemySave: [73000, 1500],
            congrats: [75500, 5000]
        }
    });
    music = new Howl({
        src: ['audio/music.mp3'],
        volume: 0,
        loop: true,
        html5: false,
        mobileAutoEnable: true
    });
}
else {
    audioType = 0;
}
var panel;
var background;
var totalScore = 0;
var levelScore = 0;
var levelNum = 0;
var panelFrame;
var oLogoData = {};
var oLogoBut;
var musicTween;
var oImageIds = {};
var prevGameState;
var aFireworks;
var ball;
var touchState;
var touchX;
var touchY;
var curTouches;
var crowd;
var heroId;
var hud;
var oGameData;
var flashRate = .02;
var enemyHud;
var enemyBall;
var enemyCrowd;
var heroGoal;
var shakeY = 0;
var shakeTween;
var fireworkTimer;
var fireworkNum;
var enemyKick;
var enemySave;
var aStrikerHeadIconOffsets = new Array({ x: 35, y: 10 }, { x: 40, y: 0 }, { x: 20, y: -5 }, { x: 30, y: 0 }, { x: 25, y: 5 }, { x: 25, y: 5 }, { x: 20, y: 5 }, { x: 25, y: 5 });
var aGoalieHeadIconOffsets = new Array({ x: -20, y: 6 }, { x: -17, y: -10 }, { x: -25, y: -10 }, { x: -22, y: 0 }, { x: -20, y: 5 }, { x: -26, y: 3 }, { x: 0, y: 0 }, { x: -20, y: 5 });
var wipe;
var prePauseGameState;
var hasSaved = false;
var textInc = 0;
var firstRun = true;
var showingTut = false;
var allowUserSaveSwipe = false;
var firstFail = false;
var userStrikerId;
var userGoalieId;
var enemyStrikerId;
var enemyGoalieId;
var aStrikerData = new Array({ id: 0, offsetX: -140, offsetY: -10 }, { id: 1, offsetX: -130, offsetY: -20 }, { id: 2, offsetX: -105, offsetY: -40 }, { id: 3, offsetX: -115, offsetY: -30 }, { id: 4, offsetX: -130, offsetY: -10 }, { id: 5, offsetX: -110, offsetY: -10 }, { id: 6, offsetX: -130, offsetY: -30 }, { id: 7, offsetX: -125, offsetY: -20 });
var aGoalieData = new Array({ id: 0, offsetX: 130, offsetY: -20 }, { id: 1, offsetX: 130, offsetY: -70 }, { id: 2, offsetX: 120, offsetY: -30 }, { id: 3, offsetX: 130, offsetY: -30 }, { id: 4, offsetX: 120, offsetY: -10 }, { id: 5, offsetX: 110, offsetY: -20 }, { id: 6, offsetX: 160, offsetY: -55 }, { id: 7, offsetX: 140, offsetY: -30 });
var aEnemyData = new Array();
var curProgress = 0;
var hasEndGameLink = false;
var externalUrl = "";
var goalTouchIsOn = false;
var ballId = 0;
var aProgressPos = new Array([-340, 210], [-115, 110], [-165, 245], [-85, 360], [-310, 360], [-480, 185]);
var aDrifters;
function loadLang(_lang) {
    if (_lang === void 0) { _lang = "en"; }
    curLang = _lang;
    loadPreAssets();
}
function initSplash() {
    if (curLang == "ar") {
        document.body.style.direction = "rtl";
    }
    gameState = "splash";
    if (audioType == 1 && !muted) {
        playMusic();
        if (!hasFocus) {
            music.pause();
        }
    }
    wipe = new Elements.Wipe();
    initStartScreen();
    resizeCanvas();
}
function initOutroScreen() {
    gameState = "outro";
    if (audioType == 1) {
        music.fade(music.volume(), .5, 500);
    }
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-60, -44], align: [1, 1], id: oImageIds.nextBut, idOver: oImageIds.nextButOver, flash: true };
    userInput.addHitArea("playOnOutroScreen", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    panel = new Elements.Panel(aButs);
    panel.outroTween();
    previousTime = new Date().getTime();
    updateOutroScreenEvent();
}
function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    if (audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -90], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    var oBallBut = { oImgData: assetLib.getData("uiButs"), aPos: [-230, -68], align: [1, 1], id: oImageIds.ballBut, idOver: oImageIds.ballButOver, flash: false };
    var oCreditsBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, 41], align: [0, 0], id: oImageIds.infoBut, idOver: oImageIds.infoButOver };
    userInput.addHitArea("playOnStartScreen", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("ballFromStart", butEventHandler, null, "image", oBallBut);
    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);
    var aButs = new Array(oPlayBut, oCreditsBut, oBallBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    curProgress = 0;
    panel = new Elements.Panel(aButs);
    panel.startScreenTween();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function initBallScreen() {
    gameState = "ball";
    var oBackBut;
    if (prevGameState == "ballUnlocked") {
        oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -90], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    }
    else {
        oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    }
    userInput.addHitArea("backFromBall", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    resetBallButs();
    panel.startTween1();
    previousTime = new Date().getTime();
    updateBallScreenEvent();
}
function resetBallButs() {
    var tempOffset = 150;
    userInput.removeHitArea("ballSelect");
    panel.removeBut(oImageIds.ballTickBut);
    panel.removeBut(oImageIds.ballNextBut);
    panel.removeBut(oImageIds.ballLockedBut);
    for (var i = 0; i < 6; i++) {
        if (i == ballId) {
            var oBallBut = { oImgData: assetLib.getData("uiButs"), aPos: [(i % 3) * tempOffset - tempOffset - 0, Math.floor(i / 3) * tempOffset - tempOffset / 2 + 0], align: [.5, .5], scale: 1, id: oImageIds.ballTickBut, idOver: oImageIds.ballTickBut, freeFloat: true };
            userInput.addHitArea("ballSelect", butEventHandler, { state: 0, id: i }, "image", oBallBut);
        }
        else if (i <= saveDataHandler.getMatchesCompleted() / 3 || i == 0) {
            var oBallBut = { oImgData: assetLib.getData("uiButs"), aPos: [(i % 3) * tempOffset - tempOffset - 0, Math.floor(i / 3) * tempOffset - tempOffset / 2 + 0], align: [.5, .5], scale: 1, id: oImageIds.ballNextBut, idOver: oImageIds.ballNextButOver, freeFloat: true };
            userInput.addHitArea("ballSelect", butEventHandler, { state: 1, id: i }, "image", oBallBut);
        }
        else {
            var oBallBut = { oImgData: assetLib.getData("uiButs"), aPos: [(i % 3) * tempOffset - tempOffset - 0, Math.floor(i / 3) * tempOffset - tempOffset / 2 + 0], align: [.5, .5], scale: 1, id: oImageIds.ballLockedBut, idOver: oImageIds.ballLockedBut, freeFloat: true };
            userInput.addHitArea("ballSelect", butEventHandler, { state: 2, id: i }, "image", oBallBut);
        }
        panel.aButs.push(oBallBut);
    }
}
function resetGameData() {
    oGameData = { timesUp: false, curTime: 4500, heroScore: 0, enemyScore: 0, power: 0, swipeTime: 0, ballInPlay: false, goalsInRow: 0 };
}
function addMuteBut(_aButs) {
    if (audioType == 1) {
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if (muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = { oImgData: assetLib.getData("uiButs"), aPos: [-42, 41], align: [1, 0], id: mb, idOver: mbOver };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        for (var i = 0; i < _aButs.length; i++) {
            if (_aButs[i].id == oImageIds.muteBut0 || _aButs[i].id == oImageIds.muteBut1) {
                return;
            }
        }
        _aButs.push(oMuteBut);
    }
}
function initCreditsScreen() {
    gameState = "credits";
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    var oResetBut = { oImgData: assetLib.getData("uiButs"), aPos: [-42, -44], align: [1, 1], id: oImageIds.resetBut, idOver: oImageIds.resetButOver, flash: false };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function initCharSelectScreen() {
    gameState = "charSelect";
    if (audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    userInput.addHitArea("backFromCharSelect", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for (var i = 0; i < 8; i++) {
        var oCharBut = { oImgData: assetLib.getData("uiButs"), aPos: [(i % 4) * 80 - 302, 82 + Math.floor(i / 4) * 100], align: [.5, .14], scale: .9, id: oImageIds["strikerCharBut" + i], idOver: oImageIds["strikerCharBut" + i + "Over"], flash: true, freeFloat: true };
        userInput.addHitArea("chooseChar", butEventHandler, { id: i }, "image", oCharBut);
        aButs.push(oCharBut);
    }
    for (var i = 0; i < 8; i++) {
        var oCharBut = { oImgData: assetLib.getData("uiButs"), aPos: [(i % 4) * 80 + 60, 82 + Math.floor(i / 4) * 100], align: [.5, .14], scale: .9, id: oImageIds["goalieCharBut" + i], idOver: oImageIds["goalieCharBut" + i + "Over"], flash: true };
        userInput.addHitArea("chooseChar", butEventHandler, { id: i + 8 }, "image", oCharBut);
        aButs.push(oCharBut);
    }
    aFireworks = new Array();
    userStrikerId = null;
    userGoalieId = null;
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCharSelectScreenEvent();
}
function initProgressScreen() {
    gameState = "progress";
    playSound("progress");
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    userInput.addHitArea("backFromProgress", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for (var i = 0; i < 6; i++) {
        if (i == curProgress) {
            var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [aProgressPos[i][0], aProgressPos[i][1]], align: [1, 0], scale: 1, id: oImageIds.smallNextBut, idOver: oImageIds.smallNextButOver, flash: true };
            userInput.addHitArea("playFromProgress", butEventHandler, { id: true }, "image", oPlayBut);
        }
        else if (i < curProgress) {
            var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [aProgressPos[i][0], aProgressPos[i][1]], align: [1, 0], scale: 1, id: oImageIds.smallTickBut, idOver: oImageIds.smallTickBut };
            userInput.addHitArea("playFromProgress", butEventHandler, { id: false }, "image", oPlayBut);
        }
        else {
            var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [aProgressPos[i][0], aProgressPos[i][1]], align: [1, 0], scale: 1, id: oImageIds.smallLockedBut, idOver: oImageIds.smallLockedBut };
            userInput.addHitArea("playFromProgress", butEventHandler, { id: false }, "image", oPlayBut);
        }
        aButs.push(oPlayBut);
    }
    aFireworks = new Array();
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateProgressScreenEvent();
}
function initShootingIntro() {
    gameState = "shootingIntro";
    playSound("crowdGood" + Math.floor(Math.random() * 3));
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    userInput.addHitArea("backFromShootingIntro", butEventHandler, null, "image", oBackBut);
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 15], align: [.5, .77], scale: 1, id: oImageIds.nextBut, idOver: oImageIds.nextButOver, flash: true, freeFloat: true };
    userInput.addHitArea("playFromShootingIntro", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oBackBut, oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateShootingIntroEvent();
}
function initGoalkeepingIntro() {
    gameState = "goalkeepingIntro";
    playSound("crowdGood" + Math.floor(Math.random() * 3));
    userInput.removeHitArea("pause");
    userInput.removeHitArea("shootingGameTouch");
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    userInput.addHitArea("backFromGoalkeepingingIntro", butEventHandler, null, "image", oBackBut);
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 15], align: [.5, .77], scale: 1, id: oImageIds.nextBut, idOver: oImageIds.nextButOver, flash: true, freeFloat: true };
    userInput.addHitArea("playFromGoalkeepingingIntro", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oBackBut, oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingIntroEvent();
}
function initBallUnlocked() {
    gameState = "ballUnlocked";
    if (audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    ballId = saveDataHandler.getMatchesCompleted() / 3;
    playSound("crowdGood" + Math.floor(Math.random() * 3));
    playSound("bonusTime");
    userInput.removeHitArea("pause");
    userInput.removeHitArea("goalkeepingGameTouch");
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -90], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    var oBallBut = { oImgData: assetLib.getData("uiButs"), aPos: [-230, -68], align: [1, 1], id: oImageIds.ballBut, idOver: oImageIds.ballButOver, flash: false };
    userInput.addHitArea("nextOnBallUnlockScreen", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("ballOnBallUnlockScreen", butEventHandler, null, "image", oBallBut);
    var aButs = new Array(oPlayBut, oBallBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateBallUnlockedEvent();
}
function initGoalkeepingComplete() {
    gameState = "goalkeepingComplete";
    if (audioType == 1) {
        music.fade(music.volume(), .25, 500);
    }
    userInput.removeHitArea("pause");
    userInput.removeHitArea("goalkeepingGameTouch");
    var aButs = new Array();
    if (curProgress == 5 && oGameData.heroScore > oGameData.enemyScore) {
    }
    else {
        var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [42, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
        userInput.addHitArea("backFromGoalkeepingingComplete", butEventHandler, null, "image", oBackBut);
        aButs.push(oBackBut);
    }
    if (oGameData.heroScore > oGameData.enemyScore) {
        playSound("matchWin");
        playSound("crowdGood" + Math.floor(Math.random() * 3));
        var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 40], align: [.5, .72], scale: 1, id: oImageIds.nextBut, idOver: oImageIds.nextButOver, flash: true, freeFloat: true };
        userInput.addHitArea("playFromGoalkeepingingComplete", butEventHandler, { id: 0 }, "image", oPlayBut);
    }
    else {
        playSound("matchLose");
        playSound("crowdBad" + Math.floor(Math.random() * 2));
        var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 40], align: [.5, .72], scale: 1, id: oImageIds.replayBut, idOver: oImageIds.replayButOver, flash: true, freeFloat: true };
        userInput.addHitArea("playFromGoalkeepingingComplete", butEventHandler, { id: 1 }, "image", oPlayBut);
    }
    aButs.push(oPlayBut);
    addMuteBut(aButs);
    aFireworks = new Array();
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingComplete();
}
function initVersusScreen(_resetState) {
    if (_resetState === void 0) { _resetState = 3; }
    gameState = "versusScreen";
    if (_resetState == 2) {
        if (levelNum < 4) {
            levelNum++;
        }
    }
    if (levelNum > 0 || this.evolved) {
        if (audioType == 1) {
            music.fade(music.volume(), .25, 500);
        }
    }
    else {
        if (audioType == 1) {
            music.fade(music.volume(), 0, 10);
        }
    }
    var oPlayBut;
    var aButs = new Array();
    if (_resetState == 0 || _resetState == 1) {
        oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -75], align: [1, 1], id: oImageIds.replayBut, idOver: oImageIds.replayButOver, flash: true };
        userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
        aButs.push(oPlayBut);
    }
    else if (levelNum > 0 || panel.evolved) {
        oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -75], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
        userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
        aButs.push(oPlayBut);
    }
    panel = new Elements.Panel(aButs);
    if (_resetState == 0 || _resetState == 1) {
        panel.evolved = true;
    }
    panel.resetState = _resetState;
    if (levelNum > 0 || panel.evolved) {
        var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [60, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
        userInput.addHitArea("backFromVersusScreen", butEventHandler, null, "image", oBackBut);
        aButs.push(oBackBut);
    }
    addMuteBut(aButs);
    aFireworks = new Array();
    resetGameData();
    if (levelNum == 0 && !panel.evolved) {
        panel.startEvolveTween();
    }
    else {
        panel.startTween1();
    }
    previousTime = new Date().getTime();
    updateVersusScreenEvent();
}
function addVersusButs() {
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -75], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("playOnVersusScreen", butEventHandler, null, "image", oPlayBut);
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [60, -44], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver, flash: false };
    userInput.addHitArea("backFromVersusScreen", butEventHandler, null, "image", oBackBut);
    panel.aButs.push(oPlayBut, oBackBut);
    panel.posY = 500;
    TweenLite.to(panel, .5, { posY: 0, ease: "Back.easeOut" });
}
function initShooting() {
    playSound("startWhistle");
    gameState = "shooting";
    if (audioType == 1) {
        music.fade(music.volume(), .40, 1000);
    }
    var aButs = new Array();
    addMuteBut(aButs);
    if (firstRun) {
        var oTutDoneBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -90], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
        userInput.addHitArea("playOnTut0Screen", butEventHandler, null, "image", oTutDoneBut);
        aButs.push(oTutDoneBut);
        showingTut = true;
    }
    else {
        var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        aButs.push(oPauseBut);
        userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
        userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
        showingTut = false;
    }
    enemyGoalieId = aEnemyData[curProgress].goalieId;
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    touchState = 0;
    curTouches = 0;
    oGameData.curTime = 4500;
    oGameData.ballInPlay = false;
    oGameData.timesUp = false;
    oGameData.goalsInRow = 0;
    crowd = new Elements.Crowd();
    hud = new Elements.Hud();
    enemySave = new Elements["EnemySave" + enemyGoalieId](assetLib.getData("enemySave" + enemyGoalieId));
    aFireworks = new Array();
    ball = new Elements.Ball();
    aDrifters = new Array();
    for (var i = 0; i < 10; i++) {
        var drifter = new Elements.Drifter();
        aDrifters.push(drifter);
    }
    previousTime = new Date().getTime();
    updateShootingEvent();
}
function blockUI(_block) {
    if (_block) {
        userInput.removeHitArea("pause");
        userInput.removeHitArea("mute");
    }
    else {
        var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        addMuteBut(panel.aButs);
    }
}
function initGoalkeeping() {
    gameState = "goalkeeping";
    playSound("startWhistle");
    if (audioType == 1) {
        music.fade(music.volume(), .40, 1000);
    }
    var aButs = new Array();
    addMuteBut(aButs);
    if (firstRun) {
        var oTutDoneBut = { oImgData: assetLib.getData("uiButs"), aPos: [-90, -90], align: [1, 1], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
        userInput.addHitArea("playOnTut1Screen", butEventHandler, null, "image", oTutDoneBut);
        aButs.push(oTutDoneBut);
        showingTut = true;
    }
    else {
        var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
        userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
        aButs.push(oPauseBut);
        showingTut = false;
    }
    enemyStrikerId = aEnemyData[curProgress].strikerId;
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    touchState = 0;
    enemyKick = new Elements.EnemyKick(assetLib.getData("enemyKick" + enemyStrikerId));
    enemyCrowd = new Elements.EnemyCrowd();
    enemyHud = new Elements.EnemyHud();
    heroGoal = new Elements["HeroGoal" + userGoalieId](assetLib.getData("heroGoal" + userGoalieId));
    oGameData.curTime = 4500;
    oGameData.ballInPlay = false;
    oGameData.timesUp = false;
    aFireworks = new Array();
    enemyBall = new Elements.EnemyBall();
    previousTime = new Date().getTime();
    updateGoalkeepingEvent();
}
function initQuitConfirm() {
    gameState = "quitConfirm";
    var oTickBut = { oImgData: assetLib.getData("uiButs"), aPos: [-85, -150], align: [.5, 1], id: oImageIds.tickConfirmBut, idOver: oImageIds.tickConfirmButOver };
    var oCancelBut = { oImgData: assetLib.getData("uiButs"), aPos: [85, -150], align: [.5, 1], id: oImageIds.quitBut, idOver: oImageIds.quitButOver };
    userInput.addHitArea("quitFromQuitConfirm", butEventHandler, { gameState: gameState }, "image", oTickBut);
    userInput.addHitArea("cancelFromQuitConfirm", butEventHandler, { gameState: gameState }, "image", oCancelBut);
    var aButs = new Array(oTickBut, oCancelBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateQuitConfirmEvent();
}
function initPause() {
    gameState = "pause";
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [-85, 0], align: [.5, .5], id: oImageIds.nextBut, idOver: oImageIds.nextButOver };
    var oQuitBut = { oImgData: assetLib.getData("uiButs"), aPos: [85, 0], align: [.5, .5], id: oImageIds.quitBut, idOver: oImageIds.quitButOver };
    userInput.addHitArea("resumeGameFromPause", butEventHandler, { gameState: gameState }, "image", oPlayBut);
    userInput.addHitArea("quitGameFromPause", butEventHandler, { gameState: gameState }, "image", oQuitBut);
    var aButs = new Array(oPlayBut, oQuitBut);
    if (hasEndGameLink) {
        var oExtBut = { oImgData: assetLib.getData("uiButs"), aPos: [115, -92], align: [0, 1], id: oImageIds.extBut, idOver: oImageIds.extButOver };
        userInput.addHitArea("extFromStart", butEventHandler, null, "image", oExtBut);
        aButs.push(oExtBut);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updatePauseEvent();
}
function resumeShooting() {
    gameState = "shooting";
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    if (!oGameData.ballInPlay) {
        userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
        userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateShootingEvent();
}
function resumeGoalkeeping() {
    gameState = "goalkeeping";
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    if (!hasSaved) {
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
        userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
    }
    panel = new Elements.Panel(aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateGoalkeepingEvent();
}
function setCurGoalTouch() {
    goalTouchIsOn = false;
    for (var i = 0; i < userInput.aHitAreas.length; i++) {
        if (userInput.aHitAreas[i].id == "goalkeepingGameTouch") {
            this.goalTouchIsOn = true;
        }
    }
}
function butEventHandler(_id, _oData) {
    if (isRotated) {
        return;
    }
    switch (_id) {
        case "langSelect":
            break;
        case "playOnIntroScreen":
            playSound("click");
            userInput.removeHitArea("playOnIntroScreen");
            wipe.trigger(initStartScreen);
            break;
        case "playOnOutroScreen":
            playSound("click");
            userInput.removeHitArea("playOnOutroScreen");
            wipe.trigger(initCharSelectScreen);
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("playOnStartScreen");
            userInput.removeHitArea("ballFromStart");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("extFromStart");
            userInput.removeHitArea("mute");
            wipe.trigger(initCreditsScreen);
            break;
        case "ballFromStart":
            playSound("click");
            userInput.removeHitArea("playOnStartScreen");
            userInput.removeHitArea("ballFromStart");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("extFromStart");
            userInput.removeHitArea("mute");
            wipe.trigger(initBallScreen);
            break;
        case "backFromBall":
            playSound("click");
            userInput.removeHitArea("backFromBall");
            userInput.removeHitArea("ballSelect");
            if (prevGameState == "ballUnlocked") {
                wipe.trigger(initGoalkeepingComplete);
            }
            else {
                wipe.trigger(initStartScreen);
            }
            break;
        case "ballSelect":
            playSound("click");
            if (_oData.state == 0) {
                panel.showBallInfo(0);
            }
            else if (_oData.state == 1) {
                ballId = _oData.id;
                resetBallButs();
                panel.showBallInfo(0);
            }
            else if (_oData.state == 2) {
                panel.showBallInfo(_oData.id);
            }
            break;
        case "extFromStart":
            playSound("click");
            var open = window.open(externalUrl);
            if (open == null || typeof (open) == 'undefined') {
                location.href = externalUrl;
            }
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            saveDataHandler.resetData();
            ballId = 0;
            wipe.trigger(initStartScreen);
            break;
        case "playOnStartScreen":
            playSound("click");
            userInput.removeHitArea("playOnStartScreen");
            userInput.removeHitArea("ballFromStart");
            userInput.removeHitArea("extFromStart");
            userInput.removeHitArea("credits");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "chooseChar":
            playSound("click");
            playSound("chooseChar");
            var tempCanAdd = false;
            if (userStrikerId == null || userGoalieId == null) {
                tempCanAdd = true;
            }
            if (_oData.id < 8) {
                userStrikerId = _oData.id;
                panel.triggerStriker();
                addFirework(1, canvas.width * .3, canvas.height - 50, 3);
            }
            else {
                userGoalieId = _oData.id - 8;
                panel.triggerGoalie();
                addFirework(1, canvas.width * .7, canvas.height - 50, 3);
            }
            if (userStrikerId != null && userGoalieId != null && tempCanAdd) {
                var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -65], align: [.5, 1], id: oImageIds.nextBut, idOver: oImageIds.nextButOver, flash: true };
                userInput.addHitArea("playFromCharSelect", butEventHandler, null, "image", oPlayBut);
                panel.aButs.push(oPlayBut);
            }
            break;
        case "playFromCharSelect":
            playSound("click");
            userInput.removeHitArea("chooseChar");
            userInput.removeHitArea("playFromCharSelect");
            userInput.removeHitArea("backFromCharSelect");
            userInput.removeHitArea("mute");
            var aTempS = new Array();
            var aTempG = new Array();
            for (var i = 0; i < 8; i++) {
                if (aStrikerData[i].id != userStrikerId) {
                    aTempS.push(aStrikerData[i].id);
                }
            }
            for (var i = 0; i < 8; i++) {
                if (aGoalieData[i].id != userGoalieId) {
                    aTempG.push(aGoalieData[i].id);
                }
            }
            randomiseArray(aTempS);
            randomiseArray(aTempG);
            aEnemyData = new Array();
            for (var i = 0; i < aTempS.length; i++) {
                aEnemyData.push({ strikerId: aTempS[i], goalieId: aTempG[i] });
            }
            wipe.trigger(initProgressScreen);
            break;
        case "backFromCharSelect":
            playSound("click");
            userInput.removeHitArea("chooseChar");
            userInput.removeHitArea("playFromCharSelect");
            userInput.removeHitArea("backFromCharSelect");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "backFromProgress":
            playSound("click");
            userInput.removeHitArea("backFromProgress");
            userInput.removeHitArea("playFromProgress");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "playFromProgress":
            if (_oData.id) {
                playSound("click");
                userInput.removeHitArea("backFromProgress");
                userInput.removeHitArea("playFromProgress");
                userInput.removeHitArea("mute");
                wipe.trigger(initShootingIntro);
            }
            else {
                playSound("locked");
            }
            break;
        case "backFromShootingIntro":
            playSound("click");
            userInput.removeHitArea("backFromShootingIntro");
            userInput.removeHitArea("playFromShootingIntro");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            if (curProgress == 0) {
                wipe.trigger(initProgressScreen);
            }
            else {
                wipe.trigger(initQuitConfirm);
            }
            break;
        case "playFromShootingIntro":
            playSound("click");
            userInput.removeHitArea("backFromShootingIntro");
            userInput.removeHitArea("playFromShootingIntro");
            userInput.removeHitArea("mute");
            wipe.trigger(initShooting);
            break;
        case "playFromGoalkeepingingIntro":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingIntro");
            userInput.removeHitArea("backFromGoalkeepingingIntro");
            userInput.removeHitArea("mute");
            wipe.trigger(initGoalkeeping);
            break;
        case "nextOnBallUnlockScreen":
            playSound("click");
            userInput.removeHitArea("nextOnBallUnlockScreen");
            userInput.removeHitArea("ballOnBallUnlockScreen");
            wipe.trigger(initGoalkeepingComplete);
            break;
        case "ballOnBallUnlockScreen":
            playSound("click");
            userInput.removeHitArea("nextOnBallUnlockScreen");
            userInput.removeHitArea("ballOnBallUnlockScreen");
            prevGameState = gameState;
            wipe.trigger(initBallScreen);
            break;
        case "backFromGoalkeepingingIntro":
            playSound("click");
            userInput.removeHitArea("backFromGoalkeepingingIntro");
            userInput.removeHitArea("playFromGoalkeepingingIntro");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            wipe.trigger(initQuitConfirm);
            break;
        case "playOnVersusScreen":
            playSound("click");
            userInput.removeHitArea("playOnVersusScreen");
            userInput.removeHitArea("backFromVersusScreen");
            userInput.removeHitArea("mute");
            wipe.trigger(initShooting);
            break;
        case "backFromVersusScreen":
            playSound("click");
            userInput.removeHitArea("playOnVersusScreen");
            userInput.removeHitArea("backFromVersusScreen");
            userInput.removeHitArea("mute");
            wipe.trigger(initCharSelectScreen);
            break;
        case "playOnTut0Screen":
            playSound("click");
            userInput.removeHitArea("playOnTut0Screen");
            userInput.removeHitArea("mute");
            showingTut = false;
            var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
            userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
            panel.aButs = new Array(oPauseBut);
            setTimeout(function () {
                userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
                userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
            }, 500);
            addMuteBut(panel.aButs);
            break;
        case "playOnTut1Screen":
            playSound("click");
            userInput.removeHitArea("playOnTut1Screen");
            userInput.removeHitArea("mute");
            showingTut = false;
            firstRun = false;
            var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [-110, 41], align: [1, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
            userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
            setTimeout(function () {
                userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
                userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
            }, 500);
            enemyBall.startKickTween();
            panel.aButs = new Array(oPauseBut);
            addMuteBut(panel.aButs);
            break;
        case "shootingGameTouch":
            if (_oData.isDown && curTouches < 2) {
                if (touchState != 2) {
                    if (touchState == 0) {
                        ball.aTouchData = new Array();
                        touchState = 1;
                        blockUI(true);
                        oGameData.swipeTime = 0;
                    }
                    ball.aTouchData.push({ x: _oData.x, y: _oData.y, alpha: .25 });
                    if (ball.aTouchData.length > ball.maxSwipeLength && ball.isForwardKick()) {
                        touchState = 0;
                        blockUI(false);
                        ball.shootPrep();
                        userInput.removeHitArea("shootingGameTouch");
                    }
                }
            }
            else {
                touchState = 0;
                if (ball.aTouchData.length > 2 && ball.isForwardKick()) {
                    blockUI(false);
                    ball.shootPrep();
                    userInput.removeHitArea("shootingGameTouch");
                }
            }
            break;
        case "goalkeepingGameTouch":
            if (!allowUserSaveSwipe) {
                break;
            }
            if (_oData.isDown && curTouches < 2) {
                if (touchState != 2) {
                    if (touchState == 0) {
                        enemyBall.aTouchData = new Array();
                        blockUI(true);
                        touchState = 1;
                    }
                    enemyBall.aTouchData.push({ x: _oData.x, y: _oData.y, alpha: .25 });
                    if (enemyBall.aTouchData.length > enemyBall.maxSwipeLength) {
                        heroGoal.makeSave();
                        blockUI(false);
                        touchState = 0;
                        hasSaved = true;
                    }
                }
            }
            else {
                touchState = 0;
                if (enemyBall.aTouchData.length > 2) {
                    heroGoal.makeSave();
                    blockUI(false);
                    hasSaved = true;
                }
            }
            break;
        case "playFromGoalkeepingingComplete":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingComplete");
            userInput.removeHitArea("backFromGoalkeepingingComplete");
            if (_oData.id == 0) {
                if (curProgress + 1 >= 6) {
                    panel.removeBut(oImageIds.nextBut);
                    if (audioType == 1) {
                        music.fade(music.volume(), 0, 50);
                    }
                    playSound("crowdGood" + Math.floor(Math.random() * 3));
                    playSound("congrats");
                    wipe.trigger(function () { panel.triggerCongrats(); });
                    setTimeout(function () {
                        wipe.trigger(initStartScreen);
                    }, 4000);
                }
                else {
                    wipe.trigger(initProgressScreen, function () { curProgress++; });
                    userInput.removeHitArea("mute");
                }
            }
            else {
                userInput.removeHitArea("mute");
                oGameData.heroScore = 0;
                oGameData.enemyScore = 0;
                oGameData.power = 0;
                wipe.trigger(initShooting);
            }
            break;
        case "backFromGoalkeepingingComplete":
            playSound("click");
            userInput.removeHitArea("playFromGoalkeepingingComplete");
            userInput.removeHitArea("backFromGoalkeepingingComplete");
            userInput.removeHitArea("mute");
            prevGameState = gameState;
            wipe.trigger(initQuitConfirm);
            break;
        case "retryFromEnd":
            playSound("click");
            userInput.removeHitArea("retryFromEnd");
            userInput.removeHitArea("quitFromEnd");
            levelScore = 0;
            wipe.trigger(initShooting);
            break;
        case "quitFromEnd":
            playSound("click");
            userInput.removeHitArea("retryFromEnd");
            userInput.removeHitArea("quitFromEnd");
            wipe.trigger(initStartScreen);
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
        case "pause":
            if (wipe.wipeTween && wipe.wipeTween.isActive()) {
                break;
            }
            playSound("click");
            if (audioType == 1) {
                Howler.mute(true);
                music.pause();
            }
            else if (audioType == 2) {
                music.pause();
            }
            userInput.removeHitArea("pause");
            userInput.removeHitArea("shootingGameTouch");
            setCurGoalTouch();
            userInput.removeHitArea("goalkeepingGameTouch");
            userInput.removeHitArea("mute");
            prePauseGameState = gameState;
            if (prePauseGameState == "shooting") {
                ball.pause(true);
            }
            else {
                enemyBall.pause(true);
            }
            initPause();
            break;
        case "resumeGameFromPause":
            playSound("click");
            if (audioType == 1) {
                if (!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            }
            else if (audioType == 2) {
                if (!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGameFromPause");
            userInput.removeHitArea("resumeGameFromPause");
            userInput.removeHitArea("mute");
            if (prePauseGameState == "shooting") {
                ball.pause(false);
                wipe.trigger(resumeShooting);
            }
            else {
                enemyBall.pause(false);
                wipe.trigger(resumeGoalkeeping);
            }
            break;
        case "quitGameFromPause":
            playSound("click");
            if (audioType == 1) {
                if (!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            }
            else if (audioType == 2) {
                if (!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("quitGameFromPause");
            userInput.removeHitArea("resumeGameFromPause");
            userInput.removeHitArea("mute");
            levelScore = 0;
            totalScore = 0;
            wipe.trigger(initStartScreen);
            break;
        case "quitFromQuitConfirm":
            playSound("click");
            userInput.removeHitArea("quitFromQuitConfirm");
            userInput.removeHitArea("cancelFromQuitConfirm");
            userInput.removeHitArea("mute");
            wipe.trigger(initStartScreen);
            break;
        case "cancelFromQuitConfirm":
            playSound("click");
            userInput.removeHitArea("quitFromQuitConfirm");
            userInput.removeHitArea("cancelFromQuitConfirm");
            userInput.removeHitArea("mute");
            if (prevGameState == "shootingIntro") {
                wipe.trigger(initShootingIntro);
            }
            else if (prevGameState == "goalkeepingIntro") {
                wipe.trigger(initGoalkeepingIntro);
            }
            else if (prevGameState == "goalkeepingComplete") {
                wipe.trigger(initGoalkeepingComplete);
            }
            break;
    }
}
function randomiseArray(_array) {
    var currentIndex = _array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = _array[currentIndex];
        _array[currentIndex] = _array[randomIndex];
        _array[randomIndex] = temporaryValue;
    }
    return _array;
}
;
function addText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (_col === void 0) { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    if (_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while (_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if (breakCount > 100) {
                break;
            }
        }
    }
    if (curLang == "ar") {
        _y -= _size / 15;
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(getText(_str), _x, _y);
}
function getText(_str) {
    var tempText = assetLib.textData.langText[_str][curLang];
    if (curLang == "de") {
    }
    return tempText;
}
function getTextWidth(_font, _size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getCorrectedTextWidth(_font, _size, _width, _str) {
    if (_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while (_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if (breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getTrueSave() {
    if (Math.random() > .9) {
        return false;
    }
    else {
        return true;
    }
}
function getAccuracyScale() {
    var temp = 1 / ((oGameData.heroScore) * (.4 + .1 * (curProgress + 1)) + 1);
    temp = Math.random() * temp + (1 - temp);
    return temp;
}
function screenShake(_num) {
    shakeY = -_num;
    if (shakeTween) {
        shakeTween.kill();
    }
    shakeTween = TweenLite.to(this, .2, { shakeY: 0, ease: "Back.easeOut" });
}
function userScored() {
    crowd.goWild();
    oGameData.heroScore = Math.min(oGameData.heroScore + 1, 99);
    hud.jiggleUserScore();
    flashRate = 1;
    addFirework(1, canvas.width / 8, 10, 2);
    addFirework(1, (canvas.width / 8) * 7, 10, 2);
    TweenLite.to(this, 4, { flashRate: .02, ease: "Quad.easeOut" });
    oGameData.goalsInRow++;
    if (ball.hasHitPowerArea) {
        hud.showTextEvent("bonusTime");
    }
    else if (oGameData.goalsInRow > 0 && oGameData.goalsInRow % 3 == 0 && oGameData.goalsInRow <= 21) {
        hud.showTextEvent("row" + oGameData.goalsInRow);
    }
    else if (oGameData.heroScore == 1 || ball.isGoldBall || Math.random() > .7) {
        hud.showTextEvent("goal" + textInc);
        textInc = (textInc + 1) % 5;
    }
}
function userSaved() {
    flashRate = .5;
    enemyCrowd.goWild();
    enemyKick.sad();
    clearInterval(fireworkTimer);
    fireworkNum = 0;
    fireworkTimer = setInterval(celebration1, 100);
    TweenLite.to(this, 4, { flashRate: .02, ease: "Quad.easeOut" });
    if (userGoalieId == 1 || userGoalieId == 3 || userGoalieId == 5) {
        heroGoal.tweenToBallPos();
    }
    if (enemyBall.saveCount == 0 || Math.random() > .7) {
        enemyHud.showTextEvent("save" + textInc);
        textInc = (textInc + 1) % 5;
    }
}
function celebration0() {
    addFirework(0, canvas.width / 5 + fireworkNum * (canvas.width / 5), canvas.height / 2 - 230 + Math.random() * 80 - 40, Math.random() * 1.5 + 1);
    if (++fireworkNum > 3) {
        clearInterval(fireworkTimer);
    }
}
function celebration1() {
    addFirework(1, canvas.width / 5 + (3 - fireworkNum) * (canvas.width / 5), canvas.height / 2 - 230 + Math.random() * 40 - 50, Math.random() * 1.5 + 1);
    if (++fireworkNum > 3) {
        clearInterval(fireworkTimer);
    }
}
function enemyScored() {
    oGameData.enemyScore = Math.min(oGameData.enemyScore + 1, 99);
    enemyHud.jiggleEnemyScore();
    flashRate = .5;
    enemyKick.celebrate();
    TweenLite.to(this, 4, { flashRate: .02, ease: "Quad.easeOut" });
}
function resetShooting() {
    userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
    userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
    if (!ball.inGoal) {
        oGameData.goalsInRow = 0;
    }
    hud.resetWind();
    ball.reset();
    enemySave.reset();
}
function resetGoalkeeping() {
    userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
    userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
    hasSaved = false;
    heroGoal.reset();
    enemyBall.reset();
}
function getSafeWidth(_num) {
    if (canvas.width > maxSafeWidth && (_num < (canvas.width - maxSafeWidth) / 2 || _num > canvas.width - (canvas.width - maxSafeWidth) / 2)) {
        _num = _num * (maxSafeWidth / canvas.width) + (canvas.width - maxSafeWidth) / 2;
    }
    return _num;
}
function getSafeHeight(_num) {
    if (canvas.height > maxSafeHeight && (_num < (canvas.height - maxSafeHeight) / 2 || _num > canvas.height - (canvas.height - maxSafeHeight) / 2)) {
        _num = _num * (maxSafeHeight / canvas.height) + (canvas.height - maxSafeHeight) / 2;
    }
    return _num;
}
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
function clearButtonOvers() {
    if (userInput.mouseX > canvas.width - 50) {
        userInput.mouseX = canvas.width - 1;
    }
    else if (userInput.mouseX < 50) {
        userInput.mouseX = 1;
    }
    if (userInput.mouseY > canvas.height - 50) {
        userInput.mouseY = canvas.height - 1;
    }
    else if (userInput.mouseY < 50) {
        userInput.mouseY = 1;
    }
}
function addFirework(_id, _x, _y, _scale, _shouldFall) {
    if (_scale === void 0) { _scale = 1; }
    if (_shouldFall === void 0) { _shouldFall = true; }
    if (aFireworks.length > 15) {
        return;
    }
    var animId = "explode";
    var firework = new Elements.Firework(assetLib.getData("firework" + _id), animId, _shouldFall);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    aFireworks.push(firework);
}
function addExplosion(_id, _x, _y, _scale, _shouldFall) {
    if (_scale === void 0) { _scale = 1; }
    if (_shouldFall === void 0) { _shouldFall = false; }
    if (aFireworks.length > 15) {
        return;
    }
    var animId = "explode";
    var firework = new Elements.Firework(assetLib.getData("explosion" + _id), animId, _shouldFall);
    firework.x = _x;
    firework.y = _y;
    firework.offsetX = -8;
    firework.offsetY = -8;
    firework.scaleX = firework.scaleY = _scale;
    aFireworks.push(firework);
}
function addSpray(_dir, _x, _y, _scale) {
    if (_scale === void 0) { _scale = 1; }
    if (aFireworks.length > 15) {
        return;
    }
    var firework = new Elements.Firework(assetLib.getData("spray"), _dir, false, 15);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    firework.moveSideways(_dir);
    aFireworks.push(firework);
}
function addFlash(_id, _x, _y, _scale, _forceArray) {
    if (_scale === void 0) { _scale = 1; }
    if (_forceArray === void 0) { _forceArray = null; }
    if (aFireworks.length > 15) {
        return;
    }
    var animId = "flash";
    var firework = new Elements.Firework(assetLib.getData("firework" + _id), animId, false);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    if (_forceArray) {
        _forceArray.push(firework);
    }
    else {
        aFireworks.push(firework);
    }
}
function addGoalMarker(_type, _x, _y, _scale) {
    if (_scale === void 0) { _scale = 1; }
    var gm = new Elements.GoalMarker(assetLib.getData("goalMarker" + _type), "spin");
    gm.x = _x;
    gm.y = _y;
    gm.scaleX = gm.scaleY = _scale;
    aFireworks.push(gm);
}
function updateScore(_inc) {
    levelScore += _inc;
}
function updateShootingEvent() {
    if (gameState != "shooting") {
        return;
    }
    delta = getDelta();
    if (!showingTut) {
        oGameData.curTime = Math.max(Math.round(oGameData.curTime - (delta * 100)), 0);
        oGameData.swipeTime += delta;
    }
    if (oGameData.curTime <= 0 && !oGameData.timesUp && !oGameData.ballInPlay) {
        ball.killTweens();
        wipe.trigger(initGoalkeepingIntro);
        oGameData.timesUp = true;
        playSound("endWhistle");
    }
    if (!showingTut) {
        if (Math.random() < flashRate) {
            var tempX = Math.random() * canvas.width;
            var tempY = Math.random() * canvas.height / 2 - 33;
            if ((tempX > canvas.width / 2 + 75 || tempX < canvas.width / 2 - 75) || tempY < canvas.height / 2 - 180) {
                addFlash(0, tempX, tempY, Math.random() * .2 + .2);
            }
        }
    }
    crowd.update();
    crowd.render();
    ball.update();
    ball.render();
    curTouches = 0;
    for (var i = 0; i < userInput.aHitAreas.length; i++) {
        if (curTouches < userInput.aHitAreas[i].aTouchIdentifiers.length) {
            curTouches = userInput.aHitAreas[i].aTouchIdentifiers.length;
        }
    }
    enemySave.update();
    for (var i = 0; i < aDrifters.length; i++) {
        aDrifters[i].update();
        aDrifters[i].render();
    }
    hud.update();
    hud.render();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateShootingEvent);
}
function updateGoalkeepingEvent() {
    if (gameState != "goalkeeping") {
        return;
    }
    delta = getDelta();
    if (!showingTut) {
        oGameData.curTime = Math.max(Math.round(oGameData.curTime - (delta * 100)), 0);
    }
    if (oGameData.curTime <= 0 && !oGameData.timesUp && !oGameData.ballInPlay) {
        enemyBall.killTweens();
        oGameData.timesUp = true;
        if (oGameData.heroScore > oGameData.enemyScore) {
            saveDataHandler.matchWon();
            saveDataHandler.saveData();
            var temp = saveDataHandler.getMatchesCompleted();
            if (temp % 3 == 0 && temp < 16) {
                wipe.trigger(initBallUnlocked);
            }
            else {
                wipe.trigger(initGoalkeepingComplete);
            }
        }
        else {
            wipe.trigger(initGoalkeepingComplete);
        }
        playSound("endWhistle");
    }
    if (Math.random() < flashRate) {
        addFlash(0, Math.random() * canvas.width, canvas.height / 2 - (Math.random() * 144 + 42), Math.random() * .2 + .2);
    }
    enemyCrowd.update();
    enemyCrowd.render();
    enemyKick.update();
    enemyKick.render();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    heroGoal.update();
    enemyBall.update();
    enemyBall.render();
    curTouches = 0;
    for (var i = 0; i < userInput.aHitAreas.length; i++) {
        if (curTouches < userInput.aHitAreas[i].aTouchIdentifiers.length) {
            curTouches = userInput.aHitAreas[i].aTouchIdentifiers.length;
        }
    }
    enemyHud.update();
    enemyHud.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateGoalkeepingEvent);
}
function updateCreditsScreenEvent() {
    if (gameState != "credits") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    ctx.fillStyle = "#888888";
    ctx.textAlign = "center";
    ctx.font = "15px Arial";
    ctx.fillText("v1.1.0", canvas.width / 2, canvas.height - 10);
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateCreditsScreenEvent);
}
function updateGoalkeepingComplete() {
    if (gameState != "goalkeepingComplete") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    if (Math.random() < .05 && oGameData.heroScore > oGameData.enemyScore) {
        addFirework(1, Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 1 + 1);
    }
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateGoalkeepingComplete);
}
function updateBallUnlockedEvent() {
    if (gameState != "ballUnlocked") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    if (Math.random() < .05) {
        addFirework(1, Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 1 + 1);
    }
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateBallUnlockedEvent);
}
function updateSplashScreenEvent() {
    if (gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
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
    requestAnimFrame(updateSplashScreenEvent);
}
function updateIntroScreenEvent() {
    if (gameState != "intro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateIntroScreenEvent);
}
function updateOutroScreenEvent() {
    if (gameState != "outro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    if (panel.oIntro.inc2 < 1 && Math.random() < .1) {
        addFirework(Math.round(Math.random() * 2), Math.random() * 360 + panel.introOffsetX, Math.random() * canvas.height / 2 + panel.introOffsetY, Math.random() * 1 + 1);
    }
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateOutroScreenEvent);
}
function updateStartScreenEvent() {
    if (gameState != "start") {
        return;
    }
    if (Math.random() < .1 && panel.oStartPosData.titleY > -50) {
        addFirework(Math.round(Math.random() * 2), Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 1 + 1);
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateStartScreenEvent);
}
function updateCharSelectScreenEvent() {
    if (gameState != "charSelect") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateCharSelectScreenEvent);
}
function updateBallScreenEvent() {
    if (gameState != "ball") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateBallScreenEvent);
}
function updateProgressScreenEvent() {
    if (gameState != "progress") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateProgressScreenEvent);
}
function updateShootingIntroEvent() {
    if (gameState != "shootingIntro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateShootingIntroEvent);
}
function updateGoalkeepingIntroEvent() {
    if (gameState != "goalkeepingIntro") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    wipe.render();
    requestAnimFrame(updateGoalkeepingIntroEvent);
}
function updateVersusScreenEvent() {
    if (gameState != "versusScreen") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    if (Math.random() < .1) {
    }
    for (var i = 0; i < aFireworks.length; i++) {
        aFireworks[i].update();
        aFireworks[i].render(ctx);
        if (aFireworks[i].removeMe) {
            aFireworks.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateVersusScreenEvent);
}
function updateLoaderEvent() {
    if (gameState != "loading") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updateRotateWarningEvent() {
    if (gameState != "rotated") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render(false);
    requestAnimFrame(updateRotateWarningEvent);
}
function updatePauseEvent() {
    if (gameState != "pause") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updatePauseEvent);
}
function updateQuitConfirmEvent() {
    if (gameState != "quitConfirm") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render();
    checkButtonsOver();
    wipe.render();
    requestAnimFrame(updateQuitConfirmEvent);
}
function getDelta() {
    var currentTime = new Date().getTime();
    var deltaTemp = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    if (deltaTemp > .5) {
        deltaTemp = 0;
    }
    return deltaTemp;
}
function checkSpriteCollision(_s1, _s2) {
    var s1XOffset = _s1.x;
    var s1YOffset = _s1.y;
    var s2XOffset = _s2.x;
    var s2YOffset = _s2.y;
    var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
    var radii_squared = (_s1.radius) * (_s2.radius);
    if (distance_squared < radii_squared) {
        return true;
    }
    else {
        return false;
    }
}
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
function getCentreFromTopLeft(_aTopLeft, _oImgData, _imgScale) {
    var aCentre = new Array();
    aCentre.push(_aTopLeft[0] + (_oImgData.oData.spriteWidth / 2) * _imgScale);
    aCentre.push(_aTopLeft[1] + (_oImgData.oData.spriteHeight / 2) * _imgScale);
    return aCentre;
}
function loadPreAssets() {
    preAssetLib = new Utils.AssetLoader(curLang, [{
            id: "loader",
            file: "images/preloader.png",
            oAtlasData: {
                id0: { x: 0, y: 0, width: 792, height: 102 },
                id1: { x: 0, y: 104, width: 778, height: 81 },
                id2: { x: 0, y: 187, width: 520, height: 335 }
            }
        }], ctx, canvas.width, canvas.height, false);
    oImageIds.overBar = "id0";
    oImageIds.underBar = "id1";
    oImageIds.preloaderLogo = "id2";
    preAssetLib.onReady(initLoadAssets);
}
function initLoadAssets() {
    loadAssets();
}
function loadAssets() {
    gameState = "loading";
    assetLib = new Utils.AssetLoader(curLang, [{
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: { x: 680, y: 66, width: 64, height: 64 },
                id1: { x: 734, y: 634, width: 64, height: 64 },
                id10: { x: 668, y: 602, width: 64, height: 64 },
                id11: { x: 664, y: 200, width: 64, height: 64 },
                id12: { x: 266, y: 560, width: 110, height: 110 },
                id13: { x: 134, y: 304, width: 110, height: 110 },
                id14: { x: 606, y: 502, width: 74, height: 98 },
                id15: { x: 604, y: 100, width: 74, height: 98 },
                id16: { x: 604, y: 0, width: 74, height: 98 },
                id17: { x: 592, y: 704, width: 74, height: 98 },
                id18: { x: 592, y: 603, width: 74, height: 99 },
                id19: { x: 588, y: 201, width: 74, height: 98 },
                id2: { x: 734, y: 568, width: 64, height: 64 },
                id20: { x: 586, y: 401, width: 74, height: 99 },
                id21: { x: 586, y: 301, width: 74, height: 98 },
                id22: { x: 530, y: 502, width: 74, height: 99 },
                id23: { x: 528, y: 101, width: 74, height: 98 },
                id24: { x: 528, y: 0, width: 74, height: 99 },
                id25: { x: 516, y: 705, width: 74, height: 98 },
                id26: { x: 516, y: 604, width: 74, height: 99 },
                id27: { x: 512, y: 201, width: 74, height: 98 },
                id28: { x: 510, y: 401, width: 74, height: 99 },
                id29: { x: 510, y: 301, width: 74, height: 98 },
                id3: { x: 730, y: 198, width: 64, height: 64 },
                id30: { x: 452, y: 100, width: 74, height: 99 },
                id31: { x: 452, y: 0, width: 74, height: 98 },
                id32: { x: 454, y: 503, width: 74, height: 99 },
                id33: { x: 662, y: 402, width: 74, height: 98 },
                id34: { x: 440, y: 604, width: 74, height: 99 },
                id35: { x: 436, y: 201, width: 74, height: 98 },
                id36: { x: 662, y: 301, width: 74, height: 99 },
                id37: { x: 434, y: 303, width: 74, height: 98 },
                id38: { x: 680, y: 0, width: 64, height: 64 },
                id39: { x: 734, y: 700, width: 64, height: 64 },
                id4: { x: 682, y: 502, width: 64, height: 64 },
                id40: { x: 246, y: 224, width: 110, height: 110 },
                id41: { x: 246, y: 336, width: 110, height: 110 },
                id42: { x: 246, y: 448, width: 110, height: 110 },
                id43: { x: 152, y: 112, width: 110, height: 110 },
                id44: { x: 264, y: 112, width: 110, height: 110 },
                id45: { x: 152, y: 0, width: 110, height: 110 },
                id46: { x: 134, y: 416, width: 110, height: 110 },
                id47: { x: 264, y: 0, width: 110, height: 110 },
                id48: { x: 376, y: 0, width: 74, height: 99 },
                id49: { x: 358, y: 303, width: 74, height: 98 },
                id5: { x: 680, y: 132, width: 64, height: 64 },
                id50: { x: 358, y: 403, width: 74, height: 99 },
                id51: { x: 364, y: 672, width: 74, height: 99 },
                id52: { x: 376, y: 101, width: 74, height: 98 },
                id53: { x: 378, y: 504, width: 74, height: 98 },
                id54: { x: 434, y: 403, width: 74, height: 98 },
                id55: { x: 440, y: 705, width: 74, height: 98 },
                id56: { x: 0, y: 704, width: 102, height: 101 },
                id57: { x: 104, y: 704, width: 102, height: 101 },
                id58: { x: 0, y: 304, width: 132, height: 131 },
                id59: { x: 0, y: 437, width: 132, height: 131 },
                id6: { x: 0, y: 0, width: 150, height: 150 },
                id60: { x: 133, y: 570, width: 131, height: 132 },
                id61: { x: 0, y: 570, width: 131, height: 132 },
                id62: { x: 208, y: 704, width: 76, height: 76 },
                id63: { x: 152, y: 224, width: 76, height: 76 },
                id64: { x: 286, y: 672, width: 76, height: 77 },
                id65: { x: 358, y: 224, width: 76, height: 77 },
                id7: { x: 0, y: 152, width: 150, height: 150 },
                id8: { x: 668, y: 734, width: 64, height: 64 },
                id9: { x: 668, y: 668, width: 64, height: 64 }
            }
        }, {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: { x: 1656, y: 0, width: 144, height: 197 },
                id1: { x: 1477, y: 744, width: 178, height: 313 },
                id10: { x: 1007, y: 389, width: 232, height: 186 },
                id11: { x: 1245, y: 614, width: 218, height: 231 },
                id12: { x: 1666, y: 199, width: 120, height: 235 },
                id13: { x: 1473, y: 1130, width: 178, height: 239 },
                id14: { x: 1467, y: 510, width: 190, height: 232 },
                id15: { x: 750, y: 1519, width: 278, height: 229 },
                id16: { x: 1270, y: 1579, width: 197, height: 215 },
                id17: { x: 999, y: 638, width: 244, height: 276 },
                id18: { x: 1653, y: 1059, width: 148, height: 211 },
                id19: { x: 1657, y: 744, width: 139, height: 177 },
                id2: { x: 1007, y: 0, width: 267, height: 387 },
                id20: { x: 1271, y: 1130, width: 200, height: 231 },
                id21: { x: 1649, y: 1566, width: 150, height: 208 },
                id22: { x: 394, y: 1474, width: 281, height: 43 },
                id23: { x: 677, y: 1474, width: 280, height: 43 },
                id24: { x: 663, y: 311, width: 342, height: 325 },
                id25: { x: 394, y: 1147, width: 342, height: 325 },
                id26: { x: 0, y: 1147, width: 392, height: 399 },
                id27: { x: 0, y: 0, width: 950, height: 309 },
                id28: { x: 738, y: 1305, width: 180, height: 43 },
                id29: { x: 738, y: 1350, width: 180, height: 43 },
                id3: { x: 738, y: 974, width: 287, height: 329 },
                id30: { x: 0, y: 993, width: 658, height: 98 },
                id31: { x: 1030, y: 1668, width: 152, height: 81 },
                id32: { x: 1276, y: 274, width: 108, height: 109 },
                id33: { x: 0, y: 825, width: 659, height: 97 },
                id34: { x: 663, y: 638, width: 334, height: 334 },
                id35: { x: 0, y: 1548, width: 373, height: 237 },
                id36: { x: 375, y: 1548, width: 373, height: 237 },
                id37: { x: 1276, y: 0, width: 200, height: 272 },
                id38: { x: 1271, y: 847, width: 204, height: 281 },
                id39: { x: 0, y: 311, width: 661, height: 512 },
                id4: { x: 1030, y: 1397, width: 238, height: 269 },
                id40: { x: 0, y: 924, width: 659, height: 67 },
                id41: { x: 1646, y: 1371, width: 156, height: 193 },
                id42: { x: 1485, y: 1371, width: 159, height: 196 },
                id43: { x: 1469, y: 1579, width: 178, height: 216 },
                id44: { x: 1467, y: 274, width: 197, height: 234 },
                id45: { x: 1270, y: 1397, width: 213, height: 180 },
                id5: { x: 1478, y: 0, width: 176, height: 209 },
                id6: { x: 1027, y: 916, width: 242, height: 479 },
                id7: { x: 738, y: 1395, width: 92, height: 59 },
                id8: { x: 0, y: 1093, width: 636, height: 52 },
                id9: { x: 1241, y: 389, width: 224, height: 223 }
            }
        }, {
            id: "langText",
            file: "json/text.json"
        }, {
            id: "rotateIcon",
            file: "images/rotate.png"
        }, {
            id: "titleBg",
            file: "images/titleBg.jpg"
        }, {
            id: "tournWinBg",
            file: "images/tournWinBg.jpg"
        }, {
            id: "titleLogo",
            file: "images/title/title_" + curLang + ".png"
        }, {
            id: "firework0",
            file: "images/firework0_150x150.png",
            oAnims: {
                explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                flash: [5, 4, 3, 2, 1, 0]
            }
        }, {
            id: "firework1",
            file: "images/firework1_175x175.png",
            oAnims: {
                explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
            }
        }, {
            id: "goalMarker0",
            file: "images/goalMarker0_162x167.png",
            oAnims: {
                spin: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "goalMarker1",
            file: "images/goalMarker1_162x167.png",
            oAnims: {
                spin: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "powerArea",
            file: "images/powerArea_85x85.png",
            oAnims: {
                spin: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        }, {
            id: "timeNumbers",
            file: "images/timeNumbers_48x51.png"
        }, {
            id: "scoreNumbers",
            file: "images/scoreNumbers_63x79.png"
        }, {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: { x: 0, y: 660, width: 542, height: 228 },
                id1: { x: 733, y: 1121, width: 153, height: 110 },
                id10: { x: 0, y: 1081, width: 264, height: 59 },
                id11: { x: 0, y: 953, width: 270, height: 61 },
                id12: { x: 0, y: 890, width: 276, height: 61 },
                id13: { x: 707, y: 660, width: 161, height: 159 },
                id14: { x: 0, y: 1016, width: 268, height: 63 },
                id15: { x: 263, y: 1199, width: 215, height: 39 },
                id16: { x: 676, y: 821, width: 18, height: 53 },
                id17: { x: 514, y: 890, width: 227, height: 229 },
                id18: { x: 0, y: 0, width: 882, height: 338 },
                id19: { x: 0, y: 340, width: 868, height: 318 },
                id2: { x: 544, y: 660, width: 161, height: 132 },
                id20: { x: 480, y: 1199, width: 195, height: 17 },
                id21: { x: 1022, y: 456, width: 119, height: 58 },
                id22: { x: 1027, y: 866, width: 111, height: 152 },
                id23: { x: 870, y: 524, width: 142, height: 137 },
                id24: { x: 896, y: 955, width: 129, height: 125 },
                id25: { x: 1021, y: 1082, width: 127, height: 129 },
                id26: { x: 870, y: 663, width: 139, height: 128 },
                id27: { x: 1021, y: 165, width: 126, height: 161 },
                id28: { x: 884, y: 0, width: 139, height: 163 },
                id29: { x: 1014, y: 524, width: 129, height: 138 },
                id3: { x: 517, y: 1121, width: 214, height: 45 },
                id30: { x: 888, y: 1085, width: 131, height: 124 },
                id31: { x: 884, y: 165, width: 135, height: 128 },
                id32: { x: 0, y: 1202, width: 258, height: 18 },
                id33: { x: 1011, y: 664, width: 125, height: 116 },
                id34: { x: 743, y: 821, width: 158, height: 132 },
                id35: { x: 743, y: 955, width: 151, height: 128 },
                id36: { x: 1022, y: 328, width: 124, height: 126 },
                id37: { x: 1140, y: 846, width: 83, height: 48 },
                id38: { x: 1138, y: 718, width: 91, height: 53 },
                id39: { x: 1131, y: 1020, width: 101, height: 57 },
                id4: { x: 278, y: 890, width: 222, height: 47 },
                id40: { x: 1034, y: 782, width: 111, height: 62 },
                id41: { x: 1025, y: 0, width: 119, height: 67 },
                id42: { x: 903, y: 793, width: 129, height: 71 },
                id43: { x: 1138, y: 69, width: 84, height: 48 },
                id44: { x: 1138, y: 664, width: 92, height: 52 },
                id45: { x: 1027, y: 1020, width: 102, height: 58 },
                id46: { x: 1025, y: 69, width: 111, height: 62 },
                id47: { x: 903, y: 866, width: 120, height: 67 },
                id48: { x: 544, y: 794, width: 130, height: 72 },
                id49: { x: 870, y: 340, width: 150, height: 182 },
                id5: { x: 272, y: 953, width: 228, height: 49 },
                id6: { x: 270, y: 1016, width: 237, height: 51 },
                id7: { x: 266, y: 1081, width: 246, height: 53 },
                id8: { x: 263, y: 1142, width: 252, height: 55 },
                id9: { x: 0, y: 1142, width: 261, height: 58 }
            }
        }, {
            id: "shootingBg",
            file: "images/shootingBg.jpg"
        }, {
            id: "goalkeepingBg",
            file: "images/goalkeepingBg.jpg"
        }, {
            id: "ball0",
            file: "images/ball0_165x165.png"
        }, {
            id: "ball1",
            file: "images/ball1_165x165.png"
        },
        {
            id: "ball2",
            file: "images/ball2_165x165.png"
        },
        {
            id: "ball3",
            file: "images/ball3_165x165.png"
        },
        {
            id: "ball4",
            file: "images/ball4_165x165.png"
        },
        {
            id: "ball5",
            file: "images/ball5_165x164.png"
        }, {
            id: "goldBall",
            file: "images/goldBall_179x179.png"
        }, {
            id: "heroGoal0",
            file: "images/heroGoal0_315x195.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [34, 35, 36, 37, 38, 39, 40, 41, 42],
                rightLand: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
                leftFly: [11, 12, 13, 14, 15, 16, 17, 18, 19],
                leftLand: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
            }
        }, {
            id: "heroGoal1",
            file: "images/heroGoal1_165x199.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [12, 13, 14, 15, 16, 17, 18],
                rightStop: [19, 20, 21, 22, 23, 24, 25, 26],
                leftFly: [12, 13, 14, 15, 27, 28, 29],
                leftStop: [30, 31, 32, 33, 34, 35, 36, 37],
                smallAmbient: [38, 39, 40, 41]
            }
        }, {
            id: "heroGoal2",
            file: "images/heroGoal2_250x230.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                rightLand: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                leftFly: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                leftLand: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
            }
        }, {
            id: "heroGoal3",
            file: "images/heroGoal3_132x117.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                rightFly: [14, 15, 16, 17, 18, 19, 20, 21, 22],
                rightStop: [15, 14],
                leftFly: [23, 24, 25, 26, 27, 28, 29, 30, 31],
                leftStop: [24, 23]
            }
        }, {
            id: "heroGoal4",
            file: "images/heroGoal4_328x235.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                rightLand: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                leftFly: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
                leftLand: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
            }
        }, {
            id: "heroGoal5",
            file: "images/heroGoal5_119x140.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [41, 42, 43, 44, 45, 45, 45],
                rightStop: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                leftFly: [17, 18, 19, 20, 21, 21, 21],
                leftStop: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
            }
        }, {
            id: "heroGoal6",
            file: "images/heroGoal6_265x210.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [12, 13, 14, 15, 16, 17, 18],
                rightFly: [19, 20, 21, 22, 23, 24],
                rightLand: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                leftJump: [12, 13, 14, 15, 38, 39, 40],
                leftFly: [41, 42, 43, 44, 45, 46],
                leftLand: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
            }
        }, {
            id: "heroGoal7",
            file: "images/heroGoal7_266x228.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [11, 12, 13, 14, 15, 16, 17, 18],
                rightFly: [19, 20, 21, 22, 23, 24],
                rightLand: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                leftJump: [11, 12, 13, 14, 15, 38, 39, 40],
                leftFly: [41, 42, 43, 44, 45, 46],
                leftLand: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
            }
        }, {
            id: "explosion0",
            file: "images/explosion0_214x199.png",
            oAnims: {
                explode: [4, 5, 6, 7, 8, 9, 10, 11]
            }
        }, {
            id: "enemyKick0",
            file: "images/enemyKick0_166x103.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                sad: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
            }
        }, {
            id: "enemyKick1",
            file: "images/enemyKick1_174x116.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                sad: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
            }
        }, {
            id: "enemyKick2",
            file: "images/enemyKick2_168x137.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37],
                sad: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
            }
        }, {
            id: "enemyKick3",
            file: "images/enemyKick3_196x114.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                kick1: [11, 12, 13, 14],
                celebrate: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                sad: [32, 33, 34]
            }
        }, {
            id: "enemyKick4",
            file: "images/enemyKick4_204x113.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                sad: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
            }
        }, {
            id: "enemyKick5",
            file: "images/enemyKick5_199x123.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37],
                sad: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
            }
        }, {
            id: "enemyKick6",
            file: "images/enemyKick6_199x117.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37],
                sad: [38, 39, 40, 41, 42, 43, 44, 45, 46]
            }
        }, {
            id: "enemyKick7",
            file: "images/enemyKick7_171x113.png",
            oAnims: {
                ambient: [0],
                kick0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                kick1: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                celebrate: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                sad: [40, 41, 42, 43, 44, 45, 46, 47]
            }
        }, {
            id: "heroKick0",
            file: "images/heroKick0_286x217.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick1",
            file: "images/heroKick1_253x222.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick2",
            file: "images/heroKick2_289x217.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick3",
            file: "images/heroKick3_335x220.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick4",
            file: "images/heroKick4_311x213.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick5",
            file: "images/heroKick5_330x232.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick6",
            file: "images/heroKick6_302x217.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "heroKick7",
            file: "images/heroKick7_263x225.png",
            oAnims: {
                ambient: [9],
                kick0: [0],
                kick1: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }, {
            id: "enemySave0",
            file: "images/enemySave0_247x152.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [11, 12, 13, 14, 38, 39],
                rightFly: [40, 41, 42, 43, 44, 45, 46, 47],
                rightLand: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                leftJump: [11, 12, 13, 14, 15, 16],
                leftFly: [17, 18, 19, 20, 21, 22, 23, 24],
                leftLand: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
            }
        }, {
            id: "enemySave1",
            file: "images/enemySave1_130x154.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [12, 13, 14, 15, 16, 17, 18],
                rightStop: [19, 20, 21, 22, 23, 24, 25, 26, 38, 39, 40, 41, 38, 39, 40, 41, 38, 39, 40, 41],
                leftFly: [12, 13, 14, 15, 27, 28, 29],
                leftStop: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 38, 39, 40, 41, 38, 39, 40, 41],
                smallAmbient: [38, 39, 40, 41]
            }
        }, {
            id: "enemySave2",
            file: "images/enemySave2_197x176.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [12, 13, 14, 15, 16, 17, 18],
                rightFly: [19, 20, 21, 22, 23, 24, 25],
                rightLand: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                leftJump: [12, 13, 14, 15, 37, 38, 39],
                leftFly: [40, 41, 42, 43, 44, 45, 46],
                leftLand: [57, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
            }
        }, {
            id: "enemySave3",
            file: "images/enemySave3_98x88.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                leftFly: [14, 15, 16, 17, 18, 19, 20, 21, 22],
                leftStop: [15, 14],
                rightFly: [23, 24, 25, 26, 27, 28, 29, 30, 31],
                rightStop: [24, 23]
            }
        }, {
            id: "enemySave4",
            file: "images/enemySave4_247x177.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [14, 15, 16, 17, 18, 19, 20],
                rightFly: [21, 22, 23, 24, 25, 26, 27],
                rightLand: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
                leftJump: [14, 15, 16, 17, 42, 43, 44],
                leftFly: [45, 46, 47, 48, 49, 50, 51],
                leftLand: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]
            }
        }, {
            id: "enemySave5",
            file: "images/enemySave5_99x117.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightFly: [41, 42, 43, 44, 45, 45, 45],
                rightStop: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 63, 64, 64, 64, 64],
                leftFly: [17, 18, 19, 20, 21, 21, 21],
                leftStop: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 38, 39, 39, 40, 40, 40, 40]
            }
        }, {
            id: "enemySave6",
            file: "images/enemySave6_153x141.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [12, 13, 14, 15, 16, 17, 18],
                rightFly: [19, 20, 21, 22, 23, 24],
                rightLand: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                leftJump: [12, 13, 14, 15, 38, 39, 40],
                leftFly: [41, 42, 43, 44, 45, 46],
                leftLand: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
            }
        }, {
            id: "enemySave7",
            file: "images/enemySave7_166x154.png",
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                rightJump: [11, 12, 13, 14, 15, 16, 17, 18],
                rightFly: [19, 20, 21, 22, 23, 24],
                rightLand: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                leftJump: [11, 12, 13, 14, 15, 38, 39, 40],
                leftFly: [41, 42, 43, 44, 45, 46],
                leftLand: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
            }
        }, {
            id: "wipe0",
            file: "images/wipe0.png"
        }, {
            id: "info",
            file: "images/info.png"
        }, {
            id: "tut0",
            file: "images/tut0_276x294.png",
            oAnims: {
                anim: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
            }
        }, {
            id: "tut1",
            file: "images/tut1_371x267.png",
            oAnims: {
                anim: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35]
            }
        }, {
            id: "spray",
            file: "images/spray_160x47.png",
            oAnims: {
                left: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                right: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            }
        }], ctx, canvas.width, canvas.height);
    oImageIds.infoBut = "id0";
    oImageIds.infoButOver = "id1";
    oImageIds.muteBut0 = "id2";
    oImageIds.muteBut0Over = "id3";
    oImageIds.muteBut1 = "id4";
    oImageIds.muteBut1Over = "id5";
    oImageIds.playBut = "id6";
    oImageIds.playButOver = "id7";
    oImageIds.pauseBut = "id8";
    oImageIds.pauseButOver = "id9";
    oImageIds.backBut = "id10";
    oImageIds.backButOver = "id11";
    oImageIds.replayBut = "id12";
    oImageIds.replayButOver = "id13";
    oImageIds.strikerCharBut0 = "id14";
    oImageIds.strikerCharBut0Over = "id15";
    oImageIds.strikerCharBut1 = "id16";
    oImageIds.strikerCharBut1Over = "id17";
    oImageIds.strikerCharBut2 = "id18";
    oImageIds.strikerCharBut2Over = "id19";
    oImageIds.strikerCharBut3 = "id20";
    oImageIds.strikerCharBut3Over = "id21";
    oImageIds.strikerCharBut4 = "id22";
    oImageIds.strikerCharBut4Over = "id23";
    oImageIds.strikerCharBut5 = "id24";
    oImageIds.strikerCharBut5Over = "id25";
    oImageIds.goalieCharBut0 = "id26";
    oImageIds.goalieCharBut0Over = "id27";
    oImageIds.goalieCharBut1 = "id28";
    oImageIds.goalieCharBut1Over = "id29";
    oImageIds.goalieCharBut2 = "id30";
    oImageIds.goalieCharBut2Over = "id31";
    oImageIds.goalieCharBut3 = "id32";
    oImageIds.goalieCharBut3Over = "id33";
    oImageIds.goalieCharBut4 = "id34";
    oImageIds.goalieCharBut4Over = "id35";
    oImageIds.goalieCharBut5 = "id36";
    oImageIds.goalieCharBut5Over = "id37";
    oImageIds.resetBut = "id38";
    oImageIds.resetButOver = "id39";
    oImageIds.quitBut = "id40";
    oImageIds.quitButOver = "id41";
    oImageIds.nextBut = "id42";
    oImageIds.nextButOver = "id43";
    oImageIds.tickBut = "id44";
    oImageIds.lockedBut = "id45";
    oImageIds.tickConfirmBut = "id46";
    oImageIds.tickConfirmButOver = "id47";
    oImageIds.strikerCharBut6 = "id48";
    oImageIds.strikerCharBut6Over = "id49";
    oImageIds.goalieCharBut6 = "id50";
    oImageIds.goalieCharBut6Over = "id51";
    oImageIds.goalieCharBut7 = "id52";
    oImageIds.goalieCharBut7Over = "id53";
    oImageIds.strikerCharBut7 = "id54";
    oImageIds.strikerCharBut7Over = "id55";
    oImageIds.ballBut = "id56";
    oImageIds.ballButOver = "id57";
    oImageIds.ballNextBut = "id58";
    oImageIds.ballNextButOver = "id59";
    oImageIds.ballLockedBut = "id60";
    oImageIds.ballTickBut = "id61";
    oImageIds.smallNextBut = "id62";
    oImageIds.smallNextButOver = "id63";
    oImageIds.smallLockedBut = "id64";
    oImageIds.smallTickBut = "id65";
    oImageIds.titleRaven = "id0";
    oImageIds.titleStarfire = "id1";
    oImageIds.titleCraig = "id2";
    oImageIds.titleWonderWoman = "id3";
    oImageIds.titleMaoMao = "id4";
    oImageIds.titleApple = "id5";
    oImageIds.titleBall = "id6";
    oImageIds.cnLogo = "id7";
    oImageIds.headerTextPanel = "id8";
    oImageIds.flare0 = "id9";
    oImageIds.strikerChar0 = "id10";
    oImageIds.strikerChar1 = "id11";
    oImageIds.strikerChar2 = "id12";
    oImageIds.strikerChar3 = "id13";
    oImageIds.strikerChar4 = "id14";
    oImageIds.strikerChar5 = "id15";
    oImageIds.goalieChar0 = "id16";
    oImageIds.goalieChar1 = "id17";
    oImageIds.goalieChar2 = "id18";
    oImageIds.goalieChar3 = "id19";
    oImageIds.goalieChar4 = "id20";
    oImageIds.goalieChar5 = "id21";
    oImageIds.namePanel0 = "id22";
    oImageIds.namePanel1 = "id23";
    oImageIds.charSelectBg0 = "id24";
    oImageIds.charSelectBg1 = "id25";
    oImageIds.confetti = "id26";
    oImageIds.rainbow = "id27";
    oImageIds.progressPanel0 = "id28";
    oImageIds.progressPanel1 = "id29";
    oImageIds.speechPanel0 = "id30";
    oImageIds.scorePanel = "id31";
    oImageIds.vsPanel = "id32";
    oImageIds.speechPanel1 = "id33";
    oImageIds.flare1 = "id34";
    oImageIds.tutBg0 = "id35";
    oImageIds.tutBg1 = "id36";
    oImageIds.winCup = "id37";
    oImageIds.titleRobin = "id38";
    oImageIds.progressMap = "id39";
    oImageIds.ballInfoPanel = "id40";
    oImageIds.strikerChar7 = "id41";
    oImageIds.strikerChar6 = "id42";
    oImageIds.goalieChar7 = "id43";
    oImageIds.goalieChar6 = "id44";
    oImageIds.titleDarwin = "id45";
    oImageIds.shootingGoal = "id0";
    oImageIds.strikerHead0 = "id1";
    oImageIds.strikerHead1 = "id2";
    oImageIds.ballShadow0 = "id3";
    oImageIds.ballShadow1 = "id4";
    oImageIds.ballShadow2 = "id5";
    oImageIds.ballShadow3 = "id6";
    oImageIds.ballShadow4 = "id7";
    oImageIds.ballShadow5 = "id8";
    oImageIds.ballShadow6 = "id9";
    oImageIds.ballShadow7 = "id10";
    oImageIds.ballShadow8 = "id11";
    oImageIds.ballShadow9 = "id12";
    oImageIds.ballUnderShadow = "id13";
    oImageIds.powerBarBg = "id14";
    oImageIds.powerBar = "id15";
    oImageIds.powerBarTip = "id16";
    oImageIds.goldBallUnderShadow = "id17";
    oImageIds.goalkeepingGoalFront = "id18";
    oImageIds.goalkeepingGoalBack = "id19";
    oImageIds.goalkeeperShadow = "id20";
    oImageIds.tinyGoal = "id21";
    oImageIds.strikerHead2 = "id22";
    oImageIds.strikerHead3 = "id23";
    oImageIds.strikerHead4 = "id24";
    oImageIds.strikerHead5 = "id25";
    oImageIds.goalieHead0 = "id26";
    oImageIds.goalieHead1 = "id27";
    oImageIds.goalieHead2 = "id28";
    oImageIds.goalieHead3 = "id29";
    oImageIds.goalieHead4 = "id30";
    oImageIds.goalieHead5 = "id31";
    oImageIds.enemySaveShadow = "id32";
    oImageIds.strikerHead6 = "id33";
    oImageIds.goalieHead6 = "id34";
    oImageIds.goalieHead7 = "id35";
    oImageIds.strikerHead7 = "id36";
    oImageIds.windArrow00 = "id37";
    oImageIds.windArrow01 = "id38";
    oImageIds.windArrow02 = "id39";
    oImageIds.windArrow03 = "id40";
    oImageIds.windArrow04 = "id41";
    oImageIds.windArrow05 = "id42";
    oImageIds.windArrow10 = "id43";
    oImageIds.windArrow11 = "id44";
    oImageIds.windArrow12 = "id45";
    oImageIds.windArrow13 = "id46";
    oImageIds.windArrow14 = "id47";
    oImageIds.windArrow15 = "id48";
    oImageIds.windPanel = "id49";
    oImageIds.happyGroup = "id0";
    oImageIds.hex0 = "id1";
    oImageIds.shockedBen = "id2";
    oImageIds.hex1 = "id3";
    oImageIds.dome = "id4";
    oImageIds.greenBg = "id5";
    oImageIds.actionBen = "id6";
    oImageIds.domeGone = "id7";
    oImageIds.benHappy = "id8";
    oImageIds.vilgaxGone = "id9";
    assetLib.onReady(initSplash);
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
function resizeCanvas() {
    if (wipe && wipe.canDisplay) {
        return;
    }
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
    if (tempInnerWidth > tempInnerHeight) {
        if (isRotated) {
            if (gameState != "loading") {
                initBackFromRotate();
            }
        }
        maxW = maxWidth;
        maxH = maxHeight;
        minW = minWidth;
        minH = minHeight;
    }
    else {
        if (!isRotated) {
            if (gameState != "loading") {
                initRotateWarning();
            }
        }
        maxW = maxHeight;
        maxH = maxWidth;
        minW = minHeight;
        minH = minWidth;
    }
    if (canvas.width < maxW || canvas.height < maxH) {
        if (canvas.height < minH) {
            canvas.height = minH;
            canvas.width = minH * (tempInnerWidth / tempInnerHeight);
            canvasScale = minH / tempInnerHeight;
        }
        if (canvas.width < minW) {
            canvas.width = minW;
            canvas.height = minW * (tempInnerHeight / tempInnerWidth);
            canvasScale = minW / tempInnerWidth;
        }
    }
    else {
        if (canvas.height - maxH < canvas.width - maxW) {
            if (canvas.height < maxH) {
                canvasScale = 1;
            }
            else {
                canvas.height = maxH;
                canvas.width = maxH * (tempInnerWidth / tempInnerHeight);
                canvasScale = maxH / tempInnerHeight;
            }
        }
        else {
            if (canvas.width < maxW) {
                canvasScale = 1;
            }
            else {
                canvas.width = maxW;
                canvas.height = maxW * (tempInnerHeight / tempInnerWidth);
                canvasScale = maxW / tempInnerWidth;
            }
        }
    }
    if (gameState == "shooting") {
        if (!oGameData.ballInPlay && !showingTut) {
            userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
            userInput.addHitArea("shootingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
        }
    }
    else if (gameState == "goalkeeping") {
        if (this.goalTouchIsOn && !showingTut) {
            userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 65, canvas.width, canvas.height] }, false);
            userInput.addHitArea("goalkeepingGameTouch", butEventHandler, { isDraggable: true, multiTouch: true }, "rect", { aRect: [0, 0, canvas.width - 140, 65] }, false);
        }
    }
    window.scrollTo(0, 0);
}
function initRotateWarning() {
    isRotated = true;
    if (gameState == "shooting") {
        ball.pause(true);
    }
    else if (gameState == "goalkeeping") {
        enemyBall.pause(true);
    }
    prevGameState = gameState;
    gameState = "rotated";
    background = new Elements.Background();
    previousTime = new Date().getTime();
    updateRotateWarningEvent();
}
function initBackFromRotate() {
    isRotated = false;
    switch (prevGameState) {
        case "start":
            gameState = "start";
            previousTime = new Date().getTime();
            updateStartScreenEvent();
            break;
        case "credits":
            gameState = "credits";
            previousTime = new Date().getTime();
            updateCreditsScreenEvent();
            break;
        case "progress":
            gameState = "progress";
            previousTime = new Date().getTime();
            updateProgressScreenEvent();
            break;
        case "shooting":
            gameState = "shooting";
            ball.pause(false);
            previousTime = new Date().getTime();
            updateShootingEvent();
            break;
        case "goalkeeping":
            gameState = "goalkeeping";
            enemyBall.pause(false);
            previousTime = new Date().getTime();
            updateGoalkeepingEvent();
            break;
        case "charSelect":
            gameState = "charSelect";
            previousTime = new Date().getTime();
            updateCharSelectScreenEvent();
            break;
        case "shootingIntro":
            gameState = "shootingIntro";
            previousTime = new Date().getTime();
            updateShootingIntroEvent();
            break;
        case "goalkeepingIntro":
            gameState = "goalkeepingIntro";
            previousTime = new Date().getTime();
            updateGoalkeepingIntroEvent();
            break;
        case "goalkeepingComplete":
            gameState = "goalkeepingComplete";
            previousTime = new Date().getTime();
            updateGoalkeepingComplete();
            break;
        case "versusScreen":
            gameState = "versusScreen";
            previousTime = new Date().getTime();
            updateVersusScreenEvent();
            break;
        case "pause":
            gameState = "pause";
            previousTime = new Date().getTime();
            updatePauseEvent();
            break;
        case "quitConfirm":
            gameState = "quitConfirm";
            previousTime = new Date().getTime();
            updateQuitConfirmEvent();
            break;
        case "intro":
            gameState = "intro";
            previousTime = new Date().getTime();
            updateIntroScreenEvent();
            break;
        case "outro":
            gameState = "outro";
            previousTime = new Date().getTime();
            updateOutroScreenEvent();
            break;
    }
}
function playSound(_id) {
    if (audioType == 1) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if (audioType == 1) {
        if (muted) {
            Howler.mute(true);
            music.pause();
        }
        else {
            Howler.mute(false);
            playMusic();
            if (gameState == "shooting" || gameState == "goalkeeping") {
                music.volume(.4);
            }
            else {
                music.volume(.25);
            }
        }
    }
    else if (audioType == 2) {
        if (muted) {
            music.pause();
        }
        else {
            playMusic();
        }
    }
}
