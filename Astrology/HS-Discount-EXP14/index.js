let page_url = $(location).attr("href");
let target_url = 'https://shop.astrology.com/product/astrology-plus-2/';
if (page_url.includes(target_url)) {
  $('head').append(`
    <style>
    .opt_banner1 {
      background-color: #272727;
      display: flex;
      align-items: center;
      padding: 18px 20px;
      gap: 20px;
      margin-bottom: 15px;
    }
    .opt_banner_img{
      background: rgb(114,139,245);
      background: linear-gradient(0deg, rgba(114,139,245,1) 0%, rgba(108,108,208,1) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 25px 19px 25px 23px;
      border-radius: 15px;
    }
    .opt_banner_img img{
      max-width: 50px;
    }
    .opt_banner1 p {
      color: #fff;
      margin: 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 26px;
    }
    
    @media(max-width: 500px){
      .opt_banner1 {
        flex-direction: column;
      }
    }
    </style>
  `);
  $('.summary.entry-summary h1.product_title').after(`
  <div class="opt_banner1">
  <div class="opt_banner_img">
    <img src="https://i.ibb.co/fScK2Mj/a.png" alt="astrology plus"/>
  </div>
  <p>
    Ready to bring clarity and insight to the uncertainties in your life?
    <strong>Get started with a free 2-week trial.</strong> You won’t be charged
    until your trial ends.
  </p>
</div>
  `);
}

$(document).ready(function () {
  setTimeout(() => {
    let page_url = $(location).attr("href");
    let target_url = 'https://shop.astrology.com/product/astrology-plus-2/';
    if (page_url.includes(target_url)) {
      console.log('changed is here');
      setTimeout(() => {
        $('head').append(`
      <style>
      .opt_banner1 {
        background-color: #272727;
        display: flex;
        align-items: center;
        padding: 18px 20px;
        gap: 20px;
        margin-bottom: 15px;
      }
      .opt_banner_img{
        background: rgb(114,139,245);
        background: linear-gradient(0deg, rgba(114,139,245,1) 0%, rgba(108,108,208,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 19px 25px 23px;
        border-radius: 15px;
      }
      .opt_banner_img img{
        max-width: 50px;
      }
      .opt_banner1 p {
        color: #fff;
        margin: 0 !important;
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
      }
      
      @media(max-width: 500px){
        .opt_banner1 {
          flex-direction: column;
        }
      }
      </style>
    `);
        $('.summary.entry-summary h1.product_title').after(`
      <div class="opt_banner1">
        <div class="opt_banner_img">
          <img src="https://i.ibb.co/fScK2Mj/a.png" alt="astrology plus"/>
        </div>
        <p>
          Ready to bring clarity and insight to the uncertainties in your life?
          <strong>Get started with a free 2-week trial.</strong> You won’t be charged
          until your trial ends.
        </p>
      </div>
    `);

      }, 1500);

    } else {
      window.location.href = "https://shop.astrology.com/product/astrology-plus-2/";
    }
  }, 8000);
});
