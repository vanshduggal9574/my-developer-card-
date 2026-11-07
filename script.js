const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️ Light Mode';
  } else {
    themeBtn.textContent = '🌙 Dark Mode';
  }
});

console.log("Dark mode script initialized!");