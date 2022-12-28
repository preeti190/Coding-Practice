function PrimeNumber(num1, num2) {
    for (let i = num1 + 1; i < num2; i++) {
        for (var j = 2; j < i; j++) {
            if (i === 1) continue;
            if (i % j === 0) {
                break;
            }
        }
        if (i === j) {
            console.log(i);
        }


    }
}
PrimeNumber(1, 100);
