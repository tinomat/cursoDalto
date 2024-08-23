/*  Prototipos
    La programacion basada en prototipos es un estilo de programacion que los objetos se crean basandose en prototipos, es decir se tomo como ejemplo una base
*/

// const objeto = {
//     propiedad: "datos",
// };
// Este objeto tiene un prototipo Object, todos los objetos tienen este prototipo
// En js todos los datos son objetos, es decir tanto strings, numbers, etc, tendrá un prototipo objeto
// console.log(objeto);

// Si queremos ver el proto de un objeto lo hacemos asi
// console.log(objeto.__proto__);

// Todoslos datos heredan dos prototipos, el prototipo String y el prototipo Object
const string = "Hola";
// console.log(string.__proto__);
// console.log(string.__proto__.__proto__);

// Cuando creamos una funcion estamos creando un prototype por ejemplo
const funcion = function name(params) {};
// De esta manera accederíamos a los prototypes que nosotros creamos
// console.log(funcion.prototype);

// Prototype Object - Esto lo tienen todos los elementos
// Los elementos pueden tener más de un objeto por ejemplo los strings tienen el prototipo String y el prototipo Object

/*  Caracteristicas de los prototipos
    - Un prototipo definido en su codigo fuente es mutable (puede cambiar)
    - Es en si mismo un objeto, asi como otros
    - Tiene una existencia fisica en la memoria
    - Puede ser modificado y llamado
    Si es heredado lo llamamos con __proto__
    Si lo creamos nosotros lo llamamos con .prototype
    - Puede ser visto como un modelo ejemplar de una familia objeto
    - Un objeto hereda propiedades (valores y métodos) de su prototipo
*/

// Propiedad proto (dunder proto) __proto__
// En __proto__ podemos ver las caracteristicas que va a heredar, si entramos a los proto veremos todos los metodos de los arrays
// Como tal los metodos de los arrays no son de los arrays, sino que son heredados del prototype
const array = ["pedro", 234];
array.reverse();
// console.log(array);

// Ejemplo cuando nosotros creamos un objeto
// Cuando nosotros instanciamos un objeto tambien heredamos el prototype, simplemente lo modificamos
class Objeto {
    constructor() {}
    hablar() {
        console.log("hola");
    }
}
const objeto = new Objeto();
// console.log(objeto1);

// Diferencia entre
// Sobreescribir __proto__ vs Sobreescribir metodo

// Modificamos el metodo hablar del objeto
// Primero se ejecutan los que estan fuera del prototype y despues lo que estan dentro
objeto.hablar = () => {
    console.log("modificado por fuera");
};
// console.log(objeto1);
// objeto1.hablar();

// Si quisieramos modificar el metodo dentro del prototipo lo hacemos de esta manera
// objeto.__proto__.hablar = () => {
//     console.log("modificamdo internamente");
// };
// objeto.hablar();

// Si queremos heredar el metodo hablar() al prototipo de otro elemento podemos hacerlo de esta manera

const arr = [];
// Lo que se hereda es lo primero que se encuentra, por ejemplo primero se hereda lo de afuera y luego lo de adentro es decir
// le decimos que el prototipo de array va a ser igual a objeto
// arr.__proto__ = objeto;
// Lo que pasa con esto es que nosotros al tener modificado desde fuera el metodo hablar por ejemplo va a heredar lo primero que encuentre, es decir
// arr.hablar(); //nos dice modificado por fuera
// arr.__proto__.__proto__.hablar(); //nos muestra el metodo original

// entonces lo que tendriamos que hacer para definir esto de manera en que nos hereda el valor original sería igualarlo de esta manerea
// el proto del array va a ser igual al proto de objeto
arr.__proto__ = objeto.__proto__;
arr.hablar(); //muestra el metodo original
