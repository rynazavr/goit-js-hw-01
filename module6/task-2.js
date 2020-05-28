//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import users from "./users.js";

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);


console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
