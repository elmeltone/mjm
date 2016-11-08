$(function() {
  //Animates masthead and mobile menu on .line-wrapper click
    $('.line-wrapper').on('click', function() {
        $('.options-wrapper').toggleClass('icon-unclicked icon-clicked');
    });
});
