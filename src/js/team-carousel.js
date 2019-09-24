function teamCarousel() {
  const $teamSection = $(".js-team-section");
  const $teamCarousel = $teamSection.find(".team-section__carousel");

  if ($teamCarousel.find(".team-section__carousel-item").length > 1) {
    $teamCarousel.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      onInitialized: function(event) {
        $teamCarousel.addClass("owl-carousel");
        $teamSection.find(".items-counter").addClass("items-counter_active");
      },
      onChanged: function(event) {
        const $originalItems = $teamCarousel.find(".owl-item:not(.cloned)");
        const count = $originalItems.length;

        setTimeout(() => {
          let current = 1;

          for(let i = 0; i < $originalItems.length; i += 1) {
            if($($originalItems[i]).hasClass("active")) {
              current = i + 1;
              break;
            }
          }

          $teamSection.find(".items-counter__total").text(count < 10 ? "0" + count : count);
          $teamSection.find(".items-counter__current").text(current < 10 ? "0" + current : current);
        }, 0);
      },
      responsive: {
        768: {
          items: 2,
        },
        1024: {
          dots: false,
          nav: true,
          loop: false,
          items: 1,
        },
      }
    });
  }
}
