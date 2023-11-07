let addCards = document.querySelectorAll(".add-btn");
let addTask = document.querySelector(".modal");
let editbtn = document.querySelectorAll('.write-btn');

function openModal() {
    addTask.style.opacity = 1;
}
for (let i = 0; i < addCards.length; i++){
    addCards[i].onclick = openModal;
};

let close = document.querySelector('.close-btn');
function closeModel() {
    addTask.style.opacity = 0;
}
close.onclick = closeModel;


function randomNumberGenerate(){
    return String(Math.random(1));
};



let data = [];
function render(data){
    let todonum = document.querySelectorAll("#todo-num");
    const cards = document.getElementsByClassName("cardcontainer");
    const cardItems = document.querySelectorAll(".card-items");
    cards[0].innerHTML = "";
    cards[1].innerHTML = "";
    cards[2].innerHTML = "";
    cards[3].innerHTML = "";
    todonum[0].innerHTML = "";
    todonum[1].innerHTML = "";
    todonum[2].innerHTML = "";
    todonum[3].innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "todo"){
            cards[0].innerHTML += createCard(data[i]);
            todonum[0].innerHTML = cardItems.length + 1;
        } else if (data[i].status === "inprogress"){
            cards[1].innerHTML += createCard(data[i]);
            todonum[1].innerHTML = cardItems.length + 1;
        } else if (data[i].status === "stuck"){
            cards[2].innerHTML += createCard(data[i]);
            todonum[2].innerHTML = cardItems.length + 1;
        } else if (data[i].status === "done"){
            cards[3].innerHTML += createCard(data[i]);
            todonum[3].innerHTML = cardItems.length + 1;
        }
    }
    let removeBtn = document.querySelectorAll(".cancel-btn");

    removeBtn.forEach(element => {
        element.onclick = function(){
        deleteItem(element)
        };
    });
}
console.log(data);
function addCard() {
    const uid = Math.random()
    const mockData = {
        id: '',
        title: '',
        desc: '',
        status: '',
        priority: '',
        }
        let input = document.querySelector("input");
        let textarea = document.querySelector("textarea");
        let status = document.getElementById("status");
        let priority = document.getElementById("priority");
        mockData.id = randomNumberGenerate();
        mockData.title = input.value
        mockData.desc = textarea.value
        mockData.status = status.value
        mockData.priority = priority.value
        data.push(mockData);
        render(data);
}
function createCard(card){
    const { title, desc, priority, id } = card;
    return `
    <div class="card-items flex" draggable="true">
        <div class="start flex">
            <div class="done">
                <button class="done-btn btn"><img src="./img/correct.png" alt="" height="15px" width="15px"></button>
            </div>
            <div class="write-task">
                <h1>${title}</h1>
                <p>${desc}</p>
                <div class="priority">${priority}</div>
            </div>
        </div>
        <div class="end flex">
            <button class="cancel-btn btn" id="${id}">X</button>
            <button class="write-btn btn"><img src="./img/write.png" alt="" height="15px" width="15px">
        </button>
    </div>`
}

function deleteItem(element) {
    const findId = element.id;
    const newArr = data.filter((el) => {
      console.log(el.id, findId);
      return el.id !== findId;
    });
    
  
}  
data = newArr;

render(data);




// let lists = document.querySelectorAll(".card-items");
// let dragone = document.querySelector(".drag-1");
// let dragtwo = document.querySelector(".drag-2");
// let dragthre = document.querySelector(".drag-3");
// let dragfour = document.querySelector(".drag-4");

// for (list of lists){
//     list.addEventlistener("dragstart", function(e){
//         let selected = e.target;

//         dragone.addEventListener("dragover", function(e){
//             e.preventDefault();
//         })
//         dragone.addEventListener("drop", function(e){
//             dragone.appendChild(selected);
//             selected = null
//         })
//         dragtwo.addEventListener("dragover", function(e){
//             e.preventDefault();
//         })
//         dragtwo.addEventListener("drop", function(e){
//             dragtwo.appendChild(selected);
//             selected = null
//         })
//         dragthre.addEventListener("dragover", function(e){
//             e.preventDefault();
//         })
//         dragthre.addEventListener("drop", function(e){
//             dragthre.appendChild(selected);
//             selected = null
//         })
//         dragfour.addEventListener("dragover", function(e){
//             e.preventDefault();
//         })
//         dragfour.addEventListener("drop", function(e){
//             dragfour.appendChild(selected);
//             selected = null
//         })
//     })
// }