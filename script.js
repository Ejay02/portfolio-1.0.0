// save ref to display
let display = document.getElementById("display");

// get ref for button convert and store in an array
let buttons = Array.from(document.getElementsByClassName("button"));

// add event listeners to buttons and build functionalities
// TODO: map through the buttons array and add click e listener to each
// Switch statement used.
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
