/*global $:false, Audio:false, init_game:false, reset_game:false, clear_game:false, show_game_results_popup:false, get_moves:false, add_zero:false, update_dynamic_text:false */
/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

var grid = [];
var levels = [];
var game_scores = { easy:0 , hard:0 , veryhard:0 };
var target_scores = { easy:8 , hard:12 , veryhard:27 };
var animation_time = 150;
var is_animating = false;
var moves = 0;
var current_level = null;
var total;
var fade_count = 0;
var last_clicked = null;
var game_arr;
var max_btn;
/*
document.onkeypress=function(event){
    var kc = (event.keyCode);
    if(kc === 32){
        alert(game_scores.easy+' '+game_scores.hard+' '+game_scores.veryhard);
    }
};
*/
function check_win(){
    var i;
    var win=true;
    for( i=0;i<game_arr.length;i++){
        if(game_arr[i] === -1){
            win=false;
            break;
        }
    }
    if(win){
         show_game_results_popup();
        if(current_level === 'easy'){
            $('#results_next_level_btn').css( { "background-image":"url('img/try_hard_level_btn.png')" } );
            $('#game_level_hard_btn_lock').css({'display':'none'});
            $('#game_level_hard_btn').css({'display':'block'});
        }else if(current_level === 'hard'){
            $('#results_next_level_btn').css( { "background-image":"url('img/try_veryhard_level_btn.png')" } );
            $('#game_level_veryhard_btn_lock').css({'display':'none'});
            $('#game_level_veryhard_btn').css({'display':'block'});
        }else if(current_level === 'veryhard'){
            $('#results_next_level_btn').css( { "background-image":"url('img/view_results_btn.png')" } );
        }
        
        var best = game_scores[current_level];
        if( (best === 0) || (moves < best) ){
            game_scores[current_level] = moves;
        }
    }
}
function animate_complete(){
    is_animating = false;
}
function update_moves(){
    moves++;
    $("#game_move_counter_span").html(get_moves());
    $("#game_results_moves_span").html(get_moves());
    
    if(moves <= target_scores[current_level]){
        $('#results_star_3').attr("src", "img/star.png");
    }else{
        $('#results_star_3').attr("src", "img/no_star.png");
    }
    if((moves-2) <= target_scores[current_level]){
        $('#results_star_2').attr("src", "img/star.png");
    }else{
        $('#results_star_2').attr("src", "img/no_star.png");
    }
    
    $('#results_star_1').attr("src", "img/star.png");
}
function trim_px(str){
    return Number(str.substring(0,str.length-2));
}
function init_card( name , func ){
    var btn = document.getElementById(name);
    btn.style.cursor = 'pointer';
    btn.onclick = func;
}
function click_card( event ){
    
    if(is_animating === false){
        var id = (event.target.id);
        var num = (id.substring(11+current_level.length));
        var match = false;
        var speed = 150;
        if( id === last_clicked){
            console.log('block click');
        }else if(last_clicked === null){
            is_animating = true;
            $('#game_'+current_level+'_back_'+num).fadeOut(speed, animate_complete );
        }else{
            is_animating = true;
            
            var num2 = last_clicked.substring(11+current_level.length);
            var img1 = $('#game_'+current_level+'_holder_'+num2).css("background-image");
            var img2 = $('#game_'+current_level+'_holder_'+num).css("background-image");

            if(img1 === img2){
                $('#game_'+current_level+'_back_'+num).fadeOut(speed, animate_complete );
                game_arr[num-1] = 0;
                game_arr[num2-1] = 0;
                match = true;
            }else{
                $('#'+last_clicked).delay(1000).fadeIn('fast', animate_complete );
                $('#game_'+current_level+'_back_'+num).fadeOut(speed).delay(1000).fadeIn(speed, animate_complete );

                match = true;
            }
            update_moves();
            check_win();
        }
        if(match){
            last_clicked = null;
        }else{
            last_clicked = id;
        }
    }
}
function init_cards(){
    var i;
    
    if(current_level === 'easy'){
        max_btn=8;
        game_arr = [1,1,2,2,3,3,4,4];
    }else if(current_level === 'hard'){
        max_btn=12;
        game_arr = [10,10,9,9,8,8,7,7,6,6,5,5];
    }else if(current_level === 'veryhard'){
        max_btn=18;
        game_arr = [10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2];
    }

    for(i = 1;i<=max_btn;i++){
        init_card( 'game_'+current_level+'_back_'+i, click_card );
        
        var len = game_arr.length-1;
        var pos = Math.round( Math.random()*len ) ;
        var card = game_arr[pos];
        
        while(card === -1){
            pos = Math.round( Math.random()*len ) ;
            card = game_arr[pos];
        }
        
        $('#game_'+current_level+'_holder_'+i).css( { "background-image":"url('img/card_"+card+".png')" } );

        game_arr[pos] = -1;
    }
}
function init_game( level ){
    
    last_clicked = null;
    current_level = level;   
    moves = 0;
    
    $("#game_move_counter_span").html('00');
    $("#game_results_moves_span").html('00');
    
    if(level === 'easy'){
        $('#game_easy_title').css( { 'display':'block' } );   
        $('#game_hard_title').css( { 'display':'none' } );   
        $('#game_veryhard_title').css( { 'display':'none' } );   
        
        $('#game_easy_wrapper').css( { 'display':'block' } );   
        $('#game_hard_wrapper').css( { 'display':'none' } );   
        $('#game_veryhard_wrapper').css( { 'display':'none' } );   
    }else if(level === 'hard'){
        $('#game_easy_title').css( { 'display':'none' } );   
        $('#game_hard_title').css( { 'display':'block' } );  
        $('#game_veryhard_title').css( { 'display':'none' } );    
        
        $('#game_easy_wrapper').css( { 'display':'none' } );   
        $('#game_hard_wrapper').css( { 'display':'block' } );   
        $('#game_veryhard_wrapper').css( { 'display':'none' } );   
    }else if(level === 'veryhard'){
        $('#game_easy_title').css( { 'display':'none' } );   
        $('#game_hard_title').css( { 'display':'none' } );   
        $('#game_veryhard_title').css( { 'display':'block' } );   
        
        $('#game_easy_wrapper').css( { 'display':'none' } );   
        $('#game_hard_wrapper').css( { 'display':'none' } );   
        $('#game_veryhard_wrapper').css( { 'display':'block' } );  
    }
    
    init_cards();
    update_dynamic_text();
}
function play_again(){
    $('#game_results_popup').css( { 'display':'none' } );
    reset_game();
}
function reset_game(){
    $("#game_move_counter_span").html('00');
    $("#game_results_moves_span").html('00');
    
    clear_game();
    init_game(current_level);
}
function clear_game(){
    var i;
    for(i = 1;i<=max_btn;i++){
        $('#game_'+current_level+'_'+i).fadeIn('fast');
        $('#game_'+current_level+'_back_'+i).fadeIn('fast');
    }
}
function next_level(){
    var i;
    if(current_level === 'easy'){
        current_level = 'hard';
        reset_game();
    }else if(current_level === 'hard'){
        current_level = 'veryhard';
        reset_game();
    }else if(current_level === 'veryhard'){
        clear_game();
            
        total = 0;
        total += game_scores.easy;
        total += game_scores.hard;
        total += game_scores.veryhard;
        
        var par_total = target_scores.easy + target_scores.hard + target_scores.veryhard;
        
        if( total <= par_total ){
            $('#end_star_3').attr("src", "img/star.png");
        }else{
            $('#end_star_3').attr("src", "img/no_star.png");
        }
        
        if( total <= (par_total*1.5) ){
            $('#end_star_2').attr("src", "img/star.png");
        }else{
            $('#end_star_2').attr("src", "img/no_star.png");
        }
        
        $('#end_star_1').attr("src", "img/star.png");
        $('#game_end_moves_span').html( add_zero( total ) );
        
        $('#game_end_popup').css( { 'display':'block' } );
    }
    $('#game_results_popup').css( { 'display':'none' } );
    
    update_dynamic_text();
}