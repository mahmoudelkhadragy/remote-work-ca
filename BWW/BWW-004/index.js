let current_url = $(location).attr('href');
const target_url = "https://www.buybitcoinworldwide.com";
let selected_country = $('#select2-country-container').text();
if (current_url.includes(target_url)) {
  console.log('here');
}

