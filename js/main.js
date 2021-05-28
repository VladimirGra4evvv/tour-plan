$(document).ready(function(){
  var hotelSlider = new Swiper('.hotel-slider', {
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

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal);
  closeModalButton.on('event.which == 27', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  //Обработка форм
  $(".modal__form").validate({
    messages: {
      name: {
        required: "Please specify your name",
        minlenght: "Имя должно быть не короче 2 букв"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Телефон обязателен",
      },
    }
  });



});