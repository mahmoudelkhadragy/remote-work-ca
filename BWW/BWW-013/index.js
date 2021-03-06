convert.$('head').append(`
<style>
@import url("https://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
.con_desk_banner{
  position: fixed;
  right: 10px;
  top: 180px;
  width: calc((calc(100% - 970px))/2);
  transition: all .2s ease-in-out;
  z-index: 888;
}
.con_desk_banner_wrapper{
  position: relative;
  max-width: 250px;
  margin: auto;
}
.con_desk_banner img{
  width: 100%;
}
.con_desk_banner p{
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  right: 14px;
  width: 54%;
  text-align: right;
  color: #fff;
  margin: 0;
}
.con_desk_banner a{
  position: absolute;
  bottom: 30px;
  left: 0;
  transform: translateX(11%);
  width: 82%;
  margin: auto;
  text-align: center;
  color: #fff;
  background-color: #F2B22A;
  border-radius: 6px;
  padding: 10px 0 9px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all .2s ease-in-out;
}
.con_desk_banner a:hover,
.con_desk_banner a:focus{
  text-decoration: none;
  background-color: #fff;
  color: #F2B22A;
}
.con_mob_banner{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: url('https://conversionadvocates.com/exp-images/bww/bww-013/con_mob_back.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  padding: 0;
}
.con_mob_banner a{
  padding: 10px;
  display: block;
  width: 100%;
}
.con_mob_banner p{
  font-family: "Proxima Nova", sans-serif;
  color: #fff;
  width: 220px;
  margin: 0;
  margin-left: 40%;
}
.con_close{
  position: absolute;
  right: 20px;
  top: -16px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-color: rgba(0, 0, 0, .4);
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 30px;
}

@media (min-width: 1390px) and (max-width: 1458px){
  .con_desk_banner p{
    font-size: 18px;
    line-height: 28px;
    top: 30px;
  }
  .con_desk_banner a{
    font-size: 15px;
    bottom: 12%;
  }
}

@media (min-width: 1330px) and (max-width: 1390px){
  .con_desk_banner p{
    font-size: 15px;
    line-height: 24px;
    position: absolute;
    top: 12%;
  }
  .con_desk_banner a{
    font-size: 14px;
    bottom: 9%;
  }
}

@media (min-width: 1270px) and (max-width: 1330px) {
  .con_desk_banner p{
    font-size: 13px;
    line-height: 21px;
    position: absolute;
    top: 12%;
  }
  .con_desk_banner a{
    font-size: 13px;
    bottom: 9%;
    padding: 6px 0 4px;
  }
}
@media (max-width: 1270px){
  .con_desk_banner{
    display: none;
  }
}
@media (min-width: 780px) and (max-width: 1270px){
  .con_mob_banner{
    display: block;
    background-image: url('https://conversionadvocates.com/exp-images/bww/bww-013/con_med_back.jpg');
  }
  .con_mob_banner p{
    width: 290px;
    margin-left: 120px;
  }
  #float_button{
    bottom: 95px !important;
  }
}

@media (max-width: 780px){
  .con_mob_banner{
    display: block;
  }
}
@media(max-width: 500px){
  .con_close{
    top: -13px;
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
}
@media(min-width: 380px) and (max-width: 500px){
  #float_button{
    bottom: 115px !important;
  }
}

@media(max-width: 380px){
  .con_mob_banner p{
    font-size: 13px;
    margin-left: 40%;
    width: 172px;
  }
  #float_button{
    bottom: 95px !important;
  }
}
</style>
`);

convert.$('body').append(`

<div class="con_desk_banner">
  <div class="con_desk_banner_wrapper">
    <img src="https://conversionadvocates.com/exp-images/bww/bww-013/con_desk_back.jpeg" alt="">
    <p>Do you <br>know which<br>crypto<br>exchange is<br>best for you?</p>
    <a href="https://www.buybitcoinworldwide.com/">Find out here</a>
  </div>
</div>

<div class="con_mob_banner">
  <span class="con_close">
    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7" stroke="white"/>
      <path d="M1 7L7 1" stroke="white"/>
    </svg>
  </span>
  <a href="https://www.buybitcoinworldwide.com/">
    <p>Do you know which crypto exchange is best for you? Find out here.</p>
  </a>
</div>

`);


convert.$('.con_close').on('click', function () {
  convert.$('.con_mob_banner').hide(100);
  if (convert.$(window).width() <= 500) {
    convert.$('#float_button').css('bottom', '20px !important');
  }
});

$(window).scroll(function () {
  let height = convert.$(window).scrollTop();
  let target = convert.$('.con_desk_banner');
  if (height > '120') {
    target.css('top', '20px');
  } else {
    target.css('top', '180px');
  }
});