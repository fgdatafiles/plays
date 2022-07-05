/*global $:false, Audio:false, init_game:false, reset_game:false, clear_game:false, add_zero:false */
/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50, */
/*"predef": [ moves, total ]*/

var first_screen_entered = false;
var start_orientation;
var android_device_height;
var android_device_width;
var first_run = true;
var flip = false;
var view_height;
var view_width;
var is_music = false;
var page_transition = 'pop';
var rotation_lock = 'landscape';

var isMobile = {
    Android: function() {
        return (/Android/i).test(navigator.userAgent);
    },
    BlackBerry: function() {
        return (/BlackBerry/i).test(navigator.userAgent);
    },
    iOS: function() {
        return (/iPhone|iPad|iPod/i).test(navigator.userAgent);
    },
    Windows: function() {
        return (/IEMobile/i).test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
var isAndroid = isMobile.Android();

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    },
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    }
};

function init_button( name , func ){
    var btn = document.getElementById(name);
    btn.style.cursor = 'pointer';
    btn.onclick = func;
}

/////////////////////////////////
// sound handlers
/////////////////////////////////
var loopAudio = new Audio('audio/loop.mp3');
loopAudio.load();
loopAudio.addEventListener('ended', function () {
    this.currentTime = 2.25;
    this.play();
}, false);
function play_sound() {
    loopAudio.play();
}
function stop_sound() {
    loopAudio.pause();
}
function toggle_sound(){
    if (is_music) {
        is_music = false;
        stop_sound();
        $('#home_sound_btn').css("background-image", "url('img/no_sound_btn.png')");
        $('#game_level_sound_btn').css("background-image", "url('img/no_sound_btn.png')");
        $('#game_sound_btn').css("background-image", "url('img/no_sound_btn.png')");
    } else{
        is_music = true;
        play_sound();
        $('#home_sound_btn').css("background-image", "url('img/sound_btn.png')"); 
        $('#game_level_sound_btn').css("background-image", "url('img/sound_btn.png')"); 
        $('#game_sound_btn').css("background-image", "url('img/sound_btn.png')"); 
    }
}

init_button( 'home_sound_btn', toggle_sound );
init_button( 'game_sound_btn', toggle_sound );
init_button( 'game_level_sound_btn', toggle_sound );

/////////////////////////////////
// button handlers
/////////////////////////////////
function game_level_click( num ){
    init_game(num-1);
    $.mobile.changePage( "#game_screen", { transition: page_transition} );
    update_dynamic_text();
}
init_button( 'home_play_now_btn' , function() {
    $.mobile.changePage( "#game_level_screen", { transition: page_transition} );
});

init_button('game_level_help_btn' ,             function(){ $('#game_level_help_popup').css( { 'display':'block' } ); } );
init_button('game_level_help_popup_blocker' ,   function(){ $('#game_level_help_popup').css( { 'display':'none' } ); } );
init_button('game_level_quit_btn' ,             function(){ $('#game_level_quit_popup').css( { 'display':'block' } ); } );
init_button('game_level_quit_popup_blocker' ,   function(){ $('#game_level_quit_popup').css( { 'display':'none' } ); } );
init_button('game_level_help_close_btn' ,       function(){ $('#game_level_help_popup').css( { 'display':'none' } ); } );

init_button('game_help_btn' ,                   function(){ $('#game_help_popup').css( { 'display':'block' } ); } );
init_button('game_help_close_btn' ,             function(){ $('#game_help_popup').css( { 'display':'none' } ); } );
init_button('game_help_popup_blocker' ,         function(){ $('#game_help_popup').css( { 'display':'none' } ); } );
init_button('game_quit_btn' ,                   function(){ $('#game_quit_popup').css( { 'display':'block' } ); } );
init_button('game_quit_popup_blocker' ,         function(){ $('#game_quit_popup').css( { 'display':'none' } ); } );

init_button('game_results_popup_blocker' ,      function(){ $('#game_results_popup').css( { 'display':'none' } ); } );
init_button('game_end_popup_blocker' ,          function(){ $('#game_end_popup').css( { 'display':'none' } ); } );

function close_game_level_quit_popup(){
    $('#game_level_quit_popup').css( { 'display':'none' } );
}
function quit_game_level(){
    $.mobile.changePage( "#main_screen", { transition: page_transition} );
    $('#game_level_quit_popup').css( { 'display':'none' } );
}
function show_game_results_popup(){
    $('#game_results_popup').css( { 'display':'block' } );
    update_dynamic_text();
}
function close_game_quit_popup(){
    $('#game_quit_popup').css( { 'display':'none' } );
}
function open_home_help_popup(){
    $("#home_help_popup").popup( 'open', { positionTo: "window" } );
    //$("#home_help_popup").popup("reposition", {positionTo: 'window'});
}
function quit_game(){
    reset_game();
    $.mobile.changePage( "#main_screen", { transition: page_transition} );
    $('#game_quit_popup').css( { 'display':'none' } );
    $('#game_end_popup').css( { 'display':'none' } );
    $('#game_results_popup').css( { 'display':'none' } );
}
init_button('game_level_easy_btn' , function(){
    init_game('easy');
    $.mobile.changePage( "#game_screen", { transition: page_transition} ); 
} );
init_button('game_level_hard_btn' , function(){ 
    init_game('hard');
    $.mobile.changePage( "#game_screen", { transition: page_transition} ); 
} );
init_button('game_level_veryhard_btn' , function(){ 
    init_game('veryhard');
    $.mobile.changePage( "#game_screen", { transition: page_transition} ); 
} );
/////////////////////////////////
// slide body fix
/////////////////////////////////
document.ontouchmove = function(event){
    event.preventDefault();
};
/////////////////////////////////
// resize code
/////////////////////////////////
function update_wrapper(){
    if(first_run){
        first_run = false;
        view_height = $( document ).height();
        view_width = $( document ).width();    
    }
    
    view_height = $( document ).height();
    view_width = $( document ).width();
    
    if((rotation_lock === 'landscape') && (view_height > view_width)){
        $('#rotation_blocker').css( 'display','block');
    }else if((rotation_lock === 'portrait') && (view_height < view_width)){
        $('#rotation_blocker').css( 'display','block'); 
    }else{
        $('#rotation_blocker').css( 'display','none');   
    }
    
    var image_width = 1034;
    var image_height = 689;
    
    var ratio, ratio_width, ratio_left, ratio_height, ratio_top, targ_width, targ_height;
    //alert(view_width+' '+view_height);
    
    if( view_height <= view_width ){
        
            ratio = image_width / image_height;
            ratio_width = Math.round(view_height*ratio);
        
            if( ratio_width > view_width ){
                //console.log('a');
                ratio = image_height / image_width;
                ratio_height = Math.round(view_width*ratio);
                ratio_top = Math.round((view_height-ratio_height)/2);
                targ_width = view_width;
                
                $("#body_wrapper").width( targ_width );
                $("#body_wrapper").height(ratio_height);
                $("#body_wrapper").css( {'top':ratio_top+'px'} );
                $("#body_wrapper").css( {'left':'0px'} );
                $("#main_screen_content").height(ratio_height);
                $("#game_level_screen_content").height(ratio_height);
                $("#game_screen_content").height(ratio_height);   
            }else{
                //console.log('b');
                ratio = image_width / image_height;
                ratio_width = Math.round(view_height*ratio);
                ratio_left = Math.round((view_width-ratio_width)/2); 
                targ_height = view_height;
                $("#body_wrapper").height( targ_height );
                $("#body_wrapper").width(ratio_width);
                $("#body_wrapper").css( {'left':ratio_left+'px'} );
                $("#body_wrapper").css( {'top':'0px'} );
                $("#main_screen_content").height(targ_height);
                $("#game_level_screen_content").height(targ_height);
                $("#game_screen_content").height(targ_height);
            }
       //console.log(view_width+' '+view_height+' '+ratio_width+' '+targ_height+' ');
    }else{
        //console.log('c');
        ratio = image_height / image_width;
        ratio_height = Math.round(view_width*ratio);
        ratio_top = Math.round((view_height-ratio_height)/2);
        targ_width = view_width;
        
        $("#body_wrapper").width( targ_width );
        $("#body_wrapper").height(ratio_height);
        $("#body_wrapper").css( {'top':ratio_top+'px'} );
        $("#body_wrapper").css( {'left':'0px'} );
        $("#main_screen_content").height(ratio_height);
        $("#game_level_screen_content").height(ratio_height);
        $("#game_screen_content").height(ratio_height);
        
        //console.log(view_width+' '+view_height+' '+targ_width+' '+ratio_height+' ');
    }
    
    flip = !flip;
}
function set_scroll(){
    window.scrollTo(0, 0);
}
function get_moves(){
    return add_zero( moves );
}
function add_zero(num){
    var str = '';
    if(num < 10){
        str += '0'+num;    
    }else{
        str += num;  
    }
    return str;
}
function update_dynamic_text(){
    $("#game_move_title_span").bigText();
    $("#game_move_counter_span").bigText();
    $("#game_results_moves_span").bigText();
    $("#game_end_moves_span").bigText();
}
function handle_rotation(){
    set_scroll();
    if(isAndroid){
        setTimeout( update_wrapper, 250 );
    }else{
        update_wrapper();
    }
    update_dynamic_text();
}
function init_hax() {
    view_height = $( document ).height();
    view_width = $( document ).width();
    handle_rotation();
    
   // var supportsOrientationChange = (typeof(window.onorientationchange) !== "undefined"),
   // orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
   // window.addEventListener(orientationEvent, handle_rotation);
    $(window).on('resize', function() {
        handle_rotation();
    });
    
    update_dynamic_text();
    $( document ).on( "pageshow", function( event ) { update_dynamic_text(); } );
}

