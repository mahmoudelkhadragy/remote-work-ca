(function () {
  convert.$(document).ready(function () {
    const con_href = convert.$(location).attr('href');
    const con_link1 = 'https://www.buybitcoinworldwide.com/credit-debit-card/';
    const con_link2 = 'https://www.buybitcoinworldwide.com/en/buy-bitcoin-paypal/';

    convert.$(`head`).append(`
        <style>
          .table-contents {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            align-content: stretch;
            margin-top: 64px;
            margin-bottom: 72px;
          }
          
          .table-contents>div {
            margin-bottom: 30px;
          }
          
          .contents-card--blue {
            background-color: #0064C8;
          }
          
          .contents-card--light-blue {
            background-color: #2479C6;
          }
          
          .contents-card--green {
            background-color: #1CA440;
          }
          
          .contents-card {
            border-radius: 12px;
            height: 100%;
            padding: 24px 20px 51px 20px;
            position: relative;
            background-image: url('https://res.cloudinary.com/dv0yi7tc1/image/upload/v1651763153/bitcoin-icon-bg_m8eso6.png');
            background-position: 100% 0;
            background-repeat: no-repeat;
            width: 100%;
          }
          
          .contents-card__label {
            background: #FFC107;
            border-radius: 10px;
            font-weight: 700;
            font-size: 12px;
            line-height: 20px;
            text-transform: uppercase;
            color: #FFFFFF;
            box-sizing: border-box;
            text-align: center;
            padding: 2px 12px;
          }
          
          .contents-card__link {
            font-weight: 400;
            font-size: 15px;
            line-height: 1;
            color: #FFFFFF;
            position: absolute;
            bottom: 20px;
            left: 24px;
          }
          
          .contents-card__link:hover {
            color: #ffffff;
          }
          
          .contents-card__title {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #FFFFFF;
          }
        </style>
      `)

    let targetElement = convert.$('.table-responsive.country-compare-table.main-layout')[0];
    if (con_href.includes(con_link1) || con_href.includes(con_link2)) {
      convert.$('div.post-content.color-wrap > div.row.blue-row:nth-of-type(2)').after(`
        <!-- start exp 002 -->
        <div class="optimize-main">
          <div class="row table-contents" id="con_row_bww">
  
          </div>
        </div>
        <!-- end exp 002 -->
      `);
    } else {
      convert.$(targetElement).after(`
        <!-- start exp 002 -->
        <div class="optimize-main">
          <div class="row table-contents" id="con_row_bww">
    
          </div>
        </div>
        <!-- end exp 002 -->
      `);
    }

    setTimeout(() => {
      let con_counter = 0;
      convert.$('.row > div.col-xs-12 > h3.chapter-link').each(function () {
        let h3_title = convert.$(this).text();
        let h2_title = convert.$(this).siblings(`h2`).first().text();
        let new_section = '';
        let real_color_class = '';
        h2_title = h2_title.trim();
        con_counter = con_counter + 1;
        convert.$(this).parent().attr('id', `${h3_title}_${con_counter}`);
        real_color_class = setClassColor(h3_title);
        new_section = `
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="contents-card ${real_color_class}">
          <span class="contents-card__label">${h3_title}</span>
          <h3 class="contents-card__title">${h2_title}</h3>
          <a
            href="#${h3_title}_${con_counter}"
            class="contents-card__link"
            title="${h2_title}"
            >Go To Chapter
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3.5H13M13 3.5L10 0.5M13 3.5L10 6.5" stroke="white" />
            </svg>
          </a>
        </div>
      </div>`
        $('#con_row_bww').append(new_section);
      });
    }, 500)

    function setClassColor(h3_title) {
      let color_class = ''
      if (h3_title === 'Chapter 1' || h3_title === 'Chapter 6' || h3_title === 'Chapter 9') {
        color_class = 'contents-card--green';
      } else if (h3_title === 'Chapter 3' || h3_title === 'Chapter 5' || h3_title === 'Chapter 8') {
        color_class = 'contents-card--light-blue';
      } else {
        color_class = 'contents-card--blue';
      }
      return color_class;
    }

  });

}());