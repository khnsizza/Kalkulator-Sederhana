const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText !== "" && item.id === "equal") {
      try {
        let expression = display.innerText.replace(/×/g, "*").replace(/÷/g, "/");
        let result = eval(expression);

        if (!Number.isInteger(result)) {
          result = result.toFixed(6);
        }

        display.innerText = result;
      } catch (e) {
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else if (display.innerText === "" && item.id === "equal") {
      display.innerText = "Kosong!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      if (item.id === "×") {
        display.innerText += "×";
      } else if (item.id === "÷") {
        display.innerText += "÷";
      } else {
        display.innerText += item.id;
      }
    }
  };
});
