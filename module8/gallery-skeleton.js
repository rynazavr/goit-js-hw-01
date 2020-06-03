import imagelist from "./gallery-items.js";
console.log(imagelist);

const galleryUl = document.querySelector(`.js-gallery`);
const allLi = imagelist
  .map((imageItem) => templeteImageCard(imageItem))
  .join(``);
function templeteImageCard(imageItem) {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${imageItem.original}">
  <img src="${imageItem.preview}" alt="${imageItem.description}" data-source="${imageItem.original}" class="gallery__image">
  </a>
  </li>
  `;
}
console.log(allLi);
galleryUl.insertAdjacentHTML(`beforeend`, allLi);
