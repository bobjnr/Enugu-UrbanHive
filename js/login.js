const eyeOne = document.querySelector('#eye');

eyeOne.addEventListener('click', ()=>{
  if(password.type === 'password'){
    password.type = 'text'
    eyeOne.classList.add('fa-eye');
    eyeOne.classList.remove('fa-eye-slash'); 
  }else{
    password.type = 'password'
    eyeOne.classList.remove('fa-eye');
    eyeOne.classList.add('fa-eye-slash'); 
  }
})


