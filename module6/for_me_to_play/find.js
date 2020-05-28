console.log(`Array.prototype.find()`);
////Array.prototype.find()который будет искать до первого совпадения, после чего прервет свое выполнение.
// Применяет callback - функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение.Если ничего не найдено, вернет undefined.
// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает 1 уникальный элемент в коллекции
const numss = [1, 2, 3, 4, 5, 6];
const onlyOneNumm = numss.find(function (numm) {
  return numm > 3;
});
console.log(onlyOneNumm);

//найти игрока по id
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const playerIdToFind = `player-5`;
const playerSomeToFind = players.find(function (player) {
  return player.id === playerIdToFind;
});
console.log(playerSomeToFind);
