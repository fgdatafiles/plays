CuriousJS.Game.Math = {};
CuriousJS.Game.Math.lerp = function(current, target, time) {
    return current + time * (target - current)
};
CuriousJS.Game.Math.distance = function(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
};
CuriousJS.Game.Math.gcd = function(a, b) {
    if (b) {
        return CuriousJS.Game.Math.gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
};
CuriousJS.Game.IsMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
};
CuriousJS.Game.createObjectByName = function(functionName, context, args) {
    // var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return new window[context][func](args);
};
CuriousJS.Game.executeFunctionByName = function(functionName, context, args) {
    // var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return window[context][func].apply(window[context], args);
};