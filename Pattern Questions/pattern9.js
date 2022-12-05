


const obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

// const {a, b:{c}} = obj1;
const {a, b:{c : nestedObject}} = obj1;
// console.log(a); `1`
console.log(c); 

//

// const {a:firstValue} = obj1;
// console.log(a); // refernce error a is not defined
// console.log("a--------",firstValue);