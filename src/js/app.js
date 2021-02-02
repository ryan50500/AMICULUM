// open modal buttons
const modalButtons = document.querySelectorAll('.modal')

// close modal button
const closeModal = document.querySelectorAll('.close_modal')

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
          console.log('this');
         $(this).siblings('.open_modal').fadeIn(300);
         $('.overlay').addClass('gray');
       }));


        // close modal button
        closeModal.forEach(button => 
        button.addEventListener("click", function(e) {
          console.log('this');
         $(this).closest('.open_modal').fadeOut(300);
         e.stopPropagation();
         $('.overlay').removeClass('gray');
       }));

      });  