const form = document.getElementById('booking-form');
const email = document.getElementById('email');
  //const pattern2 = /^[a-zA-Z0-9_-]{3,15}+@[a-z]{4,}+\.[a-z]{2,}$/;
  const pattern3 = /^\S+@\S+\.\S+$/;
  const pattern = /^[a-zA-Z0-9_-]{3,15}@[a-z]{4,}\.[a-z]{2,}/;

const nameErrorDiv = document.getElementById('name-error');
const emailErrorDiv = document.getElementById('email-error');
const phoneErrorDiv = document.getElementById('phone-error');


function emailValidation() {


  let emailValue = email.value;   console.log('emailValue - ' , emailValue);


  if (emailValue.match(pattern)) {
    console.log('match');
    emailErrorDiv.style.display = 'none';
  } else {
    console.log('not match');
    emailErrorDiv.style.display = 'block';
  };

};

const pattern4 = /^[a-zA-Zа-яА-Я ]{3,15}$/;
function nameValidation() {

  const name = document.getElementById('name-input');

  let nameValue = name.value;

  if (nameValue.match(pattern4)) {
    console.log('match');
    nameErrorDiv.style.display = 'none';
  } else {
    console.log('not match');
    nameErrorDiv.style.display = 'block';
  };
}



function phoneValidation() {


let phoneValue = document.getElementById('phone-input').value;
const pattern5 = /^([0-9]{1,10}|[0-9 -]{1,10})$/;
   console.log('phoneValue - ' , phoneValue);
  


  if (phoneValue.match(pattern5)) {
    console.log('match');
    phoneErrorDiv.style.display = 'none';
  } else {
    console.log('not match');
    phoneErrorDiv.style.display = 'block';
  };
}