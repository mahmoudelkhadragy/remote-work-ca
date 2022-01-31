$("head").append(`
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
<style>
.grid__rail .other-signs{
    display: none;
}
.zodiac-sign-banner:hover .slide-control,
.zodiac-sign-banner .slide-control{
    display: none;
}

.more-horoscopes-carousel{
    display: none;
}
.optimize_products .products_row {
    display: flex;
    gap: 20px;
}
.opt_img_product img {
    max-width: 180px;
    transition: all .2s ease-in-out;
}
.opt_product{
    text-align: center;
}
.opt_info_product p {
    font-size: 15px;
    text-transform: initial;
    transition: all .2s ease-in-out;
}
.opt_info_product p.title {
  margin: 8px 0;
  line-height: 24px;
}
.opt_info_product p.price {
  margin: 0;
}
.opt_coursel_mobile{
    display: none !important;
}
.opt_product:hover img{
    transform: scale(1.1);
}
.opt_product:hover .opt_info_product p{
    text-decoration: underline;
}
@media (max-width: 830px){
    .opt_img_product img {
        max-width: 120px;
      }
}
@media (max-width: 576px){
    .opt_coursel_mobile{
        display: block !important;
    }
    .products_row.opt_desktop{
        display:none;
    }
    .opt_coursel_mobile .opt_img_product img {
        max-width: 135px;
    }
    .opt_coursel_mobile .opt_info_product p{
        padding: 0 12px;
        font-size: 14px;
    }
    .flickity-prev-next-button{
        width: 30px !important;
        height: 30px !important;
    }
    .flickity-viewport{
        height: 230px;
    }
}
</style>
`);
$("body").append(`
<script
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
`);
$(`.latest-article-card`).after(`
<div class="aplus-promo d_card_t_none_m_card hide-medium my-3">
<div class="ad-card-join-aplus aplus-card mx-auto border-rad-4">
<div class="aplus-card__content flex flex-column">
<div class="aplus-card__logo"><img src="/images-US/astrology-plus/aplus-graphic-half-circle.png" width="200" height="115" alt="astrology plus logo"></div>
<div class="aplus-card__title">Your Customized Cosmic Membership</div>
<div class="aplus-card__description flex-grow-1">Daily, weekly, monthly, and yearly personalized astrological guidance at your fingertips.</div>
<div class="aplus-card__cta"><a href="https://shop.astrology.com/product/astrology-plus/?utm_source=direct&amp;utm_medium=acquisition&amp;utm_campaign=aplus-widget" target="_blank" class="btn btn__primary btn--md">Join Astrology+</a></div>
</div>
</div>
</div>
`);
$(".daily-work").after(`
<section class="optimize_products">
      <h2>More Personalized Products</h2>
      <div class="products_row opt_desktop">
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/yearly-horoscope/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">2022 Premium Horoscope</p>
            <p class="price">From: $19.99 / year</p>
          </div>
        </a>

        <a
          class="opt_product"
          href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-416x416.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">Birth Horoscope (+ Natal Chart)</p>
            <p class="price">$24.95</p>
          </div>
        </a>
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/natal-moon-report/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-416x416.png"
              alt="Natal Moon Report"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">Natal Moon Report</p>
            <p class="price">$11.95</p>
          </div>
        </a>
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/january-2022-horoscope/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/12/january-2022-horoscope-1-324x324.jpeg"
              alt="january 2022 horoscope"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">January Horoscope</p>
            <p class="price">$14.95</p>
          </div>
        </a>
      </div>
      <div class="opt_coursel_mobile">
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/yearly-horoscope/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">2022 Premium Horoscope</p>
            <p class="price">From: $19.99 / year</p>
          </div>
        </a>

        <a
          class="opt_product"
          href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-324x324.png"
              alt="Birth Horoscope (+ Natal Chart)"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">Birth Horoscope (+ Natal Chart)</p>
            <p class="price">$24.95</p>
          </div>
        </a>
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/natal-moon-report/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-416x416.png"
              alt="Natal Moon Report"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">Natal Moon Report</p>
            <p class="price">$11.95</p>
          </div>
        </a>
        <a
          class="opt_product"
          href="https://shop.astrology.com/product/january-2022-horoscope/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
          target="_blank"
        >
          <div class="opt_img_product">
            <img
              src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/12/january-2022-horoscope-1-324x324.jpeg"
              alt="january 2022 horoscope"
            />
          </div>
          <div class="opt_info_product">
            <p class="title">January Horoscope</p>
            <p class="price">$14.95</p>
          </div>
        </a>
      </div>
    </section>
`);

setTimeout(() => {
  $(".opt_coursel_mobile").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
  });
}, 1200);
