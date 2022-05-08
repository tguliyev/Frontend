const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const result = document.getElementById('result')

function calculate() {
    const discriminant = (b.value ** 2) - (4 * a.value * c.value);

    result.innerHTML = discriminant < 0 
                    ? "quadratic equation has no roots" 
                    : discriminant == 0 
                    ? "x = " + -b.value / (2 * a.value) 
                    : "x1 = " + (-(b.value) + Math.sqrt(discriminant)) / (2 * a.value) 
                        + "<br>x2 = " + (-(b.value) - Math.sqrt(discriminant)) / (2 * a.value);
}