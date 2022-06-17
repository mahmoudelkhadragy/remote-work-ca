convert.$('#content > div > .elementor-section:nth-child(3)').append(`
<section class="con_begs">
  <div class="con_container">
    <h2>
      Too many outdoor kitchen options force you to compromise.
      <span>RTA begs to differ</span>
    </h2>
    <div class="con_begs-info">
      <ul>
        <li>
          <img src="https://i.ibb.co/ph8Skph/con-rta-icon.png" alt="RTA icon" />
          <p>
            <strong>Lifetime Structural Guarantee:</strong> Your structure will
            be free from defects in workmanship and materials.
          </p>
        </li>
        <li>
          <img src="https://i.ibb.co/ph8Skph/con-rta-icon.png" alt="RTA icon" />
          <p>
            <strong>Safety Guarantee:</strong> Your island will meet the highest
            in safety requirements for ventilation and materials.
          </p>
        </li>
        <li>
          <img src="https://i.ibb.co/ph8Skph/con-rta-icon.png" alt="RTA icon" />
          <p>
            <strong>Successful Installation Guarantee:</strong> From design to
            install, we're behind you until you are grilling on your outdoor
            kitchen.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
`);

convert.$('#content > div > .elementor-section:nth-child(4) > .elementor-container').append(`
<section class="con_promise">
  <h2>Our Promise To You:</h2>
  <p>Right for you. Right to you. Ready to <span id="con_text_animate">Grill</span></p>
</section>
`);

let con_words = ['Grill', 'Gather', 'Host', 'Assemble'];
let con_index = 0;
setInterval(() => {
  if (con_index > con_words.length - 1) {
    con_index = 0;
  }
  convert.$('#con_text_animate').text(con_words[con_index]);
  con_index += 1;
}, 1200);

convert.$('head').append(`
<style>
@import url('http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812');
.con_container{
  margin: auto;
  max-width: 1050px;
}

.con_begs h2{
 font-family: 'Proxima Nova', sans-serif;
 font-size: 54px;
 font-weight: 700;
 color: #343B41;
 text-align: center;
 text-transform: inherit;
 margin: 0;
 padding-bottom: 40px;
}
.con_begs h2 span{
  color: #44C7F3;
}
.con_begs-info ul{
  list-style: none;
  margin: 0 auto;
  max-width: 630px;
}
.con_begs-info ul li{
  display: flex;
  align-items: start;
  margin-bottom: 30px;
}
.con_begs-info ul li p{
  font-size: 18px;
  margin: 0;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 400;
}
.con_begs-info ul li img{
  display: block;
  margin-right: 15px;
}
#content > div > .elementor-section:nth-child(3) > .elementor-container:first-of-type{
  display: none;
}
@media (max-width: 767px){
  .con_container{
    padding: 0 15px;
  }
  .con_begs h2{
    font-size: 36px;
    line-height: 45px;
  }
  .con_begs-info ul li p{
    font-size: 16px;
  }
  .con_begs-info ul li:last-of-type{
    margin-bottom: 0;
  }
}

/* con_promise */
#content > div > .elementor-section:nth-child(4) > .elementor-container > .elementor-column{
  display: none;
}
#content > div > .elementor-section:nth-child(4) > .elementor-container{
  display: block;
}
.con_promise{
  color: #fff;
}
.con_promise h2{
  text-align: center;
  margin: 0;
  font-size: 63px;
  font-weight: 700;
  font-family: 'Proxima Nova', sans-serif;
  text-transform: inherit;
}
.con_promise p{
  font-size: 44px;
  font-weight: 600;
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
}
.con_promise #con_text_animate{
  background-image: url(https://i.ibb.co/hZnXsn9/con-text-back.png);
  background-size: cover;
  mix-blend-mode: lighten;
  color: #000;
}
</style>
`);