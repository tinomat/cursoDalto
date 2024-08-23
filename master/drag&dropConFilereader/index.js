const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};
const zona = document.querySelector(".zona-arrastre");
zona.addEventListener("dragover", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#000");
});
zona.addEventListener("dragleave", (e) => {
    changeStyle(e.target, "");
});

// const cargarArchivo = (ar) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(ar);
//     reader.addEventListener("load", (e) => {
//         const url = URL.createObjectURL(ar);
//         const newImg = document.createElement("img");
//         newImg.setAttribute("src", url);
//         document.querySelector(".resultado").appendChild(newImg);
//     });
// };
// zona.addEventListener("drop", (e) => {
//     e.preventDefault();
//     changeStyle(e.target, "");
//     cargarArchivo(e.dataTransfer.files[0]);
// });

// Si quiseramos mostrar videos sería de esta manera
// const cargarArchivo = (ar) => {
//     const reader = new FileReader();
//     reader.readAsArrayBuffer(ar);
//     reader.addEventListener("load", (e) => {
//         let video = new Blob([new Uint8Array(e.currentTarget.result)], {
//             type: "video/mp4",
//         });
//         let url = URL.createObjectURL(video);
//         let mp4 = document.createElement("video");
//         mp4.setAttribute("src", url);
//         mp4.setAttribute("controls", "true");
//         document.querySelector(".resultado").appendChild(mp4);
//     });
// };

zona.addEventListener("drop", (e) => {
    e.preventDefault();
    changeStyle(e.target, "");
    cargarArchivo(e.dataTransfer.files[0]);
    zona.style.border = "4px solid #888";
});

// Hay veces cuando subamos archivos muy pesados tardará en mostrarse, para estas situaciones podemos hacer una barra de carga con loadend y progress, estos dos son eventos de reader
const cargarArchivo = (ar) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress", (e) => {
        // Con ar.size sacamos el peso del archivo
        // ar.size
        // Luego dividimos la propiedad loaded con ar.size para sacar el porcentaje de carga
        // e.loaded dividio ar.size nos va a dar el progreso de 0 a 1, entonces lo multiplicamos para tener un 0 a 100
        // Redondeamos el resultado
        const carga = Math.round((e.loaded / ar.size) * 100);
        // Mostramos el porcentaje
        zona.textContent = `${carga}%`;
        // Coordinamos el porcentaje del width de la barra de carga con el porcentaje de carga del archivo
        document.querySelector(".barra-de-carga").style.width = `${
            carga / 1.8
        }%`;
        document.querySelector(".barra-de-carga").style.paddingInline = "20px";
    });
    // Una vez termine la carga
    reader.addEventListener("loadend", () => {
        // Cambiamos el color de la zona a verde
        changeStyle(zona, "#0f0");
    });
    reader.addEventListener("load", (e) => {
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {
            type: "video/mp4",
        });
        let url = URL.createObjectURL(video);
        let mp4 = document.createElement("video");
        mp4.setAttribute("src", url);
        mp4.setAttribute("controls", "true");
        document.querySelector(".resultado").appendChild(mp4);
    });
};
