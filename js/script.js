const container = document.getElementById("grid-container");
let txtGridSize = document.getElementById("txtGridSize");
let gridValue = document.getElementById("gridValue");

txtGridSize.addEventListener("input", setGridSize);

// set default grid size
let gridSize = 16;
gridValue.textContent = gridSize;

// get user grid size
function setGridSize() {
    gridSize = txtGridSize.value;
    gridValue.textContent = txtGridSize.value
    generateGrid();
}

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


let colorMode;
// color the grid on hover
function drawGrid() {
    // select all cell
    const cells = document.querySelectorAll(".cell");
    // loop to add each cell with hover event listener 
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function() {
            // get current color on color picker
            getColorMode;

            if(colorMode === "color") {
                color = document.getElementById("inputColorPicker").value;
                console.log("normal");
            } else if (colorMode === "randomize") {
                let randomRed = Math.floor(Math.random() * 254);
                let randomGreen = Math.floor(Math.random() * 254);
                let randomBlue = Math.floor(Math.random() * 254);
                color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
                console.log("random");
            }

            cell.setAttribute('style', `background-color: ${color};`);
        });
    });
}

let btnColorNormal = document.getElementById("btnColorNormal");
let btnColorRandom = document.getElementById("btnColorRandom");
btnColorNormal.addEventListener("click", getColorMode);
btnColorRandom.addEventListener("click", getColorMode);

function getColorMode() {    
    if(this.id === "btnColorNormal") {
        // set default mode
        colorMode = 'color';
        // highlight selected button and remove the other
        btnColorRandom.removeAttribute('class', 'active');
        btnColorNormal.setAttribute('class', 'active');
    } else if (this.id === "btnColorRandom") {
        colorMode = 'randomize';
        btnColorNormal.removeAttribute('class', 'active');
        btnColorRandom.setAttribute('class', 'active');
    }
}


