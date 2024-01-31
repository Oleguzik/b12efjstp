import localStorageAPI from './localStorageAPI';
import { startModalExerciseScenario } from './modal-exercise';
import { startModalFeedbackScenario } from './modal-feedback';

// set Quote of the Day
(async () => {
  let quoteData = await localStorageAPI.getQuoteOfTheDay();
  document.querySelector('.quote-author').textContent = quoteData.author;
  document.querySelector('.quote-text').textContent = quoteData.quote;
})();

import './header';
import './scroll';

startModalExerciseScenario();
startModalFeedbackScenario();
