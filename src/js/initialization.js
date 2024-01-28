import localStorageAPI from './localStorageAPI';

// set Quote of the Day
(async () => {
  let quoteData = await localStorageAPI.getQuoteOfTheDay();
  console.log(quoteData);
  // document.querySelector('').textContent = quoteData.author;
  // document.querySelector('').textContent = quoteData.quote;
})();

import './header';
