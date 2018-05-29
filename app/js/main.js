'use strict';
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
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

const hamb = $('.fa-bars');
const left_m = $('.left_menu');
const body = $('body');
const scOff = $('.shadow_cloak_off');
const plusBtn = $('.fa-plus');
let lmBool = true;
hamb.click(function () {
    if(lmBool)
    {
        scOff.addClass('shadow_cloak');
        body.css({'position': 'relative','right': '260px', 'overflow-y':'hidden'});
        left_m.css('right', '0');
        lmBool = false;
    }else{
        scOff.removeClass('shadow_cloak');
        body.css({'position': 'static','right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        lmBool = true;
    }
});

scOff.click(function () {
    if(!lmBool)
    {
     
        body.css({'right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        scOff.removeClass('shadow_cloak');
        lmBool = true;  
    }else{
        return 0;
    }
});

plusBtn.click(function () {
    if(!lmBool)
    {
        body.css({'right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        scOff.removeClass('shadow_cloak');
        lmBool = true;
    }else{
        return 0;
    }
});

const arrow_up = $(".up_button");
$(window).on('scroll', function () {
    if($(window).scrollTop() < 550)
    {
        arrow_up.css('right', '-70px');
    }else
    {
        arrow_up.css('right', '70px');
    }
});
arrow_up.click(function () {
   $("html, body").animate({scrollTop:0}, 'slow');
})