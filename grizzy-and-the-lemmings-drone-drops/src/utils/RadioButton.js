
'use strict';
(function() {


    var RadioButton = function(d1,d2,data) {

            this.initialize(d1,d2,data);
    };

    var button = RadioButton.prototype = new createjs.Container();
    RadioButton.prototype.selected = false;
    RadioButton.prototype.bmp2;
    var zz;

    button.Container_initialize = button.initialize;



    button.initialize = function(d1,d2,data) {
        this.Container_initialize();
        zz= this;
        var tt  = new createjs.Text(data.text, data.font,'#ffffff');
        tt.lineWidth=421;
        tt.textAlign='center';
        tt.x = 236/2+data.x;
        tt.y =48+data.y;

        zz.bmp1 = new createjs.Bitmap(d1);

        zz.addChild(zz.bmp1);
        this.bmp2 = new createjs.Bitmap(d2);
        zz.addChild(this.bmp2);
        this.bmp2.visible = false;
        zz.cursor = 'pointer';
        this.addChild(tt);
    };


   button.select= function(b){

       this.bmp2.visible =!this.bmp2.visible;
       this.selected =  this.bmp2.visible;

   };
    window.RadioButton = RadioButton;
}());