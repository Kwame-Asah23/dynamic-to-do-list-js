
document.addEventListener('DOMContentLoaded', function () {

    const addButon = document.getElementById("add-task-btn");
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task ");
            return;
        }


        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element
        const removeButton = document.createElement('button');

        // Set the text content of the button to "Remove"
        removeButton.textContent = 'Remove';

        // Assign a class name to the button
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button to remove the <li> element
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);

            // Append the remove button to the taskItem
            taskItem.appendChild(removeButton);

            // Append the taskItem to the taskList
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = '';
        };

    }


    addButon.addEventListener('click', addTask);

    // Add an event listener for the 'Enter' keypress in taskInput
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


})