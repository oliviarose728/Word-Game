const slots = document.querySelectorAll(".slot");
const letters = document.querySelectorAll(".letter");
const resetButton = document.getElementById("resetButton");

letters.forEach(element => {
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("touchstart", touchStart); // Touch event for drag start
})

slots.forEach(element => {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", drop);
    element.addEventListener("touchmove", touchMove); // Touch event for drag over
    element.addEventListener("touchend", touchEnd); // Touch event for drop
})

resetButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
});

resetButton.addEventListener("click", reset);

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function touchStart(event) {
    const touch = event.touches[0];
    const target = event.target;
    const sourceID = target.id;
    target.style.position = "absolute";
    target.style.left = touch.pageX - target.offsetWidth / 2 + "px";
    target.style.top = touch.pageY - target.offsetHeight / 2 + "px";
    event.preventDefault();
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const sourceID = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(sourceID);
    event.target.appendChild(draggedElement);
}

function touchMove(event) {
    const touch = event.touches[0];
    const target = event.target;
    target.style.left = touch.pageX - target.offsetWidth / 2 + "px";
    target.style.top = touch.pageY - target.offsetHeight / 2 + "px";
    event.preventDefault();
}

function touchEnd(event) {
    const target = event.target;
    target.style.position = ""; // Reset position
    event.preventDefault();
}

function reset() {
    location.reload();
}