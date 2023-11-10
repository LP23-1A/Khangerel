// function print(test) {
//     console.log('hello ' + test);
// }
// print("bat")


// function print(text) {
//     return "hi " + text
// } 
// console.log(print('bat'));


// function fullName(name) {
//     console.log(name);
// }
// fullName('Khangerel Be-ochir')


// function fullName(name, first){
//     return name + first
// }
// console.log(fullName('Khangerel ', 'Be-ochir'));


// let a = 5;
// let b = 7;

// function addNum() {
//     return a + b
// }
// console.log(addNum(a, b));


// let width = 5;
// let length = 10;
// function rectangle() {
//     return length * width
// }
// console.log(rectangle(length, width));


// let length = 10;
// let width = 5;
// function perimeter(){
//     return (length + width) * 2
// }
// console.log(perimeter(length, width));

const taskcontainer = document.querySelector(".taskcontainer");
const dark = document.querySelector(".dark");
let buttons = document.querySelectorAll(".addbtn");
const addtask = document.querySelector(".addtask")
 
function add() {
  taskcontainer.style.display = "block";
  addtask.onclick = () => addCard(false);
}
function closedark() {
  taskcontainer.style.display = "none";
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = add;
  
}
let data = [];
 
let count = {
  todo: 0,
  inprogress: 0,
  stuck: 0,
  done: 0
}
 
function render(data) {
  const cards = document.getElementsByClassName("cards");
  cards[0].innerHTML = "",
  cards[1].innerHTML = "",
  cards[2].innerHTML = "",
  cards[3].innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "To do") {
      cards[0].innerHTML += createCard(data[i]);
    } else if (data[i].status === "Inprogress"){
      cards[1].innerHTML += createCard(data[i]);
    } else if (data[i].status === "Stuck"){
      cards[2].innerHTML += createCard(data[i])
    } else if (data[i].status === "done"){
      cards[3].innerHTML += createCard(data[i])
    }
  }
}
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let select = document.querySelectorAll("select");
 
function addCard(isEdit, id) {
  cards.innerHTML = ""
  const uid = "id-" + Math.random();
  const mockData = {
    id: uid,
    title: "",
    desc: "",
    priority: "",
    status: "",
  };
  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.priority = select[1].value;
  mockData.status = select[0].value;
  taskcontainer.style.display = "none";
  input.value = ""
  textarea.value = ""
  if (isEdit) {
    data = data.map((el) => {
      if (el.id === id) {
        mockData.id = id;
        return mockData;
      }
      return el;
    });
  } else {
    data.push(mockData);
    if (mockData.status === "To do") {
      count.todo += 1
    } else if (mockData.status === "Inprogress"){
      count.inprogress += 1
    } else if (mockData.status === "Stuck"){
      count.stuck += 1
    } else if (mockData.status === "done"){
      count.done += 1
    }
    todoNumber.innerHTML = count.todo
    inProgress.innerHTML = count.inprogress
    stuckNumber.innerHTML = count.stuck
    doneNumber.innerHTML = count.done
  }
  
  render(data);
}
function createCard(card) {
  const { title, desc, priority, id } = card;
  return ` <div  class="card" id = "${id}">
<button class="done" onclick="addDone()" >v</button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class= "status"></div>
<div class="priority">${priority}</div>
</div>
<button class="close" onclick= "closeBtn(${id})">x</button>
<button class="edit" onclick = "setData('${id}', true)">b</button>
</div>`;
}
render(data);
let cards = document.querySelector(".cards");
let empty = document.querySelector(".empty");
// for (let i = 0; i < data.length; i++) {
//   cards[0].addEventListener("dragstart", function (event) {
//     console.log(event);
//   });
//   box[1].addEventListener("dragover", function (event) {
//     event.preventDefault();
//   });
//   box[1].addEventListener("drop", function (event) {
//     box.prepend(box);
//   });
// }
 
function closeBtn(id) {
  let elementId = "id" + id  
  let element = null
  const a = data.filter((e) => {
   if (e.id === elementId) {
    element = e
   } else {
    return true
   }
   return false
 
  });
  data = a;
  if (element.status === "To do") {
    count.todo -= 1
  } else if(element.status === "Inprogress") {
    count.inprogress -= 1
  } else if (element.status === "Stuck") {
    count.stuck -= 1
  } else if (element.status === "done"){
    count.done -= 1
  }
  todoNumber.innerHTML = count.todo;
  inProgress.innerHTML = count.inprogress;
  stuckNumber.innerHTML = count.stuck;
  doneNumber.innerHTML = count.done;
  render(data);
 
}
 
// let card = document.getElementsByClassName("card")
// function addDone(id) {
//   let Element1 = "id" + id
//   const b = data.filter((el) => {
//     if (el.id === Element1) {
//       el = Element1
//       el.push = cards
//     }
//     data = b
//   })
// }
 
function setData(id) {
  taskcontainer.style.display = "block"
  const findEl = data.find((el) => el.id == id)
  input.value = findEl.title
  textarea.value = findEl.desc
  addtask.onclick = () => addCard(true, id);
}
 
 