var Utils;
(function (Utils) {
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (typeof _showBar === "undefined") { _showBar = true; }
            this.oAssetData = {
            };
            this.assetsLoaded = 0;
            this.textData = {
            };
            this.scale = 1;
            this.frameInc = 0;
            this.fps = 15;
            this.curFrame = 0;
            this.totalAssets = _aFileData.length;
            this.showBar = _showBar;
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
            if(_showBar) {
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
            for(var i = 0; i < _aFileData.length; i++) {
                if(_aFileData[i].file.indexOf(".json") != -1) {
                    this.loadJSON(_aFileData[i]);
                } else {
                    this.loadImage(_aFileData[i]);
                }
            }
        };
        AssetLoader.prototype.loadJSON = function (_oData) {
            var _this = this;
            var xobj = new XMLHttpRequest();
            xobj.open('GET', _oData.file, true);
            xobj.onreadystatechange = function () {
                if(xobj.readyState == 4 && xobj.status == 200) {
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
                _this.oAssetData[_oData.id] = {
                };
                _this.oAssetData[_oData.id].img = img;
                _this.oAssetData[_oData.id].oData = {
                };
                var aSpriteSize = _this.getSpriteSize(_oData.file);
                if(aSpriteSize[0] != 0) {
                    _this.oAssetData[_oData.id].oData.spriteWidth = aSpriteSize[0];
                    _this.oAssetData[_oData.id].oData.spriteHeight = aSpriteSize[1];
                } else {
                    _this.oAssetData[_oData.id].oData.spriteWidth = _this.oAssetData[_oData.id].img.width;
                    _this.oAssetData[_oData.id].oData.spriteHeight = _this.oAssetData[_oData.id].img.height;
                }
                if(_oData.oAnims) {
                    _this.oAssetData[_oData.id].oData.oAnims = _oData.oAnims;
                }
                if(_oData.oAtlasData) {
                    _this.oAssetData[_oData.id].oData.oAtlasData = _oData.oAtlasData;
                } else {
                    _this.oAssetData[_oData.id].oData.oAtlasData = {
                        none: {
                            x: 0,
                            y: 0,
                            width: _this.oAssetData[_oData.id].oData.spriteWidth,
                            height: _this.oAssetData[_oData.id].oData.spriteHeight
                        }
                    };
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
            while(canCont) {
                inc--;
                if(stage == 0 && this.isNumber(_file.charAt(inc))) {
                    sizeY = _file.charAt(inc) + sizeY;
                } else if(stage == 0 && sizeY.length > 0 && _file.charAt(inc) == "x") {
                    inc--;
                    stage = 1;
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && this.isNumber(_file.charAt(inc))) {
                    sizeX = _file.charAt(inc) + sizeX;
                } else if(stage == 1 && sizeX.length > 0 && _file.charAt(inc) == "_") {
                    canCont = false;
                    aNew = [
                        parseInt(sizeX), 
                        parseInt(sizeY)
                    ];
                } else {
                    canCont = false;
                    aNew = [
                        0, 
                        0
                    ];
                }
            }
            return aNew;
        };
        AssetLoader.prototype.isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        AssetLoader.prototype.checkLoadComplete = function () {
            if(this.assetsLoaded == this.totalAssets) {
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
    })();
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
            if (typeof _reset === "undefined") { _reset = true; }
            this.animId = _animId;
            this.animType = _type;
            if(_reset) {
                this.resetAnim();
            }
            switch(_type) {
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
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            _ctx.restore();
        };
        AnimSprite.prototype.renderSimple = function (_ctx) {
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][idx % max];
                var imgX = (this.curFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        if(this.animEndedFunc != null) {
                            this.animEndedFunc();
                        }
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
        };
        return AnimSprite;
    })();
    Utils.AnimSprite = AnimSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = (function () {
        function BasicSprite(_oImgData, _radius, _frame) {
            if (typeof _frame === "undefined") { _frame = 0; }
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
    })();
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
            _canvas.addEventListener('contextmenu', function (event) {
                return event.preventDefault();
            });
            _canvas.addEventListener("touchstart", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitDown(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitUp(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchcancel", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.hitCancel(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier);
                }
            }, false);
            _canvas.addEventListener("touchmove", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
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
                if(e.button == 2) {
                    return;
                }
                clearButtonOvers();
                _this.isDown = false;
                _this.hitCancel(e, Math.abs(e.pageX), Math.abs(e.pageY), 1);
                if(gameState == "game" && throwState == 1) {
                    butEventHandler("gameTouch", {
                        isBeingDragged: false,
                        isDown: false
                    });
                }
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        UserInput.prototype.hitDown = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            if(!hasFocus) {
                visibleResume();
            }
            if(this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                        this.aHitAreas[i].oData.hasLeft = false;
                        if(!this.aHitAreas[i].oData.isDown) {
                            this.aHitAreas[i].oData.isDown = true;
                            this.aHitAreas[i].oData.x = _posX;
                            this.aHitAreas[i].oData.y = _posY;
                            if((curHitTime - this.prevHitTime < 500 && (gameState != "game" || this.aHitAreas[i].id == "pause")) && isBugBrowser) {
                                return;
                            }
                            this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        }
                        break;
                    }
                } else {
                }
            }
            this.prevHitTime = curHitTime;
        };
        UserInput.prototype.hitUp = function (e, _posX, _posY, _identifer) {
            if(!ios9FirstTouch) {
                playSound("silence");
                ios9FirstTouch = true;
            }
            if(this.pauseIsOn) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    var aX = canvas.width * this.aHitAreas[i].align[0];
                    var aY = canvas.height * this.aHitAreas[i].align[1];
                    if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                        for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                            if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                j -= 1;
                            }
                        }
                        if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                            this.aHitAreas[i].oData.isDown = false;
                            if(this.aHitAreas[i].oData.multiTouch) {
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                            }
                        }
                        break;
                    }
                } else {
                }
            }
        };
        UserInput.prototype.hitCancel = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            _posX *= canvasScale;
            _posY *= canvasScale;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].oData.isDown) {
                    this.aHitAreas[i].oData.isDown = false;
                    this.aHitAreas[i].aTouchIdentifiers = new Array();
                    if(this.aHitAreas[i].oData.multiTouch) {
                        this.aHitAreas[i].oData.x = _posX;
                        this.aHitAreas[i].oData.y = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                    }
                }
            }
        };
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            if(this.pauseIsOn) {
                return;
            }
            _posX *= canvasScale;
            _posY *= canvasScale;
            this.mouseX = _posX;
            this.mouseY = _posY;
            if(_isDown) {
                for(var i = 0; i < this.aHitAreas.length; i++) {
                    if(this.aHitAreas[i].rect) {
                        var aX = canvas.width * this.aHitAreas[i].align[0];
                        var aY = canvas.height * this.aHitAreas[i].align[1];
                        if(_posX > aX + this.aHitAreas[i].area[0] && _posY > aY + this.aHitAreas[i].area[1] && _posX < aX + this.aHitAreas[i].area[2] && _posY < aY + this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if(this.aHitAreas[i].oData.isDraggable && !this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            if(this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                if(this.aHitAreas[i]) {
                                    this.aHitAreas[i].oData.isBeingDragged = false;
                                }
                            }
                        } else if(this.aHitAreas[i].oData.isDown && !this.aHitAreas[i].oData.hasLeft) {
                            for(var j = 0; j < this.aHitAreas[i].aTouchIdentifiers.length; j++) {
                                if(this.aHitAreas[i].aTouchIdentifiers[j] == _identifer) {
                                    this.aHitAreas[i].aTouchIdentifiers.splice(j, 1);
                                    j -= 1;
                                }
                            }
                            if(this.aHitAreas[i].aTouchIdentifiers.length == 0) {
                                this.aHitAreas[i].oData.hasLeft = true;
                                if(!this.aHitAreas[i].oData.isBeingDragged) {
                                    this.aHitAreas[i].oData.isDown = false;
                                }
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                        }
                    }
                }
            }
        };
        UserInput.prototype.keyDown = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
                    e.preventDefault();
                    this.aKeys[i].oData.isDown = false;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.checkKeyFocus = function () {
            window.focus();
            if(this.aKeys.length > 0) {
                window.removeEventListener('keydown', this.keyDownEvtFunc, false);
                window.removeEventListener('keyup', this.keyUpEvtFunc, false);
                window.addEventListener('keydown', this.keyDownEvtFunc, false);
                window.addEventListener('keyup', this.keyUpEvtFunc, false);
            }
        };
        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            this.aKeys.push({
                id: _id,
                callback: _callback,
                oData: _oCallbackData,
                keyCode: _keyCode
            });
            this.checkKeyFocus();
        };
        UserInput.prototype.removeKey = function (_id) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(this.aKeys[i].id == _id) {
                    this.aKeys.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _type, _oAreaData, _isUnique) {
            if (typeof _isUnique === "undefined") { _isUnique = false; }
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            if(_isUnique) {
                this.removeHitArea(_id);
            }
            if(!_oAreaData.scale) {
                _oAreaData.scale = 1;
            }
            if(!_oAreaData.align) {
                _oAreaData.align = [
                    0, 
                    0
                ];
            }
            var aTouchIdentifiers = new Array();
            switch(_type) {
                case "image":
                    var aRect;
                    aRect = new Array(_oAreaData.aPos[0] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale, _oAreaData.aPos[0] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2) * _oAreaData.scale, _oAreaData.aPos[1] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2) * _oAreaData.scale);
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: aRect,
                        align: _oAreaData.align
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect,
                        align: _oAreaData.align
                    });
                    break;
            }
        };
        UserInput.prototype.removeHitArea = function (_id) {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        UserInput.prototype.resetAll = function () {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                this.aHitAreas[i].oData.isDown = false;
                this.aHitAreas[i].oData.isBeingDragged = false;
                this.aHitAreas[i].aTouchIdentifiers = new Array();
            }
            this.isDown = false;
        };
        return UserInput;
    })();
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
                if(++this.updateInc >= this.updateFreq) {
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
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background() {
            this.x = 0;
            this.y = 0;
            this.targY = 0;
            this.inc = 0;
            this.renderState = null;
            this.oImgData = assetLib.getData("bgMain");
            this.bounceBg();
        }
        Background.prototype.bounceBg = function () {
            this.bounceScale = 1;
            TweenLite.to(this, 1, {
                bounceScale: 0,
                ease: "Cubic.easeOut"
            });
        };
        Background.prototype.render = function () {
            this.inc += 1 * delta;
            this.scale = 1 + Math.sin(this.inc) / 20 + 1 / 20;
            this.scale += this.bounceScale;
            if(canvas.width > canvas.height) {
                ctx.drawImage(this.oImgData.img, 0, ((1 - canvas.height / canvas.width) / 2) * this.oImgData.img.height, this.oImgData.img.width, (canvas.height / canvas.width) * this.oImgData.img.height, 0 - (this.scale - 1) * canvas.width / 2, 0 - (this.scale - 1) * canvas.height / 2, canvas.width * this.scale, canvas.height * this.scale);
            } else {
                ctx.drawImage(this.oImgData.img, ((1 - canvas.width / canvas.height) / 2) * this.oImgData.img.width, 0, (canvas.width / canvas.height) * this.oImgData.img.width, this.oImgData.img.width, 0 - (this.scale - 1) * canvas.width / 2, 0 - (this.scale - 1) * canvas.height / 2, canvas.width * this.scale, canvas.height * this.scale);
            }
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY0 = 0;
            this.posY1 = 0;
            this.posY2 = 0;
            this.posY3 = 0;
            this.posY4 = 0;
            this.numberSpace = 17;
            this.incY = 0;
            this.flareRot = 0;
            this.charPosGap = 280;
            this.flashInc = 0;
            this.scale0 = 0;
            this.scale1 = 0;
            this.scale2 = 0;
            this.swerveControlId = 0;
            this.prevBallSin = 0;
            this.oSplashLogoImgData = assetLib.getData("splashLogo");
            this.oTutElementsImgData = assetLib.getData("tutElements");
            this.oUiElementsImgData = assetLib.getData("uiElements");
            this.oUiButsImgData = assetLib.getData("uiButs");
            this.panelType = _panelType;
            this.aButs = _aButs;
            this.oScoreElementsImgData = assetLib.getData("scoreElements");
            this.oGameElementsImgData = assetLib.getData("gameElements");
        }
        Panel.prototype.update = function () {
            this.incY += 10 * delta;
        };
        Panel.prototype.startTween = function (_oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            var _this = this;
            switch(gameState) {
                case "start":
                    for(var i = 0; i < 13; i++) {
                        aCharIcons[i].scrollGap = i * this.charPosGap;
                    }
                    this.posY0 = 500;
                    this.tween0 = TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                        }
                    });
                    break;
                case "credits":
                case "pause":
                    this.posY0 = 500;
                    this.tween0 = TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                        }
                    });
                    break;
                case "userCharSelect":
                    this.posY0 = 500;
                    this.charX2 = 500;
                    this.tween0 = TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                        }
                    });
                    break;
                case "opCharSelect":
                    this.charX0 = 0;
                    this.posY0 = 500;
                    this.tween0 = TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                        }
                    });
                    break;
                case "challengeProgress":
                    this.posY0 = 500;
                    this.posY1 = 500;
                    this.posY2 = 500;
                    this.posY3 = 500;
                    this.posY4 = 0;
                    this.multiState = 0;
                    TweenLite.to(this, 1.2, {
                        posY0: 0,
                        delay: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.2, {
                        posY1: 0,
                        delay: .15,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.2, {
                        posY2: 0,
                        delay: .3,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.2, {
                        posY3: 0,
                        delay: .45,
                        ease: "Back.easeOut",
                        onComplete: function () {
                            TweenLite.to(_this, .5, {
                                posY4: 500,
                                delay: 0,
                                ease: "Quad.easeIn"
                            });
                            _this.multiState = 1;
                            _this.charX0 = 1.2;
                            playSound("shotScore1");
                            playSound("cheer4");
                            TweenLite.to(_this, 1, {
                                charX0: 1,
                                delay: 0,
                                ease: "Elastic.easeOut",
                                onComplete: function () {
                                    setTimeout(function () {
                                        userInput.removeHitArea("mute");
                                        initTeamIntro();
                                    }, 200);
                                }
                            });
                        }
                    });
                    break;
                case "teamIntro":
                    addFirework(canvas.width / 2 - 35 - ((3 - Math.floor(curLevel / 3)) % 2) * 150 + 1 * 110 + aCharIcons[1 + Math.floor(curLevel / 3) * 3].offsetX * .3, canvas.height / 2 - 200 + 150 * (3 - Math.floor(curLevel / 3)) + aCharIcons[1 + Math.floor(curLevel / 3) * 3].offsetY * .3, 4);
                    for(var j = 0; j < 3; j++) {
                        var tempId = j + Math.floor(curLevel / 3) * 3;
                        this["scale" + j] = .4;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                        this["charX" + j] = -35 - ((3 - Math.floor(curLevel / 3)) % 2) * 150 + j * 110 + aCharIcons[tempId].offsetX * .3;
                        this["posY" + j] = -200 + 150 * (3 - Math.floor(curLevel / 3)) + aCharIcons[tempId].offsetY * .3;
                    }
                    TweenLite.to(this, 1.5, {
                        charX0: -135,
                        posY0: -200,
                        scale0: .9,
                        delay: 0,
                        ease: "Back.easeInOut"
                    });
                    TweenLite.to(this, 1.5, {
                        charX1: 135,
                        posY1: -130,
                        scale1: .95,
                        delay: .2,
                        ease: "Back.easeInOut"
                    });
                    TweenLite.to(this, 1.5, {
                        charX2: -75,
                        posY2: 50,
                        scale2: 1,
                        delay: .4,
                        ease: "Back.easeInOut"
                    });
                    this.posY3 = 500;
                    TweenLite.to(this, .5, {
                        posY3: 0,
                        delay: 1.5,
                        ease: "Back.easeOut"
                    });
                    break;
                case "teamOutro":
                    this.charX0 = -135;
                    this.posY0 = -200;
                    this.charX1 = 135;
                    this.posY1 = -130;
                    this.charX2 = -75;
                    this.posY2 = 50;
                    this.scale0 = .3;
                    this.scale1 = .3;
                    this.scale2 = .3;
                    TweenLite.to(this, .5, {
                        scale0: .9,
                        delay: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, .5, {
                        scale1: .95,
                        delay: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, .5, {
                        scale2: 1,
                        delay: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.0, {
                        posY0: 500,
                        delay: 2,
                        ease: "Back.easeIn"
                    });
                    TweenLite.to(this, 1.0, {
                        posY1: 500,
                        delay: 2.2,
                        ease: "Back.easeIn"
                    });
                    TweenLite.to(this, 1.0, {
                        posY2: 500,
                        delay: 2.4,
                        ease: "Back.easeIn",
                        onComplete: function () {
                            if(curLevel < 12) {
                                initChallengeProgressScreen();
                            } else {
                                initCupWinner();
                            }
                        }
                    });
                    this.posY3 = 500;
                    TweenLite.to(this, .5, {
                        posY3: 0,
                        delay: .3,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1, {
                        posY3: 500,
                        delay: 2.7,
                        ease: "Back.easeIn"
                    });
                    break;
                case "gameIntro":
                    this.chatOrder = parseFloat(assetLib.textData.langText[this.getStartChatName() + "A"]["order"]);
                    this.charX0 = 500;
                    this.charX1 = 0;
                    this.charX2 = 500;
                    playSound("shotScore2");
                    playSound("cheer2");
                    setTimeout(function () {
                        playSound("shotScore3");
                    }, 1500);
                    TweenLite.to(this, 1, {
                        charX0: 0,
                        delay: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                            playSound("jump");
                        }
                    });
                    TweenLite.to(this, 1, {
                        charX1: 1,
                        delay: 1,
                        ease: "Elastic.easeOut"
                    });
                    TweenLite.to(this, 1, {
                        charX2: 0,
                        delay: 1.5,
                        ease: "Back.easeOut"
                    });
                    break;
                case "game":
                    this.posY0 = 500;
                    this.posY3 = 0;
                    if(shotNum == 0) {
                        this.posY1 = -300;
                        TweenLite.to(this, 1.5, {
                            posY1: 0,
                            ease: "Bounce.easeOut"
                        });
                    } else {
                        this.posY1 = 500;
                        TweenLite.to(this, .5, {
                            posY1: 0,
                            ease: "Quint.easeOut"
                        });
                    }
                    if(firstGoState == 0) {
                        this.tutAnim0 = new Elements.TutAnim0();
                        this.charX0 = 500;
                        TweenLite.to(this, .3, {
                            charX0: 0,
                            ease: "Quad.easeOut"
                        });
                    }
                    break;
                case "gameOver":
                    loseTextId = (loseTextId + 1) % 3;
                    this.posY0 = 500;
                    this.posY1 = 500;
                    this.posY2 = 500;
                    TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, .75, {
                        delay: .2,
                        posY1: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.5, {
                        delay: .4,
                        posY2: 0,
                        ease: "Quint.easeOut"
                    });
                    break;
                case "cupWinner":
                    this.posY0 = 500;
                    this.posY1 = 500;
                    this.posY2 = 500;
                    TweenLite.to(this, .75, {
                        posY0: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, .75, {
                        delay: .2,
                        posY1: 0,
                        ease: "Back.easeOut"
                    });
                    TweenLite.to(this, 1.5, {
                        delay: .4,
                        posY2: 0,
                        ease: "Quint.easeOut"
                    });
                    break;
            }
            this.butsY = 500;
            TweenLite.to(this, .5, {
                butsY: 0,
                ease: "Quint.easeOut"
            });
            this.flashInc = 1;
            TweenLite.to(this, 1, {
                flashInc: 0,
                ease: "Quad.easeOut"
            });
        };
        Panel.prototype.showSwerveTut = function () {
            userInput.removeKey("swerveRight");
            userInput.removeKey("swerveLeft");
            userInput.removeHitArea("gameTouch");
            userInput.removeHitArea("pause");
            panel.removeBut(oImageIds.pauseBut);
            if(hasTilt) {
                if((window).DeviceOrientationEvent) {
                    window.removeEventListener("deviceorientation", devOrientHandler, false);
                }
            }
            var oNextBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    0, 
                    0
                ],
                align: [
                    .5, 
                    .85
                ],
                id: oImageIds.playBut,
                idOver: oImageIds.playButOver,
                flash: true
            };
            userInput.addHitArea("nextFromTutorial1", butEventHandler, null, "image", oNextBut);
            panel.aButs = new Array(oNextBut);
            addMuteBut(panel.aButs);
            this.tutAnim0 = new Elements.TutAnim1();
            this.posY2 = -50;
            this.swerveControlId = 1;
            this.charX0 = 500;
            TweenLite.to(this, .3, {
                charX0: 0,
                ease: "Quad.easeOut"
            });
            this.moveSwerveTutBallRight();
        };
        Panel.prototype.moveSwerveTutBallRight = function () {
            var _this = this;
            TweenLite.to(this, .5, {
                swerveControlId: 0,
                ease: "Quad.easeInOut"
            });
            this.tween0 = TweenLite.to(this, 2, {
                posY2: 50,
                ease: "Quad.easeInOut",
                onComplete: function () {
                    TweenLite.to(_this, .5, {
                        swerveControlId: 1,
                        ease: "Quad.easeInOut"
                    });
                    _this.tween0 = TweenLite.to(_this, 2, {
                        posY2: -50,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            _this.moveSwerveTutBallRight();
                        }
                    });
                }
            });
        };
        Panel.prototype.showScores = function (_resetState) {
            var _this = this;
            this.scoreResult = this.getThrowResult();
            if(this.scoreResult == 0) {
                playSound("shotMiss");
            } else if(this.scoreResult > 0 && this.scoreResult < 10 || this.scoreResult == 12) {
                playSound("shotScore" + Math.floor(Math.random() * 5));
            } else {
                playSound("shotStrike");
            }
            this.posY0 = 500;
            TweenLite.to(this, .5, {
                posY0: 0,
                ease: "Back.easeOut"
            });
            this.posY3 = 0;
            TweenLite.to(this, .5, {
                posY3: 1,
                ease: "Back.easeOut"
            });
            TweenLite.to(this, .5, {
                delay: 2,
                posY3: 0,
                ease: "Back.easeIn"
            });
            TweenLite.to(this, .5, {
                delay: 2,
                posY0: 500,
                ease: "Back.easeIn",
                onComplete: function () {
                    prepNextShot(_resetState);
                    _this.flashInc = 1;
                    TweenLite.to(_this, 1, {
                        flashInc: 0,
                        ease: "Quad.easeOut"
                    });
                    if(shotNum == 0) {
                        _this.posY1 = -300;
                        TweenLite.to(_this, 1.5, {
                            posY1: 0,
                            ease: "Bounce.easeOut"
                        });
                    } else {
                        _this.posY1 = 500;
                        TweenLite.to(_this, .5, {
                            posY1: 0,
                            ease: "Quint.easeOut"
                        });
                    }
                }
            });
        };
        Panel.prototype.getStartChatName = function () {
            var tempCurChar = curChar;
            var tempOpChar = checkCharId(opChar);
            if(tempCurChar < tempOpChar) {
                this.chatFlip = false;
                return "startChat" + tempCurChar.toString() + "-" + tempOpChar.toString();
            } else {
                this.chatFlip = true;
                return "startChat" + checkCharId(opChar).toString() + "-" + tempCurChar.toString();
            }
        };
        Panel.prototype.tweenInUserUnlockInfo = function () {
            if(this.tween0) {
                this.tween0.kill();
            }
            this.tween0 = TweenLite.to(this, .3, {
                posY0: 203,
                ease: "Quad.easeOut"
            });
            if(this.tween2) {
                this.tween2.kill();
            }
            if(this.tween1) {
                this.tween1.kill();
            }
            this.charX0 = 500;
            this.charX2 = 500;
            this.tween2 = TweenLite.to(this, .5, {
                charX2: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.tweenInOpUnlockInfo = function () {
            if(this.tween0) {
                this.tween0.kill();
            }
            this.tween0 = TweenLite.to(this, .3, {
                posY0: 203,
                ease: "Quad.easeOut"
            });
            if(this.tween2) {
                this.tween2.kill();
            }
            if(this.tween1) {
                this.tween1.kill();
            }
            this.charX1 = 500;
            this.charX2 = 500;
            this.tween2 = TweenLite.to(this, .5, {
                charX2: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.tweenInUserChar = function () {
            if(this.tween0) {
                this.tween0.kill();
            }
            this.tween0 = TweenLite.to(this, .3, {
                posY0: 203,
                ease: "Quad.easeOut"
            });
            if(this.tween2) {
                this.tween2.kill();
            }
            if(this.tween1) {
                this.tween1.kill();
            }
            this.charX0 = 500;
            this.charX2 = 500;
            this.tween1 = TweenLite.to(this, .5, {
                charX0: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.tweenInOpChar = function () {
            if(this.tween0) {
                this.tween0.kill();
            }
            this.tween0 = TweenLite.to(this, .3, {
                posY0: 203,
                ease: "Quad.easeOut"
            });
            if(this.tween2) {
                this.tween2.kill();
            }
            if(this.tween1) {
                this.tween1.kill();
            }
            this.charX1 = 500;
            this.charX2 = 500;
            this.tween1 = TweenLite.to(this, .5, {
                charX1: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.switchBut = function (_id0, _id1, _id1Over, _aNewAPos, _aNewAlign) {
            if (typeof _aNewAPos === "undefined") { _aNewAPos = null; }
            if (typeof _aNewAlign === "undefined") { _aNewAlign = null; }
            var oButData = null;
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].id == _id0) {
                    this.aButs[i].id = _id1;
                    this.aButs[i].idOver = _id1Over;
                    oButData = this.aButs[i];
                    if(_aNewAPos) {
                        this.aButs[i].aPos = _aNewAPos;
                    }
                    if(_aNewAlign) {
                        this.aButs[i].align = _aNewAlign;
                    }
                }
            }
            return oButData;
        };
        Panel.prototype.render = function (_butsOnTop) {
            if (typeof _butsOnTop === "undefined") { _butsOnTop = true; }
            if(!_butsOnTop) {
                this.addButs(ctx);
            }
            switch(gameState) {
                case "rotated":
                    var oRotateIconImgData = assetLib.getData("rotateIcon");
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(oRotateIconImgData.img, canvas.width / 2 - oRotateIconImgData.img.width / 2, canvas.height / 2 - oRotateIconImgData.img.height / 2);
                    break;
                case "splash":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY0);
                    break;
                case "start":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 145 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, 210, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 10, 10 - this.butsY, bWidth, bHeight);
                    var tempImgData = assetLib.getData("titleLogo");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - (tempImgData.img.width / 2) - (this.posY0 * 3) / 2 + Math.sin(this.incY / 2) * 5, 15 - this.posY0 - (this.posY0 * 3) / 2 - Math.sin(this.incY / 2) * 5, tempImgData.img.width + (this.posY0 * 3) - Math.sin(this.incY / 2) * 10, tempImgData.img.height + (this.posY0 * 3) + Math.sin(this.incY / 2) * 10);
                    for(var i = 0; i < 13; i++) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].height;
                        aCharIcons[i].scrollGap -= (300) * delta;
                        if(aCharIcons[i].scrollGap < -1000) {
                            aCharIcons[i].scrollGap += this.charPosGap * 13;
                        }
                        var tempScale = .9 - aCharIcons[i].scrollGap / 1700;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, aCharIcons[i].scrollGap + aCharIcons[i].offsetX * tempScale - (bWidth / 2) * tempScale, canvas.height * .61 + aCharIcons[i].offsetY * tempScale - (bHeight / 2) * tempScale - Math.abs(Math.sin((canvas.width / 2 - aCharIcons[i].scrollGap) / 120) * 70) - this.posY0, bWidth * tempScale, bHeight * tempScale);
                    }
                    for(var i = 0; i < 13; i++) {
                        var tempScale = 1 - aCharIcons[i].scrollGap / 1700;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, aCharIcons[i].scrollGap + aCharIcons[i].offsetX * tempScale - (bWidth / 2) * tempScale - (canvas.width / 2 - aCharIcons[i].scrollGap) * .1 + 150, canvas.height * .61 + aCharIcons[i].offsetY * tempScale - (bHeight / 2) * tempScale - Math.abs(Math.sin((canvas.width / 2 - aCharIcons[i].scrollGap) / 70) * 100) - this.posY0 + 95, bWidth * tempScale, bHeight * tempScale);
                    }
                    addText(0, 31, 210, "center", canvas.width / 2 - 120, canvas.height - 30 + this.butsY, "singlePlayer", "#FFFFFF");
                    addText(0, 31, 210, "center", canvas.width / 2 + 120, canvas.height - 30 + this.butsY, "twoPlayers", "#FFFFFF");
                    break;
                case "1PStart":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 145 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, 210, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.cnLogo].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 10, 10 - this.butsY, bWidth, bHeight);
                    var tempImgData = assetLib.getData("titleLogo");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - (tempImgData.img.width / 2) - (this.posY0 * 3) / 2 + Math.sin(this.incY / 2) * 5, 15 - this.posY0 - (this.posY0 * 3) / 2 - Math.sin(this.incY / 2) * 5, tempImgData.img.width + (this.posY0 * 3) - Math.sin(this.incY / 2) * 10, tempImgData.img.height + (this.posY0 * 3) + Math.sin(this.incY / 2) * 10);
                    for(var i = 0; i < 13; i++) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + i]].height;
                        aCharIcons[i].scrollGap -= (300) * delta;
                        if(aCharIcons[i].scrollGap < -1000) {
                            aCharIcons[i].scrollGap += this.charPosGap * 13;
                        }
                        var tempScale = .9 - aCharIcons[i].scrollGap / 1700;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, aCharIcons[i].scrollGap + aCharIcons[i].offsetX * tempScale - (bWidth / 2) * tempScale, canvas.height * .61 + aCharIcons[i].offsetY * tempScale - (bHeight / 2) * tempScale - Math.abs(Math.sin((canvas.width / 2 - aCharIcons[i].scrollGap) / 120) * 70) - this.posY0, bWidth * tempScale, bHeight * tempScale);
                    }
                    for(var i = 0; i < 13; i++) {
                        var tempScale = 1 - aCharIcons[i].scrollGap / 1700;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + i]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, aCharIcons[i].scrollGap + aCharIcons[i].offsetX * tempScale - (bWidth / 2) * tempScale - (canvas.width / 2 - aCharIcons[i].scrollGap) * .1 + 150, canvas.height * .61 + aCharIcons[i].offsetY * tempScale - (bHeight / 2) * tempScale - Math.abs(Math.sin((canvas.width / 2 - aCharIcons[i].scrollGap) / 70) * 100) - this.posY0 + 95, bWidth * tempScale, bHeight * tempScale);
                    }
                    addText(0, 31, 210, "center", canvas.width / 2 - 120, canvas.height - 30 + this.butsY, "teamChallenge", "#FFFFFF");
                    addText(0, 31, 210, "center", canvas.width / 2 + 120, canvas.height - 30 + this.butsY, "quickGame", "#FFFFFF");
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    var tempImgData = assetLib.getData("info");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - tempImgData.img.width / 2, canvas.height / 2 - tempImgData.img.height / 2 + this.posY0, tempImgData.img.width, tempImgData.img.height);
                    addText(0, 31, 1000, "center", canvas.width / 2, canvas.height / 2 - 170 + this.posY0, "producedFor", "#FFFFFF");
                    addText(0, 31, 1000, "center", canvas.width / 2, canvas.height / 2 + 83 + this.posY0, "createdBy", "#FFFFFF");
                    addText(0, 31, 1000, "right", canvas.width - 20, canvas.height - 90 + this.butsY, "resetData", "#FFFFFF");
                    ctx.fillStyle = "#ffffff";
                    ctx.textAlign = "center";
                    ctx.font = "15px Helvetica";
                    ctx.fillText("v1.04", canvas.width / 2, canvas.height - 9 + this.butsY);
                    break;
                case "userCharSelect":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, 245, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 245 - bHeight / 2 - this.posY0, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 258 - this.posY0, "selectYourPlayer" + playerNum, "#000000");
                    if(curChar < 99 && this.charX0 < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                        var tempScale = (2 + Math.sin(this.incY / 2) / 4);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale + this.charX0, canvas.height * .3 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + aCharIcons[curChar].offsetX + this.charX0 - tempScale / 2, canvas.height * .3 - bHeight / 2 + aCharIcons[curChar].offsetY + tempScale / 2, bWidth + tempScale, bHeight - tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[curChar].panelId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[curChar].panelId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[curChar].panelId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[curChar].panelId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.charX0 - 0, canvas.height * .3 - bHeight / 2 + 115, bWidth, bHeight);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.charX0 + 155, canvas.height * .3 - bHeight / 2 + 81, bWidth, bHeight);
                        addText(1, 40, 220, "center", canvas.width / 2 - this.charX0, canvas.height * .3 + 128, "char" + curChar, "#FFFFFF");
                        if(gameType == 0 && playerNum == 1) {
                            addText(0, 35, 200, "left", 10 + this.charX0, canvas.height * .3 - 20, "progress", "#000000");
                            addDirectText(1, 35, "left", 10 + this.charX0, canvas.height * .3 + 20, saveDataHandler.aLevelStore[curChar] + "/12", "#000000");
                        }
                    }
                    if(this.charX2 < 500) {
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.charX2 - tempScale / 2, canvas.height * .3 - bHeight / 2 + tempScale / 2, bWidth + tempScale, bHeight - tempScale);
                        addText(1, 40, 500, "center", canvas.width / 2 - this.charX2, canvas.height * .3 + 15, "unlock" + curChar, "#000000");
                    }
                    if(saveDataHandler.aLevelStore[curChar] == 12) {
                        addText(0, 31, 200, "center", canvas.width - 110 + this.charX0, canvas.height - 160, "restart", "#000000");
                    }
                    break;
                case "opCharSelect":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, 245, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 245 - bHeight / 2 - this.posY0, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 258 - this.posY0, "selectOpponent" + playerNum, "#000000");
                    if(opChar < 99 && this.charX1 < 500) {
                        if(playerNum == 1) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                            var tempScale = (2 + Math.sin(this.incY / 2) / 4);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 390 - (bWidth / 2) * tempScale + this.charX1, canvas.height * .3 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["slidePanel" + getOpPanelId()]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["slidePanel" + getOpPanelId()]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["slidePanel" + getOpPanelId()]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["slidePanel" + getOpPanelId()]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 225 + this.charX1, canvas.height * .3 - bHeight / 2 - 10, bWidth, bHeight);
                            for(var i = 0; i < 3; i++) {
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "0"]].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "0"]].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "0"]].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "0"]].height;
                                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 225 + this.charX1 + 18, canvas.height * .3 - 100 + 79 * i, bWidth, bHeight);
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "1"]].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "1"]].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "1"]].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["statBar" + i + "1"]].height;
                                ctx.drawImage(this.oUiElementsImgData.img, bX + (1 - aCharIcons[opChar]["stat" + i]) * bWidth, bY, aCharIcons[opChar]["stat" + i] * bWidth, bHeight, canvas.width - 225 + this.charX1 + 22, canvas.height * .3 - 100 + 79 * i, aCharIcons[opChar]["stat" + i] * bWidth, bHeight);
                                addText(2, 28, 200, "left", canvas.width - 200 + this.charX1, canvas.height * .3 - 32 + 79 * i, "stat" + i, "#000000");
                            }
                            tempScale = (Math.sin(this.incY / 2) * 3);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 390 - bWidth / 2 + aCharIcons[opChar].offsetX + this.charX1 * 1.75 - tempScale / 2, canvas.height * .3 - bHeight / 2 + aCharIcons[opChar].offsetY + tempScale / 2, bWidth + tempScale, bHeight - tempScale);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width - 290 - bWidth / 2 + this.charX1 * 1.2, canvas.height * .3 - bHeight / 2 + 86, bWidth, bHeight);
                            addText(1, 40, 200, "left", canvas.width - 200 + this.charX1, canvas.height * .3 - 124, "char" + opChar, "#FFFFFF");
                        } else {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                            var tempScale = (2 + Math.sin(this.incY / 2) / 4);
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale + this.charX1, canvas.height * .3 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
                            tempScale = (Math.sin(this.incY / 2) * 3);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + opChar]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + aCharIcons[opChar].offsetX + this.charX1 - tempScale / 2, canvas.height * .3 - bHeight / 2 + aCharIcons[opChar].offsetY + tempScale / 2, bWidth + tempScale, bHeight - tempScale);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[opChar].panelId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[opChar].panelId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[opChar].panelId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[opChar].panelId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.charX1 - 0, canvas.height * .3 - bHeight / 2 + 115, bWidth, bHeight);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + opChar]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - this.charX1 + 155, canvas.height * .3 - bHeight / 2 + 81, bWidth, bHeight);
                            addText(1, 40, 220, "center", canvas.width / 2 - this.charX1, canvas.height * .3 + 128, "char" + opChar, "#FFFFFF");
                        }
                    }
                    if(this.charX2 < 500) {
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeIconMystery].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.charX2 - tempScale / 2, canvas.height * .3 - bHeight / 2 + tempScale / 2, bWidth + tempScale, bHeight - tempScale);
                        addText(1, 40, 500, "center", canvas.width / 2 + this.charX2, canvas.height * .3, "unlock" + opChar, "#000000");
                    }
                    break;
                case "challengeProgress":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.butsY, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "challengeProgress", "#000000");
                    for(var i = 0; i < 4 - Math.floor(Math.floor(curLevel / 3) / 3); i++) {
                        if(this["posY" + i] != 500) {
                            var tempId;
                            var tempSinX = Math.sin(this.incY / 3 + i * 10) * 10;
                            var tempSinY = Math.sin(this.incY / 4 + i * 10) * 10;
                            var tempBounce = 1;
                            var tempDropY = 0;
                            if(this.multiState == 1 && Math.floor(curLevel / 3) == (3 - i)) {
                                tempId = i;
                                this.renderFlare(canvas.width / 2 + 75 - (i % 2) * 150, canvas.height / 2 - 225 + 150 * i, 3);
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                                var tempScale = (2 + Math.sin(this.incY / 2) / 4);
                                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale + 75 - (i % 2) * 150, canvas.height / 2 - (bHeight / 2) * tempScale - 225 + 150 * i, bWidth * tempScale, bHeight * tempScale);
                                tempBounce = this.charX0;
                            } else if(i - (3 - Math.floor(curLevel / 3)) > 1) {
                                continue;
                            } else if(3 - Math.floor(curLevel / 3) < i) {
                                tempId = i;
                                tempDropY = this.posY4;
                            } else {
                                tempId = 4;
                            }
                            if(tempDropY != 500) {
                                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["teamPanel" + tempId]].x;
                                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["teamPanel" + tempId]].y;
                                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["teamPanel" + tempId]].width;
                                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["teamPanel" + tempId]].height;
                                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempBounce + 75 - (i % 2) * 150 + tempSinX, canvas.height / 2 - (bHeight / 2) * tempBounce - 225 + 150 * i - tempSinY + this["posY" + i] + tempDropY, bWidth * tempBounce, bHeight * tempBounce);
                                var tempWiggle;
                                for(var j = 0; j < 3; j++) {
                                    if(this.multiState == 1 && Math.floor(curLevel / 3) == (3 - i)) {
                                        tempId = j + Math.floor(curLevel / 3) * 3;
                                        tempWiggle = Math.abs(Math.sin(this.incY + j) * 10);
                                    } else if(3 - Math.floor(curLevel / 3) < i) {
                                        tempId = curLevel - 3 + j;
                                        tempWiggle = 0;
                                    } else {
                                        tempId = 13;
                                        tempWiggle = 0;
                                    }
                                    tempId = checkCharId(tempId);
                                    var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                                    var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                                    var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                                    var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                                    ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) - 35 - (i % 2) * 150 + j * 110 + tempSinX + aCharIcons[tempId].offsetX * .3, canvas.height / 2 - (bHeight / 2) - 200 + 150 * i - tempSinY + this["posY" + i] + aCharIcons[tempId].offsetY * .3 - tempWiggle + tempDropY, bWidth, bHeight);
                                    if(i == 0) {
                                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.happyCup].x;
                                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.happyCup].y;
                                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.happyCup].width;
                                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.happyCup].height;
                                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempBounce + 75 - (i % 2) * 150 + tempSinX + 165, canvas.height / 2 - (bHeight / 2) * tempBounce - 225 + 150 * i - tempSinY + this["posY" + i] + tempDropY - 70, bWidth, bHeight);
                                    }
                                }
                                if(this.multiState == 1 && Math.floor(curLevel / 3) == (3 - i)) {
                                    addText(1, 40, 320, "left", canvas.width / 2 - 80 - (i % 2) * 150 + tempSinX, canvas.height / 2 - 282 + 150 * i - tempSinY + this["posY" + i] + tempDropY, "team" + (3 - i), "#ffffff");
                                } else {
                                    addText(1, 40, 320, "left", canvas.width / 2 - 80 - (i % 2) * 150 + tempSinX, canvas.height / 2 - 282 + 150 * i - tempSinY + this["posY" + i] + tempDropY, "teamNum" + (3 - i), "#ffffff");
                                }
                            }
                        }
                    }
                    break;
                case "teamIntro":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, canvas.height / 2 - 50, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                    var tempScale = (2 + Math.sin(this.incY / 2) / 4) * (1 - this.posY3 / 500);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 - (bHeight / 2) * tempScale - 50, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.butsY, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "team" + Math.floor(curLevel / 3), "#000000");
                    for(var j = 0; j < 3; j++) {
                        if(this["posY" + j] < 500) {
                            tempId = j + Math.floor(curLevel / 3) * 3;
                            var tempSinX = Math.sin(this.incY / 3 + j * 10) * 10;
                            var tempSinY = Math.sin(this.incY / 4 + j * 10) * 10;
                            tempId = checkCharId(tempId);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this["charX" + j] - (bWidth / 2) * this["scale" + j] + tempSinX, canvas.height / 2 + this["posY" + j] - (bHeight / 2) * this["scale" + j] - tempSinY, bWidth * this["scale" + j], bHeight * this["scale" + j]);
                        }
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(curLevel / 3) * 3].panelId + "0"]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(curLevel / 3) * 3].panelId + "0"]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(curLevel / 3) * 3].panelId + "0"]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(curLevel / 3) * 3].panelId + "0"]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 290 + this.posY3, canvas.width, bHeight);
                    addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height - 186 + this.posY3, "teamIntro" + Math.floor(curLevel / 3), "#000000");
                    break;
                case "teamOutro":
                    var tempCurLevel = curLevel - 1;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, canvas.height / 2 - 50, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                    var tempScale = (2 + Math.sin(this.incY / 2) / 4) * (1 - this.posY3 / 500);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height / 2 - (bHeight / 2) * tempScale - 50, bWidth * tempScale, bHeight * tempScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.butsY, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "team" + Math.floor(tempCurLevel / 3), "#000000");
                    for(var j = 0; j < 3; j++) {
                        if(this["posY" + j] < 500) {
                            tempId = j + Math.floor(tempCurLevel / 3) * 3;
                            var tempSinX = Math.sin(this.incY / 3 + j * 10) * 10;
                            var tempSinY = Math.sin(this.incY / 4 + j * 10) * 10;
                            tempId = checkCharId(tempId);
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + this["charX" + j] - (bWidth / 2) * this["scale" + j] + tempSinX, canvas.height / 2 + this["posY" + j] - (bHeight / 2) * this["scale" + j] - tempSinY, bWidth * this["scale" + j], bHeight * this["scale" + j]);
                        }
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(tempCurLevel / 3) * 3].panelId + "0"]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(tempCurLevel / 3) * 3].panelId + "0"]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(tempCurLevel / 3) * 3].panelId + "0"]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempId = Math.floor(tempCurLevel / 3) * 3].panelId + "0"]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 290 + this.posY3, canvas.width, bHeight);
                    addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height - 186 + this.posY3, "teamOutro" + Math.floor(tempCurLevel / 3), "#000000");
                    break;
                case "gameIntro":
                    var tempCurChar = curChar;
                    var tempOpChar = checkCharId(opChar);
                    if(this.chatOrder == 0) {
                        if(this.chatFlip) {
                            tempCurChar = checkCharId(opChar);
                            tempOpChar = curChar;
                        }
                    } else {
                        if(!this.chatFlip) {
                            tempCurChar = checkCharId(opChar);
                            tempOpChar = curChar;
                        }
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    this.renderFlare(canvas.width / 2, canvas.height / 2 - 50, 3);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                    var tempScale = (1 + Math.sin(this.incY / 2) / 4) * this.charX1;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - 90, canvas.height * .4 - (bHeight / 2) * tempScale + 103, bWidth * tempScale, bHeight * tempScale);
                    tempScale = (Math.sin(this.incY / 2) * 3);
                    var tempIconScale = .9;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempCurChar]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempCurChar]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempCurChar]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempCurChar]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[tempCurChar].offsetX - (tempScale / 2) * tempIconScale - 120 - this.charX0, canvas.height * .4 - (bHeight / 2) * tempIconScale + aCharIcons[tempCurChar].offsetY + (tempScale / 2) * tempIconScale - 170, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempCurChar]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempCurChar]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempCurChar]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempCurChar]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 10 - this.charX0 * 2, canvas.height * .4 - bHeight / 2 - 80 - Math.abs(Math.sin(this.incY / 2 + 1) * 15), bWidth, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempCurChar].panelId + "1"]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempCurChar].panelId + "1"]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempCurChar].panelId + "1"]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[tempCurChar].panelId + "1"]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .4 - 130 - this.charX0 / 4, canvas.width, bHeight);
                    if(this.chatOrder == 0) {
                        addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .4 - 26 - this.charX0 / 4, this.getStartChatName() + "A", "#000000");
                    } else {
                        addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .4 - 26 - this.charX0 / 4, this.getStartChatName() + "B", "#000000");
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[tempCurChar].panelId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[tempCurChar].panelId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[tempCurChar].panelId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[tempCurChar].panelId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 105 - this.charX0 / 2, canvas.height * .4 - bHeight / 2 + 20 - this.charX0 / 2, bWidth, bHeight);
                    addText(1, 40, 220, "center", canvas.width / 2 - 105 - this.charX0 / 2, canvas.height * .4 + 35 - this.charX0 / 2, "char" + tempCurChar, "#FFFFFF");
                    if(this.charX2 < 500) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[tempOpChar].offsetX + (tempScale / 2) * tempIconScale + 110 + this.charX2, canvas.height * .4 - (bHeight / 2) * tempIconScale + aCharIcons[tempOpChar].offsetY - (tempScale / 2) * tempIconScale + 140, (bWidth - tempScale) * tempIconScale, (bHeight + tempScale) * tempIconScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempOpChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempOpChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempOpChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + tempOpChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 - 20 + this.charX2 * 2, canvas.height * .4 - bHeight / 2 + 235 - Math.abs(Math.sin(this.incY / 2) * 15), bWidth, bHeight);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .4 + 225 - this.charX2 / 4, canvas.width, bHeight);
                        if(this.chatOrder == 0) {
                            addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .4 + 328 - this.charX2 / 4, this.getStartChatName() + "B", "#000000");
                        } else {
                            addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .4 + 328 - this.charX2 / 4, this.getStartChatName() + "A", "#000000");
                        }
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["namePanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + 100 - this.charX2 / 2, canvas.height * .4 - bHeight / 2 + 265 - this.charX2 / 2, bWidth, bHeight);
                        addText(1, 40, 220, "center", canvas.width / 2 + 100 - this.charX2 / 2, canvas.height * .4 + 280 - this.charX2 / 2, "char" + tempOpChar, "#FFFFFF");
                    }
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vs].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vs].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vs].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.vs].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * this.charX1 - 90, canvas.height * .4 - (bHeight / 2) * this.charX1 + 103, bWidth * this.charX1, bHeight * this.charX1);
                    break;
                case "game":
                    if(this.posY0 != 500) {
                        ctx.fillStyle = "rgba(255, 255, 255, " + (this.posY3 / 2) + ")";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    var tempId = curChar;
                    if(whosGo == 1) {
                        tempId = checkCharId(opChar);
                    }
                    var scoreX = canvas.width / 2 - 175;
                    var tempTourn = Math.min(Math.floor(curLevel / 3), 2);
                    if(gameType == 1) {
                        tempTourn = 2;
                    }
                    var tempScale = .7;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.posY1, bWidth, bHeight);
                    addText(1, 40, 350, "center", canvas.width / 2, 55 - this.posY1, "turn" + tempId, "#000000");
                    if(playerNum == 2) {
                        if(whosGo == 0) {
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].height;
                            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 100 - bHeight / 2 - this.posY1 * 1.3, bWidth, bHeight);
                        } else {
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].height;
                            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 100 - bHeight / 2 - this.posY1 * 1.3, bWidth, bHeight);
                        }
                    }
                    if(this.posY0 != 500) {
                        this.renderFlare(canvas.width / 2, canvas.height * .4, 3 * this.posY3);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                        var tempScale0 = (1.8 + Math.sin(this.incY / 2) / 4);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale0 * this.posY3, canvas.height * .4 - (bHeight / 2) * tempScale0 * this.posY3, bWidth * tempScale0 * this.posY3, bHeight * tempScale0 * this.posY3);
                        if(this.scoreResult == 0) {
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg1].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg1].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg1].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg1].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) + this.posY0, canvas.height * .48 - (bHeight / 2), bWidth, bHeight);
                            var tempIconScale = .65;
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX * tempIconScale - this.posY0, canvas.height * .48 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY * tempIconScale - 160, bWidth * tempIconScale, bHeight * tempIconScale);
                            addText(1, 120, 475, "center", canvas.width / 2 + this.posY0, canvas.height * .48 + 42, "miss", "#FFFFFF");
                        } else if(this.scoreResult < 10) {
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds["scoreBg" + Math.floor((3.9 / 9) * this.scoreResult)]].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds["scoreBg" + Math.floor((3.9 / 9) * this.scoreResult)]].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds["scoreBg" + Math.floor((3.9 / 9) * this.scoreResult)]].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds["scoreBg" + Math.floor((3.9 / 9) * this.scoreResult)]].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) + 100 + this.posY0, canvas.height * .5 - (bHeight / 2), bWidth, bHeight);
                            addDirectText(1, 170, "center", canvas.width / 2 + 90 + this.posY0, canvas.height * .5 + 60, this.scoreResult.toString(), "#FFFFFF");
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.scorePins].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.scorePins].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.scorePins].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.scorePins].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2), canvas.height * .5 - (bHeight / 2) - this.posY0 - 205, bWidth, bHeight);
                            var tempIconScale = .73;
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX * tempIconScale - 100 - this.posY0, canvas.height * .5 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY * tempIconScale, bWidth * tempIconScale, bHeight * tempIconScale);
                        } else if(this.scoreResult == 10 || this.scoreResult == 11) {
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) + this.posY0, canvas.height * .55 - (bHeight / 2), bWidth, bHeight);
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.strikePins].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.strikePins].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.strikePins].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.strikePins].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2), canvas.height * .55 - (bHeight / 2) - this.posY0 - 225, bWidth, bHeight);
                            var tempIconScale = .65;
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX * tempIconScale - this.posY0, canvas.height * .55 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY * tempIconScale - 160, bWidth * tempIconScale, bHeight * tempIconScale);
                            if(this.scoreResult == 10) {
                                addText(1, 120, 475, "center", canvas.width / 2 + this.posY0, canvas.height * .55 + 42, "strike", "#FFFFFF");
                            } else {
                                addText(1, 120, 475, "center", canvas.width / 2 + this.posY0, canvas.height * .55 + 42, "spare", "#FFFFFF");
                            }
                        } else {
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.resultBg0].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) + this.posY0, canvas.height * .48 - (bHeight / 2), bWidth, bHeight);
                            var bX = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.splitPins].x;
                            var bY = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.splitPins].y;
                            var bWidth = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.splitPins].width;
                            var bHeight = this.oScoreElementsImgData.oData.oAtlasData[oImageIds.splitPins].height;
                            ctx.drawImage(this.oScoreElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2), canvas.height * .55 - (bHeight / 2) - this.posY0 - 200, bWidth, bHeight);
                            var tempIconScale = .65;
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX * tempIconScale - this.posY0, canvas.height * .48 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY * tempIconScale - 160, bWidth * tempIconScale, bHeight * tempIconScale);
                            addText(1, 120, 475, "center", canvas.width / 2 + this.posY0, canvas.height * .48 + 42, "split", "#FFFFFF");
                        }
                        if(tempTourn == 1) {
                            scoreX = canvas.width / 2 - 230;
                        } else if(tempTourn == 2) {
                            scoreX = canvas.width / 2 - 272;
                        }
                        tempId = checkCharId(opChar);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63, canvas.height * .7 + 60 + this.posY0, bWidth, bHeight);
                        tempId = curChar;
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale, canvas.height * .7 + 14 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY0, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63, canvas.height * .7 + this.posY0, bWidth, bHeight);
                        tempId = checkCharId(opChar);
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale, canvas.height * .7 + 74 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY0, bWidth * tempScale, bHeight * tempScale);
                        this.displayScores(scoreX + 63, canvas.height * .7 + this.posY0);
                    }
                    if(firstGoState == 0) {
                        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        addText(0, 31, canvas.width - 50, "center", canvas.width / 2, canvas.height / 2 - 275 - this.charX0, "tut0", "#FFFFFF");
                        var bX = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tut0Bg].x;
                        var bY = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tut0Bg].y;
                        var bWidth = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tut0Bg].width;
                        var bHeight = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tut0Bg].height;
                        ctx.drawImage(this.oTutElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2 - this.charX0 - 75, bWidth, bHeight);
                        this.tutAnim0.x = canvas.width / 2 - 12;
                        this.tutAnim0.y = canvas.height / 2 - this.charX0 - 75;
                        this.tutAnim0.update();
                        this.tutAnim0.render();
                    } else if(firstGoState == 2) {
                        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.tutAnim0.x = canvas.width / 2;
                        this.tutAnim0.y = canvas.height / 2 - this.charX0 - 75;
                        this.tutAnim0.update();
                        this.tutAnim0.render();
                        var bX = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tutBall].x;
                        var bY = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tutBall].y;
                        var bWidth = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tutBall].width;
                        var bHeight = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tutBall].height;
                        ctx.drawImage(this.oTutElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + this.posY2, canvas.height / 2 - bHeight / 2 - this.charX0 - 75, bWidth, bHeight);
                        if(hasTilt) {
                            addText(0, 31, canvas.width - 50, "center", canvas.width / 2, canvas.height / 2 - 275 - this.charX0, "tut12", "#FFFFFF");
                            var bX = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tiltPhone].x;
                            var bY = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tiltPhone].y;
                            var bWidth = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tiltPhone].width;
                            var bHeight = this.oTutElementsImgData.oData.oAtlasData[oImageIds.tiltPhone].height;
                            ctx.save();
                            ctx.translate(canvas.width / 2, canvas.height / 2 + 80 - this.charX0);
                            ctx.rotate(-this.swerveControlId + .5);
                            ctx.drawImage(this.oTutElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                            ctx.restore();
                        } else if(!hasTilt && isMobile) {
                            addText(0, 31, canvas.width - 50, "center", canvas.width / 2, canvas.height / 2 - 275 - this.charX0, "tut11", "#FFFFFF");
                            var bX = this.oTutElementsImgData.oData.oAtlasData[oImageIds["tapPhone" + Math.round(this.swerveControlId)]].x;
                            var bY = this.oTutElementsImgData.oData.oAtlasData[oImageIds["tapPhone" + Math.round(this.swerveControlId)]].y;
                            var bWidth = this.oTutElementsImgData.oData.oAtlasData[oImageIds["tapPhone" + Math.round(this.swerveControlId)]].width;
                            var bHeight = this.oTutElementsImgData.oData.oAtlasData[oImageIds["tapPhone" + Math.round(this.swerveControlId)]].height;
                            var tempOffsetX = 42;
                            if(Math.round(this.swerveControlId) == 1) {
                                tempOffsetX *= -1;
                            }
                            ctx.drawImage(this.oTutElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + tempOffsetX, canvas.height / 2 - bHeight / 2 + 80 - this.charX0, bWidth, bHeight);
                        } else {
                            addText(0, 31, canvas.width - 50, "center", canvas.width / 2, canvas.height / 2 - 275 - this.charX0, "tut10", "#FFFFFF");
                            var bX = this.oTutElementsImgData.oData.oAtlasData[oImageIds["arrowKey" + Math.round(this.swerveControlId)]].x;
                            var bY = this.oTutElementsImgData.oData.oAtlasData[oImageIds["arrowKey" + Math.round(this.swerveControlId)]].y;
                            var bWidth = this.oTutElementsImgData.oData.oAtlasData[oImageIds["arrowKey" + Math.round(this.swerveControlId)]].width;
                            var bHeight = this.oTutElementsImgData.oData.oAtlasData[oImageIds["arrowKey" + Math.round(this.swerveControlId)]].height;
                            ctx.drawImage(this.oTutElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, canvas.height / 2 - bHeight / 2 + 85 - this.charX0, bWidth, bHeight);
                        }
                    }
                    break;
                case "gameOver":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.butsY, bWidth, bHeight);
                    var tempOpChar = checkCharId(opChar);
                    if(oCurGameScores.totalScore >= oOpGameScores.totalScore) {
                        this.renderFlare(canvas.width / 2, canvas.height * .25 + this.posY0, 3);
                        addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "win" + curChar, "#000000");
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                        var tempScale = (1.8 + Math.sin(this.incY / 2) / 4);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - this.posY0 / 4, canvas.height * .25 - (bHeight / 2) * tempScale + this.posY0, bWidth * tempScale, bHeight * tempScale);
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var tempIconScale = .8;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX - (tempScale / 2) * tempIconScale - this.posY0 / 4, canvas.height * .25 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY + (tempScale / 2) * tempIconScale + this.posY0, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                        var tempId = curChar;
                        var scoreX = canvas.width / 2 - 175;
                        var tempTourn = Math.min(Math.floor(curLevel / 3), 2);
                        if(gameType == 1) {
                            tempTourn = 2;
                        }
                        var tempScale = .7;
                        if(tempTourn == 1) {
                            scoreX = canvas.width / 2 - 230;
                        } else if(tempTourn == 2) {
                            scoreX = canvas.width / 2 - 272;
                        }
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY1 / 4, canvas.height * .34 + 14 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY1, bWidth * tempScale, bHeight * tempScale);
                        tempId = checkCharId(opChar);
                        tempIconScale = .6;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[tempId].offsetX - (tempScale / 2) * tempIconScale, canvas.height * .64 - (bHeight / 2) * tempIconScale + aCharIcons[tempId].offsetY + (tempScale / 2) * tempIconScale + this.posY2, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .66 + this.posY2, canvas.width, bHeight);
                        addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .66 + 105 + this.posY2, "winText" + tempId, "#000000");
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY1 / 4, canvas.height * .34 + 74 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY1, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + 60 + this.posY1, bWidth, bHeight);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1, bWidth, bHeight);
                        tempId = curChar;
                        if(Math.floor(this.incY / 3) % 2 == 0) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1, bWidth, bHeight);
                        }
                        this.displayScores(scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1);
                    } else if(playerNum == 1) {
                        this.renderFlare(canvas.width / 2, canvas.height * .25 + this.posY0, 3);
                        addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "win" + checkCharId(opChar), "#000000");
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                        var tempScale = (1.8 + Math.sin(this.incY / 2) / 4);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - this.posY0 / 4, canvas.height * .25 - (bHeight / 2) * tempScale + this.posY0, bWidth * tempScale, bHeight * tempScale);
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var tempIconScale = 1;
                        var tempId = checkCharId(opChar);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX - (tempScale / 2) * tempIconScale - this.posY0 / 4, canvas.height * .3 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY + (tempScale / 2) * tempIconScale + this.posY0, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(tempOpChar)].panelId + "0"]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .4 + this.posY1, canvas.width, bHeight);
                        addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .4 + 105 + this.posY1, "loseText" + tempId + "_" + loseTextId, "#000000");
                        tempId = curChar;
                        var scoreX = canvas.width / 2 - 175;
                        var tempTourn = Math.min(Math.floor(curLevel / 3), 2);
                        if(gameType == 1) {
                            tempTourn = 2;
                        }
                        var tempScale = .7;
                        if(tempTourn == 1) {
                            scoreX = canvas.width / 2 - 230;
                        } else if(tempTourn == 2) {
                            scoreX = canvas.width / 2 - 272;
                        }
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY2 / 4, canvas.height * .6 + 14 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY2, bWidth * tempScale, bHeight * tempScale);
                        tempId = checkCharId(opChar);
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY2 / 4, canvas.height * .6 + 74 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY2, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY2 / 4, canvas.height * .6 + 60 + this.posY2, bWidth, bHeight);
                        tempId = curChar;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].height;
                        if(Math.floor(this.incY / 3) % 2 == 0) {
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY2 / 4, canvas.height * .6 + 60 + this.posY2, bWidth, bHeight);
                        }
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY2 / 4, canvas.height * .6 + this.posY2, bWidth, bHeight);
                        this.displayScores(scoreX + 63 + this.posY2 / 4, canvas.height * .6 + this.posY2);
                    } else {
                        this.renderFlare(canvas.width / 2, canvas.height * .25 + this.posY0, 3);
                        addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "win" + tempOpChar, "#000000");
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                        var tempScale = (1.8 + Math.sin(this.incY / 2) / 4);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale - this.posY0 / 4, canvas.height * .25 - (bHeight / 2) * tempScale + this.posY0, bWidth * tempScale, bHeight * tempScale);
                        tempScale = (Math.sin(this.incY / 2) * 3);
                        var tempIconScale = .8;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempOpChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[tempOpChar].offsetX - (tempScale / 2) * tempIconScale - this.posY0 / 4, canvas.height * .25 - (bHeight / 2) * tempIconScale + aCharIcons[tempOpChar].offsetY + (tempScale / 2) * tempIconScale + this.posY0, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                        var tempId = curChar;
                        var scoreX = canvas.width / 2 - 175;
                        var tempTourn = Math.min(Math.floor(curLevel / 3), 2);
                        if(gameType == 1) {
                            tempTourn = 2;
                        }
                        var tempScale = .7;
                        if(tempTourn == 1) {
                            scoreX = canvas.width / 2 - 230;
                        } else if(tempTourn == 2) {
                            scoreX = canvas.width / 2 - 272;
                        }
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY1 / 4, canvas.height * .34 + 14 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY1, bWidth * tempScale, bHeight * tempScale);
                        tempId = checkCharId(opChar);
                        tempIconScale = .6;
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX - (tempScale / 2) * tempIconScale, canvas.height * .64 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY + (tempScale / 2) * tempIconScale + this.posY2, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(curChar)].panelId + "0"]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(curChar)].panelId + "0"]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(curChar)].panelId + "0"]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["lineTextPanel" + aCharIcons[getOpPanelId(curChar)].panelId + "0"]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height * .66 + this.posY2, canvas.width, bHeight);
                        addText(2, 40, canvas.width - 40, "center", canvas.width / 2, canvas.height * .66 + 105 + this.posY2, "winText" + curChar, "#000000");
                        var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].x;
                        var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].y;
                        var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].width;
                        var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["smallIcon" + tempId]].height;
                        ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, scoreX - 2 + (aCharIcons[tempId].offsetX * .3) * tempScale + this.posY1 / 4, canvas.height * .34 + 74 + (aCharIcons[tempId].offsetY * .3) * tempScale + this.posY1, bWidth * tempScale, bHeight * tempScale);
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + getOpPanelId(tempId).toString() + tempTourn.toString()]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + 60 + this.posY1, bWidth, bHeight);
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1, bWidth, bHeight);
                        tempId = curChar;
                        if(Math.floor(this.incY / 3) % 2 == 0) {
                            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].x;
                            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].y;
                            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].width;
                            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["scorePanel" + aCharIcons[tempId].panelId.toString() + tempTourn.toString()]].height;
                            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1, bWidth, bHeight);
                        }
                        this.displayScores(scoreX + 63 + this.posY1 / 4, canvas.height * .34 + this.posY1);
                    }
                    break;
                case "cupWinner":
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.headerTextPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 42 - bHeight / 2 - this.butsY, bWidth, bHeight);
                    this.renderFlare(canvas.width / 2, canvas.height * .25 + this.posY0, 3);
                    addText(1, 40, 350, "center", canvas.width / 2, 55 - this.butsY, "cupWinner", "#000000");
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                    var tempScale = (1.8 + Math.sin(this.incY / 2) / 4);
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempScale, canvas.height * .7 - (bHeight / 2) * tempScale + this.posY0 * 2, bWidth * tempScale, bHeight * tempScale);
                    tempScale = (Math.sin(this.incY / 2) * 3);
                    var tempIconScale = 1;
                    var tempId = curChar;
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["largeIcon" + tempId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * tempIconScale + aCharIcons[curChar].offsetX - (tempScale / 2) * tempIconScale, canvas.height * .3 - (bHeight / 2) * tempIconScale + aCharIcons[curChar].offsetY + (tempScale / 2) * tempIconScale + this.posY0, (bWidth + tempScale) * tempIconScale, (bHeight - tempScale) * tempIconScale);
                    var ballInFront = true;
                    if(this.prevBallSin - Math.sin(this.incY * .3) > 0) {
                        ballInFront = false;
                    }
                    if(!ballInFront) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + Math.sin(this.incY * .3) * 200, canvas.height * .7 - bHeight / 2 + this.posY0, bWidth, bHeight);
                    }
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height * .7 + this.posY0 * 2);
                    ctx.rotate(Math.sin(this.incY * .5) * .5);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winnersCup].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winnersCup].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winnersCup].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winnersCup].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
                    ctx.restore();
                    if(ballInFront) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds["ballIcon" + curChar]].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2 + Math.sin(this.incY * .3) * 200, canvas.height * .7 - bHeight / 2 + this.posY0, bWidth, bHeight);
                    }
                    this.prevBallSin = Math.sin(this.incY * .3);
                    break;
                case "pause":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, 24 - this.butsY, canvas.width, bHeight);
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.navBars].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 0, canvas.height - 58 + this.butsY, canvas.width, bHeight);
                    break;
            }
            if(_butsOnTop) {
                this.addButs(ctx);
            }
            ctx.fillStyle = "rgba(255,255, 255," + this.flashInc + ")";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
        Panel.prototype.displayScores = function (_x, _y) {
            var tempTotal = 0;
            for(var i = 0; i < oCurGameScores.aFrameScores.length; i++) {
                for(var j = 0; j < oCurGameScores.aFrameScores[i].length; j++) {
                    this.displayScoreLine(oCurGameScores, _x, _y, i, j, 0);
                }
                var temp = this.getFrameTotal(oCurGameScores, i);
                if(temp > -1) {
                    tempTotal += temp;
                    oCurGameScores.totalScore = tempTotal;
                    addDirectText(2, 25, "center", _x + i * 55.4 + 34, _y + 71 + 0, tempTotal.toString(), "#000000");
                }
            }
            tempTotal = 0;
            for(var i = 0; i < oOpGameScores.aFrameScores.length; i++) {
                for(var j = 0; j < oOpGameScores.aFrameScores[i].length; j++) {
                    this.displayScoreLine(oOpGameScores, _x, _y, i, j, 60);
                }
                var temp = this.getFrameTotal(oOpGameScores, i);
                if(temp > -1) {
                    tempTotal += temp;
                    oOpGameScores.totalScore = tempTotal;
                    addDirectText(2, 25, "center", _x + i * 55.4 + 34, _y + 71 + 60, tempTotal.toString(), "#000000");
                }
            }
        };
        Panel.prototype.displayScoreLine = function (_oData, _x, _y, i, j, _addY) {
            if (typeof _addY === "undefined") { _addY = 0; }
            if(j == 0 && _oData.aFrameScores[i][j] == 10) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
            } else if(i == aCharIcons[curLevel].frames - 1) {
                if(j == 1 && (_oData.aFrameScores[i][0] + _oData.aFrameScores[i][1] == 10 && _oData.aFrameScores[i][0] != 10)) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
                } else if((j == 1 || j == 2) && _oData.aFrameScores[i][j] == 10) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.strikeMark].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
                } else if(_oData.aFrameScores[i][j] == 0) {
                    var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].x;
                    var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].y;
                    var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].width;
                    var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
                } else {
                    addDirectText(2, 19, "center", _x + i * 55.4 + j * 27.7 + 20, _y + 43 + _addY, _oData.aFrameScores[i][j], "#000000");
                }
            } else if(j == 1 && (_oData.aFrameScores[i][0] + _oData.aFrameScores[i][1] == 10 && _oData.aFrameScores[i][0] != 10)) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.spareMark].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
            } else if(_oData.aFrameScores[i][j] == 0) {
                var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].x;
                var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].y;
                var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].width;
                var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.missMark].height;
                ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, _x - bWidth / 2 + i * 55.4 + j * 27.7 + 21, _y - bHeight / 2 + 36 + _addY, bWidth, bHeight);
            } else {
                addDirectText(2, 19, "center", _x + i * 55.4 + j * 27.7 + 20, _y + 43 + _addY, _oData.aFrameScores[i][j], "#000000");
            }
        };
        Panel.prototype.getThrowResult = function () {
            var tempThrow0 = 0;
            var tempThrow1 = 0;
            var tempThrow2 = 0;
            var tempData = oCurGameScores;
            if(whosGo == 1) {
                tempData = oOpGameScores;
            }
            var aLeftPins = new Array();
            for(var i = 0; i < aLaneElements.length; i++) {
                if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                    aLeftPins.push(aLaneElements[i].id);
                }
            }
            if(aLeftPins.length == 2) {
                if((aLeftPins[0] == 0 && aLeftPins[1] == 3) || (aLeftPins[0] == 3 && aLeftPins[1] == 0)) {
                    return 12;
                }
            }
            if(tempData.aFrameScores[curFrame][0] != undefined) {
                tempThrow0 = tempData.aFrameScores[curFrame][0];
            }
            if(tempData.aFrameScores[curFrame][1] != undefined) {
                tempThrow1 = tempData.aFrameScores[curFrame][1];
            }
            if(tempData.aFrameScores[curFrame][2] != undefined) {
                tempThrow2 = tempData.aFrameScores[curFrame][2];
            }
            if(shotNum == 0) {
                return tempThrow0;
            } else if(curFrame < aCharIcons[curLevel].frames - 1) {
                if(tempThrow0 + tempThrow1 == 10) {
                    return 11;
                } else {
                    return tempThrow1;
                }
            } else if(shotNum == 1) {
                if(tempThrow0 != 10 && tempThrow0 + tempThrow1 == 10) {
                    return 11;
                } else if(tempThrow0 == 10 && tempThrow1 == 10) {
                    return 10;
                } else {
                    return tempThrow1;
                }
            } else {
                return tempThrow2;
            }
        };
        Panel.prototype.getFrameTotal = function (_oData, i) {
            var temp = 0;
            var canAddNumber = false;
            if(i < aCharIcons[curLevel].frames - 1) {
                if(_oData.aFrameScores[i][0] != undefined) {
                    temp += _oData.aFrameScores[i][0];
                }
                if(_oData.aFrameScores[i][1] != undefined) {
                    temp += _oData.aFrameScores[i][1];
                    canAddNumber = true;
                }
                if(_oData.aFrameScores[i][0] == 10) {
                    if(_oData.aFrameScores[i + 1] == undefined || _oData.aFrameScores[i + 1][1] == undefined) {
                        canAddNumber = false;
                    } else if(_oData.aFrameScores[i + 1][1] != undefined) {
                        if(_oData.aFrameScores[i + 1][0] == 10) {
                            temp += _oData.aFrameScores[i + 1][0];
                            canAddNumber = false;
                            if(i == aCharIcons[curLevel].frames - 2) {
                                temp += _oData.aFrameScores[i + 1][1];
                                canAddNumber = true;
                            } else if(_oData.aFrameScores[i + 2] != undefined) {
                                temp += _oData.aFrameScores[i + 2][0];
                                canAddNumber = true;
                            }
                        } else {
                            temp += _oData.aFrameScores[i + 1][0];
                            temp += _oData.aFrameScores[i + 1][1];
                            canAddNumber = true;
                        }
                    }
                } else if(_oData.aFrameScores[i][1] != undefined && _oData.aFrameScores[i][0] + _oData.aFrameScores[i][1] == 10) {
                    if(_oData.aFrameScores[i + 1] == undefined) {
                        canAddNumber = false;
                    } else {
                        temp += _oData.aFrameScores[i + 1][0];
                        canAddNumber = true;
                    }
                }
            } else {
                if(_oData.aFrameScores[i][0] != undefined) {
                    temp += _oData.aFrameScores[i][0];
                }
                if(_oData.aFrameScores[i][1] != undefined) {
                    temp += _oData.aFrameScores[i][1];
                    if(_oData.aFrameScores[i][0] != 10 || _oData.aFrameScores[i][1] != 10) {
                        canAddNumber = true;
                    }
                }
                if(_oData.aFrameScores[i][2] != undefined) {
                    temp += _oData.aFrameScores[i][2];
                    canAddNumber = true;
                }
            }
            if(canAddNumber) {
                return temp;
            } else {
                return -1;
            }
        };
        Panel.prototype.renderFlare = function (_x, _y, _scale) {
            this.flareRot += delta / 3;
            ctx.save();
            ctx.translate(_x, _y);
            ctx.rotate(this.flareRot);
            ctx.scale(_scale, _scale);
            var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeFlare].x;
            var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeFlare].y;
            var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeFlare].width;
            var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.largeFlare].height;
            ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);
            ctx.restore();
        };
        Panel.prototype.removeBut = function (_id) {
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].id == _id) {
                    this.aButs.splice(i, 1);
                    i -= 1;
                }
            }
        };
        Panel.prototype.addButs = function (ctx) {
            var aButOver = false;
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].isOver) {
                    aButOver = true;
                    break;
                }
            }
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosY;
                var floatY = 0;
                if(this.incY != 0 && this.aButs[i].flash) {
                    if(this.aButs[i].isOver) {
                        floatY = Math.sin((this.incY + i * 2.5) * 2) * 3;
                    } else {
                        floatY = Math.sin(this.incY + i * 2.5) * 3;
                    }
                }
                if(i % 2 == 0) {
                }
                if(!this.aButs[i].scale) {
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
                if(aY + this.aButs[i].aPos[1] > canvas.height / 2) {
                    offsetPosY = this.butsY;
                } else {
                    offsetPosY = -this.butsY;
                }
                this.aButs[i].aOverData = new Array(aX + this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2, aX + this.aButs[i].aPos[0] + (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, aY + this.aButs[i].aPos[1] + (bHeight / 2) * (this.aButs[i].scale) + offsetPosY + floatY / 2);
                if(this.aButs[i].isOver && this.aButs[i].flash) {
                    var tempFlareScale = 1;
                    if(this.aButs[i].flareScale) {
                        tempFlareScale = this.aButs[i].flareScale;
                    }
                    ctx.save();
                    ctx.translate(aX + this.aButs[i].aPos[0], aY + this.aButs[i].aPos[1]);
                    ctx.scale((1 + floatY / 30) * tempFlareScale, (1 + floatY / 30) * tempFlareScale);
                    ctx.globalAlpha = 1;
                    ctx.rotate(this.incY / 10);
                    var bX0 = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].x;
                    var bY0 = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].y;
                    var bWidth0 = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].width;
                    var bHeight0 = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallFlare].height;
                    ctx.drawImage(this.oUiElementsImgData.img, bX0, bY0, bWidth0, bHeight0, -bWidth0 / 2, -bHeight0 / 2, bWidth0, bHeight0);
                    ctx.restore();
                }
                if(this.aButs[i].id == oImageIds.pauseBut) {
                    if(panel.posY0 != 500 || ball.offLane || (whosGo == 1 && throwState < 2 && playerNum == 1)) {
                        this.aButs[i].scale = 0;
                    } else {
                        this.aButs[i].scale = 1;
                    }
                }
                ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aOverData[0], this.aButs[i].aOverData[1], bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
                if(this.aButs[i].isOver || this.aButs[i].flash) {
                    ctx.save();
                    if(this.aButs[i].isOver) {
                        ctx.globalAlpha = 1;
                    } else {
                        if(aButOver) {
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0) / 2;
                        } else {
                            ctx.globalAlpha = Math.max(Math.sin((this.incY + i * 2) / 2), 0);
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
            if(gameState == "userCharSelect" || gameState == "opCharSelect") {
                if(curChar < 99) {
                    if(playerNum == 1) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + ((curChar % 5) * 110 + aCharIcons[curChar].offsetX * .3 - 228), canvas.height + (Math.floor(curChar / 5) * 120 + aCharIcons[curChar].offsetY * .3 - 390) + offsetPosY, bWidth * (1 - this.charX0 / 500), bHeight * (1 - this.charX0 / 500));
                    } else {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon1].height;
                        ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + ((curChar % 5) * 110 + aCharIcons[curChar].offsetX * .3 - 228), canvas.height + (Math.floor(curChar / 5) * 120 + aCharIcons[curChar].offsetY * .3 - 390) + offsetPosY, bWidth * (1 - this.charX0 / 500), bHeight * (1 - this.charX0 / 500));
                    }
                }
                if(opChar < 99) {
                    if(playerNum == 1) {
                        var bX = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].x;
                        var bY = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].y;
                        var bWidth = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].width;
                        var bHeight = this.oUiElementsImgData.oData.oAtlasData[oImageIds.tick].height;
                        ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + ((opChar % 5) * 110 + aCharIcons[opChar].offsetX * .3 - 228), canvas.height + (Math.floor(opChar / 5) * 120 + aCharIcons[opChar].offsetY * .3 - 390) + offsetPosY, bWidth * (1 - this.charX1 / 500), bHeight * (1 - this.charX1 / 500));
                    } else {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.pIcon2].height;
                        ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + ((opChar % 5) * 110 + aCharIcons[opChar].offsetX * .3 - 228), canvas.height + (Math.floor(opChar / 5) * 120 + aCharIcons[opChar].offsetY * .3 - 390) + offsetPosY, bWidth * (1 - this.charX1 / 500), bHeight * (1 - this.charX1 / 500));
                    }
                }
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Utils;
(function (Utils) {
    var TextDisplay = (function () {
        function TextDisplay() {
            this.oTextData = {
            };
            this.inc = 0;
            this.createTextObjects();
        }
        TextDisplay.prototype.createTextObjects = function () {
            var cnt = 0;
            for(var i in assetLib.textData.langText.text[curLang]) {
                this.oTextData[i] = {
                };
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
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
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
            for(var i = 0; i < _aCharData.length; i++) {
                lineLength = 0;
                for(var j = 0; j < _aCharData[i].length; j++) {
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]);
                    if(j == 0) {
                        lineLength -= parseInt(_aCharData[i][j]["@xoffset"]);
                    } else if(j == _aCharData[i].length - 1) {
                        lineLength += parseInt(_aCharData[i][j]["@xoffset"]);
                    }
                }
                if(lineLength > longestLineLength) {
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
            for(var k = 0; k < _aLines.length; k++) {
                aCharData[k] = new Array();
                for(var i = 0; i < _aLines[k].length; i++) {
                    for(var j = 0; j < assetLib.textData["fontData" + _fontId].text.chars.char.length; j++) {
                        if(_aLines[k][i].charCodeAt() == assetLib.textData["fontData" + _fontId].text.chars.char[j]["@id"]) {
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
            if(_oTextDisplayData.lineOffsetY) {
                lineOffsetY = _oTextDisplayData.lineOffsetY;
            }
            if(_oTextDisplayData.scale) {
                manualScale = _oTextDisplayData.scale;
            }
            var textScale = 1 * manualScale;
            if(_oTextDisplayData.maxWidth && this.oTextData[_oTextDisplayData.text].blockWidth * manualScale > _oTextDisplayData.maxWidth) {
                textScale = _oTextDisplayData.maxWidth / this.oTextData[_oTextDisplayData.text].blockWidth;
            }
            if(_oTextDisplayData.anim) {
                this.inc += delta * 7;
            }
            for(var i = 0; i < aLinesToRender.length; i++) {
                shiftX = 0;
                if(_oTextDisplayData.alignX == "centre") {
                    offsetX = this.oTextData[_oTextDisplayData.text].aLineWidths[i] / 2;
                }
                if(_oTextDisplayData.alignY == "centre") {
                    offsetY = this.oTextData[_oTextDisplayData.text].blockHeight / 2 + (lineOffsetY * (aLinesToRender.length - 1)) / 2;
                }
                for(var j = 0; j < aLinesToRender[i].length; j++) {
                    var bX = aLinesToRender[i][j]["@x"];
                    var bY = aLinesToRender[i][j]["@y"];
                    var bWidth = aLinesToRender[i][j]["@width"];
                    var bHeight = aLinesToRender[i][j]["@height"];
                    if(_oTextDisplayData.anim) {
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 15) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]);
                }
            }
        };
        return TextDisplay;
    })();
    Utils.TextDisplay = TextDisplay;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var SaveDataHandler = (function () {
        function SaveDataHandler(_saveDataId) {
            this.dataGroupNum = 2;
            this.canStore = false;
            this.saveDataId = _saveDataId;
            var testKey = 'test';
            var storage;
            var lc = false;
            try  {
                storage = window.localStorage;
                lc = true;
            } catch (e) {
                console.log("local storage denied");
                lc = false;
                this.canStore = false;
            }
            if(lc) {
                try  {
                    storage.setItem(testKey, '1');
                    storage.removeItem(testKey);
                    this.canStore = true;
                } catch (error) {
                    this.canStore = false;
                }
            }
            this.clearData();
            this.setInitialData();
        }
        SaveDataHandler.prototype.clearData = function () {
            this.aLevelStore = new Array();
            for(var i = 0; i < 16; i++) {
                this.aLevelStore.push(0);
            }
        };
        SaveDataHandler.prototype.resetData = function () {
            this.clearData();
            this.saveData();
        };
        SaveDataHandler.prototype.setInitialData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                if(localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for(var a in this.aLevelStore) {
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);
                    }
                } else {
                    this.saveData();
                }
            }
        };
        SaveDataHandler.prototype.resetSingleChar = function (_char) {
            this.aLevelStore[_char] = 0;
        };
        SaveDataHandler.prototype.saveData = function () {
            if(this.canStore && typeof (Storage) !== "undefined") {
                var str = "";
                for(var i = 0; i < this.aLevelStore.length; i++) {
                    str += this.aLevelStore[i];
                    if(i < this.aLevelStore.length - 1) {
                        str += ",";
                    }
                }
                localStorage.setItem(this.saveDataId, str);
            }
        };
        return SaveDataHandler;
    })();
    Utils.SaveDataHandler = SaveDataHandler;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Lane = (function () {
        function Lane() {
            this.segNum = 1000;
            this.horizon = 0;
            this.roadTileHeight = 2000;
            this.scrollY = 0;
            this.speed = 0;
            this.steerEaseX = 0;
            this.roadScaleMultiplier = 1;
            this.maxSpeed = 0;
            this.minSpeed = 0;
            this.wheelie = 0;
            this.curve = 0;
            this.curveInc = 0;
            this.lane = 0;
            this.aScenery = new Array();
            this.sceneryInc = 0;
            this.sceneryDir = 0;
            this.scrollX = 0;
            this.scrollInc = 0;
            this.skyScale = 1;
            this.nearWidth = 3.2;
            this.bgNum = 500;
            this.bgWidthScale = 1;
            this.laneSneak = 0.0013;
            this.aObstructions = new Array();
            this.obstructFlipFlopInc = 0;
            this.obstructFlipFlop = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            if(gameType == 0) {
                this.oRoadImgData = assetLib.getData("lanes" + Math.floor(curLevel / 3));
                this.oBgLaneImgData = assetLib.getData("bgLane" + Math.floor(curLevel / 3));
                this.oBgLaneReflectImgData = assetLib.getData("bgLaneReflect" + Math.floor(curLevel / 3));
            } else {
                this.oRoadImgData = assetLib.getData("lanes" + aCharIcons[curChar].team);
                this.oBgLaneImgData = assetLib.getData("bgLane" + aCharIcons[curChar].team);
                this.oBgLaneReflectImgData = assetLib.getData("bgLaneReflect" + aCharIcons[curChar].team);
            }
            this.aRowData = new Array();
            for(var i = 0; i < this.segNum; i++) {
                this.aRowData.push({
                    height: 0,
                    scale: 0
                });
            }
            this.resetPins(1);
            this.roadHeight = 600;
            this.steerX = -1217;
            this.setObstructions(true);
        }
        Lane.prototype.setObstructions = function (_newPos) {
            if(_newPos) {
                var tempTot = 0;
                if(gameType == 0 && Math.random() * 8 < curLevel) {
                    tempTot = 1;
                    if(curLevel > 3 && Math.random() * 15 < curLevel) {
                        tempTot = 2;
                    }
                }
                if(tempTot == 0) {
                    this.aObstructions = new Array();
                    return;
                }
                this.aObstructions = new Array();
                for(var i = 0; i < tempTot; i++) {
                    var oObstruct = {
                    };
                    if((tempTot == 1 && Math.random() * 2 > 1) || tempTot == 2 && i == 0) {
                        oObstruct.obstructRetainY = Math.random() * 100 + 750;
                        oObstruct.obstructRetainX = Math.random() * 400 - 200;
                        oObstruct.obType = "post";
                        oObstruct.obWidth = 92;
                        oObstruct.obOffsetY = 95;
                        oObstruct.obHitYAbove = 0;
                        oObstruct.obHitYBelow = 30;
                    } else {
                        oObstruct.obstructRetainY = Math.random() * 100 + 750;
                        oObstruct.obstructRetainX = Math.random() * 360 - 180;
                        oObstruct.obType = "jump";
                        oObstruct.obWidth = 110;
                        oObstruct.obOffsetY = 25;
                        oObstruct.obHitYAbove = 20;
                        oObstruct.obHitYBelow = 20;
                        if(tempTot == 2) {
                            var tempOver = 0;
                            while(this.aObstructions[0].obstructRetainY > oObstruct.obstructRetainY - 30 && this.aObstructions[0].obstructRetainY < oObstruct.obstructRetainY + 30 && this.aObstructions[0].obstructRetainX > oObstruct.obstructRetainX - 200 && this.aObstructions[0].obstructRetainX < oObstruct.obstructRetainX + 200 && tempOver < 50) {
                                console.log("too close");
                                oObstruct.obstructRetainY = Math.random() * 100 + 750;
                                oObstruct.obstructRetainX = Math.random() * 360 - 180;
                                tempOver++;
                            }
                        }
                    }
                    this.aObstructions.push(oObstruct);
                }
                this.aObstructions.sort(function (a, b) {
                    return a.obstructRetainY - b.obstructRetainY;
                });
            }
            for(var i = 0; i < this.aObstructions.length; i++) {
                this.aObstructions[i].hasHitObstruction = false;
                this.aObstructions[i].renderFront = true;
                this.aObstructions[i].obstructY = this.aObstructions[i].obstructRetainY;
                this.aObstructions[i].obstructX = this.aObstructions[i].obstructRetainX;
            }
        };
        Lane.prototype.reset = function (_resetType) {
            this.speed = 0;
            this.scrollY = 0;
            throwState = 0;
            this.steerX = -1217;
            this.roadHeight = 600;
            this.nearWidth = 3.2;
            this.resetPins(_resetType);
            ball.resetBall(_resetType);
            this.bgNum = 500;
            this.setObstructions(false);
            this.bgWidthScale = 1;
        };
        Lane.prototype.resetPins = function (_resetType) {
            if(_resetType == 1) {
                aLaneElements = new Array();
                for(var i = 0; i < 10; i++) {
                    var pin = new Elements.Pin(i);
                    aLaneElements.push(pin);
                }
                aLaneElements[0].setStartPos(508, 0.045);
                aLaneElements[1].setStartPos(508, 0.015);
                aLaneElements[2].setStartPos(508, -0.015);
                aLaneElements[3].setStartPos(508, -0.045);
                aLaneElements[4].setStartPos(515, 0.03);
                aLaneElements[5].setStartPos(515, 0);
                aLaneElements[6].setStartPos(515, -0.03);
                aLaneElements[7].setStartPos(521, 0.015);
                aLaneElements[8].setStartPos(521, -0.015);
                aLaneElements[9].setStartPos(528, 0);
                standingPins = 9;
            } else {
                standingPins = 0;
                for(var i = 0; i < aLaneElements.length; i++) {
                    if(!aLaneElements[i].isBall && (aLaneElements[i].hitByBall || aLaneElements[i].hitByPin)) {
                        aLaneElements.splice(i, 1);
                        i -= 1;
                    } else if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                        standingPins++;
                        aLaneElements[i].resetStartPos();
                    }
                }
            }
        };
        Lane.prototype.triggerThrow = function (_speed) {
            _speed = Math.min(_speed, 70);
            var tempSpeed = 330 + (100 / 70) * _speed;
            TweenLite.to(this, .5, {
                nearWidth: 5.5,
                steerX: -3540,
                roadHeight: 450,
                speed: tempSpeed,
                ease: "Quad.easeOut",
                onComplete: function () {
                }
            });
        };
        Lane.prototype.update = function () {
            if(firstGoState == 2) {
                return;
            }
            this.obstructFlipFlopInc += delta;
            if(this.obstructFlipFlopInc > .25) {
                this.obstructFlipFlopInc = 0;
                if(this.obstructFlipFlop == 0) {
                    this.obstructFlipFlop = 1;
                } else {
                    this.obstructFlipFlop = 0;
                }
            }
            if(throwState == 2) {
                this.speed -= 10 * delta;
                this.scrollY -= this.speed * delta;
                this.bgNum += (this.speed * .5) * delta;
                for(var i = 0; i < this.aObstructions.length; i++) {
                    this.aObstructions[i].obstructY += (this.speed * .5) * delta;
                }
                if(this.scrollY < -770) {
                    ball.speedY = this.speed;
                    this.speed = 0;
                    for(var i = 0; i < aLaneElements.length; i++) {
                        if(!aLaneElements[i].isBall) {
                            aLaneElements[i].setHitPos();
                        }
                    }
                    throwState = 3;
                }
            }
            this.horizon = (canvas.height - this.roadHeight);
        };
        Lane.prototype.renderTopBg = function () {
            this.bgScale = (this.aRowData[Math.floor(this.bgNum)].scale) / 710;
            ctx.drawImage(this.oBgLaneImgData.img, 0, 0, this.oBgLaneImgData.img.width, this.oBgLaneImgData.img.height, canvas.width / 2 - (this.oBgLaneImgData.img.width / 2) * this.bgScale * this.bgWidthScale, this.aRowData[Math.floor(this.bgNum)].y - (this.oBgLaneImgData.img.height) * this.bgScale * this.bgWidthScale - (this.aRowData[Math.floor(this.bgNum)].scale * this.laneSneak) * this.bgScale * this.bgWidthScale, this.oBgLaneImgData.img.width * this.bgScale * this.bgWidthScale, this.oBgLaneImgData.img.height * this.bgScale * this.bgWidthScale);
            this.goalScale = (this.aRowData[Math.floor(this.bgNum)].scale) / 2420;
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goal].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goal].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goal].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goal].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * this.goalScale, this.aRowData[Math.floor(this.bgNum)].y - (bHeight - 0) * this.goalScale - (this.aRowData[Math.floor(this.bgNum)].scale * this.laneSneak) * this.bgScale * this.bgWidthScale, bWidth * this.goalScale, bHeight * this.goalScale);
        };
        Lane.prototype.renderObstruction = function (_id) {
            if(this.aObstructions.length == 0) {
                return;
            }
            if(this.aObstructions[_id].obstructY < 1000) {
                this.aObstructions[_id].obstructScale = (this.aRowData[Math.floor(this.aObstructions[_id].obstructY)].scale) / 6000;
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aObstructions[_id].obType + this.obstructFlipFlop]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aObstructions[_id].obType + this.obstructFlipFlop]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aObstructions[_id].obType + this.obstructFlipFlop]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[this.aObstructions[_id].obType + this.obstructFlipFlop]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - (bWidth / 2) * this.aObstructions[_id].obstructScale - this.aObstructions[_id].obstructX * this.aObstructions[_id].obstructScale, this.aRowData[Math.floor(this.aObstructions[_id].obstructY)].y - (bHeight - this.aObstructions[_id].obOffsetY) * this.aObstructions[_id].obstructScale, bWidth * this.aObstructions[_id].obstructScale, bHeight * this.aObstructions[_id].obstructScale);
            }
        };
        Lane.prototype.render = function () {
            if(throwState >= 3) {
                this.renderTopBg();
            }
            for(var i = 0; i < aLaneElements.length; i++) {
                if(aLaneElements[i].offLane) {
                    aLaneElements[i].update();
                    aLaneElements[i].render();
                }
            }
            var segHeightBefore = this.roadTileHeight / this.segNum;
            var rowHeight = 0;
            this.aRowData[0].curve = this.curve;
            var tempSegum = this.segNum * .5;
            for(var i = tempSegum; i < this.segNum; i++) {
                this.tempInc = i;
                this.easeInc = 1 * (this.tempInc /= this.segNum) * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc + 0;
                this.nextRow = i + 1;
                this.segHeightAfter = (1 * (this.nextRow /= this.segNum) * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow + 0) - this.easeInc;
                this.aRowData[i].x = this.steerX * this.easeInc + canvas.width / 2 - (((this.easeInc + this.segHeightAfter) * 2) * this.oRoadImgData.oData.spriteWidth) / 2 - 250;
                this.aRowData[i].y = this.horizon + (this.easeInc * this.roadHeight);
                this.aRowData[i].scale = ((this.easeInc + this.segHeightAfter) * this.nearWidth) * this.oRoadImgData.oData.spriteWidth + 500;
                if(rowHeight == 0) {
                    this.rowId = i;
                }
                rowHeight += this.segHeightAfter * this.roadHeight;
                if(rowHeight > 1) {
                    ctx.drawImage(this.oRoadImgData.img, 0, this.rowId * segHeightBefore + this.scrollY, this.oRoadImgData.oData.spriteWidth, segHeightBefore, this.aRowData[this.rowId].x, this.aRowData[this.rowId].y, this.aRowData[this.rowId].scale, rowHeight + 1);
                    rowHeight = 0;
                }
            }
            if(throwState < 3) {
                this.renderTopBg();
            }
            ctx.drawImage(this.oBgLaneReflectImgData.img, 0, 0, this.oBgLaneReflectImgData.img.width, this.oBgLaneReflectImgData.img.height, canvas.width / 2 - (this.oBgLaneReflectImgData.img.width / 2) * this.bgScale * this.bgWidthScale, this.aRowData[Math.floor(this.bgNum)].y + 0 * this.bgScale * this.bgWidthScale - (this.aRowData[Math.floor(this.bgNum)].scale * this.laneSneak) * this.bgScale * this.bgWidthScale, this.oBgLaneReflectImgData.img.width * this.bgScale * this.bgWidthScale, this.oBgLaneReflectImgData.img.height * this.bgScale * this.bgWidthScale);
            for(var i = 0; i < aLaneElements.length; i++) {
                if(!aLaneElements[i].offLane) {
                    aLaneElements[i].update();
                    aLaneElements[i].render();
                }
            }
            var prevRightScale;
            var prevRightX;
            var prevRightY;
            var prevLeftScale;
            var prevLeftX;
            var prevLeftY;
        };
        return Lane;
    })();
    Elements.Lane = Lane;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Ball = (function () {
        function Ball() {
            this.isBall = true;
            this.id = 99;
            this.startYOffset = 140;
            this.holdSluggish = 3;
            this.speedToThrow = 2;
            this.setRadius = 600;
            this.isResting = false;
            this.offLane = false;
            this.inGutter = false;
            this.hitJump = false;
            this.obstructJumpY = 0;
            this.obstructJumpInc = 0;
            this.pinHitSound = false;
            this.firstBounce = false;
            this.canDetectSwerve = false;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.resetBall(1);
        }
        Ball.prototype.resetBall = function (_resetType) {
            var _this = this;
            if(this.throwTween) {
                this.throwTween.kill();
            }
            if(whosGo == 0) {
                playSound("switchBowlerCur");
            } else {
                playSound("switchBowlerOp");
            }
            this.firstBounce = false;
            this.initialPinsLeft = 0;
            for(var i = 0; i < aLaneElements.length; i++) {
                if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                    this.initialPinsLeft++;
                }
            }
            this.canDetectSwerve = false;
            this.x = this.targX = canvas.width / 2;
            this.y = this.targY = -this.startYOffset;
            this.scale = this.fixedScale = .6;
            this.addScale = 0;
            this.offGroundY = this.fixedOffGroundY = 40;
            this.leftSwerve = 0;
            this.rightSwerve = 0;
            if(_resetType == 1) {
                aLaneElements.push(this);
            }
            this.isResting = false;
            this.offLane = false;
            this.inGutter = false;
            this.hitJump = false;
            this.resetStartPos();
            this.pinHitSound = false;
            if(whosGo == 0) {
                this.ballId = curChar;
            } else {
                this.ballId = checkCharId(opChar);
                if(playerNum == 1) {
                    this.opY = canvas.height / 2;
                    var isPost = false;
                    var postX = 0;
                    for(var i = 0; i < lane.aObstructions.length; i++) {
                        if(lane.aObstructions[i].obType == "post") {
                            isPost = true;
                            postX = lane.aObstructions[i].obstructX;
                        }
                    }
                    if(!isPost) {
                        this.opX = (Math.random() * canvas.width / 3) - canvas.width / 6;
                    } else {
                        if(postX > 0) {
                            this.opX = canvas.width / 6 + Math.random() * 100 - 50;
                        } else {
                            this.opX = -canvas.width / 6 + Math.random() * 100 - 50;
                        }
                    }
                    this.startHold(this.opX, this.opY);
                    if(this.opTween) {
                        this.opTween.kill();
                    }
                    var tempPower = (1 - aCharIcons[opChar].stat0) * 200 + 50;
                    this.opTween = TweenLite.to(this, Math.random() * .3 + .6, {
                        opY: canvas.height * .8,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            _this.opTween = TweenLite.to(_this, Math.random() * .2 + (1 - aCharIcons[opChar].stat1) / 2, {
                                opY: canvas.height * .25,
                                opX: _this.opX + Math.random() * tempPower - tempPower / 2,
                                ease: "Quad.easeIn",
                                onComplete: function () {
                                }
                            });
                        }
                    });
                } else {
                }
            }
        };
        Ball.prototype.resetStartPos = function () {
            this.targX = canvas.width / 2;
            this.targY = -this.startYOffset;
            this.addScale = 0;
            this.alpha = 1;
            this.gutterX = 0;
            this.hitJump = false;
            this.addOffSetGroundY = this.sineOffSetGroundY = 0;
        };
        Ball.prototype.startHold = function (_x, _y) {
            this.startY = _y - this.y;
            this.startOffsetGroundY = _y;
            this.startScale = _y;
            this.minHoldY = _y;
            this.maxHoldY = _y + this.startYOffset;
            this.allowSwerve = false;
            this.canThrow = false;
        };
        Ball.prototype.setHoldPos = function (_x, _y) {
            if(_y - this.minHoldY > 20) {
                this.canThrow = true;
            }
            this.canThrow = true;
            if(_y > this.maxHoldY) {
                var tempDiff = _y - this.maxHoldY;
                this.startY += tempDiff;
                this.minHoldY += tempDiff;
                this.startOffsetGroundY += tempDiff;
                this.startScale += tempDiff;
                this.maxHoldY = _y;
            }
            _y = Math.min(_y, this.maxHoldY);
            _y = Math.min(_y, this.maxHoldY);
            if(this.speedY < this.speedToThrow || !this.canThrow) {
                _y = Math.max(_y, this.minHoldY);
            }
            this.prevTargX = this.targX;
            this.prevTargY = this.targY;
            this.targX = _x;
            this.targY = _y - this.startY;
            this.speedX = Math.min(Math.max(this.prevTargX - this.targX, -13), 13);
            this.speedY = this.prevTargY - this.targY;
            this.addOffSetGroundY = (_y - this.startOffsetGroundY) / this.startYOffset;
            this.addScale = (_y - this.startScale) / 400;
        };
        Ball.prototype.ballRelease = function () {
            var _this = this;
            throwState = 2;
            playSound("ballDrop" + Math.floor(Math.random() * 2));
            playSound("ballRolling");
            this.allowSwerve = true;
            this.leftSwerve = 0;
            this.rightSwerve = 0;
            this.y = -this.startYOffset;
            this.scale = .6;
            this.targX = this.x;
            this.speedXInc = 0;
            lane.triggerThrow(this.speedY - ball.speedToThrow);
            this.ballRoll = new Elements.BallRoll(24);
            this.easeMultiplier = 0;
            this.throwTween = TweenLite.to(this, Math.random() * .5 + 1.5, {
                y: -270,
                scale: .5,
                easeMultiplier: 1,
                ease: "Quad.easeOut"
            });
            if(Math.random() * 1 > .5) {
                TweenLite.to(this, Math.random() * .1 + .1, {
                    offGroundY: 0,
                    ease: "Quad.easeOut"
                });
            } else {
                TweenLite.to(this, Math.random() * .2 + .2, {
                    offGroundY: 0,
                    ease: "Bounce.easeOut"
                });
            }
            setTimeout(function () {
                _this.canDetectSwerve = true;
            }, 500);
        };
        Ball.prototype.update = function () {
            var _this = this;
            if(firstGoState == 2) {
                return;
            }
            this.radius = this.setRadius * this.scale;
            if(throwState < 2) {
                if(whosGo == 1 && playerNum == 1) {
                    this.setHoldPos(canvas.width / 2 + this.opX, this.opY);
                }
                this.targX = Math.min(Math.max(this.targX, 150), canvas.width - 150);
                this.perspOffsetX = (this.targX - canvas.width / 2) * ((this.targY - (-this.startYOffset)) * .003);
                this.x -= (this.x - (this.targX + this.perspOffsetX)) / (this.holdSluggish * 2);
                this.y -= (this.y - this.targY) / this.holdSluggish;
                this.sineOffSetGroundY -= (this.sineOffSetGroundY - this.addOffSetGroundY) / this.holdSluggish;
                this.offGroundY = this.fixedOffGroundY + (1 - Math.sin(Math.PI * ((this.sineOffSetGroundY + 1) / 2))) * 200;
                this.scale -= (this.scale - (this.fixedScale + this.addScale)) / this.holdSluggish;
                if(this.canThrow && this.y < -this.startYOffset && this.speedY > this.speedToThrow) {
                    if(firstGoState == 1) {
                        panel.showSwerveTut();
                        firstGoState = 2;
                    } else {
                        this.ballRelease();
                    }
                }
            } else if(throwState <= 3) {
                if(whosGo == 1 && playerNum == 1) {
                    if(lane.scrollY > -700 && lane.scrollY < -300) {
                        if(this.x > canvas.width / 2) {
                            this.leftSwerve = 1 * aCharIcons[opChar].stat2;
                            this.rightSwerve = 0;
                        } else {
                            this.leftSwerve = 0;
                            this.rightSwerve = -1 * aCharIcons[opChar].stat2;
                        }
                    } else {
                        this.leftSwerve = 0;
                        this.rightSwerve = 0;
                    }
                }
                if(this.hitJump) {
                    this.leftSwerve = 0;
                    this.rightSwerve = 0;
                }
                this.speedX += ((this.leftSwerve + this.rightSwerve) * 15) * delta;
                this.perspOffsetX = ((this.x - canvas.width / 2) * ((this.y - (-this.startYOffset)) * .004)) * this.easeMultiplier;
                if(throwState == 3) {
                    if(!this.offLane) {
                        this.y -= (this.speedY * 2) * delta;
                        if(!this.inGutter) {
                            this.speedXInc -= (this.speedX * 40) * delta;
                            if(this.x > canvas.width / 2 + 200 || this.x < canvas.width / 2 - 200) {
                                this.inGutter = true;
                                playSound("ballOff" + Math.floor(Math.random() * 2));
                            }
                        } else {
                            if(this.x > canvas.width / 2) {
                                this.x -= 800 * delta;
                            } else {
                                this.x += 800 * delta;
                            }
                        }
                        this.scale -= (this.speedY * .002) * delta;
                        if(this.y < -370) {
                            this.offLane = true;
                            playSound("ballDrop" + Math.floor(Math.random() * 2));
                            TweenLite.to(this, .5, {
                                y: this.y + 400,
                                ease: "Quad.easeIn",
                                onComplete: function () {
                                    playSound("ballOff" + Math.floor(Math.random() * 2));
                                    _this.isResting = true;
                                    throwState = 4;
                                    elementAtRest();
                                    var pinsLeft = 0;
                                    for(var i = 0; i < aLaneElements.length; i++) {
                                        if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                                            pinsLeft++;
                                        }
                                    }
                                    pinsLeft = Math.round(10 - (10 / _this.initialPinsLeft) * pinsLeft);
                                    if(pinsLeft == 0) {
                                        playSound("cheerBad");
                                    } else if(pinsLeft == 1 || pinsLeft == 2) {
                                        playSound("cheer0");
                                    } else if(pinsLeft == 3 || pinsLeft == 4) {
                                        playSound("cheer" + (Math.floor(Math.random() * 2 + 1)));
                                    } else if(pinsLeft == 5 || pinsLeft == 6) {
                                        playSound("cheer" + (Math.floor(Math.random() * 2 + 2)));
                                    } else if(pinsLeft == 7 || pinsLeft == 8) {
                                        playSound("cheer" + (Math.floor(Math.random() * 2 + 3)));
                                    } else {
                                        playSound("cheer" + (Math.floor(Math.random() * 2 + 4)));
                                    }
                                }
                            });
                        }
                    }
                } else {
                    this.speedXInc -= (this.speedX * 15) * delta;
                }
                if(!this.offLane) {
                    if(!this.inGutter) {
                        this.x = this.targX + this.perspOffsetX + this.speedXInc;
                        if(this.x > canvas.width / 2 + 300) {
                            this.inGutter = true;
                            playSound("ballOff" + Math.floor(Math.random() * 2));
                            this.gutterX = 10;
                            TweenLite.to(this, .7, {
                                gutterX: 0,
                                ease: "Elastic.easeOut"
                            });
                        } else if(this.x < canvas.width / 2 - 300) {
                            this.inGutter = true;
                            playSound("ballOff" + Math.floor(Math.random() * 2));
                            this.gutterX = -10;
                            TweenLite.to(this, .7, {
                                gutterX: 0,
                                ease: "Elastic.easeOut"
                            });
                        }
                    }
                }
                this.obstructJumpInc -= 3500 * delta;
                this.obstructJumpY += this.obstructJumpInc * delta;
                if(this.obstructJumpY < 0) {
                    if(this.hitJump && !this.firstBounce) {
                        playSound("ballDrop" + Math.floor(Math.random() * 2));
                        this.firstBounce = true;
                    }
                    this.obstructJumpY = 0;
                    this.obstructJumpInc *= -.5;
                }
                if(lane.aObstructions.length != 0) {
                    for(var i = 0; i < lane.aObstructions.length; i++) {
                        if(!lane.aObstructions[i].hasHitObstruction && lane.aObstructions[i].obstructY < 1000 && this.x + this.gutterX > canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale - lane.aObstructions[i].obWidth && this.x + this.gutterX < canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale + lane.aObstructions[i].obWidth && canvas.height + this.y - this.offGroundY * this.scale > lane.aRowData[Math.floor(lane.aObstructions[i].obstructY)].y - lane.aObstructions[i].obHitYAbove && canvas.height + this.y - this.offGroundY * this.scale < lane.aRowData[Math.floor(lane.aObstructions[i].obstructY)].y + lane.aObstructions[i].obHitYBelow) {
                            lane.aObstructions[i].hasHitObstruction = true;
                            if(lane.aObstructions[i].obType == "post") {
                                playSound("hitPost");
                                if(this.x + this.gutterX > canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale) {
                                    this.speedX -= (lane.aObstructions[i].obWidth - ((this.x + this.gutterX) - (canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale))) * 2;
                                    if(this.obstructJumpY == 0) {
                                        this.obstructJumpInc = -this.speedX * 8;
                                    }
                                } else {
                                    this.speedX -= (-lane.aObstructions[i].obWidth - ((this.x + this.gutterX) - (canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale))) * 2;
                                    if(this.obstructJumpY == 0) {
                                        this.obstructJumpInc = this.speedX * 8;
                                    }
                                }
                                lane.speed *= 1 - Math.abs(.4 * (this.speedX / (lane.aObstructions[i].obWidth * 2)));
                                this.speedY *= 1 - Math.abs(.4 * (this.speedX / (lane.aObstructions[i].obWidth * 2)));
                            } else {
                                this.hitJump = true;
                                playSound("jump");
                                this.obstructJumpInc = 1500;
                                this.speedX -= ((this.x + this.gutterX) - (canvas.width / 2 - lane.aObstructions[i].obstructX * lane.aObstructions[i].obstructScale)) / 5;
                            }
                        }
                    }
                }
            }
        };
        Ball.prototype.render = function () {
            var tempBallY = canvas.height + this.y;
            for(var i = 0; i < lane.aObstructions.length; i++) {
                if(lane.aObstructions[i].obstructY < 1000 && (tempBallY >= lane.aRowData[Math.floor(lane.aObstructions[i].obstructY)].y || lane.aObstructions[i].obType == "jump")) {
                    lane.renderObstruction(i);
                    lane.aObstructions[i].renderFront = true;
                } else {
                    lane.aObstructions[i].renderFront = false;
                }
            }
            tempBallY = tempBallY - this.offGroundY * this.scale - this.obstructJumpY * this.scale;
            if(!this.offLane) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballReflect].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballReflect].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballReflect].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballReflect].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, canvas.height + this.y + this.offGroundY * this.scale, bWidth * this.scale, bHeight * this.scale);
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballShadow].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballShadow].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballShadow].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.ballShadow].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, canvas.height + this.y - (bHeight / 2) * this.scale, bWidth * this.scale, bHeight * this.scale);
            }
            ctx.save();
            ctx.rotate(0);
            ctx.translate(this.x + this.gutterX, tempBallY);
            ctx.scale(this.scale, this.scale);
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ball" + this.ballId]].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ball" + this.ballId]].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ball" + this.ballId]].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["ball" + this.ballId]].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, -(bWidth / 2), -(bHeight), bWidth, bHeight);
            ctx.restore();
            if(throwState == 2) {
                this.ballRoll.x = this.x + this.gutterX;
                this.ballRoll.y = tempBallY - (bHeight / 2 * this.scale);
                this.ballRoll.scaleX = this.scale;
                this.ballRoll.scaleY = this.scale;
                this.ballRoll.update();
                this.ballRoll.render();
            }
            for(var i = 0; i < lane.aObstructions.length; i++) {
                if(!lane.aObstructions[i].renderFront) {
                    lane.renderObstruction(i);
                }
            }
        };
        return Ball;
    })();
    Elements.Ball = Ball;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Pin = (function () {
        function Pin(_id) {
            this.isBall = false;
            this.hitByBall = false;
            this.hitByPin = false;
            this.setRadius = 13;
            this.alpha = 1;
            this.rotXOffset = 0;
            this.isResting = false;
            this.offLane = false;
            this.id = _id;
            this.oPinImgData = assetLib.getData("pin");
            this.oPinReflectImgData = assetLib.getData("pinReflect");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.rot = 0;
            this.curFrame = 24;
            this.aHitPins = new Array();
        }
        Pin.prototype.setStartPos = function (_rowNum, _posX) {
            this.rowNum = this.rowNumStore = _rowNum;
            this.posX = _posX;
            this.isResting = true;
            this.aHitPins = new Array();
            this.offGroundY = 0;
            this.offGroundYInc = 0;
        };
        Pin.prototype.resetStartPos = function () {
            if(this.posTween) {
                this.posTween.kill();
            }
            if(this.bounceTween) {
                this.bounceTween.kill();
            }
            if(this.frameTween) {
                this.frameTween.kill();
            }
            this.rowNum = this.rowNumStore;
            this.isResting = true;
            this.aHitPins = new Array();
            this.offGroundY = 0;
            this.offGroundYInc = 0;
            this.rot = 0;
            this.curFrame = 24;
            this.aHitPins = new Array();
        };
        Pin.prototype.setHitPos = function () {
            this.x = canvas.width / 2 - this.posX * lane.aRowData[Math.floor(this.rowNum)].scale;
            this.y = lane.aRowData[Math.floor(this.rowNum)].y - canvas.height;
            this.startHitScale = (lane.aRowData[Math.floor(this.rowNum)].scale) / 4500;
            this.rowNum += (lane.speed * .5) * delta;
            this.offLane = false;
            this.dropY = 0;
            this.hitX = 0;
            this.hitY = 0;
            this.hitEase = 1;
            this.rot = 0;
            this.startHitY = this.y;
            this.hasWobbled = false;
        };
        Pin.prototype.checkAllPinsHit = function () {
            for(var i = 0; i < aLaneElements.length; i++) {
                if(!aLaneElements[i].isBall && aLaneElements[i].id != this.id && !aLaneElements[i].offLane) {
                    var tempCanHit = true;
                    for(var j = 0; j < this.aHitPins.length; j++) {
                        if(this.aHitPins[j] == aLaneElements[i].id) {
                            tempCanHit = false;
                            break;
                        }
                    }
                    if(tempCanHit) {
                        this.checkPinHit(aLaneElements[i]);
                    }
                }
            }
        };
        Pin.prototype.haveWobble = function () {
            var _this = this;
            this.hasWobbled = true;
            this.isResting = false;
            if(this.bounceTween) {
                this.bounceTween.kill();
            }
            var tempRot = Math.random() * 2 + 1;
            if(Math.random() * 2 > 1) {
                tempRot *= -1;
            }
            this.bounceTween = TweenLite.to(this, .15, {
                rot: tempRot * radian,
                ease: "Quad.easeOut",
                onComplete: function () {
                    _this.bounceTween = TweenLite.to(_this, .3, {
                        rot: -(tempRot * .5) * radian,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            _this.bounceTween = TweenLite.to(_this, .3, {
                                rot: (tempRot * .25) * radian,
                                ease: "Quad.easeInOut",
                                onComplete: function () {
                                    _this.bounceTween = TweenLite.to(_this, .2, {
                                        rot: 0 * radian,
                                        ease: "Quad.easeInOut",
                                        onComplete: function () {
                                            _this.isResting = true;
                                            elementAtRest();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        };
        Pin.prototype.checkPinHit = function (_pin) {
            var _this = this;
            var s1XOffset = _pin.x;
            var s1YOffset = _pin.y;
            var s2XOffset = this.x;
            var s2YOffset = this.y;
            var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
            var radii_squared = (_pin.radius) * (this.radius);
            if(!this.hasWobbled && !this.hitByBall && distance_squared >= radii_squared && distance_squared < radii_squared * 1.2) {
                this.haveWobble();
            }
            if(distance_squared < radii_squared) {
                if(ball.offLane) {
                    playSound("pinTap" + Math.floor(Math.random() * 3));
                }
                var totRadius = (_pin.radius + this.radius) / 2;
                this.hitY = (totRadius - Math.abs(_pin.x - this.x)) / totRadius;
                var tempHitX = 1 - this.hitY;
                if(tempHitX > .5) {
                    tempHitX = this.hitY;
                }
                if(_pin.x > this.x) {
                    this.hitX = -tempHitX;
                } else {
                    this.hitX = tempHitX;
                }
                this.hitByPin = true;
                this.aHitPins.push(_pin.id);
                this.hitX *= .3;
                this.hitY *= .4;
                if(!this.hitByBall) {
                    if(this.posTween) {
                        this.posTween.kill();
                    }
                    if(this.bounceTween) {
                        this.bounceTween.kill();
                    }
                    if(this.frameTween) {
                        this.frameTween.kill();
                    }
                    this.hitEase = 1;
                    this.posTween = TweenLite.to(this, Math.random() * 1.5 + 1.2, {
                        hitEase: 0,
                        ease: "Quad.easeOut",
                        onComplete: function () {
                            _this.isResting = true;
                            elementAtRest();
                        }
                    });
                    var tempRot = 95;
                    if(Math.random() * 2 > 1) {
                        tempRot = -95;
                    }
                    this.bounceTween = TweenLite.to(this, Math.random() * .4 + 1, {
                        rot: tempRot * radian,
                        ease: "Bounce.easeOut"
                    });
                    this.frameTween = TweenLite.to(this, Math.random() * .2 + .9, {
                        curFrame: Math.random() * 49,
                        ease: "Cubic.easeOut"
                    });
                } else {
                    if(this.posTween) {
                        this.posTween.kill();
                    }
                    if(this.frameTween) {
                        this.frameTween.kill();
                    }
                    this.hitEase = 1;
                    this.posTween = TweenLite.to(this, Math.random() * 1.5 + 1.2, {
                        hitEase: 0,
                        ease: "Quad.easeOut",
                        onComplete: function () {
                            _this.isResting = true;
                            elementAtRest();
                        }
                    });
                    this.frameTween = TweenLite.to(this, Math.random() * .2 + .9, {
                        curFrame: Math.random() * 49,
                        ease: "Cubic.easeOut"
                    });
                    this.hitX *= -.7;
                    this.hitY *= -.8;
                }
                this.isResting = false;
            }
        };
        Pin.prototype.checkBallHit = function () {
            var _this = this;
            if(ball.offLane) {
                return;
            }
            var s1XOffset = ball.x;
            var s1YOffset = ball.y;
            var s2XOffset = this.x;
            var s2YOffset = this.y;
            var distance_squared = (((s1XOffset - s2XOffset) * (s1XOffset - s2XOffset)) + ((s1YOffset - s2YOffset) * (s1YOffset - s2YOffset)));
            var radii_squared = (ball.radius) * (this.radius);
            if(!this.hasWobbled && !this.hitByPin && distance_squared >= radii_squared && distance_squared < radii_squared * 1.2) {
                this.haveWobble();
            }
            if(distance_squared < radii_squared) {
                if(!ball.pinHitSound) {
                    ball.pinHitSound = true;
                    var pinsLeft = 0;
                    for(var i = 0; i < aLaneElements.length; i++) {
                        if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                            pinsLeft++;
                        }
                    }
                    if(pinsLeft < 3 || ball.x + ball.gutterX < canvas.width / 2 - 140 || ball.x + ball.gutterX > canvas.width / 2 + 140) {
                        playSound("pinsHit0");
                    } else if(pinsLeft < 6) {
                        playSound("pinsHit" + (Math.floor(Math.random() * 2) + 1));
                    } else {
                        playSound("pinsHit" + (Math.floor(Math.random() * 3) + 1));
                    }
                }
                var totRadius = (ball.radius + this.radius) / 2;
                this.hitY = (totRadius - Math.abs(ball.x - this.x)) / totRadius;
                var tempHitX = 1 - this.hitY;
                if(tempHitX > .5) {
                    tempHitX = this.hitY;
                }
                if(ball.x > this.x) {
                    this.hitX = -tempHitX;
                } else {
                    this.hitX = tempHitX;
                }
                if(this.posTween) {
                    this.posTween.kill();
                }
                if(this.bounceTween) {
                    this.bounceTween.kill();
                }
                if(this.frameTween) {
                    this.frameTween.kill();
                }
                this.hitEase = 1;
                this.posTween = TweenLite.to(this, Math.random() * 2 + 1.5, {
                    hitEase: 0,
                    ease: "Quad.easeOut",
                    onComplete: function () {
                        _this.isResting = true;
                        elementAtRest();
                    }
                });
                var tempRot = 95;
                if(Math.random() * 2 > 1) {
                    tempRot = -95;
                }
                this.bounceTween = TweenLite.to(this, Math.random() * .2 + .9, {
                    rot: tempRot * radian,
                    ease: "Quad.easeOut"
                });
                var tempFrame = Math.min(25 + Math.floor(this.hitY * 25), 48);
                if(Math.random() * 2 > 1) {
                    tempFrame = Math.max(24 - Math.floor(this.hitY * 25), 0);
                }
                this.frameTween = TweenLite.to(this, Math.random() * .2 + .9, {
                    curFrame: tempFrame,
                    ease: "Cubic.easeOut"
                });
                this.hitByBall = true;
                this.isResting = false;
                this.offGroundYInc = -1200 * this.hitY;
            }
        };
        Pin.prototype.update = function () {
            this.radius = this.setRadius * this.scale;
            if(throwState <= 2) {
                this.x = canvas.width / 2 - this.posX * lane.aRowData[Math.floor(this.rowNum)].scale;
                this.y = lane.aRowData[Math.floor(this.rowNum)].y - canvas.height;
                this.scale = (lane.aRowData[Math.floor(this.rowNum)].scale) / 4500;
                this.rowNum += (lane.speed * .5) * delta;
            } else if(throwState > 2) {
                this.x += ((this.hitX * this.hitEase) * 3500) * delta;
                this.y -= ((this.hitY * this.hitEase) * 250 - (this.dropY * 1000)) * delta;
                this.offGroundYInc += 3000 * delta;
                this.offGroundY += this.offGroundYInc * delta;
                if(this.offGroundY > 0) {
                    this.offGroundY = 0;
                    this.offGroundYInc *= -.4;
                }
                if(this.dropY == 0) {
                    this.scale = this.startHitScale + (this.y - this.startHitY) * .006;
                }
                if(this.x < canvas.width / 2 - 180) {
                    this.x = canvas.width / 2 - 180;
                    this.hitX *= -1;
                } else if(this.x > canvas.width / 2 + 180) {
                    this.x = canvas.width / 2 + 180;
                    this.hitX *= -1;
                }
                if(this.y < -355 && !this.offLane) {
                    if(this.hitY < .85 || standingPins < 4) {
                        this.hitY = 0;
                        if(this.dropTween) {
                            this.posTween.kill();
                        }
                        this.dropY = 0;
                        this.dropTween = TweenLite.to(this, .5, {
                            dropY: 1,
                            ease: "Quad.easeIn"
                        });
                        this.hitByBall = true;
                        this.hitByPin = true;
                        this.offLane = true;
                    } else {
                        this.y = -355;
                        this.hitY *= -.2;
                    }
                }
                if(!this.hitByBall && !ball.inGutter) {
                    this.checkBallHit();
                }
                if(!this.hitByPin) {
                    this.checkAllPinsHit();
                }
            }
        };
        Pin.prototype.render = function () {
            var tempCurFrame = Math.floor(this.curFrame);
            var imgX = (tempCurFrame * this.oPinImgData.oData.spriteWidth) % this.oPinImgData.img.width;
            var imgY = Math.floor(tempCurFrame / (this.oPinImgData.img.width / this.oPinImgData.oData.spriteWidth)) * this.oPinImgData.oData.spriteHeight;
            ctx.save();
            ctx.translate(this.x, canvas.height + this.y - this.offGroundY * this.scale);
            ctx.scale(this.scale, this.scale);
            ctx.rotate(-this.rot);
            this.rotXOffset = (this.rot / radian) / 95 * 28;
            ctx.drawImage(this.oPinReflectImgData.img, imgX, imgY, this.oPinReflectImgData.oData.spriteWidth, this.oPinReflectImgData.oData.spriteHeight, -this.oPinReflectImgData.oData.spriteWidth / 2 - this.rotXOffset, -25, this.oPinReflectImgData.oData.spriteWidth, this.oPinReflectImgData.oData.spriteHeight);
            ctx.rotate(this.rot);
            ctx.scale(1 / this.scale, 1 / this.scale);
            ctx.translate(0, this.offGroundY * this.scale);
            ctx.translate(0, this.offGroundY * this.scale);
            ctx.scale(this.scale, this.scale);
            ctx.rotate(this.rot);
            ctx.drawImage(this.oPinImgData.img, imgX, imgY, this.oPinImgData.oData.spriteWidth, this.oPinImgData.oData.spriteHeight, -this.oPinImgData.oData.spriteWidth / 2 - this.rotXOffset, -this.oPinImgData.oData.spriteHeight + 25, this.oPinImgData.oData.spriteWidth, this.oPinImgData.oData.spriteHeight);
            ctx.restore();
        };
        return Pin;
    })();
    Elements.Pin = Pin;    
})(Elements || (Elements = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Elements;
(function (Elements) {
    var Firework = (function (_super) {
        __extends(Firework, _super);
        function Firework() {
                _super.call(this, assetLib.getData("firework"), 30, 30, "explode");
            this.vy = 0;
            this.setAnimType("once", "explode");
            this.animEndedFunc = function () {
                this.removeMe = true;
            };
        }
        Firework.prototype.update = function (_trackX, _trackY) {
            this.vy += 150 * delta;
            this.y += this.vy * delta;
            _super.prototype.updateAnimation.call(this, delta);
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return Firework;
    })(Utils.AnimSprite);
    Elements.Firework = Firework;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var FallingItem = (function () {
        function FallingItem() {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.oPinImgData = assetLib.getData("pin");
            this.reset();
            this.y = Math.random() * canvas.height - canvas.height / 2;
        }
        FallingItem.prototype.reset = function () {
            this.x = Math.random() * canvas.width;
            this.y = -(canvas.height / 2 + 200);
            this.incY = Math.random() * 150 + 200;
            this.id = Math.floor(Math.random() * 49);
            this.rotation = Math.random() * 3.14;
            this.rotInc = Math.random() * 4 - 2;
            this.scale = 1;
        };
        FallingItem.prototype.update = function () {
            this.y += delta * this.incY;
            this.rotation += delta * this.rotInc;
            if(this.y > canvas.height / 2 + 200) {
                this.reset();
            }
        };
        FallingItem.prototype.render = function () {
            ctx.save();
            ctx.translate(this.x, canvas.height / 2 + this.y);
            ctx.rotate(this.rotation);
            var id = this.id;
            var imgX = (id * this.oPinImgData.oData.spriteWidth) % this.oPinImgData.img.width;
            var imgY = Math.floor(id / (this.oPinImgData.img.width / this.oPinImgData.oData.spriteWidth)) * this.oPinImgData.oData.spriteHeight;
            ctx.drawImage(this.oPinImgData.img, imgX + 1, imgY + 1, this.oPinImgData.oData.spriteWidth - 2, this.oPinImgData.oData.spriteHeight - 2, -(this.oPinImgData.oData.spriteWidth / 2) * this.scale, -(this.oPinImgData.oData.spriteHeight / 2) * this.scale, this.oPinImgData.oData.spriteWidth * this.scale, this.oPinImgData.oData.spriteHeight * this.scale);
            ctx.restore();
        };
        return FallingItem;
    })();
    Elements.FallingItem = FallingItem;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var TutAnim0 = (function (_super) {
        __extends(TutAnim0, _super);
        function TutAnim0() {
                _super.call(this, assetLib.getData("tut0"), 18, 10, "anim");
        }
        TutAnim0.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        TutAnim0.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return TutAnim0;
    })(Utils.AnimSprite);
    Elements.TutAnim0 = TutAnim0;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var TutAnim1 = (function (_super) {
        __extends(TutAnim1, _super);
        function TutAnim1() {
                _super.call(this, assetLib.getData("tut1"), 18, 10, "anim");
        }
        TutAnim1.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        TutAnim1.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return TutAnim1;
    })(Utils.AnimSprite);
    Elements.TutAnim1 = TutAnim1;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var BallRoll = (function (_super) {
        __extends(BallRoll, _super);
        function BallRoll(_speed) {
                _super.call(this, assetLib.getData("ballRoll"), _speed, 10, "anim");
        }
        BallRoll.prototype.update = function () {
            _super.prototype.updateAnimation.call(this, delta);
        };
        BallRoll.prototype.render = function () {
            _super.prototype.renderSimple.call(this, ctx);
        };
        return BallRoll;
    })(Utils.AnimSprite);
    Elements.BallRoll = BallRoll;    
})(Elements || (Elements = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var maxWidth = 550;
var minWidth = 550;
var maxHeight = 850;
var minHeight = 850;
var canvasX;
var canvasY;
var canvasScale;
var div = document.getElementById('canvas-wrapper');
var sound;
var music;
var aEffects;
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
var isRotated = false;
var prevGameState;
var hasFocus = true;
var saveDataHandler = new Utils.SaveDataHandler("cnbowlv2");
if(navigator.userAgent.match(/MSIE\s([\d]+)/)) {
    isIE10 = true;
}
var deviceAgent = navigator.userAgent.toLowerCase();
if(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if(deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
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
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
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
(window).onpageshow = function () {
    if(!hasFocus) {
        if(userInput) {
            userInput.checkKeyFocus();
        }
        if(!muted && gameState != "pause" && gameState != "splash" && gameState != "loading") {
            Howler.mute(false);
            playMusic();
        }
    }
    hasFocus = true;
};
(window).onpagehide = function () {
    hasFocus = false;
    Howler.mute(true);
    music.pause();
};
function playMusic() {
    if(!music.playing()) {
        music.play();
    }
}
window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    setTimeout(function () {
        resizeCanvas();
    }, 2000);
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            resizeCanvas();
        }, 500);
        setTimeout(function () {
            resizeCanvas();
        }, 200);
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
if(!isIE10 && !isSharpStock && !isXperiaAStock && !isFujitsuStock && (typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {
    audioType = 1;
    sound = new Howl({
        src: [
            'audio/sound.mp3'
        ],
        sprite: {
            challengeProgressExplode: [
                0, 
                2500
            ],
            gameOverFail: [
                3000, 
                1000
            ],
            jump: [
                4500, 
                1400
            ],
            ballDrop0: [
                6000, 
                750
            ],
            ballDrop1: [
                7000, 
                1000
            ],
            ballOff0: [
                8000, 
                1000
            ],
            ballOff1: [
                9500, 
                700
            ],
            pinsHit0: [
                10500, 
                1500
            ],
            pinsHit1: [
                12500, 
                1500
            ],
            pinsHit2: [
                14500, 
                1500
            ],
            pinsHit3: [
                16500, 
                2000
            ],
            lockedBut: [
                19500, 
                1000
            ],
            shotMiss: [
                21000, 
                1000
            ],
            click: [
                22500, 
                500
            ],
            selectChar: [
                23500, 
                500
            ],
            switchBowlerOp: [
                24500, 
                1500
            ],
            challengeProgressIntro: [
                26500, 
                2000
            ],
            switchBowlerCur: [
                29000, 
                2000
            ],
            teamOutro: [
                31500, 
                2000
            ],
            gameOverSuccess: [
                34000, 
                2000
            ],
            shotStrike: [
                36500, 
                1600
            ],
            ballRolling: [
                38500, 
                2500
            ],
            hitPost: [
                41500, 
                1500
            ],
            cheer2: [
                43500, 
                3500
            ],
            cheer5: [
                47500, 
                6500
            ],
            cheer4: [
                54500, 
                5000
            ],
            cheer3: [
                60000, 
                4500
            ],
            cheer0: [
                65000, 
                3500
            ],
            cheer1: [
                69000, 
                4500
            ],
            firework: [
                74000, 
                1500
            ],
            shotScore0: [
                76000, 
                1100
            ],
            shotScore1: [
                78000, 
                1500
            ],
            shotScore2: [
                80500, 
                1500
            ],
            shotScore3: [
                83000, 
                2000
            ],
            shotScore4: [
                86000, 
                1200
            ],
            pinTap0: [
                87500, 
                300
            ],
            pinTap1: [
                88000, 
                300
            ],
            pinTap2: [
                88500, 
                300
            ],
            cheerBad: [
                89000, 
                3500
            ],
            silence: [
                2600, 
                100
            ]
        }
    });
    music = new Howl({
        src: [
            'audio/music.mp3'
        ],
        volume: 0,
        loop: true
    });
} else {
    audioType = 0;
}
var panel;
var firstGoState = 0;
var background;
var totalScore = 0;
var levelScore = 0;
var levelNum = 0;
var aTutorials = new Array();
var panelFrame;
var oLogoData = {
};
var oLogoBut;
var musicTween;
var oImageIds = {
};
var lane;
var ball;
var throwState = 0;
var startTouchY = 0;
var oTiltData = {
    gamma: 0,
    beta: 0,
    alpha: 0
};
var hasTilt = false;
var orientTestInc = 0;
var aLaneElements;
var sortFlipFlop = true;
var aBalls;
var whosGo;
var shotNum;
var standingPins;
var aFallingItems;
var gameType;
var aCharIcons = new Array({
    offsetX: 0,
    offsetY: -7.5,
    scrollGap: 0,
    panelId: 1,
    stat0: .3,
    stat1: .5,
    stat2: .2,
    frames: 4,
    team: 0
}, {
    offsetX: 5,
    offsetY: -19,
    scrollGap: 0,
    panelId: 3,
    stat0: .4,
    stat1: .3,
    stat2: .3,
    frames: 4,
    team: 0
}, {
    offsetX: -10,
    offsetY: 0,
    scrollGap: 0,
    panelId: 0,
    stat0: .3,
    stat1: .6,
    stat2: .6,
    frames: 4,
    team: 0
}, {
    offsetX: -5,
    offsetY: -2.5,
    scrollGap: 0,
    panelId: 3,
    stat0: .6,
    stat1: .4,
    stat2: .3,
    frames: 6,
    team: 1
}, {
    offsetX: 0,
    offsetY: -27,
    scrollGap: 0,
    panelId: 0,
    stat0: .5,
    stat1: .2,
    stat2: .3,
    frames: 6,
    team: 1
}, {
    offsetX: 4,
    offsetY: -17,
    scrollGap: 0,
    panelId: 2,
    stat0: .3,
    stat1: .6,
    stat2: .5,
    frames: 6,
    team: 1
}, {
    offsetX: 0,
    offsetY: -6,
    scrollGap: 0,
    panelId: 1,
    stat0: .4,
    stat1: .7,
    stat2: .6,
    frames: 8,
    team: 2
}, {
    offsetX: 0,
    offsetY: -11,
    scrollGap: 0,
    panelId: 1,
    stat0: .8,
    stat1: .5,
    stat2: .4,
    frames: 8,
    team: 2
}, {
    offsetX: -32,
    offsetY: -7,
    scrollGap: 0,
    panelId: 2,
    stat0: .7,
    stat1: .6,
    stat2: .7,
    frames: 8,
    team: 2
}, {
    offsetX: -14,
    offsetY: -5,
    scrollGap: 0,
    panelId: 0,
    stat0: .9,
    stat1: .6,
    stat2: .7,
    frames: 8,
    team: 3
}, {
    offsetX: -4.5,
    offsetY: -13,
    scrollGap: 0,
    panelId: 1,
    stat0: .5,
    stat1: .9,
    stat2: .3,
    frames: 8,
    team: 3
}, {
    offsetX: -7,
    offsetY: 0,
    scrollGap: 0,
    panelId: 0,
    stat0: .6,
    stat1: .8,
    stat2: .7,
    frames: 8,
    team: 3
}, {
    offsetX: -11,
    offsetY: -6,
    scrollGap: 0,
    panelId: 1,
    stat0: .4,
    stat1: .5,
    stat2: .3,
    frames: 8,
    team: 0
}, {
    offsetX: 0,
    offsetY: 0
});
var curChar = 99;
var opChar = 99;
var curLevel = 0;
var oCurGameScores = {
    totalScore: 0
};
var oOpGameScores = {
    totalScore: 0
};
var curFrame;
var playerNum;
var loseTextId = Math.floor(Math.random() * 3);
var hasSwerved = false;
var nonSwerveCount = 0;
loadLang();
function loadLang() {
    var xobj = new XMLHttpRequest();
    xobj.open('GET', "json/lang.json", true);
    xobj.onreadystatechange = function () {
        if(xobj.readyState == 4 && xobj.status == 200) {
            curLang = JSON.parse(xobj.responseText).lang;
            loadPreAssets();
        }
    };
    xobj.send(null);
}
function initTiltCheck() {
    if(isMobile && (window).DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", startOrientTest, false);
        window.setTimeout(endOrientTest, 1000);
    } else {
        initSplash();
    }
}
function startOrientTest(eventData) {
    orientTestInc += eventData.gamma + eventData.beta + eventData.alpha;
}
function endOrientTest() {
    if(orientTestInc > 0) {
        hasTilt = true;
    } else {
        hasTilt = false;
    }
    window.removeEventListener("deviceorientation", startOrientTest, false);
    initSplash();
}
function initSplash() {
    gameState = "splash";
    if(curLang == "ar") {
        document.body.style.direction = "rtl";
    }
    if(audioType == 1 && !muted) {
        playMusic();
        if(!hasFocus) {
            music.pause();
        }
    }
    for(var i = 0; i < 12; i++) {
        if(saveDataHandler.aLevelStore[i] > 0) {
            firstGoState = 3;
            break;
        }
    }
    initStartScreen();
    setTimeout(function () {
        resizeCanvas();
    }, 500);
}
function initStartScreen() {
    gameState = "start";
    if(audioType == 1) {
        music.fade(music.volume(), .4, 10);
    }
    background = new Elements.Background();
    var oTournamentBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -120, 
            -135
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.onePBut,
        idOver: oImageIds.onePButOver,
        flash: true
    };
    var oQuickGameBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            120, 
            -135
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.twoPBut,
        idOver: oImageIds.twoPButOver,
        flash: true
    };
    var oInfoBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -110, 
            41
        ],
        align: [
            1, 
            0
        ],
        id: oImageIds.infoBut,
        idOver: oImageIds.infoButOver
    };
    userInput.addHitArea("1PFromTitle", butEventHandler, null, "image", oTournamentBut);
    userInput.addHitArea("2PFromTitle", butEventHandler, null, "image", oQuickGameBut);
    userInput.addHitArea("infoFromTitle", butEventHandler, null, "image", oInfoBut);
    var aButs = new Array(oTournamentBut, oQuickGameBut, oInfoBut);
    addMuteBut(aButs);
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    aEffects = new Array();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function init1PScreen() {
    gameState = "1PStart";
    if(audioType == 1) {
        music.fade(music.volume(), .4, 10);
    }
    background = new Elements.Background();
    var oTournamentBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -120, 
            -135
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.tournamentBut,
        idOver: oImageIds.tournamentButOver,
        flash: true
    };
    var oQuickGameBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            120, 
            -135
        ],
        align: [
            .5, 
            1
        ],
        id: oImageIds.quickGameBut,
        idOver: oImageIds.quickGameButOver,
        flash: true
    };
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("tournamentFrom1PTitle", butEventHandler, null, "image", oTournamentBut);
    userInput.addHitArea("quickGameFrom1PTitle", butEventHandler, null, "image", oQuickGameBut);
    userInput.addHitArea("backFrom1PTitle", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oTournamentBut, oQuickGameBut, oBackBut);
    addMuteBut(aButs);
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    aEffects = new Array();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    update1PScreenEvent();
}
function addMuteBut(_aButs) {
    if(audioType == 1) {
        var mb = oImageIds.muteBut0;
        var mbOver = oImageIds.muteBut0Over;
        if(muted) {
            mb = oImageIds.muteBut1;
            mbOver = oImageIds.muteBut1Over;
        }
        var oMuteBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -40, 
                40
            ],
            align: [
                1, 
                0
            ],
            id: mb,
            idOver: mbOver
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", oMuteBut);
        for(var i = 0; i < _aButs.length; i++) {
            if(_aButs[i].id == oImageIds.muteBut0 || _aButs[i].id == oImageIds.muteBut1) {
                return;
            }
        }
        _aButs.push(oMuteBut);
    }
}
function initCreditsScreen() {
    gameState = "credits";
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    var oResetBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -60, 
            -43
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.resetBut,
        idOver: oImageIds.resetButOver
    };
    userInput.addHitArea("backFromInfo", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetBut);
    var aButs = new Array(oBackBut, oResetBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function isCharUnlocked(_id) {
    var temp = true;
    if(_id == 2 || _id == 5 || _id == 8 || _id == 11) {
        temp = false;
        for(var i = 0; i < 12; i++) {
            if(saveDataHandler.aLevelStore[i] > _id) {
                if(_id == 2 && saveDataHandler.aLevelStore[13] == 0) {
                    saveDataHandler.aLevelStore[13] = 1;
                    saveDataHandler.saveData();
                } else if(_id == 5 && saveDataHandler.aLevelStore[14] == 0) {
                    saveDataHandler.aLevelStore[14] = 1;
                    saveDataHandler.saveData();
                } else if(_id == 8 && saveDataHandler.aLevelStore[15] == 0) {
                    saveDataHandler.aLevelStore[15] = 1;
                    saveDataHandler.saveData();
                } else if(_id == 12 && saveDataHandler.aLevelStore[16] == 0) {
                    saveDataHandler.aLevelStore[16] = 1;
                    saveDataHandler.saveData();
                }
                break;
            }
        }
    }
    if(_id == 2 && saveDataHandler.aLevelStore[13] == 1) {
        temp = true;
    } else if(_id == 5 && saveDataHandler.aLevelStore[14] == 1) {
        temp = true;
    } else if(_id == 8 && saveDataHandler.aLevelStore[15] == 1) {
        temp = true;
    } else if(_id == 12 && saveDataHandler.aLevelStore[16] == 1) {
        temp = true;
    }
    return temp;
}
function initUserCharSelectScreen() {
    gameState = "userCharSelect";
    curChar = 99;
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("backFromUserCharSelect", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for(var i = 0; i < 13; i++) {
        if(isCharUnlocked(i)) {
            var oCharBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    (i % 5) * 110 + aCharIcons[i].offsetX * .3 - 222, 
                    Math.floor(i / 5) * 120 + aCharIcons[i].offsetY * .3 - 380
                ],
                align: [
                    .5, 
                    1
                ],
                id: oImageIds["smallIcon" + i],
                idOver: oImageIds["smallIcon" + i + "Over"],
                flash: true,
                flareScale: .5
            };
            userInput.addHitArea("userCharSelect", butEventHandler, {
                id: i
            }, "image", oCharBut);
        } else {
            var oCharBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    (i % 5) * 110 + aCharIcons[i].offsetX * .3 - 222, 
                    Math.floor(i / 5) * 120 + aCharIcons[i].offsetY * .3 - 380
                ],
                align: [
                    .5, 
                    1
                ],
                id: oImageIds.smallIcon13,
                idOver: oImageIds.smallIcon13
            };
            userInput.addHitArea("userCharSelect", butEventHandler, {
                id: 100 + i
            }, "image", oCharBut);
        }
        aButs.push(oCharBut);
    }
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateUserCharSelectScreenEvent();
}
function initOpCharSelectScreen() {
    gameState = "opCharSelect";
    opChar = 99;
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("backFromOpCharSelect", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    for(var i = 0; i < 13; i++) {
        if(isCharUnlocked(i)) {
            var oCharBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    (i % 5) * 110 + aCharIcons[i].offsetX * .3 - 222, 
                    Math.floor(i / 5) * 120 + aCharIcons[i].offsetY * .3 - 380
                ],
                align: [
                    .5, 
                    1
                ],
                id: oImageIds["smallIcon" + i],
                idOver: oImageIds["smallIcon" + i + "Over"],
                flash: true,
                flareScale: .5
            };
            userInput.addHitArea("opCharSelect", butEventHandler, {
                id: i
            }, "image", oCharBut);
        } else {
            var oCharBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    (i % 5) * 110 + aCharIcons[i].offsetX * .3 - 222, 
                    Math.floor(i / 5) * 120 + aCharIcons[i].offsetY * .3 - 380
                ],
                align: [
                    .5, 
                    1
                ],
                id: oImageIds.smallIcon13,
                idOver: oImageIds.smallIcon13
            };
            userInput.addHitArea("opCharSelect", butEventHandler, {
                id: 100 + i
            }, "image", oCharBut);
        }
        aButs.push(oCharBut);
    }
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateOpCharSelectScreenEvent();
}
function initChallengeProgressScreen() {
    gameState = "challengeProgress";
    playSound("challengeProgressIntro");
    if(audioType == 1) {
        music.fade(music.volume(), 0, 10);
    }
    var aButs = new Array();
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateChallengeProgressScreenEvent();
}
function initTeamIntro() {
    gameState = "teamIntro";
    if(audioType == 1) {
        music.fade(music.volume(), .4, 2000);
    }
    playSound("challengeProgressExplode");
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("backFromTeamIntro", butEventHandler, null, "image", oBackBut);
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -108, 
            -82
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    userInput.addHitArea("nextFromTeamIntro", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oBackBut, oNextBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateTeamIntroScreenEvent();
}
function initTeamOutro() {
    gameState = "teamOutro";
    playSound("teamOutro");
    var aButs = new Array();
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateTeamOutroScreenEvent();
}
function initGameIntro() {
    gameState = "gameIntro";
    opChar = curLevel;
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("backFromGameIntro", butEventHandler, null, "image", oBackBut);
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -108, 
            -82
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    userInput.addHitArea("nextFromGameIntro", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oBackBut, oNextBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    aFallingItems = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.FallingItem();
        aFallingItems.push(bub);
    }
    background.bounceBg();
    previousTime = new Date().getTime();
    updateGameIntroScreenEvent();
}
function initGame() {
    gameState = "game";
    throwState = 0;
    whosGo = 0;
    shotNum = 0;
    curFrame = 0;
    nonSwerveCount = 0;
    if(audioType == 1) {
        music.fade(music.volume(), .7, 500);
    }
    var aButs = new Array();
    if(firstGoState == 3) {
        aButs = setGameControls();
    } else {
        firstGoState = 0;
        var oNextBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                0, 
                0
            ],
            align: [
                .5, 
                .85
            ],
            id: oImageIds.playBut,
            idOver: oImageIds.playButOver,
            flash: true
        };
        userInput.addHitArea("nextFromTutorial0", butEventHandler, null, "image", oNextBut);
        aButs = new Array(oNextBut);
    }
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    oCurGameScores.aFrameScores = new Array();
    oOpGameScores.aFrameScores = new Array();
    lane = new Elements.Lane();
    ball = new Elements.Ball();
    previousTime = new Date().getTime();
    updateGameEvent();
}
function setGameControls() {
    userInput.addKey("swerveRight0", butEventHandler, null, 39);
    userInput.addKey("swerveLeft0", butEventHandler, null, 37);
    userInput.addKey("swerveRight1", butEventHandler, null, 68);
    userInput.addKey("swerveLeft1", butEventHandler, null, 65);
    if(hasTilt) {
        if((window).DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", devOrientHandler, false);
        }
    }
    var oPauseBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            40, 
            40
        ],
        align: [
            0, 
            0
        ],
        id: oImageIds.pauseBut,
        idOver: oImageIds.pauseButOver
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", oPauseBut);
    var aButs = new Array(oPauseBut);
    if((firstGoState == 1 || firstGoState == 3) && (whosGo == 0 || (whosGo == 1 && playerNum == 2))) {
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                50, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    }
    return aButs;
}
function stopUserControl() {
    userInput.removeKey("swerveRight0");
    userInput.removeKey("swerveLeft0");
    userInput.removeKey("swerveRight1");
    userInput.removeKey("swerveLeft1");
    userInput.removeHitArea("gameTouch");
    if(hasTilt) {
        if((window).DeviceOrientationEvent) {
            window.removeEventListener("deviceorientation", devOrientHandler, false);
        }
    }
}
function devOrientHandler(eventData) {
    oTiltData.gamma = eventData.gamma;
    oTiltData.beta = eventData.beta;
    oTiltData.alpha = eventData.alpha;
    if(canvas.width > canvas.height) {
        if(oTiltData.gamma > 0) {
            ball.leftSwerve = Math.max(Math.min(oTiltData.beta / 12, 1), -1);
            ball.rightSwerve = 0;
        } else {
            ball.leftSwerve = Math.max(Math.min(oTiltData.beta / -12, 1), -1);
            ball.rightSwerve = 0;
        }
    } else {
        if(oTiltData.beta > 0) {
            ball.leftSwerve = Math.max(Math.min(oTiltData.gamma / -12, 1), -1);
            ball.rightSwerve = 0;
        } else {
            ball.leftSwerve = Math.max(Math.min(oTiltData.gamma / 12, 1), -1);
            ball.rightSwerve = 0;
        }
    }
}
function initPause() {
    gameState = "pause";
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            -75
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    var oRestartBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            0, 
            75
        ],
        align: [
            .5, 
            .5
        ],
        id: oImageIds.replayBut,
        idOver: oImageIds.replayButOver,
        flash: true
    };
    var oQuitBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.quitBut,
        idOver: oImageIds.quitButOver
    };
    userInput.addHitArea("playFromPause", butEventHandler, null, "image", oPlayBut);
    userInput.addHitArea("restartFromPause", butEventHandler, null, "image", oRestartBut);
    userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);
    var aButs = new Array(oPlayBut, oRestartBut, oQuitBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    background = new Elements.Background();
    updatePauseEvent();
}
function resumeGame() {
    gameState = "game";
    var aButs = new Array();
    panel = new Elements.Panel(gameState, aButs);
    panel.aButs = setGameControls();
    addMuteBut(panel.aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    updateGameEvent();
}
function butEventHandler(_id, _oData) {
    if(gameState == "rotated") {
        return;
    }
    switch(_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            preAssetLib = new Utils.AssetLoader(curLang, [
                {
                    id: "preloadImage",
                    file: "images/preloadImage.jpg"
                }
            ], ctx, canvas.width, canvas.height, false);
            preAssetLib.onReady(initLoadAssets);
            break;
        case "infoFromTitle":
            playSound("click");
            userInput.removeHitArea("1PFromTitle");
            userInput.removeHitArea("2PFromTitle");
            userInput.removeHitArea("infoFromTitle");
            userInput.removeHitArea("mute");
            initCreditsScreen();
            break;
        case "backFromInfo":
            playSound("click");
            userInput.removeHitArea("backFromInfo");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "resetData":
            playSound("click");
            userInput.removeHitArea("backFromInfo");
            userInput.removeHitArea("resetData");
            userInput.removeHitArea("mute");
            firstGoState = 0;
            saveDataHandler.resetData();
            initStartScreen();
            break;
        case "1PFromTitle":
            playSound("click");
            playerNum = 1;
            userInput.removeHitArea("1PFromTitle");
            userInput.removeHitArea("2PFromTitle");
            userInput.removeHitArea("infoFromTitle");
            userInput.removeHitArea("mute");
            init1PScreen();
            break;
        case "2PFromTitle":
            playSound("click");
            playerNum = 2;
            gameType = 1;
            userInput.removeHitArea("1PFromTitle");
            userInput.removeHitArea("2PFromTitle");
            userInput.removeHitArea("infoFromTitle");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "tournamentFrom1PTitle":
            playSound("click");
            gameType = 0;
            userInput.removeHitArea("tournamentFrom1PTitle");
            userInput.removeHitArea("quickGameFrom1PTitle");
            userInput.removeHitArea("backFrom1PTitle");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "quickGameFrom1PTitle":
            playSound("click");
            gameType = 1;
            userInput.removeHitArea("tournamentFrom1PTitle");
            userInput.removeHitArea("quickGameFrom1PTitle");
            userInput.removeHitArea("backFrom1PTitle");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "backFrom1PTitle":
            playSound("click");
            userInput.removeHitArea("tournamentFrom1PTitle");
            userInput.removeHitArea("quickGameFrom1PTitle");
            userInput.removeHitArea("backFrom1PTitle");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "backFromUserCharSelect":
            playSound("click");
            userInput.removeHitArea("backFromUserCharSelect");
            userInput.removeHitArea("userCharSelect");
            userInput.removeHitArea("nextFromUserCharSelect");
            userInput.removeHitArea("mute");
            if(playerNum == 1) {
                init1PScreen();
            } else {
                initStartScreen();
            }
            break;
        case "userCharSelect":
            if(curChar == _oData.id) {
                return;
            }
            if(_oData.id > 100) {
                curChar = _oData.id - 100;
                panel.tweenInUserUnlockInfo();
                userInput.removeHitArea("nextFromUserCharSelect");
                panel.removeBut(oImageIds.playBut);
                playSound("lockedBut");
            } else {
                playSound("click");
                playSound("selectChar");
                curChar = _oData.id;
                panel.tweenInUserChar();
                userInput.removeHitArea("nextFromUserCharSelect");
                panel.removeBut(oImageIds.playBut);
                var oNextBut = {
                    oImgData: assetLib.getData("uiButs"),
                    aPos: [
                        -108, 
                        -82
                    ],
                    align: [
                        1, 
                        1
                    ],
                    id: oImageIds.playBut,
                    idOver: oImageIds.playButOver,
                    flash: true
                };
                userInput.addHitArea("nextFromUserCharSelect", butEventHandler, null, "image", oNextBut);
                panel.aButs.push(oNextBut);
            }
            break;
        case "nextFromUserCharSelect":
            playSound("click");
            userInput.removeHitArea("backFromUserCharSelect");
            userInput.removeHitArea("userCharSelect");
            userInput.removeHitArea("nextFromUserCharSelect");
            userInput.removeHitArea("mute");
            if(gameType == 0 && playerNum == 1) {
                if(saveDataHandler.aLevelStore[curChar] == 12) {
                    saveDataHandler.aLevelStore[curChar] = 0;
                    saveDataHandler.saveData();
                }
                curLevel = saveDataHandler.aLevelStore[curChar];
                if(curLevel == 0) {
                    initChallengeProgressScreen();
                } else {
                    initGameIntro();
                }
            } else {
                initOpCharSelectScreen();
            }
            break;
        case "opCharSelect":
            if(curChar == _oData.id || opChar == _oData.id) {
                return;
            }
            if(_oData.id > 100) {
                opChar = _oData.id - 100;
                panel.tweenInOpUnlockInfo();
                userInput.removeHitArea("nextFromOpCharSelect");
                panel.removeBut(oImageIds.playBut);
            } else {
                playSound("click");
                opChar = _oData.id;
                panel.tweenInOpChar();
                userInput.removeHitArea("nextFromOpCharSelect");
                panel.removeBut(oImageIds.playBut);
                var oNextBut = {
                    oImgData: assetLib.getData("uiButs"),
                    aPos: [
                        -108, 
                        -82
                    ],
                    align: [
                        1, 
                        1
                    ],
                    id: oImageIds.playBut,
                    idOver: oImageIds.playButOver,
                    flash: true
                };
                userInput.addHitArea("nextFromOpCharSelect", butEventHandler, null, "image", oNextBut);
                panel.aButs.push(oNextBut);
            }
            break;
        case "backFromOpCharSelect":
            playSound("click");
            userInput.removeHitArea("backFromOpCharSelect");
            userInput.removeHitArea("opCharSelect");
            userInput.removeHitArea("nextFromOpCharSelect");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "nextFromOpCharSelect":
            playSound("click");
            userInput.removeHitArea("backFromOpCharSelect");
            userInput.removeHitArea("opCharSelect");
            userInput.removeHitArea("nextFromOpCharSelect");
            userInput.removeHitArea("mute");
            initGame();
            break;
        case "backFromTeamIntro":
            playSound("click");
            userInput.removeHitArea("backFromTeamIntro");
            userInput.removeHitArea("nextFromTeamIntro");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "nextFromTeamIntro":
            playSound("click");
            userInput.removeHitArea("backFromTeamIntro");
            userInput.removeHitArea("nextFromTeamIntro");
            userInput.removeHitArea("mute");
            initGameIntro();
            break;
        case "backFromGameIntro":
            playSound("click");
            userInput.removeHitArea("backFromGameIntro");
            userInput.removeHitArea("nextFromGameIntro");
            userInput.removeHitArea("mute");
            initUserCharSelectScreen();
            break;
        case "nextFromGameIntro":
            playSound("click");
            userInput.removeHitArea("backFromGameIntro");
            userInput.removeHitArea("nextFromGameIntro");
            userInput.removeHitArea("mute");
            initGame();
            break;
        case "nextFromTutorial0":
            playSound("click");
            userInput.removeHitArea("nextFromTutorial0");
            panel.removeBut(oImageIds.playBut);
            firstGoState = 1;
            panel.aButs = setGameControls();
            addMuteBut(panel.aButs);
            break;
        case "nextFromTutorial1":
            playSound("click");
            userInput.removeHitArea("nextFromTutorial1");
            panel.removeBut(oImageIds.playBut);
            firstGoState = 3;
            panel.aButs = setGameControls();
            addMuteBut(panel.aButs);
            ball.ballRelease();
            break;
        case "gameTouch":
            if(firstGoState == 2) {
                return;
            }
            if(throwState == 0 && _oData.isDown && !_oData.isBeingDragged) {
                throwState = 1;
                ball.startHold(_oData.x, _oData.y - canvas.height);
            } else if(throwState == 1) {
                if(_oData.isBeingDragged) {
                    ball.setHoldPos(_oData.x, _oData.y - canvas.height);
                } else {
                    if(throwState == 1) {
                        if(ball.speedY > ball.speedToThrow) {
                            if(firstGoState == 1) {
                                panel.showSwerveTut();
                                firstGoState = 2;
                            } else {
                                if(firstGoState == 1 || firstGoState == 2) {
                                    panel.showSwerveTut();
                                    firstGoState = 2;
                                } else {
                                    ball.ballRelease();
                                }
                            }
                        } else {
                            throwState = 0;
                            ball.resetStartPos();
                        }
                    }
                }
            } else if(throwState == 2 && ((!hasTilt && isMobile) || !isMobile)) {
                if(_oData.isDown) {
                    if(ball.allowSwerve) {
                        if(ball.canDetectSwerve) {
                            hasSwerved = true;
                        }
                        ball.leftSwerve = 0;
                        ball.rightSwerve = -1;
                        if(_oData.x < canvas.width / 2) {
                            ball.leftSwerve = 1;
                            ball.rightSwerve = 0;
                        }
                    }
                } else {
                    ball.allowSwerve = true;
                    ball.leftSwerve = 0;
                    ball.rightSwerve = 0;
                }
            }
            break;
        case "swerveLeft0":
        case "swerveLeft1":
            if(_oData.isDown) {
                hasSwerved = true;
                ball.leftSwerve = 1;
                ball.rightSwerve = 0;
            } else {
                ball.leftSwerve = 0;
            }
            break;
        case "swerveRight0":
        case "swerveRight1":
            if(_oData.isDown) {
                hasSwerved = true;
                ball.rightSwerve = -1;
                ball.leftSwerve = 0;
            } else {
                ball.rightSwerve = 0;
            }
            break;
        case "backFromGameOver":
            playSound("click");
            userInput.removeHitArea("backFromGameOver");
            userInput.removeHitArea("nextFromGameOver");
            userInput.removeHitArea("replayFromGameOver");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "nextFromGameOver":
            playSound("click");
            userInput.removeHitArea("backFromGameOver");
            userInput.removeHitArea("nextFromGameOver");
            userInput.removeHitArea("replayFromGameOver");
            userInput.removeHitArea("mute");
            curLevel++;
            if(curLevel % 3 == 0) {
                initTeamOutro();
            } else {
                initGameIntro();
            }
            break;
        case "replayFromGameOver":
            playSound("click");
            userInput.removeHitArea("backFromGameOver");
            userInput.removeHitArea("nextFromGameOver");
            userInput.removeHitArea("replayFromGameOver");
            userInput.removeHitArea("mute");
            initGame();
            break;
        case "mute":
            playSound("click");
            toggleMute();
            if(muted) {
                panel.switchBut(oImageIds.muteBut0, oImageIds.muteBut1, oImageIds.muteBut1Over);
            } else {
                panel.switchBut(oImageIds.muteBut1, oImageIds.muteBut0, oImageIds.muteBut0Over);
            }
            break;
        case "pause":
            if(panel.posY0 != 500 || ball.offLane || (whosGo == 1 && playerNum == 1 && throwState < 2)) {
                console.log("no pause");
                return;
            }
            playSound("click");
            if(audioType == 1) {
                Howler.mute(true);
                music.pause();
            } else if(audioType == 2) {
                music.pause();
            }
            stopUserControl();
            userInput.removeHitArea("pause");
            initPause();
            break;
        case "playFromPause":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("restartFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            resumeGame();
            break;
        case "quitFromPause":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("restartFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "restartFromPause":
            playSound("click");
            if(audioType == 1) {
                if(!muted) {
                    Howler.mute(false);
                    playMusic();
                }
            } else if(audioType == 2) {
                if(!muted) {
                    playMusic();
                }
            }
            firstGoState = 0;
            for(var i = 0; i < 12; i++) {
                if(saveDataHandler.aLevelStore[i] > 0) {
                    firstGoState = 3;
                    break;
                }
            }
            userInput.removeHitArea("playFromPause");
            userInput.removeHitArea("restartFromPause");
            userInput.removeHitArea("quitFromPause");
            userInput.removeHitArea("mute");
            initGame();
            break;
        case "nextFromCupWinner":
            playSound("click");
            userInput.removeHitArea("nextFromCupWinner");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
    }
}
function checkCharId(_id) {
    if(_id != 99 && _id == curChar) {
        _id = 12;
    }
    return _id;
}
function getOpPanelId(_id) {
    if (typeof _id === "undefined") { _id = opChar; }
    var tempId = aCharIcons[_id].panelId;
    if(tempId == aCharIcons[curChar].panelId) {
        tempId = (tempId + 1) % 4;
    }
    return tempId;
}
function elementAtRest() {
    var allPinsResting = true;
    stopUserControl();
    var oTempData = oCurGameScores;
    if(whosGo == 1) {
        oTempData = oOpGameScores;
    }
    for(var i = 0; i < aLaneElements.length; i++) {
        if(!aLaneElements[i].isResting) {
            allPinsResting = false;
            break;
        }
    }
    if(allPinsResting) {
        var pinsLeft = 0;
        for(var i = 0; i < aLaneElements.length; i++) {
            if(!aLaneElements[i].isBall && !aLaneElements[i].hitByBall && !aLaneElements[i].hitByPin) {
                pinsLeft++;
            }
        }
        if(shotNum == 0) {
            oTempData.aFrameScores[curFrame] = new Array();
            oTempData.aFrameScores[curFrame][0] = 10 - pinsLeft;
            if(pinsLeft == 0) {
                if((gameType == 0 && curFrame < aCharIcons[curLevel].frames - 1) || (gameType == 1 && curFrame < 7)) {
                    oTempData.aFrameScores[curFrame][1] = 0;
                    panel.showScores(1);
                } else {
                    panel.showScores(2);
                }
            } else if(pinsLeft > 0) {
                panel.showScores(0);
            }
        } else if(shotNum == 1) {
            if((gameType == 0 && curFrame == aCharIcons[curLevel].frames - 1) || (gameType == 1 && curFrame == 7)) {
                if(oTempData.aFrameScores[curFrame][0] == 10) {
                    oTempData.aFrameScores[curFrame][1] = (10 - pinsLeft);
                    panel.showScores(3);
                } else {
                    oTempData.aFrameScores[curFrame][1] = (10 - pinsLeft) - oTempData.aFrameScores[curFrame][0];
                    panel.showScores(3);
                }
            } else {
                oTempData.aFrameScores[curFrame][1] = (10 - pinsLeft) - oTempData.aFrameScores[curFrame][0];
                panel.showScores(1);
            }
        } else if(shotNum == 2) {
            if(oTempData.aFrameScores[curFrame][1] == 10 || (oTempData.aFrameScores[curFrame][0] + oTempData.aFrameScores[curFrame][1] == 10)) {
                oTempData.aFrameScores[curFrame][2] = (10 - pinsLeft);
            } else {
                oTempData.aFrameScores[curFrame][2] = (10 - pinsLeft) - oTempData.aFrameScores[curFrame][1];
            }
            panel.showScores(1);
        }
    }
}
function prepNextShot(_resetState) {
    var oTempData = oCurGameScores;
    if(whosGo == 1) {
        oTempData = oOpGameScores;
    }
    if(_resetState == 2) {
        if(oTempData.aFrameScores[curFrame][1] == 10 || (oTempData.aFrameScores[curFrame][0] + oTempData.aFrameScores[curFrame][1] == 10)) {
            lane.reset(1);
        } else {
            lane.reset(0);
        }
        shotNum = 2;
    }
    if(_resetState == 3) {
        if(oTempData.aFrameScores[curFrame][1] == 10 || (oTempData.aFrameScores[curFrame][0] + oTempData.aFrameScores[curFrame][1] == 10)) {
            lane.reset(1);
        } else if(oTempData.aFrameScores[curFrame][0] == 10) {
            lane.reset(0);
        } else {
            if(whosGo == 0) {
                whosGo = 1;
                lane.reset(1);
                shotNum = 0;
            } else {
                if(oCurGameScores.totalScore >= oOpGameScores.totalScore && gameType == 0) {
                    saveDataHandler.aLevelStore[curChar] = saveDataHandler.aLevelStore[curChar] + 1;
                    saveDataHandler.saveData();
                }
                initGameOver();
            }
            return;
        }
        shotNum = 2;
    } else if(_resetState == 1) {
        if(whosGo == 0) {
            whosGo = 1;
        } else {
            lane.setObstructions(true);
            whosGo = 0;
            if(!hasSwerved) {
                nonSwerveCount++;
                if(nonSwerveCount >= 2) {
                    nonSwerveCount = 0;
                    firstGoState = 1;
                }
            }
            curFrame++;
        }
        if((gameType == 0 && curFrame == aCharIcons[curLevel].frames) || (gameType == 1 && curFrame == 8)) {
            if(oCurGameScores.totalScore >= oOpGameScores.totalScore && gameType == 0) {
                saveDataHandler.aLevelStore[curChar] = saveDataHandler.aLevelStore[curChar] + 1;
                saveDataHandler.saveData();
            }
            initGameOver();
            return;
        }
        lane.reset(_resetState);
        shotNum = 0;
    } else {
        if(((gameType == 0 && curFrame == aCharIcons[curLevel].frames - 1) || (gameType == 1 && curFrame == 7)) && oTempData.aFrameScores[curFrame][0] == 10) {
            lane.reset(1);
        } else {
            lane.reset(_resetState);
        }
        shotNum = 1;
    }
    if(whosGo == 0 || (whosGo == 1 && playerNum == 2)) {
        userInput.addKey("swerveRight0", butEventHandler, null, 39);
        userInput.addKey("swerveLeft0", butEventHandler, null, 37);
        userInput.addKey("swerveRight1", butEventHandler, null, 68);
        userInput.addKey("swerveLeft1", butEventHandler, null, 65);
        if(hasTilt) {
            if((window).DeviceOrientationEvent) {
                window.addEventListener("deviceorientation", devOrientHandler, false);
            }
        }
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                50, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    }
}
function initGameOver() {
    gameState = "gameOver";
    if(audioType == 1) {
        music.fade(music.volume(), .4, 500);
    }
    if(oCurGameScores.totalScore >= oOpGameScores.totalScore) {
        playSound("gameOverSuccess");
        playSound("cheer5");
    } else {
        playSound("gameOverFail");
        playSound("cheerBad");
    }
    userInput.removeHitArea("pause");
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            45, 
            -43
        ],
        align: [
            0, 
            1
        ],
        id: oImageIds.backBut,
        idOver: oImageIds.backButOver
    };
    userInput.addHitArea("backFromGameOver", butEventHandler, null, "image", oBackBut);
    var oNextBut;
    if(oCurGameScores.totalScore >= oOpGameScores.totalScore && gameType == 0) {
        oNextBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -108, 
                -82
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.playBut,
            idOver: oImageIds.playButOver,
            flash: true
        };
        userInput.addHitArea("nextFromGameOver", butEventHandler, null, "image", oNextBut);
    } else {
        oNextBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                -108, 
                -82
            ],
            align: [
                1, 
                1
            ],
            id: oImageIds.replayBut,
            idOver: oImageIds.replayButOver,
            flash: true
        };
        userInput.addHitArea("replayFromGameOver", butEventHandler, null, "image", oNextBut);
    }
    var aButs = new Array(oBackBut, oNextBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    updateGameOverScreenEvent();
}
function initCupWinner() {
    gameState = "cupWinner";
    playSound("shotStrike");
    playSound("cheer5");
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            -108, 
            -82
        ],
        align: [
            1, 
            1
        ],
        id: oImageIds.playBut,
        idOver: oImageIds.playButOver,
        flash: true
    };
    userInput.addHitArea("nextFromCupWinner", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oNextBut);
    addMuteBut(aButs);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween();
    previousTime = new Date().getTime();
    updateCupWinnerScreenEvent();
}
function sortNumber(a, b) {
    return a - b;
}
function addFirework(_x, _y, _scale) {
    if (typeof _scale === "undefined") { _scale = 1; }
    if(aEffects.length > 10) {
        return;
    }
    playSound("firework");
    var firework = new Elements.Firework();
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = _scale;
    aEffects.push(firework);
}
function updateGameEvent() {
    if(gameState != "game") {
        return;
    }
    delta = getDelta();
    if(sortFlipFlop) {
        aLaneElements.sort(function (a, b) {
            return a.y - b.y;
        });
        sortFlipFlop = !sortFlipFlop;
    } else {
        sortFlipFlop = !sortFlipFlop;
    }
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    lane.update();
    lane.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateGameEvent);
}
function updateCreditsScreenEvent() {
    if(gameState != "credits") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateCreditsScreenEvent);
}
function updateUserCharSelectScreenEvent() {
    if(gameState != "userCharSelect") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateUserCharSelectScreenEvent);
}
function updateOpCharSelectScreenEvent() {
    if(gameState != "opCharSelect") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateOpCharSelectScreenEvent);
}
function updateTeamIntroScreenEvent() {
    if(gameState != "teamIntro") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateTeamIntroScreenEvent);
}
function updateTeamOutroScreenEvent() {
    if(gameState != "teamOutro") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateTeamOutroScreenEvent);
}
function updateChallengeProgressScreenEvent() {
    if(gameState != "challengeProgress") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateChallengeProgressScreenEvent);
}
function updateGameIntroScreenEvent() {
    if(gameState != "gameIntro") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updateGameIntroScreenEvent);
}
function updateGameOverScreenEvent() {
    if(gameState != "gameOver") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    if(oCurGameScores.totalScore >= oOpGameScores.totalScore && Math.random() * 1 > .95) {
        addFirework(Math.random() * canvas.width, Math.random() * canvas.height, 2);
    }
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateGameOverScreenEvent);
}
function updateCupWinnerScreenEvent() {
    if(gameState != "cupWinner") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    checkButtonsOver();
    if(Math.random() * 1 > .95) {
        addFirework(Math.random() * canvas.width, Math.random() * canvas.height, 2);
    }
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    requestAnimFrame(updateCupWinnerScreenEvent);
}
function updateSplashScreenEvent() {
    if(gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        if(audioType == 1 && !muted) {
            playMusic();
            if(!hasFocus) {
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
function update1PScreenEvent() {
    if(gameState != "1PStart") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    requestAnimFrame(update1PScreenEvent);
}
function updateStartScreenEvent() {
    if(gameState != "start") {
        return;
    }
    delta = getDelta();
    background.render();
    for(var i = 0; i < aFallingItems.length; i++) {
        aFallingItems[i].update();
        aFallingItems[i].render();
    }
    panel.update();
    panel.render();
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render(ctx);
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    checkButtonsOver();
    requestAnimFrame(updateStartScreenEvent);
}
function updateLoaderEvent() {
    if(gameState != "loading") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    requestAnimFrame(updateLoaderEvent);
}
function updatePauseEvent() {
    if(gameState != "pause") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.update();
    panel.render();
    checkButtonsOver();
    requestAnimFrame(updatePauseEvent);
}
function updateRotateWarningEvent() {
    if(gameState != "rotated") {
        return;
    }
    delta = getDelta();
    panel.update();
    panel.render(false);
    requestAnimFrame(updateRotateWarningEvent);
}
function addDirectText(_font, _size, _align, _x, _y, _str, _col) {
    if (typeof _col === "undefined") { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(_str, _x, _y);
}
function addText(_font, _size, _width, _align, _x, _y, _str, _col) {
    if (typeof _col === "undefined") { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    if(curLang == "ar") {
        _y -= _size / 15;
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    ctx.fillText(getText(_str), _x, _y);
}
function getText(_str) {
    var tempText = assetLib.textData.langText[_str][curLang];
    if(curLang == "de") {
    }
    return tempText;
}
function getTextWidth(_font, _size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getCorrectedTextWidth(_font, _size, _width, _str) {
    if(_width < getTextWidth(_font, _size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_font, _size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText["font" + _font][curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function checkButtonsOver() {
    if(isMobile) {
        return;
    }
    for(var i = 0; i < panel.aButs.length; i++) {
        panel.aButs[i].isOver = false;
        if(userInput.mouseX > panel.aButs[i].aOverData[0] && userInput.mouseX < panel.aButs[i].aOverData[2] && userInput.mouseY > panel.aButs[i].aOverData[1] && userInput.mouseY < panel.aButs[i].aOverData[3]) {
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
    if(deltaTemp > .5) {
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
    if(distance_squared < radii_squared) {
        return true;
    } else {
        return false;
    }
}
function getScaleImageToMax(_oImgData, _aLimit) {
    var newScale;
    if(_oImgData.isSpriteSheet) {
        if(_aLimit[0] / _oImgData.oData.spriteWidth < _aLimit[1] / _oImgData.oData.spriteHeight) {
            newScale = Math.min(_aLimit[0] / _oImgData.oData.spriteWidth, 1);
        } else {
            newScale = Math.min(_aLimit[1] / _oImgData.oData.spriteHeight, 1);
        }
    } else {
        if(_aLimit[0] / _oImgData.img.width < _aLimit[1] / _oImgData.img.height) {
            newScale = Math.min(_aLimit[0] / _oImgData.img.width, 1);
        } else {
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
    preAssetLib = new Utils.AssetLoader(curLang, [
        {
            id: "loader",
            file: "images/preloader.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 792,
                    height: 102
                },
                id1: {
                    x: 0,
                    y: 104,
                    width: 778,
                    height: 81
                },
                id2: {
                    x: 0,
                    y: 187,
                    width: 520,
                    height: 335
                }
            }
        }
    ], ctx, canvas.width, canvas.height, false);
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
    for(var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        if((i + 1) * (oImgData.img.width * butScale) + (i + 2) * gap < canvas.width) {
            tileWidthNum++;
        } else {
            break;
        }
    }
    tileHeightNum = Math.ceil(aLangs.length / tileWidthNum);
    for(var i = 0; i < aLangs.length; i++) {
        oImgData = preAssetLib.getData("lang" + aLangs[i]);
        j = canvas.width / 2 - (tileWidthNum / 2) * (oImgData.img.width * butScale) - ((tileWidthNum - 1) / 2) * gap;
        j += (i % tileWidthNum) * ((oImgData.img.width * butScale) + gap);
        k = canvas.height / 2 - (tileHeightNum / 2) * (oImgData.img.height * butScale) - ((tileHeightNum - 1) / 2) * gap;
        k += (Math.floor(i / tileWidthNum) % tileHeightNum) * ((oImgData.img.height * butScale) + gap);
        ctx.drawImage(oImgData.img, 0, 0, oImgData.img.width, oImgData.img.height, j, k, (oImgData.img.width * butScale), (oImgData.img.height * butScale));
        var oBut = {
            oImgData: oImgData,
            aPos: [
                j + (oImgData.img.width * butScale) / 2, 
                k + (oImgData.img.height * butScale) / 2
            ],
            scale: butScale,
            id: "none",
            noMove: true
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[i]
        }, "image", oBut);
    }
}
function initLoadAssets() {
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "bgMain",
            file: "images/bgMain.jpg"
        }, 
        {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: {
                    x: 482,
                    y: 840,
                    width: 65,
                    height: 66
                },
                id1: {
                    x: 616,
                    y: 840,
                    width: 65,
                    height: 66
                },
                id10: {
                    x: 281,
                    y: 840,
                    width: 65,
                    height: 67
                },
                id11: {
                    x: 415,
                    y: 840,
                    width: 65,
                    height: 67
                },
                id12: {
                    x: 182,
                    y: 550,
                    width: 180,
                    height: 135
                },
                id13: {
                    x: 182,
                    y: 687,
                    width: 180,
                    height: 135
                },
                id14: {
                    x: 183,
                    y: 0,
                    width: 180,
                    height: 135
                },
                id15: {
                    x: 182,
                    y: 276,
                    width: 180,
                    height: 135
                },
                id16: {
                    x: 708,
                    y: 121,
                    width: 107,
                    height: 110
                },
                id17: {
                    x: 703,
                    y: 485,
                    width: 107,
                    height: 110
                },
                id18: {
                    x: 703,
                    y: 364,
                    width: 107,
                    height: 119
                },
                id19: {
                    x: 700,
                    y: 0,
                    width: 107,
                    height: 119
                },
                id2: {
                    x: 808,
                    y: 717,
                    width: 64,
                    height: 66
                },
                id20: {
                    x: 478,
                    y: 724,
                    width: 110,
                    height: 109
                },
                id21: {
                    x: 479,
                    y: 0,
                    width: 110,
                    height: 109
                },
                id22: {
                    x: 484,
                    y: 500,
                    width: 108,
                    height: 110
                },
                id23: {
                    x: 484,
                    y: 612,
                    width: 108,
                    height: 110
                },
                id24: {
                    x: 594,
                    y: 453,
                    width: 107,
                    height: 125
                },
                id25: {
                    x: 591,
                    y: 0,
                    width: 107,
                    height: 125
                },
                id26: {
                    x: 808,
                    y: 597,
                    width: 107,
                    height: 118
                },
                id27: {
                    x: 599,
                    y: 127,
                    width: 107,
                    height: 118
                },
                id28: {
                    x: 490,
                    y: 340,
                    width: 107,
                    height: 111
                },
                id29: {
                    x: 699,
                    y: 697,
                    width: 107,
                    height: 111
                },
                id3: {
                    x: 749,
                    y: 810,
                    width: 64,
                    height: 66
                },
                id30: {
                    x: 590,
                    y: 724,
                    width: 107,
                    height: 114
                },
                id31: {
                    x: 490,
                    y: 224,
                    width: 107,
                    height: 114
                },
                id32: {
                    x: 364,
                    y: 387,
                    width: 124,
                    height: 111
                },
                id33: {
                    x: 364,
                    y: 274,
                    width: 124,
                    height: 111
                },
                id34: {
                    x: 364,
                    y: 500,
                    width: 118,
                    height: 110
                },
                id35: {
                    x: 364,
                    y: 612,
                    width: 118,
                    height: 110
                },
                id36: {
                    x: 594,
                    y: 580,
                    width: 107,
                    height: 115
                },
                id37: {
                    x: 599,
                    y: 247,
                    width: 107,
                    height: 115
                },
                id38: {
                    x: 478,
                    y: 113,
                    width: 111,
                    height: 109
                },
                id39: {
                    x: 365,
                    y: 113,
                    width: 111,
                    height: 109
                },
                id4: {
                    x: 683,
                    y: 840,
                    width: 64,
                    height: 66
                },
                id40: {
                    x: 365,
                    y: 0,
                    width: 112,
                    height: 111
                },
                id41: {
                    x: 364,
                    y: 724,
                    width: 112,
                    height: 111
                },
                id42: {
                    x: 708,
                    y: 233,
                    width: 107,
                    height: 109
                },
                id43: {
                    x: 214,
                    y: 840,
                    width: 65,
                    height: 66
                },
                id44: {
                    x: 348,
                    y: 840,
                    width: 65,
                    height: 66
                },
                id45: {
                    x: 107,
                    y: 840,
                    width: 105,
                    height: 66
                },
                id46: {
                    x: 0,
                    y: 840,
                    width: 105,
                    height: 66
                },
                id47: {
                    x: 599,
                    y: 364,
                    width: 65,
                    height: 66
                },
                id48: {
                    x: 549,
                    y: 840,
                    width: 65,
                    height: 66
                },
                id49: {
                    x: 0,
                    y: 413,
                    width: 180,
                    height: 135
                },
                id5: {
                    x: 703,
                    y: 597,
                    width: 64,
                    height: 66
                },
                id50: {
                    x: 0,
                    y: 276,
                    width: 180,
                    height: 135
                },
                id51: {
                    x: 182,
                    y: 413,
                    width: 180,
                    height: 135
                },
                id52: {
                    x: 183,
                    y: 137,
                    width: 180,
                    height: 135
                },
                id6: {
                    x: 0,
                    y: 550,
                    width: 180,
                    height: 135
                },
                id7: {
                    x: 0,
                    y: 687,
                    width: 180,
                    height: 135
                },
                id8: {
                    x: 0,
                    y: 0,
                    width: 181,
                    height: 136
                },
                id9: {
                    x: 0,
                    y: 138,
                    width: 181,
                    height: 136
                }
            }
        }, 
        {
            id: "uiElements",
            file: "images/uiElements.png",
            oAtlasData: {
                id0: {
                    x: 1525,
                    y: 326,
                    width: 297,
                    height: 314
                },
                id1: {
                    x: 1220,
                    y: 620,
                    width: 303,
                    height: 336
                },
                id10: {
                    x: 1513,
                    y: 1610,
                    width: 302,
                    height: 326
                },
                id11: {
                    x: 885,
                    y: 946,
                    width: 328,
                    height: 303
                },
                id12: {
                    x: 911,
                    y: 0,
                    width: 317,
                    height: 313
                },
                id13: {
                    x: 1824,
                    y: 323,
                    width: 131,
                    height: 130
                },
                id14: {
                    x: 1834,
                    y: 0,
                    width: 131,
                    height: 130
                },
                id15: {
                    x: 1870,
                    y: 1966,
                    width: 131,
                    height: 130
                },
                id16: {
                    x: 1834,
                    y: 132,
                    width: 131,
                    height: 130
                },
                id17: {
                    x: 1359,
                    y: 454,
                    width: 131,
                    height: 130
                },
                id18: {
                    x: 1226,
                    y: 454,
                    width: 131,
                    height: 130
                },
                id19: {
                    x: 1737,
                    y: 1966,
                    width: 131,
                    height: 130
                },
                id2: {
                    x: 911,
                    y: 315,
                    width: 313,
                    height: 303
                },
                id20: {
                    x: 1824,
                    y: 587,
                    width: 131,
                    height: 130
                },
                id21: {
                    x: 1824,
                    y: 719,
                    width: 131,
                    height: 130
                },
                id22: {
                    x: 1604,
                    y: 1938,
                    width: 131,
                    height: 130
                },
                id23: {
                    x: 1471,
                    y: 1966,
                    width: 131,
                    height: 130
                },
                id24: {
                    x: 1824,
                    y: 455,
                    width: 131,
                    height: 130
                },
                id25: {
                    x: 1957,
                    y: 264,
                    width: 131,
                    height: 130
                },
                id26: {
                    x: 0,
                    y: 133,
                    width: 550,
                    height: 36
                },
                id27: {
                    x: 0,
                    y: 1984,
                    width: 379,
                    height: 74
                },
                id28: {
                    x: 487,
                    y: 1895,
                    width: 313,
                    height: 66
                },
                id29: {
                    x: 526,
                    y: 1522,
                    width: 313,
                    height: 66
                },
                id3: {
                    x: 911,
                    y: 620,
                    width: 307,
                    height: 305
                },
                id30: {
                    x: 552,
                    y: 946,
                    width: 313,
                    height: 66
                },
                id31: {
                    x: 552,
                    y: 1014,
                    width: 313,
                    height: 65
                },
                id32: {
                    x: 1371,
                    y: 1154,
                    width: 71,
                    height: 71
                },
                id33: {
                    x: 863,
                    y: 1833,
                    width: 341,
                    height: 282
                },
                id34: {
                    x: 0,
                    y: 1102,
                    width: 524,
                    height: 524
                },
                id35: {
                    x: 1230,
                    y: 0,
                    width: 303,
                    height: 324
                },
                id36: {
                    x: 1513,
                    y: 1284,
                    width: 303,
                    height: 324
                },
                id37: {
                    x: 1513,
                    y: 958,
                    width: 303,
                    height: 324
                },
                id38: {
                    x: 1208,
                    y: 1587,
                    width: 303,
                    height: 324
                },
                id39: {
                    x: 1206,
                    y: 2070,
                    width: 184,
                    height: 42
                },
                id4: {
                    x: 1817,
                    y: 1610,
                    width: 296,
                    height: 354
                },
                id40: {
                    x: 397,
                    y: 2073,
                    width: 196,
                    height: 41
                },
                id41: {
                    x: 1206,
                    y: 2027,
                    width: 184,
                    height: 41
                },
                id42: {
                    x: 0,
                    y: 2073,
                    width: 197,
                    height: 41
                },
                id43: {
                    x: 595,
                    y: 2073,
                    width: 184,
                    height: 41
                },
                id44: {
                    x: 199,
                    y: 2073,
                    width: 196,
                    height: 41
                },
                id45: {
                    x: 1215,
                    y: 958,
                    width: 252,
                    height: 194
                },
                id46: {
                    x: 526,
                    y: 1312,
                    width: 357,
                    height: 208
                },
                id47: {
                    x: 552,
                    y: 0,
                    width: 357,
                    height: 208
                },
                id48: {
                    x: 552,
                    y: 736,
                    width: 357,
                    height: 208
                },
                id49: {
                    x: 552,
                    y: 526,
                    width: 357,
                    height: 208
                },
                id5: {
                    x: 1208,
                    y: 1251,
                    width: 303,
                    height: 334
                },
                id50: {
                    x: 526,
                    y: 1102,
                    width: 357,
                    height: 208
                },
                id51: {
                    x: 757,
                    y: 1963,
                    width: 77,
                    height: 99
                },
                id52: {
                    x: 0,
                    y: 0,
                    width: 550,
                    height: 131
                },
                id53: {
                    x: 0,
                    y: 836,
                    width: 550,
                    height: 131
                },
                id54: {
                    x: 0,
                    y: 703,
                    width: 550,
                    height: 131
                },
                id55: {
                    x: 0,
                    y: 969,
                    width: 550,
                    height: 131
                },
                id56: {
                    x: 1226,
                    y: 326,
                    width: 132,
                    height: 126
                },
                id57: {
                    x: 1360,
                    y: 326,
                    width: 87,
                    height: 116
                },
                id58: {
                    x: 885,
                    y: 1429,
                    width: 263,
                    height: 87
                },
                id59: {
                    x: 487,
                    y: 1806,
                    width: 374,
                    height: 87
                },
                id6: {
                    x: 1818,
                    y: 947,
                    width: 296,
                    height: 312
                },
                id60: {
                    x: 0,
                    y: 1628,
                    width: 485,
                    height: 87
                },
                id61: {
                    x: 885,
                    y: 1340,
                    width: 263,
                    height: 87
                },
                id62: {
                    x: 487,
                    y: 1717,
                    width: 374,
                    height: 87
                },
                id63: {
                    x: 0,
                    y: 1717,
                    width: 485,
                    height: 87
                },
                id64: {
                    x: 885,
                    y: 1251,
                    width: 263,
                    height: 87
                },
                id65: {
                    x: 487,
                    y: 1628,
                    width: 374,
                    height: 87
                },
                id66: {
                    x: 0,
                    y: 1895,
                    width: 485,
                    height: 87
                },
                id67: {
                    x: 1206,
                    y: 1938,
                    width: 263,
                    height: 87
                },
                id68: {
                    x: 381,
                    y: 1984,
                    width: 374,
                    height: 87
                },
                id69: {
                    x: 0,
                    y: 1806,
                    width: 485,
                    height: 87
                },
                id7: {
                    x: 1535,
                    y: 0,
                    width: 297,
                    height: 321
                },
                id70: {
                    x: 487,
                    y: 1963,
                    width: 23,
                    height: 18
                },
                id71: {
                    x: 512,
                    y: 1963,
                    width: 23,
                    height: 18
                },
                id72: {
                    x: 0,
                    y: 2060,
                    width: 19,
                    height: 2
                },
                id73: {
                    x: 1215,
                    y: 1154,
                    width: 154,
                    height: 92
                },
                id74: {
                    x: 0,
                    y: 570,
                    width: 550,
                    height: 131
                },
                id75: {
                    x: 0,
                    y: 437,
                    width: 550,
                    height: 131
                },
                id76: {
                    x: 0,
                    y: 304,
                    width: 550,
                    height: 131
                },
                id77: {
                    x: 0,
                    y: 171,
                    width: 550,
                    height: 131
                },
                id78: {
                    x: 1818,
                    y: 1261,
                    width: 218,
                    height: 298
                },
                id79: {
                    x: 1525,
                    y: 642,
                    width: 297,
                    height: 303
                },
                id8: {
                    x: 552,
                    y: 210,
                    width: 357,
                    height: 314
                },
                id9: {
                    x: 863,
                    y: 1522,
                    width: 343,
                    height: 309
                }
            }
        }, 
        {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: {
                    x: 506,
                    y: 0,
                    width: 198,
                    height: 198
                },
                id1: {
                    x: 460,
                    y: 657,
                    width: 198,
                    height: 198
                },
                id10: {
                    x: 609,
                    y: 857,
                    width: 198,
                    height: 198
                },
                id11: {
                    x: 209,
                    y: 870,
                    width: 198,
                    height: 198
                },
                id12: {
                    x: 505,
                    y: 326,
                    width: 198,
                    height: 198
                },
                id13: {
                    x: 0,
                    y: 777,
                    width: 211,
                    height: 91
                },
                id14: {
                    x: 0,
                    y: 870,
                    width: 207,
                    height: 206
                },
                id15: {
                    x: 0,
                    y: 0,
                    width: 504,
                    height: 324
                },
                id16: {
                    x: 0,
                    y: 326,
                    width: 503,
                    height: 329
                },
                id17: {
                    x: 906,
                    y: 0,
                    width: 134,
                    height: 273
                },
                id18: {
                    x: 1009,
                    y: 600,
                    width: 134,
                    height: 273
                },
                id19: {
                    x: 0,
                    y: 717,
                    width: 258,
                    height: 58
                },
                id2: {
                    x: 706,
                    y: 0,
                    width: 198,
                    height: 198
                },
                id20: {
                    x: 0,
                    y: 657,
                    width: 258,
                    height: 58
                },
                id21: {
                    x: 482,
                    y: 1057,
                    width: 71,
                    height: 75
                },
                id22: {
                    x: 409,
                    y: 1057,
                    width: 71,
                    height: 75
                },
                id3: {
                    x: 705,
                    y: 200,
                    width: 198,
                    height: 198
                },
                id4: {
                    x: 660,
                    y: 526,
                    width: 198,
                    height: 198
                },
                id5: {
                    x: 809,
                    y: 926,
                    width: 198,
                    height: 198
                },
                id6: {
                    x: 809,
                    y: 726,
                    width: 198,
                    height: 198
                },
                id7: {
                    x: 409,
                    y: 857,
                    width: 198,
                    height: 198
                },
                id8: {
                    x: 260,
                    y: 657,
                    width: 198,
                    height: 198
                },
                id9: {
                    x: 860,
                    y: 400,
                    width: 198,
                    height: 198
                }
            }
        }, 
        {
            id: "tutElements",
            file: "images/tutElements.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 402,
                    height: 403
                },
                id1: {
                    x: 512,
                    y: 398,
                    width: 136,
                    height: 197
                },
                id2: {
                    x: 404,
                    y: 0,
                    width: 221,
                    height: 197
                },
                id3: {
                    x: 404,
                    y: 199,
                    width: 220,
                    height: 197
                },
                id4: {
                    x: 0,
                    y: 543,
                    width: 72,
                    height: 82
                },
                id5: {
                    x: 256,
                    y: 405,
                    width: 254,
                    height: 136
                },
                id6: {
                    x: 0,
                    y: 405,
                    width: 254,
                    height: 136
                }
            }
        }, 
        {
            id: "scoreElements",
            file: "images/scoreElements.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 508,
                    height: 168
                },
                id1: {
                    x: 0,
                    y: 340,
                    width: 481,
                    height: 259
                },
                id2: {
                    x: 0,
                    y: 601,
                    width: 390,
                    height: 186
                },
                id3: {
                    x: 0,
                    y: 170,
                    width: 508,
                    height: 168
                },
                id4: {
                    x: 392,
                    y: 601,
                    width: 355,
                    height: 226
                },
                id5: {
                    x: 510,
                    y: 0,
                    width: 210,
                    height: 211
                },
                id6: {
                    x: 483,
                    y: 340,
                    width: 210,
                    height: 211
                },
                id7: {
                    x: 722,
                    y: 0,
                    width: 210,
                    height: 211
                },
                id8: {
                    x: 695,
                    y: 213,
                    width: 210,
                    height: 211
                }
            }
        }, 
        {
            id: "titleLogo",
            file: "images/title/" + curLang + ".png"
        }, 
        {
            id: "langText",
            file: "json/text.json"
        }, 
        {
            id: "rotateIcon",
            file: "images/rotate.jpg"
        }, 
        {
            id: "lanes0",
            file: "images/lanes0.png"
        }, 
        {
            id: "lanes1",
            file: "images/lanes1.png"
        }, 
        {
            id: "lanes2",
            file: "images/lanes2.png"
        }, 
        {
            id: "lanes3",
            file: "images/lanes3.png"
        }, 
        {
            id: "pin",
            file: "images/pin_58x197.png"
        }, 
        {
            id: "pinReflect",
            file: "images/pinReflect_58x198.png"
        }, 
        {
            id: "info",
            file: "images/info.png"
        }, 
        {
            id: "firework",
            file: "images/firework_175x175.png",
            oAnims: {
                explode: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29
                ]
            }
        }, 
        {
            id: "tut0",
            file: "images/tut_01_202x350.png",
            oAnims: {
                anim: [
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    12, 
                    12, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    19, 
                    19, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23, 
                    24, 
                    25, 
                    26, 
                    26, 
                    26, 
                    26, 
                    26, 
                    26, 
                    26, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31, 
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39, 
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    44, 
                    44, 
                    44, 
                    44, 
                    44, 
                    44, 
                    44
                ]
            }
        }, 
        {
            id: "tut1",
            file: "images/tut_02_402x402.png",
            oAnims: {
                anim: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9
                ]
            }
        }, 
        {
            id: "ballRoll",
            file: "images/ballRoll_197x196.png",
            oAnims: {
                anim: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5
                ]
            }
        }, 
        {
            id: "bgLane0",
            file: "images/bgLane0.jpg"
        }, 
        {
            id: "bgLane1",
            file: "images/bgLane1.jpg"
        }, 
        {
            id: "bgLane2",
            file: "images/bgLane2.jpg"
        }, 
        {
            id: "bgLane3",
            file: "images/bgLane3.jpg"
        }, 
        {
            id: "bgLaneReflect0",
            file: "images/bgLaneReflect0.png"
        }, 
        {
            id: "bgLaneReflect1",
            file: "images/bgLaneReflect1.png"
        }, 
        {
            id: "bgLaneReflect2",
            file: "images/bgLaneReflect2.png"
        }, 
        {
            id: "bgLaneReflect3",
            file: "images/bgLaneReflect3.png"
        }
    ], ctx, canvas.width, canvas.height);
    oImageIds.pin0 = "id0";
    oImageIds.tut0Bg = "id0";
    oImageIds.tiltPhone = "id1";
    oImageIds.tapPhone0 = "id2";
    oImageIds.tapPhone1 = "id3";
    oImageIds.tutBall = "id4";
    oImageIds.arrowKey1 = "id5";
    oImageIds.arrowKey0 = "id6";
    oImageIds.resultBg0 = "id0";
    oImageIds.strikePins = "id1";
    oImageIds.splitPins = "id2";
    oImageIds.resultBg1 = "id3";
    oImageIds.scorePins = "id4";
    oImageIds.scoreBg0 = "id5";
    oImageIds.scoreBg1 = "id6";
    oImageIds.scoreBg2 = "id7";
    oImageIds.scoreBg3 = "id8";
    oImageIds.ball0 = "id0";
    oImageIds.ball1 = "id1";
    oImageIds.ball2 = "id2";
    oImageIds.ball3 = "id3";
    oImageIds.ball4 = "id4";
    oImageIds.ball5 = "id5";
    oImageIds.ball6 = "id6";
    oImageIds.ball7 = "id7";
    oImageIds.ball8 = "id8";
    oImageIds.ball9 = "id9";
    oImageIds.ball10 = "id10";
    oImageIds.ball11 = "id11";
    oImageIds.ball12 = "id12";
    oImageIds.ballShadow = "id13";
    oImageIds.ballReflect = "id14";
    oImageIds.goal = "id15";
    oImageIds.goalReflect = "id16";
    oImageIds.post0 = "id17";
    oImageIds.post1 = "id18";
    oImageIds.jump0 = "id19";
    oImageIds.jump1 = "id20";
    oImageIds.pIcon1 = "id21";
    oImageIds.pIcon2 = "id22";
    oImageIds.infoBut = "id0";
    oImageIds.infoButOver = "id1";
    oImageIds.muteBut1 = "id2";
    oImageIds.muteBut1Over = "id3";
    oImageIds.muteBut0 = "id4";
    oImageIds.muteBut0Over = "id5";
    oImageIds.tournamentBut = "id6";
    oImageIds.tournamentButOver = "id7";
    oImageIds.quickGameBut = "id8";
    oImageIds.quickGameButOver = "id9";
    oImageIds.backBut = "id10";
    oImageIds.backButOver = "id11";
    oImageIds.playBut = "id12";
    oImageIds.playButOver = "id13";
    oImageIds.replayBut = "id14";
    oImageIds.replayButOver = "id15";
    oImageIds.smallIcon0 = "id16";
    oImageIds.smallIcon0Over = "id17";
    oImageIds.smallIcon1 = "id18";
    oImageIds.smallIcon1Over = "id19";
    oImageIds.smallIcon2 = "id20";
    oImageIds.smallIcon2Over = "id21";
    oImageIds.smallIcon3 = "id22";
    oImageIds.smallIcon3Over = "id23";
    oImageIds.smallIcon4 = "id24";
    oImageIds.smallIcon4Over = "id25";
    oImageIds.smallIcon5 = "id26";
    oImageIds.smallIcon5Over = "id27";
    oImageIds.smallIcon6 = "id28";
    oImageIds.smallIcon6Over = "id29";
    oImageIds.smallIcon7 = "id30";
    oImageIds.smallIcon7Over = "id31";
    oImageIds.smallIcon8 = "id32";
    oImageIds.smallIcon8Over = "id33";
    oImageIds.smallIcon9 = "id34";
    oImageIds.smallIcon9Over = "id35";
    oImageIds.smallIcon10 = "id36";
    oImageIds.smallIcon10Over = "id37";
    oImageIds.smallIcon11 = "id38";
    oImageIds.smallIcon11Over = "id39";
    oImageIds.smallIcon12 = "id40";
    oImageIds.smallIcon12Over = "id41";
    oImageIds.smallIcon13 = "id42";
    oImageIds.pauseBut = "id43";
    oImageIds.pauseButOver = "id44";
    oImageIds.resetBut = "id45";
    oImageIds.resetButOver = "id46";
    oImageIds.quitBut = "id47";
    oImageIds.quitButOver = "id48";
    oImageIds.twoPBut = "id49";
    oImageIds.twoPButOver = "id50";
    oImageIds.onePBut = "id51";
    oImageIds.onePButOver = "id52";
    oImageIds.largeIcon0 = "id0";
    oImageIds.largeIcon1 = "id1";
    oImageIds.largeIcon2 = "id2";
    oImageIds.largeIcon3 = "id3";
    oImageIds.largeIcon4 = "id4";
    oImageIds.largeIcon5 = "id5";
    oImageIds.largeIcon6 = "id6";
    oImageIds.largeIcon7 = "id7";
    oImageIds.largeIcon8 = "id8";
    oImageIds.largeIcon9 = "id9";
    oImageIds.largeIcon10 = "id10";
    oImageIds.largeIcon11 = "id11";
    oImageIds.largeIcon12 = "id12";
    oImageIds.ballIcon0 = "id13";
    oImageIds.ballIcon1 = "id14";
    oImageIds.ballIcon2 = "id15";
    oImageIds.ballIcon3 = "id16";
    oImageIds.ballIcon4 = "id17";
    oImageIds.ballIcon5 = "id18";
    oImageIds.ballIcon6 = "id19";
    oImageIds.ballIcon7 = "id20";
    oImageIds.ballIcon8 = "id21";
    oImageIds.ballIcon9 = "id22";
    oImageIds.ballIcon10 = "id23";
    oImageIds.ballIcon11 = "id24";
    oImageIds.ballIcon12 = "id25";
    oImageIds.navBars = "id26";
    oImageIds.headerTextPanel = "id27";
    oImageIds.namePanel0 = "id28";
    oImageIds.namePanel1 = "id29";
    oImageIds.namePanel2 = "id30";
    oImageIds.namePanel3 = "id31";
    oImageIds.tick = "id32";
    oImageIds.smallFlare = "id33";
    oImageIds.largeFlare = "id34";
    oImageIds.slidePanel0 = "id35";
    oImageIds.slidePanel1 = "id36";
    oImageIds.slidePanel2 = "id37";
    oImageIds.slidePanel3 = "id38";
    oImageIds.statBar01 = "id39";
    oImageIds.statBar00 = "id40";
    oImageIds.statBar11 = "id41";
    oImageIds.statBar10 = "id42";
    oImageIds.statBar21 = "id43";
    oImageIds.statBar20 = "id44";
    oImageIds.cross = "id45";
    oImageIds.teamPanel0 = "id46";
    oImageIds.teamPanel1 = "id47";
    oImageIds.teamPanel2 = "id48";
    oImageIds.teamPanel3 = "id49";
    oImageIds.teamPanel4 = "id50";
    oImageIds.happyCup = "id51";
    oImageIds.lineTextPanel00 = "id52";
    oImageIds.lineTextPanel10 = "id53";
    oImageIds.lineTextPanel20 = "id54";
    oImageIds.lineTextPanel30 = "id55";
    oImageIds.vs = "id56";
    oImageIds.rosette = "id57";
    oImageIds.scorePanel00 = "id58";
    oImageIds.scorePanel01 = "id59";
    oImageIds.scorePanel02 = "id60";
    oImageIds.scorePanel10 = "id61";
    oImageIds.scorePanel11 = "id62";
    oImageIds.scorePanel12 = "id63";
    oImageIds.scorePanel20 = "id64";
    oImageIds.scorePanel21 = "id65";
    oImageIds.scorePanel22 = "id66";
    oImageIds.scorePanel30 = "id67";
    oImageIds.scorePanel31 = "id68";
    oImageIds.scorePanel32 = "id69";
    oImageIds.spareMark = "id70";
    oImageIds.strikeMark = "id71";
    oImageIds.missMark = "id72";
    oImageIds.cnLogo = "id73";
    oImageIds.lineTextPanel01 = "id74";
    oImageIds.lineTextPanel11 = "id75";
    oImageIds.lineTextPanel21 = "id76";
    oImageIds.lineTextPanel31 = "id77";
    oImageIds.winnersCup = "id78";
    oImageIds.largeIconMystery = "id79";
    assetLib.onReady(initTiltCheck);
    gameState = "loading";
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
    if(tempInnerWidth < tempInnerHeight) {
        if(isRotated) {
            if(gameState != "loading") {
                initBackFromRotate();
            }
        }
        maxW = maxWidth;
        maxH = maxHeight;
        minW = minWidth;
        minH = minHeight;
    } else {
        if(!isRotated) {
            if(gameState != "loading") {
                initRotateWarning();
            }
        }
        maxW = maxHeight;
        maxH = maxWidth;
        minW = minHeight;
        minH = minWidth;
    }
    if(canvas.width / canvas.height < minW / minH) {
        canvas.width = maxW;
        canvas.height = maxW * (tempInnerHeight / tempInnerWidth);
        canvasScale = maxW / tempInnerWidth;
    } else {
        canvas.height = minH;
        canvas.width = minH * (tempInnerWidth / tempInnerHeight);
        canvasScale = minH / tempInnerHeight;
    }
    switch(gameState) {
        case "game":
            if(throwState == 0) {
                ball.targX = canvas.width / 2;
            }
            if(firstGoState == 3 && (whosGo == 0 || (whosGo == 1 && playerNum == 2))) {
                userInput.addHitArea("gameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        50, 
                        canvas.width, 
                        canvas.height
                    ]
                }, true);
            }
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
function initRotateWarning() {
    isRotated = true;
    prevGameState = gameState;
    gameState = "rotated";
    background = new Elements.Background();
    previousTime = new Date().getTime();
    resizeCanvas();
    updateRotateWarningEvent();
}
function initBackFromRotate() {
    isRotated = false;
    switch(prevGameState) {
        case "1PStart":
            gameState = "1PStart";
            previousTime = new Date().getTime();
            update1PScreenEvent();
            break;
        case "start":
            gameState = "start";
            previousTime = new Date().getTime();
            updateStartScreenEvent();
            break;
        case "pause":
            gameState = "pause";
            previousTime = new Date().getTime();
            updatePauseEvent();
            break;
        case "credits":
            gameState = "credits";
            previousTime = new Date().getTime();
            updateCreditsScreenEvent();
            break;
        case "userCharSelect":
            gameState = "userCharSelect";
            previousTime = new Date().getTime();
            updateUserCharSelectScreenEvent();
            break;
        case "opCharSelect":
            gameState = "opCharSelect";
            previousTime = new Date().getTime();
            updateOpCharSelectScreenEvent();
            break;
        case "challengeProgress":
            gameState = "challengeProgress";
            previousTime = new Date().getTime();
            updateChallengeProgressScreenEvent();
            break;
        case "teamIntro":
            gameState = "teamIntro";
            previousTime = new Date().getTime();
            updateTeamIntroScreenEvent();
            break;
        case "teamOutro":
            gameState = "teamOutro";
            previousTime = new Date().getTime();
            updateTeamOutroScreenEvent();
            break;
        case "gameIntro":
            gameState = "gameIntro";
            previousTime = new Date().getTime();
            updateGameIntroScreenEvent();
            break;
        case "game":
            gameState = "game";
            previousTime = new Date().getTime();
            updateGameEvent();
            break;
        case "gameOver":
            gameState = "gameOver";
            previousTime = new Date().getTime();
            updateGameOverScreenEvent();
            break;
        case "cupWinner":
            gameState = "cupWinner";
            previousTime = new Date().getTime();
            updateCupWinnerScreenEvent();
            break;
    }
}
function playSound(_id) {
    if(audioType == 1) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(audioType == 1) {
        if(muted) {
            Howler.mute(true);
            music.pause();
        } else {
            Howler.mute(false);
            playMusic();
            if(gameState == "game") {
                music.volume(.7);
            } else {
                music.volume(.4);
            }
        }
    } else if(audioType == 2) {
        if(muted) {
            music.pause();
        } else {
            playMusic();
        }
    }
}
