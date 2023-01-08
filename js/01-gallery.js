import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
const imagesMarcup = createImgCards(galleryItems);
const modalContainer = document.querySelector(".modal");


galleryContainer.insertAdjacentHTML(`beforeend`, imagesMarcup);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);




function createImgCards (galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return`
       <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
   }
   )
       .join(``);
}



function onGalleryContainerClick(evt)
{
    evt.preventDefault();
   

    if (evt.target.nodeName !== "IMG") {
        return
    }

     
    openModal(evt);
}

function openModal(evt) {

    const instance =  basicLightbox.create(`
   <div class="modal">
         <img src="${evt.target.dataset.source}" width="800" height="600">
     </div>
    `);

    instance.show();


    document.body.addEventListener("keydown", handelModalCloseEsc);


function handelModalCloseEsc({key}) {
    if (key === "Escape") instance.close();
}

}
