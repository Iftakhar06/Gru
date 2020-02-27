(function ($) {
"use strict";

// $('.inner-active').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// $('.brand-active').owlCarousel({
//     loop:true,

//     nav:true,
//     navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// $('.slider-active').owlCarousel({
//     loop:true,
//     margin: 0,
//     nav:true,
//     navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })




/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});


//wow active code
    new WOW().init();
// portfolio active code
$('.portfolio-item').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
    // use element for option
    columnWidth: '.grid-item'
    }
    })


//   $('.portfolio-item').isotope({
//       itemSelector: '.item',
//       layoutMode: 'fitRows'
//   });

  $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');

    var selector = $(this).attr('data-filter');
      $('.portfolio-item').isotope({
      filter: selector
    });
    return false;
  });
    

//Barfiller active code
    $('#bar1').barfiller({barColor: "#ff4a57",duration: 3000})
    $('#bar2').barfiller({barColor: "#ff4a57",duration: 3000})
    $('#bar3').barfiller({barColor: "#ff4a57",duration: 3000})
    $('#bar4').barfiller({barColor: "#ff4a57",duration: 3000})
    $('#bar5').barfiller({barColor: "#ff4a57",duration: 3000})

// counter active code
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



// one page nav active code 2
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});




// // Scroll To Top
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener("click", function() {
      // window.scrollTo(0, 0);
  // method 1
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

//   // method 2
//   $('html, body').animate({ scrollTop: 0 }, "slow"); 
  
});

//sticky active code 1

// var wind =$(window);
// var sticky =$('#sticky-header');
// wind.on('scroll', function (){
//     var scroll = wind.scrollTop();
//     if (scroll < 100) {
//         sticky.removeClass('sticky-menu');
//     } else {
//         $('#sticky-header').addClass('sticky-menu');
//     }
// }); 


// ===== Scroll sticky menu to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#sticky-header').addClass('sticky-menu');    // Fade in the arrow
    } else {
        $('#sticky-header').removeClass('sticky-menu');   // Else fade out the arrow
    }
});

})(jQuery);