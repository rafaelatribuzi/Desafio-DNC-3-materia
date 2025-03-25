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
    
    if(taskText === "") {
        alert("Por favor, insira o nome da tarefa!");
    return;
       
    }

    //Criação do Item da Lista

    let taskList = document.getElementById ('taskList');
    let listItem = document.createElement ('li');
    listItem.classList.add('task-item');


    //Criando o nome da tarefa

    let taskName = document.createElement('p');
    taskName.classList.add('task-name');
    taskName.textContent = taskText;

    
    
    //Criando a data - O código adiciona a data no formato local.

    let date = new Date().toLocaleDateString(); // Declare uma única vez
    let taskDate = document.createElement('small');
    taskDate.classList.add('task-date');
    taskDate.textContent = `Criado em: ${date}`;

    //Criando a tag
    
    let taskTag = document.createElement('span');
    taskTag.classList.add('task-tag');
    taskTag.textContent = tagText;
    
    //Criando o Botão "Concluir"

    let completedBtn = document.createElement ('button');
    completedBtn.textContent = 'Concluir';
    completedBtn.classList.add ('complete-btn');


    // Criando o ícone de check (inicalmente oculto)
    let checkIcon = document.createElement ('span');
    completedBtn.textContent = 'Concluir';
    checkIcon.classList.add ('check-icon');
    checkIcon.style.display = 'none';


    //Criando o container da tag e data

    let tagDateContainer = document.createElement('div');
    tagDateContainer.classList.add ('tag-date-container');
    tagDateContainer.appendChild (taskTag);
    tagDateContainer.appendChild (taskDate);

    
    
    // Criando o container para a tag, data e botão (alinhamento correto)
    let taskFooter = document.createElement ('div');
    taskFooter.classList.add ('task-footer');
    taskFooter.appendChild(tagDateContainer);
    taskFooter.appendChild (completedBtn);
    


    // Ação ao clicar no botão "Concluir"
    
    completedBtn.onclick = function () {
        if (!listItem.classList.contains('done')) {
            listItem.classList.add('done');
            taskName.style.textDecoration = 'line-through';
            completedTasks++;


            completedBtn.style.display = 'none'; // Esconde o botão "Concluir"
            checkIcon.style.display = 'inline-flex'; //exibe o check
            completedBtn.disabled = true;
        
            document.getElementById('completedCount').textContent = completedTasks;
        }
    };


    // Montando e adicionado os elementos

    
    listItem.appendChild(taskName); // Nome da tarefa
    listItem.appendChild(taskFooter); //Footer com tag, Data e Botão
    listItem.appendChild(completedBtn);
    listItem.appendChild(checkIcon); //Icone de check
    
    taskList.appendChild(listItem); //Adiciona a tarefa à lista


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