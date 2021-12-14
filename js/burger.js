$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    
  });

// menu
const burger = document.querySelector('.menu-burger');
burger.addEventListener('click', () => burger.classList.toggle('active'));
// end menu

function toggleNav() {
  (burger.classList.contains('active')) ? burger.classList.remove('active') : burger.classList.add('active');
}

var navlinks = document.getElementsByClassName('nav__link');
for(var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener('click', function() {
    toggleNav();
});
}