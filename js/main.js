console.log(' hallo');

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


const rocDiv = document.querySelector('.rocdiv');

let C = 0;

  fetch("../json/projects.json")
      .then(response => response.json())
      .then(data => {
          console.log(data);
          for (A = 0; A <= data.roc.length; A++) {
            const useData = data.roc[A];
            console.log(useData);
            console.log(A);
            console.log('hoi');
            rocDiv.innerHTML +=
            `<div class="card">
            <img class="card-img-top"
                src="${useData.img}"
                alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${useData.title}</h4>
                <p class="card-text">${useData.description}</p>
                <a href="${useData.link}" class="card-link stretched-link">Card link</a>
            </div>
        </div>`
          }
      });
