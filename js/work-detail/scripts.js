(function($) {
	'use strict';

	/*===================================*
	 09. VIDEO JS
	*===================================*/
	$('.video').magnificPopup({
		type: 'iframe'
	});

	/*===================================*
	13. ANIMATION JS
	*===================================*/
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay,
					opacity: 0
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("opacity", "1");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '90%'
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
	/*===================================*
	15. COLOR SWITCHHER JS
	*===================================*/
	google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    zoom: 12,
                    center: new google.maps.LatLng(40.7020, -73.9220), // New York
                   styles:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]};
                var mapElement = document.getElementById('map');
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.7020, -73.9220),
                    map: map,
					icon: "assets/images/marker.png",
                    title: 'Snazzy!'
                });
            }	
			
	/*Demo js*/
	$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			 return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
			 return false;
			}      
		 }
		 
		$("html").on("contextmenu",function(){
			return false;
		});
	});
	 			
})(jQuery);

$(document).ready( function() {
	$(window).on("load", function() {
		$('body').prepend('<a href="https://www.designnominees.com/themes/cryptocash-ico-cryptocurrency-ico-landing-page-html-template" title="Design Nominees" style="width:70px;height:130px;position:fixed;top:100px;right:0px;z-index:99999;text-indent:-9999px;background: url(http://www.designnominees.com/ribbons/designnominees-ribbon-blue-right.png) no-repeat;" target="_blank">Design Nominees</a> <a href="https://www.bestcss.in/user/detail/CryptocashICOCryptocurrencyLandingPageHTML5Template-9139" style="width:106px;height:92px;position:fixed;top:0px;right:0px;z-index:99999;text-indent:-9999px;background: url(http://www.bestcss.in/ribbons/black-right.png) no-repeat;" target="_blank">Best CSS Web Gallery</a>');
	});
});
