// TODO: Validate this form
const box = document.getElementById('tos');
const button = document.querySelector('.btn');
const fields = document.querySelectorAll('.form-control');
// returns a node list
const pattern = /\S+@\S+\.\S+/; // email valiation
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const address = document.getElementById('address');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip_code');
const city = document.getElementById('city');
const email = document.getElementById('email');

fields.forEach((field) => {
  field.addEventListener('blur', (e) => {
    console.log(e.target.name);
  });
});

const isEmpty = (field) => {
  field.addEventListener('blur', (e) => {
    if (field.value.length === 0) {
      field.classList.add('is-invalid');
    } else {
      field.classList.add('is-valid');
    }
  });
};

const emailValidation = (field) => {
  field.addEventListener('blur', (e) => {
    isEmpty(field);
    if (pattern.test(field.value) === false) {
      alert("this is not a valid email address");
      field.classList.add('is-invalid');
    }
  });
};

isEmpty(firstName);
isEmpty(lastName);
isEmpty(address);
isEmpty(country);
isEmpty(zipCode);
isEmpty(city);
emailValidation(email);


// console.log(field);
// console.log(box.checked);
box.addEventListener('click', (e) => {
  if (box.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
