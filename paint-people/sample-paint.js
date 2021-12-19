const families = [
  {
    name: "yellow",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/yellow.png",
  },
  {
    name: "orange",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/orange.png",
  },
  {
    name: "red",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/red.png",
  },
  {
    name: "pink",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/pink.png",
  },
  {
    name: "purple",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/purple.png",
  },
  {
    name: "blue",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/blue.png",
  },
  {
    name: "green",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/green.png",
  },
  {
    name: "brown",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/brown.png",
  },
  {
    name: "neutral",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/neutral.png",
  },
  {
    name: "white",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/white.png",
  },
  {
    name: "gray",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/gray.png",
  },
  {
    name: "black",
    imgUrl: "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/black.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Initialize global variables
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const isColorsView = !params.has("current-family");
  console.log(isColorsView);
  window.currentFamily = params.get("current-family");
  window.currentRgb = Number.parseInt(params.get("rgb")) || 120;
  window.currentColorName = null;
  window.currentColorNumber = null;

  const mainContent = document.querySelector("#MainContent");

  const itemsInCart =
    Number.parseInt(window.localStorage.getItem("cart-items")) || 0;
  updateCartText(itemsInCart);

  // Add headlines
  const heading = document.createElement("h3");
  const subheading = document.createElement("h4");
  mainContent.append(heading);
  mainContent.append(subheading);

  if (isColorsView) {
    // "Colors" View

    updateHeading("ORDER FREE COLOUR SWATCHES", "COLOUR BY FAMILY");
    const colors = document.createElement("div");
    colors.id = "colors";
    mainContent.append(colors);
    // Fill "Colors" block
    families.map(({ name, imgUrl }) => {
      const appendedToColors = appendColorToBlock(name, imgUrl, colors);

      appendedToColors.addEventListener("click", () => {
        window.currentFamily = name;
        const redirectUrl = `${location.protocol}//${location.host}${location.pathname}?current-family=${currentFamily}`;
        window.location.href = redirectUrl;
      });
    });
  }

  if (!isColorsView) {
    // "Family Details" View
    mainContent.classList.add("view-details");

    // Add Swatch Image
    const img = document.createElement("img");
    img.classList.add("swatch-image");
    img.src =
      "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/swatch.png";
    mainContent.append(img);

    const selectedFamily = document.createElement("h5");
    const selectedFamilyContainer = document.createElement("div");
    // selectedFamilyContainer.classList.add("hidden");
    selectedFamilyContainer.classList.add("selected-family-container");
    selectedFamilyContainer.append(selectedFamily);

    const familyImgContainer = document.createElement("div");
    familyImgContainer.classList.add("family-img-container");

    const familyImgInner = document.createElement("div");
    familyImgInner.classList.add("family-img-inner");
    const familyImg = document.createElement("img");
    familyImgInner.append(familyImg);
    familyImgContainer.append(familyImgInner);

    // Create family selection block
    const familyModal = document.createElement("div");
    familyModal.classList.add("family-modal");
    selectedFamilyContainer.append(familyModal);

    const colorDetails = document.createElement("div");
    // colorDetails.classList.add("hidden");
    colorDetails.id = "colorDetails";

    const searchMagnifierSrc =
      "https://cdn.shopify.com/s/files/1/0062/5400/2231/files/magnifier.jpg?v=1636574411";
    const searchBar = document.createElement("div");
    searchBar.classList.add("search-bar");
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search a Color";
    const searchMagnifier = document.createElement("img");
    searchMagnifier.src = searchMagnifierSrc;

    searchBar.append(searchInput, searchMagnifier);

    mainContent.append(selectedFamilyContainer);
    mainContent.append(familyImgContainer);
    mainContent.append(searchBar);
    mainContent.append(colorDetails);

    // Fill "colorDetails" block
    renderFamilyDetails(window.currentFamily);

    initializeSearch();

    // Initialize next/previous/back page arrows
    initializeArrows();

    // Initialize Family Select modal
    initializeFamilyModal();

    // Hide changing options for Black Family
    if (window.currentFamily === "black")
      document.body.classList.add("color-black");
  }
});

const appendColorToBlock = (name, imgUrlOrHex, element) => {
  const color = document.createElement("div");
  color.classList.add("color");

  const colorName = document.createElement("span");
  colorName.textContent = name;

  const isHex = imgUrlOrHex.includes("#");
  let colorBackground;
  if (!isHex) {
    colorBackground = document.createElement("img");
    colorBackground.src = imgUrlOrHex;
  } else {
    colorBackground = document.createElement("div");
    colorBackground.style.backgroundColor = imgUrlOrHex;
  }

  color.append(colorName);
  color.append(colorBackground);

  element.append(color);

  return color;
};

const renderFamilyDetails = (familyName) => {
  // Update headings
  const heading = `ORDER FREE COLOUR SWATCHES`;
  const subheading = `Benjamin Moore® Color Samples allow you to "try on" a paint color before you commit to the time and expense of painting an entire room.`;

  const { imgUrl } = families.find(({ name }) => name === familyName);
  updateHeading(heading, subheading, familyName, imgUrl);

  // Switch view to details
  // hideColors();
  // clearColorDetails();
  // showColorDetails();

  // Initialize currentFamily, currentRgb
  window.currentFamily = familyName;
  window.currentRgb = 120;

  // Fetch family and display
  updateFamilyDetailsView(familyName, window.currentRgb);

  document
    .querySelector(".selected-family-container")
    .classList.remove("selected-family-container--active");
};

const backToColors = () => {
  // Reset global values
  window.currentFamily = null;
  window.currentRgb = 255;
  window.selectedColorName = null;
  window.selectedColorNumber = null;

  // Switch view
  hideColorDetails();
  showColors();
};

const renderFetchedColors = (colors) => {
  clearColorDetails();

  const colorDetails = document.querySelector("#colorDetails");

  colors.forEach(({ number, name, hex }, colorIndex) => {
    const currentColorRgb = `#${hex}`;

    // Append fetched color
    const currentColorNode = appendColorToBlock(
      name,
      currentColorRgb,
      colorDetails
    );

    // Handle color click
    currentColorNode.addEventListener("click", () => {
      window.selectedColorName = name;
      window.selectedColorNumber = number;

      // Reset previous selected color
      const selectedColor = Array.from(
        document.querySelector("#colorDetails").children
      ).find((child) => child.classList.contains("color-selected"));
      window.test = selectedColor;

      selectedColor?.querySelector(".tooltip-cart")?.remove();
      selectedColor?.classList.remove("color-selected");

      // Set new selected color
      currentColorNode.classList.add("color-selected");

      // Create tooltipCart
      const tooltipCart = document.createElement("div");
      tooltipCart.classList.add("tooltip-cart");

      // Create tooltip content
      const tooltipCartContent = document.createElement("div");
      tooltipCartContent.classList.add("tooltip-cart-content");

      const tooltipCartSpan = document.createElement("span");
      tooltipCartSpan.innerHTML = `${name}<br /><strong>${number}</strong>`;

      const tooltipCartButton = document.createElement("button");
      tooltipCartButton.classList.add("tooltip-cart-button");
      tooltipCartButton.innerText = "Add Sample to Cart";

      tooltipCartButton.addEventListener("click", () => {
        jQuery.post("/cart/add.js", {
          items: [
            {
              quantity: 1,
              // id: 39500714147895,
              id: 39536110010423,
              properties: {
                Name: selectedColorName,
                Number: selectedColorNumber,
              },
            },
          ],
          success: function () {
            // Wait the cart to update on backend
            setTimeout(() => {
              document.querySelector(".tooltip-cart-button").innerText =
                "Added to Cart";
              document.querySelector(".tooltip-cart-button").disabled = true;
              document
                .querySelector(".tooltip-cart-button")
                .classList.add("tooltip-cart-button--disabled");

              const itemsInCart = Number.parseInt(
                window.localStorage.getItem("cart-items")
              );
              updateCartText(itemsInCart + 1);
              //window.location.href = "/cart";
            }, 1000);
          },
        });
      });

      // Append nodes to tooltip content
      tooltipCartContent.append(tooltipCartSpan, tooltipCartButton);

      // Append content to tooltip
      tooltipCart.append(tooltipCartContent);

      // Show current color on tooltip background
      tooltipCart.style.backgroundColor = currentColorRgb;

      // Count amount of colors in 1 row
      const colorDetailsWidth =
        document.querySelector("#colorDetails").offsetWidth;
      const singleColorDimensions = 130;
      const gap = 10;
      const colorsInRow = Math.floor(
        colorDetailsWidth / (singleColorDimensions + gap)
      );
      const indexInRow = colorIndex % colorsInRow;
      if (indexInRow == 0) tooltipCart.style.left = "0";
      else if (indexInRow == colorsInRow - 1) tooltipCart.style.right = "0";
      //else tooltipCart.style.transform = `translateX(${-(singleColorDimensions + gap)}px)`;
      // if first item -> left: 0
      // else if last item -> right: 0
      // else tooltip css: translateX(`${-(imgWidth + gridGap)}`px)

      // Append tooltip to color node
      currentColorNode.append(tooltipCart);
    });
  });
};

const updateFamilyDetailsView = (familyName, rgb) => {
  const colorsToFetch = familyName !== "black" ? 56 : 28;
  const url =
    "//stage-api.benjaminmoore.com/api/8e6d81077f5238aeab1a/color/FindClosestColorsToRGB";
  const data = `r=${rgb}&g=${rgb}&b=${rgb}&results=${colorsToFetch}&families=${familyName}&countryCode=en-us`;

  fetchFamily(url, data, ({ data }) => renderFetchedColors(data));
};

const fetchFamily = (url, data, cb) => {
  $.ajax({
    url,
    data,
    dataType: "jsonp",
    jsonpCallback: "CallbackFunction",
    success: (xhr) => cb(xhr),
  });
};

const updateHeading = (headingText, subheadingText, familyName, imgUrl) => {
  document.querySelector("#MainContent > h3").textContent = headingText;
  document.querySelector("#MainContent > h4").textContent = subheadingText;

  // Check if Family Details view
  if (!imgUrl) return;
  const familyNameHeading = document.querySelector("#MainContent h5");
  familyNameHeading.textContent = familyName;
  // familyNameHeading.parentNode.classList.remove("hidden");

  // Change the image and show it
  const familyImgContainer = document.querySelector(
    "#MainContent > .family-img-container"
  );
  const familyImgInner = familyImgContainer.querySelector(".family-img-inner");
  const img = familyImgInner.querySelector("img");
  img.src = imgUrl;
  // familyImgContainer.classList.remove("hidden");

  // If box exists -> reset slider and arrows
  // if (familyImgInner.querySelector(".family-img-box")) {
  //   updateSlider(0);
  //   updateArrows();
  //   return;
  // }

  // Create a box
  const box = document.createElement("div");
  box.classList.add("family-img-box");

  // Calculate box width
  const imgWidth = img.width;
  const boxWidthRatio = 0.2;
  const boxWidth = boxWidthRatio * imgWidth;
  box.style.width = `${boxWidth}px`;

  // Append box
  familyImgInner.append(box);

  // Initialize box Drag & Drop
  box.addEventListener("drag", ({ offsetX }) =>
    handleSliderClick(
      box.getBoundingClientRect().left +
        offsetX -
        familyImgInner.getBoundingClientRect().left
    )
  );
  box.addEventListener("dragend", ({ offsetX }) =>
    handleSliderClick(
      box.getBoundingClientRect().left +
        offsetX -
        familyImgInner.getBoundingClientRect().left
    )
  );

  // Initialize slider
  const handleSliderClick = (offsetX) => {
    updateSlider(offsetX);

    // Update family details
    const coefficient = offsetX / imgWidth;
    updateRgb(coefficient);
    updateFamilyDetailsView(window.currentFamily, window.currentRgb);

    // Synchronize arrows
    updateArrows();
  };
  familyImgInner.addEventListener("click", ({ offsetX }) =>
    handleSliderClick(offsetX)
  );
};

const updateSlider = (offsetX) => {
  const box = document.querySelector(".family-img-box");
  const imgWidth = document.querySelector(".family-img-inner img").width;
  let transformOffset = offsetX - box.offsetWidth / 2;

  // Left boundary
  const leftBoundaryX = box.offsetWidth / 2;
  if (offsetX < leftBoundaryX)
    transformOffset += Math.abs(offsetX - leftBoundaryX);

  // Right boundary
  const rightBoundaryX = imgWidth - box.offsetWidth / 2;
  if (offsetX > rightBoundaryX)
    transformOffset -= Math.abs(offsetX - rightBoundaryX);

  box.style.transform = `translateX(${transformOffset}px)`;
};

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const searchColor = () => {
  const query = document.querySelector(".search-bar input").value;
  clearColorDetails();
  if (query === "") {
    window.currentFamily = window.lastSelected;
    window.currentRgb = window.lastRgb;
    updateFamilyDetailsView(window.currentFamily, window.currentRgb);
    document
      .querySelectorAll(".selected-family-container, .family-img-container")
      .forEach((item) => item.classList.remove("hidden"));
  } else {
    if (window.currentFamily !== "search")
      window.lastSelected = window.currentFamily;
    window.lastRgb = window.currentRgb;
    window.currentFamily = "search";
    window.currentRgb = 120;
    window.currentColorName = null;
    window.currentColorNumber = null;

    const url =
      "//stage-api.benjaminmoore.com/api/8e6d81077f5238aeab1a/color/FindColorsByKeyword";
    const data = `keyword=${query}&countryCode=en-us`;
    console.log(data);
    fetchFamily(url, data, ({ data }) => renderFetchedColors(data));
    document
      .querySelectorAll(
        ".selected-family-container, .family-img-container, .colorDetails-arrow"
      )
      .forEach((item) => item.classList.add("hidden"));
  }
};

const initializeSearch = () => {
  const searchInput = document.querySelector(".search-bar input");
  const processSearch = debounce(() => searchColor());

  searchInput.addEventListener("keyup", processSearch);
};

const initializeArrows = () => {
  // Previous/next page arrows
  const arrowPrev = document.createElement("span");
  arrowPrev.classList.add(
    "colorDetails-arrow",
    "colorDetails-arrow--prev",
    "inactive"
  );

  const rangeStart = 120;
  const rangeStop = 255;

  arrowPrev.addEventListener("click", () => {
    if (arrowPrev.classList.contains("inactive")) return;
    const rgb = window.currentRgb - 25;
    const coefficient = (rgb - rangeStart) / (rangeStop - rangeStart);
    updateRgb(coefficient);
  });

  const arrowNext = document.createElement("span");
  arrowNext.classList.add("colorDetails-arrow", "colorDetails-arrow--next");

  arrowNext.addEventListener("click", () => {
    if (arrowNext.classList.contains("inactive")) return;
    const rgb = window.currentRgb + 25;
    const coefficient = (rgb - rangeStart) / (rangeStop - rangeStart);
    updateRgb(coefficient);
  });

  Array.from([arrowPrev, arrowNext]).forEach((arrow) =>
    arrow.addEventListener("click", (ev) => {
      if (ev.target.classList.contains("inactive")) return;
      updateFamilyDetailsView(window.currentFamily, window.currentRgb);

      updateArrows();

      // Synchronize slider
      const familyImgInnerWidth =
        document.querySelector(".family-img-inner").offsetWidth;
      const boxOffsetX =
        ((window.currentRgb - rangeStart) / (rangeStop - rangeStart)) *
        familyImgInnerWidth;
      updateSlider(boxOffsetX);
    })
  );

  // Back to colors arrow
  const backToColorsArrow = document.createElement("div");
  backToColorsArrow.textContent = "*Get back to family selection*";
  backToColorsArrow.addEventListener("click", backToColors);

  // Append blocks
  const colorDetails = document.querySelector("#colorDetails");
  colorDetails.append(arrowPrev);
  colorDetails.append(arrowNext);
  // colorDetails.append(backToColorsArrow);
};

const initializeFamilyModal = () => {
  // Fill modal with families
  const familyModal = document.querySelector(".family-modal");
  families.map(({ name, imgUrl }) => {
    const appendedToColors = appendColorToBlock(name, imgUrl, familyModal);

    appendedToColors.addEventListener("click", () => {
      window.currentFamily = name;
      const redirectUrl = `${location.protocol}//${location.host}${location.pathname}?current-family=${currentFamily}`;
      window.location.href = redirectUrl;
    });
  });

  let isToggle = false;
  const selectedFamilyContainer = document.querySelector(
    ".selected-family-container"
  );
  const selectedFamilyHeading = selectedFamilyContainer.querySelector("h5");

  selectedFamilyContainer.addEventListener("mouseenter", () => {
    if (isToggle) return;
    selectedFamilyContainer.classList.add("selected-family-container--active");
  });
  selectedFamilyContainer.addEventListener("mouseleave", () => {
    if (isToggle) return;
    selectedFamilyContainer.classList.remove(
      "selected-family-container--active"
    );
  });
  selectedFamilyHeading.addEventListener("click", () => {
    if (
      selectedFamilyContainer.classList.contains(
        "selected-family-container--active"
      ) &&
      !isToggle
    ) {
      selectedFamilyContainer.classList.add(
        "selected-family-container--active"
      );
      isToggle = true;
      return;
    }

    isToggle = false;
    if (window.innerWidth <= 576) {
      selectedFamilyContainer.classList.remove(
        "selected-family-container--active"
      );
    }

    // selectedFamilyContainer.classList.toggle(
    //   "selected-family-container--active"
    // );
    // isToggle = !isToggle;
  });
  // Fix family details overlay
  const style = document.createElement("style");
  const familyModalHeight = familyModal.getBoundingClientRect().height;
  const isBlack = window.currentFamily === "black";
  const initialMarginBottom = getComputedStyle(
    document.querySelector("#MainContent>.selected-family-container")
  ).marginBottom;
  style.innerHTML = `
      #MainContent > .selected-family-container.selected-family-container--active {
        margin-bottom: calc(${
          !isBlack ? initialMarginBottom : "30px"
        } + ${familyModalHeight}px) !important;
      }
    `;
  document.head.append(style);
  console.log(style);
};

const updateArrows = () => {
  const arrowPrev = document.querySelector(".colorDetails-arrow--prev");
  const arrowNext = document.querySelector(".colorDetails-arrow--next");

  if (window.currentRgb < 145) arrowPrev.classList.add("inactive");
  else arrowPrev.classList.remove("inactive");

  if (window.currentRgb > 230) arrowNext.classList.add("inactive");
  else arrowNext.classList.remove("inactive");
};

const updateRgb = (coefficient) => {
  const rangeStart = 120;
  const rangeStop = 255;

  const updatedRGB = Math.round(
    rangeStart + Math.abs(rangeStart - rangeStop) * coefficient
  );

  window.currentRgb = updatedRGB;
};

// const showColors = () => {
//   document.querySelector("#colors").classList.remove("hidden");
// };
// const hideColors = () => {
//   document.querySelector("#colors").classList.add("hidden");
// };

// const showColorDetails = () => {
//   document.querySelector("#colorDetails").classList.remove("hidden");
// };
// const hideColorDetails = () => {
//   document.querySelector("#colorDetails").classList.add("hidden");
// };
const clearColorDetails = () => {
  Array.from(document.querySelector("#colorDetails").children)
    .filter((child) => child.classList.contains("color"))
    .map((child) => child.remove());
};

const updateCartText = (itemCount = 0) => {
  // Reset current text
  const cartText = document.querySelector(".cart-link span.money");
  cartText.innerText = "";

  // Update localStorage
  window.localStorage.setItem("cart-items", itemCount);

  // const itemCountString = itemCount.toString();
  // const lastCharacter = [...itemCountString].slice(-1)[0] === "1" ? "" : "s";
  // const updatedCartText = `${itemCount} Item${lastCharacter}`;
  const updatedCartText = `${itemCount} Items`;

  cartText.textContent = updatedCartText;
};
