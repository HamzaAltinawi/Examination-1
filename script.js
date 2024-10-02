
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    
    function addTodo() {
      const todoText = todoInput.value.trim();
  
      if (todoText !== '') {
        
        const li = document.createElement('li');
        li.textContent = todoText;
  
        
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Klar';
        doneBtn.style.marginLeft = '10px';
        doneBtn.onclick = () => li.classList.toggle('done');
  
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Ta bort';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => todoList.removeChild(li);
  
        
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
  
        
        todoInput.value = '';
      }
    }
  
    addBtn.addEventListener('click', addTodo);
  
    todoInput.addEventListener('keypress', (event) => {
      
    });
  });
  