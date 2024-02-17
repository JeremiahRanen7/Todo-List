var container = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
    var noteText = input.value.trim();
    if (noteText !== "") {
        var noteDiv = document.createElement("div");
        noteDiv.className = "note-box";
        
        var noteContent = document.createElement("span");
        noteContent.textContent = noteText;
        noteDiv.appendChild(noteContent);
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteItem;
        noteDiv.appendChild(deleteButton);
        
        container.appendChild(noteDiv);
        
        input.value = "";
    }
}

function deleteItem(event) {
    var noteDiv = event.target.parentElement;
    container.removeChild(noteDiv);
}
