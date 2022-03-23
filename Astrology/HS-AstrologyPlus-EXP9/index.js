$("body").append(`
<script
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"
></script>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>`);

$("head").append(`
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"
  integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  />
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">

<style>
.single-product div.product .woocommerce-product-gallery .flex-control-thumbs {
  display: none;
}
#product-96410 .related.products {
  display: none;
}

/* here products */

.optimize_carousel_popup {
  display: none;
}
.optimize_carousel_popup a {
  width: 40%;
}
.optimize_carousel_popup a img {
  width: 100%;
}

.opt_main_mobile {
  display: none;
}
body.v3 h2 {
  line-height: 1.3;
}
section.related {
  display: none;
}

.optimize_what {
  margin-bottom: 60px;
  margin-top: 30px;
}
.opt_row {
  display: flex;
  gap: 10px;
  justify-content: start;
  flex-wrap: wrap;
  align-items: stretch;
}
.optimize_what > h2 {
  text-align: center;
  margin-bottom: 25px !important;
}
.optimize_what p.description {
  width: 70%;
  text-align: center;
  font-family: "Khand", sans-serif;
  margin: auto;
  font-size: 1.3rem;
  margin-bottom: 40px;
  font-weight: normal;
  margin-bottom: 25px !important;
}
.optimize_what .products img,
.optimize_other_bought img {
  width: 100%;
  display: block;
  border-radius: 0;
  transition: all 0.2s ease-in-out;
}
.optimize_what .products img {
  cursor: pointer;
}
.optimize_what .products .opt_product,
.optimize_other_bought .opt_product {
  padding: 10px;
  width: 30.5%;
}
.opt_product:hover .opt_info_product .title {
  text-decoration: underline;
}
.opt_product:hover .opt_info_product p {
  text-decoration: underline;
}
.opt_product:hover .opt_product img {
  transform: scale(1.1);
}
.opt_product .opt_second_img{
  display: none;
}
.optimize_what .opt_info_product p {
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
  font-family: merriweather, serif;
  transition: all 0.2s ease-in-out;
}
.opt_info_product .title {
  margin: 15px 0;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
}
.opt_product p.desc {
  margin-bottom: 10px;
}
.opt_product p.price {
  margin-bottom: 0;
  font-family: khand, sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.optimize_what .opt_product p.price {
  padding-top: 10px;
}
.optimize_join {
  display: block;
  width: 154px;
  margin: 70px auto 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 15px 6px 15px;
  background-color: #4d48af;
  color: #fff;
  border-radius: 7px;
  font-family: "Khand", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.optimize_join:hover {
  background-color: #fff;
  color: #4d48af;
}

.summary.entry-summary .product_title.entry-title,
.summary.entry-summary .woocommerce-product-details__short-description {
  display: block;
}
.opt_image_banner {
  padding-bottom: 20px;
  display: none;
  margin: auto;
  text-align: center;
}
.opt_image_banner img {
  width: 100%;
}
.woocommerce-product-gallery .flex-control-nav.flex-control-thumbs,
.woocommerce-product-gallery .flex-viewport {
  display: block;
}

.optimize_product_info {
  padding: 40px 0;
}
.optimize_row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.optimize_product_info .optimize_head {
  text-align: center;
}
.optimize_product_info .optimize_product_item {
  text-align: center;
  padding: 10px;
}
.item_image img {
  max-width: 200px;
  margin: auto;
}
.before_last{
  margin-left: 17%;
}
.woocommerce-product-gallery .flex-control-nav.flex-control-thumbs {
  display: none;
}
@media (max-width: 767px) {
  .optimize_row {
    flex-direction: column;
  }
}

@media (max-width: 767px) and (min-width: 581px) {
  .opt_cust .opt_cust_img {
    width: 10%;
  }
  .opt_cust {
    margin-bottom: 30px;
  }
}
@media (max-width: 580px) {
  .opt_row {
    flex-direction: column;
  }
  .optimize_what .products .opt_product,
  .optimize_other_bought .opt_product {
    padding: 10px;
    width: 90%;
    margin: auto;
  }
  .opt_product p.price {
    font-size: 18px;
  }
  .optimize_what > p {
    width: 99%;
  }
  .opt_for_big {
    display: none;
    padding-top: 40px;
    padding-bottom: 10px;
  }
  .optimize_what p.description {
    width: 100%;
  }
  .opt_other_first {
    display: none;
  }
  .opt_other_second {
    display: block;
  }
  .opt_main_mobile {
    display: block;
  }
  .opt_image_banner {
    margin-bottom: 15px;
    display: block;
  }
  .woocommerce-product-gallery .flex-control-nav.flex-control-thumbs,
  .woocommerce-product-gallery .flex-viewport {
    display: none;
  }
  .before_last{
    margin-left: 0;
  }
}
.optimize_what_mobile .opt_img_product img {
  margin: auto;
}
.optimize_what_mobile .opt_info_product h4.title {
  text-align: center;
}
.optimize_what_mobile .opt_info_product p.desc {
  margin-top: 15px;
  font-size: 14px;
}
.optimize_what_mobile .slider_arrows{
  top: 37% !important;
}
</style>
`);

$(".optimize_product_info").after(`
<section class="optimize_what">
<h2 class="h2_title">What Does Astrology+ Have to Offer?</h2>
<p class="description">
  Discover more about your past, present, and future with premium readings
  and charts. Your Astrology+ Membership includes all of this, and more...
</p>
<div class="products opt_row">
  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
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
        Take charge of your romantic life, career, and personal
        aspirations in 2022. Discover your greatest opportunities for
        growth and success.
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
    </div>
    <a
      class="opt_info_product"
      href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store"
      target="_blank"
    >
      <h4 class="title">Birth Horoscope (+ Natal Chart)</h4>
      <p class="desc">
        Dig deep into your personality traits, your unique
        characteristics, and your potential for growth based on the stars’
        alignment at the moment of your birth.
      </p>
      <p class="price">$24.95</p>
    </a>
  </div>

  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/jR32dT1/birthchartstore2-010-1.png"
        alt="natal moon report"
      />
      <img
        class="opt_second_img"
        src="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
        alt="Monthly Full Moon"
      />
    </div>
    <a class="opt_info_product" href="#">
      <h4 class="title">Monthly Full Moon Readings</h4>
      <p class="desc">
        Align yourself with the universe, let go of negative energy, and
        get a fresh start to push towards your goals each month.
      </p>
      <p class="price">(Astrology+ Exclusive!)</p>
    </a>
  </div>

  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/7tJV40m/birthchartstore2-010-2.png"
        alt="Daily Personal Horoscope"
      />
    </div>
    <a class="opt_info_product" href="#">
      <h4 class="title">
        Daily Personal Horoscope Based on Your Birth Chart
      </h4>
      <p class="desc">
        Take charge of your romantic life, career, and personal
        aspirations in 2022. Discover your greatest opportunities for
        growth and success.
      </p>
      <p class="price">$25 Value</p>
    </a>
  </div>

  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/2kXfLDK/birthchartstore2-010-3.png"
        alt="Today’s Astrology"
      />
      <img
        class="opt_second_img"
        src="https://i.ibb.co/tpYYVss/todays-astrology-min.png"
        alt="Today’s Astrology2"
      />
    </div>
    <a class="opt_info_product" href="#">
      <h4 class="title">Today’s Astrology</h4>
      <p class="desc">
        Stay in sync with every day planetary transits and more with daily
        astrological updates.
      </p>
      <p class="price">(Astrology+ Exclusive!)</p>
    </a>
  </div>

  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/rfyfhK9/birthchartstore2-010-1-1.png"
        alt="Today’s Astrology"
      />
      <img
        class="opt_second_img"
        src="https://i.ibb.co/VwD4X3y/weeklyhoro-aplus-min.png"
        alt="Today’s Astrology2"
      />
    </div>
    <a class="opt_info_product" href="#">
      <h4 class="title">Premium Weekly Horoscope</h4>
      <p class="desc">
        Get full clarity to prepare for the week ahead with personal
        weekly horoscopes based on your unique birth chart.
      </p>
      <p class="price">(Astrology+ Exclusive!)</p>
    </a>
  </div>
  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/fDQ5FFp/birthchartstore2-010-3-1.png"
        alt="Today’s Astrology"
      />
      <img
        class="opt_second_img"
        src="https://i.ibb.co/BgpCWZ8/astrologycalendar-aplus-min.png"
        alt="Today’s Astrology2"
      />
    </div>
    <a class="opt_info_product" href="#">
      <h4 class="title">Personal Astrology Calendar</h4>
      <p class="desc">
        Keep up with all major astrological events synced directly to your
        phone and customized for your sign.
      </p>
      <p class="price">(Astrology+ Exclusive!)</p>
    </a>
  </div>

  <div class="opt_product">
    <div class="opt_img_product carousel_kh">
      <img
        src="https://i.ibb.co/pJ3jXq4/birthchartstore2-010-1-2.png"
        alt="Today’s Astrology"
      />
      <img
        class="opt_second_img"
        src="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
        alt="Today’s Astrology2"
      />
    </div>
    <a class="opt_info_product" href="#" target="_blank">
      <h4 class="title">Live Birth Chart Reading</h4>
      <p class="desc">
        Have your birth chart interpreted by an expert. Dig into your
        personality traits, strengths, and opportunities with guidance
        from an astrologer.
      </p>
      <p class="price">(Annual Plan Only)</p>
    </a>
  </div>
</div>

<span class="optimize_join">JOIN ASTROLOGY+</span>
</section>

<div class="optimize_carousel_popup">
<a
  href="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-768x768.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/jR32dT1/birthchartstore2-010-1.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/jR32dT1/birthchartstore2-010-1.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/7tJV40m/birthchartstore2-010-2.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/7tJV40m/birthchartstore2-010-2.png"
    alt="natal moon report"
  />
</a>

<a
  href="https://i.ibb.co/2kXfLDK/birthchartstore2-010-3.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/2kXfLDK/birthchartstore2-010-3.png"
    alt="natal moon report"
  />
</a>

<a
  href="https://i.ibb.co/tpYYVss/todays-astrology-min.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/tpYYVss/todays-astrology-min.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/rfyfhK9/birthchartstore2-010-1-1.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/rfyfhK9/birthchartstore2-010-1-1.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/VwD4X3y/weeklyhoro-aplus-min.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/VwD4X3y/weeklyhoro-aplus-min.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/fDQ5FFp/birthchartstore2-010-3-1.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/fDQ5FFp/birthchartstore2-010-3-1.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/BgpCWZ8/astrologycalendar-aplus-min.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/BgpCWZ8/astrologycalendar-aplus-min.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/pJ3jXq4/birthchartstore2-010-1-2.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/pJ3jXq4/birthchartstore2-010-1-2.png"
    alt="natal moon report"
  />
</a>
<a
  href="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
  data-fancybox="gallery"
>
  <img
    class="fancybox-image"
    src="https://i.ibb.co/Z6xq067/bc-aplus-min.png"
    alt="natal moon report"
  />
</a>
</div>
`);

$(".optimize_join").on("click", function () {
  var scrollTo = $("form.variations_form.cart").offset().top - 20;
  $("html, body").animate(
    {
      scrollTop: scrollTo,
    },
    700
  );
});

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


}, 1000)
