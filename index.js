function operate (firstNumber, operation, secondNumber) {
    switch(operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x':
            result = firstNumber * secondNumber;
            break;
        case '÷':
            result = (firstNumber / secondNumber).toFixed(2);
            break;
    }
    if (result == Infinity || result == -Infinity) {
        return 'Error';
    }
    return result;
}

// show clicking for every number buttons
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

let firstNumber;
let operation;
let secondNumber;

numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
})

operations.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent !== '=' && e.target.textContent !== 'C') {
            firstNumber = Number(display.textContent);
            operation = e.target.textContent;
            display.textContent = '';
        }
    })
})

equal.addEventListener('click', () => {
    secondNumber = Number(display.textContent);
    if (!operation || !secondNumber) {
        return firstNumber;
    }
    display.textContent = '';
    display.textContent = operate(firstNumber, operation, secondNumber);
})

clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = 0;
    operation = '';
    secondNumber = 0;
})

