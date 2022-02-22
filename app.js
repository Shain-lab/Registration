const form = document.getElementById('form');
const username = document.getElementById('username');
const city = document.getElementById('city');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mobile = document.getElementById('mobile');
const result = document.getElementById('result');
var usern = false;
var cityn =  false;
var emailn = false;
var pass=false;
var mobiles=false;
username.addEventListener('click', e=>{
checkInputs();
});
username.addEventListener('keypress', e => {
  checkInputs();
});
email.addEventListener('keypress', e => {
  checkInputs();
});
city.addEventListener('keypress', e => {
  checkInputs();
});
password.addEventListener('keypress', e => {
  checkInputs();
});
mobile.addEventListener('click', e=>{
checkInputs();
});
mobile.addEventListener('keypress', e => {
  checkInputs();
});
form.addEventListener('submit', e => {
  checkInputs();
  if(usern===true && emailn===true && pass===true && mobiles===true){
    checker(0);
  }else{
    checker(1);
  }
});
function checker(n){
  if(n===0){
  alert("Registration Successfull, We will get back to you soon.");
  }else{
    alert("Error arises, Please re-check and try again.");

  }
}
function checkInputs() {
  const usernameValue = username.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const mobileValue = mobile.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    usern = false;
  } else {
    setSuccessFor(username);
    usern=true;
  }
  if (cityValue === '') {
    setErrorFor(city, 'City cannot be blank');
    cityn = false;
  } else {
    setSuccessFor(city);
    cityn = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
    emailn = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
    emailn = false;
  } else {
    setSuccessFor(email);
    emailn=true;
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    pass = false;
  } else {
    setSuccessFor(password);
    pass=true;
  }

  if (mobileValue === '') {
    setErrorFor(mobile, 'Mobile No. cannot be blank');
    mobiles = false;
  } else {
    setSuccessFor(mobile);
    mobiles=true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
function setExecute(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control success';
  small.innerText = message;
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}












