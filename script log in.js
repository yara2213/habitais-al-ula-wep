console.log("Login script loaded.");

document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="pass"]');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.textContent = '';
    passwordError.textContent = '';
    emailInput.classList.remove('error', 'valid');
    passwordInput.classList.remove('error', 'valid');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true; 

    if (!email || !password) {
        if (!email) {
            emailError.textContent = "Email is required!";
            emailInput.classList.add('error');
            isValid = false; 
        } else {
            emailInput.classList.add('valid'); 
        }
        if (!password) {
            passwordError.textContent = "Password is required!";
            passwordInput.classList.add('error');
            isValid = false; 
        } else {
            passwordInput.classList.add('valid'); 
        }
        event.preventDefault();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address!";
        emailInput.classList.add('error');
        isValid = false; 
    } else {
        emailInput.classList.add('valid'); 
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long!";
        passwordInput.classList.add('error');
        isValid = false; 
    } else {
        passwordInput.classList.add('valid'); 
    }

    if (isValid) {
        alert("Login successful!");
    } else {
        event.preventDefault(); 
    }
});
