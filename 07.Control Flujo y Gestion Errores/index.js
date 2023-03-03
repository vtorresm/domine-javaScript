//ESTRUCTURA IF
if (fecha == '20-02-2002') {
  console.log('Es 20 de Febrero de 2002');
}

//ESTRUCTURA IF...ELSE
if (fecha == '20-02-2002') {
  console.log('Es 20 de Febrero de 2002');
}else {
  console.log('No es 20 de Febrero de 2002');
}

//ESTRUCTURA SWITCH
switch(marca) {
  case 'ford':
    console.log('El coche es de la marca Ford');
    break;
  case 'seat':
    console.log('El coche es de la marca Seat');
    break;
  default:
    console.log('El coche es de otra marca');
}

//CONTROL DE ERRORES POR TIPO DE DATO
var fecha = '';
if (typeof arguments[0] == 'object') {
  fecha = new Date(aux.anio + "-" + aux.mes + "-" + aux.dia);
} else {
  fecha = new Date(aux);
}
