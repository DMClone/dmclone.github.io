document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});

const gluDiv = document.querySelector(".gludiv");
const gluetcDiv = document.querySelector(".gluetcdiv");
const rocDiv = document.querySelector(".rocdiv");

var jsonData;

fetch("../json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    for (A = 0; A <= jsonData.glu.length; A++) {
      const useData = jsonData.glu[A];
      if (useData != undefined) {
        gluDiv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">
                        <button class="btn btn-primary card-button" onclick="OpenOverlay('glu', '${A}')">View
                            More</button></small>
                </div>
            </div>`;
      }
    }

    for (A = 0; A <= jsonData.gluetc.length; A++) {
      const useData = jsonData.gluetc[A];
      if (useData != undefined) {
        gluetcDiv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>`;
      }
    }

    for (A = 0; A <= jsonData.roc.length; A++) {
      const useData = jsonData.roc[A];
      if (useData != undefined) {
        rocDiv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.img}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>`;
      }
    }
  });

var overlay = document.getElementById("overlay");

document.body.addEventListener("click", function (event) {
  if (event.target === overlay) CloseOverlay();
});

function OpenOverlay(key, index) {
  overlay.style.display = "flex";
  FillOverlay(key, index);
}

function FillOverlay(key, index) {
  const useData = jsonData[key][index];
  var descriptions = useData.extendedDescriptions;
  var codeSnippets = useData.code_snippets;
  if (useData != undefined) {
    overlay.innerHTML = `<div class="overlay-card">
                <div class="overlay-card-body">
                    <h5 class="card-title">${useData.title}</h5>
                    <p class="card-text" id="card-text"></p>
                </div>`;
    var cardText = document.getElementById("card-text");
    for (
      let index = 0;
      index < descriptions.length || index < codeSnippets.length;
      index++
    ) {
      if (index < descriptions.length) {
        cardText.innerHTML += `<p>${descriptions[index]}</p>`;
      }
      if (index < codeSnippets.length) {
        cardText.innerHTML += `<div class="coolcode"><pre><code>${codeSnippets[index]}</code></pre></div>`;
      }
    }
  }
}

function CloseOverlay() {
  overlay.innerHTML = null;
  overlay.style.display = "none";
  console.log("Overlay closed");
}
