window.addEventListener('scroll', function() {
  const scrollValue = window.scrollY;
  const threshold = window.innerHeight * 0.05; // 5vh
  const navbar = document.querySelector('.navbar');
  if (scrollValue >= threshold) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.388)';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
  } else {
    navbar.style.backgroundColor = '';
    navbar.style.position = 'absolute';
    navbar.style.top = `${threshold}px`;
    navbar.style.left = '0';
  }
});