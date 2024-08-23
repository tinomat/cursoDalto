/*  Notifications es para mandar notificaciones desde nuestro navegador */
if (!("notification" in window)) {
    console.log("las notificaciones no estan disponibles en tu navegador");
}
// requestPermission es un metodo del objeto notification que nos sirve para pedir permiso de notificaciones
// esto recibe un callback una vez que se haya ejecutado
Notification.requestPermission(() => {
    // Notification.permission muestra el estado del permiso, granted es cuando está permitido
    if (Notification.permission == "granted") {
        // asi creamos una nueva notificacion
        new Notification("Suscribite papu");
    }
});
