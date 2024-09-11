
console.log("jeg er i setbackground.js");


// ----------------------- Functions ------------------------------------- //
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

function increaseFontSize(element) {
    pTagArr.forEach(p => {
    let fontSize = window.getComputedStyle(p).fontSize;
    let newSize = parseFloat(fontSize) + 1;
    p.style.fontSize = newSize + "px";
    });
}

function decreaseFontSize() {
    pTagArr.forEach(p => {
        let fontSize = window.getComputedStyle(p).fontSize;
        let newSize = parseFloat(fontSize) - 1;
        p.style.fontSize = newSize + "px";
    });
}


// ------------------------- Variables ----------------------------------- //

let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

let inpColorValue =document.querySelector(".inpColorValue");
let inpColorPicker = document.getElementById("inpColorPicker");


pbCol.textContent = "Tryk for at vælge farve";

let bdy = document.querySelector("body");
console.log(bdy);

const pTags = document.getElementsByTagName('p')
console.log(pTags);

const pTagArr = Array.from(pTags);
//pTagArr.forEach(p => p.textContent = "Hej fra foreach");
pTagArr.forEach(increaseFontSize)

// ------------------------- Eventlisteners ------------------------------- //
pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener('keyup', setBackgroundColor);
inpColorPicker.addEventListener('input', useColorPicker);

let increaseFont = document.querySelector(".increaseFontSize");
let decreaseFont = document.querySelector(".decreaseFontSize");

increaseFont.addEventListener('click', increaseFontSize);
decreaseFont.addEventListener('click', decreaseFontSize);