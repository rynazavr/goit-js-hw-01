//Получить общую сумму баланса (поле balance) всех пользователей.
import users from "./users.js";
const calculateTotalBalance = (users) => users.reduce((acc, users) =>
  acc + users.balance, 0)

console.log(calculateTotalBalance(users)); // 20916
