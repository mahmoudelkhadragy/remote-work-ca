const newCopySection = `
<section class="rta_consultation">
<div class="rta_row">
  <div class="rta_call_info">
    <h1>What can you expect from your <span>design call?</span></h1>
    <div class="rta_list_desc">
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          One-on-one guidance from an expert outdoor space designer to fully
          personalize your outdoor kitchen
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Plan each step of your outdoor kitchen project so you can save time
          and complete your project hassle-free
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Support on choosing the perfect appliances and layout so you can get
          creative in your new outdoor space
        </p>
      </div>
      <div class="rta_list_item">
        <span class="rta_list_circle"></span>
        <p>
          Go beyond our design tool to completely customize your outdoor
          kitchen — if you can think it, we can build it!
        </p>
      </div>
    </div>
  </div>
  <div class="rta_calender">
    <div class="rta_info">
      <div class="rta_info_img">
        <img
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/254372/582345ce.png"
          alt="RTA Avatar"
        />
      </div>
      <div>
        <h4>RTA Design Consultation</h4>
        <div class="rta_con_time">
          <!-- here put the consultation duration by js -->
        </div>
      </div>
    </div>
    <div class="rta_date_time">
      <!-- put here the calender by js -->
    </div>
  </div>
</div>
</section>

`;
// document
//   .getElementById("page-region")
//   .insertAdjacentHTML("beforeend", newCopySection);
document
  .querySelector(".yB2Kbs3Dw5W8t3rtYGUC.h_AkdPL8MB5JT8tEAEtM")
  .insertAdjacentHTML("afterend", newCopySection);

const calenderPart = document.querySelector(
  "._HZ_GD6FPnIYxJMx_SII.dtQQRG24Xyq4Mv4e5_FW.Pc0zejgXjiYYmeWzt9Ia"
);
const calenderPartContainer = document.querySelector(".rta_date_time");
calenderPartContainer.appendChild(calenderPart);

var iframe = document.querySelector(
  'iframe[src="https://calendly.com/designer-call/rta-design-consultation?embed_domain=rtaoutdoorliving.com&embed_type=Inline"]'
);
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
