// const time = 13;
// let greeting;

// if (time < 12) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20) {
//   greeting = "Good evening";
// } 
// // Reto 1
// else{
//     greeting ="Error"
// }

// console.log(greeting) // Good afternoon

// const day = 2;
// let text;

// switch (day) {
//   case 0:
//     text = "Sunday";
//     break;
//   case 1:
//     text = "Monday";
//     break;
//   case 2:
//     text = "Tuesday";
//     break;
//   case 3:
//     text = "Wednesday";
//     break;
//   case 4:
//     text = "Thursday";
//     break;
//   case 5:
//     text = "Friday";
//     break;
//   case 6:
//     text = "Saturday";
//     break;
//   default:
//     text = "Error";

// }

// console.log(text); // Tuesday

// // Ejemplo 1 con Switch

// switch (true) {
//     case (time < 12):
//         greeting = 'Good morning';
//         break;
//     case (time < 20):
//         greeting='Good afternoon';
//         break;
//     case (time >= 20):
//         greeting='Good evening';
//         break;
//     default:
//         greeting='Error';
// }

// console.log(greeting);

// for(let i = 0; i<=200; i++){
//     console.log("Hello World");
//   }

//   Se imprimirá 201 veces ya que el valor de i=0 también cuenta

//   Ejemplo for pero con while
//   let i = 0;

//   while(i <= 200) {
//     console.log("Hello World");
//     i++;
//   }
  
// for (let i = 0; i < 10; i++) {
//     if (i === 3) break
//     console.log(`Number: ${i}`)
//   }
  
// Reto 2
// for (let i=0; i <= 100; i++){
//     if (i%2 === 0){
//         console.log(i);
//     }
// }

// Reto 3
let i=0
while(i <=100){
  if ( i==2 || i ==3 || i==5 || i==7){
    console.log(i);
  }
  else if (i%2 == 0 || i%3 ==0 || i%5 ==0 || i==7){
    i++;
    continue;
  }
  else{
    console.log(i);
  }
  i++;
}

for (let counter = 2; counter <=100; counter++){
  let isPrime=true;
  for(let i=2; i<counter; i++){
    if (counter%i ===0 && i!==counter){
      isPrime=false;
    }
  }
  if (isPrime){
    console.log(counter);
  }
}

for (let i=1; i<=100; i++){
  let primeNumber=true;
  for(let j=2; j<i; j++){
    if(i%j ===0){
      primeNumber =!primeNumber;
      // break;
    }
  }
  if (primeNumber){
    console.log(i);
  }
}