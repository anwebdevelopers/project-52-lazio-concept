$(function() {

    'use strict';

    /*******************************************************/
    //Header Nav
    /*******************************************************/

    var $headerButton = $('.header__button'),
        $headerNav = $('.header__nav');
    $headerButton.click(function(e) {
        e.stopPropagation();
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $headerNav.css({
                'transform': 'translateX(-100%)'
            });
        } else {
            $this.removeClass('active');
            $headerNav.css({
                'transform': 'translateX(0)'
            });
        }
    });

    //Выключение при клике по странице
    $(document).on('click', function(e) {
        e.stopPropagation();
        if (!$(e.target).closest($headerNav).length) {
            $headerButton.removeClass('active');
            $headerNav.css({
                'transform': 'translateX(0)'
            });
        }
    });

    /*******************************************************/
    //Header Slider
    /*******************************************************/

    $('.header__slider').addClass('owl-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        autoplayTimeout: 8000,
        autoplay: true,
        smartSpeed: 1200,
    });

    /*******************************************************/
    //Chrome Smooth Scroll
    /*******************************************************/
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    /*******************************************************/
    //Fullscreen Header for IE
    /*******************************************************/

    var $header = $('.header'),
        $window = $(window);
    function fullscreen() {
        var w = $window.width();
        if(($('html').hasClass('ie') || $('html').hasClass('gecko')) && w > 640) {
            $header.removeAttr('style');
            var windowHeight = $window.height(),
                headerHeight = $header.height();
            if (windowHeight >= headerHeight) {
                $header.css({
                    'height' : windowHeight + 'px'
                });
            }
        } else {
            $header.removeAttr('style');
        }
    }
    fullscreen();
    $window.resize(function() {
        fullscreen();
    });
});
