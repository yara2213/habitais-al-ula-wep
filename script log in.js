// Login JavaScript File
console.log("Login script loaded.");

document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="pass"]');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages and styles
    emailError.textContent = '';
    passwordError.textContent = '';
    emailInput.classList.remove('error', 'valid');
    passwordInput.classList.remove('error', 'valid');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true; // Flag to check overall validity

    if (!email || !password) {
        if (!email) {
            emailError.textContent = "Email is required!";
            emailInput.classList.add('error');
            isValid = false; // Mark as invalid
        } else {
            emailInput.classList.add('valid'); // Mark as valid if email is present
        }
        if (!password) {
            passwordError.textContent = "Password is required!";
            passwordInput.classList.add('error');
            isValid = false; // Mark as invalid
        } else {
            passwordInput.classList.add('valid'); // Mark as valid if password is present
        }
        event.preventDefault();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address!";
        emailInput.classList.add('error');
        isValid = false; // Mark as invalid
    } else {
        emailInput.classList.add('valid'); // Mark as valid if email is correct
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long!";
        passwordInput.classList.add('error');
        isValid = false; // Mark as invalid
    } else {
        passwordInput.classList.add('valid'); // Mark as valid if password is correct
    }

    if (isValid) {
        alert("Login successful!");
    } else {
        event.preventDefault(); // Prevent form submission if invalid
    }
});