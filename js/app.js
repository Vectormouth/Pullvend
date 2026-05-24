
const form = document.getElementById('partnerForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const button = form.querySelector('button');

  button.textContent = 'Request Sent ✓';

  setTimeout(() => {
    button.textContent = 'Send Request';
    form.reset();
  }, 2000);
});
