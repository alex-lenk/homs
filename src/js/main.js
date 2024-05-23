import { Fancybox } from '@fancyapps/ui';

import initNavbarPanel from './components/initNavbarPanel.js';
import initSolutionSlider from './components/initSolutionSlider.js';
import initReportsSlider from './components/initReportsSlider.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarPanel();
  initSolutionSlider();
  initReportsSlider();

  // init Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {});
});
