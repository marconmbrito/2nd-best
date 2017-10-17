// TOGGLE MENU
var $sideNav = $('.sideNav');
    $window = $(window),
    $nav = $('.main-nav')
    $h1 = $('.hero-h1');
    $headerHeight = $('.header').height();

function openNav() { //Open Nav
  $sideNav.css({
    'height' : '100%'
  });
}
function closeNav() { //Close nav
  $sideNav.css({
    'height' : '0'
  });
}

$(".menu-icon").click(function(){
  $(this).toggleClass("rotate"); //add rotate on click
  if ( $(".menu-icon").hasClass("rotate")) {
    openNav();
  } else {
    closeNav();
  }
});

//Navbar fixed on scroll
$window.scroll(function() {
  if ($window.scrollTop() >= ($headerHeight - 200)) {
    $nav.addClass('fixed');
     // fade in grid on scroll
    $('.grid').children().delay(1200).each(function(i){
      setTimeout(function(){
        $('.grid-item').eq(i).addClass('is-visible');
      }, 200 * i);
    }); //end of fade-in

  } else if ($window.scrollTop() <= $headerHeight)  {
    $nav.removeClass('fixed');
  }
});

//Bedges slideshow
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

//smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});

/*
load footer only once all the other elements on the page are ready, including pictures. Otherwise the footer appears on load, as it is fixed to the bottom.
*/
$('footer').hide();
$window.on( "load", function() {
  $('footer').show();
})



  //CHANGE ELEMENT ON SCREEN WIDTH
// $(window).resize(function(){
//     if ($(window).width() <= 500){
//         $(".hero-h1").css('display', 'none');
//     }
// });
