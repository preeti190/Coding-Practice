//Find a pair that sum to a given value and also calculate count

let arr = [1, 1, 1, 1];
let sum = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
            console.log(arr[i], arr[j])
            count++

        }
    }
}
console.log(count)