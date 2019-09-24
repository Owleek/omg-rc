function searchTrigger() {
  const $header = $(".header");
  const $searchIcon = $header.find(".js-search-icon");
  const $searchBar = $header.find(".search-bar");
  const $searchInput = $searchBar.find(".search-bar__input");
  const $clear = $searchBar.find(".search-bar__clear");
  const $doc = $(document);

  $searchIcon.on("click", function(event) {
    event.stopPropagation();

    $header.addClass("header_search-active");
    $searchInput.focus();

    $doc.on("keyup", onSearchBarEscapeListener);
    $doc.on("click", onSearchBarCloseListener);
    $clear.on("click", function() {
      $searchInput.val("");
      triggerClearButton();
    });
    $searchInput.on("keyup", triggerClearButton);
  });

  function triggerClearButton() {
    if ($searchInput.val()) {
      $clear.addClass("search-bar__clear_active");
    } else {
      $clear.removeClass("search-bar__clear_active");
    }
  }

  function onSearchBarCloseListener(event) {
    if(!$searchBar.get(0).contains(event.target)) {
      handleSearchBarClose();
    }
  }

  function onSearchBarEscapeListener(event) {
    // 27 escape key code
    if (event.which === 27) {
      handleSearchBarClose();
    }
  }

  function handleSearchBarClose() {
    $header.removeClass("header_search-active");
    $doc.off("click", onSearchBarCloseListener);
    $doc.off("keyup", onSearchBarEscapeListener);
    $searchInput.val("");
    $searchInput.off("keyup", triggerClearButton);
    triggerClearButton();
    $clear.off("click");
  }
}
