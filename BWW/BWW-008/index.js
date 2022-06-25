
const allBuySections = convert.$(`.buy-info-full`);
let allRows = ""

allBuySections.each(function () {
  let finalRow = ""
  let newRow = "";
  let sectionId = $(this).attr('id');
  let title = $(this).find('.exchange-card-col').text();
  let titleImg = $(this).find('h4 img').prop('outerHTML');
  let pros = $(this).find('.quick-info-pros').prop('outerHTML');
  let cons = $(this).find('.quick-info-cons').prop('outerHTML');
  let quickInfo = $(this).find('.quick-info-section');
  let infoDataSection = '';
  let hasQuiqInfo = $(this).find('.quick-info');

  if ($(this).css('display') === 'block' && hasQuiqInfo.length > 0) {
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
        let ifnoData = $(this).find('.quick-info-data').text();
        let infoImg = $(this).find('img').prop('outerHTML');
        let newInfo = `
        <td class="con_data_td">
          ${infoImg}
        <p>${ifnoData}</p>
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

$('head').append(`
<style>
@import url("http://fonts.cdnfonts.com/css/proxima-nova-2?styles=44818,44820,44812");
table.con_table tr:nth-child(2n) {
  background-color: #eff7ff;
}
.con_table thead tr th {
  font-family: "Proxima Nova", sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background-color: #0064c8;
  text-align: center;
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
  justify-content: center;
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
  width: 20px;
}
.con_table tbody tr td ul li {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  line-height: 18px;
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
}

@media (max-width: 767px) {
  .con_table tbody tr td.con_title p {
    font-size: 14px;
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