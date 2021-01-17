// Get HTML objects
const inputField = document.querySelector("#input-field");
const outputContainer = document.querySelector(".output");

// Pressing enter on input field
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const todoInput = inputField.value;

    // Create div for a to-do
    const todoContainer = document.createElement("div");
    todoContainer.innerHTML = todoInput;

    // Create a button for a to-do
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";

    // Set div style
    todoContainer.setAttribute("class", "todo-style");

    // Append
    todoContainer.appendChild(removeButton);
    outputContainer.appendChild(todoContainer);

    removeButton.addEventListener("click", () => {
      todoContainer.remove();
    });
  }
});
