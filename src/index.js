import _ from 'lodash';
import './style.css';

let todoList = [];

const form = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const clearButton = document.querySelector("#clearBtn");

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (e) => {

      e.preventDefault();

      const todo = todoInput.value.trim();
      if (todo.length === 0) {
        showAlert("Add to your list...", "alert-danger");
        return;
      } else {
          // Add new Item
          const itemObj = {
            name: todo
          };
          todoItems.push(itemObj);
          // set local storage
          setLocalStorage(todoItems);
          showAlert("New item has been added.", "alert-success");
        }
  
        getList(todoItems);
        // get list of all items
      }
      console.log(todoItems);
      todoInput.value = "";
    });
  
