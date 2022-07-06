(function() {
    'use strict';
    var FrameButtonGroup = function() {

        FrameButtonGroup.prototype.nn=-1;
        createjs.EventDispatcher.initialize(FrameButtonGroup.prototype);
        var group =[];
        var selected;
        var nSelected=-1;
        var zz = this;
        this.addToGroup = function(b){

           group.push(b);
            b.addEventListener('click', this.select);
        };

        this.select = function(e){
            if(selected!=null){

                selected.select(false);
            }
            selected = e.currentTarget;
            selected.select(true);
            nSelected = selected.name.substr(1);
              dispatch();
        };

        this.getSelected = function(){
            return  nSelected;
        };
        this.forceSelection = function(n){
                force(n);
        };

         function force(n){
             if(selected!=null){

                 selected.select(false);
             }
             for(var i=0;i<group.length;i++){
                 if(group[i].name.substr(1)==n){
                     //console.log('znalazlem');
                     selected = group[i];
                     selected.select(true);
                 }
             }

             nSelected = n;

         }
         function dispatch (){
             zz.dispatchEvent('change');
         }

    } ;





window.FrameButtonGroup = FrameButtonGroup;
}());