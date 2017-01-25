jQuery(function ($) {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        direction: 'vertical'
    });
});

jQuery(function ($) {
    var headSmallVision = $('.heading-generation.heading-generation-vision'),
        headSmallFlying = $('.heading-generation.heading-generation-flying'),
        headJourney = $('.journey-heading'),
        btnMore = $('.btn-dark-gray'),
        btnBlueBorder = $('.btn-light-blue-border'),
        btnJourney = $('.btn-journey'),
        hiddenTextVision = $('.hidden-text-vision'),
        hiddenTextFlying = $('.hidden-text-flying'),
        hiddenTextJourney = $('.hidden-text-journey');

    btnMore.on('click', function () {
       headSmallVision.toggleClass('heading-generation-small');
       hiddenTextVision.toggleClass('d-block');
       $(this).text(hiddenTextGeneration.is(':hidden') ? 'view more' : 'view less');
   });

    btnBlueBorder.on('click', function () {
       headSmallFlying.toggleClass('heading-generation-small');
       hiddenTextFlying.toggleClass('d-block');
       $(this).text(hiddenTextFlying.is(':hidden') ? 'view more' : 'view less');
   });

    btnJourney.on('click', function () {
       headJourney.toggleClass('journey-heading-small');
       hiddenTextJourney.toggleClass('d-block');
       $(this).text(hiddenTextJourney.is(':hidden') ? 'view more' : 'view less');
   });



});