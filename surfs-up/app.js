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
            this.scale = 1;
            this.frameInc = 0;
            this.fps = 15;
            this.curFrame = 0;
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
            var bX = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].x;
            var bY = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].y;
            var bWidth = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].width;
            var bHeight = this.oLoaderImgData.oData.oAtlasData[oImageIds.logo].height;
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
            ctx.fillText(Math.round((this.assetsLoaded / this.totalAssets) * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 + 51);
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
                if (e.button == 2) {
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                _this.hitCancel(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
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
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
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
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
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
            if (this.pauseIsOn) {
                return;
            }
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if (_isDown) {
                for (var i = 0; i < this.aHitAreas.length; i++) {
                    if (this.aHitAreas[i].rect) {
                        var aX = canvas.width * this.aHitAreas[i].align[0];
                        var aY = canvas.height * this.aHitAreas[i].align[1];
                        if (_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if (this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if (this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
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
                this.oImgData = assetLib.getData("menuBg");
            }
            else if (gameState == "endGame") {
                this.oImgData = assetLib.getData("endBg");
            }
        }
        Background.prototype.render = function () {
            if (gameState == "start") {
                if (canvas.width > canvas.height) {
                    ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
                }
                else {
                    ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height);
                }
            }
            else if (gameState == "endGame") {
                if (canvas.width > canvas.height) {
                    ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) * .6) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0, 0, canvas.width, canvas.height);
                }
                else {
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
    var Panel = (function () {
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.incY = 0;
            this.posX = 0;
            this.flareRot = 0;
            this.numberSpace = 82;
            this.scoreY = 0;
            this.tutY = 500;
            this.oSplashLogoImgData = assetLib.getData("splashLogo");
            this.oJaggyImgData = assetLib.getData("jaggy");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.oTopFlareImgData = assetLib.getData("flare");
            this.oScoreNumbersImgData = assetLib.getData("numbers");
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.tweenOutTut = function () {
            TweenLite.to(this, .3, { delay: this.tutShowTime, tutY: 500, ease: "Cubic.easeIn" });
        };
        Panel.prototype.addScore = function () {
            totalScore++;
            if (this.scoreTween) {
                this.scoreTween.kill();
            }
            this.scoreY = -30;
            this.scoreTween = TweenLite.to(this, 1, { scoreY: 0, ease: "Elastic.easeOut" });
        };
        Panel.prototype.startTween1 = function () {
            this.posY = 500;
            TweenLite.to(this, .75, { posY: 0, ease: "Cubic.easeOut" });
            this.butsY = 500;
            TweenLite.to(this, .5, { butsY: 0, ease: "Cubic.easeOut" });
            this.posX = 200;
            TweenLite.to(this, 1.5, { posX: 0, ease: "Bounce.easeOut" });
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
        Panel.prototype.render = function (_butsOnTop) {
            if (_butsOnTop === void 0) { _butsOnTop = true; }
            if (!_butsOnTop) {
                this.addButs(ctx);
            }
            switch (this.panelType) {
                case "splash":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "start":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar01].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar01].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar01].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar01].height;
                    var tempScale = 1;
                    var tempPosY = canvas.height - bHeight * tempScale;
                    if (canvas.width < canvas.height + 200) {
                        tempPosY = Math.max(tempPosY, canvas.height * .18 + 180);
                    }
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, tempPosY, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar02].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar02].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar02].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleChar02].height;
                    var tempScale = Math.min((canvas.height - 50) / bHeight, 1);
                    var tempPosY = canvas.height - bHeight * tempScale;
                    if (canvas.width < canvas.height) {
                        tempPosY = Math.max(tempPosY, canvas.height * .18 + 220);
                    }
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - bWidth * tempScale + this.posY, tempPosY, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.logo].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.logo].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.logo].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.logo].height;
                    var tempScale = 1;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height * .18 - bHeight / 2 * tempScale - this.posX, bWidth * tempScale, bHeight * tempScale);
                    var tempImgData = assetLib.getData("titleLogo");
                    var tempScale = 1;
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - (tempImgData.img.width / 2) * tempScale, canvas.height * .18 + 140 - bHeight / 2 + Math.sin(this.incY * .4) * 10 - this.posY, tempImgData.img.width * tempScale, tempImgData.img.height * tempScale);
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
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - tempScore.length * (this.numberSpace * tempScale) - 82 + this.posY, canvas.height - 68, bWidth, bHeight);
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
                    ctx.restore();
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar01].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar01].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar01].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar01].height;
                    var tempScale = Math.min((canvas.height * .5) / bHeight, 1);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0 - this.posY, canvas.height * 0.05, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar02].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar02].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar02].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar02].height;
                    var tempScale = Math.min((canvas.height * .7) / bHeight, 1);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .1 - this.posY * .1, canvas.height - (bHeight + 0) * tempScale, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar03].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar03].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar03].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.endChar03].height;
                    var tempScale = Math.min((canvas.height * .7) / bHeight, 1);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 350 + this.posY * .1, canvas.height - bHeight * tempScale, bWidth * tempScale, bHeight * tempScale);
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
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cupIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - tempScore.length * (this.numberSpace * tempScale) - 82 + this.posY, canvas.height - 68, bWidth, bHeight);
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
                    addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY + 5, canvas.height * .35 - 45 + 5 + Math.sin(this.incY * .4) * 10, "score", "#C64F05");
                    addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY - 2, canvas.height * .35 - 45 - 2 + Math.sin(this.incY * .4) * 10, "score", "#FFFFFF");
                    addText(1, 120, canvas.width * .75, "center", canvas.width / 2 + this.posY, canvas.height * .35 - 45 + Math.sin(this.incY * .4) * 10, "score", "#FFBC01");
                    break;
                case "game":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["grubIcon"]].height;
                    var tempScale = 1;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 150 - this.posY, 5 - this.scoreY, bWidth * tempScale, bHeight * tempScale);
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
                    if ((firstRun && platform.x < 0) || this.tutY < 500) {
                        if (!tutorialOn && firstRun) {
                            tutorialOn = true;
                            this.tutY = 500;
                            TweenLite.to(this, .3, { tutY: 0, ease: "Cubic.easeOut" });
                            this.tutShowTime = 2;
                        }
                        tutorialTimer += delta * 2;
                        this.tutShowTime -= delta;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tutBg].height;
                        ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .75 - bWidth / 2 + this.tutY, canvas.height / 2 - bHeight / 2, bWidth, bHeight);
                        addText(1, 40, 200, "center", canvas.width * .75 + this.tutY, canvas.height * .5 + 105, "tut0", "#FFFFFF");
                        this.tutTimer = 2;
                        if (Math.floor(tutorialTimer % this.tutTimer) == 0) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut0].height;
                            ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .75 - 90 + this.tutY, canvas.height * .5 - 30 - 170, bWidth, bHeight);
                        }
                        else {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tut1].height;
                            ctx.drawImage(panel.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width * .75 - 90 + this.tutY, canvas.height * .5 - 170, bWidth, bHeight);
                        }
                    }
                    if (platform.jagScale < 2) {
                        var tempScale = platform.jagScale + (Math.sin(this.incY * 2) * .2 + .2);
                        ctx.drawImage(this.oJaggyImgData.img, 0, 0, this.oJaggyImgData.img.width, this.oJaggyImgData.img.height, 0 - ((canvas.width * tempScale) - canvas.width) * .5, 0 - ((canvas.height * tempScale) - canvas.height) * .5, canvas.width * tempScale, canvas.height * tempScale);
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
        Panel.prototype.addButs = function (ctx) {
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
                if (this.incY != 0 && this.aButs[i].flash) {
                    if (this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i * 2.5) * 2) * 3;
                    }
                    else {
                        floatY = Math.sin(this.incY + i * 2.5) * 3;
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
                var aX = (canvas.width * this.aButs[i].align[0]);
                var aY = (canvas.height * this.aButs[i].align[1]);
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
                    ctx.scale(1 + floatY / 30, 1 + floatY / 30);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 7);
                    ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);
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
    var Platform = (function () {
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
            this.animInc = 0;
            this.horizonInc = 0;
            this.aBgRocks = new Array();
            this.isSprinting = false;
            this.sprintInterval = 150;
            this.jagScale = 2;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oBgImgData = assetLib.getData("bg");
            this.oTownBgImgData = assetLib.getData("townBg");
            this.aPlatforms = new Array();
            this.y = canvas.height * this.tunnelPerc;
            var temp = {
                x: 0,
                y: 0,
                nextY: 0,
                assetId: "10",
                id: 0,
                animId: 0,
                dress: { type: "none", inFront: false, dist: 0 },
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
            this.distToSprint = 40;
            this.bgRockReleaseTarg = 0;
            this.aBgRocks.push({ id: 3, x: 0, scale: 1, y: 0 });
        }
        Platform.prototype.addPlatform = function () {
            var tempY = 0;
            var tempHeight = Math.random() * 100 + 50;
            var tempId = "10";
            var tempDressType = "none";
            var tempDressInFront = false;
            var tempDist = 0;
            if (this.aPlatforms[this.aPlatforms.length - 1].id >= this.aStartPlatforms.length && this.gapInc == -1) {
                if (++this.countY >= this.countTotY) {
                    var tempBreak = 0;
                    tempY = Math.floor(Math.random() * 3) - 1;
                    while (tempBreak < 10 && tempY == this.aPlatforms[this.aPlatforms.length - 1].nextY) {
                        tempY = Math.floor(Math.random() * 3) - 1;
                        tempBreak++;
                    }
                    this.countY = 0;
                    if (this.isSprinting) {
                        this.sprintOff();
                    }
                    if (this.aPlatforms[this.aPlatforms.length - 1].id > this.distToSprint) {
                        this.countTotY = 40;
                        this.distToSprint += this.sprintInterval;
                        this.sprintOn();
                    }
                    else {
                        this.countTotY = Math.random() * 4 + 2;
                    }
                }
                else if (this.isSprinting && this.countY < this.countTotY - 5) {
                    tempY = 1;
                    this.aPlatforms[this.aPlatforms.length - 1].nextY = 1;
                    this.aPlatforms[this.aPlatforms.length - 1].assetId = "20";
                    tempHeight = (Math.sin(this.countY) + 1) * 30;
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
            else {
                tempY = this.aStartPlatforms[this.aPlatforms[this.aPlatforms.length - 1].id];
            }
            if (tempY > 0) {
                tempId = "20";
            }
            else if (this.aPlatforms[this.aPlatforms.length - 1].y > this.aPlatforms[this.aPlatforms.length - 1].y + this.aPlatforms[this.aPlatforms.length - 1].nextY) {
                tempId = "00";
            }
            if (Math.random() < .1) {
                tempDressType = "fish" + Math.floor(Math.random() * 4);
                tempDist = Math.random() * 200 + 200;
                tempDressInFront = true;
            }
            if (tempY == -4) {
                tempDressType = "rock" + Math.floor(Math.random() * 2);
                tempDressInFront = true;
            }
            if (this.countTotY > 5 && this.countY == 2 && this.gapInc == -1 && !this.isSprinting) {
                if (Math.random() > .5) {
                    tempY = 2;
                    tempId = "20";
                }
                else {
                    this.gapInc = 0;
                }
            }
            var temp = {
                x: this.aPlatforms[this.aPlatforms.length - 1].x + 1,
                y: this.aPlatforms[this.aPlatforms.length - 1].y + this.aPlatforms[this.aPlatforms.length - 1].nextY * tempHeight,
                nextY: tempY,
                assetId: tempId,
                animId: Math.floor(Math.random() * 8),
                id: this.aPlatforms[this.aPlatforms.length - 1].id + 1,
                dress: { type: tempDressType, inFront: tempDressInFront, dist: tempDist },
                grub: { exists: false, mc: null }
            };
            if ((Math.random() < .5 && temp.id > 5 && this.gapInc == -1 && this.aPlatforms[this.aPlatforms.length - 1].assetId != "20") || (this.isSprinting && this.aPlatforms[this.aPlatforms.length - 1].id % 2)) {
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
                if (this.isSprinting) {
                    tempGroundHeight = 0;
                }
                var tempGrub = new Elements.Grub(tempGroundHeight);
                temp.grub.mc = tempGrub;
                temp.grub.exists = true;
            }
            this.aPlatforms.push(temp);
            if (temp.id >= this.bgRockReleaseTarg) {
                this.bgRockReleaseTarg += Math.random() * 10 + 5;
                this.aBgRocks.push({ id: Math.floor(Math.random() * 3), x: canvas.width, scale: Math.random() * .5 + .5, y: Math.random() * 50 });
                this.aBgRocks.sort(function (a, b) { return a.y - b.y; });
            }
        };
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
        Platform.prototype.sprintOn = function () {
            if (this.speedTween) {
                this.speedTween.kill();
            }
            this.speedTween = TweenLite.to(this, 3, {
                delay: 2, speed: this.startSpeed * 3, jagScale: 1, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.isSprinting = true;
        };
        Platform.prototype.sprintOff = function () {
            if (this.speedTween) {
                this.speedTween.kill();
            }
            this.speedTween = TweenLite.to(this, 1, {
                speed: this.storeSpeed, jagScale: 2, ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
            this.isSprinting = false;
        };
        Platform.prototype.getGroundY = function () {
            var tempGroundY = null;
            this.groundY = null;
            for (var i = 0; i < this.aPlatforms.length; i++) {
                if (car.x + car.bWidth / 2 > (this.x + this.aPlatforms[i].x * this.platformWidth) && car.x - car.bWidth / 2 < (this.x + this.aPlatforms[i].x * this.platformWidth + this.platformWidth)) {
                    tempGroundY = canvas.height * this.tunnelPerc - this.aPlatforms[i].y;
                    if (this.groundY == null || tempGroundY > this.groundY) {
                        this.groundY = tempGroundY;
                    }
                }
            }
        };
        Platform.prototype.update = function () {
            if (!tutorialOn) {
                this.x -= 300 * this.speed * delta;
                if (car.jumpState != 3 && !this.isSprinting) {
                    this.speed += delta * .015;
                    this.storeSpeed = this.speed;
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
        Platform.prototype.render = function () {
            ctx.drawImage(this.oTownBgImgData.img, 0, 0, this.oTownBgImgData.img.width, this.oTownBgImgData.img.height, (this.x * .2) % canvas.width, -100 + this.horizonInc, canvas.width * 2, canvas.height + 100);
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2 - 100 + this.horizonInc, 50, 0, 2 * Math.PI, false);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            for (var i = 0; i < this.aBgRocks.length; i++) {
                if (!tutorialOn) {
                    this.aBgRocks[i].x -= (50 + this.aBgRocks[i].y * .6) * this.speed * delta;
                }
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["bgRock" + this.aBgRocks[i].id]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["bgRock" + this.aBgRocks[i].id]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["bgRock" + this.aBgRocks[i].id]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["bgRock" + this.aBgRocks[i].id]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.aBgRocks[i].x, -100 + this.horizonInc + canvas.height * .63 - bHeight * this.aBgRocks[i].scale + this.aBgRocks[i].y, bWidth * this.aBgRocks[i].scale, bHeight * this.aBgRocks[i].scale);
                if (this.aBgRocks[i].x + bWidth < 0) {
                    this.aBgRocks.splice(i, 1);
                    i -= 1;
                }
            }
            var changeAnimFrame = false;
            this.animInc += delta;
            if (this.animInc > .05) {
                changeAnimFrame = true;
                this.animInc = 0;
            }
            for (var i = 0; i < this.aPlatforms.length; i++) {
                ctx.fillStyle = "#04637D";
                ctx.fillRect(this.x + this.aPlatforms[i].x * this.platformWidth, this.y + this.aPlatforms[i].y + 50, this.platformWidth + 2, canvas.height);
                var tempAssetId;
                if (changeAnimFrame) {
                    this.aPlatforms[i].animId = (this.aPlatforms[i].animId + 1) % 8;
                }
                if (this.aPlatforms[i].assetId == "00") {
                    tempAssetId = "0" + this.aPlatforms[i].animId;
                }
                else if (this.aPlatforms[i].assetId == "10") {
                    tempAssetId = "1" + this.aPlatforms[i].animId;
                }
                else if (this.aPlatforms[i].assetId == "20") {
                    tempAssetId = "2" + this.aPlatforms[i].animId;
                }
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + tempAssetId]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + tempAssetId]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + tempAssetId]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["platform" + tempAssetId]].height;
                var tempOffsetX = 0;
                var tempOffsetY = 155 - bHeight;
                if (this.aPlatforms[i].assetId == "00") {
                    tempOffsetX = 200 - bWidth;
                    tempOffsetY = 155 - bHeight;
                }
                else if (this.aPlatforms[i].assetId == "20") {
                    tempOffsetY = 155 - bHeight;
                }
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x + this.aPlatforms[i].x * this.platformWidth + tempOffsetX, this.y + this.aPlatforms[i].y - 10 + tempOffsetY, bWidth + 2, bHeight);
                if (this.aPlatforms[i].dress.type != "none" && this.aPlatforms[i].dress.inFront) {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aPlatforms[i].dress.type]].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x + this.aPlatforms[i].x * this.platformWidth + 100 - bWidth / 2, this.y + this.aPlatforms[i].y - bHeight + 5 + this.aPlatforms[i].dress.dist, bWidth, bHeight);
                }
                if (this.aPlatforms[i].grub.exists) {
                    this.aPlatforms[i].grub.mc.targX = this.x + this.aPlatforms[i].x * this.platformWidth + this.platformWidth / 2;
                    this.aPlatforms[i].grub.mc.targY = this.y + this.aPlatforms[i].y;
                    this.aPlatforms[i].grub.mc.update();
                    this.aPlatforms[i].grub.mc.render();
                    if (this.aPlatforms[i].grub.mc.grubState == 2) {
                        this.aPlatforms[i].grub.exists = false;
                    }
                }
            }
        };
        return Platform;
    }());
    Elements.Platform = Platform;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car() {
            var _this = _super.call(this, assetLib.getData("dean"), 24, 60, "drive") || this;
            _this.bWidth = 160;
            _this.jumpState = 0;
            _this.fallInc = 0;
            _this.rotation = 0;
            _this.dustInc = 0;
            _this.inc = 0;
            _this.hadSplash = false;
            _this.fallGapY = 0;
            _this.prevPlatformY = 0;
            _this.offsetY = -70;
            return _this;
        }
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
                playSound("jump");
                this.setAnimType("once", "jump");
                this.jumpTween = TweenLite.to(platform, .8 / Math.max(platform.speed, platform.startSpeed), {
                    y: platform.y + 200,
                    horizonInc: 100,
                    ease: "Quad.easeOut",
                    onComplete: function () {
                        _this.fallInc = 0;
                        _this.jumpState = 2;
                    }
                });
                this.rotation = -5 * radian;
                this.rotateTween = TweenLite.to(this, .8 / platform.speed, {
                    rotation: -(Math.random() * 40 + 20) * radian, ease: "Quad.easeOut",
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
        Car.prototype.bounce = function () {
            if (this.rotateTween) {
                this.rotateTween.kill();
            }
            if (!platform.isSprinting) {
                this.rotateTween = TweenLite.to(this, 1 / platform.speed, {
                    rotation: 0 * radian, ease: "Elastic.easeOut",
                    onComplete: function () {
                    }
                });
            }
            else {
                this.rotateTween = TweenLite.to(this, 1 / platform.speed, {
                    rotation: 0 * radian, ease: "Quad.easeInOut",
                    onComplete: function () {
                    }
                });
            }
        };
        Car.prototype.update = function () {
            var _this = this;
            _super.prototype.updateAnimation.call(this, delta);
            this.x = canvas.width * .16;
            this.inc += delta;
            if ((this.jumpState == 0 || this.jumpState == 2) && platform.y < platform.groundY) {
                platform.hitWall();
                this.jumpState = 3;
                this.fallInc = -800;
                platform.isSprinting = false;
                platform.jagScale = 2;
                this.fps = 30;
                this.setAnimType("once", "crash");
                this.animEndedFunc = null;
                music.stop();
                playSound("crash");
                addEffect(5, this.x + 50, this.y - 100);
            }
            if (this.jumpState == 2) {
                this.fallInc += 1000 * platform.speed * delta;
                platform.y -= this.fallInc * delta;
                platform.horizonInc = Math.max(platform.horizonInc - this.fallInc * delta * .5, 0);
                if (platform.y <= platform.groundY) {
                    platform.y = platform.groundY;
                    this.jumpState = 0;
                    this.bounce();
                    if (!platform.isSprinting) {
                        this.setAnimType("once", "land");
                        playSound("land" + Math.floor(Math.random() * 4));
                        addEffect(2, this.x + 40, this.y + 10);
                    }
                    this.animEndedFunc = function () { _this.setAnimType("loop", "drive"); };
                    this.inc = 0;
                }
            }
            else if (this.jumpState == 0 && platform.y > platform.groundY) {
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
            if (this.jumpState == 3) {
                this.fallInc += 2000 * delta;
                this.y += this.fallInc * delta;
                var tempDist0 = 1000;
                var tempId = 0;
                for (var i = 0; i < platform.aPlatforms.length; i++) {
                    var tempDist1 = Math.abs((platform.x + platform.aPlatforms[i].x * platform.platformWidth + 100) - this.x);
                    if (tempDist1 < tempDist0) {
                        tempDist0 = tempDist1;
                        tempId = i;
                    }
                }
                if (this.y > (platform.y + platform.aPlatforms[tempId].y) && this.fallInc > 0 && !this.hadSplash) {
                    this.hadSplash = true;
                    addEffect(4, this.x, platform.y + platform.aPlatforms[tempId].y);
                    playSound("splash");
                }
                if (this.y > canvas.height + 2000) {
                    initEndGame();
                }
            }
            else {
                this.y = canvas.height * platform.tunnelPerc + Math.sin(this.inc * 15) * 5;
            }
            if (this.jumpState == 0 && !firstRun) {
                this.dustInc += delta;
                if (this.dustInc > .02) {
                    this.dustInc = 0;
                    addEffect(3, this.x + Math.random() * 50 - 50, this.y + Math.random() * 5);
                }
            }
        };
        Car.prototype.render = function () {
            _super.prototype.render.call(this, ctx);
        };
        return Car;
    }(Utils.AnimSprite));
    Elements.Car = Car;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Grub = (function () {
        function Grub(_groundHeight) {
            this.aGroundHeights = new Array(70, 140, 210);
            this.inc = 0;
            this.grubState = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.grubType = Math.floor(Math.random() * 5);
            this.inc = Math.random() * 4;
            this.groundHeight = this.aGroundHeights[_groundHeight];
        }
        Grub.prototype.update = function () {
            var _this = this;
            if (this.grubState == 0) {
                this.inc += delta;
                this.x = this.targX + Math.sin(this.inc * 8) * 6;
                this.y = this.targY - this.groundHeight + Math.sin(this.inc * 10) * 6;
                if (this.x > car.x - 75
                    && this.x < car.x + 75
                    && this.y > car.y - 140
                    && this.y < car.y) {
                    this.grubState = 1;
                    addEffect(0, this.x, this.y);
                    playSound("tiki" + Math.floor(Math.random() * 4));
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
        Grub.prototype.render = function () {
            var tempId = oImageIds["tikiBub" + this.grubType];
            if (this.grubState != 0) {
                tempId = oImageIds["tiki" + this.grubType];
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[tempId].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[tempId].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[tempId].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[tempId].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, this.y - bHeight / 2, bWidth, bHeight);
        };
        return Grub;
    }());
    Elements.Grub = Grub;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Effect = (function (_super) {
        __extends(Effect, _super);
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
            if (_this.id == 2) {
                _this.driftRate = 200;
            }
            return _this;
        }
        Effect.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
            if (this.flowWithGame) {
                this.x -= this.driftRate * platform.speed * delta;
                this.y = this.startY + platform.y - this.startPlatformY;
            }
        };
        Effect.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Effect;
    }(Utils.AnimSprite));
    Elements.Effect = Effect;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var WindLine = (function () {
        function WindLine() {
            this.driftRate = 300;
            this.widthMultiplier = 10;
            this.aBits = new Array();
            for (var i = 0; i < 20; i++) {
                var tempY = Math.random() * (canvas.height / 2) + (canvas.height / 4);
                this.aBits.push({
                    x: Math.random() * canvas.width,
                    y: tempY,
                    startY: tempY,
                    startPlatformY: platform.y,
                    width: Math.random() * 1 + 2
                });
            }
        }
        WindLine.prototype.render = function () {
            ctx.strokeStyle = "rgba(255,255,255,.1)";
            var tempSpeed = platform.speed;
            if (tutorialOn) {
                tempSpeed = 0;
            }
            for (var i = 0; i < this.aBits.length; i++) {
                this.aBits[i].x -= (this.aBits[i].width * tempSpeed * 150 + 200) * delta;
                this.aBits[i].y = this.aBits[i].startY + (platform.y - this.aBits[i].startPlatformY);
                if (this.aBits[i].x + this.aBits[i].width * this.widthMultiplier < 0) {
                    var tempY = Math.random() * (canvas.height / 2) + (canvas.height / 4);
                    this.aBits[i].x = canvas.width,
                        this.aBits[i].y = tempY,
                        this.aBits[i].width = Math.random() * 1 + 2;
                    this.aBits[i].startY = tempY;
                    this.aBits[i].startPlatformY = platform.y;
                }
                ctx.lineWidth = this.aBits[i].width * 2;
                ctx.beginPath();
                ctx.moveTo(this.aBits[i].x, this.aBits[i].y);
                ctx.lineTo(this.aBits[i].x + this.aBits[i].width * this.widthMultiplier, this.aBits[i].y);
                ctx.stroke();
            }
        };
        return WindLine;
    }());
    Elements.WindLine = WindLine;
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Dust = (function () {
        function Dust(_x, _y) {
            var _this = this;
            this.removeMe = false;
            this.addY = 0;
            this.driftRate = Math.random() * 150 + 150;
            this.x = _x;
            this.y = this.startY = _y;
            this.startPlatformY = platform.y;
            this.radius = 0;
            this.alpha = Math.random() * .5 + .5;
            TweenLite.to(this, .3, {
                radius: Math.random() * 10 + 10, addY: Math.random() * -50, ease: "Quad.easeOut",
                onComplete: function () {
                    TweenLite.to(_this, .7, {
                        radius: 0, addY: Math.random() * -100, ease: "Quad.easeIn",
                        onComplete: function () {
                            _this.removeMe = true;
                        }
                    });
                }
            });
        }
        Dust.prototype.update = function () {
            this.x -= this.driftRate * platform.speed * delta;
            this.y = this.startY + platform.y - this.startPlatformY;
        };
        Dust.prototype.render = function () {
            ctx.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
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
    var SaveDataHandler = (function () {
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
        SaveDataHandler.prototype.setData = function (_score) {
            this.aLevelStore[0] = _score;
        };
        SaveDataHandler.prototype.getData = function () {
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
var maxWidth = 680;
var minWidth = 680;
var maxHeight = 680;
var minHeight = 680;
var canvasX;
var canvasY;
var canvasScale;
var isRotated = false;
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
var aLangs = new Array("EN");
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
var hasFocus = true;
var saveDataHandler = new Utils.SaveDataHandler("mmtdv1");
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
            crash: [
                3000,
                1354.0362811791385
            ],
            endScreen: [
                5500,
                1811.8820861678007
            ],
            jump: [
                8000,
                1340.9523809523805
            ],
            land0: [
                10500,
                1602.1768707482984
            ],
            land1: [
                13000,
                1440.226757369615
            ],
            land2: [
                15500,
                1339.3650793650806
            ],
            land3: [
                18000,
                1447.0068027210878
            ],
            splash: [
                20500,
                2787.573696145124
            ],
            startGame: [
                24000,
                1333.3333333333321
            ],
            tiki0: [
                26500,
                1279.1156462585036
            ],
            tiki1: [
                29000,
                1517.1428571428578
            ],
            tiki2: [
                31500,
                856.1451247165551
            ],
            tiki3: [
                33000,
                1087.6870748299298
            ],
            edgeFall: [
                35500,
                557.3242630385522
            ]
        }
    });
    music = new Howl({
        src: ['audio/music.mp3'],
        volume: .5,
        loop: true
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
var aTutorials = new Array();
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
var windLine;
function loadLang(_lang) {
    if (_lang === void 0) { _lang = "en"; }
    loadPreAssets();
    curLang = _lang;
    loadPreAssets();
}
function initSplash() {
    gameState = "splash";
    resizeCanvas();
    if (audioType == 1 && !muted) {
        playMusic();
        if (!hasFocus) {
            music.pause();
        }
    }
    initStartScreen();
}
function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    if (audioType == 1) {
    }
    background = new Elements.Background();
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 0], align: [.5, .8], id: oImageIds.playBut, idOver: oImageIds.playButOver, flash: true };
    userInput.addHitArea("startGame", butEventHandler, null, "image", oPlayBut);
    var aButs = new Array(oPlayBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function addMuteBut(_aButs) {
    if (audioType == 1) {
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if (muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = { oImgData: assetLib.getData("uiButs"), aPos: [-40, 40], align: [1, 0], id: mb, idOver: mbOver };
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
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [40, -40], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver };
    var oResetBut = { oImgData: assetLib.getData("uiButs"), aPos: [-40, -40], align: [1, 1], id: oImageIds.resetBut, idOver: oImageIds.resetButOver };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function initGame() {
    gameState = "game";
    playSound("startGame");
    if (audioType == 1) {
        music.fade(music.volume(), 1, 1000);
    }
    totalScore = 0;
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [40, 40], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    userInput.addHitArea("jump", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 60, canvas.width, canvas.height] }, true);
    userInput.addKey("jump", butEventHandler, null, 32);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    aEffects = new Array();
    platform = new Elements.Platform();
    car = new Elements.Car();
    panel.startTween1();
    windLine = new Elements.WindLine();
    previousTime = new Date().getTime();
    updateGameEvent();
}
function initPause() {
    gameState = "pause";
    var oPlayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, -80], align: [.5, .5], id: oImageIds.playBut, idOver: oImageIds.playButOver };
    var oQuitBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 80], align: [.5, .5], id: oImageIds.quitBut, idOver: oImageIds.quitButOver };
    userInput.addHitArea("playFromPause", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);
    var aButs = new Array(oPlayBut, oQuitBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updatePauseEvent();
}
function initEndGame() {
    gameState = "endGame";
    if (audioType == 1) {
        playMusic();
        music.volume(.5);
    }
    playSound("endScreen");
    if (saveDataHandler.getData() < totalScore) {
        saveDataHandler.setData(totalScore);
        saveDataHandler.saveData();
    }
    userInput.removeHitArea("pause");
    userInput.removeHitArea("jump");
    userInput.removeKey("jump");
    var oBackBut = { oImgData: assetLib.getData("uiButs"), aPos: [60, -43], align: [0, 1], id: oImageIds.backBut, idOver: oImageIds.backButOver };
    var oReplayBut = { oImgData: assetLib.getData("uiButs"), aPos: [0, 0], align: [.5, .65], id: oImageIds.replayBut, idOver: oImageIds.replayButOver, flash: true };
    userInput.addHitArea("replayFromEnd", butEventHandler, null, "image", oReplayBut);
    userInput.addHitArea("backFromEnd", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oReplayBut, oBackBut);
    panel = new Elements.Panel(gameState, aButs);
    addMuteBut(aButs);
    panel.startTween1();
    background = new Elements.Background();
    previousTime = new Date().getTime();
    updateEndGameEvent();
}
function resumeGame() {
    gameState = "game";
    background = new Elements.Background();
    var oPauseBut = { oImgData: assetLib.getData("uiButs"), aPos: [40, 40], align: [0, 0], id: oImageIds.pauseBut, idOver: oImageIds.pauseButOver };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    userInput.addHitArea("jump", butEventHandler, { isDraggable: false, multiTouch: true }, "rect", { aRect: [0, 60, canvas.width, canvas.height] }, true);
    userInput.addKey("jump", butEventHandler, null, 32);
    var aButs = new Array(oPauseBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween1();
    if (firstRun) {
        panel.tutY = 0;
    }
    previousTime = new Date().getTime();
    updateGameEvent();
}
function butEventHandler(_id, _oData) {
    switch (_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            preAssetLib = new Utils.AssetLoader(curLang, [{
                    id: "preloadImage",
                    file: "images/preloadImage.jpg"
                }], ctx, canvas.width, canvas.height, false);
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
            playSound("startGame");
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
            if (audioType == 1) {
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
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            resumeGame();
            break;
        case "quitFromPause":
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
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            totalScore = 0;
            initStartScreen();
            break;
        case "restartFromPause":
            break;
    }
}
function addEffect(_id, _x, _y, _flowWithGame) {
    if (_flowWithGame === void 0) { _flowWithGame = true; }
    switch (_id) {
        case 0:
            var animId = "explode";
            var effect = new Elements.Effect(_id, assetLib.getData("explosion0"), animId, _flowWithGame, _x, _y);
            effect.scaleX = effect.scaleY = 1;
            aEffects.push(effect);
            break;
        case 1:
            var animId = "explode";
            var effect = new Elements.Effect(_id, assetLib.getData("firework0"), animId, _flowWithGame, _x, _y);
            effect.scaleX = effect.scaleY = 2;
            aEffects.push(effect);
            break;
        case 2:
            var effect = new Elements.Effect(_id, assetLib.getData("spray"), "explode", _flowWithGame, _x, _y);
            effect.scaleX = effect.scaleY = 1;
            effect.offsetY = -22;
            aEffects.push(effect);
            break;
        case 3:
            var dust = new Elements.Dust(_x, _y);
            aEffects.push(dust);
            break;
        case 4:
            var effect = new Elements.Effect(_id, assetLib.getData("splash"), "splash", _flowWithGame, _x, _y, 15);
            effect.scaleX = effect.scaleY = 1.5;
            effect.offsetY = -20;
            aEffects.push(effect);
            break;
        case 5:
            var effect = new Elements.Effect(_id, assetLib.getData("puff"), "splash", _flowWithGame, _x, _y, 24);
            effect.scaleX = effect.scaleY = 1.5;
            effect.offsetY = -20;
            aEffects.push(effect);
            break;
    }
}
function updateScore(_inc) {
    levelScore += _inc;
}
function updateGameEvent() {
    if (gameState != "game") {
        return;
    }
    delta = getDelta();
    if (car.hadSplash) {
        car.update();
        car.render();
        platform.update();
        platform.render();
    }
    else {
        platform.update();
        platform.render();
        car.update();
        car.render();
    }
    panel.update();
    panel.render();
    for (var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if (aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    windLine.render();
    checkButtonsOver();
    requestAnimFrame(updateGameEvent);
}
function updateCreditsScreenEvent() {
    if (gameState != "credits") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateCreditsScreenEvent);
}
function updateEndGameEvent() {
    if (gameState != "endGame") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateEndGameEvent);
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
    checkButtonsOver();
    requestAnimFrame(updateSplashScreenEvent);
}
function updateStartScreenEvent() {
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
    ctx.fillText("v1.0.6", canvas.width / 2, canvas.height - 10);
    checkButtonsOver();
    requestAnimFrame(updateStartScreenEvent);
}
function updateLoaderEvent() {
    if (gameState != "load") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updatePauseEvent() {
    if (gameState != "pause") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updatePauseEvent);
}
function addDirectText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (_col === void 0) { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(_str, _x, _y);
}
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
    userInput.mouseX = -100;
    userInput.mouseY = -100;
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
    oImageIds.logo = "id2";
    preAssetLib.onReady(initLoadAssets);
}
function initLangSelect() {
    var oImgData;
    var j;
    var k;
    var gap = 10;
    var tileWidthNum = 0;
    var tileHeightNum = 0;
    var butScale = 1;
    for (var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        if ((i + 1) * (oImgData.img.width * butScale) + (i + 2) * gap < canvas.width) {
            tileWidthNum++;
        }
        else {
            break;
        }
    }
    tileHeightNum = Math.ceil(aLangs.length / tileWidthNum);
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
function initLoadAssets() {
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
            id: "menuBg",
            file: "images/menuBg.jpg"
        }, {
            id: "townBg",
            file: "images/townBg.jpg"
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
            id: "jaggy",
            file: "images/jaggy.png"
        }, {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: { x: 278, y: 130, width: 276, height: 128 },
                id1: { x: 0, y: 390, width: 276, height: 128 },
                id10: { x: 278, y: 260, width: 92, height: 64 },
                id11: { x: 278, y: 326, width: 92, height: 64 },
                id12: { x: 278, y: 392, width: 60, height: 65 },
                id13: { x: 278, y: 459, width: 60, height: 65 },
                id2: { x: 372, y: 326, width: 59, height: 64 },
                id3: { x: 340, y: 392, width: 59, height: 64 },
                id4: { x: 340, y: 458, width: 59, height: 64 },
                id5: { x: 372, y: 260, width: 59, height: 64 },
                id6: { x: 0, y: 130, width: 276, height: 128 },
                id7: { x: 0, y: 0, width: 276, height: 128 },
                id8: { x: 0, y: 260, width: 276, height: 128 },
                id9: { x: 278, y: 0, width: 276, height: 128 }
            }
        }, {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: { x: 834, y: 0, width: 248, height: 445 },
                id1: { x: 700, y: 578, width: 284, height: 617 },
                id10: { x: 350, y: 931, width: 254, height: 283 },
                id2: { x: 350, y: 706, width: 348, height: 223 },
                id3: { x: 79, y: 1121, width: 64, height: 62 },
                id4: { x: 0, y: 1121, width: 77, height: 86 },
                id5: { x: 986, y: 633, width: 174, height: 215 },
                id6: { x: 986, y: 447, width: 174, height: 184 },
                id7: { x: 476, y: 0, width: 356, height: 576 },
                id8: { x: 0, y: 706, width: 348, height: 413 },
                id9: { x: 0, y: 0, width: 474, height: 704 }
            }
        }, {
            id: "splash",
            file: "images/splash_308x88.png",
            oAnims: {
                splash: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            }
        }, {
            id: "puff",
            file: "images/puff_101x87.png",
            oAnims: {
                splash: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            }
        }, {
            id: "dean",
            file: "images/dean_220x169.png",
            oAnims: {
                drive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                jump: [20, 21, 22, 23, 24, 25, 26, 27, 26, 25, 24, 23, 22, 21, 20, 19],
                land: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                crash: [44, 45, 46, 47, 48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]
            }
        }, {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: { x: 359, y: 664, width: 249, height: 166 },
                id1: { x: 264, y: 893, width: 261, height: 166 },
                id10: { x: 778, y: 672, width: 239, height: 166 },
                id11: { x: 610, y: 496, width: 240, height: 174 },
                id12: { x: 527, y: 1000, width: 249, height: 166 },
                id13: { x: 0, y: 1061, width: 262, height: 166 },
                id14: { x: 536, y: 0, width: 240, height: 166 },
                id15: { x: 778, y: 840, width: 239, height: 174 },
                id16: { x: 1092, y: 321, width: 200, height: 154 },
                id17: { x: 1060, y: 162, width: 200, height: 157 },
                id18: { x: 1019, y: 0, width: 200, height: 160 },
                id19: { x: 1019, y: 843, width: 200, height: 161 },
                id2: { x: 778, y: 1016, width: 238, height: 166 },
                id20: { x: 1019, y: 681, width: 200, height: 160 },
                id21: { x: 1019, y: 520, width: 200, height: 159 },
                id22: { x: 1018, y: 1016, width: 200, height: 157 },
                id23: { x: 858, y: 168, width: 200, height: 154 },
                id24: { x: 269, y: 1229, width: 90, height: 59 },
                id25: { x: 0, y: 1229, width: 171, height: 60 },
                id26: { x: 0, y: 289, width: 357, height: 411 },
                id27: { x: 0, y: 702, width: 357, height: 189 },
                id28: { x: 359, y: 289, width: 255, height: 205 },
                id29: { x: 0, y: 0, width: 534, height: 287 },
                id3: { x: 616, y: 168, width: 240, height: 174 },
                id30: { x: 777, y: 1184, width: 76, height: 76 },
                id31: { x: 699, y: 1168, width: 76, height: 76 },
                id32: { x: 536, y: 168, width: 76, height: 76 },
                id33: { x: 852, y: 520, width: 76, height: 76 },
                id34: { x: 760, y: 344, width: 76, height: 76 },
                id35: { x: 462, y: 1229, width: 46, height: 48 },
                id36: { x: 361, y: 1229, width: 50, height: 54 },
                id37: { x: 414, y: 832, width: 47, height: 58 },
                id38: { x: 359, y: 832, width: 53, height: 54 },
                id39: { x: 413, y: 1229, width: 47, height: 50 },
                id4: { x: 359, y: 496, width: 249, height: 166 },
                id40: { x: 610, y: 672, width: 158, height: 93 },
                id41: { x: 527, y: 1168, width: 170, height: 77 },
                id42: { x: 173, y: 1229, width: 94, height: 47 },
                id43: { x: 616, y: 344, width: 142, height: 134 },
                id5: { x: 264, y: 1061, width: 261, height: 166 },
                id6: { x: 778, y: 0, width: 239, height: 166 },
                id7: { x: 852, y: 344, width: 238, height: 174 },
                id8: { x: 527, y: 832, width: 249, height: 166 },
                id9: { x: 0, y: 893, width: 262, height: 166 }
            }
        }, {
            id: "langText",
            file: "json/text.json"
        }, {
            id: "numbers",
            file: "images/numbers_90x105.png"
        }, {
            id: "titleLogo",
            file: "images/title/" + curLang + ".png"
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
    oImageIds.titleChar01 = "id0";
    oImageIds.titleChar02 = "id1";
    oImageIds.logo = "id2";
    oImageIds.cupIcon = "id3";
    oImageIds.grubIcon = "id4";
    oImageIds.tut0 = "id5";
    oImageIds.tut1 = "id6";
    oImageIds.endChar01 = "id7";
    oImageIds.endChar02 = "id8";
    oImageIds.endChar03 = "id9";
    oImageIds.tutBg = "id10";
    oImageIds.platform00 = "id0";
    oImageIds.platform01 = "id1";
    oImageIds.platform02 = "id2";
    oImageIds.platform03 = "id3";
    oImageIds.platform04 = "id4";
    oImageIds.platform05 = "id5";
    oImageIds.platform06 = "id6";
    oImageIds.platform07 = "id7";
    oImageIds.platform20 = "id8";
    oImageIds.platform21 = "id9";
    oImageIds.platform22 = "id10";
    oImageIds.platform23 = "id11";
    oImageIds.platform24 = "id12";
    oImageIds.platform25 = "id13";
    oImageIds.platform26 = "id14";
    oImageIds.platform27 = "id15";
    oImageIds.platform10 = "id16";
    oImageIds.platform11 = "id17";
    oImageIds.platform12 = "id18";
    oImageIds.platform13 = "id19";
    oImageIds.platform14 = "id20";
    oImageIds.platform15 = "id21";
    oImageIds.platform16 = "id22";
    oImageIds.platform17 = "id23";
    oImageIds.rock0 = "id24";
    oImageIds.rock1 = "id25";
    oImageIds.bgRock0 = "id26";
    oImageIds.bgRock1 = "id27";
    oImageIds.bgRock2 = "id28";
    oImageIds.bgRock3 = "id29";
    oImageIds.tikiBub0 = "id30";
    oImageIds.tikiBub1 = "id31";
    oImageIds.tikiBub2 = "id32";
    oImageIds.tikiBub3 = "id33";
    oImageIds.tikiBub4 = "id34";
    oImageIds.tiki0 = "id35";
    oImageIds.tiki1 = "id36";
    oImageIds.tiki2 = "id37";
    oImageIds.tiki3 = "id38";
    oImageIds.tiki4 = "id39";
    oImageIds.fish0 = "id40";
    oImageIds.fish1 = "id41";
    oImageIds.fish2 = "id42";
    oImageIds.fish3 = "id43";
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
    assetLib.onReady(initSplash);
    gameState = "load";
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
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
    if (tempInnerWidth < tempInnerHeight) {
        maxW = maxWidth;
        maxH = maxHeight;
        minW = minWidth;
        minH = minHeight;
    }
    else {
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
    window.scrollTo(0, 0);
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
            if (gameState == "game") {
                music.volume(1);
            }
            else {
                music.volume(.5);
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
