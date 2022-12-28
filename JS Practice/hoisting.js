//we cannot declare variable with same name in global and script scope
// let a = 10; //script scope
// var b = 20; // global scope


// {
//     var c = 20; // global scope
//     let v = 50 //block scope
// }

// function name() {
//     var p = 60 //local scope
//     let q = 80 //local scope
// }
// name();

// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, "1 second")

//   setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, 2000)

// setTimeout(() => {console.log("this is the first message")}, 5000);
//   setTimeout(() => {console.log("this is the second message")}, 3000);
//   setTimeout(() => {console.log("this is the third message")}, 1000);


// for(let i = 0; i <= 2; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, i *1000);
// }


// function print(i){
//     setTimeout(function(){
//         console.log(i)
//     },2000);
// }

const object1 = {};
Object.defineProperty(object1, "property1", {
    value:20,
    writable :false
})
object1.property1 = 90
console.log(object1.property1);