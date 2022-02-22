setTimeout(() => {
  $("body").append(`
  <script
  type="text/javascript"
  src="//code.jquery.com/jquery-1.11.0.min.js"
  ></script>
  <script
    type="text/javascript"
    src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
  ></script>
  <script
    type="text/javascript"
    src="https://kenwheeler.github.io/slick/slick/slick.js"
  ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>`
  );

  // appned styles to the head
  $('head').append(`
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
  `);

  $('head').append(`
  <style>
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
  `);

  $('#main').after(`
  <section class="optimize_what">
  <h2 class="h2_title">What Does Astrology+ Have to Offer?</h2>
  <p class="description">
    Discover more about your past, present, and future with premium readings and
    charts. Your Astrology+ Membership includes all of this, and more...
  </p>
  <div class="products opt_row">
    <div class="opt_product">
      <div class="opt_img_product carousel_kh">
        <img
          src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-300x300.png"
          alt="natal moon report"
        />
        <img
          src="https://i.ibb.co/yPhrZFj/Natal-Moon-Report-min.png"
          alt="natal moon report"
        />
      </div>
      <a
        class="opt_info_product"
        href="https://shop.astrology.com/product/natal-moon-report/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
        target="_blank"
      >
        <h4 class="title">Natal Moon Report</h4>
        <p class="desc">
          Learn about your own personal connection to the moon. Understand how
          your moon sign affects your emotional well-being so you can truly
          master your emotions.
        </p>
        <p class="price">$11.95</p>
      </a>
    </div>
    <div class="opt_product">
      <div class="opt_img_product carousel_kh">
        <img
          src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
          alt="2022 Premium Horoscope"
        />
        <img
          src="https://i.ibb.co/Q98s5kb/2022-Premium-Horoscope-min.png"
          alt="2022 Premium Horoscope"
        />
      </div>
      <a
        class="opt_info_product"
        href="https://shop.astrology.com/product/yearly-horoscope/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
        target="_blank"
      >
        <h4 class="title">2022 Premium Horoscope</h4>
        <p class="desc">
          Take charge of your romantic life, career, and personal aspirations in
          2022. Discover your greatest opportunities for growth and success.
        </p>
        <p class="price">From: $19.99 / year</p>
      </a>
    </div>
    <div class="opt_product">
      <div class="opt_img_product carousel_kh">
        <img
          src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
          alt="Birth Horoscope (+ Natal Chart)"
        />
        <img
          src="https://i.ibb.co/7ghZhd1/Birth-Horoscope-Natal-Chart-min.png"
          alt="Birth Horoscope (+ Natal Chart)"
        />
      </div>
      <a
        class="opt_info_product"
        href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
        target="_blank"
      >
        <h4 class="title">Birth Horoscope (+ Natal Chart)</h4>
        <p class="desc">
          Dig deep into your personality traits, your unique characteristics,
          and your potential for growth based on the stars’ alignment at the
          moment of your birth.
        </p>
        <p class="price">$24.95</p>
      </a>
    </div>
  </div>
  <span class="optimize_join">JOIN ASTROLOGY+</span>
</section>

<div class="optimize_carousel_popup">
  <a
    href="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-300x300.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-768x768.png"
      alt="natal moon report"
    />
  </a>
  <a
    href="https://i.ibb.co/yPhrZFj/Natal-Moon-Report-min.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://i.ibb.co/yPhrZFj/Natal-Moon-Report-min.png"
      alt="natal moon report"
    />
  </a>
</div>
<div class="optimize_carousel_popup">
  <a
    href="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
      alt="2022 Premium Horoscope"
    />
  </a>
  <a
    href="https://i.ibb.co/Q98s5kb/2022-Premium-Horoscope-min.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://i.ibb.co/Q98s5kb/2022-Premium-Horoscope-min.png"
      alt="2022 Premium Horoscope"
    />
  </a>
</div>

<div class="optimize_carousel_popup">
  <a
    href="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
      alt="Birth Horoscope (+ Natal Chart)"
    />
  </a>
  <a
    href="https://i.ibb.co/7ghZhd1/Birth-Horoscope-Natal-Chart-min.png"
    data-fancybox="gallery"
  >
    <img
      class="fancybox-image"
      src="https://i.ibb.co/7ghZhd1/Birth-Horoscope-Natal-Chart-min.png"
      alt="Birth Horoscope (+ Natal Chart)"
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
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            prevArrow: `<span class="slider_arrows"><img src="https://i.ibb.co/FWSQhVN/outline-navigate-before-black-24dp.png" alt="back"></span>`,
            nextArrow: `<span class="slider_arrows"><img src="https://i.ibb.co/Db7LpcQ/outline-navigate-next-black-24dp.png" alt="next"></span>`
          }
        }
      ]
    });

    $("[data-fancybox]").fancybox({
      animationEffect: "tube",
    });

    $(".opt_img_product img").on("click", function () {
      var imgSrc = $(this).attr("src");
      console.log(imgSrc);
      $(`.optimize_carousel_popup a[href="${imgSrc}"]`).click();
    });
  }, 2000);
}, 4000)




$('head').append(`
<link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
<link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css"></link>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
`);
$(`body`).append(`<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js"></script>`);

$(`#main`).after(`<section class="optimize_what">
<h2 class="h2_title">What Does Astrology+ Have to Offer?</h2>
<p class="description">
  Discover more about your past, present, and future with premium readings and
  charts. Your Astrology+ Membership includes all of this, and more...
</p>
<div class="products opt_row">
  <div class="opt_product">
    <div class="opt_img_product carousel_kh splide1">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-768x768.png"
              alt="natal moon report"
            />
          </li>
          <li class="splide__slide">
            <img
              src="https://i.ibb.co/yPhrZFj/Natal-Moon-Report-min.png"
              alt="natal moon report"
            />
          </li>
        </ul>
      </div>
    </div>
    <a
      class="opt_info_product"
      href="https://shop.astrology.com/product/natal-moon-report/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
      target="_blank"
    >
      <h4 class="title">Natal Moon Report</h4>
      <p class="desc">
        Learn about your own personal connection to the moon. Understand how
        your moon sign affects your emotional well-being so you can truly
        master your emotions.
      </p>
      <p class="price">$11.95</p>
    </a>
  </div>
  <div class="opt_product">
    <div class="opt_img_product carousel_kh"></div>
    <div class="opt_img_product carousel_kh splide2">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
              alt="2022 Premium Horoscope"
            />
          </li>
          <li class="splide__slide">
            <img
              src="https://i.ibb.co/Q98s5kb/2022-Premium-Horoscope-min.png"
              alt="2022 Premium Horoscope"
            />
          </li>
        </ul>
      </div>
    </div>
    <a
      class="opt_info_product"
      href="https://shop.astrology.com/product/yearly-horoscope/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
      target="_blank"
    >
      <h4 class="title">2022 Premium Horoscope</h4>
      <p class="desc">
        Take charge of your romantic life, career, and personal aspirations in
        2022. Discover your greatest opportunities for growth and success.
      </p>
      <p class="price">From: $19.99 / year</p>
    </a>
  </div>
  <div class="opt_product">
    <div class="opt_img_product carousel_kh"></div>
    <div class="opt_img_product carousel_kh splide3">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </li>
          <li class="splide__slide">
            <img
              src="https://i.ibb.co/7ghZhd1/Birth-Horoscope-Natal-Chart-min.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </li>
        </ul>
      </div>
    </div>
    <a
      class="opt_info_product"
      href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
      target="_blank"
    >
      <h4 class="title">Birth Horoscope (+ Natal Chart)</h4>
      <p class="desc">
        Dig deep into your personality traits, your unique characteristics,
        and your potential for growth based on the stars’ alignment at the
        moment of your birth.
      </p>
      <p class="price">$24.95</p>
    </a>
  </div>
</div>
<span class="optimize_join">JOIN ASTROLOGY+</span>
</section>`)

$('head').append(`
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
`);
setTimeout(() => {
  $(`#main`).after(`
  <span>
  <i class="fas fa-angle-right"></i>
  </span>
  
  `)

}, 500);