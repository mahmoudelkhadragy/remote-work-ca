const con_url = convert.$(location).attr("href");
if (con_url.includes('https://rtaoutdoorliving.com/why-use-our-design-tool/')) {
  addChangesToTheNewPage();
}
function addChangesToTheNewPage() {
  convert.$(`head`).append(`
  <style>
  @import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
  /* fix general style */
  #page > #content {
    display: none;
  }
  body {
    background-color: #fff;
  }
  #page.grid-container {
    max-width: 100%;
  }
  .site-footer{
    margin-top: -7px;
  }
  /* fix general style */
  
  .rta_dream {
    background-color: #fff;
    max-width: 1200px;
    margin-left: auto;
    padding-left: 15px;
  }
  .rta_row {
    display: flex;
    align-items: center;
  }
  .rta_dream .rta_dream_info {
    width: 50%;
    padding: 10px 50px 10px 10px;
  }
  .rta_dream .rta_dream_img {
    width: 50%;
  }
  
  .rta_dream_info h2 {
    color: #343b41;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    text-transform: inherit;
    margin: 0;
    padding-bottom: 25px;
  }
  .rta_dream_info h2 span {
    color: #44c7f3;
  }
  .rta_dream_info p {
    color: #343b41;
    font-family: "Proxima Nova", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding-right: 25px;
  }
  .rta_dream_info a {
    display: block;
    background-color: #44c7f3;
    color: #fff;
    text-align: center;
    max-width: 270px;
    font-size: 18px;
    padding: 10px 0;
    border-radius: 39px;
    transition: all 0.2s ease-in-out;
    margin-top: 25px;
    border: 1px solid transparent
  }
  .rta_dream_info a:hover,
  .rta_dream_info a:focus {
    background-color: #fff;
    color: #44c7f3;
    border: 1px solid #44c7f3;
  }
  
  @media (max-width: 480px) {
    .rta_dream_info a {
      max-width: 100%;
    }
  }
  @media (max-width: 767px) {
    .rta_dream {
      padding-left: 0;
    }
    .rta_row {
      flex-direction: column;
    }
    .rta_dream .rta_dream_img,
    .rta_dream .rta_dream_info {
      width: 100%;
    }
    .rta_dream .rta_dream_info {
      padding: 50px 15px;
    }
    .rta_dream_info h2 {
      font-size: 39px;
      line-height: 40px;
    }
    .rta_dream_info p {
      font-size: 16px;
      padding-right: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 1050px){
    .rta_dream .rta_dream_info {
      padding: 50px 15px;
    }
    .rta_dream_info h2 {
      font-size: 38px;
    }
    .rta_dream_info p {
      font-size: 16px;
      padding-right: 0;
    }
  }
  @media (min-width: 1500px) {
    .rta_dream {
      margin: auto;
    }
  }
  </style>
  `);

  convert.$(`#page`).append(`
  <section class="rta_dream">
    <div class="rta_row">
      <div class="rta_dream_info">
        <h2>Build Your <span>Dream Outdoor Kitchen</span></h2>
        <p>
          Creating your outdoor kitchen is one click away. Start designing, then
          speak with a Design Expert to iron out the details and get an exact
          price.
        </p>
        <p>
          Using our 3D design tool, you'll unlock countless combinations to craft
          your ideal outdoor kitchen. You can customize even further during your
          one-on-one call with a Design Expert.
        </p>
        <a href="https://design.rtaoutdoorliving.com/">Design My Dream Kitchen</a>
      </div>
      <div class="rta_dream_img">
        <img
          src="https://i.ibb.co/JBwJTQC/rta-dream.jpg"
          alt="RTA Design Dream Kitchen"
        />
      </div>
    </div>
  </section>
  `);

}

convert.$(`a[href="https://design.rtaoutdoorliving.com/layout"]`).attr('href', 'https://rtaoutdoorliving.com/why-use-our-design-tool/');
convert.$(`a[href="https://design.rtaoutdoorliving.com/"]`).attr('href', 'https://rtaoutdoorliving.com/why-use-our-design-tool/');

