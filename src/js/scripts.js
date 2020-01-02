'use strict';

/* BEGIN mobile device definition  */
/*var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};*/
/* END */


$(document).ready(function () {
    /* BEGIN Initial stick header-panel  */
    $('.header-panel').stickUp();
    /* END */



    /* BEGIN play video on desktop  */
    $('.header-video__play').click(function () {

        var $video = $('.header-video__frame'),
            src = $video.attr('data-src');

        $video.attr('src', src + '&autoplay=1');

        $('.header-video').addClass('header-video__open');
    });
    /* END */



    /* BEGIN Actions on opening menus on mobile devices  */

    $('.menu-toggle, .menu-close, .menu-link').click(function () {
        $('html').toggleClass('menu-opened');
    });
    /* END */



    /* BEGIN Script scroll to top  */
    var scrollToTop = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    scrollToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    /* END */



    /* BEGIN Smooth scrolling to anchors */
    $('body').on('click', '[href*="#"]', function (e) {
        var fixed_offset = 0;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });
    /* END */
});
