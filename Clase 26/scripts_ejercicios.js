/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/
"use strict";

const button = document.getElementById("button");
const box = document.getElementById("box");

button.addEventListener("click", () => console.log("click"));
box.addEventListener("mouseenter", () => box.classList.replace("red", "green"));
box.addEventListener("mouseleave", () => box.classList.replace("green", "red"));
