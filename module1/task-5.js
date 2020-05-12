`use strict`;
let deliveryToCountry = prompt(
  `Выбирите страну доставки товара: Китай, Чили, Австралия, Индия или Ямайка`
);
let country = deliveryToCountry.toLowerCase();
let message;
switch (country) {
  case `китай`:
    alert(`Доставка в Китай будет стоить 100 кредитов`);
    break;
  case `чили`:
    alert(`Доставка в Чили будет стоить 250 кредитов`);
    break;
  case `австралия`:
    alert(`Доставка в Австралию будет стоить 170 кредитов`);
    break;
  case `индия`:
    alert(`Доставка в Индию будет стоить 80 кредитов`);
    break;
  case `ямайка`:
    alert(`Доставка на Ямайку будет стоить 120 кредитов`);
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}
console.log(message);
