let a = [1, 1, 2, 3, 9, 9, 5, 3, 4];
let uniqueValues = [];
let value = 0;

for (let i = 0; i < a.length; i++) {
    value = 0
    for (j = 0; j < a.length; j++) {
        if (i !== j) {
            if (a[i] === a[j]) {
                value = value + 1;

            }
        }


    }
    if (value == 0) {
        console.log(a[i])
    }


}





