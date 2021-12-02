const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

//не активная кнопка STOP
stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();

        bodyEl.style.backgroundColor = randomColor;
    }, 500);

    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function onClickStopBtn() {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
  }
