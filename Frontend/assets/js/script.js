(function ($) {

  $(document).ready(function () {
    // Pause hero carousel
    $('.hero-carousel').carousel('pause');
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

})(jQuery);

// CATERGORIES
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//// Ən çox satilanlar
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
      var node = item;

      while (node) {
          var attrValue = node.getAttribute(attr);
          if (attrValue) {
              return attrValue;
          }

          node = node.parentElement;
      }

      return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
      var node = item;

      while (node) {
          if (node.classList.contains(className)) {
              return node;
          }

          node = node.parentElement;
      }

      return null;
  };

  window.myLib.toggleScroll = function () {
      myLib.body.classList.toggle('no-scroll');
  };
})();
/* myLib end */







//filter products
// var $mediaElements = $(".cd-item");
// $(".filter_link").click(function(e) {
//   e.preventDefault();
//   var filterVal = $(this).data("filter");
//   if (filterVal === "all") {
//     $mediaElements.slideDown("slow");
//   } else {
//     $mediaElements
//       .hide("slow")
//       .filter("." + filterVal)
//       .slideDown("slow");
//   }
// });
//filter products

// $(document).ready(function () {

//   $("#owl-demo").owlCarousel({

//     autoPlay: 2000, //Set AutoPlay to 2 seconds

//     items: 4,
//     itemsDesktop: [1199, 3],
//     itemsDesktopSmall: [979, 3]

//   });

// });

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


// RESPONSIVE CARD
$(function() {
  $('.material-card > .mc-btn-action').click(function () {
      var card = $(this).parent('.material-card');
      var icon = $(this).children('i');
      icon.addClass('fa-spin-fast');

      if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(function() {
              icon
                  .removeClass('fa-arrow-left')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-bars');

          }, 800);
      } else {
          card.addClass('mc-active');

          window.setTimeout(function() {
              icon
                  .removeClass('fa-bars')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-arrow-left');

          }, 800);
      }
  });
});


