console.log(`Array.prototype.every()`);
//Array.prototype.every() и Array.prototype.some()
// Метод every проверяет, прошли ли все элементы массива тест, предоставляемый callback - функцией.Возвращает true, если вызов callback - функции вернет true для каждого элемента в array.
// Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест, предоставляемый callback - функцией.Возвращает true, если вызов callback - функции вернет true хотябы для одного элемента в array.
// Перебирает
// Не изменяет
// Возвращает true или false

//проверить на условие - все ли игроки онлайн
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const isAllOnline = players.every(function (player) {
  return player.online;
});
console.log(`is all online`, isAllOnline);
//проверить на условие - все ли игроки отиграли более 200 часов
const playedSomeHours = players.every(function (player) {
  return player.timePlayed > 300;
});
console.log(`did they play 200 hours`, playedSomeHours);
