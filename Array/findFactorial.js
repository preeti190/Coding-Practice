
function factorial(num) {
    let output = num;

    if (num === 0) return 1;

    for (let i = num; i >= 2; i--) {
        output = output * (i - 1);
    }
    return output;
}
let res = factorial(6);
console.log(res);