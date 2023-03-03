// document.addEventListener("click", clickHandlers);

const API = "http://localhost:3000/results";

function getStories(event) {
  // if (!event.target.matches("button")) return;
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data));
}

function showData(stories) {
  var looped = stories
    .map(
      (article) => `
        <div class="item">

        <picture>
          <img src="${article.multimedia[1].url}" alt="" />
          <caption>${article.multimedia[1].caption}</caption>
        </picture>

          <h3><a href="${article.url}">${article.title}</a></h3>
          <p>${article.abstract}</p>
        </div>
      `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

if (document.querySelector(".home")) {
  getStories();
}
