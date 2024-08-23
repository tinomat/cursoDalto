"use strict";
// Lazy load function
const publicaciones = document.querySelector(".publicaciones");
// Creamos funcion para crear el codigo html
// recibe dos parametros el nombre del usuario y el contenido
const createPublicationCode = (name, content) => {
    // creamos los elementos html
    const container = document.createElement("div");
    const comentarios = document.createElement("div");
    const nombre = document.createElement("h3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("input");
    const btnEnviar = document.createElement("input");
    // agregamos las clases css de cada uno
    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");
    // establecemos atributos
    btnComentario.setAttribute("placeholder", "Introduce un comentario");
    btnEnviar.type = "submit";
    // establecemos el contenido
    nombre.textContent = name;
    contenido.textContent = content;
    // metemos dentro del contenedor comentarios los botones
    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);
    // metemos en el container principal, el nombre, contenido y la seccion de comentarios
    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);
    // devolvemos el container principal con todos los elementos dentro
    return container;
};
// Creamos la funcion para cargar publicaciones la cual irá como parametro del intersectionObserver
const cargarMasPublis = (entry) => {
    // entry va a ser igual a la entrada de interseccion, esto es un array
    // como es un array seleccionamos el primer el elemento con [0]
    // y preguntamos si isIntersecting existe osea es true, esto nos dice si el elemento está siendo intersectado o no
    if (entry[0].isIntersecting) {
        // si el elemento esta siendo intersectado ejecutamos la funcion cargar publicaciones
        cargarPublicaciones(2);
    }
};
// creamos el oberserver, y le pasamos como para parametro la funcion que creamos recien
const observer = new IntersectionObserver(cargarMasPublis, {
    threshold: [0.5],
});
// creamos un contador el cual será el indice del elemento en el que estamos
let contador = 0;
// creamos la funcion para cargar las publicaciones
// como trabajamos con fetch usamos async await para ahorrarnos desencapsular las promesas
// como parametro la funcion recibe num que va a ser el numero de publicaciones a cargar
const cargarPublicaciones = async (num) => {
    // creamos la peticion del archivo y le decimos que esperamos a fetch("info.txt")
    const request = await fetch("info.txt");
    // luego transformamos la peticion a un objeto json ya que llega en formato string
    const content = await request.json();
    // y luego accedemos la array del objeto json que está en la propiedad content
    const arr = content.content;
    // creamos un fragmento donde vamos a meter el contenido para optimizar el rendimiento y no ingresarlo directamente a nuestro html
    const fragment = document.createDocumentFragment();
    // creamos un bucle for para recorrer el array de publicaciones
    for (let i = 0; i < num; i++) {
        // preguntamos que si array[contador] osea la publicacion que se esté iterando, es distinto a undefined es decir existe
        if (arr[contador] !== undefined) {
            // creamos una nueva publicacion con la funcion para crear el codigo de la publicacion que habiamos creado antes
            const newPublication = createPublicationCode(
                // le decimos que del elemento actual queremos extraer el nombre y contenido
                arr[contador].nombre,
                arr[contador].contenido
            );
            // metemos la nueva publicacion en el fragmento que habiamos creado
            fragment.appendChild(newPublication);
            // y aumentamos el contador para saber en la posicion donde quedamos y asi al volver a cargar, no cargar las misma publicaciones existentes
            contador++;
            // preguntamos si i es igual al numero que le pasamos - 1 ya que se arranca a iterar de 0, es decir, estamos preguntando que si i se encuentra en la ultima publicacion
            // vamos a ejecutar el metodo observe para observar a newPublication la cual sería LA ULTIMA publicacion agregada y cuando esta esté siendo intersectada ejecutamos la funcion que le habiamos pasado al observer como callback la cual es cargarMasPublis
            if (i == num - 1) observer.observe(newPublication);
            // En caso contrario, es decir cuando deje de haber elementos en el array, es decir no hay más publicaciones
        } else {
            // preguntamos si el id del ultimo elemento de publicaciones es distinto a noMore
            if (publicaciones.lastElementChild.id !== "noMore") {
                // Creamos un h3
                const noMore = document.createElement("h3");
                // le definimos la clase nomore
                noMore.className = "nomore";
                // le agregamos el contenido
                noMore.textContent = "No hay más publicaciones para cargar";
                // le definimos el id noMore para que si se vuelve a ejecutar el else no nos cree otro h3 igual
                noMore.id = "noMore";
                // metemos le no more en el fragment
                fragment.appendChild(noMore);
                // metemos el fragment en el div de publicaciones
                publicaciones.appendChild(fragment);
                // cortamos la ejecución del bucle para que no siga buscando
                break;
            }
        }
    }
    publicaciones.appendChild(fragment);
};
cargarPublicaciones(4);
