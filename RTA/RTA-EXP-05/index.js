convert.$('head').append(`
<style>
.calendly-inline-widget {
  height: 1000px !important;
}
#content
  > div
  > div
  > section
  > div.elementor-container.elementor-column-gap-default {
  gap: 50px;
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
.rta_consultation h1 span {
  color: #44c7f3;
}
.rta_list_item {
  display: flex;
}
.rta_list_circle {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #44c7f3;
  margin-right: 8px;
  margin-top: 8px;
}
.elementor-section.elementor-section-items-middle > .elementor-container {
  align-items: inherit;
}


@media (max-width: 725px) {
  .rta_consultation {
    width: 100%;
    padding: 0 10px;
  }
  .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-0692c1b {
    width: 90%;
    margin: 0 auto 30px;
  }
}
@media (min-width: 725px) and (max-width: 830px){
  .rta_consultation {
    width: 100%;
    padding: 0 10px;
  }
  .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-0692c1b {
    width: 92%;
    margin: 0 auto 10px;
    box-shadow: none;
    border-radius: 0px;
  }
  .calendly-inline-widget {
    height: 1100px !important;
  }
}
@media (min-width: 830px) and (max-width: 1180px) {
  .rta_consultation {
    width: 80%;
    margin: auto;
  }
  .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-0692c1b {
    width: 80%;
    margin: auto;
    box-shadow: none;
    border-radius: 0px;
  }
  .calendly-inline-widget {
    height: 1200px !important;
  }
}
@media (min-width: 1023px) and (max-width: 1180px) {
  #content
    > div
    > div
    > section
    > div.elementor-container.elementor-column-gap-default {
    gap: 50px;
    margin: 0 20px;
  }
  .elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-0692c1b {
    width: 45%;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin: 0;
  }
  .rta_consultation {
    width: 55%;
    margin: 0;
  }
}
</style>
`)
const newCopySection = `
<section class="rta_consultation">
  <h1>What can you expect from your <span>design call?</span></h1>
  <div class="rta_list_desc">
    <div class="rta_list_item">
      <div>
        <span class="rta_list_circle"></span>
      </div>
      <p>
        One-on-one guidance from an expert outdoor space designer to fully
        personalize your outdoor kitchen
      </p>
    </div>
    <div class="rta_list_item">
      <div>
        <span class="rta_list_circle"></span>
      </div>
      <p>
        Plan each step of your outdoor kitchen project so you can save time and
        complete your project hassle-free
      </p>
    </div>
    <div class="rta_list_item">
      <div>
        <span class="rta_list_circle"></span>
      </div>
      <p>
        Support on choosing the perfect appliances and layout so you can get
        creative in your new outdoor space
      </p>
    </div>
    <div class="rta_list_item">
      <div>
        <span class="rta_list_circle"></span>
      </div>
      <p>
        Go beyond our design tool to completely customize your outdoor kitchen —
        if you can think it, we can build it!
      </p>
    </div>
  </div>
</section>
`;

convert.$('#content > div > div > section > div.elementor-container.elementor-column-gap-default').prepend(newCopySection);
