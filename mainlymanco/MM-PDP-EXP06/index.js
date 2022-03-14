setTimeout(() => {
  $("body.product-details-beef-jerky-flowers-pint").append(`<script
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
  $(".modal_price")
    .append(`<span class="best_seller_tag" style="background: #B93E00"><svg width="18" height="19" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_39_18)">
  <path d="M6.94633 15.6272L4.77279 21.0024L2.87922 19.4111L0.39209 19.2883L2.67802 13.6383C2.88455 13.7237 3.08216 13.8286 3.26807 13.9515C3.46224 14.092 3.65892 14.306 3.86363 14.5329C4.24847 14.956 4.68398 15.4353 5.3252 15.64C5.54886 15.7098 5.78244 15.7441 6.0171 15.7416C6.33001 15.7347 6.64138 15.6964 6.94633 15.6272Z" fill="white"/>
  <path d="M15.6079 19.2882L13.1208 19.411L11.2273 20.9999L9.05371 15.6271C9.35833 15.6963 9.66936 15.7347 9.98193 15.7416C10.2166 15.7442 10.4502 15.7099 10.6738 15.64C11.3151 15.4353 11.7511 14.956 12.1354 14.5329C12.3416 14.306 12.5368 14.092 12.732 13.9514C12.9178 13.8285 13.1154 13.7238 13.322 13.6388L15.6079 19.2882Z" fill="white"/>
  <path d="M15.0382 5.30217C14.7873 4.53878 14.9433 3.56334 14.4727 2.92768C14.0021 2.29202 13.0016 2.13372 12.3483 1.66672C11.6951 1.19971 11.2495 0.31797 10.4728 0.0699192C10.3148 0.0216111 10.1501 -0.00201864 9.98464 -0.000107131C9.35244 -0.000107131 8.65803 0.279012 8.00276 0.279012C7.34749 0.279012 6.65007 -0.000107131 6.01788 -0.000107131C5.85158 -0.00227773 5.68598 0.021355 5.52717 0.0699192C4.75048 0.316491 4.29791 1.20415 3.65167 1.66672C3.00543 2.12928 2.00245 2.2861 1.5273 2.92768C1.05215 3.56926 1.21421 4.53681 0.962338 5.30266C0.718994 6.03892 0 6.73376 0 7.54991C0 8.36606 0.718994 9.0609 0.962338 9.79766C1.21321 10.561 1.05717 11.537 1.5273 12.1721C1.72398 12.4384 2.01047 12.6199 2.32507 12.7748C2.4214 12.8241 2.52074 12.868 2.62059 12.9123C2.72044 12.9567 2.82129 12.9986 2.91862 13.0425C3.17591 13.1478 3.42154 13.2786 3.65167 13.4331C4.29791 13.8957 4.75048 14.7823 5.52717 15.0304C5.68598 15.079 5.85158 15.1026 6.01788 15.1004C6.40773 15.1004 6.82066 14.9944 7.2356 14.9125C7.36103 14.8879 7.48647 14.8657 7.61191 14.8489C7.73198 14.8326 7.85296 14.8235 7.97416 14.8218H8.02433C8.14554 14.8236 8.26651 14.8326 8.38659 14.8489C8.51153 14.8652 8.63746 14.8879 8.7629 14.9125C9.17633 14.9939 9.59027 15.1004 9.98062 15.1004C10.1469 15.1026 10.3125 15.079 10.4713 15.0304C11.248 14.7838 11.7006 13.8962 12.3468 13.4331C12.577 13.2786 12.8226 13.1478 13.0799 13.0425C13.1802 12.9986 13.2806 12.9557 13.3784 12.9123C13.4762 12.869 13.5791 12.8226 13.6734 12.7748C13.988 12.6199 14.2755 12.4384 14.4712 12.1721C14.9418 11.537 14.7843 10.561 15.0367 9.79766C15.28 9.0609 15.9985 8.36754 15.9985 7.54991C15.9985 6.73228 15.281 6.03892 15.0382 5.30217ZM12.9519 10.9876C12.8793 11.0895 12.8027 11.1891 12.7221 11.2865C12.6454 11.3806 12.5651 11.4729 12.4823 11.5621C11.4544 12.6744 10.0363 13.3631 8.51303 13.4898C8.40833 13.4994 8.3028 13.5054 8.19643 13.5081C8.18238 13.5081 8.16833 13.5081 8.15378 13.5081C8.10361 13.5081 8.05344 13.5081 8.00025 13.5081C7.94707 13.5081 7.8999 13.5081 7.84622 13.5081H7.80357C7.6972 13.5051 7.59167 13.499 7.48697 13.4898C5.96365 13.3631 4.54558 12.6744 3.5177 11.5621C3.43492 11.4729 3.35464 11.3806 3.27787 11.2865C3.2011 11.1923 3.12083 11.0892 3.04807 10.9876C2.40586 10.0953 2.02562 9.04654 1.94891 7.9561C1.8722 6.86567 2.10198 5.7755 2.61313 4.80476C3.12428 3.83403 3.89712 3.02009 4.84717 2.45194C5.79722 1.88379 6.88791 1.58329 8 1.58329C9.11209 1.58329 10.2028 1.88379 11.1528 2.45194C12.1029 3.02009 12.8757 3.83403 13.3869 4.80476C13.898 5.7755 14.1278 6.86567 14.0511 7.9561C13.9744 9.04654 13.5941 10.0953 12.9519 10.9876Z" fill="white"/>
  <path d="M8.00026 2.22998C7.04528 2.22962 6.10721 2.4777 5.28137 2.94903C4.45553 3.42036 3.77133 4.09814 3.29828 4.91351C2.82524 5.72888 2.5802 6.65279 2.58807 7.59138C2.59595 8.52996 2.85644 9.44977 3.3431 10.2574C3.41083 10.3708 3.48359 10.4808 3.55985 10.5883C3.63611 10.6958 3.71037 10.7909 3.78965 10.8881C4.64391 11.93 5.86659 12.6168 7.21353 12.8114C7.33495 12.8298 7.45737 12.8432 7.5808 12.8518C7.69871 12.8612 7.81812 12.8666 7.93804 12.8671C7.95861 12.8671 7.97968 12.8671 8.00026 12.8671C8.02083 12.8671 8.0414 12.8671 8.06197 12.8671C8.18189 12.8671 8.3008 12.8612 8.41871 12.8523C8.54214 12.8429 8.66456 12.8296 8.78598 12.8114C10.1329 12.6168 11.3556 11.93 12.2099 10.8881C12.2901 10.7895 12.3667 10.6895 12.4397 10.5883C12.5159 10.4808 12.5902 10.3708 12.6564 10.2574C13.143 9.44984 13.4035 8.53012 13.4114 7.59162C13.4193 6.65312 13.1744 5.72928 12.7015 4.91394C12.2285 4.0986 11.5445 3.4208 10.7188 2.9494C9.89308 2.478 8.95515 2.22979 8.00026 2.22998ZM9.71771 9.90181L8.00026 9.32533L6.28229 9.90181L6.30989 8.11762L5.2181 6.69046L6.95563 6.16428L8.00026 4.70507L9.04488 6.16428L10.7799 6.69046L9.69062 8.11762L9.71771 9.90181Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_39_18">
  <rect width="16" height="21" fill="white"/>
  </clipPath>
  </defs>
  </svg> BEST SELLER</span>`);
  $(".product_section .product__images .product-gallery").hide();
  $('#shopify-section-product__main section.section.is-width-standard').append($('#shopify-section-6bff8187-4d01-448c-b804-d59044790bda'));
  $(".product_section .product__images").append(`

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

  setTimeout(() => {
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
  }, 600)




}, 5200);


