import galleryCards from '../templets/gallery-cards.hbs';
import menu from '../menu.json';

const listOfMenu = document.querySelector('.js-menu');

listOfMenu.insertAdjacentHTML('beforeend', galleryCards(menu));
