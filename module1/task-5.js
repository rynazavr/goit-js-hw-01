`use strict`;
let deliveryToCountry = prompt(
  `Выбирите страну доставки товара: Китай, Чили, Австралия, Индия или Ямайка`
);
let country = deliveryToCountry.toLowerCase();
let message;
switch (country) {
  case `китай`:
    alert(`100 кредитов`);
    break;
  case `чили`:
    alert(`250 кредитов`);
    break;
  case `австралия`:
    alert(`170 кредитов`);
    break;
  case `индия`:
    alert(`80 кредитов`);
    break;
  case `ямайка`:
    alert(`120 кредитов`);
    break;
  default:
    alert(`Неверное значение`);
}
console.log(message);
