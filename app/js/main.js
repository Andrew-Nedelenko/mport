'use strict';
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 566000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  });


const alt_nav = $('.alt_nav');
let mv = 420;
$(window).on('scroll', function () {
    if($(window).scrollTop() < mv)
    {
        alt_nav.css('top', '-100px');
    }else{
        alt_nav.css('top', '0');
    }
});


const search_pg = $('.search_page');
const search_icon = $('.fa-search');
let bool = true;
search_icon.click(function () {
    if(bool)
    {
        mv = 0;
        search_icon.removeClass('fa-search');
        search_icon.addClass('fa-times');
        search_pg.css('top', '0');
        bool = false;
        alt_nav.css('top', '0');
    }else{
        mv = 420;
        search_icon.removeClass('fa-times');
        search_icon.addClass('fa-search');
        alt_nav.css('top', '-100px');
        search_pg.css('top', '-100vh');
        bool = true;
        
    }
});