$(`head`).append(`
<style>
.opt_horoscope{
  background-image: url(https://i.ibb.co/nRjQJc5/opt-back.jpg);
  margin: 40px 0px;
  padding: 30px 10px 30px 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.opt_horoscope_info h2 {
  font-size: 25px;
  margin-bottom: 15px;
  line-height: 35px;
}
.opt_horoscope_info p {
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 30px;
}
.opt_horoscope .opt_link {
  background-color: #4d48af;
  padding: 11px 40px 9px;
  border-radius: 5px;
  font-weight: 600 !important;
  letter-spacing: 1px !important;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  margin-top: 10px;
}
.opt_horoscope .opt_link:hover {
  color: #4d48af;
  background-color: #fff;
}
.opt_horoscope_info {
  width: 80%;
}
@media (max-width: 600px) {
  .opt_horoscope{
    padding: 40px 10px;
  }
  .opt_horoscope_info {
    width: 98%;
    margin: auto;
    text-align: center;
  }
}
</style>
`)
$(`body > main > div > div > main > div.text-link.border-y-aquamarine.weekly`).before(`
<section class="opt_horoscope">
  <div class="opt_horoscope_info">
    <h2>Your Personalized Daily Horoscope Based on Your Birth Chart</h2>
    <p>
      Tune into your future with fully personalized horoscopes, readings, and
      much more from Astrology Plus.
    </p>
    <a class="opt_link" href="https://shop.astrology.com/product/astrology-plus/"
      >JOIN ASTROLOGY+</a
    >
  </div>
</section>
`);