$(document).ready(function () {
  var $carousel = $(".carousel_kh");
  $carousel.slick({
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<span class="prev_arrow slider_arrows"
    ><svg class="flickity-button-icon" viewBox="0 0 100 100">
      <path
        d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z"
        class="arrow"
      ></path></svg>
  </span>`,
    nextArrow: `<span class="next_arrow slider_arrows"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></span>`,
  });

  // carousel thumbnail click
  $(".carousel-thumb img").on("click", function () {
    var index = +$(this).data("index");
    $carousel.slick("slickGoTo", index, false);

    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });

  $("[data-fancybox]").fancybox({
    animationEffect: "tube",
  });

  $(".optimize_carousel_cell img").on("click", function () {
    var imgSrc = $(this).attr("src");
    $(`.optimize_carousel_popup a[href="${imgSrc}"]`).click();
  });
});
