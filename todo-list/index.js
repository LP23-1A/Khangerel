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


const data = [
{
    title: 'todo',
    desc: 'this is todo card',
    status: 'done',
    priority: 'high',
},
{
    title: 'todo',
    desc: 'this is todo card',
    status: 'done',
    priority: 'high',
},
{
    title: 'todo',
    desc: 'this is todo card',
    status: 'stuck',
    priority: 'medium',
},
{
    title: 'in progress',
    desc: 'this is todo card',
    status: 'done',
    priority: 'high',
},
{
    title: 'todo',
    desc: 'this is todo card',
    status: 'done',
    priority: 'high',
},
];
function render (data){

}