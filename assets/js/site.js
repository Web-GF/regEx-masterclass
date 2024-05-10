// write cool JS hwere!!

const myUserNameElement = document.getElementById('username');
const myPasswordElement = document.getElementById('password');
const myUserEmailElement = document.getElementById('email');

const submitButton = document.getElementById('submit');


let isPasswordValid = false;
let isUsernameValid = false;
let isEmailValid = false;


submitButton.disabled = true

myUserNameElement.addEventListener('keyup', () => {

  let username = myUserNameElement.value;

  let usernameRegEx = /^[a-zA-Z0-9]{2,20}$/;

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


myPasswordElement.addEventListener('keyup', () => {

  let password = myPasswordElement.value;
  // hust at sætte range på jeres reg ex eks.{2,4} ellers virker ^ og $ ikke som start og end.. 
  let passwordRegEx = /^[a-zA-Z0-9]{2,6}$/;

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




myUserEmailElement.addEventListener('keyup', () => {

  let email = myUserEmailElement.value;

  // første element tester for word characters - og . [\w-\.]
  // anden element @ og en gruppe ([\w-]+\.) med en range med  word characters og .
  // sidste element tester på word characters og længde mellem 2 og 4 i slutningen

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
  // husk prevent default for at stoppe reload fra form
  event.preventDefault();
  console.log('Form submitted successfully!');
})


function validateForm() {
  console.log(isPasswordValid, isUsernameValid, isEmailValid);
  if (isPasswordValid && isUsernameValid && isEmailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }

}




