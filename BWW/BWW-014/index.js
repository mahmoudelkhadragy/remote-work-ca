convert.$(document).ready(function () {
  convert.$('.buy-info-full').each(function () {
    let link = convert.$(this).find('a');
    let link_href = link.attr('href');
    if (link.length >= 1) {
      link.attr('href', "");
      link.attr('onclick', "return false;");
      convert.$(this).children('h4').append(`
      <a href="${link_href}" class="con_link">
        <span class="con_icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="con_path"
              d="M25.7932 10.747C25.497 8.99872 24.8344 7.33295 23.8491 5.85906C21.7966 2.77845 18.9548 0.821778 15.3154 0.216159C10.2077 -0.633616 5.96364 1.02979 2.72983 5.07066C0.626897 7.6991 -0.221092 10.7667 0.0542999 14.1222C0.531464 19.9192 5.00318 24.7996 10.7107 25.7845C11.2179 25.8718 11.7291 25.9297 12.239 26.0013H13.7605C14.2111 25.9372 14.663 25.8813 15.1122 25.8063C17.8771 25.3452 20.247 24.1192 22.222 22.1282C23.933 20.3987 25.085 18.3458 25.6398 15.9752C25.7994 15.2932 25.858 14.5901 25.9623 13.8965C25.9752 13.8146 25.9889 13.7328 26.0018 13.6503V12.3272C25.933 11.7993 25.8839 11.2701 25.7932 10.747ZM21.4306 5.71311C20.1759 6.31334 18.846 6.74141 17.4769 6.98572C16.839 5.26368 16.0231 3.61293 15.0427 2.0603C17.5819 2.54861 19.7066 3.75166 21.4285 5.71311H21.4306ZM9.32151 12.0414C9.36446 11.6609 9.38968 11.2837 9.45375 10.9134C9.54987 10.3678 9.67938 9.82217 9.78504 9.27657C9.81299 9.13267 9.86275 9.08288 10.0195 9.10061C11.5257 9.26729 13.043 9.30903 14.556 9.22542C15.087 9.19678 15.6167 9.13335 16.2261 9.07947C16.3944 10.0697 16.5594 11.0409 16.7305 12.0448L9.32151 12.0414ZM16.6746 13.9299C16.61 14.9331 16.4414 15.9269 16.1715 16.8952C14.0501 16.6529 11.9078 16.6561 9.78709 16.9048L9.27652 13.9299H16.6746ZM13.0039 2.4504C14.0555 3.94421 14.9208 5.56093 15.5805 7.26466C13.8692 7.44779 12.1433 7.44779 10.4319 7.26466C11.0888 5.56093 11.9519 3.94413 13.0018 2.4504H13.0039ZM10.9589 2.06985C9.98267 3.62094 9.16922 5.26876 8.53146 6.98709C7.16267 6.74114 5.83297 6.3129 4.57782 5.71379C6.2997 3.75985 8.41558 2.54793 10.9589 2.06985ZM3.47216 7.23397C4.88136 7.94866 6.38317 8.46352 7.93433 8.7637C7.75914 9.874 7.58804 10.9557 7.41558 12.0489H1.90911C2.05089 10.3159 2.58123 8.73029 3.47216 7.23397ZM3.47216 18.7435C2.58266 17.2814 2.04586 15.6322 1.90433 13.9265H7.41285C7.586 15.0177 7.7571 16.0932 7.93433 17.2089C6.38423 17.5122 4.88351 18.0286 3.47488 18.7435H3.47216ZM4.57032 20.265C5.82504 19.6646 7.15488 19.2361 8.52396 18.991C9.16273 20.7099 9.97733 22.3582 10.9548 23.9096C8.42308 23.4295 6.30651 22.2244 4.57304 20.265H4.57032ZM13.0004 23.5236C11.9466 22.031 11.0807 20.414 10.4224 18.7094C12.1342 18.5273 13.8605 18.5273 15.5724 18.7094C14.916 20.4132 14.0532 22.0301 13.0032 23.5236H13.0004ZM15.0379 23.9103C16.0159 22.3597 16.8299 20.7116 17.4667 18.9924C18.838 19.234 20.1698 19.6622 21.4251 20.265C19.7046 22.2169 17.5867 23.4302 15.0407 23.9103H15.0379ZM22.554 18.7094C21.7966 18.4031 21.0741 18.073 20.3256 17.8173C19.5771 17.5615 18.8048 17.3815 18.0761 17.1776C18.2458 16.1055 18.4169 15.0299 18.5901 13.9312H24.0972C23.9589 15.6219 23.4306 17.2574 22.554 18.7094ZM18.5914 12.0503L18.072 8.79849C18.798 8.59388 19.5717 8.4152 20.3215 8.16013C21.0713 7.90506 21.7946 7.57565 22.5546 7.26875C23.432 8.72166 23.9605 10.3584 24.0986 12.0503H18.5914Z"
            />
          </svg>
        </span>
        <span class="con_text">View this Offer</span>
      </a>
      `);
    }

  });
});


$('head').append(`
<link href="http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44820,44812" rel="stylesheet">
<style>
.buy-info-full h4{
  justify-content: space-between;
  align-items: center;
}
.buy-info-full h4 > div a {
  pointer-events: none;
  color: #333;
}

.con_link {
  background-color: #5ab85c;
  color: #fff;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  width: 200px;
  text-align: center;
  position: relative;
  height: 37px;
  line-height: 35px;
  margin-top: 0px;
  clear: both;
  transition: all 0.2s ease-in-out;
}

.con_icon {
  border-radius: 50%;
  background-color: #fff;
  width: 40px;
  height: 40px;
  line-height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1px;
  left: -1px;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
}
.con_path {
  fill: #5ab85c;
}
.con_text {
  transform: translate(9px, 2px);
  display: inline-block;
}

.con_link:hover {
  background-color: #188a36;
  text-decoration: none;
  color: #fff;
}
.con_link:hover .con_path {
  fill: #188a36;
}
.con_link:focus {
  background-color: #14702c;
  text-decoration: none;
  color: #fff;
}
.con_link:focus .con_path {
  background-color: #14702c;
}

@media only screen and (max-width: 767px){
  .buy-info-full h4{
    flex-direction: column;
  }
  .con_link {
    margin-top: 22px;
  }
}

@media only screen and (max-width: 575px){
  .buy-info-full h4 .exchange-card-col {
    margin-bottom: 0;
  }
  .con_link {
    margin-bottom: 8px;
  }
}
</style>
`);

