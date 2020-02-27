(function ($) {
"use strict";
/*
* File: jquery.barfiller.js
* Version: 1.0.1
* Description: A plugin that fills bars with a percentage you set.
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
    nav:true,
	dots:false;
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// one page nav active code 2
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});


//sticky active code 1
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
        sticky.removeClass('sticky-menu');
    } else {
        $('#sticky-header').addClass('sticky-menu');
    }
}); 

})(jQuery);	