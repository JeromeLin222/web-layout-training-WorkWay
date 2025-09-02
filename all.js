const swiper = new Swiper('.flow-swiper', {
    enabled: false,
    breakpoints: {
        0: {
            enabled: true,
            slidesPerView: 1.1,
            spaceBetween: 16
        },

        992: {
            enabled: false,
            slidesPerView: 4,
            spaceBetween: 24
        }
    }

  });

  const storySwiper = new Swiper('.story-swiper', {
    slidesPerView: 1.08,
    spaceBetween: 16,
    breakpoints: {
        992: {
            slidesPerView: 2.8,
            spaceBetween: 24
        }
    }

  });

  const partnerSwiper = new Swiper('.partner-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 24,
    autoHeight: false,
    breakpoints: {
        768: {
            slidesPerView: 4.2,
        }
    }
  })