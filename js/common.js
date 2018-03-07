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


});

