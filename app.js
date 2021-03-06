//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event){
  event.preventDefault();

  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo");

  const newTodo = document.createElement('li');
  newTodo.innerText='hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML= `<i classList="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML= `<i classList="fas fa-trash"></i>`;
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);
//append to list
todoList.appendChild(todoDiv);

}