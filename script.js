// IO Get
const inputField = document.querySelector("#task");
const out = document.querySelector(".out");

// TODO: Code is messy af, clean it up
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Get value of input
    // const task = returnValueOf();
    const task = inputField.value;

    // Create div container
    const content = document.createElement("div");
    const remove = document.createElement("button");

    // Set div style
    content.setAttribute("class", "task");
    remove.innerHTML = "Remove";

    // Add text content
    content.innerHTML = task;
    content.appendChild(remove);

    // Add div to parent element
    out.appendChild(content);

    remove.addEventListener("click", () => {
      content.remove();
    });
  }
});
