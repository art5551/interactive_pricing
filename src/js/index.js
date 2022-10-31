const menu_btn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menu_nav = document.querySelector('.menu-nav');

const nav_items = document.querySelectorAll('.menu-nav__item')

let show_menu = false;

menu_btn.addEventListener('click', toggle_menu);

function toggle_menu () {
  if(!show_menu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menu_nav.classList.add('open');
    nav_items.forEach(item => item.classList.add('open'));

    show_menu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menu_nav.classList.remove('open');
    nav_items.forEach(item => item.classList.remove('open'));
    show_menu = false;
  }
}