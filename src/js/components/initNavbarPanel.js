/**
 * Инициализирует меню на мобильных устройствах.
 * @returns {void}
 */
const initNavbarPanel = () => {
  const navbarPanelEl = document.querySelector('.js-navbar__panel');

  if (!navbarPanelEl) return;

  const navbarCloseEl = document.querySelector('.js-navbar__close');
  const navbarOpenEl = document.querySelector('.js-navbar__open');

  navbarCloseEl.addEventListener('click', () => {
    handleNavbarClose();
  });

  navbarOpenEl.addEventListener('click', () => {
    navbarPanelEl.classList.add('open');
  });
};

export const handleNavbarClose = () => {
  const navbarPanelEl = document.querySelector('.js-navbar__panel');
  navbarPanelEl.classList.remove('open');
};

export default initNavbarPanel;
