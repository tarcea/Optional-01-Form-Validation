// TODO: Validate this form


const fields = document.querySelectorAll('.form-control');
// returns a node list
fields.forEach((field) => {
  console.log(field);
  field.addEventListener('blur', (e) => {
    if (field.value.length === 0) {
      field.classList.add('is-invalid');
    } else {
      field.classList.add('is-valid');
    }
  });
});

const box = document.getElementById('tos');
const button = document.querySelector('.btn');
console.log(box.checked);
box.addEventListener('click', (e) => {
  if (box.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
