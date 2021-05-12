const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      prevEl: '.slider-button--prev',
      nextEl: '.slider-button--next',
    },
    effect: 'coverflow',
    
    // Keyboard arrows
    keyboard: {
        enabled: 'true',
        pageUpDown: 'true',
    },
  });