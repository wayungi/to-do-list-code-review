import './style.css';
import AppInterface from './ui.js';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.add-item');
const toDosList = document.querySelector('.todos');
const allCompleted = document.querySelector('#remove-completed-tasks');
const refresh = document.querySelector('.fa-rotate');
const userInterface = new AppInterface();

// on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    const length = userInterface.getTasksArrayLength() + 1;
    const task = { description: inputValue, completed: false, index: length };
    const todoTask = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todoTask);
    input.value = '';
    //  update tasksArray & localStorage
    userInterface.updatetasksArray(task);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const tasksArray = userInterface.checkStorage();
  if (tasksArray.length < 1) return;
  tasksArray.forEach((task) => {
    const todoTask = userInterface.addTaskToToDosList(task);
    toDosList.appendChild(todoTask);
  });
});

allCompleted.addEventListener('click', () => {
  userInterface.removeAllChecked();
});

refresh.addEventListener('click', () => {
  userInterface.removeAllChecked();
});
