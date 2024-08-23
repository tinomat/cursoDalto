/*  File reader */

// Creamos el objeto FIleReader()
// Este objeto está basado en eventos
// console.log(reader);

// Podemos leer archivos mediante reader

const archivo = document.querySelector(".archivo");
// agregamos el evento change que es el evento para los inputs file cuando cambia
// archivo.addEventListener("change", (e) => {
//     // Usamos la funcion leer archivo y le pasamos como argumento el archivo que va a introducir el usuario en el input
//     // archivo.files retorna un array, en la posicion 0 está el archivo, en casos de multiples archivos abría más de un elemento
//     leerArchivos(archivo.files);
// });

// Creamos la funcion leerArchivo
// const leerArchivo = (ar) => {
//     // Creamos el reader para leer el archivo que nos va a llegar en el input
//     const reader = new FileReader();
//     // Usamos el metodo readAsText del objeto reader y le pasamos como parametro ar que va a ser el archivo que pasamos antes como argumento
//     reader.readAsText(ar);
//     // Luego usamos el evento load en el reader para decirle que una vez cargado, osea que el reader haya leído el archivo vamos a mostrarlo en consola por ejemplo
//     reader.addEventListener("load", (e) => {
//         // Mostramos en consola el resultado de lo que se subió
//         console.log(e.currentTarget.result);
//     });
// };

// Si quisieramos leer varios archivos lo hacemos de esta manera
// const leerArchivos = (ar) => {
//     for (ar of archivo.files) {
//         const reader = new FileReader();
//         reader.readAsText(ar);
//         reader.addEventListener("load", (e) => {
//             console.log(e.currentTarget.result);
//         });
//     }
// };

// ReadAsDataURL() es para leer otro tipo de archivos como imagenes, videos, etc
archivo.addEventListener("change", (e) => {
    leerImagen(archivo.files);
});
const leerImagen = (ar) => {
    for (ar of archivo.files) {
        const reader = new FileReader();
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => {
            const newImg = `<img src = "${e.currentTarget.result}">`;
            document.querySelector(".resultado").innerHTML += newImg;
        });
    }
};
