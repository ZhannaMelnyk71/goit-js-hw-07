import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
    //   <ul >
    //     <li>
    //       <img src="" alt="" width="" height="">
    //     </li>
    //   </ul>

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
    console.log(event.target)
    
}