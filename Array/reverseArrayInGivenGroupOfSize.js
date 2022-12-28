

for (let i = 0; i < a.length; i += k) {
    let start = i
    let end = Math.min(i + (k - 1), a.length - 1)
    for (let j = end; j >= start; j--) {
        reverseSubarray.push(a[j])
    }

}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let k = 2;
let reverseSubarray = []
console.log(reverseSubarray)