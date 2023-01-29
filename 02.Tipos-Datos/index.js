//TIPO DE DATOS
//-------------
String(4);
String(0.7);
String(2, 4);
String(true);
String(String(5));
//String(var)

/* Propiedades
// *contructor
// *length
// *prototype */

// Metodos

/* Metodo charAt
// Devuelve el carácter correspondiente a la posición proporcionada por parámetro.
// Por defecto la posición es 0.
*/

'Hola'.charCodeAt(0);

/* Metodo concat
// Devuelve otro String que tiene, como resultado, la unión entre de todas las
// cadenas proporcionadas por parámetro y la actual.
// El separador de parámetros es el símbolo como.
*/

'Hola'.concat(' ', 'mundo');

/* Metodo endsWith
// Devuelve un boleano que indica si la cadena termina con la subcadena proporcionada por parámetro.
*/

'Hola mundo'.endsWith('do');

/* Metodo indexOf
// Devuelve la primera posición en la que aparezca la subcadena proporcionada por parámetro.
// Si el resultado de la búsqueda fue infructuoso, el resultado será -1.

// Tiene un segundo parámetro que es opcional que indica desde qué posición se debe
// empezar a buscar y que, por defecto, es 0.

// NOTA: Este método es sensible a maypusculas y minúsculas.
*/

'Hola mundo'.indexOf('o', 0);

/* Metodo lastIndexOf
// Devuelve la última posición en la que aparezca la subcadena proporcionada por parámetro. Si el resultado de la búsqueda fue infructuoso, el resultado será -1.

// El método de búsqueda es al revés que el método indexOf, es decir, que busca desde el final hasta el principio.

// Tiene un segundo parámetro que es opcional que indica desde qué posición se debe empezar a buscar y que, por defecto, es la longitud de la cadena.

// NOTA: Este método es sensible a mayúsculas y minúsculas.
*/

'Hola mundo'.lastIndexOf('o');

/* Metodo match
// Permite encontrar coincidencias en una cadena mediante expresiones regulares.
*/

'Hola mundo'.match(/ho/i);

/* Metodo repeat
// Devuelve la concatenación de la cadena repetida las veces que se indique por parámetro.
*/

'Hola '.repeat(3);

/* Metodo replace
// Permite realizar reemplazos en un cadena a través de otra cadena o una expresión regular.
*/

'Hola mundo'.replace(' mundo', '');
'Palabra'.replace(/a/gi, '0');

/* Metodo search
// Devuelve la posición de la primera aparición de la cadena proporcionada por parámetro.

Aunque este método aceptaStringd como parámetro. Lo que utiliza son expresiones regulares. Por esta razón, si se introduce un String, será transformado de forma automática a una expresión regular.
*/

'Hola mundo'.search('mundo');

/* Metodo slice
// Devuelve el fragmento de la cadena que esté comprendido entre las posiciones proporcionadas por parámetro.

NOTA: Este método es muy similar al método substring, sin embargo, los resultados pueden ser muy diferentes
*/

'Hola mundo'.slice(0, 4);

/* Metodo split
// Devuelve un array con todos los fragmentos de cadena que resulten de dividir la cadena origen a través otra cadena o expresion regular proporcionada por parámetro.
*/

'Hola mundo'.split(' ');

/* Metodo startsWith
// Devuelve un boleano que indica si la cadena empieza por el valor proporcionado por parámetro.
Acepta un segundo parámetro que indica dónde se debe empezar a realizar la búsqueda. por defecto es 0.
*/

'Hola mundo'.startsWith('mundo');
'Hola mundo'.startsWith('mundo', 5);

/* Metodo substr
// Devuelve el fragmento de la cadena que empieza por la posición indicada en el primer parámetro y cuya longitud es el valor proporcionado por el segundo.
*/

'Hola mundo'.substr(1, 6);

/* Metodo substring
// Devuelve el fragmento de la cadena que se encuentre entre las posiciones proporcionadas por los parámetros.
*/

'Hola mundo'.substring(1, 6);

/* Metodo toLowerCase
// Devuelve la cadena convertida en minúscula.
*/

'Hola MUNDO'.toLowerCase('');

/* Metodo toUpperCase
// Devuelve la cadena convertida en minúscula.
*/

'hola mundo'.toUpperCase('');

/* Metodo trim
// Devuelve la cadena convertida en minúscula.
*/

'Hola mundo          '.trim();
'  Hola mundo          '.trim();

// Conversión de Strings

parseInt('4');
parseInt('hola');
parseInt('21 calles');
parseInt('1e3');
parseFloat('1.5');
parseFloat('1,5');

String(new Date());

// Formateado de Strings

/* Literales de cadena */
('Esto es un literal de cadena');
('Esto es otro literal de cadena');

/* Secuencia escapada en hexadecimal */
('\x41');

/* Secuencia escapada en Unicode */
('\u0041');

console.log('\u{1F440}', '\uD83D\uDC40');

/* Literales de cadena multilínea (sólo con ES5.1 e inferiores) */
console.log(
  'Nombre: Pablo\n\
Apellidos: Fernández'
);

/* Literales de plantilla (sólo con ES6 y superiores) */
console.log(`Nombre: Pablo
Apellidos: Fernández`);

var nombre = 'Pablo';

console.log(
  'Nombre: ' +
    nombre +
    '\n\
Apellidos: Fernández'
);

var nombre = 'Pablo';

console.log(`Nombre: ${nombre}
Apellidos: Fernández`);

// TIPO NUMBER
Number('4');
Number('hola');
Number('21 calles');
Number(1e3);
Number(true);
Number(false);

// Propiedades
// cosntructor: Devuelve la función contructora nativa.
// prototype:   Permite añadir nuevas propiedades y métodos al objeto.

// Métodos

// Métodos isFinite
isFinite(200);
isFinite('200');
isFinite('hola');

// Métodos isNaN
isNaN(200);
isNaN('200');
isNaN('hola');

// Método toExponencial
(2.1).toExponential(3)

// Método toFixed
(2.1).toFixed(3)
