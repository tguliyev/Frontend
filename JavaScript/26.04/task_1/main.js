const table = document.getElementById('cedvel')
let kod = ''
let n = 1
let sec = 10

let arr = []
for (let i = 1; i <= 16; i++) {
    arr.push(i)
}

for(let i = 0; i < 4; i++){
    kod += '<tr>';
        for (let j = 0; j < 4; j++) {
            let x = rand(0, arr.length - 1);
            kod += `<td onclick="klik(this)">${arr[x]}</td>`
            arr.splice(x, 1)
        }
    kod += '</tr>';
}

table.innerHTML += kod;

let counter = setInterval(timer,1000)

function klik(td) {
    if (td.innerHTML == n) {
        td.style = 'background : #EEE; color: #AAA';
        if (n < 16) n++
        else gameOver(1)
    }
}

function timer() {
    if (sec >= 0)
        document.getElementsByTagName("caption")[0].innerHTML = sec--
    else gameOver(0)
}

function gameOver(netice) {
    clearInterval(counter)
    renderGameOver()
    alert( netice ? "TEBRIKLER ! UDDUN !" : "UDUZDUN !!!! " )
}

function renderGameOver() {
    let content = [..."GAMEOVER"];

    for (let i = 0; i < table.rows.length; i++) {
        
        table.rows[i].childNodes.forEach(td => {
            if (i > 0 && i < 3) {
                td.innerHTML = content[0]
                td.style = 'background : #000; color: gold'
                content.splice(0, 1)
            } else {
                td.style = 'background : #EEE; color: #AAA'
            }
        });
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
        