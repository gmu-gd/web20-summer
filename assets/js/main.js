$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    nav();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function clickableDiv() {
  $('.tutorial').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function nav() {
  $('.mobile-nav').click(function(){
    $('#menu').removeClass('mobile-hide');
    $('body').addClass('scroll-lock');
    $('#menu').click(function(){
      $('#menu').addClass('mobile-hide');
      $('body').removeClass('scroll-lock');
    });
  });
}
