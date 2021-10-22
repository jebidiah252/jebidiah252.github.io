let validOperators = Object.freeze(["+", "-", "/", "*", "%"])

let results = [];

class Calculation {
    #x = "";
    #y = "";
    #op = "";
    constructor(x, y, op) {
        this.#x = x;
        this.#y = y;
        this.#op = op;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getOp() {
        return this.#op;
    }
}

function validateCalculation(calculation) {
    let errors = [];

    if (!validOperators.includes(calculation.getOp())) {
        errors.push("Computation Error");
    }

    if (isNaN(calculation.getX())) {
        errors.push("Wrong Input Number: X");
    }

    if (isNaN(calculation.getY())) {
        errors.push("Wrong Input Number: Y");
    }

    return errors;
}

function printErrors(errors) {
    let errorMsg = "";

    for (let i = 0; i < errors.length; i++) {
        if (i == errors.length - 1) {
            errorMsg += errors[i];
        } else {
            errorMsg += errors[i] + ", "
        }
    }

    return errorMsg;
}

function getCalculationResult(x, y, op) {
    switch (op) {
        case "+":
            return parseFloat(x) + parseFloat(y);
        case "-":
            return parseFloat(x) - parseFloat(y);
        case "/":
            return parseFloat(x) / parseFloat(y);
        case "*":
            return parseFloat(x) * parseFloat(y);
        case "%":
            return parseFloat(x) % parseFloat(y);
        default:
            alert("Operator not found. No computation will be done.")
    }
}

function printCalculations(calculation) {
    let errors = validateCalculation(calculation);

    let output = "<tr><td>" + calculation.getX() + "</td><td class=\"op\">" + calculation.getOp() + "</td><td>" + calculation.getY()+ "</td><td>";
    
    if (errors.length !== 0) {
        output += printErrors(errors);
    } else {
        let result = getCalculationResult(calculation.getX(), calculation.getY(), calculation.getOp());
        results.push(result);
        output += result.toString();
    }

    document.write(output + "</td></tr>");
}

function printResults() {
    document.write(`<tr><td>${Math.min.apply(Math, results).toString()}</td><td>${Math.max.apply(Math, results).toString()}</td><td>${((results.reduce((a, b) => a + b, 0)) / results.length).toString()}</td><td>${(results.reduce((a, b) => a + b, 0)).toString()}</td></tr>`);
}

const calculations = [];
do {
    let x = prompt("What is the value of 'x'?");
    let op = prompt("What operator will you be using?");
    let y = prompt("What is the value of 'y'?");

    calculations.push(new Calculation(x, y, op));
} while (confirm("Would you like to continue?"));

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
calculations.forEach(printCalculations);
document.write("</table>");

document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
printResults();
document.write("</table>")