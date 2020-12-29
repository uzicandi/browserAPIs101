// 이벤트 위임 실습

const items = document.querySelector('.item-list');
const input = document.querySelector('.input-item');
const addBtn = document.querySelector('.plus-item');

// 이벤트를 처리하는 함수 = on
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text == '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  // 5. 인풋을 초기화 한다.
  input.value = '';
  input.focus();
}

let id = 0; // UUID (unique id 써야하지만..)
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
          <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
              <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
          </div>
          <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

// 이벤트 위임
items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {
    // id가 있다면
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
