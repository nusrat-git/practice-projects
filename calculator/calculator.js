let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");

let operation = "";
let result = "";

const clearCal = () => {
  operation = "";
  inputText.innerText = "";
  outputText.innerText = "";
};

const backCal = () => {
  operation = operation.slice(0, -1);
  inputText.innerText = operation;

  if (operation === "") {
    outputText.innerText = "";
  }
};

const showOutput = (result) => {
  outputText.innerText = `= ${result}`;
};

const handleInput = (btnValue) => {
  const inputElement = inputText;

  switch (btnValue) {
    case "=":
      try {
        result = eval(operation);
        showOutput(result);
        // operation = result.toString();
      } catch (error) {
        showOutput("Error");
        operation = "";
      }
      break;
    case "c":
      clearCal();
      break;
    case "b":
      backCal();
      break;
    default:
      if (btnValue === ".") {
        const lastNumber = operation.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes(".")) return;
      }

      operation += btnValue;
      inputElement.innerText = operation;

      break;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  inputText = document.getElementById("inputText");
  outputText = document.getElementById("outputText");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnValue = btn.value;
      handleInput(btnValue);
    });
  });
});
