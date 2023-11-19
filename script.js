var entiteNoms = document.querySelectorAll(".entite-nom");

entiteNoms.forEach(function (entiteNom) {
  entiteNom.addEventListener("click", function () {
    var article = this.parentElement;
    toggleArticle(article.id);
  });
});

function toggleArticle(articleId) {
  var article = document.getElementById(articleId);
  var entiteArticle = article.querySelector(".entite-article");

  var closeButton = entiteArticle.querySelector(".close-button");
  if (!closeButton) {
    closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function () {
      toggleArticle(articleId);
    };
    entiteArticle.appendChild(closeButton);
  }

  entiteArticle.style.display =
    entiteArticle.style.display === "none" || entiteArticle.style.display === ""
      ? "block"
      : "none";
}
//


//
var playButtons = document.querySelectorAll(".lecture");
var audioElements = document.querySelectorAll("audio");

for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    var audioId = this.getAttribute("data-audio");
    var audioElement = document.querySelector("." + audioId);

    if (audioElement) {
      audioElement.play().catch(function (error) {
        console.error("Erreur de lecture :", error);
      });
    }
  });
}
var darkModeEnabled = false;

function toggleDarkMode() {
  var body = document.body;
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  updateDarkModeButton();
}

function updateDarkModeButton() {
  var toggleButton = document.querySelector(".toggleButton");
  toggleButton.innerHTML = darkModeEnabled ? "Light Mode" : "Dark Mode";
}

function toggleRapid() {
  var entitesARendreRapides = [
    "Les-Jumeaux",
    "Raiju",
    "Moroi",
    "Deogen",
    "Thaye",
  ];
  entitesARendreRapides.forEach(function (entiteId) {
    var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
    if (entiteNom) {
      if (entiteNom.style.color === "red") {
        entiteNom.style.color = "";
      } else {
        entiteNom.style.color = "red";
      }
    }
  });
}

function toggleLente() {
  var entitesARendreLentes = ["Revenant", "Hantu"];
  entitesARendreLentes.forEach(function (entiteId) {
    var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
    if (entiteNom) {
      if (entiteNom.style.color === "green") {
        entiteNom.style.color = "";
      } else {
        entiteNom.style.color = "green";
      }
    }
  });
}

function toggleNormal() {
  var entitesARendreNormal = [
    "Esprit",
    "Spectre",
    "Fantome",
    "Poltergeist",
    "Banshee",
    "Djin",
    "Cauchemar",
    "Ombre",
    "Demon",
    "Yurei",
    "Oni",
    "Yokai",
    "Goryo",
    "Myling",
    "Onryo",
    "Obake",
  ];
  entitesARendreNormal.forEach(function (entiteId) {
    var entiteNom = document.querySelector("#" + entiteId + " .entite-nom h2");
    if (entiteNom) {
      if (entiteNom.style.color === "blue") {
        entiteNom.style.color = "";
      } else {
        entiteNom.style.color = "blue";
      }
    }
  });
}
