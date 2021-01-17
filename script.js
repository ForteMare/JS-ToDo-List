// Get HTML objects
const inputField = document.querySelector("#input-field");
const outputContainer = document.querySelector(".output-container");

// Pressing enter on input field
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Get input field value
    const todoInput = inputField.value;

    // Clear input field after pressing enter
    inputField.value = "";

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

    // Append icon to Remove Button
    removeButton.appendChild(icon);

    // Append text div to To-Do div
    todoDiv.appendChild(todoLeft);

    // Append Remove Button to To-Do div
    todoDiv.appendChild(removeButton);

    // Append To-Do div to output container
    outputContainer.appendChild(todoDiv);

    // Add functionality to button to remove parent element
    removeButton.addEventListener("click", () => {
      todoDiv.remove();
    });
  }
});
