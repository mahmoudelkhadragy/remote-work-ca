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

h2 {
  font-family: "Nunito Sans", sans-serif;
}
.con_container{
  max-width: 1140px;
  margin: auto;
}
/* general style */
body{
  background-color: #E5E5E5;
}
.con_wrapper{
  max-width: 1200px;
  margin: auto;
}

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
  }
  .con_btn{
    display: block;
    width: 100px;
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

.con_worksheet{
  padding: 20px 0;
}
.con_worksheet_header{
  text-align: center;
  padding: 30px 15px 0;
}
.con_worksheet_header span.lock_icon{
  background-color: #F5912A;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  line-height: 54px;
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.con_worksheet_header h2{
  font-family: 'Tenor Sans', sans-serif;
  font-size: 40px;
  color: #373B54;
  padding: 15px 0;
}
.con_worksheet_header h2 span{
  color: #F5912A;
}
.con_worksheet_header p{
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #363B53;
}
.con_worksheet_header p a{
  font-weight: 600;
  color: #363B53;
  text-decoration: underline;
  transition: all .2s ease-in-out;
}
.con_worksheet_header p a:hover{
  text-decoration: none;
  color: #F57D00;
}

.con_become_member{
  background: #F6F7FE;
  box-shadow: 0px 1px 4px rgba(54, 59, 83, 0.1);
  border-radius: 15px;
  margin: 35px 15px;
  padding: 40px 70px;
}
.become_member-info{
  display: flex;
  justify-content: space-between;
}
.become_member-info ul:first-child{
  margin-right: 20px;
}
.become_member-info ul li{
  display: flex;
  margin-bottom: 20px;
}
.become_member-info ul li span{
  color: #16CABD;
  font-size: 15px;
  transform: translateY(2px);
    margin-right: 6px;
}
.become_member-info ul li p{
  color: #363B53;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
.become_member_link{
  display: block;
  margin: 10px auto 0;
  text-align: center;
  background: #F5912A;
  border-radius: 6px;
  max-width: 450px;
  color: #fff;
  padding: 10px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  transition: all .2s ease-in-out;
}
.become_member_link:hover{
  background: #363B53;
}

@media (max-width: 820px){
  .con_worksheet_header h2{
    font-size: 30px;
  }
  .become_member-info ul:first-child{
    margin-right: 0px;
  }
  .con_become_member{
    padding: 40px 15px;
    margin: 35px 10px;
  }
  .become_member-info{
    flex-direction: column;
  }
  .con_worksheet_header p,
  .become_member-info ul li p,
  .become_member_link{
    font-size: 14px;
  }
}

/* con_login */
.login_form{
  background-color: #F6F7FE;
  margin-bottom: 30px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgb(54 59 83 / 10%);
  border-radius: 15px;
  gap: 30px;
}
.login_form input{
  display: block;
  width: 100%;
  background-color: #EEF1FB;
}
.login_form_username label{
  display: block;
  color: #363B53;
}
.login_form_username,
.login_form_password{
  width: 40%;
}
.login_form_submit{
  width: 20%;
}




/* con_login */

/* footer */
.con_footer{
  background-color: #363B53;
  padding: 20px 10px;
  color: #fff;
}
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

@media (max-width: 935){
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

/* https://www.englishworksheetsland.com/most/application/default/views/public/img/eye-off.png
https://www.englishworksheetsland.com/most/application/default/views/public/img/eye.png */
</style>
`);


document.querySelector('.wrapper').insertAdjacentHTML('afterend', `

<div class="con_my_wrapper">
    <nav class="con_navbar con_wrapper">
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
  <section class="con_worksheet">
    <div class="con_container">
      <div class="con_worksheet_header">
        <span class="lock_icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0002 0C7.01341 0 4.5835 2.243 4.5835 5V8H3.50016C2.92553 8 2.37443 8.21071 1.9681 8.58579C1.56177 8.96086 1.3335 9.46957 1.3335 10V18C1.3335 18.5304 1.56177 19.0391 1.9681 19.4142C2.37443 19.7893 2.92553 20 3.50016 20H16.5002C17.0748 20 17.6259 19.7893 18.0322 19.4142C18.4386 19.0391 18.6668 18.5304 18.6668 18V10C18.6668 9.46957 18.4386 8.96086 18.0322 8.58579C17.6259 8.21071 17.0748 8 16.5002 8H15.4168V5C15.4168 2.243 12.9869 0 10.0002 0ZM6.75016 5C6.75016 3.346 8.20833 2 10.0002 2C11.792 2 13.2502 3.346 13.2502 5V8H6.75016V5ZM11.0835 14.2685V16.5455H8.91683V14.2685C8.53808 14.0682 8.23396 13.7668 8.04456 13.4038C7.85516 13.0408 7.78939 12.6334 7.8559 12.2352C7.92242 11.8371 8.1181 11.4668 8.41716 11.1734C8.71621 10.8799 9.10459 10.677 9.53108 10.5915C9.84787 10.5268 10.1763 10.5286 10.4923 10.5967C10.8082 10.6649 11.1035 10.7976 11.3565 10.9851C11.6094 11.1727 11.8136 11.4102 11.9538 11.6803C12.0941 11.9503 12.1669 12.246 12.1668 12.5455C12.1662 12.8952 12.0657 13.2386 11.8756 13.5411C11.6854 13.8436 11.4122 14.0945 11.0835 14.2685Z" fill="#EEF1FB"/>
          </svg>    
        </span>
        <h2>
          This worksheet is <span>for members only.</span><br>
          Become a member today for unlimited access!
        </h2>
        <p>
          Already a member? <a href="https://www.englishworksheetsland.com/most/login">Login here</a> to access this worksheet!
        </p>
      </div>
      <div class="con_become_member">
        <div class="become_member-info">
          <ul>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>Access the <strong>LARGEST</strong> source of English Worksheets online!</p>
            </li>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>View and print <strong>over 40,000</strong> worksheets, quizzes, and tests!</p>
            </li>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>Get <strong>unlimited access</strong> to ALL grades and topics!</p>
            </li>
          </ul>
          <ul>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>Save yourself hours of time and effort — <strong>great for teachers!</strong></p>
            </li>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>Answer keys to <strong>EVERYTHING!</strong></p>
            </li>
            <li>
              <span><i class="fa-solid fa-circle-check"></i></span>
              <p>ALL worksheets are <strong>Common Core Aligned!</strong></p>
            </li>
          </ul>
        </div>
        <a class="become_member_link" href="https://www.englishworksheetsland.com/most/signup">BECOME A MEMBER!</a>
      </div>
    </div>
  </section>

  <section id="con_login">
    <div class="con_container">
      <div class="login_wrapper">
        <h2>Login to your Account</h2>
        <div class="login_form">
          <div class="login_form_username">
            <label>Username/Email</label>
            <input id="con_username" type="text" placeholder="Username/Email">
          </div>
          <div class="login_form_password">
            <label>Password</label>
            <input id="con_password" type="password" placeholder="Password">
            <span class="eye_icon pass_off"></span>
            <span class="eye_icon pass_on"></span>
          </div>
          <div class="login_form_submit">
            <button type="button" id="login_btn">LOGIN</button>
            <span id="forget_pass">Forgot your password?</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="con_forget">
    <div class="con_container">

    </div>
  </section>

  <footer class="con_footer">
    <div class="con_footer_wrappe con_wrapper">
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
</div>

`);

let mobile_btn = document.querySelector(".btn_mobile");
mobile_btn.addEventListener("click", function () {
	// debugger;
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