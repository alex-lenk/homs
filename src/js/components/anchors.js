/**
 * Инициализирует обработчики кликов для всех якорных элементов с классом '.js-goto'.
 * Эта функция добавляет прослушиватель событий, который плавно прокручивает страницу к целевому элементу.
 * @returns {void}
 */
export const anchors = () => {
  const anchorElements = document.querySelectorAll('.js-goto');

  if (!anchorElements.length) return;

  anchorElements.forEach(anchor => {
    anchor.addEventListener('click', () => goToAnchors(anchor));
  });
};

/**
 * Плавно прокручивает страницу к указанному элементу, используя данные из атрибутов якоря.
 * @param {HTMLElement} anchor - Элемент якоря, который инициировал прокрутку.
 * @param {string} [defaultTarget] - Селектор по умолчанию, к которому следует прокрутить страницу.
 * @returns {void}
 */
export const goToAnchors = (anchor, defaultTarget) => {
  const targetSelector = anchor.getAttribute('data-goto') || defaultTarget;
  const scrollTarget = document.querySelector(targetSelector);
  if (!scrollTarget) return;

  const topOffset = parseInt(anchor.getAttribute('data-offset'), 10) || 140;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - window.scrollY - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
