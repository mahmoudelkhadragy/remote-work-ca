convert.$('head').append(`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/solid.min.css">
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
body{
  background: #E5E5E5 !important;
}
.search_box{
  z-index: 999;
}
.con_sidebar{
  width: calc((calc(100% - 1030px))/2);
  position: fixed;
  top: 140px;
  right: 8px;
  background-color: #fff;
  font-family: "Proxima Nova", sans-serif;
  border-radius: 6px;
  transition: all .2s ease-in-out;
  z-index: 9999;
  box-shadow: 0 0 10px #cfcfcf;
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
  border-radius: 0 0 6px 6px;
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

.con_arrow_mobile{
  display: none;
  position: absolute;
  top: 41px;
  left: -36px;
  background: linear-gradient(123.59deg, #2479C6 15.87%, #1257A4 74.55%), #2479C6;
  box-shadow: 0px 1px 4px rgb(27 90 148 / 60%);
  border-radius: 4px 0px 0px 4px;
  color: #fff;
  padding: 4px 8px 10px;
  text-align: center;
  cursor: pointer;
}

.con_arrow_mobile span{
  font-size: 14px;
  margin-bottom: 3px;
  display: inline-block;
}
.con_arrow_mobile > p{
  writing-mode: vertical-lr;
  text-orientation: inherit;
  transform: rotateZ(180deg);
  margin: 0 !important;
  font-size: 13px;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 400;
}
.con_arrow_mobile i{
  font-style: normal !important;
  transition: all .2s ease-in-out;
}
.con_sidebar_overlay{
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 666;
  top: 0;
  left: 0;
}

@media (min-width: 1220px) and (max-width: 1360px){
  .con_sidebar > p{
    font-size: 14px;
  }
  #con_wrapper p{
    font-size: 13px;
  }
}
@media (max-width: 1219.99px){
  .con_arrow_mobile{
    display: block;
  }
  .con_sidebar{
    width: 250px;
    right: -250px;
    border-radius: 12px 0 0 0;
    height: 100%;
    box-shadow: none;
  }
  .con_sidebar > p{
    display: none;
  }
  #con_wrapper p{
    font-size: 13px;
  }
  #con_wrapper p:first-child{
    border-radius: 12px 0 0 0;
  }
}
</style>
`);


const allChapterLinks = convert.$('.chapter-link');
let isMenuVisible = false;
let allLi = ``

allChapterLinks.each(function (i) {
  let linkTitle = $(this).text();
  let linkTitleName = $(this).siblings('h2.chapter-name').text();
  let list = '';
  $(this).attr('data-link', `link_${i}`);
  if (linkTitle == 'Chapter 6=5') {
    linkTitle = 'Chapter 5';
    $(this).text('Chapter 5');
  }
  list = `<p data-link="link_${i}">${linkTitleName || linkTitle}</p>`;
  allLi += list;
});



convert.$('body').append(`
<div class="con_sidebar">
  <div class="con_arrow_mobile">
    <span class="con_left_arrow">
      <i class="fas fa-angle-double-left"></i>
    </span>
    <p>Table of Contents</p>
  </div>
  <p>Table of Contents</p>
  <div id="con_wrapper">
    ${allLi}
  </div>
</div>
<div class="con_sidebar_overlay"></div>
`);


convert.$('#con_wrapper p').on('click', function () {
  let dataLink = convert.$(this).data('link');
  let overlay = convert.$('.con_sidebar_overlay');
  let sidebar = convert.$('.con_sidebar');

  $(this).addClass('con_active');
  $(this).siblings().removeClass('con_active');
  $([document.documentElement, document.body]).animate({
    scrollTop: $(`.chapter-link[data-link="${dataLink}"]`).offset().top - 48
  }, 1000);


  if (convert.$(window).width() <= 1200) {
    overlay.toggle();
    sidebar.animate({ right: '-250px' }, 100);
    toggleArrows();
  }
});


$(window).scroll(function () {
  let height = convert.$(window).scrollTop();
  let target = convert.$('.con_sidebar');
  if (height > '120') {
    if (!target.hasClass('top_stick')) {
      target.addClass('top_stick');
    }
  } else {
    if (target.hasClass('top_stick')) {
      target.removeClass('top_stick');
    }
  }
});

convert.$('.con_arrow_mobile').on('click', function () {
  let overlay = convert.$('.con_sidebar_overlay');
  let sidebar = convert.$('.con_sidebar');

  overlay.toggle();
  if (sidebar.css('right') == '-250px') {
    sidebar.animate({ right: '0' }, 100);
  } else {
    sidebar.animate({ right: '-250px' }, 100);
  }

  toggleArrows();

});

function toggleArrows() {
  let leftArrow = convert.$('.con_left_arrow i');
  if (leftArrow.hasClass('fa-angle-double-left')) {
    leftArrow.removeClass('fa-angle-double-left');
    leftArrow.addClass('fa-angle-double-right');
  } else if (leftArrow.hasClass('fa-angle-double-right')) {
    leftArrow.removeClass('fa-angle-double-right');
    leftArrow.addClass('fa-angle-double-left');
  }
}