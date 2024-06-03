/**
 * Инициализирует модальные функции, включая прослушиватели событий для открытия и закрытия модальных окон.
 * @returns {void}
 */
const initializeModals = () => {
  const orderButtons = document.querySelectorAll('.js-order-form');

  if (orderButtons.length === 0) return;

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!button.dataset.targetModal) {
        console.warn('Отсутствует атрибут data-target-modal', button);
        return;
      }

      const modalElement = document.querySelector(`#${button.dataset.targetModal}`);
      if (!modalElement) {
        console.warn('Элемент с идентификатором не найден: ', button.dataset.targetModal);
        return;
      }

      openModal(modalElement);
    });
  });

  /**
   * Открывает модальное окно, добавляя класс 'open' к модальному элементу.
   * @param {Element} modal - Модальный элемент, который нужно открыть.
   */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
  }

  const modals = document.querySelectorAll('.js-c-modal');
  modals.forEach(modal => {
    const closeModalButton = modal.querySelector('.js-c-modal__close');
    if (!closeModalButton) return;

    /**
     * Прикрепляет прослушиватель событий к кнопке закрытия модального окна.
     */
    closeModalButton.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  });
};

export default initializeModals;
