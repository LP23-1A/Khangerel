let addCard = document.querySelectorAll(".add-btn");
let addTask = document.querySelector(".modal");

function openModal() {
    addTask.style.opacity = 1;
}
for (let i = 0; i < addCard.length; i++){
    addCard[i].onclick = openModal;
};

let close = document.querySelector('.close-btn');
let closeback = document.querySelector('.closing');
function closeModel() {
    addTask.style.opacity = 0;
}
close.onclick = closeModel;
closeback.onclick = closeModel;

let card = document.querySelector('.card');
let task = document.querySelector('.task');
function move() {
    card.style.display = "block";
}
task.onclick = move