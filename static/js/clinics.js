document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("clinicSearchForm");
  const searchInput = document.getElementById("clinicSearch");
  const clinicCards = document.querySelectorAll(".clinics-card"); // Ensures all clinics have this class

  // Listen for form submission or Enter key
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from refreshing
    const searchTerm = searchInput.value.toLowerCase();
    filterClinics(searchTerm);
  });

  // Filter clinics based on search input
  function filterClinics(searchTerm) {
    clinicCards.forEach((card) => {
      const clinicName = card.querySelector("h3").innerText.toLowerCase();

      // Show cards only if their h3 starts with the search term
      if (clinicName.startsWith(searchTerm)) {
        card.style.display = "block"; // Show matching clinics
      } else {
        card.style.display = "none"; // Hide non-matching clinics
      }
    });
  }

  // Reset search if the input is cleared
  searchInput.addEventListener("input", function () {
    if (searchInput.value.trim() === "") {
      clinicCards.forEach((card) => {
        card.style.display = "block"; // Show all clinics when input is cleared
      });
    }
  });
});
