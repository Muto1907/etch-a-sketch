const container = document.querySelector("#container");
const newGameBtn = document.querySelector("button");
setUpGrid (16);
newGameBtn.addEventListener("click", () => {
    let size = prompt("Choose the size of the Grid");
    container.textContent = "";
    setUpGrid(size);
})

function setUpGrid (size){
    while(size >100) size = prompt("Maximum Size is 100x100! Please Choose again")
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
