function switchLayout() {
  const isMobile = window.innerWidth <= 900;
  const desktop = document.getElementById('desktop-layout');
  const mobile = document.getElementById('mobile-layout');

  if (isMobile) {
    desktop.style.display = 'none';
    mobile.style.display = 'block';
  } else {
    desktop.style.display = 'block';
    mobile.style.display = 'none';
  }
}

// check iniziale
switchLayout();

// save se user fa refresh
window.addEventListener('resize', switchLayout);
