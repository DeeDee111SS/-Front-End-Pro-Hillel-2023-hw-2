
let a = prompt('Enter the first number');
let operator = prompt('Enter the operator');
let b = prompt('Enter the second number');


function calculate(a, b, operator) {
    
    if (operator == "+") {
        console.log('Result: ' + a + operator + b + ' = ' + (Number(a) + Number(b)));
        
    } else if (operator == "-") {
        console.log('Result: ' + a + operator + b + ' = ' + (a - b));
        
    } else if (operator == "*") {
        console.log('Result: ' + a + operator + b + ' = ' + (a * b));
        
    } else if (operator == "/") {
        console.log('Result: ' + a + operator + b + ' = ' + (a / b));
        
    } else {
        console.log("uncorrect input data");
    }     
}

calculate(a, b, operator);

