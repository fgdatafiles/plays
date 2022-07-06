var GC = GC || {};

// Debug
// 0: Turn debug off
// 1: Turn debug on
GC.DEBUG = {
    SWITCH:0,
    GOD_MODE:0,
    CHEAT_MODE:0
};

// Pause
GC.PAUSED = 0;
GC.RESTARTING = 0;

// Volume
GC.ENABLE_SFX = 1;

// How To Play
GC.HOW_TO_PLAY_PAGE = {
    ONE:1,
    TWO:2,
    THREE:3,
    COUNT:3
};



// Game over screen
GC.GAME_OVER_ASSETS = {    
    YOUR: {
        X:740,
        Y:500
    },
    HIGH: {
        X:860,
        Y:300
    },
    REPLAY: {
        X:315,
        Y:-220
    }
};

GC.ZERO                 = cc.p( 0, 0);
GC.SCREENSIZE           = cc.size( 1366 , 768 );
GC.SCREENCENTER         = cc.p( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.5 );


GC.SLOTSIZE = cc.size(150, 150);
GC.SLOT_POS = [
    cc.p( GC.SCREENSIZE.width * 0.65 + (0 * 150), GC.SCREENSIZE.height * 0.12 ),
    cc.p( GC.SCREENSIZE.width * 0.65 + (1 * 150), GC.SCREENSIZE.height * 0.12 ),
    cc.p( GC.SCREENSIZE.width * 0.65 + (2 * 150), GC.SCREENSIZE.height * 0.12 )
];

GC.SLOT_RECT = [
    cc.rect( GC.SLOT_POS[0].x - GC.SLOTSIZE.width * 0.5, GC.SLOT_POS[0].y - GC.SLOTSIZE.height * 0.5, GC.SLOTSIZE.width, GC.SLOTSIZE.height ),
    cc.rect( GC.SLOT_POS[1].x - GC.SLOTSIZE.width * 0.5, GC.SLOT_POS[1].y - GC.SLOTSIZE.height * 0.5, GC.SLOTSIZE.width, GC.SLOTSIZE.height ),
    cc.rect( GC.SLOT_POS[2].x - GC.SLOTSIZE.width * 0.5, GC.SLOT_POS[2].y - GC.SLOTSIZE.height * 0.5, GC.SLOTSIZE.width, GC.SLOTSIZE.height )
];


GC.TUTORIAL_STEPS = {
    SLOTS:1,
    STACK:2,
    FINISHED:3
};

GC.TUTORIAL_ENABLED  = false;
GC.TUTORIAL_PROGRESS = 0;
GC.TUTORIAL_FINISHED = false;
GC.TUTORIAL_PROGRESS_POS = [
    cc.p( 0, 0 ),
    cc.p( GC.SLOT_POS[0].x, GC.SLOT_POS[0].y + 150 ),
    cc.p( GC.SCREENSIZE.width * 0.5, GC.SCREENSIZE.height * 0.5 ),
    cc.p( 0, 0 )
];


// Constants
GC.STACK_YPADDING = 105;
GC.MAX_STACK = 4;
GC.MOVE_MIN = 10;

// Score
GC.HEIGHT = 0;
GC.MAX_HEIGHT_REACHED = 0;
GC.SCORE = 0;
GC.COMBO = 0;
GC.UNIQUE_SCORE_KEY = "cn_wbb_if_high_score"; // Note: Change this for other games!


GC.SWIPE_THRESHOLD   = 50;
GC.ANIM_INTERVAL     = 0.05;

GC.OBSTACLE_START_SPAWN           = cc.p(0, 0);

// Obstacle Speed
GC.DEFAULT_PIGEON_SPEED = 2.5;
GC.DEFAULT_GLIDER_SPEED = 2;

GC.DEFAULT_LOAD_TIME = 4;
GC.LOAD_TIME = GC.DEFAULT_LOAD_TIME;

GC.SPEED_PIGEON = GC.DEFAULT_PIGEON_SPEED;
GC.SPEED_GLIDER = GC.DEFAULT_GLIDER_SPEED;


// Object movements

GC.GameState = {
    DEFAULT:  1,
    SPAWN: 2,
    STANDBY:  3,
    GAMEOVER: 4
};

GC.GameObjectState = {
    DEFAULT: 1,
    HIT: 2
}

GC.MAX_SLOTS = 3;
