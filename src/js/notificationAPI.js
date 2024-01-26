import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

export const messageObj = {
  showMessage: textMessage => {
    showMessage(textMessage, "info");
  },
  showError: textMessage => {
    showMessage(textMessage, "error");
  },
  showSuccess: textMessage => {
    showMessage(textMessage, "success")
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