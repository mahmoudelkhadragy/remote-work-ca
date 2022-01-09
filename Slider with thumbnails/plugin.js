$(document).ready(function () {
  $("body").append(`<script
    type="text/javascript"
    src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script
    type="text/javascript"
    src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
    ></script>
    <script
    type="text/javascript"
    src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>`);
  $(".product_section .product__images .product-gallery").hide();
  $(".product_section .product__images").append(`
        <div class="carousel_kh carousel-main">
        <div class="optimize_carousel_cell">
            <img
            src="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="optimize_carousel_cell">
            <img
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2048-optimized_1200x.jpg?v=1627803958"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="optimize_carousel_cell">
            <img
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2-2048px-optimized_1200x.jpg?v=1627803777"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="optimize_carousel_cell">
            <img
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-14435002318931_1200x.png?v=1627803667"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="optimize_carousel_cell">
            <img
            src="https://i.ibb.co/mTVLpS1/Group-29.png"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="optimize_carousel_cell">
            <img
            src="https://i.ibb.co/M27hJKm/Group-35.png"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        </div>
        <div class="carousel_thumbnails">
        <div class="carousel-thumb active">
            <img
            data-index="0"
            src="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="carousel-thumb">
            <img
            data-index="1"
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2048-optimized_1200x.jpg?v=1627803958"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="carousel-thumb">
            <img
            data-index="2"
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2-2048px-optimized_1200x.jpg?v=1627803777"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="carousel-thumb">
            <img
            data-index="3"
            src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-14435002318931_1200x.png?v=1627803667"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="carousel-thumb">
            <img
            data-index="4"
            src="https://i.ibb.co/mTVLpS1/Group-29.png"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        <div class="carousel-thumb">
            <img
            data-index="5"
            src="https://i.ibb.co/M27hJKm/Group-35.png"
            alt="Beef Jerky Flower Bouquet"
            />
        </div>
        </div>
    </div>
    <div class="optimize_carousel_popup">
      <a
        href="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
        data-fancybox="gallery"
      >
        <img
          class="fancybox-image"
          src="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
      <a
        href="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2048-optimized_1200x.jpg?v=1627803958"
        data-fancybox="gallery"
      >
        <img
          class="fancybox-image"
          src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2048-optimized_1200x.jpg?v=1627803958"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
      <a
        href="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2-2048px-optimized_1200x.jpg?v=1627803777"
        data-fancybox="gallery"
      >
        <img
          class="fancybox-image"
          src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-unboxing-2-2048px-optimized_1200x.jpg?v=1627803777"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
      <a
        href="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-14435002318931_1200x.png?v=1627803667"
        data-fancybox="gallery"
      >
        <img
          class="fancybox-image"
          src="//cdn.shopify.com/s/files/1/1762/4231/products/beef-jerky-flower-bouquet-14435002318931_1200x.png?v=1627803667"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
      <a href="https://i.ibb.co/mTVLpS1/Group-29.png" data-fancybox="gallery">
        <img
          class="fancybox-image"
          src="https://i.ibb.co/mTVLpS1/Group-29.png"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
      <a href="https://i.ibb.co/M27hJKm/Group-35.png" data-fancybox="gallery">
        <img
          class="fancybox-image"
          src="https://i.ibb.co/M27hJKm/Group-35.png"
          alt="Beef Jerky Flower Bouquet"
        />
      </a>
    </div>
  `);

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
