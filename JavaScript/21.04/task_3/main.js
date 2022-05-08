const table1 = document.getElementById('table1')

let html = "";
let style = "background-color: green;";
let counter = 0;

for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += `<td>${++counter}</td>`
    }
    html += "</tr>";
}
table1.innerHTML = html;

///////////////////////////////////////////////////////////

const table2 = document.getElementById('table2')

html = "";
counter = 0;
for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += (i + j) % 2 == 0
                    ? `<td>0</td>` 
                    : `<td>1</td>`;
    }
    html += "</tr>";
}
table2.innerHTML = html;

///////////////////////////////////////////////////////////

const table3 = document.getElementById('table3')

html = "";
for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += `<td>${i + 1 + j}</td>`;
    }
    html += "</tr>";
}
table3.innerHTML = html;

///////////////////////////////////////////////////////////

const table4 = document.getElementById('table4')

html = "";
for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += `<td>${j + 1}</td>`;
    }
    html += "</tr>";
}
table4.innerHTML = html;

///////////////////////////////////////////////////////////

const table5 = document.getElementById('table5')

html = "";
for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += j < i + 1
                    ? `<td>${j + 1}</td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table5.innerHTML = html;

///////////////////////////////////////////////////////////

const table6 = document.getElementById('table6')

html = "";
for (let i = 0; i < 5; i++) {
    html += "<tr>";
    for(let j = 0; j < 5; j++) {
        html += j % 2 == 0
                    ? `<td>${j + 1}</td>` 
                    : `<td></td>`;
    }
    html += "</tr>";
}
table6.innerHTML = html;

///////////////////////////////////////////////////////////

const table7 = document.getElementById('table7')

html = "";
let reverseCounter = 0;
for (let i = 0; i < 7; i++) {
    reverseCounter = 0;
    counter = 0;
    html += "<tr>";
    for(let j = 0; j < 7; j++) {
        html +=  i < 3
                    ? j <= 3 && j > -1 + i
                        ? `<td>${reverseCounter++ + 1}</td>` 
                        : j > -1 + i && j < 7 -i
                            ? `<td>${reverseCounter++ + 1 - (counter+=2)}</td>`
                            : `<td></td>`
                    : i == 3 && j == 3
                        ? `<td>1</td>` 
                        : i > 3
                            ? j > 5 - i && j < 4
                                ? `<td>${reverseCounter++ + 1}</td>`
                                : j >= 4 && j < i + 1
                                    ? `<td>${reverseCounter++ + 1 - (counter+=2)}</td>`
                                    : `<td></td>`
                            : `<td></td>`;
    }
    html += "</tr>";
}
table7.innerHTML = html;