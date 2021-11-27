"use strict";
/* 
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120
*/

let num = 5; //Number(prompt("Ingresa un numero entero mayor a 0"));
let results = num;
let numAnt = num - 1;
//console.log(`${results} y ${numAnt}`);
for (let i = num; i > 2; i--) {
  results = results * numAnt;
  numAnt = numAnt - 1;
  console.log(results);
}
