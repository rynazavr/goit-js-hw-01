`use strict`;
const countProps = function (obj) {
  const values = Object.values(obj).length;
  console.log(values);
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.
