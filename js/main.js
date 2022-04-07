//Mobile Menu activation
$(document).ready(function(){
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu'
    });
})

//slider activation
$(document).ready(function(){
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        arrows:false
      });
})
//testomonial slider
$(document).ready(function(){
    $('.testomonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        dots: true,
        autoplay:true,
        slidesToScroll: 1
     });
})


//brand section slider

$(document).ready(function(){
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        arrows:false,
        dots: false,
        autoplay:true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
     });
})

//counter activation
$(document).ready(function(){
$('.counter').counterUp({
    delay: 10,
    time: 2500
});
})