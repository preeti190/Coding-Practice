function maths() {
    let sum = function (a, b) {
        console.log(a + b)
    }

    let subtraction = function (a, b) {
        console.log(a - b)
    }
    return { sum, subtraction };

}

let result = maths();
result.sum(1, 2);
result.subtraction(5, 4);