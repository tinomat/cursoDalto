const IDBRequest = indexedDB.open("dbnames", 4);
IDBRequest.addEventListener("upgradeneeded", () => {
    console.log("la base de datos se creó corrctamente");
});
IDBRequest.addEventListener("success", () => {
    readObjects();
});
IDBRequest.addEventListener("error", (e) => {
    console.log("Ocurrió un error", e);
});
IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("names", {
        autoIncrement: true,
    });
});
document.getElementById("add").addEventListener("click", (e) => {
    const nombre = document.getElementById("name");
    if (nombre.value.length > 0) {
        if (document.querySelector(".posible") != undefined) {
            if (
                confirm(
                    "Hay cambios sin guardar: 'Quieras seguir de todos modos?'"
                )
            ) {
                // Si la variable es igual al valor no hace falta poner{nombre:valor}
                addObject({ nombre: nombre.value });
                nombre.value = " ";
                readObjects();
            }
        } else {
            addObject({ nombre: nombre.value });
            nombre.value = "";
            readObjects();
        }
    }
});
const getIDBData = (mode, msg) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("names", mode);
    const objectStore = IDBtransaction.objectStore("names");
    IDBtransaction.addEventListener("complete", () => {
        console.log(msg);
    });
    return objectStore;
};
const addObject = (object) => {
    const IDBData = getIDBData(
        "readwrite",
        "se ha agregado correctamente el objeto"
    );
    IDBData.add(object);
};
const modifyObject = (key, object) => {
    const IDBData = getIDBData("readwrite", "modificado correctamente");
    IDBData.put(object, key);
};
const readObjects = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    document.querySelector(".nombres").innerHTML = "";
    const fragment = document.createDocumentFragment();
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            const elemento = nombresHTML(
                cursor.result.key,
                cursor.result.value
            );
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment);
    });
};
const deleteObject = (id) => {
    const IDBData = getIDBData("readwrite", "se ha eliminado correctamente");
    IDBData.delete(id);
};
const nombresHTML = (id, name) => {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");
    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    options.appendChild(saveButton);
    options.appendChild(deleteButton);
    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", () => {
        saveButton.classList.replace("imposible", "posible");
    });
    saveButton.addEventListener("click", () => {
        if (saveButton.className == "posible") {
            modifyObject(id, { nombre: h2.textContent });
        }
    });
    deleteButton.addEventListener("click", () => {
        deleteObject(id);
        document.querySelector(".nombres").removeChild(container);
    });
    return container;
};
