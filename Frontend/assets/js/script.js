(function ($) {

  $(document).ready(function () {
    // Pause hero carousel
    $('.hero-carousel').carousel('pause');
  });

})(jQuery);


$(document).ready(function () {

  $("#owl-demo").owlCarousel({

    autoPlay: 2000, //Set AutoPlay to 2 seconds

    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

  });

});

// TESTIMONIAL

var galleryThumbs = new Swiper('.gallery-thumbs', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '2',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 6,
    slideShadows: false,
  },

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

