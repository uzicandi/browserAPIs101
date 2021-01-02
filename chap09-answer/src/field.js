'use strict';
const CARROT_SIZE = 80;

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    /* (클래스와) 바인딩 방법
    1. this.onClick = this.onClick.bind(this);
    2. 보통은 arrow function 씀 
    this.field.addEventListener('click', event => this.onClick(event));
    3. 클래스 안에 있는 어떤 함수를 다른 콜백으로 전달할 때는 
    onClick을 멤버변수로 만들고 화살표 함수! 

    ==> 정리 
    this : 어떤 클래스 안에 있는 함수를 다른 콜백으로 전달할 때는 
    그 함수가 포함되어 있는 클래스의 정보가 사라짐 
    그래서 클래스와 함수를 묶을 수 있는 바인딩이 있음 
    1. 함수와 클래스를 바인딩해. 라고 코드 작성 하거나 
    2. 화살표 함수 쓸 수 있음 
    */
    this.field.addEventListener('click', event => this.onClick(event));
  }
  init() {
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png');
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  onClick(event) {
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug');
    }
  }
}
function randomNumber(min, max) {
  // static 함수
  return Math.random() * (max - min) + min;
}
