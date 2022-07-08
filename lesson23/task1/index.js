// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
const formElem = document.querySelector('.login-form');

const formFields = [...new FormData(formElem)];

const mailInput = document.querySelector('[name="email"]');
const passInput = document.querySelector('[name="password"]');
const errorEmailText = document.querySelector('.error-text_email');
const errorPassText = document.querySelector('.error-text_password');
const submitButton = document.querySelector('.submit-button');

mailInput.addEventListener('input', mailProcessor);
passInput.addEventListener('input', passProcessor);
submitButton.addEventListener('click', buttonProcessor);

const isRequired = value => (value ? undefined : 'Required');
const isMail = value => (value.includes('@') ? undefined : 'Should be an email');

function passProcessor(event) {
  const value = event.target.value;
  const valueText = [isRequired(value)].filter(el => (el ? true : false)).join(', ');
  //   console.log(valueText);
  errorPassText.textContent = valueText;
}

function mailProcessor(event) {
  const value = event.target.value;
  const valueText = [isRequired(value), isMail(value)].filter(el => (el ? true : false)).join(', ');
  //   console.log(valueText);
  errorEmailText.textContent = valueText;
}
// const formData = Object.fromEntries(new FormData(formElem));

function buttonProcessor(event) {
  event.preventDefault;
  //   console.log(Object.fromEntries(new FormData(formElem)));
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));
}

// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
