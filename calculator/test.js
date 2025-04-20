let a = "";
let b = "";
let operation = null;

let inputText = "";
let outputText = null;

const handleAdd = (a, b) => {
  outputText = parseFloat(a) + parseFloat(b);
};

const handleSub = (a, b) => {
  outputText = parseFloat(a) - parseFloat(b);
};

const handleMul = (a, b) => {
  outputText = parseFloat(a) * parseFloat(b);
};

const handleDiv = (a, b) => {
  if (b == 0) return;

  outputText = parseFloat(a) / parseFloat(b);
};

const handleCalculation = (it) => {
  switch (operation) {
    case "+":
      handleAdd(a, b);
      break;
    case "-":
      handleSub(a, b);
      break;
    case "*":
      handleMul(a, b);
      break;
    case "/":
      handleDiv(a, b);
      break;
    default:
      break;
  }
};

const clearCal = () => {
  inputText = "";
  outputText = "";
  document.getElementById("inputText").innerText = inputText;
  document.getElementById("outputText").innerText = outputText;
};

const backCal = () => {
  inputText = inputText.slice(0, -1);
};

const resetCal = () => {
  a = "";
  b = "";
  operation = null;
  inputText = "";
  outputText = "";
};

const showOutput = () => {
  const element = document.getElementById("outputText");
  element.innerText = `= ${outputText}`;
};

const handleInput = (btnValue) => {
  const element = document.getElementById("inputText");

  switch (btnValue) {
    case "=":
      const valA = parseFloat(a);
      const valB = parseFloat(b);
      handleCalculation(valA, valB);
      console.log(outputText);
      if (outputText) {
        showOutput();
        // resetCal();
      }
      break;
    case "c":
      clearCal();
      break;
    case "b":
      backCal();
      break;
    default:
      if (
        btnValue == "+" ||
        btnValue == "-" ||
        btnValue == "*" ||
        btnValue == "/"
      ) {
        operation = btnValue;
      } else if (!operation) {
        if (btnValue == "." && a.includes(".")) return;
        a += btnValue;
      } else {
        if (btnValue == "." && b.includes(".")) return;
        b += btnValue;
      }
      break;
  }

  inputText = `${a} ${operation ? operation : ""} ${b}`;

  element.innerText = inputText;
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnValue = btn.value;
      handleInput(btnValue);
    });
  });
});
