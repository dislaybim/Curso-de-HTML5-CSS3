function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}

function calculate() {
  event.preventDefault();

  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  const additionResult = add(num1, num2);
  const subtractionResult = subtract(num1, num2);
  const multiplicationResult = multiply(num1, num2);
  const divisionResult = divide(num1, num2);

  document.getElementById('result').innerHTML = `Addition: ${additionResult}, Subtraction: ${subtractionResult}, Multiplication: ${multiplicationResult}, Division: ${divisionResult}`;
}