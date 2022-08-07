const images = document.querySelectorAll(".about-me__img")

images.forEach((image) => image.addEventListener("click", e => onImgClick(e, image)))

function onImgClick(e, image) {
    const img = e.target;

    if (image) {
        image.classList.toggle("openImg");
        document.body.classList.toggle("lock");
    }

}