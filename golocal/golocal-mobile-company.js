/* CUSTOM CODE */
setTimeout(() => {
  // Change H2 Text and Styles
  // const subheadingText = "Results 100% Guaranteed";
  // const subheadingNode = document.querySelector(".block-hero h2");
  // subheadingNode.classList.add("optimize-subheading");
  // subheadingNode.textContent = subheadingText;
  // // Change Paragraph under H2 Text and Styles
  // const paragraphHtml = `Get a free, zero obligation inspection and estimate today. <strong>Same day service</strong>`;
  // const paragraphNode = document.querySelector(".block-hero h2 + p");
  // paragraphNode.classList.add("optimize-paragraph");
  // paragraphNode.innerHTML = paragraphHtml;
  // // CTA button
  // const cta = document.querySelector(".block-hero .call_button_2 > a");
  // // Change "Call Now" to "Get Free Inspection" in CTA
  // cta.innerHTML = cta.innerHTML.replace(
  //   "Call Now",
  //   "Get Free Inspection<br />"
  // );
  // // Change CTA Styles
  // cta.classList.add("optimize-cta");

  const subheadingNode = document.querySelector(".block-hero h2");
  const discount = document.querySelector(
    ".hero-2__coupon__right .hero-2__coupon__top .heading"
  ).innerText;
  const paragraphHtml = `<p class="optimize_paragraph">Call us today for a free, zero obligation quote. Need pest control service? Get prompt service by scheduling today — <br><span>and save <strong>${discount}</strong> your first service!</span>`;
  const paragraphNode = document.querySelector(".block-hero h2 + p");
  paragraphNode.classList.add("original_paragraph");
  subheadingNode.insertAdjacentHTML("afterend", paragraphHtml);
}, 20);
