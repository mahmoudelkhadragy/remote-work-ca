(function () {

  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#header-banner')) {
      let header = document.querySelector('#header-banner'),
        header_icons = header.querySelector('.header-icons');

      header.parentNode.insertBefore(header_icons, header.nextSibling);

    }
  })

}());

