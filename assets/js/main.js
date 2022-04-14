( function($){
    'use strict';

    //document ready
    jQuery(document).ready(function(){

       //hero slider
       $('.leaven__hero_area').slick({
         arrows:false,
         dots: true
       });

        //carousel most viewed products
        $('.leaven__most_view_carousel').slick({
            centerMode: true,
            centerPadding: '60px',
            arrows: true,
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
                          



      });

}(jQuery) );






