let canves = document.querySelector("canvas");
canves.width = window.innerWidth;
canves.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let mouseDown = false;

//API
let tool = canves.getContext("2d");

tool.strokeStyle = penColor;
tool.lineWidth = penWidth;

//mousedown - start new path, mousemove- path fill
canves.addEventListener("mousedown", (e) => {
    mouseDown = true;
    beginPath({
        x: e.clientX,
        y: e.clientY
    })
})
canves.addEventListener("mousemove", (e) => {
    if(mouseDown) drawStroke({
        x: e.clientX,
        y: e.clientY
    })
})
canves.addEventListener("mouseup", (e) => {
    mouseDown = false;
})

function beginPath(strokeObj) {
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem) => {
    colorElem.addEventListener("click", (e) => {
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})