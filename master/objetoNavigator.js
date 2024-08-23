/*  Objeto navigator 
// Interfaces
    - NavigatorID
    - NavigatorLanguage
    - NavigatorOnLine
    - NavigatorContentUtils
    - NavigatorStorageUtils
    - NavigatorCookies
    - NavigatorConcurrentHardware
    - NavigatorPlugins
    - NavigatorUserMedia
*/

//  Propiedades estandar del navegador
/*  navigator.appCodeName
    - devuelve el nombre del codigo interno del navegador actual. no siempre es correcto
*/
console.log(navigator.appCodeName);

/*  navigator.appName
    - devuelve el nombre oficial del navegador. no siempre es correcto
*/
console.log(navigator.appName);

/*  navigator.appVersion
    - devuelve la version del navegador. no siempre es correcto
*/
console.log(navigator.appVersion);

/*  navigator.connection  
    - provee un objeto NetworkInformation
*/
console.log(navigator.connection);

/*  navigator.geolocation
    - devuelve un objeto geolocation
*/
console.log(navigator.geolocation);

/*  navigator.hardwareConcurrency
    - devuelve el numero de nucles de procesodres logicos disponibles
*/
console.log(navigator.hardwareConcurrency);

/*  navigator.language  
    - devuelve un string que representa el idioma preferido del usuario
*/
console.log(navigator.language);

/*  navigator.languages
    - devuelve una matriz de cadenas que representan los idiomas que conoce el usuario, por orden de preferencia
*/
console.log(navigator.languages);

/*  navigator.mimeType
    - devuelve mimetype array, los mimetyps son lo que se envía en los encabezados
*/
console.log(navigator.mimeTypes);

/*  navigator.onLine
    - devuelve un valor booleano que indicada si el navegador está funcionando en linea
*/
console.log(navigator.onLine);

/*  navigator.userAgent
    - devuelve la cadena de agente de usuario para el navegador actual
*/
console.log(navigator.userAgent);

/*  navigator.cookiesEnabled
    - devuelve false si se ignorará la configuracion de una cookie y true en caso contrario
*/
console.log(navigator.cookieEnabled);

/*  navigator.permissions
    - devuelve un objeto permissions que se puede usar para consultar y actualizar el estado de los permiso de las API cubiertas por la api de permisos
*/
console.log(navigator.permissions);

/*  navigator.platform
    - devuelve una cadena que representa la plataforma del navegador. no siempre es correcto
*/
console.log(navigator.platform);

/*  navigator.plugins
    - devuelve un plugin array que enumera los plugins instalados en el navegador
*/
console.log(navigator.plugins);

/*  navigator.product
    - devuelve "gecko en cualquier navegador"
*/
console.log(navigator.product);

/*  navigator.serviceWorker
    - devuelve un objeto serviceWorkerContainer que da acceso al registro, eliminacion, actualizacion y comunicaciones con los objetos ServiceWorker
    el service worker trabaja en paralelo, este comparte informacion, se puede ejecutar incluso con la pagina cerrada, etc
*/
console.log(navigator.serviceWorker);

// Metodos

// nos permite acceder a la camara o microfono
// navigator.getuserMedia()

// permite a los sitios web registrarse como posibles controladores de un tipe mime determinado
// navigator.registerContentHandler()

// permite a los sitios web registrarse como posibles controladores de un protocolo determinado
// navigor.registerProtocolHandler()

// devuelve un objeto Promise para un objeto MediaKeySystemAcces
// navigator.requestMediaKeySystemAcces()

// devuelve un valor boolean que indica si el navegador tiene o no habilitado java
// navigator.javaEnabled()

// usado para transferir de forma asincrona conjuntos pequeños de datos HTTP del agente usuario al servidor
// navigator.sendBeacon()

// causa vibracion en el dispositivo que la soporta. no hace nada si el soporte para vibracion no está disponible
// navigator.vibrate()
