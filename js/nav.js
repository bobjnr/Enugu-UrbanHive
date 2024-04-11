 // FOR THE MOBILE MENU ICONS
 const menuIcon = document.querySelector('#menu-icon');
 const mobileNav = document.querySelector('.mobile-nav');
 const menuIcons = document.querySelectorAll('.mobile-menu-icon');


 
 function menuIconClass() {
   mobileNav.classList.toggle('show-nav')
 }

 menuIcons.forEach((icon)=>{
  icon.addEventListener('click', function() {
    menuIconClass();
  });
 })



//  FOR THE ACCOUNT CARET
const caretIcon = document.getElementById('caret-icon');
const account = document.getElementById('account');
 
 function caretIconClass() {
     caretIcon.classList.toggle('fa-caret-down');
   caretIcon.classList.toggle('fa-caret-up');
 }
 account.addEventListener('mouseenter', function() {
   caretIconClass();
 });
 account.addEventListener('mouseout', function() {
   caretIconClass();
 });