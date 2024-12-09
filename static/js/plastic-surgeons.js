document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("doctorSearchForm");
  const searchInput = document.getElementById("doctorSearch");
  const surgeonCards = document.querySelectorAll(".surgeon-card");

  // Listen for form submission or Enter key
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from refreshing
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterDoctors(searchTerm);
  });

  // Filter surgeons based on search input
  function filterDoctors(searchTerm) {
    surgeonCards.forEach((card) => {
      const surgeonName = card.querySelector("h3").innerText.toLowerCase();

      // Show cards only if their h3 starts with the search term
      if (surgeonName.startsWith(searchTerm)) {
        card.style.display = "flex"; // Use 'flex' to keep layout alignment
      } else {
        card.style.display = "none"; // Hide non-matching surgeons
      }
    });
  }

  // Reset search if the input is cleared
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
      surgeonCards.forEach((card) => {
        card.style.display = "flex"; // Show all surgeons when input is cleared
      });
    } else {
      filterDoctors(searchTerm); // Continue filtering dynamically
    }
  });
});
