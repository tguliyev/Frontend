const number = document.getElementById('number');
const format = document.getElementById('format');
const result = document.getElementById('result');

function formatNumber() {
    const num = number.value;
    result.innerHTML = Number.isInteger(+num)
    ? num.padStart(4, 0)
    : num.padEnd(4, 0);
}

////////////////////////////////////////////////

const input_1 = document.getElementById('input_1');
const input_2 = document.getElementById('input_2');
const flip = document.getElementById('flip');

function changeValues() {
    const value = input_1.value;
    input_1.value = input_2.value;
    input_2.value = value;
}
