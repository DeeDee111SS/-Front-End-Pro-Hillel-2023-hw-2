
const a = prompt('Enter the first number');
const b = prompt('Enter the second number');


function add (a, b) {
    console.log('Result: ' + a + ' + ' + b + ' = ' + (Number(a) + Number(b)));
}

function sub (a, b) {
    console.log('Result: ' + a + ' - ' + b + ' = ' + (a - b));
}

function mult (a, b) {
    console.log('Result: ' + a + ' * ' + b + ' = ' + (a * b));
}

function div (a, b) {
    console.log('Result: ' + a + ' / ' + b + ' = ' + (a / b));
}

add(a, b);
sub(a, b);
mult(a, b);
div(a, b);



// let operator = prompt('Enter the operator');

// function calculate(a, b, operator) {
    
//     if (operator == "+") {
//         console.log('Result: ' + a + operator + b + ' = ' + (Number(a) + Number(b)));
        
//     } else if (operator == "-") {
//         console.log('Result: ' + a + operator + b + ' = ' + (a - b));
        
//     } else if (operator == "*") {
//         console.log('Result: ' + a + operator + b + ' = ' + (a * b));
        
//     } else if (operator == "/") {
//         console.log('Result: ' + a + operator + b + ' = ' + (a / b));
        
//     } else {
//         console.log("uncorrect input data");
//     }     
// }

// calculate(a, b, operator);

