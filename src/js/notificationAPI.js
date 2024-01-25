import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

export const messageObj = {
  
}


const showMessage = (message, type = "info") => {
  iziToast[type]({
    title: "message",
    position: "topCenter",
    closeOnEscape: true,
    closeOnClick: true,
    timeout: 5000,
  })
};