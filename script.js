// Vänta tills DOM är laddad
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Funktion för att lägga till uppgift
    function addTodo() {
      const todoText = todoInput.value.trim();
  
      if (todoText !== '') {
        // Skapa nytt list-item
        const li = document.createElement('li');
        li.textContent = todoText;
  
        // Lägg till "klar"-knappen
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Klar';
        doneBtn.style.marginLeft = '10px';
        doneBtn.onclick = () => li.classList.toggle('done');
  
        // Lägg till "ta bort"-knappen
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Ta bort';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => todoList.removeChild(li);
  
        // Lägg till knapparna till list-item
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
  
        // Töm input-fältet
        todoInput.value = '';
      }
    }
  
    // Klick på "Lägg till"-knappen
    addBtn.addEventListener('click', addTodo);
  
    // Tryck på Enter-tangenten för att lägga till
    todoInput.addEventListener('keypress', (event) => {
      
    });
  });
  