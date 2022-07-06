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

            this.topLeftX = this.canvasWidth / 2 - _canvasWidth / 8;

            this.topLeftY = 230;

            if(this.showBar) {

                ctx.strokeStyle = "#333646";

                ctx.lineWidth = 2;

                ctx.fillStyle = "#F5A343";

                ctx.moveTo(this.topLeftX, this.topLeftY);

                ctx.lineTo(this.topLeftX + _canvasWidth / 4, this.topLeftY + 0);

                ctx.lineTo(this.topLeftX + _canvasWidth / 4, this.topLeftY + 20);

                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20);

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

                }

                ++_this.assetsLoaded;

                if(_this.showBar) {

                    ctx.fillRect(_this.topLeftX + 2, _this.topLeftY + 2, ((_this.canvasWidth / 4 - 4) / _this.totalAssets) * _this.assetsLoaded, 16);

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

                            _ctx.restore();

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

            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);

            _ctx.restore();

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

            var aTouchIdentifiers = new Array();

            switch(_type) {

                case "image":

                    var aRect;

                    aRect = new Array(_oAreaData.aPos[0] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2), _oAreaData.aPos[1] - (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2), _oAreaData.aPos[0] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].width / 2), _oAreaData.aPos[1] + (_oAreaData.oImgData.oData.oAtlasData[_oAreaData.id].height / 2));

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

            this.targY = 0;

            this.incY = 0;

            this.oImgData = _oImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

        }

        Background.prototype.updateScroll = function (_delta) {

            this.incY += 5 * _delta;

        };

        Background.prototype.renderScroll = function (_ctx) {

            var segs = 100;

            _ctx.drawImage(this.oImgData.img, 0, 0);

            for(var i = 0; i < segs; i++) {

                _ctx.drawImage(this.oImgData.img, i * (this.canvasWidth / segs), 0, this.canvasWidth / segs, this.canvasHeight, i * (this.canvasWidth / segs), Math.sin(this.incY + i / 20) * 5, this.canvasWidth / segs, this.canvasHeight);

            }

        };

        Background.prototype.render = function (_ctx) {

            _ctx.drawImage(this.oImgData.img, 0, 0);

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

        function Panel(_oPanelsImgData, _oUiElementsImgData, _oPositionImgData, _oNumbersImgData, _panelType, _aButs, _canvasWidth, _canvasHeight) {

            this.timer = .3;

            this.endTime = 0;

            this.oScoreData = {

            };

            this.posY = 0;

            this.numberSpace = 30;

            this.incY = 0;

            this.highlight = {

                x: 0,

                y: 0

            };

            this.aPowerUpBarPos = new Array({

                x: 63,

                y: 245

            }, {

                x: 233,

                y: 175

            }, {

                x: 403,

                y: 245

            }, {

                x: 573,

                y: 175

            });

            this.oPanelsImgData = _oPanelsImgData;

            this.oUiElementsImgData = _oUiElementsImgData;

            this.oPositionImgData = _oPositionImgData;

            this.oNumbersImgData = _oNumbersImgData;

            this.panelType = _panelType;

            this.aButs = _aButs;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

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

                    var id = 0;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    break;

                case "credits":

                    var id = 4;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    break;

                case "levelComplete":

                    var id = 2;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    id = this.oScoreData.racePos;

                    var imgX = (id * this.oPositionImgData.oData.spriteWidth) % this.oPositionImgData.img.width;

                    var imgY = Math.floor(id / (this.oPositionImgData.img.width / this.oPositionImgData.oData.spriteWidth)) * this.oPositionImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPositionImgData.img, imgX, imgY, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight, 352 - this.oPositionImgData.oData.spriteWidth / 2, 114 - this.oPositionImgData.oData.spriteHeight / 2 + this.posY, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight);

                    var num = this.oScoreData.winnings;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 390 + i * this.numberSpace, 180 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = this.oScoreData.levelScore;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 355 + i * this.numberSpace, 236 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = this.oScoreData.totalScore;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 386 + i * (this.numberSpace / 2), 369 + this.posY, this.oNumbersImgData.oData.spriteWidth / 2, Math.round(this.oNumbersImgData.oData.spriteHeight / 2));

                    }

                    break;

                case "upgrade":

                    var id = 3;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    var num = this.oScoreData.winnings;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 42 + i * this.numberSpace, 7 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);

                    }

                    var num = this.oScoreData.totalScore;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 386 + i * (this.numberSpace / 2), 369 + this.posY, this.oNumbersImgData.oData.spriteWidth / 2, Math.round(this.oNumbersImgData.oData.spriteHeight / 2));

                    }

                    for(var i = 0; i < this.oScoreData.aPowerUpBarData.length; i++) {

                        id = this.oScoreData.aPowerUpBarData[i];

                        var bX = this.oUiElementsImgData.oData.oAtlasData["upgrade" + id].x;

                        var bY = this.oUiElementsImgData.oData.oAtlasData["upgrade" + id].y;

                        var bWidth = this.oUiElementsImgData.oData.oAtlasData["upgrade" + id].width;

                        var bHeight = this.oUiElementsImgData.oData.oAtlasData["upgrade" + id].height;

                        _ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, this.aPowerUpBarPos[i].x - bWidth / 2, this.aPowerUpBarPos[i].y - bHeight / 2 + this.posY, bWidth, bHeight);

                    }

                    break;

                case "map":

                    var id = 1;

                    var imgX = (id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;

                    var imgY = Math.floor(id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;

                    _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY + 1, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight - 2, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);

                    var num = this.oScoreData.totalScore;

                    for(var i = 0; i < num.toString().length; i++) {

                        id = parseFloat(num.toString().charAt(i));

                        var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;

                        var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 386 + i * (this.numberSpace / 2), 369 + this.posY, this.oNumbersImgData.oData.spriteWidth / 2, Math.round(this.oNumbersImgData.oData.spriteHeight / 2));

                    }

                    break;

                case "pause":

                    _ctx.fillStyle = "rgba(0, 0, 0, 0.75)";

                    _ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

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

                if(!this.aButs[i].noFloat) {

                    floatY = Math.sin(this.incY + i * 45) * 3;

                } else {

                    floatY = -this.posY;

                    offsetPosY = 0;

                }

                if(i % 2 == 0) {

                }

                var bX = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].x;

                var bY = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].y;

                var bWidth = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].width;

                var bHeight = this.aButs[i].oImgData.oData.oAtlasData[this.aButs[i].id].height;

                _ctx.drawImage(this.aButs[i].oImgData.img, bX, bY, bWidth, bHeight, this.aButs[i].aPos[0] - bWidth / 2 + offsetPosY, this.aButs[i].aPos[1] - bHeight / 2 - floatY, bWidth, bHeight);

            }

            if(this.panelType == "map") {

                var id;

                for(var i = 0; i < aMapPointData.length; i++) {

                    if(saveDataHandler.aLevelStore[i * 3] == 2) {

                        id = saveDataHandler.aLevelStore[i * 3 + 1];

                        var imgX = (id * this.oPositionImgData.oData.spriteWidth) % this.oPositionImgData.img.width;

                        var imgY = Math.floor(id / (this.oPositionImgData.img.width / this.oPositionImgData.oData.spriteWidth)) * this.oPositionImgData.oData.spriteHeight;

                        _ctx.drawImage(this.oPositionImgData.img, imgX, imgY, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight, aMapPointData[i][0] - this.oPositionImgData.oData.spriteWidth / 2 + offsetPosY, aMapPointData[i][1] - this.oPositionImgData.oData.spriteHeight / 2 - floatY, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight);

                    }

                }

                _ctx.save();

                _ctx.translate(this.highlight.x - 2 + offsetPosY, this.highlight.y - 2.5 - floatY);

                _ctx.globalAlpha = Math.abs(Math.sin(this.incY / 1.5));

                var bX = this.oUiElementsImgData.oData.oAtlasData["levelHighlight"].x;

                var bY = this.oUiElementsImgData.oData.oAtlasData["levelHighlight"].y;

                var bWidth = this.oUiElementsImgData.oData.oAtlasData["levelHighlight"].width;

                var bHeight = this.oUiElementsImgData.oData.oAtlasData["levelHighlight"].height;

                _ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth / 2, -bHeight / 2, bWidth, bHeight);

                _ctx.restore();

            }

        };

        return Panel;

    })();

    Elements.Panel = Panel;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var Hud = (function () {

        function Hud(_oHudImgData, _oUiElementsImgData, _oPositionImgData, _canvasWidth, _canvasHeight) {

            this.speed = 0;

            this.raceProgress = 0;

            this.oHudImgData = _oHudImgData;

            this.oUiElementsImgData = _oUiElementsImgData;

            this.oPositionImgData = _oPositionImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

        }

        Hud.prototype.render = function (_ctx) {

            if(!nitroMode) {

                _ctx.drawImage(this.oHudImgData.img, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight);

            } else {

                _ctx.drawImage(this.oHudImgData.img, 0, this.oHudImgData.oData.spriteHeight, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight, 0, 0, this.oHudImgData.oData.spriteWidth, this.oHudImgData.oData.spriteHeight);

            }

            _ctx.save();

            _ctx.translate(71, 69);

            _ctx.rotate(speed / 95 - 2.5);

            var bX = this.oUiElementsImgData.oData.oAtlasData["needle"].x;

            var bY = this.oUiElementsImgData.oData.oAtlasData["needle"].y;

            var bWidth = this.oUiElementsImgData.oData.oAtlasData["needle"].width;

            var bHeight = this.oUiElementsImgData.oData.oAtlasData["needle"].height;

            _ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, -bWidth + 10, -bHeight / 2, bWidth, bHeight);

            _ctx.restore();

            var bX = this.oUiElementsImgData.oData.oAtlasData["helmet"].x;

            var bY = this.oUiElementsImgData.oData.oAtlasData["helmet"].y;

            var bWidth = this.oUiElementsImgData.oData.oAtlasData["helmet"].width;

            var bHeight = this.oUiElementsImgData.oData.oAtlasData["helmet"].height;

            _ctx.drawImage(this.oUiElementsImgData.img, bX, bY, bWidth, bHeight, 228 + this.raceProgress * (395 - 228) - bWidth / 2, 30 - bHeight / 2, bWidth, bHeight);

            var imgX = (racePos * this.oPositionImgData.oData.spriteWidth) % this.oPositionImgData.img.width;

            var imgY = Math.floor(racePos / (this.oPositionImgData.img.width / this.oPositionImgData.oData.spriteWidth)) * this.oPositionImgData.oData.spriteHeight;

            _ctx.drawImage(this.oPositionImgData.img, imgX, imgY, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight, 169 - this.oPositionImgData.oData.spriteWidth / 2, 46 - this.oPositionImgData.oData.spriteHeight / 2, this.oPositionImgData.oData.spriteWidth, this.oPositionImgData.oData.spriteHeight);

        };

        return Hud;

    })();

    Elements.Hud = Hud;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var Road = (function () {

        function Road(_oSkylineImgData, _oFogImgData, _oRoadImgData, _oGroundImgData, _levelTheme, _levelNum, _canvasWidth, _canvasHeight, _callback) {

            this.segNum = 400;

            this.minWidth = 100;

            this.maxWidth = 900;

            this.steerX = 0;

            this.horizon = 200;

            this.scrollY = 0;

            this.scrollX = 0;

            this.hillAmount = 0;

            this.curveAmount = 0;

            this.aScenery = new Array();

            this.aEnemyCars = new Array();

            this.sceneryInc = 0;

            this.enemyInc = 0;

            this.nitroInc = 0;

            this.aRowData = new Array();

            this.sceneryDir = 0;

            this.enemyIncTarg = Math.random() * 1000 + 500;

            this.nitro = null;

            this.bridgeRow = 0;

            this.bridgeType = 3;

            this.carSpace = Math.random() * 100 + 50;

            this.roadScaleMultiplier = 1;

            this.oSkylineImgData = _oSkylineImgData;

            this.oFogImgData = _oFogImgData;

            this.oRoadImgData = _oRoadImgData;

            this.oGroundImgData = _oGroundImgData;

            this.levelTheme = _levelTheme;

            this.levelNum = _levelNum;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            if(this.levelTheme == "city") {

                this.roadScaleMultiplier = 1.176;

            } else if(this.levelTheme == "desert") {

                this.roadScaleMultiplier = 1.429;

            }

            this.callback = _callback;

            for(var i = 0; i < this.segNum; i++) {

                this.aRowData.push({

                    y: 0,

                    scale: 0

                });

            }

            for(var i = 0; i < 20; i++) {

                this.addScenery();

                this.aScenery[i].rowNum = Math.floor(this.segNum / 20) * i;

            }

        }

        Road.prototype.addNitro = function () {

            this.nitro = new Elements.Nitro(assetLib.getData("scenery"), "nitro", canvas.width, canvas.height);

            this.nitro.y = this.horizon + this.hillAmount * 100;

        };

        Road.prototype.addScenery = function () {

            var ran = Math.floor(Math.random() * 3);

            var scenery;

            this.sceneryDir++;

            if(this.bridgeRow < 20 && this.sceneryDir % 10 == 0) {

                this.bridgeRow++;

                ran = this.bridgeType;

            }

            switch(ran) {

                case 0:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), this.levelTheme + "0", this.sceneryDir % 2, canvas.width, canvas.height);

                    break;

                case 1:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), this.levelTheme + "1", this.sceneryDir % 2, canvas.width, canvas.height);

                    break;

                case 2:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), this.levelTheme + "2", this.sceneryDir % 2, canvas.width, canvas.height);

                    break;

                case 3:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), "start", 2, canvas.width, canvas.height);

                    break;

                case 4:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), "bridge", 2, canvas.width, canvas.height);

                    break;

                case 5:

                    scenery = new Elements.Scenery(assetLib.getData("scenery"), "finish", 2, canvas.width, canvas.height);

                    break;

            }

            scenery.y = this.horizon + this.hillAmount * 100;

            this.aScenery.push(scenery);

        };

        Road.prototype.addEnemyCar = function (_fromFront) {

            if (typeof _fromFront === "undefined") { _fromFront = true; }

            var eCar;

            eCar = new Elements.EnemyCar(assetLib.getData("enemyCar"), canvas.width, canvas.height);

            if(_fromFront) {

            } else {

                eCar.rowNum = this.segNum - 1;

                if(this.steerX < 0) {

                    eCar.driftInc = 30;

                } else {

                    eCar.driftInc = -30;

                }

                eCar.driftPower = 1000;

            }

            this.carSpace = Math.random() * 100 + 50;

            this.aEnemyCars.push(eCar);

        };

        Road.prototype.update = function (_speed, _steerX, _curveAmount, _hillAmount, _delta) {

            this.steerX += _steerX * _delta;

            this.speed = _speed;

            this.delta = _delta;

            this.sceneryInc += this.speed * this.delta;

            if(this.sceneryInc > 5) {

                this.sceneryInc = 0;

                this.addScenery();

            }

            if(!nitroMode) {

                this.nitroInc += this.speed * this.delta;

            } else {

                this.nitroInc = 0;

            }

            if(this.nitroInc > 5000) {

                this.nitroInc = 0;

                this.addNitro();

            }

            if(this.steerX > 600 / this.roadScaleMultiplier) {

                this.steerX = 600 / this.roadScaleMultiplier;

                nitroMode = false;

            } else if(this.steerX < -600 / this.roadScaleMultiplier) {

                this.steerX = -600 / this.roadScaleMultiplier;

                nitroMode = false;

            }

            this.scrollY -= _speed * _delta;

            if(this.scrollY < 0) {

                this.scrollY += 500;

            }

            this.hillAmount = _hillAmount;

            this.curveAmount = _curveAmount;

            this.scrollX += (this.curveAmount * (_speed / 1.5)) * _delta;

            if(this.scrollX < 0) {

                this.scrollX += 700;

            }

        };

        Road.prototype.freeToAddCar = function () {

            for(var i = this.aEnemyCars.length - 1; i >= 0; i--) {

                if(this.aEnemyCars[i].rowNum < this.carSpace) {

                    return false;

                }

            }

            return true;

        };

        Road.prototype.render = function (_ctx) {

            _ctx.drawImage(this.oSkylineImgData.img, this.scrollX % this.canvasWidth, 0, this.canvasWidth, this.canvasHeight, 0, this.hillAmount * 130 - 120, this.canvasWidth, this.canvasHeight);

            _ctx.drawImage(this.oGroundImgData.img, 0, 0, this.canvasWidth, this.canvasHeight, 0, this.horizon + this.hillAmount * 100, this.canvasWidth, this.canvasHeight);

            var segHeightBefore = 500 / this.segNum;

            var rowHeight = 0;

            for(var i = 0; i < this.segNum; i++) {

                this.tempInc = i;

                this.easeInc = 1 * (this.tempInc /= this.segNum) * this.tempInc * this.tempInc * this.tempInc * this.tempInc * this.tempInc + 0;

                this.nextRow = i + 1;

                this.segHeightAfter = (1 * (this.nextRow /= this.segNum) * this.nextRow * this.nextRow * this.nextRow * this.nextRow * this.nextRow + 0) - this.easeInc;

                this.curve = (this.segNum - i) * this.curveAmount * 1.5;

                this.aRowData[i].x = this.steerX * this.easeInc + this.canvasWidth / 2 - (((this.easeInc + this.segHeightAfter) * 2) * this.oRoadImgData.oData.spriteWidth) / 2 + this.curve - (this.hillAmount + 1) * 10 - 5;

                this.aRowData[i].y = this.horizon + (this.hillAmount * 100) + (this.easeInc * (250 + (this.hillAmount * -100)));

                this.aRowData[i].scale = ((this.easeInc + this.segHeightAfter) * 2) * this.oRoadImgData.oData.spriteWidth + 30;

                if(rowHeight == 0) {

                    this.rowId = i;

                }

                rowHeight += this.segHeightAfter * (250 + (this.hillAmount * -100));

                if(rowHeight > 1) {

                    _ctx.drawImage(this.oRoadImgData.img, 0, this.rowId * segHeightBefore + this.scrollY, this.oRoadImgData.oData.spriteWidth, segHeightBefore, this.aRowData[this.rowId].x, this.aRowData[this.rowId].y, this.aRowData[this.rowId].scale, rowHeight + 1);

                    rowHeight = 0;

                }

            }

            var fogHeight = this.canvasHeight - (this.horizon + this.hillAmount * 100);

            _ctx.drawImage(this.oFogImgData.img, 0, 0, this.canvasWidth, this.canvasHeight / 2, 0, this.horizon + this.hillAmount * 100 - 8 * (fogHeight / (this.canvasHeight / 2)), this.canvasWidth, fogHeight + 8 * (fogHeight / (this.canvasHeight / 2)));

            for(var i = this.aEnemyCars.length - 1; i >= 0; i--) {

                this.aEnemyCars[i].x = this.aRowData[Math.floor(this.aEnemyCars[i].rowNum)].x + this.aRowData[Math.floor(this.aEnemyCars[i].rowNum)].scale * this.aEnemyCars[i].sideMultiplier;

                this.aEnemyCars[i].y = this.aRowData[Math.floor(this.aEnemyCars[i].rowNum)].y;

                this.aEnemyCars[i].scale = ((this.aRowData[Math.floor(this.aEnemyCars[i].rowNum)].scale - 30) * this.roadScaleMultiplier + 30) / 780;

                this.aEnemyCars[i].update(this.steerX, this.curveAmount, this.hillAmount, this.delta);

                this.aEnemyCars[i].render(_ctx);

                this.aEnemyCars[i].rowNum += ((this.speed - this.aEnemyCars[i].speed) * this.delta) * .6;

                if(this.aEnemyCars[i].y > 345 + this.hillAmount * 20 && this.aEnemyCars[i].x < this.canvasWidth / 2 + 80 && this.aEnemyCars[i].x > this.canvasWidth / 2 - 80) {

                    if(this.aEnemyCars[i].canHit) {

                        this.aEnemyCars[i].canHit = false;

                        if(this.aEnemyCars[i].y > 380 + this.hillAmount * 20) {

                            this.aEnemyCars[i].speed = 0;

                        }

                        this.callback("hitEnemyCar", {

                            bounceX: (1 / 75) * (this.aEnemyCars[i].x - this.canvasWidth / 2)

                        });

                    }

                } else {

                    this.aEnemyCars[i].canHit = true;

                }

                if(this.aEnemyCars[i].rowNum >= this.segNum) {

                    this.aEnemyCars.splice(i, 1);

                    if(startTimer <= 4) {

                        racePos--;

                        playSound("overtake");

                    }

                } else if(this.aEnemyCars[i].rowNum < 0) {

                    this.aEnemyCars.splice(i, 1);

                    carReleasedNum++;

                }

            }

            if(this.nitro) {

                this.nitro.x = this.aRowData[Math.floor(this.nitro.rowNum)].x + this.aRowData[Math.floor(this.nitro.rowNum)].scale * this.nitro.sideMultiplier;

                this.nitro.y = this.aRowData[Math.floor(this.nitro.rowNum)].y;

                this.nitro.scale = ((this.aRowData[Math.floor(this.nitro.rowNum)].scale - 30) * this.roadScaleMultiplier + 30) / 730;

                this.nitro.render(_ctx);

                this.nitro.rowNum += ((this.speed - this.nitro.speed) * this.delta) * .6;

                if(this.nitro.y > 345 + this.hillAmount * 20 && this.nitro.x < this.canvasWidth / 2 + 65 && this.nitro.x > this.canvasWidth / 2 - 65) {

                    this.nitro.rowNum = -1;

                    this.callback("hitNitro");

                }

                if(this.nitro.rowNum >= this.segNum || this.nitro.rowNum < 0) {

                    this.nitro = null;

                }

            }

            for(var i = this.aScenery.length - 1; i >= 0; i--) {

                this.aScenery[i].x = this.aRowData[Math.floor(this.aScenery[i].rowNum)].x + this.aRowData[Math.floor(this.aScenery[i].rowNum)].scale * this.aScenery[i].sideMultiplier;

                this.aScenery[i].y = this.aRowData[Math.floor(this.aScenery[i].rowNum)].y;

                this.aScenery[i].scale = (((this.aRowData[Math.floor(this.aScenery[i].rowNum)].scale - 30) * this.roadScaleMultiplier + 30) - 10) / 450;

                this.aScenery[i].render(_ctx);

                this.aScenery[i].rowNum += (this.speed * this.delta) * .8;

                if(this.aScenery[i].rowNum >= this.segNum) {

                    this.aScenery.splice(i, 1);

                }

            }

        };

        return Road;

    })();

    Elements.Road = Road;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var UserCar = (function () {

        function UserCar(_oCarImgData, _canvasWidth, _canvasHeight) {

            this.offsetX = 0;

            this.offsetY = 0;

            this.steerFrame = 1;

            this.oCarImgData = _oCarImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            this.x = this.canvasWidth / 2;

            this.y = 360;

        }

        UserCar.prototype.update = function (_speed, _steerX, _curveAmount, _hillAmount, _steerDir, _delta) {

            this.offsetY = _hillAmount * 8;

            this.offsetX = -_steerX / 120 + _curveAmount * 20;

            this.steerFrame = _steerDir + 1;

            this.y = 360 + _hillAmount * 10;

        };

        UserCar.prototype.render = function (_ctx) {

            _ctx.drawImage(this.oCarImgData.img, this.steerFrame * this.oCarImgData.oData.spriteWidth, 0, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.oCarImgData.oData.spriteWidth / 2 + this.offsetX * 1.7, this.y - this.oCarImgData.oData.spriteHeight / 2 + this.offsetY * 2, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight);

            _ctx.drawImage(this.oCarImgData.img, 3 * this.oCarImgData.oData.spriteWidth, 0, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.oCarImgData.oData.spriteWidth / 2 + this.offsetX, this.y - this.oCarImgData.oData.spriteHeight / 2 + this.offsetY, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight);

            var b = 4;

            if(nitroMode) {

                b = 5;

            }

            _ctx.drawImage(this.oCarImgData.img, b * this.oCarImgData.oData.spriteWidth, 0, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.oCarImgData.oData.spriteWidth / 2, this.y - this.oCarImgData.oData.spriteHeight / 2, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight);

        };

        return UserCar;

    })();

    Elements.UserCar = UserCar;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var EnemyCar = (function () {

        function EnemyCar(_oCarImgData, _canvasWidth, _canvasHeight) {

            this.offsetX = 0;

            this.offsetY = 0;

            this.canHit = true;

            this.driftInc = Math.random() * 100;

            this.driftPower = Math.random() * 3 + 1;

            this.colour = Math.floor(Math.random() * 4);

            this.oCarImgData = _oCarImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            this.scale = 0.01;

            this.rowNum = 0;

            this.speed = enemySpeed;

        }

        EnemyCar.prototype.update = function (_steerX, _curveAmount, _hillAmount, _delta) {

            this.offsetY = (_hillAmount * -8) * this.scale;

            this.offsetX = (_steerX + (this.sideMultiplier - .5) * 1200) / 20 + _curveAmount * -15;

            this.driftInc += _delta / this.driftPower;

            this.sideMultiplier = (Math.sin(this.driftInc) + 1) * .2 + .3;

        };

        EnemyCar.prototype.render = function (_ctx) {

            var imgX = (this.colour * this.oCarImgData.oData.spriteWidth) % this.oCarImgData.img.width;

            var imgY = Math.floor(this.colour / (this.oCarImgData.img.width / this.oCarImgData.oData.spriteWidth)) * this.oCarImgData.oData.spriteHeight;

            _ctx.drawImage(this.oCarImgData.img, imgX, imgY, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.scale * (this.oCarImgData.oData.spriteWidth / 2 + this.offsetX * 1.7), this.y - this.scale * (this.oCarImgData.oData.spriteHeight * .75 + this.offsetY * 2), this.scale * this.oCarImgData.oData.spriteWidth, this.scale * this.oCarImgData.oData.spriteHeight);

            var imgX = ((this.colour + 4) * this.oCarImgData.oData.spriteWidth) % this.oCarImgData.img.width;

            var imgY = Math.floor((this.colour + 4) / (this.oCarImgData.img.width / this.oCarImgData.oData.spriteWidth)) * this.oCarImgData.oData.spriteHeight;

            _ctx.drawImage(this.oCarImgData.img, imgX, imgY, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.scale * (this.oCarImgData.oData.spriteWidth / 2 + this.offsetX), this.y - this.scale * (this.oCarImgData.oData.spriteHeight * .75 + this.offsetY), this.scale * this.oCarImgData.oData.spriteWidth, this.scale * this.oCarImgData.oData.spriteHeight);

            var imgX = ((this.colour + 8) * this.oCarImgData.oData.spriteWidth) % this.oCarImgData.img.width;

            var imgY = Math.floor((this.colour + 8) / (this.oCarImgData.img.width / this.oCarImgData.oData.spriteWidth)) * this.oCarImgData.oData.spriteHeight;

            _ctx.drawImage(this.oCarImgData.img, imgX, imgY, this.oCarImgData.oData.spriteWidth, this.oCarImgData.oData.spriteHeight, this.x - this.scale * (this.oCarImgData.oData.spriteWidth / 2), this.y - this.scale * (this.oCarImgData.oData.spriteHeight * .75), this.scale * this.oCarImgData.oData.spriteWidth, Math.round(this.scale * this.oCarImgData.oData.spriteHeight));

        };

        return EnemyCar;

    })();

    Elements.EnemyCar = EnemyCar;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var Scenery = (function () {

        function Scenery(_oImgData, _id, _dir, _canvasWidth, _canvasHeight) {

            this.oImgData = _oImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            if(_dir == 0) {

                this.sideMultiplier = -Math.random() * .8 - .15;

            } else if(_dir == 1) {

                this.sideMultiplier = Math.random() * .8 + 1.15;

            } else {

                this.sideMultiplier = .5;

            }

            this.id = _id;

            this.scale = 0.01;

            this.rowNum = 0;

        }

        Scenery.prototype.render = function (_ctx) {

            var bX = this.oImgData.oData.oAtlasData[this.id].x;

            var bY = this.oImgData.oData.oAtlasData[this.id].y;

            var bWidth = this.oImgData.oData.oAtlasData[this.id].width;

            var bHeight = this.oImgData.oData.oAtlasData[this.id].height;

            _ctx.drawImage(this.oImgData.img, bX, bY, bWidth, bHeight, this.x - (this.scale * bWidth) / 2, this.y - this.scale * bHeight, this.scale * bWidth, this.scale * bHeight);

        };

        return Scenery;

    })();

    Elements.Scenery = Scenery;    

})(Elements || (Elements = {}));

var Elements;

(function (Elements) {

    var Nitro = (function () {

        function Nitro(_oImgData, _id, _canvasWidth, _canvasHeight) {

            this.speed = 300;

            this.oImgData = _oImgData;

            this.canvasWidth = _canvasWidth;

            this.canvasHeight = _canvasHeight;

            this.id = _id;

            this.sideMultiplier = Math.random() * .7 + .15;

            this.scale = 0.01;

            this.rowNum = 0;

        }

        Nitro.prototype.render = function (_ctx) {

            var bX = this.oImgData.oData.oAtlasData[this.id].x;

            var bY = this.oImgData.oData.oAtlasData[this.id].y;

            var bWidth = this.oImgData.oData.oAtlasData[this.id].width;

            var bHeight = this.oImgData.oData.oAtlasData[this.id].height;

            _ctx.drawImage(this.oImgData.img, bX, bY, bWidth, bHeight, this.x - (this.scale * bWidth) / 2, this.y - this.scale * bHeight, this.scale * bWidth, this.scale * bHeight);

        };

        return Nitro;

    })();

    Elements.Nitro = Nitro;    

})(Elements || (Elements = {}));

var Utils;

(function (Utils) {

    var SaveDataHandler = (function () {

        function SaveDataHandler(_saveDataId, _totalLevels) {

            this.saveDataId = _saveDataId;

            this.totalLevels = _totalLevels;

            this.clearData();

            this.setInitialData();

        }

        SaveDataHandler.prototype.clearData = function () {

            this.aLevelStore = new Array();

            this.aLevelStore.push(1);

            this.aLevelStore.push(20);

            this.aLevelStore.push(0);

            for(var i = 0; i < this.totalLevels - 1; i++) {

                this.aLevelStore.push(0);

                this.aLevelStore.push(20);

                this.aLevelStore.push(0);

            }

            for(var i = 0; i < 4; i++) {

                this.aLevelStore.push(0);

            }

            this.aLevelStore.push(0);

        };

        SaveDataHandler.prototype.setInitialData = function () {

            if(typeof (Storage) !== "undefined") {

                if(localStorage.getItem(this.saveDataId) != null) {

                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");

                    for(var a in this.aLevelStore) {

                        this.aLevelStore[a] = parseInt(this.aLevelStore[a]);

                    }

                } else {

                    this.saveData();

                }

            }

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

var requestAnimFrame = (function () {

    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {

        window.setTimeout(callback, 1000 / 60, new Date().getTime());

    };

})();

var previousTime;

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext("2d");

canvas.width = 700;

canvas.height = 400;

var canvasX;

var canvasY;

var canvasScaleX;

var canvasScaleY;

var div = document.getElementById('viewporter');

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

        viewporter.refresh();

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

if(!isIE10 && (typeof (window).AudioContext != 'undefined' || typeof (window).webkitAudioContext != 'undefined' || navigator.userAgent.indexOf('Android') == -1)) {

    audioType = 1;

    sound = new Howl({

        urls: [

            'audio/sound.ogg', 

            'audio/sound.m4a'

        ],

        sprite: {

            start1: [

                0, 

                700

            ],

            start2: [

                1000, 

                700

            ],

            crash1: [

                2000, 

                1200

            ],

            crash2: [

                3500, 

                1000

            ],

            crash3: [

                5000, 

                1200

            ],

            nitroStart: [

                7000, 

                2500

            ],

            nitroEnd: [

                10000, 

                1500

            ],

            click: [

                12000, 

                300

            ],

            overtake: [

                13000, 

                1000

            ],

            undertake: [

                14500, 

                700

            ],

            offRoad: [

                16000, 

                2000

            ],

            raceEnd: [

                19000, 

                2000

            ],

            skid1: [

                22000, 

                800

            ],

            skid2: [

                23500, 

                700

            ],

            skid3: [

                25500, 

                1100

            ],

            upgrade: [

                27500, 

                1000

            ],

            silence: [

                700, 

                200

            ]

        }

    });

    music = new Howl({

        urls: [

            'audio/music.ogg', 

            'audio/music.m4a'

        ],

        volume: .2,

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

var road;

var userCar;

var speed;

var steerX;

var targSteerX;

var rightSteer;

var leftSteer;

var turnRate;

var curveTween;

var hillTween;

var curveAmount;

var tweenScaleTimer;

var maxSpeed;

var flexMaxSpeed = maxSpeed;

var nitroSpeed = 650;

var nitroTimer;

var rightSteerSimple = 0;

var leftSteerSimple = 0;

var hillAmount;

var saveDataHandler = new Utils.SaveDataHandler("sprintclubnitro1", 9);

var aMapPointData = new Array([

    55, 

    136

], [

    101, 

    249

], [

    192, 

    140

], [

    348, 

    107

], [

    264, 

    272

], [

    407, 

    304

], [

    532, 

    221

], [

    509, 

    53

], [

    648, 

    213

]);

var levelTheme;

var nitroMode;

var raceProgress;

var leadProgress;

var leadHeadStart = .2;

var raceLength;

var enemySpeed;

var racePos;

var carReleasedNum;

var carReleaseDelay;

var speedDifferencial;

var overtakenInc;

var bridgeDistanceTarg;

var firstPlay = true;

var startTimer;

var aPowerUpBarData = new Array(0, 0, 0, 0);

var aPowerUpButsData = new Array(100, 100, 250, 250, 500, 500, 1000, 1000, 1000);

var winnings = 0;

var accRate;

var nitroLength;

var endSoundPlayed;

var offRoad;

var startStage;

var musicTween;

var justSkid;

loadPreAssets();

function initSplash() {

    gameState = "splash";

    resizeCanvas();

    splash = new Elements.Splash(assetLib.getData("splash"), canvas.width, canvas.height);

    userInput.addHitArea("moreGames", butEventHandler, null, "rect", {

        aRect: [

            0, 

            0, 

            canvas.width, 

            canvas.height

        ]

    }, true);

    previousTime = new Date().getTime();

    updateSplashScreenEvent();

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

    background = new Elements.Background(assetLib.getData("mainBackground"), canvas.width, canvas.height);

    userInput.addHitArea("mute", butEventHandler, null, "rect", {

        aRect: [

            644, 

            0, 

            canvas.width, 

            54

        ]

    }, true);

    var oPlayBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            620, 

            340

        ],

        id: "play"

    };

    var oMoreGamesBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            276, 

            359

        ],

        id: "moreGames"

    };

    var oCreditsBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            98, 

            359

        ],

        id: "credits"

    };

    userInput.addHitArea("showMapScreen", butEventHandler, null, "image", oPlayBut);

    userInput.addHitArea("moreGames", butEventHandler, null, "image", oMoreGamesBut);

    userInput.addHitArea("credits", butEventHandler, null, "image", oCreditsBut);

    var aButs = new Array(oPlayBut, oMoreGamesBut, oCreditsBut);

    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), gameState, aButs, canvas.width, canvas.height);

    panel.startTween1();

    previousTime = new Date().getTime();

    updateStartScreenEvent();

}

function initCreditsScreen() {

    gameState = "credits";

    var oBackBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            61, 

            359

        ],

        id: "back"

    };

    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", oBackBut);

    var aButs = new Array(oBackBut);

    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), gameState, aButs, canvas.width, canvas.height);

    panel.startTween2();

    previousTime = new Date().getTime();

    updateCreditsScreenEvent();

}

function initMapScreen() {

    gameState = "map";

    background = new Elements.Background(assetLib.getData("mainBackground"), canvas.width, canvas.height);

    var oPlayBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            620, 

            340

        ],

        id: "play"

    };

    var oBackBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            61, 

            359

        ],

        id: "back"

    };

    var oResetBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            165, 

            359

        ],

        id: "resetScores"

    };

    userInput.addHitArea("startGame", butEventHandler, null, "image", oPlayBut);

    userInput.addHitArea("backFromMap", butEventHandler, null, "image", oBackBut);

    userInput.addHitArea("resetScores", butEventHandler, null, "image", oResetBut);

    var aButs = new Array(oPlayBut, oBackBut, oResetBut);

    var hx = aMapPointData[8][0];

    var hy = aMapPointData[8][1];

    totalScore = 0;

    levelTheme = "desert";

    levelNum = 8;

    for(var i = 0; i < aMapPointData.length; i++) {

        if(saveDataHandler.aLevelStore[i * 3] == 2) {

            var oSelectBut = {

                oImgData: assetLib.getData("uiElements"),

                aPos: aMapPointData[i],

                id: "completedLevel",

                noFloat: true

            };

            userInput.addHitArea("selectLevel", butEventHandler, {

                id: i

            }, "image", oSelectBut);

            aButs.push(oSelectBut);

            totalScore += saveDataHandler.aLevelStore[(i * 3) + 2];

        } else if(saveDataHandler.aLevelStore[i * 3] == 1) {

            levelTheme = "city";

            if(i < 3) {

                levelTheme = "forest";

            } else if(i > 5) {

                levelTheme = "desert";

            }

            var oSelectBut = {

                oImgData: assetLib.getData("uiElements"),

                aPos: aMapPointData[i],

                id: levelTheme,

                noFloat: true

            };

            userInput.addHitArea("selectLevel", butEventHandler, {

                id: i

            }, "image", oSelectBut);

            aButs.push(oSelectBut);

            hx = aMapPointData[i][0];

            hy = aMapPointData[i][1];

            levelNum = i;

            if(i > 1) {

                firstPlay = false;

            }

        }

    }

    for(var i = 0; i < aPowerUpBarData.length; i++) {

        aPowerUpBarData[i] = saveDataHandler.aLevelStore[27 + i];

    }

    winnings = saveDataHandler.aLevelStore[31];

    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), gameState, aButs, canvas.width, canvas.height);

    panel.highlight.x = hx;

    panel.highlight.y = hy;

    panel.oScoreData.totalScore = totalScore;

    panel.startTween1();

    previousTime = new Date().getTime();

    updateMapEvent();

}

function initGame() {

    gameState = "game";

    if(audioType == 1) {

        musicTween.kill();

        musicTween = TweenLite.to(music, 1, {

            volume: .5,

            ease: "Linear.easeNone"

        });

    }

    userInput.addHitArea("pause", butEventHandler, null, "rect", {

        aRect: [

            587, 

            0, 

            635, 

            54

        ]

    }, true);

    userInput.addHitArea("steerLeft", butEventHandler, {

        multiTouch: true

    }, "rect", {

        aRect: [

            0, 

            60, 

            canvas.width / 2, 

            canvas.height

        ]

    }, true);

    userInput.addHitArea("steerRight", butEventHandler, {

        multiTouch: true

    }, "rect", {

        aRect: [

            canvas.width / 2, 

            60, 

            canvas.width, 

            canvas.height

        ]

    }, true);

    userInput.addKey("steerRight", butEventHandler, null, 39);

    userInput.addKey("steerLeft", butEventHandler, null, 37);

    road = new Elements.Road(assetLib.getData(levelTheme + "Skyline"), assetLib.getData(levelTheme + "Fog"), assetLib.getData(levelTheme + "Road"), assetLib.getData(levelTheme + "Ground"), levelTheme, levelNum, canvas.width, canvas.height, roadCallback);

    hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("uiElements"), assetLib.getData("position"), canvas.width, canvas.height);

    userCar = new Elements.UserCar(assetLib.getData("userCar"), canvas.width, canvas.height);

    enemySpeed = 390 + levelNum * 7.2;

    raceLength = 40000 + levelNum * 1000;

    maxSpeed = 475 + aPowerUpBarData[1] * 6.75;

    accRate = 4 - aPowerUpBarData[2] * .32;

    turnRate = 1.8 + aPowerUpBarData[0] * .375;

    nitroLength = 3 + aPowerUpBarData[3] * .6;

    speed = 200;

    steerX = 0;

    rightSteer = 0;

    leftSteer = 0;

    curveAmount = 0;

    hillAmount = 0;

    tweenScaleTimer = 0;

    levelScore = 0;

    raceProgress = 0;

    leadProgress = raceLength * leadHeadStart;

    racePos = 19;

    carReleasedNum = 19;

    carReleaseDelay = 0;

    speedDifferencial = 0;

    overtakenInc = 1;

    bridgeDistanceTarg = raceLength / 4;

    startTimer = 0;

    endSoundPlayed = false;

    offRoad = false;

    startStage = 0;

    justSkid = false;

    nitroMode = false;

    curveTween = TweenMax.to(this, 10, {

        curveAmount: 0,

        ease: "Cubic.easeInOut",

        onComplete: setNewCurve,

        onCompleteParams: [

            this

        ]

    });

    hillTween = TweenMax.to(this, Math.random() * 2 + 2, {

        hillAmount: -.5,

        ease: "Quad.easeInOut",

        onComplete: setNewHill,

        onCompleteParams: [

            this

        ]

    });

    previousTime = new Date().getTime();

    updateGameEvent();

}

function setNewCurve(_scope) {

    var newCurve = Math.random() * .2 - .1;

    if(Math.random() * 1 > .5 && speed > 400) {

        newCurve = Math.random() * 2 - 1;

    }

    if(levelTheme == "forest") {

        _scope.curveTween = TweenMax.to(_scope, Math.random() * 2 + 4, {

            curveAmount: newCurve,

            ease: "Cubic.easeInOut",

            onComplete: setNewCurve,

            onCompleteParams: [

                _scope

            ]

        });

    } else if(levelTheme == "city") {

        _scope.curveTween = TweenMax.to(_scope, Math.random() * 2 + 3, {

            curveAmount: newCurve,

            ease: "Cubic.easeInOut",

            onComplete: setNewCurve,

            onCompleteParams: [

                _scope

            ]

        });

    } else if(levelTheme == "desert") {

        _scope.curveTween = TweenMax.to(_scope, Math.random() * 2 + 2, {

            curveAmount: newCurve,

            ease: "Cubic.easeInOut",

            onComplete: setNewCurve,

            onCompleteParams: [

                _scope

            ]

        });

    }

    _scope.curveTween.timeScale = (speed * speed * speed) / (flexMaxSpeed * flexMaxSpeed * flexMaxSpeed);

}

function setNewHill(_scope) {

    _scope.hillTween = TweenMax.to(_scope, Math.random() * 2 + 2, {

        hillAmount: Math.random() * 2 - 1.5,

        ease: "Quad.easeInOut",

        onComplete: setNewHill,

        onCompleteParams: [

            _scope

        ]

    });

    _scope.hillTween.timeScale = (speed * speed * speed) / (flexMaxSpeed * flexMaxSpeed * flexMaxSpeed);

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

                    file: "images/" + curLang + "/preloadImage.jpg"

                }

            ], ctx, canvas.width, canvas.height, false);

            preAssetLib.onReady(initLoadAssets);

            break;

        case "showMapScreen":

            playSound("click");

            userInput.removeHitArea("showMapScreen");

            userInput.removeHitArea("moreGames");

            userInput.removeHitArea("credits");

            if(isMobile) {

                launchFullscreen(document.documentElement);

            }

            initMapScreen();

            break;

        case "credits":

            playSound("click");

            userInput.removeHitArea("showMapScreen");

            userInput.removeHitArea("moreGames");

            userInput.removeHitArea("credits");

            if(isMobile) {

                launchFullscreen(document.documentElement);

            }

            initCreditsScreen();

            break;

        case "backFromCredits":

            playSound("click");

            userInput.removeHitArea("backFromCredits");

            initStartScreen();

            break;

        case "moreGames":

        case "moreGamesPause":

            playSound("click");

            var url = "https://www.forestrygames.com/";

            var open = window.open(url);

            if(open == null || typeof (open) == 'undefined') {

                location.href = url;

            }

            break;

        case "startGame":

            playSound("click");

            userInput.removeHitArea("startGame");

            userInput.removeHitArea("backFromMap");

            userInput.removeHitArea("resetScores");

            userInput.removeHitArea("selectLevel");

            initGame();

            break;

        case "backFromMap":

            playSound("click");

            userInput.removeHitArea("startGame");

            userInput.removeHitArea("backFromMap");

            userInput.removeHitArea("resetScores");

            userInput.removeHitArea("selectLevel");

            initStartScreen();

            break;

        case "selectLevel":

            playSound("click");

            panel.highlight.x = aMapPointData[_oData.id][0];

            panel.highlight.y = aMapPointData[_oData.id][1];

            levelNum = _oData.id;

            levelTheme = "city";

            if(levelNum < 3) {

                levelTheme = "forest";

            } else if(levelNum > 5) {

                levelTheme = "desert";

            }

            break;

        case "resetScores":

            playSound("click");

            saveDataHandler.clearData();

            saveDataHandler.saveData();

            userInput.removeHitArea("startGame");

            userInput.removeHitArea("backFromMap");

            userInput.removeHitArea("resetScores");

            userInput.removeHitArea("selectLevel");

            initMapScreen();

            break;

        case "steerLeft":

            if(_oData.isDown) {

                leftSteer = 300 + speed;

                leftSteerSimple = 1;

                rightSteer = 0;

                rightSteerSimple = 0;

            } else {

                leftSteer = 0;

                leftSteerSimple = 0;

            }

            break;

        case "steerRight":

            if(_oData.isDown) {

                rightSteer = -(300 + speed);

                rightSteerSimple = -1;

                leftSteer = 0;

                leftSteerSimple = 0;

            } else {

                rightSteer = 0;

                rightSteerSimple = 0;

            }

            break;

        case "quitFromLevelEnd":

            playSound("click");

            userInput.removeHitArea("quitFromLevelEnd");

            userInput.removeHitArea("upgradeScreen");

            initStartScreen();

            break;

        case "upgradeScreen":

            playSound("click");

            userInput.removeHitArea("quitFromLevelEnd");

            userInput.removeHitArea("upgradeScreen");

            initUpgradeScreen();

            break;

        case "powerUp0":

            if(winnings >= aPowerUpButsData[aPowerUpBarData[0]] && aPowerUpBarData[0] < 8) {

                playSound("upgrade");

                winnings -= aPowerUpButsData[aPowerUpBarData[0]];

                aPowerUpBarData[0]++;

                panel.oScoreData = {

                    winnings: winnings,

                    totalScore: totalScore,

                    aPowerUpBarData: aPowerUpBarData

                };

                setPowerUpButs();

                saveDataHandler.aLevelStore[27] = aPowerUpBarData[0];

                saveDataHandler.aLevelStore[31] = winnings;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp1":

            if(winnings >= aPowerUpButsData[aPowerUpBarData[1]] && aPowerUpBarData[1] < 8) {

                playSound("upgrade");

                winnings -= aPowerUpButsData[aPowerUpBarData[1]];

                aPowerUpBarData[1]++;

                panel.oScoreData = {

                    winnings: winnings,

                    totalScore: totalScore,

                    aPowerUpBarData: aPowerUpBarData

                };

                setPowerUpButs();

                saveDataHandler.aLevelStore[28] = aPowerUpBarData[1];

                saveDataHandler.aLevelStore[31] = winnings;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp2":

            if(winnings >= aPowerUpButsData[aPowerUpBarData[2]] && aPowerUpBarData[2] < 8) {

                playSound("upgrade");

                winnings -= aPowerUpButsData[aPowerUpBarData[2]];

                aPowerUpBarData[2]++;

                panel.oScoreData = {

                    winnings: winnings,

                    totalScore: totalScore,

                    aPowerUpBarData: aPowerUpBarData

                };

                setPowerUpButs();

                saveDataHandler.aLevelStore[29] = aPowerUpBarData[2];

                saveDataHandler.aLevelStore[31] = winnings;

                saveDataHandler.saveData();

            }

            break;

        case "powerUp3":

            if(winnings >= aPowerUpButsData[aPowerUpBarData[3]] && aPowerUpBarData[3] < 8) {

                playSound("upgrade");

                winnings -= aPowerUpButsData[aPowerUpBarData[3]];

                aPowerUpBarData[3]++;

                panel.oScoreData = {

                    winnings: winnings,

                    totalScore: totalScore,

                    aPowerUpBarData: aPowerUpBarData

                };

                setPowerUpButs();

                saveDataHandler.aLevelStore[30] = aPowerUpBarData[3];

                saveDataHandler.aLevelStore[31] = winnings;

                saveDataHandler.saveData();

            }

            break;

        case "nextFromUpgrades":

            playSound("click");

            userInput.removeHitArea("nextFromUpgrades");

            userInput.removeHitArea("quitFromUpgrades");

            userInput.removeHitArea("powerUp0");

            userInput.removeHitArea("powerUp1");

            userInput.removeHitArea("powerUp2");

            userInput.removeHitArea("powerUp3");

            initMapScreen();

            break;

        case "quitFromUpgrades":

            playSound("click");

            userInput.removeHitArea("nextFromUpgrades");

            userInput.removeHitArea("quitFromUpgrades");

            userInput.removeHitArea("powerUp0");

            userInput.removeHitArea("powerUp1");

            userInput.removeHitArea("powerUp2");

            userInput.removeHitArea("powerUp3");

            initStartScreen();

            break;

        case "mute":

            playSound("click");

            toggleMute();

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

            userInput.removeHitArea("steerLeft");

            userInput.removeHitArea("steerRight");

            userInput.removeHitArea("steerRight");

            userInput.removeHitArea("steerLeft");

            userInput.removeHitArea("quitFromPause");

            userInput.removeHitArea("resumeFromPause");

            userInput.removeHitArea("moreGamesPause");

            curveTween.kill();

            hillTween.kill();

            levelScore = 0;

            initStartScreen();

            break;

    }

}

function setScores() {

    levelScore += 50;

    levelScore += (levelNum + 1) * 300;

    levelScore += (20 - racePos) * 200;

    if(racePos == 2) {

        levelScore += 250;

    } else if(racePos == 1) {

        levelScore += 500;

    } else if(racePos == 0) {

        levelScore += 1000;

    }

    levelScore = Math.max(levelScore, 100);

    totalScore += levelScore;

    winnings += Math.round(levelScore / 10);

    initLevelComplete();

}

function initLevelComplete() {

    gameState = "levelComplete";

    if(audioType == 1) {

        musicTween.kill();

        musicTween = TweenLite.to(music, 2, {

            volume: .2,

            ease: "Linear.easeNone"

        });

    }

    curveTween.kill();

    hillTween.kill();

    background = new Elements.Background(assetLib.getData("finishBackground"), canvas.width, canvas.height);

    userInput.removeHitArea("pause");

    userInput.removeHitArea("steerLeft");

    userInput.removeHitArea("steerRight");

    var oNextBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            620, 

            340

        ],

        id: "play"

    };

    var oQuitBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            98, 

            359

        ],

        id: "quit"

    };

    userInput.addHitArea("upgradeScreen", butEventHandler, null, "image", oNextBut);

    userInput.addHitArea("quitFromLevelEnd", butEventHandler, null, "image", oQuitBut);

    var aButs = new Array(oNextBut, oQuitBut);

    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), gameState, aButs, canvas.width, canvas.height);

    panel.startTween1();

    panel.oScoreData = {

        racePos: racePos,

        winnings: Math.round(levelScore / 10),

        levelScore: levelScore,

        totalScore: totalScore

    };

    saveDataHandler.aLevelStore[levelNum * 3] = 2;

    if(saveDataHandler.aLevelStore[levelNum * 3 + 1] > racePos) {

        saveDataHandler.aLevelStore[levelNum * 3 + 1] = racePos;

    }

    if(saveDataHandler.aLevelStore[levelNum * 3 + 2] < levelScore) {

        saveDataHandler.aLevelStore[levelNum * 3 + 2] = levelScore;

    }

    saveDataHandler.aLevelStore[31] = winnings;

    if(levelNum < 8 && saveDataHandler.aLevelStore[(levelNum + 1) * 3] == 0) {

        saveDataHandler.aLevelStore[(levelNum + 1) * 3] = 1;

    }

    saveDataHandler.saveData();

    previousTime = new Date().getTime();

    updateLevelComplete();

}

function initUpgradeScreen() {

    gameState = "upgrade";

    background = new Elements.Background(assetLib.getData("upgradeBackground"), canvas.width, canvas.height);

    var oNextBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            620, 

            340

        ],

        id: "play"

    };

    var oQuitBut = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            98, 

            359

        ],

        id: "quit"

    };

    var oPowerUp0But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            141, 

            248

        ],

        id: "cost" + aPowerUpButsData[aPowerUpBarData[0]] + "On",

        num: 0,

        noFloat: true

    };

    var oPowerUp1But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            311, 

            178

        ],

        id: "cost" + aPowerUpButsData[aPowerUpBarData[1]] + "On",

        num: 1,

        noFloat: true

    };

    var oPowerUp2But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            481, 

            248

        ],

        id: "cost" + aPowerUpButsData[aPowerUpBarData[2]] + "On",

        num: 2,

        noFloat: true

    };

    var oPowerUp3But = {

        oImgData: assetLib.getData("uiButs"),

        aPos: [

            651, 

            178

        ],

        id: "cost" + aPowerUpButsData[aPowerUpBarData[3]] + "On",

        num: 3,

        noFloat: true

    };

    userInput.addHitArea("nextFromUpgrades", butEventHandler, null, "image", oNextBut);

    userInput.addHitArea("quitFromUpgrades", butEventHandler, null, "image", oQuitBut);

    userInput.addHitArea("powerUp0", butEventHandler, null, "image", oPowerUp0But);

    userInput.addHitArea("powerUp1", butEventHandler, null, "image", oPowerUp1But);

    userInput.addHitArea("powerUp2", butEventHandler, null, "image", oPowerUp2But);

    userInput.addHitArea("powerUp3", butEventHandler, null, "image", oPowerUp3But);

    var aButs = new Array(oPowerUp0But, oPowerUp1But, oPowerUp2But, oPowerUp3But, oNextBut, oQuitBut);

    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), gameState, aButs, canvas.width, canvas.height);

    setPowerUpButs();

    panel.startTween1();

    panel.oScoreData = {

        winnings: winnings,

        totalScore: totalScore,

        aPowerUpBarData: aPowerUpBarData

    };

    previousTime = new Date().getTime();

    updateUpgradeScreen();

}

function setPowerUpButs() {

    if(aPowerUpButsData[aPowerUpBarData[0]] > winnings || aPowerUpBarData[0] >= 8) {

        panel.aButs[0].id = "cost" + aPowerUpButsData[aPowerUpBarData[0]] + "Off";

    } else {

        panel.aButs[0].id = "cost" + aPowerUpButsData[aPowerUpBarData[0]] + "On";

    }

    if(aPowerUpButsData[aPowerUpBarData[1]] > winnings || aPowerUpBarData[1] >= 8) {

        panel.aButs[1].id = "cost" + aPowerUpButsData[aPowerUpBarData[1]] + "Off";

    } else {

        panel.aButs[1].id = "cost" + aPowerUpButsData[aPowerUpBarData[1]] + "On";

    }

    if(aPowerUpButsData[aPowerUpBarData[2]] > winnings || aPowerUpBarData[2] >= 8) {

        panel.aButs[2].id = "cost" + aPowerUpButsData[aPowerUpBarData[2]] + "Off";

    } else {

        panel.aButs[2].id = "cost" + aPowerUpButsData[aPowerUpBarData[2]] + "On";

    }

    if(aPowerUpButsData[aPowerUpBarData[3]] > winnings || aPowerUpBarData[3] >= 8) {

        panel.aButs[3].id = "cost" + aPowerUpButsData[aPowerUpBarData[3]] + "Off";

    } else {

        panel.aButs[3].id = "cost" + aPowerUpButsData[aPowerUpBarData[3]] + "On";

    }

}

function roadCallback(_id, _oData) {

    if (typeof _oData === "undefined") { _oData = null; }

    switch(_id) {

        case "hitEnemyCar":

            if(nitroMode) {

                speed = maxSpeed;

                nitroMode = false;

            }

            speed *= .75;

            steerX += _oData.bounceX * 1000;

            if(startTimer <= 4) {

                levelScore -= 100;

            }

            playSound("crash" + Math.ceil(Math.random() * 3));

            break;

        case "hitNitro":

            nitroMode = true;

            setNewCurve(this);

            nitroTimer = 0;

            playSound("nitroStart");

            if(startTimer <= 4) {

                levelScore += 500;

            }

            break;

    }

}

function updateGameEvent() {

    if(manualPause || rotatePause || gameState != "game") {

        return;

    }

    var delta = getDelta();

    if(road.steerX > 500 / road.roadScaleMultiplier || road.steerX < -500 / road.roadScaleMultiplier) {

        speed = Math.max(speed -= delta * 250, 200);

        if(startTimer <= 4) {

            levelScore -= Math.round(25 * delta);

        }

        if(!offRoad) {

            playSound("offRoad");

            offRoad = true;

        }

    } else {

        offRoad = false;

        if(!nitroMode) {

            flexMaxSpeed = maxSpeed - Math.abs(steerX) / (3 + turnRate);

            speed += delta * ((flexMaxSpeed - speed) / accRate);

        } else {

            flexMaxSpeed = nitroSpeed - Math.abs(steerX) / 4;

            speed += delta * ((flexMaxSpeed - speed) / 3);

            nitroTimer += delta;

            if(nitroTimer > nitroLength) {

                nitroMode = false;

                playSound("nitroEnd");

            }

        }

    }

    hud.speed = Math.round(speed / 4);

    raceProgress += speed * delta;

    leadProgress += enemySpeed * delta;

    hud.raceProgress = raceProgress / raceLength;

    carReleaseDelay += speed * delta;

    if(raceProgress > raceLength) {

        road.bridgeType = 5;

        road.bridgeRow = 0;

        hud.raceProgress = 1;

    } else if(raceProgress > bridgeDistanceTarg) {

        road.bridgeType = 4;

        road.bridgeRow = 0;

        bridgeDistanceTarg += raceLength / 4;

    }

    if(carReleasedNum > 0 && road.freeToAddCar() && raceProgress > leadProgress - (carReleasedNum / 19) * (leadProgress * .9)) {

        road.addEnemyCar();

        carReleasedNum--;

        overtakenInc = 1;

        carReleaseDelay = 0;

    }

    if(racePos < 19 && speed < enemySpeed) {

        speedDifferencial += enemySpeed - speed;

        if(speedDifferencial > 5000 * overtakenInc) {

            overtakenInc++;

            road.addEnemyCar(false);

            if(startTimer <= 4) {

                racePos++;

                playSound("undertake");

            }

            speedDifferencial = 0;

        }

    } else {

        speedDifferencial = 0;

    }

    tweenScaleTimer += delta;

    if(tweenScaleTimer > .5) {

        tweenScaleTimer = 0;

        curveTween.timeScale = hillTween.timeScale = (speed * speed * speed) / (maxSpeed * maxSpeed * maxSpeed);

    }

    targSteerX = (rightSteer + leftSteer + curveAmount * (speed * (1.3 + (.96 - (turnRate / 5)))));

    steerX += ((targSteerX - steerX) * turnRate) * delta;

    if(!justSkid && (steerX > 525 || steerX < -525)) {

        playSound("skid" + Math.ceil(Math.random() * 3));

        justSkid = true;

    } else if(steerX > -100 && steerX < 100) {

        justSkid = false;

    }

    road.update(speed, steerX, curveAmount, hillAmount, delta);

    road.render(ctx);

    userCar.update(speed, steerX, curveAmount, hillAmount, (rightSteerSimple + leftSteerSimple), delta);

    userCar.render(ctx);

    hud.render(ctx);

    if(firstPlay) {

        var oImgData = assetLib.getData("uiElements");

        var tut = "tutorial0";

        if(Math.floor(startTimer) % 2 == 0) {

            tut = "tutorial1";

        }

        var bX = oImgData.oData.oAtlasData[tut].x;

        var bY = oImgData.oData.oAtlasData[tut].y;

        var bWidth = oImgData.oData.oAtlasData[tut].width;

        var bHeight = oImgData.oData.oAtlasData[tut].height;

        ctx.drawImage(oImgData.img, bX, bY, bWidth, bHeight, 0, 70, bWidth, bHeight);

        startTimer += delta;

        if(startTimer > 4) {

            firstPlay = false;

            playSound("start2");

            startTimer = 4;

        }

    } else if(startTimer < 2) {

        var oImgData = assetLib.getData("uiElements");

        if(startStage == 0) {

            playSound("start1");

            startStage = 1;

        } else if(startStage == 1 && startTimer * 2 > 1) {

            playSound("start1");

            startStage = 2;

        } else if(startStage == 2 && startTimer * 2 > 2) {

            playSound("start1");

            startStage = 3;

        } else if(startStage == 3 && startTimer * 2 > 3) {

            playSound("start2");

            startStage = 4;

        }

        var bX = oImgData.oData.oAtlasData["start" + Math.floor(startTimer * 2)].x;

        var bY = oImgData.oData.oAtlasData["start" + Math.floor(startTimer * 2)].y;

        var bWidth = oImgData.oData.oAtlasData["start" + Math.floor(startTimer * 2)].width;

        var bHeight = oImgData.oData.oAtlasData["start" + Math.floor(startTimer * 2)].height;

        ctx.drawImage(oImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 75, bWidth, bHeight);

        startTimer += delta;

        if(startTimer >= 2) {

            setNewCurve(this);

            setNewHill(this);

            startTimer = 4;

        }

    } else if(hud.raceProgress == 1) {

        var oImgData = assetLib.getData("uiElements");

        var bX = oImgData.oData.oAtlasData["finish"].x;

        var bY = oImgData.oData.oAtlasData["finish"].y;

        var bWidth = oImgData.oData.oAtlasData["finish"].width;

        var bHeight = oImgData.oData.oAtlasData["finish"].height;

        ctx.drawImage(oImgData.img, bX, bY, bWidth, bHeight, canvas.width / 2 - bWidth / 2, 100 + Math.sin(startTimer * 10) * 10, bWidth, bHeight);

        startTimer += delta;

        if(!endSoundPlayed) {

            playSound("raceEnd");

            endSoundPlayed = true;

        }

        if(startTimer > 8) {

            setScores();

        }

    }

    renderMuteBut();

    requestAnimFrame(updateGameEvent);

}

function updateCreditsScreenEvent() {

    if(rotatePause || gameState != "credits") {

        return;

    }

    var delta = getDelta();

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateCreditsScreenEvent);

}

function updateLevelComplete() {

    if(rotatePause || gameState != "levelComplete") {

        return;

    }

    var delta = getDelta();

    background.updateScroll(delta);

    background.renderScroll(ctx);

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateLevelComplete);

}

function updateUpgradeScreen() {

    if(rotatePause || gameState != "upgrade") {

        return;

    }

    var delta = getDelta();

    background.render(ctx);

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateUpgradeScreen);

}

function updateSplashScreenEvent() {

    if(rotatePause || gameState != "splash") {

        return;

    }

    var delta = getDelta();

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

    var delta = getDelta();

    background.updateScroll(delta);

    background.renderScroll(ctx);

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateStartScreenEvent);

}

function updateMapEvent() {

    if(rotatePause || gameState != "map") {

        return;

    }

    var delta = getDelta();

    background.updateScroll(delta);

    background.renderScroll(ctx);

    panel.update(delta);

    panel.render(ctx);

    renderMuteBut();

    requestAnimFrame(updateMapEvent);

}

function getDelta() {

    var currentTime = new Date().getTime();

    var delta = (currentTime - previousTime) / 1000;

    previousTime = currentTime;

    if(delta > .5) {

        delta = 0;

    }

    return delta;

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

                file: "images/" + curLang + "/preloadImage.jpg"

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

    assetLib = new Utils.AssetLoader(curLang, [

        {

            id: "mainBackground",

            file: "images/mainBackground.jpg"

        }, 

        {

            id: "finishBackground",

            file: "images/finishBackground.jpg"

        }, 

        {

            id: "upgradeBackground",

            file: "images/upgradeBackground.jpg"

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

            id: "numbers",

            file: "images/numbers_41x47.png"

        }, 

        {

            id: "forestRoad",

            file: "images/forestRoad.jpg"

        }, 

        {

            id: "cityRoad",

            file: "images/cityRoad.jpg"

        }, 

        {

            id: "desertRoad",

            file: "images/desertRoad.jpg"

        }, 

        {

            id: "forestSkyline",

            file: "images/forestSkyline.jpg"

        }, 

        {

            id: "forestGround",

            file: "images/forestGround.jpg"

        }, 

        {

            id: "forestFog",

            file: "images/forestFog.png"

        }, 

        {

            id: "citySkyline",

            file: "images/citySkyline.jpg"

        }, 

        {

            id: "cityGround",

            file: "images/cityGround.jpg"

        }, 

        {

            id: "cityFog",

            file: "images/cityFog.png"

        }, 

        {

            id: "desertSkyline",

            file: "images/desertSkyline.jpg"

        }, 

        {

            id: "desertGround",

            file: "images/desertGround.jpg"

        }, 

        {

            id: "desertFog",

            file: "images/desertFog.png"

        }, 

        {

            id: "hud",

            file: "images/hud_700x400.png"

        }, 

        {

            id: "uiButs",

            file: "images/" + curLang + "/uiButs.png",

            oAtlasData: {

                play: {

                    x: 0,

                    y: 258,

                    width: 167,

                    height: 123

                },

                credits: {

                    x: 0,

                    y: 0,

                    width: 186,

                    height: 84

                },

                moreGames: {

                    x: 0,

                    y: 86,

                    width: 186,

                    height: 84

                },

                back: {

                    x: 169,

                    y: 258,

                    width: 111,

                    height: 86

                },

                quit: {

                    x: 0,

                    y: 172,

                    width: 186,

                    height: 84

                },

                cost100On: {

                    x: 282,

                    y: 242,

                    width: 95,

                    height: 75

                },

                cost250On: {

                    x: 188,

                    y: 165,

                    width: 95,

                    height: 75

                },

                cost500On: {

                    x: 282,

                    y: 319,

                    width: 95,

                    height: 75

                },

                cost1000On: {

                    x: 188,

                    y: 88,

                    width: 95,

                    height: 75

                },

                resetScores: {

                    x: 188,

                    y: 0,

                    width: 111,

                    height: 86

                },

                cost100Off: {

                    x: 285,

                    y: 88,

                    width: 93,

                    height: 73

                },

                cost250Off: {

                    x: 169,

                    y: 346,

                    width: 93,

                    height: 73

                },

                cost500Off: {

                    x: 301,

                    y: 0,

                    width: 93,

                    height: 73

                },

                cost1000Off: {

                    x: 285,

                    y: 163,

                    width: 93,

                    height: 73

                }

            }

        }, 

        {

            id: "scenery",

            file: "images/scenery.png",

            oAtlasData: {

                forest0: {

                    x: 529,

                    y: 286,

                    width: 201,

                    height: 244

                },

                forest1: {

                    x: 696,

                    y: 0,

                    width: 118,

                    height: 223

                },

                forest2: {

                    x: 0,

                    y: 780,

                    width: 154,

                    height: 87

                },

                nitro: {

                    x: 294,

                    y: 780,

                    width: 109,

                    height: 111

                },

                city0: {

                    x: 528,

                    y: 542,

                    width: 204,

                    height: 204

                },

                city1: {

                    x: 156,

                    y: 780,

                    width: 136,

                    height: 112

                },

                city2: {

                    x: 734,

                    y: 414,

                    width: 102,

                    height: 214

                },

                desert0: {

                    x: 732,

                    y: 225,

                    width: 117,

                    height: 187

                },

                desert1: {

                    x: 734,

                    y: 630,

                    width: 98,

                    height: 226

                },

                desert2: {

                    x: 528,

                    y: 748,

                    width: 173,

                    height: 125

                },

                start: {

                    x: 0,

                    y: 542,

                    width: 526,

                    height: 236

                },

                finish: {

                    x: 0,

                    y: 286,

                    width: 527,

                    height: 254

                },

                bridge: {

                    x: 0,

                    y: 0,

                    width: 694,

                    height: 284

                }

            }

        }, 

        {

            id: "uiElements",

            file: "images/" + curLang + "/uiElements.png",

            oAtlasData: {

                needle: {

                    x: 398,

                    y: 664,

                    width: 66,

                    height: 24

                },

                helmet: {

                    x: 704,

                    y: 717,

                    width: 38,

                    height: 35

                },

                completedLevel: {

                    x: 702,

                    y: 211,

                    width: 92,

                    height: 93

                },

                forest: {

                    x: 594,

                    y: 664,

                    width: 108,

                    height: 109

                },

                city: {

                    x: 702,

                    y: 0,

                    width: 108,

                    height: 109

                },

                desert: {

                    x: 596,

                    y: 528,

                    width: 108,

                    height: 109

                },

                levelHighlight: {

                    x: 702,

                    y: 111,

                    width: 98,

                    height: 98

                },

                finish: {

                    x: 0,

                    y: 528,

                    width: 396,

                    height: 163

                },

                start0: {

                    x: 396,

                    y: 693,

                    width: 196,

                    height: 134

                },

                start1: {

                    x: 198,

                    y: 693,

                    width: 196,

                    height: 134

                },

                start2: {

                    x: 398,

                    y: 528,

                    width: 196,

                    height: 134

                },

                start3: {

                    x: 0,

                    y: 693,

                    width: 196,

                    height: 134

                },

                tutorial0: {

                    x: 0,

                    y: 0,

                    width: 700,

                    height: 262

                },

                tutorial1: {

                    x: 0,

                    y: 264,

                    width: 700,

                    height: 262

                },

                upgrade0: {

                    x: 704,

                    y: 679,

                    width: 77,

                    height: 36

                },

                upgrade1: {

                    x: 702,

                    y: 386,

                    width: 78,

                    height: 38

                },

                upgrade2: {

                    x: 702,

                    y: 426,

                    width: 78,

                    height: 38

                },

                upgrade3: {

                    x: 702,

                    y: 306,

                    width: 78,

                    height: 38

                },

                upgrade4: {

                    x: 702,

                    y: 466,

                    width: 78,

                    height: 38

                },

                upgrade5: {

                    x: 704,

                    y: 639,

                    width: 78,

                    height: 38

                },

                upgrade6: {

                    x: 675,

                    y: 775,

                    width: 78,

                    height: 38

                },

                upgrade7: {

                    x: 702,

                    y: 346,

                    width: 78,

                    height: 38

                },

                upgrade8: {

                    x: 594,

                    y: 775,

                    width: 79,

                    height: 38

                }

            }

        }, 

        {

            id: "panels",

            file: "images/" + curLang + "/panels_700x400.png"

        }, 

        {

            id: "position",

            file: "images/position_58x42.png"

        }, 

        {

            id: "muteBut",

            file: "images/mute_55x55.png"

        }, 

        {

            id: "userCar",

            file: "images/userCar_122x82.png"

        }, 

        {

            id: "enemyCar",

            file: "images/enemyCar_122x82.png"

        }

    ], ctx, canvas.width, canvas.height);

    assetLib.onReady(initSplash);

}

function resizeCanvas() {

    var tempInnerWidth = window.innerWidth;

    var tempInnerHeight = window.innerHeight;

    if(tempInnerWidth > 480) {

        tempInnerWidth -= 1;

        tempInnerHeight -= 1;

    }

    if(window.innerWidth < window.innerHeight && isMobile) {

        if(gameState != "loading") {

            rotatePauseOn();

        }

        canvas.style.width = tempInnerWidth + "px";

        canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";

        canvasX = 0;

        canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);

        canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;

        div.style.marginTop = canvasY + "px";

        div.style.marginLeft = canvasX + "px";

    } else if(!isMobile) {

        if(rotatePause) {

            rotatePauseOff();

        }

        if(tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) {

            canvas.style.width = tempInnerWidth + "px";

            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";

            canvasX = 0;

            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);

            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;

            div.style.marginTop = canvasY + "px";

            div.style.marginLeft = canvasX + "px";

        } else {

            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";

            canvas.style.height = tempInnerHeight + "px";

            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);

            canvasY = 0;

            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;

            div.style.marginTop = canvasY + "px";

            div.style.marginLeft = canvasX + "px";

        }

    } else {

        if(rotatePause) {

            rotatePauseOff();

        }

        canvasX = canvasY = 0;

        canvasScaleX = canvas.width / tempInnerWidth;

        canvasScaleY = canvas.height / tempInnerHeight;

        canvas.style.width = tempInnerWidth + "px";

        canvas.style.height = tempInnerHeight + "px";

        div.style.marginTop = 0 + "px";

        div.style.marginLeft = 0 + "px";

    }

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

            if(musicTween) {

                musicTween.kill();

            }

        } else {

            Howler.unmute();

            if(musicTween) {

                musicTween.kill();

            }

            if(gameState == "game") {

                music.volume = .5;

            } else {

                music.volume = .2;

            }

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

    ctx.drawImage(oImgData.img, imgX, imgY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight, 645, 2, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight);

}

function toggleManualPause() {

    if(!manualPause) {

        manualPause = true;

        pauseCoreOn();

        var oQuitBut = {

            oImgData: assetLib.getData("uiButs"),

            aPos: [

                140, 

                canvas.height / 2

            ],

            id: "quit"

        };

        var oResumeBut = {

            oImgData: assetLib.getData("uiButs"),

            aPos: [

                canvas.width / 2, 

                canvas.height / 2

            ],

            id: "play"

        };

        var oMoreGamesBut = {

            oImgData: assetLib.getData("uiButs"),

            aPos: [

                560, 

                canvas.height / 2

            ],

            id: "moreGames"

        };

        var aButs = new Array(oQuitBut, oResumeBut, oMoreGamesBut);

        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", oQuitBut);

        userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", oResumeBut);

        userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", oMoreGamesBut);

        panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("uiElements"), assetLib.getData("position"), assetLib.getData("numbers"), "pause", aButs, canvas.width, canvas.height);

        panel.render(ctx);

        userInput.addHitArea("pause", butEventHandler, null, "rect", {

            aRect: [

                587, 

                0, 

                635, 

                54

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

        case "start":

            break;

        case "help":

            break;

        case "game":

            userInput.removeHitArea("steerLeft");

            userInput.removeHitArea("steerRight");

            curveTween.pause();

            hillTween.pause();

            break;

        case "end":

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

        case "map":

            initMapScreen();

            break;

        case "game":

            manualPause = false;

            userInput.addHitArea("steerLeft", butEventHandler, {

                multiTouch: true

            }, "rect", {

                aRect: [

                    0, 

                    60, 

                    canvas.width / 2, 

                    canvas.height

                ]

            }, true);

            userInput.addHitArea("steerRight", butEventHandler, {

                multiTouch: true

            }, "rect", {

                aRect: [

                    canvas.width / 2, 

                    60, 

                    canvas.width, 

                    canvas.height

                ]

            }, true);

            userInput.addKey("steerRight", butEventHandler, null, 39);

            userInput.addKey("steerLeft", butEventHandler, null, 37);

            curveTween.resume();

            hillTween.resume();

            updateGameEvent();

            break;

        case "levelComplete":

            initLevelComplete();

            break;

        case "upgrade":

            initUpgradeScreen();

            break;

    }

}

