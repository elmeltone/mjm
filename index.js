$(function() {
  //Animates masthead and mobile menu on .line-wrapper click
    $('.line-wrapper').on('click', function() {
        $('.options-wrapper').toggleClass('icon-unclicked icon-clicked');
    });
  //Changes hamburger icon background color on hover
    $('.line-wrapper').on('mouseenter', function() {
        $('.line').toggleClass('dark light');
    });
    $('.line-wrapper').on('mouseleave', function() {
        $('.line').toggleClass('dark light');
    });
});
