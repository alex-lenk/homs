import { Fancybox } from '@fancyapps/ui';

import initNavbarPanel from './components/initNavbarPanel.js';
import initSolutionSlider from './components/initSolutionSlider.js';
import initReportsSlider from './components/initReportsSlider.js';
import initCreatedSlider from './components/initCreatedSlider.js';
import initializeModals from './components/initializeModals.js';
import initTextareaLimit from './components/initTextareaLimit.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarPanel();
  initSolutionSlider();
  initReportsSlider();
  initCreatedSlider();
  initializeModals();
  initTextareaLimit();

  // init Fancybox
  Fancybox.bind('[data-fancybox]', {});
});
