const itemList = document.querySelector('.item-list');
const plusItem = document.querySelector('.plus-item');

// plus_item.addEventListener('click', () => {
//   item_list.appendChild(li);
// });

let items = [];

function paintItem() {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = items.length + 1;

  delBtn.innerText = 'X';
  delBtn.addEventListener('click', deleteItem);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;

  itemList.appendChild(li);
  const itemObj = {
    text: text,
    id: newId
  };
  items.push(itemObj);
}

function handleSubmit(e) {
  e.preventDefault();
}
