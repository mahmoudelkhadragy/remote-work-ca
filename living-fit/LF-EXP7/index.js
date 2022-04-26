setTimeout(() => {
  const form = document.querySelector('form._form');
  const form_2 = form.cloneNode(true);
  const form_ele = document.querySelectorAll('.opt_form_here');
  form_ele[0].append(form);

  const id = form.getAttribute('id');
  let styles = `
  <style>
  #${id}{
    background: transparent !important;
  }
  #page-theme h1{
    font-size: 35px;
  }
  .opt_join a.join_button{
    color: #fff !important;
    line-height: 22px;
  }
  a[href="https://www.activecampaign.com/lp/sem/pages?utm_source=direct&utm_campaign=acpages"]{
    display: none !important;
  }
  #${id} ._submit{
    background: #162535 !important;
    font-family: "Montserrat", sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
  }
  </style>
  `

  $('#fullname').attr('placeholder', 'Name');
  $('#email').attr('placeholder', 'Email');

  $('#_form_16_submit').after(`<button class="header_submit_button">GET FREE WORKOUTS</button>`);
  $('#_form_16_submit').hide();
  $('.header_submit_button').on('click', function () {
    $('#_form_16_submit').click();
  })

  document.querySelector('.opt_header').insertAdjacentHTML("beforebegin", styles);

  document.querySelectorAll('._submit').forEach(el => el.textContent = 'Get Free Workouts');

  $('.opt_custom_submit').on('click', function () {
    let opt_name = $('.opt_input_name').val();
    let opt_email = $('.opt_input_email').val();

    if (validateEmail(opt_email)) {
      $('#fullname').val(opt_name);
      $('#email').val(opt_email);
      $('#_form_5_submit').click();
      setTimeout(() => {
        $('.opt_form_cutom_here').append(`<p class="_form-thank-you">Thanks for signing up! Check your inbox for your first workout!</p>`);
        $('.opt_cutom_form').hide();
      }, 3000);
    } else {
      $('.opt_cutom_form').append('<p class="opt_message mt-2 text-center">required valid email</p>');
    }
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
}, 1000);