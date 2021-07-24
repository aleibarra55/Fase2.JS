const d = 10;
const g = 0.1;

if (d>14){
    console.log('La rueda es para auto grande');
}
else if (0.8 < d >= 14){
    console.log('La rueda es para auto mediano');
}else{
    console.log('La rueda es para auto pequeño');
}

if (d>14 && g<0.4){
    console.log('El grosor no es el adecuado');
}else if (0.8<d<=14 && g<0.25){
    console.log('El grosor no es el adecuado');
}


//  if ((d>14 && g < 0.4)||(0.8<d<=14&& g<0.25)){
//      console.log('El grosor no es el adecuado');
//  }


for (let i = 0; i < 10; i++) {
    if (i === 3) continue
    console.log(`Number: ${i}`)
  }
  