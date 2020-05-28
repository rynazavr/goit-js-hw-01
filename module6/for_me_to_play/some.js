console.log(`Array.prototype.some()`);
// Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест, предоставляемый callback - функцией.Возвращает true, если вызов callback - функции вернет true хотябы для одного элемента в array.
// Перебирает
// Не изменяет
// Возвращает true или false

//есть ли хоть кто-то онлайн
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const isAnybodyOnline = players.some(function (player) {
  return player.online;
});
console.log(`is anybody online`, isAnybodyOnline);
//есть ли игроки, которые произрали более 400 часов
const isAnybodyPlayed400 = players.some(function (player) {
  return player.timePlayed > 400;
});
console.log(`is anybody played more than 400 hours`, isAnybodyPlayed400);
