const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let interval;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBg(colorsArray) {
    const randomColor = randomIntegerFromInterval(0, colorsArray.length - 1);
    body.style.background = colorsArray[randomColor];

}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    interval = setInterval(() => {
        changeBg(colors);
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(interval);

});



