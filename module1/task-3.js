`use strict`;
const ADMIN_PASSWORD = `jqueryismyjam`;
let message;
const input = prompt(`Введите пароль`);
if (input === null) {
  console.log(`Отменено пользователем!`);
} else if (input === ADMIN_PASSWORD) {
  alert(`Добро пожаловать!`);
} else {
  alert(`Доступ запрещен, неверный пароль!`);
}
