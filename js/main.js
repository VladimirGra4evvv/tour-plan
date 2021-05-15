const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--prev',
      prevEl: '.hotel-slider__button--next',
    },
    effect: 'coverflow',
    
    // Keyboard arrows
    keyboard: {
        enabled: 'true',
        pageUpDown: 'true',
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--prev',
      prevEl: '.reviews-slider__button--next',
    },
    
  });