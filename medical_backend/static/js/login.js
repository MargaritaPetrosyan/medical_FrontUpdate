document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModalButton = document.querySelector('.close-modal');

    // Show modal when "Forgot your password?" is clicked
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        forgotPasswordModal.style.display = 'flex'; // Show modal
    });

    // Close modal when "Close" button is clicked
    closeModalButton.addEventListener('click', function () {
        forgotPasswordModal.style.display = 'none'; // Hide modal
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function (event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
});