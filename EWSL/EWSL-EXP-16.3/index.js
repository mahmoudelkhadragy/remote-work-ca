$('head').append(`
<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  /* start overide styles */

  #sidebar-cta {
    display: none;
  }
  #center::after,
  #center::before {
    background-image: none !important;
  }
  .inner_banner--inner:after,
  .inner_banner--inner:before {
    background-image: none !important;
    display: none;
  }
  .inner_banner {
    background-color: rgba(22, 202, 189, 0.1);
  }
  .inner_banner--inner h2 {
    color: #0e1e38;
    font-weight: 600;
    font-family: "Poppins";
    font-size: 20px;
  }
  .inner_banner--inner h2:first-of-type {
    border-bottom: none;
    font-size: 28px;
  }
  .inner_banner--inner p{
    font-family: "Poppins";
  }
  .topic_strip {
    position: relative;
    border: 1px solid #99c1fd;
    background: #fff;
    box-shadow: none;
  }
  .topic_strip::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 20px;
    width: 16px;
    height: 16px;
    background-image: url(https://i.ibb.co/jR9S42s/opt-paper.png);
    background-repeat: no-repeat;
  }
  .topic_strip:nth-child(odd) {
    background: #eef5ff !important;
  }

  .topic_strip:nth-child(even) {
    background: #fff !important;
  }
  .topic_strip p a {
    font-family: "Nunito Sans";
    font-weight: 700;
    font-size: 18px;
    color: #1669ca;
  }
  .topic_strip p {
    font-family: 'Nunito Sans';
    font-size: 18px;
  }
  .home-link-box > h1 {
    font-family: "Poppins";
    color: #0e1e38;
    font-weight: 700;
  }

  .home-link-box > p {
    font-size: 16px;
    font-family: "Poppins";
    margin-bottom: 30px;
  }

  #footer {
    background: #57438c;
  }

  /* end overide styles */

  .opt_sidebar {
    max-width: 340px;
    background-image: url(https://i.ibb.co/PMJnYHT/back.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #b9f1f0;
    border-radius: 12px;
    padding: 10px 18px 25px;
    margin: auto;
  }

  .opt_sidebar > h2 {
    color: #0e1e38;
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-align: center;
    margin-bottom: 180px;
    margin-top: 10px;
  }
  .opt_sidebar ul {
    list-style: none;
  }
  .opt_sidebar ul li {
    display: flex;
    align-items: center;
    padding: 4px 0;
  }
  .opt_sidebar ul li img {
    padding-right: 8px;
    display: block;
    height: 16px;
  }
  .opt_sidebar ul li p {
    font-size: 16px;
    font-weight: 700;
    font-family: "Nunito Sans";
    margin-bottom: 0;
    color: #0e1e38;
  }
  .opt_sidebar .opt_sidebar_link {
    background-color: #ff8331;
    border-radius: 5px;
    font-family: "Nunito Sans";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    width: 98%;
    margin: auto;
    padding: 13px 0;
    display: block;
    text-decoration: none;
    color: #fff;
    letter-spacing: 0.02em;
    transition: all 0.2s ease-in-out;
  }
  .opt_sidebar .opt_sidebar_link:hover {
    background-color: #8668da;
  }

  .home-sidebar .signup-box {
    background: #d5caf2;
    box-shadow: none;
    padding: 20px 25px;
    margin: 30px auto 0;
  }
  .home-sidebar .signup-box h3 {
    color: #0e1e38;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 14px;
    font-family: "Poppins", sans-serif;
  }
  .home-sidebar .signup-box input[type="submit"] {
    background: #8668da;
    font-family: "Nunito Sans";
    font-weight: 700;
    transition: all 0.2s ease-in-out;
  }
  .home-sidebar .signup-box input[type="submit"]:hover {
    background: #ff8331;
    color: #fff !important;
  }

  .header-right .register-div {
    display: flex;
  }
  .header-right .register-div > a {
    font-weight: 500;
    font-family: "Poppins";
    transition: all 0.2s ease-in-out;
    padding: 10px 15px !important;
  }
  .header-right .register-div .opt_search_btn,
  #header .register-mobile .opt_search_btn {
    background-color: #8668da;
    color: #fff;
  }
  .register-div .signup-btn,
  .register-mobile .signup-btn {
    background: #16cabd;
  }

  .header-right .register-div > a:hover,
  #header .register-mobile > a:hover {
    background: #ff8331;
  }
  .header-right .register-div .opt_search_btn:hover,
  #header .register-mobile .opt_search_btn:hover,
  .header-right .register-div .opt_search_btn:focus,
  .header-right .register-div .opt_search_btn:active {
    border-color: #ff8331;
    color: #fff !important;
    outline: none;
  }

  @media (max-width: 400px) {
    #header .register-mobile {
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 767px) {
    #footer ul li {
      padding: 5px 0;
    }
  }

  @media (max-width: 1026px) {
    .header-right .register-div {
      display: none;
    }
  }
  @media (min-width: 1027px) and (max-width: 1200px) {
    .header-right .register-div > a {
      font-size: 15px;
      padding: 8px !important;
    }
  }

</style>

`);

$('.home-sidebar').prepend(`
  <div class="opt_sidebar">
    <h2>Teachers: Upgrade Now</h2>
    <ul>
      <li>
        <img src="https://i.ibb.co/1Ztb7Yh/opt-correct.png" alt="correct icon" />
        <p>Print all 25,000+ worksheets</p>
      </li>
      <li>
        <img src="https://i.ibb.co/1Ztb7Yh/opt-correct.png" alt="correct icon" />
        <p>All grade levels and topics</p>
      </li>
      <li>
        <img src="https://i.ibb.co/1Ztb7Yh/opt-correct.png" alt="correct icon" />
        <p>Save endless hours of your time...</p>
      </li>
      <li>
        <img src="https://i.ibb.co/1Ztb7Yh/opt-correct.png" alt="correct icon" />
        <p>Answers to everything too!</p>
      </li>
    </ul>
    <a
      class="opt_sidebar_link"
      href="https://www.englishworksheetsland.com/most/signup"
      >Upgrade Me Now</a
    >
  </div>
`);


$('#header .header-right .register-div').prepend(`
  <a
  href="https://www.englishworksheetsland.com/search/search.cgi"
  class="opt_search_btn btn btn-dark"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 15.5C12.5899 15.5 15.5 12.5899 15.5 9C15.5 5.41015 12.5899 2.5 9 2.5C5.41015 2.5 2.5 5.41015 2.5 9C2.5 12.5899 5.41015 15.5 9 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 13.5L18.5 17.5" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
  </svg> Search</a>
`);
$('#header .register-mobile').prepend(`
  <a
  href="https://www.englishworksheetsland.com/search/search.cgi"
  class="opt_search_btn btn btn-dark"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 15.5C12.5899 15.5 15.5 12.5899 15.5 9C15.5 5.41015 12.5899 2.5 9 2.5C5.41015 2.5 2.5 5.41015 2.5 9C2.5 12.5899 5.41015 15.5 9 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 13.5L18.5 17.5" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
  </svg> Search</a>
`);
