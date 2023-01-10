$(document).ready(function(){
    //napojeni wow.js
    new WOW().init();
    
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close')


    

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });


    // slider slick
    $('.portfolio__slider').slick({
        slidesToShow : 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                }
              }     
          ]
    });
});