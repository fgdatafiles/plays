//
(function(){
    function Button(_bgd,_bgdOver,_iii,_data,_clicksound) {
        this.Container_constructor();



        this.init(_bgd,_bgdOver,_iii,_data,_clicksound);


    }
    var p = createjs.extend(Button,createjs.Container);
    p.init = function(_bgd,_bgdOver,_iii,_data,_clicksound){

        this.clicksound ='click';
        if(_clicksound){
            this.clicksound = _clicksound;
        }
        this._bgd = _bgd;
        this._bgdOver = _bgdOver
        this._data = _data;

        
        this.clicktarget=null;
        this.mouseChildren=false;
        this.stateClicked = false;

        this.bgd=new c.Bitmap(this._bgd);
        this.addChild(this.bgd);
        this.bgdOver=new c.Bitmap(this._bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;

        this.img=new c.Bitmap(_iii);
        this.addChild(this.img);
        if(this._data) {

            this.font = this._data.font;
            this.txt = new c.Text(this._data.text, this._data.font, '#ffffff');
            this.txt.textBaseline = 'alphabetic';
            this.txt.textAlign = 'center';


            this.txt.x = this.bgd.image.width / 2  + this._data.x;

            var l = this.txt.font;
            l =l.substr(0,l.indexOf('px'));
            this.txt.lineWidth = this.bgd.image.width;
            //this.txt.lineHeight = l;
            this.txt.y =getoffset(this._data.font)+this.bgd.image.height-this.txt.getMeasuredHeight()-(l/3);
         
            //= +getoffset(data.font)+data.y-this.txt.getMeasuredHeight()/2;
        }
        this.addChild(this.txt);
        this.addEventListener('mouseover',over);
        this.addEventListener('mouseout', out);
        this.addEventListener('click', click);

        //   this.cache(0,0,this.bgd.image.width,this.bgd.image.height);

    };
    function over(e)
    {

        playSounds(e.currentTarget.clicksound);
        console.log(e.currentTarget.clicksound);
        TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});

        e.currentTarget.cursor = 'pointer';
    }

    function out(e)
    {
        TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:0,ease: Sine.easeOut});
    }
    function click(e)
    {
        //playSounds('yeah2');


        //e.currentTarget.removeEventListener('click', click);

        if(e.currentTarget.stateClicked){
            TweenLite.to(e.currentTarget.bgdOver,0.3,{alpha:1,ease: Sine.easeOut});
            e.currentTarget.removeEventListener('mouseover',over);
            e.currentTarget.removeEventListener('mouseout', out);
            e.currentTarget.mouseEnabled= false;
        }


    }

    window.Button = createjs.promote(Button, "Container");
}());