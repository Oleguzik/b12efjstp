import messages from './js/notificationAPI';
import backendAPI from './js/backendAPI';
import localStorageAPI from './js/localStorageAPI';
import startExercisesScenario from './js/excercises';
import makeAsyncRequest from './js/loader';

import './js/initialization';

startExercisesScenario();

///////Subscription form/////////
const subscriptionForm = document.querySelector('.footer-subscription-form');

subscriptionForm.addEventListener('submit', async event => {
  event.preventDefault();

  const email = subscriptionForm.elements.email.value;

  const response = await backendAPI.subscription(email);

  if (response.result) {
    messages.showSuccess(response.message);
    subscriptionForm.elements.email.classList.remove('is-glowing');
  } else {
    messages.showError(response.message);
  }

  subscriptionForm.reset();
});
