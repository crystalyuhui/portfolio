$(window).load(function() {
    $('body').imagesLoaded(function() {
        setTimeout(function() {
            $("#preloader").addClass("loaded");
        }, 0.00001);
    });
});
// window load end 
$(document).ready(function() {
    function ajaxLoad() {
        PortfolioGrids();
        page_animation();
        full_menu();
        typed();
        scrollmove();
        cform();
        HoverVideo();
        carousel_slider();
        lightbox();
        hovertrid();
        slider();
    }
    ajaxLoad();
    //PORTFOLIO GRIDS
    function PortfolioGrids() {  
    }
    // MAGNIFIC POPUP    
    function lightbox() {
        $('.lightbox').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
    }
    // OWL CAROUSEL JS  
    function carousel_slider() {
    }
    //PAGE ANIMATION
    function page_animation() {
    }
    // FULL MENU
    function full_menu() {    
    }
    function HoverVideo() {
        $(".portfolio-item.video").on({
            mouseenter: function() {
                //stuff to do on mouse enter
                $('video', this).get(0).play();
            },
        });
    }
    // PORTFOLIO HOVER EFFECT
    function scrollmove() {
    }
    //CONTACT FORM
    function cform() {
        $("form .form-group input, form .form-group textarea").focus(function() {
            $(this).parents('.form-group').addClass('in');
        });
    }
    // HOME TYPED JS
    function typed() {
        if ($('.element').length) {
            $('.element').each(function() {
                $(this).typed({
                    strings: [$(this).data('text1'), $(this).data('text2')],
                    loop: $(this).data('loop') ? $(this).data('loop') : false,
                    backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
                    typeSpeed: 10,
                });
            });
        }
    }
});