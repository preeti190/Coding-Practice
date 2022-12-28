let arr = [9, 8, 7, 6, 4, 2, 1, 3];


for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
}
console.log(arr);