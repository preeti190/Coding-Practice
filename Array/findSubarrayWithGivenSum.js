

function findSubArray(arr) {
    let len = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum = sum + arr[j];
        }
    }
}

findSubArray(arr, sum);
let arr = [1, 4, 20, 3, 10, 5];
let sum = 5;



