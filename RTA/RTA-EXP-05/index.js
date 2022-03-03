convert.$('head').append(`
<style>
.calendly-inline-widget {
  height: 1000px;
}
.elementor-column-gap-default
  > .elementor-column
  > .elementor-element-populated {
  padding: 0;
}
.elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-0692c1b {
  width: 45%;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
.rta_consultation {
  width: 55%;
}
</style>
`)
const newCopySection = `
<section class="rta_consultation">
<div class="rta_row">
  <div class="rta_call_info">
    <h1>What can you expect from your <span>design call?</span></h1>
    <div class="rta_list_desc">
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          One-on-one guidance from an expert outdoor space designer to fully
          personalize your outdoor kitchen
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Plan each step of your outdoor kitchen project so you can save time
          and complete your project hassle-free
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Support on choosing the perfect appliances and layout so you can get
          creative in your new outdoor space
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Go beyond our design tool to completely customize your outdoor
          kitchen — if you can think it, we can build it!
        </p>
      </div>
    </div>
  </div>
  <div class="rta_calender">
    <div class="rta_info">
      <div class="rta_info_img">
        <img
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/254372/582345ce.png"
          alt="RTA Avatar"
        />
      </div>
      <div>
        <h4>RTA Design Consultation</h4>
        <div class="rta_con_time">
          <!-- here put the consultation duration by js -->
        </div>
      </div>
    </div>
    <div class="rta_date_time">
      <!-- put here the calender by js -->
    </div>
  </div>
</div>
</section>
`;

convert.$('.elementor-container.elementor-column-gap-default').prepend(newCopySection);