import { galleryItems } from './gallery-items.js';
// Change code below this line

// Отримуємо посилання на  елемент гелері в документі
const galleryList = document.querySelector(".gallery");

// Відображаємо функцію та передаємо їй масив об'єктів
const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

// Додаємо розмітку в елемент гелері
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// Створюємо функцію,  щоб згенерувати розмітку для гелереї
function makeGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>
        </li>`;
    })
    .join("");
}

// Запускаємо бібліотеку SimpleLightbox та налаштовуємо її
const modal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});