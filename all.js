const swiper = new Swiper('.flow-swiper', {
    enabled: false,
    breakpoints: {
        0: {
            enabled: true,
            slidesPerView: 1.5,
            spaceBetween: 16
        },

        992: {
            enabled: false,
            slidesPerView: 4,
            spaceBetween: 24
        }
    }

  });