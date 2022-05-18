$(document).ready(function () {
  $('head').append(`
    <style>
    .opt_services {
      background-color: #f5f4f4;
      padding: 60px 0;
    }
    .opt_services .opt_services_container > h2 {
      font-family: "Georgia";
      font-size: 36px;
    }
    .opt_services .opt_services_container > p {
      font-size: 23px;
      font-family: "Segoe UI";
      margin-bottom: 50px;
    }
    .opt_services .opt_services_wrapper {
      display: flex;
      justify-content: center;
      gap: 65px;
    }
    .opt_services .opt_services_card {
      max-width: 435px;
      background-position: center;
      background-repeat: no-repeat;
      padding: 20px 15px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
    }
    .opt_services .opt_services-first {
      background-image: url(https://i.ibb.co/pPYRGqD/opt-back1.png);
    }
    .opt_services .opt_services-second {
      background-image: url(https://i.ibb.co/58TK4N1/opt-back2.png);
      color: #fff;
    }
    .opt_services .opt_services_card h4 {
      font-size: 30px;
      font-family: "Georgia";
    }
    .opt_services .opt_services_card p.opt_sub_title {
      font-family: "Segoe UI";
      font-size: 19px;
      margin-bottom: 10px;
    }
    .opt_services .opt_services-prices p {
      font-family: "Georgia";
      font-size: 43px;
    }
    .opt_services-prices span {
      font-family: "Segoe UI";
      font-size: 16px;
    }
    .opt_services .opt_services-first .opt_services-prices span {
      color: rgba(0, 0, 0, 0.6);
    }
    .opt_services .opt_services-first .opt_services-prices p {
      color: #005298;
    }
    .opt_services .opt_divider {
      width: 100%;
      height: 1px;
      background-color: #005298;
      opacity: 0.2;
      margin-bottom: 15px;
    }
    .opt_services .opt_services-second .opt_divider {
      background-color: #fff;
    }
    .opt_services .opt_services-second .opt_services-prices span {
      color: rgba(255, 255, 255, 0.7);
    }
    .opt_services .opt_services-prices-plus p {
      font-size: 23px;
      font-weight: 700;
      margin-top: 15px;
    }
    .opt_services .opt_services_card ul {
      padding: 0 40px 15px 15px;
    }
    .opt_services .opt_services_card ul li {
      display: flex;
      padding: 8px 0;
    }
    .opt_services .opt_services_card ul li svg {
      min-width: 20px;
    }
    .opt_services .opt_services_card ul li p {
      margin-left: 10px;
      font-family: "Segoe UI";
      font-size: 18px;
    }
    .opt_services .opt_last_h2 {
      font-family: "Georgia";
      font-size: 35px;
      text-align: center;
      margin-bottom: 20px;
      max-width: 700px;
      padding-top: 60px;
      padding-bottom: 25px;
      margin: auto;
      line-height: 44px;
    }
    .opt_services button.opt_go_top {
      background-color: #3cb878;
      padding: 13px 70px;
      margin: auto;
      display: block;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      border-radius: 6px;
    }
    .opt_services button.opt_go_top:hover {
      background-color: #39ab70;
    }
    .opt_services .opt_go_top .svg-inline--fa.fa-lg {
      vertical-align: -0.325em;
    }
    .opt_services .opt_service_first-part {
      min-height: 260px;
      padding: 0 15px;
    }
    @media (max-width: 390px) {
      .opt_services .opt_services_card {
        background-size: 200% !important;
      }
    }
    @media (max-width: 575.98px) {
      .opt_services .opt_services_wrapper {
        flex-direction: column;
        align-items: center;
      }
      .opt_services .opt_services_card {
        background-size: 150%;
      }
      .opt_services .opt_services_wrapper {
        padding: 0 10px;
      }
      .opt_services .opt_services_container > p{
        padding: 0 10px;
      }
    }
    
    @media (min-width: 576px) and (max-width: 767.98px) {
      .opt_services .opt_services_wrapper {
        flex-direction: column;
        align-items: center;
      }
    }
    
    @media (min-width: 768px) and (max-width: 991.98px) {
      .opt_services {
        padding: 60px 10px;
      }
      .opt_services .opt_services_wrapper {
        gap: 30px;
      }
      .opt_services .opt_services_card {
        background-size: 150%;
      }
    }
    </style>
   `)
  $('#howworks').after(`
  <section class="opt_services">
  <div class="opt_services_container max-w-screen-xl mx-auto">
    <h2 class="text-center">Two Approaches to Saving on Your Legal Case</h2>
    <p class="text-center">
      Speak to a lawyer in your free consultation to find out which option is
      best for you.
    </p>
    <div class="opt_services_wrapper">
      <div class="opt_services-first opt_services_card">
        <div class="opt_service_first-part">
          <h4>Unbundled Service</h4>
          <p class="opt_sub_title">“A La Carte” Legal Help</p>
          <div class="opt_services-prices">
            <p>$500 - $1500</p>
            <span>/per legal task </span>
          </div>
        </div>
        <div class="opt_service_secon-part">
          <div class="opt_divider"></div>
          <ul>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>Only Pay for the Legal Help You Need</p>
            </li>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>Fixed, Flat Fee Transparent Pricing</p>
            </li>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>The Most Affordable Way to Get Legal Help</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="opt_services-second opt_services_card">
        <div class="opt_service_first-part">
          <h4>Full Service</h4>
          <p class="opt_sub_title">“Pay As You Go” Full Representation</p>
          <div class="opt_services-prices">
            <p>$500 - $1500</p>
            <span>initial deposit</span>
          </div>
          <div class="opt_services-prices opt_services-prices-plus">
            <p>Plus $100 - $150</p>
            <span>/per week</span>
          </div>
        </div>
        <div class="opt_service_secon-part">
          <div class="opt_divider"></div>
          <ul>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>Representation from Start to Finish</p>
            </li>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>Payment Plans to Fit Almost Any Budget</p>
            </li>
            <li>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5293 0.200012L17.7992 1.86418L7.95745 16.7H5.68757L0.199219 8.66246L2.46909 6.44948L6.82251 10.6984L15.5293 0.200012Z"
                  fill="#409CFF"
                />
              </svg>
              <p>Free Consultation to Find Out Your Rights and Options</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="opt_last_h2">
      Connect with a Lawyer Now to Find Out Which Option Works Best For You
    </h2>
    <button class="opt_go_top">
      Continue
      <svg
        class="svg-inline--fa fa-angle-right fa-w-8 ml-2 fa-lg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
        ></path>
      </svg>
    </button>
  </div>
</section>

  `);
  $(".opt_go_top").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});