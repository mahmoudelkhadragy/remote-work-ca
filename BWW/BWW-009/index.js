convert.$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
body{
  background: #E5E5E5 !important;
}
.con_sidebar{
  width: calc((calc(100% - 980px))/2);
  position: fixed;
  top: 140px;
  right: 8px;
  background-color: #fff;
  font-family: "Proxima Nova", sans-serif;
  border-radius: 6px;
}
.con_sidebar p{
  margin: 0;
  background-color: #2579C6;
  color: #fff;
  padding: 10px 10px 7px 15px;
  font-weight: 700;
  border-radius: 6px 6px 0 0;
  font-size: 16px;
  font-family: "Proxima Nova", sans-serif;
}
.con_sidebar ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.con_sidebar ul li{
  border-bottom: 1px solid #E9E9E9;
  line-height: 22px !important;
}
.con_sidebar ul li:last-child{
  border-bottom: none;
}

.con_sidebar ul li a{
  font-size: 14px;
  padding: 9px 10px 7px 15px;
  display: block;
  cursor: pointer;
  color: #000;
  font-weight: 400;
  font-family: "Proxima Nova", sans-serif;
  transition: all .2s ease-in-out;
}

.con_sidebar ul li a:hover,
.con_sidebar ul li a:focus{
  padding: 9px 10px 7px 21px;
  background-color: #DDE5EC;
  text-decoration: none;
}
</style>
`);


const allChapterLinks = convert.$('.country-chapter .chapter-link');
let allLi = ``

allChapterLinks.each(function(i){
    let linkTitle = $(this).text();
    $(this).attr('data-link', `link_${i}`);
    let list = `
    <li>
      <a data-link="link_${i}">${linkTitle}</a>
    </li>
    `
    allLi += list;
});

convert.$('.container').append(`
<div class="con_sidebar">
  <p>Table of Contents</p>
  <ul id="con_ul">
    ${allLi}
  </ul>
</div>
`);


