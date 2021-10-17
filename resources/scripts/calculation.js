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

function printCalculations(calculation) {
    console.log("Value of X: " + calculation.getX());
    console.log("Value of op: " + calculation.getOp());
    console.log("Value of Y: " + calculation.getY());
}