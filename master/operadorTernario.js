/*  Operador ternario */
// Lo que hacemos con el operador ternario es en vez de usar un if else, lo haríamos de esta manera
const edad = 10;
// El ? funciona como un if y el : como un else
// edad <= 10 ? console.log("Es menor de edad") : console.log("Es mayor de edad");

// Si quisieramos tener más de una linea de ejecución lo hacemos poniendo todo dentro de parentesis y separando las lineas con comas
const edad2 = 18;
edad2 >= 18
    ? (console.log("Es mayor de edad"), console.log("Tiene permitido el paso"))
    : (console.log("No es mayor de edad"),
      console.log("No tiene permitido elpaso"));

// El operador tenerario consume menos recursos que un if else
