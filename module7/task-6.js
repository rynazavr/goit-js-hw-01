/*Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если 
неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/
const inputSix = document.querySelector("#validation-input");
const numberMax = inputSix.getAttribute("data-length");
// console.log(numberMax);
// console.dir(inputSix);
//блок слушателя событий
inputSix.addEventListener("blur", handleInput);
//блок событий

function handleInput(event) {
  if (inputSix.value.length < numberMax) {
    inputSix.classList.add("valid"), inputSix.classList.remove("invalid");
  } else if (inputSix.value.length > numberMax) {
    inputSix.classList.add("invalid"), inputSix.classList.remove("valid");
  }
}
