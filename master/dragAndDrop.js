/*  Drag And Drop
    Es la simple api de cuando arragamos y movemos
*/
/*  Esto trabaja con eventos, los elementos html tienen 3 eventos  
    - dragstart
    - drag
    - dragend
*/
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
// Una vez agarramos el elemento
// circulo.addEventListener("dragstart", () => console.log(1));
// MIENTRAS tenemos el elemento agarrado
// circulo.addEventListener("drag", () => console.log(2));
// Una vez que soltamos el elemento
// circulo.addEventListener("dragend", () => console.log(3));

/*  Eventos de zona
    - dragenter
    - dragmove
    - drop
    - dragleave
*/
// Una vez el objeto agarrado entra en la zona
// rectangulo.addEventListener("dragenter", () => console.log(1));
// Mientras el objeto agarrado este sobre la zona
// rectangulo.addEventListener("dragover", (e) => {
//     // el evento dragover por defecto lo que hace es prohibir soltar un elemento en la zona definida
//     // previniendo el evento por defecto permitimos que se suelte el circulo dentro del rectangulo
//     e.preventDefault();
//     console.log(2);
// });
// Una vez soltamos el objeto agarrado dentro
// rectangulo.addEventListener("drop", () => console.log(3));
// Una vez el objeto agarrado salió de la zona
// rectangulo.addEventListener("dragleave", () => console.log(4));

/*  Propiedad dataTransfer, es el objeto que transmite la informacion entre el objeto agarrado y la zona donde se suelta
    - getData()
    - setData()
*/
// circulo.addEventListener("dragstart", (e) => {
//     // Definimos la informacion que es el textContent
//     e.dataTransfer.setData("textContent", e.target.textContent);
// });
// rectangulo.addEventListener("dragover", (e) => e.preventDefault());
// rectangulo.addEventListener("drop", (e) => {
//     // Obtenemos la data y la mostramos como texto del rectangulo
//     rectangulo.textContent = e.dataTransfer.getData("textContent");
// });

// Texturizador con drag and drop
const zona = document.querySelector(".zona");
// Creamos la funcion para transferir la textura
// Esta va a tener dos parametros, n que va a ser el numero de textura y e que hace referencia al evento
const transferirTextura = (n, e) => {
    // seteamos la data textura que va a ser el numero de textura
    e.dataTransfer.setData(`textura`, n);
};
// Prevenimos el evento por defecto para que nos permita soltar en la zona
zona.addEventListener("dragover", (e) => e.preventDefault());
// Agregamos el evento drop que es cuando soltamos sobre el elemento
zona.addEventListener("drop", (e) => {
    const n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.jpg")`;
});
// Obtenemos los divs hijos de texturas, textura 1 2 y 3
const texturas = document.querySelector(".texturas").children;

// Como es un HTMLCollection lo recorremos con un for
for (let i = 0; i < texturas.length; i++) {
    // n va a ser el numero de textura osea i + 1 porque arranca a contar desde 0 y nosotros tenemos textura 1,2 y 3
    let n = i + 1;
    // a cada textura le agregamos el evento dragstart y le pasamos la funcion cambiarTextura al elemento actual
    // a la funcion transferir textura le pasamos n que va a ser el numero de textura, y e que es el evento del dragstart
    texturas[i].addEventListener("dragstart", (e) => transferirTextura(n, e));
}
