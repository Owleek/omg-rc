function carouselCustomPagination (swiper, current, total) {
  let bullets = "";

  for(var i = 0; i < total; i += 1) {
    bullets += "<div class='carousel-dot swiper-pagination-bullet"+ (current === i + 1 ? " carousel-dot-active" : "") +"'><span></span></div>";
  }

  return "<div class='carousel-dots'>"+ bullets +"</div>" +
    "<div class='items-counter'>" +
    "<span class='items-counter__current'>"+ (current < 10 ? "0" + current : current) +"</span>" +
    "<span class='items-counter__total'>"+ (total < 10 ? "0" + total : total) +"</span>" +
    "</div>";
}
