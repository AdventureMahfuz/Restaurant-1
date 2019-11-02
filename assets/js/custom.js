(function($) {
$(document).ready(function(){
    //testimonials slider
    $('.testimonials').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        autoplayHoverPause: false,
        responsiveClass:true,
        nav:true,
        dots:false,
        mouseDrag:false,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    // magnific popup activation
    $('.overly-icon').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    });



//////////////////////////////////////////////////////////////////////////////////////////////////////
    /*material activation code*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
    /*mobile menubar*/
    $('.sidenav').sidenav();

    /*navigation menu dropdown triger*/
    $(".dropdown-trigger").dropdown();

    /*hero slider*/
    $('.slider').slider({
        height: 500,
    });

    /*reservation date picker*/
    $('.datepicker').datepicker();

    /*reservation time picker*/
    $('.timepicker').timepicker();

    /*gallary image popup*/
    $('.materialboxed').materialbox();

    //back to top show when scroll
    /*$(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });*/

});
})( jQuery );