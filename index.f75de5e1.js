"use strict";
const table = document.querySelector("table");
const rows = table.rows;
for (const row of rows){
    const copiedColumn = row.cells[1].cloneNode(true);
    row.lastElementChild.before(copiedColumn);
}

//# sourceMappingURL=index.f75de5e1.js.map
