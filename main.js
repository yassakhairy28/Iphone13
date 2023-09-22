let iphone = document.querySelector(".mainPhone");
changeBody = document.querySelector("body")

function changePhone (src) {
    iphone.src = src
}

function changeBackground (color) {
    changeBody.style.backgroundColor = color;
}