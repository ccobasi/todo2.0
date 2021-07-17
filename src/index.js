import './style.css';
import { addListeners, dragOver } from './drag.js';

const todoList = document.querySelector('.todoList');

const items = document.querySelectorAll('.item');

const list = [
  {
    index: 1,
    description: 'brush my teeth',
    completed: true,
  },
  {
    index: 2,
    description: 'Go to school',
    completed: false,
  },
  {
    index: 3,
    description: 'Sleep',
    completed: false,
  },
];

const displayList = (list) => {
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.classList.add('mini-section');
    lists.classList.add('item');
    lists.setAttribute('draggable', 'true');
    lists.innerHTML = `
      <span>
      <input class="check" type="checkbox" id="task-description" name="task-description" value="${e.index}">${e.description}
      <i class="fas fa-ellipsis-v" style="color: gray; float: right;"></i>
      </span>
      `;
    todoList.appendChild(lists);
  });
};

displayList(list);

addListeners(items);
dragOver(todoList);
