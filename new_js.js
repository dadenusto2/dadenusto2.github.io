$(document).ready(function() {
    $('.multiple-items').slick({
        dots:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
    console.log( "ready!" );
    $(".multiple-items").on('afterChange', function(event, slick, currentSlide){
      $("#message").text(currentSlide + 1);
   });
  }); 
