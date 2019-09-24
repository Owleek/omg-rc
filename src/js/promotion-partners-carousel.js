function promotionPartnersCarousel() {
  const $promotionSection = $(".js-promotion-platforms");
  const $promotionCarousel = $promotionSection.find(".promotion-platforms__carousel");

  if ($promotionCarousel.find(".promotion-platforms__carousel-item").length > 4) {
    $promotionCarousel.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 4,
      onInitialized: function(event) {
        $promotionCarousel.addClass("owl-carousel");
      },
    });
  }
}
