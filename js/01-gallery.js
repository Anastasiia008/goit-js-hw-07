import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Отримуємо посилання на  елемент гелері в документі
const galleryList = document.querySelector(".gallery");
// Відображаємо функцію та передаємо їй масив об'єктів
const galleryItemsMarkup = makeItemsMarkup(galleryItems);

// Додаємо розмітку в елемент гелері
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// Додаємо обробник подій кліку
galleryList.addEventListener("click", onGalleryClick);

// Створюємо функцію,  щоб згенерувати розмітку для гелереї
function makeItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </li>`;
    })
    .join("");
};

// Створюємо функцію, щоб відпрацювати кліки
function onGalleryClick(event) {
  event.preventDefault();
  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }
  const originalImg = event.target.dataset.source;

  const modal = basicLightbox.create(`<img src="${originalImg}">`, {
    onShow: () => {
      document.addEventListener("keydown", closeOnEscape);
    },
    onClose: () => {
      document.removeEventListener("keydown", closeOnEscape);
    },
  });

  modal.show();

  function closeOnEscape(event) {
    if (event.code !== "Escape") {
      return;
    }
    modal.close();
  }
}