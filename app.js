// This module will handle the functionality of the navigation bar
const header = (function () {
  let hamburgerMenuIcon = document.querySelector('.hamburger');
  let hamburgerMenuElems = document.querySelector('.navMenu');
  let navCont = document.querySelectorAll('.navCont');
  let icons = document.querySelectorAll('.navIcon');
  let text = document.querySelectorAll('.navText');
  let hidden = document.querySelectorAll('.hide');

  // hide elements dynamically when screen size changes
  function checkScreenWidth() {
    if (window.innerWidth < 900) {
      hidden.forEach((elem) => {
        elem.style.display = 'none';
      });
    } else {
      hidden.forEach((elem) => {
        elem.style.display = 'block';
      });
    }
  }
  window.addEventListener('resize', checkScreenWidth);

  // displays the navihation menu
  hamburgerMenuIcon.addEventListener('click', function () {
    if (hamburgerMenuElems.style.display === 'none') {
      hamburgerMenuElems.style.display = 'block';
    } else {
      hamburgerMenuElems.style.display = 'none';
    }
  });

  // changes the navigation text to icons when hovered
  navCont.forEach((elem, index) => {
    elem.addEventListener('mouseover', function () {
      let width = getComputedStyle(text[index]);
      elem.style.width = width.width;
      text[index].style.display = 'none';
      icons[index].style.display = 'block';
    });
  });

  // changes the navigation icons to text when unhovered
  navCont.forEach((elem, index) => {
    elem.addEventListener('mouseout', function () {
      let width = getComputedStyle(text[index]);
      elem.style.width = width.width;
      text[index].style.display = 'block';
      icons[index].style.display = 'none';
    });
  });
})();
