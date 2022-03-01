var pageURL = convert.$(location).attr("href");
if (pageURL.includes("rtaoutdoorliving.com/product-category")) {
  addGuideSection();
}
if (pageURL.includes("rtaoutdoorliving.com/download-catalog/download-catalog-submit/?")) {
  addNewGuidCatalogLing();
}

function addGuideSection() {
  var selectedEle = convert.$('#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-65d9224.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div.elementor-element.elementor-element-30122d3.elementor-widget.elementor-widget-heading');
  selectedEle.find('h2').text('Make Planning Your Outdoor Kitchen Easy with Our Buyer’s Guide');
  selectedEle.append(`
  <p class="conv_para">
  Plan your outdoor kitchen with tips and advice from the experts in our free
  Buyer’s Guide. Inside, you’ll learn how to:
</p>
<ul class="conv_list_ul">
  <li>
    <span class="conv_icon"
      ><i aria-hidden="true" class="fas fa-check"></i
    ></span><span class="conv_text_info"
      >Decide which type of outdoor kitchen is best for your needs</span
    >
  </li>
  <li>
    <span class="conv_icon"
      ><i aria-hidden="true" class="fas fa-check"></i
    ></span><span class="conv_text_info"
      >Determine where your outdoor kitchen should be placed</span
    >
  </li>
  <li>
    <span class="conv_icon"
      ><i aria-hidden="true" class="fas fa-check"></i
    ></span><span class="conv_text_info"
      >Choose the perfect layout and appliances for your dream kitchen</span
    >
  </li>
  <li>
    <span class="conv_icon"
      ><i aria-hidden="true" class="fas fa-check"></i
    ></span><span class="conv_text_info"
      >Avoid common mistakes so your installation is quick and easy.</span
    >
  </li>
</ul>
  `);
  convert.$('.elementor-button-text').text('DOWNLOAD MY GUIDE');
}

function addNewGuidCatalogLing() {
  convert.$('#content > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-0683764.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-d5badcc > div > div.elementor-element.elementor-element-fcad4b9.elementor-align-justify.elementor-widget.elementor-widget-button > div > div > a').attr('href', 'https://drive.google.com/file/d/1yNRPJDhDegPv1kFhmB3jBbwpJ0lkuKMm/view')
}

convert.$('head').append(`
<style>
#content
  > div
  > section.elementor-section.elementor-top-section.elementor-element.elementor-element-65d9224.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default
  > div.elementor-container.elementor-column-gap-default
  > div
  > div
  > div.elementor-element.elementor-element-30122d3.elementor-widget.elementor-widget-heading
  h2 {
  font-weight: 700;
}

.conv_list_ul {
  color: #fff;
  display: inline-block;
  list-style: none;
  text-align: left;
  font-weight: 400;
}
.conv_list_ul li {
  display: flex;
  gap: 8px;
  padding: 5px 0;
}
.conv_icon {
  color: #44c7f3;
  font-size: 14px;
  padding-top: 2px;
}
.conv_para {
  color: #fff;
  margin: 20px 0;
  font-weight: 400;
  font-size: 17px;
}
@media (max-width: 570px) {
  .conv_list_ul {
    margin: 0;
  }
}
</style>
`)

