import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', handlerContainerClick);


function createGalleryMarkup (items){
    const markup = items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');

    return markup;
} 

function handlerContainerClick(event) {
    // console.log(event.target)
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
}
    const largeImageRef = event.target.dataset.source
    // console.log(largeImageRef)

    const openLargeImage = basicLightbox.create(`
//     <img src="${largeImageRef}" width="800" height="600">
// `)
    openLargeImage.show()

}

