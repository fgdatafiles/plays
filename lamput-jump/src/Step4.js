




(function()
{
    'use strict';
    var t;
    var isRecord = true;
    var bgd;
    var click;
    var obstacles;

    var timeIcon,multiPointsIcon;
    var player,hud,tPoints,sh,points_flush,hud2,tHeight,bgd2;
    var highest;
    var nHeight = 0;
    function Step4()
    {
        this.Container_constructor();
        t = this;
        t.isWalking=false;
        isRecord = true;
        this.initialize();

    }
    var p = c.extend(Step4, c.Container);
    p.initialize=function() {
        game.nCurrentLevel=1;
        level1Points =0
        nHeight = 0;
        if(main.mode===2){
            game.nDifficultyMultiplayer=0.9;
            game.bonus_chance*=Math.sqrt(game.nDifficultyMultiplayer);
        }
        obstacles = new Obstacles();
        t.addChild(obstacles);



/// HUD1
        hud = new c.Container();
        hud.y  = 105;
        TweenMax.from(hud,1,{y:-110});
        bgd = new c.Bitmap(main.loadedData.getResult('hud2'));
        hud.addChild(bgd);
        tPoints  = new c.Text('0', '36px lamput-boldregular','#ff8500');
        tPoints.textBaseline = 'alphabetic';
        tPoints.lineWidth = 92;
        tPoints.textAlign='left';
        tPoints.x = 85;
        tPoints.y = 48;
        hud.addChild(tPoints);



/// HUD2

        hud2 = new c.Container();
        hud2.x= 567;
        hud2.y  = 95;
        TweenMax.from(hud2,1,{y:-110});
        bgd2 = new c.Bitmap(main.loadedData.getResult('hud'));
        hud2.addChild(bgd2);
        tHeight  = new c.Text('0', '36px lamput-boldregular','ffff63');
        tHeight.textBaseline = 'alphabetic';
        tHeight.lineWidth = 92;
        tHeight.textAlign='center';
        tHeight.x = 127;
        tHeight.y = 53;
        hud2.addChild(tHeight);
        hud2.visible = false;



        points_flush = new c.Bitmap(main.loadedData.getResult('points_flush'));
        hud2.addChild(points_flush);

        points_flush.alpha=0;



        sh = new c.Shape(new c.Graphics().beginFill('#a9e6ff').drawRect(-384, -683, 768, 1365).endFill());
        sh.x =  384;
        sh.y =  683;
        TweenMax.to(sh,2,{alpha:0});
        t.addChild(hud,hud2);
        t.addChild(sh);

        addActor();
        startGame();

        timeIcon = new c.Bitmap(main.loadedData.getResult('timeIcon'));
        timeIcon.x = 102;
        timeIcon.y = 26;

        multiPointsIcon = new c.Bitmap(main.loadedData.getResult('multi'));
        multiPointsIcon.x = 182;
        multiPointsIcon.y = 26;


    };

    function startGame(){
        game.gameOver=false;
        if(globals.isMobile){

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


        if(!click){
            click=768/2;

        }
        click = stage.mouseX/main.scale;
        var zz=player.x - click;

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
        player.x = 768/2;
        player.y = 1075;


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

                player.playAnim('walk',-1);
            }else if(game.player.isRight){

                player.playAnim('walk',1);
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

                    t.removeEventListener('tick',onMove);
                    t.removeEventListener('mousedown',onJump);
                    t.removeEventListener('mousedown',onJump);
                }else{

                    window.document.onkeydown = null;
                    window.document.onkeyup = null;
                }

                anim();
            }

            if(obstacles.falling||game.hits>=1){

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

        obstacles.reset();
        game.hits=0;
        createjs.Ticker.framerate=game.standardframeRate*0.7;
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
                    playSounds('sJump');
                }
                entry.removeChild(entry.hz);
                entry.hit();
                game.player.jumping = true;
                player.playAnim('jump');
                obstacles.bCheck=true;

            }
        });


    }
    function getBonus(item,zz){



        var tt = parseInt(zz);
        if(tt<6){
            addPoints(100);
        }else if(tt===6){
            addPoints(200);
        }else{
            addPoints(500);
        }
        item.bonusHit();

        //getBonus
    }

    p.addTimeIcon = function(){

        this.addChild(timeIcon);


    };

    p.resetTime = function(){
        main.pageContainer.getChildAt(0).removeChild(timeIcon)
        createjs.Ticker.framerate=game.standardframeRate;
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

    }
    function addPoints(p) {
        var points = tPoints.text;
        tPoints.text = parseInt(points) + p * game.pointsMulti;

    }

    function anim(){
        if(!game.gameOver) {
            clearTimeout(game.isTimeSlowTimeout);
            clearTimeout(game.gameOverTimeout);
            clearTimeout(game.isExtraPointsTime);

            main.height = tHeight.text;
            level1Points = parseInt(tPoints.text);
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

    window.Step4 = c.promote(Step4, "Container");

}());