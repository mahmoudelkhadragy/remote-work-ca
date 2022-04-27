
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
  font-weight: 400;
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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
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
  width: 55%;
  background-image: url(https://i.ibb.co/KVqFWKh/header-back8.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
header.opt_header .form_login {
  width: 45%;
  height: 100%;
}
header.opt_header .form_login .form_container {
  width: 70%;
  margin: auto;
  max-width: 530px;
  color: #fff;
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
    background-position: top;
  }
  header.opt_header .form_login {
    width: 100%;
    height: 100%;
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
  }
}

@media (min-width: 768px) and (max-width: 960px) {
  #page-theme .opt_header h1 {
    font-size: 25px !important;
    line-height: 35px !important;
  }
  header.opt_header .form_login .form_container {
    width: 90%;
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

/* opt_built_muscle */
.opt_built_muscle {
  padding: 50px 0;
}
.opt_built_muscle h2.main_h2 {
  color: #162535;
}
.opt_built_muscle .opt_built_muscle_img img {
  width: 100%;
}
@media (max-width: 767.98px) {
  .opt_built_muscle .opt_built_muscle_info {
    margin-bottom: 30px;
    text-align: center;
  }
  .opt_built_muscle {
    padding: 60px 0 0;
  }
}

/* opt_resistance */
.opt_resistance {
  padding: 20px 0;
}
.opt_resistance h2.main_h2 {
  color: #162535;
  width: 58%;
  margin: 30px auto;
  padding: 50px 0;
}
.opt_resistance .opt_res_item_img {
  background-color: #466cce;
  border-radius: 50%;
  padding: 10px;
  width: fit-content;
  margin: 0 auto 20px;
}
.opt_resistance .opt_res_item_img img {
  max-width: 60px;
}
@media (max-width: 767.98px) {
  .opt_resistance h2.main_h2 {
    color: #162535;
    width: 100%;
    margin: auto;
    padding: 10px;
  }
  .opt_resistance .opt_opt_resistance_item {
    margin-bottom: 35px;
  }
}
@media (min-width: 768px) and (max-width: 960px) {
  .opt_resistance h2.main_h2 {
    width: 80%;
  }
}

/* opt_challenge */
.opt_challenge {
  background-color: #d85743;
  padding: 90px 0;
  margin: 150px 0;
  color: #fff;
}
.opt_challenge h2.main_h2 {
  font-size: 32px !important;
}
.opt_challenge .opt_challenge_img {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 44%;
}
.opt_challenge .opt_challenge_img img {
  width: 100%;
}

@media (max-width: 767.98px) {
  .opt_challenge .opt_challenge_img {
    position: inherit;
    top: inherit;
    left: inherit;
    transform: translateY(0px);
    width: 100%;
    margin-top: 25px;
  }
  .opt_challenge {
    padding: 40px 0;
    margin: 30px 0;
  }
  .opt_challenge h2.main_h2 {
    font-size: 23px !important;
    text-align: center;
  }
  .opt_challenge p.main_p {
    text-align: center;
    font-size: 14px !important;
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
  margin-bottom: 20px;
}
.opt_registered .opt_registered_info span {
  display: inline-block;
  margin-right: 10px;
  color: #466cce;
}
.opt_registered .opt_registered_info i {
  font-style: normal !important;
}
.opt_registered_img img {
  width: 100%;
  margin: auto;
}
.opt_registered_img img:last-of-type {
  display: none;
}
@media (max-width: 767.98px) {
  .opt_registered h2.main_h2 {
    text-align: center;
  }
  .opt_registered {
    padding: 50px 0;
  }
  .opt_registered_img {
    margin-top: 25px;
  }
  .opt_registered_img img:last-of-type {
    display: block;
  }
  .opt_registered_img img:first-of-type {
    display: none;
  }
}

/* opt_free_res */
.opt_free_res {
  padding: 10px 0;
  color: #fff;
  margin: 100px 0;
}
.opt_free_res .container {
  position: relative;
  padding: 60px 0px;
  border-radius: 10px;
  background-image: url(https://i.ibb.co/NpzPnXh/opt-free.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.opt_free_res_item {
  padding-right: 35px;
}
.opt_free_res .opt_form_here > p.main_p {
  font-weight: 300;
  text-align: center;
}
.opt_free_res .opt_form_here > p.main_p strong {
  font-weight: 600;
}
.opt_free_res .opt_form_here .opt_cutom_form_wrapper {
  display: flex;
  gap: 25px;
}
.opt_free_res .opt_form_here .opt_btn {
  width: fit-content;
  padding: 15px 60px;
  margin: auto;
  background-color: #fae454;
  color: #162535;
  font-weight: 600;
  font-size: 16px;
}
.opt_free_res_img {
  position: absolute;
  left: 0;
  width: 33%;
  bottom: 0;
}
.opt_free_res_img img {
  width: 100%;
}
.opt_free_res .message_confirm_content {
  height: 150px;
}

@media (max-width: 767.98px) {
  .opt_free_res {
    margin: 25px 0;
  }
  .opt_free_res_item {
    padding: 0 20px;
  }
  .opt_free_res .row {
    margin-right: 0;
    margin-left: 0;
  }
  .opt_free_res_img {
    position: inherit;
    left: 0;
    width: 100%;
    bottom: 0;
    margin-top: 20px;
  }
  .opt_free_res .container {
    border-radius: 0;
    padding: 60px 0px 0;
  }
  .opt_free_res .opt_form_here > p.main_p {
    font-size: 16px !important;
  }
}
@media (max-width: 550px) {
  .opt_free_res .opt_form_here .opt_btn {
    width: 100%;
    padding: 15px;
    margin: auto;
  }
  .opt_free_res .opt_form_here .opt_cutom_form_wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .opt_free_res_img {
    margin-top: 20px;
  }
}

/* opt_experts */
.opt_experts {
  background-color: #fae454;
  padding: 70px 0;
  color: #162535;
  margin: 150px 0;
}
.opt_experts h2.main_h2 {
  color: #162535;
}
.opt_experts p.main_p {
  font-size: 15px !important;
}
.opt_experts .opt_challenge_img {
  position: absolute;
  left: inherit;
  right: 0;
  width: 55%;
}
@media (max-width: 767.98px) {
  .opt_experts {
    padding: 50px 0 0;
    margin: 75px 0;
  }
  .opt_experts .opt_challenge_img {
    position: inherit;
    left: inherit;
    right: 0;
    width: 100%;
    transform: translateY(25px);
    margin-top: 0;
  }
}

/* opt_email_below */
.opt_last_email {
  background-image: url(https://i.ibb.co/bXc5JKg/opt-last-email-back.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 80px 0;
  margin: 0;
}
.opt_last_email .opt_challenge_img {
  position: absolute;
  top: inherit;
  left: 0;
  bottom: 0;
  transform: translateY(0px);
  width: 54%;
  max-width: 820px;
}
.opt_last_email .opt_challenge_img_sm {
  display: none;
}
.opt_last_email .opt_btn {
  background-color: #fae454;
  color: #162535;
  font-weight: 600;
}
.opt_last_email .opt_btn:hover,
.opt_free_res .opt_form_here .opt_btn:hover {
  background-color: #466cce;
  color: #fff;
}
.opt_last_email p.main_p {
  font-weight: 300 !important;
}
.opt_last_email p.main_p strong {
  font-weight: 600 !important;
}
.opt_last_email .message_confirm_content {
  height: 150px;
  justify-content: start;
  text-align: left;
}
@media (max-width: 767.98px) {
  .opt_last_email {
    padding: 30px 0 0;
  }
  .opt_last_email .opt_challenge_img {
    display: none;
  }
  .opt_last_email .opt_challenge_img_sm {
    display: block;
    margin-top: 25px;
  }
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
            Recharge Your Fitness Routine with Weekly Resistance Band
            Workouts!
          </h2>
          <p class="main_p">
            Say goodbye to your monotonous fitness routine and shake things
            up with FREE weekly resistance band workouts!
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
          Recharge Your Fitness Routine with Weekly Resistance Band
          Workouts!
        </h1>
        <p class="main_p">
          Say goodbye to your monotonous fitness routine and shake things up
          with FREE weekly resistance band workouts!
        </p>
        <div class="opt_form_here">
          <p class="main_p">
            Enter your email below to get
            <strong>FREE resistance band workouts</strong>
            delivered to your email each week to help you
            <strong
              >burn fat, gain muscle, and recharge your routine!</strong
            >
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
              Send My Workouts!
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

<!-- opt_built_muscle -->
<section class="opt_built_muscle">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <div class="opt_built_muscle_info">
          <h2 class="main_h2 mb-4">
            All you need to build muscle and get lean is resistance bands
            and discipline!
          </h2>
          <p class="main_p">
            Is it time to shake up your fitness routine? The best way to get
            results fast is to keep your body active and introduce new
            movements into your workouts.
          </p>
          <p class="main_p">
            Resistance bands add weight to your usual bodyweight workouts,
            increasing your pump, effort, and your results. Each weekly
            resistance band workout from Living Fit is 20-40 minutes,
            maximizing every minute for a better workout!
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="opt_built_muscle_img">
          <img
            src="https://i.ibb.co/LPm43SN/nam1.jpg"
            alt="man with musscle"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- opt_resistance -->
<section class="opt_resistance text-center">
  <div class="container">
    <h2 class="main_h2 my-4">
      Why add resistance bands to your training routine
    </h2>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="opt_opt_resistance_item">
          <div class="opt_res_item_img">
            <img src="https://i.ibb.co/chqhkWf/opt-res-1.png" alt="res1" />
          </div>
          <div class="opt_res_info">
            <p class="main_p">
              Adding resistance bands breaks up monotony and keeps you
              motivated to work towards your goals.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="opt_opt_resistance_item">
          <div class="opt_res_item_img">
            <img src="https://i.ibb.co/RPyS154/opt-res-2.png" alt="res2" />
          </div>
          <div class="opt_res_info">
            <p class="main_p">
              Resistance bands allow you to target and grow muscles with a
              lower risk of injury than some exercises.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="opt_opt_resistance_item">
          <div class="opt_res_item_img">
            <img src="https://i.ibb.co/zxGLmPT/opt-res-3.png" alt="res3" />
          </div>
          <div class="opt_res_info">
            <p class="main_p">
              Resistance bands are lightweight and compact, making them easy
              to store or travel with.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="opt_opt_resistance_item">
          <div class="opt_res_item_img">
            <img src="https://i.ibb.co/3pxCvGG/opt-res-4.png" alt="res4" />
          </div>
          <div class="opt_res_info">
            <p class="main_p">
              An affordable alternative to dumbbells and other weights,
              resistance bands are inexpensive and versatile.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- opt_challenge -->
<section class="opt_challenge">
  <div class="container position-relative">
    <div class="row align-items-center">
      <div class="col-12 col-md-6"></div>
      <div class="col-12 col-md-6">
        <div class="opt_challenge_item">
          <h2 class="main_h2 mb-4">
            Challenge Yourself and Shake Up Your Routine with this Sample
            Workout!
          </h2>
          <p class="main_p mb-3">
            Not sure if resistance band workouts will help you reach your
            fitness goals?
          </p>
          <p class="main_p">
            Try out this sample workout — straight from our newsletter!
          </p>
        </div>
      </div>
    </div>
    <div class="opt_challenge_img">
      <img
        src="https://i.ibb.co/6nkgvCd/opt-challenge.jpg"
        alt="challenge"
      />
    </div>
  </div>
</section>

<!-- opt_registered -->
<section class="opt_registered">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <div class="opt_registered_info">
          <h2 class="main_h2 mb-5">
            Our weekly resistance band workouts will help you:
          </h2>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center">
              <span><i class="fas fa-check-circle"></i></span>
              <p class="main_p mb-0">Burn More Fat</p>
            </li>
            <li class="d-flex align-items-center">
              <span><i class="fas fa-check-circle"></i></span>
              <p class="main_p mb-0">Build More Muscle</p>
            </li>
            <li class="d-flex align-items-center">
              <span><i class="fas fa-check-circle"></i></span>
              <p class="main_p mb-0">Increase Mobility</p>
            </li>
            <li class="d-flex align-items-center">
              <span><i class="fas fa-check-circle"></i></span>
              <p class="main_p mb-0">Stay Consistent & Motivated</p>
            </li>
            <li class="d-flex align-items-center">
              <span><i class="fas fa-check-circle"></i></span>
              <p class="main_p mb-0">Use Equipment Safely</p>
            </li>
          </ul>
          <p class="main_p">...and become your fittest, healthiest self!</p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="opt_registered_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/ccXG1b1/opt-registered.png"
            alt="sports"
          />
          <img
            class="img-fluid"
            src="https://i.ibb.co/4psLr7m/opt-registered-sm.png"
            alt="sports"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- opt_free_res -->
<section class="opt_free_res">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-8">
        <div class="opt_free_res_item">
          <div class="opt_form_here">
            <p class="main_p mb-4 pb-2">
              Enter your email below to get
              <strong>FREE resistance band workouts</strong> delivered to
              your email each week to help you
              <strong
                >burn fat, gain muscle, and recharge your routine!</strong
              >
            </p>
            <form class="opt_cutom_form">
              <div class="opt_cutom_form_wrapper mb-2">
                <input
                  class="opt_input"
                  placeholder="Name"
                  id="opt_free_input_name"
                  type="text"
                />
                <input
                  class="opt_input"
                  placeholder="Email"
                  id="opt_free_input_email"
                  type="email"
                  required
                />
              </div>
              <p class="opt_validation_message">required valid email</p>
              <button
                type="button"
                class="opt_btn"
                id="opt_free_custom_submit"
              >
                Send My Workouts!
              </button>
            </form>
          </div>
          <div class="message_confirm" id="opt_free_message_confirm">
            <div class="message_confirm_content">
              <p class="main_p">
                Thanks for signing up! Check your inbox for your tip!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="opt_free_res_img">
      <img src="https://i.ibb.co/PFfs53s/Julia.png" alt="julia photo" />
    </div>
  </div>
</section>

<section class="opt_challenge opt_experts">
  <div class="container position-relative">
    <div class="row align-items-center">
      <div class="col-12 col-md-5">
        <div class="opt_challenge_item">
          <h2 class="main_h2 mb-4">
            Get Free Weekly Resistance Band Workouts from the Experts at
            Living Fit!
          </h2>
          <p class="main_p mb-3">
            At Living Fit, we know that two important motivators for
            sticking to your fitness routine are having fun and seeing fast
            results. Our resistance band workouts can help you do both.
          </p>
          <p class="main_p">
            We have decades of experience coaching and supporting people
            just like you to reach their ultimate fitness goals, get
            healthy, and feel better each day.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-7"></div>
    </div>
    <div class="opt_challenge_img">
      <img src="https://i.ibb.co/x8VZ04H/experts.jpg" alt="challenge" />
    </div>
  </div>
</section>

<!-- opt_last_email -->
<section class="opt_challenge opt_last_email position-relative">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-7"></div>
      <div class="col-12 col-md-5">
        <div class="opt_email_below_item_wrapper">
          <p class="main_p mb-4">
            Enter your email below to get
            <strong>FREE resistance band workouts</strong> delivered to your
            email each week to help you
            <strong
              >burn fat, gain muscle, and recharge your routine!</strong
            >
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
              Send My Workouts!
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
    </div>
    <div class="opt_challenge_img">
      <img
        src="https://i.ibb.co/9cW6spp/opt-last-email.png"
        alt="challenge"
      />
    </div>
  </div>
  <div class="opt_challenge_img_sm">
    <img
      class="w-100"
      src="https://i.ibb.co/9cW6spp/opt-last-email.png"
      alt="challenge"
    />
  </div>
</section>

<footer class="text-center py-4">
  <a href="https://www.living.fit">
    <img
      src="https://i.ibb.co/4FqPcpk/lf-small-logo-2.png"
      alt="living fit logo"
    />
  </a>
</footer>
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
$('#opt_free_custom_submit').on('click', function () {
  let opt_name = $('#opt_free_input_name').val();
  let opt_email = $('#opt_free_input_email').val();

  if (validateEmail(opt_email)) {
    $('#fullname').val(opt_name);
    $('#email').val(opt_email);
    $('form._form ._submit').click();
    setTimeout(() => {
      $('.opt_free_res .opt_validation_message').hide();
      $('.opt_free_res #opt_free_message_confirm').show();
      $('.opt_free_res .opt_cutom_form').hide();
    }, 2000);
  } else {
    $('.opt_free_res .opt_validation_message').show();
  }
});

$('#opt_email_below_custom_submit').on('click', function () {
  let opt_name = $('#opt_email_below_input_name').val();
  let opt_email = $('#opt_email_below_input_email').val();

  if (validateEmail(opt_email)) {
    $('#fullname').val(opt_name);
    $('#email').val(opt_email);
    $('form._form ._submit').click();
    setTimeout(() => {
      $('.opt_last_email .opt_validation_message').hide();
      $('.opt_last_email #opt_email_below_message_confirm').show();
      $('.opt_last_email .opt_cutom_form').hide();
    }, 2000);
  } else {
    $('.opt_last_email .opt_validation_message').show();
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};