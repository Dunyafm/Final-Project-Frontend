var start = 0;
var nb = 4;
var end = start + nb;
var length = $('.img-list img').length;
var list = $('.img-list img');

list.hide().filter(':lt('+(end)+')').show();


$('.prev, .next').click(function(e){
  e.preventDefault();

  if (($(this).hasClass('prev') && start > 0) || ($(this).hasClass('next') && end < length))
  {

    if( $(this).hasClass('prev') ){
      start -= nb;
    } else {
      start += nb;
    }

    end = start + nb;

    if((start/nb) < 1)
    {
      $('a.prev').html('Page 1');
    }
    else
    {
      $('a.prev').html('Page '+(start/nb));
    }


    if(end+nb > length) {
      $('a.next').html('Page '+((end/nb)));
    } else {
      $('a.next').html('Page '+((end/nb)+1));
    }
  }

  if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
  else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();
});