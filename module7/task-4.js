/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

class Counter {
  constructor({ selector, startValue, step }) {
    this.value = startValue;
    this.step = step;

    this.coverDiv = document.querySelector(selector);

    this.refs = {
      changeNumber: this.coverDiv.querySelector("span"),
      cbuttonDec: this.coverDiv.querySelector(
        'button[data-action="decrement"]'
      ),
      cbuttonInc: this.coverDiv.querySelector(
        'button[data-action="increment"]'
      ),
    };

    this.addL();
    this.printValue();
  }

  addL() {
    this.refs.cbuttonDec.addEventListener("click", this.dec.bind(this));
    this.refs.cbuttonInc.addEventListener("click", this.inc.bind(this));
  }

  dec() {
    this.value -= this.step;
    this.printValue();
  }

  inc() {
    this.value += this.step;
    this.printValue();
  }

  printValue() {
    this.refs.changeNumber.textContent = this.value;
  }
}

const counter = new Counter({
  selector: "#counter",
  startValue: 0,
  step: 1,
});

// //////
// const myCounter = document.querySelector(`#counter`);
// const buttonMinus = document.querySelector("[data-action='decrement']");
// const buttonPlus = document.querySelector("[data-action='increment']");
// const mySpan = document.querySelector(span);
// //блок вызова слушателя событий
// buttonPlus.addEventListener("click", handleClkPlus);
// buttonMinus.addEventListener("click", handleClkMinus);
// //блок событий
// const count = 0;

// function func() {
//   // const plusButton = document.getElementsByClassName("button_plus");
//   // const minusButton = document.getElementsByClassName("button_minus");
//   if ((document.onclick = buttonPlus)) {
//     count++;
//     console.log(count);
//   } else if ((document.onclick = buttonMinus)) {
//     count--;
//     console.log(count);
//   }
// }
////
