`use strict`;
const findLongestWord = function (string) {
  const splitWordsInString = string.split(" ");
  let longestWordInString = "";
  for (let i = 0; i < splitWordsInString.length; i += 1) {
    if (splitWordsInString[i].length > longestWordInString.length) {
      longestWordInString = splitWordsInString[i];
    }
  }
  return longestWordInString;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/
