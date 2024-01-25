import iziToast from "izitoast";

const showMessage = (message, type = "info") => {
  iziToast[type]({
    title: "message",
    position: "topCenter",
    closeOnEscape: true,
    closeOnClick: true,
    timeout: 5000,
  })
};