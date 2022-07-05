(function (exports){
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    exports.write = function (text, x, y, preFunc, stroke){
        if(preFunc)
        {
            ctx.save();
            preFunc(ctx);
        }
        text = exports.translate(text);

        var xPos = x;
        if(x === 'center'){
            xPos = (canvas.width - ctx.measureText(text).width) / 2;
        }

        if(stroke){
            ctx.strokeText(text, xPos, y);
        }
        else {
            ctx.fillText(text, xPos, y);
        }

        if(preFunc){
            ctx.restore();
        }
    };
})(window.head);