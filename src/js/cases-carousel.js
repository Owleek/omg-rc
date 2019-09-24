function casesCarousel() {
  function launchCarousel(device) {
    return new Swiper('.js-cases-swiper', {
      loop: false,
      spaceBetween: 24,
      effect: device === "mobile" ? "slide" : "fade",
      pagination: {
        el: '.cases-section__pagination',
        clickable: true,
        type: 'custom',
        renderCustom: carouselCustomPagination,
      },
      navigation: {
        nextEl: '.cases-section__nav-next',
        prevEl: '.cases-section__nav-prev',
      },
    });
  }

  const mediaPoints = {
    mobile: "(max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  }

  carouselInitializer(mediaPoints, launchCarousel);
}
