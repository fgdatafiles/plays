
function fillPage(){
    clearPage();

    heroL.removeClass('wrong correct');
    heroR.removeClass('wrong correct');
    if(app.nCurrentQuestion<app.data.quizlength){

        var bgdActive = $('.backgrounds .background.active');
        var bgdNoneActive = $('.backgrounds .background').not('.active');
        bgdActive.removeClass('active');
        bgdNoneActive.addClass('active').css('background-image', "url('img/bgd"+nCurrentBackground+".jpg')");
        nCurrentBackground++;
        if(nCurrentBackground>12)nCurrentBackground=1;
        $('.answerContainer').empty();
        $('.page.active').removeClass('disabled');


        counterC[QT-1].src="img/c"+app.nCurrentQuestion+".png";

        var paczka = app.selectedQuestions[app.nCurrentQuestion];
        console.log(app.selectedQuestions);
        console.log(paczka);

        var numer =app.quiz.files[paczka[0]];
        console.log(numer)
        //console.log(app.quiz.files[paczka[0]][1]);

        $('#question-image')[0].src='img/bad/'+app.quiz.files[paczka[0]][0]+'.jpg';
        $('#question-image').attr('data-track',app.quiz.files[paczka[0]][1]);


        console.log(paczka);
        for(var i=0;i<3;i++) {
            console.log(app.quiz[lang][paczka[i]]);
            console.log(app.quiz.files[paczka[i]][1])
            var dataToAppend;
                dataToAppend= '<div class="button answer" data-track="'+app.quiz.files[paczka[i]][1]+'" ><div class="button-inner "><p>'+app.quiz[lang][paczka[i]]+'</p></div></div>'
            $('.answerContainer').append(dataToAppend);
        }

        shuffleElements($('.answerContainer .answer'));
        $('.gfx-container').show();
        $('.answer').mouseover(function(){


            var zz = $(this).index()%2;

            playSounds('r'+(zz+1));
        });

        /*
        heroL.css('width',app.selectedQuestions[app.nCurrentQuestion].imageLeft['width'+app.ms]+'px');
        heroL[0].src=app.selectedQuestions[app.nCurrentQuestion].imageLeft.src;
        heroL.css('left',app.selectedQuestions[app.nCurrentQuestion].imageLeft['left'+app.ms]+'px');
        heroL.css('top',app.selectedQuestions[app.nCurrentQuestion].imageLeft['top'+app.ms]+'px');


        heroR.css('width',app.selectedQuestions[app.nCurrentQuestion].imageRight['width'+app.ms]+'px');
        heroR[0].src=app.selectedQuestions[app.nCurrentQuestion].imageRight.src;

        heroR.css('left',app.selectedQuestions[app.nCurrentQuestion].imageRight['left'+app.ms]+'px');

        heroR.css('top',app.selectedQuestions[app.nCurrentQuestion].imageRight['top'+app.ms]+'px');
*/
        anim('type1In');


        $('.answer').click(function(e){

            clickAnswer(this);

        })

    }else{

        selectWinner();


    }


}