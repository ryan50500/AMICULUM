const modalButtons = document.querySelectorAll('.modal')

    $(document).ready(function(){

      $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerPadding: '10px'
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerPadding: '10px'
            }
          }
        ]
      });

      // opan modal button
      modalButtons.forEach(button => 
        button.addEventListener("click", function() {
         $(this).siblings('.expanded').css('display', 'block');
          
       }));

      });       