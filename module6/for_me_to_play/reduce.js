console.log(`Array.prototype.reduce()`);
// Аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.Швейцарский нож функциональных методов массива.Возможно немного сложна в усвоении, но результат стоит того.
// Перебирает
// Не изменяет
// Возвращает что угодно
const numbers = [1, 2, 3, 4, 5, 6];
const total = numbers.reduce(function (accumulator, number /*, index, array*/) {
  console.log(`accumulator`, accumulator);
  console.log(number);
  //   console.log(index);
  //   console.log(array);
  return accumulator + number;
}, 0);
console.log(total);
//accumulator = 0 -> number = 1 -> return 0 + 1
//accumulator = 1 -> number = 2 -> return 1 + 2
//accumulator = 3 -> number = 3 -> return 3 + 3
//accumulator = 6 -> number = 4 -> return 6 + 4
//accumulator = 10 -> number = 5 -> return 10 + 5
//accumulator = 15 -> number = 6 -> return 15 + 6

const salary = {
  mango: 100,
  poly: 200,
  ajax: 300,
};

// const totaSalaries = Object.values(salary).reduce(function (acc, value) {
//   return acc + value;
// });

const values = Object.values(salary);
//превращаем объект в массив
const totaSalaries = values.reduce(function (acc, value) {
  return acc + value;
});
console.log(totaSalaries);
/////////////подсчитать сколько времени наиграли игроки
console.log(`EXAMPLE WITH CALCULATED TIME`);
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "James", timePlayed: 100, points: 489, online: true },
  { id: "player-3", name: "Alex", timePlayed: 320, points: 98, online: false },
  { id: "player-4", name: "Hugo", timePlayed: 430, points: 126, online: true },
  { id: "player-5", name: "Peter", timePlayed: 650, points: 954, online: true },
];
const totaTimePlayed = players.reduce(function (time, player) {
  return time + player.timePlayed;
}, 0);
console.log(totaTimePlayed);
/////////////подсчитать корзинку
console.log(`EXAMPLE WITH PRODUCT CART`);
const cart = [
  { label: "Apple", price: 30, quantity: 6 },
  { label: "Appricot", price: 40, quantity: 4 },
  { label: "Peach", price: 90, quantity: 2 },
];
const totalAmount = cart.reduce(function (total, item) {
  return total + item.price * item.quantity;
}, 0);
console.log(totalAmount);
/////
console.log(`EXAMPLE WITH TWEETS - collect all tags`);
const tweets = [
  { id: "000", likes: 320, tags: [`js`, `nodejs`] },
  { id: "001", likes: 20, tags: [`html`, `css`] },
  { id: "002", likes: 30, tags: [`html`, `js`, `nodejs`] },
  { id: "003", likes: 620, tags: [`css`, `react`] },
  { id: "004", likes: 120, tags: [`js`, `nodejs`, `react`] },
];
const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags);
  return tags;
}, []);
console.log(allTags);
const tagsStats = allTags.reduce(function (acc, tag) {
  console.log(`TAG`, tag);
  console.log(`ACC`, acc);
  //   if (acc.hasOwnProperty(tag)) {
  //     console.log(`this tag is here, increase the number`);
  //     acc[tag] += 1;
  //     return acc;
  //   }
  //   console.log(`this tag is not here, add tag`);
  //   acc[tag] = 1;
  //     return acc;

  acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
  return acc;
}, {});
console.log(tagsStats);
////////////////////////////////
