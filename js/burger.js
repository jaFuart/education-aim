$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    
  });

// menu
const burger = document.querySelector('.menu-burger');
burger.addEventListener('click', () => burger.classList.toggle('active'));
// end menu
