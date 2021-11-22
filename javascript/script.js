const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const emailInput = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const button = document.querySelector('button');

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

firstName.isValid = () => !!firstName.value;
lastName.isValid = () => !!lastName.value;
password.isValid = () => !!password.value;
emailInput.isValid = () => isValidEmail(emailInput.value);



const inputFields = [firstName, lastName, emailInput, password];

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.placeholder = '';
    emailInput.placeholder = 'email@example/com, "style", "color: red;"';
    input.nextElementSibling.classList.add("hidden");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hidden");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
  }
});
