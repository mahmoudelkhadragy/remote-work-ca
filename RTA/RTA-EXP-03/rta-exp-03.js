convert.$('head').append(`
<style>
/* general styles */
.conv_w_100 {
  width: 100%;
}

/* exp styles */
.conv_outdoor {
  padding: 20px 0;
}
.conv_row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.conv_col1 {
  width: 60%;
}
.conv_col2 {
  width: 40%;
}
.conv_order_1 {
  order: 1;
}
.conv_order_2 {
  order: 2;
}
.conv_first {
  background: rgba(237, 237, 237, 0.42);
}
.conv_second {
  background: #e8f7fc;
}
.conv_third {
  background: rgba(68, 199, 243, 0.27);
}

.conv_outdoor .outdoor_info {
  padding: 10px 30px;
}
.conv_outdoor .outdoor_info h2 {
  font-family: "Proxima Nova", sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 15px;
}
.conv_outdoor .outdoor_info h2 span {
  color: #44c7f3;
}
.conv_outdoor .outdoor_info p {
  color: #343b41;
  font-family: "Proxima Nova", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
}

@media (max-width: 575.98px) {
  .conv_col1 {
    width: 100%;
  }
  .conv_col2 {
    width: 100%;
  }
  .conv_row {
    flex-direction: column;
  }
  .conv_outdoor .outdoor_info {
    padding: 10px 15px;
  }
  .conv_order_1 {
    order: 2;
  }
  .conv_order_2 {
    order: 1;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .conv_outdoor .outdoor_info h2 {
    font-size: 24px;
  }
  .conv_outdoor .outdoor_info p {
    font-size: 14px;
  }
  .conv_outdoor .outdoor_info {
    padding: 10px 15px;
  }
}
</style>
`)

convert.$('#content > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-64a13486.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default').after(`<section class="container conv_outdoor">
<div class="conv_row conv_first">
  <div class="conv_col1">
    <div class="outdoor_info">
      <h2>We’re called <span>RTA Outdoor Kitchen</span> for a reason</h2>
      <p>
        RTA Outdoor Kitchen was created with the intention of providing
        you with a Ready To Assemble product. Let our team do all the
        heavy lifting by taking a complicated, labor and cost-intensive
        process, and simplify it for you. Our one-of-a-kind product is
        made of structured pannels that makes for an assembly process that
        takes a few hours to finish.
      </p>
    </div>
  </div>
  <div class="conv_col2">
    <div class="outdoor_img">
      <img
        class="conv_w_100"
        src="https://i.ibb.co/bH8F6LD/Rectangle-22-min.png"
        alt="kitchen out door"
      />
    </div>
  </div>
</div>
<div class="conv_row conv_second">
  <div class="conv_col2 conv_order_1">
    <div class="outdoor_img">
      <img
        class="conv_w_100"
        src="https://i.ibb.co/R0wxWL5/Rectangle-23-min.png"
        alt="support"
      />
    </div>
  </div>
  <div class="conv_col1 conv_order_2">
    <div class="outdoor_info">
      <h2>
        We’re here to provide expert <span>support & guidance</span>
      </h2>
      <p>
        You deserve a customer experience that matches the quality of our
        products, which is why our team prioirities one-on-one support.
        You’ll be matched with your own RTA expert that will walk you
        through the process, provide advice on how to create the ideal
        setup, and eliminate any unknowns.
      </p>
    </div>
  </div>
</div>
<div class="conv_row conv_third">
  <div class="conv_col1">
    <div class="outdoor_info">
      <h2>Quality control <span>like you’ve never seen</span></h2>

      <p>
        Our products are made in the USA, which gives us the ability to
        assure you that every inch of your outdoor kitchen is made with
        the utmost quality by a world-class team. With materials like
        composite fiber and rebar, your outdoor kitchen will have
        performance and durability in even the harshest of climates.
      </p>
    </div>
  </div>
  <div class="conv_col2">
    <div class="outdoor_img">
      <img
        class="conv_w_100"
        src="https://i.ibb.co/0fHRgpX/Rectangle-24-min.png"
        alt="quality control"
      />
    </div>
  </div>
</div>
</section>`);