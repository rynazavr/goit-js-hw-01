/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.*/
//////////////////////////////////////////////////////////////////////
const input = document.querySelector("#name-input");
const someText = document.querySelector("#name-output");

//блок слушателя событий
input.addEventListener("input", handleInput);
//блок событий

function handleInput(event) {
  input.value
    ? (someText.textContent = input.value)
    : (someText.textContent = "незнакомец");
}
