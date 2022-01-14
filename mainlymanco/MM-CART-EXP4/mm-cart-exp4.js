setTimeout(() => {
  $("head").append(`
  <style>
        .optimize_remove_popup{
            position: absolute;
            top: -92px;
            right: -25px;
            padding: 10px 20px;
            background-color: #333333;
            display: none;
        }
        .optimize_remove_popup:after{
          content: "";
          position: absolute;
          right: 25px;
          bottom: -22px;
          border: 10px solid transparent;
          border-top: 16px solid #333333;
        }
        .optimize_remove_popup p{
          color: #fff;
          font-size: 19px;
          padding: 3px 0px;
          margin-bottom: 6px;
          font-weight: normal;
        }
        .optimize_controls{
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .optimize_controls .btn{
          font-size: 17px;
          padding: 5px 9px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 600;
        }
        .optimize_controls .btn.keep{
          background-color: #E6B800;
        }
        .optimize_controls .btn.keep:hover{
          background-color: #ffd737;
        }
        .optimize_remove_item{
          position: absolute;
          width: 28px;
          height: 28px;
          background: transparent;
          top: 14px;
          right: -7px;
          cursor: pointer;
        }
        
   </style>
  `);
  var allCarts = $(".cart__card");

  allCarts.each(function (i, item) {
    $(item).append(`
        <div class="optimize_remove_popup">
            <p>Was this item too manly for you?</p>
            <div class="optimize_controls">
                <button class="btn remove">Remove Item</button>
                <button class="btn keep">Keep item</button>
            </div>
        </div>
        <span class="optimize_remove_item"></span>
    `);
  });
  $(".optimize_remove_item").on("click", function () {
    $(this).siblings(".optimize_remove_popup").show();
  });

  // click remove => remove item from cart
  $(".optimize_controls .remove").on("click", function () {
    $(this)
      .parents(".optimize_remove_popup")
      .siblings(".cart__remove")
      .children(".cart__remove-btn ")
      .click();
  });

  // click keep hide the popup
  $(".optimize_controls .keep").on("click", function () {
    $(this).parents(".optimize_remove_popup").hide();
  });

  // click outside the popup
  $(document).mouseup(function (e) {
    var container = $(".optimize_remove_popup");

    // if the target of the click isn't the container nor a descendant of the container
    container.each(function (i, item) {
      if (
        !$(item).is(e.target) &&
        $(item).has(e.target).length === 0 &&
        $(item).css("display") === "block"
      ) {
        container.hide();
      }
    });
  });
  // end
});
