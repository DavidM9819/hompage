console.log("Cześć!");
let button = document.querySelector(".button");
let js_headerMain = document.querySelector(".headerMain");
let js_headerMain__Dark = document.querySelector(".headerMain__Dark");
let js_button__headerText = document.querySelector(".button__headerText");

button.addEventListener("click", () => {
  js_headerMain.classList.toggle("headerMain__Dark");

  if (js_headerMain.classList.contains("headerMain__Dark")) {
    js_button__headerText.innerText = "Ciemny";
  } else {
    js_button__headerText.innerText = "Jasny";
  }
});
