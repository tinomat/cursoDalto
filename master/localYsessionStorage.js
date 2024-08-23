/*  LocalStorage y SessionStorage
    SessionStorage es la informacion que se almacena en la sesión, cuando actualizamos o cerramos la pagina esa informacion se pierde.
    LocalStorage lo almacena en el amacenamiento local y si cerramos o actualizamos la pagina sigue estando
*/

// De esta manera guardamos valores
localStorage.setItem("nombre", "pedro");
// El length en localStorage nos indica la cantidad de key que tenemos
// Llamamos a la key nombre y nos muestra su valor
// console.log(localStorage.getItem("nombre"));
// guardamos el valor de "nombre" en una variable para poder usarlo en el codigo
const nombre = localStorage.getItem("nombre");
// console.log(nombre);

sessionStorage.setItem("nombre", "juan");
console.log(sessionStorage.getItem("nombre"));

// Ventana modal para definir idioma
const definirIdioma = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("idioma", "en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");
        cerrarModal();
    });
};
const cerrarModal = () => {
    const modal = document.querySelector(".modal-overlay");
    modal.style.animation = "desaparecer 0.5s forwards";
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
};
const idioma = localStorage.getItem("idioma");
if (idioma === null) definirIdioma();
else console.log(`Idioma ${idioma}`);
