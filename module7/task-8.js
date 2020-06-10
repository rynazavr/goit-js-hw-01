/*Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку
Создать, после чего рендерится коллекция. При нажатии на кнопку
Очистить, коллекция элементов очищается.*/

const buttonRender = document.querySelector(`button[data-action="render"]`);
const buttonDestroy = document.querySelector(`button[data-action="destroy"]`);
const inputMy = document.querySelector("input");
const boxes = document.querySelector(`#boxes`);

// inputMy.addEventListener(`input`, onInput);
const rgbArray = function () {
  const arrColors = [];
  for (let i = 0; i < 3; i++) {
    arrColors.push(getRandomIntInclusive(0, 255));
  }
  return arrColors;
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 20; //30
function numberValue() {
  counter += 10;
}
const res = function (number) {
  const arr = []; //5div
  number = Number(number);
  for (let i = 0; i < number; i++) {
    numberValue();
    const x = rgbArray(); //0,2,6
    const div = `<div style = "background-color: rgb(${x}); width: ${counter}px; height: ${counter}px;"></div>`;
    arr.push(div);
  }
  return arr;
};

const onRender = function (event) {
  const number = inputMy.value;
  const resultNew = res(number);
  const resultNewQ = resultNew.join("");
  boxes.insertAdjacentHTML("beforeend", resultNewQ);
  // console.log(resultNew);
};

const onDestroy = function (event) {
  boxes.innerHTML = "";
  counter = 30;
};

buttonRender.addEventListener(`click`, onRender);
buttonDestroy.addEventListener(`click`, onDestroy);

/*Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
 Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
Каждый созданный div:
Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/
