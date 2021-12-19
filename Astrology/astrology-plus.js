var styles = `
body.v3 .product_cat-astrology-plus.product .entry-summary .cart,
body.v3.single-product form.cart {
  background: linear-gradient(
    180deg,
    rgba(168, 146, 210, 1) 0%,
    rgba(104, 97, 186, 1) 100%
  );
}
body.v3
  .product_cat-astrology-plus.product
  .entry-summary
  .cart
  .wcpa_form_outer,
body.v3.single-product form.cart .wcpa_form_outer {
  margin: 0 auto 10px;
}
.storefront-full-width-content.single-product div.product .summary {
  overflow: hidden;
}
form.variations_form {
  position: relative;
}
.next_form_btn {
  float: right;
  padding: 6px 60px 4px;
  border-radius: 7px;
  background-color: #fff;
  color: #101010;
  font-family: Khand;
  font-size: 16px;
  transition: all .2s ease-in-out;
}
.next_form_btn:hover{
  background-color:#554cad;
  color: #fff; 
}
`;
$("head").append(`<style>${styles}</style>`);
(function () {
  // make variables for every element in the form
  var astrology_text = $(".woocommerce-product-details__short-description");
  var form_container = $("form.variations_form");
  var main_h2 = $("form.variations_form h2");
  var email_h2 = $("#wcpa-header-1574120465608 h2");
  var pilling_period = $("form.variations_form table.variations");
  var gender = $("#wcpa-select-1572984697918");
  var first_name = $("#wcpa-text-1572984648546");
  var date_of_birth = $("#wcpa-date-1573667101075");
  var time_of_birth = $("#wcpa-time-1573667109676");
  var location_of_birth = $("#wcpa-placeselector-1572984785878");
  var email = $("#wcpa-text-1572984832828");
  var submit_button = $(".single_add_to_cart_button");

  function initialState() {
    main_h2.text("Enter Your Contact Information");
    email_h2.hide();
    pilling_period.hide();
    first_name.hide();
    gender.hide();
    date_of_birth.hide();
    time_of_birth.hide();
    location_of_birth.hide();
    submit_button.hide();

    form_container.append('<button class="next_form_btn step_1">Next</button>');
  }

  function firstStep() {
    pilling_period.show();
  }

  // steps of making form
  initialState();
  firstStep();
})();
