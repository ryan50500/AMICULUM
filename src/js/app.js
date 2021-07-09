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

  // On before slide change
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    // 'nextSlide' indicates on which slide you want to make a change.. 
    // ie. nextSlide = 2 is third slide because we start from 0

    // alternate slides
    if (nextSlide === 1 || 3 || 5) {
        console.log('should be blue');
        // jquery doesn't allow stying pseudo elements,
        // so we add class of 'blue'
        $('button.slick-next').removeClass('green');
        $('button.slick-prev').removeClass('green');
        $('button.slick-next').addClass('blue');
        $('button.slick-prev').addClass('blue');
    } 
    else {
      $('button.slick-next').removeClass('blue');
      $('button.slick-prev').removeClass('blue');
      $('button.slick-next').addClass('green');
      $('button.slick-prev').addClass('green');
    }
    // console.log(event);
    console.log(nextSlide);
    // console.log(slick);
    console.log(currentSlide);
});


      // open modal (works in Internet exploer)
      for (i=0; i < modalButtons.length; i++) {
        modalButtons[i].addEventListener("click", function() {
          console.log('this');
         this.previousElementSibling.style.display = "block";
        //  $('.overlay').addClass('gray');
        //  stops page scrolling when modal open
        //  $('body').css('overflow', 'hidden');
       });
      };

        // close modal button
        closeModal.forEach(button => 
        button.addEventListener("click", function(e) {
          console.log('this');
         $(this).closest('.open_modal').fadeOut(300);
         e.stopPropagation();
         $('.overlay').removeClass('gray');
         //  enables page scrolling when modal closes
         $('body').css('overflow', 'auto');
       }));

      });  


      // function isTouched() {
      //   document.getElementById("main_slide").classList.add('fading')
      // }

      // function removeTouch() {
      //   document.getElementById("main_slide").classList.remove('fading')
      // }
      


      $('html').click(function() {
        document.getElementById("main_slide").classList.remove('fading')
        });
       
        $('#main_slide').click(function(event){
            event.stopPropagation();
            document.getElementById("main_slide").classList.add('fading')
        });