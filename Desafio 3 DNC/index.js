let completedTasks = 0;

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("create-todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
    });
});


function addTask() {
    //Captura dos Inputs

    let taskInput = document.getElementById('taskInput');
    let tagInput = document.getElementById('tagInput');
    let taskText = taskInput.value.trim();
    let tagText = tagInput.value.trim();
    
    if(taskText === "") return;

    //Criação do Item da Lista

    let taskList = document.getElementById ('taskList');
    let listItem = document.createElement ('li');

    //Adicionando Data e Formatação

    let date = new Date().toLocaleString();
    let taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
    taskHeader.innerHTML = `<span>${taskText} <small> (${date}) </small></span> <strong>${tagText ? '[' + tagText + ']' : ''}</strong>`;

    // Criando o Botão "Excluir"

    /*let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Excluir";
    deleteBtn.onclick = function () {
        listItem.classList.add ('done');
    };*/

    //Criando o Botão "Concluir"

    let completedBtn = document.createElement ('button');
    completedBtn.textContent = 'Concluir';
    completedBtn.onclick = function () {
        if (!listItem.classList.contains('done')) {
            listItem.classList.add('done');
            taskHeader.style.textDecoration = 'line-through';
            completedTasks++;
            completedBtn.innerHTML = '✔️';
            completedBtn.disabled = true;
        }
        document.getElementById('completedCount').textContent = completedTasks;
    };


    // Montando e adicionado à Lista

    listItem.appendChild(taskHeader);
    //listItem.appendChild(deleteBtn);
    listItem.appendChild(completedBtn);
    taskList.appendChild(listItem);


    // Limpando os campos

    taskInput.value = "";
    tagInput.value = "";    


}







































/*let tasks = [
    { id: 1, description: 'Comprar pão', checked: false},
    { id: 1, description: 'Passear crianças', checked: false},
    { id: 1, description: 'Fazer o almoço', checked: false},
]

    const getCheckBoxInput = ({id, description, checked}) => {
        const checkbox = document.createElement ('input');
        const label = document.createElement ('label');
        const wrapper = document.createElement ('div'); 
        const checkboxId = `${id} - checkbox`;

        checkbox.type = 'checkbox';
        checkbox.id = checkboxId;
        checkbox.checked = checked;
        
        label.textContent = description;
        label.htmlFor = checkboxId;


        wrapper.className = 'checkbox-label-container';
        wrapper.appendChild (checkbox);
        wrapper.appendChild (label);

        return wrapper;

    }


window.onload = function() {
    tasks.forEach ((task) => {
        const checkbox = getCheckBoxInput(task);
        
        const list = document.getElementById ('todo-list');
        const toDo = document.createElement ('li');
        //const button = document.createElement ('button');

        toDo.id = task.id;
        toDo.appendChild (checkbox);
        // toDo.appendChild(button);

        list.appendChild (toDo);

       

    })
}*/