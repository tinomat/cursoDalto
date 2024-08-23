"use strict";
/*  WebWorkers
    Los webworkers ejecutan los procesos que tarden en completarse paralelamente para poder continuar usando la pagina
*/

/*  matchMedia
    - matchMedia(), nos permite trabajar con responsive design
    - propiedad match
    - evento onchange
    - ¿cuando debería usarlo?
*/
// como parametro se le pasan las mediaqueries
// nos muestra un objeto con tres propiedades
const mq = matchMedia("(max-width: 400px)");
const caja = document.querySelector(".caja");
// .matches nos indicada si el mediaquerie definido coincide con el de la pantalla
// onChange es un evento de este objeto que trabaja con el matches, es decir cada vez que matches varíe entre true y false va a ejecutarse el evento
mq.addEventListener("change", (e) => {
    if (e.target.matches) caja.classList.replace("caja", "responsive-caja");
    else caja.classList.replace("responsive-caja", "caja");
});

// matchMedia no se usa para estilos, sino en casos cuando por ejemplos queremos ejecutar cierta cosa u otra dependiendo la clase
