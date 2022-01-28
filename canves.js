let canves = document.querySelector("canvas");
canves.width = window.innerWidth;
canves.height = window.innerHeight;

//API
let tool = canves.getContext("2d");

tool.strokeStyle = "blue";
tool.lineWidth = "8";

tool.beginPath();
tool.moveTo(10, 10);
tool.lineTo(100, 150);
tool.stroke();