import imagelist from "./gallery-items.js";
import { templeteImageCard } from "./gallery-skeleton.js";
// console.log(templeteImageCard);
const galleryUl = document.querySelector(`.js-gallery`);
const buttonClose = document.querySelector(`button[data-action="close-modal"]`);
const divModal = document.querySelector(`.js-lightbox`);

//image block
const allLi = imagelist
  .map((imageItem) => templeteImageCard(imageItem))
  .join(``);
galleryUl.insertAdjacentHTML(`beforeend`, allLi);
// console.log(galleryUl);

// galleryUl.addEventListener(`click`, clickList);
// function clickList(event) {
//   //   console.log(event);
//   console.log(event.target);
//   if (event.target.nodeName !== "IMG") return;
//   //   const source = event.target.dataset.source;
//   const { source } = event.target.dataset;
//   //   console.log(source);
//   event.target.src = source;
// }
galleryUl.addEventListener(`click`, clickList);
buttonClose.addEventListener(`click`, clickButtonClosed);

function clickList(event) {
  window.addEventListener(`keydown`, (event) => {
    if (event.code === `Escape`) {
      clickButtonClosed();
    }
  });
  divModal.classList.add("is-open");
  console.log(event.target);
  if (event.target.nodeName !== "IMG") return;
  console.log(divModal);
  //   document.body.classList.add("lightbox");
  //   const { source } = event.target.dataset;
  //   console.log(source);
  //   event.target.src = source;
}

function clickButtonClosed(event) {
  divModal.classList.remove("is-open");
}
