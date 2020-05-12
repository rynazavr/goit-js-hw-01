`use strict`;
const credits = 23580;
const pricePerDroid = 3000;
let number = prompt(`Укажите колличество дроидов для оформления заказа`);
let totalPrice = pricePerDroid * number;
if (number === null) {
  console.log(`Отменено пользователем!`);
} else if (credits <= totalPrice) {
  console.log(`Недостаточно средств на счету!`);
} else if (credits >= totalPrice) {
  console.log(
    `Вы купили ${number} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}
