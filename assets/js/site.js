// write cool JS hwere!!

const myUserNameElement = document.getElementById('username');
const myPasswordElement = document.getElementById('password');
const myUserEmailElement = document.getElementById('email');

const submitButton = document.getElementById('submit');
submitButton.disabled = true



myPasswordElement.addEventListener('keyup', () => {

  let password = myPasswordElement.value;
  
  let passwordRegEx=/^[a-z\d]{4,12}$/i;

  const isPasswordValid = passwordRegEx.test(password)

  if (isPasswordValid) {
    myPasswordElement.style.border = '2px solid green';
    console.log('valid');
  } else {
    myPasswordElement.style.border = '2px solid orange';
    console.log('invalid');
  }
})


myUserNameElement.addEventListener('keyup', () => {

  let username = myUserNameElement.value;

  let usernameRegEx = /^[\w\d.-]{4,8}$/;

  const isUsernameValid = usernameRegEx.test(username);

  if (isUsernameValid) {
    myUserNameElement.style.border = '2px solid green';
    console.log('valid username');

  }
  else {
    myUserNameElement.style.border = '2px solid orange';
    console.log('invalid username');
  }
})

myUserEmailElement.addEventListener('keyup', () => {

    let email = myUserEmailElement.value;
  let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const isEmailValid = emailRegEx.test(email);

  if (isEmailValid) {
    myUserEmailElement.style.border = '2px solid green';
    console.log('valid email');
    submitButton.disabled = false;
  } else {
    myUserEmailElement.style.border = '2px solid orange';
    console.log('invalid email');
    
  }
})


  
 
