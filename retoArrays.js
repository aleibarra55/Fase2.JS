const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};

const arraySum = [...array1, ...array2, ...calificaciones.array3]

console.log(arraySum);
let sum = 0

for (const i of arraySum){
    let isPrime=true;
    for(let counter=2; counter<i; counter++){
      if (i%counter ===0 && counter!==i){
        isPrime=false;
      }
    }
    if (isPrime){
      sum = sum + i
    }
  }
console.log(sum);
  