// //ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА
// //Array.prototype.forEach() - Используется как замена цикла for.
// // Перебирает
// // Может изменять
// // Не возвращает
const numbers = [1, 2, 3];
// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // Функциональный forEach
console.log(`Array.prototype.forEach()`);
numbers.forEach((element) => console.log(element));
// //(num) callback функцию обратного вызова, которая будет выполнена для каждого элемента массиваб который вызвал forEach
// // Указываем параметр index если нужен доступ к счетчику
numbers.forEach((element, index, array) =>
  console.log(`${element} index ${index}, value ${array}`)
);
// element - получаем элемент, index - индекс, array - текущий массив
