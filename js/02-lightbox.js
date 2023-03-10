import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup (items){
    const markup = items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>`;
    }).join('');

    return markup;
} 


let gallery = new SimpleLightbox('.gallery a', {
    captionsData : "alt",
    captionDelay : 250
});

gallery.on('show.simplelightbox', function () {
});

// console.log(gallery)
