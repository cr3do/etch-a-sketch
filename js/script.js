const container = document.getElementById("grid-container");

// generate grid with 16x16 cells
// create 16 row using for loop
for(i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    // populate row with 16 cells using for loop
    for(c = 0; c < 16; c++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        row.appendChild(cell);
    }
    container.appendChild(row);
}


const btnSetGridSize = document.getElementById("btnSetGridSize");
btnSetGridSize.addEventListener("click", generateGrid);

function generateGrid() {
    let txtGridSize = document.getElementById("txtGridSize");
    let gridSize = txtGridSize.value;

    if ((gridSize > 100) || (gridSize < 1)) {
        alert("Please enter grid size between 1 to 100.");
    } else {
        // empty grid container of cells
        container.replaceChildren();

        // generate cells based in user input
        for(i = 0; i < gridSize; i++) {
            const row = document.createElement("div");
            row.setAttribute("class", "row");
    
        for(c = 0; c < gridSize; c++) {
                const cell = document.createElement("div");
                cell.setAttribute("class", "cell");
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
    }
}