const slots = document.querySelectorAll(".slot");
const letters = document.querySelectorAll(".letter");
const resetButton = document.getElementById("resetButton");

letters.forEach(element =>{
    element.addEventListener("dragstart", dragStart);
})

slots.forEach(element =>{
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", drop);
})

resetButton.addEventListener("click", reset);


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