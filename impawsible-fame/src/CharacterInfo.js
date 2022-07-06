
var MobType = {
	ROTTEN_CANDY:       1,
    SEEMORE_POPS:       2,
    SEEMORE_POPCORN:    3,
    HELICOPTER:         4,
    BALLOON_CAT:        5,
    BOSS_CARS:          6,
    BOSS:               7
};

var OBJECT_ID = {
    ENERGY: 0,
    RAMP:8,
    OBSTACLE: 9,
    GAP: 10

}


var FX = {
    MOB_EXPLOSION:      1,

    getInfo: {
        1: {prefix: "fx_hitExplosion_",   endFrame: 8}
    }
}

var MobInfo = {
	getInfo: {
    1: {name: "Rotten Candy", 		type: "land", hits: 3,  pointPerHit: 10, pointKill: 0,  src: "#char_robin_0.png", sfx: res.sfx_bump_mp3},
    2: {name: "See-More Pops", 		type: "land", hits: 4,  pointPerHit: 10, pointKill: 0,  src: "#char_robin_0.png", sfx: res.sfx_bump_mp3},
    3: {name: "See-More PopCorn", 	type: "land", hits: 3,  pointPerHit: 10, pointKill: 0,  src: "#char_robin_0.png", sfx: res.sfx_bump_mp3},
    4: {name: "Helicopter", 		type: "air",  hits: 3,  pointPerHit: 10, pointKill: 60, src: "#char_robin_0.png", sfx: res.sfx_bump_mp3},
    5: {name: "Balloon Cat", 		type: "air",  hits: 6,  pointPerHit: 10, pointKill: 50, src: "#char_robin_0.png", sfx: res.sfx_bump_mp3},
    6: {name: "Boss Cars", 			type: "land", hits: 25, pointPerHit: 10, pointKill: 100, src: "#char_robin_0.png", sfx: res.sfx_bump_mp3}, // 35
    7: {name: "Boss",               type: "land", hits: 50, pointPerHit: 10, pointKill: 100}
  }
};


var MobAnimation = {
    getInfo: {
        0: {screenTime:3},
        1: {prefix: "gobj_enRotten_",   endFrame: 2, type: "land", screenTime:2},
        2: {prefix: "gobj_enPop_",      endFrame: 2, type: "land", screenTime:2},
        3: {prefix: "gobj_enPopcorn_",  endFrame: 2, type: "land", screenTime:2},
        4: {prefix: "gobj_enCopter_",   endFrame: 1, type: "air" , screenTime:10},
        5: {prefix: "gobj_enCat_",      endFrame: 0, type: "air" , screenTime:10},
        6: {prefix: "gobj_enCar_",      endFrame: 6, type: "land", screenTime:0.1},
        7: {prefix: "gobj_enboss_",     endFrame: 5, type: "land", screenTime:0},
        8: {screenTime:1},
        9: {screenTime:1},
        10:{screenTime:0.5}

    }
};

var ObstacleType = {
    BUS_PINK:               1,
    BUS_YELLOW:             2,
    CAR_CONSTRUCTION:       3,
    CAR_FLOWER:             4,
    CAR_TAXI:               5,
    CAT_PINK:               6,
    PEDESTRIAN:             7,
    POLICE:                 8,
    WAITRESS:               9,
    WHALE:                  10,
    TOTAL:                  10
};

var ObstacleInfo = {
    getInfo: {
        1:  { ramp: false  , sfx: res.sfx_rico4_mp3},
        2:  { ramp: false  , sfx: res.sfx_rico4_mp3},
        3:  { ramp: true   , sfx: res.sfx_rico3_mp3},
        4:  { ramp: true   , sfx: res.sfx_rico3_mp3},
        5:  { ramp: true   , sfx: res.sfx_rico2_mp3},
        6:  { ramp: false  , sfx: res.sfx_bump2_mp3},
        7:  { ramp: false  , sfx: res.sfx_bump2_mp3},
        8:  { ramp: false  , sfx: res.sfx_bump_mp3},
        9:  { ramp: false  , sfx: res.sfx_bump2_mp3},
        10: { ramp: false  , sfx: res.sfx_bump2_mp3}
    }
};

var ObstacleAnimation = {
    getInfo: {
        1:  {prefix: "gobj_busPink_",           endFrame: 1,  screenTime:2},
        2:  {prefix: "gobj_busYellow_",         endFrame: 1,  screenTime:2},
        3:  {prefix: "gobj_carConstruction_",   endFrame: 3,  screenTime:2},
        4:  {prefix: "gobj_carFlower_",         endFrame: 3,  screenTime:10},
        5:  {prefix: "gobj_carTaxi_",           endFrame: 3,  screenTime:10},
        6:  {prefix: "gobj_catPink_",           endFrame: 11, screenTime:0.1},
        7:  {prefix: "gobj_pedestrian_",        endFrame: 2,  screenTime:0},
        8:  {prefix: "gobj_police_",            endFrame: 1,  screenTime:0},
        9:  {prefix: "gobj_waitress_",          endFrame: 15, screenTime:0},
        10: {prefix: "gobj_whale_",             endFrame: 2,  screenTime:0}
    }
};

var MiscAnimation = {   
    HERO_THROW_ARM:                 1,
    MOB_SEEMORE_POPS_BOOST:         2,
    MOB_BALLOON_CAT_BULLET_TRAIL:   3,


    getInfo: {
        1: {prefix: "char_robinArm_",  startFrame: 5, endFrame: 5 },
        2: {prefix: "gobj_enRotten_",  startFrame: 3, endFrame: 5 },
        3: {prefix: "gobj_enRotten_",  startFrame: 3, endFrame: 5 }
    }  
};

// var MiscAnimation = {
//     getInfo: {
//         1: {prefix: "gobj_robinArm_", endFrame: 5},
//         2: {prefix: ""},
//         3: {prefix: ""},
//         4: {prefix: ""},
//         5: {prefix: ""},
//         6: {prefix: ""},
//         7: {prefix: ""}
//     }
// }

var FXAnimation = {
    getInfo: {
        1: {prefix: ""},
        2: {prefix: ""},
        3: {prefix: ""},
        4: {prefix: ""},
        5: {prefix: ""},
        6: {prefix: ""},
        7: {prefix: ""}
    }
}
