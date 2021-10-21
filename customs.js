$( document ).ready(function() {
    
    // document.getElementById("video_player").setAttribute('autoplay', true);
    var curvid = 0;
    var videoElements = $('.video-container > *');

    $(videoElements[curvid]).trigger('play');

    const updateVideoVisibility = (vIndex) => { 
        curvid = vIndex;
        console.log(vIndex);
        $(videoElements).each((i, el) => {
            $(el).get(0).pause();
            $(el).get(0).currentTime = 0;

            if(i == curvid) {
                $(el).attr("poster","img/thumbnail.png");
                $(el).show();
                el.play();
            }
            else {
                $(el).hide();
            }
            
        });
    }

    updateVideoVisibility(0);

    var curtur = 0;
    var tutorialElements = $('.tutorial-container ul > *');

    const updateTutorialVisibility = (tIndex) => {
        curtur = tIndex;
        console.log(tIndex);
        $(tutorialElements).each((j, fm) => {
            if(j == curtur) {
                $(fm).fadeIn(1000);
            }
            else {
                $(fm).hide();
            }
        });
    }

    updateTutorialVisibility(0);


    /****** BACK **********/
    $("#back-btn").on('click', () => {
        $(videoElements[curvid]).off('ended');
        $('#play-btn').attr("src","img/play.png");

        updateVideoVisibility(curvid - 1);
        updateTutorialVisibility(curtur - 1);

        if (curvid==0) {
            $('#back-btn').prop('disabled', true);
            $('#back-btn').css({pointerEvents: "none"});
            $('#back-btn').attr("src","img/previous-line-disabled.png");
        }
        $("#next-btn").prop('disabled', false);
        $('#next-btn').css({pointerEvents: "auto"});
        $('#next-btn').attr("src","img/next-text.png");
    });


    /****** PLAY **********/
    $("#play-btn").on('click', () => {
        if($('#play-btn').attr('src') === 'img/pause.png') {
            $('#play-btn').attr("src","img/play.png");
            $(videoElements[curvid]).trigger('pause');
            console.log("testPause");
        } else {
            $("#play-btn").attr("src","img/pause.png");
            $(videoElements[curvid]).trigger('play');
            $(videoElements[curvid]).on('ended', () => {
                $("#play-btn").attr("src","img/replay.png");
                console.log("testPLay");
            })
        }
        
        
    })

    /****** NEXT **********/
    $("#next-btn").on('click', () => {
        $(videoElements[curvid]).off('ended');
        $('#play-btn').attr("src","img/play.png");

        updateVideoVisibility(curvid + 1);
        updateTutorialVisibility(curtur + 1);

        if(videoElements.length - 1 == curvid) {
            $('#next-btn').prop('disabled', true);
            $('#next-btn').css({pointerEvents: "none"});
            $('#next-btn').attr("src","img/next-text-diabled.png");
        } else {
            $('#next-btn').prop('disabled', false);
            $('#next-btn').css({pointerEvents: "auto"});
            $('#next-btn').attr("src","img/next-text.png");
        }

        $("#back-btn").prop('disabled', false);
        $('#back-btn').css({pointerEvents: "auto"});
        $('#back-btn').attr("src","img/previous-line.png");
    });
});



