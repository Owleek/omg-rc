/**
 * Initializes carousel and listens for window resize event to relaunch carousel
 * @param {Object} media - An object of media query rules.
 * @param { function } carousel - carousel function to launch/relaunch
 */
function carouselInitializer(media, carousel) {
  function matcher(media) {
    return Object.keys(media).filter(function(item) {
      return window.matchMedia(media[item]).matches;
    });
  }

  let matched = matcher(media);
  let swiper = null;

  if (matched[0]) {
    swiper = carousel(matched[0]);
  }

  $(window).on("resize", debounce(function() {
    const matchedOnResize = matcher(media);

    if (matchedOnResize[0] && matchedOnResize.join("") !== matched.join("")) {
      matched = matchedOnResize;
      swiper && swiper.destroy(true, true);
      swiper = carousel(matchedOnResize[0]);
    }
  }, 300));
}
