const signBtn = document.querySelector('.signBtn');
let timerId;

signBtn.addEventListener('click', event => {
  const id = event.target.dataset.id;
  const i = document.querySelector('i');
  i.remove();
  if (id == 'play') {
    signBtn.innerHTML = `<i class="fas fa-stop"/>`;
    signBtn.setAttribute('data-id', 'stop');
    timerId = setInterval(countdown(), 1000);
  } else {
    signBtn.innerHTML = `<i class="fas fa-play"/>`;
    signBtn.setAttribute('data-id', 'play');
    clearTimeout(timerId);
  }
});

function countdown() {
  alert('1');
  let timeLeft = 10;
  const remainTime = document.querySelector('.remainTime');
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

window.addEventListener('load', () => {});
