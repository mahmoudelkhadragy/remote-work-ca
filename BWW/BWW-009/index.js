convert.$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
body{
  background: #E5E5E5 !important;
}
.search_box{
  z-index: 999;
}
.con_sidebar{
  width: calc((calc(100% - 980px))/2);
  position: fixed;
  top: 140px;
  right: 8px;
  background-color: #fff;
  font-family: "Proxima Nova", sans-serif;
  border-radius: 6px;
  transition: all .2s ease-in-out;
}
.con_sidebar > p{
  margin: 0;
  background-color: #2579C6;
  color: #fff;
  padding: 10px 10px 7px 15px;
  font-weight: 700;
  border-radius: 6px 6px 0 0;
  font-size: 16px;
  font-family: "Proxima Nova", sans-serif;
}
#con_wrapper{
  max-height: 60vh;
  overflow: auto;
}
#con_wrapper p{
  font-size: 14px;
  padding: 9px 10px 7px 15px;
  cursor: pointer;
  color: #000;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
  transition: all .2s ease-in-out;
  margin: 0;
  border-bottom: 1px solid #E9E9E9;
}
#con_wrapper p:last-child{
  border-bottom: none;
}

#con_wrapper p:hover,
#con_wrapper p:focus{
  padding: 9px 10px 7px 20px;
  background-color: #DDE5EC;
}

#con_wrapper::-webkit-scrollbar {
  width: 7px;
}

/* Track */
#con_wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #ccc; 
  border-radius: 10px;
}
 
/* Handle */
#con_wrapper::-webkit-scrollbar-thumb {
  background: #777; 
  border-radius: 10px;
}

/* Handle on hover */
#con_wrapper::-webkit-scrollbar-thumb:hover {
  background: #666; 
}

.top_stick{
  top: 20px;
}
.con_active{
  background-color: #DDE5EC;
}
</style>
`);


const allChapterLinks = convert.$('.country-chapter .chapter-link');
let allLi = ``

allChapterLinks.each(function (i) {
  let linkTitle = $(this).text();
  let list = '';
  $(this).attr('data-link', `link_${i}`);

  list = `<p data-link="link_${i}">${linkTitle}</p>`;

  allLi += list;
});



convert.$('body').append(`
<div class="con_sidebar">
  <p>Table of Contents</p>
  <div id="con_wrapper">
    ${allLi}
  </div>
</div>
`);


convert.$('#con_wrapper p').on('click', function () {
  let dataLink = convert.$(this).data('link');
  $(this).addClass('con_active');
  $(this).siblings().removeClass('con_active');
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`.country-chapter .chapter-link[data-link="${dataLink}"]`).offset().top - 48
  }, 1000);
});


$(window).scroll(function () {
  let height = convert.$(window).scrollTop();
  let target = convert.$('.con_sidebar');
  if (height > '180') {
    if (!target.hasClass('top_stick')) {
      target.addClass('top_stick');
    }
  } else {
    if (target.hasClass('top_stick')) {
      target.removeClass('top_stick');
    }
  }
});