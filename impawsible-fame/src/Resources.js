var res = {  


    bgTitleScreen_png:      "res/titleScreen/titleScreen.png",
    bgResultScreen_png:     "res/resultScreen/resultScreen.png",
    
    bg_png:                 "res/bg/bg.png",
    bgSky_png:              "res/bg/bg_sky.png",
    bgCloud0_png:           "res/bg/bg_cloud_0.png",
    bgCloud1_png:           "res/bg/bg_cloud_1.png",
    bgCloud2_png:           "res/bg/bg_cloud_2.png",

    gobj_png:               "res/gobj/gobj.png",
    gobj_plist:             "res/gobj/gobj.plist",

    char_grizz_png:         "res/char/char_grizz.png",
    char_grizz_plist:       "res/char/char_grizz.plist",
    char_iceBear_png:       "res/char/char_iceBear.png",
    char_iceBear_plist:     "res/char/char_iceBear.plist",
    char_panda_png:         "res/char/char_panda.png",
    char_panda_plist:       "res/char/char_panda.plist",
    char_koala_png:         "res/char/char_koala.png",
    char_koala_plist:       "res/char/char_koala.plist",

    ui_png:                 "res/ui/ui.png",
    ui_plist:               "res/ui/ui.plist",
                
    fx_png:                 "res/fx/fx.png",
    fx_plist:               "res/fx/fx.plist",

    font_clappyFamescore_fnt:       "res/bmfonts/@bm_clappyFamescore.fnt",
    font_clappyFamescore_png:       "res/bmfonts/@bm_clappyFamescore.png",

    font_clappylikemeternos_fnt:    "res/bmfonts/@bm_clappylikemeternos.fnt",
    font_clappylikemeternos_png:    "res/bmfonts/@bm_clappylikemeternos.png",

    font_komikaCombo_fnt:           "res/bmfonts/@bm_komikaCombo.fnt",
    font_komikaCombo_png:           "res/bmfonts/@bm_komikaCombo.png",

    font_malamnotif_fnt:            "res/bmfonts/@bm_malamNotif.fnt",
    font_malamnotif_png:            "res/bmfonts/@bm_malamNotif.png",

    howTo_page1_png:            "res/howToPlayScreen/howTo_1.png",
    howTo_page2_png:            "res/howToPlayScreen/howTo_2.png",
    howTo_page3_png:            "res/howToPlayScreen/howTo_3.png",


    bgm_ambient_mp3:                     "res/audio/Birds_Chirp_Ambient2-v2.mp3",
    sfx_parachute_mp3:              "res/audio/Bear_Parachute.mp3",
    sfx_combo_mp3:                  "res/audio/Combo_2.mp3",
    sfx_combo_break_mp3:            "res/audio/Combo_Break.mp3",
    sfx_get_honey_mp3:              "res/audio/Get_Honey_Wasabi_Option1.mp3",
    sfx_pop_out_from_box_mp3:       "res/audio/Pop_Out_From_Box.mp3",
    sfx_push_notifs_mp3:            "res/audio/Push_Notification.mp3"

   
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}