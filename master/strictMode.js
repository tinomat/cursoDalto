/*  Stric Mode
    Esto lo que hace es eliminar todos los errores que tiene por defecto javascript
    Usar el modo estricto en nuestros proyectos es una buena practica

    Que hace el use strict:
    - Convierte errores de javascript en excepciones
    - Mejora la optimizacion de los errores y consigue mejores tiempos de ejecución
    - Evita sintaxis usadas en posteriores versiones de ecmascript
    - No permite que el programador realize una "mala sintaxis"
*/

// Uso del modo estricto:

// Variables declaradas
// En las funciones y en el scope global
// De esta manera indicamos el modo estricto
"use strict";
// Si no utilizaramos el modo estricto por ejemplo podríamos definir variables sin la palabra reservada, let o const. Estas el navegador las interpretaría que fueron declaradas con var
// Mientras que con el modo estricto si decimos declarar una variable de esta manera
// nombre = "santino";
// Nos va a tirar un error en consola
// Forma correcta de declarar una variable
let nombre = "santino";

// Modificar propiedades
const objeto = {};
// Esta es una forma de definirle una propiedad a un objeto
// Le pasamos el objeto al que queremos agregarle la propiedad
// El nombre de la propiedad
// El valor
// Con el writeable:false lo que hacemos es decirle que no se va a poder reescribir la propiedad del objeto
Object.defineProperty(objeto, "nombre", { value: "santino", writeable: false });
// objeto2.nombre = "juan"; //con el modo estricto tira un error

// Agregar propiedades
const objeto2 = { nombre: "santino" };
// Prohibimos que se le creen nuevas propiedades
Object.preventExtensions(objeto2);
// objeto2.apellido = "maturo";//con el modo estricto tira un error

// No se puede agregar propiedades a un string
const string = "santino maturo";
// string.ig = "_tinomaturo"; //con el modo estricto tira un error

// No existen las multiples variables en una funcion
// function hablar(texto, texto) {
//     console.log(texto);
// }
// hablar("santino", "santino"); //con el modo estricto tira un error

// Delete en objetos o variables
const variable = "minombre";
// No se pueden eliminar variables
// delete variable; //con el modo estricto tira un error
// console.log(variable);

// Delete se usa para eliminar propiedades de objetos
const obj = {
    nombre: "santino",
};
// Eliminamos la propiedad nombre
delete obj.nombre;
console.log(obj);

// Las palabras reservadas no pueden ser usadas como variables
// const this = "pedro"; //con el modo estricto tira un error

// Cambia el this

// Numeros octales con una "o" adelante y no existe with

// Arguments y Eval no pueden ser variables
