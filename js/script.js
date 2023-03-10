{
  const welcome = () => {
    console.log("Cześć!");
  };

  const backgroundToggle = () => {
    const js_headerMain = document.querySelector(".headerMain");
    js_headerMain.classList.toggle("headerMain__Dark");
    const js_button__headerText = document.querySelector(".button__headerText");
    const js_headerMain__Dark = document.querySelector(".headerMain__Dark");
    if (js_headerMain.classList.contains("headerMain__Dark")) {
      js_button__headerText.innerText = "Ciemny";
    } else {
      js_button__headerText.innerText = "Jasny";
    }
  };

  const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", backgroundToggle);
    welcome();
  };
  init();
}
