$(document).ready(function () {
  $('head').append(`
  <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
  <style>
  .carousel_kh_container, .carousel_thumbnails_container{
    display: none;
  }

  .carousel_thumbnails {
    width: 80%;
    margin: 0 auto;
    display: flex !important;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  .carousel_thumbnails img {
    width: 100%;
    cursor: pointer;
  }
  .carousel-thumb {
    opacity: 0.3;
    transition: all 0.3s ease-in-out;
  }
  .carousel-thumb.active {
    opacity: 1;
  }

  .optimize_carousel_popup {
    display: none;
  }
  .optimize_carousel_popup a {
    width: 40%;
  }
  .optimize_carousel_popup a img {
    width: 100%;
  }

  </style>  
  `)
  $('body').append(`<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>`)

  $('#shopify-section-product__main > section > div > div > div.product__images.one-half.column.medium-down--one-whole').append(`
  <div class="carousel_kh_container">
  <div class="carousel_kh carousel-main">
      <div class="optimize_carousel_cell">
          <img
          src="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
          alt="Beef Jerky Flower Bouquet"
          />
      </div>
      <div class="optimize_carousel_cell">
          <img
          src="https://i.ibb.co/9phWjmP/beef.jpg"
          alt="Beef Jerky Flower Bouquet review"
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
    </div>
</div>
  <div class="carousel_thumbnails_container">
    <div class="carousel_thumbnails">
      <div class="carousel-thumb">
          <img
          data-index="0"
          src="//cdn.shopify.com/s/files/1/1762/4231/products/Beef-Jerky-Flower-Bouquet_2048_compressed_1200x.jpg?v=1627803667"
          alt="Beef Jerky Flower Bouquet"
          />
      </div>
      <div class="carousel-thumb active">
          <img
          data-index="1"
          src="https://i.ibb.co/9phWjmP/beef.jpg"
          alt="Beef Jerky Flower Bouquet review"
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
  href="https://i.ibb.co/9phWjmP/beef.jpg"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/9phWjmP/beef.jpg"
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
</div>
  `)

  setTimeout(() => {

    $('.carousel_kh_container').show();
    $('.carousel_thumbnails_container').show();
    $('#shopify-section-product__main > section > div > div > div.product__images.one-half.column.medium-down--one-whole > div.product-gallery.product-gallery__thumbnails--true.product-gallery--media-amount-4.slideshow-transition--fade.product-gallery--bottom-thumbnails.display-arrows--true').hide();
    var $carousel = $('.carousel_kh').flickity({
      initialIndex: 1,
      pageDots: false,
      arrowShape: "M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z"
    }
    );
    var flkty = $carousel.data('flickity');

    $("[data-fancybox]").fancybox({
      animationEffect: "tube",
    });

    $(".carousel-thumb img").on("click", function () {
      var index = +$(this).data("index");
      $carousel.flickity("select", index);

      $(this).parent().siblings().removeClass("active");
      $(this).parent().addClass("active");
    });

    $(".optimize_carousel_cell img").on("click", function () {
      var imgSrc = $(this).attr("src");
      $(`.optimize_carousel_popup a[href="${imgSrc}"]`).click();
    });

    $('button.flickity-button').on('click', function () {
      var i = flkty.selectedIndex;
      $(`.carousel-thumb img[data-index="${i}"]`).parent().addClass("active")
      $(`.carousel-thumb img[data-index="${i}"]`).parent().siblings().removeClass("active");
    })
  }, 2000);

});