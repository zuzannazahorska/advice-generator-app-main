let btn = document.getElementById("btn");
let adviceText = document.getElementById("adviceText");
let adviceNo = document.getElementById("adviceNo");
btn.addEventListener("click", function () {
  getQuote();
});

function getQuote() {
  let url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => {
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceNo.textContent = `ADVICE #${data.slip.id}`;
    })
    .catch();
}
