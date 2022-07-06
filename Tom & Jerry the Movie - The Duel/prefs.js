//------------------------------------
// release dates
//------------------------------------

var oCONFIG = {
	game_id: "tnj_duel_1",
	language_file :"language/en-us.xml",
	debug_trace: true,
	debug_panel: false,
	debug_stats: false,
	browser_alert: "browser_alert/",
    game_orientation: "portrait",
    
    fullScreenAvailable: true,
    recapAnimation:true,
    
    widthCalibration:1000.0,
    heightCalibration:1920.0,//1820.0,//1920.0;
	masterVolume: 0.5,
	altVolume: 0.85,  
	gridSize: {x:10,y:12},
    instruction_pages:3,
    fifthPieceOdds: 50,
    fifthPieceOdds2Up: 10000,
    powerUpOdds: 200,     
	gravity: true,
	meterScale: 800,
    meterScale2Up: 800,
    scorePoints:"1,2,4,8,16,32,50,64,80,90,95,100".split(","),
    scoreOver:5,                  // Maximum points a move can make.  Prevents runaway matches
    trapCounts:"3,4,5,6,7,8",
    damageStep:12,
    meterStep:2,
    chanceOfOpponentGeneratingTrap:25,
    chanceOfOpponentHittingTrap:50,
    opponentAutoplayScore:6,
    opponentAutoplayTomBonus:3,
    tomDelayMinimum:1000,           // Minimum time between Tom AI moves
    tomDelayRange:2000,             // rnd(X) addition milliseconds
    jerryDelayMinumum:1500,         // Minimum time between Jerry AI moves
    jerryDelayRange:3000,           // rnd(X) addition milliseconds
    trapTimePenalty:3,              // How long trap (seconds) prevents player/AI from making moves
    playAISFX:true,
    
    pieceRemovesPoints:-1,         // -1=none, # item for each player reduces opponent's score instead of awarding points.
    jerryPieceRemovesPoints:-1,
    trappedPlayersLosePoints:true,   //Same as above, except when playing Jerry
    hideShareButtonOnLose:true
}

// The date string must be formatted as shown. These is used as date cuttoffs and is not displayed in the program.
var date_playing = "February, 2021";
var date_day_before = "February, 2021";
var date_week_before = "February, 2021";

//assets to be processed for threejs
var assets_threejs = {
  loaded: false,
  progress: 0,
  manifest: [
        {src:"media/front/Tom_char.png", 	    name:"Tom_char", type:"texture"},
        {src:"media/front/Jerry_char.png", 	    name:"Jerry_char", type:"texture"},
        {src:"media/front/particle_cloud.png", 	name:"particle_cloud", type:"texture"},
        {src:"media/front/gameBackground.jpg", 	name:"game_background", type:"texture"},
        {src:"media/front/damage0.jpg", 	    name:"Damage0", type:"texture"},
        {src:"media/front/damage1.jpg", 	    name:"Damage1", type:"texture"},
        {src:"media/front/damage2.jpg", 	    name:"Damage2", type:"texture"},
        {src:"media/front/damage3.jpg", 	    name:"Damage3", type:"texture"},
        {src:"media/front/damage4.jpg", 	    name:"Damage4", type:"texture"},
        {src:"media/front/damage5.jpg", 	    name:"Damage5", type:"texture"},
        {src:"media/score_digits.png", 			name:"score_digits", type:"texture"},
        {src:"media/front/blockerTop.png", 		name:"blockerTop", type:"texture"},
        {src:"media/front/blockerBottom.png", 	name:"blockerBottom", type:"texture"},
        {src:"media/front/blockerFull.png", 	name:"blockerFull", type:"texture"},
        {src:"media/front/Candy1.png", 			name:"Candy1", type:"texture"},
        {src:"media/front/Candy2.png", 			name:"Candy2", type:"texture"},
        {src:"media/front/Candy3.png", 			name:"Candy3", type:"texture"},
        {src:"media/front/Candy4.png", 			name:"Candy4", type:"texture"},
        {src:"media/front/Candy5.png", 			name:"Candy5", type:"texture"},
        {src:"media/front/Candy6.png", 			name:"Candy6", type:"texture"},
        {src:"media/front/Candy7.png", 			name:"Candy7", type:"texture"},
        {src:"media/front/Candy8.png", 			name:"Candy8", type:"texture"},
        {src:"media/front/Candy9.png", 			name:"Candy9", type:"texture"},
        {src:"media/front/Candy10.png", 		name:"Candy10", type:"texture"},
        {src:"media/front/Candy11.png", 		name:"Candy11", type:"texture"},
        {src:"media/front/Candy12.png", 		name:"Candy12", type:"texture"},
        {src:"media/front/MT_start.png", 		name:"MT_start", type:"texture"},
        {src:"media/front/MT_end.png", 		    name:"MT_end", type:"texture"},
        {src:"media/front/ScoreBarOpponent.jpg",name:"ScoreBarOpponent", type:"texture"},
        {src:"media/front/ScoreBarPlayer.jpg", 	name:"ScoreBarPlayer", type:"texture"},
        {src:"media/front/ScoreBarOpponentChange.jpg",name:"ScoreBarOpponentChange", type:"texture"},
        {src:"media/front/ScoreBarPlayerChange.jpg", 	name:"ScoreBarPlayerChange", type:"texture"},
        {src:"media/front/ScoreBarOpponentDown.jpg",name:"ScoreBarOpponentDown", type:"texture"},
        {src:"media/front/ScoreBarPlayerDown.jpg", 	name:"ScoreBarPlayerDown", type:"texture"},
        {src:"media/front/LogoSmall.png", 	     name:"GameGameLogoLogo", type:"texture"},
        {src:"media/front/Chalice_01.png", 	     name:"Chalice_01", type:"texture"},
        {src:"media/front/Chalice_02.png", 	     name:"Chalice_02", type:"texture"},
        {src:"media/front/GlowTint.png", 		name:"Glow", type:"texture"}
  ]
};

var assets_threejs_game = {
  loaded: false,
  progress: 0,
  manifest: [
]
};


//assets needed before title screen
var assets_preload = {
  loaded: false,
  progress: 0,
  manifest: [		
    {src:"media/fonts/CenturyGothic.woff", id:"CenturyGothic"},
    {src:"media/fonts/CenturyGothicBold.woff", id:"CenturyGothicBold"},
    {src:"media/fonts/CCExcelsius.woff", id:"CCExcelsius"},

    {src:"media/front/Title_Character.png", id:"Title_Character"},
    {src:"media/front/Title_Character_Jerry.png", id:"Title_Character_Jerry"},
    {src:"media/front/Title_Character_Shadow.png", id:"Title_Character_Shadow"},
    {src:"media/front/TitleScene.jpg", id:"TitleScene"},
    {src:"media/front/LogoSmall.png", id:"GameLogo"},
    {src:"media/logo_en.png", id:"logo_en"},
    {src:"media/logo_inv_en.png", id:"logo_inv_en"},

    {src:"media/front/title_background.jpg", id:"bg_title"},

    {src:"media/front/wide_button.png", id:"wide_button"},
    {src:"media/front/general_button.png", id:"general_button"},
    {src:"media/front/theaters_button.png", id:"theaters_button"},
    {src:"media/front/theaters_white.png", id:"theaters_white"},
    {src:"media/front/theaters.png", id:"theaters"},
    {src:"media/front/inst_text_area.png", id:"inst_text_area"},
    {src:"media/front/inst_page_1.png", id:"inst_page_1"},
    {src:"media/front/inst_page_2.png", id:"inst_page_2"},
    {src:"media/front/inst_page_3.png", id:"inst_page_3"},
    {src:"media/front/inst_right.png", id:"inst_right"},
    {src:"media/front/inst_left.png", id:"inst_left"},	  
    {src:"media/sounds/music_title_loop.mp3", id:"music_title_loop"},
    {src:"media/sounds/snd_click.mp3", id:"snd_click"},	  
    {src:"media/front/EasyButton.png", id:"EasyButton"},
    {src:"media/front/HardButton.png", id:"HardButton"},
    {src:"media/front/TwoPlayers.png", id:"TwoPlayers"},
    {src:"media/front/Tom_char.json", 	id:"Tom_char"},
    {src:"media/front/Jerry_char.json", 	id:"Jerry_char"},	    
    {src:"media/mobile_mask.svg", id:"mobile_mask"},
    {src:"media/b_fullscreen_off.svg", id:"b_fullscreen_off"},
    {src:"media/b_fullscreen_on.svg", id:"b_fullscreen_on"},
    {src:"media/b_pause.svg", id:"b_pause"},
    {src:"media/b_sound_off.svg", id:"b_sound_off"},
    {src:"media/b_sound_on.svg", id:"b_sound_on"},
    {src:"media/b_fullscreen_off_over.svg", id:"b_fullscreen_off_over"},
    {src:"media/b_fullscreen_on_over.svg", id:"b_fullscreen_on_over"},
    {src:"media/b_pause_over.svg", id:"b_pause_over"},
    {src:"media/b_sound_off_over.svg", id:"b_sound_off_over"},
    {src:"media/b_sound_on_over.svg", id:"b_sound_on_over"}
  ]
};


//assets needed before gameplay
var assets_additional = {
  loaded: false,
  progress: 0,
  manifest: [
   
    {src:"media/front/pinball_bib.jpg", id:"pinball_bib"},
    {src:"media/front/gameBackground_white.jpg", id:"gameBackground_white"},
    {src:"media/front/gameBackground_black.jpg", id:"gameBackground_black"},
    {src:"media/sounds/music_game_loop.mp3", id:"music_game_loop"},
    {src:"media/sounds/music_game_in.mp3", id:"music_game_in"},
    {src:"media/sounds/music_game_end.mp3", id:"music_game_end"},
    {src:"media/front/Recap_BothLose.jpg", id:"Recap_BothLose"},
    {src:"media/front/Recap_TomWins.jpg", id:"Recap_TomWins"},
    {src:"media/front/Recap_JerryWins.jpg", id:"Recap_JerryWins"},
      
    {src:"media/front/social_fb.png", id:"facebook"},
    {src:"media/front/social_ig.png", id:"instagram"},
    {src:"media/front/social_tw.png", id:"twitter"},
    {src:"media/front/social_dl.png", id:"download"},
      
	{src:"media/sounds/GameStart.mp3", id:"GameStart"},
    {src:"media/sounds/Candy_01.mp3", id:"Candy_01"},
    {src:"media/sounds/Candy_02.mp3", id:"Candy_02"},
    {src:"media/sounds/Candy_03.mp3", id:"Candy_03"},
    {src:"media/sounds/Candy_largegroup.mp3", id:"Candy_largegroup"},
    {src:"media/sounds/Candy_smallgroup.mp3", id:"Candy_smallgroup"},
    {src:"media/sounds/GameStart.mp3", id:"GameStart"},
    {src:"media/sounds/Hotel_Damage.mp3", id:"Hotel_Damage"},
    {src:"media/sounds/Trapped.mp3", id:"Trapped"},
    {src:"media/sounds/Trapset_01.mp3", id:"Trapset_01"},
    {src:"media/sounds/Trapset_02.mp3", id:"Trapset_02"},
    {src:"media/sounds/Trapset_03.mp3", id:"Trapset_03"},
    {src:"media/sounds/Trapset_04.mp3", id:"Trapset_04"},
    {src:"media/sounds/Candy_NoMatch.mp3", id:"Candy_NoMatch"}
  ]
};


var main_site_url = "https://www.facebook.com/tomandjerrymovie";//"http://www.goosebumps.movie";

var legal_links = [
  {msg: "legal_privacy", link:"https://policies.warnerbros.com/privacy/children/en-us/html/children_privacy_en-us_1.0.0.html", after:"|"},
  {msg: "legal_terms", link:"https://policies.warnerbros.com/terms/en-us/html/terms_en-us_1.2.0.html", after:"|"},
  {msg: "legal_cookies", link:"https://policies.warnerbros.com/privacy/en-us/html/privacy_en-us_1.3.0.html", after:"|"},
  {msg: "legal_credits", link:"showBilling", after:"nl"},
  {msg: "legal_mpaa", link:"https://www.mpaa.org/", after:"|"},
  {msg: "legal_ratings", link:"https://www.filmratings.com/", after:"|"},
  {msg: "legal_parents", link:"https://www.parentalguide.org/", after:"nl"},	
  {msg: "legal_copyright",link:null,after:null}
];

var billing_links = [
  {msg: "legal_privacy", link:"https://policies.warnerbros.com/privacy/children/en-us/html/children_privacy_en-us_1.0.0.html", after:"|"},
  {msg: "legal_terms", link:"https://policies.warnerbros.com/terms/en-us/html/terms_en-us_1.2.0.html", after:"|"},
  {msg: "legal_cookies", link:"https://policies.warnerbros.com/privacy/en-us/html/privacy_en-us_1.3.0.html", after:"nl"},
  {msg: "legal_mpaa", link:"https://www.mpaa.org/", after:"|"},
  {msg: "legal_ratings", link:"https://www.filmratings.com/", after:"|"},
  {msg: "legal_parents", link:"https://www.parentalguide.org/", after:"nl"},	
  {msg: "legal_copyright",link:null,after:null}
];

var animations = {
	"Tom_char": {
		"Welcome": {"loop":false,"cells":[1,2,3,4]},
        "Start Pose": {"loop":false,"cells":[4]},
        "Red": {"loop":false,"cells":[11,12,13,14,15,16]},
        "Blue": {"loop":false,"cells":[17,18,19,20,21,22]},
        "Yellow": {"loop":false,"cells":[23,24,25,26,27,28]},
        "Green": {"loop":false,"cells":[29,30,31,32,33,34]},
        "Pink": {"loop":false,"cells":[35,36,37,38,39,40]},
        "Trap": {"loop":false,"cells":[5,6,7,8,9,10]},
        "TRAPPED": {"loop":false,"cells":[41,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43, 42, 41]}
    },
	"Jerry_char": {
		"Welcome": {"loop":false,"cells":[1,2,3,4]},
        "Start Pose": {"loop":false,"cells":[4]},
        "Red": {"loop":false,"cells":[11,12,13,14,15,16]},
        "Blue": {"loop":false,"cells":[30,31,32,33,34]},
        "Yellow": {"loop":false,"cells":[5,6,7,8,9,10]},
        "Green": {"loop":false,"cells":[17,18,19,20,21,22]},
        "Pink": {"loop":false,"cells":[35,36,37,38,39,40]},
        "Trap": {"loop":false,"cells":[23,24,25,26,27,29]},
        "TRAPPED": {"loop":false,"cells":[41,42,43,44,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,45,44]}
    }
};








