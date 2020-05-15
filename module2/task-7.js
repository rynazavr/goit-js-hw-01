/*НЕ ОБЯЗАТЕЛЬНЫЙ ТАСК - можно сделть позже, по желанию*/
`use strict`;
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  // твой код
};

const isLoginUnique = function (allLogins, login) {
  // твой код
};

const addLogin = function (allLogins, login) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

/* https://github.com/goitacademy/javascript-homework/tree/master/homework-02*/
