CuriousJS.Scene = function(config) {
    var that = new createjs.Container();

    that._init = function() {
        if(config !== undefined) {
            this.name = config.name !== undefined ? config.name : undefined;
            if(config.assets !== undefined && config.assets.length > 0) {
                this.initAssets(config.assets, this);
            }
        } else {
            this.name = undefined;
        }
    };
    
    that._update = function() {

    };

    that.initAssets = function(assets, parent) {
        for(var i = 0; i < assets.length; i++) {
            var asset = assets[i];
            if(typeof asset.classParam === 'function') {
                asset.classParam = asset.classParam();
            }
            var object = CuriousJS.Game.createObjectByName(asset.className, asset.classContext, asset.classParam);
            object.x = asset.x;
            object.y = asset.y;
            object.name = asset.name;
            if(asset.children !== undefined && asset.children.length > 0) {
                this.initAssets(asset.children, object);
            }
            parent.addChild(object);
        }
    };

    that.getChildByName = function(name) {
        for(var i = 0; i < this.children.length; i++) {
            if(this.children[i].name === name) {
                return this.children[i];
            }
        }
        return null;
    };

    that._init();
    return that;
};