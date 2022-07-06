CuriousJS.PanZoom = function(target /* CreateJS Container */, scene, canvas, contentWidth, contentHeight, minZoom, maxZoom){
    
    // Private properties and methods
    
    var startX, startY, lastZoomScale, pinching, dragEnabled;
        
    var setZoom = function(zoom){
        if(dragEnabled) {
            var initialX = target.scaleX;
            var initialY = target.scaleY;
            target.scaleX = zoom;
            target.scaleY = zoom;
            target.x /= initialX/zoom;
            target.y /= initialY/zoom;
        }
    };
    
    var gesturePinchZoom = function(event) {
        if(dragEnabled) {
            var p1 = event.targetTouches[0];
            var p2 = event.targetTouches[1];
            var zoomScale = Math.sqrt(Math.pow(p2.pageX - p1.pageX, 2) + Math.pow(p2.pageY - p1.pageY, 2)); //euclidian distance
            if(lastZoomScale) {
                var zoom = target.scaleX+(zoomScale - lastZoomScale)/100;

                // Clamp it to acceptable range
                zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
                setZoom(zoom);
            }
            lastZoomScale = zoomScale;
        }
    };
    
    var init = function(){
        dragEnabled = true;
        canvas.addEventListener('touchstart', function(e) {
            lastZoomScale = null;
        }.bind(this));
        
        canvas.addEventListener('touchend', function(e) {
            if(e.targetTouches.length == 0){
                pinching = false;
            }
        }.bind(this));

        canvas.addEventListener('touchmove', function(e) {
            e.preventDefault();
            if(e.targetTouches.length > 1) {
                pinching = true;
                gesturePinchZoom(e);
            }
        }.bind(this));
        
        scene.startDrag = function(event) {
            panZoom.startX = event.stageX - target.x;
            panZoom.startY = event.stageY - target.y;
        };
        
        scene.moveDrag = function(event) {
            if(pinching){
                event.preventDefault();
                return;
            }
            panZoom.dragging = true;
            panZoom.x = event.stageX - panZoom.startX;
            panZoom.y = event.stageY - panZoom.startY;
        };

        scene.stopDrag = function(event) {
            panZoom.dragging = false;
        };

        scene.mouseWheel = function(event) {
            if(pinching) return;
            event.stopPropagation();
            event.preventDefault();
            var delta = event.wheelDelta ? event.wheelDelta : (event.detail * -1);
            if(delta > 0) {
                //mouse wheel up
                this.zoomIn();
            } else {
                //mouse wheel down
                this.zoomOut();
            }
        };

        scene.zoomIn = function() {
            if(target.scaleX < maxZoom) {
                setZoom(target.scaleX + 0.05);
            }
        };

        scene.zoomOut = function() {
            if(target.scaleX > minZoom) {
                setZoom(target.scaleX - 0.05);
            }
        };
    };
    
    var update = function(){
        if(dragEnabled) {
            if(panZoom.dragging && !pinching) {
                target.x = panZoom.x;
                target.y = panZoom.y;
            }
            //check x bounds
            if(target.x > (contentWidth * target.scaleX - canvas.width) / 2) {
                target.x = (contentWidth * target.scaleX - canvas.width) / 2;
            } else if(target.x < -(contentWidth * target.scaleX - canvas.width) / 2) {
                target.x = -(contentWidth * target.scaleX - canvas.width) / 2;
            }
            //check y bounds
            if(target.y > (contentHeight * target.scaleY - canvas.height) / 2) {
                target.y = (contentHeight * target.scaleY - canvas.height) / 2;
            } else if(target.y < -(contentHeight * target.scaleY - canvas.height) / 2) {
                target.y = -(contentHeight * target.scaleY - canvas.height) / 2;
            }
        }
    };
    
    
    // Public properties and methods
    var panZoom = {
        minZoom: minZoom,
        maxZoom: maxZoom,
        x: 0,
        y: 0,
        dragging: false,
        update: update,
        destroy: function(){
            // TO DO
        },
        enable: function() {
            dragEnabled = true;
        },
        disable: function(){
            dragEnabled = false;
        }
    };
    
    init();
    
    return panZoom;
    
};