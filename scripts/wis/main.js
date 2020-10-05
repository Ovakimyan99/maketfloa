'use strict';

$(document).ready(function() {
  $(".slider").owlCarousel({
    items: 1,
    dots: true,
    dotsClass: "slider-dots",
    nav: false,
    loop: false,
    autoplay: false,
    center: false
  });
});


var Menu = {
  
  el: {
    ham: $('.header-burger'),
    menuTop: $('.header-burger__top'),
    menuMiddle: $('.header-burger__middle'),
    menuBottom: $('.header-burger__bottom'),
    mobileNav: $('.mobile-nav')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
        
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('header-burger__top-click');
    Menu.el.menuMiddle.toggleClass('header-burger__middle-click');
    Menu.el.menuBottom.toggleClass('header-burger__bottom-click');
    Menu.el.mobileNav.toggleClass('mobile-nav--active');
  }
};

Menu.init();

const headerDrop = document.querySelector('.header-wis__drop'),
      headerBurger = document.querySelector('.header-burger');

const overflow = document.createElement('div');
overflow.classList.add('overflow');

headerBurger.addEventListener('click', ()=>{
if(document.querySelector('.header-burger__top-click')){
  openMenu();
} else {
  closeMenu();
}
});

overflow.addEventListener('click', ()=>{
closeMenu();
});

function openMenu() {
headerDrop.style.height = '19rem';
document.body.style.overflow = 'hidden';
document.body.append(overflow);
}

function closeMenu() {
headerDrop.style.height = '0';
document.body.style.overflow = '';
document.body.querySelector('.overflow').remove();
}