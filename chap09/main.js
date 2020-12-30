const signBtn = document.querySelector('.signBtn');
let timeLeft = 10;
let timerId;
const remainTime = document.querySelector('.remainTime');
const container = document.querySelector('.availSpace');

signBtn.addEventListener('click', event => {
  onClick(event);
});

function onClick(event) {
  const id = event.target.dataset.id;
  const i = document.querySelector('i');
  i.remove();
  if (id == 'play') {
    timerId = setInterval(function() {
      countdown();
    }, 1000);
    for (let i = 0; i < 10; i++) {
      randomImages();
    }
    signBtn.innerHTML = `<i class="fas fa-stop" data-id="stop"/>`;
    signBtn.setAttribute('data-id', 'stop');
  } else {
    clearTimeout(timerId);
    remainTime.innerHTML = `<span>00:00</span>`;
    timeLeft = 10;
    signBtn.innerHTML = `<i class="fas fa-play" data-id="play"/>`;
    signBtn.setAttribute('data-id', 'play');
    container.innerHTML = '';
  }
}

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    //doneAlert();
  } else {
    if (timeLeft == 10) {
      remainTime.innerHTML = `<span>00:${timeLeft}</span>`;
    } else {
      remainTime.innerHTML = `<span>00:0${timeLeft}</span>`;
    }
    timeLeft--;
  }
}

function randomImages() {
  const img = document.createElement('img');

  const availW = container.offsetWidth - 60;
  const availH = container.offsetHeight - 60;
  img.src = '/chap09/img/carrot.png';

  let randomY = Math.round(Math.random() * availH) + 'px';
  let randomX = Math.round(Math.random() * availW) + 'px';
  img.style.left = randomX;
  img.style.top = randomY;

  container.appendChild(img);
}

window.addEventListener('load', () => {});
