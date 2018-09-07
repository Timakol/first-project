jQuery(function ($) {
    $('.works-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});

// jQuery(function($){
//     $('.suggest-slider').owlCarousel({
//         items: 1,
//         nav: true,
//         navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
//     });
//     $('.burger-menu-btn').click(function(e){
//         e.stopPropagation();
//         $('.main-nav').toggleClass('main-nav--visible');
//         $('body').toggleClass('body-with-nav');
//     });
//     $('body').click(function(){
//         if($(this).hasClass('body-with-nav')){
//             $(this).removeClass('body-with-nav');
//             $('.main-nav').toggleClass('main-nav--visible');
//         }
//     });
//     $('.main-nav').click(function(e){
//         e.stopPropagation();
//     });
//     $('.top-header__call-btn, .grey-btn, .orange-btn').magnificPopup({
//         type: 'inline'
//     });
//
//     var mediaNode = $('.video-bg__media');
//     var mediaNodeBg = mediaNode.attr('data-bg');
//     var mediaNodeVideo = mediaNode.find('iframe');
//         setTimeout(function () {
//         mediaNode.css({
//             opacity: 1
//         });
//     }, 1000);
//
//     mediaNode.css({
//         'background-image': 'url(' + mediaNodeBg + ')'
//     });
//
//     if($( window ).width() > 1239 && mediaNodeVideo ) {
//         setTimeout(function () {
//             mediaNodeVideo.css({
//                 opacity: 1
//             });
//         }, 3000);
//     }
//
//     $( window ).scroll(function() {
//         if($( window ).scrollTop() == 0) $('.header').css('display','');
//         if ($( window ).scrollTop() > 650){
//
//             $('.header').addClass('header--fixed').slideDown();
//         } else {
//
//             $('.header').removeClass('header--fixed');
//         }
//     });
// });