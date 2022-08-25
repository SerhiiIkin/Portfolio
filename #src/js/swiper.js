new Swiper(".portfolio", {
    slidesPerView: 1,
    spaceBetween: 300,
    speed: 800,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 60,
        slideShadows: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper(".project__mern", {
    slidesPerView: 1,
    spaceBetween: 400,
    speed: 800,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 60,
        slideShadows: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})