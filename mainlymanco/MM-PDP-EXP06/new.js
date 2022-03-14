$(document).ready(function () {
  $('head').append(`
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">
  <link href="//db.onlinewebfonts.com/c/93a467f70a3e7b27a9b52a686f351dbe?family=DINNextLTPro-Regular" rel="stylesheet" type="text/css"/>
  <link href="//db.onlinewebfonts.com/c/3a88649e176a40a6d80b395ca0ae430d?family=DIN+Next+LT+Pro+Bold" rel="stylesheet" type="text/css"/>
  <style>
  .opt_expand_review_btn {
    background-color: #e6b800;
    color: #000;
    margin: 20px auto 28px;
    display: block;
    cursor: pointer;
    padding: 8px 30px 10px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    box-shadow: 2px 3px 5px 0 #8888886b;
    transition: all 0.2s ease-in-out;
  }
  .opt_expand_review_btn:hover {
    box-shadow: none;
  }
  .opt_expand_review_btn span {
    font-size: 19px;
    display: inline-block;
    margin-right: 6px;
    transform: translateY(2px) rotateZ(0deg);
    transition: all 0.2s ease-in-out;
  }
  .rotate_arrow {
    transform: translateY(4px) rotateZ(180deg) !important;
  }
  .stamped-content {
    display: none;
  }
  #shopify-section-6bff8187-4d01-448c-b804-d59044790bda,
  #shopify-section-e84b7939-1e1e-42fd-9ee6-693512db89fe,
  .product__social-share.has-padding-top {
    display: none;
  }
  #shopify-section-product__main
    > section
    > div
    > div
    > div.product__information.has-product-sticker.one-half.column.medium-down--one-whole
    > div.description.content.bottom.has-padding-top {
    display: none;
  }
  .opt_main_title {
    text-align: center;
    margin: 20px auto 40px;
    font-weight: 900;
    font-size: 40px;
    width: 68%;
    line-height: 50px;
  }
  #stamped-main-widget {
    margin-top: 30px;
  }
  @media (max-width: 676px) {
    .opt_main_title {
      width: 88%;
      font-size: 34px;
    }
  }
  
  
  </style>  
  `)
  var reviewPart = $('.stamped-content');
  $('.opt_expand_review_btn').on('click', function () {
    reviewPart.slideToggle(400);
  })
  $('.stamped-summary-actions-newreview').on('click', function () {
    showReviews();
  });
  $('.stamped-summary-actions-newquestion').on('click', function () {
    showReviews();
  });
  function showReviews() {
    if (reviewPart.css('display') == 'none') {
      reviewPart.slideDown(400);
    }
  }
  $('#shopify-section-product__main > section').after($('#shopify-section-f911cf84-7647-46e6-a12b-d78306b49462'))
  $('#shopify-section-product__main > section').after($('#shopify-section-d49c04fb-3488-4918-a75e-739fdc850645'))
});

