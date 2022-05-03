let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let rgb = document.getElementById('rgb');

let arr = ["b1", "b2", "b3", "b4", "b5", "b6"];

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

b1.style.backgroundColor = `${randomColor()}`;
b2.style.backgroundColor = `${randomColor()}`;
b3.style.backgroundColor = `${randomColor()}`;
b4.style.backgroundColor = `${randomColor()}`;
b5.style.backgroundColor = `${randomColor()}`;
b6.style.backgroundColor = `${randomColor()}`;
let rgbText = arr[Math.floor(Math.random() * arr.length)];
rgb.innerText = `Color is ${rgbText.style.backgroundColor}`;