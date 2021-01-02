export default class PopUp {
  constructor() {
    //필요한 것 초기화
    //멤버 변수 3개에 DOM요소 받아서 할당
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick(); // onClick이 있을때만 this.onClick() 실행
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick; // class PopUp 안에 있는 멤버 변수 onClick에 전달받은 onClick 할당
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up--hide');
  }

  hide() {
    this.popUp.classList.add('pop-up--hide');
  }
}
