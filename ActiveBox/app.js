$(function() {

    // let - объявить переменную, header - название переменной, селектор jQuery $(" тут вписываем с чем будем работать ");
    /* Фиксированная шапка*/
    let header = $("#header");
    let intro = $("#intro");
    // intro.height узнаём высоту болока без padding
    // intro.innerheight узнаём выстоту блока с padding
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll resize", function(){

        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(){
        if( scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    // Плавный скролл
    /*при клике на data-scroll будет вызываться это событие*/
    $("[data-scroll]").on("click", function(event){
        /* отменяет стандартное поведение конпки, обязательно в событие указать function(event) */
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset= $(elementId).offset().top;

        nav.removeClass("show");
        console.log(elementOffset)

        $("html, body").animate({
            scrollTop: elementOffset - 90
        }, 700);
    });


    /*Nav Toggle*/
    let nav = $("#nav");
    $("#navToggle").on("click", function(even){
        even.preventDefault();

        nav.toggleClass("show");
    });


    /* Slider  https://kenwheeler.github.io/slick/*/
});
