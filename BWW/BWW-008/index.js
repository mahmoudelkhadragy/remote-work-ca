
const allBuySections = convert.$(`.buy-info-full`);
let allRows = ""

allBuySections.each(function () {
  let finalRow = ""
  let newRow = "";
  let sectionId = convert.$(this).attr('id');
  let title = convert.$(this).find('.exchange-card-col').text();
  let titleImg = convert.$(this).find('h4 img').prop('outerHTML');
  let pros = convert.$(this).find('.quick-info-pros').prop('outerHTML');
  let cons = convert.$(this).find('.quick-info-cons').prop('outerHTML');
  let quickInfo = convert.$(this).find('.quick-info-section');
  let infoDataSection = '';
  let hasQuiqInfo = convert.$(this).find('.quick-info');

  if (convert.$(this).css('display') === 'block' && hasQuiqInfo.length > 0) {
    newRow += `
    <td class="con_title">
      <a href="#${sectionId}">
      ${titleImg}
      <p>${title}</p>
      </a>
    </td>
    <td>
    ${pros}${cons}
    <span class="con_show_btn">Show more</span>
    </td>
    `;

    // add the quick info data
    if (quickInfo) {
      quickInfo.each(function () {
        let ifnoData = convert.$(this).find('.quick-info-data').text();
        let infoImg = convert.$(this).find('img').attr('src');
        let infoSrc = convert.$(this).find('img').attr('alt');
        let infoClass = addClasses(ifnoData);
        let easeClass = (infoSrc === "ease icon") ? "con_ease_icon" : "";

        let newInfo = `
        <td class="con_data_td">
          <img class="${easeClass}" src="${infoImg}" alt="${infoSrc}">
          <p class="${infoClass}">${ifnoData}</p>
        </td>
        `
        infoDataSection += newInfo;
      });
    }
    newRow += infoDataSection
    finalRow = `<tr>${newRow}</tr>`
    allRows += finalRow

    // reset infoDataSection
    infoDataSection = '';
  }
});
convert.$(`.country-compare-table`).after(`
<div class="con_table_wrapper">
<table class="con_table">
  <thead>
    <tr>
    <th class="con_name">Name</th>
    <th class="cons_pros_th">PROS & CONS</th>
    <th>Ease of Use</th>
    <th>Privacy</th>
    <th>Speed</th>
    <th>Fees</th>
    <th>Reputation</th>
    <th>Limits</th>
    </tr>
  </thead>
  <tbody>
  ${allRows}
  </tbody>
</table>
</div>
`);

convert.$('.con_show_btn').click(function () {
  let isHidden = convert.$(this).siblings('.quick-info-cons').find('li:last-child').css("display") === 'none';
  if (isHidden) {
    convert.$(this).siblings('.quick-info-cons').find('li').show();
    convert.$(this).siblings('.quick-info-pros').find('li').show();
    convert.$(this).text('Hide more');
  } else {
    convert.$(this).siblings('.quick-info-cons').find('li').hide();
    convert.$(this).siblings('.quick-info-pros').find('li').hide();
    convert.$(this).siblings('.quick-info-pros').find('li:first-child').show();
    convert.$(this).siblings('.quick-info-pros').find('li:nth-child(2)').show();
    convert.$(this).text('show more');
  }
});

function addClasses(label) {
  let con_class = ""
  switch (label) {
    case "Hard":
      con_class = "con_red";
      break;
    case "Low":
      con_class = "con_red";
      break;
    case "Average":
      con_class = "con_orang";
      break;
    default:
      con_class = "con_green";
      break;
  }
  return con_class
}

$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
table.con_table tr:nth-child(2n) {
  background-color: #eff7ff;
}
.con_table_wrapper {
  width: 100%;
  overflow: auto;
}
.con_table {
  min-width: 900px;
}

.con_table thead tr th {
  font-family: "Proxima Nova", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background-color: #0064c8;
  text-align: center;
  border: none !important;
}
.con_table thead tr th.cons_pros_th {
  width: 230px;
}
.con_table thead tr th.con_name {
  width: 160px;
}
.con_table tbody tr td.con_title {
  vertical-align: baseline;
}
.con_table tbody tr td.con_title a {
  display: flex;
  align-items: center;
  color: #000;
}
.con_table tbody tr td.con_title a:hover {
  text-decoration: none;
}
.con_table tbody tr td.con_title img {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  margin-right: 6px;
}
.con_table tbody tr td.con_title p {
  margin: 0;
  font-family: "Proxima Nova", sans-serif;
  font-size: 16px;
  font-weight: 400;
}
.con_table tbody tr td.con_data_td {
  vertical-align: baseline;
  text-align: center;
}
.con_table tbody tr td.con_data_td img {
  width: 31px !important;
}
.con_table tbody tr td.con_data_td img.con_ease_icon {
  width: 19px !important;
}
.con_table tbody tr td.con_data_td p {
  font-family: "Proxima Nova", sans-serif;
  font-size: 13px;
  font-weight: 700;
  padding-top: 10px;
}
.con_red {
  color: #de2c14;
}
.con_orang {
  color: #fcac2e;
}
.con_green {
  color: #1ca440;
}

.con_table tbody tr td.con_data_td img {
  width: 20px;
}
.con_table tbody tr td ul li {
  display: flex;
  font-family: "Proxima Nova", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  line-height: 18px;
  color: #000;
}
.con_table tbody tr td ul li:last-of-type {
  margin-bottom: 0;
}
.con_table tbody tr td ul.quick-info-pros li::before,
.con_table tbody tr td ul.quick-info-cons li::before {
  margin-right: 5px;
}
.con_show_btn {
  display: none;
  color: #aaaaaa;
  font-size: 12px;
  font-family: "Proxima Nova", sans-serif;
  margin-top: 10px;
  cursor: pointer;
}

.con_table tbody tr td {
  border-right: 1px solid #cdcdcd;
}
.con_table tbody tr td:last-child {
  border-right: none;
}

@media (max-width: 767px) {
  .con_table tbody tr td.con_title p {
    font-size: 14px;
  }
  .con_table tbody tr td ul.quick-info-pros,
  .con_table tbody tr td ul.quick-info-cons {
    margin-bottom: 0 !important;
  }
  .con_show_btn {
    display: block;
  }
  .con_table tbody tr td ul.quick-info-pros li,
  .con_table tbody tr td ul.quick-info-cons li {
    display: none;
  }
  .con_table tbody tr td ul.quick-info-pros li:first-child {
    display: block;
  }
  .con_table tbody tr td ul.quick-info-pros li:nth-child(2) {
    display: block;
  }
}

</style>
`)