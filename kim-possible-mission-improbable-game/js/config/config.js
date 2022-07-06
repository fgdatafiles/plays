function config() { }
config.settings = {
	"SWIT_VERSION": "1.2.0",
	"MAX_DELTA_TIME": 50,
	"SAFE_AREA_WIDTH": 200,
	"APP_WIDTH": 1024,
	"APP_HEIGHT": 768,
	"APP_FPS": 40,
	"SOUND_PERCENT": 20,
	"ASSETS_PATH": "",
	"LOG": true,
	"USE_TILT": true,
	"RENDER_MODE": 0,
	"CONSOLE_MODE": 2,
	"WIDE_SCREEN": true,
	"RIGHT_TO_LEFT": false,
	"SHOW_SOCIAL_BUTTONS": false,
	"USE_ONLY_SOUNDJS": false,
	"timeGame": 200
};
config.sounds = [
	{
		"id": "MUSIC_MAIN_MENU",
		"file": "mus_main_menu",
		"loops": 0,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUSIC_STING_LOSE",
		"file": "mus_sting_loose",
		"loops": 1,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUSIC_STING_WIN",
		"file": "mus_sting_win",
		"loops": 1,
		"vol": 0.5,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "MUSIC_GAME_HIGH_SCHOOL",
		"file": "mus_high_school",
		"loops": 0,
		"vol": 0.2,
		"ios": 0,
		"instances": 1,
		"group": 4
	},
	{
		"id": "MUSIC_GAME_LAB",
		"file": "mus_lab_entrance",
		"loops": 0,
		"vol": 0.2,
		"ios": 0,
		"instances": 1,
		"group": 5
	},
	{
		"id": "MUSIC_GAME_LAB_2",
		"file": "mus_lab_interior",
		"loops": 0,
		"vol": 0.2,
		"ios": 0,
		"instances": 1,
		"group": 6
	},
	{
		"id": "MUSIC_BOSS_ATHENA",
		"file": "mus_boss_fight_athena",
		"loops": 0,
		"vol": 0.2,
		"ios": 0,
		"instances": 1,
		"group": 7
	},
	{
		"id": "MUSIC_BOSS_SHEGO",
		"file": "mus_boss_fight_shego",
		"loops": 0,
		"vol": 0.2,
		"ios": 0,
		"instances": 1,
		"group": 8
	},
	{
		"id": "SND_UI_CLICK",
		"file": "snd_click",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_UI_BACK",
		"file": "snd_back",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_UI_PLAY",
		"file": "snd_play",
		"loops": 1,
		"vol": 0.8,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_UI_BEEP",
		"file": "snd_beep",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_CUTSCENE_EXPLOTION",
		"file": "snd_explosion",
		"loops": 1,
		"vol": 0.8,
		"ios": 1,
		"instances": 3,
		"group": 0
	},
	{
		"id": "SND_UI_ACHIEVEMENT",
		"file": "snd_ui_achievement",
		"loops": 1,
		"vol": 1,
		"ios": 0,
		"instances": 1,
		"group": 0
	},
	{
		"id": "SND_UI_LEVEL_COMPLETE",
		"file": "snd_ui_level_complete",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1,
		"group": 1
	},
	{
		"id": "SND_UI_MISSION",
		"file": "snd_ui_mission",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1,
		"group": 1
	},
	{
		"id": "SND_UI_START",
		"file": "snd_ui_start",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1,
		"group": 1
	},
	{
		"id": "SND_UI_TIME_RED",
		"file": "snd_ui_timer_red",
		"loops": 1,
		"vol": 0.7,
		"ios": 0,
		"instances": 1,
		"group": 1
	},
	{
		"id": "SND_MINIGAME_RUFUS",
		"file": "snd_ui_mini_rufus",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_RUFUS_CUT_CORRET",
		"file": "snd_ply_rufus_cut_correct",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_RUFUS_CUT_WRONG",
		"file": "snd_ply_rufus_cut_wrong",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_DAMAGE",
		"file": "snd_ply_body_damage",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_CHANGE",
		"file": "snd_ply_change",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_HOOK",
		"file": "snd_ply_hook",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_HOOK_BACK",
		"file": "snd_ply_hook_back",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_HOOK_UP_DOWN",
		"file": "snd_ply_hook_up_down",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_JET_PACK",
		"file": "snd_ply_jet_pack",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_WALL_JUMP",
		"file": "snd_ply_wall_jump",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_KIM_RESCUE",
		"file": "snd_ply_kim_rescue",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_RON_RESCUE",
		"file": "snd_ply_ron_rescue",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_JUMP_UP",
		"file": "snd_jump_up",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_JUMP_DOWN",
		"file": "snd_ply_kim_jump_down",
		"loops": 1,
		"vol": 0.2,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_SHOCK",
		"file": "snd_ply_electric_shock",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_FALL_PINK_GOO",
		"file": "snd_ply_fall_pink_goo",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_DRON",
		"file": "snd_ply_dron_loop",
		"loops": 1,
		"vol": 0.2,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_CLAP",
		"file": "snd_player_clap",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_KIM_DAMAGE",
		"file": "snd_ply_kim_damage",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_PLAYER_RON_DAMAGE",
		"file": "snd_ply_ron_damage",
		"loops": 1,
		"vol": 0.8,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_VO_PLAYER_WALL_JUMP_1",
		"file": "snd_ply_wall_jump_vo_1",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_VO_PLAYER_WALL_JUMP_2",
		"file": "snd_ply_wall_jump_vo_2",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_VO_PLAYER_RON_JUMP_1",
		"file": "snd_ply_ron_jump_1",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_VO_PLAYER_RON_JUMP_2",
		"file": "snd_ply_ron_jump_2",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_RUFUS_CUT",
		"file": "snd_ply_rufus_cut",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_DEFEAT",
		"file": "snd_en_defeat_jump",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_IMPACT",
		"file": "snd_en_energy_impact",
		"loops": 1,
		"vol": 0.2,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_SHOOT",
		"file": "snd_en_energy_shoot",
		"loops": 1,
		"vol": 0.2,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_ALERT",
		"file": "snd_en_alert",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_DASH",
		"file": "snd_en_dash",
		"loops": 1,
		"vol": 0.8,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_VO_DEFEAT_1",
		"file": "snd_en_he_defeat_1",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_VO_DEFEAT_2",
		"file": "snd_en_he_defeat_2",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_VO_DEFEAT_3",
		"file": "snd_en_he_defeat_3",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_NINJA_DEFEAT_1",
		"file": "snd_en_ninja_defeat_1",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_ENEMY_NINJA_DEFEAT_2",
		"file": "snd_en_ninja_defeat_2",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_BOSS_ATHENA_DAMAGE",
		"file": "snd_en_ath_damage_2",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_JUMP_UP",
		"file": "snd_en_ath_jump_up",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_SPIN",
		"file": "snd_en_ath_spin_loop",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_ATHENA_SUMMONING",
		"file": "snd_en_ath_summoning",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_ATHENA_ABDUCTED",
		"file": "snd_en_athena_abducted",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_ATHENA_DEFEAT",
		"file": "snd_en_athena_defeat",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 2
	},
	{
		"id": "SND_BOSS_SHEGO_APPEAR",
		"file": "snd_en_shego_appear",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_DEFEAT",
		"file": "snd_en_shego_defeat",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_DAMAGE",
		"file": "snd_en_shego_damage",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_SNAP",
		"file": "snd_en_shego_snap",
		"loops": 1,
		"vol": 0.4,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_WALL_JUMP",
		"file": "snd_en_shego_wall_jump",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_WALL_JUMP_1",
		"file": "snd_en_shego_wall_jump_1",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_WALL_JUMP_2",
		"file": "snd_en_shego_wall_jump_2",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_BOSS_SHEGO_RECOVER",
		"file": "snd_en_shego_recover",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 3
	},
	{
		"id": "SND_OBJ_ENERGY_CUBE",
		"file": "snd_obj_energy_cube",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_HP",
		"file": "snd_obj_hp",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER",
		"file": "snd_obj_laser_shoot_1",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_1",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_2",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_3",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_4",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_5",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_6",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_7",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_8",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_9",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_SHOOT_10",
		"file": "snd_obj_laser_shoot",
		"loops": 0,
		"vol": 0.3,
		"ios": 1,
		"instances": 5,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_ON",
		"file": "snd_obj_laser_on",
		"loops": 1,
		"vol": 0.2,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_LASER_PRE",
		"file": "snd_obj_laser_pre",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_TOKENS",
		"file": "snd_obj_tokens",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_CHASER_DETECT",
		"file": "snd_obj_chaser_detect",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_CHASER_MOVE",
		"file": "snd_obj_chaser_move",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PINK_1",
		"file": "snd_obj_pink",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PINK_2",
		"file": "snd_obj_pink",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PINK_3",
		"file": "snd_obj_pink",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PINK_4",
		"file": "snd_obj_pink",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PINK_5",
		"file": "snd_obj_pink",
		"loops": 0,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_PLATFORM_ALERT",
		"file": "snd_obj_platform_alert",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_DOOR",
		"file": "snd_obj_door",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_DOOR_HIGH_SCHOOL",
		"file": "snd_obj_door_high_school",
		"loops": 1,
		"vol": 0.5,
		"ios": 1,
		"instances": 3,
		"group": 1
	},
	{
		"id": "SND_OBJ_SWITCH_OFF",
		"file": "snd_obj_switch_off",
		"loops": 1,
		"vol": 0.3,
		"ios": 1,
		"instances": 3,
		"group": 1
	}
];
config.browserSettings = [
	{
		"browserType": "MSIE",
		"platformType": "Win",
		"minVersion": 9
	},
	{
		"browserType": "Opera",
		"platformType": "",
		"minVersion": 12
	},
	{
		"browserType": "Chrome",
		"platformType": "",
		"minVersion": 25
	},
	{
		"browserType": "Firefox",
		"platformType": "",
		"minVersion": 20
	},
	{
		"browserType": "Safari",
		"platformType": "",
		"minVersion": 4
	}
];
