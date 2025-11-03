const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Array to store todos
let todos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos saved to localStorage:', todos);
}

function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
        console.log('Todos loaded from localStorage:', todos);
    }
    renderTodos();
}

function renderTodos() {
    // Clear current list
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
        return;
    }
    
    // Render each todo item
    todos.forEach(function(todo, index) {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function() {
            toggleTodo(index);
        });
        
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = todo.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteTodo(index);
        });
        
        // Append elements to list item
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

/**
 * Adds a new todo to the list
 */
function addTodo() {
    const text = todoInput.value.trim();
    
    // Validate input
    if (text !== '') {
        todos.push({
            text: text,
            completed: false
        });
        todoInput.value = ''; // Clear input field
        saveTodos();
        renderTodos();
        console.log('Todo added:', text);
    } else {
        alert('Please enter a task!');
    }
}

/*** Toggles the completion status of a todo*/
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
    console.log('Todo toggled:', todos[index].text, 'Completed:', todos[index].completed);
}
function deleteTodo(index) {
    const deletedTodo = todos[index].text;
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
    console.log('Todo deleted:', deletedTodo);
}

// Event listener for add button
addTodoBtn.addEventListener('click', addTodo);

// Event listener for Enter key in input field
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Load todos when page loads
loadTodos();

console.log('To-Do List initialized ✓');