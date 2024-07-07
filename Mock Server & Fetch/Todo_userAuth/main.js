document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('fetchTodosButton').addEventListener('click', fetchTodos);

let userAuthToken = '';
let userId = '';

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
        username: username,
        password: password
    };

    console.log('Login Data:', loginData);

    try {
        const response = await fetch('https://json-with-auth.onrender.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Response Data:', data);

            userAuthToken = data.accessToken;
            userId = data.user.id;
            localStorage.setItem('localAccessToken', userAuthToken);
            localStorage.setItem('userId', userId);
            document.getElementById('notification').textContent = `hey ${username}, welcome back!`;
        } else {
            const errorText = await response.text(); 
            console.error('Error Data:', errorText);
            alert(`Login failed: ${errorText}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again later.');
    }
}

async function fetchTodos() {
    try {
        const response = await fetch(`https://json-with-auth.onrender.com/todos?userId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${userAuthToken}`
            }
        });

        if (response.ok) {
            const todos = await response.json();
            displayTodos(todos);
        } else {
            alert('Failed to fetch todos.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred ');
    }
}

function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodoCompletion(todo.id, checkbox.checked));

        const text = document.createTextNode(todo.title);

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        todoList.appendChild(listItem);
    });
}

