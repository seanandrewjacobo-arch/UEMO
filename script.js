// script.js — clean UX for the professional theme
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('regForm');
const status = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
  // basic client-side validation & UX only
  const name = document.getElementById('fullname').value.trim();
  const studentid = document.getElementById('studentid').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !studentid || !email) {
    e.preventDefault();
    status.textContent = 'Please complete required fields: Full name, Student ID, and Email.';
    status.style.color = '#a73b3b';
    return;
  }

  // Disable button to avoid double submit
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  status.textContent = 'Sending registration. You will be redirected shortly.';
  status.style.color = '';

  // If server-side takes long, re-enable after 10s to prevent lockout
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Registration';
  }, 10000);
});
