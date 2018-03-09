$(function () {

    //Accordeon
    //==========================

    $('.schedule__accordeon .schedule__acc-head').on('click', f_acc);

    function f_acc(){
        $('.schedule__accordeon .schedule__acc-head').removeClass('opend');
        $('.schedule__accordeon .schedule__acc-body').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
        $(this).toggleClass("up");
    }

    /*Slick-slider
    ==========================*/

    $('.reviews__slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true
    });

    /* Гамбургер
    =========================*/

    $(".menu").on('click',function(){
        var elem = $(this);
        elem.find(".hambergerIcon").toggleClass("open");

        elem.toggleClass('menu_btn_active');
        if(elem.hasClass('menu_btn_active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(500);
        }
    });



});

