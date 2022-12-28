let arr = [1, 2, 3, 4, 5];
let newArr = [];
let index = 1;
let number = 10;

for(let i = 5; i >= 1; i--){
  arr[i+1] = arr[i]
}

for(let i = 0; i < arr.length; i++){
  arr[i+1] = arr[i]
}
 arr[index] = number
 for(let i = 0 ; i < 6 ; i++){
      newArr.push(arr[i])
     
  }
console.log(newArr)