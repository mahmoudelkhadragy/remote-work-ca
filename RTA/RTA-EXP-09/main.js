const con_url = convert.$(location).attr("href");
if (con_url.includes('https://rtaoutdoorliving.com/why-use-our-design-tool/')) {
  addChangesToTheNewPage();
}
function addChangesToTheNewPage() {
  convert.$(`head`).append(`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
  <style>
  @import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
  #page > #content{
    display: none;
  }
  .con_outdoor_kitchen .con_step {
    background-color: #44c7f3;
    margin: auto;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    display: block;
    width: fit-content;
    text-align: center;
    padding: 2px 16px;
    margin-bottom: 25px;
    font-weight: 400;
  }
  .con_outdoor_kitchen h2.main_h2 {
    text-align: center;
    font-family: "Proxima Nova", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-transform: inherit;
    width: 64%;
    margin: auto;
    line-height: 49px;
    padding: 40px 0 70px;
  }
  .con_outdoor_kitchen h2.main_h2 span {
    color: #44c7f3;
  }
  .con_outdoor_kitchen .con_outdoor_item_info h3 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-transform: inherit;
    margin-bottom: 15px;
  }
  .con_outdoor_kitchen p.main_p {
    font-size: 18px;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
  }
  .con_outdoor_kitchen .con_right_arrow {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .con_outdoor_kitchen .con_left_arrow {
    position: absolute;
    left: -77px;
    bottom: -35px;
  }
  .con_outdoor_kitchen .con_container {
    width: 90%;
    margin: auto;
  }
  .con_outdoor_kitchen .con_first {
    width: 70%;
    margin-bottom: 15px;
  }
  .con_outdoor_kitchen .con_second {
    width: 55%;
    margin-right: 30px;
    margin-bottom: 50px;
  }
  .con_outdoor_kitchen .con_last {
    width: 55%;
    margin-right: 30px;
  }
  .con_outdoor_kitchen .con_small_img {
    display: none;
  }
  .con_outdoor_kitchen .con_step_sm {
    display: none;
  }
  
  .con_bottom_link{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 30px 0;
    box-shadow: 0px -4px 19px -2px rgba(0, 0, 0, 0.11);
  }
  .con_bottom_link a{
    background-color: #343B41;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    padding: 4px 20px;
  }
  .con_bottom_link a:hover{
    text-decoration: none;
    background-color: #44c7f3;
  }
  
  @media (max-width: 767.98px) and (max-width: 1000px){
    .con_outdoor_kitchen .con_container{
      width: 100%;
    }
    .con_outdoor_kitchen h2.main_h2 {
      width: 85% !important;
    }
  }
  @media (max-width: 767.98px) {
    .con_bottom_link a{
      font-size: 15px;
    }
    .con_outdoor_kitchen h2.main_h2 {
      font-size: 30px;
      line-height: 37px;
      width: 99%;
      padding: 20px 0 40px;
    }
    .con_outdoor_kitchen .con_right_arrow,
    .con_outdoor_kitchen .con_left_arrow {
      display: none;
    }
    .con_outdoor_kitchen .con_outdoor_img{
      margin-bottom: 12px;
    }
    .con_outdoor_kitchen .con_outdoor_img img.m-auto{
      display: none !important;
    }
    .con_outdoor_kitchen .con_small_img {
      display: block;
    }
    .con_outdoor_kitchen .con_container {
      width: 98%;
      position: relative;
    }
    .con_outdoor_kitchen .con_last,
    .con_outdoor_kitchen .con_second,
    .con_outdoor_kitchen .con_first {
      width: 100%;
      margin-left: 40px;
    }
  
    .con_outdoor_kitchen .con_container::before {
      content: "";
      position: absolute;
      height: 90%;
      left: 0;
      top: 70px;
      border-left: 2px dashed #44c7f3;
    }
  
    .con_outdoor_kitchen .con_step_sm {
      display: block;
      position: absolute;
      top: 50px;
      left: -37px;
      z-index: 3;
      background-color: #44c7f3;
      color: #fff;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      line-height: 26px;
      text-align: center;
    }
    .con_outdoor_kitchen .con_step{
      display: none;
    }
    .con_outdoor_kitchen .con_last::before{
      content: "";
      position: absolute;
      height: 86%;
      width: 10px;
      left: -29px;
      top: 60px;
      background-color: #fff;
    }
  }
  </style>
  `)
  convert.$(`#page`).append(`
  <section class="con_outdoor_kitchen">
  <h2 class="main_h2">
    Bring Your Outdoor Kitchen Dream to Life with Our <span>3D Design Tool</span>
  </h2>
  <div class="con_container">
    <div class="row">
      <div class="con_outdoor_item position-relative con_first">
        <span class="con_step">step1</span>
        <span class="con_step_sm">1</span>
        <div class="row no-gutters">
          <div class="col-12 col-md-4">
            <div class="con_outdoor_img">
              <img
                class="img-fluid d-block m-auto"
                src="https://i.ibb.co/fMJ10Wq/rta-1.jpg"
                alt="step1"
              />
              <img class="img-fluid con_small_img" src="https://i.ibb.co/Y0bLzWP/con1.png" alt="step1">
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div class="con_outdoor_item_info">
              <h3>Select Your Layout</h3>
              <p class="main_p">
                Select sizes for each branch of your layout and decide where
                to place your grill, storage, and accessories.
              </p>
            </div>
          </div>
        </div>
        <div class="con_right_arrow">
          <img src="https://i.ibb.co/k1cfz5J/right-arrow.png" alt="right_arrow">
        </div>
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="con_outdoor_item position-relative con_second">
        <span class="con_step">step2</span>
        <span class="con_step_sm">2</span>
        <div class="row no-gutters">
          <div class="col-12 col-md-4">
            <div class="con_outdoor_img">
              <img
                class="img-fluid d-block m-auto"
                src="https://i.ibb.co/rbNF3qf/rta-2.jpg"
                alt="step2"
              />
              <img class="img-fluid con_small_img" src="https://i.ibb.co/wNRQPrN/2.png" alt="step2">
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="con_outdoor_item_info">
              <h3>Select Your Appliances</h3>
              <p class="main_p">
                Now that you’ve designed your layout, decide exactly which
                appliances to include among your grill, fridge, sink, and
                storage doors.
              </p>
            </div>
          </div>
        </div>
        <div class="con_left_arrow">
          <img src="https://i.ibb.co/51vgyxr/left-arrow.png" alt="left_arrow">
        </div>
      </div>
  </div>
  <div class="row">
    <div class="con_outdoor_item position-relative con_first">
      <span class="con_step">step3</span>
      <span class="con_step_sm">3</span>
      <div class="row no-gutters">
        <div class="col-12 col-md-4">
          <div class="con_outdoor_img">
            <img
              class="img-fluid d-block m-auto"
              src="https://i.ibb.co/jLC8kvy/rta-3.jpg"
              alt="step3"
            />
            <img class="img-fluid con_small_img" src="https://i.ibb.co/tDpbszC/3.png" alt="step3">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="con_outdoor_item_info">
            <h3>Choose Your Materials</h3>
            <p class="main_p">
              Decide which countertop to use with which finish style. Then
              get your free quote.
            </p>
          </div>
        </div>
      </div>
      <div class="con_right_arrow">
        <img src="https://i.ibb.co/k1cfz5J/right-arrow.png" alt="right_arrow">
      </div>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="con_outdoor_item position-relative con_last">
      <span class="con_step">step4</span>
      <span class="con_step_sm">4</span>
      <div class="row no-gutters">
        <div class="col-12 col-md-4">
          <div class="con_outdoor_img">
            <img
              class="img-fluid d-block m-auto"
              src="https://i.ibb.co/8DyxZrt/rta-4.jpg"
              alt="step4"
            />
            <img class="img-fluid con_small_img" src="https://i.ibb.co/z8B6m5T/4.png" alt="step4">
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="con_outdoor_item_info">
            <h3>Get One-On-One Help & Pricing</h3>
            <p class="main_p">
              Our outdoor kitchen expert designers help you finalize and
              personalize your setup with even more options. With their
              guidance, safely plan for your entire outdoor kitchen
              project at no extra charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="con_bottom_link">
  <a href="https://design.rtaoutdoorliving.com/">Start Designing</a>
</div>
  `)
}

convert.$(`a[href="https://design.rtaoutdoorliving.com/layout"]`).attr('href', 'https://rtaoutdoorliving.com/why-use-our-design-tool/');
convert.$(`a[href="https://design.rtaoutdoorliving.com/"]`).attr('href', 'https://rtaoutdoorliving.com/why-use-our-design-tool/');