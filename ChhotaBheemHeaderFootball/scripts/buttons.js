(function (exports){
    var spritesheetName = 'buttons.png';
    var touchDevice = 'ontouchstart' in document.body;
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    exports.buttons = []; // You can push or remove onscreen buttons at any moment
    exports.addButton = function (text, x, y, conditionFn, callback, canBePressed, imgName, atlasName, textResize, width, height){
        var button = {};

        button.text = text;
        button.x = x;
        button.y = y;
        button.conditionFn = conditionFn || function (){
            return true;
        };
        button.callback = callback || function (){};
        button.imgName = imgName || 'red_btn.png';
        button.canBePressed = canBePressed ? canBePressed : false;
        button.atlasName = atlasName || spritesheetName;
        if(atlasName === ''){
            button.atlasName = undefined;
        }
        button.ctx = canvas.getContext('2d');
        var slice = exports.getSprite(button.imgName, button.atlasName);
        button.width = width || slice.w;
        button.height = height || slice.h;

        ctx.font = '34pt Megalopolis';
        var textWidth = ctx.measureText(exports.translate(button.text)).width;
        if(textWidth > button.width - 30 && button.text !== 'rotate' || button.text === 'Play'){
            if(textResize){
                button.textSize = '34pt Megalopolis';
            }
            else {
                button.width = textWidth + 180;
            }
        }
        button.pressed = false;
        button.firstClick = false;

        exports.buttons.push(button);
        return button;
    };

    exports.removeButton = function (button){
        exports.buttons.splice(exports.buttons.indexOf(button), 1);
    };

    var buttonImg, buttonW, buttonH, tmpSlice; // Changes for every button in the loop for drawButtons
    exports.drawButtons = function (){
        exports.buttons.forEach(function (button){
            if(button.conditionFn()){
                buttonImg = button.imgName;
                buttonW = button.width;
                buttonH = button.height;
                if(button.canBePressed === true && button.pressed === true){
                    buttonImg = 'pressed_' + buttonImg;
                    tmpSlice = exports.getSprite(buttonImg, button.atlasName);
                    buttonW = tmpSlice.w;
                    buttonH = tmpSlice.h;
                }
                if(button.x === 'center'){
                    button.x = (canvas.width - buttonW) / 2;
                }
                if(button.y === 'center'){
                    button.y = (canvas.height - buttonH) / 2;
                }

                if(button.text === 'rotate'){
                    ctx.save();
                    ctx.translate(button.x + button.width, button.y);
                    ctx.scale(-1, 1);
                    exports.drawImage(buttonImg, 0, 0, button.atlasName, undefined, button.width, button.height);
                    ctx.restore();
                }
                else 
                {
                    exports.drawImage(buttonImg, button.x, button.y, button.atlasName, undefined, button.width, button.height);
                }

                ctx.font = button.textSize || '25pt Megalopolis';
                if(button.text !== 'rotate'){
                    exports.write(button.text, button.x + (button.width - ctx.measureText(exports.translate(button.text)).width) / 2, button.y + button.height - 37,
                        function (ctx){
                            ctx.font = button.textSize || '24pt Megalopolis';
                            if(button.pressed && button.canBePressed){
                                ctx.fillStyle = 'black';
                            }
                            else {
                                ctx.fillStyle = 'white';
                            }
                        }
                    );
                }
            }
        });
    };

    var manageClick = function (e, down){
        var x = (e.changedTouches && e.changedTouches[0].pageX) || e.pageX;
        var y = (e.changedTouches && e.changedTouches[0].pageY) || e.pageY;
        exports.buttons.forEach(function (button){
            // console.log('Click', button.conditionFn(), exports.inBounds(x, y, button))
            button.pressed = false;
            if(button.conditionFn() && exports.inBounds(x, y, button)){
                if(down === false){
                    if(button.firstClick === true){
                        button.firstClick = false;
                        button.callback(button);
                    }
                }
                else{
                    button.pressed = true;
                    button.firstClick = true;
                }
            }
        });
    };

    document.body.addEventListener(touchDevice ? 'touchstart' : 'mousedown', function (e){
        manageClick(e, true);
    }, false);
    document.body.addEventListener(touchDevice ? 'touchend' : 'mouseup', function (e){
        manageClick(e, false);
    }, false);

})(window.head);
// As usual, change that to the namespace you're using