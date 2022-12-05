let arr = [1,3,2,9,8,0,100];
let max = 0
let min = 1

for(let i = 0 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log(`maximum element of array is ${max}`);
console.log(`minimum element of array is ${min}`)