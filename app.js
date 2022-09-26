let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let rgb = document.getElementById('rgb');
let box = document.getElementsByClassName('box');

let arr = ["b1", "b2", "b3", "b4", "b5", "b6"];

//Genrate Random color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Set Random Color in Box
b1.style.backgroundColor = `${randomColor()}`;
b2.style.backgroundColor = `${randomColor()}`;
b3.style.backgroundColor = `${randomColor()}`;
b4.style.backgroundColor = `${randomColor()}`;
b5.style.backgroundColor = `${randomColor()}`;
b6.style.backgroundColor = `${randomColor()}`;

//Set RGB Value in Indicator

let rgbText = arr[Math.floor(Math.random() * arr.length)];  // Select Ranom box from array
// console.log(rgbText);
rgb.innerText = (document.getElementById(`${rgbText}`).style.backgroundColor).toUpperCase();  // Show RGB Value of that random box


function checkColor(myId) {

    if (myId == rgbText) {
        document.getElementById('win').style.display = 'block';
        document.getElementById('lose').style.display = 'none';
        // box.removeEventListener('click', checkColor);
        for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = `${document.getElementById(`${rgbText}`).style.backgroundColor}`;

        }
        checkColor = () => {
            return true;
        }
    }
    else {
        document.getElementById(`${myId}`).style.display = 'none';
        document.getElementById('lose').style.display = 'block';
        document.getElementById('win').style.display = 'none';
        // document.getElementsByClassName('box').classList.add('clide')
    }
}
