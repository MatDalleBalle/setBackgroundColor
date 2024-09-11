
console.log("jeg er i setbackground.js");

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log(fontSize);
    element.style.fontSize = 10 + 'px';
    fontSize = element.style.fontSize;
    console.log(fontSize);
}

pTagArr.forEach(increaseFont);

let inpColorValue =document.querySelector(".inpColorValue");
let inpColorPicker = document.getElementById("inpColorPicker");

let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk for at vælge farve";

let bdy = document.querySelector("body");
console.log(bdy);

const pTags = document.getElementsByTagName('p')
console.log(pTags);

let pTagArr = Array.from(pTags);
pTagArr.forEach(p => p.textContent = "Hej fra foreach");

pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener('keyup', setBackgroundColor);
inpColorPicker.addEventListener('input', useColorPicker);
