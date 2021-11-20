const todoInput = document.querySelector('.input_todo');
const todoBtn = document.querySelector('.todo_btn');
const todoList = document.querySelector(".todo_list");

 todoList.addEventListener('click', addTodo);

 function addTodo(event) {
     event.preventDefault();
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");
  //create element
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo);
  //check mark btn//
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<h2>jsdg</h2>';
  completeButton.classList.add("complete_btn");
  todoDiv.appendChild(completeButton)
 //check trash btn//
  const trashButton = document.createElement('button');
  trashButton.innerText = '<h2>jsdg</h2>';
  trashButton.classList.add("complete_btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST//
  todoList.appendChild(todoDiv)
 }