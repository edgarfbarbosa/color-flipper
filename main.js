const color = document.querySelector('.color');

const btn = document.getElementById('btn');
const colors = ['red', 'green', 'blue'];

const hexBtn = document.getElementById('hexBtn');
const colorsHex = ['#FF0000', '#00FF00', '#0000FF'];

const rgbBtn = document.getElementById('rgbBtn');
const colorsRgb = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function() {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumberHex() {
    return Math.floor(Math.random() * colorsHex.length);
}

hexBtn.addEventListener('click', () => {
    let randomNumberHex = getRandomNumberHex();
    document.body.style.backgroundColor = colorsHex[randomNumberHex];
    color.textContent = colorsHex[randomNumberHex];
})

function getRandomNumberRgb() {
    return Math.floor(Math.random() * colorsRgb.length);
}

rgbBtn.addEventListener('click', () => {
    let randomNumberRgb = getRandomNumberRgb();
    document.body.style.backgroundColor = colorsRgb[randomNumberRgb];
    color.textContent = colorsRgb[randomNumberRgb];
})