(function() {
    'use strict';
    var t;

    function ResetClass() {
        this.Container_constructor();

        t = this;
        this.initialize();

    };
    var p = c.extend(ResetClass, c.Container);
    p.initialize = function() {

        setTimeout(onDispatch, 100)
    };

    function onDispatch() {

        t.dispatchEvent({
            param: actualClassLevel,
            type: 'changePage',
            bubbles: true,
            cancelable: true
        });
    }
    window.ResetClass = c.promote(ResetClass, "Container");


}());