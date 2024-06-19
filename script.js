const container = document.querySelector("#container");
for(let i = 0; i < 16; i ++){
    const div = document.createElement("div")
    div.classList.add("row");
    for(let j = 0; j < 16; j++){
        const childDiv = document.createElement("div");
        childDiv.classList.add("column");
        div.appendChild(childDiv);
        childDiv.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "blue")
    }
    container.appendChild(div);
}