//VARIABLES
var fechaActual = new Date();
let fechaActual = new Date();
const fechaActual = new Date();

console.log(fechaActual);

//AMBITO DE LAS VARIABLES
var total = 0;

function suma(a, b) {
  var aux = a + b;
  total = aux;
}

suma(2, 7);

console.log(total);

function resta(a, b) {
  var aux = a - b;
  total = aux;
}

resta(9, 7);

console.log(total);
