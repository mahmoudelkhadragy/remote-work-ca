$('head').append(`
<style>
.opt_sign_container{
  position: relative;
}
.opt_first_img{
  max-width: 600px;
  display: block;
}
.opt_small_img{
  max-width: 95px;
  position: absolute;
  bottom: 48px;
  left: 40px;
}
.opt_sign_container img{
  width: 100%;
}
.plrl.bggray{
  background: none;
  padding: 0;
}
.plrl.bggray > div.row{
  display: none;
}
.plrl .plrs > h2,
.plrl .plrs > p{
  display: none;
}
.main > .container > .row:nth-child(2){
  display: flex;
  align-items: center;
}
@media (max-width: 991px){
  .opt_small_img{
    max-width: 125px;
    position: initial;
    margin: auto;
    padding-bottom: 20px;
  }
  .opt_first_img{
    display: auto;
  }
  .main > .container > .row:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
`);

$('.plrl.bggray').append(`
<div class="opt_sign_container">
  <div class="opt_first_img">
    <img
      class="img-fluid"
      src="https://i.imgur.com/hlp1cDy.png"
      alt="esign "
    />
  </div>
  <div class="opt_small_img">
    <img
      class="img-fluid"
      src="/static/company/images/2022/landingpage/spend-30-less-time-preparing-documents/Seal-of-Compliance.png"
      alt="HIPP verified"
    />
  </div>
</div>
`);
