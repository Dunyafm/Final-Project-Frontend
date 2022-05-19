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


// BRANDS LOGO JS
$(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
      mouseenter: function() {
        rotating = false;
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#ourclients');
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clientlogo li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clientlogo li:last').after($first);
        });
      }
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


