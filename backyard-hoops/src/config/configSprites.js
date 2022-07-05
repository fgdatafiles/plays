var configSprites = {
    //LOADER BAR
    spr_loaderBar:{
        type:'image',
        posx:0.5,
        posy:0.7,
        nameAsset:'loaderBar',
        anchorx: 0,
        anchory: 0,
        sizex_portrait: 0.35,
        sizey_landscape: 0.05
    },
    spr_loaderBarContainer:{
        type:'image',
        posx:0.5,
        posy:0.7,
        nameAsset:'loaderBarContainer',
        anchorx: 0.5,
        anchory: 0,
        sizex_portrait: 0.35,
        sizey_landscape: 0.05
    },
    //BACKGROUND
    spr_backgroundLoader:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'backgroundLoader',
        anchorx: 0,
        anchory: 0,
        free_sizex:1,
        free_sizey:1
    },
    //BACKGROUND
    spr_background:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'background_2',
        anchorx: 0,
        anchory: 0,
        free_sizex:1,
        free_sizey:1
    },
    spr_logoBoomerang:{
        type:'image',
        posx:0.5,
        posy:0.5,
        nameAsset:'logoBoomerang',
        anchorx: 0.5,
        anchory: 0.5,
        sizey_landscape: 0.5,
        sizex_portrait: 0.45,
    },
    spr_winScreenStar:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'winScreenStar',
        sizey_landscape: 0.075,
        sizex_portrait: 0.075,
    },
    spr_bgWinScreen:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'bgWinScreen',
        anchorx: 0,
        anchory: 0,
        free_sizex:1,
        free_sizey:1
    },
    spr_effectWinScreen:{
        type:'image',
        posx:0.5,
        posy:0.5,
        nameAsset:'effectWinScreen',
        sizey_landscape: 1.7,
        sizex_portrait: 1.7
    },
    spr_coverBackground:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'coverBg',
        anchorx: 0,
        anchory: 0,
        free_sizex:1,
        free_sizey:1
    },
    spr_coverJerry:{
        type:'image',
        posx:1,
        posy:1,
        nameAsset:'coverJerry',
        anchorx: 0.9,
        anchory: 0.9,
        sizey_landscape: 0.05,
        sizex_portrait: 0.7,
        aspectVariables:{
            portrait:[
                {
                    prop: 'sizex_portrait',
                    min:0.6,
                    max:1,
                    minResult:0.7,
                    maxResult:0.5
                }
            ],
        },
    },

    mc_splashBestScore:{
        type:'mc',
        posx:0.88,
        posy:0.025,
        sizex_portrait: 0.2,
        childs:{
            spr_logoBase:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0,
                nameAsset:'scoreCopa'
            },
            txt_labelScore:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-30+150,
                uppercase:true,
                text:'MEJOR PUNTAJE',
                stroke:'#eb5c24',
                style:{
                    font: '75px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'15',
                }
            },
            txt_score:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:60+150,
                uppercase:true,
                text:'13520',
                stroke:'#656eb3',
                style:{
                    font: '95px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'15',
                }
            }
        },
    },

    mc_popUpLogoBase:{
        type:'mc',
        posx:0.4,
        posy:0.18,
        sizex_portrait: 0.5,
        childs:{
            spr_logoBase:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'logoBase'
            },
            txt_gameName1:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-70,
                uppercase:true,
                text:'',
                stroke:'#eb5c24',
                style:{
                    font: '145px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'30',
                }
            },
            txt_gameName2:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:75,
                uppercase:true,
                text:'',
                stroke:'#656eb3',
                style:{
                    font: '145px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'30',
                }
            }
        },
    },

    mc_msgWinScreen:{
        type:'mc',
        posx:0.5,
        posy:0.1,

        sizey_landscape: 0.11,
        sizex_portrait: 0.7,
        autoScaleText:true,

        aspectVariables:{
            portrait:[
                {
                    prop: 'posy',
                    min:0.45,
                    max:1,
                    minResult:0.2,
                    maxResult:0.05
                }
            ],
        },

        childs:{
            graph_rect:{
                type:'graphics',
                shape:'rect',
                color:'FFFFFF',
                alpha:'0',
                fixx:0,
                fixy:0,
                rect:{
                    x:-450/2,
                    y:-80/2,
                    width:450,
                    height:80
                }
            },
            txt_title:{
                type:'text',
                fixx:0,
                fixy:2,
                text:'AWESOME',
                stroke:'#FF6028',
                style:{
                    font: '80px Michelin-Black',
                    fill: '#ffffff',
                    align: 'center',
                    strokeThickness:'15',
                }
            },
        }
    },

    spr_hand:{
        type:'image',
        posx:0.7,
        posy:0.6,
        nameAsset:'tutorialManito',
        anchorx: 0.5,
        anchory: 0.5,
        sizey_landscape: 0.05,
        sizex_portrait: 0.17,
    },

    spr_coverTom:{
        type:'image',
        posx:0.85,
        posy:0.9,
        nameAsset:'coverTom',
        anchorx: 1,
        anchory: 1,
        sizey_landscape: 0.05,
        sizex_portrait: 0.85,
        aspectVariables:{
            portrait:[
                {
                    prop: 'sizex_portrait',
                    min:0.6,
                    max:1,
                    minResult:0.85,
                    maxResult:0.6
                }
            ],
        },
    },
    spr_pixel:{
        type:'image',
        fixx:0,
        fixy:0,
        nameAsset:'pixel',
        anchorx: 0,
        anchory: 0,
        free_sizex:1,
        free_sizey:1
    },
    //TAP TO CONTINUE STATE
    txt_tapToContinue:{
        type:'text',
        posx:0.5,
        posy:0.5,

        sizey_landscape: 0.05,
        sizex_portrait: 0.3,
        autoScaleText:true,

        text:configGame.texts.tapToContinue,
        style:{
            font: '40px SairaCondensed-ExtraLight',
            fill: '#333333',
            align: 'center'
        }
    }, 

    spr_ball:{
        type:'image',
        posx:0.55,
        posy:0.72,
        sizey_landscape: 0.15,
        sizex_portrait: 0.17,

        aspectVariables:{
            portrait:[
                {
                    prop: 'sizex_portrait',
                    min:0.6,
                    max:1,
                    minResult:0.26,
                    maxResult:0.21
                }
            ],
        },

        anchorx: 0.5,
        anchory: 0.5,
        nameAsset:'balls'
    },

    spr_ballTutorial:{
        type:'image',
        posx:0.56,
        posy:0.5,
        sizey_landscape: 0.3,
        sizex_portrait: 0.2,
        anchorx: 0.5,
        anchory: 0.5,
        nameAsset:'balls'
    },

    spr_livesBall:{
        type:'image',
        fixx:0,
        fixy:0,
        anchorx: 0.5,
        anchory: 0.5,
        nameAsset:'livesOn'
    },

    spr_basket:{
        type:'image',
        posx:0.5,
        posy:0.3,
        sizey_landscape: 0.18,
        sizex_portrait: 0.4,
        anchorx: 0.5,
        anchory: 0.5,
        nameAsset:'basket',
        radiusCircle:0.03,
        holeWidth:0.49,
        circley:0.12,
        checkpointJerryY:0.2
    },

    spr_basketFront:{
        type:'image',
        posx:0.5,
        posy:0.3,
        sizey_landscape: 0.18,
        sizex_portrait: 0.4,
        anchorx: 0.5,
        anchory: 0.5,
        nameAsset:'basketFront'
    },

    mc_textScore:{
        type:'mc',
        fixx:0,
        fixy:0,
        anchorx: 0.5,
        anchory: 0.5,
        autoScaleText:true,

        childs:{
            graph_rect:{
                type:'graphics',
                shape:'rect',
                color:'FFFFFF',
                alpha:'0',
                fixx:0,
                fixy:0,
                rect:{
                    x:-220/2,
                    y:-80/2,
                    width:220,
                    height:80
                }
            },
            txt_score:{
                type:'text',
                fixx:0,
                fixy:0,
                text:'1000',
                style:{
                    font: '85px DigitalDismay-Regular',
                    fill: '#e33b38',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    },

    mc_textBonusScore:{
        type:'mc',
        fixx:0,
        fixy:-24,
        anchorx: 0.5,
        anchory: 0.5,
        autoScaleText:true,

        childs:{
            graph_rect:{
                type:'graphics',
                shape:'rect',
                color:'FFFF00',
                alpha:'0',
                fixx:0,
                fixy:0,
                rect:{
                    x:-200/2,
                    y:-60/2,
                    width:200,
                    height:60
                }
            },
            txt_bonus:{
                type:'text',
                fixx:0,
                fixy:0,
                text:'X 3',
                style:{
                    font: '55px Michelin-Black',
                    fill: '#626cb0',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    },

    spr_tom:{
        type:'image',
        posx:0.65,
        posy:1,
        sizey_landscape: 0.18,
        sizex_portrait: 0.45,
        anchorx: 0.5,
        anchory: 1,
        nameAsset:'tom'
    },

    mc_popUpPause:{
        type:'mc',
        posx:0.5,
        posy:0.5,
        sizex_portrait: 0.7,
        responsive:{
            anchorx:0.5,
            anchory:0.5,
            padBottom:0.15,
            padLeft:0.05,
        },
        childs:{
            spr_background:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'uiPausePopup'
            },
            txt_Pause:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-380,
                uppercase:true,
                text:'',
                stroke:'#6e77b7',
                style:{
                    font: '140px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'25',
                }
            }
        },
    },

    mc_popUpBox_alert:{
        type:'mc',
        posx:0.5,
        posy:0.5,
        sizex_portrait: 0.9,
        responsive:{
            anchorx:0.5,
            anchory:0.5,
            padBottom:0.15,
            padLeft:0.05,
        },
        childs:{
            spr_background:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'box_alert'
            },
            txt_desc:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-20,
                uppercase:true,
                text:'Realmente deseas volver al inicio?',
                stroke:'#6e77b7',
                style:{
                    font: '60px BebasNeue-Regular',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'0',
                }
            }
        },
    },

    mc_popUpTutorial:{
        type:'mc',
        posx:0.5,
        posy:0.5,
        sizex_portrait: 0.65,
        responsive:{
            anchorx:0.5,
            anchory:0.5,
            padBottom:0.15,
            padLeft:0.05,
        },
        childs:{
            spr_background:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'tutorialPopup'
            },
            txt_howToPlay:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-660,
                uppercase:true,
                text:'',
                stroke:'#6e77b7',
                style:{
                    font: '120px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'25',
                }
            }
        },
    },

    mc_popUpGameOver:{
        type:'mc',
        posx:0.5,
        posy:0.5,
        sizex_portrait: 0.7,
        responsive:{
            anchorx:0.5,
            anchory:0.5,
            padBottom:0.15,
            padLeft:0.05,
        },
        childs:{
            spr_scoreSpinfx:{
                type:'image',
                fixx:0,
                fixy:-590,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'scoreSpinfx'
            },
            spr_scoreCopa:{
                type:'image',
                fixx:0,
                fixy:-620,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'scoreCopa'
            },
            spr_scoreConfettiLeft:{
                type:'image',
                fixx:-210,
                fixy:-600,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'scoreConfetti'
            },
            spr_scoreConfettiRight:{
                type:'image',
                fixx:210,
                fixy:-600,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'scoreConfetti'
            },
            spr_background:{
                type:'image',
                fixx:0,
                fixy:0,
                anchorx: 0.5,
                anchory: 0.5,
                nameAsset:'scorePopUp'
            },
            txt_finalScore:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:-470,
                uppercase:true,
                text:'',
                stroke:'#6e77b7',
                style:{
                    font: '100px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'25',
                }
            },
            txt_score:{
                type:'text',
                fixx:0,
                fixy:-120,
                text:'1000',
                style:{
                    font: '200px DigitalDismay-Regular',
                    fill: '#e33b38',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
            txt_bestScoreLabel:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:120,
                uppercase:true,
                text:'',
                stroke:'#6e77b7',
                style:{
                    font: '50px Oswald-SemiBold',
                    fill: '#4f5996',
                    align: 'center',
                    strokeThickness:'0'
                }
            },
            txt_bestScore:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:190,
                text:'0069',
                stroke:'#ffffff',
                style:{
                    font: '70px Oswald-SemiBold',
                    fill: '#ffffff',
                    align: 'center',
                    strokeThickness:'0'
                }
            }
        },
    },

    btn_yes:{
        type:'btn',

        fixx:205,
        fixy:120,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'alert_btn_yes',
        childs:{
            txt_buttonText:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:-20,
                fixy:-7,
                uppercase:true,
                text:'SI',
                stroke:'#f78b1e',
                style:{
                    font: '70px BebasNeue-Regular',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    },

    btn_no:{
        type:'btn',
        
        fixx:-205,
        fixy:120,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'alert_btn_no',
        childs:{
            txt_buttonText:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:-20,
                fixy:-7,
                uppercase:true,
                text:'NO',
                stroke:'#f78b1e',
                style:{
                    font: '70px BebasNeue-Regular',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    },

    btn_music:{
        type:'btn',
        fixx:150,
        fixy:300,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'uiBtnMusic'
    },

    btn_sound:{
        type:'btn',
        fixx:-150,
        fixy:300,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'uiBtnSound'
    },

    btn_play:{
        type:'btn',
        fixx:0,
        fixy:0,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'uiBtnPlay'
    },

    btn_restart:{
        type:'btn',
        fixx:310,
        fixy:0,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'uiBtnRestart'
    },

    btn_home:{
        type:'btn',
        fixx:-310,
        fixy:0,
        anchorx: 0.5,
        anchory: 0.5,

        nameAsset:'uiBtnHome'
    },

    btn_playCover:{
        type:'btn',
        posx:0.35,
        posy:0.9,

        sizey_landscape: 0.05,
        sizex_portrait: 0.35,
        autoScaleText:true,

        nameAsset:'uiBtnCoverPlay',
        childs:{
            txt_buttonText:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:60,
                fixy:0,
                uppercase:true,
                text:'',
                stroke:'#f78b1e',
                style:{
                    font: '100px Oswald-SemiBold',
                    fill: '#FFFFFF',
                    align: 'center',
                    strokeThickness:'10',
                }
            },
        }
    },

    btn_throwBall:{
        type:'btn',
        posx:0.5,
        posy:0.93,

        sizey_landscape: 0.05,
        sizex_portrait: 0.3,
        autoScaleText:true,

        nameAsset:'button_white',
        childs:{
            txt_buttonText:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:4,
                uppercase:true,
                text:configGame.texts.btn_throwBall,
                style:{
                    font: '16px Saira-Regular',
                    fill: '#4A4A4A',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    },

    btn_pauseGame:{
        type:'btn',
        posx:1,
        posy:0,
        anchorx: 1.3,
        anchory: -0.3,

        sizey_landscape: 0.05,
        sizex_portrait: 0.1,

        nameAsset:'uiBtnPause'
    },

    btn_moveBasket:{
        type:'btn',
        posx:0.2,
        posy:0.93,

        sizey_landscape: 0.05,
        sizex_portrait: 0.3,
        autoScaleText:true,

        nameAsset:'button_white',
        childs:{
            txt_buttonText:{
                type:'text',
                fillOver: 'FFFFFF',
                fixx:0,
                fixy:4,
                uppercase:true,
                text:configGame.texts.btn_moveBasket,
                style:{
                    font: '16px Saira-Regular',
                    fill: '#4A4A4A',
                    align: 'center',
                    strokeThickness:'0',
                }
            },
        }
    }
};
