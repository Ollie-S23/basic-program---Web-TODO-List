let todoEntries = document.getElementById("todo_entries");
let submitButton = document.getElementById("submit_button");
let todoInput = document.getElementById("todo_input");

submitButton.addEventListener("click", function() {
    let newEntry = todoInput.value;
    if (newEntry.trim() !== "") {
        let entryParagraph = document.createElement("p");
        entryParagraph.textContent = newEntry;
        todoEntries.appendChild(entryParagraph);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        entryParagraph.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            todoEntries.removeChild(entryParagraph);
        });

    }
    todoInput.value = "";
});

let clearButton = document.getElementById("clear_button");

clearButton.addEventListener("click", function() {
    todoEntries.innerHTML = "";
});