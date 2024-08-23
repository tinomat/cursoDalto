// esta hoja tiene limitaciones, si queremos trabajar con objetos o funciones tenemos que mandarlo desde la hoja main con postMessage()

// const ejecutarBucle = () => {
//     while (true) {
//         console.log(1);
//     }
// };
// de esta manera recibimos el mensaje y pasamos el callback
addEventListener("message", (e) => {
    // data es la información que mandamos en el postMessage()
    console.log(e.data);
});
