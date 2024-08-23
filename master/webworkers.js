/*  Webworkers
    Los webworkers nos permite ejecutar eventos en paralelo, ya que even loop no puede ejecutar mas de un evento a la vez

    Tipos de Web Worker
    - Dedicated Worker
    - Shared Worker
    - Service Worker
    - Abstract Worker
*/

// Para dedicar un Dedicated Worker vamos a hacerlo asi
// a esto le pasamos un archivo js que tiene ciertas limitaciones
const worker = new Worker("worker.js");
// Si ejecutaramos este bucle no nos dejaría escribir en el input mientras esta funcion se está ejecutando
// const ejecutarBucle = () => {
//     while (true) {
//         setInterval(() => {
//             console.log(1);
//         }, 2000);
//     }
// };
// document.querySelector(".button").addEventListener("click", () => {
//     ejecutarBucle();
// });
// Lo que tenemos que hacer es ejecutar la funcion que va a ser paralela en el archivo que designamos como worker, pero este no trabaja con el objeto window como base por lo que tendríamos que pasarle parametros
// primero definimos el evenot acá
// esta funcion manda el mensaje a la hoja worker
const ejecutarBucle = () => {
    // este metodo recibe un valor true
    worker.postMessage(true);
    // esto es para que una vez que se ejecute lo que se tenía que ejecutar se termine el worker
    worker.terminate();
};
// cuando hagamos click en el boton ejecutamos la funcion ejecutar bucle
document.querySelector(".button").addEventListener("click", ejecutarBucle);

// trabajar con webworkers es util para cuando en nuestra paginas vamos a cargar archivos pesados estos se puedan ir cargando en segundo plano mientras nos permite seguir utilizando la pagina

// politica de origen cruzado (same origin), por ejemplo si intentamos acceder a un worker de otro puerto, no nos va a dejar
// un enlace se compone de 3 cosas, protocolo host y puerto
// protocolo https://
// host localhost
// puerto :80
// para que funcion protocolo host y puerto tienen que ser los mismo desde donde llamamos el worker
