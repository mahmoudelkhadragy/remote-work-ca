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
.single_add_to_cart_button{
  float:right;
  max-width: 185px;
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
.product_cat-astrology-plus.product .entry-summary .variations .value{
  width: 100%;
  margin-bottom: 5px;
}
.step_2,
.step_3,
.step_4{
  display: none;
}
.step_2{
  margin-top: 25px;
}
.validation_message{
  color: #fff;
  font-size: 13px;
  text-transform: capitalize;
  margin-bottom: 0;
  display: none;
}
.birth_validation,
.name_validation{
  text-align: center;
}
input#email,
input#birth-location{
  margin-bottom: 5px;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
#wcpa-header-1574120465608 h2,
form.variations_form table.variations,
#wcpa-text-1572984648546,
#wcpa-select-1572984697918,
#wcpa-date-1573667101075,
#wcpa-time-1573667109676,
#wcpa-placeselector-1572984785878,
.single_add_to_cart_button
{
  display: none;
}
.success_message{
  display: none;
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin: 30px auto;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;
$("head").append(`<style>${styles}</style>`);
(function () {
  setTimeout(() => {
    // make variables for every element in the form
    var astrology_h1 = $("h1.product_title");
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
    var email_input = $("#email");
    var pilling_input = $("#billing-period");
    var date_of_birth_input = $("#date-of-birth");
    var time_of_birth_input = $("#time-of-birth");
    var location_of_birth_input = $("#birth-location");
    var first_name_input = $("#first-name");
    var gender_input = $("select[name='gender']");
    var bill_price = $(".woocommerce-variation");

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

      // add step_1 button to email
      form_container.append(
        '<button type="button" class="next_form_btn step_1">Next</button>'
      );
      // add step_2 button to pilling
      form_container.append(
        '<button type="button" class="next_form_btn step_2">Add to Cart</button>'
      );
      // add step_3 button to pilling
      form_container.append(
        '<button type="button" class="next_form_btn step_3">Next</button>'
      );
      //add step 4
      gender.append(
        '<button type="button" class="next_form_btn step_4">Next</button>'
      );
      // add validation message to email
      email.append(
        '<div class="validation_message email_validation">please enter email</div>'
      );

      // add pilling validation message
      pilling_period.append(
        '<div class="validation_message billing_validation">please enter billing period</div>'
      );

      // add birthday validation message
      location_of_birth.append(
        '<div class="validation_message birth_validation">please enter all fields</div>'
      );
      // add birthday validation message
      first_name.append(
        '<div class="validation_message name_validation">please enter all fields</div>'
      );
    }

    function isEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    // first step
    function firstStep() {
      // hide title
      astrology_h1.hide();
      // hide the astrology text
      astrology_text.slideUp(200, function () {
        if ($(window).width() > 769) {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
        setTimeout(() => {
          animateSlideForm();
        }, 600);
        setTimeout(() => {
          main_h2.text("Choose Your Plan");
          email.hide();
          pilling_period.show();
          $("button.step_1").hide();
          $(".step_2").show();
        }, 850);
      });
    }

    // second step
    function secondStep() {
      animateSlideForm();
      setTimeout(() => {
        bill_price.hide();
        main_h2.text("Enter Your Birth Details");
        pilling_period.hide();
        $(".billing_validation").hide();
        date_of_birth.show();
        time_of_birth.show();
        location_of_birth.show();
        $("button.step_2").hide();
        $(".step_3").show();
      }, 280);
    }

    // third step
    function thirdStep() {
      animateSlideForm();
      setTimeout(() => {
        date_of_birth.hide();
        time_of_birth.hide();
        location_of_birth.hide();

        main_h2.text("Enter Your Information");
        $(".birth_validation").hide();
        first_name.show();
        gender.show();
        $("button.step_3").hide();
        $("button.step_4").show();
      }, 280);
    }

    // animate the form
    function animateSlideForm() {
      form_container.animate({ left: "-1000px", top: "0px" }, 500, function () {
        $(this).animate({ top: "1000px", left: "-1000px" }, 1, function () {
          $(this).animate({ left: "1000px", top: "1000px" }, 0, function () {
            $(this).animate({ left: "1000px", top: "0px" }, 1, function () {
              $(this).animate({ left: "0px", top: "0px" }, 500);
            });
          });
        });
      });
    }

    // show validation message
    function showValidationMessage(element) {
      if (element.css("display") == "none") {
        element.show();
      } else {
        element.addClass("shake");
        setTimeout(() => {
          element.removeClass("shake");
        }, 300);
      }
    }

    // initial step steps of making form
    initialState();

    // firstStep();
    $(".step_1").on("click", function () {
      var email_validation = $(".email_validation");
      if (isEmail(email_input.val())) {
        firstStep();
      } else {
        showValidationMessage(email_validation);
      }
    });

    // secondStep
    $(".step_2").on("click", function () {
      var billing_validation = $(".billing_validation");
      if (pilling_input.val()) {
        secondStep();
      } else {
        showValidationMessage(billing_validation);
      }
    });

    $(".step_3").on("click", function () {
      var birth_validation = $(".birth_validation");
      if (
        date_of_birth_input.val() &&
        time_of_birth_input.val() &&
        location_of_birth_input.val()
      ) {
        thirdStep();
      } else {
        showValidationMessage(birth_validation);
      }
    });

    $(".step_4").on("click", function () {
      var name_validation = $(".name_validation");
      if (first_name_input.val() && gender_input.val()) {
        submit_button.click();
      } else {
        showValidationMessage(name_validation);
      }
    });

    // on change select value of pilling
    pilling_input.on("change", function (e) {
      var valueSelected = this.value;
      var billing_validation = $(".billing_validation");
      if (valueSelected) {
        billing_validation.hide();
      } else {
        if (billing_validation.css("display") === "none") {
          billing_validation.show();
        } else {
          billing_validation.addClass("shake");
          setTimeout(() => {
            billing_validation.removeClass("shake");
          }, 300);
        }
      }
    });
  }, 3000);
})();
