"use strict";
/*
    Visibility change
*/

// addEventListener("visibilitychange", () => {
//     // esto tiene dos estados
//     // visible, cuando estamos en la pestaña
//     // hidden cuando salimos de la pestaña
//     console.log(document.visibilityState);
// });

addEventListener("visibilitychange", (e) => {
    if (e.target.visibilityState == "visible") {
        document.body.textContent = "que te vas rancio";
    } else {
        document.body.textContent = "a volviste e putito";
    }
});
