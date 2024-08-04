document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("search-bar");
  const voiceSearchButton = document.getElementById("voice-search-button");
  const productCards = document.querySelectorAll(".product-card");

  let recognition;

  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript.toLowerCase();

      if (transcript.includes("delete")) {
        clearSearch();
      } else {
        searchBar.value = transcript;
        performSearch();
      }
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };

    voiceSearchButton.addEventListener("click", function () {
      recognition.start();
    });
  } else {
    voiceSearchButton.style.display = "none";
    console.log("Web Speech API is not supported in this browser.");
  }

  searchBar.addEventListener("input", performSearch);

  function clearSearch() {
    searchBar.value = "";
    showAllProducts();
  }

  function showAllProducts() {
    productCards.forEach((card) => {
      card.style.display = "block";
    });
  }

  function performSearch() {
    const searchTerm = searchBar.value.toLowerCase().trim();

    if (searchTerm === "") {
      showAllProducts();
      return;
    }

    let matchFound = false;

    productCards.forEach((card) => {
      const title = card
        .querySelector(".product-title")
        .textContent.toLowerCase();
      const description = card
        .querySelector(".product-description")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = "block";
        matchFound = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!matchFound) {
      showAllProducts();
    }
  }
});
