// selectors
const itemList = document.querySelector('.item-list');
const inputItem = document.querySelector('.input-item');
const plusItem = document.querySelector('.plus-item');
const form = document.querySelector('#form');

// event listeners (enter, button 동시에 )
form.addEventListener('submit', e => {
  e.preventDefault();
  handleSubmit(e);
});

let items = [];

function paintItem(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = items.length + 1;

  delBtn.innerText = 'X';
  delBtn.addEventListener('click', deleteItem);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  li.className = 'each-item';

  itemList.appendChild(li);
  const itemObj = {
    text: text,
    id: newId
  };
  items.push(itemObj);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = inputItem.value;
  paintItem(currentValue);
  inputItem.value = '';
}

function deleteItem(e) {
  const deleteItem = e.target.parentElement;
  deleteItem.remove();
}
