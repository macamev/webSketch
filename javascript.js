const container = document.querySelector(".container");
defaultGrid();

function defaultGrid(){
    for (let i = 0; i < 16; i++) {
    
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
    
            cell.addEventListener
            ("mouseover", () => 
                { 
                    cell.style.backgroundColor = 'black';
                }
            );
        }
    
        container.appendChild(row);
    }
}

function createGrid(size)
{
    size = prompt("Enter a number for your new grid")
    for (let i = 0; i < size; i++) {
    
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
    
            cell.addEventListener
            ("mouseover", () => 
                { 
                    cell.style.backgroundColor = 'black';
                }
            );
        }
    
        container.appendChild(row);
    }
}


const btn = document.querySelector(".delete");
btn.addEventListener("click", () => {
    removeGrid();
  });

 function removeGrid(){
    container.innerHTML = '';
    createGrid();
 }

