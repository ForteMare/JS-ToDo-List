// Input textfield
const enter = document.querySelector("#enter"); // Button
const out = document.querySelector(".out");

enter.addEventListener("click", () => {
  const task = document.querySelector("#task").value;

  const cont = document.createElement("div");
  cont.setAttribute("class", "task");
  cont.innerHTML = task;
  out.appendChild(cont);
});
