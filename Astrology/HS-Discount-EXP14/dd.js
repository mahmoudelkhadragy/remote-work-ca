$('head').append(`<style>
.opt_banner1 {
  background-color: #272727;
  display: flex;
  align-items: center;
  padding: 18px 20px;
  gap: 20px;
  margin-bottom: 30px;
  background-image: url('https://i.ibb.co/8xKbtGX/opt-ast-back.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.opt_banner_img img {
  max-width: 50px;
}
.opt_banner1 p {
  width: 70%;
  color: #fff ;
  margin: 0 auto !important;
  font-weight: 300 !important;
  font-size: 20px !important;
  line-height: 31px;
  font-family: 'Khand' !important;
  text-align: center !important;
}

@media (max-width: 500px) {
  .opt_banner1 {
    flex-direction: column;
    background-size: 166%;
    padding: 72px 20px 20px;
  }
}
</style>`);

$('.woocommerce-product-details__short-description').after(`
<div class="opt_banner1">
  <p>
    Ready to bring clarity and insight to the uncertainties in your life?
    <strong>Get started with a free 2-week trial</strong>
    — you won’t be charged until your trial ends.
  </p>
</div>
`);

