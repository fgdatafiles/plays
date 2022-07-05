
if(  document.addEventListener  ) {
    $(document).ready(function () {

        $('.answer').unbind();
        /*$('.answer').click(function(e){
            $(this).addClass('disabled');
            var value = $(this).attr('data-track');
            $('.page.active').addClass('disabled');
            heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['width'+app.ms]+'px');
            heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter.src;
            heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['left'+app.ms]+'px');
            heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['top'+app.ms]+'px');
            heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['width'+app.ms]+'px');
            heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRightAfter.src;

            heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['left'+app.ms]+'px');
            heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['top'+app.ms]+'px');

            TweenMax.from(heroL,1,{opacity:0});
            TweenMax.from(heroR,1,{opacity:0});
            wyniki[value]++;
            przelacz();
        })*/
})

}

function clickAnswer(t){
    console.log('nadapisane click');

    var value = $(t).attr('data-track');
    var value2 = $('#question-image').attr('data-track')
    $(t).addClass('disabled');



    var link = value2.replace(/ /g,'_');

    $('#question-image')[0].src='img/good/'+app.quiz.files[value2][0]   +'.jpg';
    if(value!=value2){
        $(t).addClass('wrong');
        playSounds('incorrect');
        heroL.addClass('wrong');
        heroR.addClass('wrong');
        /*
        heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfterWrong['width'+app.ms]+'px');
        heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeftAfterWrong.src;
        heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfterWrong['left'+app.ms]+'px');
        heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfterWrong['top'+app.ms]+'px');
        heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRightAfterWrong['width'+app.ms]+'px');
        heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRightAfterWrong.src;

        heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRightAfterWrong['left'+app.ms]+'px');
        heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRightAfterWrong['top'+app.ms]+'px');
*/
    }else{
        $(t).addClass('good');
        playSounds('correct');
        heroL.addClass('correct');
        heroR.addClass('correct');
        wyniki[0]++;
        /*
        heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['width'+app.ms]+'px');
        heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter.src;
        heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['left'+app.ms]+'px');
        heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeftAfter['top'+app.ms]+'px');
        heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['width'+app.ms]+'px');
        heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRightAfter.src;

        heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['left'+app.ms]+'px');
        heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRightAfter['top'+app.ms]+'px');

*/
    }



    $('.page.active').addClass('disabled');
    
    //TweenMax.fromTo(heroL,1,{opacity:0},{opacity:1});
    //TweenMax.fromTo(heroR,1,{opacity:0},{opacity:1});


    przelacz();
}

function addSummaryHeroImages(www){

    heroL.addClass('summary'+www)
    heroR.addClass('summary'+www)

  
    if(wyniki[0]==undefined){
        wyniki[0]=0;
    }

    $('#summary-results').css('opacity',0);


    $('#summary-results').html(app.data.results_text1[lang]+' '+wyniki[0]+'/'+app.data.quizlength+' '+app.data.results_text2[lang]);
    TweenLite.to($('#summary-results'),1,{delay:1,opacity:1})
  //  $('.question>.question-inner>p').css('font-size',paczka.question['fontSize'+app.ms]+'px');

}
function selectWinner(){
    console.log(wyniki[0]+'wynik')
    clearPage();
    if(wyniki[0]>9){
        showSummary(0);
    }else if(wyniki[0]>4){
        showSummary(1)
    }else{
        showSummary(2)
    }


}