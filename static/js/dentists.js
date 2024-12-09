document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("doctorSearchForm");
  const searchInput = document.getElementById("doctorSearch");
  const dentistCards = document.querySelectorAll(".dentist-card");

  // Listen for form submission or Enter key
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from refreshing
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterDoctors(searchTerm);
  });

  // Filter dentists based on search input
  function filterDoctors(searchTerm) {
    dentistCards.forEach((card) => {
      const dentistName = card.querySelector("h3").innerText.toLowerCase();

      // Show cards only if their h3 starts with the search term
      if (dentistName.startsWith(searchTerm)) {
        card.style.display = "flex"; // Use 'flex' to keep layout alignment
      } else {
        card.style.display = "none"; // Hide non-matching dentists
      }
    });
  }

  // Reset search if the input is cleared
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
      dentistCards.forEach((card) => {
        card.style.display = "flex"; // Show all dentists when input is cleared
      });
    } else {
      filterDoctors(searchTerm); // Continue filtering dynamically
    }
  });
});
