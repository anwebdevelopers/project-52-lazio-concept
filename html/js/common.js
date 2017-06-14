$(function() {

    'use strict';

    var $window = $(window),
    $html = $('html');

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

    $('.header__slider, .gallery__slider').addClass('owl-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 8000,
        autoplay: true,
        smartSpeed: 1200,
    });

    /*******************************************************/
    //Category Toggle
    /*******************************************************/
    var $categoryFront = $('.category__front'),
        $categoryRear = $('.category__rear');
    $categoryRear.hide();
    $categoryFront.on('click', '.category__front-button', function() {
        $(this).closest($categoryFront).slideUp(300).siblings($categoryRear).slideDown(300);
    });
    $categoryRear.on('click', '.category__rear-button', function() {
        $(this).closest($categoryRear).slideUp(300).siblings($categoryFront).slideDown(300);
    });


    /*******************************************************/
    //Accordion Product
    /*******************************************************/
    var $productListItem = $('.product__list-item'),
        $productListText = $('.product__list-text');

    $productListItem.not(':first').addClass('hide');
    $productListText.not(':first').hide();

    $productListItem.on('click', function() {
        $(this).toggleClass('hide').find($productListText).slideToggle(300);
    });

    /*******************************************************/
    //Parallax Effect
    /*******************************************************/
    var scrollax = new Scrollax().init();

    /*******************************************************/
    //Видеопопап
    /*******************************************************/
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*******************************************************/
    //Tabs Material
    /*******************************************************/
    var $materialTabsButtons = $('.material__tabs-buttons'),
        $materialTabsItem = $('.material__tabs-item');
    $materialTabsButtons.find('button:first').addClass('active');
    $materialTabsItem.not(':first').hide();
    $materialTabsButtons.on('click', 'button:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.material__tabs').find($materialTabsItem).slideUp(300).eq($(this).index()).slideDown(300);
    });

    /*******************************************************/
    //Callback Mask
    /*******************************************************/
    $('#callback').mask('+375 (99) 999-99-99',{placeholder:'+375 (__) ___-__-__'});

    /*******************************************************/
    //Callback Mask
    /*******************************************************/
    $('.vantages__item-title').equalHeight();

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

    var $header = $('.header');
    function fullscreen() {
        var w = $window.width();
        if(($html.hasClass('ie') || $html.hasClass('gecko')) && w > 640 && !$header.hasClass('header_small')) {
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
