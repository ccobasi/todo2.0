import './style.css';

const list = [
  {
    index: 1,
    description: 'Do laundry',
    completed: true,
  },
  {
    index: 2,
    description: 'Do laundry',
    completed: false,
  },

];

const todoList = document.querySelector('.todoList');

const displayList = (list) => {
  list.forEach((e) => {
    const lists = document.createElement('div');
    lists.innerHTML = `
    
      <div class="mini-section item">
      <input class="check" type="checkbox" id="todo-description" name="todo-description" value="${e.index}">${e.description}
      <i class="fas fa-ellipsis-v" style="color: gray; float: right;"></i>
      </div>
      `;

    todoList.appendChild(lists);
  });
};

displayList(list);
