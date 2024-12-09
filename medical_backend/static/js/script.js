// Open Modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex"; // Show the modal
}

// Close Modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none"; // Hide the modal
}

// Add Event Listeners to buttons
document
  .getElementById("loginButton")
  .addEventListener("click", () => openModal("loginModal"));
document
  .getElementById("registerButton")
  .addEventListener("click", () => openModal("registerModal"));

// Handle form submissions
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login submitted!");
  closeModal("loginModal");
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Register submitted!");
    closeModal("registerModal");
  });

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".dropdown-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Adjust offset as needed for header
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});
