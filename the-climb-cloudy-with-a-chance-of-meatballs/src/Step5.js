



var game={};
game.player={};
game.player.velX=0;
game.player.velY=0;
game.player.speed=10;
game.player.jumpSpeed=30;
game.player.trampolineSpeed=60;
game.player.jumping=false;
game.player.isLeft=false;
game.player.isRight=false;
game.player.isIdle=true;
game.friction=0.7;
game.gravity=1.3;
game.width=470;
game.height=658;
game.start_width=100;
game.keys=[];
game.hits=0;
game.bonus_chance = .7;
/*

 game.points_bonus_chance=0.3;
 game.trampoline_bonus_chance=0.2;
 game.multiply_bonus_chance=0.2;
 game.time_bonus_chance=0.2;

 */
game.points_bonus_chance=0.65;
game.points2_bonus_chance=0.15;
game.points3_bonus_chance=0.05;
game.trampoline_bonus_chance=0.05;
game.multiply_bonus_chance=0.05;
game.time_bonus_chance=0.05;
game.nDifficultyMultiplayer=1;
game.nTimeMultiplayer=1;


game.orginalGameVariables={};
game.orginalGameVariables.speed = game.player.speed;
game.orginalGameVariables.jumpSpeed = game.player.jumpSpeed;
game.orginalGameVariables.friction = game.friction;
game.orginalGameVariables.gravity = game.gravity;
// EXTRA POINTS BONUS

game.pointsMulti=1;
game.isExtraPointsTime =5000;
game.isTimeSlowTime =5000;
game.isExtraPointsTimeout;
game.isTimeSlowTimeout;
game.gameOverTimeout;
game.timeMulti=1;
game.gameOver =false;


(function()
{
    'use strict';
    var t;
    var isRecord = true;
    var bgd;
    var click;
    var obstacles;
    var isPaused;
    var pauseBtt;
    var tempY;
    //var bCheck=false;
    var platform;
    var timeIcon,multiPointsIcon;
    var player,hud,tPoints,sh,tBestPoints,points,points_flush,tHeight,hud2,tHeight,bgd2,line;
    var highest;
    var nHeight = 0;

    var Step5=function()
    {
        t = this;
        t.isWalking=false;
        isRecord = true;
        this.initialize();


    };
    var p=Step5.prototype=new c.Container();
    p.initialize=function() {
        highest = readCookie('CloudyWithAChanceOfMeatballs2_Height');
        if(highest==null||highest=='undefined'){


            highest=0;
        }
        nHeight = 0;
        console.log(highest);

        if(main.mode==2){
            game.nDifficultyMultiplayer=0.9;
            game.bonus_chance*=Math.sqrt(game.nDifficultyMultiplayer);
        }
        obstacles = new Obstacles(highest);
        t.addChild(obstacles);



/// HUD1
        hud = new c.Container();
        TweenMax.from(hud,1,{y:-110});
        bgd = new c.Bitmap(main.loadedData.getResult('hud'));
        hud.addChild(bgd);
        tPoints  = new c.Text('0', '20px cloudy_boldregular','#17527E');
        tPoints.textBaseline = 'alphabetic';
        tPoints.lineWidth = 92;
        tPoints.lineHeight=50;
        tPoints.textAlign='center';
        tPoints.x = 66;
        tPoints.y = 57;
        hud.addChild(tPoints);

        var t1  = new c.Text(globals.strings.pages.game.score.text, globals.strings.pages.game.score.font,'#42b9ec');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 92;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = globals.strings.pages.game.score.x+69;
        t1.y = 10+globals.strings.pages.game.score.y+getoffset(t1.font);
        hud.addChild(t1);









/// HUD2

        hud2 = new c.Container();
        hud2.x= 450;
        TweenMax.to(main.soundBtt,1,{y:80});
        TweenMax.from(hud2,1,{y:-110});
        bgd2 = new c.Bitmap(main.loadedData.getResult('hud2'));
        hud2.addChild(bgd2);


         t1  = new c.Text(globals.strings.pages.game.height.text, globals.strings.pages.game.height.font,'#42b9ec');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 92;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = globals.strings.pages.game.height.x+66;
        t1.y = 10+globals.strings.pages.game.height.y+getoffset(t1.font);
        hud2.addChild(t1);

        tHeight  = new c.Text('0', '20px cloudy_boldregular','#17527E');
        tHeight.textBaseline = 'alphabetic';
        tHeight.lineWidth = 92;
        tHeight.lineHeight=50;
        tHeight.textAlign='center';
        tHeight.x = 60;
        tHeight.y =37+getoffset(tHeight.font);
        hud2.addChild(tHeight);

      

        points_flush = new c.Bitmap(main.loadedData.getResult('points_flush'));
        hud2.addChild(points_flush);

        points_flush.alpha=0;



        sh = new c.Shape(new c.Graphics().beginFill('#a9e6ff').drawRect(-287, -512, 574, 1024).endFill());
        sh.x =  287;
        sh.y =  517;
        TweenMax.to(sh,2,{alpha:0});
        t.addChild(hud,hud2);
        t.addChild(sh);

        addActor();
        startGame();

        timeIcon = new c.Bitmap(main.loadedData.getResult('timeIcon'));
        timeIcon.x = 119;
        timeIcon.y = 26;

        multiPointsIcon = new c.Bitmap(main.loadedData.getResult('multi'));
        multiPointsIcon.x = 174;
        multiPointsIcon.y = 26;


    };

    function startGame(){
        game.gameOver=false;
        if(globals.isMobile){
            console.log('JEST MOBILE');
            t.addEventListener('mousedown',onJump);
        }else{


            window.document.onkeydown = keydown;
            window.document.onkeyup = keyup;
        }

        c.Ticker.addEventListener('tick', update);
    }
    function onJump(){
        game.keys[38]=true;
        t.addEventListener('tick',onMove);
    }
    function onMove(){

        console.log(click);
        if(!click){
            click=574/2;

        }
        click = stage.mouseX/main.scale;
        var zz=player.x - click;
        console.log(zz);
        if(zz>30){
            game.keys[39]=false;
            game.keys[37]=true;
        }else if(zz<-20){
            game.keys[39]=true;
            game.keys[37]=false;
        }else{
            game.keys[39]=false;
            game.keys[37]=false;
        }

    }

    function addActor(){
        player=new Player();
        t.addChild(player);
        player.x = 574/2;
        player.y = 658;


    }
    function keydown(e){

        game.keys[e.keyCode] = true;
    }
    function keyup(e){

        game.keys[e.keyCode] = false;
    }

    function update(){

        if(obstacles.falling){
            game.gameOverTimeout = setTimeout(anim,1000);
            console.log(' UWAGA WLACZ GAME OVER');
            //return;
        }
        updateVars();
        if(main.isMobile){
            if(Math.abs(click-player.x)<10) {
                game.player.isLeft = false;
                game.player.isRight = false;
            }
        }
        if (game.keys[39]) {

            game.player.isLeft=true;
            if (game.player.velX < game.player.speed) {
                game.player.velX+=game.player.speed;

            }
        }else{
            game.player.isLeft=false;
        }
        if (game.keys[37]) {

            // left arrow
            game.player.isRight=true;
            if (game.player.velX > -game.player.speed) {
                game.player.velX-=game.player.speed;
            }
        }else{
            game.player.isRight=false;
        }
        if (game.keys[38] || game.keys[32]) {
            // up arrow or space
            if(!game.player.jumping){
                game.player.jumping = true;
                player.playAnim('jump');
                game.player.velY = -game.player.jumpSpeed;
                obstacles.bCheck=true;
            }

        }

        game.player.velX *= game.friction;

        if(!game.player.jumping){
            if(game.player.isLeft)
            {

                player.playAnim('walk',1);
            }else if(game.player.isRight){

                player.playAnim('walk',-1);
            }else{
                game.player.isIdle=true;
                player.playAnim('idle',1);

            }
        }else{

            game.player.velY += game.gravity;
            game.player.velY = Math.min(game.player.velY,game.gravity*40);
            
            if(game.player.velY>0&&(player.player.currentAnimation!=='fall'&&player.player.currentAnimation!=='falling'))player.playAnim('falling');

            if(game.player.isLeft){
                player.revert(1)
            }
            if(game.player.isRight){
                player.revert(-1)
            }
        }
    


        player.x += game.player.velX;

        obstacles.y -= game.player.velY;

        var tempH=Math.ceil(Math.max(Math.floor(obstacles.y),0)/10);
        if(tempH>nHeight){
            nHeight = tempH;
        }
        if(highest<nHeight&& isRecord){
            isRecord=false;
            flushPoints();
            playSounds('sBonus4');

        }
        tHeight.text =nHeight;

            

        if (player.x >= game.width) {
            player.x = game.width;
        } else if (player.x <= game.start_width) {
            player.x = game.start_width;
        }
        if(!game.player.jumping){
            obstacles.y=0;
        }
        if(obstacles.y<=0 )
        {


            obstacles.y=0;
            game.player.jumping=false;

            if(obstacles.falling){

                if(globals.isMobile){
                        console.log('JES MOBILE');
                        t.removeEventListener('tick',onMove);
                        t.removeEventListener('mousedown',onJump);
                        t.removeEventListener('mousedown',onJump);
                }else{
                        console.log('remove listener')
                        window.document.onkeydown = null;
                        window.document.onkeyup = null;
                }

                    anim();
            }

            if(obstacles.falling||game.hits>=1){
                console.log('tu');
                resetGame();

            }else{
                if(globals.isMobile)game.keys=[];

            }

        }else{
            obstacles.update();
        }


        checkCoordinates();


    }
    function resetGame(){
        click=null;

        game.keys=[];
        playSounds('sBad4');
        obstacles.reset();
        game.hits=0;
        createjs.Ticker.framerate=35;
        t.resetPointsMulti();
        tPoints.text = '0';
    }

    function checkCoordinates(){

        var toCheck =[];
        for(var i=3;i<obstacles.numChildren;i++) {
            var temp = obstacles.getChildAt(i);
            toCheck.push(temp);
        }


        toCheck.forEach(function(entry) {
           if(ndgmr.checkRectCollision(player.hz,entry.hz)){

               game.player.velY = -game.player.jumpSpeed;
                game.hits++;

                if(entry.bonus) {

                    getBonus(entry,entry.bonus.name.substr(5));

                }else{
                    playSounds('sGood1');
                }
               entry.removeChild(entry.hz);
               entry.hit();
               game.player.jumping = true;
               player.playAnim('jump');
               obstacles.bCheck=true;

              return;
            }
        });

        toCheck =[];

    }
    function getBonus(item,zz){



        var tt = parseInt(zz);
        if(tt<6){
            addPoints(100);
        }else if(tt==6){
            addPoints(200);
        }else{
            addPoints(500);
        }
            item.bonusHit();

        //getBonus
    }

    p.addTimeIcon = function(){

        this.addChild(timeIcon);
        
        console.log('addingTimePlatform');
    };

    p.resetTime = function(){
        main.pageContainer.getChildAt(0).removeChild(timeIcon)
        createjs.Ticker.framerate=30;
    };
    p.resetPointsMulti = function(){
        game.pointsMulti = 1;
        main.pageContainer.getChildAt(0).removeChild(multiPointsIcon);

    };
    p.addMultiIcon = function(){

        this.addChild(multiPointsIcon);

    };

    function updateVars(){

        game.player.speed = game.orginalGameVariables.speed*game.nDifficultyMultiplayer;
        game.player.jumpSpeed = game.orginalGameVariables.jumpSpeed*game.nDifficultyMultiplayer;
        //game.gravity = game.orginalGameVariables.gravity*game.nTimeMultiplayer;


    }
    function addPoints(p) {
        var points = tPoints.text;
        tPoints.text = parseInt(points) + p * game.pointsMulti;

    }

    function flushPoints(){
        TweenLite.to(points_flush,.3,{alpha:1});
        TweenLite.to(points_flush,.3,{delay:.3,alpha:0});
        TweenLite.to(points_flush,.3,{delay:.6,alpha:1});
        TweenLite.to(points_flush,.3,{delay:.9,alpha:0});

    }
    function anim(){
        if(!game.gameOver) {
            clearTimeout(game.isTimeSlowTimeout);
            clearTimeout(game.gameOverTimeout);
            clearTimeout(game.isExtraPointsTime);

            main.height = tHeight.text;
            main.points = tPoints.text;

            console.log('gameOver');
            t.addChild(sh);
            sh.alpha=0;

            TweenMax.to(sh, .5, {alpha: 1, onComplete: disp});

            game.gameOver=true;
        }
    }

    function disp(){
        c.Ticker.removeEventListener('tick', update);
        t.dispatchEvent({param: Step6, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Step5=Step5;

}());
