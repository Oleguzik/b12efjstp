import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

export const messageObj = {
  showMessage: textMessage => {
    showMessage(textMessage, "info");
  },
  showSuccess: textMessage => {
    showMessage(textMessage, "success");
  },
  showError: textMessage => {
    showMessage(textMessage, "error");
  }
}


const showMessage = (message, type = "") => {
  iziToast[type]({
    title: "message",
    position: "bottomRight",
    closeOnEscape: true,
    closeOnClick: true,
    timeout: 5000,
  })
};