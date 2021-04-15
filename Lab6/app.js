var numberInputs = document.querySelectorAll("[data-number]");
var operationInputs = document.querySelectorAll("[data-operator]");

// action buttons
var equalsButton = document.querySelector("[data-equals]");
var deleteButton = document.querySelector("[data-delete]");
var clearButton = document.querySelector("[data-clear]");

// Display
var previousOperandTextField = document.getElementById("previous-operand");
var currentOperandTextField = document.getElementById("current-operand");

// states
var prevInput = 0;
var currentInput = 0;
var operator = "";
var output = "";
var resultState = false;

function updateDisplayForNumbers(number) {
  if (resultState && operator === "") {
    output = "";
    currentOperandTextField.innerHTML = output;
    previousOperandTextField.innerHTML = null;
    resultState = false;
  }
  output += number.toString();
  currentOperandTextField.innerHTML = output;
}

function updateDisplayForOperators(operator) {
  console.log(currentInput);
  output = currentInput.toString() + " " + operator + " ";
  currentOperandTextField.innerHTML = output;
}

function updateDisplayOnEqualsPress(result) {
  previousOperandTextField.innerHTML = currentOperandTextField.innerHTML;
  currentOperandTextField.innerHTML = result;
}

function updateDisplayOnDelete() {
  currentInput = Math.floor(currentInput / 10);
  output = output.slice(0, output.length - 1);
  currentOperandTextField.innerHTML = output;
}

function allClear() {
  currentOperandTextField.innerHTML = null;
  previousOperandTextField.innerHTML = null;
  prevInput = 0;
  currentInput = 0;
  output = "";
  operator = "";
}

// input
function inputNumber(number) {
  if (currentInput === 0) {
    currentInput = parseInt(number);
  } else {
    currentInput = currentInput * 10 + parseInt(number);
  }
  updateDisplayForNumbers(number);
}

function inputOperator(op) {
  prevInput = currentInput;
  operator = op;
  updateDisplayForOperators(op);
  currentInput = 0;
}

function calculate() {
  var result = 0;
  switch (operator) {
    case "+":
      result = prevInput + currentInput;
      break;
    case "-":
      result = prevInput - currentInput;
      break;
    case "x":
      result = prevInput * currentInput;
      break;
    case "/":
      result = prevInput / currentInput;
      break;
    default:
      return;
  }
  resultState = true;
  updateDisplayOnEqualsPress(result);
  currentInput = result;
  output = result.toString();
  operator = "";
}

numberInputs.forEach((input) => {
  input.addEventListener("click", () => {
    inputNumber(input.innerHTML);
  });
});

operationInputs.forEach((input) => {
  input.addEventListener("click", () => {
    inputOperator(input.innerHTML);
  });
});

equalsButton.addEventListener("click", () => {
  calculate();
});

clearButton.addEventListener("click", () => {
  allClear();
});

deleteButton.addEventListener("click", () => {
  updateDisplayOnDelete();
});
