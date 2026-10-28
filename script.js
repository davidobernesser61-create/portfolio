const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('#copy-status');
let resetStatus;
copyButton?.addEventListener('click', async () => {
  clearTimeout(resetStatus);
  try {
    await navigator.clipboard.writeText('daveobie5@gmail.com');
    copyStatus.textContent = 'Email address copied.';
  } catch {
    copyStatus.textContent = 'Copy daveobie5@gmail.com, or use Get in touch to open your email app.';
  }
  resetStatus = setTimeout(() => { copyStatus.textContent = ''; }, 6000);
});
