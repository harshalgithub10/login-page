document.getElementById('signupForm').classList.add('active');

function toggleForms() {
    const signUpForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const toggleButton = document.getElementById('toggleButton');

    signUpForm.classList.toggle('active');
    loginForm.classList.toggle('active');

    if (loginForm.classList.contains('active')) {
        toggleButton.textContent = 'Switch to Sign Up';
    } else {
        toggleButton.textContent = 'Switch to Login';
    }
}
