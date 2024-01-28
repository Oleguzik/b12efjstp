import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const messages = {
  showInfo: textMessage => {
    showMessage(textMessage, 'info');
  },
  showSuccess: textMessage => {
    showMessage(textMessage, 'success');
  },
  showError: textMessage => {
    showMessage(textMessage, 'error');
  },
};

export default messages;

const showMessage = (message, type = '') => {
  iziToast[type]({
    title: message,
    position: 'bottomCenter',
    closeOnEscape: true,
    closeOnClick: true,
    timeout: 5000,
  });
};
