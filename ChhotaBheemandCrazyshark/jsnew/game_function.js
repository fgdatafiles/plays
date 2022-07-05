/*Global jquery file for login in game module */

var domain = "/";

function bindBootstrapModalEvents() {

    var $body = $('body'),
            curPos = 0,
            isOpened = false,
            isOpenedTwice = false;
    $body.off('shown.bs.modal hidden.bs.modal', '.modal');
    $body.on('shown.bs.modal', '.modal', function() {
        if (isOpened) {
            isOpenedTwice = true;
        } else {
            isOpened = true;
            curPos = $(window).scrollTop();
            $body.css('overflow', 'hidden');
        }
    });
    $body.on('hidden.bs.modal', '.modal', function() {
        if (!isOpenedTwice) {
            $(window).scrollTop(curPos);
            $body.css('overflow', 'visible');
            isOpened = false;
        }
        isOpenedTwice = false;
    });
}

function submit_on_game_click(score) {

    var game_id = getURIParameter("game_id");
    var randNumber = Math.random() * (9999 - 1000) + 1000;
    $.ajax({
        type: "POST",
        url: domain + "ajax/check_session.php",
        data: "randNumber=" + randNumber,
        success: function(sresult) {
            if (sresult == "na") {
                $('input#score', window.parent.document).val(score)
                $('#loginModal').modal({show: true});
                bindBootstrapModalEvents();
            } else {
                var user_id = sresult;
                //submit score 
                submitScore(user_id, game_id, score);// call function for submit game score
            }
        }
    });
}

function submitScore(user_id, game_id, score) {
    $.ajax({
        type: "POST",
        url: domain + "ajax/submit_score.php",
        data: "user_id=" + user_id + "&game_id=" + game_id + "&score=" + score,
        success: function(sresult) {

            $("#loginModal").modal('hide');
            $("#topScorer").modal('show');
            bindBootstrapModalEvents();
            // call function for show data
            fetchTopScorer(game_id);

        }
    });
}

/* fetch top scorer */
function fetchTopScorer(game_id) {

    var randNumber = Math.random() * (9999 - 1000) + 1000;

    $.ajax({
        type: "POST",
        url: domain + "ajax/fetch_top_scorer.php",
        data: "game_id=" + game_id + "&randno=" + randNumber,
        success: function(gresult) {
            $("#model-content").html("");
            $("#model-content").html(gresult);
        }, beforeSend: function(xhr) {
            $(".load-wrap-lg").show();
        }, complete: function(xh) {
            $(".load-wrap-lg").hide();
        }
    });
}

/* Function for update play again counter */

function updatePlayAgain() {

    var game_id = getURIParameter("game_id");    
    var randNumber = Math.random() * (9999 - 1000) + 1000;
    $.ajax({
        type: "POST",
        url: domain + "ajax/update_played_again.php",
        data: "randNumber=" + randNumber + "&game_id=" + game_id,
        success: function(sresult) {

        }
    });
}


function getURIParameter(param, asArray) {
    return document.location.search.substring(1).split('&').reduce(function(p, c) {
        var parts = c.split('=', 2).map(function(param) {
            return decodeURIComponent(param);
        });
        if (parts.length == 0 || parts[0] != param)
            return (p instanceof Array) && !asArray ? null : p;
        return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
    }, []);
}



//jquery functions
$(document).ready(function() {


    //change value on keyup
    $("#txtusername").keyup(function() {
        var username = $("#txtusername").val();
        if (username == '') {
            $("#error_user").addClass('error');
            $("#error_user").html("Please enter your username");

        } else {
            $("#error_user").html("");
            $("#error_user").removeClass('error');
        }
    });

    //change value on keyup
    $("#txtpassword").keyup(function() {
        var password = $("#txtpassword").val();
        if (password == '') {
            $("#error_pwd").addClass('error');
            $("#error_pwd").html("Please enter your password");

        } else {
            $("#error_pwd").html("");
            $("#error_pwd").removeClass('error');
        }
    });


    /*Start coding for login validation and loging */
    $("#btngamelogin").click(function() {

        var password = $("#txtpassword").val();
        var username = $("#txtusername").val();
        var error = 0;

        //username validation
        if (username == '') {
            $("#error_user").addClass('error');
            $("#error_user").html("Please enter your username");
            error = 1;
        } else {
            $("#error_user").removeClass('error');
        }

        //password validation
        if (password == '') {
            $("#error_pwd").addClass('error');
            $("#error_pwd").html("Please enter your password");
            error = 1;
        } else {
            $("#error_pwd").removeClass('error');
        }

        // call function for login
        if (error == 0) {
            $.ajax({
                type: "POST",
                url: domain + "ajax/login.php",
                data: "username=" + username + "&password=" + password,
                success: function(sresult) {

                    var temp = new Array();
                    temp = sresult.split("@@");

                    if (temp[1] == "na") {
                        $("#login_waring").show();
                        $("#login_waring").html('<label class="msg-wrap">' + temp[0] + '</label>');
                        return false;
                    } else {
                        //call function for submit score    
                        var user_id = temp[1];
                        var submit_score = $('input#score', window.parent.document).val();
                        var game_id = $('input#game_id', window.parent.document).val();
                        submitScore(user_id, game_id, submit_score);// call function for submit game score
                        $("#signupModal").modal('hide');
                    }

                }
            });
        }

    });
    /*End coding for login  */

    /* Start coding for load top scorer*/
//    $("#topScorer").on('shown.bs.modal', function() {
//
//        var game_id = $('input#game_id', window.parent.document).val();
//        $.ajax({
//            type: "POST",
//            url: domain + "ajax/fetch_top_scorer.php",
//            data: "game_id=" + game_id,
//            success: function(sresult) {
//                $("model-content").html("");
//            }, beforeSend: function(xhr) {
//                $(".load-wrap-lg").show();
//            }, complete: function(xh) {
//                $(".load-wrap-lg").hide();
//            }
//        });
//    });
});