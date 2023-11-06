let addCards = document.querySelectorAll(".add-btn");
let addTask = document.querySelector(".modal");
let editbtn = document.querySelectorAll('.write-btn');
const [datas,setDatas]=useState("")

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


let cancel = document.querySelectorAll('.cancel-btn');
function deleteUp (){
    card.remove();
}
for(let i = 0; i < cancel.length; i++){
    cancel[i].onclick = deleteUp;
}



const data = [];
function render(){
    const cards = document.getElementsByClassName("cardcontainer");
    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "todo"){
            cards[0].innerHTML = "";
            cards[0].innerHTML += createCard(data[i]);
        } else if (data[i].status === "inprogress"){
            cards[1].innerHTML = "";
            cards[1].innerHTML += createCard(data[i]);
        } else if (data[i].status === "stuck"){
            cards[2].innerHTML = "";
            cards[2].innerHTML += createCard(data[i]);
        } else if (data[i].status === "done"){
            cards[3].innerHTML = "";
            cards[3].innerHTML += createCard(data[i]);
        }
    }
}
function addCard() {
    const mockData = {
        title: '',
        desc: '',
        status: '',
        priority: '',
        }
        let input = document.querySelector("input")
        let textarea = document.querySelector("textarea")
        let status = document.getElementById("status");
        let priority = document.getElementById("priority");
        mockData.title = input.value
        mockData.desc = textarea.value
        mockData.status = status.value
        mockData.priority = priority.value
        data.push(...mockData);
        render(data)
}
function createCard(card){
    const { title, desc, priority } = card;
    return `
    <div class="card-items flex">
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
            <button class="cancel-btn btn">X</button>
            <button class="write-btn btn"><img src="./img/write.png" alt="" height="15px" width="15px">
        </button>
    </div>
  
    
    `

}
render(data)


