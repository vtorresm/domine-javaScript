//SENTENCIA Try...catch

//allert('Hola mundo!');
//console.log(object);

try {
  allert('Hola mundo!');
} catch(err) {
  console.log(err.message);
}

console.log('¡Todo OK!');

//SENTENCIA finally
try {
  allert('Hola mundo!');
} catch(err) {
  console.log(err.message);
} finally {
  console.log('¡Todo OK!');
}
