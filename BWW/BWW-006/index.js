convert.$('head').appned(`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
    .con_link_home{
      display: block;
      font-size: 15px;
      padding: 10px 0;
      color: #000;
      background-color: #FFC107;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      text-align: center;
    }
    @media (max-width: 550px){
      .con_link_home{
        font-size: 13px;
        padding: 8px 5px;
      }
    }
  </style>
`);

convert.$('.navbar').before(`
<a class="con_link_home" href="https://www.buybitcoinworldwide.com">Click here to find the perfect crypto exchange for you.</a>
`);