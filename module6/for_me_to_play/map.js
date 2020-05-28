// //Array.prototype.map()
// // Используется для транформации массива.Применяет callback - функцию к каждому элементу исходного массива, результат работы callback - функции записывает в новый массив, который и будет результатом выполнения метода.Исходный и новый массив всегда имеют одинаковую длину.Не мутирует иходный массив.
// // Используется для трансформации массива
// // Перебирает
// // Не изменяет
// // Возвращает коллекцию
const numbers = [1, 2, 3];
console.log(`Array.prototype.map()`);
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6]

const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
];

// // Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map((user) => user.name);

console.log(names); // ["Mango", "Poly", "Ajax"]
///////////
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const playerNames = players.map(function (player) {
  return player.name;
});
const playerIdToUpdate = `player-4`;
const updatedPlayers = players.map(function (player) {
  console.log(player.id);

  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }
  return player;
});
console.table(updatedPlayers);
//вывести игроков с измененным параметром во времени у одного игрока
