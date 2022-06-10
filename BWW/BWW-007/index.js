$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
.navbar {
  margin: 0 !important;
}
.con_bww_banner {
  background-color: #001737;
  background-image: url(https://i.ibb.co/qY0G1CW/con-007back.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10px 0;
  margin-bottom: 40px;
  position: relative;
}

.con_banner_head {
  display: flex;
  justify-content: flex-end;
}
.con_bww_banner h2 {
  color: #fff;
  font-size: 39px;
  font-weight: 400;
  line-height: 50px;
  max-width: 200px;
  font-family: "Proxima Nova", sans-serif;
  margin: 0;
  padding-top: 15px;
}
.con_bww_banner ul {
  margin: 0;
  padding: 20px 0;
}
.con_bww_banner ul li {
  display: flex;
  color: #fff;
  position: relative;
  padding-left: 10px;
  margin-bottom: 15px;
}
.con_bww_banner ul li:last-of-type {
  margin-bottom: 0;
}
.con_bww_banner ul li::before {
  content: "";
  position: absolute;
  top: 7px;
  left: -8px;
  width: 8px;
  height: 8px;
  background-color: #ffc107;
  border-radius: 20px;
}
.con_bww_banner ul li p {
  font-family: "Proxima Nova", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.con_overlay{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
@media (max-width: 700px) {
  .con_bww_banner {
    background-image: url(https://i.ibb.co/1T9nyxF/con-007back-mob.png);
    background-size: 100%;
    background-position: bottom;
    padding-bottom: 240px;
    padding: 25px 0 240px 0;
  }
  .con_bww_banner h2{
    max-width: 290px;
  }
  .con_banner_head{
    justify-content: start;
  }
  .con_bww_banner h2{
    font-size: 33px;
  }
}
@media (min-width: 550px) and (max-width: 700px) {
  .con_bww_banner {
    background-size: 80%;
    background-position: 50% 85%;
    padding: 25px 0 300px 0;
  }
}
@media (min-width: 700px) and (max-width: 1100px) {
  .con_bww_banner{
    background-image: none;
  }
  .con_banner_head{
    justify-content: center;
    align-items: center;
  }
  .con_bww_banner .row{
    display: flex;
    align-items: stretch;
  }
  .con_bww_banner .container{
    position: relative;
    z-index: 3;
  }
}
</style>
`);
$('.navbar').after(`
<div class="con_bww_banner">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 con_banner_head">
        <h2>Why Buy Bitcoin Worldwide?</h2>
      </div>
      <div class="col-sm-6">
        <ul>
          <li>
            <p>We provide objective information based on how we analyze the market</p>
          </li>
          <li>
            <p>Our team has dedicated thousands of hours to researching Bitcoin and organized our greatest findings on this site</p>
          </li>
          <li>
            <p>We have nothing to sell you, we just want to help you make informed decisions</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="con_overlay">
  </div>
</div>
`);