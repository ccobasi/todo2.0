import './style.css';
import {list,store} from './index';

const todoList = document.querySelector('.todoList');

const displayList = (list) => {
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.innerHTML = `
    
      <div class="mini-section item" draggable="true">
      <input class="check" type="checkbox" id="todo-description" name="todo-description" value="${e.index}">${e.description}
      <i class="fas fa-ellipsis-v" style="color: gray; float: right;"></i>
      </div>
      `;

    todoList.appendChild(lists);
    

  });
};

displayList(list);

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('dragstart', ()=>{
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', ()=> {
    item.classList.remove('dragging');
  });
});

todoList.addEventListener('dragover', (e)=>{
  e.preventDefault();

  const afterElement = getDragAfterElement(todoList, e.clientY);
  const item = document.querySelector('.dragging');
  console.log(afterElement);
  if(afterElement !== null){
    todoList.insertBefore(item,afterElement);
  }


});

function getDragAfterElement(todoList, y){

  const draggableElements = [...todoList.querySelectorAll('.item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {

    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if(offset < 0 && offset > closest.offset){
      return {offset: offset, element: child }
    } else {
      return closest;
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element;
}

export {
    todoList, displayList, items, getDragAfterElement
  };