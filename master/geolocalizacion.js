"use strict";
/*  Geolocalization
    - getCurrentPosition() Obtiene los datos de la posicion actual
        - parametros (position,error,options)
        - propiedades de option (enableHightAccuracy, timeout, maximumAge)

    - watchPosition() Detecta cambios en la posicion, sirve para hacer por ejemplo un trackeo de ruta
*/

// Uso basico de la aplicación de geolocalizacion
const geolocation = navigator.geolocation;
const posicion = (pos) => {
    console.log(pos);
};
const err = (e) => {
    console.log(e);
};
const options = {
    // Especificamos cuanto tiempo queremos guardar ubicacion en caché, es decir cada cuanto vamos a volver a solicitar la informacion
    maximumAge: 0,
    // le decimos cuanto tiempo queremos que tarde en mostrarnos la informacion
    timeout: 3000,
    // Activamos la alta precisión, lo que hace es aprovechar todos los recursos para obtener la mayor precisión posible
    enableHightAccuracy: true,
};
geolocation.getCurrentPosition(posicion, err, options);
// timestamp son cuantos segundos pasaron desde el 1 de junio de 1970 hasta ahora, formato unix
