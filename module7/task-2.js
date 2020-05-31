//В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>;
//В JS есть массив строк.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// console.log(ingredients[1]);

const ul = ingredients.map((item) => {
  const li = document.createElement(`li`);
  li.textContent = item;
  return li;
});

document.querySelector(`#ingredients`).append(...ul);
////
// const createList = (ingredient) => {
//   const ingredientsUl = document.querySelector(`#ingredients`);

//   const ingredientsLi = document.createElement(`li`);
//   ingredientsLi.textContent = ingredients;

//   ingredientsUl.append(ingredientsLi);
//   return ingredientsUl;
// };
// // console.log(createList(ingredients[1]));

// ingredients.forEach((ingredient) => {
//   console.log(createList(ingredient));
// });

/*Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после 
  чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй 
  document.createElement().*/
