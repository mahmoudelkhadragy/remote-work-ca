setTimeout(() => {
  const con_products = [
    {
      productLink: '/ec/caviwipes-12-towelettes-large-6-x-675-d-149881',
      img: 'https://i.ibb.co/g6KXrVM/con-prod1.png',
      title: 'CaviWipes *Case of 12 Cans* Towelettes (Large: 6" x 6.75") 160 wipes per can',
      price: '68.18',
      ratingStars: 'recommendating-rating-5_0',
      ratingCount: '135',
      savePrice: '562.00',
      savePercent: '88',
    },
    {
      productLink: '/ec/cookwaite-lidocaine-hcl-2-epinephrine-1100000-local-d-27553',
      img: 'https://i.ibb.co/nf6bcMZ/con-prod2.png',
      title: 'Cook-Waite Lidocaine HCL 2% with Epinephrine 1:100,000 Local Anesthetic, Box of 50 - 1.7 mL Cartridges',
      price: '31.64',
      ratingStars: 'recommendating-rating-5_0',
      ratingCount: '456',
      savePrice: '54.99',
      savePercent: '42',
    },
    {
      productLink: '/ec/cavitron-fsi-slimline-focused-spray-ultrasonic-insert-d-17425',
      img: 'https://i.ibb.co/Jypvxf2/con-prod3.png',
      title: 'Cavitron FSI Slimline Focused Spray Ultrasonic Insert - 30K FSI-SLI 10S, 1/Pk',
      price: '108.50',
      ratingStars: 'recommendating-rating-4_5',
      ratingCount: '24',
      savePrice: '228.99',
      savePercent: '53',
    },
    {
      productLink: '/ec/septocaine-articaine-4-epinephrine-1100000-50-17-d-40817',
      img: 'https://i.ibb.co/sCmqtxh/con-prod4.png',
      title: 'Septocaine Articaine 4% with Epinephrine 1:100,000. Box of 50 - 1.7 mL',
      price: '52.92',
      ratingStars: 'recommendating-rating-5_0',
      ratingCount: '255',
      savePrice: '68.99',
      savePercent: '32',
    },
    {
      productLink: '/ec/dentapure-365-day-install-connecting-existing-system-d-109892',
      img: 'https://i.ibb.co/mCJHz59/con-prod5.png',
      title: 'DentaPure 365 Day Bottle - Install by connecting to your existing Bottle',
      price: '188.50',
      ratingStars: 'recommendating-rating-4_5',
      ratingCount: '3',
      savePrice: '282.99',
      savePercent: '33',
    },
    {
      productLink: '/ec/house-brand-nitrile-exam-gloves-small-100-d-113866',
      img: 'https://i.ibb.co/GVQDRxT/con-prod6.png',
      title: 'House Brand Nitrile Exam Gloves: Small, 100/Bx. Blue, Non-Sterile',
      price: '8.94',
      ratingStars: 'recommendating-rating-4_5',
      ratingCount: '250',
      savePrice: '23.78',
      savePercent: '62',
    },
    {
      productLink: '/ec/root-zx-ii-apex-locator-complete-unit-d-53284',
      img: 'https://i.ibb.co/MnCyd7K/con-prod8.png',
      title: 'Root ZX II Apex Locator, Complete Unit: 1 Unit, 1 Probe, 3 File Holders, 5',
      price: '892.88',
      ratingStars: 'recommendating-rating-4_5',
      ratingCount: '2',
      savePrice: '1,296.64',
      savePercent: '31',
    },
    {
      productLink: '/ec/house-brand-premium-nitrile-exam-gloves-medium-d-113867',
      img: 'https://i.ibb.co/GVQDRxT/con-prod6.png',
      title: 'House Brand Nitrile Exam Gloves: Medium, 100/Bx. Blue, Non-Sterile',
      price: '9.98',
      ratingStars: 'recommendating-rating-4_0',
      ratingCount: '270',
      savePrice: '34.71',
      savePercent: '71',
    },
    {
      productLink: '/ec/house-brand-lidocaine-hcl-2-epinephrine-1100000-d-101048',
      img: 'https://i.ibb.co/MhWtGH5/con-prod9.png',
      title: 'House Brand Lidocaine HCL 2% with Epinephrine 1:100,000 Local Anesthetic, Box',
      price: '31.15',
      ratingStars: 'recommendating-rating-5_0',
      ratingCount: '276',
      savePrice: '49.99',
      savePercent: '38',
    },
    {
      productLink: '/ec/tuttnauer-2340m-manual-autoclave-120v-chamber-9-d-43508',
      img: 'https://i.ibb.co/dm9s4sB/con-prod10.png',
      title: 'Tuttnauer 2340M Manual Autoclave, 120V. Chamber 9" x 18", Volume 5 Gal/19 L',
      price: '3,971.00',
      ratingStars: 'recommendating-rating-5_0',
      ratingCount: '2',
      savePrice: '4,694.18',
      savePercent: '15',
    },
  ];

  // const ele = document.getElementById('top-banner-container');

  // ele.insertAdjacentHTML("afterend", `
  // <div class="con_dental_products">
  //   <section>
  //     <h2>Everyday essentials for your practice</h2>
  //     <div class="con_products">
  //     </div>
  //   </section>
  // </div>
  // `);

  const productContainerEle = document.querySelector('.con_products');

  con_products.forEach((product) => {
    let productPart = `<div class="product-recommendation-container">
    <div class="product-recommendation">
      <a
        class="recommendation-image"
        href="${product.productLink}"
        ><img
          src="${product.img}" /></a
      ><a
        class="recommendation-title sm text-dark"
        href="${product.productLink}"
        >${product.title}</a
      ><a
        class="recommendation-price md"
        href="${product.productLink}"
        >$<span>${product.price}</span></a
      ><a
        class="recommendation-rating ${product.ratingStars}"
        href="${product.productLink}"
        ><div
          class="recommendation-ratings-inner-track ${product.ratingStars}"
        ></div>
        <div class="recommendation-ratings-count">${product.ratingCount}</div></a
      ><a
        class="recommendation-savings"
        href="${product.productLink}"
        ><span class="strike">$<span>${product.savePrice}</span></span>
        <span class="savings"
          ><span>${product.savePercent}</span>% <span>savings</span></span
        ></a
      >
    </div>
  </div>`

    if (productContainerEle) {
      productContainerEle.insertAdjacentHTML("beforeend", productPart)

    }

  });

}, 300);


document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", `
<style>
#top-banner-container{
  background-color: rgba(67, 133, 246, 0.09);
}
.con_dental_products{
  background-color: rgba(67, 133, 246, 0.09);
  padding-bottom: 45px;
}
.con_dental_products section{
  padding: 0 0 30px;
  border-bottom: 2px solid #4385F6;
}
.con_dental_products h2{
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #4385F6;
  margin-bottom: 35px;
  position: relative;
}
.con_dental_products h2::before,
.con_dental_products h2::after{
  content: "";
  position: absolute;
  width: 25%;
  height: 2px;
  background-color: #4385F6;
  top: 18px;
}
.con_dental_products h2::after{
  left: 0;
}
.con_dental_products h2::before{
  right: 0;
}

.con_products{
  display: flex;
  flex-wrap: wrap;
}
.con_products .product-recommendation-container{
  width: 20%;
  border: none !important;
}
.con_products .product-recommendation{
  border: none !important;
}
.con_dental_products .recommendation-image{
  padding-bottom: 15px;
}
@media (max-width: 1199.98px){
  #homepage #top-banner-container {
      margin-bottom: 0 !important;
  }
}
@media (max-width: 767px){
  .con_products .product-recommendation-container{
    width: 100%;
  }
  .con_dental_products h2{
    font-size: 25px;
  }
  .con_dental_products h2::before,
  .con_dental_products h2::after{
    display: none;
  }
  .con_dental_products section{
    padding-top: 20px !important;
    border-top: 2px solid #4385F6;
    width: 94%;
  }

}
@media (min-width: 768px) and (max-width: 1150px){
  .con_products .product-recommendation-container{
    width: 25%;
  }
  .con_dental_products h2{
    font-size: 27px;
  }
  .con_dental_products h2::before,
  .con_dental_products h2::after{
    width: 15%;
  }
  .con_dental_products section{
    padding: 0 0 30px !important;
  }
}
</style>
`);