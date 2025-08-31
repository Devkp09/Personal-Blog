const toggleButtons = document.querySelectorAll('.toggle-btn');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        signupForm.classList.toggle('active');
        loginForm.classList.toggle('active');
    });
});
