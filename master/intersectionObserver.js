/*  Intersection observer
    Esto es para saber si algo es visible o no en el viewport del sitio web
*/
const verifyVisibility = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(`Se está viendo la caja ${entry.target.textContent}`);
        }
    });
};
const options = {
    // agrega un margen a la ruta, es decir se muestra la caja 30px antes
    rootMargin: "30px",
    // definimos a que altura de la caja queremos trabajar 0.5 sería la mitad de la caja
    treshold: 0.5,
};
// esta es la manera lo creamos
// recibe dos parametros un callback y options
const observer = new IntersectionObserver(verifyVisibility, options);

const cajas = document.querySelectorAll(".caja");
// observe es un metodo que nos observa el elemento que le digamos
cajas.forEach((caja) => {
    observer.observe(caja);
});
