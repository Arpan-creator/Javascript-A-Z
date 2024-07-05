document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos';
    const todoList = document.getElementById('todo-list');
  
    async function fetchTodos() {
      try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        addToDOM(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
  
    function addToDOM(todos) {
      todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        if (todo.completed) {
          listItem.style.textDecoration = 'line-through';
        }
        todoList.appendChild(listItem);
      });
    }
  
    fetchTodos();
  });
  