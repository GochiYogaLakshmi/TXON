let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '';
}

function calculateResult() {
    try {
        let result = eval(expression);
        display.innerText = result;
        expression = result;
    } catch (error) {
        display.innerText = 'Error';
        expression = '';
    }
}
