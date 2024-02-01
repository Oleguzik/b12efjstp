export default function makeAsyncRequest(url) {
  const loader = document.createElement("div");
  loader.className = "loader";
  const style = document.createElement("style");
  style.textContent = `
    .loader {
      width: 24px;
      height: 24px;
      margin-top: 50%;
      margin-left: 50%;
      display: none;
      position: absolute;
      border: 4px solid rgba(126, 132, 127, 0.6);
      border-radius: 50%;
      border-left-color: #7E847F;
      animation: loader 1.6s linear infinite;
}
    @keyframes loader {
      100% {
    transform: rotate(360deg);
  }
}
  `;

  document.body.appendChild(loader);
  document.head.appendChild(style);

  loader.style.display = "block";

  fetch(url)
    .then(response => {
      loader.style.display = "none";
      return response.json();
    }).then(data => {
      console.log("Отримані дані: ", data);
    }).catch(error => {
      console.error("Помилка: ", error);
      loader.style.display = "none";
    });
}
