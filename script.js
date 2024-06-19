const container = document.querySelector("#container");
setUpGrid (16);

function setUpGrid (size){
    for(let i = 0; i < size; i ++){
        const div = document.createElement("div")
        div.classList.add("row");
        for(let j = 0; j < size; j++){
            const childDiv = document.createElement("div");
            childDiv.classList.add("column");
            div.appendChild(childDiv);
            childDiv.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "blue")
        }
        container.appendChild(div);
    }
}
