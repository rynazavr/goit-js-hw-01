`use strict`;

//QUESTION 1

const showTag = function () {
  console.log(`this:`, this);
  console.log(`this:tag`, this.tag);
};

// showTag ();

const user = {
  tag: `Mango`,
  //showTag: ссылка на showTag = function () {
  //console.log(`this:`, this); --- при вызове передаст код функции? почему передает и Манго, откуда оно там взялось?
  //console.log(`this:tag`, this.tag); --- при вызове передаст значение имени Tag, тоесть Mango?
  //};
};

user.showTag = showTag;
//в свойство showTag объекта user записывается ссылка на функцию showTag
//свойство объекта user? создается новое свойство (имя : значение) с сылкой на функцию showTag

user.showTag();
//вызыватся функция showTag уже как свойство объекта user?
//выполняется console.log(`this:`, this); как подтягивается объект со значениями в this, что такое this в этом случае?
//console.log(`this:tag`, this.tag);

//ВОПРОС 2

const user = {
  tag: `Mango`,
  showTag() {
    console.log(`this:`, this);
    console.log(`this:tag`, this.tag);
  },
};
//user.showTag(); // все ок
const outerShowTag = user.showTag;
outerShowTag(); //почему не видит user.showTag?

////////////////////////////////////////////////
//ВОПРОС 3
const makeChangeColor = function () {
  const changeColor = function (color) {
    this.color = color;
  };
  const sweater = {
    color: `teal`,
    //changeColor = changeColor = function (color) {this.color = color;};
  };
  sweater.changeColor = changeColor;
  //записывается ссылка на функцию changeColor
  return sweater.changeColor;
};
const changeColor = makeChangeColor();
//changeColor(`blue`); если так вызвать будет undefined

////////////////////////////////////////////////
//ВОПРОС 4
const makeChangeColor = function () {
  const changeColor = function (color) {
    this.color = color;
  };
  return changeColor;
};
const sweater = {
  color: `teal`,
  changeColor: makeChangeColor(),
};
sweater.changeColor(`orange`);

//МЕТОД CALL + APPLY (передает аргументы, как массив)
const showTag = function (arg, arg2, arg3) {
  ///
};

const mango = {
  tag: `Mango`,
};

const poly = {
  tag: `Poly`,
};

showTag.call(mango, 1, 2, 3); //showTag.apply(mango, [1, 2, 3]);
showTag.call(poly, 1, 2, 3); //showTag.apply(poly, [1, 2, 3]);

//////////////////////////////////////////////////
//BIND - создает копию функции и возвращает

const showMangoTag = showTag.bind(mango);
const shoPolyTag = showTag.bind(poly);
showMangoTag();
showPolyTag();

//////////////////////
