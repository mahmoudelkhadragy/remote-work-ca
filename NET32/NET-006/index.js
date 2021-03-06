$('head').append(`
  <style>
    .opt_text_purcahse{
      background-color: #fff;
      padding: 20px;
    }
    .opt_text_purcahse ul{
      list-style: none;
    }
    .opt_small_circle{
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
      margin-right: 5px;
    }
    .opt_text_purcahse ul li p{
      margin: 0;
    }
  </style>
`);

$(`#squeeze-page > section`).append(`
  <div class="opt_text_purcahse">
  <h2 class="h5">Creating your account is essential to purchase from Net32!</h2>
  <span>With your free account, you can...</span>
  <ul>
    <li>
      <p>
        <span class="opt_small_circle"></span>Get your credentials validated
        automatically
      </p>
    </li>
    <li>
      <p>
        <span class="opt_small_circle"></span>Access your purchase history and
        more from your personalized dashboard
      </p>
    </li>
    <li>
      <p>
        <span class="opt_small_circle"></span>Increase your productivity and
        reorder or auto-order products with ease
      </p>
    </li>
  </ul>
  </div>
`);