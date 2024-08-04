document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  const productCards = document.querySelectorAll(".product-card");

  searchBar.addEventListener("input", () => {
    if (searchBar.value.trim() === "") {
      alert("Fuck you");
    }
  });

  function performSearch() {
    const searchTerm = searchBar.value.toLowerCase();

    productCards.forEach((card) => {
      const title = card
        .querySelector(".product-title")
        .textContent.toLowerCase();
      const description = card
        .querySelector(".product-description")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", performSearch);

  searchBar.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
});
