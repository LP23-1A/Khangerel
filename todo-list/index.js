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

const cards = document.getElementsByClassName("cardcontainer");
const cardItems = document.querySelectorAll(".card-items");
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

    removeBtn.forEach(element => {
        element.onclick = function(){
        deleteItem(element)
        };
    });

    // let editBtn = document.querySelectorAll(".cancel-btn");

    // editBtn.forEach(element => {
    //     element.onclick = function(){
    //     isEdit(element)
    //     };
    // });
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
        mockData.title = input.value
        mockData.desc = textarea.value
        mockData.status = status.value
        mockData.priority = priority.value
        data.push(mockData);
        console.log(mockData);
        if (isEdit){
            
        } else {
            input.innerText = input.value;
            input.value = "";
        }
        render(data);
}
function createCard(card){
    const { id, title, desc, priority} = card;
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
function setData(element){
    const findedId = element.id;
    const newArr = data.filter((el) => {
        console.log(el.id, findedId);
        return el.id !== findedId;
    });
    data = newArr;
    render(data)
}

render(data)


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


// if (isEdit){
//     data = data.map((el) => {
//         if (el.id === id){
//             mockData.id = id;
//             return mockData;
//         }
//         return el;
//     })
// }