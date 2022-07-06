/**
 * Created by pawel on 02.10.2014.
 */
var ScreenGame = {

    MAX_DIFFICULTY_DISTANCE: 200,

    s_container: createjs.Container,
    s_hero: Hero,
    s_gameLayer: GameLayer,
    s_ratio: 1,
    s_prevTime: 0,


    Init: function()
    {
        Main.s_world.setAutoScroll(false);

        Main.s_world.getGameLayer().startGame();

        //
        this.s_container = new createjs.Container();
        Main.s_scene.addChild(this.s_container);

        //
        this.s_data = Main.s_data;

        //
        this.s_prevTime = new Date().getTime();

        //
        this.Reset();

        this.s_gameLayer = Main.s_world.getGameLayer();
        this.s_hero = new Hero(Main.s_world.GAME_LAYER_HEIGHT);

        this.s_gameLayer.addHero(this.s_hero);

        //controller
        this.s_controller1 = ControllerTouch.Init(this.s_hero);
        if (!Main.IsMobile())
        {
            this.s_controller2 = ControllerKeyboard.Init(this.s_hero);
        }

        //hud
        this.s_hud = new Hud();
        this.s_container.addChild(this.s_hud);

        //
        var size = Main.GetCanvasSize();
        this.UpdateCanvasSize(size.width, size.height);

        //
        ObjectsFactory.Init();

        //
        if (Main.s_firstRun)
        {
            Main.s_firstRun = false;
            Main.s_world.getGameLayer().placeVan(-400, 1000);
        }

        //
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", GameUpdate);

        //
        SoundsManager.PlaySound("game_loop", {loop: -1});

        return this;
    },


    Remove: function()
    {
        this.Pause();

        Main.s_score = this.CalculatePoints();
        Main.s_best = Math.max(Main.s_best, Main.s_score);

        // remove hero
        this.s_hero.remove();
        this.s_hero = null;

        //
        this.s_container.removeAllChildren();
        Main.s_scene.removeChild(this.s_container);

        SoundsManager.StopAll();
    },


    Reset: function()
    {
        this.s_distance = 0;
        this.s_points = 0;
        this.s_level = 0;
    },


    Pause: function()
    {
        createjs.Ticker.removeEventListener("tick", GameUpdate);
        this.StopController();
    },


    Resume: function()
    {
        createjs.Ticker.addEventListener("tick", GameUpdate);
        this.s_controller1.Start();
        if (this.s_controller2)
        {
            this.s_controller2.Start();
        }
    },


    WaitOnResume: function()
    {
        this.s_controller1.StartResumeWait();
        if (this.s_controller2)
        {
            this.s_controller2.StartResumeWait();
        }
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", ViewUpdate);
    },


    BackFromRotate: function()
    {
        if (!this.s_instructions)
        {
            this.WaitOnResume();
        }
    },


    StopController: function()
    {
        this.s_controller1.Stop();
        if (this.s_controller2)
        {
            this.s_controller2.Stop();
        }
    },


    Update: function(e)
    {
        var time = new Date().getTime();
        this.s_ratio = Math.max(1, Math.min(1.7, (time - this.s_prevTime) / 33.3));
        this.s_prevTime = time;

        this.s_hero.update();
        if (this.s_hero)
        {
            //scroll layers
            Main.s_world.scroll(this.s_hero.m_speedX * this.s_ratio, this.s_hero.getY());

            //update game layer
            this.s_gameLayer.update();

            //distance
            if (!this.s_hero.m_isDestroyed)
            {
                this.s_distance += this.s_ratio * this.s_hero.m_speedX / 100;
                this.s_level = Math.min(1, this.s_distance / this.MAX_DIFFICULTY_DISTANCE);
                this.s_hero.setLevel(this.s_level);
                this.ShowScore();
            }

            //
            ObjectsFactory.Update(this.s_ratio * this.s_hero.m_speedX);
        }

        //
        Main.s_stage.update();
    },


    UpdateCanvasSize: function(width, height)
    {
        if (this.s_instructions)
        {
            this.s_instructions.UpdateCanvasSize(width, height);
        }
        this.s_hud.updateCanvasSize(width, height);
    },


    ShowScore: function()
    {
        this.s_hud.setScore(this.CalculatePoints());
    },


    CalculatePoints: function()
    {
        //return Math.floor(this.s_distance * 1) + this.s_points;
        return this.s_points;
    },


    OnCollectButter: function()
    {
        this.s_points += 1;
        this.ShowScore();
    },


    OnGameOver: function()
    {
        Main.s_world.getGameLayer().stopGame();
        Navigation.ShowScreen(Navigation.SCREEN_END);
    },


    ShowInstructions: function()
    {
        this.Pause();

        this.s_instructions = ScreenInstructions.Init(true);
        this.s_hud.disableButtons();

        Main.s_stage.update();
    },


    HideInstructions: function()
    {
        this.s_instructions.Remove();
        this.s_instructions = null;

        this.s_hud.enableButtons();

        this.WaitOnResume();

        Main.s_stage.update();
    }
};



//
function GameUpdate(e)
{
    ScreenGame.Update(e);
}


function ViewUpdate(e)
{
    Main.s_stage.update();
    createjs.Ticker.removeEventListener("tick", ViewUpdate);
}



//
var ObjectsFactory = {
    s_lastButterY : null,
    s_nextButterDistance: 0,
    s_lastRobotY: 0,
    s_nextRobotDistance: 300,
    s_nextVanDistance: 500,


    Init: function()
    {
        this.s_gameLayer = Main.s_world.getGameLayer();
    },


    Update: function(dist)
    {
        this.s_nextButterDistance -= dist;
        if (this.s_nextButterDistance <= 0)
        {
            this.AddButter();
            this.s_nextButterDistance = 400;
        }

        //
        this.s_nextRobotDistance -= dist;
        if (this.s_nextRobotDistance <= 0)
        {
            this.AddRobot();
            this.s_nextRobotDistance = 500 + 300 * Math.random() | 0;
        }

        //
        this.s_nextVanDistance -= dist;
        if (this.s_nextVanDistance <= 0)
        {
            this.AddVan();
            this.s_nextVanDistance = 1800 + 700 * Math.random() | 0;
        }
    },


    AddButter: function()
    {
        if (this.s_lastButterY == null)
        {
            var y = Math.random() * 7 | 0
        }
        else
        {
            var d = Math.random();
            y = this.s_lastButterY;
            if (d > 0.2)
            {
                if (y == 0)
                {
                    y++;
                }
                else if (y == 6)
                {
                    y--;
                }
                else if (d > 0.6)
                {
                    y++;
                }
                else
                {
                    y--;
                }
            }
        }

        var lastVanBB = this.s_gameLayer.getLastVanBB();
        if (lastVanBB && y > 4 && 800 > lastVanBB.x && 800 < lastVanBB.x + lastVanBB.width + 100)
        {
            y -= 3;
        }

        this.s_lastButterY = y;
        this.s_lastButter = this.s_gameLayer.placeButter(800, (y + 1) * 100);
    },


    AddRobot: function()
    {
        if (Math.random() < 0.4 && false)
        {
            //place robot on hero level
            y = Math.min(4, ScreenGame.s_hero.m_y / 100 | 0);
        }
        else
        {
            do
            {
                var y = Math.random() * 5 | 0;
            }
            while ((y < this.s_lastButterY + 2 && y > this.s_lastButterY - 1) || y == this.s_lastRobotY);
        }

        this.s_lastRobotY = y;

        this.s_gameLayer.placeRobot(800, y * 100 + 10)
    },


    AddVan: function()
    {
        var x = 800;
        if (this.s_lastButterY > 4)
        {
            x = Math.max(this.s_lastButter.m_posX + 200, 800);
        }

        this.s_gameLayer.placeVan(x, 1050);
    }
};