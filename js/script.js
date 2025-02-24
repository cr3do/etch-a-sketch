const container = document.getElementById("grid-container");

for(i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for(c = 0; c < 16; c++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        row.appendChild(cell);
    }
    container.appendChild(row);
}