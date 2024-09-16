const container = document.querySelector("#container");
const q1 = document.createElement("p");
q1.style.cssText = "color: red; font-size: 50px;";
q1.innerHTML = "I'm red!"
container.appendChild(q1);

const q2 = document.createElement("h3");
q2.style.cssText = "color: blue; font-size: 50px;";
q2.innerHTML = "I'm a blue h3!"
container.appendChild(q2);

const q3 = document.createElement("div");
q3.setAttribute("style", "border: solid black 2px; background-color: pink");
const h1 = document.createElement("h1");
h1.textContent = "Im in a div";
const p = document.createElement("p");
p.textContent = "me too!";
q3.appendChild(h1);
q3.appendChild(p);
container.appendChild(q3);
