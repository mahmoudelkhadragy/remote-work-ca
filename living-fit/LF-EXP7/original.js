
document.querySelector('head').insertAdjacentHTML("beforeend", `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Slab&display=swap");
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body,
html {
  padding: 0;
  margin: 0;
}

/* general styles */
.main_h1 {
  font-weight: bold !important;
  font-family: "Montserrat" !important;
  font-size: 40px !important;
  line-height: 48px !important;
}
.main_h2 {
  font-size: 30px !important;
  font-weight: bold;
  color: #fff;
  font-family: "Montserrat", sans-serif !important;
  line-height: 37px !important;
}
.main_h3 {
  font-weight: bold !important;
  font-size: 22px;
  font-family: "Montserrat", sans-serif !important;
}
.main_p {
  font-size: 16px !important;
  font-weight: 500;
}
.opt_input {
  display: block;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
  border: none;
  margin-bottom: 18px;
}
.opt_input:focus {
  border: none;
  outline: none;
}
.opt_btn {
  display: block;
  width: 100%;
  border: none;
  padding: 18px 0;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  color: #fff;
  background-color: #162535;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Montserrat";
  transition: all 0.2s ease-in-out;
}
.opt_btn:focus,
.opt_btn:active {
  outline: none;
}
.message_confirm,
.opt_validation_message {
  display: none;
}
.message_confirm_content {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.opt_validation_message {
  font-size: 13px !important;
  color: #fff !important;
  padding: 6px 0 !important;
  margin: 0;
  font-weight: 400 !important;
}
@media (max-width: 767.98px) {
  .main_h2 {
    font-size: 26px !important;
  }
  .main_p {
    font-size: 15px !important;
  }
  .main_h1 {
    font-size: 30px !important;
    line-height: 40px !important;
  }
}

#page-theme .contain {
  display: none !important;
}
#page-theme .opt_header h1 {
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #fff;
  line-height: 48px;
  margin-bottom: 10px;
}
#page-theme .opt_header p {
  color: #fff;
  font-family: "Montserrat";
  padding: 10px 0;
  font-weight: 500;
}

/* header */
header.opt_header {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%);
  background-color: #466cce;
  overflow: hidden;
  height: 990px;
}
header.opt_header .opt_row {
  display: flex;
  height: 100%;
  align-items: stretch;
}

header.opt_header .opt_living_info {
  width: 45%;
  background-image: url(https://i.ibb.co/b15BdqQ/header-back.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
header.opt_header .form_login {
  width: 55%;
  height: 100%;
}
header.opt_header .form_login .form_container {
  width: 64%;
  margin: auto;
  padding-right: 40px;
  max-width: 530px;
}

header.opt_header .opt_living_info_content {
  display: none;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0 20px 20px;
}
header.opt_header .opt_living_info_content_wrapper {
  width: 100%;
  margin: auto;
  max-width: 530px;
}
header.opt_header .opt_living_info_content .opt_link {
  padding: 20px 0 35px;
  display: block;
  margin: 0;
}
header.opt_header .logo {
  display: flex;
  justify-content: end;
  margin: 30px 0 50px;
}
header.opt_header .form_login .opt_form_here {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.13);
  padding: 40px 30px;
  margin-top: 20px;
}
header.opt_header .form_login .opt_form_here p.main_p {
  padding: 0 !important;
  margin-bottom: 20px;
  font-weight: 400 !important;
}
header.opt_header .form_login .opt_form_here p.main_p strong {
  font-weight: 600;
}

header.opt_header .form_login .opt_form_here #opt_header_custom_submit {
  margin-top: 10px;
}
header.opt_header .form_login .opt_form_here #opt_header_custom_submit:hover {
  background-color: #fbe554;
  color: #162535;
}
form._form
  > div._form-content
  > div._form_element._x37188298._full_width._clear,
form._form
  > div._form-content
  > div._form_element._x76560508._full_width._clear,
form._form ._form-label,
form._form ._form_element ._form-label {
  display: none;
}

@media (max-width: 767.98px) {
  header.opt_header {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 93%);
    height: 100%;
    padding-bottom: 40px;
  }
  header.opt_header .opt_row {
    align-items: initial;
    flex-direction: column;
    justify-content: stretch;
  }

  header.opt_header .opt_living_info {
    width: 100%;
    padding: 0;
    background-position: center;
  }
  header.opt_header .form_login {
    width: 100%;
    height: 100%;
  }

  header.opt_header .form_login .form_container {
    padding-right: 0px;
  }

  header.opt_header .form_login .logo,
  header.opt_header .form_container > h1.main_h1,
  header.opt_header .form_container > p.main_p {
    display: none;
  }
  header.opt_header .opt_living_info_content {
    display: block;
  }
  header.opt_header .form_login .opt_form_here {
    background-color: transparent;
    margin-top: 0;
  }
  header.opt_header .form_login .form_container {
    width: 100%;
    margin: auto;
    padding-right: 0px;
  }
}

@media (min-width: 768px) and (max-width: 850px) {
  #page-theme .opt_header h1 {
    font-size: 28px;
    line-height: 40px;
  }
  header.opt_header .form_login .form_container {
    width: 90%;
    padding-right: 20px;
  }
}
@media (min-width: 851px) and (max-width: 1100px) {
  header.opt_header {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
  }
  header.opt_header .form_login .form_container {
    width: 80%;
  }
}

/* opt_get_fit */
.opt_get_fit .opt_get_fit_first {
  width: 80%;
  margin: auto;
}
.opt_get_fit .opt_get_fit_first h2.main_h2 {
  color: #162535;
}
.opt_get_fit .opt_get_fit_second_item {
  gap: 20px;
  margin-bottom: 35px;
}

.opt_get_fit .opt_item_img {
  background: #466cce;
  border-radius: 50%;
  padding: 6px;
}
.opt_get_fit .opt_item_img img {
  max-width: 52px;
  margin: auto;
  display: inline-block;
}
@media (max-width: 767.98px) {
  .opt_get_fit .opt_get_fit_second_item {
    margin-bottom: 20px;
  }
  .opt_get_fit .opt_get_fit_first {
    width: 100%;
    padding: 10px;
  }
}

/* opt_simple_nutrition */
.opt_simple_nutrition {
  padding: 50px 0;
  min-height: 490px;
  background-image: url(https://i.ibb.co/RHJhfns/simple-back.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  display: flex;
  align-items: center;
}

@media (max-width: 767.98px) {
  .opt_simple_nutrition {
    align-items: start;
    min-height: 510px;
    background-image: url(https://i.ibb.co/LghbcdW/simple-back-sm.jpg);
    background-position: bottom;
  }
}
/* opt_registered */
.opt_registered {
  padding: 90px 0;
}
.opt_registered h2.main_h2 {
  color: #162535;
}
.opt_registered ul li {
  margin-bottom: 25px;
}
.opt_registered ul li p.main_p {
  font-size: 18px !important;
}
.opt_registered .opt_registered_info span {
  display: inline-block;
  margin-right: 10px;
  color: #466cce;
}
.opt_registered .opt_registered_info i {
  font-style: normal !important;
}

/* opt_body_health */
.opt_body_health {
  position: relative;
  background-color: #162535;
  padding: 40px 0;
}
.opt_body_health .message_confirm_content {
  height: 100px;
}

.opt_body_health p.main_p {
  color: #fff;
}
.opt_body_health .opt_input {
  background-color: transparent;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  margin-bottom: 10px;
  padding: 6px;
  color: #fff;
  font-size: 15px;
}
.opt_body_health .opt_btn {
  background-color: #fff !important;
  color: #162535;
  width: fit-content;
  padding: 10px 20px;
  font-weight: 600;
  margin: 20px 0 0;
  font-size: 14px;
}
.opt_body_health .opt_btn:hover {
  background-color: #fbe554 !important;
}
.opt_body_health_img {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 50%;
  max-width: 710px;
}
.opt_body_health_img img {
  width: 100%;
}
@media (min-width: 1200px) {
  .opt_body_health_img {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 50%;
    transform: translateY(-50%);
  }
}
@media (max-width: 767.98px) {
  .opt_body_health_img {
    top: inherit;
    bottom: -19%;
    left: 50%;
    width: 60%;
    transform: translateX(-50%);
    width: 60%;
  }
  .opt_body_health {
    position: relative;
    height: 700px;
    background-color: #162535;
  }
  .opt_body_health .opt_btn {
    width: 100%;
    padding: 10px 20px;
    margin: 30px auto 0;
  }
}

@media (max-width: 500px) {
  .opt_body_health_img {
    top: inherit;
    bottom: -12%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
}

/* opt_straight_tips */
.opt_straight_tips {
  padding: 220px 0;
}
.opt_straight_tips .container {
  background-color: #d85743;
}
.opt_straight_tips_info {
  padding-left: 15px;
  color: #fff;
}
.opt_straight_tips_info h3 {
  color: #fae454;
  font-family: "Montserrat", sans-serif !important;
  font-size: 24px;
}
.opt_straight_tips_img {
  max-width: 353px;
  margin: auto;
  transform: translateY(-50px);
}
.opt_straight_tips_img img {
  width: 100%;
}
@media (max-width: 767.98px) {
  .opt_straight_tips_info {
    padding-top: 30px;
  }
  .opt_straight_tips_img {
    margin-top: 20px;
    width: 100%;
    transform: translateY(0px);
    max-width: 100%;
  }
  .opt_straight_tips .container {
    background-color: #d85743;
    padding: 0;
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .opt_straight_tips_img {
    max-width: 280px;
    margin: auto;
    transform: translateY(0px);
  }
  .opt_straight_tips .container {
    padding: 30px 0;
  }
}
/* opt_email_below */
.opt_email_below{
  background-color: #466CCE;
}
.opt_email_below_item_wrapper{
  width: 45%;
  max-width: 450px;
  margin: auto;
}


/* footer */
footer {
  background-color: #162535;
}
footer img {
  width: 55px;
}


</style>
`);

document.querySelector('#page-theme').insertAdjacentHTML("beforeend", `
<!-- header -->
<header class="opt_header">
<div class="opt_row">
  <div class="opt_living_info">
    <div class="opt_living_info_content">
      <div class="opt_living_info_content_wrapper">
        <a class="opt_link" href="https://www.living.fit">
          <img src="https://i.ibb.co/ZSXTdNP/Logo.png" alt="Living Fit" />
        </a>
        <h2 class="main_h2">
          Get Weekly Nutrition Tips for Getting Lean and Healthy!
        </h2>
        <p class="main_p">
          Let our Registered Dietician show you how to improve your diet
          and make your workouts more efficient with FREE nutrition tips
          sent to your inbox!
        </p>
      </div>
    </div>
  </div>
  <div class="form_login">
    <div class="form_container">
      <div class="logo">
        <a href="https://www.living.fit">
          <img src="https://i.ibb.co/ZSXTdNP/Logo.png" alt="Living Fit" />
        </a>
      </div>
      <h1 class="main_h1">
        Get Weekly Nutrition Tips for Getting Lean and Healthy!
      </h1>
      <p class="main_p">
        Let our Registered Dietician show you how to improve your diet and
        make your workouts more efficient with FREE nutrition tips sent to
        your inbox!
      </p>
      <div class="opt_form_here">
        <p class="main_p">
          Enter your email below to get
          <strong>FREE nutrition tips</strong> delivered to your email
          each week to help you <strong>burn fat and fuel</strong> your
          <strong>best workouts ever!</strong>
        </p>
        <form class="opt_cutom_form">
          <input
            class="opt_input"
            placeholder="Name"
            id="opt_header_input_name"
            type="text"
          />
          <input
            class="opt_input"
            placeholder="Email"
            id="opt_header_input_email"
            type="email"
            required
          />
          <button
            type="button"
            class="opt_btn"
            id="opt_header_custom_submit"
          >
            Send My Nutrition Tips!
          </button>
        </form>
        <p class="opt_validation_message">required valid email</p>
        <div class="message_confirm" id="opt_header_message_confirm">
          <div class="message_confirm_content">
            <p class="main_p">
              Thanks for signing up! Check your inbox for your tip!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>

<!-- opt_get_fit -->
<section class="opt_get_fit py-5">
<div class="container">
  <div class="opt_get_fit_first text-center">
    <h2 class="main_h2 mb-5">
      Get fit and strong with free healthy<br />
      eating tips sent to your inbox each week!
    </h2>
    <p class="main_p mb-4">
      Are you ready to take your fitness routine to the next level? Fuel
      your best workouts ever with tips from a Registered Dietician!
    </p>
    <p class="main_p mb-5">
      See faster results in the gym by eating foods that nourish your body
      and help you recover!
    </p>
  </div>
  <div class="opt_get_fit_second">
    <h3 class="main_h3 text-center mb-5 pb-4">Each week, you’ll be sent:</h3>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="opt_get_fit_second_item d-flex align-items-center">
          <div class="opt_item_img">
            <img
              src="https://i.ibb.co/T40PqM9/get-fit1.png"
              alt="get-fit image"
            />
          </div>
          <p class="main_p">
            Tips for healthy eating and giving your body the best
            nutrition for burning fat and building muscle.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="opt_get_fit_second_item d-flex align-items-center">
          <div class="opt_item_img">
            <img
              src="https://i.ibb.co/t33tkVh/get-fit2.png"
              alt="get-fit image"
            />
          </div>
          <p class="main_p">
            Advice for fueling your workouts for maximum efficiency and
            better results.
          </p>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="opt_get_fit_second_item d-flex align-items-center">
          <div class="opt_item_img">
            <!--  -->
            <img
              src="https://i.ibb.co/DWLqVfY/get-fit3.png"
              alt="get-fit image"
            />
          </div>
          <p class="main_p">
            Guidance for choosing the best types of foods to eat to help
            you reach your goals.
          </p>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="opt_get_fit_second_item d-flex align-items-center">
          <div class="opt_item_img">
            <img
              src="https://i.ibb.co/GVkXp5T/get-fit-4.png"
              alt="get-fit image"
            />
          </div>
          <p class="main_p">
            Help deciding which supplements are best to pair with your
            healthy diet for even better nutrition.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<!-- opt_simple_nutrition -->
    <section class="opt_simple_nutrition">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7">
            <div class="opt_simple_nutrition_item">
              <h2 class="main_h1 mb-5">
                Simple & Effective Nutrition Advice Delivered to Your Email Once
                a Week
              </h2>
              <p class="main_p">
                Get the answers to your diet, health, and fitness questions so
                you can get the most results from your hard effort at the gym!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- opt_registered -->
    <section class="opt_registered">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-7">
            <div class="opt_registered_info">
              <h2 class="main_h2 mb-5 pb-4">Every week, our Registered Dietician will cover topics such as:</h2>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center">
                  <span><i class="fas fa-check-circle"></i></span>
                  <p class="main_p">How many grams of fat should I eat?</p>
                </li>
                <li class="d-flex align-items-center">
                  <span><i class="fas fa-check-circle"></i></span>
                  <p class="main_p">How can I lose fat while gaining or maintaining muscle?</p>
                </li>
                <li class="d-flex align-items-center">
                  <span><i class="fas fa-check-circle"></i></span>
                  <p class="main_p">How many calories do I need to eat every day?</p>
                </li>
                <li class="d-flex align-items-center">
                  <span><i class="fas fa-check-circle"></i></span>
                  <p class="main_p">How much protein do I need to gain muscle?</p>
                </li>
                <li class="d-flex align-items-center">
                  <span><i class="fas fa-check-circle"></i></span>
                  <p class="main_p">How many grams of carbs should I eat for proper energy?</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="opt_registered_img">
              <img src="https://i.ibb.co/gDvM65t/registered.jpg" alt="woman">
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- opt_body_health -->
    <section class="opt_body_health">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7"></div>
          <div class="col-12 col-md-5">
            <div class="opt_body_health_item">
              <h2 class="main_h2 mb-4">
                Fuel your body the healthy way with free weekly nutrition tips!
              </h2>
              <p class="main_p mb-3">
                Enter your email below to get
                <strong>FREE nutrition tips</strong> delivered to your email
                each week to help you <strong>burn fat and fuel</strong> your
                <strong>best workouts ever!</strong>
              </p>
              <form class="opt_cutom_form">
                <input
                  class="opt_input"
                  placeholder="Name"
                  id="opt_body_input_name"
                  type="text"
                />
                <input
                  class="opt_input"
                  placeholder="Email"
                  id="opt_body_input_email"
                  type="email"
                  required
                />
                <button
                  type="button"
                  class="opt_btn"
                  id="opt_body_custom_submit"
                >
                  Send My Nutrition Tips!
                </button>
              </form>
              <p class="opt_validation_message">required valid email</p>
              <div class="message_confirm" id="opt_body_message_confirm">
                <div class="message_confirm_content">
                  <p class="main_p">
                    Thanks for signing up! Check your inbox for your tip!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="opt_body_health_img">
        <img src="https://i.ibb.co/6JBVsFT/body-back.png" alt="food" />
      </div>
    </section>
    <!-- opt_straight_tips -->
    <section class="opt_straight_tips">
      <div class="container">
        <div class="row align-items-center no-gutters">
          <div class="col-12 col-md-6">
            <div class="opt_straight_tips_info">
              <h2 class="main_h2 mb-4">
                Get Nutrition Tips Straight from Julia Glanz
              </h2>
              <h3 class="mb-4">Registered Dietician, CSCS</h3>
              <p class="main_p mb-4">
                Julia Glanz is a Registered Dietitian with a Masters Degree In
                Nutritional Science, a Certified Strength & Conditioning
                Specialist and a former Division 1 soccer player.
              </p>
              <p class="main_p">
                Julia's specialty as a Registered Dietitian is in educating
                people how to optimize the key hormones affecting their energy,
                metabolism, and body composition through strategic nutrition and
                lifestyle changes.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="opt_straight_tips_img">
              <img src="https://i.ibb.co/ZVrSb8g/tips.jpg" alt="Julia Glanz" />
            </div>
          </div>
        </div>
      </div>
    </section>


<!-- opt_email_below -->
    <section class="opt_email_below">
        <div class="d-flex align-items-center justify-content-between">
            <div class="opt_email_below_item">
              <div class="opt_email_below_item_wrapper">
                <p class="main_p mb-3">
                  Enter your email below to get
                  <strong>FREE nutrition tips</strong> delivered to your email
                  each week to help you <strong>burn fat and fuel</strong> your
                  <strong>best workouts ever!</strong>
                </p>
                <form class="opt_cutom_form">
                  <input
                    class="opt_input"
                    placeholder="Name"
                    id="opt_email_below_input_name"
                    type="text"
                  />
                  <input
                    class="opt_input"
                    placeholder="Email"
                    id="opt_email_below_input_email"
                    type="email"
                    required
                  />
                  <button
                    type="button"
                    class="opt_btn"
                    id="opt_email_below_custom_submit"
                  >
                    Send My Nutrition Tips!
                  </button>
                </form>
                <p class="opt_validation_message">required valid email</p>
                <div class="message_confirm" id="opt_email_below_message_confirm">
                  <div class="message_confirm_content">
                    <p class="main_p">
                      Thanks for signing up! Check your inbox for your tip!
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div class="opt_email_below_right_img">
            <img src="https://i.ibb.co/7ptB00B/opt-email.png" alt="vegitables">
          </div>
        </div>
      </div>
    </section>
`);


$('#opt_header_custom_submit').on('click', function () {
  let opt_name = $('#opt_header_input_name').val();
  let opt_email = $('#opt_header_input_email').val();

  if (validateEmail(opt_email)) {
    $('#fullname').val(opt_name);
    $('#email').val(opt_email);
    $('form._form ._submit').click();
    setTimeout(() => {
      $('header.opt_header .opt_form_here .message_confirm').show();
      $('header.opt_header .opt_form_here > p.main_p').hide();
      $('header.opt_header .opt_cutom_form').hide();
      $('header.opt_header .opt_form_here .opt_validation_message').hide();
    }, 2000);
  } else {
    $('header.opt_header .opt_form_here .opt_validation_message').show();
  }
});
$('#opt_body_custom_submit').on('click', function () {
  let opt_name = $('#opt_body_input_name').val();
  let opt_email = $('#opt_body_input_email').val();

  if (validateEmail(opt_email)) {
    $('#fullname').val(opt_name);
    $('#email').val(opt_email);
    $('form._form ._submit').click();
    setTimeout(() => {
      $('.opt_body_health .opt_validation_message').hide();
      $('.opt_body_health #opt_body_message_confirm').show();
      $('.opt_body_health .opt_cutom_form').hide();
    }, 2000);
  } else {
    $('.opt_body_health .opt_validation_message').show();
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};