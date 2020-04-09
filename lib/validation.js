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
