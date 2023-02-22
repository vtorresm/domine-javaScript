//OPERADOR DE ASIGNACIÓN

var local = new Date();

//OPERADOR DE CONCATENACIÓN

'2' + '1';
'2' + 1;
2 + '1';

//OPERADOR ARITMÉTICOS:

// OPERADOR DE ADICIÓN
2 + 1;
Number(true) + 1;
parseInt('0') + 1;

// OPERADOR DE SUSTRACCIÓN
2 - 1;
'2' - '1';
true - '1';

// OPERADOR DE MULTIPLICACIÓN
4 * 2;
'4' * '2';
true * '2';

// OPERADOR DE DIVISIÓN
8 / 2;
'8' / '2';
true / '2';

// OPERADOR DE RESTO, MÓDULO O RESIDUO
20 % 3;
'20' % '3';
true % '2';

// OPERADOR DE EXPONENCIACIÓN
2 ** 3;
'2' ** '3';

//OPERADOR DE INCREMENTO
let a = 0;
let b = ++a;

console.log(a);
console.log(b);

let c = 0;
let d = a++;

console.log(c);
console.log(d);

//OPERADOR DE DECREMENTO
let e = 1;
let f = --e;

console.log(e);
console.log(f);

let g = 1;
let h = g++;

console.log(g);
console.log(h);

//ORDEN DE LOS OPERADORES
3 + 5 * 2;
(3 + 5) * 2;

//OPERADORES LÓGICOS
//OPERADOR AND
true && true;
true && false;
false && true;
false && false;
false && (3 == 4);
"Hola" && "Mundo";

//OPERADOR OR
true || true;
true || false;
false || true;
false || false;
false || (3 == 4);
"Hola" || "Mundo";

//OPERADOR NOT
!true;
!false;
!(3 == 3);
!(3 == 4);
!"Hola"

//OPERADORES CONDICIONALES
//OPERADOR DE IGUALDAD
true == true;
true == false;
false == true;
false == false;
1 == (2 - "1");
1 == (2 + "1");

//OPERADOR DE DESIGUALDAD
true != true;
true != false;
false != true;
false != false;

//OPERADOR DE SUPERIORIDAD E INFERIORIDAD
5 >=6;
5 <=6;
"5" >="6";
"5" <="6";

//OPERADOR TERNARIO
// condición ? expresión1 : expresión2

const num = 7;
const mensaje = num % 2 === 0 ? "El número es par" : "El número es impar";
console.log(mensaje);
