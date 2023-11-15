let addCards = document.querySelectorAll(".add-btn");
let modal = document.querySelector(".modal");

function isOpenModal() {
    modal.style.opacity = 1;
}
for (let i = 0; i < addCards.length; i++){
    addCards[i].onclick = isOpenModal;
};

let close = document.querySelector('.close-btn');
function closeModel() {
    modal.style.opacity = 0;
}
close.onclick = closeModel;

function randomNumberGanerate(){
    return String(Math.random(1));
};

const cards = document.querySelectorAll(".cardcontainer");
let todo = document.getElementById("todo");
let inprogress = document.getElementById("inprogress");
let stuck = document.getElementById("stuck");
let done = document.getElementById("done");
let data = [];

function render(data){
    let count = {
        todo: 0,
        inprogress: 0,
        stuck: 0,
        done: 0,
    }
    data.map((e) => {
        if (e.status === "todo") {
          cards[0].innerHTML += createCard(e);
          count.todo += 1;
        }
        if (e.status === "inprogress") {
          cards[1].innerHTML += createCard(e);
          count.inprogress += 1;
        }
        if (e.status === "stuck") {
          cards[2].innerHTML += createCard(e);
          count.stuck += 1;
        }
        if (e.status === "done") {
          cards[3].innerHTML += createCard(e);
          count.done += 1;
        }
    });
    todo.innerHTML = count.todo;
    inprogress.innerHTML = count.inprogress;
    stuck.innerHTML = count.stuck;
    done.innerHTML = count.done;
    cards[0].innerHTML = "";
    cards[1].innerHTML = "";
    cards[2].innerHTML = "";
    cards[3].innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "todo"){
            cards[0].innerHTML += createCard(data[i]);
        } else if (data[i].status === "inprogress"){
            cards[1].innerHTML += createCard(data[i]);
        } else if (data[i].status === "stuck"){
            cards[2].innerHTML += createCard(data[i])
        } else if (data[i].status === "done"){
            cards[3].innerHTML += createCard(data[i]);
        }
    }
    let removeBtn = document.querySelectorAll(".cancel-btn");

    removeBtn.forEach((element) => {
        element.onclick = () => deleteItem(element)
    })
    let doneBtn = document.querySelectorAll(".done-btn");

    doneBtn.forEach((element) => {
        element.onclick = () => donecard(element);
    })
    let editBtn = document.querySelectorAll(".write-btn");

    editBtn.forEach((element) => {
        element.onclick = () => isEdit(element);
    })
    drag()
}

let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let status = document.getElementById("status");
let priority = document.getElementById("priority");

function addCard(isEdit) {
    const mockData = {
        id: '',
        title: '',
        desc: '',
        status: '',
        priority: '',
        }
        mockData.id = randomNumberGanerate();
        mockData.title = input.value;
        mockData.desc = textarea.value;
        mockData.status = status.value;
        mockData.priority = priority.value;
        data.push(mockData);
    render(data);
}
function createCard(card){
    const { id, title, desc, priority} = card;
    return `
    <div class="card-items flex" draggable="true">
        <div class="start flex">
            <div class="done"> 
                <button class="done-btn btn" id="${id}"><img src="./img/correct.png " alt="" height="15px" width="15px"></button>
            </div>
            <div class="write-task">
                <h1>${title}</h1>
                <p>${desc}</p>
                <div class="priority">${priority}</div>
            </div>
        </div>
        <div class="end flex">
            <button class="cancel-btn btn" id="${id}">X</button>
            <button class="write-btn btn" onclick="setData(false) id="${id}"><img src="./img/write.png" alt="" height="15px" width="15px">
        </button>
    </div>`
}
function deleteItem(element) {
    const findId = element.id;
    const newArr = data.filter((el) => {
        console.log(el.id, findId);
        return el.id !== findId;
    });
    data = newArr;
    render(data);
}
const donecard = (el) => {
    const donelist = data.map((item) => {
        if (item.id === el.id) {
            item.status = "done";
        }
        return item
    })
    render(donelist)
}
console.log(donecard);
render(data)
function isEdit(element) {
    if (element) {
        input.value = data.input;
    }
    isOpenModal()
}


function drag() {
    let draggedItem = null;
    let cardItem = document.querySelectorAll(".card-items");

    let cardscon = document.querySelectorAll(".cards");
    
    cardItem.forEach((card) => {
        card.addEventListener('dragstart', (event) => {
            event.target.value
            draggedItem = event.target;
            console.log(draggedItem);
            event.dataTransfer.setData('text', event.target.getAttribute('data-id'));
        });
        card.addEventListener('dragend', () => {
        draggedItem = null;
        });
        });
        cardscon.forEach((board) => {
            board.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        board.addEventListener('dragenter', (event) => {
            event.preventDefault();
            if (draggedItem) {
                const draggingBoard = draggedItem.parentNode;
                console.log(draggingBoard);
                if (draggingBoard !== event.currentTarget) {
                    event.currentTarget.querySelector(".cardcontainer").appendChild(draggedItem);
                }
            }   
        });
        board.addEventListener('dragleave', () => { });
        board.addEventListener('drop', (event) => {
        event.preventDefault();
        });
        });
}
