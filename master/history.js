/*  Historial
    - back() (vuelve atras)
    - forward() (va hacia adelante)
    - tamaño del historial
    - go() (va al sitio indicado con un numero relativo)
    - pushState() modifica la URL y conserva la info
    - propiedad state y evento popstate
    - replaceState (modifica la URL y no la conserva)
*/
// console.log(history.length); //nos muestra las rutas posible dentro del historial

// history.back(); //es como apretar el boton para atras
// history.forward(); //vamos hacia adelante
// history.go(1); //sirve para viajar entre paginacion, respetando el .length,0 es recargar

console.log(location.href);
// pushState lo que hace es crear una nueva entrada en el historial
// history.pushState({ nombre: "santino" }, "Titulo", "?jajax");
console.log(location.href);
// console.log(history.state);
// otra forma de obtener el state es mediante el evento popstate
addEventListener("popstate", (e) => {
    console.log(e.state);
});
// replace state
history.replaceState({ nombre: "santino" }, "", "anashe");
