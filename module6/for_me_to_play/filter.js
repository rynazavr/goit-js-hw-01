//Array.prototype.filter()
// Применяет callback - функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив.Исходный и новый массив могут иметь разную длину.Не мутирует иходный массив.Всегда возвращает массив, даже если в нем всего 1 элемент.Если ничего не найдено, вернет пустой массив.Используется когда необходимо найти более одного элемента в коллекции.
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
console.log(`Array.prototype.filter()`);
const nums = [1, 2, 3, 4, 5, 6];
const filteredNumbers = nums.filter(function (num) {
  return num < 5;
});
console.log(filteredNumbers);
//////

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const onlinePlayers = players.filter(function (player) {
  return player.online;
});
console.table(onlinePlayers);
const offlinePlayers = players.filter(function (player) {
  return !player.online;
});
console.table(offlinePlayers);
const hardcorePlayers = players.filter(function (player) {
  return player.timePlayed > 400;
});
console.table(hardcorePlayers);
//вывести игроков с колличеством баллов больше 400
