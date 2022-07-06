CuriousJS = {};
CuriousJS.Game = function(config) {
    var that = new createjs.Stage("gameCanvas");

    that._init = function(config) {
        this.enableMouseOver();
        createjs.Touch.enable(this);
        this.scenes = [];
        this.currentScene = null;
        this.offsetContainer = new createjs.Container();
        this.addChild(this.offsetContainer);
        if(config !== undefined) {
            this.forceLandscape = config.forceLandscape !== undefined ? config.forceLandscape : false;
            this.targetWidth = config.targetWidth !== undefined ? config.targetWidth : 1426;
            this.targetHeight = config.targetHeight !== undefined ? config.targetHeight : 768;
        } else {
            this.targetHeight = 768;
            this.targetWidth = 1426;
            this.forceLandscape = false;
        }
        this.offsetContainer.x = this.targetWidth / 2;
        this.offsetContainer.y = this.targetHeight / 2;
        this.frameRateText = new createjs.Text("0", "20px Arial", "#65EB94");
        if(config.debug) {
            this.addChild(this.frameRateText);
        }

        // this.triggerResize();
        // window.addEventListener('resize', this.triggerResize.bind(this));
        // window.addEventListener('orientationchange', this.triggerResize.bind(this));
        
        this.canvas.width = this.targetWidth;
        this.canvas.height = this.targetHeight;

        this.finishedInit = false;
        this.initialQueue = new createjs.LoadQueue();
        this.initialQueue.setMaxConnections(4);
        this.initialQueue.installPlugin(createjs.Sound);
        this.mainQueue = new createjs.LoadQueue();
        this.mainQueue.setMaxConnections(4);
        this.mainQueue.installPlugin(createjs.Sound);
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
        createjs.Sound.alternateExtensions = ["ogg", "mp3"];
        if(config !== undefined && config !== null && config.initialManifest !== undefined && config.initialManifest !== null) {
            //Load initial manifest if there is one
            this.initialQueueListener = this.initialQueue.on('complete', this.finishInit, this);
            this.initialQueue.loadManifest(config.initialManifest);
        } else {
            this.finishInit();
        }
    };

    that.updateLoop = function(event) {
        //frame rate
        this.frameRateText.text = ~~createjs.Ticker.getMeasuredFPS();
        if(this.currentScene !== undefined && this.currentScene !== null) {
            this.currentScene.update();
        }
        this.update();
    };

    that.finishInit = function() {
        this.finishedInit = true;
        this.dispatchEvent('finishedInit');
        if(this.mainQueueListener !== undefined) {
            this.initialQueue.off('complete', this.initialQueueListener);
        }
        if(config !== undefined && config !== null) {
            if(config.mainManifest !== undefined && config.mainManifest !== null) {
                this.mainQueueListener = this.mainQueue.on('complete', function() {
                    this.dispatchEvent('mainManifestLoaded');
                }, this);
                this.mainQueue.loadManifest(config.mainManifest);
            }
        }
        //Setup update loop
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", this.updateLoop.bind(this));
    };

    that.addScene = function(scene) {
        this.scenes.push(scene);
    };

    that.loadScene = function(sceneName) {
        for(var i = 0; i < this.scenes.length; i++) {
            if(this.scenes[i].name == sceneName) {
                if(this.currentScene !== null && typeof this.currentScene.exit !== 'undefined') {
                    this.currentScene.exit();
                }
                this.currentScene = this.scenes[i];
                this.offsetContainer.removeAllChildren();
                this.offsetContainer.addChild(this.currentScene);
                if(typeof this.currentScene.enter !== 'undefined') {
                    this.currentScene.enter();
                }
            }
        }
    };

    that.triggerResize = function() {
        var targetWidth = this.targetWidth;
        var targetHeight = this.targetHeight;
        var gcd = CuriousJS.Game.Math.gcd(this.targetWidth, this.targetHeight);
        var widthRatio = this.targetWidth / gcd;
        var heightRatio = this.targetHeight / gcd;
        var wrapper = document.getElementById('wrapper');
        wrapper.style.display = 'block';
        var wrapperWidth = wrapper.offsetWidth;
        if(wrapper.offsetHeight > window.innerHeight) {
            wrapper.style.height = window.innerHeight + "px";
        }
        var wrapperHeight = wrapper.offsetHeight;
        
        var multiplyer = (wrapperWidth/widthRatio < wrapperHeight/heightRatio) ? 
                            wrapperWidth/widthRatio : wrapperHeight/heightRatio;
        var newWrapperWidth = Math.floor(multiplyer * widthRatio);
        var newWrapperHeight = Math.floor(multiplyer * heightRatio);

        this.widthOffset = 0;
        this.offsetContainer.x = this.targetWidth / 2;
        this.canvas.style.width = newWrapperWidth + "px";
        this.canvas.style.height = newWrapperHeight + "px";
        this.canvas.width = this.targetWidth;
        this.canvas.height = this.targetHeight;

        //center vertically
        // this.canvas.style.top = (wrapper.offsetHeight - this.canvas.offsetHeight) / 2 + "px";
        // if(wrapper.offsetHeight < window.innerHeight) {
        //     wrapper.style.top = (wrapper.parentNode.offsetHeight - wrapper.offsetHeight) / 2 + "px";
        // } else {
        //     wrapper.style.top = "0px";
        // }
        this.canvas.style.marginTop = (wrapper.offsetHeight - this.canvas.offsetHeight) / 2 + "px";
        this.canvas.style.marginLeft = (wrapper.offsetWidth - this.canvas.offsetWidth) / 2 + "px";

        var boDiv = document.getElementById("badOrientation");
        if(this.forceLandscape && window.innerHeight > window.innerWidth) {
            //inform user to use landscape view
            wrapper.style.display = 'none';
            boDiv.style.display = 'block';
            boDiv.style.width = window.innerWidth+'px';
            boDiv.style.height = window.innerHeight+'px';
        } else {
            boDiv.style.display = 'none';
            wrapper.style.display = 'block';
        }
        window.scrollTo(0, 1);
    };

    that._init(config);
    return that;
};