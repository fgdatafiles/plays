(function (exports){
    exports.inBounds = function (xArg, yArg, btn){
        var x = xArg / exports.scaleX;
        var y = yArg / exports.scaleY;

        return x >= btn.x && x <= btn.x + btn.width &&
               y >= btn.y && y <= btn.y + btn.height;
    };
})(window.head);

// x and y positions must be correct, after being accounted for for the resizing and scaling
// btn should be an object containing its x and y positions, and height and width as properties to the object
// exports should be where the `inBounds` function should be accessible. For example, if exports was window.gameName, it'd be accessible at
// window.gameName.inBounds