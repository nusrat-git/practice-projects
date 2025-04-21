document.addEventListener("DOMContentLoaded", function () {
    // start input ouput divs
    var inputElement = document.getElementById("inputText"), outputElement = document.getElementById("outputText");
    // buttons
    var buttons = document.querySelectorAll(".btn");
    // variables
    var operation = "";
    var result = "";
    var lastChar;
    //check if value is operator
    var isOperator = function (char) {
        return char === "+" || char === "-" || char === "*" || char === "/";
    };
    //clear works
    var clearCal = function () {
        operation = "";
        inputElement.innerText = "";
        outputElement.innerText = "";
    };
    //back clear works
    var backCal = function () {
        operation = operation.slice(0, -1);
        inputElement.innerText = operation;
        if (operation === "") {
            outputElement.innerText = "";
        }
    };
    // output works
    var showOutput = function (result) {
        outputElement.innerText = "= ".concat(result);
    };
    // input works
    var handleInput = function (btnValue) {
        switch (btnValue) {
            case "=":
                lastChar = operation.slice(-1);
                if (isOperator(lastChar))
                    return;
                try {
                    result = eval(operation);
                    showOutput(result);
                    // operation = result.toString();
                }
                catch (error) {
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
                    var lastNumber = operation
                        .split(/[\+\-\*\/]/)
                        .pop();
                    if (lastNumber && lastNumber.indexOf(".") !== -1)
                        return;
                }
                lastChar = operation.slice(-1);
                if (isOperator(lastChar) && isOperator(btnValue))
                    return;
                operation += btnValue;
                inputElement.innerText = operation;
                break;
        }
    };
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var btnValue = btn.value;
            handleInput(btnValue);
        });
    });
});
