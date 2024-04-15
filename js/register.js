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

  const firstNameValue =  firstName.value.trim()

  if(firstNameValue === ''){
    setErrorFor(firstName, 'First name cannot blank')
  }else{
    setSuccessFor(firstName)
  }
}

function setErrorFor(input, message) {
  const inputcontainer = input.parentElement;
  const small = inputcontainer.querySelector('small')

  // add error message inside small tag
  small.innerText = message;

  // add error class
  inputcontainer.className = "input-holder error";
}

function setSuccessFor(input) {
  const inputcontainer = input.parentElement;
  inputcontainer.className = 'inputcontainer success';
}