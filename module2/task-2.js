`use strict`;
// debugger;

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(` `);
  // console.log(words);
  const oneItemEngravingPrice = pricePerWord * words.length;
  // console.log(pricePerWord);
  return oneItemEngravingPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

/* Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, 
и возвращающую цену гравировки всех слов в строке.*/
