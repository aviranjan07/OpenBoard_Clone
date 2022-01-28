let canves = document.querySelector("canvas");
canves.width = window.innerWidth;
canves.height = window.innerHeight;

let mouseDown = false;

//API
let tool = canves.getContext("2d");

tool.strokeStyle = "red";
tool.lineWidth = "3";

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

