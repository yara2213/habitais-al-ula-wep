document.querySelector('form').addEventListener('submit', function (event) {
    const firstNameInput = document.querySelector('input[name="fname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="pass"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm_pass"]');
    const ageInput = document.querySelector('input[name="age"]');
    const phoneInput = document.querySelector('input[name="phone"]');

    
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    [firstNameInput, emailInput, passwordInput, confirmPasswordInput, ageInput, phoneInput].forEach(input => {
        input.classList.remove('error', 'valid');
    });

    const inputs = [
        { name: "First Name", value: firstNameInput.value.trim(), input: firstNameInput },
        { name: "Email", value: emailInput.value.trim(), input: emailInput },
        { name: "Password", value: passwordInput.value.trim(), input: passwordInput },
        { name: "Confirm Password", value: confirmPasswordInput.value.trim(), input: confirmPasswordInput },
        { name: "Age", value: ageInput.value.trim(), input: ageInput },
        { name: "Phone", value: phoneInput.value.trim(), input: phoneInput }
    ];

    let isValid = true;

    inputs.forEach(({ name, value, input }) => {
        switch (name) {
            case "First Name":
                if (!value) {
                    document.getElementById('fnameError').textContent = "First name is required!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            case "Email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    document.getElementById('emailError').textContent = "Email is required!";
                    input.classList.add('error');
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    document.getElementById('emailError').textContent = "Please enter a valid email address!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            case "Password":
                if (!value) {
                    document.getElementById('passwordError').textContent = "Password is required!";
                    input.classList.add('error');
                    isValid = false;
                } else if (value.length < 8) {
                    document.getElementById('passwordError').textContent = "Password must be at least 8 characters long!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            case "Confirm Password":
                if (!value) {
                    document.getElementById('confirmPasswordError').textContent = "Confirm password is required!";
                    input.classList.add('error');
                    isValid = false;
                } else if (value !== passwordInput.value.trim()) {
                    document.getElementById('confirmPasswordError').textContent = "Passwords do not match!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            case "Age":
                if (!value) {
                    document.getElementById('ageError').textContent = "Age is required!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            case "Phone":
                let isPhoneValid = true;
                for (let i = 0; i < value.length; i++) {
                    if (isNaN(value[i])) {
                        isPhoneValid = false;
                        break;
                    }
                }
                if (!value) {
                    document.getElementById('phoneError').textContent = "Phone number is required!";
                    input.classList.add('error');
                    isValid = false;
                } else if (!isPhoneValid) {
                    document.getElementById('phoneError').textContent = "Phone number must contain only numbers!";
                    input.classList.add('error');
                    isValid = false;
                } else if (value.length < 9 || value.length > 10) {
                    document.getElementById('phoneError').textContent = "Phone number must be between 9 and 10 digits!";
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.add('valid');
                }
                break;

            default:
                break;
        }
    });

    if (isValid) {
        alert("Sign-up successful!");
    } else {
        event.preventDefault(); 
    }
});
