let display = '';
let num1 = '';
let operation = '';

function key(value) {
    if (value == '=') {
        calculate();
    }
    else if (value == '+' || value == '-' || value == '*' || value == '/') {
        operation = value;
        num1 = display;
        display = '';

    }
    else {
        display += value;
    }
    document.getElementById("display").value = display;
    console.log(display);
}

function foo() {
    document.getElementById("display").innerHTML = "";
}

function calculate() {
    let num2 = display;
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;

    }
    display = result;
    document.getElementById('display').value = display;

}


