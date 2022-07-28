
$('head').append(`
<style>
#shopify-section-header .announcement-bar{
  display: none;
}
#content #shopify-section-sidebar{
  display: none;
}
#content #main{
  width: 100%;
}
#shopify-section-header .row .logo.img-logo .header-text{
  display: none;
}
#shopify-section-header .row .free-call,
#shopify-section-header .row #AccountsNav,
#shopify-section-header .row .login-top,
#shopify-section-header .row .search-form,
#shopify-section-header .row .cart-info,
#shopify-section-header .row nav.off-canvas-navigation,
nav.top-menu .hide-mobile,
#cartform .cart-actions > div:last-child{
  display: none;
}
nav.top-menu{
  padding: 7px 0;
}
@media (max-width: 767px){
  #shopify-section-header .row .logo.img-logo{
    padding-top: 60px;
    padding-bottom: 20px;
  }
}
</style>
`);

setTimeout(() => {
  const myInterval = setInterval(hidePurchased, 100);
  let x = 0;
  function hidePurchased() {
    x += 100;
    console.log(x)
    if ($('#cart-contents .cbb-also-bought-container').length) {
      console.log('fffffffffff')
      $('#cart-contents .cbb-also-bought-container.cbb-desktop-view').css('display', 'none');
      clearInterval(myInterval);
    }
  }
  setTimeout(() => {
    clearInterval(myInterval);
  }, 8000);

}, 100);
