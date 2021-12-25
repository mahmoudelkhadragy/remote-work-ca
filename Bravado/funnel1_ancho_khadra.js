(function () {
  var styles = `<style type="text/css">
.optimize-description .chicken-ingredients__heading::after {
  left : 0px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

footer {
  margin-top: 0px;
}

.container-indent:first-of-type ~ .container-indent {
  display: none;
}

.tt-fixed-product-wrapper {
  display: none !important;
}

.tt-desctop-parent-cart,
.tt-product-policies {
  display: none !important;
}

.optimize-short-description {
  display: inline-block;
  font: 400 14px/22px "Open Sans", sans-serif;
  color: #777;
  margin-top: 12px;
  margin-bottom: 12px;
}

.tt-collapse-block .tt-item{
  display: none;
}
#tab_review{
 display: block;
}

.optimize-awards {
  max-width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.optimize-awards .optimize-award {
  font: 600 14px "Jost", sans-serif;
  color: #000;
  text-transform: uppercase;
  padding-left: 36px;
  position: relative;
}

.optimize-awards .optimize-award::before {
  content: "";
  width: 28px;
  height: 28px;
  background-size: contain;
  background-position: center center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.optimize-awards .optimize-award--gluten::before {
  background-image: url("https://i.imgur.com/xHCcHlz.png");
}
.optimize-awards .optimize-award--vegan::before {
  background-image: url("https://i.imgur.com/JA3giAC.png");
}
.optimize-awards .optimize-award--winning::before {
  background-image: url("https://i.imgur.com/oIGvIee.png");
}

.optimize-awards .optimize-award:not(:last-of-type) {
  margin-right: 48px;
}

.optimize-trust {
  display: flex;
  margin-top: 33px;
  margin-left: 25px;
}

.optimize-trust-item.optimize-trust-item--secure {
  margin-right: 42.5px;
}

.optimize-seen-on-image {
  width: 108px !important;
  height: 108px !important;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}

@import url('https://fonts.googleapis.com/css2?family=Jost&family=Open+Sans:wght@400;600&display=swap');

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
.optimize-description html, .optimize-description body, .optimize-description div, .optimize-description span, .optimize-description applet, .optimize-description object, .optimize-description iframe, .optimize-description h1, .optimize-description h2, .optimize-description h3, .optimize-description h4, .optimize-description h5, .optimize-description h6, .optimize-description p, .optimize-description blockquote, .optimize-description pre, .optimize-description a, .optimize-description abbr, .optimize-description acronym, .optimize-description address, .optimize-description big, .optimize-description cite, .optimize-description code, .optimize-description del, .optimize-description dfn, .optimize-description em, .optimize-description img, .optimize-description ins, .optimize-description kbd, .optimize-description q, .optimize-description s, .optimize-description samp, .optimize-description small, .optimize-description strike, .optimize-description strong, .optimize-description sub, .optimize-description sup, .optimize-description tt, .optimize-description var, .optimize-description b, .optimize-description u, .optimize-description i, .optimize-description center, .optimize-description dl, .optimize-description dt, .optimize-description dd, .optimize-description ol, .optimize-description ul, .optimize-description li, .optimize-description fieldset, .optimize-description form, .optimize-description label, .optimize-description legend, .optimize-description table, .optimize-description caption, .optimize-description tbody, .optimize-description tfoot, .optimize-description thead, .optimize-description tr, .optimize-description th, .optimize-description td, .optimize-description article, .optimize-description aside, .optimize-description canvas, .optimize-description details, .optimize-description embed, .optimize-description figure, .optimize-description figcaption, .optimize-description footer, .optimize-description header, .optimize-description hgroup, .optimize-description menu, .optimize-description nav, .optimize-description output, .optimize-description ruby, .optimize-description section, .optimize-description summary, .optimize-description time, .optimize-description mark, .optimize-description audio, .optimize-description video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } /* HTML5 display-role reset for older browsers */ .optimize-description article, .optimize-description aside, .optimize-description details, .optimize-description figcaption, .optimize-description figure, .optimize-description .optimize-description footer, .optimize-description header, .optimize-description hgroup, .optimize-description menu, .optimize-description nav, .optimize-description section { display: block; } .optimize-description body { line-height: 1; } .optimize-description ol, .optimize-description ul { list-style: none; } .optimize-description blockquote, .optimize-description q { quotes: none; } .optimize-description blockquote:before, .optimize-description blockquote:after, .optimize-description q:before, .optimize-description q:after { content: ''; content: none; } .optimize-description table { border-collapse: collapse; border-spacing: 0; } .optimize-description strong { font-weight: 700; }

.optimize-description .container { margin: auto; }

.optimize-description .cta-button {
  display: inline-block;
  font: 400 14px "Jost", sans-serif;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #DE3427;
  padding: 18px 72px;
}

.optimize-description section.hot {
  background-color: #000;
  padding: 85px 0;
}

.optimize-description .hot-inner {
  display: flex;
  justify-content: space-between;
}

.optimize-description .hot-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.optimize-description .hot-banner__heading,
.optimize-description .hot-banner__heading.hot-banner__heading--mobile {
  font: 600 34px "Jost", sans-serif;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.optimize-description .hot-banner__heading.hot-banner__heading--mobile {
  display: none;
  padding: 0 10px;
}

.optimize-description .hot-banner__image {
  width: 260px;
}

.optimize-description section.features {
  text-align: center;
  background-image: url(https://i.imgur.com/1eFcaZH.png);
  background-size: cover;
  background-position: center center;
  padding: 64px 0;
}

.optimize-description .features-inner {
  max-width: 880px;
  padding: 0 10px;
  margin: auto;
}

.optimize-description .features__heading {
  font: 600 34px "Jost", sans-serif;
  color: #1A1A1A;
  margin-bottom: 36px;
}

.optimize-description .features__paragraph {
  font: 400 15px "Open Sans", sans-serif;
  color: #777;
  margin-bottom: 24px;
}

.optimize-description .features__paragraph:last-of-type {
  margin-bottom: 48px;
}

.optimize-description .features__list {
  display: flex;
  justify-content: center;
}

.optimize-description .features__list-item {
  height: 100px;
}

.optimize-description .features__list-item:not(:last-of-type) {
  margin-right: 50px;
}

.optimize-description .features__list-item img {
  height: 100%;
  object-fit: contain;
}

.optimize-description section.cast {
  padding-top: 85px;
  text-align: center;
}

.optimize-description section.cast .container { 
  border-bottom: 1px solid #E5E5E5;
  padding-bottom: 85px;
}

.optimize-description .cast__heading {
  font: 600 34px "Jost", sans-serif;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.optimize-description .cast__list {
  display: flex;
  justify-content: space-between;
}

.optimize-description .cast__list-item {
  display: flex;
  width: 260px;
  flex-direction: column;
  justify-content: flex-end;
  height: 305px;
}

.optimize-description .cast__list-item .list-item__image {
  width: 164px;
  height: 155px;
  object-position: bottom;
  margin: 0 auto 20px;
  object-fit: contain;
}

.optimize-description .cast__list-item .list-item__heading {
  font: 600 20px "Jost", sans-serif;
  color: #1A1A1A;
  text-transform: capitalize;
  margin-bottom: 9px;
}

.optimize-description .cast__list-item .list-item__paragraph {
  font: 400 15px/22px "Open Sans", sans-serif;
  color: #777;
}

.optimize-description section.chicken {
  padding-top: 100px;
}

.chicken .cta-button {
  margin-top: 24px;
}

.optimize-description .chicken .container {
  padding-bottom: 95px;
  border-bottom: 1px solid #E5E5E5;
}

.optimize-description .chicken-inner {
  display: flex;
  justify-content: space-between;
}

.optimize-description .chicken-content {
  width: 620px;
}

.optimize-description .chicken__heading {
  font: 600 34px "Jost", sans-serif;
  color: #1A1A1A;
  text-align: center;
  margin-bottom: 39px;
}

.optimize-description .chicken__criterias {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 90px;
  margin-bottom: 24px;
}

.optimize-description .chicken__criterias-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.optimize-description .chicken__criterias-item .item__heading {
  font: 600 17px "Jost", sans-serif;
  color: #1A1A1A;
  margin-bottom: 9px;
}

.optimize-description .chicken__criterias-item .item__span {
  font: 400 15px "Open Sans", sans-serif;
  color: #777;
}

.optimize-description .chicken-ingredients-content {
  display: flex;
  justify-content: space-between;
}

.optimize-description .chicken-ingredients__heading {
  font: 600 17px "Jost", sans-serif;
  color: #1A1A1A;
  margin-bottom: 20px;
  position: relative;
}
.optimize-description .chicken-ingredients__heading::after { 
  content: "";
  width: 80%;
  height: 1px;
  border-radius: 50%;
  background-color: #DE3427;
  position: absolute;
  right: 0;
  bottom: 0;
}

.optimize-description .chicken-ingredients__list {
  width: 250px;
}
.optimize-description .chicken-ingredients__list:first-of-type {
  margin-right: 16px;
}

.optimize-description .chicken-ingredients__list .ingredients__list-item {
  font: 400 15px "Open Sans", sans-serif;
  color: #777;
  padding-left: 24px;
  position: relative;
}
.optimize-description .chicken-ingredients__list .ingredients__list-item::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #777;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.optimize-description .chicken-ingredients__list .ingredients__list-item:not(:last-of-type) {
  margin-bottom: 12px;
}

.optimize-description .chicken__image {
  width: 480px;
  object-fit: contain;
}

.optimize-description .chicken__image.chicken__image--mobile {
  display: none;
  max-width: 75%;
}

.optimize-description section.reviews {
  padding: 50px 10px 75px;
}

.optimize-description .reviews__heading {
  font: 600 14px "Jost", sans-serif;
  color: #191919;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.optimize-description .reviews__strong {
  display: inline-block;
  font: 600 16px "Jost", sans-serif;
  color: #1A1A1A;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.optimize-description .reviews-stars,
.optimize-description .reviews-stars__list {
  display: flex;
}

.optimize-description .reviews-stars__list {
  display: flex;
}

.optimize-description .container > .reviews-stars .reviews-stars__list {
  margin-right: 4px;
}

.optimize-description .reviews-stars__list .stars__list-item {
  width: 16px;
  height: 16px;
}

.optimize-description .reviews-stars__list .stars__list-item img {
  width: 100%;
  object-fit: contain;
}

.optimize-description .reviews-stars__list .stars__list-item:not(:last-of-type) {
  margin-right: 2px;
}

.optimize-description .reviews-stars__span {
  font: 400 14px/22px "Open Sans", sans-serif;
  color: #777;
}

.optimize-description .reviews__list-item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E5E5E5;
  padding: 24px 0;
}

.optimize-description .reviews__list-item .item__heading {
  font: 600 16px "Jost", sans-serif;
  margin: 2px 0;
}

.optimize-description .reviews__list-item .item__date {
  font: 400 12px "Open Sans", sans-serif;
  color: #1A1A1A;
  margin-bottom: 12px;
}

.optimize-description .reviews__list-item .item__paragraph {
  font: 400 14px/22px "Open Sans", sans-serif;
  color: #777;
}

.optimize-description section.flavors {
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-image: url(https://i.imgur.com/XZSHQXA.png);
  padding: 47px 0 245px;
}

.optimize-description .flavors .cta-button {
  padding-left: 30px;
  padding-right: 30px;
}

.optimize-description .flavors__heading {
  font: 600 50px/64px "Jost", sans-serif;
  text-transform: uppercase;
  margin: 0 auto 16px;
}
  
/* review part */
.optimize-description .review_section{
  padding: 50px 0;  
}

@media only screen and (max-width: 1200px) {
  .optimize-description .hot-banner__image {
    width: 200px;
  }

  .optimize-description .hot-inner iframe {
    width: 400px;
  }
}

@media only screen and (max-width: 991px) {
  .optimize-description .hot-inner {
    flex-direction: column;
    align-items: center;
  }

  .optimize-description .hot-banner {
    margin-bottom: 24px;
  }

  .optimize-description .hot-banner__heading {
    display: none;
  }

  .optimize-description .hot-banner__heading.hot-banner__heading--mobile {
    display: inline;
    font-size: 24px;
  }

  .optimize-description .hot-banner__image {
    display: none;
  }

  .optimize-description .hot-inner iframe {
    width: 75%;
  }

  .optimize-description .cast__list {
    flex-wrap: wrap;
  }

  .optimize-description .cast__list-item {
    width: 45%;
  }

  .optimize-description .cast__list-item .list-item__image {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  .optimize-description .chicken-inner {
    justify-content: center;
  }

  .optimize-description .chicken-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  .optimize-description .chicken__criterias,
  .optimize-description .chicken-ingredients {
    width: 80%;
  }

  .optimize-description .chicken__criterias {
    padding-right: 0;
  }

  .optimize-description .chicken__criterias-item:not(:last-of-type) {
    margin-right: 16px;
  }

  .optimize-description .chicken__image {
    display: none;
  }

  .optimize-description .chicken__image.chicken__image--mobile {
    display: block;
  }

  .optimize-description .flavors__heading {
    font-size: 32px;
  }
}

@media only screen and (max-width: 576px) {
  .optimize-description h3 {
    font-size: 24px !important;
  }

  .optimize-description .hot-banner__heading {
    font-size: 24px;
  }

  .optimize-description .features-inner {
    padding: 0 10px;
  }

  .optimize-description .features__list-item {
    height: 75px;
  }

  .optimize-description .cast__list {
    justify-content: center;
  }

  .optimize-description .cast__list-item {
    width: 75%;
  }

  .optimize-description .chicken-ingredients-content {
    flex-direction: column;
  }

  .optimize-description .chicken-ingredients__heading::after {
    width: 70%;
  }

  .optimize-description .chicken-ingredients__list:first-of-type {
    margin-right: 0;
    margin-bottom: 12px;
  }
}

@media only screen and (max-width: 450px) {
  .optimize-description .features__list {
    flex-direction: column;
  }

  .optimize-description .features__list-item:not(:last-of-type) {
    margin-right: 0;
    margin-bottom: 24px;
  }
}

</style>`;
  var descriptionPart = $(
    ".tt-collapse-block.prpage-tabs > .tt-item:first-of-type"
  );
  var reviewPart = $("#tab_review");
  var newSections = `<div class="optimize-description">
      <section class="cast">
        <div class="container">
          <h3 class="features__heading">Meet the Cast</h3>
          <p class="reviews__strong"></p>
          <ul class="cast__list">
            <li class="cast__list-item">
              <img
                src="https://i.ibb.co/Qf6grt6/tt-2.jpg"
                alt="Garlic"
                class="list-item__image"
              />
              <h4 class="list-item__heading">Moruga Scorpion</h4>
              <p class="list-item__paragraph">
                This small chili pepper is known for being one of the spiciest
                on the planet. It may look cute, but it packs a punch.
              </p>
            </li>
            <li class="cast__list-item">
              <img
                src="https://i.ibb.co/20JKNtR/tt-4.jpg"
                alt="Reaper"
                class="list-item__image"
              />
              <h4 class="list-item__heading">Carolina Reaper</h4>
              <p class="list-item__paragraph">
                Don’t let this pepper fool you — while it lends a subtle
                sweetness at first taste, it evolves into an atom bomb of heat
                that will have your taste buds running in circles.
              </p>
            </li>
            <li class="cast__list-item">
              <img
                src="https://i.ibb.co/nn0YvKS/tt-3.jpg"
                alt="Serrano"
                class="list-item__image"
              />
              <h4 class="list-item__heading">Ghost Pepper</h4>
              <p class="list-item__paragraph">
                Ghost peppers offer equal parts killer heat and delicious flavor
                — the perfect combo for a complex, fiery sauce.
              </p>
            </li>
            <li class="cast__list-item">
              <img
                src="https://i.ibb.co/LPTHK6q/tt.jpg"
                alt="Syrup"
                class="list-item__image"
              />
              <h4 class="list-item__heading">Garam Masala</h4>
              <p class="list-item__paragraph">
                A complex, earthy, and warming spice blend packing tons of
                flavor. Complete with cinnamon, peppercorns, coriander, and
                cumin.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="hot">
        <div class="container">
          <div class="hot-inner">
            <div class="hot-banner">
              <h3 class="hot-banner__heading">See this sauce in action on</h3>
              <h3 class="hot-banner__heading hot-banner__heading--mobile">
                See this sauce in action on HOT ONES
              </h3>
              <img
                src="https://i.imgur.com/uvx7tTE.png"
                alt="HOT ONES"
                class="hot-banner__image"
              />
            </div>
            <iframe
              width="560"
              height="310"
              src="https://www.youtube.com/embed/9YffrCViTVk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section class="features">
        <div class="container">
          <div class="features-inner">
            <h3 class="features__heading">
              UNCOMPROMISING FLAVOR. SENSATIONAL HEAT.
            </h3>
            <p class="features__paragraph">
              At Bravado Spice, we’re not only hot heads, we are also foodies
              that love interesting flavors.
            </p>
            <p class="features__paragraph">
              We’re not shy when it comes to heat, but this sauce isn’t designed
              to simply singe your taste buds. The flavor combinations in our
              sauces are meant to challenge the palate and bring the pain. It is
              a little out of the ordinary but we like it that way.
            </p>
            <p class="features__paragraph">
              We hope the creative pairings of flavor and heat in our products
              inspire you to think a little out of the ordinary, too.
            </p>
            <ul class="features__list">
              <li class="features__list-item">
                <img src="https://i.imgur.com/qjn6pX1.png" alt="Vegan" />
              </li>
              <li class="features__list-item">
                <img
                  src="https://i.imgur.com/HX9d8S0.png"
                  alt="Made in Texas"
                />
              </li>
              <li class="features__list-item">
                <img src="https://i.imgur.com/rnZFevN.png" alt="Gluten Free" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="chicken">
        <div class="container">
          <div class="chicken-inner">
            <div class="chicken-content">
              <h3 class="chicken__heading">A VERY SPICY BUTTER CHICKEN</h3>
              <img
                src="https://i.imgur.com/1P56Lv5.png"
                alt="40 CLOVE GARLIC CHICKEN"
                class="chicken__image chicken__image--mobile"
              />
              <ul class="chicken__criterias">
                <li class="chicken__criterias-item">
                  <h4 class="item__heading">Ingredients</h4>
                  <span class="item__span">Entree</span>
                </li>
                <li class="chicken__criterias-item">
                  <h4 class="item__heading">Servings</h4>
                  <span class="item__span">1</span>
                </li>
                <li class="chicken__criterias-item">
                  <h4 class="item__heading">Prep Time</h4>
                  <span class="item__span">3 minutes</span>
                </li>
                <li class="chicken__criterias-item">
                  <h4 class="item__heading">Cook Time</h4>
                  <span class="item__span">5 minutes</span>
                </li>
              </ul>
              <div class="chicken-ingredients">
                <h4 class="chicken-ingredients__heading">Ingredients</h4>
                <div class="chicken-ingredients-content">
                  <ul class="chicken-ingredients__list">
                    <li class="ingredients__list-item">
                      1 - 1 1/2 - Boneless chicken, cubed
                    </li>
                    <li class="ingredients__list-item">4 Tbsp - Butter</li>
                    <li class="ingredients__list-item">
                      1 tsp - Bravado Spice Ancho Masala Scorpion-Reaper Hot
                      Sauce
                    </li>
                    <li class="ingredients__list-item">1 c - Onion, chopped</li>
                    <li class="ingredients__list-item">
                      1 Tbsp - Minced garlic
                    </li>
                    <li class="ingredients__list-item">1 c - Pureed tomato</li>
                  </ul>
                  <ul class="chicken-ingredients__list">
                    <li class="ingredients__list-item">1 c - Heavy cream</li>
                    <li class="ingredients__list-item">
                      1 tsp - Salt (about half if using salted butter)
                    </li>
                    <li class="ingredients__list-item">1 tsp - Pepper</li>
                    <li class="ingredients__list-item">
                      1/4 tsp - Garam masala
                    </li>
                    <li class="ingredients__list-item">
                      1/4 tsp - Chili powder
                    </li>
                    <li class="ingredients__list-item">1/4 tsp - Turmeric</li>
                    <li class="ingredients__list-item">
                      4-6 - Árbol or japones chilis
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://bravadospice.com/blogs/recipes/butter-chicken-crunchwrap"
                class="cta-button"
                >Read More</a
              >
            </div>
            <img
              src="https://cdn.shopify.com/s/files/1/2299/2483/articles/ButterChickenCrunchWrapBlogWeb_1024x1024.jpg?v=1625764259"
              alt="A VERY SPICY BUTTER CHICKEN"
              class="chicken__image"
            />
          </div>
        </div>
      </section>
      <section class="reviews">
        <div class="container">
          <h3 class="reviews__heading">Reviews</h3>
          <div class="row">
            <div class="col-12 col-md-6" id="review_content_here"></div>
          </div>
        </div>
      </section>
      <section class="flavors">
        <div class="container">
          <h3 class="flavors__heading">
            Daring flavors for<br />
            your wildest culinary adventures.
          </h3>
          <a
            href="https://bravadospice.com/collections/hot-sauce"
            class="cta-button"
            >Browse All Hot Sauce</a
          >
        </div>
      </section>
      </div>`;
  $("head").append(styles);
  setTimeout(() => {
    descriptionPart.hide();
    $(".tt-product-vertical-layout.stickprcol-js").removeClass("stickprcol-js");
    $("#shopify-section-product-template").append(newSections);
    $("#review_content_here").append(reviewPart);
  }, 3000);
})();
