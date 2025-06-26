document.addEventListener("DOMContentLoaded", function () {

  el_autohide = document.querySelector('.autohide');

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      }
      else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end

const gluDiv = document.querySelector('.gludiv');
const gluetcDiv = document.querySelector('.gluetcdiv');
const rocDiv = document.querySelector('.rocdiv');

let C = 0;

fetch("../json/projects.json")
  .then(response => response.json())
  .then(data => {
    for (A = 0; A <= data.glu.length; A++) {
      const useData = data.glu[A];
      if (useData != undefined) {
        gluDiv.innerHTML +=
          `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>`
        console.log("Looped");
      }
    }

    for (A = 0; A <= data.gluetc.length; A++) {
      const useData = data.gluetc[A];
      if (useData != undefined) {
        gluetcDiv.innerHTML +=
          `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>`
        console.log("Looped");
      }
    }

    for (A = 0; A <= data.roc.length; A++) {
      const useData = data.roc[A];
      if (useData != undefined) {
        rocDiv.innerHTML +=
          `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>`
      }
    }
  });
