const whoIsYouSelect = document.getElementById("whoIsYou");
const otherInput = document.getElementById("otherInput");

whoIsYouSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherInput.style.display = "block";
  } else {
    otherInput.style.display = "none";
  }
});

document.getElementById("partnerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for submitting the form! We'll get back to you soon.");
});
