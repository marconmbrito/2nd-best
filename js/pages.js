$('.about-text h1 span').animate({
    'top' : '-1em'
  }, 1400);

$('.about-text p').animate({
    'opacity' : '1'
  }, 1400);

$('.about-text h1').animate({
    'opacity' : '1'
  }, 1400);

$('.about-intro img').animate({
    'opacity' : 1,
    'right' : '0'
  }, 1000);


  //faq accordion
  $('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
