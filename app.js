const display = document.getElementById("display");

function pressbtn(inp) {
  const operators = ['+', '-', '*', '/','.'];

  // Prevent consecutive operators
  if (operators.includes(inp)) {
    const lastChar = display.value.slice(-1);
    
    // If last character is an operator, do nothing
    if (operators.includes(lastChar)) {
      return;
    }
  }
  display.value += inp;
}

function allClear() {
  display.value = "";
}

function backspace(){
    const value = display.value;
    if(value.length > 0){
        display.value = value.slice(0, -1);
    }
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error";
    }
}