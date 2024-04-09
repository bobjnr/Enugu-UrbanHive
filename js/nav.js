 // FOR THE MOBILE MENU ICONS
 const menuIcon = document.getElementById('menu-icon');

 
 function menuIconClass() {
   menuIcon.classList.toggle('fa-bars-staggered');
   menuIcon.classList.toggle('fa-xmark');
 }
 menuIcon.addEventListener('click', function() {
   menuIconClass();
 });

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