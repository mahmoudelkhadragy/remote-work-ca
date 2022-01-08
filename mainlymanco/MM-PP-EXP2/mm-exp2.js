setTimeout(() => {
  var nutritionalDetailsImg = "https://i.ibb.co/mTVLpS1/Group-29.png";
  var nutritionalDetailsImgDataSrcSet = `https://i.ibb.co/mTVLpS1/Group-29.png 200w,
    https://i.ibb.co/mTVLpS1/Group-29.png 400w,
    https://i.ibb.co/mTVLpS1/Group-29.png 600w,
    https://i.ibb.co/mTVLpS1/Group-29.png 800w,
    https://i.ibb.co/mTVLpS1/Group-29.png 1200w,
    https://i.ibb.co/mTVLpS1/Group-29.png 2000w`;
  var thirdImage = $("#21720488476869");
  var thirdDivInPreviwe = $(
    '.product-gallery__main .flickity-viewport .flickity-slider .product-gallery__image[data-title="Beef Jerky Flower Bouquet"] > a'
  );
  var thirdImgInThumbnails = $(
    ".product-gallery__thumbnails--bottom-thumbnails .product-gallery__thumbnail:nth-child(3) > img"
  );
  var addOnsSection = $("section.section.is-width-standard.has-gutter-enabled");
  var mainSection = $(
    "#shopify-section-product__main section.section.is-width-standard"
  );

  thirdDivInPreviwe.attr("href", nutritionalDetailsImg);
  thirdImage.attr("data-zoom-src", nutritionalDetailsImg);
  thirdImage.attr("data-src", nutritionalDetailsImg);
  thirdImage.attr("data-srcset", nutritionalDetailsImgDataSrcSet);
  thirdImgInThumbnails.attr("src", nutritionalDetailsImg);

  mainSection.after(addOnsSection);
}, 300);
