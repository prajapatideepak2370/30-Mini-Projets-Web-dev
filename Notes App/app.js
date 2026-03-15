const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let dlt = document.createElement("i");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    dlt.classList.add("fa-solid", "fa-trash-can");
    noteContainer.appendChild(inputBox).appendChild(dlt);
})

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})