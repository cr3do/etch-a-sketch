const container = document.getElementById("grid-container");

// get user grid size
function getGridSize() {
    let txtGridSize = document.getElementById("txtGridSize");
    gridSize = txtGridSize.value;

    generateGrid();
}

const btnSetGridSize = document.getElementById("btnSetGridSize");
btnSetGridSize.addEventListener("click", getGridSize);

// set default grid size
let gridSize = 16;
// generate grid
function generateGrid() {

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

    drawGrid();
}
generateGrid();

// color the grid on hover
function drawGrid() {

    // select all cell
    const cells = document.querySelectorAll(".cell");
    // loop to add each cell with hover event listener 
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function() {
            // get current color on color picker
            let color = document.getElementById("inputColorPicker").value;
            cell.setAttribute('style', `background-color: ${color};`);
        });
    });
}


