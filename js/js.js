$(document).ready(function(){
   
// -------- Farid Grid Portfolio  ---------------- //

     var currentItemIndex=0;
     $('.portfolio-menu ul li a').click(function(){
         
            var itemIndex = $(this).parent().index();
            var portItem = $(".portfolio-window .portfolio-item");
            var className = "view"+itemIndex;

            $('.portfolio-menu ul li a').removeClass('active');
            $(this).addClass('active');

            if((itemIndex != currentItemIndex)){

                        portItem.hide(30);
                        $(".portfolio-window ."+ className).show();
                        return false;       
            }
    });




    // -------- menu scroll on click  ---------------- //


    $("nav").find("a").click(function(e) {
        e.preventDefault();
        $("nav").find("a").removeClass('active-link');
        $(this).addClass('active-link');
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });



    // -------- White menu on scroll  ---------------- //


    $(window).scroll(function(){

        if($(this).scrollTop() > 0){ 
                $('header').addClass('white-menu');  
                $('.phone-menu-opener').addClass('w-phone-menu');  
                $('.back-toUp').fadeIn();

            }
        else{ 
                $('header').removeClass('white-menu'); 
                $('.phone-menu-opener').removeClass('w-phone-menu');  
                $('.back-toUp').fadeOut();
            }
        
    });

    $('.back-toUp').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });


    // -------- Phone menu  ---------------- //

    $('.phone-menu-opener').click(function(){

        $('.phone-menu').slideToggle();
    });

    $(window).scroll(function(){

        if($(this).scrollTop() > 0){
            $('.phone-menu').slideUp();
        }
    })



       // slick slider //

    $('.autoplay-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        easing: 'linear',
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1025,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4
          }
      }, {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }, {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
      })

 
      
      $('.autoplay-slider .slick-prev').html("<i class='fas fa-chevron-left'></i>");
      $('.autoplay-slider .slick-next').html("<i class='fas fa-chevron-right'></i>");
      $('.slick-next, .slick-prev').css("outline","none");
      

      $('.partner-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 50,
      arrows: false,
      draggable: false,
      responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            speed: 500,
            autoplaySpeed: 1000
        }
    }]
    });
 
      
});