const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('conpassword');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('i have been clicked');

})