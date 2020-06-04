export const templeteImageCard = (imageItem) => {
  return `
  <li class="gallery__item">
 
  <img src="${imageItem.preview}" alt="${imageItem.description}" data-source="${imageItem.original}" class="gallery__image">
 
  </li>
  `;
};
