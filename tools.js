let toolsCont = document.querySelector(".tools-cont");
let optionCont = document.querySelector(".options-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let optionsFlag = true;

//true - tools show and false - hide tools
optionCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;

    if(optionsFlag) openTools();
    else closeTools();
})

function openTools() {
    let iconElem = optionCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "flex";
}
function closeTools() {
    let iconElem = optionCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "none";
    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";    

}