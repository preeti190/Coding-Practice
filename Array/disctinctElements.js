
let arr = [12, 10, 9, 45, 2, 10, 10, 45];
let distinctValues = [];
for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            break;
        }

    }
    if (i === j) {
        distinctValues.push(arr[i])
    }
}

console.log(distinctValues);