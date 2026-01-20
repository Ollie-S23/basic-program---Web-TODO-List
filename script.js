let todoEntries = document.getElementById("todo_entries");
let submitButton = document.getElementById("submit_button");
let todoInput = document.getElementById("todo_input");

submitButton.addEventListener("click", function() {
    let newEntry = todoInput.value;
    if (newEntry.trim() !== "") {
        let entryParagraph = document.createElement("p");
        entryParagraph.textContent = newEntry;
        todoEntries.appendChild(entryParagraph); 
    }
    todoInput.value = "";
});

