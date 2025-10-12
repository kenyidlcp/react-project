const average = 5.9;
const status = (average >= 5.5 ) ? 'Aprobado' : 'Rechazado';

console.log(`Resultado: ${status}`);

let max = 0;

const a = 5;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El número mayor es ${max}`);