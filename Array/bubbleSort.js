const arr = [5, 2, 1, 4, 3];
let temp;

for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {

        if (arr[j] < arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }


}
console.log(arr);