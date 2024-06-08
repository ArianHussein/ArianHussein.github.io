function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    return name !== "" && email !== "" && message !== "";
}

// Function to enable/disable the submit button based on form validation
function toggleButton() {
    var button = document.getElementById("submitButton");
    button.disabled = !checkForm();
}

// Call toggleButton() on input change in any form field
document.getElementById("name").addEventListener("input", toggleButton);
document.getElementById("email").addEventListener("input", toggleButton);
document.getElementById("message").addEventListener("input", toggleButton);

// Function to handle form submission
function submitForm() {
    window.location.href = 'thankyou-page.html';
    // Prevent default form submission
    return false;
}