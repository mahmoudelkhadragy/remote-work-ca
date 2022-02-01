setTimeout(() => {
  const style = `<style>
    .convert_link{
     display: inline-block;
     width: 100%;
     height: 100%;
     position: absolute;
     background: transparent;
     top: 0;
     left: 0;
    }
    .single_add_to_cart_button{
        position: relative;
    }
    </style>`;
  const link = `<a href="https://rtaoutdoorliving.com/book-a-call/" class="convert_link"></a>`;
  document.head.insertAdjacentHTML("beforeend", style);

  var btn = document.querySelector(".single_add_to_cart_button");
  btn.textContent = "BOOK A CALL";
  btn.insertAdjacentHTML("beforeend", link);
}, 500);
