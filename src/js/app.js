document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn__menu');
  const menu = document.getElementById('menu__mobile');
  const sairOverlay = document.getElementById('overlay__menu');

  // Menu Mobile
  if (btnMenu && menu && sairOverlay) {
    btnMenu.addEventListener('click', () => {
      menu.classList.toggle('abrir__menu');
    });

    menu.addEventListener('click', () => {
      menu.classList.remove('abrir__menu');
    });

    sairOverlay.addEventListener('click', () => {
      menu.classList.remove('abrir__menu');
    });
  }
});

