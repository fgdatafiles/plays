
var assets_preload = {
	loaded: false,
	progress: 0,
	manifest: [
		{src:"https://api2.fonts.com/FontSubsetter.ashx?d44f19a684109620e4841471a790e81836d2d8012f816aa8619c04e4569bd48106e364198b639950059046ac37a12a78934e9ebf90e93750013b109a633d2eb09bd9eef588df1e43dcb4e8365ddd7a5f&fctypeId=3&fcId=5e350022-0249-4901-b91d-d7fb02f3106c&languages=en,fi,fr,de,pt,es&ot=false&projectId=527e13bf-5041-4f3d-99fa-e5331af27b3a", id:"CenturyGothic"},
    	{src:"https://api2.fonts.com/FontSubsetter.ashx?d44f19a684109620e4841471a790e81836d2d8012f816aa8619c04e4569bd48106e364198b639950059046ac37a12a78934e9ebf90e93750013b109a633d2eb09bd9eef588df1e43dcb4e8365ddd7a5f&fctypeId=3&fcId=66a4da99-024e-406d-91ca-40af984c066f&languages=en,fi,fr,de,pt,es&ot=false&projectId=527e13bf-5041-4f3d-99fa-e5331af27b3a", id:"CenturyGothicBold"},
		{src:"media/sounds/title_music.mp3", id:"music_title_loop"}
	]
};

//sounds for special features
var assets_additional = {
	loaded: false,
	progress: 0,
	manifest: [
		{src:"media/sounds/game_music.mp3", id:"music_game_loop"},	
		{src:"media/sounds/end_music.mp3", id:"end_music"},
		{src:"media/sounds/pinball_target.mp3", id:"pinball_target"},
		{src:"media/sounds/pinball_bumper_1.mp3", id:"bumper"},
		{src:"media/sounds/kickup.mp3", id:"snd_kickup"},
		{src:"media/sounds/snd_progress.mp3", id:"snd_progress"},
		{src:"media/sounds/pinball_coin.mp3", id:"pinball_newball"},
		{src:"media/sounds/pinball_launch.mp3", id:"pinball_launch"},
		{src:"media/sounds/pinball_hole.mp3", id:"pinball_hole"},
		{src:"media/sounds/snd_shot.mp3", id:"slingshot"},
		{src:"media/sounds/flip_up.mp3", id:"flip_up"},
		{src:"media/sounds/glue.mp3", id:"glue"},
		{src:"media/sounds/knife_down.mp3", id:"knife_down"},
		{src:"media/sounds/mallet_down.mp3", id:"mallet_down"},
		{src:"media/sounds/mallet_hit.mp3", id:"mallet_down"},
		{src:"media/sounds/snd_pickup.mp3", id:"snd_pickup"},
		{src:"media/sounds/unlock_multiplier.mp3", id:"unlock_multiplier"},
		{src:"media/sounds/snd_multiply.mp3", id:"snd_sparks"},
		{src:"media/sounds/snd_multiply.mp3", id:"snd_explode"},
		{src:"media/sounds/snd_pickup.mp3", id:"snd_pickup_1"},
		{src:"media/sounds/snd_pickup.mp3", id:"snd_pickup_2"},
		{src:"media/sounds/snd_pickup.mp3", id:"snd_pickup_3"},
		{src:"media/sounds/snd_coyote.mp3", id:"snd_coyote_drop"},
		{src:"media/sounds/snd_tinkle.mp3", id:"snd_coyote_release"},
		{src:"media/sounds/snd_coyote.mp3", id:"snd_coyote_drop"},
		{src:"media/sounds/snd_tinkle.mp3", id:"snd_coyote_release"},
		{src:"media/sounds/snd_tazspin.mp3", id:"snd_taz_spin"},
		{src:"media/sounds/snd_ricochet.mp3", id:"snd_taz_release"},
		{src:"media/sounds/unlock_multiplier.mp3", id:"snd_marvin_unlock"},
		{src:"media/sounds/snd_multiply.mp3", id:"snd_marvin_multiply"},
		{src:"media/sounds/snd_Lola.mp3", id:"snd_lola"},
		{src:"media/sounds/snd_alert.mp3", id:"snd_lola_bonuspnts"},
		{src:"media/sounds/char_bugs.mp3", id:"snd_bugs_transport"},
		{src:"media/sounds/snd_thwap.mp3", id:"snd_gossamer_hit"},
		{src:"media/sounds/snd_thwap.mp3", id:"snd_granny_hit"},
		{src:"media/sounds/char_daffy.mp3", id:"snd_daffy_shoot"},
		{src:"media/sounds/snd_makebasket.mp3", id:"snd_makebasket"},
		{src:"media/sounds/char_roadrunner.mp3", id:"snd_roadrunner_boost"},
		{src:"media/sounds/tweety_pickup.mp3", id:"snd_tweety_triggers"},
		{src:"media/sounds/char_tweety.mp3", id:"snd_tweety"},
		{src:"media/sounds/snd_donk.mp3", id:"snd_blocker_switch"},
		{src:"media/sounds/char_speedy.mp3", id:"snd_speedy_boost"},
		{src:"media/sounds/speedy_pickup.mp3", id:"snd_speedy_triggers"},
		{src:"media/sounds/freeball.mp3", id:"snd_free_ball"}
	]
};

var assets_threejs = {
  loaded: false,
  progress: 0,
  loadTime: 0,
  manifest: [
  	{src:"media/images/black.png", name:"black_fader", type:"texture"},
	{src:"media/images/GeneralBackground.jpg", name:"GeneralBackground", type:"texture"},
	{src:"media/images/white.png", name:"white_fader", type:"texture"},
	{src:"media/images/ScoreTopper.png", name:"ScoreTopper", type:"texture"},
	{src:"media/images/score_digits.png", name:"score_digits", type:"texture"},
  	{src:"media/images/points_10.png", name:"points_10", type:"texture"},
	{src:"media/images/points_20.png", name:"points_20", type:"texture"},
	{src:"media/images/points_25.png", name:"points_25", type:"texture"},
	{src:"media/images/points_50.png", name:"points_50", type:"texture"},
	{src:"media/images/points_100.png", name:"points_100", type:"texture"},
	{src:"media/images/points_200.png", name:"points_200", type:"texture"},
	{src:"media/images/points_250.png", name:"points_250", type:"texture"},
	{src:"media/images/points_300.png", name:"points_300", type:"texture"},
	{src:"media/images/points_500.png", name:"points_500", type:"texture"},
	{src:"media/images/points_1000.png", name:"points_1000", type:"texture"},
	{src:"media/images/points_2000.png", name:"points_2000", type:"texture"},
	{src:"media/images/points_3000.png", name:"points_3000", type:"texture"},
	{src:"media/images/points_4000.png", name:"points_4000", type:"texture"},
	{src:"media/images/points_5000.png", name:"points_5000", type:"texture"},
	{src:"media/images/points_6000.png", name:"points_6000", type:"texture"},
	{src:"media/images/points_7000.png", name:"points_7000", type:"texture"},
	{src:"media/images/points_8000.png", name:"points_8000", type:"texture"},
	{src:"media/images/points_9000.png", name:"points_9000", type:"texture"},
	{src:"media/images/points_10000.png", name:"points_10000", type:"texture"},
	{src:"media/images/points_20000.png", name:"points_20000", type:"texture"},
	{src:"media/images/points_freeball.png", name:"points_freeball", type:"texture"},

	{src:"media/models/Rollovers_lit.png", name:"lit_items", type:"texture", wrapping:true},
	{src:"media/models/Rollovers_unlit.png", name:"unlit_items", type:"texture", wrapping:true},
	{src:"media/models/Table.fbx", type:"static_fbx", flat_shading:true}
  ]
};