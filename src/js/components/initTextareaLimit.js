/**
 * Учет количества введенных символов в textarea области и проверка минимального количества символов
 * @returns {void}
 */
const initTextareaLimit = () => {
  const textareaCounter = document.querySelectorAll('.js-textarea__limit-counter');
  if (!textareaCounter.length) return;

  textareaCounter.forEach(instance => {
    const textareaLimit = instance.querySelector('.js-textarea__limit');
    const numValue = textareaLimit.value.length;
    const minLength = textareaLimit.getAttribute('minlength');

    if (numValue) instance.dataset.textareaCount = numValue;

    instance.dataset.textareaLimit = textareaLimit.getAttribute('maxlength');

    if (minLength) instance.setAttribute('data-textarea-error', '');

    textareaLimit.addEventListener('input', ({ target }) => {
      instance.dataset.textareaCount = target.value.length;

      if (minLength && target.value.length < minLength) {
        textareaLimit.classList.add('is-error');
        instance.dataset.textareaError = `напишите минимум ${ minLength } символов в комментарии`;
      } else {
        textareaLimit.classList.remove('is-error');
        instance.dataset.textareaError = '';
      }
    });
  });
};

export default initTextareaLimit;
