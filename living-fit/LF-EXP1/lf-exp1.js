const form = document.querySelector('form._form');
const form_2 = form.cloneNode(true);
const form_ele = document.querySelectorAll('.opt_form_here');
console.log(form_ele);
form_ele[0].append(form);
form_ele[1].append(form_2);

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
  font-weight: 600;
}

</style>
`
document.querySelector('.opt_header').insertAdjacentHTML("beforebegin", styles);
document.querySelectorAll('._submit').forEach(el => el.textContent = 'Get Free Workouts');
document.querySelectorAll('form._form').forEach(el => el.style.background = 'transparent !important');
document.querySelector('body').insertAdjacentHTML("beforeend", styles);