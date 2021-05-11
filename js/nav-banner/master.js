	/* ===== LOADER OVERLAY ===== */

	 jQuery(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {

		/* ===== jQuery Varibles ===== */

			mainSlider();
			ContentSlider();
			testimonialSlider();
			testimonialSliderTwo();
			clientSlider();
			blogGridSlider();
			teamSlider();
			parallaxEffect();
			parallaxBackground();

  /* ===== SLICK SLIDERS ===== */

	/* ~~~ Hero Half Slider ~~~ */
	function mainSlider(){
	$(".default-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Content Slider ~~~ */
	function ContentSlider(){
	$(".text-content-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
				fade: true,
 				cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Testimonials Slider ~~~ */
	function testimonialSlider(){
	$(".testimonial").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		centerPadding: '0',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Testimonial Slider 2 ~~~ */
	function testimonialSliderTwo(){
	$(".testimonial-style-2").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Client Slider ~~~ */
	function clientSlider() {
	$(".client-slider").slick({
		slidesToShow: 5,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Team Slider ~~~ */
	function teamSlider() {
	$(".team-slider").slick({
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 4000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

  /* ===== PARALLAX EFFECTS===== */
	function parallaxEffect() {
    	$('.parallax-effect').parallax();
	}

	function parallaxBackground() {
		$('.parallax-bg').parallaxBackground();
	}

	/* ~~~ Blog Grid Slider ~~~ */
	function blogGridSlider() {
    $(".blog-grid-slider").slick({
				dots: false,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0'
		});
	}

	/* ===== CBP PORTFOLIO ===== */

	 $(window).on('load', function(){

		 var wow = new WOW({
				offset: 100,
				mobile: false
			  }
			);
			wow.init();

		$('.btn-amazing')
	    .on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
	    })
	    .on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
	    	$(this).find('span').css({top:relY, left:relX})
	    });


		$('#portfolio-gallery').cubeportfolio({
			filters: '#portfolio-gallery-filter',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'frontRow',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'overlayBottomAlong',
			displayType: 'bottomToTop',
			displayTypeSpeed: 300,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
		});

		$('#js-grid-masonry-projects').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'foldLeft',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'fadeIn',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
		});

	});


	});
});
