const a = [1, 2, 3, 4, 5];
const b = [3, 4, 6, 8, 5];
const union = [];

a.forEach((value) => {
    if (b.includes(value)) {
        union.push(value);
    }
})
console.log(union)