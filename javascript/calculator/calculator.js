document.addEventListener("DOMContentLoaded", () => {
  // start input output elements
  let inputElement = document.getElementById("inputText");
  let outputElement = document.getElementById("outputText");

  // get button elements
  const buttons = document.querySelectorAll(".btn");

  //initial variables
  let operation = "";
  let result = "";

  let lastChar;

  //checks if character is operator
  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  //clears
  const clearCal = () => {
    operation = "";
    inputElement.innerText = "";
    outputElement.innerText = "";
  };

  //back clears
  const backCal = () => {
    operation = operation.slice(0, -1);
    inputElement.innerText = operation;

    if (operation === "") {
      outputElement.innerText = "";
    }
  };

  //handles output
  const showOutput = (result) => {
    outputElement.innerText = `= ${result}`;
  };

  //handles input
  const handleInput = (btnValue) => {
    switch (btnValue) {
      case "=":
        lastChar = operation.slice(-1);

        if (isOperator(lastChar)) return;

        try {
          result = eval(operation);
          showOutput(result);
          // operation = result.toString();
        } catch (error) {
          operation = operation;
          showOutput(operation);
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

        lastChar = operation.slice(-1);
        if (isOperator(lastChar) && isOperator(btnValue)) return;

        operation += btnValue;
        inputElement.innerText = operation;

        break;
    }
  };

  // button click handles
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnValue = btn.value;
      handleInput(btnValue);
    });
  });
});
