// Get HTML objects
const inputField = document.querySelector("#input-field");
const outputContainer = document.querySelector(".output-container");

// Pressing enter on input field
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const todoInput = inputField.value;

    // Create div for a to-do
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = todoInput;

    // Create a button for a to-do
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";

    // Set div style
    todoDiv.setAttribute("class", "todo-style");

    // Append
    todoDiv.appendChild(removeButton);
    outputContainer.appendChild(todoDiv);

    removeButton.addEventListener("click", () => {
      todoDiv.remove();
    });
  }
});
