let toolsCont = document.querySelector(".tools-cont");
let optionCont = document.querySelector(".options-cont");
let optionsFlag = true;
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let sticky = document.querySelector(".sticky");
let pencilFlag = false;
let eraserFlag = false;

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

pencil.addEventListener("click", (e) => {
    //true - show pencil tool and false - hide pencil tool
     pencilFlag = !pencilFlag;

    if(pencilFlag) pencilToolCont.style.display = "block";
    else pencilToolCont.style.display = "none";
 })

 eraser.addEventListener("click", (e) => {
    //true - show eraser tool and false - hide eraser tool
    eraserFlag = !eraserFlag;

    if(eraserFlag) eraserToolCont.style.display = "flex";
    else eraserToolCont.style.display = "none";
})

sticky.addEventListener("click", (e) => {
   let stickyCont = document.createElement("div");
   stickyCont.setAttribute('class', "sticky-cont");
   stickyCont.innerHTML = `
   <div class="header-cont">
      <div class="minimize"></div>
       <div class="remove"></div>
   </div>
   <div class="note-cont">
        <textarea></textarea>
   </div>
   `;
   document.body.appendChild(stickyCont);
})