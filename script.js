// ניווט בין טאבים
const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// מסך פתיחה
document.getElementById('enter-button').addEventListener('click', () => {
  const landing = document.getElementById('landing-screen');
  landing.style.opacity = '0';
  setTimeout(() => landing.style.display = 'none', 1000);
});
