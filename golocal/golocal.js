// make IIFE for make it's own variable environment
(function () {
  // make all changes for go local HP-GOLOCAL-EX4 in fuction
  function goLocalChanges() {
    // make setTime function as in VWO it is recommended if you put your custom js
    // you should put it in setTimeout
    setTimeout(function () {
      // my custom styles
      var myStyle = `
        .call_button_2 a{
            font-size:1.2rem;
        }
        .call_button_2--green a{
            background-color: #317CBC !important;
        }
        .hero-2--left h2{
            font-size: 1.3rem;
        }
        .hero-2--left p{
            font-size: 1.1rem !important;
        }
        .hero-2--left p strong{
            font-size: 1.15rem !important;
        }
        @media(max-width: 650px){
            .call_button_2 a{
                font-size:1rem !important;
            }
        }`;
      // change call now node to get free inspection
      document.querySelector(".call_button_2 a").childNodes[0].data =
        "get free inpection ";

      // change h2 text content
      document.querySelector(".hero-2--left h2").innerText =
        "Results 100% Guaranteed";

      // change p text content
      var paragraphContent = `Get a free, zero obligation inspection and estimate today. <strong>Same day service.</strong>`;
      document.querySelector(".hero-2--left p").innerHTML = paragraphContent;

      var headEl = document.getElementsByTagName("head").item(0);
      var styleEl = document.createElement("style");
      styleEl.appendChild(document.createTextNode(myStyle));
      headEl.appendChild(styleEl);
    }, 500);
  }
  // apply changes after document is ready
  document.addEventListener("DOMContentLoaded", goLocalChanges());
})();

// var arr = [
//   { id: 1, name: "mahmoud" },
//   { id: 2, name: "ff" },
//   { id: 3, name: "ali" },
//   { id: 4, name: "sdadsasd" },
// ];
// arr2 = [1, 3];

// var filtered = arr.filter((item) => {
//   for (el of arr2) {
//     if (el === item.id) {
//       return item;
//     }
//   }
// });

// filtered2 = arr.filter((item) => arr2.includes(item.id));

// console.log(filtered2);
