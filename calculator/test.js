let a = "";
let b = "";
let operation = null;

let inputText = "";
let outputText = null;

const handleCalculation = (valA, valB) => {
  switch (operation) {
    case "+":
      outputText = valA + valB;
      break;
    case "-":
      outputText = valA - valB;
      break;
    case "*":
      outputText = valA * valB;
      break;
    case "/":
      if (valB !== 0) {
        outputText = valA / valB;
      }
      break;
    default:
      break;
  }
};

const clearCal = () => {
  a = "";
  b = "";
  operation = null;
  inputText = "";
  outputText = "";
  document.getElementById("inputText").innerText = inputText;
  document.getElementById("outputText").innerText = outputText;
};

const backCal = () => {
  const inputSplit = inputText.split(" ");

  a = inputSplit[0];
  operation = inputSplit[1];
  b = inputSplit[2];

  if (b) {
    b = b.trim().slice(0, -1);
  } else if (operation) {
    operation = operation.trim().slice(0, -1);
  } else if (a) {
    a = a.trim().slice(0, -1);
  }
};

const resetCal = () => {
  a = outputText.toString();
  b = "";
  operation = null;
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
      if (outputText) {
        showOutput();
        resetCal();
        return;
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
