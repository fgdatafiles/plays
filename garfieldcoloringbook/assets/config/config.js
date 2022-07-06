var GLOBAL_GAME_CONFIG = {
    global: {
        // Framerate
        fps: 60,
        // If true, will use requestAnimationFrame HTML5 function instead of timers
        // _Theoretically_ shall produce smoother animation, but needs testing across browsers
        useRAF: true,
        gameId: "com.jellimatic.kidsportal.garfieldcolorbook",
        gameName: "garfieldcolorbook",
        gameTitle: "Garfield's Color Book",
        preloaderBgColor: "#ffffff"
        // externalSoundURL: "https://googledrive.com/host/0B9PYxO5Fpny6TzUzVzd4dW1GaDQ/jellyquest/sounds/"*/
    },

    screenSettings: {
        horizontal: {
            width: 900,
            height: 640,
            badAndroidDeviceMaxRatio: 960/640,
            maxRatio: (1136 + 400)/512
        },
        vertical: {
            width: 640,
            height: 800,//isPhone? 712: 800,
            badAndroidDeviceMaxRatio: 640/800,
            maxRatio: 512/(1136 + 400)
        }//,
        //maxWidth: 2000,
        //maxHeight: 800
    },

    storageDataIds: {
        locale: "locale"
    },

    map: {
        itemsPerPage: 4
    },

    gameplay: {
        neutralColor: //"#5b3127",
            "#3e3e3e",
        colors: [
            "#ff3c8a",
            "#fbaf31",
            "#fff58c",
            "#7cfe2c",
            "#2bad04",
            "#5fcdff",
            "#cabeae",
            "#ff2a52",
            "#f7c1d0",
            "#ce6f04",
            "#ffdb27",
            "#378e09",
            "#008aff",
            "#b45fdf",
            "#ffffff"],
        eraserColor: "#ffffff",
        brushBaseRadius: 20,
        defaultBrushIndex: 1,
        brushes: [
            {scale: 1},
            {scale: 0.6},
            {scale: 0.4}
        ]
    },

    transitions: {
        standard: {
            out: {
                type: "fadeOut",
                duration: 300
            },
            in: {
                type: "fadeIn",
                duration: 400
            }
        }
    },

    // Tweakable animation parameters
    animation: {
        Initializing: 300 + 100*2,
        PuzzleStepSuccessfullMatchAnimation: 1400,
    },

    hud: {
        // Count speed of game score (score points per second)
    },
    // Style of visual and text elements
    style: {
        creditsTitleText: {style: "bold 36px arial, helvetica, sans-serif", color: "#ae5411"},
        creditsEntryText: {style: "bold 30px arial, helvetica, sans-serif", color: "#ae5411"},

        pageTitleText: {
            style: "40px Verdana, arial", color: "#ffffff",
            shadow: {
                color: "#000000",
                offsetX: 2,
                offsetY: 2,
                blur: 3
            }
        },

        levelDescription: {
            style: "25px Verdana, arial", color: "#572F24"
        }
    },

    // *** Game sound
    sound: {
        musicMenu: { file: "music" }, // Main menu music
        musicGame: { file: "music" }, // Music playing during the game
        buttontap: { file: "buttontap" }, // Tap the button
        chainRemoved: { file: "chainremoved" },
        levelComplete: { file: "levelcomplete" }
    }
}