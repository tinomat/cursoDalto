"use strict";
/*  IndexedDB, es una base de datos no relacional, trabaja con key:value
    Caracteristicas
    - Almacena información en el navegador de forma similar a localStorage
    - Es orientada a objetos
    - Es asincrona, todos los cambios se hacen en timepo real
    - Trabaja con eventos del DOM, el resultado va a estar basado en un evento del dom
*/

/*  Procedimiento de creación
    - Objeto IndexedDB
    - Metodo open()
    - noupgradeneeded, onsucess, onerror
*/

// Primero tenemos que crear una solicitud, le pedimos al navegador que habra una base de datos
// IDBReques es algo que le ponemos para especificar que es una indexeddb request
// .open() es para abrir una base de datos y si no existe la crea
// el primer parametro va a ser el nombre de la base de datos y el segundo el versionado
const IDBRequest = indexedDB.open("database", 1);
// db = database
// databse va a ser igual al resultado del request de la database osea la base de datos creada
// let db;
// Con este evento preguntamos si la base de datos esta creada, si no está creada la crea
IDBRequest.addEventListener("upgradeneeded", () => {
    console.log("se creo correctamente");
});

// // Todo salió bien
IDBRequest.addEventListener("success", (e) => {
    console.log("todo salio correctamente");
});
// Hubo un error
IDBRequest.addEventListener("error", (e) => {
    console.log("ocurrió un error al abrir la base de datos", e);
});

// Funcion para obtener la informacion, esto solo se hace en algunos casos y si se trabaja con el mismo almacen de objetos repetidas veces
const getIDBData = (mode, msg) => {
    // almacenamos la data base que va a ser el resultado de la peticion
    const db = IDBRequest.result;
    // abrimos la transaccion del oject store "nombres", el modo lo vamos a pasar como parametro
    const IDBtransaction = db.transaction("nombres", mode);
    // permitimos la transaccion
    const objectStore = IDBtransaction.objectStore("nombres");
    // Ejecutamos el evento complete, con un mensaje que irá como parametro de la funcion
    IDBtransaction.addEventListener("complete", () => {
        console.log(msg);
    });
    // retornamos array con el almacen de objetos
    return objectStore;
};
// Crear Almacen de objetos, es una arquitectura que nos permite alamcenar datos como objetos
// createObjectStore() nos permite crear el almacen de objetos
IDBRequest.addEventListener("upgradeneeded", () => {
    // usamos el metodo de la data base para crear el almacen de objetos
    // primer parametro va a ser el nombre del almacen
    // el segundo parametro que es el key
    db.createObjectStore("nombres", {
        // a medida que vamos creando va aumento el id de la key
        autoIncrement: true,
        // otra propiedad es keyPath, esta sirve para trabajar con claves de nombre
    });
});

// Almacenar objetos
const addData = (data) => {
    // Con esto abrimos una transaccion
    // El primer parametro va a ser en el object store donde queremos abrir una transaccion
    const db = IDBRequest.result;
    // El segundo va a ser el modo en que lo vamos a abrir, puede ser readonly o readwrite, readonly solo es para leer y readwrite nos permite modificar, eliminar, agregar etc
    const IDBtransaction = db.transaction("nombres", "readwrite");
    // la transaccion se va a ejecutar en object store "nombres", es como que permitimos la transaccion
    const objectStore = IDBtransaction.objectStore("nombres");
    // usamos el metodo add() para agregar data que va a ser el parametro que le pasemos a la funcion
    objectStore.add(data);
    // decimos que cuando la transaccion se complete, mostramos en consola que se ejecutó correctamente
    IDBtransaction.addEventListener("complete", (e) => {
        console.log("objeto agregado correctamente");
    });
};

// Leer objetos
const readData = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todos los datos fueron leídos");
    });
};

// Modificar objetos
const modifyData = (key, data) => {
    const IDBData = getIDBData("readwrite", "Objeto modificado correctamente");
    IDBData.put(data, key);
};

// Eliminar objetos
const deleteData = (key) => {
    const IDBData = getIDBData("readwrite", "Objeto eliminado correctamente");
    IDBData.delete(key);
};
