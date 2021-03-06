setTimeout(() => {
  //make header in the middle
  var productData = [
    {
      title: "Beef Jerky Flower Bouquet",
      padgeClass: "best_seller",
      padgeTitle: "Best Seller",
      padgeIcon: `<svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.94608 15.6272L4.77254 21.0024L2.87897 19.4111L0.391846 19.2883L2.67778 13.6383C2.8843 13.7237 3.08191 13.8286 3.26782 13.9515C3.462 14.092 3.65868 14.306 3.86339 14.5329C4.24822 14.956 4.68373 15.4353 5.32496 15.64C5.54861 15.7098 5.78219 15.7441 6.01686 15.7416C6.32976 15.7347 6.64113 15.6964 6.94608 15.6272Z"
        fill="white"
      />
      <path
        d="M15.6081 19.2882L13.121 19.411L11.2274 20.9999L9.05389 15.6271C9.35851 15.6963 9.66954 15.7347 9.98211 15.7416C10.2168 15.7442 10.4504 15.7099 10.674 15.64C11.3152 15.4353 11.7513 14.956 12.1356 14.5329C12.3418 14.306 12.537 14.092 12.7322 13.9514C12.918 13.8285 13.1156 13.7238 13.3222 13.6388L15.6081 19.2882Z"
        fill="white"
      />
      <path
        d="M15.0382 5.30217C14.7873 4.53878 14.9433 3.56334 14.4727 2.92768C14.0021 2.29202 13.0016 2.13372 12.3483 1.66672C11.6951 1.19971 11.2495 0.31797 10.4728 0.0699192C10.3148 0.0216111 10.1501 -0.00201864 9.98464 -0.000107131C9.35244 -0.000107131 8.65803 0.279012 8.00276 0.279012C7.34749 0.279012 6.65007 -0.000107131 6.01788 -0.000107131C5.85158 -0.00227773 5.68598 0.021355 5.52717 0.0699192C4.75048 0.316491 4.29791 1.20415 3.65167 1.66672C3.00543 2.12928 2.00245 2.2861 1.5273 2.92768C1.05215 3.56926 1.21421 4.53681 0.962338 5.30266C0.718994 6.03892 0 6.73376 0 7.54991C0 8.36606 0.718994 9.0609 0.962338 9.79766C1.21321 10.561 1.05717 11.537 1.5273 12.1721C1.72398 12.4384 2.01047 12.6199 2.32507 12.7748C2.4214 12.8241 2.52074 12.868 2.62059 12.9123C2.72044 12.9567 2.82129 12.9986 2.91862 13.0425C3.17591 13.1478 3.42154 13.2786 3.65167 13.4331C4.29791 13.8957 4.75048 14.7823 5.52717 15.0304C5.68598 15.079 5.85158 15.1026 6.01788 15.1004C6.40773 15.1004 6.82066 14.9944 7.2356 14.9125C7.36103 14.8879 7.48647 14.8657 7.61191 14.8489C7.73198 14.8326 7.85296 14.8235 7.97416 14.8218H8.02433C8.14554 14.8236 8.26651 14.8326 8.38659 14.8489C8.51153 14.8652 8.63746 14.8879 8.7629 14.9125C9.17633 14.9939 9.59027 15.1004 9.98062 15.1004C10.1469 15.1026 10.3125 15.079 10.4713 15.0304C11.248 14.7838 11.7006 13.8962 12.3468 13.4331C12.577 13.2786 12.8226 13.1478 13.0799 13.0425C13.1802 12.9986 13.2806 12.9557 13.3784 12.9123C13.4762 12.869 13.5791 12.8226 13.6734 12.7748C13.988 12.6199 14.2755 12.4384 14.4712 12.1721C14.9418 11.537 14.7843 10.561 15.0367 9.79766C15.28 9.0609 15.9985 8.36754 15.9985 7.54991C15.9985 6.73228 15.281 6.03892 15.0382 5.30217ZM12.9519 10.9876C12.8793 11.0895 12.8027 11.1891 12.7221 11.2865C12.6454 11.3806 12.5651 11.4729 12.4823 11.5621C11.4544 12.6744 10.0363 13.3631 8.51303 13.4898C8.40833 13.4994 8.3028 13.5054 8.19643 13.5081C8.18238 13.5081 8.16833 13.5081 8.15378 13.5081C8.10361 13.5081 8.05344 13.5081 8.00025 13.5081C7.94707 13.5081 7.8999 13.5081 7.84622 13.5081H7.80357C7.6972 13.5051 7.59167 13.499 7.48697 13.4898C5.96365 13.3631 4.54558 12.6744 3.5177 11.5621C3.43492 11.4729 3.35464 11.3806 3.27787 11.2865C3.2011 11.1923 3.12083 11.0892 3.04807 10.9876C2.40586 10.0953 2.02562 9.04654 1.94891 7.9561C1.8722 6.86567 2.10198 5.7755 2.61313 4.80476C3.12428 3.83403 3.89712 3.02009 4.84717 2.45194C5.79722 1.88379 6.88791 1.58329 8 1.58329C9.11209 1.58329 10.2028 1.88379 11.1528 2.45194C12.1029 3.02009 12.8757 3.83403 13.3869 4.80476C13.898 5.7755 14.1278 6.86567 14.0511 7.9561C13.9744 9.04654 13.5941 10.0953 12.9519 10.9876Z"
        fill="white"
      />
      <path
        d="M8.00026 2.22998C7.04528 2.22962 6.10721 2.4777 5.28137 2.94903C4.45553 3.42036 3.77133 4.09814 3.29828 4.91351C2.82524 5.72888 2.5802 6.65279 2.58807 7.59138C2.59595 8.52996 2.85644 9.44977 3.3431 10.2574C3.41083 10.3708 3.48359 10.4808 3.55985 10.5883C3.63611 10.6958 3.71037 10.7909 3.78965 10.8881C4.64391 11.93 5.86659 12.6168 7.21353 12.8114C7.33495 12.8298 7.45737 12.8432 7.5808 12.8518C7.69871 12.8612 7.81812 12.8666 7.93804 12.8671C7.95861 12.8671 7.97968 12.8671 8.00026 12.8671C8.02083 12.8671 8.0414 12.8671 8.06197 12.8671C8.18189 12.8671 8.3008 12.8612 8.41871 12.8523C8.54214 12.8429 8.66456 12.8296 8.78598 12.8114C10.1329 12.6168 11.3556 11.93 12.2099 10.8881C12.2901 10.7895 12.3667 10.6895 12.4397 10.5883C12.5159 10.4808 12.5902 10.3708 12.6564 10.2574C13.143 9.44984 13.4035 8.53012 13.4114 7.59162C13.4193 6.65312 13.1744 5.72928 12.7015 4.91394C12.2285 4.0986 11.5445 3.4208 10.7188 2.9494C9.89308 2.478 8.95515 2.22979 8.00026 2.22998ZM9.71771 9.90181L8.00026 9.32533L6.28229 9.90181L6.30989 8.11762L5.2181 6.69046L6.95563 6.16428L8.00026 4.70507L9.04488 6.16428L10.7799 6.69046L9.69062 8.11762L9.71771 9.90181Z"
        fill="white"
      />
    </svg>`,
      productDescription:
        "Packaged fresh and arranged in a Manly Man pint glass vase, our Beef Jerky Flower Bouquet has the power to make anyone feel like a king for a day.",
      clientReview: `???Best part for me was seeing him show his friends??? ???Look at these flowers she got me!!!?????? priceless.???`,
      client: `- Christine A.`,
    },
    {
      title: "The Meat Bouquet",
      padgeClass: "new_seller",
      padgeTitle: "New",
      padgeIcon: ``,
      productDescription:
        "An assortment of gourmet thick cut bacon slices and Smokehouse beef sticks, this ultimate meaty arrangement will make their jaw drop!",
      clientReview: `???It is hard to find something unique and amazing for the man in your life. This was a HUGE hit!???`,
      client: `- Anonymous Reviewer`,
    },
    {
      title: "Beef Jerky Flower Bouquet & Beer Mug",
      padgeClass: "best_seller",
      padgeTitle: "Best Seller",
      padgeIcon: `<svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.94608 15.6272L4.77254 21.0024L2.87897 19.4111L0.391846 19.2883L2.67778 13.6383C2.8843 13.7237 3.08191 13.8286 3.26782 13.9515C3.462 14.092 3.65868 14.306 3.86339 14.5329C4.24822 14.956 4.68373 15.4353 5.32496 15.64C5.54861 15.7098 5.78219 15.7441 6.01686 15.7416C6.32976 15.7347 6.64113 15.6964 6.94608 15.6272Z"
        fill="white"
      />
      <path
        d="M15.6081 19.2882L13.121 19.411L11.2274 20.9999L9.05389 15.6271C9.35851 15.6963 9.66954 15.7347 9.98211 15.7416C10.2168 15.7442 10.4504 15.7099 10.674 15.64C11.3152 15.4353 11.7513 14.956 12.1356 14.5329C12.3418 14.306 12.537 14.092 12.7322 13.9514C12.918 13.8285 13.1156 13.7238 13.3222 13.6388L15.6081 19.2882Z"
        fill="white"
      />
      <path
        d="M15.0382 5.30217C14.7873 4.53878 14.9433 3.56334 14.4727 2.92768C14.0021 2.29202 13.0016 2.13372 12.3483 1.66672C11.6951 1.19971 11.2495 0.31797 10.4728 0.0699192C10.3148 0.0216111 10.1501 -0.00201864 9.98464 -0.000107131C9.35244 -0.000107131 8.65803 0.279012 8.00276 0.279012C7.34749 0.279012 6.65007 -0.000107131 6.01788 -0.000107131C5.85158 -0.00227773 5.68598 0.021355 5.52717 0.0699192C4.75048 0.316491 4.29791 1.20415 3.65167 1.66672C3.00543 2.12928 2.00245 2.2861 1.5273 2.92768C1.05215 3.56926 1.21421 4.53681 0.962338 5.30266C0.718994 6.03892 0 6.73376 0 7.54991C0 8.36606 0.718994 9.0609 0.962338 9.79766C1.21321 10.561 1.05717 11.537 1.5273 12.1721C1.72398 12.4384 2.01047 12.6199 2.32507 12.7748C2.4214 12.8241 2.52074 12.868 2.62059 12.9123C2.72044 12.9567 2.82129 12.9986 2.91862 13.0425C3.17591 13.1478 3.42154 13.2786 3.65167 13.4331C4.29791 13.8957 4.75048 14.7823 5.52717 15.0304C5.68598 15.079 5.85158 15.1026 6.01788 15.1004C6.40773 15.1004 6.82066 14.9944 7.2356 14.9125C7.36103 14.8879 7.48647 14.8657 7.61191 14.8489C7.73198 14.8326 7.85296 14.8235 7.97416 14.8218H8.02433C8.14554 14.8236 8.26651 14.8326 8.38659 14.8489C8.51153 14.8652 8.63746 14.8879 8.7629 14.9125C9.17633 14.9939 9.59027 15.1004 9.98062 15.1004C10.1469 15.1026 10.3125 15.079 10.4713 15.0304C11.248 14.7838 11.7006 13.8962 12.3468 13.4331C12.577 13.2786 12.8226 13.1478 13.0799 13.0425C13.1802 12.9986 13.2806 12.9557 13.3784 12.9123C13.4762 12.869 13.5791 12.8226 13.6734 12.7748C13.988 12.6199 14.2755 12.4384 14.4712 12.1721C14.9418 11.537 14.7843 10.561 15.0367 9.79766C15.28 9.0609 15.9985 8.36754 15.9985 7.54991C15.9985 6.73228 15.281 6.03892 15.0382 5.30217ZM12.9519 10.9876C12.8793 11.0895 12.8027 11.1891 12.7221 11.2865C12.6454 11.3806 12.5651 11.4729 12.4823 11.5621C11.4544 12.6744 10.0363 13.3631 8.51303 13.4898C8.40833 13.4994 8.3028 13.5054 8.19643 13.5081C8.18238 13.5081 8.16833 13.5081 8.15378 13.5081C8.10361 13.5081 8.05344 13.5081 8.00025 13.5081C7.94707 13.5081 7.8999 13.5081 7.84622 13.5081H7.80357C7.6972 13.5051 7.59167 13.499 7.48697 13.4898C5.96365 13.3631 4.54558 12.6744 3.5177 11.5621C3.43492 11.4729 3.35464 11.3806 3.27787 11.2865C3.2011 11.1923 3.12083 11.0892 3.04807 10.9876C2.40586 10.0953 2.02562 9.04654 1.94891 7.9561C1.8722 6.86567 2.10198 5.7755 2.61313 4.80476C3.12428 3.83403 3.89712 3.02009 4.84717 2.45194C5.79722 1.88379 6.88791 1.58329 8 1.58329C9.11209 1.58329 10.2028 1.88379 11.1528 2.45194C12.1029 3.02009 12.8757 3.83403 13.3869 4.80476C13.898 5.7755 14.1278 6.86567 14.0511 7.9561C13.9744 9.04654 13.5941 10.0953 12.9519 10.9876Z"
        fill="white"
      />
      <path
        d="M8.00026 2.22998C7.04528 2.22962 6.10721 2.4777 5.28137 2.94903C4.45553 3.42036 3.77133 4.09814 3.29828 4.91351C2.82524 5.72888 2.5802 6.65279 2.58807 7.59138C2.59595 8.52996 2.85644 9.44977 3.3431 10.2574C3.41083 10.3708 3.48359 10.4808 3.55985 10.5883C3.63611 10.6958 3.71037 10.7909 3.78965 10.8881C4.64391 11.93 5.86659 12.6168 7.21353 12.8114C7.33495 12.8298 7.45737 12.8432 7.5808 12.8518C7.69871 12.8612 7.81812 12.8666 7.93804 12.8671C7.95861 12.8671 7.97968 12.8671 8.00026 12.8671C8.02083 12.8671 8.0414 12.8671 8.06197 12.8671C8.18189 12.8671 8.3008 12.8612 8.41871 12.8523C8.54214 12.8429 8.66456 12.8296 8.78598 12.8114C10.1329 12.6168 11.3556 11.93 12.2099 10.8881C12.2901 10.7895 12.3667 10.6895 12.4397 10.5883C12.5159 10.4808 12.5902 10.3708 12.6564 10.2574C13.143 9.44984 13.4035 8.53012 13.4114 7.59162C13.4193 6.65312 13.1744 5.72928 12.7015 4.91394C12.2285 4.0986 11.5445 3.4208 10.7188 2.9494C9.89308 2.478 8.95515 2.22979 8.00026 2.22998ZM9.71771 9.90181L8.00026 9.32533L6.28229 9.90181L6.30989 8.11762L5.2181 6.69046L6.95563 6.16428L8.00026 4.70507L9.04488 6.16428L10.7799 6.69046L9.69062 8.11762L9.71771 9.90181Z"
        fill="white"
      />
    </svg>`,
      productDescription:
        "Our delicious, fresh beef jerky flowers arranged with care inside a stylish Manly Man keepsake beer mug.",
      clientReview: `???The bouquet was awesome! Came in only a couple days and super fresh. My husband loved it :)???`,
      client: `- Angie W.`,
    },
    {
      title: "The Beef Bouquet",
      padgeClass: "new_seller",
      padgeTitle: "New",
      padgeIcon: ``,
      productDescription:
        "Where???s the beef???? There???s plenty to find in our Beef Bouquet ??? an assortment of our fresh gourmet beef sticks wrapped in a bouquet.",
      clientReview: `???I've ordered this beef jerky bouquet several times, my husband absolutely loves them.???`,
      client: `- Penny`,
    },
    {
      title: "Beef Jerky Flower Bouquet - Black Steel Edition",
      padgeClass: "special_seller",
      padgeTitle: "Special Edition",
      padgeIcon: ``,
      productDescription:
        "Our ever-popular Beef Jerky Flower Bouquet arranged in a Black Steel Manly Man pint glass.",
      clientReview: `???Packaging was extremely nice, great presentation. Who doesn't like flowers? Especially when they are made of meat. I loved this gift.???`,
      client: `- Michael H.`,
    },
    {
      title: "The Bacon Bouquet",
      padgeClass: "new_seller",
      padgeTitle: "New",
      padgeIcon: ``,
      productDescription:
        "For those who put bacon on EVERYTHING, this arrangement of thick strips of gourmet home style bacon is any meat lover???s dream come true.",
      clientReview: `???Experience was great, rec???d on time and the recipient said it was the best gift he???s ever gotten.???`,
      client: `- Walt R.`,
    },
    {
      title: "BACON ROSES + Dark Chocolate",
      padgeClass: "low_seller",
      padgeTitle: "low stock",
      padgeIcon: ``,
      productDescription:
        "Salty, sweet, and meaty, this box of stemless thick cut maple candied bacon roses are dipped in dark chocolate and slide out of a custom box for the ultimate gifting experience!",
      clientReview: `???I bought these for my boyfriend for Valentine's Day, he loved them! Nice packaging and arrived quickly.???`,
      client: `- Hannah D.`,
    },
    {
      title: "Meat Card???",
      padgeClass: "personalize_seller",
      padgeTitle: "Personalize",
      padgeIcon: `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.01153 3.51129H6.54617V6.72788H9.41565V3.51129H8.01153Z" fill="white"/>
      <path d="M14.7376 3.51129H9.9512V6.72788H16V4.80894C15.9997 4.46487 15.8665 4.13499 15.6298 3.89174C15.3932 3.64848 15.0722 3.51158 14.7374 3.51129H14.7376Z" fill="white"/>
      <path d="M6.54623 7.27832H9.41571V16.751H6.54623V7.27832Z" fill="white"/>
      <path d="M1.0788 15.4538C1.07907 15.7979 1.2123 16.1277 1.44896 16.371C1.68562 16.6143 2.00658 16.7512 2.34138 16.7514H6.01046V7.27881H1.07894L1.0788 15.4538Z" fill="white"/>
      <path d="M0 4.80913V6.72807H6.01067V3.51147H1.26279C0.928018 3.51176 0.607049 3.64868 0.370372 3.89192C0.133695 4.13516 0.00048961 4.46503 0.000209767 4.80913H0Z" fill="white"/>
      <path d="M12.8437 2.04479C13.0621 1.82009 13.1849 1.51575 13.1856 1.19822C13.1864 0.880695 13.0648 0.575678 12.8475 0.349971C12.6293 0.125832 12.3335 0 12.0249 0C11.7164 0 11.4206 0.125832 11.2023 0.349971L8.6619 2.96099H11.979L12.8437 2.04479Z" fill="white"/>
      <path d="M4.13187 2.96085H7.42603L5.58957 1.07337C5.29497 0.770588 4.86565 0.652339 4.46324 0.763146C4.06096 0.87395 3.74656 1.19709 3.63875 1.61054C3.53094 2.02413 3.64599 2.46537 3.94059 2.76815L4.13187 2.96085Z" fill="white"/>
      <path d="M9.9512 16.7513H13.6584C13.9932 16.7511 14.3141 16.6141 14.5508 16.3709C14.7875 16.1277 14.9207 15.7978 14.921 15.4537V7.27856H9.95099L9.9512 16.7513Z" fill="white"/>
      </svg>`,
      productDescription:
        "Send them a greeting they???ll never forget! Have your own personal message laser-engraved onto a real, edible sheet of delicious beef jerky!",
      clientReview: `???I was absolutely thrilled with my order and the way it came. My dad loved it!???`,
      client: `- Anonymous Reviewer`,
    },
    {
      title: "BACON ROSES + Caramel",
      padgeClass: "new_seller",
      padgeTitle: "New",
      padgeIcon: ``,
      productDescription:
        "One dozen of our ultra sweet-and-savory maple candied bacon roses dipped in rich caramel and presented in an eye-catching Manly Man branded slide-out box.",
      clientReview: `???He absolutely loved it and didn't mind getting roses for once!???`,
      client: `- Anonymous Reviewer`,
    },
    {
      title: "Meathearts???",
      padgeClass: "new_seller",
      padgeTitle: "New",
      padgeIcon: ``,
      productDescription:
        "Say ???Beef Mine??.??? to your special someone with an assortment of mini beef jerky hearts laser-etched with romantic sayings!",
      clientReview: `???Great service and quick delivery. My husband loved the clever and yummy valentines??? gift!???`,
      client: `- Anonymous Reviewer`,
    },
  ];
  var selectPart = $(".collection__filters .field");
  $(".section__wrapper .heading-wrapper--collection").append(selectPart);

  function addChanges() {
    var buttons = $(
      ".collection__main .product__thumbnail > div:last-of-type a"
    );
    var productThumbnails = $(".collection__main .product-thumbnail");
    productThumbnails.each(function (i, item) {
      var productTitle = $(item).find(".product-thumbnail__title").text();
      var selectedProduct = productData.find(
        (prod) => prod.title === productTitle
      );
      $(item).after(`
       <div class="optimize_product_info">
          <div class="optimize_product_padge ${selectedProduct.padgeClass}">
            <span>${selectedProduct.padgeIcon}</span>
            <span class="padge_title">${selectedProduct.padgeTitle}</span>
          </div>
          <p class="optimize_product_description">${selectedProduct.productDescription}</p>
          <div class="optimize_product_review">
            <p>${selectedProduct.clientReview}</p>
            <h4>${selectedProduct.client}</h4>
          </div>
        </div>
       ${buttons[i].outerHTML}
      `);
    });
  }
  addChanges();

  $("select#sort-by").on("change", function () {
    setTimeout(() => {
      addChanges();
    }, 1800);
  });
}, 4000);
