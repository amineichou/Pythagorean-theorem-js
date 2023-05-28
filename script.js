let triangle = document.getElementById("triangle");

let lineA = 5;
let lineB = 5;

const pythagoreanTheorem = (a, b) => {
    triangle.style.border = `${a}cm solid transparent`;
    triangle.style.borderLeft = `${b}cm solid #4b0a80`;
    triangle.style.borderTop = 0;
    document.getElementById('setC').value = Math.sqrt((a * a) + (b * b)).toFixed(2);
}

document.getElementById('setA').addEventListener('change', function (e) {
    lineA = e.target.value;
    pythagoreanTheorem(lineA, lineB);
});

document.getElementById('setB').addEventListener('change', function (e) {
    lineB = e.target.value;
    pythagoreanTheorem(lineA, lineB);
})

pythagoreanTheorem(lineA, lineB);