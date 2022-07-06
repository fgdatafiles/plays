var utils = utils || {};


utils = {
    animateNumber: function (num, fn, step, speed, endFn) {
        var _step = step || 10;
        var _speed = speed || 10; // in seconds because this is total
        var repeats = Math.ceil(num / _step);
        var animSpeed = (_speed / repeats) * 1000; // in ms

        window.console.log("repeats: " + repeats + " animSpeed: " + animSpeed);
        var _endFn = endFn || function () {
            game.time.events.remove(this);
        };
        var _timer = game.time.create(true);
        _timer.start();
        _timer.onComplete.add(_endFn);
        _timer.repeat(animSpeed, repeats, fn, this, [_step]);

    },
    garbageCollect: function () {
        if(reg.presents){
            reg.presents.removeChildren();
            reg.presents = null;
        }

        if(reg.leftClickGroup){
            reg.leftClickGroup.removeChildren();
            reg.leftClickGroup = null;
        }

        if(reg.noClickGroup){
            reg.noClickGroup.removeChildren();
            reg.noClickGroup = null;
        }

        if(reg.gameOverGroup){
            reg.gameOverGroup.removeChildren();
            reg.gameOverGroup = null;
        }

        if(reg.startMsg) {
            reg.startMsg.destroy();
            reg.startMsg = null;
        }

        if(reg.startMsg2) {
            reg.startMsg2.destroy();
            reg.startMsg2 = null;
        }
    }
};