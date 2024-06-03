/**
 * @type function
 * @desc Initialization of scrollbar in filters, as well as click on the show more button
 */
export function filtersCatalog() {
  const searchInput = document.querySelector('.js-base__search-input');
  if (!searchInput) return;

  const debouncedSearch = debounce(handleSearch);
  searchInput.addEventListener('input', debouncedSearch);
}

// Функция debounce для оптимизации процесса поиска
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// Функция для обработки поиска
function handleSearch(event) {
  const items = document.querySelectorAll('.js-base__result-item');
  const searchValue = event.target.value.toLowerCase();

  // Сброс предыдущих выделений и поиск только если введено 2 и более символов
  if (searchValue.length >= 2) {
    items.forEach(item => {
      item.classList.remove('base__result-item--ok');
      if (item.textContent.toLowerCase().includes(searchValue)) {
        item.classList.add('base__result-item--ok');
      }
    });
  } else {
    items.forEach(item => {
      item.classList.remove('base__result-item--ok');
    });
  }
}
