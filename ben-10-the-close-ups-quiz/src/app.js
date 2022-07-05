
var app =  app || {};
var lang='en';
app.step=0;
app.nCurrentQuestion=0;
var QT=1;
var bSound = true;
var heroL,heroR,counterC,wyniki,winner,playBtt,againBtt,summaryBgd,summaryHeader,summaryDescription;
app.anim=1;
app.manifest;
var music;
var nCurrentBackground=1
app.loader;
var volInterval;
app.ms='';

var isIntro=true;
if(createjs){
    var c = createjs;
}
app.isAndroid= false;
var mus;
if(  document.addEventListener  ) {
    $(document).ready(function () {



        _preloader = new Preloader();
        _preloader.init();

        
        mus = document.getElementById("mus");
        if( navigator.userAgent.match(/Android/i)){
            app.isAndroid =true;
        }
        //app.isAndroid=true;
        console.log('is Androind'+ app.isAndroid)
        if(detectIp()){

            $("body").removeClass("no-touch");

        }
        if($(window).width()<600){app.ms='m';}else{app.ms='';}
           $(document).ready(function () {

               $('#soundBtt').click(function(){
                   $(this).toggleClass('active');
                   bSound=!bSound;
                   console.log(bSound);
                   if(bSound){
                       if(!app.isAndroid){
                           if(isIntro){ 
                               console.log('wlacz loopa z intro');
                               music = createjs.Sound.play('intro', {loop: -1, volume: 1});
                           }else{
                               music = createjs.Sound.play('music', {loop: -1, volume: 1});
                           }
                       }else{
                           mus.play();
                       }
                   }else{


                       if(app.isAndroid){
                           mus.pause()
                       }else{
                           music.stop();
                       }
                   }
               });



               $.getJSON( "strings/strings.json?rand="+Math.random(), function( data ) {


                   app.data = data;



                       app.quiz = app.data.quiz;
                    lang = app.data.lang;
                   console.log(lang+'LANGUAGE');
                   app.preloadImages = function() {

                       app.loader = new createjs.LoadQueue(false);

                       createjs.Sound.initializeDefaultPlugins();
                       app.loader.installPlugin(createjs.Sound);
                       app.manifest=[
                           {id:'r1',src:'sounds/r1.mp3'},
                           {id:'r2',src:'sounds/r2.mp3'},
                           {id:'correct',src:'sounds/correct.mp3'},
                           {id:'incorrect',src:'sounds/incorrect.mp3'},
                           {id:'i',src:'img/intro.jpg'},
                           {id:'i',src:'img/intro_m.jpg'},
                           {id:'i',src:'img/game-over1.jpg'},
                           
                           {id:'i',src:'img/bgd1.jpg'},
                           {id:'i',src:'img/bgd2.jpg'},
                           {id:'i',src:'img/bgd3.jpg'},
                           {id:'i',src:'img/bgd4.jpg'},
                           {id:'i',src:'img/bgd5.jpg'},
                           {id:'i',src:'img/bgd6.jpg'},
                           {id:'i',src:'img/bgd7.jpg'},
                           {id:'i',src:'img/bgd8.jpg'},
                           {id:'i',src:'img/bgd9.jpg'},
                           {id:'i',src:'img/bgd10.jpg'},
                           {id:'i',src:'img/bgd11.jpg'},
                           {id:'i',src:'img/bgd12.jpg'},
                           {id:'i',src:'img/bgd12.jpg'},
                           {id:'i',src:'img/good/azmuth.jpg'},
                           {id:'i',src:'img/good/bashmouth.jpg'},
                           {id:'i',src:'img/good/ben.jpg'},
                           {id:'i',src:'img/good/billybillions.jpg'},
                           {id:'i',src:'img/good/bootleg.jpg'},
                           {id:'i',src:'img/good/cannonbolt.jpg'},
                           {id:'i',src:'img/good/charmcaster.jpg'},
                           {id:'i',src:'img/good/crystalfist.jpg'},
                           {id:'i',src:'img/good/darkmatter.jpg'},
                           {id:'i',src:'img/good/diamondhead.jpg'},
                           {id:'i',src:'img/good/dranimo.jpg'},
                           {id:'i',src:'img/good/foreverknight.jpg'},
                           {id:'i',src:'img/good/fourarms.jpg'},
                           {id:'i',src:'img/good/frightwig.jpg'},
                           {id:'i',src:'img/good/gax.jpg'},
                           {id:'i',src:'img/good/greymatter.jpg'},
                           {id:'i',src:'img/good/gwen.jpg'},
                           {id:'i',src:'img/good/heatblast.jpg'},
                           {id:'i',src:'img/good/hex.jpg'},
                           {id:'i',src:'img/good/hotshot.jpg'},
                           {id:'i',src:'img/good/humungousaur.jpg'},
                           {id:'i',src:'img/good/kevinlevin.jpg'},
                           {id:'i',src:'img/good/lagrange.jpg'},
                           {id:'i',src:'img/good/lorddecibel.jpg'},
                           {id:'i',src:'img/good/maurice.jpg'},
                           {id:'i',src:'img/good/nannynightmare.jpg'},
                           {id:'i',src:'img/good/overflow.jpg'},
                           {id:'i',src:'img/good/phil.jpg'},
                           {id:'i',src:'img/good/quadsmack.jpg'},
                           {id:'i',src:'img/good/rath.jpg'},
                           {id:'i',src:'img/good/shockrock.jpg'},
                           {id:'i',src:'img/good/skunkmoth.jpg'},
                           {id:'i',src:'img/good/slapback.jpg'},
                           {id:'i',src:'img/good/steamsmythe.jpg'},
                           {id:'i',src:'img/good/stinkfly.jpg'},
                           {id:'i',src:'img/good/tetraxshard.jpg'},
                           {id:'i',src:'img/good/thornblade.jpg'},
                           {id:'i',src:'img/good/unclemax.jpg'},
                           {id:'i',src:'img/good/undertow.jpg'},
                           {id:'i',src:'img/good/upgrade.jpg'},
                           {id:'i',src:'img/good/vilgax.jpg'},
                           {id:'i',src:'img/good/wildvine.jpg'},
                           {id:'i',src:'img/good/wreckingbolt.jpg'},
                           {id:'i',src:'img/good/xlr8.jpg'},
                           {id:'i',src:'img/good/zombozo.jpg'},

                           {id:'i',src:'img/bad/azmuth.jpg'},
                           {id:'i',src:'img/bad/bashmouth.jpg'},
                           {id:'i',src:'img/bad/ben.jpg'},
                           {id:'i',src:'img/bad/billybillions.jpg'},
                           {id:'i',src:'img/bad/bootleg.jpg'},
                           {id:'i',src:'img/bad/cannonbolt.jpg'},
                           {id:'i',src:'img/bad/charmcaster.jpg'},
                           {id:'i',src:'img/bad/crystalfist.jpg'},
                           {id:'i',src:'img/bad/darkmatter.jpg'},
                           {id:'i',src:'img/bad/diamondhead.jpg'},
                           {id:'i',src:'img/bad/dranimo.jpg'},
                           {id:'i',src:'img/bad/foreverknight.jpg'},
                           {id:'i',src:'img/bad/fourarms.jpg'},
                           {id:'i',src:'img/bad/frightwig.jpg'},
                           {id:'i',src:'img/bad/gax.jpg'},
                           {id:'i',src:'img/bad/greymatter.jpg'},
                           {id:'i',src:'img/bad/gwen.jpg'},
                           {id:'i',src:'img/bad/heatblast.jpg'},
                           {id:'i',src:'img/bad/hex.jpg'},
                           {id:'i',src:'img/bad/hotshot.jpg'},
                           {id:'i',src:'img/bad/humungousaur.jpg'},
                           {id:'i',src:'img/bad/kevinlevin.jpg'},
                           {id:'i',src:'img/bad/lagrange.jpg'},
                           {id:'i',src:'img/bad/lorddecibel.jpg'},
                           {id:'i',src:'img/bad/maurice.jpg'},
                           {id:'i',src:'img/bad/nannynightmare.jpg'},
                           {id:'i',src:'img/bad/overflow.jpg'},
                           {id:'i',src:'img/bad/phil.jpg'},
                           {id:'i',src:'img/bad/quadsmack.jpg'},
                           {id:'i',src:'img/bad/rath.jpg'},
                           {id:'i',src:'img/bad/shockrock.jpg'},
                           {id:'i',src:'img/bad/skunkmoth.jpg'},
                           {id:'i',src:'img/bad/slapback.jpg'},
                           {id:'i',src:'img/bad/steamsmythe.jpg'},
                           {id:'i',src:'img/bad/stinkfly.jpg'},
                           {id:'i',src:'img/bad/tetraxshard.jpg'},
                           {id:'i',src:'img/bad/thornblade.jpg'},
                           {id:'i',src:'img/bad/unclemax.jpg'},
                           {id:'i',src:'img/bad/undertow.jpg'},
                           {id:'i',src:'img/bad/upgrade.jpg'},
                           {id:'i',src:'img/bad/vilgax.jpg'},
                           {id:'i',src:'img/bad/wildvine.jpg'},
                           {id:'i',src:'img/bad/wreckingbolt.jpg'},
                           {id:'i',src:'img/bad/xlr8.jpg'},
                           {id:'i',src:'img/bad/zombozo.jpg'},
                         
                           {id:'intro',src:'sounds/intro.mp3'},
                           {id:'music',src:'sounds/music.mp3'}
                       ];


                       app.loader.addEventListener('complete',onComplete1);
                       app.loader.addEventListener('progress',onProgress);
                       app.loader.loadManifest(app.manifest);
                   };

                   app.preloadImages();
                   window.addEventListener("orientationchange", onResize, false);
                   window.addEventListener('resize', onResize, false);

               });

     });









})


}
function onProgress(e){

    pre_bgd.x = -189+(321*e.loaded)



}

function onComplete1(){

    TweenLite.to(_preloader.pageContainer,.5,{alpha:0,onComplete:onComplete2})
}
function onComplete2(){

    soundConf();

    $('.preloader-appla').hide();

    initApp();


    if (params.question) {
        console.log('pokaz pytanie');
        app.nCurrentQuestion = app.data.quizlength - 1;

        wybierzPytaniezPuli(params.question);
        $('.page').removeClass('active');
        $('.quiz').addClass('active');
        fillPage();

    } else if (params.summary) {
        $('.gfx-container').show();
        showSummary(params.summary);
    } else {


        configureIntro();
        $('#play-button').click(function () {
            isIntro=false;
            if(app.isAndroid){
                if(bSound){console.log('mus play')
                    mus.play();
                }

            }else{
                volInterval = setInterval(scisz,10);
            }
            $('.page').removeClass('active');
            $('.quiz').addClass('active');
            fillPage();

        });
    }

}

function scisz(){

    if(bSound) {
        if (music.volume < 0.01) {
            clearInterval(volInterval);
            music.stop();
            music = createjs.Sound.play('music', {loop: -1, volume: 0});
            volInterval = setInterval(podglosnij, 10)

        } else {
            music.volume -= 0.01;
        }
    }
}

function podglosnij(){
    if(bSound) {
        if (music.volume > 0.99) {

            music.volume = 1;
            clearInterval(volInterval)
        } else {
            music.volume += 0.01;

        }
    }

}
function soundConf(){
    $('#play-button,#play-again-button').mouseover(function(){

       playSounds('r1');
    })
}
function configureIntro(){
    $('#intro-header').html(app.data.header[lang]);


    $('#main-question').html(app.data.quiz.question[lang]);
    $('#soundBtt').show();
    $('#homeBtt').show();
    //playSounds('r1');
    if(!app.isAndroid) music=createjs.Sound.play('intro',{loop: -1, volume: 1});
    wyniki=[];
    winner=-1;
    for (var i=0;i<app.data.summarys.length;i++){
        wyniki[i]=0;
    }
    losujPytaniazPuli();
    
    $('#play-button>.button-inner>p').html(app.data.buttonplay[lang]);


    anim('intro');
};

function clearPage(){
    console.log('wyczysc');
    $('.question>.question-inner>p').empty();
    $('.answerContainer').empty();
    $('.question-counter2').empty();
    $('.question-counter').empty();

}

function wybierzPytaniezPuli(n){
    console.log('wybierz')
    app.selectedQuestions = [];
    for (var i=0;i<app.data.quizlength;i++){
        app.selectedQuestions[i]=app.quiz.files[n][1];
    }

    console.log(app.selectedQuestion);

}
function losujPytaniazPuli(){
    var zz = app.quiz.files.concat();

 //
    shuffle(zz);
    app.selectedQuestions = [];
    for (var i=0;i<app.data.quizlength;i++) {
        app.selectedQuestions[i]=[];

        app.selectedQuestions[i][0]=zz.shift()[1];
        app.selectedQuestions[i][1]=zz[0][1];
        app.selectedQuestions[i][2]=zz[1][1];
        shuffle(zz);

    }
    console.log(app.selectedQuestions);
}



function fillPage(){
    clearPage();
    if(app.nCurrentQuestion<app.data.quizlength){

        var bgdActive = $('.backgrounds .background.active');
        var bgdNoneActive = $('.backgrounds .background').not('.active');
        bgdActive.removeClass('active');
        bgdNoneActive.addClass('active').css('background-image', "url('img/bgd"+nCurrentBackground+"+.jpg')");

        $('.answerContainer').empty();
        $('.page.active').removeClass('disabled');

       
        counterC[0].src="img/c"+app.nCurrentQuestion+".png";

        var paczka = app.selectedQuestions[app.nCurrentQuestion];
        $('.question>.question-inner>p').html(paczka.question.text);
        $('.question>.question-inner>p').css('font-size',paczka.question['fontSize'+app.ms]+'px');

        var paczkaPytan = app.selectedQuestions[app.nCurrentQuestion].answers;

        shuffle(paczkaPytan);

        for(var i=0;i<app.selectedQuestions[app.nCurrentQuestion].answers.length;i++) {
            var dataToAppend;
            console.log(app.selectedQuestions[app.nCurrentQuestion].answers[i].src+'SRC');
            if(app.selectedQuestions[app.nCurrentQuestion].answers[i].src){
                dataToAppend = '<div class="image-button answer" data-track="'+app.selectedQuestions[app.nCurrentQuestion].answers[i].summary+'"><img src="'+app.selectedQuestions[app.nCurrentQuestion].answers[i].src+'"/><div class="inner-image-answer"><p style="font-size:'+app.selectedQuestions[app.nCurrentQuestion].answers[i]['fontSize'+app.ms]+'px'+'">'+app.selectedQuestions[app.nCurrentQuestion].answers[i].text+'</p></div></div>';
            }else{
                dataToAppend= '<div class="button answer" data-track="'+app.selectedQuestions[app.nCurrentQuestion].answers[i].summary+'" ><div class="button-inner "><p style="font-size:'+app.selectedQuestions[app.nCurrentQuestion].answers[i]['fontSize'+app.ms]+'px'+'">'+app.selectedQuestions[app.nCurrentQuestion].answers[i].text+'</p></div></div>'
            }

            $('.answerContainer').append(dataToAppend);
        }
        $('.gfx-container').show();


        $('.answer').mouseover(function(){


            var zz = $(this).index()%2;

            playSounds('r'+(zz+1));
        });
        heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeft['width'+app.ms]+'px');
        heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeft.src;
        heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeft['left'+app.ms]+'px');
        heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeft['top'+app.ms]+'px');


        heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRight['width'+app.ms]+'px');
        heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRight.src;

        heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRight['left'+app.ms]+'px');

        heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRight['top'+app.ms]+'px');

        anim('type1In');


        $('.answer').click(function(e){

            clickAnswer(this);

        })

    }else{

        selectWinner();


    }


}
function selectWinner(){
    var temp = 0;
    for (var j=0;j<wyniki.length;j++){

        if(wyniki[j]>=temp){
            winner = j;
            temp =wyniki[j];
        }
    }

    clearPage();
    showSummary(winner);

}
function initApp(){
    wyniki=[];
    winner=-1;
    counterC = $('.counter-container');
    heroL = $('#hero-left');
    heroR = $('#hero-right');
    playBtt = $('#play-button');
    summaryBgd = $('#summary-bgd');
    summaryHeader = $('#summary-header');
    summaryDescription = $('#summary-description');

    againBtt = $('#play-again-button');
    //counterC.css('left',app.data.counter['left'+app.ms]+'px');
    ///counterC.css('top',app.data.counter['top'+app.ms]+'px');


}
function showSummary(www){
    $('.page').removeClass('active');
    $('.summary').addClass('active');

    var b = parseInt(www)+1;
    $('#summary-bgd')[0].src = 'img/summary'+b+'BgdAnswer.png';

    $('#play-again-button>.button-inner>p').html(app.data.buttonPlayagain[lang]);

    var paczka = app.data.summarys[www];

    var bgdActive = $('.backgrounds .background.active');
    var bgdNoneActive = $('.backgrounds .background').not('.active');
    bgdActive.removeClass('active');
    bgdNoneActive.addClass('active').css('background-image', "url('img/game-over1"+app.ms+".jpg')");


    addSummaryHeroImages(parseInt(www)+1);


    //summaryBgd[0].src=paczka.bgdAnswer['src'+app.ms];

    summaryHeader.html(paczka.header[lang].text);

    summaryHeader.css('top',paczka.header[lang]['top'+app.ms]+'px');
    summaryHeader.css('font-size',paczka.header[lang]['fontSize'+app.ms]+'px');
    summaryDescription.html(paczka.description[lang].text);
    summaryDescription.css('left',paczka.description[lang]['left'+app.ms]+'px');
    summaryDescription.css('top',paczka.description[lang]['top'+app.ms]+'px');
    summaryDescription.css('font-size',paczka.description[lang]['fontSize'+app.ms]+'px');


   // if(www==1){
     //   $('.rank').addClass('black');
    //}
    anim('summaryIn');


}
function addSummaryHeroImages(n){
  heroL.addClass('summary'+n)
  heroR.addClass('summary'+n)
    //TweenMax.fromTo(heroL,10,{opacity:0,delay:3},{delay:3,opacity:1})
    //TweenMax.fromTo(heroR,10,{opacity:0,delay:3},{delay:3,opacity:1})

}
function anim(z){

    if(app.anim){

        switch (z){
            case 'intro':

                TweenMax.from(playBtt,1,{opacity:0, top:'-400px'});
                TweenMax.from($('#intro-header'),1,{opacity:0,delay:.5,top:'-400px'});
                TweenMax.from($('#intro-logo'),1,{opacity:0,delay:1,top:'-400px'});
                break;
            case 'type1In':
                heroL.css('opacity',1);
                heroR.css('opacity',1);
                //TweenMax.from(heroL,1,{left:'-200px',opacity:0});
                TweenMax.from(heroL,1,{opacity:0});
                //TweenMax.from(heroR,1,{left:'1200px',opacity:0});
                TweenMax.from(heroR,1,{opacity:0});
                TweenLite.from($('.question'),1,{opacity:0,top:"-=100px"});
                for(var i=0;i<3;i++){
                    var b = $('.type2 .answer')[i];
                    if(b){
                        TweenLite.from(b,.3,{opacity:0,top:"-=100px",delay:.2+(i*.1)});
                    }
                }
                break;
            case 'summaryIn':
                heroL.css('opacity',1);
                heroR.css('opacity',1);
                TweenMax.from($('#play-again-button'),1,{top:'700px',opacity:0});
                TweenMax.from(heroL,1,{delay:1,opacity:0});
                TweenMax.from(heroR,1,{delay:1,opacity:0});
                TweenMax.from(summaryBgd,1,{left:'800px',opacity:0});
                TweenMax.from(summaryHeader,1,{left:'800px',opacity:0});
                TweenMax.from(summaryDescription,1,{left:'800px',opacity:0});

                break;


        }
    }
}
function onResize(){


    if($(window).width()<600){app.ms='m';}else{app.ms='';}
}
function przelacz(){
    app.nCurrentQuestion++;
    setTimeout(fillPage,app.data.fadeoutTime);


}

function clickAnswer(t){

    playSounds('correct');
    $(t).addClass('disabled');
    var value = $(t).attr('data-track');
    $('.page.active').addClass('disabled');
    heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['width'+app.ms]+'px');
    heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter.src;
    heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['left'+app.ms]+'px');
    heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['top'+app.ms]+'px');
    heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['width'+app.ms]+'px');
    heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRightAfter.src;

    heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['left'+app.ms]+'px');
    heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['top'+app.ms]+'px');

    TweenMax.fromTo(heroL,1,{opacity:0},{opacity:1});
    TweenMax.fromTo(heroR,1,{opacity:0},{opacity:1});
    wyniki[value]++;
    przelacz();
}

function reloadMe(){
    window.location.reload();
}


function shuffleElements($elements) {
    var i, index1, index2, temp_val;

    var count = $elements.length;
    var $parent = $elements.parent();
    var shuffled_array = [];


    // populate array of indexes
    for (i = 0; i < count; i++) {
        shuffled_array.push(i);
    }

    // shuffle indexes
    for (i = 0; i < count; i++) {
        index1 = (Math.random() * count) | 0;
        index2 = (Math.random() * count) | 0;

        temp_val = shuffled_array[index1];
        shuffled_array[index1] = shuffled_array[index2];
        shuffled_array[index2] = temp_val;
    }

    // apply random order to elements
    $elements.detach();
    for (i = 0; i < count; i++) {
        $parent.append( $elements.eq(shuffled_array[i]) );
    }
}