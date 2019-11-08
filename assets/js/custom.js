(function ($) {
    $(document).ready(function () {
        //mobile menu custom js
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });

        //testimonials slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayHoverPause: false,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
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


    });
})(jQuery);