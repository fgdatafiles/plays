/**
 * [initTimer description]
 * @return {[type]} [description]
 */
function initTimer(time) {
    reg.timer = game.time.create(false);
    var _time = time || 1000;

    reg.timeIndices = 0;
    reg.timeIndiceLimit = 5;
    reg.timer.loop(_time, function () {
        // update or create something based on timer
        launchPresent();
        reg.timeIndices += 1;
        //window.console.log("creating present");
        if (reg.timeIndices === reg.timeIndiceLimit) {
            reg.timer.stop();
            game.time.events.remove(reg.timer);

            var _time = time - 150 < 450 ? 450 : time - 150;
            initTimer(_time);
            return false;
        }
    }, this, []);

    reg.timer.start();
    return reg.timer;
}

/**
 * [removeTimer description]
 * @return {[type]} [description]
 */
function removeTimer() {
    gameStop = true;

    if(reg.timer){
        reg.timer.stop();
    }

    // clear timer
    game.time.events.remove(reg.timer);

    // do something when all timers stop ex:
    // saveScore();
}

/**
 * [countDown description]
 * @param  {Function} fn    [description]
 * @param  {[type]}   endFn [description]
 * @return {[type]}         [description]
 */
function countDown(fn, endFn) {
    endFn = endFn || function () {};
    var _timer = game.time.create(false);
    _timer.start();
    _timer.onComplete.add(endFn);
    _timer.repeat(Phaser.Timer.SECOND, 3, fn, this);
    window.console.log("adding timer");
}

function addLoopedTimer(time, fn) {
    var _timer = game.time.create(false);
    _timer.start();
    _timer.loop(time, fn, this);
}
/**
 * [simpleTimer description]
 * @param  {[type]}   time [description]
 * @param  {Function} fn   [description]
 * @return {[type]}        [description]
 */
function simpleTimer(time, fn, completeFn) {

    var timer = {}
    completeFn = completeFn || function () {
        game.time.events.remove(timer);
        window.console.log("timer removed");
    };
    timer = game.time.events.add(time, fn, this, []);
    timer.timer.onComplete.add(completeFn);
    return reg.hintTimer;
}