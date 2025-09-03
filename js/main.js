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

const blockonediv = document.querySelector(".blockonediv");
const blocktwodiv = document.querySelector(".blocktwodiv");
const blockthreediv = document.querySelector(".blockthreediv");

var jsonData;

fetch("../json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    for (A = 0; A <= jsonData.blockone.length; A++) {
      const useData = jsonData.blockone[A];

      if (useData != undefined) {
        let itchioButton = ItchioLink(useData.itchio);
        let githubButton = GithubLink(useData.github);

        blockonediv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.thumbnail}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">
                    ${itchioButton}
                        <button class="btn btn-primary card-button" onclick="OpenOverlay('blockone', '${A}')">View
                            More</button>
                            ${githubButton}
                            </small>
                </div>
            </div>`;
      }
    }

    for (A = 0; A <= jsonData.blocktwo.length; A++) {
      const useData = jsonData.blocktwo[A];
      if (useData != undefined) {
        let itchioButton = ItchioLink(useData.itchio);
        let githubButton = GithubLink(useData.github);

        blocktwodiv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.thumbnail}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">
                    ${itchioButton}
                        <button class="btn btn-primary card-button" onclick="OpenOverlay('blocktwo', '${A}')">View
                            More</button>
                            ${githubButton}
                            </small>
                </div>
            </div>`;
      }
    }

    for (A = 0; A <= jsonData.blockthree.length; A++) {
      const useData = jsonData.blockthree[A];
      if (useData != undefined) {
        let itchioButton = ItchioLink(useData.itchio);
        let githubButton = GithubLink(useData.github);

        blockthreediv.innerHTML += `<div class="card d-flex flex-column">
                <img class="card-img-top" src="${useData.thumbnail}" alt="${useData.altText}">
                <div class="card-body flex-grow-1">
                    <h4 class="card-title">${useData.title}</h4>
                    <p class="card-text">${useData.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">
                    ${itchioButton}
                        <button class="btn btn-primary card-button" onclick="OpenOverlay('blockthree', '${A}')">View
                            More</button>
                            ${githubButton}
                            </small>
                </div>
            </div>`;
      }
    }
  });

function ItchioLink(itchio) {
  switch (itchio) {
    case "soon":
      itchio = `<button class="btn btn-secondary card-button" disabled>Itch.io (Soon)</button>`;
      break;
    case "":
      break;
    default:
      itchio = `<a href="${itchio}" target="_blank" class="btn btn-secondary card-button">Itch.io</a>`;
      break;
  }
  return itchio;
}

function GithubLink(github) {
  switch (github) {
    case "soon":
      github = `<button class="btn btn-secondary card-button" disabled>Itch.io (Soon)</button>`;
      break;
    case "":
      break;
    default:
      github = `<a href="${github}" target="_blank" class="btn btn-secondary card-button">Github</a>`;
      break;
  }
  return github;
}

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
  var images = useData.images;
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
      if (images[index] != "" && index < images.length) {
        cardText.innerHTML += `<image class="card-img-top" src= "${images[index]}"><image>`;
      }
    }
  }
}

function CloseOverlay() {
  overlay.innerHTML = null;
  overlay.style.display = "none";
  console.log("Overlay closed");
}
