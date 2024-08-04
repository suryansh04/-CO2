document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  const productCards = document.querySelectorAll(".product-card");

  searchBar.addEventListener("input", () => {
    if (searchBar.value.trim() === "") {
      const searchTerm = searchBar.value.toLowerCase();

      productCards.forEach((card) => {
        const title = card
          .querySelector(".product-title")
          .textContent.toLowerCase();
        const description = card
          .querySelector(".product-description")
          .textContent.toLowerCase();

        card.style.display = "block";
      });
    } else {
      performSearch();
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
});
