import { Fancybox } from '@fancyapps/ui';

import initNavbarPanel from './components/initNavbarPanel.js';
import initSolutionSlider from './components/initSolutionSlider.js';
import initReportsSlider from './components/initReportsSlider.js';
import initCreatedSlider from './components/initCreatedSlider.js';
import initializeModals from './components/initializeModals.js';
import initTextareaLimit from './components/initTextareaLimit.js';
import goToInit from './components/goToInit.js';
import { anchors } from './components/anchors.js';
import { filtersCatalog } from './components/filters-catalog.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarPanel();
  initSolutionSlider();
  initReportsSlider();
  initCreatedSlider();
  initializeModals();
  initTextareaLimit();
  goToInit();
  anchors();
  filtersCatalog();

  // init Fancybox
  Fancybox.bind('[data-fancybox]', {});
});
