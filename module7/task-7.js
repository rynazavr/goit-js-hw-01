/*Напиши скрипт, который реагирует на 
изменение значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text 
обновляя свойство font-size. В результате при 
перетаскивании ползунка будет меняться размер текста.*/
const myInput = document.querySelector(`#font-size-control`);
const mySpan = document.querySelector(`#text`);

console.log(mySpan.style);
myInput.addEventListener("input", textRange);
function textRange(event) {
  mySpan.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
}
