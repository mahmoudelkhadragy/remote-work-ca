convert.$(document).ready(function () {
  convert.$('head').append(`
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
  <style>
  .con_trying {
    padding: 30px 0;
    margin: auto;
  }
  .con_trying h2 {
    text-align: center;
    margin-bottom: 50px;
  }
  .con_trying h2 span {
    color: #44c7f3;
  }
  .con_row {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1000px;
    margin: auto;
  }
  .con_trying .con_col {
    width: 50%;
  }
  .con_trying_item {
    display: flex;
    gap: 8px;
    padding: 5px;
  }
  .con_trying_item p {
    font-weight: 400;
    font-size: 17px;
  }
  .con_trying_img i {
    color: #d21313;
    display: inline-block;
    transform: translateY(3px);
  }
  /* con_compromise ----------------------------------------------------------------- */
  .con_compromise {
    text-align: center;
    padding: 80px 0;
    background: url(https://i.ibb.co/2n5LZ3w/con-back.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .con_compromise_content h2 {
    color: #fff;
  }
  .con_compromise_content h2:first-of-type {
    margin-bottom: 0;
  }
  .con_compromise_content h2:last-of-type {
    font-weight: normal;
    margin-bottom: 5px;
  }
  
  @media (max-width: 767px) {
    .con_compromise_content h2 {
      font-size: 26px;
    }
    .con_compromise{
      background-size: cover;
      background-position: 91%;
      background-repeat: no-repeat;
    }
  }
  /* con_reinvented  --------------------------------------------------- */
  .con_reinvented {
    padding: 30px 0;
  }
  .con_reinvented_container {
    width: 90%;
    margin: auto;
    max-width: 1000px;
  }
  .con_reinvented h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .con_reinvented h2 span {
    color: #44c7f3;
  }
  .con_reinvented .con_row {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .con_rein_item {
    padding: 15px;
  }
  .con_rein_item img {
    display: block;
    margin: auto;
  }
  .con_rein_item p {
    color: #343b41;
    font-size: 17px;
    font-weight: normal;
  }
  .con_rein_item p strong {
    font-weight: 600;
  }
  .con_reinvented_p {
    text-align: center;
    color: #343b41;
    font-size: 17px;
    margin-top: 15px;
    font-weight: normal;
  }
  .con_reinvented_p span {
    border-bottom: 1px solid #343b41;
  }
@media (max-width: 767px) {
  .con_reinvented{
    padding: 55px 0;
  }
  .con_reinvented h2 {
    font-size: 28px;
  }
  .con_reinvented .con_row {
    flex-direction: column;
    justify-content: center;
  }
  .con_rein_item {
    padding: 10px;
  }
}
/* con_l_kitchen ---------------------------------------------*/
@media (max-width: 767px) {
  .con_l_kitchen img {
    display: none;
  }
  .con_l_kitchen {
    height: 250px;
    background-image: url(https://i.ibb.co/VDbgg1v/rta-kitchen.jpg);
    background-size: 160%;
    background-position: -150px;
    background-repeat: no-repeat;
  }
}
/* con_create_kitchen  -------------------------------------------------------------------- */
.con_create_kitchen {
  padding: 40px 0;
}
.con_create_kitchen h2 {
  text-transform: initial;
  padding-bottom: 15px;
  text-align: center;
  margin-bottom: 40px;
}
.con_create_kitchen h2 span {
  color: #44c7f3;
}
.con_create_kitchen .con_container {
  max-width: 1000px;
  width: 98%;
  margin: auto;
}
.con_create_kitchen .con_row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 28px 16px;
}
.con_create_kitchen .con_create_item {
  position: relative;
  width: 31%;
  padding: 20px 30px;
  border: 2px solid #44c7f3;
  border-radius: 8px;
}
.con_create_kitchen .con_step {
  position: absolute;
  top: -21px;
  right: 35px;
  color: #44c7f3;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 20px;
  background: #fff;
  font-weight: 600;
  letter-spacing: 1px;
}
.con_create_kitchen .con_create_item p {
  font-size: 16px;
  font-weight: normal;
  color: #343B41;
}
.con_create_kitchen .con_create_item h4 {
  font-weight: 600;
  color: #343b41;
  margin: 10px 0 15px;
  text-transform: capitalize;
  font-size: 24px;
}
.con_start_design{
  background-color: #343B41;
  color: #fff !important;
  text-align: center;
  margin: 50px auto 40px;
  display: block;
  width: 230px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: normal;
  padding: 8px 0 6px;
  transition: all .2s ease-in-out;
}
.con_start_design:hover{
  background-color: #53D4FF;
}
@media (max-width: 767px) {
  .con_create_kitchen h2 {
    font-size: 30px;
  }
  .con_create_kitchen .con_create_item{
    width: 98%;
    text-align: center;
  }
  .con_create_kitchen .con_row {
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 35px;
  }
  .con_create_kitchen .con_step{
    right: calc(50% - 58px);
  }
}
/* con_steps ----------------------------------------*/
.con_steps {
  position: relative;
  padding: 40px 0;
  margin: 40px 0;
}
.con_steps .con_container {
  background-color: #44c7f3;
  padding: 30px 0;
}
.con_steps h2 {
  text-transform: initial;
  color: #fff;
}
.con_steps h2 span {
  color: #343b41;
}
.con_row {
  display: flex;
  flex-wrap: nowrap;
}
.con_steps .con_steps_item {
  width: 50%;
}
.con_steps .con_steps_item p {
  color: #fff;
  font-size: 17px;
}
.con_steps_shop_link {
  background-color: #fff !important;
  font-size: 18px;
  text-transform: capitalize;
  padding: 8px 20px 6px;
  margin: 10px 0;
  transition: all 0.2s ease-in-out;
}
.con_steps_shop_link:hover {
  background-color: #343b41;
  color: #fff;
}
.con_steps .con_steps_img_lg {
  position: absolute;
  width: 49%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
}
.con_steps .con_steps_img_lg img {
  width: 100%;
  max-width: 680px;
}
.con_steps .con_steps_img_sm {
  display: none;
}

@media (max-width: 767px) {
  .con_steps .con_steps_img_sm {
    display: block;
    margin-top: -90px;
  }
  .con_steps .con_steps_img_sm img {
    width: 100%;
  }
  .con_steps .con_steps_img_lg {
    display: none;
  }
  .con_steps .con_steps_item {
    width: 100%;
  }
  .con_steps .con_container {
    background-color: transparent;
    padding: 0;
  }
  .con_steps {
    background-color: #44c7f3;
  }
}
</style>
`)

  convert.$(`#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-460aa2f8.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default`).after(`
 <section class="con_trying elementor-section">
 <div class="con_trying_container">
   <h2>
     Trying to find a single <span>trustworthy solution</span><br />for
     your outdoor kitchen is frustrating.
   </h2>
   <div class="con_row">
     <div class="con_col">
       <div class="con_trying_item">
         <div class="con_trying_img">
           <i class="fas fa-ban"></i>
         </div>
         <p>No one wants an outdoor kitchen that loses its durability within the first 2 years</p>
       </div>
     </div>
     <div class="con_col">
       <div class="con_trying_item">
         <div class="con_trying_img">
           <i class="fas fa-ban"></i>
         </div>
         <p>No one wants their project to run over several weeks (or months!)</p>
       </div>
     </div>
     <div class="con_col">
       <div class="con_trying_item">
         <div class="con_trying_img">
           <i class="fas fa-ban"></i>
         </div>
         <p>No one wants to pay an expensive contractor who learns on the job and makes you pay for their mistakes</p>
       </div>
     </div>
     <div class="con_col">
       <div class="con_trying_item">
         <div class="con_trying_img">
           <i class="fas fa-ban"></i>
         </div>
         <p>No one wants to spend dozens of hours being a general contractor</p>
       </div>
     </div>
     <div class="con_col">
       <div class="con_trying_item">
         <div class="con_trying_img">
           <i class="fas fa-ban"></i>
         </div>
         <p>No one wants to be blindsided with unexpected costs and hidden fees</p>
       </div>
     </div>
   </div>
 </div>
</section>
<section class="con_compromise">
  <div class="con_compromise_content">
    <h2>You should not have to compromise.</h2>
    <h2>That’s where we come in.</h2>
  </div>
</section>
<section class="con_reinvented">
  <div class="con_reinvented_container">
    <h2>
      We Reinvented Your Experience.<br />
      Now <span>you’re the VIP</span>
    </h2>
    <div class="con_row">
      <div class="con_rein_item">
        <div class="con_rein_item_img">
          <img src="https://i.ibb.co/y4G2K6q/rein1.png" alt="3d serve" />
        </div>
        <p>
          Design your own outdoor kitchen with our self-serve 3D design
          tool. It is <strong>simple to use.</strong> Get excited to take
          control of your project!
        </p>
      </div>
      <div class="con_rein_item">
        <div class="con_rein_item_img">
          <img src="https://i.ibb.co/68rTZhN/rein2.png" alt="simplified" />
        </div>
        <p>
          Buying an RTA outdoor kitchen is <strong>simplified</strong> and
          <strong>convenient.</strong> Between superior service and minimal
          markups, <strong>you come out on top.</strong>
        </p>
      </div>
      <div class="con_rein_item">
        <div class="con_rein_item_img">
          <img src="https://i.ibb.co/6W5ZGhM/rein3.png" alt="matched" />
        </div>
        <p>
          Get matched with an Outdoor Kitchen Expert Designer that will see
          your project through and provide guidance
          <strong>without additional charge.</strong>
        </p>
      </div>
    </div>
    <p class="con_reinvented_p">
      <a href="https://rtaoutdoorliving.com/our-technology-approach/">Learn more</a> about how we reinvented your experience.
    </p>
  </div>
</section>
<!-- .con_create_kitchen -------------------------------------------------------- -->
<section class="con_create_kitchen">
<div class="con_container">
  <h2>
    With RTA, you create your<br />
    <span>dream outdoor kitchen</span>
  </h2>
  <div class="con_row">
    <div class="con_create_item">
      <div class="con_create_img">
        <img src="https://i.ibb.co/f0pjh9X/rta-1.png" alt="You Design" />
      </div>
      <h4>You Design</h4>
      <p>
        Design your dream outdoor kitchen with our 5 step 3D design tool,
        in under 5 minutes.
      </p>
      <span class="con_step">Step 1</span>
    </div>
    <div class="con_create_item">
      <div class="con_create_img">
        <img
          src="https://i.ibb.co/GCX51zf/rta-2.png"
          alt="You Personalize"
        />
      </div>
      <h4>You Personalize</h4>
      <p>
        Work one-on-one with an Outdoor Kitchen Design Expert to
        personalize your setup even further and plan for every step of
        your project.
      </p>
      <span class="con_step">Step 2</span>
    </div>
    <div class="con_create_item">
      <div class="con_create_img">
        <img src="https://i.ibb.co/4Rshz4c/rta-3.png" alt="We Deliver" />
      </div>
      <h4>We Deliver</h4>
      <p>
        All RTA outdoor kitchens are made to order and shipped from
        Cambridge City, Indiana. We make your design a reality and deliver
        everything needed to you, including the countertop and appliances!
        Nothing like made in the USA.
      </p>
      <span class="con_step">Step 3</span>
    </div>
    <div class="con_create_item">
      <div class="con_create_img">
        <img
          src="https://i.ibb.co/cFJmnmS/rta-4.png"
          alt="Assemble Seamlessly"
        />
      </div>
      <h4>Assemble Seamlessly</h4>
      <p>
        You won’t need more than one afternoon. Our assembly method means
        it’s 95% done for you. An RTA outdoor kitchen comes together as
        easily as a piece of furniture. You’ll barely break a sweat.
      </p>
      <span class="con_step">Step 4</span>
    </div>
    <div class="con_create_item">
      <div class="con_create_img">
        <img
          src="https://i.ibb.co/y6Jxyvk/rta-5.png"
          alt="Assemble Seamlessly"
        />
      </div>
      <h4>Cook, host, and get the party started!</h4>
      <p>Need we say more?</p>
      <span class="con_step">Step 5</span>
    </div>
  </div>
  <a class="con_start_design" href="https://design.rtaoutdoorliving.com/layout">Start designing</a>
</div>
</section>
<!-- .con_steps --------------------------------------------------------  -->
<section class="con_steps">
<div class="con_steps_img_sm">
  <img
    src="https://i.ibb.co/T88WXQc/rta-step-lg.png"
    alt="shop kitchen"
  />
</div>
<div class="con_container">
  <div class="con_row">
    <div class="con_steps_item">
      <h2>
        Skip a few steps with<br />
        <span>quick ship kitchens</span>
      </h2>
      <p>
        You can skip the entire design and personalization process if you
        want to receive your outdoor kitchen sooner.
      </p>
      <p>
        Our most popular designs are delivered to your door in as little
        as 2 weeks. A fast and simple way to buff your backyard.
      </p>
      <a
        class="con_steps_shop_link"
        href="https://rtaoutdoorliving.com/product-category/complete-outdoor-bbq-grill-islands/"
        >Shop Quick Ship Kitchens</a
      >
    </div>
  </div>
</div>
<div class="con_steps_img_lg">
  <img
    src="https://i.ibb.co/T88WXQc/rta-step-lg.png"
    alt="shop kitchen"
  />
</div>
</section>
`);
});

convert.$(document).ready(function () {
  convert.$('head').append(`
    <style>

    .con_learning_hub{
      padding: 40px 0;
      text-align: center;
    }
    .con_learning_hub h2{
      text-transform: initial;
    }
    .con_learning_hub h2 span{
      color: #44c7f3;
    }
    .con_learning_hub .con_container > p{
      margin-bottom: 20px;
    }
    .con_learning_hub .con_row{
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      max-width: 1000px;
      margin: auto;
      width: 90%;
    }
    .con_learning_hub .con_learning_item{
      width: 32%;
      position: relative;
    }
    .con_learning_hub .con_learning_item.first,
    .con_learning_hub .con_learning_item.second{
      width: 49%;
    }
    .con_learning_item .con_learning_info{
      position: absolute;
      bottom: 0;
      padding: 10px 15px;
      background-color: rgba(255, 255, 255, .85);
      width: 100%;
    }
    .con_learning_hub .con_learning_item img{
      width: 100%;
    }
    .con_learning_item .con_learning_info p{
      font-weight: 400;
      font-size: 17px;
      color: #343b41;
      margin-bottom: 5px;
    }
    .con_learning_item .con_learning_info a{
      display: block;
      margin: 5px auto;
      width: fit-content;
      font-weight: normal;
      text-decoration: underline;
      color: #343b41 !important;
      transition: all .2s ease-in-out;
    }
    .con_learning_item .con_learning_info a:hover{
      color: #44c7f3 !important;
    }
    .con_learning_link{
      background-color: #343b41;
      color: #fff !important;
      padding: 8px 20px 6px;
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
      display: block;
      width: fit-content;
      margin: 30px auto 10px;
    }
    @media (max-width: 767px) {
      .con_learning_item .con_row{
        flex-direction: column;
      }
      .con_learning_hub .con_learning_item{
        width: 100%;
      }
      .con_learning_hub .con_learning_item.first,
      .con_learning_hub .con_learning_item.second{
        width: 100%;
      }
      .con_learning_item .con_learning_info p{
        font-size: 15px;
      }
      .con_learning_item .con_learning_info a{
        font-size: 17px;
      }
    }
    </style> 
  `);

  convert.$(`#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5288bfb3.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default`).after(`
  <section class="con_learning_hub">
  <div class="con_container">
    <h2><span>Learning</span> Hub</h2>
    <p>Hosting hacks, outdoor kitchen knowledge, and more!</p>
    <div class="con_row">
      <div class="con_learning_item first">
        <div class="con_img">
          <img
            src="https://i.ibb.co/qxkW9Z6/learn1.png"
            alt="outdoor kitchen"
          />
        </div>
        <div class="con_learning_info">
          <p>Outdoor Kitchen Cost – 5 Helpful Considerations For You</p>
          <a href="https://rtaoutdoorliving.com/pricing-costs/">Read now</a>
        </div>
      </div>
      <div class="con_learning_item second">
        <div class="con_img">
          <img
            src="https://i.ibb.co/LgH65Wr/learn2.png"
            alt="outdoor kitchen"
          />
        </div>
        <div class="con_learning_info">
          <p>21 Outdoor Kitchen Ideas – Best Designs for Inspiration</p>
          <a href="https://rtaoutdoorliving.com/outdoor-kitchen-ideas-for-design-inspiration/">Read now</a>
        </div>
      </div>

      <div class="con_learning_item">
        <div class="con_img">
          <img
            src="https://i.ibb.co/9chpPhX/learn3.png"
            alt="outdoor kitchen"
          />
        </div>
        <div class="con_learning_info">
          <p>Outdoor Kitchen Countertops Options – 7 Considerations</p>
          <a href="https://rtaoutdoorliving.com/outdoor-kitchen-countertops-options/">Read now</a>
        </div>
      </div>

      <div class="con_learning_item">
        <div class="con_img">
          <img
            src="https://i.ibb.co/VL7nkny/learn4.png"
            alt="outdoor kitchen"
          />
        </div>
        <div class="con_learning_info">
          <p>Outdoor Kitchen Materials: What are the Best Options?</p>
          <a href="https://rtaoutdoorliving.com/best-outdoor-kitchen-materials/">Read now</a>
        </div>
      </div>
      <div class="con_learning_item">
        <div class="con_img">
          <img
            src="https://i.ibb.co/pJsmsNh/learn5.png"
            alt="outdoor kitchen"
          />
        </div>
        <div class="con_learning_info">
          <p>Building an Outdoor Kitchen – 10 Things to Know First</p>
          <a href="https://rtaoutdoorliving.com/building-outdoor-kitchen-what-to-know/">Read now</a>
        </div>
      </div>
    </div>
    <a
      class="con_learning_link"
      href="https://rtaoutdoorliving.com/learning-hub/"
      >Visit Our Learning Center</a>
  </div>
</section>
  `)
})