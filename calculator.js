let display = document.getElementById("display");
let currentInput = "";
let operatorUsed = false;

function appendNumber(number) {
  if (display.innerText === "0" || operatorUsed) {
    display.innerText = number;
    operatorUsed = false;
  } else {
    display.innerText += number;
  }
  currentInput = display.innerText;
}

function appendOperator(operator) {
  display.innerText += " " + operator + " ";
  currentInput = display.innerText;
  operatorUsed = false;
}

function appendDot() {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
    currentInput = display.innerText;
  }
}

function clearDisplay() {
  display.innerText = "0";
  currentInput = "";
}

function calculate() {
  try {
    let result = eval(display.innerText.replace("x", "*"));
    display.innerText = result;
    currentInput = result;
  } catch {
    display.innerText = "Error";
  }
}
