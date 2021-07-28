// Ejemplo 1
// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = []

// for(let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2)
// }

// console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
// console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]



// Ejemplo 1 con for..of
// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = []

// for(const number of numbers) {
//   doubled.push(number * 2);
// }

// console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
// console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]



// Ejemplo 2
// const car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
//   }

// const keys = Object.keys(car)
// const pairs = []

// for(let i = 0; i < keys.length; i++) {
//   pairs.push( [keys[i], car[keys[i]]] )
// }

// console.log(pairs)

// Otra opcion
  
//   for(const property in car) {
//     pairs.push( [property, car[property]] )
//   }
  
//   console.log(pairs)
  
  // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
  


// Ejemplo 3
// Si no existe la propiedad, se le puede asignar un valor
// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };
  
//   const { firstName, country = 'Unknown' } = person;
  
//   console.log(firstName, country); // John Unknown

// Si no queremos usar el nombre de la propiedad, se le puede asignar otro nombre
// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };
  
//   const { firstName: name } = person;
  
//   console.log(name); // John 
  
  


// Reto 1

const numbers =[5,3,4,7,2,1,9,7,7]

var suma= 0;
var avg=0;

for(i=0; i < numbers.length; i++){
  suma =suma + numbers[i]
}

avg= suma/numbers.length
console.log(avg);

// Reto 2

const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

const pairs=new Object();

for (const property of car){
pairs [property [0]]= property[1];
}

console.log(pairs);

// Reto 3
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

const fb = person.links.social.facebook
const ig= person.links.social.instagram

console.log(fb, ig);
