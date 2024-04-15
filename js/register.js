const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('conpassword');
// const btn = document.getElementById('btn');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  checkInputs();
})

const checkInputs = ()=>{

  // Value of each input

  const firstNameValue =  firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = confirmPassword.value.trim();


  if(firstNameValue === ''){
    setErrorFor(firstName, 'First name cannot blank')
  }else{
    setSuccessFor(firstName)
  }

  if(lastNameValue === '' ){
    setErrorFor(lastName, 'Last name cannot be blank')
  }else{
    setSuccessFor(lastName)
  }

if(emailValue === ''){
  setErrorFor(email, 'email cannot be blank')
}else if(!emailValid(emailValue)){
  setErrorFor(email, 'email is not valid')
}else{
  setSuccessFor(email)
}

if (passwordValue === "" ){
  setErrorFor(password, "Password cannot be blank");
}else {
  setSuccessFor(password)
}

if (password2Value === "" ){
  setErrorFor(confirmPassword, "Password cannot be blank");
}else if (passwordValue != password2Value){
  setErrorFor(confirmPassword, "Password does not match");
}else {
  setSuccessFor(confirmPassword)
}

}

function setErrorFor(input, message) {
  const inputcontainer = input.parentElement;
  const small = inputcontainer.querySelector('small')

  // add error message inside small tag
  small.innerText = message;

  // add error class
  inputcontainer.className = "inputcontainer error";
}

function setSuccessFor(input) {
  const inputcontainer = input.parentElement;
  inputcontainer.className = 'inputcontainer success';
}

function emailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }

//  THE EYE

const eyeOne = document.querySelector('#eye')
const eyeTwo = document.querySelector('#eye1')

eyeOne.addEventListener('click', ()=>{
  if(password.type === 'password'){
    password.type = 'text'
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash'); 
  }else{
    password.type = 'password'
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash'); 
  }
})

eyeTwo.addEventListener('click', ()=>{
  if(confirmPassword.type === 'password'){
    confirmPassword.type = 'text'
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash'); 
  }else{
    confirmPassword.type = 'password'
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash'); 
  }
})
