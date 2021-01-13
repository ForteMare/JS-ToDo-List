// IO Controls
let returnValueOf = () => document.querySelector("#task").value;
const enter = document.querySelector("#enter"); // Button
const out = document.querySelector(".out");

enter.addEventListener("click", () => {
  // Get value of input
  const task = returnValueOf();

  // Create div container
  const content = document.createElement("div");
  const remove = document.createElement("button");

  // Set div style
  content.setAttribute("class", "task");
  remove.innerHTML = "Remove";

  remove.addEventListener("click", () => {
    alert("Hi");
  });

  // Add text content
  content.innerHTML = task;
  content.appendChild(remove);

  // Add div to parent element
  out.appendChild(content);
});
