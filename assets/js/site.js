// write cool JS hwere!!

const myUserNameElement = document.getElementById('username');
const myPasswordElement = document.getElementById('password');
const myUserEmailElement = document.getElementById('email');

const submitButton = document.getElementById('submit');


let  isPasswordValid = false;
let  isUsernameValid = false;
let isEmailValid = false;


submitButton.disabled = true



myPasswordElement.addEventListener('keyup', () => {

  let password = myPasswordElement.value;
  
  let passwordRegEx=/^[a-z\d]{4,12}$/i;

   isPasswordValid = passwordRegEx.test(password)

  if (isPasswordValid) {
    myPasswordElement.style.border = '2px solid green';
    console.log('valid');
  } else {
    myPasswordElement.style.border = '2px solid orange';
    console.log('invalid');
  }
  validateForm();
})


myUserNameElement.addEventListener('keyup', () => {

  let username = myUserNameElement.value;

  let usernameRegEx = /^[\w\d.-]{4,8}$/;

   isUsernameValid = usernameRegEx.test(username);

  if (isUsernameValid) {
    myUserNameElement.style.border = '2px solid green';
    console.log('valid username');

  }
  else {
    myUserNameElement.style.border = '2px solid orange';
    console.log('invalid username');
  }
  validateForm();
})

myUserEmailElement.addEventListener('keyup', () => {

    let email = myUserEmailElement.value;
  let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   isEmailValid = emailRegEx.test(email);

  if (isEmailValid) {
    myUserEmailElement.style.border = '2px solid green';
    console.log('valid email');
    submitButton.disabled = false;
  } else {
    myUserEmailElement.style.border = '2px solid orange';
    console.log('invalid email');
    
  }
  validateForm();
})




submitButton.addEventListener('click', (event) => {
event.preventDefault();
console.log('Form submitted successfully!');
})


function validateForm(){
  console.log(isPasswordValid, isUsernameValid, isEmailValid);
  if (isPasswordValid && isUsernameValid && isEmailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }

}


  
 
