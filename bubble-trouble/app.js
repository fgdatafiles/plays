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
            this.spinnerRot = 0;
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
                this.oLoadSpinnerImgData = preAssetLib.getData("loadSpinner");
                this.oLoaderBgImgData = preAssetLib.getData("loaderBg");
            }
        }
        AssetLoader.prototype.render = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.oLoaderBgImgData.img, 0, 0, this.oLoaderBgImgData.img.width, this.oLoaderBgImgData.img.height, 0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(canvas.width / 2 - 115, 384 - 30, (230 / this.totalAssets) * this.assetsLoaded, 60);
            ctx.drawImage(this.oLoaderImgData.img, canvas.width / 2 - this.oLoaderImgData.img.width / 2, canvas.height / 2 - this.oLoaderImgData.img.height / 2);
            this.spinnerRot += delta * 3;
            ctx.save();
            ctx.translate(canvas.width / 2, 330);
            ctx.rotate(this.spinnerRot);
            ctx.drawImage(this.oLoadSpinnerImgData.img, -this.oLoadSpinnerImgData.img.width / 2, -this.oLoadSpinnerImgData.img.height / 2);
            ctx.restore();
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
        AnimSprite.prototype.updateAnimation = function () {
            this.frameInc += this.fps * delta;
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
        AnimSprite.prototype.render = function () {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(this.scaleX, this.scaleY);
            ctx.globalAlpha = this.alpha;
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
            ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
            ctx.restore();
        };
        AnimSprite.prototype.renderSimple = function () {
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
            ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY);
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
            this.canvasX = 0;
            this.canvasY = 0;
            this.canvasScaleX = 1;
            this.canvasScaleY = 1;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isDown = false;
            this.firstTouch = true;
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
            _canvas.addEventListener("touchmove", function (e) {
                for(var i = 0; i < e.changedTouches.length; i++) {
                    _this.move(e, e.changedTouches[i].pageX, e.changedTouches[i].pageY, e.changedTouches[i].identifier, true);
                }
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.isDown = true;
                _this.hitDown(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.isDown = false;
                _this.hitUp(e, e.pageX, e.pageY, 1);
            }, false);
            _canvas.addEventListener("mousemove", function (e) {
                if(e.button == 2) {
                    return;
                }
                _this.move(e, e.pageX, e.pageY, 1, _this.isDown);
            }, false);
            this.aHitAreas = new Array();
            this.aKeys = new Array();
        }
        UserInput.prototype.setCanvas = function (_canvasX, _canvasY, _canvasScaleX, _canvasScaleY) {
            this.canvasX = _canvasX;
            this.canvasY = _canvasY;
            this.canvasScaleX = _canvasScaleX;
            this.canvasScaleY = _canvasScaleY;
        };
        UserInput.prototype.hitDown = function (e, _posX, _posY, _identifer) {
            e.preventDefault();
            e.stopPropagation();
            if(this.pauseIsOn) {
                return;
            }
            if(!hasFocus || this.firstTouch) {
                var tempForce = false;
                if(this.firstTouch) {
                    tempForce = true;
                    music.pause();
                }
                visibleResume(tempForce);
                this.firstTouch = false;
            }
            var curHitTime = new Date().getTime();
            _posX = (_posX - this.canvasX) * this.canvasScaleX;
            _posY = (_posY - this.canvasY) * this.canvasScaleY;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    if(_posX > this.aHitAreas[i].area[0] && _posY > this.aHitAreas[i].area[1] && _posX < this.aHitAreas[i].area[2] && _posY < this.aHitAreas[i].area[3]) {
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
            _posX = (_posX - this.canvasX) * this.canvasScaleX;
            _posY = (_posY - this.canvasY) * this.canvasScaleY;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    if(_posX > this.aHitAreas[i].area[0] && _posY > this.aHitAreas[i].area[1] && _posX < this.aHitAreas[i].area[2] && _posY < this.aHitAreas[i].area[3]) {
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
        UserInput.prototype.move = function (e, _posX, _posY, _identifer, _isDown) {
            if(this.pauseIsOn) {
                return;
            }
            _posX = (_posX - this.canvasX) * this.canvasScaleX;
            _posY = (_posY - this.canvasY) * this.canvasScaleY;
            if(_isDown) {
                for(var i = 0; i < this.aHitAreas.length; i++) {
                    if(this.aHitAreas[i].rect) {
                        if(_posX > this.aHitAreas[i].area[0] && _posY > this.aHitAreas[i].area[1] && _posX < this.aHitAreas[i].area[2] && _posY < this.aHitAreas[i].area[3]) {
                            this.aHitAreas[i].oData.hasLeft = false;
                            if(!this.aHitAreas[i].oData.isDown) {
                                this.aHitAreas[i].oData.isDown = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].aTouchIdentifiers.push(_identifer);
                                if(this.aHitAreas[i].oData.multiTouch) {
                                    this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                }
                            }
                            if(this.aHitAreas[i] && this.aHitAreas[i].oData.isDraggable) {
                                this.aHitAreas[i].oData.isBeingDragged = true;
                                this.aHitAreas[i].oData.x = _posX;
                                this.aHitAreas[i].oData.y = _posY;
                                this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                                this.aHitAreas[i].oData.isBeingDragged = false;
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
                    this.aKeys[i].oData.isDown = true;
                    this.aKeys[i].callback(this.aKeys[i].id, this.aKeys[i].oData);
                }
            }
        };
        UserInput.prototype.keyUp = function (e) {
            for(var i = 0; i < this.aKeys.length; i++) {
                if(e.keyCode == this.aKeys[i].keyCode) {
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
                        area: aRect
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        aTouchIdentifiers: aTouchIdentifiers,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect
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
            this.incY = 0;
            this.renderState = "none";
            this.bgId = 0;
            this.setBackground();
        }
        Background.prototype.setBackground = function (_id) {
            if (typeof _id === "undefined") { _id = -1; }
            if(_id == -1) {
                _id = Math.floor(Math.random() * 5);
            }
            this.oImgData = assetLib.getData("background" + _id);
        };
        Background.prototype.update = function () {
            switch(this.renderState) {
                case "menuScroll":
                    this.incY += 5 * delta;
                    this.x = (this.x - (Math.sin(this.incY / 10) * 50) * delta);
                    this.y = (this.y - 50 * delta);
                    break;
                case "ripple":
                    this.incY += 2 * delta;
                    break;
            }
        };
        Background.prototype.render = function () {
            switch(this.renderState) {
                case "menuScroll":
                    this.x = this.x % canvas.width;
                    this.y = this.y % canvas.height;
                    if(this.x < 0) {
                        this.x += canvas.width;
                    }
                    if(this.y < 0) {
                        this.y += canvas.height;
                    }
                    ctx.drawImage(this.oImgData.img, this.x, this.y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    break;
                case "ripple":
                    var segs = 25;
                    ctx.drawImage(this.oImgData.img, 0, 0);
                    for(var i = 0; i < segs; i++) {
                        ctx.drawImage(this.oImgData.img, 0, i * (canvas.height / segs), canvas.width, canvas.height / segs, Math.sin(this.incY + i / 2) * 5, i * (canvas.height / segs), canvas.width, canvas.height / segs);
                    }
                    break;
                case "none":
                    ctx.drawImage(this.oImgData.img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    break;
            }
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Splash = (function () {
        function Splash(_oSplashScreenImgData, _canvasWidth, _canvasHeight) {
            this.inc = 0;
            this.oSplashScreenImgData = _oSplashScreenImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = -this.canvasHeight;
            TweenLite.to(this, .5, {
                posY: 0
            });
        }
        Splash.prototype.render = function (_ctx, _delta) {
            this.inc += 5 * _delta;
            _ctx.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY);
        };
        return Splash;
    })();
    Elements.Splash = Splash;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_panelType, _aButs) {
            this.timer = .3;
            this.endTime = 0;
            this.posY = 0;
            this.numberSpace = 17;
            this.incY = 0;
            this.flareRot = 0;
            this.letterSpace = 24;
            this.numberScale = .75;
            this.posY2 = 0;
            this.posY3 = 0;
            this.blinkInc = 0;
            this.aLevelCharPos = new Array({
                x: 340,
                y: 160,
                tx: 0
            }, {
                x: 83,
                y: 281,
                tx: 18
            }, {
                x: 222,
                y: 125,
                tx: 0
            }, {
                x: 92,
                y: 355,
                tx: 0
            }, {
                x: 365,
                y: 262,
                tx: -18
            });
            this.starBounce0 = 0;
            this.starBounceInc0 = 0;
            this.starBounce1 = 0;
            this.starBounceInc1 = 0;
            this.starBounce2 = 0;
            this.starBounceInc2 = 0;
            this.aStickerPos = new Array({
                x: 336,
                y: 90
            }, {
                x: 306,
                y: 240
            }, {
                x: 381,
                y: 274
            }, {
                x: 67,
                y: 569
            }, {
                x: 169,
                y: 578
            }, {
                x: 230,
                y: 573
            }, {
                x: 291,
                y: 579
            });
            this.charBioId = 0;
            this.canTurnPage = true;
            this.oTitleImgData = assetLib.getData("title");
            this.oBioElementsImgData = assetLib.getData("bioElements");
            this.oTitleBgImgData = assetLib.getData("titleBg");
            this.oSplashImgData = assetLib.getData("splash");
            this.oNumbers0ImgData = assetLib.getData("numbers0");
            this.oNumbers1ImgData = assetLib.getData("numbers1");
            this.oTopFlareImgData = assetLib.getData("flare");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oBubblesImgData = assetLib.getData("bubbles");
            this.oMapImgData = assetLib.getData("map");
            this.oUiButsImgData = assetLib.getData("uiButs");
            this.oIntroElementsImgData = assetLib.getData("introElements");
            this.oIntroBgImgData = assetLib.getData("introBg");
            this.panelType = _panelType;
            this.aButs = _aButs;
        }
        Panel.prototype.update = function (_delta) {
            this.incY += 10 * _delta;
        };
        Panel.prototype.nextBioPage = function () {
            var _this = this;
            if(this.bioTween) {
                this.bioTween.kill();
            }
            this.canTurnPage = false;
            this.bioTween = TweenLite.to(this, .25, {
                posY2: -200,
                ease: "Back.easeIn",
                onComplete: function () {
                    _this.posY2 = 100;
                    _this.charBioId = (_this.charBioId + 1) % 7;
                    _this.bioTween = TweenLite.to(_this, .25, {
                        posY2: 0,
                        ease: "Back.easeOut",
                        onComplete: function () {
                            _this.canTurnPage = true;
                        }
                    });
                }
            });
        };
        Panel.prototype.startTween = function (_screen) {
            switch(_screen) {
                case "start":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 1, {
                        posY2: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.blinkFrame = 0;
                    this.charBlink = 0;
                    this.blinkInc = 0;
                    this.blinkFrameInc = 0;
                    this.blinkTarg = 1;
                    break;
                case "credits":
                    this.posY = 100;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 2, {
                        posY2: 0,
                        ease: "Cubic.easeOut"
                    });
                    break;
                case "map":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 2, {
                        posY2: 0,
                        ease: "Cubic.easeOut"
                    });
                    break;
                case "startPanel":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 2, {
                        posY2: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY3 = 100;
                    if(levelNum == 0) {
                        this.tutAnim = new Elements.TutAnim();
                    }
                    break;
                case "bioPage":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 100;
                    this.bioTween = TweenLite.to(this, .5, {
                        posY2: 0,
                        ease: "Back.easeOut"
                    });
                    break;
                case "endPanel":
                case "endFailPanel":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut"
                    });
                    this.posY2 = 0;
                    TweenLite.to(this, 1, {
                        posY2: 100,
                        ease: "Cubic.easeOut"
                    });
                    break;
                case "intro":
                    this.posY = 100;
                    TweenLite.to(this, .5, {
                        delay: 1.5,
                        posY: 0,
                        ease: "Back.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 2, {
                        posY2: 0,
                        ease: "Quad.easeOut"
                    });
                    this.posY3 = 200;
                    TweenLite.to(this, .5, {
                        delay: 1,
                        posY3: 0,
                        ease: "Quad.easeOut"
                    });
                    break;
                case "outro":
                    this.posY = 100;
                    TweenLite.to(this, .5, {
                        delay: 1.5,
                        posY: 0,
                        ease: "Back.easeOut"
                    });
                    this.posY2 = 100;
                    TweenLite.to(this, 2, {
                        posY2: 0,
                        ease: "Quad.easeInOut"
                    });
                    this.posY3 = 200;
                    TweenLite.to(this, .5, {
                        delay: 1,
                        posY3: 0,
                        ease: "Quad.easeOut"
                    });
                    this.blinkFrame = 0;
                    this.charBlink = 0;
                    this.blinkInc = 0;
                    this.blinkFrameInc = 0;
                    this.blinkTarg = 1;
                    this.outroX = -500;
                    break;
                case "progressMap":
                    this.posY = 200;
                    TweenLite.to(this, .5, {
                        posY: 0,
                        ease: "Cubic.easeOut",
                        onComplete: function () {
                            playSound("gemRelease");
                        }
                    });
                    this.posY2 = aMapButs[this.prevMapButIdToHighlight][0];
                    this.posY3 = aMapButs[this.prevMapButIdToHighlight][1];
                    TweenLite.to(this, 2, {
                        posY2: aMapButs[this.mapButIdToHighlight][0],
                        posY3: aMapButs[this.mapButIdToHighlight][1],
                        ease: "Back.easeInOut",
                        onComplete: function () {
                            initGame();
                        }
                    });
                    break;
            }
        };
        Panel.prototype.startTween1 = function () {
            this.posY = 550;
            TweenLite.to(this, .4, {
                posY: 0,
                ease: "Back.easeOut"
            });
        };
        Panel.prototype.startMapTween = function (_targY) {
            this.mapPosY = Math.max(_targY - 100, 0);
            this.mapTween = TweenLite.to(this, 1, {
                mapPosY: _targY,
                ease: "Cubic.easeOut"
            });
        };
        Panel.prototype.startTween2 = function () {
            this.posY = 550;
            TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            });
        };
        Panel.prototype.tweenOffScreen = function (_onCompleteFunction) {
            if (typeof _onCompleteFunction === "undefined") { _onCompleteFunction = null; }
            TweenLite.to(this, .5, {
                posY: 550,
                ease: "Quad.easeIn",
                onComplete: _onCompleteFunction
            });
            TweenLite.to(this, .5, {
                posY3: 0,
                ease: "Quad.easeIn"
            });
        };
        Panel.prototype.render = function (_ctx, _butsOnTop) {
            if (typeof _butsOnTop === "undefined") { _butsOnTop = true; }
            if(!_butsOnTop) {
                this.addButs(_ctx);
            }
            switch(this.panelType) {
                case "start":
                    this.flareRot += delta / 3;
                    ctx.drawImage(this.oTitleBgImgData.img, 0, 0);
                    _ctx.fillStyle = "rgba(255, 255, 255, " + (this.posY2 / 100) + ")";
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 270 + this.posY2 * .5, bWidth, bHeight);
                    this.blinkInc += delta;
                    if(this.blinkInc > this.blinkTarg) {
                        this.blinkInc = 0;
                        this.blinkTarg = Math.random() * 2 + 2;
                        this.blinkFrame = 0;
                        this.blinkFrameInc = 0;
                        this.charBlink = Math.ceil(Math.random() * 2);
                    }
                    if(this.charBlink == 1) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 101, 397 + this.posY2 * .5, bWidth, bHeight);
                        this.blinkFrame = Math.round(this.blinkFrameInc += delta * 8) % 2;
                        if(this.blinkFrameInc > 2) {
                            this.charBlink = 0;
                        }
                    } else if(this.charBlink == 2) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 251, 405 + this.posY2 * .5, bWidth, bHeight);
                        this.blinkFrame = Math.round(this.blinkFrameInc += delta * 8) % 2;
                        if(this.blinkFrameInc > 2) {
                            this.charBlink = 0;
                        }
                    }
                    _ctx.drawImage(this.oTitleImgData.img, 0, 0, canvas.width, canvas.height, 0, 0 - this.posY2, canvas.width, canvas.height);
                    break;
                case "intro":
                    ctx.drawImage(this.oIntroBgImgData.img, 0, 0 - this.posY2);
                    var bX = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.hedgehogIntro].x;
                    var bY = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.hedgehogIntro].y;
                    var bWidth = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.hedgehogIntro].width;
                    var bHeight = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.hedgehogIntro].height;
                    ctx.drawImage(this.oIntroElementsImgData.img, bX, bY, bWidth, bHeight, 100 - this.posY2 * .2, 700 - bHeight + this.posY2 * .75, bWidth, bHeight);
                    var bX = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.oscarIntro].x;
                    var bY = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.oscarIntro].y;
                    var bWidth = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.oscarIntro].width;
                    var bHeight = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.oscarIntro].height;
                    ctx.drawImage(this.oIntroElementsImgData.img, bX, bY, bWidth, bHeight, 30 + this.posY2 * .2, 700 - bHeight + this.posY2, bWidth, bHeight);
                    var bX = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.bubblesIntro].x;
                    var bY = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.bubblesIntro].y;
                    var bWidth = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.bubblesIntro].width;
                    var bHeight = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.bubblesIntro].height;
                    ctx.drawImage(this.oIntroElementsImgData.img, bX, bY, bWidth, bHeight, 0, 0 - this.posY2 * 2, bWidth, bHeight);
                    var bX = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x;
                    var bY = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y;
                    var bWidth = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width;
                    var bHeight = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
                    ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 53 - this.posY2 * .75, bWidth, bHeight);
                    addText(30, 440, "center", canvas.width / 2, 53 - this.posY2 * .75 + 43, "intro0", "#000000");
                    var bX = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x;
                    var bY = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y;
                    var bWidth = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width;
                    var bHeight = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
                    ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 572 + this.posY3, bWidth, bHeight);
                    addText(30, 440, "center", canvas.width / 2, 572 + this.posY3 + 43, "intro1", "#000000");
                    break;
                case "outro":
                    ctx.drawImage(this.oIntroBgImgData.img, 0, 0 + this.posY2 - 100);
                    this.outroX += delta * 100;
                    if(this.outroX > 1250) {
                        this.outroX = -800;
                    }
                    var bX = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.susieIntro].x;
                    var bY = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.susieIntro].y;
                    var bWidth = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.susieIntro].width;
                    var bHeight = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.susieIntro].height;
                    ctx.drawImage(this.oIntroElementsImgData.img, bX, bY, bWidth, bHeight, this.outroX + 300, 175 - Math.sin(this.outroX / 70) * 30, bWidth, bHeight);
                    var bX = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.alienIntro].x;
                    var bY = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.alienIntro].y;
                    var bWidth = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.alienIntro].width;
                    var bHeight = this.oIntroElementsImgData.oData.oAtlasData[oImageIds.alienIntro].height;
                    ctx.drawImage(this.oIntroElementsImgData.img, bX, bY, bWidth, bHeight, this.outroX - 300, 175 + Math.sin(this.outroX / 25) * 20, bWidth, bHeight);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.titleHug].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 270 + this.posY2 * .5, bWidth, bHeight);
                    this.blinkInc += delta;
                    if(this.blinkInc > this.blinkTarg) {
                        this.blinkInc = 0;
                        this.blinkTarg = Math.random() * 2 + 2;
                        this.blinkFrame = 0;
                        this.blinkFrameInc = 0;
                        this.charBlink = Math.ceil(Math.random() * 2);
                    }
                    if(this.charBlink == 1) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["oscarBlink" + this.blinkFrame]].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 101, 397 + this.posY2 * .5, bWidth, bHeight);
                        this.blinkFrame = Math.round(this.blinkFrameInc += delta * 8) % 2;
                        if(this.blinkFrameInc > 2) {
                            this.charBlink = 0;
                        }
                    } else if(this.charBlink == 2) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["hedgehogBlink" + this.blinkFrame]].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 251, 405 + this.posY2 * .5, bWidth, bHeight);
                        this.blinkFrame = Math.round(this.blinkFrameInc += delta * 8) % 2;
                        if(this.blinkFrameInc > 2) {
                            this.charBlink = 0;
                        }
                    }
                    var bX = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x;
                    var bY = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y;
                    var bWidth = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width;
                    var bHeight = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
                    ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 53 + this.posY2 * .75, bWidth, bHeight);
                    addText(30, 440, "center", canvas.width / 2, 53 + this.posY2 * .75 + 43, "outro0", "#000000");
                    var bX = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x;
                    var bY = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y;
                    var bWidth = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width;
                    var bHeight = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
                    ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 572 + this.posY3, bWidth, bHeight);
                    addText(30, 440, "center", canvas.width / 2, 572 + this.posY3 + 43, "outro1", "#000000");
                    break;
                case "bioPage":
                    ctx.drawImage(this.oTitleBgImgData.img, 0, 0, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height, canvas.width / 2 - this.oTitleBgImgData.img.width / 2, canvas.height / 2 - this.oTitleBgImgData.img.height / 2, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height);
                    var bX = this.oBioElementsImgData.oData.oAtlasData[oImageIds.pageBg].x;
                    var bY = this.oBioElementsImgData.oData.oAtlasData[oImageIds.pageBg].y;
                    var bWidth = this.oBioElementsImgData.oData.oAtlasData[oImageIds.pageBg].width;
                    var bHeight = this.oBioElementsImgData.oData.oAtlasData[oImageIds.pageBg].height;
                    ctx.drawImage(this.oBioElementsImgData.img, bX, bY, bWidth, bHeight, 12 + this.posY2, 27, bWidth, bHeight);
                    var bX = this.oBioElementsImgData.oData.oAtlasData[oImageIds["charPhoto" + this.charBioId]].x;
                    var bY = this.oBioElementsImgData.oData.oAtlasData[oImageIds["charPhoto" + this.charBioId]].y;
                    var bWidth = this.oBioElementsImgData.oData.oAtlasData[oImageIds["charPhoto" + this.charBioId]].width;
                    var bHeight = this.oBioElementsImgData.oData.oAtlasData[oImageIds["charPhoto" + this.charBioId]].height;
                    ctx.drawImage(this.oBioElementsImgData.img, bX, bY, bWidth, bHeight, 141 - bWidth / 2 + this.posY2, 187 - bHeight / 2, bWidth, bHeight);
                    addText(60, 172, "center", 342 + this.posY2, 190, "charName" + this.charBioId, "#333333");
                    addText(35, 377, "center", canvas.width / 2 + this.posY2, 355, "bestFriend", "#990000");
                    addText(26, 377, "center", canvas.width / 2 + this.posY2, 385, "charFriend" + this.charBioId, "#333333");
                    addText(35, 377, "center", canvas.width / 2 + this.posY2, 425, "talent", "#990000");
                    addText(26, 377, "center", canvas.width / 2 + this.posY2, 455, "charTalent" + this.charBioId, "#333333");
                    addText(35, 377, "center", canvas.width / 2 + this.posY2, 495, "funFact", "#990000");
                    addText(26, 377, "center", canvas.width / 2 + this.posY2, 525, "charFact" + this.charBioId, "#333333");
                    for(var i = 0; i < this.aStickerPos.length; i++) {
                        var bX = this.oBioElementsImgData.oData.oAtlasData[oImageIds["sticker" + (i + this.charBioId * 2) % this.aStickerPos.length]].x;
                        var bY = this.oBioElementsImgData.oData.oAtlasData[oImageIds["sticker" + (i + this.charBioId * 2) % this.aStickerPos.length]].y;
                        var bWidth = this.oBioElementsImgData.oData.oAtlasData[oImageIds["sticker" + (i + this.charBioId * 2) % this.aStickerPos.length]].width;
                        var bHeight = this.oBioElementsImgData.oData.oAtlasData[oImageIds["sticker" + (i + this.charBioId * 2) % this.aStickerPos.length]].height;
                        ctx.drawImage(this.oBioElementsImgData.img, bX, bY, bWidth, bHeight, this.aStickerPos[i].x - bWidth / 2 + this.posY2, this.aStickerPos[i].y - bHeight / 2, bWidth, bHeight);
                    }
                    break;
                case "map":
                    this.mapPosRealY -= ((this.mapPosRealY - this.mapPosY) * 8) * delta;
                    ctx.drawImage(this.oMapImgData.img, 0, this.mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    var butId;
                    for(var i = 0; i < aMapButs.length; i++) {
                        var tempGetStars = saveDataHandler.getStars(i);
                        if(tempGetStars == 0) {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        } else if(tempGetStars == 1) {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        } else {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        }
                    }
                    if(this.mapButIdToHighlight != -1) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, aMapButs[this.mapButIdToHighlight][0] - bWidth / 2 - 5, aMapButs[this.mapButIdToHighlight][1] - bHeight - this.mapPosRealY + Math.sin(this.incY + this.mapButIdToHighlight * 45) * 5 - 20, bWidth, bHeight);
                    }
                    break;
                case "progressMap":
                    this.mapPosRealY -= ((this.mapPosRealY - this.mapPosY) * 8) * delta;
                    ctx.drawImage(this.oMapImgData.img, 0, this.mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
                    var butId;
                    for(var i = 0; i < aMapButs.length; i++) {
                        var tempGetStars = saveDataHandler.getStars(i);
                        if(tempGetStars == 0) {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut0].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        } else if(tempGetStars == 1) {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.mapBut1].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        } else {
                            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].x;
                            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].y;
                            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].width;
                            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds["mapStars" + (tempGetStars - 2)]].height;
                            _ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, aMapButs[i][0] - bWidth / 2, aMapButs[i][1] - bHeight / 2 - this.mapPosRealY, bWidth, bHeight);
                        }
                    }
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.hintFinger].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.posY2 - bWidth / 2 - 5, this.posY3 - bHeight - this.mapPosRealY, bWidth, bHeight);
                    break;
                case "credits":
                    ctx.drawImage(this.oTitleBgImgData.img, 0, 0, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height, canvas.width / 2 - this.oTitleBgImgData.img.width / 2, canvas.height / 2 - this.oTitleBgImgData.img.height / 2, this.oTitleBgImgData.img.width, this.oTitleBgImgData.img.height);
                    ctx.fillStyle = "rgba(0, 0, 0," + (.5 - this.posY / 50) + ")";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var tempImgData = assetLib.getData("info");
                    ctx.drawImage(tempImgData.img, 0, 0, tempImgData.img.width, tempImgData.img.height, canvas.width / 2 - tempImgData.img.width / 2 - this.posY, canvas.height / 2 - tempImgData.img.height / 2, tempImgData.img.width, tempImgData.img.height);
                    addText(30, 450, "center", canvas.width / 2 - this.posY, canvas.height / 2 - 170, "producedFor", "#FFFFFF");
                    addText(30, 450, "center", canvas.width / 2 - this.posY, canvas.height / 2 + 83, "createdBy", "#FFFFFF");
                    break;
                case "startPanel":
                    _ctx.fillStyle = "rgba(0, 0, 0, " + (this.posY3 / 200) + ")";
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var oTempImgData = assetLib.getData("background" + aLevelData[levelNum]["@levelTheme"]);
                    ctx.save();
                    ctx.globalAlpha = (this.posY2 / 100);
                    ctx.drawImage(oTempImgData.img, 0, 0);
                    ctx.restore();
                    if(levelNum > 0) {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 300 - bHeight / 2 + this.posY, bWidth, bHeight);
                        if(aLevelData[levelNum]["@levelType"] == 0) {
                            if(bubbleTargId == 0) {
                                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].x;
                                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].y;
                                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].width;
                                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].height;
                                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 20 - bWidth / 2, 317 - bHeight / 2 + this.posY, bWidth, bHeight);
                            } else {
                                var tempId2 = (bubbleTargId - 1);
                                if(tempId2 < 5) {
                                    tempId2 = (bubbleTargId - 1) * 5;
                                }
                                var imgX = (tempId2 * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                                var imgY = Math.floor(tempId2 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                                ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, canvas.width / 2 + 10 - this.oBubblesImgData.oData.spriteWidth / 2, 317 - this.oBubblesImgData.oData.spriteHeight / 2 + this.posY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
                            }
                            this.numberScale = 1;
                            for(var i = 0; i < bubbleTargNum.toString().length; i++) {
                                var id = parseFloat(bubbleTargNum.toString().charAt(i));
                                var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                                var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                                ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 - 25 + i * (this.letterSpace * this.numberScale) - (this.letterSpace * bubbleTargNum.toString().length) * this.numberScale, 294 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                            }
                            this.numberScale = .75;
                        } else if(aLevelData[levelNum]["@levelType"] == 1) {
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.reachTop].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.reachTop].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.reachTop].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.reachTop].height;
                            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 327 - bHeight / 2 + this.posY, bWidth, bHeight);
                        } else {
                            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.marshmallowGroup].x;
                            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.marshmallowGroup].y;
                            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.marshmallowGroup].width;
                            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.marshmallowGroup].height;
                            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 327 - bHeight / 2 + this.posY, bWidth, bHeight);
                        }
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["levelChar" + aLevelData[levelNum]["@levelTheme"]]].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["levelChar" + aLevelData[levelNum]["@levelTheme"]]].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["levelChar" + aLevelData[levelNum]["@levelTheme"]]].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["levelChar" + aLevelData[levelNum]["@levelTheme"]]].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.aLevelCharPos[aLevelData[levelNum]["@levelTheme"]].x - bWidth / 2, this.aLevelCharPos[aLevelData[levelNum]["@levelTheme"]].y + this.posY - bHeight / 2, bWidth, bHeight);
                        addText(40, 250, "center", canvas.width / 2 + this.aLevelCharPos[aLevelData[levelNum]["@levelTheme"]].tx, 270 + this.posY, "startLevel" + aLevelData[levelNum]["@levelType"], "#000000");
                        ctx.fillStyle = "#f7f7ea";
                        ctx.textAlign = "center";
                        ctx.font = "30px Julia SCI";
                        ctx.fillText((levelNum + 1).toString(), canvas.width / 2, 215 + this.posY);
                    } else {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tutPanel].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tutPanel].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tutPanel].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.tutPanel].height;
                        _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 300 - bHeight / 2 + this.posY, bWidth, bHeight);
                        this.tutAnim.x = canvas.width / 2;
                        this.tutAnim.y = 300 + this.posY;
                        this.tutAnim.update();
                        this.tutAnim.render();
                        addText(40, 280, "center", canvas.width / 2, 170 + this.posY, "howToPlay" + this.tutAnim.curAnimId, "#000000");
                        addText(30, 280, "center", canvas.width / 2, 450 + this.posY, "tapToContinue", "#000000");
                    }
                    break;
                case "endPanel":
                    var oTempImgData = assetLib.getData("background" + aLevelData[levelNum]["@levelTheme"]);
                    ctx.save();
                    ctx.globalAlpha = (this.posY2 / 100);
                    ctx.drawImage(oTempImgData.img, 0, 0);
                    ctx.restore();
                    _ctx.fillStyle = "rgba(0, 0, 0, " + ((this.posY2) / 200) + ")";
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 310 - bHeight / 2 + this.posY, bWidth, bHeight);
                    var tempId;
                    if(starBarLength >= aStarMarkers[0] / aStarMarkers[2]) {
                        tempId = "star";
                        this.starBounce0 += this.starBounceInc0;
                        this.starBounceInc0 += delta * 30;
                        if(this.starBounce0 > 0) {
                            this.starBounce0 = 0;
                            this.starBounceInc0 = -(Math.random() * 5 + 2);
                        }
                    } else {
                        tempId = "starFade";
                        this.starBounce0 = 0;
                    }
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - 95 - bWidth / 2, 190 - bHeight / 2 + this.posY + this.starBounce0, bWidth, bHeight);
                    if(starBarLength >= aStarMarkers[1] / aStarMarkers[2]) {
                        tempId = "star";
                        this.starBounce1 += this.starBounceInc1;
                        this.starBounceInc1 += delta * 30;
                        if(this.starBounce1 > 0) {
                            this.starBounce1 = 0;
                            this.starBounceInc1 = -(Math.random() * 5 + 2);
                        }
                    } else {
                        tempId = "starFade";
                        this.starBounce1 = 0;
                    }
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 175 - bHeight / 2 + this.posY + this.starBounce1, bWidth, bHeight);
                    if(starBarLength >= aStarMarkers[2] / aStarMarkers[2]) {
                        tempId = "star";
                        this.starBounce2 += this.starBounceInc2;
                        this.starBounceInc2 += delta * 30;
                        if(this.starBounce2 > 0) {
                            this.starBounce2 = 0;
                            this.starBounceInc2 = -(Math.random() * 5 + 2);
                        }
                    } else {
                        tempId = "starFade";
                        this.starBounce2 = 0;
                    }
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds[tempId]].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 + 95 - bWidth / 2, 190 - bHeight / 2 + this.posY + this.starBounce2, bWidth, bHeight);
                    addText(30, 268, "center", canvas.width / 2, 285 + this.posY, "endLevel" + aLevelData[levelNum]["@levelType"], "#000000");
                    addText(30, 268, "center", canvas.width / 2, 325 + this.posY, "levelScore", "#000000");
                    var tempScale = 1;
                    var tempScore = levelScore.toString();
                    while(tempScore.length < 6) {
                        tempScore = "0" + tempScore;
                    }
                    for(var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                        var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 + i * (this.letterSpace * tempScale) - (this.letterSpace * tempScore.length / 2) * tempScale, 345 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * tempScale, this.oNumbers0ImgData.oData.spriteHeight * tempScale);
                    }
                    break;
                case "endFailPanel":
                    var oTempImgData = assetLib.getData("background" + aLevelData[levelNum]["@levelTheme"]);
                    ctx.save();
                    ctx.globalAlpha = (this.posY2 / 100);
                    ctx.drawImage(oTempImgData.img, 0, 0);
                    ctx.restore();
                    _ctx.fillStyle = "rgba(0, 0, 0, " + ((this.posY2) / 200) + ")";
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.infoPanel].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 310 - bHeight / 2 + this.posY, bWidth, bHeight);
                    addText(40, 182, "center", canvas.width / 2, 186 + this.posY, "gameOver", "#FFFFFF");
                    addText(30, 268, "center", canvas.width / 2, 385 + this.posY, "tryAgain", "#000000");
                    addText(30, 268, "center", canvas.width / 2, 265 + this.posY, "totalScore", "#000000");
                    var tempScale = 1;
                    var tempScore = totalScore.toString();
                    while(tempScore.length < 6) {
                        tempScore = "0" + tempScore;
                    }
                    for(var i = 0; i < tempScore.length; i++) {
                        var id = parseFloat(tempScore.charAt(i));
                        var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                        var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, canvas.width / 2 + i * (this.letterSpace * tempScale) - (this.letterSpace * tempScore.length / 2) * tempScale, 273 + this.posY, this.oNumbers0ImgData.oData.spriteWidth * tempScale, this.oNumbers0ImgData.oData.spriteHeight * tempScale);
                    }
                    break;
                case "pause":
                    _ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    _ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.introPanel].height;
                    _ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 300 - bHeight / 2 + this.posY, bWidth, bHeight);
                    ctx.fillStyle = "#f7f7ea";
                    ctx.textAlign = "center";
                    ctx.font = "30px Julia SCI";
                    ctx.fillText((levelNum + 1).toString(), canvas.width / 2, 215 + this.posY);
                    break;
            }
            if(_butsOnTop) {
                this.addButs(_ctx);
            }
        };
        Panel.prototype.addButs = function (_ctx) {
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosY = this.posY;
                var floatY = 0;
                if(this.incY != 0 && !this.aButs[i].noMove) {
                    floatY = Math.sin(this.incY + i * 45) * 3;
                }
                if(i % 2 == 0) {
                }
                if(!this.aButs[i].scale) {
                    this.aButs[i].scale = 1;
                }
                var bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;
                var bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;
                var bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;
                var bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;
                _ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + floatY / 2 + this.posY, bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Hud = (function () {
        function Hud() {
            this.bonusScore = 0;
            this.letterSpace = 24;
            this.aSpecialBubbleIds = new Array();
            this.numberScale = .75;
            this.starBarLength = 179;
            this.nextBubbleX = 102;
            this.nextBubbleY = 594;
            this.tempNextBubbleX = 102;
            this.tempNextBubbleY = 594;
            this.swapButInc = 0;
            this.oHudImgData = assetLib.getData("hud");
            this.oNumbers0ImgData = assetLib.getData("numbers0");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.oUiButsImgData = assetLib.getData("uiButs");
            this.oBubblesImgData = assetLib.getData("bubbles");
            if(aLevelData[levelNum]["@vBombs"] == 1) {
                this.aSpecialBubbleIds.push(5);
            }
            if(aLevelData[levelNum]["@hBombs"] == 1) {
                this.aSpecialBubbleIds.push(6);
            }
            if(aLevelData[levelNum]["@lBombs"] == 1) {
                this.aSpecialBubbleIds.push(7);
            }
            if(aLevelData[levelNum]["@rBubbles"] == 1) {
                this.aSpecialBubbleIds.push(15);
            }
            this.addNextBubble();
        }
        Hud.prototype.setLevelSpecificTargets = function (_topRowFree, _gemNum) {
            if(aLevelData[levelNum]["@levelType"] == 1) {
                aLevelSpecificTarget = new Array(_topRowFree, 6);
            } else if(aLevelData[levelNum]["@levelType"] == 2) {
                aLevelSpecificTarget = new Array(0, _gemNum);
            }
        };
        Hud.prototype.getRandomBubble = function () {
            var aTempBubbles = new Array();
            for(var i = 0; i < aAllowedBubbleStates.length; i++) {
                if(aAllowedBubbleStates[i]) {
                    aTempBubbles.push(i);
                }
            }
            if(this.aSpecialBubbleIds.length > 0) {
                var ran = Math.random() * 1;
                if(ran < aLevelData[levelNum]["@specialChance"] / 100) {
                    return this.aSpecialBubbleIds[Math.floor(Math.random() * this.aSpecialBubbleIds.length)];
                } else {
                    return aTempBubbles[Math.floor(Math.random() * aTempBubbles.length)];
                }
            } else {
                return aTempBubbles[Math.floor(Math.random() * aTempBubbles.length)];
            }
        };
        Hud.prototype.addNextBubble = function () {
            this.nextBubbleId = this.getRandomBubble();
        };
        Hud.prototype.renderOver = function () {
            var id = 1;
            var imgX = (id * this.oHudImgData.oData.spriteWidth) % this.oHudImgData.img.width;
            var imgY = Math.floor(id / (this.oHudImgData.img.width / this.oHudImgData.oData.spriteWidth)) * this.oHudImgData.oData.spriteHeight;
            ctx.drawImage(this.oHudImgData.img, imgX, imgY, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight);
            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].x;
            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].y;
            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].width;
            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.pauseBut].height;
            ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, 385, 0, bWidth, bHeight);
            var bX = this.oUiButsImgData.oData.oAtlasData[oImageIds.swapBut].x;
            var bY = this.oUiButsImgData.oData.oAtlasData[oImageIds.swapBut].y;
            var bWidth = this.oUiButsImgData.oData.oAtlasData[oImageIds.swapBut].width;
            var bHeight = this.oUiButsImgData.oData.oAtlasData[oImageIds.swapBut].height;
            ctx.drawImage(this.oUiButsImgData.img, bX, bY, bWidth, bHeight, 140, 610 - this.swapButInc * 10, bWidth, bHeight);
            if(starBarLength > 0) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.starBar].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth * starBarLength, bHeight, 182, 21 - bHeight / 2, bWidth * starBarLength, bHeight);
            }
            for(var i = 0; i < aStarMarkers.length; i++) {
                var tempId = 0;
                var tempScale = 1;
                if(starBarLength >= aStarMarkers[i] / aStarMarkers[2]) {
                    tempId = 1;
                }
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["barStar" + tempId]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["barStar" + tempId]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["barStar" + tempId]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["barStar" + tempId]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 185 + ((aStarMarkers[i] / aStarMarkers[2]) * this.starBarLength) - (bWidth / 2) * tempScale, 20 - (bHeight / 2) * tempScale, bWidth * tempScale, bHeight * tempScale);
            }
            if(aLevelData[levelNum]["@bLimit"] == 0 || (aLevelData[levelNum]["@bLimit"] != 0 && bubblesToFire > 0)) {
                var tempId = this.nextBubbleId;
                if(tempId < 5) {
                    tempId = this.nextBubbleId * 5;
                } else {
                    tempId += 20;
                }
                var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.tempNextBubbleX - this.oBubblesImgData.oData.spriteWidth / 2, this.tempNextBubbleY - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
            }
            var tempScore = totalScore.toString();
            while(tempScore.length < 6) {
                tempScore = "0" + tempScore;
            }
            for(var i = 0; i < tempScore.length; i++) {
                var id = parseFloat(tempScore.charAt(i));
                var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 90 + i * (this.letterSpace * this.numberScale) - (this.letterSpace * tempScore.length) * this.numberScale / 2, 4, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
            }
            if(aLevelData[levelNum]["@bLimit"] != 0) {
                var tempScale = .65;
                for(var i = 0; i < bubblesToFire.toString().length; i++) {
                    var id = parseFloat(bubblesToFire.toString().charAt(i));
                    var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 125 + i * (this.letterSpace * tempScale), 580, this.oNumbers0ImgData.oData.spriteWidth * tempScale, this.oNumbers0ImgData.oData.spriteHeight * tempScale);
                }
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalPanel].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalPanel].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalPanel].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.goalPanel].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 361, 615, bWidth, bHeight);
            addText(25, 70, "center", 399, 638, "goal", "#FFFFFF");
            var tempOffsetY = 0;
            if(aLevelData[levelNum]["@levelType"] == 0) {
                if(bubbleTargId > 0) {
                    var tempId = bubbleTargId - 1;
                    if(tempId < 5) {
                        tempId = (bubbleTargId - 1) * 5;
                    } else {
                        tempId += 20;
                    }
                    var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                    var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2 + tempOffsetY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
                } else {
                    var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].x;
                    var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].y;
                    var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].width;
                    var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.allColourBubble].height;
                    ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, 423 - bWidth / 2, 675 - bHeight / 2 + tempOffsetY, bWidth, bHeight);
                }
                for(var i = 0; i < bubbleTargNum.toString().length; i++) {
                    var id = parseFloat(bubbleTargNum.toString().charAt(i));
                    var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 390 + i * (this.letterSpace * this.numberScale) - (this.letterSpace * bubbleTargNum.toString().length) * this.numberScale, 662 + tempOffsetY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                }
            } else {
                if(aLevelData[levelNum]["@levelType"] == 1) {
                    var imgX = (36 * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                    var imgY = Math.floor(36 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2 + tempOffsetY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
                } else {
                    var imgX = (30 * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                    var imgY = Math.floor(30 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, 425 - this.oBubblesImgData.oData.spriteWidth / 2, 675 - this.oBubblesImgData.oData.spriteHeight / 2 + tempOffsetY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
                }
                for(var i = 0; i < aLevelSpecificTarget[0].toString().length; i++) {
                    var id = parseFloat(aLevelSpecificTarget[0].toString().charAt(i));
                    var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 + i * (this.letterSpace * this.numberScale) - (this.letterSpace * (1 + aLevelSpecificTarget[0].toString().length + aLevelSpecificTarget[1].toString().length)) * this.numberScale, 662 + tempOffsetY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                }
                var id = 10;
                var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 - (this.letterSpace * (1 + aLevelSpecificTarget[1].toString().length)) * this.numberScale, 662 + tempOffsetY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                for(var i = 0; i < aLevelSpecificTarget[1].toString().length; i++) {
                    var id = parseFloat(aLevelSpecificTarget[1].toString().charAt(i));
                    var imgX = (id * this.oNumbers0ImgData.oData.spriteWidth) % this.oNumbers0ImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbers0ImgData.img.width / this.oNumbers0ImgData.oData.spriteWidth)) * this.oNumbers0ImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbers0ImgData.img, imgX, imgY, this.oNumbers0ImgData.oData.spriteWidth, this.oNumbers0ImgData.oData.spriteHeight, 400 + i * (this.letterSpace * this.numberScale) - (this.letterSpace * (aLevelSpecificTarget[1].toString().length)) * this.numberScale, 662 + tempOffsetY, this.oNumbers0ImgData.oData.spriteWidth * this.numberScale, this.oNumbers0ImgData.oData.spriteHeight * this.numberScale);
                }
            }
        };
        Hud.prototype.renderUnder = function () {
            var id = 0;
            var imgX = (id * this.oHudImgData.oData.spriteWidth) % this.oHudImgData.img.width;
            var imgY = Math.floor(id / (this.oHudImgData.img.width / this.oHudImgData.oData.spriteWidth)) * this.oHudImgData.oData.spriteHeight;
            ctx.drawImage(this.oHudImgData.img, imgX, imgY, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight);
        };
        return Hud;
    })();
    Elements.Hud = Hud;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var UserBubble = (function () {
        function UserBubble() {
            this.x = 0;
            this.y = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.vx = 0;
            this.vy = 0;
            this.isFlying = false;
            this.startX = bubbleStartX;
            this.startY = bubbleStartY;
            this.oBubblesImgData = assetLib.getData("bubbles");
            this.reset(true);
        }
        UserBubble.prototype.reset = function (_addNew) {
            if (typeof _addNew === "undefined") { _addNew = false; }
            this.wasClose = false;
            if(_addNew) {
                this.id = hud.getRandomBubble();
            } else {
                if(aLevelData[levelNum]["@bLimit"] == 0 || (aLevelData[levelNum]["@bLimit"] != 0 && --bubblesToFire >= 0)) {
                    this.id = hud.nextBubbleId;
                    hud.addNextBubble();
                } else {
                    bubblesToFire = 0;
                    return;
                }
            }
            this.x = hud.nextBubbleX;
            this.y = hud.nextBubbleY;
            hud.tempNextBubbleX = hud.nextBubbleX;
            hud.tempNextBubbleY = hud.nextBubbleY + 200;
            TweenLite.to(this, .4, {
                x: this.startX,
                y: this.startY,
                ease: "Quad.easeInOut"
            });
            TweenLite.to(hud, 1, {
                tempNextBubbleX: hud.nextBubbleX,
                tempNextBubbleY: hud.nextBubbleY,
                ease: "Back.easeOut",
                onComplete: function () {
                    swapAnimating = false;
                }
            });
            hedgehogAnim.triggerAnim("swap");
        };
        UserBubble.prototype.shoot = function () {
            this.isFlying = true;
            this.vx = 900 * Math.cos(aimRot);
            this.vy = 900 * Math.sin(aimRot);
        };
        UserBubble.prototype.tweenBubbleToPark = function () {
            this.isFlying = false;
            this.hitAngle = Math.atan2(this.vy, this.vx);
            this.vx = 0;
            this.vy = 0;
            gameTouchState = 4;
            bubbleStack.addBubble(this.id, bubbleTarget.x, bubbleTarget.y);
        };
        UserBubble.prototype.update = function () {
            if(gameTouchState == 2 && this.isFlying) {
                this.x -= this.vx * delta;
                this.y -= this.vy * delta;
                if(this.x < (wallDepth + ballRadius)) {
                    this.x = (wallDepth + ballRadius);
                    this.vx *= -1;
                    playSound("bounce");
                } else if(this.x > canvas.width - (wallDepth + ballRadius)) {
                    this.x = canvas.width - (wallDepth + ballRadius);
                    this.vx *= -1;
                    playSound("bounce");
                }
                var distance_squared = (((this.x - bubbleTarget.x) * (this.x - bubbleTarget.x)) + ((this.y - bubbleTarget.y) * (this.y - bubbleTarget.y)));
                if(this.y < bubbleTarget.y) {
                    this.tweenBubbleToPark();
                }
            }
        };
        UserBubble.prototype.render = function () {
            if(gameControlState && gameTouchState <= 3) {
                var tempId = this.id;
                if(tempId < 5) {
                    tempId = this.id * 5;
                } else {
                    tempId += 20;
                }
                var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2, this.y - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
            }
        };
        return UserBubble;
    })();
    Elements.UserBubble = UserBubble;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Launcher = (function () {
        function Launcher() {
            this.x = 0;
            this.y = 0;
            this.scaleX = 1;
            this.scaleY = 1;
            this.colourId = 0;
            this.aimLineAlpha = 0;
            this.aimLineLength = 0;
            this.hitSomething = false;
            this.lineScroll = 0;
            this.oGameElementsImgData = assetLib.getData("gameElements");
        }
        Launcher.prototype.findNearestFreePos = function (_startX, _startY, _angle) {
            var temp = 0;
            this.hitSomething = false;
            while(temp < this.aimLineLength) {
                var posX = _startX - temp * Math.cos(_angle);
                var posY = _startY - temp * Math.sin(_angle) - bubbleStack.ceiling;
                for(var i = 0; i < bubbleStack.aFreePos.length; i++) {
                    var distance_squared = (((posX - bubbleStack.aFreePos[i].targX) * (posX - bubbleStack.aFreePos[i].targX)) + ((posY - bubbleStack.aFreePos[i].targY) * (posY - bubbleStack.aFreePos[i].targY)));
                    if(distance_squared < ballRadius * ballRadius) {
                        bubbleTarget = {
                            x: bubbleStack.aFreePos[i].posX,
                            y: bubbleStack.ceiling + bubbleStack.aFreePos[i].posY
                        };
                        this.aimLineLength = temp;
                        this.hitSomething = true;
                        break;
                    }
                }
                temp++;
            }
        };
        Launcher.prototype.update = function () {
            this.lineScroll += 50 * delta;
            if(this.lineScroll > 500) {
                this.lineScroll = 0;
            }
        };
        Launcher.prototype.render = function () {
            if(gameTouchState == 0) {
                var aimId = oImageIds["aimLine" + Math.min(userBubble.id, 5)];
                var bX = this.oGameElementsImgData.oData.oAtlasData[aimId].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[aimId].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[aimId].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[aimId].height;
                var opposite = Math.abs((Math.tan(aimRot) * (canvas.width / 2 - (wallDepth + ballRadius))));
                this.aimLineLength = Math.min(Math.sqrt(opposite * opposite + (canvas.width / 2 - (wallDepth + ballRadius)) * (canvas.width / 2 - (wallDepth + ballRadius))), (bubbleStartY - bubbleStack.ceiling) + 100);
                this.findNearestFreePos(bubbleStartX, bubbleStartY, aimRot);
                this.aimLineLength = Math.min(this.aimLineLength, bWidth);
                ctx.save();
                ctx.globalAlpha = this.aimLineAlpha;
                ctx.translate(this.x, this.y);
                ctx.rotate(aimRot);
                ctx.drawImage(this.oGameElementsImgData.img, bX + ((bWidth / 2) - this.aimLineLength) + this.lineScroll, bY, (bWidth / 2) - ((bWidth / 2) - this.aimLineLength), bHeight, -this.aimLineLength, -bHeight / 2, (bWidth / 2) - ((bWidth / 2) - this.aimLineLength), bHeight);
                ctx.restore();
                var bounceSide;
                if(!aimingFlipped) {
                    if(aimX < canvas.width / 2) {
                        bounceSide = "left";
                    } else {
                        bounceSide = "right";
                    }
                } else {
                    if(aimX < canvas.width / 2) {
                        bounceSide = "right";
                    } else {
                        bounceSide = "left";
                    }
                }
                var startY = bubbleStartY;
                var wallBounces = 0;
                while(!this.hitSomething && opposite < startY - bubbleStack.ceiling) {
                    if(bounceSide == "left") {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[aimId].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[aimId].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[aimId].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[aimId].height;
                        var aimRotBounce;
                        if(wallBounces % 2 == 0) {
                            aimRotBounce = -aimRot + 180 * radian;
                        } else {
                            aimRotBounce = aimRot;
                        }
                        var oppositeBounce = Math.abs((Math.tan(aimRotBounce) * (canvas.width - (wallDepth + ballRadius) * 2)));
                        this.aimLineLength = Math.min(Math.sqrt(oppositeBounce * oppositeBounce + (canvas.width - (wallDepth + ballRadius) * 2) * (canvas.width - (wallDepth + ballRadius) * 2)), (bubbleStartY - bubbleStack.ceiling) + 100);
                        this.findNearestFreePos((wallDepth + ballRadius), startY - opposite, aimRotBounce);
                        this.aimLineLength = Math.min(this.aimLineLength, bWidth);
                        if(wallBounces == 0) {
                            ctx.save();
                            ctx.globalAlpha = this.aimLineAlpha;
                            ctx.translate((wallDepth + ballRadius), startY - opposite);
                            ctx.rotate(aimRotBounce);
                            var tempAimLineLength = Math.max(Math.min(this.aimLineLength, 70), 1);
                            ctx.drawImage(this.oGameElementsImgData.img, bX + this.lineScroll, bY, tempAimLineLength, bHeight, -tempAimLineLength, -bHeight / 2, tempAimLineLength, bHeight);
                            ctx.restore();
                        }
                        startY = startY - opposite;
                        opposite = oppositeBounce;
                        bounceSide = "right";
                    } else if(bounceSide == "right") {
                        var bX = this.oGameElementsImgData.oData.oAtlasData[aimId].x;
                        var bY = this.oGameElementsImgData.oData.oAtlasData[aimId].y;
                        var bWidth = this.oGameElementsImgData.oData.oAtlasData[aimId].width;
                        var bHeight = this.oGameElementsImgData.oData.oAtlasData[aimId].height;
                        var aimRotBounce;
                        if(wallBounces % 2 == 0) {
                            aimRotBounce = -aimRot + 180 * radian;
                        } else {
                            aimRotBounce = aimRot;
                        }
                        var oppositeBounce = Math.abs((Math.tan(aimRotBounce) * (canvas.width - (wallDepth + ballRadius) * 2)));
                        this.aimLineLength = Math.min(Math.sqrt(oppositeBounce * oppositeBounce + (canvas.width - (wallDepth + ballRadius) * 2) * (canvas.width - (wallDepth + ballRadius) * 2)), (bubbleStartY - bubbleStack.ceiling) + 100);
                        this.findNearestFreePos(canvas.width - (wallDepth + ballRadius), startY - opposite, aimRotBounce);
                        this.aimLineLength = Math.min(this.aimLineLength, bWidth);
                        if(wallBounces == 0) {
                            ctx.save();
                            ctx.globalAlpha = this.aimLineAlpha;
                            ctx.translate(canvas.width - (wallDepth + ballRadius), startY - opposite);
                            ctx.rotate(aimRotBounce);
                            var tempAimLineLength = Math.max(Math.min(this.aimLineLength, 70), 1);
                            ctx.drawImage(this.oGameElementsImgData.img, bX + this.lineScroll, bY, tempAimLineLength, bHeight, -tempAimLineLength, -bHeight / 2, tempAimLineLength, bHeight);
                            ctx.restore();
                        }
                        startY = startY - opposite;
                        opposite = oppositeBounce;
                        bounceSide = "left";
                    }
                    if(++wallBounces > 50) {
                        break;
                    }
                }
            }
        };
        return Launcher;
    })();
    Elements.Launcher = Launcher;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var BubbleStack = (function () {
        function BubbleStack(_aLevelData) {
            this.ceilingLimit = 55;
            this.moveCeilingUpAt = 385;
            this.moveCeilingDownAt = 360;
            this.freePosAdjust = .8;
            this.hasRemoved = false;
            this.praiseTarg = 10;
            this.oBubblesImgData = assetLib.getData("bubbles");
            this.ceiling = this.ceilingLimit;
            this.aBubblePos = new Array();
            var bx = wallDepth + ballRadius;
            var by = ballRadius;
            var row = 0;
            var column = 0;
            var topRowFree = 10;
            var gemNum = 0;
            for(var i = 0; i < _aLevelData.length; i++) {
                if(_aLevelData[i] != -1) {
                    var tempId = _aLevelData[i];
                    if(tempId == 10) {
                        tempId += Math.floor(Math.random() * 5);
                    }
                    if(row == 0) {
                        topRowFree--;
                    }
                    if(_aLevelData[i] == 10) {
                        gemNum++;
                    }
                    this.aBubblePos.push({
                        id: tempId,
                        x: bx,
                        y: by,
                        state: 0,
                        float: 0,
                        vx: 0,
                        vy: 0,
                        inc: 0,
                        dist: 0,
                        face: Math.floor(Math.random() * 4)
                    });
                }
                bx += ballRadius * 2;
                column++;
                if(row % 2 == 0) {
                    if(column == 10) {
                        column = 0;
                        bx = wallDepth + ballRadius + ballRadius;
                        by += ballRadius * 1.75;
                        row++;
                    }
                } else {
                    if(column == 9) {
                        column = 0;
                        bx = wallDepth + ballRadius;
                        by += ballRadius * 1.75;
                        row++;
                    }
                }
            }
            this.animateInitialCeiling();
            hud.setLevelSpecificTargets(topRowFree, gemNum);
            this.getAllFreePos();
        }
        BubbleStack.prototype.animateInitialCeiling = function () {
            var _this = this;
            var lowestBubbleY = this.getLowestBubbleY() + this.ceiling;
            var tempCeiling = this.ceiling;
            if(lowestBubbleY > this.moveCeilingUpAt) {
                tempCeiling = this.ceiling - (lowestBubbleY - this.moveCeilingUpAt);
            }
            this.ceiling = Math.min(tempCeiling + 100, this.ceilingLimit);
            TweenLite.to(this, 1, {
                ceiling: tempCeiling,
                ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.animateInitialComplete();
                }
            });
        };
        BubbleStack.prototype.animateInitialComplete = function () {
            gameTouchState = 0;
            bubbleInFlight = false;
        };
        BubbleStack.prototype.setCeiling = function () {
            var lowestBubbleY = this.getLowestBubbleY() + this.ceiling;
            if(lowestBubbleY > this.moveCeilingUpAt) {
                this.ceiling = this.ceiling - (lowestBubbleY - this.moveCeilingUpAt);
            }
        };
        BubbleStack.prototype.addBubble = function (_id, _x, _y) {
            var _this = this;
            this.aBubblePos.push({
                id: _id,
                x: _x,
                y: _y - this.ceiling,
                state: 1,
                float: 0,
                vx: 0,
                vy: 0,
                inc: 0,
                dist: 0,
                face: Math.floor(Math.random() * 4)
            });
            this.aToRemove = new Array();
            this.aSpecials = new Array();
            var isSpecial = true;
            var anyBomb = false;
            switch(_id) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    this.findMatchingConnectingBubbles(_id, _x, _y - this.ceiling);
                    isSpecial = false;
                    break;
                case 15:
                    this.findRainbowConnectingBubbles(_id, _x, _y - this.ceiling, true);
                    break;
                case 5:
                    this.findVerticleBubbles(_id, _x, _y - this.ceiling, true);
                    anyBomb = true;
                    break;
                case 6:
                    this.findHorizontalBubbles(_id, _x, _y - this.ceiling, true);
                    anyBomb = true;
                    break;
                case 7:
                    this.findNuclearBubbles(_id, _x, _y - this.ceiling, true);
                    anyBomb = true;
                    break;
            }
            for(var i = 0; i < this.aSpecials.length; i++) {
                switch(this.aSpecials[i].id) {
                    case 5:
                        this.findVerticleBubbles(this.aSpecials[i].id, this.aSpecials[i].x, this.aSpecials[i].y);
                        anyBomb = true;
                        break;
                    case 6:
                        this.findHorizontalBubbles(this.aSpecials[i].id, this.aSpecials[i].x, this.aSpecials[i].y);
                        anyBomb = true;
                        break;
                    case 7:
                        this.findNuclearBubbles(this.aSpecials[i].id, this.aSpecials[i].x, this.aSpecials[i].y);
                        anyBomb = true;
                        break;
                    case 9:
                        playSound("bonusBubble");
                        break;
                }
            }
            if(anyBomb) {
                playSound("explode" + Math.floor(Math.random() * 4));
            }
            if(this.aToRemove.length >= 3 || _id > 4 || this.aSpecials.length > 0) {
                curPopChain++;
                this.hasRemoved = true;
                if(this.aSpecials.length > 0 || isSpecial) {
                    addFirework(1, _x, _y);
                } else {
                    addFirework(0, _x, _y);
                }
                this.findFloatingBubbles();
                this.removeBubbles(_x, _y - this.ceiling);
            } else {
                curPopChain = -1;
                this.hasRemoved = false;
                playSound("bounce");
                for(var i = 0; i < this.aBubblePos.length; i++) {
                    this.aBubblePos[i].state = 0;
                }
            }
            this.getAllFreePos();
            var lowestBubbleY = this.getLowestBubbleY() + this.ceiling;
            if(lowestBubbleY > this.moveCeilingUpAt) {
                TweenLite.to(this, .75, {
                    ceiling: this.ceiling - (lowestBubbleY - this.moveCeilingUpAt),
                    ease: "Quad.easeInOut",
                    onComplete: function () {
                        _this.ceilingMoved();
                    }
                });
            } else if(lowestBubbleY < this.moveCeilingDownAt && this.ceiling < this.ceilingLimit) {
                TweenLite.to(this, .75, {
                    ceiling: Math.min(this.ceiling + (this.moveCeilingDownAt - lowestBubbleY), this.ceilingLimit),
                    ease: "Quad.easeInOut",
                    onComplete: function () {
                        _this.ceilingMoved();
                    }
                });
            } else {
                this.ceilingMoved();
            }
        };
        BubbleStack.prototype.findNuclearBubbles = function (_id, _x, _y, _first) {
            if (typeof _first === "undefined") { _first = false; }
            var maxDist = (ballRadius * 4) * (ballRadius * 4) + 50;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                this.aBubblePos[i].float = 1;
                var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                var hitAngle = Math.atan2(_y - this.aBubblePos[i].y, _x - this.aBubblePos[i].x);
                var hitDist = (Math.max(20000 - distance_squared, 0)) / 500;
                this.aBubblePos[i].vx = hitDist * Math.cos(hitAngle);
                this.aBubblePos[i].vy = hitDist * Math.sin(hitAngle);
                this.aBubblePos[i].inc = 0;
                this.aBubblePos[i].dist = hitDist / 2.5;
                this.aBubblePos[i].range = Math.sqrt(distance_squared) / 25;
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y)) {
                    if(distance_squared < maxDist) {
                        this.aToRemove.push(this.aBubblePos[i]);
                        this.aBubblePos[i].state = 1;
                        if(_first && this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        }
                    }
                } else {
                    this.aBubblePos[i].vx = hitDist * Math.cos(userBubble.hitAngle);
                    this.aBubblePos[i].vy = hitDist * Math.sin(userBubble.hitAngle);
                    this.aBubblePos[i].inc = 0;
                    this.aBubblePos[i].dist = hitDist / 2.5;
                }
            }
            this.aToRemove.push({
                id: _id,
                x: _x,
                y: _y
            });
        };
        BubbleStack.prototype.findHorizontalBubbles = function (_id, _x, _y, _first) {
            if (typeof _first === "undefined") { _first = false; }
            var maxDist = (ballRadius * 2) * (ballRadius * 2) + 50;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                this.aBubblePos[i].float = 1;
                var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                var hitAngle = Math.atan2(_y - this.aBubblePos[i].y, _x - this.aBubblePos[i].x);
                var hitDist = (Math.max(20000 - distance_squared, 0)) / 500;
                this.aBubblePos[i].vx = hitDist * Math.cos(hitAngle);
                this.aBubblePos[i].vy = hitDist * Math.sin(hitAngle);
                this.aBubblePos[i].inc = 0;
                this.aBubblePos[i].dist = hitDist / 2.5;
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y)) {
                    if(_y == this.aBubblePos[i].y) {
                        this.aToRemove.push(this.aBubblePos[i]);
                        this.aBubblePos[i].range = Math.abs(Math.round((this.aBubblePos[i].x - _x) / (ballRadius * 2)));
                        this.aBubblePos[i].state = 1;
                    }
                    if(_first && distance_squared < maxDist) {
                        if(this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        }
                    }
                } else {
                    this.aBubblePos[i].vx = hitDist * Math.cos(userBubble.hitAngle);
                    this.aBubblePos[i].vy = hitDist * Math.sin(userBubble.hitAngle);
                    this.aBubblePos[i].inc = 0;
                    this.aBubblePos[i].dist = hitDist / 2.5;
                }
            }
            this.aToRemove.push({
                id: _id,
                x: _x,
                y: _y
            });
        };
        BubbleStack.prototype.findVerticleBubbles = function (_id, _x, _y, _first) {
            if (typeof _first === "undefined") { _first = false; }
            var maxDist = (ballRadius * 2) * (ballRadius * 2) + 50;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                this.aBubblePos[i].float = 1;
                var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                var hitAngle = Math.atan2(_y - this.aBubblePos[i].y, _x - this.aBubblePos[i].x);
                var hitDist = (Math.max(20000 - distance_squared, 0)) / 500;
                this.aBubblePos[i].vx = hitDist * Math.cos(hitAngle);
                this.aBubblePos[i].vy = hitDist * Math.sin(hitAngle);
                this.aBubblePos[i].inc = 0;
                this.aBubblePos[i].dist = hitDist / 2.5;
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y)) {
                    if(_x > this.aBubblePos[i].x - ballRadius - 5 && _x < this.aBubblePos[i].x + ballRadius + 5 && _y > this.aBubblePos[i].y - 300 && _y < this.aBubblePos[i].y + 300) {
                        this.aToRemove.push(this.aBubblePos[i]);
                        this.aBubblePos[i].range = Math.abs(Math.round((this.aBubblePos[i].y - _y) / (ballRadius * 2)));
                        this.aBubblePos[i].state = 1;
                    }
                    if(_first && distance_squared < maxDist) {
                        if(this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        }
                    }
                } else {
                    this.aBubblePos[i].vx = hitDist * Math.cos(userBubble.hitAngle);
                    this.aBubblePos[i].vy = hitDist * Math.sin(userBubble.hitAngle);
                    this.aBubblePos[i].inc = 0;
                    this.aBubblePos[i].dist = hitDist / 2.5;
                }
            }
            this.aToRemove.push({
                id: _id,
                x: _x,
                y: _y
            });
        };
        BubbleStack.prototype.findRainbowConnectingBubbles = function (_id, _x, _y, _first) {
            if (typeof _first === "undefined") { _first = false; }
            var maxDist = (ballRadius * 2) * (ballRadius * 2) + 50;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                this.aBubblePos[i].float = 1;
                var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                var hitAngle = Math.atan2(_y - this.aBubblePos[i].y, _x - this.aBubblePos[i].x);
                var hitDist = (Math.max(20000 - distance_squared, 0)) / 500;
                this.aBubblePos[i].vx = hitDist * Math.cos(hitAngle);
                this.aBubblePos[i].vy = hitDist * Math.sin(hitAngle);
                this.aBubblePos[i].inc = 0;
                this.aBubblePos[i].dist = hitDist / 2.5;
                this.aBubblePos[i].range = Math.sqrt(distance_squared) / 25;
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y)) {
                    if(distance_squared < maxDist) {
                        if(this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        } else if(this.aBubblePos[i].id < 5) {
                            this.aBubblePos[i].state = 1;
                            this.aToRemove.push(this.aBubblePos[i]);
                        } else if(_first && this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        }
                    }
                } else {
                    this.aBubblePos[i].vx = hitDist * Math.cos(userBubble.hitAngle);
                    this.aBubblePos[i].vy = hitDist * Math.sin(userBubble.hitAngle);
                    this.aBubblePos[i].inc = 0;
                    this.aBubblePos[i].dist = hitDist / 2.5;
                }
            }
            if(this.aToRemove.length > 0) {
                for(var i = 0; i < this.aToRemove.length; i++) {
                    for(var j = 0; j < this.aBubblePos.length; j++) {
                        if(this.aToRemove[i].id == this.aBubblePos[j].id && this.aBubblePos[j].state == 0) {
                            var distance_squared = (((this.aToRemove[i].x - this.aBubblePos[j].x) * (this.aToRemove[i].x - this.aBubblePos[j].x)) + ((this.aToRemove[i].y - this.aBubblePos[j].y) * (this.aToRemove[i].y - this.aBubblePos[j].y)));
                            if(distance_squared < maxDist) {
                                this.aBubblePos[j].state = this.aToRemove.length + 1;
                                this.aToRemove.push(this.aBubblePos[j]);
                            }
                        }
                    }
                }
            }
            this.aToRemove.push({
                id: _id,
                x: _x,
                y: _y
            });
        };
        BubbleStack.prototype.findMatchingConnectingBubbles = function (_id, _x, _y) {
            var maxDist = (ballRadius * 2) * (ballRadius * 2) + 50;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                this.aBubblePos[i].float = 1;
                var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                var hitAngle = Math.atan2(_y - this.aBubblePos[i].y, _x - this.aBubblePos[i].x);
                var hitDist = (Math.max(20000 - distance_squared, 0)) / 500;
                this.aBubblePos[i].vx = hitDist * Math.cos(hitAngle);
                this.aBubblePos[i].vy = hitDist * Math.sin(hitAngle);
                this.aBubblePos[i].inc = 0;
                this.aBubblePos[i].dist = hitDist / 2.5;
                this.aBubblePos[i].range = Math.sqrt(distance_squared) / 25;
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y)) {
                    if(distance_squared < maxDist) {
                        if(this.aBubblePos[i].id == _id) {
                            this.aToRemove.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        } else if(this.aBubblePos[i].id > 4 && (this.aBubblePos[i].id != 8 && !(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15))) {
                            this.aSpecials.push(this.aBubblePos[i]);
                            this.aBubblePos[i].state = 1;
                        }
                    }
                } else {
                    this.aBubblePos[i].vx = hitDist * Math.cos(userBubble.hitAngle);
                    this.aBubblePos[i].vy = hitDist * Math.sin(userBubble.hitAngle);
                    this.aBubblePos[i].inc = 0;
                    this.aBubblePos[i].dist = hitDist / 2.5;
                }
            }
            if(this.aToRemove.length > 0) {
                for(var i = 0; i < this.aToRemove.length; i++) {
                    for(var j = 0; j < this.aBubblePos.length; j++) {
                        if(this.aToRemove[i].id == this.aBubblePos[j].id && this.aBubblePos[j].state == 0) {
                            var distance_squared = (((this.aToRemove[i].x - this.aBubblePos[j].x) * (this.aToRemove[i].x - this.aBubblePos[j].x)) + ((this.aToRemove[i].y - this.aBubblePos[j].y) * (this.aToRemove[i].y - this.aBubblePos[j].y)));
                            var initial_distance_squared = (((_x - this.aToRemove[i].x) * (_x - this.aToRemove[i].x)) + ((_y - this.aToRemove[i].y) * (_y - this.aToRemove[i].y)));
                            if(distance_squared < maxDist) {
                                this.aBubblePos[j].state = 1;
                                this.aToRemove.push(this.aBubblePos[j]);
                            }
                        }
                    }
                }
            }
            this.aToRemove.push({
                id: _id,
                x: _x,
                y: _y
            });
        };
        BubbleStack.prototype.findFloatingBubbles = function () {
            var aCeilingBubbles = new Array();
            for(var i = 0; i < this.aBubblePos.length; i++) {
                if(this.aBubblePos[i].y == ballRadius && this.aBubblePos[i].state == 0) {
                    this.aBubblePos[i].float = 0;
                    this.findAnyConnectingBubbles(this.aBubblePos[i].x, this.aBubblePos[i].y);
                }
            }
        };
        BubbleStack.prototype.findAnyConnectingBubbles = function (_x, _y) {
            var maxDist = (ballRadius * 2) * (ballRadius * 2) + 50;
            var aNotFloating = new Array();
            for(var i = 0; i < this.aBubblePos.length; i++) {
                if(!(_x == this.aBubblePos[i].x && _y == this.aBubblePos[i].y) && this.aBubblePos[i].state == 0) {
                    var distance_squared = (((_x - this.aBubblePos[i].x) * (_x - this.aBubblePos[i].x)) + ((_y - this.aBubblePos[i].y) * (_y - this.aBubblePos[i].y)));
                    if(distance_squared < maxDist) {
                        this.aBubblePos[i].float = 0;
                        aNotFloating.push(this.aBubblePos[i]);
                    }
                }
            }
            if(aNotFloating.length > 0) {
                for(var i = 0; i < aNotFloating.length; i++) {
                    for(var j = 0; j < this.aBubblePos.length; j++) {
                        if(this.aBubblePos[j].float == 1 && this.aBubblePos[j].state == 0) {
                            var distance_squared = (((aNotFloating[i].x - this.aBubblePos[j].x) * (aNotFloating[i].x - this.aBubblePos[j].x)) + ((aNotFloating[i].y - this.aBubblePos[j].y) * (aNotFloating[i].y - this.aBubblePos[j].y)));
                            if(distance_squared < maxDist) {
                                this.aBubblePos[j].float = 0;
                                aNotFloating.push(this.aBubblePos[j]);
                            }
                        }
                    }
                }
            }
        };
        BubbleStack.prototype.removeBubbles = function (_x, _y) {
            if(this.aToRemove.length > this.praiseTarg) {
                displayInGameText("praise" + Math.floor(Math.random() * 3), .5);
                playSound("praise");
                this.praiseTarg += 5;
            }
            for(var i = 0; i < this.aBubblePos.length; i++) {
                if(this.aBubblePos[i].state != 0 || this.aBubblePos[i].float == 1) {
                    if(this.aBubblePos[i].state != 0) {
                        if(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15) {
                            addFallingBubble(this.aBubblePos[i].id, this.aBubblePos[i].x, this.aBubblePos[i].y + this.ceiling);
                        } else {
                            addPop(this.aBubblePos[i].x, this.aBubblePos[i].y, this.aBubblePos[i].range, this.aBubblePos[i].id);
                        }
                    } else {
                        addFallingBubble(this.aBubblePos[i].id, this.aBubblePos[i].x, this.aBubblePos[i].y + this.ceiling);
                    }
                    this.aBubblePos.splice(i, 1);
                    i -= 1;
                }
            }
        };
        BubbleStack.prototype.ceilingMoved = function () {
            if(aLevelData[levelNum]["@levelType"] == 1) {
                var tempN = 10;
                for(var i = 0; i < this.aBubblePos.length; i++) {
                    if(this.aBubblePos[i].y == ballRadius) {
                        tempN--;
                    }
                }
                aLevelSpecificTarget[0] = tempN;
                if(aLevelSpecificTarget[0] >= aLevelSpecificTarget[1]) {
                    initLevelCompleteSequence();
                    return;
                }
            } else if(aLevelData[levelNum]["@levelType"] == 2) {
                var tempN = aLevelSpecificTarget[1];
                var canShowMesage = false;
                if(aLevelSpecificTarget[0] != aLevelSpecificTarget[1] - 1) {
                    canShowMesage = true;
                }
                for(var i = 0; i < this.aBubblePos.length; i++) {
                    if(this.aBubblePos[i].id > 9 && this.aBubblePos[i].id < 15) {
                        tempN--;
                    }
                }
                aLevelSpecificTarget[0] = tempN;
                if(aLevelSpecificTarget[0] >= aLevelSpecificTarget[1]) {
                    initLevelCompleteSequence();
                    return;
                }
                if(canShowMesage && aLevelSpecificTarget[0] == aLevelSpecificTarget[1] - 1) {
                    displayInGameText("oneLeft", .5);
                }
            }
            firstPop = true;
            gameTouchState = 0;
            bubbleInFlight = false;
            launcher.render();
            if(aLevelData[levelNum]["@bLimit"] != 0 && gameIsInPlay && bubblesToFire == 0) {
                initLevelFailSequence();
            }
            userBubble.reset();
        };
        BubbleStack.prototype.getLowestBubbleY = function () {
            var lowestY = 0;
            for(var i = 0; i < this.aBubblePos.length; i++) {
                if(this.aBubblePos[i].y > lowestY) {
                    lowestY = this.aBubblePos[i].y;
                }
            }
            return lowestY;
        };
        BubbleStack.prototype.getAllFreePos = function () {
            this.aFreePos = new Array();
            var tempX = wallDepth + ballRadius + ballRadius;
            for(var i = 0; i < 9; i++) {
                var aCanAdd = new Array(1, 1);
                for(var j = 0; j < this.aBubblePos.length; j++) {
                    if(tempX > wallDepth + ballRadius) {
                        if(tempX - ballRadius == this.aBubblePos[j].x && 0 == this.aBubblePos[j].y) {
                            aCanAdd[0] = 0;
                        }
                    } else {
                        aCanAdd[0] = 0;
                    }
                    if(tempX < canvas.width - (wallDepth + ballRadius)) {
                        if(tempX + ballRadius == this.aBubblePos[j].x && 0 == this.aBubblePos[j].y) {
                            aCanAdd[1] = 0;
                        }
                    } else {
                        aCanAdd[1] = 0;
                    }
                }
                if(aCanAdd[0] == 1) {
                    this.aFreePos.push({
                        posX: tempX - ballRadius,
                        posY: ballRadius,
                        targX: tempX - ballRadius / 2,
                        targY: ballRadius
                    });
                }
                if(aCanAdd[0] == 1) {
                    this.aFreePos.push({
                        posX: tempX + ballRadius,
                        posY: ballRadius,
                        targX: tempX + ballRadius / 2,
                        targY: ballRadius
                    });
                }
                tempX += ballRadius * 2;
            }
            aAllowedBubbleStates = new Array(0, 0, 0, 0, 0);
            for(var i = 0; i < this.aBubblePos.length; i++) {
                var aCanAdd = new Array(1, 1, 1, 1);
                for(var j = 0; j < this.aBubblePos.length; j++) {
                    if(this.aBubblePos[i].y != ballRadius && this.aBubblePos[i].x > wallDepth + ballRadius * 2) {
                        if(this.aBubblePos[i].x - ballRadius * 2 == this.aBubblePos[j].x && this.aBubblePos[i].y == this.aBubblePos[j].y) {
                            aCanAdd[0] = 0;
                        }
                    } else {
                        aCanAdd[0] = 0;
                    }
                    if(this.aBubblePos[i].x > wallDepth + ballRadius) {
                        if(this.aBubblePos[i].x - ballRadius == this.aBubblePos[j].x && this.aBubblePos[i].y + ballRadius * 1.75 == this.aBubblePos[j].y) {
                            aCanAdd[1] = 0;
                        }
                    } else {
                        aCanAdd[1] = 0;
                    }
                    if(this.aBubblePos[i].x < canvas.width - (wallDepth + ballRadius)) {
                        if(this.aBubblePos[i].x + ballRadius == this.aBubblePos[j].x && this.aBubblePos[i].y + ballRadius * 1.75 == this.aBubblePos[j].y) {
                            aCanAdd[2] = 0;
                        }
                    } else {
                        aCanAdd[2] = 0;
                    }
                    if(this.aBubblePos[i].y != ballRadius && this.aBubblePos[i].x < canvas.width - (wallDepth + ballRadius * 2)) {
                        if(this.aBubblePos[i].x + ballRadius * 2 == this.aBubblePos[j].x && this.aBubblePos[i].y == this.aBubblePos[j].y) {
                            aCanAdd[3] = 0;
                        }
                    } else {
                        aCanAdd[3] = 0;
                    }
                }
                if(aCanAdd[0] == 1) {
                    this.aFreePos.push({
                        posX: this.aBubblePos[i].x - (ballRadius * 2),
                        posY: this.aBubblePos[i].y,
                        targX: this.aBubblePos[i].x - ((ballRadius * 2) / 2) * this.freePosAdjust,
                        targY: this.aBubblePos[i].y
                    });
                }
                if(aCanAdd[1] == 1) {
                    this.aFreePos.push({
                        posX: this.aBubblePos[i].x - ballRadius,
                        posY: this.aBubblePos[i].y + (ballRadius * 1.75),
                        targX: this.aBubblePos[i].x - (ballRadius / 2) * this.freePosAdjust,
                        targY: this.aBubblePos[i].y + ((ballRadius * 1.75) / 2) * this.freePosAdjust
                    });
                }
                if(aCanAdd[2] == 1) {
                    this.aFreePos.push({
                        posX: this.aBubblePos[i].x + ballRadius,
                        posY: this.aBubblePos[i].y + (ballRadius * 1.75),
                        targX: this.aBubblePos[i].x + (ballRadius / 2) * this.freePosAdjust,
                        targY: this.aBubblePos[i].y + ((ballRadius * 1.75) / 2) * this.freePosAdjust
                    });
                }
                if(aCanAdd[3] == 1) {
                    this.aFreePos.push({
                        posX: this.aBubblePos[i].x + (ballRadius * 2),
                        posY: this.aBubblePos[i].y,
                        targX: this.aBubblePos[i].x + ((ballRadius * 2) / 2) * this.freePosAdjust,
                        targY: this.aBubblePos[i].y
                    });
                }
                if(this.aBubblePos[i].id < 5) {
                    aAllowedBubbleStates[this.aBubblePos[i].id] = true;
                }
            }
            var allFalse = true;
            for(var i = 0; i < aAllowedBubbleStates.length; i++) {
                if(aAllowedBubbleStates[i]) {
                    allFalse = false;
                }
            }
            if(allFalse) {
                aAllowedBubbleStates = new Array(1, 1, 1, 1, 1);
            }
        };
        BubbleStack.prototype.update = function () {
        };
        BubbleStack.prototype.render = function () {
            var vx;
            var vy;
            var jiggleTime;
            var jiggleMultipier;
            if(this.hasRemoved) {
                jiggleTime = 10;
                jiggleMultipier = 1.5;
            } else {
                jiggleTime = 5;
                jiggleMultipier = .75;
            }
            if(aLevelData[levelNum]["@levelType"] == 1) {
                for(var i = 0; i < 10; i++) {
                    var imgX = (36 * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                    var imgY = Math.floor(36 / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                    ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, wallDepth + ballRadius - this.oBubblesImgData.oData.spriteWidth / 2 + (ballRadius * 2) * i, this.ceiling + ballRadius - this.oBubblesImgData.oData.spriteHeight / 2, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
                }
            }
            for(var i = 0; i < this.aBubblePos.length; i++) {
                if(Math.random() > .99) {
                    this.aBubblePos[i].face = Math.floor(Math.random() * 5);
                }
                if(this.aBubblePos[i].inc < jiggleTime) {
                    this.aBubblePos[i].inc += (this.aBubblePos[i].dist * delta);
                    vx = this.aBubblePos[i].vx * (this.aBubblePos[i].inc / jiggleTime) * (this.aBubblePos[i].inc / jiggleTime - 2) + this.aBubblePos[i].vx;
                    vy = this.aBubblePos[i].vy * (this.aBubblePos[i].inc / jiggleTime) * (this.aBubblePos[i].inc / jiggleTime - 2) + this.aBubblePos[i].vy;
                } else {
                    vx = 0;
                    vy = 0;
                    this.aBubblePos[i].inc = jiggleTime;
                }
                var tempId = this.aBubblePos[i].id;
                if(tempId < 5) {
                    tempId = this.aBubblePos[i].id * 5;
                    tempId += this.aBubblePos[i].face;
                } else {
                    tempId += 20;
                }
                var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.aBubblePos[i].x - this.oBubblesImgData.oData.spriteWidth / 2 - Math.sin(this.aBubblePos[i].inc) * (vx * jiggleMultipier), this.ceiling + this.aBubblePos[i].y - this.oBubblesImgData.oData.spriteHeight / 2 - Math.sin(this.aBubblePos[i].inc) * (vy * jiggleMultipier), this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
            }
        };
        return BubbleStack;
    })();
    Elements.BubbleStack = BubbleStack;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var BasicFallingBubble = (function () {
        function BasicFallingBubble() {
            this.x = 0;
            this.y = 0;
            this.removeMe = false;
            this.flickerInc = 0;
            this.flickerIncTarg = Math.random() * .2 + .05;
            this.bounceInc = 0;
            this.flipX = 1;
            this.state = 0;
            this.flashInc = 0;
            this.scale = 1;
            this.fallSpeed = 1000;
            this.oBubblesImgData = assetLib.getData("bubbles");
            this.reset();
            this.y = Math.random() * canvas.height;
        }
        BasicFallingBubble.prototype.reset = function () {
            this.id = Math.floor(Math.random() * 5);
            this.x = 50 + Math.random() * (canvas.width - 100);
            this.y = -50 - Math.random() * 300;
            this.vx = Math.random() * 100 - 50;
            this.vy = Math.random() * 150 + 200;
        };
        BasicFallingBubble.prototype.update = function () {
            this.x += this.vx * delta;
            this.y += this.vy * delta;
            if(this.x > canvas.width - (wallDepth + ballRadius)) {
                this.x = canvas.width - (wallDepth + ballRadius);
                this.vx *= -1;
            } else if(this.x < wallDepth + ballRadius) {
                this.x = wallDepth + ballRadius;
                this.vx *= -1;
            }
            if(this.y > canvas.height + 50) {
                this.reset();
            }
        };
        BasicFallingBubble.prototype.render = function () {
            var tempId = this.id;
            if(tempId < 5) {
                tempId = this.id * 5;
            }
            var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
            var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
            ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - (this.oBubblesImgData.oData.spriteWidth / 2) * this.scale, this.y - (this.oBubblesImgData.oData.spriteHeight / 2) * this.scale, this.oBubblesImgData.oData.spriteWidth * this.scale, this.oBubblesImgData.oData.spriteHeight * this.scale);
        };
        return BasicFallingBubble;
    })();
    Elements.BasicFallingBubble = BasicFallingBubble;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var FallingBubble = (function () {
        function FallingBubble(_angle, _order, _id) {
            this.x = 0;
            this.y = 0;
            this.removeMe = false;
            this.flickerInc = 0;
            this.flickerIncTarg = Math.random() * .2 + .05;
            this.bounceInc = 0;
            this.flipX = 1;
            this.state = 0;
            this.flashInc = 0;
            this.scale = 1;
            this.fallSpeed = 1000;
            this.oBubblesImgData = assetLib.getData("bubbles");
            var power = Math.random() * 200 + 400;
            if(_angle == null) {
                _angle = (Math.random() * 360) * radian;
                power = Math.random() * 100 + 100;
            } else {
                _angle = _angle + (Math.random() * 10 - 5) * radian;
            }
            if(_order == null) {
                this.flashIncTarg = 0;
            } else {
                this.flashIncTarg = (_order - 1) / 20;
            }
            this.vx = -power * Math.cos(_angle);
            this.vy = -power * Math.sin(_angle);
            if(_id > 9 && _id < 15) {
                _id += 7;
                this.scale = 3;
                TweenLite.to(this, 2, {
                    scale: 1.5,
                    ease: "Elastic.easeOut"
                });
                this.vy = -100;
                this.fallSpeed = 500;
            }
            this.setId(_id);
            this.vTween = TweenLite.to(this, 3, {
                vx: this.vx * .25,
                ease: "Quad.easeOut"
            });
        }
        FallingBubble.prototype.setId = function (_id) {
            this.flickerId = this.id = _id;
        };
        FallingBubble.prototype.update = function () {
            if(this.state == 0) {
                this.flashInc += delta;
                if(this.flashInc >= this.flashIncTarg) {
                    this.state = 1;
                }
            } else {
                this.x += (this.vx * delta) * this.flipX;
                this.vy += this.fallSpeed * delta;
                this.y += (this.vy * delta);
                if(this.x > canvas.width - (wallDepth + ballRadius)) {
                    this.x = canvas.width - (wallDepth + ballRadius);
                    this.flipX *= -1;
                } else if(this.x < wallDepth + ballRadius) {
                    this.x = wallDepth + ballRadius;
                    this.flipX *= -1;
                }
                if(this.bounceInc < 0 && this.y > 600 - ballRadius) {
                    this.bounceInc++;
                    this.y = 600 - ballRadius;
                    this.vy *= -.5;
                }
                if(this.y > canvas.height + 50) {
                    this.removeMe = true;
                }
            }
        };
        FallingBubble.prototype.render = function () {
            var tempId = this.id;
            if(tempId < 5) {
                tempId = this.id * 5;
            } else {
                tempId += 20;
            }
            var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
            var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
            ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - (this.oBubblesImgData.oData.spriteWidth / 2) * this.scale, this.y - (this.oBubblesImgData.oData.spriteHeight / 2) * this.scale, this.oBubblesImgData.oData.spriteWidth * this.scale, this.oBubblesImgData.oData.spriteHeight * this.scale);
        };
        return FallingBubble;
    })();
    Elements.FallingBubble = FallingBubble;    
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
        function Firework(_id) {
                _super.call(this, assetLib.getData("firework" + _id), 30, 30, "explode");
            this.vy = 0;
            this.setAnimType("once", "explode");
            this.animEndedFunc = function () {
                this.removeMe = true;
            };
            var tempScale = 3;
            if(_id == 1) {
                tempScale = 4;
            }
            TweenLite.to(this, 1, {
                scaleX: tempScale,
                scaleY: tempScale,
                ease: "Quad.easeOut"
            });
        }
        Firework.prototype.update = function () {
            this.vy += 150 * delta;
            this.y += this.vy * delta;
            _super.prototype.updateAnimation.call(this);
        };
        Firework.prototype.render = function () {
            _super.prototype.renderSimple.call(this);
        };
        return Firework;
    })(Utils.AnimSprite);
    Elements.Firework = Firework;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Glint = (function () {
        function Glint(_id, _screen) {
            this.x = 0;
            this.y = 0;
            this.scale = 0;
            this.inc = 0;
            this.canShow = true;
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.id = _id;
            TweenLite.to(this, 1, {
                scale: 4,
                ease: "Quad.easeOut"
            });
            if(_screen == "game") {
                this.resetInGame();
            } else if(_screen == "map") {
                this.resetInMap();
            }
        }
        Glint.prototype.resetInGame = function () {
            if(bubbleStack.aBubblePos.length / 4 > this.id) {
                this.bubbleTargId = Math.floor(Math.random() * bubbleStack.aBubblePos.length);
                this.incRate = Math.random() * 3 + 1;
                this.canShow = true;
            } else {
                this.canShow = false;
            }
        };
        Glint.prototype.resetInMap = function () {
            this.incRate = Math.random() * 3 + 1;
            this.canShow = true;
            this.targX = Math.random() * 400 + 25;
            this.targY = Math.random() * 1200 + 100;
        };
        Glint.prototype.updateInGame = function () {
            if(!bubbleStack.aBubblePos[this.bubbleTargId]) {
                this.resetInGame();
                this.canShow = false;
                return;
            }
            this.x = bubbleStack.aBubblePos[this.bubbleTargId].x + 3;
            this.y = bubbleStack.aBubblePos[this.bubbleTargId].y - 13 + bubbleStack.ceiling;
            this.inc += this.incRate * delta;
            this.scale = Math.sin(this.inc) * 2;
            if(this.inc > 3.14) {
                this.inc = 0;
                this.resetInGame();
            }
        };
        Glint.prototype.updateInMap = function () {
            this.x = this.targX;
            this.y = this.targY - panel.mapPosRealY;
            this.inc += this.incRate * delta;
            this.scale = Math.sin(this.inc) * 1.5;
            if(this.inc > 3.14) {
                this.inc = 0;
                this.resetInMap();
            }
        };
        Glint.prototype.render = function () {
            if(!this.canShow) {
                return;
            }
            var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].x;
            var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].y;
            var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].width;
            var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds.glint].height;
            ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scale, this.y - (bHeight / 2) * this.scale, bWidth * this.scale, bHeight * this.scale);
        };
        return Glint;
    })();
    Elements.Glint = Glint;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Pop = (function (_super) {
        __extends(Pop, _super);
        function Pop(_delay, _id, _score) {
                _super.call(this, assetLib.getData("pop"), 20, 10, "hide");
            this.explodeStage = 0;
            this.incY = 0;
            this.oBubblesImgData = assetLib.getData("bubbles");
            this.oGameElementsImgData = assetLib.getData("gameElements");
            this.bubbleId = _id;
            this.score = _score;
            var _this = this;
            setTimeout(function () {
                _this.startAnim();
            }, (_delay - 1) * 50);
        }
        Pop.prototype.startAnim = function () {
            playSound("pop" + Math.floor(Math.random() * 4));
            this.bubbleId = Math.min(this.bubbleId, 5);
            this.setAnimType("once", "explode" + this.bubbleId);
            this.explodeStage = 1;
            this.animEndedFunc = function () {
                this.startY = this.y;
                this.explodeStage = 2;
                this.scaleX = 0;
                this.scaleY = 0;
                TweenLite.to(this, .5, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: "Back.easeOut"
                });
            };
        };
        Pop.prototype.update = function () {
            if(this.explodeStage == 1) {
                this.offsetY = bubbleStack.ceiling;
                _super.prototype.updateAnimation.call(this);
            } else if(this.explodeStage == 2) {
                this.incY += 7 * delta;
                this.y = this.startY + Math.sin(this.incY + this.x + this.startY) * 5;
                if(this.incY > 8) {
                    TweenLite.to(this, 1, {
                        x: canvas.width / 2,
                        y: -300,
                        scaleX: 0,
                        scaleY: 0,
                        ease: "Back.easeIn",
                        onComplete: function (_this) {
                            _this.removeMe = true;
                        },
                        onCompleteParams: [
                            this
                        ]
                    });
                    this.explodeStage = 3;
                }
            }
        };
        Pop.prototype.render = function () {
            if(this.explodeStage == 0) {
                var tempId = this.bubbleId;
                if(tempId < 5) {
                    tempId = this.bubbleId * 5;
                } else {
                    tempId += 20;
                }
                var imgX = (tempId * this.oBubblesImgData.oData.spriteWidth) % this.oBubblesImgData.img.width;
                var imgY = Math.floor(tempId / (this.oBubblesImgData.img.width / this.oBubblesImgData.oData.spriteWidth)) * this.oBubblesImgData.oData.spriteHeight;
                ctx.drawImage(this.oBubblesImgData.img, imgX, imgY, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight, this.x - this.oBubblesImgData.oData.spriteWidth / 2, this.y - this.oBubblesImgData.oData.spriteHeight / 2 + bubbleStack.ceiling, this.oBubblesImgData.oData.spriteWidth, this.oBubblesImgData.oData.spriteHeight);
            } else if(this.explodeStage == 1) {
                _super.prototype.renderSimple.call(this);
            } else if(this.explodeStage == 2 || this.explodeStage == 3) {
                var bX = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].x;
                var bY = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].y;
                var bWidth = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].width;
                var bHeight = this.oGameElementsImgData.oData.oAtlasData[oImageIds["score" + this.score]].height;
                ctx.drawImage(this.oGameElementsImgData.img, bX, bY, bWidth, bHeight, this.x - (bWidth / 2) * this.scaleX, this.y - (bHeight / 2) * this.scaleY + bubbleStack.ceiling, bWidth * this.scaleX, bHeight * this.scaleY);
            }
        };
        return Pop;
    })(Utils.AnimSprite);
    Elements.Pop = Pop;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var OscarAnim = (function (_super) {
        __extends(OscarAnim, _super);
        function OscarAnim() {
            var _this = this;
                _super.call(this, assetLib.getData("oscarAnim"), 20, 100, "still");
            this.animEndedFunc = function () {
                _this.triggerAnim("still");
            };
            this.x = 280;
            this.y = 600;
        }
        OscarAnim.prototype.triggerAnim = function (_id) {
            switch(_id) {
                case "launch":
                    this.setAnimType("once", "launch");
                    break;
                case "still":
                    this.setAnimType("loop", "still", false);
                    break;
                case "swap":
                    this.setAnimType("once", "swap");
                    break;
            }
        };
        OscarAnim.prototype.update = function () {
            _super.prototype.updateAnimation.call(this);
        };
        OscarAnim.prototype.render = function () {
            _super.prototype.renderSimple.call(this);
        };
        return OscarAnim;
    })(Utils.AnimSprite);
    Elements.OscarAnim = OscarAnim;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var TutAnim = (function (_super) {
        __extends(TutAnim, _super);
        function TutAnim() {
                _super.call(this, assetLib.getData("tut0"), 15, 15, "still0");
            this.curAnimId = 0;
        }
        TutAnim.prototype.nextAnim = function () {
            this.curAnimId = 1;
            this.setAnimType("loop", "still1", false);
        };
        TutAnim.prototype.update = function () {
            _super.prototype.updateAnimation.call(this);
        };
        TutAnim.prototype.render = function () {
            _super.prototype.renderSimple.call(this);
        };
        return TutAnim;
    })(Utils.AnimSprite);
    Elements.TutAnim = TutAnim;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var HedgehogAnim = (function (_super) {
        __extends(HedgehogAnim, _super);
        function HedgehogAnim() {
            var _this = this;
                _super.call(this, assetLib.getData("hedgehogAnim"), 25, 100, "still");
            this.animEndedFunc = function () {
                _this.triggerAnim("still");
            };
            this.x = 70;
            this.y = 580;
        }
        HedgehogAnim.prototype.triggerAnim = function (_id) {
            switch(_id) {
                case "still":
                    this.setAnimType("loop", "still", false);
                    charsReadyToFire = true;
                    break;
                case "swap":
                    this.setAnimType("once", "swap");
                    break;
            }
        };
        HedgehogAnim.prototype.update = function () {
            _super.prototype.updateAnimation.call(this);
        };
        HedgehogAnim.prototype.render = function () {
            _super.prototype.renderSimple.call(this);
        };
        return HedgehogAnim;
    })(Utils.AnimSprite);
    Elements.HedgehogAnim = HedgehogAnim;    
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
            this.aLevelStore.push(1);
            this.aLevelStore.push(0);
            for(var i = 0; i < aMapButs.length - 1; i++) {
                this.aLevelStore.push(0);
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
        SaveDataHandler.prototype.setData = function (_levelNum, _stars, _score) {
            if(_score > this.aLevelStore[_levelNum * 2 + 1]) {
                this.aLevelStore[_levelNum * 2 + 1] = _score;
            }
            if(_stars + 2 > this.aLevelStore[_levelNum * 2]) {
                this.aLevelStore[_levelNum * 2] = _stars + 2;
            }
            if(_levelNum < aMapButs.length - 1 && this.aLevelStore[(_levelNum + 1) * 2] == 0) {
                this.aLevelStore[(_levelNum + 1) * 2] = 1;
            }
        };
        SaveDataHandler.prototype.getStars = function (_levelNum) {
            return this.aLevelStore[_levelNum * 2];
        };
        SaveDataHandler.prototype.getTotalScore = function () {
            var tempScore = 0;
            for(var i = 0; i < saveDataHandler.aLevelStore.length; i++) {
                tempScore += saveDataHandler.aLevelStore[i + 1];
                i++;
            }
            return tempScore;
        };
        SaveDataHandler.prototype.getScore = function (_levelNum) {
            return this.aLevelStore[_levelNum * 2 + 1];
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
var Utils;
(function (Utils) {
    var TextDisplay = (function () {
        function TextDisplay() {
            this.oTextData = {
            };
            this.inc = 0;
            this.kernOffset = 1;
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
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]) + this.kernOffset;
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
                    lineLength += parseInt(_aCharData[i][j]["@xadvance"]) + this.kernOffset;
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
            var tempKern = 0;
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
                        animY = Math.sin(this.inc + j / 2) * ((bHeight / 10) * textScale);
                    }
                    ctx.drawImage(oFontImgData.img, bX, bY, bWidth, bHeight, _oTextDisplayData.x + (shiftX + parseInt(aLinesToRender[i][j]["@xoffset"]) - offsetX) * textScale, _oTextDisplayData.y + (parseInt(aLinesToRender[i][j]["@yoffset"]) + (i * this.oTextData[_oTextDisplayData.text].lineHeight) + (i * lineOffsetY) - offsetY) * textScale + animY, bWidth * textScale, bHeight * textScale);
                    shiftX += parseInt(aLinesToRender[i][j]["@xadvance"]) + this.kernOffset;
                }
            }
        };
        return TextDisplay;
    })();
    Utils.TextDisplay = TextDisplay;    
})(Utils || (Utils = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 700;
var canvasX;
var canvasY;
var canvasScaleX;
var canvasScaleY;
var div = document.getElementById('canvas-wrapper');
var sound;
var music;
var audioType = 0;
var muted = false;
var splash;
var splashTimer = 0;
var assetLib;
var preAssetLib;
var rotatePause = false;
var manualPause = false;
var isMobile = false;
var gameState = "loading";
var curLang = "";
var isBugBrowser = false;
var isIE10 = false;
var hasFocus = true;
var delta;
var radian = Math.PI / 180;
var ios9FirstTouch = false;
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
function visibleResume(_force) {
    if (typeof _force === "undefined") { _force = false; }
    if(!hasFocus || _force) {
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
if(!isIE10 && (typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1 || isSharpStock || isXperiaAStock || isFujitsuStock)) {
    audioType = 1;
    sound = new Howl({
        src: [
            'audio/sound.ogg', 
            'audio/sound.m4a'
        ],
        sprite: {
            click: [
                0, 
                450
            ],
            explode0: [
                500, 
                800
            ],
            explode1: [
                1500, 
                800
            ],
            explode2: [
                2500, 
                800
            ],
            explode3: [
                3500, 
                800
            ],
            gemRelease: [
                4500, 
                1400
            ],
            levelSuccess: [
                6000, 
                1900
            ],
            pop0: [
                8000, 
                300
            ],
            pop1: [
                8500, 
                300
            ],
            pop2: [
                9000, 
                300
            ],
            pop3: [
                9500, 
                300
            ],
            switchBubbles: [
                10000, 
                400
            ],
            startLevel: [
                10500, 
                2000
            ],
            levelFail: [
                13000, 
                1200
            ],
            fire0: [
                14500, 
                600
            ],
            fire1: [
                15500, 
                600
            ],
            fire2: [
                16500, 
                600
            ],
            fire3: [
                17500, 
                600
            ],
            bonusBubble: [
                18500, 
                2000
            ],
            starProgress: [
                21000, 
                1600
            ],
            bounce: [
                23000, 
                500
            ],
            praise: [
                24000, 
                1300
            ],
            voGood0: [
                26000, 
                3500
            ],
            voGood1: [
                30000, 
                2000
            ]
        }
    });
    music = new Howl({
        src: [
            'audio/music.ogg', 
            'audio/music.m4a'
        ],
        volume: 0,
        loop: true
    });
} else {
    audioType = 0;
}
var panel;
var hud;
var background;
var totalScore = 0;
var levelScore = 0;
var levelNum = 0;
var aLevelUps;
var levelBonusScore;
var bonusScore;
var aTutorials = new Array();
var panelFrame;
var oLogoData = {
};
var oLogoBut;
var oImageIds = {
};
var bubbleStartX = canvas.width / 2;
var bubbleStartY = 577;
var userBubble;
var launcher;
var bubbleStack;
var gameTouchState;
var aimX;
var aimY;
var aimRot;
var testVar = "------";
var ballRadius = 20;
var wallDepth = 25;
var bubbleTarget;
var aFallingBubbles;
var aEffects;
var aGlints;
var aimingFlipped = false;
var aPopScores = new Array(10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
var curPopChain;
var aimClickStartY;
var bubbleTargNum;
var bubbleTargId;
var bubblesToFire;
var gameControlState;
var inGameText;
var animTextY;
var startPanelInc;
var topSpacesFilled;
var aLevelSpecificTarget;
var aStarMarkers;
var starBarLength;
var messageTween;
var firstPop;
var gameIsInPlay;
var aAllowedBubbleStates;
var curStarLevel;
var oscarAnim;
var hedgehogAnim;
var swapAnimating;
var hudButsOn;
var testInc = 0;
var charsReadyToFire = true;
var bubbleInFlight = false;
var aMapButs = new Array([
    248, 
    1342
], [
    321, 
    1325
], [
    394, 
    1294
], [
    374, 
    1233
], [
    299, 
    1224
], [
    221, 
    1245
], [
    147, 
    1255
], [
    75, 
    1230
], [
    51, 
    1169
], [
    112, 
    1128
], [
    187, 
    1117
], [
    259, 
    1112
], [
    329, 
    1099
], [
    384, 
    1053
], [
    399, 
    994
], [
    350, 
    946
], [
    279, 
    966
], [
    210, 
    953
], [
    158, 
    906
], [
    146, 
    841
], [
    109, 
    785
], [
    70, 
    732
], [
    69, 
    669
], [
    101, 
    611
], [
    166, 
    626
], [
    211, 
    678
], [
    273, 
    712
], [
    341, 
    691
], [
    384, 
    641
], [
    392, 
    579
], [
    394, 
    516
], [
    395, 
    454
], [
    392, 
    392
], [
    373, 
    329
], [
    304, 
    312
], [
    259, 
    361
], [
    198, 
    394
], [
    129, 
    396
], [
    83, 
    347
], [
    96, 
    283
], [
    158, 
    239
], [
    233, 
    221
], [
    308, 
    223
], [
    382, 
    207
], [
    404, 
    144
], [
    360, 
    94
], [
    292, 
    70
], [
    215, 
    62
], [
    142, 
    63
], [
    73, 
    78
]);
var aLevelData = new Array();
var saveDataHandler = new Utils.SaveDataHandler("summercampbubblesv7");
var swapButtonDrag = false;
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
function initSplash() {
    if(curLang == "ar") {
        canvas.style.direction = "rtl";
    }
    gameState = "splash";
    resizeCanvas();
    aLevelData = assetLib.textData.levelData.text;
    totalScore = saveDataHandler.getTotalScore();
    if(audioType == 1 && !muted) {
        playMusic();
    }
    initIntro();
}
function initIntro() {
    gameState = "intro";
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .4, 100);
    }
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            408, 
            658
        ],
        id: oImageIds.mapBut1
    };
    userInput.addHitArea("nextFromIntro", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oNextBut);
    setMuteHitArea();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween("intro");
    previousTime = new Date().getTime();
    updateIntroEvent();
}
function initOutro() {
    gameState = "outro";
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            408, 
            658
        ],
        id: oImageIds.mapBut1
    };
    userInput.addHitArea("nextFromOutro", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oNextBut);
    setMuteHitArea();
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween("outro");
    previousTime = new Date().getTime();
    aEffects = new Array();
    updateOutroEvent();
}
function initStartScreen() {
    gameState = "start";
    userInput.removeHitArea("moreGames");
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .4, 500);
    }
    totalScore = saveDataHandler.getTotalScore();
    aFallingBubbles = new Array();
    for(var i = 0; i < 10; i++) {
        var bub = new Elements.BasicFallingBubble();
        aFallingBubbles.push(bub);
    }
    setMuteHitArea();
    var oBioBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width / 2 - 75, 
            600
        ],
        id: oImageIds.bioBut
    };
    var oPlayBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width / 2 + 75, 
            600
        ],
        id: oImageIds.bigPlayBut
    };
    var oInfoBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            36, 
            36
        ],
        id: oImageIds.infoBut,
        noMove: true
    };
    userInput.addHitArea("bioFromStartScreen", butEventHandler, null, "image", oBioBut);
    userInput.addHitArea("playFromStartScreen", butEventHandler, {
        multiTouch: true
    }, "image", oPlayBut);
    userInput.addHitArea("credits", butEventHandler, null, "image", oInfoBut);
    var aButs = new Array(oPlayBut, oInfoBut, oBioBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween("start");
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function setMuteHitArea() {
    userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [
            382, 
            0, 
            450, 
            68
        ]
    }, true);
}
function initMapScreen() {
    gameState = "map";
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .4, 500);
    }
    totalScore = saveDataHandler.getTotalScore();
    setMuteHitArea();
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            36, 
            canvas.height - 36
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    userInput.addHitArea("backFromMap", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    panel = new Elements.Panel(gameState, aButs);
    var highestLevelButY = 1400;
    userInput.addHitArea("mapTouch", butEventHandler, {
        isDraggable: true,
        multiTouch: true
    }, "rect", {
        aRect: [
            0, 
            0, 
            canvas.width, 
            canvas.height
        ]
    }, true);
    panel.mapDragY = 10000;
    panel.mapButIdToHighlight = -1;
    for(var i = 0; i < aMapButs.length; i++) {
        if(aMapButs[i][1] < highestLevelButY && saveDataHandler.getStars(i) > 0) {
            highestLevelButY = aMapButs[i][1];
        }
        if(saveDataHandler.getStars(i) == 1 && saveDataHandler.getScore(i) == 0) {
            panel.mapButIdToHighlight = i;
        }
    }
    panel.mapPosY = panel.mapPosRealY = Math.max(Math.min(highestLevelButY - canvas.height / 2, 1400 - canvas.height), 0);
    panel.startTween("map");
    previousTime = new Date().getTime();
    updateMapScreenEvent();
}
function initProgressMapScreen() {
    gameState = "progressMap";
    setMuteHitArea();
    var aButs = new Array();
    panel = new Elements.Panel(gameState, aButs);
    var highestLevelButY = 1400;
    highestLevelButY = aMapButs[levelNum][1];
    panel.mapButIdToHighlight = levelNum;
    panel.prevMapButIdToHighlight = Math.max(levelNum - 1, 0);
    panel.mapPosY = panel.mapPosRealY = Math.max(Math.min(highestLevelButY - canvas.height / 2, 1400 - canvas.height), 0);
    panel.startTween("progressMap");
    previousTime = new Date().getTime();
    updateProgressMapScreenEvent();
}
function initCreditsScreen() {
    gameState = "credits";
    setMuteHitArea();
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            36, 
            canvas.height - 36
        ],
        id: oImageIds.backBut
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);
    var aButs = new Array(oBackBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween("credits");
    previousTime = new Date().getTime();
    updateCreditsScreenEvent();
}
function initBioPage() {
    gameState = "bioPage";
    setMuteHitArea();
    var oBackBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            36, 
            canvas.height - 36
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    var oNextPageBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width - 70, 
            canvas.height - 70
        ],
        id: oImageIds.nextPageBut
    };
    userInput.addHitArea("backFromBioPage", butEventHandler, null, "image", oBackBut);
    userInput.addHitArea("nextPageFromBioPage", butEventHandler, null, "image", oNextPageBut);
    var aButs = new Array(oBackBut, oNextPageBut);
    panel = new Elements.Panel(gameState, aButs);
    panel.startTween("bioPage");
    previousTime = new Date().getTime();
    updateBioPageEvent();
}
function initGame() {
    gameState = "game";
    userInput.removeHitArea("mute");
    background = new Elements.Background();
    background.renderState = "none";
    levelReset();
    previousTime = new Date().getTime();
    updateGameEvent();
}
function levelReset() {
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .8, 1000);
    }
    gameTouchState = 3;
    curPopChain = -1;
    curStarLevel = 0;
    swapAnimating = false;
    hudButsOn = false;
    gameIsInPlay = true;
    levelScore = 0;
    totalScore = saveDataHandler.getTotalScore() - saveDataHandler.getScore(levelNum);
    gameControlState = true;
    aimX = bubbleStartX;
    aimY = 0;
    aimRot = 90 * radian;
    animTextY = -100;
    startPanelInc = 0;
    firstPop = true;
    aAllowedBubbleStates = new Array(0, 0, 0, 0, 0);
    for(var i = 0; i < aLevelData[levelNum]["@grid"].length; i++) {
        if(aLevelData[levelNum]["@grid"][i] != -1) {
            var tempId = aLevelData[levelNum]["@grid"][i];
            if(tempId < 5) {
                aAllowedBubbleStates[tempId] = true;
            }
        }
    }
    hud = new Elements.Hud();
    panel = new Elements.Panel("startPanel", new Array());
    panel.startTween("startPanel");
    setTimeout(function () {
        userInput.addHitArea("startPanelTouch", butEventHandler, {
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
        userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [
                372, 
                0, 
                445, 
                52
            ]
        }, true);
    }, 1000);
    oscarAnim = new Elements.OscarAnim();
    hedgehogAnim = new Elements.HedgehogAnim();
    userBubble = new Elements.UserBubble();
    aFallingBubbles = new Array();
    launcher = new Elements.Launcher();
    launcher.x = bubbleStartX;
    launcher.y = bubbleStartY;
    bubbleStack = new Elements.BubbleStack(aLevelData[levelNum]["@grid"]);
    aStarMarkers = new Array();
    starBarLength = 0;
    aStarMarkers.push(aLevelData[levelNum]["@1Star"]);
    aStarMarkers.push(aLevelData[levelNum]["@2Star"]);
    aStarMarkers.push(aLevelData[levelNum]["@3Star"]);
    background.setBackground(aLevelData[levelNum]["@levelTheme"]);
    if(aLevelData[levelNum]["@levelType"] == 0) {
        bubbleTargNum = aLevelData[levelNum]["@bTargNum"];
        bubbleTargId = aLevelData[levelNum]["@bTargId"];
    } else {
        bubbleTargNum = 0;
    }
    if(aLevelData[levelNum]["@bLimit"] != 0) {
        bubblesToFire = aLevelData[levelNum]["@bLimit"] - 1;
    } else {
        bubblesToFire = 0;
    }
    playSound("startLevel");
    aEffects = new Array();
}
function butEventHandler(_id, _oData) {
    switch(_id) {
        case "langSelect":
            break;
        case "nextFromIntro":
            playSound("click");
            userInput.removeHitArea("nextFromIntro");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "nextFromOutro":
            playSound("click");
            userInput.removeHitArea("nextFromOutro");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "playFromStartScreen":
            if(!_oData.isDown) {
                playSound("click");
                userInput.removeHitArea("playFromStartScreen");
                userInput.removeHitArea("bioFromStartScreen");
                userInput.removeHitArea("mute");
                userInput.removeHitArea("credits");
                if(isMobile) {
                }
                initMapScreen();
            }
            break;
        case "bioFromStartScreen":
            playSound("click");
            userInput.removeHitArea("playFromStartScreen");
            userInput.removeHitArea("bioFromStartScreen");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("credits");
            initBioPage();
            break;
        case "backFromBioPage":
            playSound("click");
            userInput.removeHitArea("backFromBioPage");
            userInput.removeHitArea("nextPageFromBioPage");
            userInput.removeHitArea("mute");
            initStartScreen();
            break;
        case "nextPageFromBioPage":
            if(panel.canTurnPage) {
                playSound("switchBubbles");
                panel.nextBioPage();
            }
            break;
        case "backFromMap":
            playSound("click");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("backFromMap");
            userInput.removeHitArea("mapTouch");
            initStartScreen();
            break;
        case "mapTouch":
            if(_oData.isBeingDragged && !_oData.hasLeft) {
                panel.mapPosY = Math.max(Math.min(panel.mapStartY - _oData.y, 1400 - canvas.height), 0);
            } else if(_oData.isDown) {
                if(panel.mapTween) {
                    panel.mapTween.kill();
                }
                toggleMapButs(false);
                panel.mapStartY = panel.mapPosRealY + _oData.y;
                panel.mapDragY = _oData.y;
            } else {
                toggleMapButs(true);
                if(Math.abs(panel.mapDragY - _oData.y) < 10) {
                    for(var i = 0; i < aMapButs.length; i++) {
                        if(saveDataHandler.getStars(i) > 0 && _oData.x > aMapButs[i][0] - 30 && _oData.x < aMapButs[i][0] + 30 && _oData.y + panel.mapPosY > aMapButs[i][1] - 30 && _oData.y + panel.mapPosY < aMapButs[i][1] + 30) {
                            levelNum = i;
                            userInput.removeHitArea("mute");
                            userInput.removeHitArea("backFromMap");
                            userInput.removeHitArea("mapTouch");
                            initGame();
                            break;
                        }
                    }
                }
            }
            break;
        case "credits":
            playSound("click");
            userInput.removeHitArea("playFromStartScreen");
            userInput.removeHitArea("bioFromStartScreen");
            userInput.removeHitArea("mute");
            userInput.removeHitArea("credits");
            if(isMobile) {
            }
            initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetGame");
            initStartScreen();
            break;
        case "resetGame":
            playSound("click");
            userInput.removeHitArea("backFromCredits");
            userInput.removeHitArea("resetGame");
            saveDataHandler.resetData();
            initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            break;
        case "switchBubble":
            if(bubbleInFlight) {
                return;
            }
            if(_oData.isDown) {
                if(!swapAnimating) {
                    var tempId = hud.nextBubbleId;
                    hud.nextBubbleId = userBubble.id;
                    userBubble.id = tempId;
                    swapAnimating = true;
                    userBubble.x = hud.nextBubbleX;
                    userBubble.y = hud.nextBubbleY;
                    hud.tempNextBubbleX = userBubble.startX;
                    hud.tempNextBubbleY = userBubble.startY;
                    hud.swapButInc = 1;
                    if(hud.swapTween) {
                        hud.swapTween.kill();
                    }
                    hud.swapTween = TweenLite.to(hud, 1, {
                        swapButInc: 0,
                        ease: "Elastic.easeOut"
                    });
                    TweenLite.to(userBubble, .5, {
                        x: userBubble.startX,
                        y: userBubble.startY,
                        ease: "Quad.easeInOut"
                    });
                    TweenLite.to(hud, .4, {
                        delay: .1,
                        tempNextBubbleX: hud.nextBubbleX,
                        tempNextBubbleY: hud.nextBubbleY,
                        ease: "Quad.easeOut",
                        onComplete: function () {
                            swapAnimating = false;
                        }
                    });
                    oscarAnim.triggerAnim("swap");
                    hedgehogAnim.triggerAnim("swap");
                    charsReadyToFire = false;
                    playSound("switchBubbles");
                    toggleGameTouch(false);
                    if(gameTouchState == 0) {
                        gameTouchState = 2;
                    }
                }
            } else {
                toggleGameTouch(true);
                gameTouchState = 0;
            }
            swapButtonDrag = false;
            if(_oData.isBeingDragged) {
                swapButtonDrag = true;
            }
            break;
        case "firstGameTouch":
            if(!_oData.isDown) {
                userInput.removeHitArea("firstGameTouch");
                userInput.addHitArea("gameTouch", butEventHandler, {
                    isDraggable: true,
                    multiTouch: true
                }, "rect", {
                    aRect: [
                        0, 
                        0, 
                        canvas.width, 
                        canvas.height
                    ]
                }, true);
            }
            break;
        case "startPanelTouch":
            if(_oData.isDown) {
                if(levelNum == 0 && panel.tutAnim.curAnimId == 0) {
                    panel.tutAnim.nextAnim();
                } else {
                    startPanelInc = 100;
                    aimX = _oData.x;
                    aimY = _oData.y;
                }
            }
            break;
        case "gameTouch":
            if(swapButtonDrag || gameTouchState >= 2 || (_oData.y > bubbleStartY - ballRadius && _oData.y < bubbleStartY + ballRadius && _oData.x > bubbleStartX - ballRadius && _oData.x < bubbleStartX + ballRadius)) {
                launcher.aimLineAlpha = 0;
                toggleHudButs(true);
                return;
            }
            if(_oData.isBeingDragged && !_oData.hasLeft) {
                if(gameTouchState == 0) {
                    aimX = _oData.x;
                    aimY = _oData.y;
                    launcher.aimLineAlpha = 1;
                }
            } else if(_oData.isDown) {
                aimClickStartY = _oData.y;
                if(gameTouchState == 0) {
                    toggleHudButs(false);
                    aimX = _oData.x;
                    aimY = _oData.y;
                }
                if(_oData.hasLeft) {
                    launcher.aimLineAlpha = 0;
                } else {
                    launcher.aimLineAlpha = 1;
                }
            } else {
                toggleHudButs(true);
                if(gameTouchState == 0) {
                    if(charsReadyToFire) {
                        playSound("fire" + Math.floor(Math.random() * 4));
                        gameTouchState = 2;
                        charsReadyToFire = false;
                        userBubble.shoot();
                        bubbleInFlight = true;
                        swapAnimating = true;
                        oscarAnim.triggerAnim("launch");
                    }
                    launcher.aimLineAlpha = 0;
                    return;
                }
            }
            break;
        case "mute":
            if(!manualPause) {
                playSound("click");
                toggleMute();
            }
            break;
        case "muteFromPause":
            playSound("click");
            toggleMute();
            var tempImgData = assetLib.getData("uiButs");
            var tempId = 0;
            if(muted) {
                tempId = 1;
            }
            var oMuteBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    canvas.width / 2, 
                    310
                ],
                id: oImageIds.muteBut1
            };
            var bX = tempImgData.oData.oAtlasData[oImageIds["muteBut" + tempId]].x;
            var bY = tempImgData.oData.oAtlasData[oImageIds["muteBut" + tempId]].y;
            var bWidth = tempImgData.oData.oAtlasData[oImageIds["muteBut" + tempId]].width;
            var bHeight = tempImgData.oData.oAtlasData[oImageIds["muteBut" + tempId]].height;
            ctx.drawImage(tempImgData.img, bX + 26, bY + 12, bWidth - 52, bHeight - 24, canvas.width / 2 - 70 - ((bWidth - 52) / 2), 350 - ((bHeight - 24) / 2), bWidth - 52, bHeight - 24);
            break;
        case "pause":
            playSound("click");
            toggleManualPause();
            break;
        case "resumeFromPause":
            if(!_oData.isDown) {
                playSound("click");
                toggleManualPause();
            }
            break;
        case "menuFromPause":
            if(!_oData.isDown) {
                playSound("click");
                toggleManualPause();
                userInput.removeHitArea("pause");
                userInput.removeHitArea("firstGameTouch");
                userInput.removeHitArea("startPanelTouch");
                userInput.removeHitArea("gameTouch");
                userInput.removeHitArea("switchBubble");
                hudButsOn = false;
                userInput.removeHitArea("retryFromPause");
                userInput.removeHitArea("resumeFromPause");
                userInput.removeHitArea("muteFromPause");
                userInput.removeHitArea("menuFromPause");
                initMapScreen();
            }
            break;
        case "retryFromPause":
            if(!_oData.isDown) {
                playSound("click");
                toggleManualPause();
                userInput.removeHitArea("pause");
                userInput.removeHitArea("firstGameTouch");
                userInput.removeHitArea("startPanelTouch");
                userInput.removeHitArea("gameTouch");
                userInput.removeHitArea("switchBubble");
                hudButsOn = false;
                userInput.removeHitArea("retryFromPause");
                userInput.removeHitArea("resumeFromPause");
                userInput.removeHitArea("muteFromPause");
                userInput.removeHitArea("menuFromPause");
                initGame();
            }
            break;
        case "retryLevel":
            playSound("click");
            userInput.removeHitArea("retryLevel");
            userInput.removeHitArea("nextLevel");
            userInput.removeHitArea("backFromLevelEnd");
            levelReset();
            break;
        case "retryFromFail":
            playSound("click");
            userInput.removeHitArea("retryFromFail");
            userInput.removeHitArea("menuFromFail");
            levelReset();
            break;
        case "menuFromFail":
            playSound("click");
            userInput.removeHitArea("retryFromFail");
            userInput.removeHitArea("menuFromFail");
            initMapScreen();
            break;
        case "nextLevel":
            playSound("switchBubbles");
            userInput.removeHitArea("retryLevel");
            userInput.removeHitArea("nextLevel");
            userInput.removeHitArea("backFromLevelEnd");
            levelNum++;
            if(levelNum >= aLevelData.length) {
                levelNum = 0;
                initOutro();
            } else {
                initProgressMapScreen();
            }
            break;
        case "backFromLevelEnd":
            playSound("click");
            userInput.removeHitArea("retryLevel");
            userInput.removeHitArea("nextLevel");
            userInput.removeHitArea("backFromLevelEnd");
            levelNum++;
            if(levelNum >= aLevelData.length) {
                levelNum = 0;
            }
            initMapScreen();
            break;
    }
}
function addText(_size, _width, _align, _x, _y, _str, _col) {
    if (typeof _col === "undefined") { _col = "#202020"; }
    ctx.fillStyle = _col;
    ctx.textAlign = _align;
    if(_width < getTextWidth(_size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText.font[curLang];
    ctx.fillText(getText(_str), _x, _y);
}
function getText(_str) {
    var tempText = assetLib.textData.langText[_str][curLang];
    if(curLang == "de") {
        tempText = tempText.toUpperCase();
    }
    return tempText;
}
function getTextWidth(_size, _str) {
    ctx.font = _size + "px " + assetLib.textData.langText.font[curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function getCorrectedTextWidth(_size, _width, _str) {
    if(_width < getTextWidth(_size, _str)) {
        var breakCount = 0;
        _size--;
        while(_width < getTextWidth(_size, _str)) {
            _size--;
            if(breakCount > 100) {
                break;
            }
        }
    }
    ctx.font = _size + "px " + assetLib.textData.langText.font[curLang];
    var metrics = ctx.measureText(getText(_str));
    return metrics.width;
}
function addFallingBubble(_id, _x, _y, _angle, _order) {
    if (typeof _angle === "undefined") { _angle = null; }
    if (typeof _order === "undefined") { _order = null; }
    if(_id > 9 && _id < 15) {
        playSound("gemRelease");
    }
    var fallingBubble = new Elements.FallingBubble(_angle, _order, _id);
    fallingBubble.x = _x;
    fallingBubble.y = _y;
    aFallingBubbles.push(fallingBubble);
    if(aLevelData[levelNum]["@levelType"] == 0) {
        if(bubbleTargId == 0 || _id == bubbleTargId - 1) {
            if(gameIsInPlay && --bubbleTargNum <= 0) {
                bubbleTargNum = 0;
                gameIsInPlay = false;
                initLevelCompleteSequence();
            }
        }
    }
}
function addFirework(_id, _x, _y) {
    var firework = new Elements.Firework(_id);
    firework.x = _x;
    firework.y = _y;
    firework.scaleX = firework.scaleY = 1;
    aEffects.push(firework);
}
function addPop(_x, _y, _delay, _id) {
    var tempScore;
    if(_id == 9) {
        tempScore = 500;
    } else {
        tempScore = getPopScore();
    }
    var pop = new Elements.Pop(_delay, _id, tempScore);
    pop.x = _x;
    pop.y = _y;
    aEffects.push(pop);
    updateScore(tempScore);
    if(aLevelData[levelNum]["@levelType"] == 0) {
        if(bubbleTargId == 0 || _id == bubbleTargId - 1) {
            if(firstPop) {
                firstPop = false;
                return;
            }
            if(gameIsInPlay && --bubbleTargNum <= 0) {
                bubbleTargNum = 0;
                gameIsInPlay = false;
                initLevelCompleteSequence();
            }
        }
    }
}
function initLevelCompleteSequence() {
    setTimeout(function () {
        initBubbleRain();
    }, 100);
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .1, 100);
    }
    userInput.removeHitArea("pause");
    userInput.removeHitArea("gameTouch");
    userInput.removeHitArea("switchBubble");
    hudButsOn = false;
    gameControlState = false;
    displayInGameText("levelComplete", .3, initLevelComplete);
    playSound("levelSuccess");
    playSound("voGood" + levelNum % 2);
    aGlints = new Array();
}
function initLevelComplete() {
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .8, 500);
    }
    var oRetryBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width / 2 - 50, 
            445
        ],
        id: oImageIds.retryBut,
        scale: .75,
        noMove: true
    };
    var oNextBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width / 2 + 50, 
            445
        ],
        id: oImageIds.playBut
    };
    userInput.addHitArea("retryLevel", butEventHandler, null, "image", oRetryBut);
    userInput.addHitArea("nextLevel", butEventHandler, null, "image", oNextBut);
    var aButs = new Array(oRetryBut, oNextBut);
    if(levelNum < 49) {
        var oBackBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                36, 
                canvas.height - 36
            ],
            id: oImageIds.backBut,
            noMove: true
        };
        userInput.addHitArea("backFromLevelEnd", butEventHandler, null, "image", oBackBut);
        aButs.push(oBackBut);
    }
    var tempStars = 0;
    if(starBarLength >= aStarMarkers[2] / aStarMarkers[2]) {
        tempStars = 3;
    } else if(starBarLength >= aStarMarkers[1] / aStarMarkers[2]) {
        tempStars = 2;
    } else if(starBarLength >= aStarMarkers[0] / aStarMarkers[2]) {
        tempStars = 1;
    }
    saveDataHandler.setData(levelNum, tempStars, levelScore);
    saveDataHandler.saveData();
    panel = new Elements.Panel("endPanel", aButs);
    panel.startTween("endPanel");
}
function initLevelFailSequence() {
    userInput.removeHitArea("pause");
    userInput.removeHitArea("gameTouch");
    userInput.removeHitArea("switchBubble");
    hudButsOn = false;
    gameControlState = false;
    displayInGameText("outOfBubbles", .3, initLevelFail);
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .1, 100);
    }
    playSound("levelFail");
    aGlints = new Array();
}
function initLevelFail() {
    if(!muted && audioType == 1) {
        music.fade(music.volume(), .8, 500);
    }
    var oRetryBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            canvas.width / 2, 
            450
        ],
        id: oImageIds.retryBut
    };
    var oMenuBut = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [
            36, 
            canvas.height - 36
        ],
        id: oImageIds.backBut,
        noMove: true
    };
    userInput.addHitArea("retryFromFail", butEventHandler, null, "image", oRetryBut);
    userInput.addHitArea("menuFromFail", butEventHandler, null, "image", oMenuBut);
    var aButs = new Array(oRetryBut, oMenuBut);
    panel = new Elements.Panel("endFailPanel", aButs);
    panel.startTween("endFailPanel");
}
function initBubbleRain() {
    for(var i = 0; i < bubbleStack.aBubblePos.length; i++) {
        addFallingBubble(bubbleStack.aBubblePos[i].id, bubbleStack.aBubblePos[i].x, bubbleStack.aBubblePos[i].y + bubbleStack.ceiling, null, Math.random() * 10);
        bubbleStack.aBubblePos.splice(i, 1);
        i -= 1;
    }
}
function displayInGameText(_text, _delay, _callback) {
    if (typeof _delay === "undefined") { _delay = 0; }
    if (typeof _callback === "undefined") { _callback = null; }
    var _this = this;
    inGameText = _text;
    animTextY = -100;
    if(messageTween) {
        messageTween.kill();
    }
    messageTween = TweenLite.to(this, .4, {
        animTextY: 290,
        ease: "Back.easeOut",
        delay: _delay,
        onComplete: function () {
            TweenLite.to(_this, .4, {
                animTextY: -100,
                delay: .7,
                ease: "Back.easeIn",
                onComplete: function () {
                    if(_callback) {
                        _callback();
                    }
                }
            });
        }
    });
}
function getPopScore() {
    return aPopScores[Math.min(curPopChain, aPopScores.length - 1)];
}
function toggleHudButs(_on) {
    if(_on && !hudButsOn) {
        userInput.addHitArea("pause", butEventHandler, null, "rect", {
            aRect: [
                372, 
                0, 
                445, 
                52
            ]
        }, true);
        userInput.addHitArea("switchBubble", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                130, 
                603, 
                206, 
                680
            ]
        }, false);
        userInput.addHitArea("switchBubble", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                16, 
                530, 
                130, 
                680
            ]
        }, false);
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
        hudButsOn = true;
    } else {
        userInput.removeHitArea("pause");
        userInput.removeHitArea("switchBubble");
        hudButsOn = false;
    }
}
function toggleMapButs(_on) {
    if(_on) {
        setMuteHitArea();
        var oBackBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                36, 
                canvas.height - 36
            ],
            id: oImageIds.backBut,
            noMove: true
        };
        userInput.addHitArea("backFromMap", butEventHandler, null, "image", oBackBut);
        userInput.addHitArea("mapTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    } else {
        userInput.removeHitArea("mute");
        userInput.removeHitArea("backFromMap");
    }
}
function toggleGameTouch(_on) {
    if(_on) {
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: true,
            multiTouch: true
        }, "rect", {
            aRect: [
                0, 
                0, 
                canvas.width, 
                canvas.height
            ]
        }, true);
    } else {
        userInput.removeHitArea("firstGameTouch");
        userInput.removeHitArea("gameTouch");
    }
}
function updateScore(_inc) {
    levelScore += _inc;
    totalScore += _inc;
    starBarLength = Math.min(levelScore / aStarMarkers[2], 1);
    if(curStarLevel < 3 && starBarLength >= aStarMarkers[curStarLevel] / aStarMarkers[2]) {
        playSound("starProgress");
        curStarLevel++;
    }
}
function setAimRot() {
    var vx = (bubbleStartX - aimX);
    var vy = (bubbleStartY - aimY);
    var tempAimRot = Math.atan2(vy, vx);
    if(aimClickStartY > bubbleStartY) {
        aimingFlipped = true;
        aimRot = Math.max(Math.min(160 * radian, tempAimRot + 180 * radian), 20 * radian);
        if(aimX > canvas.width / 2 && aimRot == 160 * radian) {
            aimRot = 20 * radian;
        }
    } else {
        aimRot = Math.max(Math.min(160 * radian, tempAimRot), 20 * radian);
        aimingFlipped = false;
        if(aimX > canvas.width / 2 && aimRot == 20 * radian) {
            aimRot = 160 * radian;
        }
    }
}
function updateGameEvent() {
    if(manualPause || rotatePause || gameState != "game") {
        return;
    }
    delta = getDelta();
    setAimRot();
    background.update();
    background.render();
    bubbleStack.update();
    bubbleStack.render();
    hud.renderUnder();
    oscarAnim.update();
    oscarAnim.render();
    hedgehogAnim.update();
    hedgehogAnim.render();
    launcher.update();
    launcher.render();
    userBubble.update();
    userBubble.render();
    hud.renderOver();
    for(var i = 0; i < aFallingBubbles.length; i++) {
        aFallingBubbles[i].update();
        aFallingBubbles[i].render();
        if(aFallingBubbles[i].removeMe) {
            aFallingBubbles.splice(i, 1);
            updateScore(10);
            i -= 1;
        }
    }
    if(panel.posY < 550) {
        panel.update(delta);
        panel.render(ctx);
        if(startPanelInc >= 0 && levelNum > 0) {
            startPanelInc += delta;
        }
        if(startPanelInc > 3) {
            startPanelInc = -1;
            userInput.removeHitArea("startPanelTouch");
            panel.panelType = null;
            var func = function () {
                toggleHudButs(true);
            };
            panel.tweenOffScreen(func);
        }
        if(panel.panelType == "endPanel" && Math.random() < .02) {
            addFirework(Math.floor(Math.random() * 2), Math.random() * (canvas.width - 200) + 100, Math.random() * (canvas.height - 200) + 100);
        }
    }
    if(animTextY > -50) {
        var bX = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].x;
        var bY = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].y;
        var bWidth = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].width;
        var bHeight = panel.oGameElementsImgData.oData.oAtlasData[oImageIds.messagePanel].height;
        ctx.drawImage(panel.oGameElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, animTextY - bHeight / 2, bWidth, bHeight);
        addText(35, 440, "center", canvas.width / 2, animTextY + 8, inGameText, "#000000");
    }
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    setTimeout(function () {
        requestAnimFrame(updateGameEvent);
    }, 10);
}
function updateCreditsScreenEvent() {
    if(rotatePause || gameState != "credits") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    ctx.fillStyle = "#888888";
    ctx.textAlign = "center";
    ctx.font = "15px Arial";
    ctx.fillText("v1.00", canvas.width / 2, canvas.height - 10);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateCreditsScreenEvent);
    }, 10);
}
function updateIntroEvent() {
    if(rotatePause || gameState != "intro") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateIntroEvent);
    }, 10);
}
function updateOutroEvent() {
    if(rotatePause || gameState != "outro") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    if(Math.random() < .02) {
        addFirework(Math.floor(Math.random() * 2), Math.random() * (canvas.width - 200) + 100, Math.random() * (canvas.height - 200) + 100);
    }
    for(var i = 0; i < aEffects.length; i++) {
        aEffects[i].update();
        aEffects[i].render();
        if(aEffects[i].removeMe) {
            aEffects.splice(i, 1);
            i -= 1;
        }
    }
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateOutroEvent);
    }, 10);
}
function updateBioPageEvent() {
    if(rotatePause || gameState != "bioPage") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateBioPageEvent);
    }, 10);
}
function updateLevelComplete() {
    if(rotatePause || gameState != "levelComplete") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateLevelComplete);
    }, 10);
}
function updateGameEndFail() {
    if(rotatePause || gameState != "gameEndFail") {
        return;
    }
    delta = getDelta();
    background.render();
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateGameEndFail);
    }, 10);
}
function updateSplashScreenEvent() {
    if(rotatePause || gameState != "splash") {
        return;
    }
    delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        if(audioType == 1 && !muted) {
            playMusic();
        }
        initStartScreen();
        return;
    }
    splash.render(ctx, delta);
    setTimeout(function () {
        requestAnimFrame(updateSplashScreenEvent);
    }, 10);
}
function updateStartScreenEvent() {
    if(rotatePause || gameState != "start") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    for(var i = 0; i < aFallingBubbles.length; i++) {
        aFallingBubbles[i].update();
        aFallingBubbles[i].render();
    }
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateStartScreenEvent);
    }, 10);
}
function updateMapScreenEvent() {
    if(rotatePause || gameState != "map") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateMapScreenEvent);
    }, 10);
}
function updateProgressMapScreenEvent() {
    if(rotatePause || gameState != "progressMap") {
        return;
    }
    delta = getDelta();
    panel.update(delta);
    panel.render(ctx);
    renderMuteBut();
    setTimeout(function () {
        requestAnimFrame(updateProgressMapScreenEvent);
    }, 10);
}
function updateLoaderEvent() {
    if(gameState != "loading") {
        return;
    }
    delta = getDelta();
    assetLib.render();
    setTimeout(function () {
        requestAnimFrame(updateLoaderEvent);
    }, 10);
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
            file: "images/loader.png"
        }, 
        {
            id: "loadSpinner",
            file: "images/loadSpinner.png"
        }, 
        {
            id: "loaderBg",
            file: "images/titleBg.jpg"
        }
    ], ctx, canvas.width, canvas.height, false);
    preAssetLib.onReady(initLoadAssets);
}
function initLoadAssets() {
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "background0",
            file: "images/background0.jpg"
        }, 
        {
            id: "background1",
            file: "images/background1.jpg"
        }, 
        {
            id: "background2",
            file: "images/background2.jpg"
        }, 
        {
            id: "background3",
            file: "images/background3.jpg"
        }, 
        {
            id: "background4",
            file: "images/background4.jpg"
        }, 
        {
            id: "hud",
            file: "images/hud_450x700.png"
        }, 
        {
            id: "muteBut",
            file: "images/mute_60x58.png"
        }, 
        {
            id: "uiButs",
            file: "images/uiButs.png",
            oAtlasData: {
                id0: {
                    x: 122,
                    y: 0,
                    width: 97,
                    height: 95
                },
                id1: {
                    x: 221,
                    y: 0,
                    width: 97,
                    height: 95
                },
                id10: {
                    x: 122,
                    y: 291,
                    width: 74,
                    height: 74
                },
                id11: {
                    x: 260,
                    y: 255,
                    width: 60,
                    height: 58
                },
                id12: {
                    x: 0,
                    y: 121,
                    width: 120,
                    height: 119
                },
                id13: {
                    x: 198,
                    y: 291,
                    width: 60,
                    height: 59
                },
                id14: {
                    x: 221,
                    y: 194,
                    width: 60,
                    height: 59
                },
                id15: {
                    x: 0,
                    y: 242,
                    width: 120,
                    height: 119
                },
                id16: {
                    x: 320,
                    y: 0,
                    width: 59,
                    height: 63
                },
                id17: {
                    x: 260,
                    y: 315,
                    width: 60,
                    height: 59
                },
                id2: {
                    x: 0,
                    y: 0,
                    width: 120,
                    height: 119
                },
                id3: {
                    x: 122,
                    y: 97,
                    width: 97,
                    height: 95
                },
                id4: {
                    x: 221,
                    y: 97,
                    width: 97,
                    height: 95
                },
                id5: {
                    x: 122,
                    y: 194,
                    width: 97,
                    height: 95
                },
                id6: {
                    x: 320,
                    y: 65,
                    width: 59,
                    height: 63
                },
                id7: {
                    x: 322,
                    y: 195,
                    width: 59,
                    height: 63
                },
                id8: {
                    x: 320,
                    y: 130,
                    width: 59,
                    height: 63
                },
                id9: {
                    x: 322,
                    y: 260,
                    width: 59,
                    height: 59
                }
            }
        }, 
        {
            id: "gameElements",
            file: "images/gameElements.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 14,
                    width: 1010,
                    height: 12
                },
                id1: {
                    x: 793,
                    y: 84,
                    width: 82,
                    height: 82
                },
                id10: {
                    x: 568,
                    y: 178,
                    width: 41,
                    height: 32
                },
                id11: {
                    x: 747,
                    y: 588,
                    width: 39,
                    height: 32
                },
                id12: {
                    x: 653,
                    y: 175,
                    width: 39,
                    height: 30
                },
                id13: {
                    x: 868,
                    y: 586,
                    width: 38,
                    height: 29
                },
                id14: {
                    x: 525,
                    y: 178,
                    width: 41,
                    height: 30
                },
                id15: {
                    x: 611,
                    y: 178,
                    width: 40,
                    height: 30
                },
                id16: {
                    x: 326,
                    y: 846,
                    width: 42,
                    height: 30
                },
                id17: {
                    x: 326,
                    y: 878,
                    width: 41,
                    height: 28
                },
                id18: {
                    x: 828,
                    y: 588,
                    width: 38,
                    height: 30
                },
                id19: {
                    x: 906,
                    y: 722,
                    width: 36,
                    height: 29
                },
                id2: {
                    x: 0,
                    y: 70,
                    width: 1010,
                    height: 12
                },
                id20: {
                    x: 326,
                    y: 908,
                    width: 41,
                    height: 30
                },
                id21: {
                    x: 694,
                    y: 175,
                    width: 39,
                    height: 30
                },
                id22: {
                    x: 326,
                    y: 782,
                    width: 44,
                    height: 30
                },
                id23: {
                    x: 326,
                    y: 814,
                    width: 43,
                    height: 30
                },
                id24: {
                    x: 906,
                    y: 617,
                    width: 38,
                    height: 30
                },
                id25: {
                    x: 922,
                    y: 907,
                    width: 35,
                    height: 30
                },
                id26: {
                    x: 326,
                    y: 701,
                    width: 59,
                    height: 32
                },
                id27: {
                    x: 461,
                    y: 178,
                    width: 62,
                    height: 30
                },
                id28: {
                    x: 387,
                    y: 213,
                    width: 358,
                    height: 432
                },
                id29: {
                    x: 0,
                    y: 84,
                    width: 467,
                    height: 71
                },
                id3: {
                    x: 0,
                    y: 56,
                    width: 1010,
                    height: 12
                },
                id30: {
                    x: 0,
                    y: 942,
                    width: 186,
                    height: 19
                },
                id31: {
                    x: 0,
                    y: 701,
                    width: 324,
                    height: 239
                },
                id32: {
                    x: 326,
                    y: 735,
                    width: 47,
                    height: 45
                },
                id33: {
                    x: 833,
                    y: 929,
                    width: 87,
                    height: 87
                },
                id34: {
                    x: 901,
                    y: 777,
                    width: 95,
                    height: 128
                },
                id35: {
                    x: 0,
                    y: 157,
                    width: 459,
                    height: 54
                },
                id36: {
                    x: 0,
                    y: 213,
                    width: 385,
                    height: 486
                },
                id37: {
                    x: 713,
                    y: 929,
                    width: 118,
                    height: 61
                },
                id38: {
                    x: 188,
                    y: 942,
                    width: 118,
                    height: 61
                },
                id39: {
                    x: 0,
                    y: 963,
                    width: 105,
                    height: 52
                },
                id4: {
                    x: 0,
                    y: 28,
                    width: 1010,
                    height: 12
                },
                id40: {
                    x: 747,
                    y: 534,
                    width: 105,
                    height: 52
                },
                id41: {
                    x: 828,
                    y: 620,
                    width: 26,
                    height: 25
                },
                id42: {
                    x: 906,
                    y: 649,
                    width: 38,
                    height: 38
                },
                id43: {
                    x: 713,
                    y: 777,
                    width: 186,
                    height: 150
                },
                id44: {
                    x: 880,
                    y: 84,
                    width: 117,
                    height: 318
                },
                id45: {
                    x: 713,
                    y: 647,
                    width: 191,
                    height: 128
                },
                id46: {
                    x: 880,
                    y: 404,
                    width: 95,
                    height: 180
                },
                id47: {
                    x: 747,
                    y: 175,
                    width: 131,
                    height: 357
                },
                id48: {
                    x: 641,
                    y: 84,
                    width: 150,
                    height: 89
                },
                id49: {
                    x: 469,
                    y: 84,
                    width: 170,
                    height: 92
                },
                id5: {
                    x: 0,
                    y: 0,
                    width: 1010,
                    height: 12
                },
                id50: {
                    x: 387,
                    y: 647,
                    width: 324,
                    height: 372
                },
                id51: {
                    x: 107,
                    y: 963,
                    width: 76,
                    height: 32
                },
                id6: {
                    x: 308,
                    y: 942,
                    width: 64,
                    height: 65
                },
                id7: {
                    x: 0,
                    y: 42,
                    width: 1010,
                    height: 12
                },
                id8: {
                    x: 788,
                    y: 588,
                    width: 38,
                    height: 32
                },
                id9: {
                    x: 906,
                    y: 689,
                    width: 37,
                    height: 31
                }
            }
        }, 
        {
            id: "numbers0",
            file: "images/numbers0_30x53.png"
        }, 
        {
            id: "bubbles",
            file: "images/bubbles_46x48.png"
        }, 
        {
            id: "flare",
            file: "images/flare.png"
        }, 
        {
            id: "firework0",
            file: "images/firework0_175x175.png",
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
            id: "firework1",
            file: "images/firework1_175x175.png",
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
            id: "pop",
            file: "images/pop_166x167.png",
            oAnims: {
                hide: [
                    30
                ],
                explode0: [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7
                ],
                explode1: [
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15
                ],
                explode2: [
                    16, 
                    17, 
                    18, 
                    19, 
                    20, 
                    21, 
                    22, 
                    23
                ],
                explode3: [
                    24, 
                    25, 
                    26, 
                    27, 
                    28, 
                    29, 
                    30, 
                    31
                ],
                explode4: [
                    32, 
                    33, 
                    34, 
                    35, 
                    36, 
                    37, 
                    38, 
                    39
                ],
                explode5: [
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48
                ]
            }
        }, 
        {
            id: "langText",
            file: "json/text.json"
        }, 
        {
            id: "levelData",
            file: "json/levelData.json"
        }, 
        {
            id: "title",
            file: "images/title/title_" + curLang + ".png"
        }, 
        {
            id: "map",
            file: "images/map.jpg"
        }, 
        {
            id: "titleBg",
            file: "images/titleBg.jpg"
        }, 
        {
            id: "info",
            file: "images/info.png"
        }, 
        {
            id: "bioElements",
            file: "images/bioElements.png",
            oAtlasData: {
                id0: {
                    x: 0,
                    y: 0,
                    width: 432,
                    height: 605
                },
                id1: {
                    x: 0,
                    y: 912,
                    width: 83,
                    height: 36
                },
                id10: {
                    x: 763,
                    y: 299,
                    width: 243,
                    height: 295
                },
                id11: {
                    x: 512,
                    y: 595,
                    width: 249,
                    height: 299
                },
                id12: {
                    x: 434,
                    y: 298,
                    width: 250,
                    height: 295
                },
                id13: {
                    x: 688,
                    y: 0,
                    width: 246,
                    height: 297
                },
                id14: {
                    x: 0,
                    y: 607,
                    width: 254,
                    height: 303
                },
                id2: {
                    x: 85,
                    y: 912,
                    width: 82,
                    height: 69
                },
                id3: {
                    x: 169,
                    y: 912,
                    width: 54,
                    height: 66
                },
                id4: {
                    x: 32,
                    y: 950,
                    width: 30,
                    height: 33
                },
                id5: {
                    x: 0,
                    y: 950,
                    width: 30,
                    height: 32
                },
                id6: {
                    x: 225,
                    y: 912,
                    width: 52,
                    height: 66
                },
                id7: {
                    x: 279,
                    y: 912,
                    width: 22,
                    height: 33
                },
                id8: {
                    x: 256,
                    y: 607,
                    width: 254,
                    height: 303
                },
                id9: {
                    x: 434,
                    y: 0,
                    width: 252,
                    height: 296
                }
            }
        }, 
        {
            id: "rotateDeviceMessage",
            file: "images/rotateDeviceMessage.jpg"
        }, 
        {
            id: "hedgehogAnim",
            file: "images/hedgehog_140x225.png",
            oAnims: {
                still: [
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    13, 
                    14, 
                    13
                ],
                swap: [
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
                    12
                ]
            }
        }, 
        {
            id: "oscarAnim",
            file: "images/oscar_154x189.png",
            oAnims: {
                still: [
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    25, 
                    26, 
                    25, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0, 
                    0
                ],
                swap: [
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
                    12
                ],
                launch: [
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
                    24
                ]
            }
        }, 
        {
            id: "tut0",
            file: "images/tut0_220x220.png",
            oAnims: {
                still0: [
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
                    13, 
                    14, 
                    14, 
                    14, 
                    14, 
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
                    25, 
                    25, 
                    25, 
                    25, 
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
                    38, 
                    38, 
                    38, 
                    38, 
                    39, 
                    39, 
                    39, 
                    39, 
                    39, 
                    40, 
                    41, 
                    42, 
                    43, 
                    44, 
                    45, 
                    46, 
                    47, 
                    48, 
                    49, 
                    49, 
                    49, 
                    49, 
                    49, 
                    50, 
                    51, 
                    53, 
                    54, 
                    55, 
                    56, 
                    57, 
                    58, 
                    59, 
                    60, 
                    61, 
                    62, 
                    62, 
                    62, 
                    62, 
                    62, 
                    63, 
                    63, 
                    63, 
                    63, 
                    63, 
                    64, 
                    65, 
                    66, 
                    67, 
                    68, 
                    69, 
                    70, 
                    71, 
                    72, 
                    73, 
                    73, 
                    73, 
                    73, 
                    73, 
                    74, 
                    75, 
                    76, 
                    77, 
                    78, 
                    79, 
                    80, 
                    81, 
                    82, 
                    83, 
                    84, 
                    85, 
                    86, 
                    86, 
                    86, 
                    86, 
                    86
                ],
                still1: [
                    87, 
                    87, 
                    87, 
                    87, 
                    87, 
                    88, 
                    89, 
                    90, 
                    91, 
                    91, 
                    91, 
                    91, 
                    91, 
                    92, 
                    93, 
                    94, 
                    95, 
                    96, 
                    97, 
                    98, 
                    98, 
                    98, 
                    98, 
                    98, 
                    99, 
                    100, 
                    101, 
                    102, 
                    102, 
                    102, 
                    102, 
                    102, 
                    103, 
                    104, 
                    105, 
                    106, 
                    107, 
                    108
                ]
            }
        }, 
        {
            id: "introElements",
            file: "images/introElements.png",
            oAtlasData: {
                id0: {
                    x: 542,
                    y: 0,
                    width: 210,
                    height: 333
                },
                id1: {
                    x: 0,
                    y: 319,
                    width: 296,
                    height: 387
                },
                id2: {
                    x: 0,
                    y: 0,
                    width: 434,
                    height: 317
                },
                id3: {
                    x: 298,
                    y: 319,
                    width: 242,
                    height: 148
                },
                id4: {
                    x: 298,
                    y: 469,
                    width: 102,
                    height: 113
                }
            }
        }, 
        {
            id: "introBg",
            file: "images/introBg.jpg"
        }
    ], ctx, canvas.width, canvas.height);
    oImageIds.oscarIntro = "id0";
    oImageIds.hedgehogIntro = "id1";
    oImageIds.bubblesIntro = "id2";
    oImageIds.susieIntro = "id3";
    oImageIds.alienIntro = "id4";
    oImageIds.pageBg = "id0";
    oImageIds.sticker0 = "id1";
    oImageIds.sticker1 = "id2";
    oImageIds.sticker2 = "id3";
    oImageIds.sticker3 = "id4";
    oImageIds.sticker4 = "id5";
    oImageIds.sticker5 = "id6";
    oImageIds.sticker6 = "id7";
    oImageIds.charPhoto0 = "id8";
    oImageIds.charPhoto1 = "id9";
    oImageIds.charPhoto2 = "id10";
    oImageIds.charPhoto3 = "id11";
    oImageIds.charPhoto4 = "id12";
    oImageIds.charPhoto5 = "id13";
    oImageIds.charPhoto6 = "id14";
    oImageIds.playBut = "id0";
    oImageIds.retryBut = "id1";
    oImageIds.bioBut = "id2";
    oImageIds.muteBut1 = "id3";
    oImageIds.muteBut0 = "id4";
    oImageIds.menuBut = "id5";
    oImageIds.mapStars1 = "id6";
    oImageIds.mapStars2 = "id7";
    oImageIds.mapStars3 = "id8";
    oImageIds.mapBut0 = "id9";
    oImageIds.mapBut1 = "id10";
    oImageIds.backBut = "id11";
    oImageIds.bigPlayBut = "id12";
    oImageIds.pauseBut = "id13";
    oImageIds.infoBut = "id14";
    oImageIds.nextPageBut = "id15";
    oImageIds.mapStars0 = "id16";
    oImageIds.swapBut = "id17";
    oImageIds.aimLine0 = "id0";
    oImageIds.star = "id1";
    oImageIds.aimLine1 = "id2";
    oImageIds.aimLine2 = "id3";
    oImageIds.aimLine3 = "id4";
    oImageIds.aimLine4 = "id5";
    oImageIds.glint = "id6";
    oImageIds.aimLine5 = "id7";
    oImageIds.score10 = "id8";
    oImageIds.score15 = "id9";
    oImageIds.score20 = "id10";
    oImageIds.score25 = "id11";
    oImageIds.score30 = "id12";
    oImageIds.score35 = "id13";
    oImageIds.score40 = "id14";
    oImageIds.score45 = "id15";
    oImageIds.score50 = "id16";
    oImageIds.score55 = "id17";
    oImageIds.score60 = "id18";
    oImageIds.score65 = "id19";
    oImageIds.score70 = "id20";
    oImageIds.score75 = "id21";
    oImageIds.score80 = "id22";
    oImageIds.score85 = "id23";
    oImageIds.score90 = "id24";
    oImageIds.score95 = "id25";
    oImageIds.score100 = "id26";
    oImageIds.score500 = "id27";
    oImageIds.infoPanel = "id28";
    oImageIds.messagePanel = "id29";
    oImageIds.starBar = "id30";
    oImageIds.introPanel = "id31";
    oImageIds.allColourBubble = "id32";
    oImageIds.starFade = "id33";
    oImageIds.hintFinger = "id34";
    oImageIds.ceiling = "id35";
    oImageIds.titleHug = "id36";
    oImageIds.oscarBlink0 = "id37";
    oImageIds.oscarBlink1 = "id38";
    oImageIds.hedgehogBlink0 = "id39";
    oImageIds.hedgehogBlink1 = "id40";
    oImageIds.barStar0 = "id41";
    oImageIds.barStar1 = "id42";
    oImageIds.levelChar0 = "id43";
    oImageIds.levelChar1 = "id44";
    oImageIds.levelChar2 = "id45";
    oImageIds.levelChar3 = "id46";
    oImageIds.levelChar4 = "id47";
    oImageIds.marshmallowGroup = "id48";
    oImageIds.reachTop = "id49";
    oImageIds.tutPanel = "id50";
    oImageIds.goalPanel = "id51";
    assetLib.onReady(initSplash);
    previousTime = new Date().getTime();
    updateLoaderEvent();
}
function resizeCanvas() {
    var a = window.innerWidth, b = window.innerHeight;
    var w = canvas.width, h = canvas.height;
    if(a > 480) {
        (a -= 1 , b -= 1);
    }
    if(a > b && isMobile && ("loading" != gameState)) {
        rotatePauseOn();
    } else if(rotatePause && isMobile) {
        rotatePauseOff();
    }
    if(a / b < canvas.width / canvas.height) {
        canvas.style.width = a + "px";
        canvas.style.height = (a * h / w) + "px";
        canvasX = 0;
        canvasY = (b - a * h / w) / 2;
        canvasScaleX = canvasScaleY = w / a;
    } else {
        canvas.style.width = b / h * w + "px";
        canvas.style.height = b + "px";
        canvasX = (a - b / h * w) / 2;
        canvasY = 0;
        canvasScaleX = canvasScaleY = h / b;
    }
    canvas.style.marginTop = canvasY + "px";
    canvas.style.marginLeft = canvasX + "px";
    userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}
function playSound(_id) {
    if(_id == "click") {
        _id = "pop" + Math.floor(Math.random() * 4);
    }
    if(audioType == 1) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(audioType == 1) {
        if(muted) {
            Howler.mute(true);
        } else {
            Howler.mute(false);
            if(gameState == "game") {
                music.volume(.8);
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
    if(gameState == "start") {
        renderMuteBut();
    }
}
function renderMuteBut() {
    if(audioType == 0) {
        return;
    }
    var oImgData = assetLib.getData("muteBut");
    var id = 0;
    if(muted) {
        id = 1;
    }
    var imgX = (id * oImgData.oData.spriteWidth) % oImgData.img.width;
    var imgY = Math.floor(id / (oImgData.img.width / oImgData.oData.spriteWidth)) * oImgData.oData.spriteHeight;
    ctx.drawImage(oImgData.img, imgX, imgY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight, 382, 8 - panel.posY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight);
}
function toggleManualPause() {
    if(!manualPause) {
        manualPause = true;
        pauseCoreOn();
        var oRetryBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2 - 70, 
                250
            ],
            id: oImageIds.retryBut
        };
        var oResumeBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2 + 70, 
                250
            ],
            id: oImageIds.playBut
        };
        if(muted) {
            var oMuteBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    canvas.width / 2 - 70, 
                    350
                ],
                id: oImageIds.muteBut1
            };
        } else {
            var oMuteBut = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [
                    canvas.width / 2 - 70, 
                    350
                ],
                id: oImageIds.muteBut0
            };
        }
        var oMenuBut = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [
                canvas.width / 2 + 70, 
                350
            ],
            id: oImageIds.menuBut
        };
        userInput.addHitArea("retryFromPause", butEventHandler, {
            multiTouch: true
        }, "image", oRetryBut);
        userInput.addHitArea("resumeFromPause", butEventHandler, {
            multiTouch: true
        }, "image", oResumeBut);
        userInput.addHitArea("muteFromPause", butEventHandler, null, "image", oMuteBut);
        userInput.addHitArea("menuFromPause", butEventHandler, {
            multiTouch: true
        }, "image", oMenuBut);
        var aButs = new Array(oRetryBut, oResumeBut, oMuteBut, oMenuBut);
        panel = new Elements.Panel("pause", aButs);
        panel.render(ctx);
    } else {
        manualPause = false;
        userInput.removeHitArea("retryFromPause");
        userInput.removeHitArea("resumeFromPause");
        userInput.removeHitArea("muteFromPause");
        userInput.removeHitArea("menuFromPause");
        pauseCoreOff();
    }
}
function rotatePauseOn() {
    rotatePause = true;
    ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0);
    userInput.pauseIsOn = true;
    pauseCoreOn();
}
function rotatePauseOff() {
    rotatePause = false;
    userInput.removeHitArea("retryFromPause");
    userInput.removeHitArea("resumeFromPause");
    userInput.removeHitArea("muteFromPause");
    userInput.removeHitArea("menuFromPause");
    pauseCoreOff();
}
function pauseCoreOn() {
    if(audioType == 1) {
        Howler.mute(true);
    } else if(audioType == 2) {
        music.pause();
    }
    switch(gameState) {
        case "start":
            break;
        case "help":
            break;
        case "game":
            userInput.removeHitArea("pause");
            userInput.removeHitArea("startPanelTouch");
            userInput.removeHitArea("gameTouch");
            userInput.removeHitArea("switchBubble");
            userInput.removeHitArea("firstGameTouch");
            hudButsOn = false;
            break;
        case "end":
            break;
    }
}
function pauseCoreOff() {
    if(audioType == 1) {
        if(!muted) {
            Howler.mute(false);
        }
    } else if(audioType == 2) {
        if(!muted) {
            playMusic();
        }
    }
    previousTime = new Date().getTime();
    userInput.pauseIsOn = false;
    switch(gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "intro":
            initIntro();
            break;
        case "outro":
            initOutro();
            break;
        case "start":
            initStartScreen();
            break;
        case "map":
            initMapScreen();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "bioPage":
            initBioPage();
            break;
        case "game":
            console.log(panel.panelType);
            if(panel.panelType == "startPanel") {
                panel.aButs = new Array();
            } else if(panel.panelType != "endFailPanel" && panel.panelType != "endPanel") {
                panel.posY = 550;
                panel.panelType = "game";
                panel.aButs = new Array();
            }
            if(!manualPause) {
                if(panel.panelType == "startPanel") {
                    userInput.addHitArea("startPanelTouch", butEventHandler, {
                        multiTouch: true
                    }, "rect", {
                        aRect: [
                            0, 
                            0, 
                            canvas.width, 
                            canvas.height
                        ]
                    }, true);
                } else if(gameControlState) {
                    toggleHudButs(true);
                }
                updateGameEvent();
            } else {
                manualPause = false;
                updateGameEvent();
                toggleManualPause();
            }
            break;
    }
}
