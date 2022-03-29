var opt_container = $(`#shopify-section-cart-template > div > form > div.cart_form > div > div > div`);
$(`head`).append(`
<style>
#shopify-section-cart-template > div > form > div.cart_form > div > div > div > div.cart__shipping.rte{
  display: none;
}
#shopify-section-cart-template > div > form > div.cart_form > div > div > div{
  position: relative;
}
.opt_mr{
  margin-right: 10px;
}
.opt_weekett{
  position: absolute;
  width: 60%;
  padding: 17px 20px;
  top: 0;
  left: 30px;
  background-color: #D2E1E8;
}
.opt_weekett_item{
  display: flex;
  align-items: center;
  width: 50%;
  gap:10px;
}
.opt_weekett .opt_weekett_item:first-of-type,
.opt_weekett .opt_weekett_item:nth-of-type(2){
  margin-bottom: 10px;
}
.opt_weekett_item p{
  text-align: left;
}
.opt_weekett_container{
  display: flex;
  flex-wrap: wrap;
}
.opt_weekett_item_img img{
  width: 100%;
  margin: auto;
}
#shopify-section-cart-template > div > form > div.cart_form > div > div > div > div.cart__submit-controls{
  margin-top: 90px;
}
@media (max-width: 828px) {

  .opt_weekett {
    position: initial;
    left: 0;
    width: 100%;
    margin-top: 20px;
  }
  .opt_weekett_item{
    width: 100%;
  }
  .opt_weekett_item p{
    font-size: 16px !important;
  }
  .opt_weekett .opt_weekett_container {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .opt_weekett .opt_weekett_item:first-of-type,
  .opt_weekett .opt_weekett_item:nth-of-type(2) {
    margin-bottom: 0;
  }
}
</style>
`)

if (opt_container.length) {
  opt_container.append(`
  <div class="opt_weekett">
  <div class="opt_weekett_container">
    <div class="opt_weekett_item">
      <div class="opt_weekett_item_img">
        <img src="https://i.ibb.co/kcLsDfK/frame1.png" alt="icon" />
      </div>
      <p>30-day money back guarantee</p>
    </div>
    <div class="opt_weekett_item">
      <div class="opt_weekett_item_img">
        <img src="https://i.ibb.co/rwKPdG3/frame2.png" alt="icon" />
      </div>
      <p>2 Year Manufacturer Guarantee</p>
    </div>
    <div class="opt_weekett_item">
      <div class="opt_weekett_item_img opt_mr">
        <img src="https://i.ibb.co/gtDHMsW/frame3.png" alt="icon" />
      </div>
      <p>Boil dry security</p>
    </div>
    <div class="opt_weekett_item">
      <div class="opt_weekett_item_img">
        <img src="https://i.ibb.co/MMz58xP/frame4.png" alt="icon" />
      </div>
      <p>Easy set up in 2 minutes</p>
    </div>
  </div>
</div>
  `)
}