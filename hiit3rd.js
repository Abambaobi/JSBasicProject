function addFruit() {
  const inputBar = document.querySelector("input");
  const inputValue = inputBar.value;
  const li = document.createElement("li");

  if (inputValue === "") {
  } else {
    li.innerText = inputValue;
    const remover = document.createElement("button");
    remover.classList.add("remover");
    remover.innerText = "Remove";
    const ul = document.querySelector("ul");
    li.appendChild(remover);
    ul.appendChild(li);

    passer(remover);
  }
}

function passer(remover) {
  remover.onclick = deleter;
  function deleter() {
    remover.parentNode.remove();
  }
}
