//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js
//= ../vendors/swiper-4.5.0/swiper.min.js
//= ../vendors/typed-v2.0.9/typed.min.js
//= ../vendors/fancybox-v3.5.7/jquery.fancybox.min.js
//= ../vendors/jquery.inview.min.js
//= ../vendors/Inputmask-5.x/jquery.inputmask.min.js

//= ./utils/debounce.js
//= ./utils/carouselInitializer.js
//= ./utils/carouselCustomPagination.js

//= ./youtube-carousel.js
//= ./cases-carousel.js
//= ./team-carousel.js
//= ./partner-carousel.js
//= ./promotion-partners-carousel.js
//= ./search-trigger.js

$(document).ready(function() {

  initTypewriter();
  initTeamParalax();
  casesCarousel();
  youtubeCarousel();
  teamCarousel();
  partnerCarousel();
  promotionPartnersCarousel();
  searchTrigger();

  $('.request-trigger').click(function() {
      $(this).hide();
      $(this).next('.basic-form').addClass('basic-form__active');
    });

  $('.request-success .button').click(function() {
      $(this) 
        .parents('.consult-request')
        .find('.consult-request__content')
        .show();
      $(this)
        .parents('.request-success')
        .hide();
    });

  $('.block-fadein').one('inview', function() {
      $(this).addClass('inview');
    });

  $('.header__menu').click(function() {
      $('body').toggleClass('mob-menu__open')
    });

  $('.js-phone-mask').inputmask({ mask: "+7 (999) 999 9999"});
});



function showConsReqSucMes(event) {
  var $requstForm = $(event.target).parents('.consult-request');
  $requstForm.find('.consult-request__content').hide();
  $requstForm.find('.basic-form').removeClass('basic-form__active');
  $requstForm.find('.request-trigger').show();
  $requstForm.find('.request-success').show();
}


function initTeamParalax() {
  var $teamSlideImage = $('.team-paralax .team-paralax__image'),
      randomImageIndex = random(0, $teamSlideImage.find('img').length - 1);

  $teamSlideImage.find('img').eq(randomImageIndex).addClass('vis');
  setTimeout(() => {
    $('.team-paralax').addClass('present');
  }, 500);
}

function initTypewriter() {
  $('[data-typed]').each(function() {
      $(this).find('[data-typed_item]').each(function() {
          $(this).css({
              visibility: 'hidden'
            })
            .data('text', $(this).text())
            .empty();

          $('<span>').css({
              height: 0,
              display: 'inline-block'
            })
            .addClass('typedNode')
            .appendTo($(this))
      });

    $(this).data('startTyper', () => {
        startTyper($(this).find('[data-typed_item]'));
      });
  });

  function startTyper($items) {
    for (var i = 0; i < $items.length; i++) {
      let $item = $($items[i]);
      if (!$item.data('type_end')) {
        $item.css({
          visibility: 'visible'
        })
        let string = $item.data('text'),
            node = $item.find('.typedNode').get(0);
        return runTypedPlugin(node, [string], () => {
          $item
            .text(string)
            .data('type_end', true);
            startTyper($items);
        });
      };
    }

    $items.each(function() {
      if ($(this).data('typed_strings')) {
        setTimeout(() => {

          $(this).empty();
          $('<span>').css({
              height: 0,
              display: 'inline-block'
            })
            .appendTo($(this))

          runTypedPlugin(
            $(this).find('span').get(0), 
            $(this).data('typed_strings'))

        }, 1000);
      }
    });
  };

  function runTypedPlugin(node, string, callback = null) {
    new Typed(node, {
      strings: string,
      typeSpeed: 50,
      backSpeed: 0,
      fadeOut: true,
      backDelay: 2000,
      loop: string.length > 1,
      onStringTyped: (pos, self) => {
        if (callback) {
          self.destroy();
        }
      },
      onDestroy: callback
    });
  };

  setTimeout(() => {
    $('[data-typed]')
      .one('inview', function() {
        $(this).data('startTyper')();
      });
  })
}

// utils

function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
