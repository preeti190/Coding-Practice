let b = [8,2,4,5,5,3,9,10,100,100];
let first = 0;
let second = 0;
let third = 0;

for(let i = 0; i < b.length; i++){
    if(b[i] > first){
      first = b[i] 
    }
}

for(let i = 0; i < b.length; i++){
    if(b[i] !== first){
      if(b[i] > second){
          second = b[i] 
      }
    }
}

for(let i = 0; i < b.length; i++){
    if(b[i] !== first && b[i] !==  second){
      if(b[i] > third){
          third = b[i] 
      }
    }
}
console.log(first,second,third)
