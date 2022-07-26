document.querySelector('#header').insertAdjacentHTML('afterend', `
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
`);

document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `
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
  padding: 0 12px;
}
/* general style */
body{
  background-color: #EEF1FB;
}
.con_my_wrapper{
  background-color: #EEF1FB;
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
.con_fix_height{
    height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
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
</style>
`)