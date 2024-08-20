// let currentValue = "";
// let previousValue = "";
// let operation = null;

// function key(value) {
//   if (["+", "-", "*", "/"].includes(value)) {
//     if (currentValue === "" && previousValue !== "") {
//       operation = value;
//     } else if (currentValue !== "") {
//       if (operation) {
//         calculate();
//       }
//       operation = value;
//       previousValue = currentValue;
//       currentValue = "";
//     }
//   } else if (value === "=") {
//     if (operation !== null && currentValue !== "") {
//       calculate();
//       operation = null; // Clear operation after calculation
//     }
//   } else if (value === "AC") {
//     resetCalculator();
//   } else {
//     currentValue += value;
//   }

//   updateDisplay();
// }

// function calculate() {
//   let result = 0;
//   let prev = parseFloat(previousValue);
//   let curr = parseFloat(currentValue);

//   switch (operation) {
//     case "+":
//       result = prev + curr;
//       break;
//     case "-":
//       result = prev - curr;
//       break;
//     case "*":
//       result = prev * curr;
//       break;
//     case "/":
//       result = curr === 0 ? "Error" : prev / curr;
//       break;
//   }

//   currentValue = result.toString();
//   previousValue = "";
// }

// function updateDisplay() {
//   document.getElementById("display").innerText =
//     currentValue || previousValue || "0";
// }

// function resetCalculator() {
//   currentValue = "";
//   previousValue = "";
//   operation = null;
//   updateDisplay();
// }


const display = document.getElementById("display");

function pressbtn(inp) {
  display.value += inp;
}

function allClear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
