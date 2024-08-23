const inputFile = document.querySelector(".inputFile");
inputFile.addEventListener("change", () => {
    readImg(inputFile.files);
});
const readImg = (ar) => {
    for (ar of inputFile.files) {
        const reader = new FileReader();
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => {
            const newImg = `<img src = "${e.currentTarget.result}">`;
            document.querySelector(".galery").innerHTML += newImg;
        });
    }
};
