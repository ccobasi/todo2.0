import './style.css';
import {todoList, displayList, items, getDragAfterElement,} from './drag';


const list = [
  {
    index: 0,
    description: 'Do laundry',
    completed: false,
  },
  {
    index: 1,
    description: 'Do laundry',
    completed: false,
  },
  {
    index: 2,
    description: 'Do Challenge',
    completed: false,
  },

];

displayList(list);



export { list };