const table1 = document.getElementById('table1')

let html = "";
let style = "background-color: green;";

for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += i == 0 || i == 3 
                    ? `<td style="${style}"></td>`
                    : j == 0 || j == 3 
                        ? `<td style="${style}"></td>` 
                        : `<td></td>`;
    }
    html += "</tr>";
}
table1.innerHTML = html;

///////////////////////////////////////////////////////////

const table2 = document.getElementById('table2')

html = "";
for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += j == 0 || j == 2
                    ? `<td style="${style}"></td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table2.innerHTML = html;

///////////////////////////////////////////////////////////

const table3 = document.getElementById('table3')

html = "";
for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += (i + j) % 2 == 0
                    ? `<td style="${style}"></td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table3.innerHTML = html;

///////////////////////////////////////////////////////////

const table4 = document.getElementById('table4')

html = "";
for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += j > -1 + i
                    ? `<td style="${style}"></td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table4.innerHTML = html;

///////////////////////////////////////////////////////////

const table5 = document.getElementById('table5')

html = "";
for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += i == 1 || i == 3
                    ? `<td style="${style}"></td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table5.innerHTML = html;

///////////////////////////////////////////////////////////

const table6 = document.getElementById('table6')

html = "";
for (let i = 0; i < 4; i++) {
    html += "<tr>";
    for(let j = 0; j < 4; j++) {
        html += j < 4 - i
                    ? `<td style="${style}"></td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table6.innerHTML = html;

///////////////////////////////////////////////////////////

const table7 = document.getElementById('table7')

html = "";
for (let i = 0; i < 8; i++) {
    html += "<tr>";
    for(let j = 0; j < 8; j++) {
        html +=  i < 4
                    ? j > -1 + i && j < 8 -i
                        ? `<td style="${style}"></td>` 
                        : `<td></td>`
                    : j <= 0 + i && j >= 7 -i
                        ? `<td style="${style}"></td>` 
                        : `<td></td>`;
    }
    html += "</tr>";
}
table7.innerHTML = html;