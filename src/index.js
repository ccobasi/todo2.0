import './style.css';
import { addListeners, dragOver } from './drag.js';

const todoList = document.querySelector('.todoList');

const items = document.querySelectorAll('.item');

addListeners(items);
dragOver(todoList);
