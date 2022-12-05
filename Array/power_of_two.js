//write a program to find that the given number is a power of two or not

function isPowerOfTwo(n){
while(n !== 1){
    if(n%2 !== 0){
        return "no"
    }
    n = n/2
}
return "yes"
}

 let output = isPowerOfTwo(31);
 console.log(output);