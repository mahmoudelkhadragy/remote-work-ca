document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<style>


@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
/* general style */
.list-unstyled{
  list-style: none;
}
body{
  background-color: #fff;
}
#header,
#footer{
  display: none;
}
.wrapper{
  max-width: 1320px;
  width: 100%;
  background: #fff;
  border: none;
  box-shadow: none;
}
.breadcrumb{
  padding-bottom: 0;
}
.breadcrumb li a{
  color: #BCBCBC;
}

.inner_banner .answer a{
  background: #F5912A;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  max-width: 250px;
  display: block;
  transition: all .2s ease-in-out;
}
.inner_banner .answer a:hover{
  background: #F57D00;
}
.inner_banner .answer a svg{
  transform: translateY(2px);
  padding-right: 5px;
}
.inner_banner > img.right_image{
  display: none;
}
/* home_right */
#center .home_right{
  float: none;
  width: 26%;
  margin-top: 15px;
  padding-right: 10px;
}
#center .home_left{
  float: none;
  width: 74%;
}
/* center */
#center{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}


.home_right .right_image_container{
  display: none;
}
.home_right > p{
  display: none;
}
.new-right-sidebar #sidebar-cta{
  background: url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648475758/sidebar-cta_cmusva.jpg) no-repeat center;
  background-size: cover;
  margin-left: auto;
  border-radius: 6px;
  margin-bottom: 10px;
  border: none !important;
  padding: 25px 15px 15px;
}
.new-right-sidebar #sidebar-cta p{
  display: none;
}
.new-right-sidebar #sidebar-cta h3{
  font-family: 'Tenor Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 190px;
  color: #fff;
}

.home-link-box{
  margin-top: 0;
  box-shadow: none;
}
.home-link-box > h1{
  color: #0E1E38;
  font-size: 36px;
  font-family: 'Tenor Sans', sans-serif;
  margin-bottom: 16px;
}
.home-link-box > p{
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 24px;
  color: #0E1E38;
  margin-bottom: 25px;
}
.home-link-box > h2{
  font-family: 'Tenor Sans', sans-serif;
  color: #0E1E38;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 2px solid #FF8331;
  margin-bottom: 20px;
  letter-spacing: 0.25em;
  margin-top: 35px;
}
.home-link-box > h2:first-of-type{
  margin-top: 5px;
}
.topic_strip{
  background: #FFFFFF;
  border: 1px solid #E4EAFB;
  border-radius: 6px;
  margin-bottom: 12px;
}
.gray-back,
.second-back{
  background-color: #E4EAFB;
}
.topic_strip p{
  background-position: 5px 9px;
  background-image: url(https://i.ibb.co/ZxJNf6R/opt-paper.png);
  font-family: 'Poppins';
  font-size: 16px;
}
.topic_strip p a{
  font-family: 'Poppins', sans-serif;
  color: #3B5AED;
  font-weight: 600;
}
.inner_banner{
  border: none;
}
.inner_banner > h2,
.inner_banner > h3{
  font-family: 'Tenor Sans', sans-serif;
  color: #F5912A;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 8px;
}
.inner_banner > h3{
  font-size: 21px;
  margin-bottom: 10px;
}
.inner_banner > p{
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color:#0E1E38;
  margin-bottom: 15px;
}
.inner_banner > p:last-of-type{
  margin-bottom: 0;
}
#sidebar-cta ul li:before{
  content: url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648477454/sidebar-cta-icon_gb1hnv.svg);
  position: absolute;
  left: 5px;
}
#sidebar-cta ul li{
  position: relative;
  font-family: 'Poppins', sans-serif;
  color: #fff !important;
  font-weight: 400 !important;
  background: none !important;
  font-size: 14px;
}

.con_container{
  max-width: 1140px;
  margin: auto;
  padding: 0 12px;
}

.new-right-sidebar .uptime{
  padding: 12px 0;
  max-width: 100%;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.signup_box{
  float: none;
  border: none;
  background: #E4EAFB;
  box-shadow: 0px 1px 4px rgb(54 59 83 / 10%);
  border-radius: 12px;
}

.signup_box h2{
  color: #0E1E38;
  text-align: center;
  font-family: 'Tenor Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
}
.signup_box form{
  display: flex;
  justify-content: space-between;
}
.singup-input{
  width: 70%;
  margin-right: 8px;
  width: 70%;
  margin-right: 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  padding-left: 10px;
  outline: none;
  transition: all .2s ease-in-out;
}
.singup-input:focus{
  border: 1px solid #0E1E38;
}
.signup-button{
  font-family: 'Poppins', sans-serif;
  width: 30%;
  border-radius: 6px;
  background: #363B53;
  padding: 11px 0;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  transition: all .2s ease-in-out;
}
.signup-button:hover{
  background: #262A3B;
}
#sidebar-cta > div{
  padding: 10px 0;
}
.breadcrumb ul{
  color: #BCBCBC;
}
.inner_banner h1{
  font-family: 'Tenor Sans', sans-serif;
  color: #F5912A !important;
  font-weight: 400;
  padding-bottom: 10px;
}
.home-link-box > br,
.inner_banner > br{
  display: none;
}
@media (max-width: 991px){
  .wrapper{
    min-width: 100%;
  }
  #center {
    flex-direction: column;
  }
  #center .home_right{
    flex: inherit;
    margin: auto;
    width: 100%;
    max-width: 340px;
    padding-right: 0;
    margin-bottom: 30px;
    margin-top: 15px;
  }
  #center .home_left{
    width: 100%;
  }
  #sidebar-cta ul li{
    padding-left: 30px !important;
  }
  .new-right-sidebar .uptime{
    margin-top: 12px;
  }
  .new-right-sidebar #sidebar-cta{
    border-radius: 6px !important;
  }
  #center .signup_box{
    border-radius: 6px !important;
  }
  .new-right-sidebar #sidebar-cta h3{
    padding-top: 8px;
  }
  .inner_banner.inner_banner--inner{
    margin-bottom: 20px;
  }
  .inner_banner > h2{
    font-size: 24px;
  }
  .topic_strip{
    margin-bottom: 12px;
  }
  .topic_strip p{
    font-size: 14px;
  }
  .home-link-box > h1{
    font-size: 28px;
  }
  .signup_box h2{
    margin-bottom: 8px;
  }
}
@media (max-width: 500px){
  #sidebar-cta ul li{
    font-size: 13px;
  }
  .new-right-sidebar .uptime{
    padding: 10px 0;
    font-size: 14px;
  }
}


/* con_navbar */
.con_navbar{
  border-bottom: 1px solid #C9CDD9;
  padding: 12px 10px;
  position: relative;
}

.con_navbar_wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.con_navbar_logo a{
  color: #363B53;
  font-family: "Nunito Sans", sans-serif;
}
.con_navbar_logo a h2{
  font-size: 21px;
  font-weight: 700;
  color: #363B53;
  margin-bottom: 4px;
}
.con_navbar_logo a p{
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  color: #363B53;
}
.head_center ul li{
  display: inline-block;
  margin-right: 15px;
  font-family: 'Poppins', sans-serif;
}
.head_center ul li a{
  font-family: 'Poppins', sans-serif;
  color: #363B53;
}
.head_center ul li a:hover{
  color: #ff680a;
}
.head_center ul li:last-of-type{
  margin-right: 0;
}
.con_links{
  display: flex;
  gap: 16px;
}
.con_btn{
  padding: 10px 18px;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  transition: all .2s ease-in-out;
}
.search_btn{
  background-size: 19px auto;
  background-repeat: no-repeat;
  background-position: 19px 48%;
  padding-left: 40px;
  background-color: #363B53;
  border-color: #363B53;
  color: #ffffff;
  padding: 10px 20px 10px 42px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 19 18'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z'/%3E%3Cpath stroke='%23fff' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.5' d='m13.5 12.5 4 4'/%3E%3C/svg%3E");
}
.search_btn:hover{
  background-color: #262A3B;
}
.signup_btn{
  color: #fff;
  background-color: #F5912A;
}
.signup_btn:hover{
  background-color: #F57D00;
}
.login_btn{
  background-color: transparent;
  color: #363B53;
  border: 1px solid #C9CDD9;
}
.login_btn:hover{
  background-color: #C9CDD9;
}
.btn_mobile{
  position: absolute;
  right: 25px;
  top: 22px;
  color: #363B53;
  cursor: pointer;
  font-size: 18px;
  display: none;
}
.btn_mobile:hover{
  color: #F57D00;
}
.con_fix_height{
    height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
}
@media (min-width: 1090px){
  .con_navbar{
    margin: 0 10px;
  }
}
@media (min-width: 988px) and (max-width: 1088px){
  .con_btn{
    padding: 8px 15px;
    font-size: 14px;
  }
  .con_navbar_logo a h2{
    font-size: 18px;
  }
  .head_center ul li a{
    font-size: 14px;
  }
  .search_btn{
    padding-left: 40px !important;
  }
}
@media (max-width: 987px){
  .btn_mobile{
    display: block;
  }

  .head_center{
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .con_navbar_wrapper{
    display: block;
  }
  .head_right{
    display: flex;
    justify-content: center;
  }
  .con_links{
    display: flex;
    padding: 0 5px;
  }
  .con_btn{
    display: block;
    width: 130px;
    text-align: center;
  }
  .con_btn{
    font-size: 14px;
  }
  .search_btn{
    background-position: 32px 47%;
  }
  .head_left{
    width: fit-content;
  }
  .head_right,
  .head_center{
    height: 0px;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  
  .con_fix_height{
    height: inherit;
    display: block;
  }

}
@media (max-width: 485px){
  .head_center{
    justify-content: flex-start;
  }
  .head_center ul li{
    display: block;
    margin-bottom: 10px;
  }
  .con_links{
    flex-direction: column;
  }
  .con_btn,
  .con_links{
    width: 100%;
  }
  .con_btn{
    padding: 10px 0 !important;
  }
  .search_btn{
    background-position: 34%;
  }
}



/* footer */
.con_footer{
  background-color: #363B53;
  padding: 20px 10px;
  color: #fff;
}
.con_footer .wrapper{
  background: transparent;
}
.con_footer 
.con_footer_logo a{
  color: #fff;
  transition: all .2s ease-in-out;
}
.con_footer_logo a:hover{
  text-decoration: underline;
}
.con_footer_logo p{
  color: #fff;
  opacity: .5;
  font-size: 12px;
  margin-top: 8px;
}
.con_footer_wrappe{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.con_footer_links ul{
  list-style: none;
}
.con_footer_links ul li{
  display: inline-block;
  margin-right: 20px;
  font-size: 13px;
}
.con_footer_links ul li:last-child{
  margin-right: 0;
}
.con_footer_links ul li a{
  color: #fff;
  opacity: .7;
  transition: all .2s ease-in-out;
}
.con_footer_links ul li a:hover{
  opacity: 1;
  text-decoration: underline;
}

@media (max-width: 935px){
  .con_footer_wrappe{
    flex-direction: column;
    text-align: center;
  }
  .con_footer_logo{
    padding-bottom: 15px;
  }
  .con_footer_links{
    width: 100%;
    border-top: 1px solid #6b7385;
    padding-top: 15px;
  }

  .con_footer_links ul li{
    display: block;
    margin-bottom: 10px;
    margin-right: 0px;
  }
  .con_footer_links ul li:last-child{
    margin-bottom: 0px;
  }
}

</style>
`);

document.querySelector('#header').insertAdjacentHTML('afterend', `
<nav class="con_navbar">
    <div class="con_navbar_wrapper">
      <div class="head_left">
        <div class="con_navbar_logo">
          <a href="/">
            <h2>English Worksheets Land</h2>
            <p>Common Core Aligned Language Arts Worksheets</p>
          </a>
        </div>
      </div>
      <div class="head_center">
        <ul class="list-unstyled">
          <li><a href="https://www.englishworksheetsland.com/grades.html">Grade Levels</a></li>
          <li><a href="https://www.englishworksheetsland.com/topics.html">Topics</a></li>
          <li><a href="https://www.englishworksheetsland.com/contact.html">Contact Us</a></li>
          <li><a href="https://www.englishworksheetsland.com/search/search.cgi">Search Site</a></li>
        </ul>
      </div>
      <div class="head_right">
        <div class="con_links">
          <a class="con_btn search_btn" href="https://www.englishworksheetsland.com/search/search.cgi">
            Search
          </a>
          <a class="con_btn signup_btn" href="https://www.englishworksheetsland.com/most/signup">Signup Now</a>
          <a class="con_btn login_btn" href="https://www.englishworksheetsland.com/most/login">Login</a>
        </div>
      </div>
    </div>
    <span class="btn_mobile"><i class="fa-solid fa-bars"></i></span>
  </nav>
`);
document.querySelector('.wrapper').insertAdjacentHTML('afterend', `
<footer class="con_footer">
  <div class="con_footer_wrappe wrapper">
    <div class="con_footer_logo">
      <a href="https://www.englishworksheetsland.com/">
        English Worksheets Land
      </a>
      <p>© All rights reserved.</p>
    </div>
    <div class="con_footer_links">
      <ul>
        <li><a href="https://www.englishworksheetsland.com/about.html">About Us</a></li>
        <li><a href="https://www.englishworksheetsland.com/core.html">How We Are Aligned To The Common
         Core</a></li>
        <li><a href="https://www.englishworksheetsland.com/resources.html">Educator Resources</a></li>
        <li><a href="https://www.englishworksheetsland.com/privacy.html">Privacy Policy</a></li>
        <li><a href="https://www.englishworksheetsland.com/newsletters.html">Newsletters</a></li>
      </ul>
    </div>
  </div>
</footer>
`);




const mobileBtn = document.querySelector(".btn_mobile");
const arrList = ["Print all 25,000+ worksheets", "All grade levels and topics", "Save endless hours of your time...", "Answers to everything too!"];
const allElements = document.querySelectorAll('#sidebar-cta ul li');
// mobile bar icon
mobileBtn.addEventListener("click", function () {
  let head_right = document.querySelector(".head_right");
  let head_center = document.querySelector(".head_center");
  console.log(head_right.style.height);
  if (head_right.style.height == '' || head_right.style.height == '0px') {
    head_right.style.height = "inherit";
    head_center.style.height = "inherit";
    head_center.style.margin = "20px 0";
  } else {
    head_right.style.height = "0";
    head_center.style.height = "0";
    head_center.style.margin = "0";
  }
});

document.querySelector('.new-right-sidebar #sidebar-cta h3').textContent = "Teachers: Upgrade Now";

allElements.forEach((el, i) => {
  el.textContent = arrList[i];
});
document.querySelector('.uptime').textContent = "Upgrade Me Now";
document.querySelector('.singup-input').setAttribute("placeholder", "Your Email Here");

const key = document.querySelector('.inner_banner .answer a');
if (key) {
  key.insertAdjacentHTML('afterbegin', `
  <svg width="20" height="20" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1470_650)">
      <path d="M20.1343 2.06492C17.3811 -0.688305 12.9172 -0.688305 10.1639 2.06492C7.97865 4.25018 7.52816 7.51301 8.81185 10.1429L6.84857 12.1062C6.83398 12.1208 6.82247 12.1382 6.8147 12.1573C6.80694 12.1764 6.80308 12.1969 6.80337 12.2175L6.82068 13.4444C6.82097 13.465 6.81712 13.4855 6.80936 13.5046C6.80159 13.5237 6.79007 13.5411 6.77548 13.5557L5.74943 14.5817C5.73144 14.5997 5.70928 14.613 5.68492 14.6203C5.66056 14.6277 5.63476 14.6289 5.60982 14.6239L4.62635 14.4258C4.60141 14.4208 4.57562 14.422 4.55126 14.4293C4.52691 14.4367 4.50475 14.4499 4.48675 14.4679L3.39796 15.5568C3.37094 15.5838 3.35491 15.6199 3.35297 15.6581L3.29033 16.8899C3.28927 16.9105 3.28408 16.9308 3.27507 16.9494C3.26605 16.968 3.25339 16.9846 3.23784 16.9982C3.22228 17.0118 3.20415 17.0221 3.18452 17.0286C3.16489 17.0351 3.14416 17.0376 3.12356 17.0359L2.08174 16.9501C2.05942 16.9483 2.03696 16.9513 2.01593 16.959C1.9949 16.9667 1.97581 16.9789 1.95997 16.9948L1.01251 17.9423C0.998172 17.9566 0.986798 17.9736 0.979039 17.9923C0.971279 18.011 0.967285 18.0311 0.967285 18.0514C0.967285 18.0716 0.971279 18.0917 0.979039 18.1104C0.986798 18.1292 0.998172 18.1462 1.01251 18.1605L1.4825 18.6304C1.49684 18.6448 1.50821 18.6618 1.51597 18.6805C1.52373 18.6992 1.52772 18.7193 1.52772 18.7396C1.52772 18.7598 1.52373 18.7799 1.51597 18.7986C1.50821 18.8173 1.49684 18.8344 1.4825 18.8487L1.12418 19.207C1.09613 19.2351 1.07996 19.2729 1.07902 19.3125L1.02978 21.4244C1.0293 21.4453 1.03305 21.466 1.04081 21.4854C1.04857 21.5048 1.06018 21.5224 1.07494 21.5371L1.4098 21.872C1.44074 21.9029 1.48332 21.9193 1.52697 21.917L3.57749 21.81C3.61558 21.808 3.65159 21.792 3.67855 21.765L12.0563 13.3873C14.6862 14.671 17.949 14.2205 20.1343 12.0352C22.8876 9.28203 22.8876 4.81814 20.1343 2.06492ZM19.1111 5.34936C18.4867 5.97378 17.4743 5.97378 16.8498 5.34936C16.2254 4.72494 16.2254 3.71251 16.8498 3.08809C17.4743 2.46367 18.4867 2.46367 19.1111 3.08809C19.7355 3.71251 19.7355 4.72494 19.1111 5.34936Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1470_650">
      <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
      </clipPath>
      </defs>
    </svg>
  `);
}
const urls = ['https://www.englishworksheetsland.com/descriptive.html', 'https://www.englishworksheetsland.com/inferences.html', 'https://www.englishworksheetsland.com/sentencecorrection.html'];
window.addEventListener("resize", resizeFun);
function resizeFun() {
  const currentUrl = window.location.href;

  const parentMob = document.querySelector('.home-link-box');
  const parentDesk = document.querySelector('#center');
  const inserted = document.querySelector('#center .home_right');
  const referenceNodeMob = document.querySelector('.home-link-box > p:first-of-type + br');
  const referenceNodeMobH2 = document.querySelector('.home-link-box > p:first-of-type + h2');
  const referenceNodeDir = document.querySelector('.home-link-box > h2:first-of-type');

  let finarRef;
  if (currentUrl.includes(urls[0]) || currentUrl.includes(urls[1]) || currentUrl.includes(urls[2])) {
    finarRef = referenceNodeDir;
  } else {
    finarRef = referenceNodeMobH2 ? referenceNodeMobH2 : referenceNodeMob;
  }

  if (window.innerWidth <= 991) {
    parentMob.insertBefore(inserted, finarRef);
  } else {
    parentDesk.insertBefore(inserted, null);
  }
}
resizeFun();
