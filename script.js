// Get HTML objects
const inputField = document.querySelector("#input-field");
const outputContainer = document.querySelector(".output-container");

// Pressing enter on input field
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Get input field value
    const todoInput = inputField.value;

    // Create a div for text in the to-do
    const todoLeft = document.createElement("div");
    todoLeft.innerHTML = todoInput;

    // Create an icon
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash-alt");

    // Create a button for a to-do
    const removeButton = document.createElement("button");

    // Create div for a to-do
    const todoDiv = document.createElement("div");

    // Set div style
    todoDiv.setAttribute("class", "todo-style");

    // Append
    removeButton.appendChild(icon);
    todoDiv.appendChild(todoLeft);
    todoDiv.appendChild(removeButton);
    outputContainer.appendChild(todoDiv);

    removeButton.addEventListener("click", () => {
      todoDiv.remove();
    });
  }
});
