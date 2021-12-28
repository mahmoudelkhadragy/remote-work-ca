/* CUSTOM CODE */
setTimeout(() => {
  const subheadingNode = document.querySelector(".block-hero h2");
  const discount = document.querySelector(
    ".hero-2__coupon__right .hero-2__coupon__top .heading"
  ).innerText;
  const paragraphHtml = `<p class="optimize_paragraph">Call us today for a free, zero obligation quote. Need pest control service? Get prompt service by scheduling today — <br><span>and save <strong> ${discount} </strong> your first service!</span>`;
  const paragraphNode = document.querySelector(".block-hero h2 + p");
  paragraphNode.classList.add("original_paragraph");
  subheadingNode.insertAdjacentHTML("afterend", paragraphHtml);
}, 20);
