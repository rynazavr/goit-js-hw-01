//Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./users.js";
const getUserWithEmail = (users, email) => users.filter(user => user.email.includes(email))

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
