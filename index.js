// take care of the multiple operations -> error
// decimal points
function operate (firstNumber, operation, secondNumber) {
    let result = 'Bug!'
    switch(operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x' :
            result = firstNumber * secondNumber;
            break;
        case '*' :
            result = firstNumber * secondNumber;
            break;
        case '÷':
            result = (firstNumber / secondNumber).toFixed(2);
            break;
        case '/':
            result = (firstNumber / secondNumber).toFixed(2);
            break;
    }

    if (result == Infinity || result == -Infinity) {
        return 'Infinity Error';
    }

    return result;
}

const display = document.querySelector('#screen');
const numbers = document.querySelectorAll('#numbers');
const operations= document.querySelectorAll('#operations')
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.setAttribute('style', 'background-color: rgb(170, 170, 170);')
        button.removeAttribute('style', 'background-color: rgb(170, 170, 170);')
    })
})

const operationsArr = ['+', '-', '*', '/'];
const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let firstNumber;
let operation;
let secondNumber;


// handle numbers
numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
})

const keyboardNumbers = window.addEventListener('keyup', (e) => {
    if (numbersArr.includes(e.key)) {
        display.textContent += e.key;
    }
})

// handle operations
operations.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent !== '=' && e.target.textContent !== 'C') {
            operation = e.target.textContent;
            handleOperation();
        }
    })
})

const keyboardOperation = window.addEventListener('keyup', (e) => {
    if (operationsArr.includes(e.key)) {
        operation = e.key;
        handleOperation();
    }
});

// calculator clear
clear.addEventListener('click', handleClear)

const keyboardClear = window.addEventListener('keyup', (e) => {
    if (e.key == 'C' || e.key == 'c') {
        handleClear();
    }
})

const keyboardDelete = window.addEventListener('keyup', (e) => {
    if (e.key == 'Backspace') {
        let displayArr = Array.from(display.textContent);
        if (displayArr.length > 0) {
            [...displayArr.pop()];
        }
        display.textContent = displayArr.join('');
    }
})

// calculator equal
equal.addEventListener('click', handleEqual)
const keyboardEqual = window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter' || e.key == '=') {
        handleEqual()
    }
})


// handle event functions
function handleClear() {
    display.textContent = '';
    firstNumber = 0;
    operation = '';
    secondNumber = 0;
}

function handleEqual () {
    secondNumber = Number(display.textContent);
    if (!operation || !secondNumber) {
        return firstNumber;
    }
    display.textContent = '';
    display.textContent = operate(firstNumber, operation, secondNumber);
}

function handleOperation() {
    firstNumber = Number(display.textContent);
    display.textContent = '';
}