import pictures from '../gallery-items';
import createItemGallMarkUp from '../tamplates/gal-item.hbs';

const ul = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const btn = document.querySelector('button');
const lightbox = document.querySelector('.lightbox__content');

let current = 0;
let left = 0;

ul.insertAdjacentHTML('beforeend', createItemGallMarkUp(pictures));
const arrOfimgs = document.querySelectorAll('.gallery__link');

ul.addEventListener('click', onUlItemClick);
btn.addEventListener('click', onBtnCloseClick);
window.addEventListener('keydown', onEscapePress);

function onEscapePress(e) {
  if (e.keyCode === 27) {
    modal.classList.remove('is-open');
  }
  if (e.keyCode === 39) {
    lightbox.firstElementChild.src = arrOfimgs[[...arrOfimgs].indexOf(e.target) + ++current].href;

    if (current >= 8) {
      current = -1;
    }
  }
}

function onBtnCloseClick() {
  modal.classList.remove('is-open');
  lightbox.firstElementChild.src = '';
}

function onUlItemClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    modal.classList.add('is-open');
    lightbox.firstElementChild.src = e.target.dataset.source;
    lightbox.firstElementChild.alt = e.target.alt;
  }
}
