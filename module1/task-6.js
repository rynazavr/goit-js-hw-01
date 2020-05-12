`use strict`;
let total = 0;
let input;
do {
  input = prompt("Введите число!");
  if (input === null) {
    break;
  }
  if (Number.isNaN(Number(input))) {
    alert("Попробуйте ввести число еще раз!");
  } else {
    total = total + Number(input);
  }
} while (input !== null);

alert(`Общая сумма: ${total}.`);
