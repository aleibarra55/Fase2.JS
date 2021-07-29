// // Ejemplo 1
// function calculateAge(birthYear) {
//     const age = 2021 - birthYear;
//     return age;
//   }
  
//   const ageJohn = calculateAge(1995);
  
//   console.log(ageJohn); // 26

//   function yearsUntilRetirement(year, name) {
//     const age = calculateAge(year);
//     const retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years.`);
//   }
//   yearsUntilRetirement(1995, 'John Doe');
//   // John Doe retires in 40 years.

// Ejemplo 2
// const whatDoYouDo = function(job, name) {
//     switch (job) {
//       case 'developer':
//         return name + ' develops cool apps.';
//       case 'designer':
//         return name + ' designs awesome websites.';
//       default:
//         return name + ' does something else.'
//     }
//   }
  
//   console.log(whatDoYouDo('developer', 'John Doe'));
//   console.log(whatDoYouDo('designer', 'Jane Doe'));
//   console.log(whatDoYouDo('retired', 'Mark Doe'));


// Ejemplo 3  
// function logName() {
//     const name = "John Doe";
//     console.log(name);
//   }
  
//   logName(); // John Doe
// Transformandola en IIFE
// (function() {
//     const name = "John Doe";
//     console.log(name);
//   })();

// (function(lastName) {
// const firstName = "John";
// console.log(`${firstName} ${lastName}`);
// })('Doe');
  
  
//   Reto 1
// function power (base, exponent){
//     let result = 1
//     for ( let i=0; i<exponent; i++){
//         result= result * base
//     }
//     return result
// }
// console.log(power(2,3));

// Reto 2
function getLargerInt (number1, number2){
    if (number1<number2){
        console.log(number2);
    }
    else{
        console.log(number1);
    }
}

getLargerInt(10,5)

// Arrow function
const largerNum = (number1, number2) =>{
    let result = number1 - number2
    if (result < 0){
        console.log(number2);
    }
    else{
        console.log(number1);
    }
}

largerNum(10,5)

// Usando condicional ternario
function largerNumber (number1,number2){
    return (number1<number2 ? number2 : number1)
}

console.log(largerNumber(10,5));

// Reto 3
function fibonacciSequence (limit){
    let a = 1
    let b = 1
    let suma=0
    if (limit == 1){
        console.log(a);
    } else if (limit == 2){
        console.log(a);
        console.log(b);
        } else {
            console.log(a);
            console.log(b);
            for (let i = 3; i <= limit; i++){
                suma = a + b;
                console.log(suma);
                a = b;
                b = suma;
            }
        }   
}
console.log(fibonacciSequence(3));

function fibonacciSeq (n){
    const numbers=[1];
    let a = 0;
    let b=1;
    let suma =0;
    for (let i =1; i< n; i++){
        suma = a + b;
        a =b;
        b=suma;
        numbers.push (suma)
    }
    return numbers
};
console.log(fibonacciSeq(10));

function fibonacci (n){
    let serieF= [1,1]
    for (i=2; i<n; i++){
        serieF.push(serieF[i-1]+serieF[i-2])
    }
    return serieF
}
console.log(fibonacci(10));