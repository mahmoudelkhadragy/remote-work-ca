$('head').append(`
  <style>
  @import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
  #find-exchange {
    background-image: url(https://i.ibb.co/9tx1HNp/con-back.png);
    padding: 40px 0 100px;
    background-size: cover;
    height: initial;
  }
  #find-exchange > h2.map-title {
    display: none;
  }
  #find-exchange form.form-inline {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  #find-exchange form.form-inline h2.map-title-2 {
    font-family: "Proxima Nova", sans-serif;
    font-size: 18px;
    margin-top: 0 !important;
    color: #141414;
    font-weight: 400;
  }
  #find-exchange
    form.form-inline
    div.form-group
    span.select2-container
    > span.selection
    > span.select2-selection {
    border-radius: 20px;
    border: 1px solid rgba(36, 121, 198, 0.4);
  }
  .select2-container--default
    .select2-selection--single
    .select2-selection__arrow
    b {
    border-color: #2479c6 transparent transparent transparent !important;
  }
  
  .select2-container--default.select2-container--open
    .select2-selection--single
    .select2-selection__arrow
    b {
    border-color: transparent transparent #2479c6 transparent !important;
  }
  
  #find-exchange form.form-inline div.form-group {
    margin: 0;
  }
  
  #find-exchange form.form-inline div.form-group > span {
    max-width: 240px;
  }
  
  .con_header {
    text-align: center;
  }
  .con_header > h2 {
    font-size: 45px;
    color: #ffc107;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 700;
  }
  .con_header > p {
    color: #fff;
    font-size: 20px;
    font-family: "Proxima Nova", sans-serif;
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding-bottom: 40px;
  }
  
  .con_form_container {
    background-color: #fff;
    padding: 20px;
    border-radius: 100px;
    max-width: 900px;
    width: 100%;
    margin: auto;
  }
  
  form .con_subhead {
    color: #141414;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
  }
  
  @media (max-width: 815px) {
    #find-exchange {
      padding: 90px 0 80px;
    }
    #find-exchange form.form-inline {
      flex-direction: column;
      align-items: start;
      row-gap: 10px;
    }
    .con_form_container {
      max-width: 92%;
      border-radius: 25px;
      padding: 32px 20px;
    }
    #find-exchange form.form-inline div.form-group {
      width: 100%;
    }
    #find-exchange form.form-inline h2.map-title-2 {
      padding: 5px 0;
    }
    .form .con_subhead {
      margin-bottom: 5px;
    }
    #find-exchange form.form-inline div.form-group > span {
      width: 100% !important;
      max-width: 100%;
    }
    .con_header > h2 {
      font-size: 34px;
      text-align: left;
      padding: 0;
      max-width: 92%;
      margin: auto;
    }
    .con_header > p {
      font-size: 18px;
      text-align: left;
      max-width: 92%;
      margin: auto;
      padding: 20px 0 30px;
    }
  }
  
  @media (max-width: 500px) {
    #find-exchange {
      background-image: url(https://i.ibb.co/gzQ4nnX/back-mob.png);
    }
  }
  
  </style>
`);
$('#find-exchange').append(`<div class="con_header">
  <h2>Get Started with Bitcoin the Smart & Secure Way</h2>
  <p>
    Learn more about investing in crypto, discover verified exchanges to trade
    on, and find the safest ways to store your Bitcoin.
  </p>
  <div class="con_form_container"></div>
</div>`);
$('.con_form_container').append($('form.form-inline'));
$('#find-exchange form.form-inline h2.map-title-2').text('with');
$('#find-exchange form.form-inline').prepend(`<h2 class="con_subhead">Buy Bitcoin or Crypto in:</h2>`);

convert.$(document).ready(function () {
  convert.$('#find-exchange').append(`<div class="con_header">
  <h2>Get Started with Bitcoin the Smart & Secure Way</h2>
  <p>
    Learn more about investing in crypto, discover verified exchanges to trade
    on, and find the safest ways to store your Bitcoin.
  </p>
  <div class="con_form_container"></div>
</div>`);
  convert.$('.con_form_container').append(convert.$('form.form-inline'));
  convert.$('#find-exchange form.form-inline h2.map-title-2').text('with');
  convert.$('#find-exchange form.form-inline').prepend(`<h2 class="con_subhead">Buy Bitcoin or Crypto in:</h2>`);
});