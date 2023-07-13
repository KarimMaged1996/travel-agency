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

// this module is for the popup logic
const popUp = (function () {
  let moreOptions = document.querySelector('.moreOptions');
  let pop = document.querySelector('.popUp');
  let cancel = document.querySelector('.cancel');
  moreOptions.addEventListener('click', function () {
    pop.style.display = 'block';
  });
  cancel.addEventListener('click', function () {
    pop.style.display = 'none';
  });
})();

// this module will handle the checkin and checkout logic
const form = (function () {
  let date1, date2;
  let inputs = document.querySelectorAll('input');
  let checkin = inputs[2];
  let checkout = inputs[3];
  let nights = inputs[4];
  let today = new Date();
  date1 = today;

  function getDays() {
    if (date1 && date2) {
      daysInMilliSeconds = date2 - date1;
      days = daysInMilliSeconds / 86400000;
      nights.value = Math.ceil(days);
    }
  }

  checkin.addEventListener('change', function (e) {
    let dateArr = e.target.value.split('-');
    date1 = new Date(
      Number(dateArr[0]),
      Number(dateArr[1] - 1),
      Number(dateArr[2])
    );
    if (date1 < today) {
      date1 = today;
      let year = `${today.getFullYear()}`;
      let month = `${today.getMonth() + 1}`;
      let day = `${today.getDate()}`;
      month.length === 1 ? (month = `0${month}`) : null;
      day.length === 1 ? (day = `0${day}`) : null;
      e.target.value = `${year}-${month}-${day}`;
    }
    if (date2 < date1) {
      date2 = date1;
      checkout.value = checkin.value;
    }
    getDays();
  });

  checkout.addEventListener('change', function (e) {
    let dateArr = e.target.value.split('-');
    date2 = new Date(
      Number(dateArr[0]),
      Number(dateArr[1] - 1),
      Number(dateArr[2])
    );
    if (date2 < date1) {
      date2 = date1;
      e.target.value = checkin.value;
    }
    getDays();
  });

  nights.addEventListener('change', function (e) {
    let date = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate() + Number(e.target.value)
    );
    date2 = date;
    let year = `${date.getFullYear()}`;
    let month = `${date.getMonth() + 1}`;
    let day = `${date.getDate()}`;
    month.length === 1 ? (month = `0${month}`) : null;
    day.length === 1 ? (day = `0${day}`) : null;
    checkout.value = `${year}-${month}-${day}`;
  });
})();

//change background photo module
const photo = (function () {
  let body = document.querySelector('body');
  let photos = ['travel1.jpg', 'travel2.jpg'];
  let i = 0;
  function changeBackground() {
    if (i < photos.length) {
      console.log(i);
      body.style.backgroundImage = `url('imgs/${photos[i]}')`;
      i++;
      i === photos.length ? (i = 0) : null;
    }
  }
  setInterval(changeBackground, 10000);
})();
