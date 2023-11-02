let addCard = document.querySelectorAll(".add-btn");
let addTask = document.querySelector(".modal");
let editbtn = document.querySelectorAll('.write-btn');

function openModal() {
    addTask.style.opacity = 1;
}
for (let i = 0; i < addCard.length; i++){
    addCard[i].onclick = openModal;
    editbtn[0].onclick = openModal;
};

let close = document.querySelector('.close-btn');
function closeModel() {
    addTask.style.opacity = 0;
}
close.onclick = closeModel;


let cancel = document.querySelectorAll('.cancel-btn');
function deleteUp (){
    card.remove();
}
for(let i = 0; i < cancel.length; i++){
    cancel[i].onclick = deleteUp;
}


let card = document.querySelector('.card');
let task = document.querySelectorAll('.task');
function move() {
    card.style.display = "block";
}
for(let i = 0; i < task.length; i++){
    task[i].onclick = move;
};


// const data = [];

// function render (data) {
//     const cards = document.getElementsByClassName(".write-task")[0];
//     const done = []
//     cards.innerHTML = ""
//     for (let i = 0; i < data.length; i++){
//         cards.innerHTML += createCard(data[i]);
//     }
// }
// let inputtitle = document.querySelector('.input.title');
// let inputdesc = document.querySelector('.input-description');
// let status = document.getElementById("status");
// let priority = document.getElementById("priority")
// function addCard(){
//     const mockData = {
//         title: '',
//         desc: '',
//         status: '',
//         priority: '',
//     }
//     mockData.title = inputtitle.value;
//     mockData.desc = inputdesc.value;
//     mockData.status = status.value;
//     mockData.priority  = priority.value;
//     data.push(mockData);
//     render(data)
// }
// function createCard(carding) {
//     const { title, desc, priority } = carding;
//     return ` <div class="card">
//     <button class="done">v</button>
//     <div class="info">
//     <p>${title}</p>
//     <span>${desc}</span>
//     <div class="priority">${priority}</div>
//     </div>
//     <button class="close">x</button>
//     </div>`;
//     }
//     render(data)