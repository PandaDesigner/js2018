/* 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
Un número primo es aquel que solo es divisible por sí mismo y la unidad */
"use strict";

let numeroEntero = 25; //Number(prompt("Ingrese un numero entero mayor que 1"));
let j = 2;

if (numeroEntero === 1) console.log("El numero no es Valido");
else {
  for (let i = 2; i < numeroEntero; i++) {
    if (numeroEntero % i == 0) {
      console.log(`${numeroEntero} / ${i} = ${numeroEntero / i} No es primo`);
      break;
    }
  }
}
if (j === 0) {
  console.log(`${numeroEntero} es Primo`);
}
