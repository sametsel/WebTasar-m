const ınput1 = document.querySelector("#ınput1");
const addbtn = document.querySelector(".btn-add");
const tablo = document.querySelector("#tablo");
const liste=document.querySelector("#ul");
const deletebtn=document.querySelector(".btn-delete");
let todos;

kayıtEleman();
addbtn.addEventListener("click",elemanEkle);
deletebtn.addEventListener("click",elemanSil);

function kayıtEleman(){
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    })

}
function getItemsFromLS(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}
function setItemToLS(newTodo){
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
    e.preventDefault();

}
function elemanEkle(newtodo) {
//li oluşturma
    const li =document.createElement("li");
    li.className="liii";
    li.appendChild(document.createTextNode(newtodo));
    liste.appendChild(li);
    setItemToLS(input.value);
    e.preventDefault();


}
function elemanSil(e){
    liste.innerHTML="";
    e.preventDefault();

}


