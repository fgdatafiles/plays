var Utils;

(function (Utils) {

    var AssetLoader = (function () {

        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {

            if (typeof _showBar === "undefined") { _showBar = true; }

            this.oAssetData = {

            };

            this.assetsLoaded = 0;

            this.totalAssets = _aFileData.length;

            this.ctx = _ctx;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            this.showBar = _showBar;

            this.topLeftX = this.canvasWidth / 2 - _canvasWidth / 4;

            this.topLeftY = 440;

            if(this.showBar) {

                ctx.strokeStyle = "#222D6F";

                ctx.lineWidth = 2;

                ctx.fillStyle = "#AFD2F4";

                ctx.moveTo(this.topLeftX, this.topLeftY);

                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 0);

                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 40);

                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 40);

                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0);

                ctx.stroke();

            }

            for(var i = 0; i < _aFileData.length; i++) {

                this.loadImage(_aFileData[i]);

            }

        }

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

                if(_this.showBar) {

                    ctx.fillRect(_this.topLeftX + 2, _this.topLeftY + 2, ((_this.canvasWidth / 2 - 4) / _this.totalAssets) * _this.assetsLoaded, 36);

                }

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

                            return;

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

            this.canvasX = 0;

            this.canvasY = 0;

            this.canvasScaleX = 1;

            this.canvasScaleY = 1;

            this.prevHitTime = 0;

            this.pauseIsOn = false;

            this.isDown = false;

            this.isDetectingKeys = false;

            this.isBugBrowser = _isBugBrowser;

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

                for(var i = 0; i < _this.aHitAreas.length; i++) {

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

            if(_isDown) {

                _posX = (_posX - this.canvasX) * this.canvasScaleX;

                _posY = (_posY - this.canvasY) * this.canvasScaleY;

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

                            if(this.aHitAreas[i].oData.isDraggable) {

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

        UserInput.prototype.addKey = function (_id, _callback, _oCallbackData, _keyCode) {

            var _this = this;

            if(!this.isDetectingKeys) {

                window.focus();

                window.addEventListener('keydown', function (e) {

                    _this.keyDown(e);

                }, false);

                window.addEventListener('keyup', function (e) {

                    _this.keyUp(e);

                }, false);

                this.isDetectingKeys = true;

            }

            if(_oCallbackData == null) {

                _oCallbackData = new Object();

            }

            this.aKeys.push({

                id: _id,

                callback: _callback,

                oData: _oCallbackData,

                keyCode: _keyCode

            });

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

        function Background(_oImgData, _canvasWidth, _canvasHeight) {

            this.x = 0;

            this.y = 0;

            this.incY = 0;

            this.renderState = null;

            this.targX = 0;

            this.targY = 0;

            this.projectX = 0;

            this.projectY = 0;

            this.oImgData = _oImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            this.x = this.projectX = this.targX;

            this.y = this.projectY = this.targY;

        }

        Background.prototype.update = function () {

            switch(this.renderState) {

                case "menuScroll":

                    this.incY += 5 * delta;

                    this.x = (this.x - (Math.sin(this.incY / 10) * 100) * delta);

                    this.y = (this.y - 200 * delta);

                    break;

                case "game":

                    if(!endGameSequence && branch.aBranches[0]) {

                        if(branch.aBranches[0].startSkewFrame < 30) {

                            this.targX += ((branch.aBranches[0].startSkewFrame - branch.skewMidFrame) * 25) * delta;

                        }

                        this.targY -= ((branch.aBranches[0].startHeightFactor - .25) * 1000) * delta;

                    }

                    this.x += ((this.targX - this.x) * 5) * delta;

                    this.y += ((this.targY - this.y) * 5) * delta;

                    break;

            }

        };

        Background.prototype.render = function () {

            switch(this.renderState) {

                case "menuScroll":

                case "game":

                    this.projectX = this.x % this.oImgData.img.width / 2;

                    this.projectY = this.y % this.oImgData.img.height / 2;

                    if(this.projectX < 0) {

                        this.projectX += this.oImgData.img.width / 2;

                    }

                    if(this.projectY < 0) {

                        this.projectY += this.oImgData.img.height / 2;

                    }

                    ctx.drawImage(this.oImgData.img, this.projectX, this.projectY, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight);

                    break;

                case "none":

                    ctx.drawImage(this.oImgData.img, 0, 0);

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

            this.posY = 0;

            this.numberSpace = 18;

            this.incY = 0;

            this.flareRot = 0;

            this.oPanelsImgData = assetLib.getData("panels");

            this.oNumbersImgData = assetLib.getData("numbersWhite");

            this.oBranchElementsImgData = assetLib.getData("branchElements");

            this.oTopFlareImgData = assetLib.getData("topFlare");

            this.panelType = _panelType;

            this.aButs = _aButs;

        }

        Panel.prototype.update = function (_delta) {

            this.incY += 5 * _delta;

        };

        Panel.prototype.startTween1 = function () {

            this.posY = 550;

            TweenLite.to(this, .8, {

                posY: 0,

                ease: "Back.easeOut"

            });

        };

        Panel.prototype.startTween2 = function () {

            this.posY = 550;

            TweenLite.to(this, .5, {

                posY: 0,

                ease: "Quad.easeOut"

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

                    _ctx.save();

                    _ctx.translate(canvas.width / 2, 292 + this.posY);

                    _ctx.rotate(this.flareRot);

                    _ctx.scale(1.5, 1.5);

                    _ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);

                    _ctx.restore();

                    var id = 0;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    var num = oGameData.totalGems;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + i * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    break;

                case "credits":

                    var id = 1;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    break;

                case "gameOver":

                    var id = 2;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    var num = oGameData.totalGems;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + i * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = oGameData.distance;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 300 + i * this.numberSpace - (this.numberSpace * num.toString().length) / 2, 177 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = saveDataHandler.aLevelStore[1];

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 300 + i * (this.numberSpace / 1.5) - ((this.numberSpace / 1.5) * num.toString().length) / 2, 247 + this.posY, this.oNumbersImgData.oData.spriteWidth / 1.5, this.oNumbersImgData.oData.spriteHeight / 1.5);

                    }

                    var num = oGameData.curGems;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 307 + i * this.numberSpace - (this.numberSpace * num.toString().length) / 2, 348 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = oGameData.boostNum;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 307 + i * this.numberSpace - (this.numberSpace * num.toString().length) / 2, 450 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    break;

                case "upgrade":

                    var id = 3;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    var num = oGameData.totalGems;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 54 + i * this.numberSpace, 11 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    for(var i = 0; i < 4; i++) {

                        var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].x;

                        var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].y;

                        var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].width;

                        var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.upgradeBar].height;

                        ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, 65, 203 + 110 * i + this.posY, bWidth * (aPowerUpBarData[i] * (1 / 8)), bHeight);

                    }

                    break;

                case "pause":

                    _ctx.fillStyle = "rgba(0, 0, 0, 0.75)";

                    _ctx.fillRect(0, 0, canvas.width, canvas.height);

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

                    floatY = Math.sin(this.incY * 2 + i) * 5;

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

                if(!this.aButs[i].tweenVert) {

                    _ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) + offsetPosY - floatY / 2, this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + floatY / 2, bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);

                } else {

                    _ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aPos[0] - (bWidth / 2) * (this.aButs[i].scale) - floatY / 2, this.aButs[i].aPos[1] - (bHeight / 2) * (this.aButs[i].scale) + floatY / 2 + offsetPosY, bWidth * (this.aButs[i].scale) + floatY, bHeight * (this.aButs[i].scale) - floatY);

                }

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

            this.bigNumberSpace = 19;

            this.smallNumberSpace = 13;

            this.barPerc = .1;

            this.chainBarFlipCount = 0;

            this.flareRot = 0;

            this.flareY = 0;

            this.boostShadeY = canvas.height;

            this.tutState = 0;

            this.tutCount = 0;

            this.tutAnimFlip = true;

            this.oHudImgData = assetLib.getData("hud");

            this.oNumbersWhiteImgData = assetLib.getData("numbersWhite");

            this.oNumbersOrangeImgData = assetLib.getData("numbersOrange");

            this.oBranchElementsImgData = assetLib.getData("branchElements");

            this.oBoostShadeImgData = assetLib.getData("boostShade");

            this.oTopFlareImgData = assetLib.getData("topFlare");

            if(firstRun) {

                this.tutAnimHoriz(this);

            }

        }

        Hud.prototype.tutAnimHoriz = function (_this) {

            _this.tutAnimFlip = !_this.tutAnimFlip;

            if(_this.tutAnimFlip) {

                this.tutHandX = 50;

                this.tutHandY = 320;

                _this.tutTween = TweenMax.to(_this, .5, {

                    tutHandX: canvas.width - 100,

                    ease: "Cubic.easeOut",

                    delay: .5,

                    onComplete: _this.tutAnimHoriz,

                    onCompleteParams: [

                        _this

                    ]

                });

            } else {

                this.tutHandX = canvas.width - 100;

                this.tutHandY = 320;

                _this.tutTween = TweenMax.to(_this, .5, {

                    tutHandX: 100,

                    ease: "Cubic.easeOut",

                    delay: .5,

                    onComplete: _this.tutAnimHoriz,

                    onCompleteParams: [

                        _this

                    ]

                });

            }

        };

        Hud.prototype.tutAnimVert = function (_this) {

            _this.tutAnimFlip = !_this.tutAnimFlip;

            if(_this.tutAnimFlip) {

                this.tutHandX = 325;

                this.tutHandY = 300;

                _this.tutTween = TweenMax.to(_this, .5, {

                    tutHandY: 500,

                    ease: "Cubic.easeOut",

                    delay: .5,

                    onComplete: _this.tutAnimVert,

                    onCompleteParams: [

                        _this

                    ]

                });

            } else {

                this.tutHandX = 325;

                this.tutHandY = 500;

                _this.tutTween = TweenMax.to(_this, .5, {

                    tutHandY: 300,

                    ease: "Cubic.easeOut",

                    delay: .5,

                    onComplete: _this.tutAnimVert,

                    onCompleteParams: [

                        _this

                    ]

                });

            }

        };

        Hud.prototype.collectGem = function () {

            this.chainBarFlipCount = 1;

        };

        Hud.prototype.render = function (_ctx) {

            this.flareRot += (((background.targX - background.x) * 2) * delta) / 500;

            if(branch.aBranches.length >= 1) {

                this.flareY += (((branch.aBranches[0].startHeightFactor * -175 - this.flareY) * 5) * delta);

            }

            _ctx.save();

            _ctx.translate(canvas.width / 2, -100 + this.flareY);

            _ctx.rotate(this.flareRot);

            _ctx.scale(2, 2);

            _ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2);

            _ctx.restore();

            _ctx.drawImage(this.oBoostShadeImgData.img, 0, this.boostShadeY);

            _ctx.drawImage(this.oHudImgData.img, 0, 0);

            for(var i = 0; i < oGameData.curGems.toString().length; i++) {

                var id = parseFloat(oGameData.curGems.toString().charAt(i));

                var imgX = (id * this.oNumbersWhiteImgData.oData.spriteWidth) % this.oNumbersWhiteImgData.img.width;

                var imgY = Math.floor(id / (this.oNumbersWhiteImgData.img.width / this.oNumbersWhiteImgData.oData.spriteWidth)) * this.oNumbersWhiteImgData.oData.spriteHeight;

                _ctx.drawImage(this.oNumbersWhiteImgData.img, imgX, imgY, this.oNumbersWhiteImgData.oData.spriteWidth, this.oNumbersWhiteImgData.oData.spriteHeight, 206 + i * this.bigNumberSpace, 10, this.oNumbersWhiteImgData.oData.spriteWidth, this.oNumbersWhiteImgData.oData.spriteHeight);

            }

            for(var i = 0; i < oGameData.boostNum.toString().length; i++) {

                var id = parseFloat(oGameData.boostNum.toString().charAt(i));

                var imgX = (id * this.oNumbersOrangeImgData.oData.spriteWidth) % this.oNumbersOrangeImgData.img.width;

                var imgY = Math.floor(id / (this.oNumbersOrangeImgData.img.width / this.oNumbersOrangeImgData.oData.spriteWidth)) * this.oNumbersOrangeImgData.oData.spriteHeight;

                _ctx.drawImage(this.oNumbersOrangeImgData.img, imgX, imgY, this.oNumbersOrangeImgData.oData.spriteWidth, this.oNumbersOrangeImgData.oData.spriteHeight, 70 + i * this.smallNumberSpace, 52, this.oNumbersOrangeImgData.oData.spriteWidth, this.oNumbersOrangeImgData.oData.spriteHeight);

            }

            var boostTarg = .075 + oGameData.curGemChain / (5 + oGameData.boostNum * 3);

            if(this.chainBarFlipCount > 0) {

                this.chainBarFlipCount -= delta * 2;

            }

            if(boostTarg >= 1) {

                this.barPerc = 1;

                branch.scrollSpeed = Math.min(1500, branch.scrollSpeed + 50 + aPowerUpBarData[1] * 3);

                oGameData.boostNum++;

                oGameData.curGemChain = 0;

                boostTarg = 0;

                this.boostShadeY = canvas.height;

                TweenMax.to(this, 1, {

                    boostShadeY: -canvas.height,

                    ease: "Quint.easeIn"

                });

                playSound("boost");

                this.chainBarFlipCount = 2;

            }

            this.barPerc += ((boostTarg - this.barPerc) * 2) * delta;

            this.barPerc = Math.min(this.barPerc, 1);

            var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].x;

            var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].y;

            var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].width;

            var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["chainBar" + Math.ceil(Math.min(this.chainBarFlipCount, 1))]].height;

            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth * this.barPerc, bHeight, 13, 28 - (bHeight / 2) * (1 + this.chainBarFlipCount), (bWidth * this.barPerc), bHeight * (1 + this.chainBarFlipCount));

            var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].x;

            var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].y;

            var bWidth2 = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].width;

            var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.chainBarGem].height;

            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth2, bHeight, 10 + bWidth * this.barPerc - (bHeight / 2) * (1 + this.chainBarFlipCount), 30 - (bHeight / 2) * (1 + this.chainBarFlipCount), bWidth2 * (1 + this.chainBarFlipCount), bHeight * (1 + this.chainBarFlipCount));

            if(firstRun) {

                this.tutCount += delta;

                if(this.tutState == 0 && this.tutCount > 4 && hasHorizAction == true) {

                    this.tutState = 1;

                    this.tutCount = 0;

                    if(this.tutTween) {

                        this.tutTween.kill();

                        this.tutAnimVert(this);

                    }

                }

                if(this.tutState == 1 && this.tutCount > 4 && hasVertAction == true) {

                    firstRun = false;

                    if(this.tutTween) {

                        this.tutTween.kill();

                    }

                }

                if(isMobile) {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutMobile" + this.tutState]].height;

                    ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 70, bWidth, bHeight);

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.tutHand].height;

                    ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.tutHandX - bWidth / 2, this.tutHandY - bHeight / 2, bWidth, bHeight);

                } else {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + this.tutState]].height;

                    ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 80, bWidth, bHeight);

                }

            }

        };

        return Hud;

    })();

    Elements.Hud = Hud;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var Branch = (function () {

        function Branch() {

            this.perspScaleFactor = .876;

            this.skewOffset = 3;

            this.entireScale = 1.8;

            this.incY = 0;

            this.scrollSpeed = 400;

            this.skewMidFrame = 15;

            this.segNum = 30;

            this.scaletoSpeedRatio = 523;

            this.sineInc = 0;

            this.canChangeBehaviour = true;

            this.canAddBranch = true;

            this.horizontalBranchState = 0;

            this.justTurned = false;

            this.turnOffset = 0;

            this.behaviourChangeInc = 0;

            this.behaviourChangeTarg = 3;

            this.curveChangeInc = 0;

            this.curveChangeTarg = 2;

            this.hillChangeInc = 0;

            this.hillChangeTarg = 2;

            this.curveType = 0;

            this.hillType = 0;

            this.heightFactorTarg = .25;

            this.curveTarg = 15;

            this.gapState = 0;

            this.gapInc = 0;

            this.nextBlockType = 0;

            this.coinInc = 0;

            this.fixedSegHeight = 42;

            this.segCount = 0;

            this.lastGemCount = 0;

            this.powerUpCount = 30;

            this.oBranchImgData = assetLib.getData("branches");

            this.oBranchElementsImgData = assetLib.getData("branchElements");

            this.aBranches = new Array();

            var xPos = 0;

            var yPos = 0;

            var scale = 1;

            var curSkewOffset = 0;

            var skewFrame = this.skewMidFrame;

            for(var i = 0; i < this.segNum; i++) {

                if(i == 0) {

                    xPos = canvas.width / 2;

                    yPos = canvas.height - this.oBranchImgData.oData.spriteHeight * this.entireScale;

                    this.aBranches.push({

                        powerUpState: squirrel.powerUpState,

                        count: this.segCount++,

                        coinOffset: Math.random() * 2 - 1,

                        blockType: 0,

                        gapState: this.gapState,

                        startSkewFrame: skewFrame,

                        skewFrame: skewFrame,

                        curSkewOffset: curSkewOffset,

                        xPos: xPos,

                        yPos: yPos,

                        scale: scale,

                        startHeightFactor: .25,

                        heightFactor: .25

                    });

                } else {

                    this.addSegment(false);

                }

            }

            TweenMax.to(this, .5, {

                scrollSpeed: 800 + aPowerUpBarData[0] * 25,

                ease: "Quad.easeIn"

            });

        }

        Branch.prototype.addSegment = function (_allowCoins, _prevYPos, _prevScale) {

            if (typeof _allowCoins === "undefined") { _allowCoins = true; }

            if (typeof _prevYPos === "undefined") { _prevYPos = 0; }

            if (typeof _prevScale === "undefined") { _prevScale = 1; }

            this.sineInc += .1;

            var skewFrame = this.aBranches[this.aBranches.length - 1].skewFrame;

            if(this.aBranches[this.aBranches.length - 1].startSkewFrame < 60) {

                skewFrame -= Math.round((this.aBranches[this.aBranches.length - 1].startSkewFrame - this.curveTarg) / 2);

            } else {

            }

            var heightFactor = this.aBranches[this.aBranches.length - 1].startHeightFactor;

            heightFactor -= (this.aBranches[this.aBranches.length - 1].startHeightFactor - this.heightFactorTarg) / 2;

            var curSkewOffset = (this.aBranches[this.aBranches.length - 1].skewFrame - this.skewMidFrame) * this.skewOffset;

            var xPos = this.aBranches[this.aBranches.length - 1].xPos;

            this.aBranches[0].scale = 1;

            this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;

            var tempGapState = this.gapState;

            var startSkewFrame = skewFrame;

            if(this.gapState == 1) {

                this.gapInc--;

                if(this.aBranches[this.aBranches.length - 1].startSkewFrame < 60) {

                    startSkewFrame = 60;

                    tempGapState = 0;

                } else {

                    startSkewFrame = 60;

                }

                if(this.gapInc <= 0) {

                    startSkewFrame = 61;

                    this.gapState = 0;

                    tempGapState = 0;

                    this.canChangeBehaviour = true;

                    this.behaviourChangeTarg = Math.random() * 2 + .5;

                }

            }

            this.lastGemCount++;

            if((this.lastGemCount > 4 || (squirrel.powerUpState == "gems" && this.lastGemCount > 2)) && this.nextBlockType == 0 && this.gapInc == 0 && _allowCoins && startSkewFrame != 60 && startSkewFrame != 61) {

                if(Math.random() * 1 > (.85 - aPowerUpBarData[3] / 40) || squirrel.powerUpState == "gems") {

                    if(!firstRun && --this.powerUpCount < 0) {

                        this.powerUpCount = 30 - aPowerUpBarData[2] * 2;

                        this.lastGemCount = -10;

                        this.nextBlockType = 11 + Math.floor(Math.random() * 4);

                    } else if(!firstRun || hud.tutState == 0) {

                        this.lastGemCount = 0;

                        this.nextBlockType = 6 + Math.floor(Math.random() * 5);

                    }

                }

            }

            var coinOffset = Math.random() * 2 - 1;

            if(firstRun && hud.tutState == 0 && Math.round(coinOffset) == 0) {

                coinOffset = -1;

            }

            this.aBranches.push({

                powerUpState: squirrel.powerUpState,

                count: this.segCount++,

                coinOffset: coinOffset,

                blockType: this.nextBlockType,

                gapState: tempGapState,

                startSkewFrame: startSkewFrame,

                skewFrame: skewFrame,

                curSkewOffset: curSkewOffset,

                xPos: xPos,

                yPos: 0,

                scale: 0,

                startHeightFactor: heightFactor,

                heightFactor: heightFactor

            });

            this.nextBlockType = 0;

        };

        Branch.prototype.resetBranchBase = function (_prevYPos, _prevScale) {

            if (typeof _prevYPos === "undefined") { _prevYPos = 0; }

            if (typeof _prevScale === "undefined") { _prevScale = 1; }

            this.aBranches[0].scale = 1;

            this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;

        };

        Branch.prototype.addHorizontal = function () {

            this.canAddBranch = false;

            var skewFrame = -1;

            var curSkewOffset = (this.aBranches[this.aBranches.length - 1].skewFrame - this.skewMidFrame) * this.skewOffset;

            var xPos = this.aBranches[this.aBranches.length - 1].xPos;

            var heightFactor = this.aBranches[this.aBranches.length - 1].startHeightFactor;

            heightFactor -= (this.aBranches[this.aBranches.length - 1].startHeightFactor - this.heightFactorTarg) / 2;

            this.aBranches[0].scale = 1;

            this.aBranches[0].yPos = canvas.height - (this.oBranchImgData.oData.spriteHeight * this.aBranches[0].heightFactor) * this.entireScale;

            this.aBranches.push({

                powerUpState: squirrel.powerUpState,

                count: this.segCount++,

                coinOffset: Math.random() * 2 - 1,

                blockType: 0,

                gapState: this.gapState,

                startSkewFrame: skewFrame,

                skewFrame: skewFrame,

                curSkewOffset: curSkewOffset,

                xPos: xPos,

                yPos: 0,

                scale: 0,

                startHeightFactor: heightFactor,

                heightFactor: heightFactor

            });

        };

        Branch.prototype.triggerTurn = function (_dir) {

            this.horizontalBranchState = 0;

            this.canAddBranch = true;

            this.canChangeBehaviour = true;

            this.justTurned = true;

            this.behaviourChangeTarg = Math.random() * 2;

            playSound("makeTurn");

            this.aBranches = new Array();

            var xPos = 0;

            var yPos = 0;

            var scale = 1;

            var curSkewOffset = 0;

            var skewFrame = this.skewMidFrame;

            this.heightFactorTarg = Math.random() * 1.5 - .5;

            var ran = Math.round(Math.random() * (this.segNum / 2) + (this.segNum / 3));

            for(var i = 0; i < this.segNum; i++) {

                if(i == 0) {

                    xPos = canvas.width / 2;

                    yPos = canvas.height - this.oBranchImgData.oData.spriteHeight * this.entireScale;

                    this.aBranches.push({

                        powerUpState: squirrel.powerUpState,

                        count: this.segCount++,

                        coinOffset: Math.random() * 2 - 1,

                        blockType: 0,

                        gapState: this.gapState,

                        startSkewFrame: skewFrame,

                        skewFrame: skewFrame,

                        curSkewOffset: curSkewOffset,

                        xPos: xPos,

                        yPos: yPos,

                        scale: scale,

                        startHeightFactor: .75,

                        heightFactor: .75

                    });

                } else {

                    if(i == ran) {

                        this.changeBehaviour();

                        if(this.horizontalBranchState > 0) {

                            this.addHorizontal();

                            break;

                        }

                    }

                    if(i < this.segNum / 4) {

                        this.addSegment(false);

                    } else {

                        this.addSegment();

                    }

                }

            }

            if(_dir == "right") {

                this.turnOffset = 1;

                this.turnTween = TweenMax.to(this, .4, {

                    turnOffset: 0,

                    ease: "Cubic.easeOut"

                });

                background.targX += 1500;

            } else {

                this.turnOffset = -1;

                this.turnTween = TweenMax.to(this, .4, {

                    turnOffset: 0,

                    ease: "Cubic.easeOut"

                });

                background.targX -= 1500;

            }

        };

        Branch.prototype.changeBehaviour = function () {

            var num = Math.floor(Math.random() * 9);

            if(firstRun && hud.tutState == 1) {

                num = 7;

            }

            this.lastGemCount = 0;

            switch(num) {

                case 0:

                    this.horizontalBranchState = 1;

                    this.canChangeBehaviour = false;

                    break;

                case 1:

                    this.horizontalBranchState = 2;

                    this.canChangeBehaviour = false;

                    break;

                case 2:

                    this.horizontalBranchState = 3;

                    this.canChangeBehaviour = false;

                    break;

                case 3:

                    this.gapState = 1;

                    this.gapInc = Math.floor(Math.random() * 5) + 3;

                    this.curveTarg = this.skewMidFrame;

                    this.canChangeBehaviour = false;

                    break;

                case 4:

                    this.nextBlockType = 1;

                    break;

                case 5:

                    this.nextBlockType = 2;

                    break;

                case 6:

                    this.nextBlockType = 3;

                    break;

                case 7:

                    this.nextBlockType = 4;

                    break;

                case 8:

                    this.nextBlockType = 5;

                    break;

            }

        };

        Branch.prototype.changeCurve = function () {

            this.curveTarg = Math.floor(Math.random() * 30);

        };

        Branch.prototype.changeHill = function () {

            if(!firstRun) {

                this.heightFactorTarg = Math.random() * 1.5 - .5;

            } else {

                this.heightFactorTarg = Math.random() * .75 - .5;

            }

        };

        Branch.prototype.update = function () {

            if(this.canChangeBehaviour && (!firstRun || hud.tutState == 1)) {

                this.behaviourChangeInc += delta;

                if(this.behaviourChangeInc > this.behaviourChangeTarg && this.lastGemCount > 5) {

                    this.behaviourChangeInc = 0;

                    this.behaviourChangeTarg = Math.random() * 1 + .7;

                    this.changeBehaviour();

                }

            }

            oGameData.distance = Math.round(oGameData.distance + (this.scrollSpeed / 10) * delta);

            this.curveChangeInc += delta;

            if(this.curveChangeInc > this.curveChangeTarg) {

                this.curveChangeInc = 0;

                this.curveChangeTarg = Math.random() * 3 + 1;

                this.changeCurve();

            }

            this.hillChangeInc += delta;

            if(this.hillChangeInc > this.hillChangeTarg) {

                this.hillChangeInc = 0;

                this.hillChangeTarg = Math.random() * 3 + 1;

                this.changeHill();

            }

            this.centreLine = (squirrel.leftSteer + squirrel.rightSteer) * 75 + canvas.width / 2;

            if(this.horizontalBranchState > 0 && this.aBranches.length == 2) {

                if((this.horizontalBranchState == 1 || this.horizontalBranchState == 3) && squirrel.leftSteer + squirrel.rightSteer < 0) {

                    this.triggerTurn("right");

                } else if((this.horizontalBranchState == 2 || this.horizontalBranchState == 3) && squirrel.leftSteer + squirrel.rightSteer > 0) {

                    this.triggerTurn("left");

                } else {

                }

            } else if(this.horizontalBranchState > 0 && this.aBranches.length <= 0) {

                squirrel.overGap = true;

            }

            if(this.aBranches.length > 0 && this.aBranches[0].yPos > canvas.height) {

                var prevYPos = this.aBranches[0].yPos - canvas.height;

                var prevScale = this.aBranches[0].scale * this.perspScaleFactor;

                this.aBranches.splice(0, 1);

                if(this.canAddBranch) {

                    if(this.horizontalBranchState > 0) {

                        this.addHorizontal();

                    } else {

                        this.addSegment(true, prevYPos, prevScale);

                    }

                } else {

                    if(this.aBranches.length > 0) {

                        this.resetBranchBase(prevYPos, prevScale);

                    }

                }

            }

        };

        Branch.prototype.render = function () {

            var id;

            for(var i = 0; i < this.aBranches.length; i++) {

                if(this.aBranches[i].skewFrame > -1) {

                    if(i == 0) {

                        this.aBranches[i].scale += (this.scrollSpeed / this.scaletoSpeedRatio) * delta;

                        this.aBranches[i].virtualXPos = this.centreLine;

                        this.aBranches[i].xPos += ((this.aBranches[i].virtualXPos - this.aBranches[i].xPos) * ((this.aBranches.length - i) / 25 + .5)) * delta;

                        this.aBranches[i].yPos += (this.scrollSpeed * this.aBranches[i].heightFactor) * delta;

                    } else {

                        if(i < this.skewMidFrame) {

                            if(this.aBranches[i].skewFrame < this.skewMidFrame - i) {

                                this.aBranches[i].skewFrame += 1;

                            } else if(this.aBranches[i].skewFrame > this.skewMidFrame + i) {

                                this.aBranches[i].skewFrame -= 1;

                            }

                            if(this.aBranches[i - 1].startSkewFrame < 60) {

                                this.aBranches[i].curSkewOffset = (this.aBranches[i - 1].skewFrame - this.skewMidFrame) * this.skewOffset;

                            } else {

                                this.aBranches[i].curSkewOffset = 0;

                            }

                        }

                        this.aBranches[i].scale = this.aBranches[i - 1].scale * this.perspScaleFactor;

                        this.aBranches[i].heightFactor = this.aBranches[i].startHeightFactor + (this.aBranches[i].scale * (1.5 - this.aBranches[i].startHeightFactor));

                        this.aBranches[i].virtualXPos = this.aBranches[i - 1].virtualXPos + (this.aBranches[i].curSkewOffset * this.aBranches[i - 1].scale);

                        this.aBranches[i].xPos += ((this.aBranches[i].virtualXPos - this.aBranches[i].xPos) * ((this.aBranches.length - i) / 15 + .5)) * delta;

                        this.aBranches[i].yPos = this.aBranches[i - 1].yPos - (((this.oBranchImgData.oData.spriteHeight - 1) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale;

                    }

                } else {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].height;

                    var horizXPos;

                    if(i == 0) {

                        this.aBranches[i].scale += this.scrollSpeed / this.scaletoSpeedRatio * delta;

                        this.aBranches[i].virtualXPos = this.centreLine;

                        this.aBranches[i].xPos += ((this.aBranches[i].virtualXPos - this.aBranches[i].xPos) * ((this.aBranches.length - i) / 25 + .5)) * delta;

                        this.aBranches[i].yPos += this.scrollSpeed * delta;

                    } else {

                        if(i < this.skewMidFrame) {

                            this.aBranches[i].curSkewOffset = (this.aBranches[i - 1].skewFrame - this.skewMidFrame) * this.skewOffset;

                        }

                        this.aBranches[i].scale = this.aBranches[i - 1].scale * this.perspScaleFactor;

                        this.aBranches[i].heightFactor = Math.max(this.aBranches[i].startHeightFactor + (this.aBranches[i].scale * (1.5 - this.aBranches[i].startHeightFactor)), .5);

                        this.aBranches[i].virtualXPos = this.aBranches[i - 1].virtualXPos + (this.aBranches[i].curSkewOffset * this.aBranches[i - 1].scale);

                        this.aBranches[i].xPos += ((this.aBranches[i].virtualXPos - this.aBranches[i].xPos) * ((this.aBranches.length - i) / 25 + .5)) * delta;

                        this.aBranches[i].yPos = this.aBranches[i - 1].yPos - (((bHeight - .5) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale;

                    }

                }

            }

            for(var i = this.aBranches.length - 1; i >= 0; i--) {

                if(this.aBranches[i].skewFrame > -1) {

                    if(i == 0) {

                        id = this.aBranches[i].skewFrame;

                        if(this.aBranches[i].startSkewFrame > 29) {

                            id = this.aBranches[i].startSkewFrame;

                        } else if(Math.floor(this.aBranches[i].count / 2) % 2 == 0) {

                            id += 30;

                        }

                        var imgX = (id * this.oBranchImgData.oData.spriteWidth) % this.oBranchImgData.img.width;

                        var imgY = Math.floor(id / (this.oBranchImgData.img.width / this.oBranchImgData.oData.spriteWidth)) * this.oBranchImgData.oData.spriteHeight;

                        if(this.aBranches[i].gapState == 0) {

                            ctx.drawImage(this.oBranchImgData.img, imgX, imgY, this.oBranchImgData.oData.spriteWidth, this.oBranchImgData.oData.spriteHeight, this.aBranches[i].xPos - ((this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[i].scale) * this.entireScale, this.aBranches[i].yPos, (this.oBranchImgData.oData.spriteWidth * this.aBranches[i].scale) * this.entireScale, ((this.oBranchImgData.oData.spriteHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                        }

                    } else {

                        id = this.aBranches[i].skewFrame;

                        if(this.aBranches[i].startSkewFrame > 29) {

                            id = this.aBranches[i].startSkewFrame;

                        } else if(this.aBranches[i].count % 2 != 0) {

                            id += 30;

                        }

                        var imgX = (id * this.oBranchImgData.oData.spriteWidth) % this.oBranchImgData.img.width;

                        var imgY = Math.floor(id / (this.oBranchImgData.img.width / this.oBranchImgData.oData.spriteWidth)) * this.oBranchImgData.oData.spriteHeight;

                        if(this.aBranches[i].gapState == 0) {

                            ctx.drawImage(this.oBranchImgData.img, imgX, imgY, this.oBranchImgData.oData.spriteWidth, this.oBranchImgData.oData.spriteHeight, this.aBranches[i].xPos - ((this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos, (this.oBranchImgData.oData.spriteWidth * this.aBranches[i].scale) * this.entireScale, Math.max(((this.oBranchImgData.oData.spriteHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, 1));

                        }

                    }

                } else {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["horiz" + this.horizontalBranchState]].height;

                    var horizXPos;

                    if(i == 0) {

                        horizXPos = bWidth / 2;

                        if(this.horizontalBranchState == 1) {

                            horizXPos = (this.oBranchImgData.oData.spriteWidth / 2);

                        } else if(this.horizontalBranchState == 2) {

                            horizXPos = bWidth - (this.oBranchImgData.oData.spriteWidth / 2);

                        }

                        ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos - (horizXPos * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos, (bWidth * this.aBranches[i].scale) * this.entireScale, ((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                    } else {

                        horizXPos = bWidth / 2;

                        if(this.horizontalBranchState == 1) {

                            horizXPos = (this.oBranchImgData.oData.spriteWidth / 2);

                        } else if(this.horizontalBranchState == 2) {

                            horizXPos = bWidth - (this.oBranchImgData.oData.spriteWidth / 2);

                        }

                        ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos - (horizXPos * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos, (bWidth * this.aBranches[i].scale) * this.entireScale, ((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                        var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].x;

                        var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].y;

                        var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].width;

                        var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.straightHoriz].height;

                        if(this.horizontalBranchState == 1) {

                            var xPos = this.aBranches[i].xPos + ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz1].width - this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25);

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, xPos, this.aBranches[i].yPos, Math.max(canvas.width - xPos, bWidth), Math.max(((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, 1));

                            var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].x;

                            var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].y;

                            var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].width;

                            var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignRight].height;

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos + (20 * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos - (bHeight * this.aBranches[i].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, (bWidth * this.aBranches[i].scale) * this.entireScale, (bHeight * this.aBranches[i].scale) * this.entireScale);

                        } else if(this.horizontalBranchState == 2) {

                            var xPos = this.aBranches[i].xPos - ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz2].width - this.oBranchImgData.oData.spriteWidth / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25);

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, xPos - Math.max(xPos, bWidth), this.aBranches[i].yPos, Math.max(xPos, bWidth), ((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                            var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].x;

                            var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].y;

                            var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].width;

                            var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignLeft].height;

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos + ((-20 - bWidth) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos - (bHeight * this.aBranches[i].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, (bWidth * this.aBranches[i].scale) * this.entireScale, (bHeight * this.aBranches[i].scale) * this.entireScale);

                        } else {

                            var xPos = this.aBranches[i].xPos + ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz3].width / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25);

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, xPos, this.aBranches[i].yPos, Math.max(canvas.width - xPos, bWidth), ((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                            xPos = this.aBranches[i].xPos - ((this.oBranchElementsImgData.oData.oAtlasData[oImageIds.horiz3].width / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25);

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, xPos - Math.max(xPos, bWidth), this.aBranches[i].yPos, Math.max(xPos, bWidth), ((bHeight * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale);

                            var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].x;

                            var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].y;

                            var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].width;

                            var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.turnSignT].height;

                            ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos - ((bWidth / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos - (bHeight * this.aBranches[i].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, (bWidth * this.aBranches[i].scale) * this.entireScale, (bHeight * this.aBranches[i].scale) * this.entireScale);

                        }

                    }

                }

            }

            for(var i = this.aBranches.length - 1; i >= 0; i--) {

                if((i == 0 || i == 1) && this.aBranches.length > 2) {

                    if(this.aBranches[i].gapState == 1) {

                        squirrel.overGap = true;

                    } else {

                        squirrel.overGap = false;

                    }

                }

                if(i == 0 && this.aBranches[i].blockType > 0 && squirrel.powerUpState != "invincible") {

                    switch(this.aBranches[i].blockType) {

                        case 1:

                            if((squirrel.checkHit(-1) || squirrel.checkHit(0)) && squirrel.actionState != "blocked") {

                                endGameEvent("block");

                            }

                            break;

                        case 2:

                            if((squirrel.checkHit(1) || squirrel.checkHit(0)) && squirrel.actionState != "blocked") {

                                endGameEvent("block");

                            }

                            break;

                        case 3:

                            if(squirrel.actionState != "ducking" && squirrel.actionState != "blocked") {

                                endGameEvent("block");

                            }

                            break;

                        case 4:

                            if(squirrel.actionState != "jumping" && squirrel.actionState != "falling" && squirrel.actionState != "blocked") {

                                endGameEvent("block");

                            }

                            break;

                        case 5:

                            if((squirrel.checkHit(0)) && squirrel.actionState != "blocked") {

                                endGameEvent("block");

                            }

                            break;

                        case 6:

                        case 7:

                        case 8:

                        case 9:

                        case 10:

                            break;

                    }

                }

                if(i < 2 && this.aBranches[i].blockType >= 6 && (this.aBranches[i].powerUpState == "magnet" || squirrel.checkHit(Math.round(this.aBranches[i].coinOffset)))) {

                    if(this.aBranches[i].blockType < 11) {

                        gemEvent(1);

                        addParticle("collectGem", this.aBranches[i].xPos - ((Math.round(this.aBranches[i].coinOffset) * 75) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), 550);

                    } else {

                        powerUpEvent(this.aBranches[i].blockType - 11);

                        addParticle("collectGem", this.aBranches[i].xPos - ((Math.round(this.aBranches[i].coinOffset) * 75) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), 550);

                    }

                    this.aBranches[i].blockType = 0;

                }

                if(this.aBranches[i].blockType > 0) {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[i].blockType]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[i].blockType]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[i].blockType]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["block" + this.aBranches[i].blockType]].height;

                    var coinOffset = 0;

                    if(this.aBranches[i].blockType >= 6) {

                        if(this.aBranches[i].powerUpState != "magnet") {

                            coinOffset = Math.round(this.aBranches[i].coinOffset) * 75;

                        } else {

                            coinOffset += (Math.round(this.aBranches[i].coinOffset) * 75) * (i / this.segNum);

                            coinOffset = -(squirrel.x - branch.aBranches[i].xPos) * (1 - (i / this.segNum));

                        }

                    }

                    ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos - ((bWidth / 2 + coinOffset) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos - (bHeight * this.aBranches[i].scale - (this.oBranchImgData.oData.spriteHeight / 2 * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, (bWidth * this.aBranches[i].scale) * this.entireScale, (bHeight * this.aBranches[i].scale) * this.entireScale);

                }

                if((this.aBranches[i].blockType == 0 || this.aBranches[i].blockType >= 5) && this.aBranches[i].skewFrame > -1 && this.aBranches[i].gapState == 0 && this.aBranches[i].startSkewFrame <= 29) {

                    var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[i].count % 4)]].x;

                    var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[i].count % 4)]].y;

                    var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[i].count % 4)]].width;

                    var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds["plant" + (this.aBranches[i].count % 4)]].height;

                    ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.aBranches[i].xPos - ((bWidth / 2) * this.aBranches[i].scale) * this.entireScale + this.turnOffset * (i * 25), this.aBranches[i].yPos - (bHeight * this.aBranches[i].scale - ((this.oBranchImgData.oData.spriteHeight / 2) * this.aBranches[i].scale) * this.aBranches[i].heightFactor) * this.entireScale, (bWidth * this.aBranches[i].scale) * this.entireScale, (bHeight * this.aBranches[i].scale) * this.entireScale);

                }

                if(i == 1 && squirrel.actionState != "blocked") {

                    squirrel.update();

                    squirrel.render();

                }

            }

            if(this.aBranches.length <= 1 || squirrel.actionState == "blocked") {

                squirrel.update();

                squirrel.render();

            }

        };

        return Branch;

    })();

    Elements.Branch = Branch;    

})(Elements || (Elements = {}));

var __extends = this.__extends || function (d, b) {

    function __() { this.constructor = d; }

    __.prototype = b.prototype;

    d.prototype = new __();

};

var Elements;

(function (Elements) {

    var Squirrel = (function (_super) {

        __extends(Squirrel, _super);

        function Squirrel() {

                _super.call(this, assetLib.getData("squirrel"), 25, 30, "falling");

            this.incY = 0;

            this.groundY = 550;

            this.leftSteer = 0;

            this.rightSteer = 0;

            this.allowRight = true;

            this.allowLeft = true;

            this.actionState = "running";

            this.overGap = false;

            this.rotInc = 0;

            this.blockX = 0;

            this.powerUpState = null;

            this.powerUpTimer = 0;

            this.flickerInc = 0;

            this.flickerState = false;

            this.oBranchElementsImgData = assetLib.getData("branchElements");

            this.x = canvas.width / 2;

            this.y = this.groundY - 200;

        }

        Squirrel.prototype.jump = function () {

            if(this.incY == 0) {

                this.incY = -15;

                playSound("jump");

                this.setAnimType("once", "jumping");

                this.animEndedFunc = function () {

                    this.setAnimType("loop", "falling");

                };

                this.actionState = "jumping";

            }

        };

        Squirrel.prototype.turn = function (_dir) {

            if(_dir == "left" && this.allowLeft) {

                this.leftSteer = 1;

                this.rightSteer = 0;

                if(this.actionState == "running") {

                    addParticle("dust", this.x, 625);

                    playSound("sideStep");

                }

                this.allowLeft = false;

                if(this.turnTween) {

                    this.turnTween.kill();

                }

                this.turnTween = TweenMax.to(this, .66 - branch.scrollSpeed / 5000, {

                    rightSteer: 0,

                    leftSteer: 0,

                    ease: "Cubic.easeOut",

                    delay: .46 - branch.scrollSpeed / 5000

                });

            } else if(_dir == "right" && this.allowRight) {

                this.leftSteer = 0;

                this.rightSteer = -1;

                if(this.actionState == "running") {

                    addParticle("dust", this.x, 625);

                    playSound("sideStep");

                }

                this.allowRight = false;

                if(this.turnTween) {

                    this.turnTween.kill();

                }

                this.turnTween = TweenMax.to(this, .66 - branch.scrollSpeed / 5000, {

                    rightSteer: 0,

                    leftSteer: 0,

                    ease: "Cubic.easeOut",

                    delay: .42 - branch.scrollSpeed / 7000

                });

            }

        };

        Squirrel.prototype.duck = function () {

            if(this.incY == 0 && this.animId != "ducking") {

                this.setAnimType("once", "ducking");

                playSound("duck");

                this.animEndedFunc = function () {

                    this.actionState = "running";

                    this.setAnimType("loop", "running");

                };

                this.actionState = "ducking";

            }

        };

        Squirrel.prototype.checkHit = function (_dir) {

            if(_dir == (this.leftSteer + this.rightSteer) || (branch.aBranches.length >= 3 && _dir == Math.round((branch.aBranches[2].xPos - this.x) / 120))) {

                return true;

            } else {

                return false;

            }

        };

        Squirrel.prototype.fallOff = function () {

            this.actionState = "falling";

            this.setAnimType("loop", "falling");

            this.incY = Math.max(this.incY, 20);

        };

        Squirrel.prototype.hitBlock = function () {

            this.actionState = "blocked";

            this.setAnimType("loop", "blocked");

        };

        Squirrel.prototype.update = function () {

            _super.prototype.updateAnimation.call(this, delta);

            if(this.powerUpState != null) {

                this.powerUpTimer -= delta;

                if(this.powerUpTimer < 0) {

                    playSound("powerUpEnd");

                    this.powerUpState = null;

                }

            }

            this.fps = branch.scrollSpeed / 32;

            this.y += this.incY;

            if(this.actionState != "blocked") {

                if(branch.aBranches.length > 3) {

                    this.x += (((branch.aBranches[2].xPos - (this.leftSteer + this.rightSteer) * 120) - this.x) * 5) * delta;

                }

                this.rotation = -(this.leftSteer + this.rightSteer) / 8;

            } else {

                this.rotation = 0;

            }

            if(this.y >= this.groundY && this.actionState != "falling" && this.actionState != "blocked") {

                this.incY = 0;

                this.y = this.groundY;

                if(this.animId == "jumping" || this.animId == "falling") {

                    this.setAnimType("loop", "running");

                    this.actionState = "running";

                    addParticle("dust", this.x, 625);

                }

            } else {

                this.incY += (20 + (branch.scrollSpeed / 40)) * delta;

            }

            if(this.y == this.groundY && this.overGap && this.actionState != "falling") {

                endGameEvent("fall");

            }

        };

        Squirrel.prototype.render = function () {

            if(this.actionState != "blocked" && this.actionState != "falling" && branch.aBranches[2] && branch.aBranches[0].gapState != 1 && branch.aBranches[1].gapState != 1 && branch.aBranches[2].gapState != 1) {

                var bX = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].x;

                var bY = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].y;

                var bWidth = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].width;

                var bHeight = this.oBranchElementsImgData.oData.oAtlasData[oImageIds.heroShadow].height;

                ctx.drawImage(this.oBranchElementsImgData.img, bX, bY, bWidth, bHeight, this.x - bWidth / 2, 605, bWidth, bHeight);

            }

            if(this.scaleX < 4) {

                if(this.powerUpState == "invincible") {

                    this.flickerInc -= delta;

                    if(this.flickerInc < 0) {

                        this.flickerState = !this.flickerState;

                        this.flickerInc = .1;

                    }

                    if(this.flickerState) {

                        if(squirrel.powerUpTimer > 2) {

                            this.alpha = .6;

                        } else {

                            this.alpha = 1;

                        }

                    } else {

                        this.alpha = .3;

                    }

                } else {

                    this.alpha = 1;

                }

                _super.prototype.render.call(this, ctx);

            }

        };

        return Squirrel;

    })(Utils.AnimSprite);

    Elements.Squirrel = Squirrel;    

})(Elements || (Elements = {}));

var Utils;

(function (Utils) {

    var SwipeDetect = (function () {

        function SwipeDetect() {

            this.startX = null;

            this.startY = null;

            this.isTracking = false;

            this.lastDir = null;

            this.curX = null;

            this.curY = null;

            this.resetInc = 0;

        }

        SwipeDetect.prototype.reset = function () {

            this.lastDir = null;

            this.resetInc = 0;

        };

        SwipeDetect.prototype.keyTrack = function (_dir) {

            this.lastDir = _dir;

        };

        SwipeDetect.prototype.getDir = function () {

            if(this.isTracking) {

                this.stopTrack(this.curX, this.curY, true);

            }

            return this.lastDir;

        };

        SwipeDetect.prototype.track = function (_x, _y) {

            this.curX = _x;

            this.curY = _y;

            if(this.startX == null) {

                this.startX = _x;

                this.startY = _y;

            }

            this.isTracking = true;

        };

        SwipeDetect.prototype.stopTrack = function (_x, _y, _skipShortCheck) {

            if (typeof _skipShortCheck === "undefined") { _skipShortCheck = false; }

            if(!_skipShortCheck) {

                var a = this.startY - _y;

                var b = this.startX - _x;

                var hyp = (a * a) + (b * b);

                if(hyp < 200 || this.startX == null) {

                    this.isTracking = false;

                    this.startX = this.startY = null;

                    return;

                }

            }

            var angle = Math.atan2(this.startY - _y, this.startX - _x) / radian;

            var dir;

            if(angle > 45 && angle < 135) {

                dir = 0;

                squirrel.jump();

                if(firstRun && hud.tutState == 1) {

                    hasVertAction = true;

                }

            } else if(angle > 135 || angle < -135) {

                dir = 1;

                squirrel.allowRight = true;

                squirrel.turn("right");

                if(firstRun && hud.tutState == 0) {

                    hasHorizAction = true;

                }

            } else if(angle > -135 && angle < -45) {

                dir = 2;

                squirrel.duck();

                if(firstRun && hud.tutState == 1) {

                    hasVertAction = true;

                }

            } else {

                dir = 3;

                squirrel.allowLeft = true;

                squirrel.turn("left");

                if(firstRun && hud.tutState == 0) {

                    hasHorizAction = true;

                }

            }

            this.isTracking = false;

            this.startX = this.startY = null;

            this.lastDir = dir;

        };

        return SwipeDetect;

    })();

    Utils.SwipeDetect = SwipeDetect;    

})(Utils || (Utils = {}));

var Utils;

(function (Utils) {

    var SaveDataHandler = (function () {

        function SaveDataHandler(_saveDataId) {

            this.dataGroupNum = 2;

            this.saveDataId = _saveDataId;

            this.clearData();

            this.setInitialData();

        }

        SaveDataHandler.prototype.clearData = function () {

            this.aLevelStore = new Array();

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

        };

        SaveDataHandler.prototype.resetData = function () {

            this.aLevelStore = new Array();

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.aLevelStore.push(0);

            this.saveData();

        };

        SaveDataHandler.prototype.setInitialData = function () {

            if(typeof (Storage) !== "undefined") {

                if(localStorage.getItem(this.saveDataId) != null && localStorage.getItem(this.saveDataId) != "") {

                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");

                    for(var a in this.aLevelStore) {

                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);

                    }

                } else {

                    this.resetData();

                }

            }

        };

        SaveDataHandler.prototype.setData = function (_levelNum, _aData) {

            for(var i = 0; i < _aData.length; i++) {

                if(this.aLevelStore.length == 0 || this.aLevelStore.length <= _levelNum * this.dataGroupNum + i) {

                    for(var j = 0; j < ((_levelNum * this.dataGroupNum) + i) - this.aLevelStore.length - 1; j++) {

                        this.aLevelStore.push(0);

                    }

                    this.aLevelStore.push(_aData[i]);

                } else {

                    this.aLevelStore[_levelNum * this.dataGroupNum + i] = _aData[i];

                }

            }

        };

        SaveDataHandler.prototype.getData = function (_levelNum, _id) {

            return this.aLevelStore[_levelNum * this.dataGroupNum + _id];

        };

        SaveDataHandler.prototype.saveData = function () {

            if(typeof (Storage) !== "undefined") {

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

    var Particle = (function (_super) {

        __extends(Particle, _super);

        function Particle(_asset, _x, _y) {

                _super.call(this, assetLib.getData(_asset), 23, 30, "explode");

            this.x = _x;

            this.y = _y;

            this.setAnimType("once", "explode");

            if(_asset == "collectGem") {

                TweenMax.to(this, .5, {

                    y: this.y - 50,

                    scaleX: 3,

                    scaleY: 3,

                    ease: "Quad.easeOut"

                });

            } else if(_asset == "dust") {

                TweenMax.to(this, .5, {

                    y: this.y + 100,

                    ease: "Quad.easeIn"

                });

            }

            this.animEndedFunc = function () {

                this.removeMe = true;

            };

        }

        Particle.prototype.update = function () {

            _super.prototype.updateAnimation.call(this, delta);

        };

        Particle.prototype.render = function () {

            _super.prototype.renderSimple.call(this, ctx);

        };

        return Particle;

    })(Utils.AnimSprite);

    Elements.Particle = Particle;    

})(Elements || (Elements = {}));

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

var aLangs = new Array("EN");

var curLang = "";

var isBugBrowser = false;

var isIE10 = false;

var delta;

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

    if(!muted && !manualPause) {

        Howler.unmute();

    }

}

function visiblePause() {

    Howler.mute();

}

window.addEventListener("load", function () {

    setTimeout(function () {

        resizeCanvas();

    }, 0);

    window.addEventListener("orientationchange", function () {

        setTimeout(function () {

            resizeCanvas();

        }, 500);

    }, false);

});

if(!isIE10 && (typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {

    audioType = 1;

    sound = new Howl({

        urls: [

            'audio/sound.ogg', 

            'audio/sound.m4a'

        ],

        sprite: {

            hitBlock: [

                0, 

                950

            ],

            gem0: [

                1000, 

                700

            ],

            gem1: [

                2000, 

                700

            ],

            gem2: [

                3000, 

                700

            ],

            gem3: [

                4000, 

                700

            ],

            click: [

                5000, 

                400

            ],

            collectPowerUp: [

                5500, 

                1200

            ],

            fall: [

                7000, 

                2000

            ],

            boost: [

                9500, 

                1200

            ],

            startGame: [

                11500, 

                1200

            ],

            jump: [

                13000, 

                800

            ],

            makeTurn: [

                14000, 

                700

            ],

            sideStep: [

                15000, 

                500

            ],

            duck: [

                16000, 

                600

            ],

            powerUpEnd: [

                17000, 

                600

            ]

        }

    });

    music = new Howl({

        urls: [

            'audio/music.ogg', 

            'audio/music.m4a'

        ],

        volume: .01,

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

var panelFrame;

var oLogoData = {

};

var oLogoBut;

var musicTween;

var oImageIds = {

};

var branch;

var squirrel;

var swipeState = 1;

var swipeDetect;

var radian = Math.PI / 180;

var controlState;

var oGameData = {

    distance: 0,

    curGemChain: 0,

    curGems: 0,

    boostNum: 0,

    totalGems: 0

};

var endGameSequence;

var aPowerUpBarData = new Array(0, 0, 0, 0);

var aPowerUpButsData = new Array(20, 20, 50, 50, 80, 80, 120, 120, 175, 175);

var saveDataHandler = new Utils.SaveDataHandler("hopdontstop1");

var aEffects;

var firstRun = true;

var hasHorizAction = false;

var hasVertAction = false;

loadPreAssets();

function initSplash() {

    gameState = "splash";

    resizeCanvas();

    if(audioType == 1 && !muted) {

        music.play();

    }

    initStartScreen();

}

function initStartScreen() {

    gameState = "start";

    userInput.removeHitArea("moreGames");

    if(audioType == 1) {

        if(musicTween) {

            musicTween.kill();

        }

        musicTween = TweenLite.to(music, 1, {

            volume: .2,

            ease: "Linear.easeNone"

        });

    }

    for(var i = 0; i < aPowerUpBarData.length; i++) {

        aPowerUpBarData[i] = saveDataHandler.aLevelStore[2 + i];

    }

    oGameData.totalGems = saveDataHandler.aLevelStore[0];

    levelScore = 0;

    totalScore = 0;

    levelNum = 0;

    background = new Elements.Background(assetLib.getData("background0"), canvas.width, canvas.height);

    background.renderState = "menuScroll";

    userInput.addHitArea("mute", butEventHandler, null, "rect", {

        aRect: [

            392, 

            0, 

            canvas.width, 

            53

        ]

    }, true);

    var oPlayBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            canvas.width / 2, 

            530

        ],

        id: oImageIds.playBut

    };

    var oMoreGamesBut = {

        oImgData: assetLib.getData("moreGamesBut"),

        aPos: [

            330, 

            655

        ],

        id: "none",

        scale: .25,

        noMove: true

    };

    var oCreditsBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            120, 

            655

        ],

        id: oImageIds.creditsBut,

        noMove: true

    };

    userInput.addHitArea("startGame", butEventHandler, null, "image", oPlayBut);

    userInput.addHitArea("moreGames", butEventHandler, null, "image", oMoreGamesBut);

    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);

    var aButs = new Array(oPlayBut, oMoreGamesBut, oCreditsBut);

    panel = new Elements.Panel(gameState, aButs);

    panel.startTween1();

    previousTime = new Date().getTime();

    updateStartScreenEvent();

}

function initCreditsScreen() {

    gameState = "credits";

    var oBackBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            48, 

            655

        ],

        id: oImageIds.backBut

    };

    var oResetDataBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            100, 

            45

        ],

        id: oImageIds.resetDataBut,

        noMove: true

    };

    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);

    userInput.addHitArea("resetData", butEventHandler, null, "image", oResetDataBut);

    var aButs = new Array(oBackBut, oResetDataBut);

    panel = new Elements.Panel(gameState, aButs);

    panel.startTween2();

    previousTime = new Date().getTime();

    updateCreditsScreenEvent();

}

function initGame() {

    gameState = "game";

    if(audioType == 1) {

        musicTween.kill();

        musicTween = TweenLite.to(music, 1, {

            volume: .4,

            ease: "Linear.easeNone"

        });

    }

    background = new Elements.Background(assetLib.getData("background0"), canvas.width, canvas.height);

    background.renderState = "game";

    hud = new Elements.Hud();

    squirrel = new Elements.Squirrel();

    branch = new Elements.Branch();

    userInput.addHitArea("pause", butEventHandler, null, "rect", {

        aRect: [

            325, 

            0, 

            387, 

            58

        ]

    }, true);

    userInput.addHitArea("swipe", butEventHandler, {

        isDraggable: true,

        multiTouch: true

    }, "rect", {

        aRect: [

            0, 

            60, 

            canvas.width, 

            canvas.height

        ]

    }, true);

    userInput.addKey("steerKeyRight", butEventHandler, null, 39);

    userInput.addKey("steerKeyLeft", butEventHandler, null, 37);

    userInput.addKey("keyUp", butEventHandler, null, 38);

    userInput.addKey("keyDown", butEventHandler, null, 40);

    controlState = "lean";

    swipeDetect = new Utils.SwipeDetect();

    oGameData.distance = 0;

    oGameData.curGemChain = 0;

    oGameData.curGems = 0;

    oGameData.boostNum = 0;

    endGameSequence = false;

    playSound("startGame");

    aEffects = new Array();

    previousTime = new Date().getTime();

    updateGameEvent();

}

function butEventHandler(_id, _oData) {

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

        case "startGame":

            playSound("click");

            userInput.removeHitArea("startGame");

            userInput.removeHitArea("moreGames");

            userInput.removeHitArea("credits");

            if(isMobile) {

            }

            initGame();

            break;

        case "credits":

            playSound("click");

            userInput.removeHitArea("showTutorial");

            userInput.removeHitArea("moreGames");

            userInput.removeHitArea("credits");

            if(isMobile) {

            }

            initCreditsScreen();

            break;

        case "backFromCredits":

            playSound("click");

            userInput.removeHitArea("backFromCredits");

            userInput.removeHitArea("resetData");

            initStartScreen();

            break;

        case "resetData":

            playSound("click");

            userInput.removeHitArea("backFromCredits");

            userInput.removeHitArea("resetData");

            saveDataHandler.resetData();

            initStartScreen();

            break;

        case "moreGames":

        case "moreGamesPause":

            playSound("click");

            var link;

            try  {

                link = (window).famobi.getMoreGamesButtonUrl();

            } catch (e) {

                link = "https://www.forestrygames.com/";

            }

            document.location.href = link;

            break;

        case "startGame":

            playSound("click");

            userInput.removeHitArea("startGame");

            initGame();

            break;

        case "steerKeyRight":

            if(_oData.isDown) {

                squirrel.turn("right");

                if(firstRun && hud.tutState == 0) {

                    hasHorizAction = true;

                }

            } else {

                squirrel.allowRight = true;

            }

            break;

        case "steerKeyLeft":

            if(_oData.isDown) {

                squirrel.turn("left");

                if(firstRun && hud.tutState == 0) {

                    hasHorizAction = true;

                }

            } else {

                squirrel.allowLeft = true;

            }

            break;

        case "swipe":

            if(_oData.isDown) {

                swipeDetect.track(_oData.x, _oData.y);

            } else {

                swipeDetect.stopTrack(_oData.x, _oData.y);

            }

            break;

        case "keyUp":

            if(_oData.isDown) {

                squirrel.jump();

                if(firstRun && hud.tutState == 1) {

                    hasVertAction = true;

                }

            }

            break;

        case "keyDown":

            if(_oData.isDown) {

                squirrel.duck();

                if(firstRun && hud.tutState == 1) {

                    hasVertAction = true;

                }

            }

            break;

        case "playFromEnd":

            playSound("click");

            userInput.removeHitArea("playFromEnd");

            userInput.removeHitArea("upgrade");

            initGame();

            break;

        case "upgrade":

            playSound("click");

            userInput.removeHitArea("playFromEnd");

            userInput.removeHitArea("upgrade");

            initUpgrade();

            break;

        case "powerUp0":

            if(oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[0]] && aPowerUpBarData[0] < 8) {

                playSound("click");

                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[0]];

                aPowerUpBarData[0]++;

                setPowerUpButs();

                saveDataHandler.aLevelStore[2] = aPowerUpBarData[0];

                saveDataHandler.aLevelStore[0] = oGameData.totalGems;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp1":

            if(oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[1]] && aPowerUpBarData[1] < 8) {

                playSound("click");

                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[1]];

                aPowerUpBarData[1]++;

                setPowerUpButs();

                saveDataHandler.aLevelStore[3] = aPowerUpBarData[1];

                saveDataHandler.aLevelStore[0] = oGameData.totalGems;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp2":

            if(oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[2]] && aPowerUpBarData[2] < 8) {

                playSound("click");

                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[2]];

                aPowerUpBarData[2]++;

                setPowerUpButs();

                saveDataHandler.aLevelStore[4] = aPowerUpBarData[2];

                saveDataHandler.aLevelStore[0] = oGameData.totalGems;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp3":

            if(oGameData.totalGems >= aPowerUpButsData[aPowerUpBarData[3]] && aPowerUpBarData[3] < 8) {

                playSound("click");

                oGameData.totalGems -= aPowerUpButsData[aPowerUpBarData[3]];

                aPowerUpBarData[3]++;

                setPowerUpButs();

                saveDataHandler.aLevelStore[5] = aPowerUpBarData[3];

                saveDataHandler.aLevelStore[0] = oGameData.totalGems;

                saveDataHandler.saveData();

            }

            break;

        case "backFromUpgrade":

            playSound("click");

            userInput.removeHitArea("backFromUpgrade");

            userInput.removeHitArea("playFromUpgrade");

            userInput.removeHitArea("powerUp0");

            userInput.removeHitArea("powerUp1");

            userInput.removeHitArea("powerUp2");

            userInput.removeHitArea("powerUp3");

            initGameEnd();

            break;

        case "playFromUpgrade":

            playSound("click");

            userInput.removeHitArea("backFromUpgrade");

            userInput.removeHitArea("playFromUpgrade");

            userInput.removeHitArea("powerUp0");

            userInput.removeHitArea("powerUp1");

            userInput.removeHitArea("powerUp2");

            userInput.removeHitArea("powerUp3");

            initGame();

            break;

        case "mute":

            if(!manualPause) {

                playSound("click");

                toggleMute();

            }

            break;

        case "pause":

        case "resumeFromPause":

            playSound("click");

            toggleManualPause();

            break;

        case "quitFromPause":

            playSound("click");

            toggleManualPause();

            userInput.removeHitArea("pause");

            userInput.removeHitArea("swipe");

            userInput.removeKey("steerKeyRight");

            userInput.removeKey("steerKeyLeft");

            userInput.removeKey("keyUp");

            userInput.removeKey("keyDown");

            userInput.removeHitArea("quitFromPause");

            userInput.removeHitArea("resumeFromPause");

            userInput.removeHitArea("moreGamesPause");

            levelScore = 0;

            totalScore = 0;

            initStartScreen();

            break;

    }

}

function initGameEnd() {

    gameState = "gameOver";

    if(audioType == 1) {

        musicTween.kill();

        musicTween = TweenLite.to(music, 2, {

            volume: .2,

            ease: "Linear.easeNone"

        });

    }

    saveDataHandler.aLevelStore[0] = oGameData.totalGems;

    if(oGameData.distance > saveDataHandler.aLevelStore[1]) {

        saveDataHandler.aLevelStore[1] = oGameData.distance;

    }

    saveDataHandler.saveData();

    userInput.removeHitArea("pause");

    userInput.removeHitArea("swipe");

    userInput.removeKey("steerKeyRight");

    userInput.removeKey("steerKeyLeft");

    userInput.removeKey("keyUp");

    userInput.removeKey("keyDown");

    background.renderState = "menuScroll";

    var oUpgradeBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            150, 

            621

        ],

        id: oImageIds.upgradeBut,

        noMove: true

    };

    var oplayBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            360, 

            615

        ],

        id: oImageIds.playBut

    };

    userInput.addHitArea("upgrade", butEventHandler, null, "image", oUpgradeBut);

    userInput.addHitArea("playFromEnd", butEventHandler, null, "image", oplayBut);

    var aButs = new Array(oUpgradeBut, oplayBut);

    panel = new Elements.Panel(gameState, aButs);

    panel.startTween1();

    try  {

        (window).famobi.submitHighscore(0, totalScore);

    } catch (e) {

    }

    previousTime = new Date().getTime();

    updateGameOver();

}

function initUpgrade() {

    gameState = "upgrade";

    if(audioType == 1) {

        musicTween.kill();

        musicTween = TweenLite.to(music, .5, {

            volume: .2,

            ease: "Linear.easeNone"

        });

    }

    var oBackBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            97, 

            621

        ],

        id: oImageIds.backBut,

        noMove: true

    };

    var oPlayBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            360, 

            615

        ],

        id: oImageIds.playBut

    };

    var oPowerUp0But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            234, 

            216

        ],

        id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "On"],

        num: 0,

        noMove: true,

        tweenVert: true

    };

    var oPowerUp1But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            234, 

            326

        ],

        id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "On"],

        num: 1,

        noMove: true,

        tweenVert: true

    };

    var oPowerUp2But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            234, 

            436

        ],

        id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "On"],

        num: 2,

        noMove: true,

        tweenVert: true

    };

    var oPowerUp3But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            234, 

            546

        ],

        id: oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "On"],

        num: 3,

        noMove: true,

        tweenVert: true

    };

    userInput.addHitArea("backFromUpgrade", butEventHandler, null, "image", oBackBut);

    userInput.addHitArea("playFromUpgrade", butEventHandler, null, "image", oPlayBut);

    userInput.addHitArea("powerUp0", butEventHandler, null, "image", oPowerUp0But);

    userInput.addHitArea("powerUp1", butEventHandler, null, "image", oPowerUp1But);

    userInput.addHitArea("powerUp2", butEventHandler, null, "image", oPowerUp2But);

    userInput.addHitArea("powerUp3", butEventHandler, null, "image", oPowerUp3But);

    var aButs = new Array(oPowerUp0But, oPowerUp1But, oPowerUp2But, oPowerUp3But, oBackBut, oPlayBut);

    panel = new Elements.Panel(gameState, aButs);

    setPowerUpButs();

    panel.startTween1();

    previousTime = new Date().getTime();

    updateUpgrade();

}

function setPowerUpButs() {

    if(aPowerUpButsData[aPowerUpBarData[0]] > oGameData.totalGems || aPowerUpBarData[0] >= 8) {

        panel.aButs[0].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "Off"];

    } else {

        panel.aButs[0].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[0]] + "On"];

    }

    if(aPowerUpButsData[aPowerUpBarData[1]] > oGameData.totalGems || aPowerUpBarData[1] >= 8) {

        panel.aButs[1].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "Off"];

    } else {

        panel.aButs[1].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[1]] + "On"];

    }

    if(aPowerUpButsData[aPowerUpBarData[2]] > oGameData.totalGems || aPowerUpBarData[2] >= 8) {

        panel.aButs[2].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "Off"];

    } else {

        panel.aButs[2].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[2]] + "On"];

    }

    if(aPowerUpButsData[aPowerUpBarData[3]] > oGameData.totalGems || aPowerUpBarData[3] >= 8) {

        panel.aButs[3].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "Off"];

    } else {

        panel.aButs[3].id = oImageIds["upgradeBut" + aPowerUpButsData[aPowerUpBarData[3]] + "On"];

    }

}

function gemEvent(_num) {

    if(_num > 0) {

        oGameData.curGems += _num;

        oGameData.totalGems += _num;

        oGameData.curGemChain += _num;

        playSound("gem" + Math.floor(Math.random() * 4));

        hud.collectGem();

    }

}

function powerUpEvent(_type) {

    playSound("collectPowerUp");

    switch(_type) {

        case 0:

            squirrel.powerUpState = "invincible";

            squirrel.powerUpTimer = 10;

            break;

        case 1:

            squirrel.powerUpState = "magnet";

            squirrel.powerUpTimer = 10;

            break;

        case 2:

            squirrel.powerUpState = "gems";

            squirrel.powerUpTimer = 5;

            break;

        case 3:

            gemEvent((5 + oGameData.boostNum * 3) - oGameData.curGemChain);

            break;

    }

}

function endGameEvent(_type) {

    userInput.removeHitArea("pause");

    endGameSequence = true;

    TweenMax.to(branch, 1, {

        scrollSpeed: 0,

        ease: "Quad.easeOut",

        onComplete: function () {

            initGameEnd();

        }

    });

    switch(_type) {

        case "fall":

            squirrel.fallOff();

            if(musicTween) {

                musicTween.kill();

            }

            musicTween = TweenLite.to(music, .1, {

                volume: 0,

                ease: "Linear.easeNone"

            });

            playSound("fall");

            break;

        case "block":

            if(musicTween) {

                musicTween.kill();

            }

            musicTween = TweenLite.to(music, .1, {

                volume: 0,

                ease: "Linear.easeNone"

            });

            squirrel.hitBlock();

            branch.scrollSpeed = 0;

            addParticle("hitBlock", squirrel.x, squirrel.y);

            playSound("hitBlock");

            break;

    }

}

function addParticle(_asset, _x, _y) {

    var particle = new Elements.Particle(_asset, _x, _y);

    switch(_asset) {

        case "collectGem":

            particle.scaleX = particle.scaleY = 1;

            break;

        case "dust":

            particle.scaleX = particle.scaleY = 3;

            particle.scaleY = 3;

            break;

        case "hitBlock":

            particle.scaleX = particle.scaleY = 4;

            break;

    }

    aEffects.push(particle);

}

function updateGameEvent() {

    if(manualPause || rotatePause || gameState != "game") {

        return;

    }

    delta = getDelta();

    background.update();

    background.render();

    branch.update();

    branch.render();

    if(swipeDetect.lastDir != null) {

        swipeDetect.resetInc += delta;

        if(swipeDetect.resetInc > .5) {

            swipeDetect.reset();

        }

    }

    for(var i = 0; i < aEffects.length; i++) {

        aEffects[i].update();

        aEffects[i].render();

        if(aEffects[i].removeMe) {

            aEffects.splice(i, 1);

            i -= 1;

        }

    }

    hud.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateGameEvent);

}

function updateCreditsScreenEvent() {

    if(rotatePause || gameState != "credits") {

        return;

    }

    delta = getDelta();

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateCreditsScreenEvent);

}

function updateGameOver() {

    if(rotatePause || gameState != "gameOver") {

        return;

    }

    delta = getDelta();

    background.update();

    background.render();

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateGameOver);

}

function updateUpgrade() {

    if(rotatePause || gameState != "upgrade") {

        return;

    }

    delta = getDelta();

    background.update();

    background.render();

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateUpgrade);

}

function updateSplashScreenEvent() {

    if(rotatePause || gameState != "splash") {

        return;

    }

    delta = getDelta();

    splashTimer += delta;

    if(splashTimer > 2.5) {

        if(audioType == 1 && !muted) {

            music.play();

        }

        initStartScreen();

        return;

    }

    splash.render(ctx, delta);

    requestAnimFrame(updateSplashScreenEvent);

}

function updateStartScreenEvent() {

    if(rotatePause || gameState != "start") {

        return;

    }

    delta = getDelta();

    background.update();

    background.render();

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateStartScreenEvent);

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

    if(aLangs.length > 1) {

        preAssetLib = new Utils.AssetLoader(curLang, [

            {

                id: "langSelect",

                file: "images/langSelect.jpg"

            }

        ], ctx, canvas.width, canvas.height, false);

        preAssetLib.onReady(initLangSelect);

    } else {

        curLang = aLangs[0];

        preAssetLib = new Utils.AssetLoader(curLang, [

            {

                id: "preloadImage",

                file: "images/preloadImage.jpg"

            }

        ], ctx, canvas.width, canvas.height, false);

        preAssetLib.onReady(initLoadAssets);

    }

}

function initLangSelect() {

    var oImgData = preAssetLib.getData("langSelect");

    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height / 2);

    var butSize = 140;

    for(var i = 0; i < aLangs.length; i++) {

        var px = canvas.width / 2 - (butSize * aLangs.length) / 2 + i * butSize;

        var py = canvas.height / 2 - butSize / 2;

        userInput.addHitArea("langSelect", butEventHandler, {

            lang: aLangs[i]

        }, "rect", {

            aRect: [

                px, 

                py, 

                px + butSize, 

                py + 140

            ]

        });

    }

}

function initLoadAssets() {

    var oImgData = preAssetLib.getData("preloadImage");

    ctx.drawImage(oImgData.img, 0, 0);

    loadAssets();

}

function loadAssets() {

    var mg;

    try  {

        mg = (window).famobi.getMoreGamesButtonImage();

    } catch (e) {

        mg = "images/More_Games600x253_onWhite.png";

    }

    assetLib = new Utils.AssetLoader(curLang, [

        {

            id: "background0",

            file: "images/background0.jpg"

        }, 

        {

            id: "rotateDeviceMessage",

            file: "images/rotateDeviceMessage.jpg"

        }, 

        {

            id: "splash",

            file: "images/splashScreen.jpg"

        }, 

        {

            id: "hud",

            file: "images/hud.png"

        }, 

        {

            id: "uiButs",

            file: "images/uiButs.png",

            oAtlasData: {

                id0: {

                    x: 190,

                    y: 0,

                    width: 164,

                    height: 156

                },

                id1: {

                    x: 0,

                    y: 70,

                    width: 188,

                    height: 68

                },

                id10: {

                    x: 305,

                    y: 294,

                    width: 59,

                    height: 62

                },

                id11: {

                    x: 0,

                    y: 350,

                    width: 59,

                    height: 62

                },

                id12: {

                    x: 183,

                    y: 350,

                    width: 59,

                    height: 62

                },

                id13: {

                    x: 61,

                    y: 350,

                    width: 59,

                    height: 62

                },

                id14: {

                    x: 244,

                    y: 294,

                    width: 59,

                    height: 62

                },

                id15: {

                    x: 251,

                    y: 230,

                    width: 59,

                    height: 62

                },

                id16: {

                    x: 190,

                    y: 230,

                    width: 59,

                    height: 62

                },

                id17: {

                    x: 0,

                    y: 0,

                    width: 188,

                    height: 68

                },

                id2: {

                    x: 0,

                    y: 280,

                    width: 188,

                    height: 68

                },

                id3: {

                    x: 0,

                    y: 140,

                    width: 188,

                    height: 68

                },

                id4: {

                    x: 0,

                    y: 280,

                    width: 188,

                    height: 68

                },

                id5: {

                    x: 0,

                    y: 210,

                    width: 188,

                    height: 68

                },

                id6: {

                    x: 190,

                    y: 158,

                    width: 76,

                    height: 70

                },

                id7: {

                    x: 268,

                    y: 158,

                    width: 59,

                    height: 62

                },

                id8: {

                    x: 122,

                    y: 350,

                    width: 59,

                    height: 62

                },

                id9: {

                    x: 312,

                    y: 222,

                    width: 59,

                    height: 62

                }

            }

        }, 

        {

            id: "panels",

            file: "images/panels_450x700.png"

        }, 

        {

            id: "numbersWhite",

            file: "images/numbersWhite_24x37.png"

        }, 

        {

            id: "numbersOrange",

            file: "images/numbersOrange_17x24.png"

        }, 

        {

            id: "muteBut",

            file: "images/mute_58x56.png"

        }, 

        {

            id: "branches",

            file: "images/branches_222x42.png"

        }, 

        {

            id: "branchElements",

            file: "images/branchElements.png",

            oAtlasData: {

                id0: {

                    x: 0,

                    y: 244,

                    width: 748,

                    height: 121

                },

                id1: {

                    x: 0,

                    y: 367,

                    width: 745,

                    height: 121

                },

                id10: {

                    x: 952,

                    y: 563,

                    width: 76,

                    height: 101

                },

                id11: {

                    x: 904,

                    y: 460,

                    width: 76,

                    height: 101

                },

                id12: {

                    x: 899,

                    y: 357,

                    width: 76,

                    height: 101

                },

                id13: {

                    x: 0,

                    y: 938,

                    width: 250,

                    height: 43

                },

                id14: {

                    x: 246,

                    y: 983,

                    width: 241,

                    height: 41

                },

                id15: {

                    x: 489,

                    y: 950,

                    width: 230,

                    height: 44

                },

                id16: {

                    x: 0,

                    y: 983,

                    width: 244,

                    height: 45

                },

                id17: {

                    x: 680,

                    y: 578,

                    width: 201,

                    height: 64

                },

                id18: {

                    x: 750,

                    y: 244,

                    width: 147,

                    height: 222

                },

                id19: {

                    x: 252,

                    y: 950,

                    width: 171,

                    height: 25

                },

                id2: {

                    x: 0,

                    y: 121,

                    width: 758,

                    height: 121

                },

                id20: {

                    x: 489,

                    y: 996,

                    width: 171,

                    height: 25

                },

                id21: {

                    x: 760,

                    y: 204,

                    width: 36,

                    height: 38

                },

                id22: {

                    x: 425,

                    y: 950,

                    width: 31,

                    height: 24

                },

                id23: {

                    x: 628,

                    y: 915,

                    width: 129,

                    height: 26

                },

                id24: {

                    x: 863,

                    y: 644,

                    width: 87,

                    height: 119

                },

                id25: {

                    x: 877,

                    y: 0,

                    width: 87,

                    height: 119

                },

                id26: {

                    x: 863,

                    y: 765,

                    width: 87,

                    height: 119

                },

                id27: {

                    x: 874,

                    y: 886,

                    width: 87,

                    height: 119

                },

                id28: {

                    x: 352,

                    y: 728,

                    width: 279,

                    height: 106

                },

                id29: {

                    x: 352,

                    y: 836,

                    width: 274,

                    height: 112

                },

                id3: {

                    x: 0,

                    y: 0,

                    width: 758,

                    height: 119

                },

                id30: {

                    x: 760,

                    y: 0,

                    width: 115,

                    height: 202

                },

                id31: {

                    x: 0,

                    y: 490,

                    width: 443,

                    height: 111

                },

                id32: {

                    x: 0,

                    y: 603,

                    width: 425,

                    height: 123

                },

                id33: {

                    x: 899,

                    y: 252,

                    width: 81,

                    height: 103

                },

                id34: {

                    x: 899,

                    y: 121,

                    width: 81,

                    height: 129

                },

                id35: {

                    x: 759,

                    y: 915,

                    width: 113,

                    height: 108

                },

                id4: {

                    x: 633,

                    y: 703,

                    width: 228,

                    height: 210

                },

                id5: {

                    x: 445,

                    y: 490,

                    width: 233,

                    height: 211

                },

                id6: {

                    x: 0,

                    y: 728,

                    width: 350,

                    height: 208

                },

                id7: {

                    x: 680,

                    y: 490,

                    width: 222,

                    height: 86

                },

                id8: {

                    x: 952,

                    y: 769,

                    width: 76,

                    height: 101

                },

                id9: {

                    x: 952,

                    y: 666,

                    width: 76,

                    height: 101

                }

            }

        }, 

        {

            id: "squirrel",

            file: "images/hero_154x198.png",

            oAnims: {

                running: [

                    0, 

                    1, 

                    2, 

                    3, 

                    4, 

                    5, 

                    6, 

                    7

                ],

                jumping: [

                    0, 

                    1, 

                    2, 

                    3, 

                    8, 

                    9, 

                    10, 

                    10, 

                    11, 

                    11, 

                    12, 

                    12, 

                    12

                ],

                falling: [

                    13

                ],

                ducking: [

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

                    16, 

                    15

                ],

                blocked: [

                    8, 

                    9, 

                    10, 

                    11, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13, 

                    13

                ]

            }

        }, 

        {

            id: "hitBlock",

            file: "images/hitBlock_156x139.png",

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

                    10

                ]

            }

        }, 

        {

            id: "collectGem",

            file: "images/collectGem_107x99.png",

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

                    10

                ]

            }

        }, 

        {

            id: "dust",

            file: "images/dust_49x47.png",

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

                    10

                ]

            }

        }, 

        {

            id: "topFlare",

            file: "images/topFlare.png"

        }, 

        {

            id: "boostShade",

            file: "images/boostShade.png"

        }, 

        {

            id: "moreGamesBut",

            file: mg

        }

    ], ctx, canvas.width, canvas.height);

    oImageIds.playBut = "id0";

    oImageIds.creditsBut = "id1";

    oImageIds.quitBut = "id2";

    oImageIds.moreGamesBut = "id3";

    oImageIds.quitBut = "id4";

    oImageIds.upgradeBut = "id5";

    oImageIds.backBut = "id6";

    oImageIds.upgradeBut20On = "id7";

    oImageIds.upgradeBut50On = "id8";

    oImageIds.upgradeBut80On = "id9";

    oImageIds.upgradeBut120On = "id10";

    oImageIds.upgradeBut175On = "id11";

    oImageIds.upgradeBut20Off = "id12";

    oImageIds.upgradeBut50Off = "id13";

    oImageIds.upgradeBut80Off = "id14";

    oImageIds.upgradeBut120Off = "id15";

    oImageIds.upgradeBut175Off = "id16";

    oImageIds.resetDataBut = "id17";

    oImageIds.horiz1 = "id0";

    oImageIds.horiz2 = "id1";

    oImageIds.horiz3 = "id2";

    oImageIds.straightHoriz = "id3";

    oImageIds.block1 = "id4";

    oImageIds.block2 = "id5";

    oImageIds.block3 = "id6";

    oImageIds.block4 = "id7";

    oImageIds.block5 = "id18";

    oImageIds.block6 = "id8";

    oImageIds.block7 = "id9";

    oImageIds.block8 = "id10";

    oImageIds.block9 = "id11";

    oImageIds.block10 = "id12";

    oImageIds.plant0 = "id13";

    oImageIds.plant1 = "id14";

    oImageIds.plant2 = "id15";

    oImageIds.plant3 = "id16";

    oImageIds.heroShadow = "id17";

    oImageIds.chainBar0 = "id19";

    oImageIds.chainBar1 = "id20";

    oImageIds.chainBarGem = "id21";

    oImageIds.cm = "id22";

    oImageIds.upgradeBar = "id23";

    oImageIds.block11 = "id24";

    oImageIds.block12 = "id25";

    oImageIds.block13 = "id26";

    oImageIds.block14 = "id27";

    oImageIds.tutMobile0 = "id28";

    oImageIds.tutMobile1 = "id29";

    oImageIds.tutHand = "id30";

    oImageIds.tutDesktop0 = "id31";

    oImageIds.tutDesktop1 = "id32";

    oImageIds.turnSignRight = "id33";

    oImageIds.turnSignLeft = "id34";

    oImageIds.turnSignT = "id35";

    assetLib.onReady(initSplash);

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

    if(audioType == 1) {

        sound.play(_id);

    }

}

function toggleMute() {

    muted = !muted;

    if(audioType == 1) {

        if(muted) {

            Howler.mute();

        } else {

            Howler.unmute();

        }

    } else if(audioType == 2) {

        if(muted) {

            music.pause();

        } else {

            music.play();

        }

    }

    renderMuteBut();

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

    ctx.drawImage(oImgData.img, imgX, imgY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight, 388, 4, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight);

}

function toggleManualPause() {

    if(!manualPause) {

        manualPause = true;

        pauseCoreOn();

        var oQuitBut = {

            oImgData: assetLib.getData("uiButs"),

            aPos: [

                canvas.width / 2, 

                500

            ],

            id: oImageIds.quitBut

        };

        var oResumeBut = {

            oImgData: assetLib.getData("uiButs"),

            aPos: [

                canvas.width / 2, 

                350

            ],

            id: oImageIds.playBut

        };

        var oMoreGamesBut = {

            oImgData: assetLib.getData("moreGamesBut"),

            aPos: [

                canvas.width / 2, 

                580

            ],

            id: "none",

            scale: .25,

            noMove: true

        };

        var aButs = new Array(oQuitBut, oResumeBut, oMoreGamesBut);

        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);

        userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", oResumeBut);

        userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", oMoreGamesBut);

        panel = new Elements.Panel("pause", aButs);

        panel.render(ctx);

        userInput.addHitArea("pause", butEventHandler, null, "rect", {

            aRect: [

                325, 

                0, 

                387, 

                58

            ]

        }, true);

    } else {

        manualPause = false;

        userInput.removeHitArea("quitFromPause");

        userInput.removeHitArea("resumeFromPause");

        userInput.removeHitArea("moreGamesPause");

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

    userInput.removeHitArea("quitFromPause");

    userInput.removeHitArea("resumeFromPause");

    userInput.removeHitArea("moreGamesPause");

    pauseCoreOff();

}

function pauseCoreOn() {

    if(audioType == 1) {

        Howler.mute();

    } else if(audioType == 2) {

        music.pause();

    }

    switch(gameState) {

        case "game":

            userInput.removeHitArea("swipe");

            userInput.removeKey("steerKeyRight");

            userInput.removeKey("steerKeyLeft");

            userInput.removeKey("keyUp");

            userInput.removeKey("keyDown");

            break;

    }

}

function pauseCoreOff() {

    if(audioType == 1) {

        if(!muted) {

            Howler.unmute();

        }

    } else if(audioType == 2) {

        if(!muted) {

            music.play();

        }

    }

    previousTime = new Date().getTime();

    userInput.pauseIsOn = false;

    switch(gameState) {

        case "splash":

            updateSplashScreenEvent();

            break;

        case "start":

            initStartScreen();

            break;

        case "credits":

            initCreditsScreen();

            break;

        case "game":

            if(!manualPause) {

                userInput.addHitArea("pause", butEventHandler, null, "rect", {

                    aRect: [

                        325, 

                        0, 

                        387, 

                        58

                    ]

                }, true);

                userInput.addHitArea("swipe", butEventHandler, {

                    isDraggable: true,

                    multiTouch: true

                }, "rect", {

                    aRect: [

                        0, 

                        60, 

                        canvas.width, 

                        canvas.height

                    ]

                }, true);

                userInput.addKey("steerKeyRight", butEventHandler, null, 39);

                userInput.addKey("steerKeyLeft", butEventHandler, null, 37);

                userInput.addKey("keyUp", butEventHandler, null, 38);

                userInput.addKey("keyDown", butEventHandler, null, 40);

                updateGameEvent();

            } else {

                manualPause = false;

                updateGameEvent();

                toggleManualPause();

            }

            break;

        case "gameOver":

            initGameEnd();

            break;

        case "upgrade":

            initUpgrade();

            break;

    }

}

