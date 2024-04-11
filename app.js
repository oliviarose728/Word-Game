const slots = document.querySelectorAll(".slot");
const letters = document.querySelectorAll(".letter");
const resetButton = document.getElementById("resetButton");

let touchedElementId;

letters.forEach(element =>{
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("touchstart", letterTouchStart);
})

slots.forEach(element =>{
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", drop);
    element.addEventListener("touchstart", slotTouchStart);
})

resetButton.addEventListener("click", reset);

function letterTouchStart(event){

    console.log("Letter touched:", event.currentTarget.id);
    touchedElementId = event.currentTarget.id;
}

function slotTouchStart(event){

    event.preventDefault();
    const sourceID = touchedElementId;
    const sourceImg = document.getElementById(sourceID).querySelector('img');
    const src = sourceImg.src;
    event.target.insertAdjacentHTML("afterbegin", `<div class="letter dragged" id="${sourceID}"><img src="${src}" class="gridletterimg"></div>`);
}

function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const sourceID = event.dataTransfer.getData("text");
    let html = event.dataTransfer.getData("text/html");
    let src = new DOMParser().parseFromString(html, "text/html").querySelector('img').src;
    event.target.insertAdjacentHTML("afterbegin", `<div class="letter dragged" id="${sourceID}"><img src="${src}" class="gridletterimg"></div>`);
}

function reset(){
    location.reload();
}