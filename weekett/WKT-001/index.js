$('head').append(`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
<style>
#shopify-section-1574686523101 > div > div.section-header.text-left,
#shopify-section-1574686523101 > div > div.about_text.text-left,
#shopify-section-1574686523101
  > div
  > div.grid.grid--uniform.grid--flush-bottom.about_section_wrap {
  display: none;
}

.opt_smart_kettle h2 {
  font-size: 49px;
  margin-bottom: 20px;
  line-height: 51px;
}
.opt_smart_kettle_info {
  padding: 10px;
}
.opt_smart_kettle_info h3 {
  font-size: 22px;
}

@media (max-width: 960px) {
  .opt_smart_kettle h2 {
    font-size: 36px;
    line-height: 36px;
  }
  .opt_smart_kettle_info p {
    line-height: 19px !important;
  }
  .opt_smart_kettle_info h3 {
    font-size: 19px;
  }
  .opt_smart_kettle_info h3.pl-4{
    padding-left: 5px !important;
  }
}
</style>
`);

$(`#shopify-section-1574686523101 > div`).append(`
<section class="opt_smart_kettle">
<div class="row align-items-end">
  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <h2>Control Your Smart Kettle From Anywhere</h2>
      <p class="opt_main_p">
        Pair with our mobile app, Amazon Alexa, or Google Home to switch
        on, monitor temperature, and power off your kettle remotely.
      </p>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <div class="d-flex align-items-end mb-2">
        <div class="opt_smart_kettle_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/zZqpqRy/img1.png"
            alt="smart kettle"
          />
        </div>
        <h3>Schedule Your Brew<br />to Save Time</h3>
      </div>
      <p>
        Hitting the snooze button for the third time today? Set your smart
        kettle ahead of time and have your tea ready when you are.
      </p>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <div class="d-flex align-items-end mb-2">
        <div class="opt_smart_kettle_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/PtBNmxP/img2.png"
            alt="smart kettle"
          />
        </div>
        <h3>Switch On with Your<br />Voice or Smartphone</h3>
      </div>
      <p>
        No need to get up — operate your smart kettle from anywhere in
        your home using your smartphone or smart home device.
      </p>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <div class="d-flex align-items-end mb-2">
        <div class="opt_smart_kettle_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/18JSGpZ/img3.png"
            alt="smart kettle"
          />
        </div>
        <h3 class="pl-4">No Supervision<br />Required</h3>
      </div>
      <p>
        Smart kettle switches off to prevent dry-boiling so you don’t need
        to babysit. You’ll even get an app notification to let you know.
      </p>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <div class="d-flex align-items-end mb-2">
        <div class="opt_smart_kettle_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/ph1zw85/img4.png"
            alt="smart kettle"
          />
        </div>
        <h3 class="pl-4">A Perfect Cup<br />Every Time</h3>
      </div>
      <p>
        Get smooth, robust flavor in every cup. Choose the perfect
        temperature between 40°C and 100°C for the best flavor experience.
      </p>
    </div>
  </div>

  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="opt_smart_kettle_info">
      <div class="d-flex align-items-end mb-2">
        <div class="opt_smart_kettle_img">
          <img
            class="img-fluid"
            src="https://i.ibb.co/wg7XhX7/img5.png"
            alt="smart kettle"
          />
        </div>
        <h3 class="pl-4">Fast-Boiling<br />Technology</h3>
      </div>
      <p>
        Make up to 7 cups of boiling water at once and boil 1 cup in 1
        minute. Perfect for unexpected guests or family tea breaks.
      </p>
    </div>
  </div>
</div>
</section>
`)


