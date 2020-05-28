//Получить массив имен всех пользователей (поле name).
import users from "./users.js";

const getUserNames = (users) => {
  return users.map((users) => users.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// const getUserNames = users.map(user => user.name);
