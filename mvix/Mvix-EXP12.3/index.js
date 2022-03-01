setTimeout(function () {
  /*
      HEADER
   */

  // bg
  let header = document.getElementsByClassName('block-intro-with-form')[0];
  header.style.backgroundImage = "url('https://res.cloudinary.com/dv0yi7tc1/image/upload/v1641495557/mvix-header-gradient_gpy0st.jpg')";

  // replace main col
  let header_col = header.querySelector('.col-lg-7.col-md-6');
  header_col.classList.add('col-lg-8');
  header_col.classList.remove('col-lg-7');

  //remove right side banner
  document.getElementsByClassName('gform_legacy_markup_wrapper')[0].remove();

  //remove tag title
  header_col.getElementsByClassName('tag-title')[0].remove();

  // check list change fill
  const header_check_list = header_col.getElementsByClassName('check-list')[0];
  header_check_list.innerHTML = '';
  const header_check_items = [
    'Flexible & Affordable Options',
    '<b>Lifetime Warranty</b>',
    'Installation, Custom Design, and Ongoing Support',
    '<b>Starting at $29/month</b>, or pay a one-time cost, starting at <b>$299</b>',
    '<b>FREE</b> Award-Winning Cloud Software',
  ];
  for (ci = 0; ci < header_check_items.length; ci++) {
    let header_check_item = document.createElement('li');
    header_check_item.innerHTML = header_check_items[ci];
    header_check_list.append(
      header_check_item
    );
  }

  // header cta
  let header_cta = document.createElement('div'),
    header_cta_template = '' +
      '<h2 class="header-cta__title">Curious About Digital Signage Pricing?</h2>' +
      `<p class="header-cta__text">Get pricing information now and discover which solutions will work best for your project's budget</p>` +
      '<a href="https://mvixdigitalsignage.com/digital-signage-pricing/" class="btn header-cta__btn">Learn About Pricing</a>';
  ;
  header_cta.classList.add('header-cta');
  header_cta.innerHTML = header_cta_template;

  header_check_list.parentNode.insertBefore(header_cta, header_check_list.nextSibling);
}, 300);