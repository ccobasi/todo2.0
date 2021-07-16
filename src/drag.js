import getTodo from './complete.js';

const addListeners = (elements) => {
  elements.forEach((item) => {
    item.addEventListener('dragstart', () => {
      item.classList.add('dragging');

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');

        console.log(Array.prototype.indexOf.call(item.parentElement, item));
      });
    });
  });
};

function getDragAfterElement(todoList, y) {
  const draggableElements = [...todoList.querySelectorAll('.item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

const items = document.querySelectorAll('.item');

export const dragOver = (todoList) => {
  todoList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(todoList, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement === undefined) {
      todoList.appendChild(draggable);
    } else {
      todoList.insertBefore(draggable, afterElement);
    }
    getTodo(todoList);
  });
};

export {
  addListeners, items, getDragAfterElement,
};
