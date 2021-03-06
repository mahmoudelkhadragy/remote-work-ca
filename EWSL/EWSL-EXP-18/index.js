


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


const currentUrl = window.location.href;

if (currentUrl.includes('https://www.englishworksheetsland.com/grades.html')) {
  document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <style>
    @import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap";@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";@import "https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap";#center:after,#center:before{background-image:none}.inner_banner--inner:after,.inner_banner--inner:before{background-image:none}#header,#footer{display:none}.inner_banner--inner{background-color:#fff}.inner_banner--inner h2:first-of-type{font-family:'Tenor Sans',sans-serif;color:#F5912A;font-weight:400;font-size:30px;margin-bottom:8px;border-bottom:none}.home-link-box h1{color:#0E1E38;font-size:36px;font-family:'Tenor Sans',sans-serif;margin-bottom:16px;font-weight:400}.home-link-box > p{font-family:'Poppins';font-size:14px;line-height:24px;color:#0E1E38;margin-bottom:25px}.topic_strip p{font-family:'Poppins';font-size:16px}.topic_strip p a{color:#3B5AED;font-family:'Poppins';font-size:16px}.topic_strip{border:1px solid #E4EAFB;box-shadow:none;background:url(https://i.ibb.co/ZxJNf6R/opt-paper.png),#fff;background-repeat:no-repeat;background-position:12px 18px;transition:all .2s ease-in-out}.topic_strip:hover{filter:drop-shadow(0px 1px 12px rgba(14,30,56,0.2))}.topic_strip:nth-child(odd){background-color:#EEF1FB;border:1px solid #E4EAFB}.signup-box{background:#E4EAFB;margin:30px auto 0}.signup-box h3{color:#0E1E38;text-align:center;font-family:'Tenor Sans',sans-serif;font-weight:400;font-size:22px;margin-top:5px;margin-bottom:15px}.signup-box h3 strong{font-weight:400}.signup-box input[type="submit"]{font-family:'Poppins',sans-serif;border-radius:6px;background:#363B53;font-weight:400;font-size:16px;color:#fff;border:1px solid transparent;transition:all .2s ease-in-out}.signup-box input[type="submit"]:hover{background:#262A3B;color:#fff}.signup-box input[type="submit"]:focus{border:1px solid #363B53}#sidebar-cta{background:url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648475758/sidebar-cta_cmusva.jpg) no-repeat center;background-size:cover;margin:auto}#sidebar-cta img{display:none}#sidebar-cta h3{font-family:'Tenor Sans',sans-serif;font-weight:400;font-size:22px;line-height:31px;text-align:center;margin-top:0;margin-bottom:190px;color:#fff}#sidebar-cta ul li{font-size:14px}#sidebar-cta ul li:before{content:url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648477454/sidebar-cta-icon_gb1hnv.svg)}.sidebar-btn .uptime{background:#FF8A00;transition:all .2s ease-in-out}.sidebar-btn .uptime:hover{background:#8668DA;color:#fff}.sidebar-btn .uptime:focus{background:#664FA6;color:#fff}.signup-box input[type="submit"]:hover,.signup-box input[type="submit"]:focus{background-color:#16CABD;color:#fff}@media (max-width: 991px){.topic_strip p{font-size:14px}.home-link-box h1{font-size:28px}.home-sidebar{position:inherit}.inner_banner--inner{padding:0 0 15px}}.con_navbar{border-bottom:1px solid #C9CDD9;padding:12px 10px;position:relative}.con_navbar_wrapper{display:flex;justify-content:space-between;align-items:center}.con_navbar_logo a{color:#363B53;font-family:"Nunito Sans",sans-serif}.con_navbar_logo a h2{font-size:21px;font-weight:700;color:#363B53;margin-bottom:4px;margin-top:0}.con_navbar_logo a p{font-size:12px;font-weight:400;margin:0;color:#363B53}.head_center ul li{display:inline-block;margin-right:15px;font-family:'Poppins',sans-serif}.head_center ul li a{font-family:'Poppins',sans-serif;color:#363B53}.head_center ul li a:hover{color:#ff680a}.head_center ul li:last-of-type{margin-right:0}.con_links{display:flex;gap:16px}.con_btn{padding:10px 18px;border-radius:6px;font-family:'Poppins',sans-serif;transition:all .2s ease-in-out}.search_btn{background-size:19px auto;background-repeat:no-repeat;background-position:19px 48%;background-color:#363B53;border-color:#363B53;color:#fff;padding:10px 20px 10px 42px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 19 18'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z'/%3E%3Cpath stroke='%23fff' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.5' d='m13.5 12.5 4 4'/%3E%3C/svg%3E")}.search_btn:hover{background-color:#16CABD;color:#fff}.signup_btn{color:#fff;background-color:#F5912A}.signup_btn:hover{background-color:#8668DA;color:#fff}.signup_btn:focus{background-color:#664FA6;color:#fff}.login_btn{background-color:transparent;color:#363B53;border:1px solid #C9CDD9}.login_btn:hover{background-color:#C9CDD9}.btn_mobile{position:absolute;right:25px;top:22px;color:#363B53;cursor:pointer;font-size:18px;display:none}.btn_mobile:hover{color:#F57D00}.con_fix_height{height:calc(100vh - 200px);display:flex;justify-content:center}@media (min-width: 1090px){.con_navbar{margin:0 10px}}@media (min-width: 988px) and (max-width: 1088px){.con_btn{padding:8px 15px;font-size:14px}.con_navbar_logo a h2{font-size:18px}.head_center ul li a{font-size:14px}.search_btn{padding-left:40px!important}}@media (max-width: 987px){.btn_mobile{display:block}.head_center{display:flex;justify-content:center;margin:0}.con_navbar_wrapper{display:block}.head_right{display:flex;justify-content:center}.con_links{display:flex;padding:0 5px}.con_btn{display:block;width:130px;text-align:center;font-size:14px}.search_btn{background-position:32px 47%}.head_left{width:fit-content}.head_right,.head_center{height:0;overflow:hidden;transition:all .2s ease-in-out}.con_fix_height{height:inherit;display:block}}@media (max-width: 485px){.head_center{justify-content:flex-start}.head_center ul li{display:block;margin-bottom:10px}.con_links{flex-direction:column}.con_btn,.con_links{width:100%}.con_btn{padding:10px 0!important}.search_btn{background-position:34%}}.con_footer{background-color:#363B53;padding:20px 10px;color:#fff}.con_footer .wrapper{background:transparent}.con_footer .con_footer_logo a{color:#fff;transition:all .2s ease-in-out}.con_footer_logo a:hover{text-decoration:underline}.con_footer_logo p{color:#fff;opacity:.5;font-size:12px;margin-top:8px}.con_footer_wrappe{display:flex;justify-content:space-between;align-items:center}.con_footer_links ul{list-style:none}.con_footer_links ul li{display:inline-block;margin-right:20px;font-size:13px}.con_footer_links ul li:last-child{margin-right:0}.con_footer_links ul li a{color:#fff;opacity:.7;transition:all .2s ease-in-out}.con_footer_links ul li a:hover{opacity:1;text-decoration:underline}@media (max-width: 935px){.con_footer_wrappe{flex-direction:column;text-align:center}.con_footer_logo{padding-bottom:15px}.con_footer_links{width:100%;border-top:1px solid #6b7385;padding-top:15px}.con_footer_links ul li{display:block;margin-bottom:10px;margin-right:0}.con_footer_links ul li:last-child{margin-bottom:0}}
    
    </style>
  `);
  window.addEventListener("resize", resizeFun);
  function resizeFun() {
    const parentMob = document.querySelector('.home-link-box');
    const parentDesk = document.querySelector('.container .row .col-12.col-lg-4');
    const inserted = document.querySelector('.home-sidebar');
    const referenceNodeMob = document.querySelector('.home-link-box > .topic_strip:first-of-type');

    if (window.innerWidth <= 991) {
      parentMob.insertBefore(inserted, referenceNodeMob);
    } else {
      parentDesk.insertBefore(inserted, null);
    }
  }
  resizeFun();

} else {
  document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <style>
@import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap";@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";@import "https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap";.list-unstyled{list-style:none}body{background-color:#fff}#header,#footer{display:none}.wrapper{max-width:1320px;width:100%;background:#fff;border:none;box-shadow:none}.breadcrumb{padding-bottom:0}.breadcrumb li a{color:#BCBCBC}.inner_banner .answer a{background:#F5912A;text-transform:uppercase;font-weight:500;font-size:16px;max-width:250px;display:block;transition:all .2s ease-in-out}.inner_banner .answer a:hover{background:#F57D00}.inner_banner .answer a svg{transform:translateY(2px);padding-right:5px}.inner_banner > img.right_image{display:none}#center .home_right{float:none;width:26%;margin-top:15px;padding-right:20px}#center .home_left{float:none;width:74%}#center{display:flex;justify-content:space-between;width:100%;padding:0}.home_right .right_image_container{display:none}.home_right > p{display:none}.new-right-sidebar #sidebar-cta{background:url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648475758/sidebar-cta_cmusva.jpg) no-repeat center;background-size:cover;margin-left:auto;border-radius:6px;margin-bottom:10px;border:none!important;padding:25px 15px 15px}.new-right-sidebar #sidebar-cta p{display:none}.new-right-sidebar #sidebar-cta h3{font-family:'Tenor Sans',sans-serif;font-weight:400;font-size:22px;line-height:31px;text-align:center;margin-top:0;margin-bottom:190px;color:#fff}.home-link-box{margin-top:0;box-shadow:none}.home-link-box > h1{color:#0E1E38;font-size:36px;font-family:'Tenor Sans',sans-serif;margin-bottom:16px}.home-link-box > p{font-family:'Poppins';font-size:14px;line-height:24px;color:#0E1E38;margin-bottom:25px}.home-link-box > h2{font-family:'Tenor Sans',sans-serif;color:#0E1E38;font-size:18px;font-weight:400;text-transform:uppercase;padding-bottom:5px;border-bottom:2px solid #FF8331;margin-bottom:20px;letter-spacing:.25em;margin-top:35px}.home-link-box > h2:first-of-type{margin-top:5px}.topic_strip{background:#FFF;border:1px solid #E4EAFB;border-radius:6px;margin-bottom:12px;transition:all .2s ease-in-out}.topic_strip:hover{filter:drop-shadow(0px 1px 12px rgba(14,30,56,0.2))}.gray-back,.second-back{background-color:#E4EAFB}.topic_strip p{background-position:5px 9px;background-image:url(https://i.ibb.co/ZxJNf6R/opt-paper.png);font-family:'Poppins';font-size:16px}.topic_strip p a{font-family:'Poppins',sans-serif;color:#3B5AED;font-weight:600}.inner_banner{border:none}.inner_banner > h2,.inner_banner > h3{font-family:'Tenor Sans',sans-serif;color:#F5912A;font-weight:400;font-size:30px;margin-bottom:8px}.inner_banner > h3{font-size:21px;margin-bottom:10px}.inner_banner > p{font-family:'Poppins',sans-serif;font-size:14px;color:#0E1E38;margin-bottom:15px}.inner_banner > p:last-of-type{margin-bottom:0}#sidebar-cta ul li:before{content:url(https://res.cloudinary.com/dv0yi7tc1/image/upload/v1648477454/sidebar-cta-icon_gb1hnv.svg);position:absolute;left:5px}#sidebar-cta ul li{position:relative;font-family:'Poppins',sans-serif;color:#fff!important;font-weight:400!important;background:none!important;font-size:14px}.con_container{max-width:1140px;margin:auto;padding:0 12px}.new-right-sidebar .uptime{padding:12px 0;max-width:100%;font-size:16px;font-weight:500;font-family:'Poppins',sans-serif;letter-spacing:1px;text-transform:uppercase}.new-right-sidebar .uptime:hover{background:#8668DA;color:#fff}.new-right-sidebar .uptime:focus{background:#664FA6;color:#fff}.signup_box{float:none;border:none;background:#E4EAFB;box-shadow:0 1px 4px #8a0000;border-radius:12px}.signup_box h2{color:#0E1E38;text-align:center;font-family:'Tenor Sans',sans-serif;font-weight:400;font-size:22px}.signup_box form{display:flex;justify-content:space-between}.singup-input{width:70%;margin-right:8px;width:70%;margin-right:8px;border:1px solid transparent;border-radius:6px;padding-left:10px;outline:none;transition:all .2s ease-in-out}.singup-input:focus{border:1px solid #0E1E38}.signup-button{font-family:'Poppins',sans-serif;width:30%;border-radius:6px;background:#363B53;padding:11px 0;font-weight:400;font-size:16px;color:#fff;transition:all .2s ease-in-out}.signup-button:hover,.signup-button:focus{background:#16CABD;color:#fff}#sidebar-cta > div{padding:10px 0}.breadcrumb ul{color:#BCBCBC}.inner_banner h1{font-family:'Tenor Sans',sans-serif;color:#F5912A!important;font-weight:400;padding-bottom:10px}.home-link-box > br,.inner_banner > br{display:none}@media (max-width: 991px){.wrapper{min-width:100%}#center{flex-direction:column}#center .home_right{flex:inherit;margin:auto;width:100%;max-width:340px;padding-right:0;margin-bottom:30px;margin-top:15px}#center .home_left{width:100%}#sidebar-cta ul li{padding-left:30px!important}.new-right-sidebar .uptime{margin-top:12px}.new-right-sidebar #sidebar-cta{border-radius:6px!important}#center .signup_box{border-radius:6px!important}.new-right-sidebar #sidebar-cta h3{padding-top:8px}.inner_banner.inner_banner--inner{margin-bottom:20px}.inner_banner > h2{font-size:24px}.topic_strip{margin-bottom:12px}.topic_strip p{font-size:14px}.home-link-box > h1{font-size:28px}.signup_box h2{margin-bottom:8px}}@media (max-width: 500px){#sidebar-cta ul li{font-size:13px}.new-right-sidebar .uptime{padding:10px 0;font-size:14px}}.con_navbar{border-bottom:1px solid #C9CDD9;padding:12px 10px;position:relative}.con_navbar_wrapper{display:flex;justify-content:space-between;align-items:center}.con_navbar_logo a{color:#363B53;font-family:"Nunito Sans",sans-serif}.con_navbar_logo a h2{font-size:21px;font-weight:700;color:#363B53;margin-bottom:4px}.con_navbar_logo a p{font-size:12px;font-weight:400;margin:0;color:#363B53}.head_center ul li{display:inline-block;margin-right:15px;font-family:'Poppins',sans-serif}.head_center ul li a{font-family:'Poppins',sans-serif;color:#363B53}.head_center ul li a:hover{color:#ff680a}.head_center ul li:last-of-type{margin-right:0}.con_links{display:flex;gap:16px}.con_btn{padding:10px 18px;border-radius:6px;font-family:'Poppins',sans-serif;transition:all .2s ease-in-out}.search_btn{background-size:19px auto;background-repeat:no-repeat;background-position:19px 48%;background-color:#363B53;border-color:#363B53;color:#fff;padding:10px 20px 10px 42px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 19 18'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z'/%3E%3Cpath stroke='%23fff' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.5' d='m13.5 12.5 4 4'/%3E%3C/svg%3E")}.search_btn:hover{background-color:#16CABD;color:#fff}.signup_btn{color:#fff;background-color:#F5912A}.signup_btn:hover{background-color:#8668DA;color:#fff}.signup_btn:focus{background-color:#664FA6;color:#fff}.login_btn{background-color:transparent;color:#363B53;border:1px solid #C9CDD9}.login_btn:hover{background-color:#C9CDD9}.btn_mobile{position:absolute;right:25px;top:22px;color:#363B53;cursor:pointer;font-size:18px;display:none}.btn_mobile:hover{color:#F57D00}.con_fix_height{height:calc(100vh - 200px);display:flex;justify-content:center}@media (min-width: 1090px){.con_navbar{margin:0 10px}}@media (min-width: 988px) and (max-width: 1088px){.con_btn{padding:8px 15px;font-size:14px}.con_navbar_logo a h2{font-size:18px}.head_center ul li a{font-size:14px}.search_btn{padding-left:40px!important}}@media (max-width: 987px){.btn_mobile{display:block}.head_center{display:flex;justify-content:center;margin:0}.con_navbar_wrapper{display:block}.head_right{display:flex;justify-content:center}.con_links{display:flex;padding:0 5px}.con_btn{display:block;width:130px;text-align:center;font-size:14px}.search_btn{background-position:32px 47%}.head_left{width:fit-content}.head_right,.head_center{height:0;overflow:hidden;transition:all .2s ease-in-out}.con_fix_height{height:inherit;display:block}}@media (max-width: 485px){.head_center{justify-content:flex-start}.head_center ul li{display:block;margin-bottom:10px}.con_links{flex-direction:column}.con_btn,.con_links{width:100%}.con_btn{padding:10px 0!important}.search_btn{background-position:34%}}.con_footer{background-color:#363B53;padding:20px 10px;color:#fff}.con_footer .wrapper{background:transparent}.con_footer .con_footer_logo a{color:#fff;transition:all .2s ease-in-out}.con_footer_logo a:hover{text-decoration:underline}.con_footer_logo p{color:#fff;opacity:.5;font-size:12px;margin-top:8px}.con_footer_wrappe{display:flex;justify-content:space-between;align-items:center}.con_footer_links ul{list-style:none}.con_footer_links ul li{display:inline-block;margin-right:20px;font-size:13px}.con_footer_links ul li:last-child{margin-right:0}.con_footer_links ul li a{color:#fff;opacity:.7;transition:all .2s ease-in-out}.con_footer_links ul li a:hover{opacity:1;text-decoration:underline}@media (max-width: 935px){.con_footer_wrappe{flex-direction:column;text-align:center}.con_footer_logo{padding-bottom:15px}.con_footer_links{width:100%;border-top:1px solid #6b7385;padding-top:15px}.con_footer_links ul li{display:block;margin-bottom:10px;margin-right:0}.con_footer_links ul li:last-child{margin-bottom:0}}
  
  </style>
  `);


  document.querySelector('.new-right-sidebar #sidebar-cta h3').textContent = "Teachers: Upgrade Now";
  const arrList = ["Print all 25,000+ worksheets", "All grade levels and topics", "Save endless hours of your time...", "Answers to everything too!"];
  const allElements = document.querySelectorAll('#sidebar-cta ul li');

  allElements.forEach((el, i) => {
    el.textContent = arrList[i];
  });
  document.querySelector('.uptime').textContent = "Upgrade Me Now";
  document.querySelector('.singup-input').setAttribute("placeholder", "Your Email Here");

  window.addEventListener("resize", resizeFun);
  function resizeFun() {
    const parentMob = document.querySelector('.home-link-box');
    const parentDesk = document.querySelector('#center');
    const inserted = document.querySelector('#center .home_right');
    const referenceNodeMob = document.querySelector('.home-link-box > h2:first-of-type');

    if (window.innerWidth <= 991) {
      parentMob.insertBefore(inserted, referenceNodeMob);
    } else {
      parentDesk.insertBefore(inserted, null);
    }
  }
  resizeFun();
}


const mobileBtn = document.querySelector(".btn_mobile");

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