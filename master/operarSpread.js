"use strict";
/*  Operador spread
    Lo que hace es convertir un array en 3 valores diferentes
*/
const array = ["valor 1", "valor 2", "valor 3"];
// Lo que hacemos es destructurar el array mediante el operador spread
// console.log(...array);

// Podemos añadir array a a otros array
let arr = ["manzana", "pera", "banana"];
let arr2 = ["kiwi", "naranja"];
// Si nososotros pushearamos el array2 al 1 tendríamos dos array
// Lo que hacemos es pushear el array mediante el operador spread, es decir ya destructurado
// arr.push(...arr2);
// console.log(arr);

// Nos sirve para concatenar arrays
const arr3 = [...arr, ...arr2];
// Tendriamos un array 3 con los dos elementos de los otros dos array anteriores

// Lo podemos usar como argumento rest
const sumar = (num1, num2) => {
    console.log(num1 + num2);
};
const arr4 = [2, 3];
// Lo pasamos como argumento rest, mediante el operador spread
sumar(...arr4); //muestra 5
