let clickButton = document.querySelector('.click-button');
let flashLight = document.querySelector('.light');
let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
let video = document.querySelector("video");
let polaroid = document.querySelector('.polaroid');
let img = document.querySelector('img');
let dataUrl = canvas.toDataURL();
let shadow = document.querySelector("#shadow");

function converetCanvastoImage(c){
    src = c.toDataURL('image/jpeg');
    return src
}