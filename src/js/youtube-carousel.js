function youtubeCarousel() {
  const youtubeSection = $(".js-youtube-section");
  const youtubeItems =  youtubeSection.find(".youtube-section__carousel-item").clone();
  const youtubeCards = youtubeItems.find(".youtube-section__card").clone();

  function launchCarousel(device) {
    if (device === "mobile") {
      youtubeSection.find(".swiper-wrapper").html(youtubeCards);
    } else {
      youtubeSection.find(".swiper-wrapper").html(youtubeItems);
    }

    return new Swiper('.js-youtube-swiper', {
      loop: false,
      spaceBetween: 16,
      effect: device === "mobile" ? "slide" : "fade",
      pagination: {
        el: '.youtube-section__pagination',
        clickable: true,
        type: 'custom',
        renderCustom: carouselCustomPagination,
      },
      navigation: {
        nextEl: '.youtube-carousel-nav__next',
        prevEl: '.youtube-carousel-nav__prev',
      },
      breakpointsInverse: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        568: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        }
      }
    });
  }

  const mediaPoints = {
    mobile: "(max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  }

  carouselInitializer(mediaPoints, launchCarousel);
}
