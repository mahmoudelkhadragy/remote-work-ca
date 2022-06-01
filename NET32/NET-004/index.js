$('head').append(`
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
  .opt_high_quality{
    display: flex;
    margin: 15px 0;
  }
  .opt_high_quality span{
    color: #4385F6;
    display: inline-block;
    margin-right: 8px;
  }
  .opt_high_quality p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
  }
  </style>  
`);

$('#product-description-attributes h2').before(`
  <div class="opt_high_quality">
    <span><i class="fas fa-check-circle"></i></span>
    <p>Quality is our highest priority. We only showcase the highest-quality products from trusted vendors.</p>
  </div>
`);

const ele = document.querySelector('#product-description-attributes h2');

ele.insertAdjacentHTML('beforebegin', `
<div class="opt_high_quality">
  <span><i class="fas fa-check-circle"></i></span>
  <p>Quality is our highest priority. We only showcase the highest-quality products from trusted vendors.</p>
</div>
`);