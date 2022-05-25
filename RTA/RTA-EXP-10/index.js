convert.$(document).ready(function () {

  hj('event', 'exp10_variant');
  console.log('Triggering hotjar heatmap');

  const newCopySection = `
  <section class="rta_consultation">
    <div class="rta_container">
      <h1>What can you expect from your <span>design call?</span></h1>
      <img class="rta_img" src="https://i.ibb.co/C0KWkTW/con-back-mob.jpg" alt="RTA call">
      <div class="rta_list_desc">
        <div class="rta_list_item">
          <div>
            <span class="rta_list_circle"></span>
          </div>
          <p>
            One-on-one guidance from an Outdoor Kitchen
            <strong>Design Expert</strong> to fully personalize your outdoor
            kitchen
          </p>
        </div>
        <div class="rta_list_item">
          <div>
            <span class="rta_list_circle"></span>
          </div>
          <p>
            Go beyond our design tool to completely customize your outdoor kitchen
            — if you can think it, we can build it!
          </p>
        </div>
        <div class="rta_list_item">
          <div>
            <span class="rta_list_circle"></span>
          </div>
          <p>
            Plan each step of your outdoor kitchen project so you can save time
          </p>
        </div>
        <div class="rta_list_item">
          <div>
            <span class="rta_list_circle"></span>
          </div>
          <p>Get a clear, final price to your project</p>
        </div>
      </div>
    </div>
  </section>
`;

  convert.$('#content > div > section > div.elementor-container.elementor-column-gap-default').prepend(newCopySection);
});