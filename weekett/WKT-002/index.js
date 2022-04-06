$('head').append(`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
<style>
#shopify-section-product-specification .feature-row{
  display: none;
}
.opt_wkt_safety{
  padding-bottom: 50px;
}
.opt_safety_info{
  margin: 10px 0;
  padding: 10px;
}
.opt_safety_info_img{
  margin-right: 10px;
}
.opt_wkt_safety .opt_safety_info_img{
  min-width: 36px;
}
.opt_wkt_safety_info h2{
  font-size: 53px;
  line-height: 65px;
}
@media (max-width: 750px){
  .opt_wkt_safety > div.row{
    flex-direction: column-reverse;
  }
  .opt_wkt_safety_info h2{
    font-size: 36px;
    line-height: 48px;
    text-align: center;
  }
}
</style>
`);

$('#shopify-section-product-specification').append(`
<div class="opt_wkt_safety page-width section_kettles">
<div class="row">
  <div class="col-12 col-md-8">
    <div class="opt_wkt_safety_info">
      <h2 class="mb-5">Built for Safety and Convenience</h2>
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
                class="img-fluid"
                src="https://i.ibb.co/r6P99K5/icon1.png"
                alt="icon_1"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">2200w Fast Boiling</h4>
              <p>
                Boil 1 cup in 1 minute so you can enjoy your beverage fast
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
              class="img-fluid"
                src="https://i.ibb.co/zZk5xzT/icon2.png"
                alt="icon_2"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">Limescale Filter</h4>
              <p>
                Removable limescale filter to keep your beverages tasting
                fresh
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
              class="img-fluid"
                src="https://i.ibb.co/yYdJ3rr/icon3.png"
                alt="icon_3"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">1.7 Litre Capacity</h4>
              <p>
                Holds up to 7 cups — just in case guests are on their way
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
              class="img-fluid"
                src="https://i.ibb.co/KNZbsX7/icon4.png"
                alt="icon_4"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">Rotating Base</h4>
              <p>
                Cordless 360 degree base with cord storage space for a
                tidy kitchen counter
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
              class="img-fluid"
                src="https://i.ibb.co/JqC49NG/icon5.png"
                alt="icon_5"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">Stainless Steel</h4>
              <p>
                High-quality stainless steel body, interior, spout, and
                filter
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="opt_safety_info d-flex">
            <div class="opt_safety_info_img">
              <img
              class="img-fluid"
                src="https://i.ibb.co/59kG7cf/icon6.png"
                alt="icon_6"
              />
            </div>
            <div class="opt_safety_info_details">
              <h4 class="mb-2">Water Gauge</h4>
              <p>Water gauge on both sides for easy accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="opt_wkt_safefty_img">
      <img
        class="img-fluid"
        src="https://i.ibb.co/N9MCN3H/kettle1min.png"
        alt="kettle"
      />
    </div>
  </div>
</div>
</div>
`);
