function CScoreAnim(oAnimScoreContainer, pScoreFinalPos){

    var _oParentContainer;
    
    var _pScoreFinalPos;
    
    this._init = function(oAnimScoreContainer, pScoreFinalPos){
        
        _oParentContainer = oAnimScoreContainer;
        

        _pScoreFinalPos = pScoreFinalPos;
        
    };
    
    this.play = function(iScore, pPos){
        
        var oScoreStroke = new createjs.Text(0,"24px "+PRIMARY_FONT, "#000000");
        oScoreStroke.textAlign = "left";
        oScoreStroke.textBaseline = "middle";
        oScoreStroke.lineWidth = 200;
        oScoreStroke.outline = 5;

        _oParentContainer.addChild(oScoreStroke);
        
        var oScore = new createjs.Text(0,"24px "+PRIMARY_FONT, "#c1e401");
        oScore.textAlign = "left";
        oScore.textBaseline = "middle";
        oScore.lineWidth = 200;
        //_oScore.alpa = 0;
        _oParentContainer.addChild(oScore);        
        oScoreStroke.text = oScore.text = "+"+iScore;
        
        oScoreStroke.x = oScore.x = pPos.x - oScore.getBounds().width/2;
        oScoreStroke.y = oScore.y = pPos.y;
        
        createjs.Tween.get(oScore).to({y:oScore.y - 40}, 500, createjs.Ease.cubicOut);//.to({scaleX:1, scaleY:1}, 100);
        createjs.Tween.get(oScoreStroke).to({y:oScoreStroke.y - 40}, 500, createjs.Ease.cubicOut).wait(0).call(function(){
            createjs.Tween.get(oScore).to({x:_pScoreFinalPos.x, y:_pScoreFinalPos.y}, 1500, createjs.Ease.quartIn);
            createjs.Tween.get(oScoreStroke).to({x:_pScoreFinalPos.x, y:_pScoreFinalPos.y}, 1500, createjs.Ease.quartIn).call(function(){ 
                s_oGame.refreshScore(iScore);
                s_oGame.checkWinGame();
                _oParentContainer.removeChild(oScoreStroke);
                _oParentContainer.removeChild(oScore);
            });            
        });
    };

    this._init(oAnimScoreContainer, pScoreFinalPos);
}


