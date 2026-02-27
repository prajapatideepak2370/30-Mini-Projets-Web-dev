const inputBx = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBx.value === ''){
        alert("You must write something! ");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBx.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBx.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === " LI"){
        e.target.classLisst.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();