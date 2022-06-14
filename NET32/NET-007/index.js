setTimeout(() => {
  let ele = document.getElementById('category-list-link');
  let ele2 = document.querySelector('#vertical-supplies-container > a > span');
  if (ele) {
    ele.textContent = "Shop by Category";
  } else {
    ele2.textContent = "Shop by Category";
  }
}, 500);