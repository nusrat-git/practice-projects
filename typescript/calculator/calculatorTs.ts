document.addEventListener("DOMContentLoaded", () => {
  // start input ouput divs
  let inputElement: HTMLDivElement = document.getElementById(
      "inputText"
    ) as HTMLDivElement,
    outputElement: HTMLDivElement = document.getElementById(
      "outputText"
    ) as HTMLDivElement;

  // buttons
  const buttons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".btn");

  // variables
  let operation: string = "";
  let result: string = "";

  let lastChar: string;

  //check if value is operator
  const isOperator = (char: string): boolean =>
    char === "+" || char === "-" || char === "*" || char === "/";

  //clear works
  const clearCal = (): void => {
    operation = "";
    inputElement.innerText = "";
    outputElement.innerText = "";
  };

  //back clear works
  const backCal = (): void => {
    operation = operation.slice(0, -1);
    inputElement.innerText = operation;

    if (operation === "") {
      outputElement.innerText = "";
    }
  };

  // output works
  const showOutput = (result: string) => {
    outputElement.innerText = `= ${result}`;
  };

  // input works
  const handleInput = (btnValue: string): void => {
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
          const lastNumber: string | undefined = operation
            .split(/[\+\-\*\/]/)
            .pop();

          if (lastNumber && lastNumber.indexOf(".") !== -1) return;
        }

        lastChar = operation.slice(-1);
        if (isOperator(lastChar) && isOperator(btnValue)) return;

        operation += btnValue;
        inputElement.innerText = operation;

        break;
    }
  };

  buttons.forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener("click", (): void => {
      const btnValue: string = btn.value;
      handleInput(btnValue);
    });
  });
});
