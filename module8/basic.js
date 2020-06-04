import imagelist from "./gallery-items.js";
import { templeteImageCard } from "./gallery-skeleton.js";

const galleryUl = document.querySelector(`.js-gallery`);
const buttonClose = document.querySelector(
  `button[data-action="close-lightbox"]`
);
const divModal = document.querySelector(`.js-lightbox`);
const imgModal = document.querySelector(`.lightbox__image`);

//image block
const allLi = imagelist
  .map((imageItem) => templeteImageCard(imageItem))
  .join(``);
galleryUl.insertAdjacentHTML(`beforeend`, allLi);

//блок вызовов слушателей событий
galleryUl.addEventListener(`click`, clickList);
buttonClose.addEventListener(`click`, clickButtonClosed);
imgModal.addEventListener(`click`, clickOnModalImage);
///
function clickList(event) {
  window.addEventListener(`keydown`, onEscape);
  //принимает onEscape функцию - закрытия модалки по ESC
  if (event.target.nodeName !== "IMG") return;
  divModal.classList.add("is-open");
  imgModal.src = event.target.dataset.source;
}

function clickButtonClosed(event) {
  divModal.classList.remove("is-open");
}
//закрытие по ESC - передача функции onEscape и вызов clickButtonClosed
function onEscape(event) {
  if (event.code === `Escape`) {
    clickButtonClosed();
  }
}
//прокрутка картинок в модалке
function clickOnModalImage(event) {
  // console.log("done");
}
