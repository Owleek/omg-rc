function partnerCarousel() {
  const $partnerSection = $(".js-partner-section");
  const $partnerCarousel = $partnerSection.find(".partner-section__carousel");

  $partnerCarousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 2,
    onInitialized: function(event) {
      $partnerCarousel.addClass("owl-carousel");
    },
    responsive: {
      568: {
        items: 3,
      },
      1024: {
        items: 5,
        dots: false,
        nav: true,
      }
    }
  });
}
