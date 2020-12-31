const signBtn = document.querySelector('.signBtn');
let timeLeft = 10;
let timerId;
const remainTime = document.querySelector('.remainTime');
const container = document.querySelector('.availSpace');
const remainCarrot = document.querySelector('.remainCarrot');
// music
const alertBg = new Audio('/chap09/sound/alert.wav');
const bgMusic = new Audio('/chap09/sound/bg.mp3');
const bugPull = new Audio('/chap09/sound/bug_pull.mp3');
const carrotPull = new Audio('/chap09/sound/carrot_pull.mp3');
const gameWin = new Audio('/chap09/sound/game_win.mp3');

signBtn.addEventListener('click', event => {
  onClick(event);
});

function onClick(event) {
  const id = event.target.dataset.id;
  const i = document.querySelector('i');
  i.remove();
  if (id == 'play' || id == 'replay') {
    // sound
    bgMusic.play();
    //countdown
    timerId = setInterval(function() {
      countdown();
    }, 1000);
    for (let i = 0; i < 10; i++) {
      randomCarrots();
      randomBugs();
    }
    signBtn.innerHTML = `<i class="fas fa-stop" data-id="stop"/>`;
    signBtn.setAttribute('data-id', 'stop');
  } else {
    gameover();
  }
}
function gameover() {
  bgMusic.pause();
  bgMusic.currentTime = 0;
  clearTimeout(timerId);
  remainTime.innerHTML = `<span>00:00</span>`;
  signBtn.innerHTML = `<i class="fas fa-play" data-id="play"/>`;
  signBtn.setAttribute('data-id', 'play');
  container.innerHTML = '';
  remainCarrot.innerHTML = '<span>10</span>';
  timeLeft = 10;
}

function countdown() {
  if (timeLeft == -1) {
    gameover();
    const carrots = document.querySelectorAll('.carrot');
    if (carrots.length > 0) {
      loseContent();
    }
  } else {
    if (timeLeft == 10) {
      remainTime.innerHTML = `<span>00:${timeLeft}</span>`;
    } else {
      remainTime.innerHTML = `<span>00:0${timeLeft}</span>`;
    }
    timeLeft--;
  }
}

function randomCarrots() {
  const carrot = document.createElement('img');

  const availW = container.offsetWidth - 60;
  const availH = container.offsetHeight - 60;
  carrot.src = '/chap09/img/carrot.png';
  carrot.setAttribute('class', 'carrot');
  carrot.setAttribute('data-id', `carrot`);

  let randomY = Math.round(Math.random() * availH) + 'px';
  let randomX = Math.round(Math.random() * availW) + 'px';
  carrot.style.left = randomX;
  carrot.style.top = randomY;

  container.appendChild(carrot);
}
function randomBugs() {
  const bug = document.createElement('img');

  const availW = container.offsetWidth - 60;
  const availH = container.offsetHeight - 60;
  bug.src = '/chap09/img/bug.png';
  bug.setAttribute('data-id', `bug`);

  let randomY = Math.round(Math.random() * availH) + 'px';
  let randomX = Math.round(Math.random() * availW) + 'px';
  bug.style.left = randomX;
  bug.style.top = randomY;

  container.appendChild(bug);
}

container.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id == 'carrot') {
    event.target.remove();
    //sound
    carrotPull.play();
    //남은 carrot 개수 보여주기
    const carrots = document.querySelectorAll('.carrot');
    remainCarrot.innerHTML = `<span>${carrots.length}</span>`;
    if (carrots.length == 0 && timeLeft >= 0) {
      //sound
      bgMusic.pause();
      bgMusic.currentTime = 0;
      gameWin.play();
    }
  } else if (id == 'bug') {
    gameover();
    bugPull.play();
    loseContent();
  }
});

function loseContent() {
  container.innerHTML = `
    <div class="loseSpace">
      <button class="replayBtn" data-id="replay">
      <i class="fas fa-redo-alt" data-id="replay"></i>
      </button>
      <span>YOU LOSE💩</span>
    </div>`;
  const replayBtn = document.querySelector('.replayBtn');

  replayBtn.addEventListener('click', event => {
    container.innerHTML = '';
    onClick(event);
  });
}
