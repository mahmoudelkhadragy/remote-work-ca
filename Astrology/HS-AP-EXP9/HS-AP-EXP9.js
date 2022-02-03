$("head").append(`
 <style>
 .optimize_product_info {
  display: none;
}
.optimize_what {
  margin-bottom: 60px;
}
.opt_row {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: stretch;
}
.optimize_what h2 {
  text-align: center;
  margin-bottom: 15px;
}
.optimize_what > p {
  width: 70%;
  text-align: center;
  font-family: "Khand", sans-serif;
  margin: auto;
  font-size: 1.3rem;
  margin-bottom: 40px;
  font-weight: normal;
}
.optimize_what .products img,
.optimize_other_bought img {
  width: 100%;
  display: block;
  border-radius: 0;
  transition: all 0.2s ease-in-out;
}
.optimize_what .products .opt_product,
.optimize_other_bought .opt_product{
  padding: 10px;
  width: 31%;
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
}
.optimize_join {
  display: block;
  width: 154px;
  margin: auto;
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

.optimize_other_bought {
  text-align: center;
  margin: 50px 0;
}


.opt_side_review{
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 10px;
}
.opt_customer_rev q{
  color: #fff;
  font-family: merriweather,serif;
}
.opt_cust{
  display: flex;
  gap: 15px
  align-items: center;
  margin-top: 15px;
}
.opt_customer_rev q::before,
.opt_customer_rev q::after {
  display: inline-block;
  font-weight: bold;
  transform: scale(2);
  line-height: 27px;
}
.opt_cust_img img{
  width 100%;
}
.opt_cust .opt_cust_img{
  width: 30%
}
.opt_cust_info p{
  margin-bottom: 10px
}
.opt_cust_info a i.icon-instagram{
  font-size: 19px;
  display: inline-block;
  margin-right: 8px;
  transform: translateY(3px);
}
@media (max-width: 580px) {
  .opt_row {
    flex-direction: column;
  }
  .optimize_what .products .opt_product,
  .optimize_other_bought .opt_product{
    padding: 10px;
    width: 90%;
    margin: auto;
  }
  .optimize_what > p {
    width: 99%;
  }
}

</style>
`);
$("#main").after(`
<section class="optimize_what">
      <h2 class="h2_title">What Does Astrology+ Have to Offer?</h2>
      <p class="description">
        Discover more about your past, present, and future with premium readings
        and charts. Your Astrology+ Membership includes all of this, and more...
      </p>
      <div class="products opt_row">
        <a class="opt_product" href="https://shop.astrology.com/product/natal-moon-report/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store" target="_blank">
          <div class="opt_img_product">
            <img src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Natal-Moon-Report-300x300.png" alt="natal moon report">
          </div>
          <div class="opt_info_product">
            <h4 class="title">Natal Moon Report</h4>
            <p class="desc">
              Learn about your own personal connection to the moon. Understand
              how your moon sign affects your emotional well-being so you can
              truly master your emotions.
            </p>
            <p class="price">$11.95</p>
          </div>
        </a>
        <a class="opt_product" href="https://shop.astrology.com/product/yearly-horoscope/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store" target="_blank">
          <div class="opt_img_product">
            <img src="https://shop.astrology.com/wp-content/uploads/sites/5/2021/10/a-com-2022-horoscope-300x300.png" alt="2022 Premium Horoscope">
          </div>
          <div class="opt_info_product">
            <h4 class="title">2022 Premium Horoscope</h4>
            <p class="desc">
              Take charge of your romantic life, career, and personal
              aspirations in 2022. Discover your greatest opportunities for
              growth and success.
            </p>
            <p class="price">From: $19.99 / year</p>
          </div>
        </a>
        <a class="opt_product" href="https://shop.astrology.com/product/birth-horoscope-natal-chart/?utm_source=store&amp;utm_medium=site&amp;utm_campaign=astro-store" target="_blank">
          <div class="opt_img_product">
            <img src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/birthchartstore2-010-300x300.png" alt="Birth Horoscope (+ Natal Chart)">
          </div>
          <div class="opt_info_product">
            <h4 class="title">Birth Horoscope (+ Natal Chart)</h4>
            <p class="desc">
              Dig deep into your personality traits, your unique
              characteristics, and your potential for growth based on the stars’
              alignment at the moment of your birth.
            </p>
            <p class="price">$24.95</p>
          </div>
        </a>
      </div>
      <span class="optimize_join">JOIN ASTROLOGY+</span>
    </section>
    <section class="optimize_other_bought">
    <h2>Others Also Bought</h2>
    <div class="opt_row">
      <a
        class="opt_product"
        href="https://shop.astrology.com/product/love-compatibility-report/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
        target="_blank"
      >
        <div class="opt_img_product">
          <img
            src="https://shop.astrology.com/wp-content/uploads/sites/5/2019/12/love-compatibility-1-300x300.png"
            alt="Love Compatibility Report"
          />
        </div>
        <div class="opt_info_product">
          <h4 class="title">Love Compatibility Report</h4>
          <p class="price">$16.95</p>
        </div>
      </a>
      <a
        class="opt_product"
        href="https://shop.astrology.com/product/yes-no-tarot-reading/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
        target="_blank"
      >
        <div class="opt_img_product">
          <img
            src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/03/Yes-No-Tarot-300x300.png"
            alt="Yes/No Tarot"
          />
        </div>
        <div class="opt_info_product">
          <h4 class="title">Yes/No Tarot</h4>
          <p class="price">$8.95</p>
        </div>
      </a>
      <a
        class="opt_product"
        href="https://shop.astrology.com/product/make-a-wish-tarot/?utm_source=store&utm_medium=site&utm_campaign=astro-store"
        target="_blank"
      >
        <div class="opt_img_product">
          <img
            src="https://shop.astrology.com/wp-content/uploads/sites/5/2020/04/Make-A-Wish-Tarot-300x300.png"
            alt="Love Compatibility Report"
          />
        </div>
        <div class="opt_info_product">
          <h4 class="title">Make a Wish Tarot</h4>
          <p class="price">$8.95</p>
        </div>
      </a>
    </div>
  </section>
`);

$(".woocommerce-product-gallery").append(`
<div class="opt_side_review opt_for_big">
<div class="opt_customer_rev">
  <q>
    Astrology Plus has been such a helpful tool to add to my astrology
    practice. The calendar is so useful for tracking events, and the birth
    chart reading was spot on for my natal chart.
  </q>
</div>
<div class="opt_cust">
  <div class="opt_cust_img">
    <img src="https://www.astrology.com/images-US/astrology-plus/courtney-perkins.png" alt="Courtney Perkins">
  </div>
  <div class="opt_cust_info">
    <p>- Courtney Perkins</p>
    <a href="//www.instagram.com/notallgeminis/" target="_blank" class="share-icon instagram"><i class="icon-instagram"></i><span>@notallgeminis</span></a>
  </div>
</div>
</div>
`);

setTimeout(() => {
  $(".optimize_join").on("click", function () {
    var scrollTo = $("form.variations_form.cart").offset().top - 20;
    $("html, body").animate(
      {
        scrollTop: scrollTo,
      },
      700
    );
  });
}, 2000);
