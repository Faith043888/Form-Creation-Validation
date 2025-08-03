document.addEventListener("DOMContentLoaded", function () {
  // Select form and feedback area
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default submission

    // 1. Retrieve and trim user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 2. Initialize validation variables
    let isValid = true;
    let messages = [];

    // 3. Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // 4. Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include '@' and '.' characters.");
    }

    // 5. Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // 6. Feedback display logic
    feedbackDiv.style.display = "block"; // Make feedback visible

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red
    }
  });
});
