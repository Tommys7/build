$(document).ready(function(){
    //napojeni wow.js
    new WOW().init();
    
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close')


    



    //validace formulare

    $('#brief-form').validate({
      rules: {
        username: "required",
        telephone: "required"
      },
      messages: {
        username: "Vyplňte prosím vaše jméno",
        telephone: "Vyplňte prosím vaše tel. číslo"
      }
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