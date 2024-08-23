"use strict";
/*  Arrow Functions
    Aparecieron para permitir cosas que las funciones normales no podían
*/

// Syntaxis de una arrow function
const saidHi = () => {
    console.log("hola");
    console.log("Como estas?");
};
// saidHi();

// Si hay una sola expresion la retorna por defecto
// Estaría retornando hola como estas
const greet = () => "hola como estas";
// Almacenamos el valor que retorna la funcion
const resultado = greet();

// Si hay un solo parametro se pueden eliminar los parentesis
// const say = res => console.log(res)

// No son adecuadas para ser usadas como metodos y no pueden ser usadas como constructores
const object = {
    name: "santino",
    // Con this estoy haciendo referencia al objeto window
    // saludar: () => console.log(`Hola ${this.name}`),
    // En cambio con una funcion normal el this hace referencia al objeto al que pertenece el metodo
    saludar: function () {
        console.log(`Hola ${this.name}`);
    },
};
// object.saludar();
function constructorPersona(nombre, apellido) {
    this.name = nombre;
    this.lastname = apellido;
}
const objeto = new constructorPersona("santino", "maturo");
// console.log(objeto);
// Ahi tenemos un ejemplo de un constructor con una funcion normal, si quisieramos hacerlo con una arrow function no podríamos ya que con el this estaríamos llamando al windows y no al current object

// This contextual, this lo que hace es hacer referencia al objeto que está a llamando a la funcion que está llamando a ese objeto
// Si this no está dentro de un objeto es como si estuviesemos llamando a windows
// Si usamos this afuera de cualquiera funcion, va a ser window
// Los dos console.log nos muestran lo mismo
// console.log(window);
// console.log(this);

// Hay un shorthand de javascript a la hora de pasar como metodo una funcion
function saludar() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
}
const objeto1 = {
    nombre: "santino",
    apellido: "maturo",
    // no hace falta que creemos una propiedad e igualarla a la funcion, sino simplemente ponemos le nombre de la funcion asi
    saludar,
};
// Nos funciona
// objeto1.saludar();

// Funciones recursivas (recursividad)
// Son funciones que se llaman a si misma
// Esta es una funcion que se llama a si misma
function saludar() {
    saludar();
}
const validarEdad = (msg) => {
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if ((edad) => 18) console.log("sos mayor de edad ");
        else console.log("sos menor de edad");
    } catch (e) {
        validarEdad(e);
    }
};
// validarEdad();

// Clausuras
// Son funciones que retornan otras funciones
// const decirNombre = (nombre) => {
//     return function () {
//         console.log(nombre);
//     };
// };
// const saludo = decirNombre("santino");
// saludo();

// Ejemplo practico de clausulas
const cambiarTamaño = (tamaño) => {
    return () => {
        document.querySelector(".text").style.fontSize = `${tamaño}px`;
    };
};
const px12 = cambiarTamaño(12);
const px14 = cambiarTamaño(14);
const px16 = cambiarTamaño(16);
document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);

// Parametros por defecto
// Si queremos que a o b por defecto valgan 0 lo igualamos
const suma = (a = 0, b = 0) => {
    console.log(a + b);
};
// suma(10); //muestra 10 10+0 10

// Parametro rest (...param), es basicamente el operador spread pero dentro de una funcion se le da este nombre
// El operador spread lo que va a ser es devolvernos los arguementos dentro de un array
// rest siempre tiene que ser el ultimo parametro de la funcion
const sumar = (frase, ...num) => {
    let resultado = 0;
    num.forEach((num) => {
        resultado += num;
    });
    console.log(`${frase} ${resultado}`);
};
// sumar("santino", 20, 10);
