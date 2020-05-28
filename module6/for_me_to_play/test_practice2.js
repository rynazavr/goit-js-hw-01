const scientist = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];

// let acc = 0;

// for (let x of scientist) {
//   const all = x.passed - x.year;
//   acc += all;
// }
// console.log("acc", acc);

// const fn = (param) => {
//   const arr = [];
//   param.forEach((element) => {
//     console.log(element);
//     arr.push(element.first);
//   });
//   return arr;
// };

// // const result = fn(scientist);

// // console.log(result);

// console.log("scientist", scientist);
// const res = scientist.map((elem) => ({ ...elem, test: "test" }));

// console.log(res);

//1) отримати масив вчених що народилися в 19 ст

// const wasBorn = scientist.filter(
//   (elem) => elem.year > 1800 && elem.year < 1900
// );
// console.log("wasBorn", wasBorn);

//2) знайти суму років скільки прожили всі вченні

// const summ = scientist.reduce((acc, elem, indx) => {
//   return acc + (elem.passed - elem.year);
// }, 0);

// console.log("summ", summ);

//3) Відсортувати вчених по алфавіту

const sort = scientist.map((elem) => elem.first).sort();
console.log("sort", sort);

const sortAlphabet = scientist.sort((a, b) => (a.first < b.first ? -1 : 1));

console.log(sortAlphabet);

//4) Відсортувати вчених по даті народження

//5) Відсортувати вчених по кількості прожитих років
console.log(scientist);
const longLife = scientist.sort((a, b) => {
  console.log("a", a, "----", b);

  a.passed - a.year > b.passed - b.year ? 1 : -1;
});

console.log("longLife", longLife);

// for (let x of longLife) {
//   const all = x.passed - x.year;
//   console.log(all);
// }
// console.log("acc", acc);

// const plusParam = longLife.map((elem) => ({
//   ...elem,
//   life: elem.passed - elem.year,
// }));

// console.log(plusParam);

//6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

//7) Знайти вченого який народився найпізніше.

//8) Знайти рік народження Albert Einstein

// const findAlbert = scientist.find(
//   (elem) => elem.first === "Albert" || elem.last === "Einstein"
// );

// console.log(findAlbert);

//9) Знайти вчених прізвище яких починається на літеру С

//10) Видалити з масива всіх вчених імя яких починається на A
