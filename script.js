// IO Controls
let returnValueOf = () => document.querySelector("#task").value;
const enter = document.querySelector("#enter"); // Button
const out = document.querySelector(".out");

enter.addEventListener("click", () => {
  // Get value of input
  const task = returnValueOf();

  // Create div container
  const content = document.createElement("div");

  // Set div style
  content.setAttribute("class", "task");

  // Add text content
  content.innerHTML = task;

  // Add div to parent element
  out.appendChild(content);
});
