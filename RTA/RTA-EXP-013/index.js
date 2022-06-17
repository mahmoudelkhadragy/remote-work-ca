convert.$('#content > div.elementor > section:first-child').after(`
<section class="con_install">
  <div class="con_container">
    <h2>Easy to Install in Just One Afternoon</h2>
    <div class="con_video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D7YwFsAzL9k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="con_refer">
      <p>
        If you'd rather hand off your outdoor kitchen installation,
        <a href="https://rtaoutdoorliving.com/contact-us/"
          >allow us to refer you</a
        >
        to a trusted installer in our network.
      </p>
    </div>
  </div>
</section>
`);

convert.$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
.con_container{
  max-width: 1140px;
  margin: auto;
}
.con_install{
  padding: 40px 0;
  background-color: #fff;
}
.con_install h2{
  font-family: "Proxima Nova", sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #343B41;
  margin: 0;
  padding-bottom: 50px;
  text-align: center;
  text-transform: inherit;
}

.con_install h2 span{
  color: #44C7F3;
}
.con_video{
  max-width: 792px;
  margin: auto;
}

.con_refer{
  width: fit-content;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
  background-color: #E3F7FD;
  border: 1px dashed #44C7F3;
}
.con_refer p{
  margin: 0;
  text-align: center;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 600;
  font-size: 18px;
}
.con_refer p a{
  color: #44C7F3;
  text-decoration: underline;
}

@media (max-width: 767px){
  .con_install h2{
    font-size: 38px;
  }
  .con_refer p{
    font-size: 16px;
  }
}
</style>
`);